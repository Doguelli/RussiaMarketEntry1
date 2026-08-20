// Build-time script: reads plain-text blog fields from content/blog/*.md and
// asks Gemini to structure each language's text into a fixed, whitelisted
// block schema (heading/paragraph/bulletList/calloutBox/statGrid). Languages
// are fully independent — a post can exist in only one language. If
// `autoTranslate` is set on a post, languages left empty by the admin are
// filled in by translating + structuring from whichever language was
// actually written, WITHOUT ever overwriting manually authored content.
//
// Security notes:
// - This runs only during the Netlify build (server-side), never in the browser.
// - GEMINI_API_KEY is read from the build environment only.
// - There is no public endpoint here — nothing external can trigger this script.
// - The AI's JSON response is strictly whitelist-validated before being written
//   to disk; unknown block types/fields are dropped.
// - If the API key is missing or a call fails, the post falls back to a single
//   plain paragraph block (untranslated content is never mislabeled as a
//   translation — a language that can't be produced is simply left absent).
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { GoogleGenAI, Type } from "@google/genai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {} };
  const data = yaml.load(match[1]) || {};
  return { data };
}

const CONTENT_DIR = toAbsolute("content/blog");
const OUTPUT_DIR = toAbsolute("content/blog-generated");

const CATEGORY_LABELS = {
  pazaryerleri: "Pazaryerleri (Wildberries, Ozon, Lamoda vb.)",
  lojistik: "Lojistik & Depo",
  "hukuk-sirket": "Hukuk & Şirket Kuruluşu",
  "vergi-finans": "Vergi & Finans",
  "pazarlama-buyume": "Pazarlama & Büyüme",
  genel: "Genel",
};

const CATEGORY_KEYS = Object.keys(CATEGORY_LABELS);
function validCategory(v) {
  return CATEGORY_KEYS.includes(v) ? v : "genel";
}

const LANGS = ["tr", "en", "ru"];
const LANG_LABELS = { tr: "Türkçe", en: "İngilizce", ru: "Rusça" };

const blockSchema = {
  type: Type.OBJECT,
  properties: {
    type: {
      type: Type.STRING,
      enum: ["heading", "paragraph", "bulletList", "calloutBox", "statGrid"],
    },
    level: { type: Type.STRING, enum: ["2", "3"] },
    title: { type: Type.STRING },
    text: { type: Type.STRING },
    items: { type: Type.ARRAY, items: { type: Type.STRING } },
    statItems: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          label: { type: Type.STRING },
          value: { type: Type.STRING },
        },
        required: ["label", "value"],
      },
    },
  },
  required: ["type"],
};

const blocksArraySchema = { type: Type.ARRAY, items: blockSchema };

const structuredResponseSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    excerpt: { type: Type.STRING },
    category: { type: Type.STRING, enum: CATEGORY_KEYS },
    blocks: blocksArraySchema,
  },
  required: ["title", "excerpt", "category", "blocks"],
};

const translateResponseSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    excerpt: { type: Type.STRING },
    blocks: blocksArraySchema,
  },
  required: ["title", "excerpt", "blocks"],
};

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

// Whitelist validation — only known block types/fields survive.
function sanitizeBlocks(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const b of raw) {
    if (!b || typeof b !== "object") continue;
    switch (b.type) {
      case "heading":
        if (isNonEmptyString(b.text)) {
          out.push({ type: "heading", level: b.level === "3" ? 3 : 2, text: b.text });
        }
        break;
      case "paragraph":
        if (isNonEmptyString(b.text)) out.push({ type: "paragraph", text: b.text });
        break;
      case "bulletList": {
        const items = Array.isArray(b.items) ? b.items.filter(isNonEmptyString) : [];
        if (items.length > 0) {
          out.push({
            type: "bulletList",
            title: isNonEmptyString(b.title) ? b.title : undefined,
            items,
          });
        }
        break;
      }
      case "calloutBox":
        if (isNonEmptyString(b.text)) {
          out.push({
            type: "calloutBox",
            title: isNonEmptyString(b.title) ? b.title : undefined,
            text: b.text,
          });
        }
        break;
      case "statGrid": {
        const items = Array.isArray(b.statItems)
          ? b.statItems
              .filter((it) => it && isNonEmptyString(it.label) && isNonEmptyString(it.value))
              .map((it) => ({ label: it.label, value: it.value }))
          : [];
        if (items.length > 0) out.push({ type: "statGrid", items });
        break;
      }
      default:
        break;
    }
  }
  return out;
}

function fallbackBlocks(plainText) {
  return [{ type: "paragraph", text: plainText.trim() }];
}

const genConfig = (schema) => ({
  responseMimeType: "application/json",
  responseSchema: schema,
  maxOutputTokens: 8192,
  // Without a cap, this model spends 500+ tokens "thinking" before answering,
  // which for longer posts left too little room in maxOutputTokens and
  // truncated the JSON mid-string. A small fixed budget keeps it fast and
  // leaves the rest of the token budget for the actual structured output.
  thinkingConfig: { thinkingBudget: 1024 },
});

// Structures already-in-the-right-language plain text into {title, excerpt, category, blocks}
// (no translation). If the admin already provided a title/excerpt, the model
// is told to reuse them verbatim (and not repeat the title inside the body);
// otherwise it derives a suitable title/excerpt from the text itself.
// If `fixedCategory` is given, the model is told to use that exact category
// (used for the 2nd/3rd manually-authored language of a post, so every
// language of the same post shares one color scheme); otherwise it classifies
// the text into the best-fitting category from the fixed whitelist itself.
async function structureText(ai, plainText, lang, existingTitle, existingExcerpt, fixedCategory) {
  const langLabel = LANG_LABELS[lang] || "Türkçe";

  const titleInstruction = isNonEmptyString(existingTitle)
    ? `Başlık zaten belirlenmiş: "${existingTitle}" — bunu birebir "title" alanına koy, değiştirme, gövdede tekrar etme.`
    : `Metnin başında zaten bir başlık gibi görünen, ayrı duran bir ifade varsa onu "title" alanına ayır ve gövdede TEKRARLAMA. Yoksa, metne uygun kısa ve dikkat çekici bir başlık üret.`;

  const excerptInstruction = isNonEmptyString(existingExcerpt)
    ? `Özet zaten belirlenmiş: "${existingExcerpt}" — bunu birebir "excerpt" alanına koy.`
    : `Metne uygun 1-2 cümlelik bir özet üret, "excerpt" alanına yaz.`;

  const categoryList = CATEGORY_KEYS.map((k) => `  - ${k}: ${CATEGORY_LABELS[k]}`).join("\n");
  const categoryInstruction = fixedCategory
    ? `Kategori zaten belirlendi: "${fixedCategory}" — "category" alanına tam olarak bu değeri yaz.`
    : `Metnin konusuna en uygun kategoriyi aşağıdaki listeden seç ve "category" alanına o kategorinin anahtarını (iki nokta üst üstenin solundaki kısa kod, örn. "lojistik") yaz. Hiçbiri net şekilde uymuyorsa "genel" yaz:\n${categoryList}`;

  const prompt = `Sen bir blog editörüsün. Sana düz metin olarak verilen bir blog yazısını, ANLAMINI VE DİLİNİ DEĞİŞTİRMEDEN, bir başlık + özet + kategori + okunabilir bölümlere ayıracaksın.

Metnin dili: ${langLabel} (çıktıdaki tüm metinleri de bu dilde yaz, çeviri yapma).

Kurallar:
- ${titleInstruction}
- ${excerptInstruction}
- ${categoryInstruction}
- Metindeki hiçbir bilgiyi uydurma, ekleme veya çıkarma; sadece verilen içeriği yeniden düzenle.
- "blocks" alanına, gövde metnini (başlık/özet hariç) şu kurallarla yapılandırılmış olarak yaz:
  - Ana temaları "heading" bloklarıyla başlıklandır (level 2 ana başlık, level 3 alt başlık).
  - Açıklama cümlelerini "paragraph" bloğuna koy.
  - Maddeler halinde sayılabilecek bilgileri "bulletList" bloğuna çevir (items: string dizisi).
  - Metinde açıkça öne çıkan, vurgulanması gereken bir nokta varsa "calloutBox" bloğuna koy.
  - Metinde geçen sayısal istatistikleri/rakamları (yüzdeler, adetler, tutarlar) "statGrid" bloğuna koy (statItems: {label, value} dizisi).
- Sadece verilen JSON şemasına uyan bir obje üret.

Metin:
"""
${plainText.trim()}
"""`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: genConfig(structuredResponseSchema),
  });

  const raw = JSON.parse(response.text ?? "{}");
  const blocks = sanitizeBlocks(raw.blocks);
  return {
    title: isNonEmptyString(existingTitle) ? existingTitle : isNonEmptyString(raw.title) ? raw.title : "",
    excerpt: isNonEmptyString(existingExcerpt) ? existingExcerpt : isNonEmptyString(raw.excerpt) ? raw.excerpt : "",
    // Never trust the AI's echo blindly, even when a fixed category was given.
    category: fixedCategory ? validCategory(fixedCategory) : validCategory(raw.category),
    blocks: blocks.length > 0 ? blocks : fallbackBlocks(plainText),
  };
}

// Translates title/excerpt/body from sourceLang into targetLang AND structures
// the translated body into blocks, in a single call.
async function translateAndStructure(ai, source, categoryKey, targetLang) {
  const categoryLabel = CATEGORY_LABELS[categoryKey] || CATEGORY_LABELS.genel;
  const sourceLangLabel = LANG_LABELS[source.lang] || source.lang;
  const targetLangLabel = LANG_LABELS[targetLang] || targetLang;

  const prompt = `Sen profesyonel bir çevirmen ve blog editörüsün. Aşağıdaki blog yazısını ${sourceLangLabel} dilinden ${targetLangLabel} diline çevireceksin ve aynı anda okunabilir bölümlere ayıracaksın.

Konu kategorisi: ${categoryLabel}.

Kurallar:
- Anlamı birebir koru, hiçbir bilgi uydurma/ekleme/çıkarma yapma — sadece dili değiştir.
- "title" alanına başlığın ${targetLangLabel} çevirisini yaz.
- "excerpt" alanına özetin ${targetLangLabel} çevirisini yaz.
- "blocks" alanına, çevrilmiş gövde metnini şu kurallarla yapılandırılmış olarak yaz:
  - Ana temaları "heading" bloklarıyla başlıklandır (level 2 ana başlık, level 3 alt başlık).
  - Açıklama cümlelerini "paragraph" bloğuna koy.
  - Maddeler halinde sayılabilecek bilgileri "bulletList" bloğuna çevir (items: string dizisi).
  - Öne çıkan/vurgulanması gereken bir nokta varsa "calloutBox" bloğuna koy.
  - Sayısal istatistikleri/rakamları "statGrid" bloğuna koy (statItems: {label, value} dizisi).
- Sadece verilen JSON şemasına uyan bir obje üret.

Orijinal başlık (${sourceLangLabel}):
"""${source.title || ""}"""

Orijinal özet (${sourceLangLabel}):
"""${source.excerpt || ""}"""

Orijinal gövde metni (${sourceLangLabel}):
"""
${source.body.trim()}
"""`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: genConfig(translateResponseSchema),
  });

  const raw = JSON.parse(response.text ?? "{}");
  const blocks = sanitizeBlocks(raw.blocks);
  return {
    title: isNonEmptyString(raw.title) ? raw.title : source.title || "",
    excerpt: isNonEmptyString(raw.excerpt) ? raw.excerpt : source.excerpt || "",
    blocks: blocks.length > 0 ? blocks : fallbackBlocks(source.body),
  };
}

async function main() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log("content/blog bulunamadı, üretilecek yazı yok.");
    return;
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

  if (!ai) {
    console.warn("GEMINI_API_KEY tanımlı değil — yazılar düz paragraf olarak render edilecek, otomatik çeviri yapılamayacak.");
  }

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = parseFrontmatter(raw);

    // Per-language "is this language published at all" toggle — replaces the
    // old single autoTranslate flag. A disabled language is never published,
    // even if it has manually authored text sitting in it. An enabled
    // language with no manual text gets auto-translated from whichever other
    // language has text (preferring TR as the source when available).
    const enabled = {
      tr: data.enableTr !== false,
      en: data.enableEn !== false,
      ru: data.enableRu !== false,
    };

    const manual = {
      tr: { title: data.tr?.title, excerpt: data.tr?.excerpt, body: data.tr?.body },
      en: { title: data.en?.title, excerpt: data.en?.excerpt, body: data.en?.body },
      ru: { title: data.ru?.title, excerpt: data.ru?.excerpt, body: data.ru?.body },
    };

    const authoredLangs = LANGS.filter((l) => isNonEmptyString(manual[l].body));
    if (authoredLangs.length === 0) {
      console.warn(`Uyarı: ${slug} için hiçbir dilde içerik girilmemiş, atlanıyor.`);
      continue;
    }
    // Prefer TR as the translation source when available, otherwise whichever was written first.
    const sourceLang = authoredLangs.includes("tr") ? "tr" : authoredLangs[0];

    // The category is decided once from the source language's content, and
    // reused for every other language of this same post — so a post always
    // has one consistent color scheme regardless of which languages exist.
    let category = "genel";

    for (const lang of LANGS) {
      const outPath = path.join(OUTPUT_DIR, `${slug}.${lang}.json`);

      if (!enabled[lang]) {
        if (fs.existsSync(outPath)) fs.rmSync(outPath);
        console.log(`Atlandı: ${slug}.${lang}.json (bu dil kapalı)`);
        continue;
      }

      const isAuthored = isNonEmptyString(manual[lang].body);

      if (isAuthored) {
        const fixedCategory = lang === sourceLang ? undefined : category;
        let result;
        try {
          result = ai
            ? await structureText(ai, manual[lang].body, lang, manual[lang].title, manual[lang].excerpt, fixedCategory)
            : {
                title: manual[lang].title || "",
                excerpt: manual[lang].excerpt || "",
                category: fixedCategory || "genel",
                blocks: fallbackBlocks(manual[lang].body),
              };
        } catch (err) {
          console.error(`Gemini hata verdi (${slug}, ${lang}):`, err.message);
          result = {
            title: manual[lang].title || "",
            excerpt: manual[lang].excerpt || "",
            category: fixedCategory || "genel",
            blocks: fallbackBlocks(manual[lang].body),
          };
        }
        if (lang === sourceLang) category = result.category;
        fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
        console.log(`Üretildi: ${slug}.${lang}.json (yazıldı, kategori: ${result.category}, ${result.blocks.length} blok)`);
        continue;
      }

      // Not authored by hand, but this language is enabled. Only fill in via
      // translation if an API key is available and this isn't the source
      // language itself (which would already have been handled above).
      if (!ai || lang === sourceLang) {
        if (fs.existsSync(outPath)) fs.rmSync(outPath);
        continue;
      }

      try {
        const translated = await translateAndStructure(
          ai,
          { lang: sourceLang, ...manual[sourceLang] },
          category,
          lang
        );
        const result = { ...translated, category };
        fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
        console.log(`Üretildi: ${slug}.${lang}.json (AI çevirisi, kategori: ${category}, ${result.blocks.length} blok)`);
      } catch (err) {
        console.error(`Gemini çeviri hatası (${slug}, ${sourceLang}->${lang}):`, err.message);
        // Don't publish a mislabeled/untranslated fallback under the wrong
        // language — leave this language absent for this post instead.
        if (fs.existsSync(outPath)) fs.rmSync(outPath);
      }
    }
  }

  console.log(`Blog içerik üretimi tamamlandı. ${files.length} yazı işlendi.`);
}

main().catch((err) => {
  console.error("generate-blog-content.js beklenmeyen hata:", err);
  process.exit(1);
});

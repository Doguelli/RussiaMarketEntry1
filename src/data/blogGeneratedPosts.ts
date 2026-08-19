// Loads admin-panel-authored blog posts: plain-text frontmatter from
// content/blog/*.md (written by Decap CMS) plus their AI-structured
// {title, excerpt, blocks} output per language from
// content/blog-generated/*.<lang>.json (produced at build time by
// scripts/generate-blog-content.js). Existing hand-authored posts in
// blogData.tsx/blogDataRU.tsx are untouched — this only adds new entries.
//
// Languages are fully independent: a post may exist in only one language.
// The "base" fields (title, excerpt, imageUrl, contentBlocks — used when the
// site is showing Turkish, or as the fallback for any language that wasn't
// authored/translated) are taken from whichever language was actually
// written first, in TR > EN > RU priority order. This mirrors the existing
// convention in blogDataRU.tsx, where Russian-only posts already store their
// content directly in the "base" fields since there's no Turkish version.
import yaml from "js-yaml";
import type { BlogPost } from "./blogData";
import type { ContentBlock } from "../components/BlockRenderer";

function parseFrontmatter(raw: string): { data: Record<string, any> } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {} };
  const data = (yaml.load(match[1]) as Record<string, any>) || {};
  return { data };
}

interface GeneratedLang {
  title: string;
  excerpt: string;
  category?: string;
  blocks: ContentBlock[];
}

const mdFiles = import.meta.glob("/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const generatedFiles = import.meta.glob("/content/blog-generated/*.json", {
  eager: true,
}) as Record<string, { default: GeneratedLang }>;

function findGenerated(slug: string, lang: "tr" | "en" | "ru"): GeneratedLang | undefined {
  return generatedFiles[`/content/blog-generated/${slug}.${lang}.json`]?.default;
}

function formatDate(isoDate: string | undefined, locale: string): string {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(d);
}

function estimateReadTime(text: string | undefined, suffix: string): string | undefined {
  if (!text) return undefined;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} ${suffix}`;
}

// Reads word count from the final, already-in-that-language blocks (rather
// than the raw frontmatter body) so auto-translated languages get an accurate
// estimate too — the frontmatter body field is empty for a translated
// language since the translation only exists in the generated blocks.
function blocksToText(blocks: ContentBlock[] | undefined): string {
  if (!blocks) return "";
  return blocks
    .map((b) => {
      switch (b.type) {
        case "heading":
        case "paragraph":
        case "calloutBox":
          return b.text;
        case "bulletList":
          return b.items.join(" ");
        case "statGrid":
          return b.items.map((i) => `${i.label} ${i.value}`).join(" ");
        default:
          return "";
      }
    })
    .join(" ");
}

const LANGS = ["tr", "en", "ru"] as const;

export const generatedBlogPosts: BlogPost[] = Object.entries(mdFiles).map(([filePath, raw]) => {
  const { data } = parseFrontmatter(raw);
  const fileSlug = filePath.split("/").pop()!.replace(/\.md$/, "");
  const slug: string = data.urlSlug || fileSlug;

  const perLang = Object.fromEntries(LANGS.map((l) => [l, findGenerated(slug, l)])) as Record<
    (typeof LANGS)[number],
    GeneratedLang | undefined
  >;

  // First language that actually has content, used to fill the "base" fields.
  const baseLang = LANGS.find((l) => perLang[l]) ?? "tr";
  const base = perLang[baseLang];

  const imageByLang = { tr: data.image, en: data.imageEn, ru: data.imageRu } as Record<string, string | undefined>;
  const baseImage = imageByLang[baseLang] || data.image || data.imageEn || data.imageRu || "";

  const post: BlogPost = {
    slug,
    metaTitle: base?.title || "",
    metaTitleEn: perLang.en?.title,
    metaTitleRu: perLang.ru?.title,
    title: base?.title || "",
    titleEn: perLang.en?.title,
    titleRu: perLang.ru?.title,
    excerpt: base?.excerpt || "",
    excerptEn: perLang.en?.excerpt,
    excerptRu: perLang.ru?.excerpt,
    imageUrl: baseImage,
    imageUrlEn: data.imageEn || baseImage,
    imageUrlRu: data.imageRu || baseImage,
    publishedAt: formatDate(data.publishedAt, "tr-TR"),
    publishedAtEn: formatDate(data.publishedAt, "en-US"),
    publishedAtRu: formatDate(data.publishedAt, "ru-RU"),
    readTime: data.readTime || estimateReadTime(blocksToText(base?.blocks), "dk okuma") || "",
    readTimeEn: estimateReadTime(blocksToText(perLang.en?.blocks), "min read"),
    readTimeRu: estimateReadTime(blocksToText(perLang.ru?.blocks), "мин чтения"),
    category: base?.category || "genel",
    contentBlocks: base?.blocks,
    contentBlocksEn: perLang.en?.blocks,
    contentBlocksRu: perLang.ru?.blocks,
    // No TR/EN content at all — this post is Russian-only, so hide it from
    // the TR/EN blog list (see Blog.tsx's language filter) the same way the
    // hand-authored blogPostsRU cluster is hidden.
    lang: baseLang === "ru" ? "ru" : undefined,
  };

  return post;
});

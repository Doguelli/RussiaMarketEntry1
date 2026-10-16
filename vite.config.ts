import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {defineConfig, loadEnv, type Plugin} from 'vite';

/**
 * `*.md?frontmatter` imports resolve to the few frontmatter fields the site
 * reads, parsed at build time, so neither the Markdown bodies nor a YAML
 * parser end up in the browser bundle.
 */
const FAQ_HEADING = /^(sık sorulan sorular|sıkça sorulan sorular|frequently asked questions|faq|часто задаваемые вопросы)$/i;

/**
 * Question/answer pairs from the body's FAQ section, for FAQPage JSON-LD.
 * A question is a standalone line ending in "?"; its answer is the text up to
 * the next standalone line. The section ends at the first non-question heading.
 */
function extractFaq(body: unknown): {question: string; answer: string}[] | undefined {
  if (typeof body !== 'string') return undefined;
  const chunks = body
    .replace(/\r\n/g, '\n')
    .split(/\n\s*\n/)
    .map((c) => c.split('\n').map((l) => l.trim()).filter(Boolean))
    .filter((lines) => lines.length > 0);
  const isStandalone = (lines: string[]) =>
    lines.length === 1 && lines[0].length <= 110 && !/[.:;,!]$/.test(lines[0]) && !/^([*-]|\d+\.)\s/.test(lines[0]);
  const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
  const start = chunks.findIndex((lines) => isStandalone(lines) && FAQ_HEADING.test(lines[0]));
  if (start < 0) return undefined;
  const items: {question: string; answer: string}[] = [];
  for (let i = start + 1; i < chunks.length; i++) {
    const lines = chunks[i];
    if (!isStandalone(lines)) {
      const last = items[items.length - 1];
      if (last) last.answer = `${last.answer} ${plain(lines.join(' '))}`.trim();
      continue;
    }
    if (!lines[0].endsWith('?')) break;
    items.push({question: lines[0], answer: ''});
  }
  const valid = items.filter((it) => it.answer);
  return valid.length > 0 ? valid : undefined;
}

const toIsoDate = (v: unknown) => (v instanceof Date ? v.toISOString() : v);

function blogFrontmatter(): Plugin {
  const pickLang = (value: any) =>
    value && typeof value === 'object'
      ? {image: value.image, metaTitle: value.metaTitle, faq: extractFaq(value.body)}
      : undefined;
  return {
    name: 'blog-frontmatter',
    load(id) {
      if (!id.endsWith('.md?frontmatter')) return null;
      const raw = fs.readFileSync(id.slice(0, -'?frontmatter'.length), 'utf-8');
      const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
      const data: any = (match && yaml.load(match[1])) || {};
      const picked = {
        urlSlug: data.urlSlug,
        publishedAt: toIsoDate(data.publishedAt),
        updatedAt: toIsoDate(data.updatedAt),
        tr: pickLang(data.tr),
        en: pickLang(data.en),
        ru: pickLang(data.ru),
      };
      return `export default ${JSON.stringify(picked)};`;
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [blogFrontmatter(), react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

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
function blogFrontmatter(): Plugin {
  const pickLang = (value: any) =>
    value && typeof value === 'object' ? {image: value.image, metaTitle: value.metaTitle} : undefined;
  return {
    name: 'blog-frontmatter',
    load(id) {
      if (!id.endsWith('.md?frontmatter')) return null;
      const raw = fs.readFileSync(id.slice(0, -'?frontmatter'.length), 'utf-8');
      const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
      const data: any = (match && yaml.load(match[1])) || {};
      const picked = {
        urlSlug: data.urlSlug,
        publishedAt: data.publishedAt instanceof Date ? data.publishedAt.toISOString() : data.publishedAt,
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

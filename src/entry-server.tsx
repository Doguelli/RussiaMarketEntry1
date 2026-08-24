import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./AppRoutes";
import i18n, { resolveLanguageFromPath } from "./i18n";
import { blogPosts } from "./data/blogData";

// Exposed so scripts/prerender.js (run outside Vite) can read the current
// blog slug list from this already Vite-built SSR bundle, where
// import.meta.glob-based content (content/blog/*.md) has already been
// resolved into static data.
export const blogSlugs = blogPosts.map((post) => post.slug);

export async function render(url: string) {
  const lang = resolveLanguageFromPath(url);
  await i18n.changeLanguage(lang);

  const helmetContext: any = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <AppRoutes />
      </MemoryRouter>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet };
}

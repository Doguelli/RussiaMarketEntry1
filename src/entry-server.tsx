import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./AppRoutes";
import i18n, { resolveLanguageFromPath } from "./i18n";
import { blogPosts } from "./data/blogData";
import { BLOG_LANGS, blogDetailPath, hasBlogContentFor } from "./utils/blogLanguages";

// Re-exported so scripts/prerender.js sets <html lang> from the same function
// the client uses for og:locale.
export { pageLanguageForPath } from "./utils/pageLanguage";

// Exposed so scripts/prerender.js (run outside Vite) can read the current
// blog routes from this already Vite-built SSR bundle, where
// import.meta.glob-based content (content/blog/*.md) has already been
// resolved into static data.
//
// A post only contributes a route to the language trees it was actually
// written in — prerendering all three unconditionally used to publish
// indexable URLs carrying another language's fallback text.
export const blogRoutes = blogPosts.flatMap((post) =>
  BLOG_LANGS.filter((lang) => hasBlogContentFor(post, lang)).map((lang) =>
    blogDetailPath(post.slug, lang)
  )
);

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

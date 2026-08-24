/**
 * The language a URL's document is actually written in — the value that
 * <html lang> and og:locale must declare.
 *
 * This is usually just the language of the URL tree, but not always: a few
 * legacy paths outside /ru serve Russian-only pages. Both the prerenderer
 * (via the SSR bundle) and the client read this one function so the two
 * signals cannot drift apart.
 */
export type PageLang = "tr" | "en" | "ru";

/** Paths outside the /ru tree whose page is written entirely in Russian. */
const RUSSIAN_CONTENT_TR_PATHS = new Set(["/kompaniya-v-turtsii"]);

export const OG_LOCALE: Record<PageLang, string> = {
  tr: "tr_TR",
  en: "en_US",
  ru: "ru_RU",
};

export function pageLanguageForPath(pathname: string): PageLang {
  const path = (pathname.split("?")[0] || "/").replace(/\/+$/, "") || "/";
  if (path === "/ru" || path.startsWith("/ru/")) return "ru";
  if (path === "/en" || path.startsWith("/en/")) return "en";
  if (RUSSIAN_CONTENT_TR_PATHS.has(path)) return "ru";
  return "tr";
}

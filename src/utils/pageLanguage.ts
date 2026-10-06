/**
 * The language a URL's document is actually written in — the value that
 * <html lang> and og:locale must declare. Both the prerenderer (via the SSR
 * bundle) and the client read this one function so the two signals cannot
 * drift apart.
 */
export type PageLang = "tr" | "en" | "ru";

export const OG_LOCALE: Record<PageLang, string> = {
  tr: "tr_TR",
  en: "en_US",
  ru: "ru_RU",
};

export function pageLanguageForPath(pathname: string): PageLang {
  const path = (pathname.split("?")[0] || "/").replace(/\/+$/, "") || "/";
  if (path === "/ru" || path.startsWith("/ru/")) return "ru";
  if (path === "/en" || path.startsWith("/en/")) return "en";
  return "tr";
}

/**
 * Single source of truth for "does this post exist in language X".
 *
 * Used by the blog index (which languages list a post), the blog detail head
 * (which hreflang alternates are real) and the prerender route list (which
 * language trees get a static file). Keeping all three on one predicate is
 * what prevents an indexable URL whose content is actually another language.
 */
import type { BlogPost } from "@/data/blogData";

export const BLOG_LANGS = ["tr", "en", "ru"] as const;
export type BlogLang = (typeof BLOG_LANGS)[number];

/**
 * True only when the post has body text genuinely written in `lang`, never
 * when BlogDetail would merely fall back to another language's text.
 *
 * `lang: "ru"` marks a post whose *base* fields hold Russian (the
 * hand-authored blogDataRU cluster and Russian-only CMS posts), so such a
 * post never belongs to the Turkish or English tree even though the base
 * fields are populated.
 */
export function hasBlogContentFor(post: BlogPost, lang: BlogLang): boolean {
  if (lang === "ru") {
    return post.lang === "ru" || Boolean(post.titleRu || post.contentRu || post.contentBlocksRu);
  }
  if (post.lang === "ru") return false;
  if (lang === "en") {
    return Boolean(post.contentEn || post.contentBlocksEn);
  }
  return Boolean(post.content || post.contentBlocks);
}

/** Public URL of a post in a given language tree (Turkish has no prefix). */
export function blogDetailPath(slug: string, lang: BlogLang): string {
  return lang === "tr" ? `/blog/${slug}` : `/${lang}/blog/${slug}`;
}

import { DEFAULT_OG_IMAGE } from "@/utils/seo";

export interface PageSocialMetaProps {
  title: string;
  description: string;
  url: string;
  /** Defaults to site-wide OG image when omitted. */
  image?: string;
  type?: "website" | "article";
}

/**
 * Open Graph + Twitter/X meta elements for direct use inside <Helmet>.
 * Implemented as a plain element list (not a wrapper component) so
 * react-helmet-async SSR accepts them as valid Helmet children.
 */
export function socialMetaElements({
  title,
  description,
  url,
  image,
  type = "website",
}: PageSocialMetaProps) {
  const img = image ?? DEFAULT_OG_IMAGE;

  return [
    <meta key="og:title" property="og:title" content={title} />,
    <meta key="og:description" property="og:description" content={description} />,
    <meta key="og:url" property="og:url" content={url} />,
    <meta key="og:type" property="og:type" content={type} />,
    <meta key="og:image" property="og:image" content={img} />,
    <meta key="twitter:card" name="twitter:card" content="summary_large_image" />,
    <meta key="twitter:title" name="twitter:title" content={title} />,
    <meta key="twitter:description" name="twitter:description" content={description} />,
    <meta key="twitter:image" name="twitter:image" content={img} />,
  ];
}

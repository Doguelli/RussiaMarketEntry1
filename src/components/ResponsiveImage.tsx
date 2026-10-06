import { useState, type ImgHTMLAttributes } from "react";

/** Must match RESPONSIVE_WIDTHS in scripts/optimize-images.js. */
const RESPONSIVE_WIDTHS = [640, 1024, 1600];
const LOCAL_RASTER = /^\/[^?#]+\.(png|jpe?g)$/i;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  src: string;
  sizes: string;
};

/**
 * Serves the WebP variants written at build time by scripts/optimize-images.js
 * and keeps the original file as the <img> fallback. Variants only exist in
 * production builds, and if one ever fails to load the original is used.
 */
export default function ResponsiveImage({ src, sizes, onError, ...imgProps }: Props) {
  const [variantsFailed, setVariantsFailed] = useState(false);
  const useVariants = import.meta.env.PROD && LOCAL_RASTER.test(src) && !variantsFailed;

  const img = (
    <img
      {...imgProps}
      src={src}
      onError={(event) => {
        if (useVariants) {
          setVariantsFailed(true);
          return;
        }
        onError?.(event);
      }}
    />
  );

  if (!useVariants) return img;

  return (
    <picture className="contents">
      <source
        type="image/webp"
        sizes={sizes}
        srcSet={RESPONSIVE_WIDTHS.map((width) => `${src}.${width}.webp ${width}w`).join(", ")}
      />
      {img}
    </picture>
  );
}

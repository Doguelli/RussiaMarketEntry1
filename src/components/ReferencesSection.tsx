import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { REFERENCE_BRANDS, type ReferenceBrand } from "@/data/referencesData";
import { referencesPath } from "@/utils/ruPaths";

type ReferencesSectionProps = {
  /** Homepage: logos only. Full page uses ReferencesPage cards. */
  variant?: "home" | "page";
};

const HOME_SLOT_H = 52;
const PAGE_SLOT_H = 60;

function ReferenceLogo({
  brand,
  variant,
}: {
  brand: ReferenceBrand;
  variant: "home" | "page";
}) {
  const baseH = variant === "home" ? HOME_SLOT_H : PAGE_SLOT_H;
  const { scale, maxWidthPct } = brand.logoFit;
  const maxHeight = Math.round(baseH * scale);

  return (
    <div
      className={
        variant === "home"
          ? "flex h-[72px] md:h-[80px] w-full items-center justify-center px-3 md:px-4"
          : "flex h-[80px] sm:h-[96px] md:h-[104px] w-full items-center justify-center px-3 md:px-4 mb-3 md:mb-4"
      }
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="object-contain"
        style={{
          height: `${maxHeight}px`,
          width: "auto",
          maxWidth: `${maxWidthPct}%`,
        }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function ReferencesLogoGrid({ variant = "home" }: ReferencesSectionProps) {
  const { i18n, t } = useTranslation();
  const isRu = i18n.language === "ru";

  const isEn = i18n.language === "en";
  const lang = isRu ? "ru" : isEn ? "en" : "tr";

  const tagLabel = (tag: string) => {
    if (tag === "distribution") return t("references.tag_distribution");
    if (tag === "b2b") return t("references.tag_b2b");
    return t("references.tag_marketplace");
  };

  return (
    <div
      className={
        variant === "home"
          ? "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5"
      }
    >
      {REFERENCE_BRANDS.map((brand) => {
        const scope =
          lang === "en" ? brand.scopeEN : lang === "ru" ? brand.scopeRU : brand.scopeTR;

        if (variant === "home") {
          return (
            <div
              key={brand.id}
              className="group flex flex-col items-center justify-center bg-white border border-slate-100 rounded-2xl transition-colors duration-200 hover:border-slate-200 hover:bg-slate-50/60"
              title={brand.name}
            >
              <ReferenceLogo brand={brand} variant="home" />
            </div>
          );
        }

        return (
          <article
            key={brand.id}
            className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 transition-colors duration-200 hover:border-slate-200 flex flex-col h-full"
          >
            <ReferenceLogo brand={brand} variant="page" />
            <h3 className="text-[16px] md:text-[17px] font-bold text-primary-500 mb-2 text-center">
              {brand.name}
            </h3>
            <p className="text-slate-600 text-[14px] leading-relaxed text-center flex-grow min-h-[2.75rem] mb-3">
              {scope}
            </p>
            <span className="self-center text-[11px] font-semibold uppercase tracking-wide text-primary-400 bg-primary-50 px-2.5 py-1 rounded-full">
              {tagLabel(brand.tag)}
            </span>
          </article>
        );
      })}
    </div>
  );
}

export default function ReferencesSection() {
  const { i18n, t } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";

  return (
    <section
      className="py-12 md:py-16 bg-white border-b border-slate-100"
      aria-labelledby="home-references-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2
            id="home-references-heading"
            className="text-[28px] md:text-[36px] font-extrabold text-primary-500 mb-3 md:mb-4 tracking-tight leading-tight"
          >
            {t("references.home_title")}
          </h2>
          <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed">
            {t("references.home_subtitle")}
          </p>
        </div>

        <ReferencesLogoGrid variant="home" />

        <div className="mt-8 md:mt-9 text-center">
          <Link
            to={referencesPath(i18n.language)}
            className="inline-flex items-center gap-2 text-primary-500 font-bold text-[14px] md:text-[15px] hover:text-accent-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 rounded-sm"
          >
            {t("references.home_cta")} <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

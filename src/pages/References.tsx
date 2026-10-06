import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema } from "@/utils/seo";
import { socialMetaElements, hreflangElements } from "@/components/PageSocialMeta";
import { ReferencesLogoGrid } from "@/components/ReferencesSection";
import { absoluteUrl, homePath, referencesPath } from "@/utils/ruPaths";

export default function References() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const pageLang = i18n.language;
  const isEn = i18n.language === "en";
  const pagePath = referencesPath(pageLang);
  const canonicalUrl = absoluteUrl(pagePath);
  const metaTitle = t("references.meta_title");
  const metaDesc = t("references.meta_description");

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(pageLang) },
    { name: t("references.page_title"), url: pagePath },
  ]);

  return (
    <main className="pt-5 pb-12 md:pt-7 md:pb-16">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangElements(referencesPath)}
        {socialMetaElements({ title: metaTitle, description: metaDesc, url: canonicalUrl })}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="border-b border-slate-100 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-[1.2] max-w-4xl mx-auto"
          >
            {t("references.hero_heading")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[16px] md:text-[18px] text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            {t("references.intro")}
          </motion.p>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-slate-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReferencesLogoGrid variant="page" />
        </div>
      </section>
    </main>
  );
}

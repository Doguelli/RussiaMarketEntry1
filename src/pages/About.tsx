import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema } from "@/utils/seo";
import { aboutPath, absoluteUrl, homePath, contactPath } from "@/utils/ruPaths";

export default function About() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";
  const pagePath = aboutPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);
  const ctaPath = contactPath(isRu);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(isRu) },
    { name: t("nav.about"), url: pagePath },
  ]);

  const corridorCards = [
    { title: t("about.corridor1_title"), desc: t("about.corridor1_desc") },
    { title: t("about.corridor2_title"), desc: t("about.corridor2_desc") },
    { title: t("about.corridor3_title"), desc: t("about.corridor3_desc") },
  ];

  const beliefCards = [
    { title: t("about.belief1_title"), desc: t("about.belief1_desc") },
    { title: t("about.belief2_title"), desc: t("about.belief2_desc") },
    { title: t("about.belief3_title"), desc: t("about.belief3_desc") },
    { title: t("about.belief4_title"), desc: t("about.belief4_desc") },
  ];

  const whyCards = [
    { eyebrow: t("about.why1_eyebrow"), title: t("about.why1_title"), desc: t("about.why1_desc") },
    { eyebrow: t("about.why2_eyebrow"), title: t("about.why2_title"), desc: t("about.why2_desc") },
    { eyebrow: t("about.why3_eyebrow"), title: t("about.why3_title"), desc: t("about.why3_desc") },
    { eyebrow: t("about.why4_eyebrow"), title: t("about.why4_title"), desc: t("about.why4_desc") },
  ];

  const steps = [
    { num: "01", title: t("about.step1_title"), desc: t("about.step1_desc") },
    { num: "02", title: t("about.step2_title"), desc: t("about.step2_desc") },
    { num: "03", title: t("about.step3_title"), desc: t("about.step3_desc") },
    { num: "04", title: t("about.step4_title"), desc: t("about.step4_desc") },
    { num: "05", title: t("about.step5_title"), desc: t("about.step5_desc") },
  ];

  return (
    <main className="pt-5 pb-12 md:pt-7 md:pb-16">
      <Helmet>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.desc_meta")} />
        <meta
          name="keywords"
          content={
            isRu
              ? "о нас, выход на рынок России, e-commerce, B2B, медицина"
              : isEn
                ? "about us, Russia market entry, e-commerce, B2B, medical"
                : "hakkımızda, Rusya pazarına giriş, e-ticaret, B2B, medikal"
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/hakkimizda" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/o-nas" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/hakkimizda" />
        <meta property="og:title" content={t("about.title")} />
        <meta property="og:description" content={t("about.desc_meta")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* 1. Hero */}
      <section className="border-b border-slate-100 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-[1.2] max-w-4xl mx-auto"
          >
            {t("about.h1")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-slate-500 max-w-2xl mx-auto text-[15px] md:text-[17px] leading-relaxed mb-6 md:mb-8"
          >
            {t("about.hero_desc")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link
              to={ctaPath}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-7 py-3.5 rounded-full font-bold text-[14px] md:text-[15px]"
            >
              {t("about.cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Hikâyemiz */}
        <section className="py-8 md:py-12 border-b border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4">
              {t("about.story_h2")}
            </h2>
            <div className="space-y-3 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">
              <p>{t("about.story_p1")}</p>
              <p>{t("about.story_p2")}</p>
              <p>{t("about.story_p3")}</p>
              <p>{t("about.story_p4")}</p>
            </div>
            <div className="mt-5 md:mt-6 border-l-4 border-accent-500 bg-primary-50/60 rounded-r-2xl px-4 py-3.5 md:px-5 md:py-4">
              <p className="text-[14px] md:text-[15px] text-primary-700 font-medium leading-relaxed">
                {t("about.story_quote1")}
              </p>
              <p className="text-[14px] md:text-[15px] text-primary-700 font-medium leading-relaxed mt-2">
                {t("about.story_quote2")}
              </p>
            </div>
          </motion.div>
        </section>

        {/* 3. Türkiye ↔ Rusya */}
        <section className="py-8 md:py-12 border-b border-slate-100">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4">
            {t("about.corridor_h2")}
          </h2>
          <div className="space-y-3 text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-5 md:mb-7">
            <p>{t("about.corridor_p1")}</p>
            <p>{t("about.corridor_p2")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {corridorCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-100 bg-white p-4 md:p-5 shadow-sm"
              >
                <h3 className="text-[13px] md:text-[14px] font-extrabold tracking-wide text-primary-500 mb-2 uppercase">
                  {card.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Neye inanıyoruz? */}
        <section className="py-8 md:py-12 border-b border-slate-100">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-5 md:mb-6 max-w-3xl">
            {t("about.belief_h2")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {beliefCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 md:p-5"
              >
                <h3 className="text-[14px] md:text-[15px] font-extrabold text-primary-500 mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Neden RussiaMarketEntry? */}
        <section className="py-8 md:py-12 border-b border-slate-100">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-5 md:mb-6 max-w-3xl">
            {t("about.why_h2")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-primary-500 text-white p-4 md:p-5"
              >
                {card.eyebrow ? (
                  <div className="text-accent-400 text-[12px] md:text-[13px] font-bold tracking-wider uppercase mb-1.5">
                    {card.eyebrow}
                  </div>
                ) : null}
                <h3 className="text-[15px] md:text-[16px] font-extrabold mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/80 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Nasıl çalışıyoruz? */}
        <section className="py-8 md:py-12 border-b border-slate-100">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-5 md:mb-6">
            {t("about.how_h2")}
          </h2>
          <div className="space-y-2.5 md:space-y-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-3 md:gap-4 rounded-2xl border border-slate-100 bg-white p-3.5 md:p-4"
              >
                <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl bg-primary-50 text-primary-500 font-extrabold text-[13px] md:text-[14px] flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[14px] md:text-[15px] font-extrabold text-primary-500 mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Closing CTA */}
        <section className="py-8 md:py-12">
          <div className="rounded-3xl bg-primary-500 text-white px-5 py-7 md:px-10 md:py-9 text-center">
            <h2 className="text-[24px] md:text-[32px] font-extrabold tracking-tight mb-3">
              {t("about.final_h2")}
            </h2>
            <p className="text-[14px] md:text-[16px] text-primary-100 leading-relaxed max-w-2xl mx-auto mb-5 md:mb-6">
              {t("about.final_desc")}
            </p>
            <Link
              to={ctaPath}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-7 py-3.5 rounded-full font-bold text-[14px] md:text-[15px]"
            >
              {t("about.cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

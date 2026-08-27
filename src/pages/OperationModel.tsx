import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema } from "@/utils/seo";
import {
  operationModelPath,
  absoluteUrl,
  homePath,
  contactPath,
  servicePath,
} from "@/utils/ruPaths";

export default function OperationModel() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";
  const pagePath = operationModelPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);
  const ctaPath = contactPath(isRu);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(isRu) },
    { name: t("nav.op_model"), url: pagePath },
  ]);

  const modelCards = [
    { title: t("op_model_page.model1_title"), desc: t("op_model_page.model1_desc") },
    { title: t("op_model_page.model2_title"), desc: t("op_model_page.model2_desc") },
    { title: t("op_model_page.model3_title"), desc: t("op_model_page.model3_desc") },
    { title: t("op_model_page.model4_title"), desc: t("op_model_page.model4_desc") },
  ];

  const steps = [
    { num: "01", title: t("op_model_page.step1_title"), desc: t("op_model_page.step1_desc") },
    { num: "02", title: t("op_model_page.step2_title"), desc: t("op_model_page.step2_desc") },
    { num: "03", title: t("op_model_page.step3_title"), desc: t("op_model_page.step3_desc") },
    { num: "04", title: t("op_model_page.step4_title"), desc: t("op_model_page.step4_desc") },
    { num: "05", title: t("op_model_page.step5_title"), desc: t("op_model_page.step5_desc") },
  ];

  const corridorCards = [
    { title: t("op_model_page.corridor1_title"), desc: t("op_model_page.corridor1_desc") },
    { title: t("op_model_page.corridor2_title"), desc: t("op_model_page.corridor2_desc") },
    { title: t("op_model_page.corridor3_title"), desc: t("op_model_page.corridor3_desc") },
  ];

  const techCards = [
    { title: t("op_model_page.tech1_title"), desc: t("op_model_page.tech1_desc") },
    { title: t("op_model_page.tech2_title"), desc: t("op_model_page.tech2_desc") },
    { title: t("op_model_page.tech3_title"), desc: t("op_model_page.tech3_desc") },
    { title: t("op_model_page.tech4_title"), desc: t("op_model_page.tech4_desc") },
  ];

  const flowSteps = [
    t("op_model_page.flow1"),
    t("op_model_page.flow2"),
    t("op_model_page.flow3"),
    t("op_model_page.flow4"),
    t("op_model_page.flow5"),
  ];

  const audienceItems = [
    t("op_model_page.aud1"),
    t("op_model_page.aud2"),
    t("op_model_page.aud3"),
    t("op_model_page.aud4"),
  ];

  const improveItems = [
    t("op_model_page.improve1"),
    t("op_model_page.improve2"),
    t("op_model_page.improve3"),
    t("op_model_page.improve4"),
    t("op_model_page.improve5"),
    t("op_model_page.improve6"),
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-5 pb-12 md:pt-7 md:pb-16">
      <Helmet>
        <title>{t("op_model_page.title")}</title>
        <meta name="description" content={t("op_model_page.desc_meta")} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/operasyon-modeli" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/model-raboty" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/operasyon-modeli" />
        <meta property="og:title" content={t("op_model_page.title")} />
        <meta property="og:description" content={t("op_model_page.desc_meta")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero */}
        <section className="text-center max-w-3xl mx-auto pb-8 md:pb-12 border-b border-slate-200/80">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[26px] sm:text-[34px] md:text-[44px] font-extrabold text-primary-500 mb-3 md:mb-4 tracking-tight leading-[1.2]"
          >
            {t("op_model_page.h1")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[14px] md:text-[17px] text-slate-500 leading-relaxed mb-5 md:mb-7"
          >
            {t("op_model_page.hero_desc")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link
              to={ctaPath}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-7 py-3.5 rounded-full font-bold text-[14px] md:text-[15px]"
            >
              {t("op_model_page.cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        {/* 2. Operasyon modelleri */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4 max-w-3xl">
            {t("op_model_page.models_h2")}
          </h2>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-6 md:mb-8">
            {t("op_model_page.models_desc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {modelCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-100 bg-white p-4 md:p-5 shadow-sm">
                <h3 className="text-[13px] md:text-[14px] font-extrabold tracking-wide text-primary-500 mb-2 uppercase">
                  {card.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Nasıl kuruluyor */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-6 md:mb-8">
            {t("op_model_page.how_h2")}
          </h2>
          <div className="space-y-3 md:space-y-4">
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

        {/* 4. Türkiye ↔ Rusya */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4 max-w-3xl">
            {t("op_model_page.corridor_h2")}
          </h2>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-6 md:mb-8">
            {t("op_model_page.corridor_desc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {corridorCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-100 bg-white p-4 md:p-5 shadow-sm">
                <h3 className="text-[13px] md:text-[14px] font-extrabold tracking-wide text-primary-500 mb-2 uppercase">
                  {card.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Lojistik ve yerel operasyon */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4 max-w-3xl">
            {t("op_model_page.logistics_h2")}
          </h2>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-3">
            {t("op_model_page.logistics_p1")}
          </p>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-5 md:mb-6">
            {t("op_model_page.logistics_p2")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={servicePath("lojistik-ve-depo", isRu)}
              className="inline-flex items-center gap-2 text-[14px] font-bold text-accent-500 hover:text-accent-600 transition-colors"
            >
              {t("op_model_page.link_logistics")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={servicePath("operasyon-kurulumu", isRu)}
              className="inline-flex items-center gap-2 text-[14px] font-bold text-accent-500 hover:text-accent-600 transition-colors"
            >
              {t("op_model_page.link_ops")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 6. Kendi teknolojimiz */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4 max-w-3xl">
            {t("op_model_page.tech_h2")}
          </h2>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-6 md:mb-8">
            {t("op_model_page.tech_desc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {techCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-primary-500 text-white p-4 md:p-5">
                <h3 className="text-[14px] md:text-[15px] font-extrabold mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/80 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Sadece raporlamıyoruz */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-4 md:mb-5">
            {t("op_model_page.report_h2")}
          </h2>
          <div className="border-l-4 border-accent-500 bg-white rounded-r-2xl px-4 py-3.5 md:px-5 md:py-4 mb-5 md:mb-6 max-w-3xl">
            <p className="text-[14px] md:text-[15px] text-primary-700 font-medium leading-relaxed">
              {t("op_model_page.report_quote")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-[14px] font-semibold text-primary-600 mb-5 md:mb-6">
            {flowSteps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-white border border-slate-100 rounded-xl px-3 py-2 shadow-sm">{step}</span>
                {i < flowSteps.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-3">
            {t("op_model_page.report_p1")}
          </p>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl">
            {t("op_model_page.report_p2")}
          </p>
        </section>

        {/* 8. Sürekli gelişim */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4 max-w-3xl">
            {t("op_model_page.improve_h2")}
          </h2>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mb-5 md:mb-6">
            {t("op_model_page.improve_desc")}
          </p>
          <div className="flex flex-wrap gap-2">
            {improveItems.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-full bg-white border border-slate-100 px-3 py-1.5 text-[13px] font-semibold text-primary-500"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 9. Kimler için */}
        <section className="py-8 md:py-12 border-b border-slate-200/80">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-5 md:mb-6">
            {t("op_model_page.aud_h2")}
          </h2>
          <ul className="space-y-3 max-w-3xl">
            {audienceItems.map((item) => (
              <li key={item} className="flex gap-3 text-[14px] md:text-[15px] text-slate-600 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 10. CTA */}
        <section className="py-8 md:py-12">
          <div className="rounded-3xl bg-primary-500 text-white px-5 py-7 md:px-10 md:py-9 text-center">
            <h2 className="text-[24px] md:text-[32px] font-extrabold tracking-tight mb-3">
              {t("op_model_page.final_h2")}
            </h2>
            <p className="text-[14px] md:text-[16px] text-primary-100 leading-relaxed max-w-2xl mx-auto mb-5 md:mb-6">
              {t("op_model_page.final_desc")}
            </p>
            <Link
              to={ctaPath}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-7 py-3.5 rounded-full font-bold text-[14px] md:text-[15px]"
            >
              {t("op_model_page.cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

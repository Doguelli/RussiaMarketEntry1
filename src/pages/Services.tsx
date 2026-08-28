import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Handshake,
  HeartPulse,
  Megaphone,
  Settings,
  Building2,
} from "lucide-react";
import { createBreadcrumbSchema } from "@/utils/seo";
import { socialMetaElements } from "@/components/PageSocialMeta";
import {
  servicesPath,
  servicePath,
  contactPath,
  absoluteUrl,
  homePath,
} from "@/utils/ruPaths";

const categoryCardHover =
  "block transition-all duration-[225ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-inset";

function localeList(t: (key: string, options?: any) => any, key: string): string[] {
  const value = t(key, { returnObjects: true });
  return Array.isArray(value) ? value.map(String) : [];
}

export default function Services() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(isRu) },
    { name: t("nav.services"), url: servicesPath(isRu) },
  ]);

  // Preserve existing SEO title/description (do not invent new indexed metadata).
  const metaTitle = isRu
    ? "Наши услуги — Регистрация компании в Турции, ВЭД и маркетплейсы | Russia Market Entry"
    : isEn
      ? "Our Services - End-to-End E-Commerce & Export Solutions | Russia Market Entry"
      : "Hizmetlerimiz - Rusya E-Ticaret & İhracat Çözümleri | Russia Market Entry";

  const metaDesc = isRu
    ? "Регистрация компаний в Турции для иностранцев, открытие банковских счетов, логистика, фулфилмент, Wildberries, Ozon и налоговое сопровождение под ключ."
    : isEn
      ? "End-to-end e-commerce consulting, Wildberries, Ozon and Lamoda marketplace management, logistics, company formation and finance in Russia."
      : "Türkiye'den Rusya'ya e-ticaret, Ozon, Wildberries, Lamoda entegrasyonu, şirket kuruluşu, gümrük, sertifikasyon, lojistik ve uçtan uca operasyon yönetimi hizmetlerimiz.";

  const pagePath = servicesPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);
  const companyInTurkeyPath = isRu ? "/ru/kompaniya-v-turtsii" : "/kompaniya-v-turtsii";

  const cat1Items = localeList(t, "services_page.cat1_items");
  const cat2Items = localeList(t, "services_page.cat2_items");
  const cat3Items = localeList(t, "services_page.cat3_items");
  const cat4Items = localeList(t, "services_page.cat4_items");
  const cat5Items = localeList(t, "services_page.cat5_items");
  const corridorTrRu = localeList(t, "services_page.corridor_tr_ru_items");
  const corridorRuTr = localeList(t, "services_page.corridor_ru_tr_items");

  const howSteps = [
    { title: t("services_page.how1_title"), desc: t("services_page.how1_desc") },
    { title: t("services_page.how2_title"), desc: t("services_page.how2_desc") },
    { title: t("services_page.how3_title"), desc: t("services_page.how3_desc") },
    { title: t("services_page.how4_title"), desc: t("services_page.how4_desc") },
    { title: t("services_page.how5_title"), desc: t("services_page.how5_desc") },
  ];

  const whyPoints = [
    t("services_page.why1"),
    t("services_page.why2"),
    t("services_page.why3"),
    t("services_page.why4"),
  ];

  const categories = [
    {
      id: "ecommerce",
      num: t("services_page.cat1_num"),
      title: t("services_page.cat1_title"),
      desc: t("services_page.cat1_desc"),
      items: cat1Items,
      icon: ShoppingCart,
      featured: true,
      primaryTo: servicePath("pazaryeri-yonetimi", isRu),
      cta: t("services_page.cat1_cta"),
      secondaryLinks: [
        { to: servicePath("sistem-ve-entegrasyon", isRu), label: t("services_page.cat1_link_secondary") },
        { to: servicePath("pazar-arastirmasi-ve-strateji", isRu), label: t("services_page.cat1_link_optional") },
      ],
    },
    {
      id: "b2b",
      num: t("services_page.cat2_num"),
      title: t("services_page.cat2_title"),
      desc: t("services_page.cat2_desc"),
      items: cat2Items,
      icon: Handshake,
      featured: true,
      primaryTo: servicePath("pazar-arastirmasi-ve-strateji", isRu),
      cta: t("services_page.cat2_cta"),
      secondaryLinks: [] as { to: string; label: string }[],
    },
    {
      id: "medical",
      num: t("services_page.cat3_num"),
      title: t("services_page.cat3_title"),
      desc: t("services_page.cat3_desc"),
      items: cat3Items,
      icon: HeartPulse,
      featured: true,
      trust: t("services_page.cat3_trust"),
      primaryTo: servicePath("medikal-ve-saglik", isRu),
      cta: t("services_page.cat3_cta"),
      secondaryLinks: [
        {
          to: servicePath("pazar-arastirmasi-ve-strateji", isRu),
          label: t("services_page.cat3_link_strategy"),
        },
      ],
    },
    {
      id: "digital",
      num: t("services_page.cat4_num"),
      title: t("services_page.cat4_title"),
      desc: t("services_page.cat4_desc"),
      items: cat4Items,
      icon: Megaphone,
      featured: false,
      primaryTo: servicePath("marka-buyutme", isRu),
      cta: t("services_page.cat4_cta"),
      secondaryLinks: [] as { to: string; label: string }[],
    },
    {
      id: "ops",
      num: t("services_page.cat5_num"),
      title: t("services_page.cat5_title"),
      desc: t("services_page.cat5_desc"),
      items: cat5Items,
      icon: Settings,
      featured: false,
      primaryTo: servicePath("operasyon-kurulumu", isRu),
      cta: t("services_page.cat5_cta"),
      secondaryLinks: [
        { to: servicePath("lojistik-ve-depo", isRu), label: t("services_page.cat5_link_logistics") },
        { to: servicePath("ithalat-ve-gumruk-yonetimi", isRu), label: t("services_page.cat5_link_import") },
        { to: servicePath("vergi-ve-finans", isRu), label: t("services_page.cat5_link_tax") },
      ],
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-6 pb-12 md:pb-16">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/hizmetler" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/uslugi" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/hizmetler" />
        {socialMetaElements({ title: metaTitle, description: metaDesc, url: canonicalUrl })}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="bg-transparent py-10 md:py-14 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-[13px] font-bold rounded-full mb-4 uppercase tracking-wider"
          >
            {t("nav.services")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[28px] sm:text-[40px] md:text-[48px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-[1.15] max-w-4xl mx-auto"
          >
            {t("services_page.h1")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-3xl mx-auto text-[15px] md:text-[17px] leading-relaxed mb-3 font-medium"
          >
            {t("services_page.hero_lead")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-slate-500 max-w-2xl mx-auto text-[14px] md:text-[16px] leading-relaxed mb-7"
          >
            {t("services_page.hero_sub")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Link
              to={contactPath(isRu)}
              className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-4 rounded-full font-bold text-[15px] shadow-sm"
            >
              {t("services_page.cta_preanalysis")} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 mb-4 tracking-tight leading-snug">
            {t("services_page.intro_h2")}
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[16px] leading-relaxed">{t("services_page.intro_text")}</p>
        </div>
      </section>

      <section className="pb-12 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] font-bold uppercase tracking-wider text-accent-500 mb-6 text-center">
            {t("services_page.categories_eyebrow")}
          </p>

          <div className="space-y-5 md:space-y-6">
            {categories.map((cat, i) => (
              <motion.article
                key={cat.id}
                id={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.2) }}
                className={`group bg-white rounded-3xl border shadow-sm overflow-hidden transition-all duration-[225ms] ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-primary-200/80 ${
                  cat.featured ? "border-primary-200 ring-1 ring-primary-100" : "border-slate-100"
                }`}
              >
                <Link to={cat.primaryTo} className={`${categoryCardHover} group-hover:bg-primary-50/30`}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-2 p-5 md:p-8 bg-primary-50/40 border-b lg:border-b-0 lg:border-r border-slate-100 group-hover:bg-primary-50/50 transition-colors duration-[225ms]">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                            cat.featured ? "bg-accent-500 text-white" : "bg-primary-500 text-white"
                          }`}
                        >
                          <cat.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[13px] font-extrabold text-slate-400 tracking-widest">{cat.num}</span>
                      </div>
                      <h3 className="text-[22px] md:text-[26px] font-extrabold text-primary-500 mb-2 tracking-tight leading-snug">
                        {cat.title}
                      </h3>
                      <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed mb-5">{cat.desc}</p>
                      {"trust" in cat && cat.trust ? (
                        <p className="text-[13px] font-semibold text-primary-500/80 mb-5 border-l-4 border-accent-500 pl-3">
                          {cat.trust}
                        </p>
                      ) : null}
                      <span className="inline-flex items-center gap-2 bg-accent-500 text-white px-5 py-3 rounded-full font-bold text-[14px] group-hover:bg-accent-600 transition-colors duration-[225ms]">
                        {cat.cta}{" "}
                        <ArrowRight className="w-4 h-4 transition-transform duration-[225ms] ease-out group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div className="lg:col-span-3 p-5 md:p-8">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-slate-600 text-[14px] leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
                {cat.secondaryLinks.length > 0 && (
                  <div className="px-5 md:px-8 py-4 bg-white border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2">
                    {cat.secondaryLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="text-[13px] font-semibold text-primary-500 hover:text-accent-500 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 rounded-sm"
                      >
                        {link.label} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 text-white rounded-[32px] p-6 md:p-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-accent-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[24px] md:text-[34px] font-extrabold mb-2 tracking-tight leading-snug">
                {t("services_page.corridor_title")}
              </h2>
              <p className="text-accent-400 font-semibold text-[15px] mb-3">{t("services_page.corridor_subtitle")}</p>
              <p className="text-primary-100 text-[14px] md:text-[16px] leading-relaxed max-w-3xl mb-7">
                {t("services_page.corridor_text")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="font-extrabold text-[16px] md:text-[18px] mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent-500" />
                    {t("services_page.corridor_tr_ru_title")}
                  </h3>
                  <ul className="space-y-2">
                    {corridorTrRu.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-primary-100 text-[14px]">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="font-extrabold text-[16px] md:text-[18px] mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent-500" />
                    {t("services_page.corridor_ru_tr_title")}
                  </h3>
                  <ul className="space-y-2">
                    {corridorRuTr.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-primary-100 text-[14px]">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={servicePath("turkiyede-sirket-kurulumu", isRu)}
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-6 py-3 rounded-full font-bold text-[14px]"
                >
                  {t("services_page.corridor_cta_turkey")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={companyInTurkeyPath}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-white px-6 py-3 rounded-full font-bold text-[14px]"
                >
                  {t("services_page.corridor_cta_company_ru")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 mb-6 md:mb-8 tracking-tight text-center">
            {t("services_page.why_title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyPoints.map((point, i) => (
              <div key={point} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-center">
                <div className="text-accent-500 font-extrabold text-[13px] mb-2">0{i + 1}</div>
                <p className="font-bold text-primary-500 text-[15px] leading-snug">{point}</p>
                {i === 3 && (
                  <p className="text-slate-500 text-[13px] mt-2 leading-relaxed">{t("services_page.why4_note")}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 mb-6 md:mb-8 tracking-tight text-center">
            {t("services_page.how_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {howSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="w-9 h-9 rounded-full bg-accent-500 text-white font-extrabold text-[13px] flex items-center justify-center mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-primary-500 text-[16px] mb-1.5">{step.title}</h3>
                <p className="text-slate-500 text-[13px] md:text-[14px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-100 rounded-[28px] p-7 md:p-10 shadow-sm">
            <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 mb-3 tracking-tight">
              {t("services_page.final_title")}
            </h2>
            <p className="text-slate-500 text-[15px] md:text-[16px] leading-relaxed mb-6 max-w-2xl mx-auto">
              {t("services_page.final_text")}
            </p>
            <Link
              to={contactPath(isRu)}
              className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-4 rounded-full font-bold text-[15px]"
            >
              {t("services_page.cta_preanalysis")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

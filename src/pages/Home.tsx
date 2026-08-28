import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  LineChart,
  MoveRight,
  Settings,
  ShoppingCart,
  Megaphone,
  HeartPulse,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { createOrganizationSchema, createBreadcrumbSchema, createFaqSchema, createWebSiteSchema } from "@/utils/seo";
import { socialMetaElements } from "@/components/PageSocialMeta";
import { blogDetailPath, type BlogLang } from "@/utils/blogLanguages";
import {
  aboutPath,
  contactPath,
  forWhomPath,
  operationModelPath,
  servicePath,
  servicesPath,
  homePath,
  russiaMarketPath,
} from "@/utils/ruPaths";

const MEDICAL_SERVICE_ID = "medikal-ve-saglik";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";
  const blogLang: BlogLang = isRu ? "ru" : isEn ? "en" : "tr";
  const blogIndexPath = isRu ? "/ru/blog" : isEn ? "/en/blog" : "/blog";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(isRu) },
  ]);

  const services = [
    {
      id: "pazaryeri-yonetimi",
      title: t("home.services.ecommerce"),
      desc: t("home.services.ecommerce_desc"),
    },
    {
      id: "marka-buyutme",
      title: t("home.services.digital"),
      desc: t("home.services.digital_desc"),
    },
    {
      id: "pazar-arastirmasi-ve-strateji",
      title: t("home.services.b2b"),
      desc: t("home.services.b2b_desc"),
    },
    {
      id: MEDICAL_SERVICE_ID,
      title: t("home.services.medical"),
      desc: t("home.services.medical_desc"),
    },
    {
      id: "operasyon-kurulumu",
      title: t("home.services.local_ops"),
      desc: t("home.services.local_ops_desc"),
    },
    {
      id: "lojistik-ve-depo",
      title: t("home.services.logistics"),
      desc: t("home.services.logistics_desc"),
    },
  ];

  const whyUs = [
    { title: t("home.wu1_title"), desc: t("home.wu1_desc") },
    { title: t("home.wu2_title"), desc: t("home.wu2_desc") },
    { title: t("home.wu3_title"), desc: t("home.wu3_desc") },
    { title: t("home.wu4_title"), desc: t("home.wu4_desc") },
  ];

  const whyRussia = [t("home.wr1"), t("home.wr2"), t("home.wr3"), t("home.wr4")];

  const metaTitle = t("home.meta_title");
  const metaDesc = t("home.meta_desc");
  const metaKeywords = t("home.meta_keywords");

  const techCards = [
    { title: t("home.tech1_title"), desc: t("home.tech1_desc") },
    { title: t("home.tech2_title"), desc: t("home.tech2_desc") },
    { title: t("home.tech3_title"), desc: t("home.tech3_desc") },
    { title: t("home.tech4_title"), desc: t("home.tech4_desc") },
  ];

  const corridorFlow = [
    t("home.corridor_flow1"),
    t("home.corridor_flow2"),
    t("home.corridor_flow3"),
    t("home.corridor_flow4"),
    t("home.corridor_flow5"),
  ];

  const techFlowSteps = [
    t("home.flow1"),
    t("home.flow2"),
    t("home.flow3"),
    t("home.flow4"),
    t("home.flow5"),
  ];

  const opModelItems = [t("home.om1"), t("home.om2"), t("home.om3"), t("home.om4")];

  // FAQ schema mirrors only the questions rendered on this page.
  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({
    question: t(`home.faq${n}_q`),
    answer: t(`home.faq${n}_a`),
  }));

  const orgSchema = createOrganizationSchema({
    description: metaDesc,
    knowsAbout: [
      ...services.map((service) => service.title),
      "Wildberries",
      "Ozon",
      "Yandex Market",
      "Lamoda",
      "Yandex Ads",
      "VK Ads",
      "Telegram Native",
      isRu ? "B2B и Medical" : isEn ? "B2B and Medical" : "B2B ve Medical",
    ],
    url: homePath(isRu),
  });
  const websiteSchema = createWebSiteSchema({ url: homePath(isRu) });
  const faqSchema = createFaqSchema(faqs);
  const canonicalHomeUrl = isRu ? "https://russiamarketentry.com/ru" : "https://russiamarketentry.com/";

  const b2bItems = [
    t("home.b2b_li1"),
    t("home.b2b_li2"),
    t("home.b2b_li3"),
    t("home.b2b_li4"),
    t("home.b2b_li5"),
    t("home.b2b_li6"),
  ];

  const interactiveCardHover =
    "transition-all duration-[225ms] ease-out hover:-translate-y-1 hover:shadow-md hover:border-primary-200/80";

  // CTA hierarchy: Hero (strongest red) → Final (strong red) → Secondary blue buttons → informational text links
  const ctaHero =
    "bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 md:py-4 rounded-md font-bold text-[15px] sm:text-[16px] flex items-center justify-center gap-3 w-full sm:w-auto tracking-wide shadow-[0_8px_18px_-6px_rgba(238,42,36,0.45)] hover:shadow-[0_12px_22px_-6px_rgba(238,42,36,0.55)] transition-all duration-200 ease-out hover:-translate-y-0.5";
  const ctaFinal =
    "bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-[15px] md:text-[17px] flex items-center gap-3 shadow-[0_10px_20px_-5px_rgba(238,42,36,0.4)] hover:shadow-[0_16px_28px_-5px_rgba(238,42,36,0.55)] transition-all duration-200 ease-out hover:-translate-y-1";
  const ctaSecondary =
    "inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-all duration-200 ease-out text-white px-6 py-3 rounded-md font-bold text-[14px] md:text-[15px] hover:-translate-y-0.5 hover:shadow-md";
  const ctaLink =
    "inline-flex items-center gap-2 text-primary-500 font-semibold text-[14px] md:text-[15px] hover:text-primary-600 transition-colors duration-200";

  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalHomeUrl} />
        {/* No en alternate: English is served from the Turkish URL, so it has
            no distinct URL of its own to advertise. */}
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/" />
        {socialMetaElements({ title: metaTitle, description: metaDesc, url: canonicalHomeUrl })}
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 pt-14 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-12 lg:min-h-[640px] flex flex-col justify-center border-b border-white/5">
        <div className="absolute inset-0 w-full h-full bg-primary-900">
          <img
            src="/images/home-hero-moscow.png"
            alt={isRu ? "Москва и рынок электронной коммерции России" : isEn ? "Moscow and the Russian e-commerce market" : "Moskova ve Rusya e-ticaret pazarı"}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[40%_center] lg:object-[52%_center] opacity-80 lg:opacity-100 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] lg:[mask-image:none]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b16]/55 from-0% via-[#040b16]/15 via-35% to-transparent z-10 hidden lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#040b16]/75 via-[#040b16]/35 to-transparent z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b16] from-0% via-[#040b16]/80 via-28% to-transparent z-10 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
            >
              <h1 className="text-[30px] sm:text-[42px] lg:text-[56px] leading-[1.15] font-bold text-white mb-4 md:mb-5 tracking-tight">
                {t("home.title1")}
                <br />
                <span className="text-accent-500">{t("home.title2")}</span>
              </h1>
              <p className="text-[15px] lg:text-[18px] text-slate-300 max-w-[550px] leading-relaxed mb-3 md:mb-4 font-medium">
                {t("home.desc")}
              </p>
              <p className="text-[13px] lg:text-[15px] text-slate-400 max-w-[550px] leading-relaxed mb-6 md:mb-8">
                {t("home.entity_definition")}
              </p>

              <Link to={contactPath(isRu)} className={ctaHero}>
                {t("home.apply")} <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-14 lg:mt-20 w-full flex flex-col gap-6 relative"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-3 bottom-0 bg-[#040b16]/35 lg:bg-[#040b16]/30"
            />
            <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 border-t border-white/10 pt-6 md:pt-8">
              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <ShoppingCart className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f1_title")}</h4>
                  <p className="text-slate-300 text-[13px] leading-relaxed">{t("home.f1_desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <Megaphone className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f2_title")}</h4>
                  <p className="text-slate-300 text-[13px] leading-relaxed">{t("home.f2_desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <HeartPulse className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f3_title")}</h4>
                  <p className="text-slate-300 text-[13px] leading-relaxed">{t("home.f3_desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <Settings className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f4_title")}</h4>
                  <p className="text-slate-300 text-[13px] leading-relaxed">{t("home.f4_desc")}</p>
                </div>
              </div>
            </div>

            <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-6 pb-2">
              <div className="flex items-center gap-2 text-slate-300 opacity-90 hover:opacity-100 transition-opacity">
                <Globe2 className="w-4 h-4" />
                <span className="text-[13px] tracking-wide relative top-[1px]">russiamarketentry.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 mt-4 md:mt-0 font-medium">
                <ShieldCheck className="w-4 h-4 text-accent-500" />
                <span className="text-[13px] tracking-wide relative top-[1px]">{t("home.trust_tagline")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-Commerce Focus */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-500 font-bold text-[13px] uppercase tracking-wider mb-3">
                <ShoppingCart className="w-4 h-4" /> {t("home.ecommerce_eyebrow")}
              </div>
              <h2 className="text-[28px] md:text-[40px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-tight">
                {t("home.ecommerce_title")}
              </h2>
              <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed mb-6">{t("home.ecommerce_desc")}</p>
              <h3 className="text-[18px] md:text-[20px] font-bold text-primary-500 mb-3">{t("home.ecommerce_subtitle")}</h3>
              <p className="text-[16px] md:text-[18px] font-semibold text-primary-500 mb-4">{t("home.ecommerce_channels")}</p>
              <p className="text-slate-600 mb-2 text-[14px] md:text-[15px] leading-relaxed">{t("home.ecommerce_perf")}</p>
              <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed mb-6">{t("home.ecommerce_ads")}</p>
              <Link to={servicePath("pazaryeri-yonetimi", isRu)} className={ctaLink}>
                {t("home.ecommerce_link")} <MoveRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                {
                  name: "Wildberries",
                  accent: "#CB11AB",
                  soft: "rgba(203, 17, 171, 0.08)",
                  mark: "linear-gradient(180deg, #CB11AB 0%, #8B1FA8 100%)",
                  blogSlug: "wildberriesde-satis-yapmak",
                },
                {
                  name: "Ozon",
                  accent: "#005BFF",
                  soft: "rgba(0, 91, 255, 0.07)",
                  mark: "#005BFF",
                  blogSlug: "ozonda-satis-yapmak",
                },
                {
                  name: "Yandex Market",
                  accent: "#111111",
                  soft: "rgba(255, 204, 0, 0.14)",
                  mark: "linear-gradient(180deg, #FFCC00 55%, #111111 55%)",
                },
                {
                  name: "Lamoda",
                  accent: "#1A1A1A",
                  soft: "rgba(26, 26, 26, 0.05)",
                  mark: "#1A1A1A",
                  blogSlug: "lamodaya-nasil-girilir",
                },
                {
                  name: "Yandex Ads",
                  accent: "#FC3F1D",
                  soft: "rgba(252, 63, 29, 0.07)",
                  mark: "#FC3F1D",
                },
                {
                  name: "VK Ads",
                  accent: "#0077FF",
                  soft: "rgba(0, 119, 255, 0.07)",
                  mark: "#0077FF",
                },
                {
                  name: "Telegram Native",
                  accent: "#229ED9",
                  soft: "rgba(34, 158, 217, 0.08)",
                  mark: "#229ED9",
                  wide: true,
                },
              ].map((platform) => {
                const chipClass = `group relative bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm flex items-center justify-center text-center overflow-hidden transition-all duration-[225ms] ease-out hover:shadow-md hover:-translate-y-0.5 hover:border-[color:var(--platform-accent)] hover:bg-[color:var(--platform-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
                  platform.wide ? "col-span-2" : ""
                }`;
                const chipStyle = {
                  "--platform-accent": platform.accent,
                  "--platform-soft": platform.soft,
                  "--platform-mark": platform.mark,
                } as CSSProperties;
                const chipInner = (
                  <>
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ background: platform.mark }}
                    />
                    <span
                      aria-hidden
                      className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
                      style={{ background: platform.accent }}
                    />
                    {"blogSlug" in platform && platform.blogSlug ? (
                      <ArrowRight
                        aria-hidden
                        className="absolute bottom-3 right-3 w-4 h-4 text-primary-400 opacity-0 -translate-x-1 transition-all duration-[225ms] ease-out group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    ) : null}
                    <span className="font-bold text-primary-500 text-[14px] sm:text-[16px] tracking-tight">
                      {platform.name}
                    </span>
                  </>
                );

                if ("blogSlug" in platform && platform.blogSlug) {
                  return (
                    <Link
                      key={platform.name}
                      to={blogDetailPath(platform.blogSlug, blogLang)}
                      className={chipClass}
                      style={chipStyle}
                    >
                      {chipInner}
                    </Link>
                  );
                }

                return (
                  <div key={platform.name} className={chipClass} style={chipStyle}>
                    {chipInner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Medical Focus */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 text-accent-500 font-bold text-[13px] uppercase tracking-wider mb-3">
              <HeartPulse className="w-4 h-4" /> {t("home.b2b_eyebrow")}
            </div>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-tight">
              {t("home.b2b_title")}
            </h2>
            <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed mb-3">{t("home.b2b_desc")}</p>
            <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed">{t("home.b2b_desc2")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
            {b2bItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-5">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-[14px] md:text-[15px]">{item}</span>
              </div>
            ))}
          </div>

          <Link to={contactPath(isRu)} className={ctaSecondary}>
            {t("home.b2b_cta")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What We Do / Services */}
      <section className="py-12 md:py-16 bg-primary-50/30 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 md:mb-10">
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-primary-500 mb-3 md:mb-4 tracking-tight leading-tight">
              {t("home.what_we_do")}
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-500 leading-relaxed">{t("home.what_we_do_desc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, i) => {
              const card = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`bg-white p-5 md:p-7 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col cursor-pointer group ${interactiveCardHover}`}
                >
                  <h3 className="text-[18px] md:text-[20px] font-bold text-primary-500 mb-2 md:mb-3 flex justify-between items-center gap-3">
                    <span>{service.title}</span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed flex-grow">{service.desc}</p>
                </motion.div>
              );

              return (
                <Link to={servicePath(service.id, isRu)} key={`${service.id}-${i}`} className="block h-full">
                  {card}
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link to={servicesPath(isRu)} className={ctaLink}>
              {t("home.link_services")} <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Expertise + Turkey ↔ Russia */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-500 font-bold text-[13px] uppercase tracking-wider mb-3">
                <Users className="w-4 h-4" /> {t("home.expertise_eyebrow")}
              </div>
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-tight">
                {t("home.expertise_h2")}
              </h2>
              <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed mb-3">{t("home.expertise_p1")}</p>
              <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed mb-3">{t("home.expertise_p2")}</p>
              <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed mb-6">{t("home.expertise_p3")}</p>
              <Link to={aboutPath(isRu)} className={ctaLink}>
                {t("home.expertise_cta")} <MoveRight className="w-4 h-4" />
              </Link>
            </div>

            <Link
              to={operationModelPath(isRu)}
              className={`block bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 ${interactiveCardHover}`}
            >
              <div className="inline-flex items-center gap-2 text-primary-500 font-bold text-[13px] uppercase tracking-wider mb-3">
                <Globe2 className="w-4 h-4 text-accent-500" /> {t("home.corridor_title")}
              </div>
              <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed mb-5">{t("home.corridor_desc")}</p>
              <div className="flex flex-wrap items-center gap-2 text-[12px] md:text-[13px] font-semibold text-primary-600">
                {corridorFlow.map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="bg-white border border-slate-100 rounded-xl px-3 py-2 shadow-sm">{step}</span>
                    {i < corridorFlow.length - 1 && <span className="text-accent-500">→</span>}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology / Decision Support */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-primary-500 tracking-tight mb-3 md:mb-4 leading-tight">
              {t("home.tech_h2")}
            </h2>
            <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed">
              {t("home.tech_desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
            {techCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-primary-500 text-white p-4 md:p-5 border border-primary-600/20 shadow-sm">
                <h3 className="text-[14px] md:text-[15px] font-extrabold mb-2 tracking-tight">{card.title}</h3>
                <p className="text-[13px] md:text-[14px] text-white/80 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[22px] md:text-[28px] font-extrabold text-primary-500 tracking-tight mb-4 text-center max-w-3xl mx-auto">
            {t("home.report_h2")}
          </h3>
          <div className="border-l-4 border-accent-500 bg-white rounded-r-2xl px-4 py-3.5 md:px-5 md:py-4 mb-5 max-w-3xl mx-auto">
            <p className="text-[14px] md:text-[15px] text-primary-700 font-medium leading-relaxed">{t("home.report_quote")}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[13px] md:text-[14px] font-semibold text-primary-600 mb-5 md:mb-6">
            {techFlowSteps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-white border border-slate-100 rounded-xl px-3 py-2 shadow-sm">{step}</span>
                {i < techFlowSteps.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto mb-3 text-center">{t("home.report_p1")}</p>
          <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">{t("home.report_p2")}</p>
        </div>
      </section>

      {/* Operation Model Summary */}
      <section className="py-12 md:py-14 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
            <div className="max-w-2xl min-w-0">
              <div className="inline-flex items-center gap-2 text-accent-500 font-bold text-[13px] uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" /> {t("home.op_model")}
              </div>
              <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 tracking-tight mb-4 leading-tight">
                {t("home.om_summary_h2")}
              </h2>
              <ul className="space-y-2.5">
                {opModelItems.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600 text-[14px] md:text-[15px]">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to={operationModelPath(isRu)} className={`${ctaSecondary} shrink-0 self-start md:self-center`}>
              {t("home.om_link")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 md:py-16 bg-primary-50/40 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-primary-500 mb-3 md:mb-4 tracking-tight leading-tight">
              {t("home.why_us")}
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-600 font-medium">{t("home.why_us_lead")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-5 md:p-7 shadow-sm"
              >
                <div className="text-primary-400 font-extrabold text-[14px] mb-2">0{i + 1}</div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-primary-500 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Russia + Explore */}
      <section className="py-12 md:py-16 bg-primary-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h3 className="text-[20px] md:text-[22px] font-bold mb-4 md:mb-5 text-white tracking-tight flex items-center gap-3">
                <Globe2 className="text-accent-500 w-7 h-7" /> {t("home.why_russia")}
              </h3>
              <ul className="space-y-3">
                {whyRussia.map((item, i) => (
                  <li key={i} className="flex gap-3 text-primary-100 text-[14px] md:text-[15px]">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link
                  to={russiaMarketPath(isRu)}
                  className="text-accent-500 hover:text-white transition-colors font-bold flex items-center gap-2 text-[14px]"
                >
                  {t("home.link_russia_market")} <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[20px] md:text-[22px] font-bold mb-4 md:mb-5 text-white tracking-tight flex items-center gap-3">
                <LineChart className="text-accent-500 w-7 h-7" /> {t("home.explore_title")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to={servicesPath(isRu)} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_services")}
                  </Link>
                </li>
                <li>
                  <Link to={forWhomPath(isRu)} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_for_whom")}
                  </Link>
                </li>
                <li>
                  <Link to={blogIndexPath} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_blog")}
                  </Link>
                </li>
                <li>
                  <Link to={contactPath(isRu)} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-primary-500 mb-3 tracking-tight leading-tight">{t("home.faq")}</h2>
            <p className="text-[15px] md:text-[17px] text-slate-500 leading-relaxed">{t("home.faq_desc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-fit">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="group w-full p-4 md:p-5 text-left flex justify-between items-start gap-3 hover:bg-slate-50/80 transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-semibold text-primary-500 text-[15px] md:text-[16px] leading-snug pr-1">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 mt-0.5 transition-all duration-200 ${
                        isOpen ? "rotate-180 text-accent-500" : "text-slate-400 group-hover:text-accent-500/70"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 md:px-5 md:pb-5 border-t border-slate-100">
                      <p className="text-slate-500 leading-relaxed text-[13px] md:text-[14px] pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-[28px] md:text-[44px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-tight">
            {t("home.cta")}
          </h2>
          <p className="text-[15px] md:text-[17px] text-slate-500 mb-8 md:mb-10 max-w-2xl mx-auto">{t("home.cta_desc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={contactPath(isRu)} className={ctaFinal}>
              {t("home.cta_btn")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

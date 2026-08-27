import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Factory,
  LineChart,
  MoveRight,
  ShoppingBag,
  Settings,
  ShoppingCart,
  Award,
  Megaphone,
  HeartPulse,
  Building2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { createOrganizationSchema, createBreadcrumbSchema, createFaqSchema } from "@/utils/seo";
import {
  contactPath,
  forWhomPath,
  operationModelPath,
  servicePath,
  servicesPath,
  homePath,
  russiaMarketPath,
} from "@/utils/ruPaths";

export default function Home() {
  const { t, i18n } = useTranslation();

  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";
  const blogIndexPath = isRu ? "/ru/blog" : "/blog";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(isRu) },
  ]);

  const trustExperience = {
    title: t("home.trust_exp_title"),
    text: t("home.trust_exp_desc"),
    icon: Award,
  };

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
      id: "pazar-arastirmasi-ve-strateji",
      title: t("home.services.medical"),
      desc: t("home.services.medical_desc"),
      key: "medical",
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

  const howWeWork = [
    { step: "1", title: t("home.step1"), desc: t("home.step1_desc") },
    { step: "2", title: t("home.step2"), desc: t("home.step2_desc") },
    { step: "3", title: t("home.step3"), desc: t("home.step3_desc") },
  ];

  const whyUs = [
    { title: t("home.wu1_title"), desc: t("home.wu1_desc") },
    { title: t("home.wu2_title"), desc: t("home.wu2_desc") },
    { title: t("home.wu3_title"), desc: t("home.wu3_desc") },
    { title: t("home.wu4_title"), desc: t("home.wu4_desc") },
  ];

  const whyRussia = [t("home.wr1"), t("home.wr2"), t("home.wr3"), t("home.wr4")];

  const metaTitle = isRu
    ? "Выход на рынок России | Ozon и Wildberries для турецких брендов"
    : isEn
      ? "Russia Market Entry | Ozon & Wildberries Management"
      : "Rusya Pazarına Giriş | Ozon & Wildberries Türkiye Yönetimi";

  const metaDesc = isRu
    ? "E-commerce, B2B-продажи, Ozon, Wildberries, Yandex Market, digital-маркетинг и локальные операции для выхода турецких брендов на рынок России."
    : isEn
      ? "E-commerce, B2B sales, Ozon, Wildberries, Yandex Market, digital marketing and local operations from Turkey to Russia."
      : "Türkiye'den Rusya'ya e-ticaret, B2B satış, Ozon, Wildberries, Yandex Market, dijital pazarlama ve yerel operasyon çözümleri.";

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
  const faqSchema = createFaqSchema(faqs);

  const forWhomCards = [
    { title: t("home.fw1_title"), desc: t("home.fw1_desc"), icon: ShoppingBag },
    { title: t("home.fw2_title"), desc: t("home.fw2_desc"), icon: Factory },
    { title: t("home.fw3_title"), desc: t("home.fw3_desc"), icon: HeartPulse },
    { title: t("home.fw4_title"), desc: t("home.fw4_desc"), icon: Building2 },
  ];

  const b2bItems = [
    t("home.b2b_li1"),
    t("home.b2b_li2"),
    t("home.b2b_li3"),
    t("home.b2b_li4"),
    t("home.b2b_li5"),
    t("home.b2b_li6"),
  ];

  return (
    <main>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta
          name="keywords"
          content={
            isRu
              ? "выход на рынок России, e-commerce Россия, Wildberries Ozon, Yandex Market, B2B Россия, медицинский рынок России"
              : isEn
                ? "Russia market entry, e-commerce Russia, Ozon Wildberries, Yandex Market, B2B Russia, medical market Russia"
                : "Rusya e-ticaret, Rusya pazarına giriş, Ozon hesap açma, Wildberries Türkiye, Yandex Market, Rusya şirket kurmak, Rusya B2B, medikal Rusya"
          }
        />
        <link rel="canonical" href={isRu ? "https://russiamarketentry.com/ru" : "https://russiamarketentry.com/"} />
        {/* No en alternate: English is served from the Turkish URL, so it has
            no distinct URL of its own to advertise. */}
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={isRu ? "https://russiamarketentry.com/ru" : "https://russiamarketentry.com/"} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 pt-20 pb-32 lg:pt-24 lg:pb-10 lg:min-h-[800px] flex flex-col justify-center border-b border-white/5">
        <div className="absolute inset-0 w-full h-full bg-primary-900">
          <img
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2070&auto=format&fit=crop"
            alt="Moskova ve Rusya e-ticaret pazarı"
            className="absolute right-0 top-0 w-full lg:w-[75%] h-full object-cover object-center lg:object-[80%_center] opacity-40 lg:opacity-90 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_100%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b16] from-10% via-[#040b16]/80 to-transparent z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b16] from-10% via-[#040b16]/90 to-transparent z-10 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
            >
              <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-white mb-6 tracking-tight">
                {t("home.title1")}
                <br />
                <span className="text-accent-500">{t("home.title2")}</span>
              </h1>
              <p className="text-[16px] lg:text-[18px] text-slate-300 max-w-[550px] leading-relaxed mb-10 font-medium">
                {t("home.desc")}
              </p>

              <Link
                to={contactPath(isRu)}
                className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-4 rounded-md font-bold text-[15px] sm:text-[16px] flex items-center justify-center gap-3 w-full sm:w-auto tracking-wide"
              >
                {t("home.apply")} <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 lg:mt-32 w-full flex flex-col gap-8"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 border-t border-white/10 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <ShoppingCart className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f1_title")}</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{t("home.f1_desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <Megaphone className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f2_title")}</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{t("home.f2_desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <HeartPulse className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f3_title")}</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{t("home.f3_desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="text-accent-500 flex-shrink-0">
                  <Settings className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t("home.f4_title")}</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{t("home.f4_desc")}</p>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-6 pb-2">
              <div className="flex items-center gap-2 text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
                <Globe2 className="w-4 h-4" />
                <span className="text-[13px] tracking-wide relative top-[1px]">russiamarketentry.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 mt-4 md:mt-0 font-medium">
                <ShieldCheck className="w-4 h-4 text-accent-500" />
                <span className="text-[13px] tracking-wide relative top-[1px]">
                  {isRu
                    ? "Надежно · Прозрачно · Ориентировано на результат"
                    : isEn
                      ? "Secure · Transparent · Result Oriented"
                      : "Güvenli · Şeffaf · Sonuç Odaklı"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / experience */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 max-w-md w-full"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <trustExperience.icon className="w-6 h-6" />
              </div>
              <div className="text-[22px] sm:text-[24px] font-extrabold text-primary-500 mb-2 leading-snug">
                {trustExperience.title}
              </div>
              <p className="font-medium text-slate-500 text-[15px]">{trustExperience.text}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-primary-50/30 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-extrabold text-primary-500 mb-4 tracking-tight">
              {t("home.what_we_do")}
            </h2>
            <p className="text-[18px] text-slate-500">{t("home.what_we_do_desc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link to={servicePath(service.id, isRu)} key={(service as { key?: string }).key || `${service.id}-${i}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer h-full group flex flex-col"
                >
                  <h3 className="text-[20px] font-bold text-primary-500 mb-3 group-hover:text-accent-500 transition-colors flex justify-between items-center gap-3">
                    <span>{service.title}</span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed flex-grow">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to={servicesPath(isRu)}
              className="inline-flex items-center gap-2 text-primary-500 font-bold hover:text-accent-500 transition-colors"
            >
              {t("home.link_services")} <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who For? + How We Work */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-4 tracking-tight">{t("home.for_whom")}</h2>
              <p className="text-slate-500 mb-4">{t("home.for_whom_desc")}</p>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-10 border-l-4 border-accent-500 pl-4">
                {t("home.fw_filter")}
              </p>

              <div className="space-y-6">
                {forWhomCards.map((card, i) => (
                  <Link
                    to={forWhomPath(isRu)}
                    key={i}
                    className="group block bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-accent-500/30 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 shadow-sm flex-shrink-0">
                        <card.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-bold text-primary-500 text-[18px]">{card.title}</h3>
                        <p className="text-slate-500 text-[14px]">{card.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 transition-colors flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-10 tracking-tight">{t("home.how_we_work")}</h2>

              <div className="relative border-l-2 border-slate-100 pl-8 space-y-12 ml-4">
                {howWeWork.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[43px] top-0 w-8 h-8 bg-white border-2 border-accent-500 text-accent-500 rounded-full flex items-center justify-center font-bold text-[14px]">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-[20px] text-primary-500 mb-2">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Focus */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-500 font-bold text-[13px] uppercase tracking-wider mb-4">
                <ShoppingCart className="w-4 h-4" /> {t("home.ecommerce_eyebrow")}
              </div>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-primary-500 mb-6 tracking-tight">
                {t("home.ecommerce_title")}
              </h2>
              <p className="text-[17px] text-slate-600 leading-relaxed mb-8">{t("home.ecommerce_desc")}</p>
              <h3 className="text-[20px] font-bold text-primary-500 mb-4">{t("home.ecommerce_subtitle")}</h3>
              <p className="text-[18px] font-semibold text-slate-800 mb-6">{t("home.ecommerce_channels")}</p>
              <p className="text-slate-600 mb-3">{t("home.ecommerce_perf")}</p>
              <p className="text-[16px] font-semibold text-primary-500 mb-8">{t("home.ecommerce_ads")}</p>
              <Link
                to={servicePath("pazaryeri-yonetimi", isRu)}
                className="inline-flex items-center gap-2 text-accent-500 font-bold hover:text-accent-600 transition-colors"
              >
                {t("home.ecommerce_link")} <MoveRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "Wildberries",
                  accent: "#CB11AB",
                  soft: "rgba(203, 17, 171, 0.08)",
                  mark: "linear-gradient(180deg, #CB11AB 0%, #8B1FA8 100%)",
                },
                {
                  name: "Ozon",
                  accent: "#005BFF",
                  soft: "rgba(0, 91, 255, 0.07)",
                  mark: "#005BFF",
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
              ].map((platform) => (
                <div
                  key={platform.name}
                  className={`group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-center justify-center text-center overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-[color:var(--platform-accent)] hover:bg-[color:var(--platform-soft)] ${
                    platform.wide ? "col-span-2" : ""
                  }`}
                  style={
                    {
                      "--platform-accent": platform.accent,
                      "--platform-soft": platform.soft,
                      "--platform-mark": platform.mark,
                    } as CSSProperties
                  }
                >
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
                  <span className="font-bold text-primary-500 text-[15px] sm:text-[16px] tracking-tight transition-colors duration-300 group-hover:text-slate-900">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Medical Focus */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-accent-500 font-bold text-[13px] uppercase tracking-wider mb-4">
              <HeartPulse className="w-4 h-4" /> {t("home.b2b_eyebrow")}
            </div>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-primary-500 mb-6 tracking-tight">
              {t("home.b2b_title")}
            </h2>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-4">{t("home.b2b_desc")}</p>
            <p className="text-[17px] text-slate-600 leading-relaxed">{t("home.b2b_desc2")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {b2bItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-5">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-[15px]">{item}</span>
              </div>
            ))}
          </div>

          <Link
            to={contactPath(isRu)}
            className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 transition-colors text-white px-8 py-4 rounded-md font-bold text-[16px]"
          >
            {t("home.b2b_cta")} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-primary-50/40 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[32px] md:text-[42px] font-extrabold text-primary-500 mb-4 tracking-tight">
              {t("home.why_us")}
            </h2>
            <p className="text-[18px] text-slate-600 font-medium">{t("home.why_us_lead")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                <div className="text-accent-500 font-extrabold text-[14px] mb-3">0{i + 1}</div>
                <h3 className="text-[20px] font-bold text-primary-500 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Russia & Operation Model & Financial Power + internal links */}
      <section className="py-24 bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[24px] font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <Globe2 className="text-accent-500 w-8 h-8" /> {t("home.why_russia")}
              </h3>
              <ul className="space-y-4">
                {whyRussia.map((item, i) => (
                  <li key={i} className="flex gap-3 text-primary-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  to={russiaMarketPath(isRu)}
                  className="text-accent-500 hover:text-white transition-colors font-bold flex items-center gap-2 text-[14px]"
                >
                  {t("home.link_russia_market")} <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <ShieldCheck className="text-accent-500 w-8 h-8" /> {t("home.op_model")}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t("home.om1")}</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t("home.om2")}</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t("home.om3")}</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  to={operationModelPath(isRu)}
                  className="text-accent-500 hover:text-white transition-colors font-bold flex items-center gap-2 text-[14px]"
                >
                  {t("home.om_link")} <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <LineChart className="text-accent-500 w-8 h-8" /> {t("home.explore_title")}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to={servicesPath(isRu)} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_services")}
                  </Link>
                </li>
                <li>
                  <Link to={forWhomPath(isRu)} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_for_whom")}
                  </Link>
                </li>
                <li>
                  <Link to={blogIndexPath} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_blog")}
                  </Link>
                </li>
                <li>
                  <Link to={contactPath(isRu)} className="text-primary-100 hover:text-white transition-colors flex items-center gap-2">
                    <MoveRight className="w-4 h-4 text-accent-500" /> {t("home.link_contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-primary-500 mb-4 tracking-tight">{t("home.faq")}</h2>
            <p className="text-[18px] text-slate-500">{t("home.faq_desc")}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-primary-500 text-[18px] mb-2">{faq.question}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-[36px] md:text-[52px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
            {t("home.cta")}
          </h2>
          <p className="text-[18px] text-slate-500 mb-10 max-w-2xl mx-auto">{t("home.cta_desc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={contactPath(isRu)}
              className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-5 rounded-full font-bold text-[18px] flex items-center gap-3 shadow-[0_10px_20px_-5px_rgba(238,42,36,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(238,42,36,0.5)] transform hover:-translate-y-1"
            >
              {t("home.cta_btn")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

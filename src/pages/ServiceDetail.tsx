import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { serviceDetails } from "../data/servicesData";
import { serviceDetailsEN } from "../data/servicesDataEN";
import { serviceDetailsRU } from "../data/servicesDataRU";
import { createBreadcrumbSchema, createServiceSchema, createFaqSchema } from "@/utils/seo";
import {
  resolveServiceId,
  servicePath as localizedServicePath,
  servicesPath,
  contactPath,
  absoluteUrl,
  homePath,
} from "@/utils/ruPaths";

export default function ServiceDetail() {
  const { id: idParam } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";
  const id = resolveServiceId(idParam);

  let currentDetails = serviceDetails;
  if (isRu) {
    currentDetails = serviceDetailsRU;
  } else if (isEn) {
    currentDetails = serviceDetailsEN;
  }
  const service = id ? currentDetails[id] : null;

  if (!service || !id) {
    return <Navigate to={servicesPath(isRu)} replace />;
  }

  const Icon = service.icon;
  const pagePath = localizedServicePath(id, isRu);
  const canonicalUrl = absoluteUrl(pagePath);
  const trServiceUrl = absoluteUrl(`/hizmetler/${id}`);
  const ruServiceUrl = absoluteUrl(localizedServicePath(id, true));

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(isRu) },
    { name: t("nav.services"), url: servicesPath(isRu) },
    { name: service.title, url: pagePath },
  ]);

  const serviceSchema = createServiceSchema(service.title, service.description, canonicalUrl);
  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? createFaqSchema(
          service.faqs.map((faq: { q: string; a: string }) => ({
            question: faq.q,
            answer: faq.a,
          }))
        )
      : null;

  const ctaLabel =
    service.ctaLabel ||
    (isRu ? "Связаться с нами" : isEn ? "Contact Us" : "İletişime Geçin");

  return (
    <main className="bg-slate-50 min-h-screen pt-8 pb-12 md:pb-16">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href={trServiceUrl} />
        <link rel="alternate" hrefLang="ru" href={ruServiceUrl} />
        <link rel="alternate" hrefLang="x-default" href={trServiceUrl} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
        <Link
          to={servicesPath(isRu)}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 font-medium text-[14px] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />{" "}
          {isRu ? "Назад к услугам" : isEn ? "Back to Services" : "Hizmetlere Dön"}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[28px] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] opacity-60 -mr-20 -mt-20 pointer-events-none" />

          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary-50 text-primary-500 mb-5">
            <Icon className="w-7 h-7" />
          </div>
          <h1 className="text-[28px] md:text-[44px] font-extrabold text-primary-500 mb-3 tracking-tight leading-tight">
            {service.title}
          </h1>
          {service.subtitle && (
            <p className="text-[15px] md:text-[17px] font-semibold text-accent-500 mb-4 tracking-tight">
              {service.subtitle}
            </p>
          )}
          <p className="text-[16px] md:text-[18px] text-slate-500 leading-relaxed font-medium">
            {service.description}
          </p>
          {service.lead && (
            <p className="text-[15px] md:text-[16px] text-slate-500 leading-relaxed mt-3">{service.lead}</p>
          )}
          <Link
            to={contactPath(isRu)}
            className="mt-6 bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold py-3.5 px-6 rounded-xl inline-flex items-center justify-center gap-2 shadow-sm text-[15px]"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {service.contentSections &&
              service.contentSections.map((section: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="bg-white rounded-3xl p-5 md:p-7 border border-slate-100 shadow-sm"
                >
                  <h2 className="text-[20px] md:text-[22px] font-bold text-primary-500 mb-4 flex items-center gap-3">
                    {section.title}
                  </h2>
                  <div className="text-[15px] md:text-[16px] leading-relaxed">{section.content}</div>
                </motion.div>
              ))}

            {service.faqs && service.faqs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-5 md:p-7 border border-slate-100 shadow-sm"
              >
                <h2 className="text-[20px] md:text-[22px] font-bold text-primary-500 mb-4">
                  {isRu
                    ? "Часто задаваемые вопросы"
                    : isEn
                      ? "Frequently Asked Questions"
                      : "Sıkça Sorulan Sorular"}
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq: { q: string; a: string }, index: number) => (
                    <div
                      key={index}
                      className="border-b border-slate-100 last:border-0 pb-4 last:pb-0"
                    >
                      <h3 className="font-bold text-primary-500 text-[16px] md:text-[17px] mb-1.5">{faq.q}</h3>
                      <p className="text-slate-500 leading-relaxed text-[14px] md:text-[15px]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="md:col-span-1 space-y-5 md:sticky md:top-24 self-start">
            {service.forWhom && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary-500 rounded-3xl p-5 md:p-6 border border-primary-400 text-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400 rounded-full blur-[40px] opacity-50" />
                <h3 className="text-[18px] font-bold mb-3 relative z-10 flex items-center gap-2">
                  <Info className="w-5 h-5 text-accent-500" />
                  {isRu ? "Для кого подходит?" : isEn ? "Who is it for?" : "Kimler İçin Uygun?"}
                </h3>
                <div className="text-primary-100 leading-relaxed relative z-10 text-[14px]">{service.forWhom}</div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm text-center"
            >
              <h3 className="text-[18px] font-bold text-primary-500 mb-3 tracking-tight">
                {isRu ? "Начните прямо сейчас" : isEn ? "Take Action Now" : "Hemen Aksiyon Alın"}
              </h3>
              <p className="text-slate-500 text-[14px] mb-5 leading-relaxed">
                {isRu
                  ? "Узнайте бесплатно, какую структуру мы можем выстроить для вашего бренда в рамках этой услуги."
                  : isEn
                    ? "Learn for free how we can build a structure for your brand specifically for this service."
                    : "Bu hizmet özelinde markanız için nasıl bir yapı kurabileceğimizi ücretsiz öğrenin."}
              </p>
              <Link
                to={contactPath(isRu)}
                className="bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold py-3.5 px-6 rounded-xl w-full flex items-center justify-center gap-2 shadow-sm text-[15px]"
              >
                {ctaLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

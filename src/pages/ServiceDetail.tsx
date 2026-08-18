import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { serviceDetails } from "../data/servicesData";
import { serviceDetailsEN } from "../data/servicesDataEN";
import { serviceDetailsRU } from "../data/servicesDataRU";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/seo";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  let currentDetails = serviceDetails;
  if (i18n.language === 'ru') {
    currentDetails = serviceDetailsRU;
  } else if (i18n.language === 'en') {
    currentDetails = serviceDetailsEN;
  }
  const service = id ? currentDetails[id] : null;

  if (!service) {
    return <Navigate to={i18n.language === 'ru' ? '/ru/hizmetler' : '/hizmetler'} replace />;
  }

  const Icon = service.icon;
  const canonicalUrl = `https://russiamarketentry.com/hizmetler/${id}`;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: i18n.language === 'ru' ? 'Главная' : (i18n.language === 'en' ? 'Home' : 'Ana Sayfa'), url: i18n.language === 'ru' ? '/ru' : '/' },
    { name: t('nav.services'), url: i18n.language === 'ru' ? '/ru/hizmetler' : '/hizmetler' },
    { name: service.title, url: `/hizmetler/${id}` }
  ]);

  const serviceSchema = createServiceSchema(service.title, service.description, canonicalUrl);

  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href={`https://russiamarketentry.com/hizmetler/${id}`} />
        <link rel="alternate" hrefLang="en" href={`https://russiamarketentry.com/hizmetler/${id}`} />
        <link rel="alternate" hrefLang="ru" href={`https://russiamarketentry.com/hizmetler/${id}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://russiamarketentry.com/hizmetler/${id}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to={i18n.language === 'ru' ? '/ru/hizmetler' : '/hizmetler'} className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 font-medium text-[14px] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {i18n.language === 'ru' ? 'Назад к услугам' : (i18n.language === 'en' ? 'Back to Services' : 'Hizmetlere Dön')}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] opacity-60 -mr-20 -mt-20 pointer-events-none" />
          
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary-50 text-primary-500 mb-8">
             <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-500 leading-relaxed font-medium">
            {service.description}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-8">
            {service.contentSections && service.contentSections.map((section: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (idx * 0.05) }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
              >
                <h2 className="text-[24px] font-bold text-primary-500 mb-6 flex items-center gap-3">
                  {section.title}
                </h2>
                <div className="text-[16px] leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {service.faqs && service.faqs.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
              >
                <h2 className="text-[24px] font-bold text-primary-500 mb-6">
                  {i18n.language === 'ru' ? 'Часто задаваемые вопросы' : (i18n.language === 'en' ? 'Frequently Asked Questions' : 'Sıkça Sorulan Sorular')}
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq: { q: string, a: string }, index: number) => (
                    <div key={index} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                      <h3 className="font-bold text-primary-500 text-[18px] mb-2">{faq.q}</h3>
                      <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="md:col-span-1 space-y-6 md:sticky md:top-24 self-start">
            {service.forWhom && (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary-500 rounded-3xl p-8 border border-primary-400 text-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400 rounded-full blur-[40px] opacity-50" />
                <h3 className="text-[20px] font-bold mb-4 relative z-10 flex items-center gap-2">
                  <Info className="w-5 h-5 text-accent-500" />
                  {i18n.language === 'ru' ? 'Для кого подходит?' : (i18n.language === 'en' ? 'Who is it for?' : 'Kimler İçin Uygun?')}
                </h3>
                <div className="text-primary-100 leading-relaxed relative z-10">
                  {service.forWhom}
                </div>
              </motion.div>
            )}

            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center"
            >
              <h3 className="text-[20px] font-bold text-primary-500 mb-4 tracking-tight">
                {i18n.language === 'ru' ? 'Начните прямо сейчас' : (i18n.language === 'en' ? 'Take Action Now' : 'Hemen Aksiyon Alın')}
              </h3>
              <p className="text-slate-500 text-[14px] mb-6 leading-relaxed">
                {i18n.language === 'ru' 
                  ? 'Узнайте бесплатно, какую структуру мы можем выстроить для вашего бренда в рамках этой услуги.'
                  : (i18n.language === 'en' 
                    ? 'Learn for free how we can build a structure for your brand specifically for this service.' 
                    : 'Bu hizmet özelinde markanız için nasıl bir yapı kurabileceğimizi ücretsiz öğrenin.')}
              </p>
              <Link to={i18n.language === 'ru' ? "/ru/iletisim" : "/iletisim"} className="bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold py-3.5 px-6 rounded-xl w-full flex items-center justify-center gap-2 shadow-sm text-[15px]">
                {i18n.language === 'ru' ? 'Связаться с нами' : (i18n.language === 'en' ? 'Contact Us' : 'İletişime Geçin')} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

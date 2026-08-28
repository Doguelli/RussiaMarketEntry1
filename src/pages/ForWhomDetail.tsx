import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { forWhomData } from "../data/forWhomData";
import { forWhomDataEN } from "../data/forWhomDataEN";
import { forWhomDataRU } from "../data/forWhomDataRU";
import { createBreadcrumbSchema } from "@/utils/seo";
import {
  resolveForWhomSlug,
  forWhomPath,
  forWhomDetailPath,
  contactPath,
  absoluteUrl,
  homePath,
} from "@/utils/ruPaths";

export default function ForWhomDetail() {
  const { slug: slugParam } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const isEn = i18n.language === 'en';
  const slug = resolveForWhomSlug(slugParam);
  
  const currentData = isRu ? forWhomDataRU : (isEn ? forWhomDataEN : forWhomData);
  const data = currentData.find((item) => item.slug === slug);

  if (!data || !slug) {
    return <Navigate to={forWhomPath(isRu)} replace />;
  }

  const defaultConclusionDesc = isRu
    ? "Свяжитесь с нами, чтобы настроить наиболее эффективную модель продаж и начать масштабирование."
    : (isEn 
      ? "Contact us to set up the most suitable operation model for you and start selling."
      : "Size en uygun operasyon modelini kurmak ve satışlara başlamak için bizimle iletişime geçin.");

  const pagePath = forWhomDetailPath(slug, isRu);
  const canonicalUrl = absoluteUrl(pagePath);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? 'Главная' : (isEn ? 'Home' : 'Ana Sayfa'), url: homePath(isRu) },
    { name: isRu ? 'Для кого' : (isEn ? 'Who Is It For?' : t('nav.for_whom')), url: forWhomPath(isRu) },
    { name: data.shortTitle, url: pagePath }
  ]);

  return (
    <main className="bg-slate-50 min-h-screen pt-10 pb-12 md:pb-16">
      <Helmet>
        <title>{`${data.title} | Russia Market Entry`}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Turkish and Russian are the only real versions of this page — English
            is served from the Turkish URL, so it gets no alternate of its own. */}
        <link rel="alternate" hrefLang="tr" href={absoluteUrl(forWhomDetailPath(slug, false))} />
        <link rel="alternate" hrefLang="ru" href={absoluteUrl(forWhomDetailPath(slug, true))} />
        <link rel="alternate" hrefLang="x-default" href={absoluteUrl(forWhomDetailPath(slug, false))} />
        <meta property="og:title" content={`${data.title} | Russia Market Entry`} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link to={forWhomPath(isRu)} className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-500 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" />
            {isRu ? 'Назад к решениям' : (isEn ? 'Back to Solutions' : 'Kimler İçin Sayfasına Dön')}
          </Link>
        </div>

        {/* Header */}
        <div className={`bg-white rounded-3xl p-6 lg:p-10 border-t-4 border-slate-100 shadow-xl overflow-hidden relative mb-10`} style={{ borderTopColor: 'var(' + data.color + ')' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[14px] mb-6 ${data.lightColor} ${data.color}`}>
              {data.icon}
              <span>{isRu ? 'Персональное решение' : (isEn ? 'Custom Solution' : 'Özel Çözüm')}</span>
            </div>
            
            <h1 className={`text-[32px] md:text-[48px] font-extrabold text-primary-500 leading-tight mb-8`}>
              {data.title}
            </h1>
            
            {/* Content */}
            <div className="mt-8">
              {data.content}
            </div>

            {/* Conclusion */}
            <div className={`rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden mt-16 ${data.bgColor}`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 pointer-events-none" />
              
              <h3 className="text-[28px] font-bold mb-6">
                {data.conclusionTitle || (isRu ? 'Итог' : (isEn ? 'Conclusion' : 'Sonuç'))}
              </h3>
              
              <p className="text-white/90 text-[18px] leading-relaxed mb-8 max-w-4xl">
                {data.conclusionDesc || defaultConclusionDesc}
              </p>

              <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[22px] font-bold mb-2">
                    {isRu ? 'Сделайте первый шаг для выхода на рынок' : (isEn ? 'Take the First Step to Enter the Market' : 'Pazara Giriş İçin İlk Adımı Atın')}
                  </h4>
                  <p className="text-white/80">
                    {isRu ? 'Свяжитесь с нами, чтобы запустить новый канал масштабирования продаж.' : (isEn ? 'Contact us to create a new growth channel.' : 'Yeni bir büyüme kanalı oluşturmak için bizimle iletişime geçin.')}
                  </p>
                </div>
                <Link
                  to={contactPath(isRu)}
                  className="shrink-0 inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  {isRu ? 'Оставить заявку' : (isEn ? 'Apply Now' : 'Hemen Başvuru Yapın')} <ArrowRight className="w-5 h-5"/>
                </Link>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </main>
  );
}

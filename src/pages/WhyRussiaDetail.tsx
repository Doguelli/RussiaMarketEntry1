import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { TrendingUp, Globe2, Truck, ShieldCheck, ArrowRight, BarChart3, Users, PackageOpen, Target } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema } from "@/utils/seo";
import { russiaMarketPath, whyRussiaPath, absoluteUrl, homePath, contactPath } from "@/utils/ruPaths";

export default function WhyRussiaDetail() {
  const { hash } = useLocation();
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const isEn = i18n.language === 'en';
  const pagePath = whyRussiaPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? 'Главная' : (isEn ? 'Home' : 'Ana Sayfa'), url: homePath(isRu) },
    { name: t('nav.russia_market'), url: russiaMarketPath(isRu) },
    { name: isRu ? 'Анализ рынка' : (isEn ? 'Why Russia Analysis' : 'Neden Rusya Analizi'), url: pagePath }
  ]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>{t('why_russia_detail.title')}</title>
        <meta name="description" content={t('why_russia_detail.desc_meta')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/neden-rusya-detay" />
        <link rel="alternate" hrefLang="en" href="https://russiamarketentry.com/neden-rusya-detay" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/pochemu-rossiya" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/neden-rusya-detay" />
        <meta property="og:title" content={t('why_russia_detail.title')} />
        <meta property="og:description" content={t('why_russia_detail.desc_meta')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider">
              {t('why_russia_detail.badge')}
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
              {t('why_russia_detail.h1')}
            </h1>
            <p className="text-[18px] text-slate-500 leading-relaxed">
              {t('why_russia_detail.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          
          {/* Hacim */}
          <motion.div
            id="hacim"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-8">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">{t('why_russia_detail.volume_title')}</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p dangerouslySetInnerHTML={{__html: t('why_russia_detail.volume_p1')}}></p>
              <p dangerouslySetInnerHTML={{__html: t('why_russia_detail.volume_p2')}}></p>
              <ul>
                <li>{t('why_russia_detail.volume_li1')}</li>
                <li>{t('why_russia_detail.volume_li2')}</li>
                <li>{t('why_russia_detail.volume_li3')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Talep */}
          <motion.div
            id="talep"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-500 mb-8">
              <Globe2 className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">{t('why_russia_detail.demand_title')}</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p dangerouslySetInnerHTML={{__html: t('why_russia_detail.demand_p1')}}></p>
              <p>{t('why_russia_detail.demand_p2')}</p>
              <ul>
                <li>{t('why_russia_detail.demand_li1')}</li>
                <li>{t('why_russia_detail.demand_li2')}</li>
                <li>{t('why_russia_detail.demand_li3')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Lojistik */}
          <motion.div
            id="lojistik"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-[#005BFF]/10 rounded-2xl flex items-center justify-center text-[#005BFF] mb-8">
              <Truck className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">{t('why_russia_detail.logistics_title')}</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p dangerouslySetInnerHTML={{__html: t('why_russia_detail.logistics_p1')}}></p>
              <p dangerouslySetInnerHTML={{__html: t('why_russia_detail.logistics_p2')}}></p>
              <ul>
                <li>{t('why_russia_detail.logistics_li1')}</li>
                <li>{t('why_russia_detail.logistics_li2')}</li>
                <li>{t('why_russia_detail.logistics_li3')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Rekabet */}
          <motion.div
            id="rekabet"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-primary-500 mb-8">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">{t('why_russia_detail.competition_title')}</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p>{t('why_russia_detail.competition_p1')}</p>
              <p dangerouslySetInnerHTML={{__html: t('why_russia_detail.competition_p2')}}></p>
              <ul>
                <li>{t('why_russia_detail.competition_li1')}</li>
                <li>{t('why_russia_detail.competition_li2')}</li>
                <li>{t('why_russia_detail.competition_li3')}</li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary-500 rounded-3xl p-10 md:p-14 text-center">
           <h2 className="text-[32px] font-extrabold text-white mb-6">{t('why_russia_detail.cta_title')}</h2>
           <p className="text-primary-100 max-w-2xl mx-auto mb-10 text-[18px]">
             {t('why_russia_detail.cta_desc')}
           </p>
           <Link
             to={contactPath(isRu)}
             className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-4 rounded-full font-bold text-[16px] shadow-lg transform hover:-translate-y-1"
           >
             {t('why_russia_detail.cta_btn')} <ArrowRight className="w-5 h-5" />
           </Link>
        </div>

      </div>
    </main>
  );
}

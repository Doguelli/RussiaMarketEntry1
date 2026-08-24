import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, ArrowRight, BarChart3, Calculator, Receipt, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema } from "@/utils/seo";
import { operationModelPath, absoluteUrl, homePath, contactPath } from "@/utils/ruPaths";

export default function OperationModel() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const isEn = i18n.language === 'en';
  const pagePath = operationModelPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? 'Главная' : (isEn ? 'Home' : 'Ana Sayfa'), url: homePath(isRu) },
    { name: t('nav.op_model'), url: pagePath }
  ]);

  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>{t('op_model_page.title')}</title>
        <meta name="description" content={t('op_model_page.desc_meta')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/operasyon-modeli" />
        <link rel="alternate" hrefLang="en" href="https://russiamarketentry.com/operasyon-modeli" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/model-raboty" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/operasyon-modeli" />
        <meta property="og:title" content={t('op_model_page.title')} />
        <meta property="og:description" content={t('op_model_page.desc_meta')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-accent-50 text-accent-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider">
              {t('op_model_page.badge')}
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight" dangerouslySetInnerHTML={{__html: t('op_model_page.h1')}}>
            </h1>
            <p className="text-[18px] text-slate-500 leading-relaxed max-w-3xl mx-auto">
              {t('op_model_page.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Konsinye Modeli Details */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-6 tracking-tight">{t('op_model_page.how_it_works')}</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {t('op_model_page.how_it_works_desc')}
              </p>
              <ul className="space-y-4">
                {[
                  t('op_model_page.li1'),
                  t('op_model_page.li2'),
                  t('op_model_page.li3'),
                  t('op_model_page.li4')
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 font-medium">
                    <ShieldCheck className="w-6 h-6 text-accent-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-primary-500 mb-4 text-[20px]">{t('op_model_page.advantages')}</h3>
              <div className="space-y-6 relative border-l-2 border-slate-200 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-accent-500 rounded-full ring-4 ring-white" />
                  <strong className="text-slate-800 block text-[16px]">{t('op_model_page.adv1_title')}</strong>
                  <span className="text-slate-500 text-[14px]">{t('op_model_page.adv1_desc')}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-accent-500 rounded-full ring-4 ring-white" />
                  <strong className="text-slate-800 block text-[16px]">{t('op_model_page.adv2_title')}</strong>
                  <span className="text-slate-500 text-[14px]">{t('op_model_page.adv2_desc')}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-accent-500 rounded-full ring-4 ring-white" />
                  <strong className="text-slate-800 block text-[16px]">{t('op_model_page.adv3_title')}</strong>
                  <span className="text-slate-500 text-[14px]">{t('op_model_page.adv3_desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vergi ve Hukuk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-primary-500 rounded-3xl p-10 text-white"
          >
            <h2 className="text-[28px] font-extrabold mb-6">{t('op_model_page.tax_title')}</h2>
            <p className="text-primary-100 mb-8 leading-relaxed text-[15px]">
              {t('op_model_page.tax_desc')}
            </p>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <Landmark className="w-8 h-8 text-accent-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-[16px]">{t('op_model_page.tax1_title')}</h4>
                  <p className="text-primary-100 text-[14px]">{t('op_model_page.tax1_desc')}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Receipt className="w-8 h-8 text-accent-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-[16px]">{t('op_model_page.tax2_title')}</h4>
                  <p className="text-primary-100 text-[14px]">{t('op_model_page.tax2_desc')}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm"
          >
            <h2 className="text-[28px] font-extrabold text-primary-500 mb-6 flex items-center gap-3">
              <BarChart3 className="text-accent-500 w-8 h-8" />
              {t('op_model_page.fin_title')}
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{__html: t('op_model_page.fin_desc')}}>
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="space-y-4 text-[15px]">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">{t('op_model_page.fin_price')}</span>
                  <strong className="text-primary-500">%100 ($50)</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-slate-500">
                  <span>{t('op_model_page.fin_cost')}</span>
                  <span>~ %30 ($15)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-slate-500">
                  <span>{t('op_model_page.fin_com')}</span>
                  <span>~ %25 ($12.5)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-slate-500">
                  <span>{t('op_model_page.fin_log')}</span>
                  <span>~ %15 ($7.5)</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-primary-500 font-bold text-[18px]">{t('op_model_page.fin_net')}</span>
                  <strong className="text-accent-500 font-black text-[20px]">%20 - %25</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to={contactPath(isRu)}
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-5 rounded-full font-bold text-[16px] shadow-lg transform hover:-translate-y-1"
          >
            {t('op_model_page.cta')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}

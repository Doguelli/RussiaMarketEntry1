import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Globe2, ShieldCheck, TrendingUp, Users, CheckCircle2, Factory, LineChart, MoveRight, ShoppingBag, Target, Settings, ShoppingCart, Award, Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

import { createOrganizationSchema, createBreadcrumbSchema } from "@/utils/seo";

export default function Home() {
  const { t, i18n } = useTranslation();

  const orgSchema = createOrganizationSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: i18n.language === 'en' ? 'Home' : 'Ana Sayfa', url: '/' }
  ]);

  const trustStats = [
    { value: "100+", text: t('home.trust1'), icon: Users },
    { value: "50+", text: t('home.trust2'), icon: Flag },
    { value: "$10M+", text: t('home.trust3'), icon: TrendingUp },
    { value: "15+", text: t('home.trust4'), icon: Award },
  ];

  const services = [
    { id: "operasyon-kurulumu", title: t('home.services.op_setup'), desc: t('home.services.op_setup_desc') },
    { id: "pazaryeri-yonetimi", title: t('home.services.marketplace'), desc: t('home.services.marketplace_desc') },
    { id: "lojistik-ve-depo", title: t('home.services.logistics'), desc: t('home.services.logistics_desc') },
    { id: "vergi-ve-finans", title: t('home.services.tax'), desc: t('home.services.tax_desc') },
    { id: "sistem-ve-entegrasyon", title: t('home.services.system'), desc: t('home.services.system_desc') },
    { id: "marka-buyutme", title: t('home.services.brand'), desc: t('home.services.brand_desc') },
  ];

  const howWeWork = [
    { step: "1", title: t('home.step1'), desc: t('home.step1_desc') },
    { step: "2", title: t('home.step2'), desc: t('home.step2_desc') },
    { step: "3", title: t('home.step3'), desc: t('home.step3_desc') },
  ];

  const whyRussia = [
    t('home.wr1'),
    t('home.wr2'),
    t('home.wr3'),
    t('home.wr4')
  ];

  return (
    <main>
      <Helmet>
        <title>{i18n.language === 'en' ? 'Russia Market Entry | Ozon & Wildberries Management' : 'Rusya Pazarına Giriş | Ozon & Wildberries Türkiye Yönetimi'}</title>
        <meta name="description" content={i18n.language === 'en' ? 'End-to-end operation guide for e-commerce, Ozon and Wildberries sales consulting, company formation, customs and logistics from Turkey to Russia.' : "Türkiye'den Rusya'ya e-ticaret, Ozon ve Wildberries satış danışmanlığı, şirket kuruluşu, gümrük ve lojistik alanlarında uçtan uca operasyon rehberiniz."} />
        <meta name="keywords" content="Rusya e-ticaret, Rusya pazarına giriş, Ozon hesap açma, Wildberries Türkiye, Rusya şirket kurmak, Rusya ihracat" />
        <link rel="canonical" href="https://russiamarketentry.com/" />
        <meta property="og:title" content={i18n.language === 'en' ? 'Russia Market Entry | Ozon & Wildberries Management' : 'Rusya Pazarına Giriş | Ozon & Wildberries Türkiye Yönetimi'} />
        <meta property="og:description" content={i18n.language === 'en' ? 'End-to-end operation guide for e-commerce, Ozon and Wildberries sales consulting, company formation, customs and logistics from Turkey to Russia.' : "Türkiye'den Rusya'ya e-ticaret, Ozon ve Wildberries satış danışmanlığı, şirket kuruluşu, gümrük ve lojistik alanlarında uçtan uca operasyon rehberiniz."} />
        <meta property="og:url" content="https://russiamarketentry.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-900 pt-20 pb-32 lg:pt-24 lg:pb-10 lg:min-h-[800px] flex flex-col justify-center border-b border-white/5">
        {/* Background Overlay & Image */}
        <div className="absolute inset-0 w-full h-full bg-primary-900">
           {/* Image with CSS Mask for perfect fade */}
           <img 
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2070&auto=format&fit=crop" 
            alt="Moskova ve Rusya e-ticaret pazarı" 
            className="absolute right-0 top-0 w-full lg:w-[75%] h-full object-cover object-center lg:object-[80%_center] opacity-40 lg:opacity-90 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_100%)]"
          />
           {/* Additional subtle gradient overlay for text readability */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#040b16] from-10% via-[#040b16]/80 to-transparent z-10 hidden lg:block" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#040b16] from-10% via-[#040b16]/90 to-transparent z-10 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start pt-10 lg:pt-0">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
            >
              <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-white mb-6 tracking-tight">
                {t('home.title1')}<br />
                <span className="text-accent-500">{t('home.title2')}</span>
              </h1>
              <p className="text-[16px] lg:text-[18px] text-slate-300 max-w-[550px] leading-relaxed mb-10 font-medium">
                {t('home.desc')}
              </p>
              
              <Link
                to="/iletisim"
                className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-4 rounded-md font-bold text-[16px] flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-wide"
              >
                {t('home.apply')} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

           {/* Features Bar inside Hero */}
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 lg:mt-32 w-full flex flex-col gap-8"
          >
             <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 border-t border-white/10 pt-8">
                
                {/* Feature 1 */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent-500 flex-shrink-0">
                    <Target className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t('home.f1_title')}</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.f1_desc')}}></p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent-500 flex-shrink-0">
                    <Settings className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t('home.f2_title')}</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.f2_desc')}}></p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent-500 flex-shrink-0">
                    <ShoppingCart className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t('home.f3_title')}</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.f3_desc')}}></p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent-500 flex-shrink-0">
                    <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">{t('home.f4_title')}</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed" dangerouslySetInnerHTML={{__html: t('home.f4_desc')}}></p>
                  </div>
                </div>

             </div>

             {/* Bottom Trust/Link Bar */}
             <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-6 pb-2">
                <div className="flex items-center gap-2 text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-[13px] tracking-wide relative top-[1px]">russiamarketentry.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 mt-4 md:mt-0 font-medium">
                  <ShieldCheck className="w-4 h-4 text-accent-500" />
                  <span className="text-[13px] tracking-wide relative top-[1px]">
                    {i18n.language === 'en' ? 'Secure · Transparent · Result Oriented' : 'Güvenli · Şeffaf · Sonuç Odaklı'}
                  </span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-[32px] font-extrabold text-primary-500 mb-1">{stat.value}</div>
                <p className="font-medium text-slate-500 text-[15px]">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-primary-50/30 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[36px] md:text-[42px] font-extrabold text-primary-500 mb-4 tracking-tight">{t('home.what_we_do')}</h2>
            <p className="text-[18px] text-slate-500">{t('home.what_we_do_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link to={`/hizmetler/${service.id}`} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer h-full group flex flex-col"
                >
                  <h3 className="text-[20px] font-bold text-primary-500 mb-3 group-hover:text-accent-500 transition-colors flex justify-between items-center">
                    {service.title}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed flex-grow">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who For? + How We Work */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* KİMLER İÇİN */}
            <div>
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-4 tracking-tight">{t('home.for_whom')}</h2>
              <p className="text-slate-500 mb-10">{t('home.for_whom_desc')}</p>
              
              <div className="space-y-6">
                <Link to="/kimler-icin" className="group block bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-accent-500/30 hover:bg-white hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 shadow-sm">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-primary-500 text-[18px]">{t('home.fw1_title')}</h3>
                      <p className="text-slate-500 text-[14px]">{t('home.fw1_desc')}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 transition-colors" />
                  </div>
                </Link>

                <Link to="/kimler-icin" className="group block bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-accent-500/30 hover:bg-white hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 shadow-sm">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-primary-500 text-[18px]">{t('home.fw2_title')}</h3>
                      <p className="text-slate-500 text-[14px]">{t('home.fw2_desc')}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 transition-colors" />
                  </div>
                </Link>

                <Link to="/kimler-icin" className="group block bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-accent-500/30 hover:bg-white hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 shadow-sm">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-primary-500 text-[18px]">{t('home.fw3_title')}</h3>
                      <p className="text-slate-500 text-[14px]">{t('home.fw3_desc')}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 transition-colors" />
                  </div>
                </Link>
              </div>
            </div>

            {/* NASIL ÇALIŞIYORUZ */}
            <div>
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-10 tracking-tight">{t('home.how_we_work')}</h2>
              
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

      {/* Why Russia & Operation Model & Financial Power */}
      <section className="py-24 bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div>
              <h3 className="text-[24px] font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <Globe2 className="text-accent-500 w-8 h-8" /> {t('home.why_russia')}
              </h3>
              <ul className="space-y-4">
                {whyRussia.map((item, i) => (
                  <li key={i} className="flex gap-3 text-primary-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[24px] font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <ShieldCheck className="text-accent-500 w-8 h-8" /> {t('home.op_model')}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t('home.om1')}</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t('home.om2')}</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t('home.om3')}</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/operasyon-modeli" className="text-accent-500 hover:text-white transition-colors font-bold flex items-center gap-2 text-[14px]">
                  {t('home.om_link')} <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <LineChart className="text-accent-500 w-8 h-8" /> {t('home.finance')}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t('home.fin1')}</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t('home.fin2')}</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>{t('home.fin3')}</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/operasyon-modeli" className="text-accent-500 hover:text-white transition-colors font-bold flex items-center gap-2 text-[14px]">
                  {t('home.fin_link')} <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-primary-500 mb-4 tracking-tight">{t('home.faq')}</h2>
            <p className="text-[18px] text-slate-500">{t('home.faq_desc')}</p>
          </div>
          
          <div className="space-y-4">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-primary-500 text-[18px] mb-2">{t('home.faq1_q')}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{t('home.faq1_a')}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-primary-500 text-[18px] mb-2">{t('home.faq2_q')}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{t('home.faq2_a')}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-primary-500 text-[18px] mb-2">{t('home.faq3_q')}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{t('home.faq3_a')}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-primary-500 text-[18px] mb-2">{t('home.faq4_q')}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{t('home.faq4_a')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
            {t('home.cta')}
          </h2>
          <p className="text-[18px] text-slate-500 mb-10 max-w-2xl mx-auto">
            {t('home.cta_desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/iletisim"
              className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-5 rounded-full font-bold text-[18px] flex items-center gap-3 shadow-[0_10px_20px_-5px_rgba(238,42,36,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(238,42,36,0.5)] transform hover:-translate-y-1"
            >
              {t('home.cta_btn')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

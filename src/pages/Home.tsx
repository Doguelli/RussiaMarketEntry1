import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Globe2, ShieldCheck, TrendingUp, Users, CheckCircle2, Factory, LineChart, MoveRight, ShoppingBag, Target, Settings, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const trustStats = [
  { text: "300M+ aylık ziyaretçi trafiğine erişim", icon: Globe2 },
  { text: "Uçtan uca operasyon yönetimi", icon: ShieldCheck },
  { text: "Konsinye ve düşük riskli giriş modeli", icon: TrendingUp },
  { text: "Türkiye + Rusya entegre yapı", icon: CheckCircle2 },
];

const services = [
  { id: "operasyon-kurulumu", title: "Operasyon Kurulumu", desc: "Rusya pazarına giriş için tüm altyapıyı kuruyoruz" },
  { id: "pazaryeri-yonetimi", title: "Pazaryeri Yönetimi", desc: "Wildberries, Lamoda ve Ozon satış süreçlerini yönetiyoruz" },
  { id: "lojistik-ve-depo", title: "Lojistik ve Depo", desc: "Türkiye'den Rusya'ya tüm sevkiyat ve fulfillment süreçleri" },
  { id: "vergi-ve-finans", title: "Vergi ve Finans", desc: "Kârlı ve sürdürülebilir finansal yapı" },
  { id: "sistem-ve-entegrasyon", title: "Sistem ve Entegrasyon", desc: "Insales altyapısı ile tüm operasyonu tek panelden yönetim" },
  { id: "marka-buyutme", title: "Marka Büyütme", desc: "Reklam ve performans yönetimi ile satış artırma" },
];

const howWeWork = [
  { step: "1", title: "Analiz ve Planlama", desc: "Ürün, pazar ve operasyon stratejisi belirlenir" },
  { step: "2", title: "Kurulum", desc: "Tüm sistem ve operasyon altyapısı kurulur" },
  { step: "3", title: "Satış ve Büyüme", desc: "Satış başlar ve veri ile büyüme sağlanır" },
];

const whyRussia = [
  "Hızla büyüyen e-ticaret pazarı",
  "Türk ürünlerine yüksek talep",
  "Düşük rekabet + yüksek fırsat",
  "Yüksek hacimli satış potansiyeli"
];

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Rusya Pazarına Giriş | Ozon & Wildberries Türkiye Yönetimi</title>
        <meta name="description" content="Türkiye'den Rusya'ya e-ticaret, Ozon ve Wildberries satış danışmanlığı, şirket kuruluşu, gümrük ve lojistik alanlarında uçtan uca operasyon rehberiniz." />
        <meta name="keywords" content="Rusya e-ticaret, Rusya pazarına giriş, Ozon hesap açma, Wildberries Türkiye, Rusya şirket kurmak, Rusya ihracat" />
        <link rel="canonical" href="https://russiamarketentry.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#040b16] pt-20 pb-32 lg:pt-24 lg:pb-10 lg:min-h-[800px] flex flex-col justify-center border-b border-white/5">
        {/* Background Overlay & Image */}
        <div className="absolute inset-0 w-full h-full bg-[#040b16]">
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
              <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.1] font-bold text-white mb-6 tracking-tight">
                Rusya Pazarına<br />
                Güvenli ve Doğru<br />
                Bir Giriş İçin<br />
                <span className="text-accent-500">Doğru Adrestesiniz.</span>
              </h1>
              <p className="text-[18px] lg:text-[20px] text-slate-300 max-w-[500px] leading-relaxed mb-10 font-medium">
                Markanız için en doğru strateji, operasyon ve büyüme modelini birlikte planlıyoruz.
              </p>
              
              <Link
                to="/iletisim"
                className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-4 rounded-md font-bold text-[16px] flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-wide"
              >
                HEMEN BAŞVUR <ArrowRight className="w-5 h-5" />
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
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">PAZARA GİRİŞ</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed">Doğru strateji ve<br className="hidden lg:block"/>yol haritası</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent-500 flex-shrink-0">
                    <Settings className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">OPERASYON</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed">Şirket yapısı, lojistik<br className="hidden lg:block"/>ve operasyon altyapısı</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent-500 flex-shrink-0">
                    <ShoppingCart className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">PAZARYERLERİ</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed">Wildberries, Ozon ve<br className="hidden lg:block"/>diğer kanallarda satış yapısı</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent-500 flex-shrink-0">
                    <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-[15px] uppercase tracking-wide">BÜYÜME</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed">Pazarlama, marka konumlandırma<br className="hidden lg:block"/>ve sürdürülebilir büyüme</p>
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
                  <span className="text-[13px] tracking-wide relative top-[1px]">Güvenli &middot; Şeffaf &middot; Sonuç Odaklı</span>
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
                <p className="font-semibold text-slate-700 text-[15px]">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-primary-50/30 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[36px] md:text-[42px] font-extrabold text-primary-500 mb-4 tracking-tight">NE YAPIYORUZ?</h2>
            <p className="text-[18px] text-slate-500">Rusya pazarında markanız için tüm süreci yönetiyoruz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link to={`/hizmetler#${service.id}`} key={i}>
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
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-4 tracking-tight">KİMLER İÇİN?</h2>
              <p className="text-slate-500 mb-10">Her iş modeli için farklı çözümler sunuyoruz:</p>
              
              <div className="space-y-6">
                <Link to="/kimler-icin" className="group block bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-accent-500/30 hover:bg-white hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 shadow-sm">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-primary-500 text-[18px]">Tekstil Markaları İçin</h3>
                      <p className="text-slate-500 text-[14px]">Markanızı Rusya'da konumlandırın ve büyütün</p>
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
                      <h3 className="font-bold text-primary-500 text-[18px]">Üreticiler İçin</h3>
                      <p className="text-slate-500 text-[14px]">Üretiminizi doğrudan satışa dönüştürün</p>
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
                      <h3 className="font-bold text-primary-500 text-[18px]">E-Ticaret Girişimcileri İçin</h3>
                      <p className="text-slate-500 text-[14px]">Sıfırdan operasyon kurun ve büyütün</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 transition-colors" />
                  </div>
                </Link>
              </div>
            </div>

            {/* NASIL ÇALIŞIYORUZ */}
            <div>
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-10 tracking-tight">NASIL ÇALIŞIYORUZ?</h2>
              
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
                <Globe2 className="text-accent-500 w-8 h-8" /> NEDEN RUSYA?
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
                <ShieldCheck className="text-accent-500 w-8 h-8" /> OPERASYON MODELİ
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>Konsinye model ile düşük riskli giriş</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>Kendi operasyonunu kurma imkânı</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>Esnek ödeme ve büyüme planı</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/operasyon-modeli" className="text-accent-500 hover:text-white transition-colors font-bold flex items-center gap-2 text-[14px]">
                  Modeli İncele <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <LineChart className="text-accent-500 w-8 h-8" /> FİNANSAL GÜÇ
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>Ortalama %20–30 kârlılık hedefi</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>Kontrollü maliyet yönetimi</span>
                </li>
                <li className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>Şeffaf raporlama sistemi</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/operasyon-modeli" className="text-accent-500 hover:text-white transition-colors font-bold flex items-center gap-2 text-[14px]">
                  Finansal Detayları Gör <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
            Rusya pazarına giriş için hazır mısınız?
          </h2>
          <p className="text-[18px] text-slate-500 mb-10 max-w-2xl mx-auto">
            Markanızı veya ürünlerinizi Rusya'da satışa açmak ve büyütmek için bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/iletisim"
              className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-5 rounded-full font-bold text-[18px] flex items-center gap-3 shadow-[0_10px_20px_-5px_rgba(238,42,36,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(238,42,36,0.5)] transform hover:-translate-y-1"
            >
              Başvuru Yap <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

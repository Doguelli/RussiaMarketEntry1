import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

import wildberriesLogo from "@/assets/wildberries.png";
import lamodaLogo from "@/assets/lamoda.png";
import banner1Image from "@/assets/banner1.png";

const stats = [
  { number: "18+", text: "Yıllık Ticaret & Operasyon Deneyimi" },
  { number: "4+", text: "Yıllık Rusya E-Ticaret Operasyonu" },
  { number: "3+", text: "Aktif Pazaryeri Entegrasyonu" },
  { number: "360°", text: "Uçtan Uca Süreç Yönetimi" },
];

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Russia Market Entry | Rusya E-Ticaret ve Operasyon Çözümleri</title>
        <meta name="description" content="Sadece danışmanlık yapmıyoruz, doğrudan operasyon ortağınız olarak markanızı Rusya'nın en büyük pazar yerlerinde zirveye taşıyoruz. Rusya e-ticaret ve operasyon çözümleri." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-transparent pt-32 pb-32 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-[13px] font-bold rounded-full mb-8 uppercase tracking-wider">
                Rusya E-Ticaret ve Operasyon Çözümleri
              </div>
              <h1 className="text-[56px] md:text-[72px] leading-[1.05] font-extrabold text-primary-500 mb-8 max-w-[900px] tracking-tight mx-auto">
                Rusya Pazarına Güçlü ve <br className="hidden md:block" />
                <span className="text-accent-500">Sürdürülebilir Bir Adım Atın</span>
              </h1>
              <p className="text-[18px] text-slate-500 max-w-[650px] leading-relaxed mx-auto mb-10">
                Sadece danışmanlık yapmıyoruz, doğrudan operasyon ortağınız olarak markanızı Rusya'nın en büyük pazar yerlerinde zirveye taşıyoruz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/iletisim"
                  className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-[16px] rounded-full font-bold text-[15px] flex items-center gap-2 shadow-[0_10px_15px_-3px_rgba(238,42,36,0.3)]"
                >
                  Bize Ulaşın <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/hizmetlerimiz"
                  className="bg-white text-primary-500 border border-slate-200 hover:bg-primary-50 transition-colors px-8 py-[16px] rounded-full font-bold text-[15px]"
                >
                  Ne Yapıyoruz?
                </Link>
              </div>

              <div className="mt-16 pt-10 border-t border-slate-200/60 max-w-[800px] mx-auto">
                <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-6">Entegre Olduğumuz Pazaryerleri</p>
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
                  <img src={wildberriesLogo} alt="Wildberries" className="h-12 md:h-[80px] object-contain" />
                  <img src={lamodaLogo} alt="Lamoda" className="h-[40px] md:h-[70px] object-contain" />
                  <span className="text-[28px] md:text-[50px] font-extrabold text-[#005BFF] flex items-center tracking-tighter">OZON</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-[48px] font-extrabold text-primary-500 mb-2 leading-none">
                  {stat.number}
                </div>
                <div className="text-[13px] text-slate-500 font-bold uppercase tracking-wider leading-relaxed max-w-[150px] mx-auto">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 bg-primary-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[36px] font-extrabold text-primary-500 mb-6 tracking-tight leading-[1.15]">
                Başarı doğru partner ile başlar.
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed text-[16px]">
                Teoriyle değil pratikle çalışıyoruz. Kurulumdan lojistiğe, satıştan pazarlamaya kadar uçtan uca tüm operasyonu kendi ekiplerimizle yöneterek karmaşayı ortadan kaldırıyoruz.
              </p>
              
              <ul className="space-y-8">
                {[
                  { icon: Globe2, title: "Türkiye & Rusya Entegre Yapı", desc: "Süreçler hızlı ve kontrollü ilerler." },
                  { icon: ShieldCheck, title: "Uçtan Uca Operasyon", desc: "Risk öngörüsü ve sürdürülebilir sistem kurulumu." },
                  { icon: TrendingUp, title: "Sürdürülebilir Büyüme", desc: "Kurulum, satış ve büyüme tek noktadan." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-accent-500 border border-slate-100">
                        <item.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-500 text-[16px] mb-1">{item.title}</h4>
                      <p className="text-[14px] text-slate-500 leading-relaxed m-0">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12">
                <Link to="/hakkimizda" className="text-accent-500 font-bold text-[15px] flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-accent-500/30 hover:border-accent-500 pb-1 inline-flex">
                  Hakkımızda Daha Fazla Bilgi <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent-500 rounded-3xl translate-x-4 translate-y-4 opacity-10" />
              <img 
                src={banner1Image} 
                alt="E-ticaret lojistik ve depo operasyonu" 
                className="w-full h-auto object-contain rounded-3xl shadow-2xl relative z-10 bg-white"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
    </main>
  );
}

import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <main className="pt-8 pb-24">
      <Helmet>
        <title>Hakkımızda | Russia Market Entry</title>
        <meta name="description" content="18 yıllık ticaret ve e-ticaret deneyimi ile Türkiye'den Rusya'ya uçtan uca operasyon ve pazaryeri yönetimi altyapısı sunan güçlü partneriniz." />
      </Helmet>
      {/* Header */}
      <div className="bg-transparent py-20 mb-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider"
          >
            Kurumsal
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[48px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight"
          >
            Hakkımızda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-3xl mx-auto text-[18px] leading-relaxed"
          >
            Türkiye ve Rusya arasında kurduğumuz entegre yapı ile markaların ve üreticilerin bu pazara doğru, hızlı ve sürdürülebilir şekilde giriş yapmasını sağlıyoruz.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-slate-600 prose-headings:font-sans max-w-none"
          >
            <h2 className="text-[32px] font-extrabold mb-6 tracking-tight text-primary-500">Hikayemiz</h2>
            <p className="text-[16px] leading-relaxed">
              E-ticaret, operasyon ve dış ticaret alanında 18 yıllık tecrübemiz ile yola çıktık. 
              Türkiye'de edindiğimiz güçlü operasyonel altyapıyı ve ticaret deneyimini, son 4 yıldır aktif olarak 
              yönettiğimiz Rusya e-ticaret operasyonları ile birleştirerek bu yapıyı oluşturduk.
            </p>
            <p className="text-[16px] leading-relaxed">
              Rusya pazarına giriş yapan firmaların karşılaştığı temel problemleri sahada birebir deneyimledik:
            </p>
            <ul className="list-none pl-0 space-y-4 my-8">
              {[
                "Lojistik ve teslimat süreçleri",
                "Pazaryeri sistemlerinin yönetimi",
                "Vergi ve finansal yapı",
                "Operasyonel süreçlerin sürdürülebilirliği"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center shrink-0 text-accent-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-800 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] leading-relaxed border-l-4 border-accent-500 pl-6 italic">
              Bu sorunları çözmek için sadece danışmanlık vermek yerine, <strong className="text-primary-500">doğrudan operasyonun içinde yer alan bir model</strong> geliştirdik.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-500 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden h-full flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600 rounded-full opacity-30 blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-[32px] font-extrabold mb-10 tracking-tight leading-tight">Bugün Geldiğimiz <br/>Noktada</h3>
              
              <div className="space-y-6">
                {[
                  "Türkiye ve Rusya'da aktif şirket yapımız",
                  "Yerel operasyon ve depo süreçlerimiz",
                  "Pazaryeri entegrasyonlarımız",
                  "Uçtan uca yönetilen e-ticaret sistemimiz"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-white/10 shrink-0 mt-0.5 border border-white/10">
                      <span className="text-[10px] font-bold text-accent-500">0{i+1}</span>
                    </div>
                    <p className="text-white/80 text-[16px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
              <p className="font-semibold text-white text-[18px] mb-8 tracking-tight leading-relaxed">
                İle markalara ve üreticilere gerçek bir operasyon altyapısı sunuyoruz.
              </p>
              <Link to="/hizmetlerimiz" className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-[14px] rounded-full font-bold text-[15px] inline-flex items-center gap-2">
                Hizmetlerimizi İncele <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}

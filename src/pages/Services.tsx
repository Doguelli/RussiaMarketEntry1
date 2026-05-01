import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Building2, 
  BarChart4, 
  ActivitySquare, 
  Star, 
  Users2, 
  Truck, 
  Layers,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Building2,
    title: "Türkiye + Rusya Entegre Yapı",
    points: [
      "Türkiye'den ürün çıkışı ve tedarik yönetimi",
      "Rusya'da yerel operasyon ve satış süreçleri",
      "Wildberries, Lamoda, Ozon vb. pazaryerleri ile tam entegrasyon"
    ],
    result: "Süreçler hızlı ve kontrollü ilerler"
  },
  {
    icon: BarChart4,
    title: "18 Yıllık Ticaret Tecrübesi",
    points: [
      "Operasyonel süreçlerin doğru kurgulanması",
      "Risklerin öngörülmesi",
      "Sürdürülebilir sistem kurulumu"
    ],
    result: "Tecrübe en büyük avantajdır"
  },
  {
    icon: ActivitySquare,
    title: "4 Yıllık Rusya Pazar Deneyimi",
    points: [
      "Yerel pazar bilgisi",
      "Tüketici davranışı analizi",
      "Satış ve büyüme stratejileri"
    ],
    result: "Sahada edinilmiş gerçek deneyim"
  },
  {
    icon: Star,
    title: "Güçlü Mağaza Performansı",
    points: [
      "Ortalama mağaza puanı: 4,7 / 5",
      "Yüksek müşteri memnuniyeti",
      "Başarılı sipariş ve iade yönetimi"
    ],
    result: "Operasyon kalitemizin göstergesi"
  },
  {
    icon: Users2,
    title: "Yerel Rus Ekip",
    points: [
      "Rus çalışan ekip",
      "Yerel dil ve iletişim avantajı",
      "Müşteri ve pazaryeri yönetimi"
    ],
    result: "Süreçler daha hızlı ve doğru ilerler"
  },
  {
    icon: Truck,
    title: "Dış Ticaret ve Lojistik Uzmanlığı",
    points: [
      "Gümrük ve sevkiyat yönetimi",
      "Ürün giriş süreçleri",
      "Lojistik planlama"
    ],
    result: "Ürünler sorunsuz şekilde pazara ulaşır"
  },
];

export default function Services() {
  return (
    <main className="pt-8 pb-24">
      <Helmet>
        <title>Hizmetlerimiz | Ozon, Wildberries ve Uçtan Uca Operasyon</title>
        <meta name="description" content="Rusya'da Ozon, Wildberries entegrasyonu, lojistik uzmanlığı, yerel Rus ekip ve uçtan uca pazar yeri operasyon hizmetlerimiz." />
      </Helmet>
      {/* Header */}
      <div className="bg-transparent py-20 mb-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider"
          >
            Çözümlerimiz
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[48px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight"
          >
            Neden Biz? & Hizmetlerimiz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-3xl mx-auto text-[18px] leading-relaxed"
          >
            Bizim farkımız, bu işi sadece anlatmak değil; bizzat sahada yönetiyor olmamızdır. Rusya pazarında başarı, doğru partner ile çalışmaktan geçer.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* End to end section highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A101D] rounded-[32px] p-10 md:p-14 mb-24 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glow line at top */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-60" />
          
          {/* Radial blur backgrounds */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#001738]/40 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 mb-6 text-[13px] font-medium text-slate-300 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-[pulse_2s_ease-in-out_infinite]" /> 
                Operasyonda Kesintisiz Güç
              </div>
              <h2 className="text-[34px] md:text-[42px] font-extrabold mb-6 tracking-tight leading-[1.15]">
                Siz Üretin, Gerisini<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                  Bize Bırakın.
                </span>
              </h2>
              <p className="text-slate-400 text-[17px] mb-8 leading-relaxed">
                Kurulum, operasyon, lojistik ve büyüme adımlarını tek noktadan yöneterek Rusya e-ticaret pazarındaki karmaşayı ortadan kaldırıyoruz.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Mağaza Kurulumu', 'Lojistik Yönetimi', 'Pazarlama & Büyüme'].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/[0.03] border border-white/5 text-slate-300 rounded-xl px-4 py-2.5 text-[14px] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-accent-500" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="shrink-0 md:pl-10 md:border-l border-white/10 flex flex-col items-center justify-center">
              <div className="mb-6 flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0A101D] bg-slate-800 flex items-center justify-center shrink-0 shadow-lg">
                    {i === 0 ? <Layers className="w-5 h-5 text-accent-500" /> : <Star className="w-4 h-4 text-slate-400" />}
                  </div>
                ))}
              </div>
              <Link 
                to="/iletisim" 
                className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-4 rounded-2xl font-bold text-[15px] flex items-center gap-3 shadow-[0_0_20px_rgba(238,42,36,0.3)] hover:shadow-[0_0_25px_rgba(238,42,36,0.4)]"
              >
                Ücretsiz Analiz İsteyin <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-primary-50 hover:border-primary-200 transition-colors duration-300 flex flex-col group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-50 text-primary-500 mb-8 mt-2 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-extrabold text-primary-500 mb-6 tracking-tight leading-snug">{feature.title}</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0 group-hover:bg-white transition-colors" />
                    <span className="text-[15px] leading-relaxed">{point}</span>
                  </li>
                ))}
            </ul>
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <p className="text-[13px] font-semibold text-primary-500 flex items-center gap-3 uppercase tracking-wider">
                  <span className="text-xl">👉</span> {feature.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}

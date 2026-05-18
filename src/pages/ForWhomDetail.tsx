import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { forWhomData } from "../data/forWhomData";

export default function ForWhomDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = forWhomData.find((item) => item.slug === slug);

  if (!data) {
    return <Navigate to="/kimler-icin" replace />;
  }

  const defaultConclusionDesc = "Size en uygun operasyon modelini kurmak ve satışlara başlamak için bizimle iletişime geçin.";

  return (
    <main className="bg-slate-50 min-h-screen pt-24 pb-24">
      <Helmet>
        <title>{data.shortTitle} | Russia Market Entry</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/kimler-icin" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-500 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Kimler İçin Sayfasına Dön
          </Link>
        </div>

        {/* Header */}
        <div className={`bg-white rounded-3xl p-8 lg:p-14 border-t-4 border-slate-100 shadow-xl overflow-hidden relative mb-20`} style={{ borderTopColor: 'var(' + data.color + ')' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[14px] mb-6 ${data.lightColor} ${data.color}`}>
              {data.icon}
              <span>Özel Çözüm</span>
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
                {data.conclusionTitle || "Sonuç"}
              </h3>
              
              <p className="text-white/90 text-[18px] leading-relaxed mb-8 max-w-4xl">
                {data.conclusionDesc || defaultConclusionDesc}
              </p>

              <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[22px] font-bold mb-2">Pazara Giriş İçin İlk Adımı Atın</h4>
                  <p className="text-white/80">Yeni bir büyüme kanalı oluşturmak için bizimle iletişime geçin.</p>
                </div>
                <Link
                  to="/iletisim"
                  className="shrink-0 inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  Hemen Başvuru Yapın <ArrowRight className="w-5 h-5"/>
                </Link>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </main>
  );
}

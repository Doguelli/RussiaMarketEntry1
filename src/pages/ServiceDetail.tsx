import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { serviceDetails } from "../data/servicesData";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetails[id] : null;

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  const Icon = service.icon;

  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/hizmetler" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 font-medium text-[14px] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Hizmetlere Dön
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
                <h2 className="text-[24px] font-bold text-primary-500 mb-6">Sıkça Sorulan Sorular</h2>
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
                  Kimler İçin Uygun?
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
              <h3 className="text-[20px] font-bold text-primary-500 mb-4 tracking-tight">Hemen Aksiyon Alın</h3>
              <p className="text-slate-500 text-[14px] mb-6 leading-relaxed">
                Bu hizmet özelinde markanız için nasıl bir yapı kurabileceğimizi ücretsiz öğrenin.
              </p>
              <Link to="/iletisim" className="bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold py-3.5 px-6 rounded-xl w-full flex items-center justify-center gap-2 shadow-sm text-[15px]">
                İletişime Geçin <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

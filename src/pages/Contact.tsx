import { motion } from "motion/react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // BURAYA FORMSPREE ENDPOINT LINKINIZI YAZACAKSINIZ
      // Örnek: "https://formspree.io/f/xabcdxyz"
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqenkoky";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({...prev, [e.target.id]: e.target.value}));
  };

  return (
    <main className="pt-8 pb-24">
      <Helmet>
        <title>İletişim | Russia Market Entry</title>
        <meta name="description" content="Rusya operasyon süreçlerinizi başlatmak veya büyütmek için bizimle iletişime geçin. İstanbul ve Moskova ofisleri ile yanınızdayız." />
      </Helmet>
      {/* Header */}
      <div className="bg-transparent py-20 mb-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider"
          >
            İletişim
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[48px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight"
          >
            Birlikte Büyüyelim
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-[18px] leading-relaxed"
          >
            Rusya pazarına giriş yapmak veya mevcut operasyonunuzu büyütmek için bizimle iletişime geçin.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] font-extrabold text-primary-500 mb-6 tracking-tight">Sonuç Odaklı</h2>
            <p className="text-[16px] text-slate-500 mb-10 leading-relaxed border-l-4 border-accent-500 pl-6 py-2">
              Rusya pazarında başarı, doğru strateji ve doğru partner ile mümkündür. 
              Biz, markanız veya üretiminiz için sadece bir hizmet sağlayıcı değil; 
              <strong className="text-primary-500"> doğrudan operasyon ortağıyız.</strong>
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-primary-50 border border-primary-100 rounded-3xl">
                <div className="bg-white p-3 rounded-2xl text-accent-500 shrink-0 shadow-sm border border-primary-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[16px]">Operasyon Merkezleri</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">Podolsk, Domodedovskoye Shosse 20, Moskova</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-primary-50 border border-primary-100 rounded-3xl">
                <div className="bg-white p-3 rounded-2xl text-accent-500 shrink-0 shadow-sm border border-primary-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[16px]">Telefon</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    TR: +90 532 785 24 20<br/>
                    RU: +7 993 406-72-58
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-primary-50 border border-primary-100 rounded-3xl">
                <div className="bg-white p-3 rounded-2xl text-accent-500 shrink-0 shadow-sm border border-primary-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[16px]">E-posta</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">cankutosar@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary-900/5 border border-primary-100"
          >
            <h3 className="text-[28px] font-extrabold text-primary-500 mb-8 tracking-tight">Başvuru Yap</h3>
            
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl mb-2">Başvurunuz Alındı!</h4>
                <p className="text-[15px]">En kısa sürede uzman ekibimiz sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                    Form gönderilirken bir hata oluştu. Lütfen bağlantıyı ayarladığınızdan emin olun veya daha sonra tekrar deneyin.
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Ad Soyad</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all outline-none text-[15px]"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700">E-posta</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all outline-none text-[15px]"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all outline-none text-[15px]"
                      placeholder="+90 (___) ___ __ __"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700">Firma Adı</label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all outline-none text-[15px]"
                      placeholder="Şirketinizin Adı"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Mesajınız (Opsiyonel)</label>
                  <textarea 
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none text-[15px]"
                    placeholder="Bize operasyon hedeflerinizden kısaca bahsedin..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-[16px] px-8 rounded-full transition-colors flex justify-center items-center gap-3 text-[15px]"
                >
                  {status === "submitting" ? (
                    "Gönderiliyor..."
                  ) : (
                    <>
                      Gönder <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

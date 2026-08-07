import { Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import RussiaMarket from "./pages/RussiaMarket";
import WhyRussiaDetail from "./pages/WhyRussiaDetail";
import OperationModel from "./pages/OperationModel";
import ForWhom from "./pages/ForWhom";
import ForWhomDetail from "./pages/ForWhomDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import WhatsAppButton from "./components/WhatsAppButton";
import AnalyticsTracker from "./components/AnalyticsTracker";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function OldRouteRedirect({ to }: { to: string }) {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigate to={to} replace />
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>404 Sayfa Bulunamadı</title>
      </Helmet>
      <h1 className="text-[80px] md:text-[120px] font-extrabold text-primary-500 mb-4 leading-none">404</h1>
      <h2 className="text-[24px] md:text-[32px] font-bold text-slate-700 mb-6 tracking-tight">Sayfa Bulunamadı</h2>
      <p className="text-slate-500 mb-10 text-[18px] max-w-md mx-auto">
        Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
      </p>
      <Link to="/" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-colors w-full sm:w-auto inline-flex justify-center flex-shrink-0 shadow-sm">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/rusya-pazari" element={<RussiaMarket />} />
            <Route path="/neden-rusya-detay" element={<WhyRussiaDetail />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/hizmetler/:id" element={<ServiceDetail />} />
            <Route path="/operasyon-modeli" element={<OperationModel />} />
            <Route path="/kimler-icin" element={<ForWhom />} />
            <Route path="/kimler-icin/:slug" element={<ForWhomDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/iletisim" element={<Contact />} />
            
            {/* 301 Redirects & Noindex for old demo pages */}
            <Route path="/contact" element={<OldRouteRedirect to="/iletisim" />} />
            <Route path="/contact/*" element={<OldRouteRedirect to="/iletisim" />} />
            <Route path="/portfolio-carousel" element={<OldRouteRedirect to="/" />} />
            <Route path="/portfolio-carousel/*" element={<OldRouteRedirect to="/" />} />
            <Route path="/elements" element={<OldRouteRedirect to="/" />} />
            <Route path="/elements/*" element={<OldRouteRedirect to="/" />} />
            
            {/* Catch-all Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

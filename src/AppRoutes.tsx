import { Routes, Route, useLocation, useNavigate, Navigate, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
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
import CompanyInTurkey from "./pages/CompanyInTurkey";
import WhatsAppButton from "./components/WhatsAppButton";
import AnalyticsTracker from "./components/AnalyticsTracker";
import {
  getManuallySelectedLanguage,
  detectCountryFromIP,
  getLanguageForCountry,
} from "./utils/geoLanguageDetector";

function ScrollToTopAndLangSync() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const geoCheckedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    if (pathname.startsWith("/ru")) {
      if (i18n.language !== "ru") {
        i18n.changeLanguage("ru");
      }
    }
  }, [pathname, i18n]);

  // One-time GeoIP check on initial visit if user hasn't chosen manually
  useEffect(() => {
    if (geoCheckedRef.current) return;
    geoCheckedRef.current = true;

    const manual = getManuallySelectedLanguage();
    if (manual) return;

    if (pathname === "/" || pathname === "") {
      detectCountryFromIP()
        .then((countryCode) => {
          if (!countryCode) return;
          const targetLang = getLanguageForCountry(countryCode);
          if (targetLang === "ru") {
            i18n.changeLanguage("ru");
            navigate("/ru", { replace: true });
          } else if (targetLang === "en") {
            i18n.changeLanguage("en");
          } else if (targetLang === "tr") {
            i18n.changeLanguage("tr");
          }
        })
        .catch(() => {
          // Ignore network errors
        });
    }
  }, [pathname, i18n, navigate]);

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
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>{isRu ? "404 Страница не найдена" : (isEn ? "404 Page Not Found" : "404 Sayfa Bulunamadı")}</title>
      </Helmet>
      <h1 className="text-[80px] md:text-[120px] font-extrabold text-primary-500 mb-4 leading-none">404</h1>
      <h2 className="text-[24px] md:text-[32px] font-bold text-slate-700 mb-6 tracking-tight">
        {isRu ? "Страница не найдена" : (isEn ? "Page Not Found" : "Sayfa Bulunamadı")}
      </h2>
      <p className="text-slate-500 mb-10 text-[18px] max-w-md mx-auto">
        {isRu 
          ? "Запрашиваемая страница удалена, переименована или временно недоступна." 
          : (isEn ? "The page you are looking for might have been removed, renamed, or is temporarily unavailable." : "Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.")}
      </p>
      <Link to={isRu ? "/ru" : "/"} className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-colors w-full sm:w-auto inline-flex justify-center flex-shrink-0 shadow-sm">
        {isRu ? "На главную" : (isEn ? "Return Home" : "Ana Sayfaya Dön")}
      </Link>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTopAndLangSync />
      <AnalyticsTracker />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Turkish / Default Routes */}
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
            
            {/* Russian Language Routes (/ru/*) */}
            <Route path="/ru" element={<Home />} />
            <Route path="/ru/hakkimizda" element={<About />} />
            <Route path="/ru/rusya-pazari" element={<RussiaMarket />} />
            <Route path="/ru/neden-rusya-detay" element={<WhyRussiaDetail />} />
            <Route path="/ru/hizmetler" element={<Services />} />
            <Route path="/ru/hizmetler/:id" element={<ServiceDetail />} />
            <Route path="/ru/operasyon-modeli" element={<OperationModel />} />
            <Route path="/ru/kimler-icin" element={<ForWhom />} />
            <Route path="/ru/kimler-icin/:slug" element={<ForWhomDetail />} />
            <Route path="/ru/blog" element={<Blog />} />
            <Route path="/ru/blog/:slug" element={<BlogDetail />} />
            <Route path="/ru/iletisim" element={<Contact />} />
            
            {/* Phase 2: Commercial Landing Page for Foreigners registering company in Turkey */}
            <Route path="/ru/kompaniya-v-turtsii" element={<CompanyInTurkey />} />
            <Route path="/kompaniya-v-turtsii" element={<CompanyInTurkey />} />
            
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

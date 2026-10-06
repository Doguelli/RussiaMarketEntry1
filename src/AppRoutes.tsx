import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
  Link,
  useParams,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router-dom";
import { Suspense, useEffect, useRef, type ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lazyPage } from "./utils/lazyPage";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import AnalyticsTracker from "./components/AnalyticsTracker";
import CookieConsentBanner from "./components/CookieConsentBanner";
import {
  getManuallySelectedLanguage,
  detectCountryFromIP,
  detectLanguageFromBrowser,
  getLanguageForCountry,
  isCrawler,
} from "./utils/geoLanguageDetector";
import {
  SERVICE_ID_TO_RU_SLUG,
  FORWHOM_SLUG_TO_RU,
  pathForLanguage,
  homePath,
} from "./utils/ruPaths";
import { OG_LOCALE, pageLanguageForPath } from "./utils/pageLanguage";
import { resolveLanguageFromPath } from "./i18n";

const Home = lazyPage(() => import("./pages/Home"));
const About = lazyPage(() => import("./pages/About"));
const Services = lazyPage(() => import("./pages/Services"));
const ServiceDetail = lazyPage(() => import("./pages/ServiceDetail"));
const Contact = lazyPage(() => import("./pages/Contact"));
const RussiaMarket = lazyPage(() => import("./pages/RussiaMarket"));
const WhyRussiaDetail = lazyPage(() => import("./pages/WhyRussiaDetail"));
const OperationModel = lazyPage(() => import("./pages/OperationModel"));
const ForWhom = lazyPage(() => import("./pages/ForWhom"));
const ForWhomDetail = lazyPage(() => import("./pages/ForWhomDetail"));
const Blog = lazyPage(() => import("./pages/Blog"));
const BlogDetail = lazyPage(() => import("./pages/BlogDetail"));
const CompanyInTurkey = lazyPage(() => import("./pages/CompanyInTurkey"));
const References = lazyPage(() => import("./pages/References"));
const LegalDocument = lazyPage(() => import("./pages/LegalDocument"));

function ScrollToTopAndLangSync() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const geoCheckedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    // Keep i18n aligned with the URL tree on every SPA navigation.
    const targetLang = resolveLanguageFromPath(pathname);
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [pathname, i18n]);

  // One-time language routing on the initial visit to a Turkish URL. Crawlers
  // are never redirected, so each URL is indexed in its own language.
  useEffect(() => {
    if (geoCheckedRef.current) return;
    geoCheckedRef.current = true;

    if (isCrawler() || resolveLanguageFromPath(pathname) !== "tr") return;
    const goTo = (lang: "en" | "ru") => {
      const target = pathForLanguage(pathname, lang);
      if (target !== pathname) navigate(target + window.location.search + window.location.hash, { replace: true });
    };

    const manual = getManuallySelectedLanguage();
    if (manual) {
      // English used to be served on the Turkish URLs, so keep those visitors in English.
      if (manual === "en") goTo("en");
      return;
    }

    if (pathname === "/" || pathname === "") {
      detectCountryFromIP()
        .then((countryCode) => {
          const targetLang = getLanguageForCountry(countryCode);
          if (targetLang === "ru" || targetLang === "en") goTo(targetLang);
        })
        .catch(() => {
          // Ignore network errors
        });
    } else if (detectLanguageFromBrowser() === "en") {
      goTo("en");
    }
  }, [pathname, navigate]);

  return null;
}

// og:locale is emitted here rather than in index.html, which the prerenderer
// copies into every route and which therefore declared tr_TR on the Russian
// and English pages too.
function OgLocaleMeta() {
  const { pathname } = useLocation();
  return (
    <Helmet>
      <meta property="og:locale" content={OG_LOCALE[pageLanguageForPath(pathname)]} />
    </Helmet>
  );
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

function LegacyRuServiceRedirect() {
  const { id } = useParams<{ id: string }>();
  const ruSlug = id ? SERVICE_ID_TO_RU_SLUG[id] || id : "";
  return <OldRouteRedirect to={ruSlug ? `/ru/uslugi/${ruSlug}` : "/ru/uslugi"} />;
}

function LegacyRuForWhomRedirect() {
  const { slug } = useParams<{ slug: string }>();
  const ruSlug = slug ? FORWHOM_SLUG_TO_RU[slug] || slug : "";
  return <OldRouteRedirect to={ruSlug ? `/ru/dlya-kogo/${ruSlug}` : "/ru/dlya-kogo"} />;
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
      <Link to={homePath(i18n.language)} className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-colors w-full sm:w-auto inline-flex justify-center flex-shrink-0 shadow-sm">
        {isRu ? "На главную" : (isEn ? "Return Home" : "Ana Sayfaya Dön")}
      </Link>
    </div>
  );
}

const ROUTES = (
          <>
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
            <Route path="/referanslar" element={<References />} />
            <Route path="/gizlilik-politikasi" element={<LegalDocument kind="privacy" lang="tr" />} />
            <Route path="/kullanim-sartlari" element={<LegalDocument kind="terms" lang="tr" />} />
            <Route path="/cerez-politikasi" element={<LegalDocument kind="cookies" lang="tr" />} />

            {/* English Language Routes (/en/*) — English path segments */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/russia-market" element={<RussiaMarket />} />
            <Route path="/en/why-russia" element={<WhyRussiaDetail />} />
            <Route path="/en/services" element={<Services />} />
            <Route path="/en/services/:id" element={<ServiceDetail />} />
            <Route path="/en/operating-model" element={<OperationModel />} />
            <Route path="/en/who-we-serve" element={<ForWhom />} />
            <Route path="/en/who-we-serve/:slug" element={<ForWhomDetail />} />
            <Route path="/en/blog" element={<Blog />} />
            <Route path="/en/blog/:slug" element={<BlogDetail />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/en/references" element={<References />} />
            <Route path="/en/privacy-policy" element={<LegalDocument kind="privacy" lang="en" />} />
            <Route path="/en/terms-of-use" element={<LegalDocument kind="terms" lang="en" />} />
            <Route path="/en/cookie-policy" element={<LegalDocument kind="cookies" lang="en" />} />
            
            {/* Russian Language Routes (/ru/*) — Russian Latin path segments */}
            <Route path="/ru" element={<Home />} />
            <Route path="/ru/o-nas" element={<About />} />
            <Route path="/ru/rynok-rossii" element={<RussiaMarket />} />
            <Route path="/ru/pochemu-rossiya" element={<WhyRussiaDetail />} />
            <Route path="/ru/uslugi" element={<Services />} />
            <Route path="/ru/uslugi/:id" element={<ServiceDetail />} />
            <Route path="/ru/model-raboty" element={<OperationModel />} />
            <Route path="/ru/dlya-kogo" element={<ForWhom />} />
            <Route path="/ru/dlya-kogo/:slug" element={<ForWhomDetail />} />
            <Route path="/ru/blog" element={<Blog />} />
            <Route path="/ru/blog/:slug" element={<BlogDetail />} />
            <Route path="/ru/kontakty" element={<Contact />} />
            <Route path="/ru/keisy-i-klienty" element={<References />} />
            <Route path="/ru/politika-konfidentsialnosti" element={<LegalDocument kind="privacy" lang="ru" />} />
            <Route path="/ru/usloviya-ispolzovaniya" element={<LegalDocument kind="terms" lang="ru" />} />
            <Route path="/ru/politika-cookie" element={<LegalDocument kind="cookies" lang="ru" />} />
            
            {/* Phase 2: Commercial Landing Page for Foreigners registering company in Turkey */}
            <Route path="/ru/kompaniya-v-turtsii" element={<CompanyInTurkey />} />
            <Route path="/kompaniya-v-turtsii" element={<OldRouteRedirect to="/ru/kompaniya-v-turtsii" />} />
            
            {/* Soft SPA fallbacks for old RU paths (production uses Netlify 301) */}
            <Route path="/ru/hakkimizda" element={<OldRouteRedirect to="/ru/o-nas" />} />
            <Route path="/ru/rusya-pazari" element={<OldRouteRedirect to="/ru/rynok-rossii" />} />
            <Route path="/ru/neden-rusya-detay" element={<OldRouteRedirect to="/ru/pochemu-rossiya" />} />
            <Route path="/ru/hizmetler" element={<OldRouteRedirect to="/ru/uslugi" />} />
            <Route path="/ru/hizmetler/:id" element={<LegacyRuServiceRedirect />} />
            <Route path="/ru/operasyon-modeli" element={<OldRouteRedirect to="/ru/model-raboty" />} />
            <Route path="/ru/kimler-icin" element={<OldRouteRedirect to="/ru/dlya-kogo" />} />
            <Route path="/ru/kimler-icin/:slug" element={<LegacyRuForWhomRedirect />} />
            <Route path="/ru/iletisim" element={<OldRouteRedirect to="/ru/kontakty" />} />

            {/* 301 Redirects & Noindex for old demo pages */}
            <Route path="/contact" element={<OldRouteRedirect to="/iletisim" />} />
            <Route path="/contact/*" element={<OldRouteRedirect to="/iletisim" />} />
            <Route path="/portfolio-carousel" element={<OldRouteRedirect to="/" />} />
            <Route path="/portfolio-carousel/*" element={<OldRouteRedirect to="/" />} />
            <Route path="/elements" element={<OldRouteRedirect to="/" />} />
            <Route path="/elements/*" element={<OldRouteRedirect to="/" />} />
            
            {/* Catch-all Not Found */}
            <Route path="*" element={<NotFound />} />
          </>
);

/** Loads the page chunk(s) a URL renders, so the first render can be synchronous. */
export function preloadRoute(pathname: string): Promise<unknown> {
  const matches = matchRoutes(createRoutesFromChildren(ROUTES), pathname) || [];
  return Promise.all(
    matches.map((match) => {
      const type = (match.route.element as ReactElement | undefined)?.type as { preload?: () => Promise<void> };
      return type?.preload?.();
    })
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTopAndLangSync />
      <OgLocaleMeta />
      <AnalyticsTracker />
      <CookieConsentBanner />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={null}>
            <Routes>{ROUTES}</Routes>
          </Suspense>
        </div>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}

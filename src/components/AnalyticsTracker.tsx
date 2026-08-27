import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const METRIKA_ID = 112001301;
const METRIKA_SCRIPT_SRC = `https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;

// Module-level guards: React Strict Mode / remounts must not reinject or re-init.
let gaScriptInjected = false;
let metrikaInitialized = false;

// Declare global types for gtag + Yandex Metrika
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    ym?: ((...args: any[]) => void) & { a?: any[]; l?: number };
  }
}

function injectYandexMetrika() {
  if (metrikaInitialized || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  // Official Yandex loader (script inserted at most once via src check).
  (function (m: Window, e: Document, t: string, r: string, i: string) {
    const w = m as Window & Record<string, any>;
    w[i] =
      w[i] ||
      function () {
        (w[i].a = w[i].a || []).push(arguments);
      };
    w[i].l = 1 * new Date().getTime();
    for (let j = 0; j < e.scripts.length; j++) {
      if (e.scripts[j].src === r) {
        return;
      }
    }
    const k = e.createElement(t) as HTMLScriptElement;
    const a = e.getElementsByTagName(t)[0];
    k.async = true;
    k.src = r;
    a?.parentNode?.insertBefore(k, a);
  })(window, document, "script", METRIKA_SCRIPT_SRC, "ym");

  // Init exactly once; keep Yandex-provided options unchanged.
  window.ym?.(METRIKA_ID, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });

  metrikaInitialized = true;
}

export default function AnalyticsTracker() {
  const location = useLocation();
  const measurementId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID || "G-ZPTMJFB9WS";
  const isFirstMetrikaHit = useRef(true);

  useEffect(() => {
    if (!measurementId || typeof document === "undefined") return;

    // 1. Inject GA script tag only if it doesn't exist
    const scriptId = "google-analytics-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script && !gaScriptInjected) {
      gaScriptInjected = true;
      script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", measurementId, {
        send_page_view: false, // We'll trigger page views manually on route changes below
      });
    }
  }, [measurementId]);

  // Yandex Metrika — client-only, once per session
  useEffect(() => {
    injectYandexMetrika();
  }, []);

  // 2. Track GA page views when pathname/search changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.gtag && measurementId) {
      window.gtag("config", measurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, measurementId]);

  // SPA hits for Metrika (init already counted the first pageview)
  useEffect(() => {
    if (typeof window === "undefined" || !window.ym) return;
    if (isFirstMetrikaHit.current) {
      isFirstMetrikaHit.current = false;
      return;
    }
    window.ym(METRIKA_ID, "hit", window.location.href);
  }, [location.pathname, location.search]);

  return null;
}

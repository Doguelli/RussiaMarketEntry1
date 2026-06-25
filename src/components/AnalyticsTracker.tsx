import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Declare global types for gtag
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const location = useLocation();
  const measurementId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID || "G-ZPTMJFB9WS";

  useEffect(() => {
    if (!measurementId) return;

    // 1. Inject script tag only if it doesn't exist
    const scriptId = "google-analytics-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
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

  // 2. Track page views when pathname/search changes
  useEffect(() => {
    if (window.gtag && measurementId) {
      window.gtag("config", measurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, measurementId]);

  return null;
}

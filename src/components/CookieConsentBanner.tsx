import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cookiesPath } from "@/utils/ruPaths";
import { getConsent, setConsent, onConsentBannerReopen, type ConsentChoice } from "@/utils/consent";
import { isCrawler } from "@/utils/geoLanguageDetector";

export default function CookieConsentBanner() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  // Client-only so the banner never ends up in the prerendered HTML.
  useEffect(() => {
    if (!isCrawler() && getConsent() === null) setVisible(true);
    return onConsentBannerReopen(() => setVisible(true));
  }, []);

  if (!visible) return null;

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookie_banner.label")}
      className="fixed bottom-4 left-4 right-20 sm:right-auto sm:max-w-md z-[60] bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 md:p-5"
    >
      <p className="text-[13px] leading-relaxed text-slate-600">
        {t("cookie_banner.text")}{" "}
        <Link to={cookiesPath(i18n.language === "ru")} className="text-accent-500 font-semibold hover:underline">
          {t("cookie_banner.policy")}
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="flex-1 bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold text-[13px] px-4 py-2 rounded-xl"
        >
          {t("cookie_banner.accept")}
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 font-bold text-[13px] px-4 py-2 rounded-xl"
        >
          {t("cookie_banner.reject")}
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const SCROLL_THRESHOLD = 450;

/** Sits above WhatsAppButton: both use right-6; WA is bottom-6 h-14 → 5.75rem stack offset. */
const BOTTOM_OFFSET_CLASS = "bottom-[5.75rem]";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";

  const ariaLabel = isRu ? "Наверх" : isEn ? "Back to top" : "Yukarı çık";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`fixed ${BOTTOM_OFFSET_CLASS} right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-white shadow-md hover:bg-primary-600 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}

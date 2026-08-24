import Logo from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { setManualLanguageChoice, SupportedLanguage } from "@/utils/geoLanguageDetector";
import { pathForLanguage, contactPath, homePath } from "@/utils/ruPaths";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close language dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    setManualLanguageChoice(lang as SupportedLanguage);
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);

    const target = lang === "ru" || lang === "en" || lang === "tr" ? lang : "tr";
    const nextPath = pathForLanguage(location.pathname, target);
    if (nextPath !== location.pathname) {
      navigate(nextPath);
    }
  };

  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";

  const navLinks = isRu
    ? [
        { name: t('nav.home', 'Главная'), path: "/ru" },
        { name: "Регистрация компании в Турции", path: "/ru/kompaniya-v-turtsii" },
        { name: t('nav.services', 'Услуги'), path: "/ru/uslugi" },
        { name: t('nav.russia_market', 'Рынок и ВЭД'), path: "/ru/rynok-rossii" },
        { name: t('nav.op_model', 'Модель работы'), path: "/ru/model-raboty" },
        { name: t('nav.blog', 'Блог'), path: "/ru/blog" },
        { name: t('nav.contact', 'Контакты'), path: "/ru/kontakty" },
      ]
    : [
        { name: t('nav.home', 'Ana Sayfa'), path: "/" },
        { name: t('nav.about', 'Hakkımızda'), path: "/hakkimizda" },
        { name: t('nav.russia_market', 'Rusya Pazarı'), path: "/rusya-pazari" },
        { name: t('nav.services', 'Hizmetler'), path: "/hizmetler" },
        { name: t('nav.op_model', 'Operasyon Modeli'), path: "/operasyon-modeli" },
        { name: t('nav.for_whom', 'Kimler İçin?'), path: "/kimler-icin" },
        { name: t('nav.blog', 'Blog'), path: isEn ? "/en/blog" : "/blog" },
        { name: t('nav.contact', 'İletişim'), path: "/iletisim" },
      ];

  const currentLangLabel = i18n.language === "ru" ? "RU" : (i18n.language === "en" ? "EN" : "TR");
  const applyPath = contactPath(isRu);
  const logoPath = homePath(isRu);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px] md:h-[100px] py-2">
          <div className="flex items-center">
            <Link to={logoPath} className="group">
              <Logo className="transition-transform group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[13px] xl:text-[14px] font-medium tracking-wide transition-colors whitespace-nowrap",
                  location.pathname === link.path
                    ? "text-primary-500 font-semibold"
                    : "text-slate-500 hover:text-primary-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={applyPath}
              className="bg-accent-500 text-white px-5 xl:px-7 py-[10px] xl:py-[12px] rounded-full font-medium text-[13px] xl:text-[14px] hover:bg-accent-600 transition-colors whitespace-nowrap shadow-sm"
            >
              {t('nav.apply', 'Başvuru Yap')}
            </Link>

            {/* Language Switcher Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="text-slate-600 hover:text-primary-500 flex items-center gap-1.5 font-bold text-[13px] xl:text-[14px] px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50/80 hover:bg-slate-100 transition-colors"
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4 text-primary-500" />
                <span>{currentLangLabel}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 overflow-hidden">
                  <button
                    onClick={() => changeLanguage("tr")}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors",
                      i18n.language === "tr" ? "text-primary-500 font-bold bg-primary-50" : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <span>Türkçe</span>
                    <span className="text-xs text-slate-400 font-semibold">TR</span>
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors",
                      i18n.language === "en" ? "text-primary-500 font-bold bg-primary-50" : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <span>English</span>
                    <span className="text-xs text-slate-400 font-semibold">EN</span>
                  </button>
                  <button
                    onClick={() => changeLanguage("ru")}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors",
                      i18n.language === "ru" ? "text-primary-500 font-bold bg-primary-50" : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <span>Русский</span>
                    <span className="text-xs text-slate-400 font-semibold">RU</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => changeLanguage(i18n.language === "tr" ? "ru" : (i18n.language === "ru" ? "en" : "tr"))}
              className="text-slate-700 font-bold text-xs px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              {currentLangLabel}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block px-4 py-3 rounded-lg font-medium text-[15px] tracking-wide",
                location.pathname === link.path
                  ? "bg-primary-50 text-primary-500"
                  : "text-slate-500 hover:bg-primary-50 hover:text-primary-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4 flex flex-col gap-3">
            <Link
              to={applyPath}
              className="block w-full text-center bg-accent-500 text-white py-[14px] rounded-full font-medium text-[15px] hover:bg-accent-600 transition-colors shadow-sm"
            >
              {t('nav.apply', 'Başvuru Yap')}
            </Link>
            
            <div className="grid grid-cols-3 gap-2 pt-2">
              <button
                onClick={() => changeLanguage("tr")}
                className={cn(
                  "py-2.5 text-center text-sm font-semibold rounded-xl border transition-colors",
                  i18n.language === "tr" ? "bg-primary-500 text-white border-primary-500" : "bg-slate-50 text-slate-700 border-slate-200"
                )}
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={cn(
                  "py-2.5 text-center text-sm font-semibold rounded-xl border transition-colors",
                  i18n.language === "en" ? "bg-primary-500 text-white border-primary-500" : "bg-slate-50 text-slate-700 border-slate-200"
                )}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ru")}
                className={cn(
                  "py-2.5 text-center text-sm font-semibold rounded-xl border transition-colors",
                  i18n.language === "ru" ? "bg-primary-500 text-white border-primary-500" : "bg-slate-50 text-slate-700 border-slate-200"
                )}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

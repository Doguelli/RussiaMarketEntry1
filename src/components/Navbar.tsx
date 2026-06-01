import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home', 'Ana Sayfa'), path: "/" },
    { name: t('nav.about', 'Hakkımızda'), path: "/hakkimizda" },
    { name: t('nav.russia_market', 'Rusya Pazarı'), path: "/rusya-pazari" },
    { name: t('nav.services', 'Hizmetler'), path: "/hizmetler" },
    { name: t('nav.op_model', 'Operasyon Modeli'), path: "/operasyon-modeli" },
    { name: t('nav.for_whom', 'Kimler İçin?'), path: "/kimler-icin" },
    { name: t('nav.blog', 'Blog'), path: "/blog" },
    { name: t('nav.contact', 'İletişim'), path: "/iletisim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px] md:h-[100px] py-2">
          <div className="flex items-center">
            <Link to="/" className="group">
              <Logo className="transition-transform group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
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
              to="/iletisim"
              className="bg-accent-500 text-white px-6 xl:px-7 py-[10px] xl:py-[12px] rounded-full font-medium text-[13px] xl:text-[14px] hover:bg-accent-600 transition-colors whitespace-nowrap"
            >
              {t('nav.apply', 'Başvuru Yap')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="text-slate-500 hover:text-primary-500 flex items-center gap-1 font-medium text-[14px]"
            >
              <Globe className="w-4 h-4" />
              {i18n.language === "tr" ? "EN" : "TR"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
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
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full">
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
              to="/iletisim"
              className="block w-full text-center bg-accent-500 text-white py-[14px] rounded-full font-medium text-[15px] hover:bg-accent-600 transition-colors"
            >
              {t('nav.apply', 'Başvuru Yap')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full text-slate-500 py-[14px] font-medium text-[15px] bg-slate-50 rounded-full"
            >
              <Globe className="w-5 h-5" />
              {i18n.language === "tr" ? "Switch to English" : "Türkçe'ye Geç"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[130px] md:h-[160px] py-2">
          <div className="flex items-center">
            <Link to="/" className="group">
              <Logo className="transition-transform group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[14px] font-medium tracking-wide transition-colors",
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
              className="bg-accent-500 text-white px-7 py-[12px] rounded-full font-medium text-[14px] hover:bg-accent-600 transition-colors"
            >
              Başvuru Yap
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
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
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full">
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
          <div className="pt-4 px-4">
            <Link
              to="/iletisim"
              className="block w-full text-center bg-accent-500 text-white py-[14px] rounded-full font-medium text-[15px] hover:bg-accent-600 transition-colors"
            >
              Başvuru Yap
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

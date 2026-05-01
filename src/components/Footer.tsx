import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-500 border-t-4 border-accent-500 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <Logo light />
            </Link>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-sm mb-6">
              Sadece bir danışman olarak değil, doğrudan operasyonun içinde yer alan bir model geliştiriyoruz. Türkiye ve Rusya arasında köprü kuruyoruz.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-white font-semibold mb-6 text-[14px]">Hızlı Linkler</h3>
            <ul className="space-y-4">
              {[
                { name: "Ana Sayfa", path: "/" },
                { name: "Hakkımızda", path: "/hakkimizda" },
                { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
                { name: "İletişim", path: "/iletisim" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[14px] text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h3 className="text-white font-semibold mb-6 text-[14px]">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[14px] text-white/70">Podolsk, Domodedovskoye Shosse 20, Moskova</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[14px] text-white/70 flex items-center gap-2">
                  <span className="font-semibold text-white/90">TR:</span> +90 532 785 24 20
                </span>
                <span className="text-[14px] text-white/70 flex items-center gap-2">
                  <span className="font-semibold text-white/90">RU:</span> +7 993 406-72-58
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[14px] text-white/70">cankutosar@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <p>© {new Date().getFullYear()} Russia Market Entry. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link to="#" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

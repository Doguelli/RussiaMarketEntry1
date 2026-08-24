import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  homePath,
  aboutPath,
  russiaMarketPath,
  servicesPath,
  operationModelPath,
  forWhomPath,
  contactPath,
  privacyPath,
  termsPath,
  cookiesPath,
} from "@/utils/ruPaths";
import { VERIFIED_CONTACT } from "@/utils/seo";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  return (
    <footer className="bg-primary-500 border-t-4 border-accent-500 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <Link to={homePath(isRu)} className="inline-block mb-6">
              <Logo light />
            </Link>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-sm mb-6">
              {t('footer.desc')}
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-white font-semibold mb-6 text-[14px]">{t('footer.quick_links')}</h3>
            <ul className="space-y-4">
              {[
                { name: t('nav.home'), path: homePath(isRu) },
                { name: t('nav.about'), path: aboutPath(isRu) },
                { name: t('nav.russia_market'), path: russiaMarketPath(isRu) },
                { name: t('nav.services'), path: servicesPath(isRu) },
                { name: t('nav.op_model'), path: operationModelPath(isRu) },
                { name: t('nav.for_whom'), path: forWhomPath(isRu) },
                { name: t('nav.contact'), path: contactPath(isRu) },
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
            <h3 className="text-white font-semibold mb-6 text-[14px]">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[14px] text-white/70 leading-relaxed">
                  {VERIFIED_CONTACT.fullAddressRu}
                </span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[14px] text-white/70 flex items-center gap-2">
                  <span className="font-semibold text-white/90">TR:</span> {VERIFIED_CONTACT.phoneTr}
                </span>
                <span className="text-[14px] text-white/70 flex items-center gap-2">
                  <span className="font-semibold text-white/90">RU:</span> {VERIFIED_CONTACT.phoneRu}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[14px] text-white/70">{VERIFIED_CONTACT.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <p>© {new Date().getFullYear()} Russia Market Entry. {t('footer.all_rights')}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to={privacyPath(isRu)} className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to={termsPath(isRu)} className="hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to={cookiesPath(isRu)} className="hover:text-white transition-colors">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

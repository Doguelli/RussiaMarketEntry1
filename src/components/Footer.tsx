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
  whyRussiaPath,
  referencesPath,
} from "@/utils/ruPaths";
import { VERIFIED_CONTACT, OPERATIONAL_LOCATION } from "@/utils/seo";
import { reopenConsentBanner } from "@/utils/consent";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const pageLang = i18n.language;
  const isEn = i18n.language === "en";
  const blogPath = isRu ? "/ru/blog" : isEn ? "/en/blog" : "/blog";
  const operationalAddress = isRu
    ? OPERATIONAL_LOCATION.displayRu
    : isEn
      ? OPERATIONAL_LOCATION.displayEn
      : OPERATIONAL_LOCATION.displayTr;

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 border-t-4 border-accent-500 pt-12 md:pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
          
          <div className="md:col-span-4">
            <Link to={homePath(pageLang)} className="inline-block mb-4">
              <Logo light />
            </Link>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.youtube.com/@russiamarketentry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isRu ? "Russia Market Entry на YouTube" : isEn ? "Russia Market Entry on YouTube" : "Russia Market Entry YouTube kanalı"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/75 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                <Youtube aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/russiamarketentry/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isRu ? "Russia Market Entry в Instagram" : isEn ? "Russia Market Entry on Instagram" : "Russia Market Entry Instagram hesabı"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/75 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                <Instagram aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-white font-semibold mb-4 text-[14px]">{t('footer.quick_links')}</h3>
            <ul className="space-y-2.5">
              {[
                { name: t('nav.home'), path: homePath(pageLang) },
                { name: t('nav.about'), path: aboutPath(pageLang) },
                { name: t('nav.russia_market'), path: russiaMarketPath(pageLang) },
                { name: t('home.why_russia_detail.h1'), path: whyRussiaPath(pageLang) },
                { name: t('nav.services'), path: servicesPath(pageLang) },
                { name: t('nav.op_model'), path: operationModelPath(pageLang) },
                { name: t('nav.for_whom'), path: forWhomPath(pageLang) },
                { name: t('nav.blog'), path: blogPath },
                { name: t('nav.references'), path: referencesPath(pageLang) },
                { name: t('nav.contact'), path: contactPath(pageLang) },
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
            <h3 className="text-white font-semibold mb-4 text-[14px]">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1">
                <span className="text-[12px] font-semibold text-white/90 uppercase tracking-wide">
                  {t('footer.op_location_label')}
                </span>
                <span className="text-[14px] text-white/70 leading-relaxed">
                  {operationalAddress}
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[13px] text-white/50">
          <p>© {new Date().getFullYear()} Russia Market Entry. {t('footer.all_rights')}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to={privacyPath(pageLang)} className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to={termsPath(pageLang)} className="hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to={cookiesPath(pageLang)} className="hover:text-white transition-colors">
              {t('footer.cookies')}
            </Link>
            <button type="button" onClick={reopenConsentBanner} className="hover:text-white transition-colors">
              {t('footer.cookie_settings')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { detectLanguageFromBrowser } from './utils/geoLanguageDetector';

// Translation files
import translationEN from './locales/en.json';
import translationTR from './locales/tr.json';
import translationRU from './locales/ru.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
  ru: {
    translation: translationRU,
  },
};

/** Map a public pathname to the site language used for that URL tree. */
export function resolveLanguageFromPath(pathname: string): 'tr' | 'ru' | 'en' {
  const path = (pathname.split('?')[0] || '/').replace(/\/+$/, '') || '/';
  if (path === '/ru' || path.startsWith('/ru/')) return 'ru';
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  return 'tr';
}

// Client: /ru and /en URL trees force language; other paths keep browser/geo detection.
// SSR always starts as 'tr' here — entry-server sets language from the prerender URL before render.
const initialLanguage =
  typeof window !== 'undefined'
    ? (() => {
        const fromPath = resolveLanguageFromPath(window.location.pathname);
        if (fromPath === 'ru' || fromPath === 'en') return fromPath;
        return detectLanguageFromBrowser();
      })()
    : 'tr';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    lng: initialLanguage,
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

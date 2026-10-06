import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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

/**
 * Map a public pathname to the site language that URL tree must display.
 * /ru/* → ru, /en/* → en, everything else → tr
 */
export function resolveLanguageFromPath(pathname: string): 'tr' | 'ru' | 'en' {
  const path = (pathname.split('?')[0] || '/').replace(/\/+$/, '') || '/';
  if (path === '/ru' || path.startsWith('/ru/')) return 'ru';
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  return 'tr';
}

// Every page has its own URL per language, so the URL alone decides the UI
// language; visitors who prefer another language are sent to that URL instead
// (see ScrollToTopAndLangSync). SSR starts as 'tr' — entry-server sets the
// language from the prerender URL before render.
const initialLanguage =
  typeof window !== 'undefined' ? resolveLanguageFromPath(window.location.pathname) : 'tr';

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

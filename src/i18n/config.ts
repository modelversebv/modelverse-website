import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/translation.json'
import nl from './locales/nl/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'nl-NL': { translation: nl },
      nl: { translation: nl },
      'en-US': { translation: en },
      en: { translation: en },
    },
    fallbackLng: 'en-US',
    detection: {
      order: ['querystring', 'navigator'],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

'use client'

import { createContext, useContext, useState } from 'react'

import { NextIntlClientProvider } from 'next-intl'

import { useGaTracker } from '@/lib/analytics/use-ga-tracker'
import enMessages from '../../messages/en.json'
import nlMessages from '../../messages/nl.json'

export type Locale = 'en' | 'nl'

const messages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  nl: nlMessages,
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
})

export const useLocale = () => useContext(LocaleContext)

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const lang = navigator.language || ''
  return lang.startsWith('nl') ? 'nl' : 'en'
}

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  useGaTracker()

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]} timeZone="Europe/Amsterdam">
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}

'use client'

import { createContext, useContext } from 'react'

import { NextIntlClientProvider } from 'next-intl'

import { useGaTracker } from '@/lib/analytics/use-ga-tracker'
import type { Locale } from '@/lib/locales'
import enMessages from '../../messages/en.json'
import nlMessages from '../../messages/nl.json'

export type { Locale } from '@/lib/locales'
export { SUPPORTED_LOCALES } from '@/lib/locales'

const messages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  nl: nlMessages,
}

type LocaleContextValue = {
  locale: Locale
}

const LocaleContext = createContext<LocaleContextValue>({ locale: 'en' })

export const useLocale = () => useContext(LocaleContext)

export function IntlProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  useGaTracker()

  return (
    <LocaleContext.Provider value={{ locale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages[locale]}
        timeZone="Europe/Amsterdam"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}

'use client'

import { LocaleContext } from '@/context/locale-context'
import { useGaTracker } from '@/lib/analytics/use-ga-tracker'
import type { Locale } from '@/lib/locales'
import { NextIntlClientProvider } from 'next-intl'

import enMessages from '../../messages/en.json'
import esMessages from '../../messages/es.json'
import nlMessages from '../../messages/nl.json'

export type { Locale } from '@/lib/locales'
export { SUPPORTED_LOCALES } from '@/lib/locales'

const messages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  nl: nlMessages,
  es: esMessages,
}

/** Provides the locale and its translated messages to the client components of a route. */
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

'use client'

import { LocaleContext } from '@/context/locale-context'
import { useGaTracker } from '@/lib/analytics/use-ga-tracker'
import type { Locale } from '@/lib/locales'
import { messages } from '@/lib/messages'
import { NextIntlClientProvider } from 'next-intl'

export type { Locale } from '@/lib/locales'
export { SUPPORTED_LOCALES } from '@/lib/locales'

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

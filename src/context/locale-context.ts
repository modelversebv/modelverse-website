import { createContext, useContext } from 'react'

import type { Locale } from '@/lib/locales'

type LocaleContextValue = {
  locale: Locale
}

/** Current site locale, provided by `IntlProvider` for the route's language. */
export const LocaleContext = createContext<LocaleContextValue>({ locale: 'en' })

/** Returns the current site locale, e.g. to build locale-prefixed links. */
export const useLocale = () => useContext(LocaleContext)

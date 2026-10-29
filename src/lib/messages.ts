import en from '../../messages/en.json'
import es from '../../messages/es.json'
import nl from '../../messages/nl.json'
import type { Locale } from './locales'

/** The translation file's shape; English is the reference every other language must match. */
export type Messages = typeof en

/** Translations per site language, for page content and page metadata; the type requires an entry for every locale in `locales.ts`. */
export const messages: Record<Locale, Messages> = { en, nl, es }

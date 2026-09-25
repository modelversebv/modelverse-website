import { SUPPORTED_LOCALES } from '@/lib/locales'

const BASE_URL = 'https://modelverse.online'

export function localeUrl(locale: string, path: string): string {
  const prefix = locale === 'en' ? '' : `/${locale}`
  return `${BASE_URL}${prefix}${path}`
}

export function buildAlternates(locale: string, path: string) {
  return {
    canonical: localeUrl(locale, path),
    languages: Object.fromEntries(
      SUPPORTED_LOCALES.map((l) => [l, localeUrl(l, path)])
    ),
  }
}

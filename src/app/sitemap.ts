import { getArticleSlugs } from '@/lib/articles'
import { SUPPORTED_LOCALES } from '@/lib/locales'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://modelverse.online'

const STATIC_PAGES = [
  '',
  '/about',
  '/services',
  '/platform',
  '/cases',
  '/news',
  '/contact',
]

const LEGAL_SLUGS = ['privacy_policy', 'terms_of_service', 'cookie_policy']

function localeUrl(locale: string, path: string) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  return `${BASE_URL}${prefix}${path || '/'}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getArticleSlugs()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.flatMap((page) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: localeUrl(locale, page),
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : ('monthly' as const),
      priority: page === '' ? 1 : 0.8,
    }))
  )

  const legalEntries: MetadataRoute.Sitemap = LEGAL_SLUGS.flatMap((slug) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: localeUrl(locale, `/legal/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }))
  )

  const articleEntries: MetadataRoute.Sitemap = slugs.flatMap((slug) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: localeUrl(locale, `/news/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'never' as const,
      priority: 0.6,
    }))
  )

  return [...staticEntries, ...legalEntries, ...articleEntries]
}

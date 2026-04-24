import { getAllArticles, parseDate } from '@/lib/articles'
import { SUPPORTED_LOCALES } from '@/lib/locales'
import { metadata as cookieMeta } from '@/legal/cookie_policy.mdx'
import { metadata as privacyMeta } from '@/legal/privacy_policy.mdx'
import { metadata as termsMeta } from '@/legal/terms_of_service.mdx'
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

const LEGAL_PAGES: { slug: string; last_updated: string }[] = [
  { slug: 'privacy_policy', last_updated: (privacyMeta as any).last_updated },
  { slug: 'terms_of_service', last_updated: (termsMeta as any).last_updated },
  { slug: 'cookie_policy', last_updated: (cookieMeta as any).last_updated },
]

function localeUrl(locale: string, path: string) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  return `${BASE_URL}${prefix}${path || '/'}`
}

function parseLegalDate(dateString: string): Date {
  const [day, month, year] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.flatMap((page) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: localeUrl(locale, page),
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : ('monthly' as const),
      priority: page === '' ? 1 : 0.8,
    }))
  )

  const legalEntries: MetadataRoute.Sitemap = LEGAL_PAGES.flatMap((page) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: localeUrl(locale, `/legal/${page.slug}`),
      lastModified: parseLegalDate(page.last_updated),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }))
  )

  const articleEntries: MetadataRoute.Sitemap = articles.flatMap((article) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: localeUrl(locale, `/news/${article.postId}`),
      lastModified: parseDate(article.metadata.date),
      changeFrequency: 'never' as const,
      priority: 0.6,
    }))
  )

  return [...staticEntries, ...legalEntries, ...articleEntries]
}

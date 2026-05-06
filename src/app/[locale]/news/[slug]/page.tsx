import { ArticleContent } from '@/app/_content/article'
import { getArticleSlugs } from '@/lib/articles'
import type { MetaData } from '@/lib/articles'
import { buildAlternates, localeUrl } from '@/lib/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  try {
    const mod = await import(`@/articles/${slug}.mdx`)
    const meta: MetaData = mod.metadata
    return {
      title: `${meta.title} | Modelverse`,
      description: meta.summary,
      openGraph: {
        images: meta.image ? [meta.image] : [],
      },
      alternates: buildAlternates(locale, `/news/${slug}`),
    }
  } catch {
    return {}
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug, locale } = await params

  let mod: any
  try {
    mod = await import(`@/articles/${slug}.mdx`)
  } catch {
    notFound()
  }

  const Component = mod.default
  const meta: MetaData = mod.metadata

  const [day, month, year] = meta.date.split('/')
  const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.summary,
    datePublished: isoDate,
    author: { '@type': 'Person', name: meta.author },
    image: meta.image ? `https://modelverse.online${meta.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Modelverse',
      logo: 'https://modelverse.online/icon.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': localeUrl(locale, `/news/${slug}`),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: localeUrl(locale, '') },
      { '@type': 'ListItem', position: 2, name: 'News', item: localeUrl(locale, '/news') },
      { '@type': 'ListItem', position: 3, name: meta.title, item: localeUrl(locale, `/news/${slug}`) },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticleContent metadata={meta}>
        <Component />
      </ArticleContent>
    </>
  )
}

import { ArticleContent } from '@/app/_content/article'
import { computeWordCount, getArticleSlugs } from '@/lib/articles'
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
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const mod = await import(`@/articles/${slug}.mdx`)
    const meta: MetaData = mod.metadata
    return {
      title: `${meta.title} | Modelverse`,
      description: meta.seoDescription,
      openGraph: {
        images: meta.image ? [meta.image] : [],
      },
      alternates: buildAlternates('en', `/news/${slug}`),
    }
  } catch {
    return {}
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let mod: any
  try {
    mod = await import(`@/articles/${slug}.mdx`)
  } catch {
    notFound()
  }

  const Component = mod.default
  const meta: MetaData = mod.metadata

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.seoDescription,
    datePublished: meta.publishedAt,
    author: { '@type': 'Person', name: meta.author },
    image: meta.image ? `https://modelverse.online${meta.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Modelverse',
      logo: 'https://modelverse.online/icon.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': localeUrl('en', `/news/${slug}`),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: localeUrl('en', '') },
      { '@type': 'ListItem', position: 2, name: 'News', item: localeUrl('en', '/news') },
      { '@type': 'ListItem', position: 3, name: meta.title, item: localeUrl('en', `/news/${slug}`) },
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
      <ArticleContent metadata={meta} wordCount={computeWordCount(slug)}>
        <Component />
      </ArticleContent>
    </>
  )
}

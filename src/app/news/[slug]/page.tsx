import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getArticleSlugs } from '@/lib/articles'
import type { MetaData } from '@/lib/articles'

import { ArticleContent } from './content'

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
      title: `Modelverse | ${meta.title}`,
      description: meta.summary,
      openGraph: {
        images: meta.image ? [meta.image] : [],
      },
      alternates: {
        canonical: `https://modelverse.online/news/${slug}`,
      },
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
  const metadata: MetaData = mod.metadata

  return (
    <ArticleContent metadata={metadata}>
      <Component />
    </ArticleContent>
  )
}

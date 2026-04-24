import { NewsContent } from '@/app/_content/news'
import { getAllArticles } from '@/lib/articles'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Modelverse | News',
    description:
      'Stay up to date with the latest cybersecurity news, insights, and expert articles from the Modelverse team.',
    alternates: buildAlternates(locale, '/news'),
  }
}

export default async function Page() {
  const blogPosts = await getAllArticles()
  return <NewsContent blogPosts={blogPosts} />
}

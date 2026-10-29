import { NewsContent } from '@/app/_content/news'
import { getAllArticles } from '@/lib/articles'
import type { Locale } from '@/lib/locales'
import { messages } from '@/lib/messages'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = messages[locale as Locale] ?? messages.en
  return {
    title: t.news.metadata.title,
    description: t.news.metadata.description,
    alternates: buildAlternates(locale, '/news'),
  }
}

export default async function Page() {
  const blogPosts = await getAllArticles()
  return <NewsContent blogPosts={blogPosts} />
}

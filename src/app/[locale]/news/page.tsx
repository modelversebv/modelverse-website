import { NewsContent } from '@/app/_content/news'
import { getAllArticles } from '@/lib/articles'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import enMessages from '../../../../messages/en.json'
import nlMessages from '../../../../messages/nl.json'

const messages = { en: enMessages, nl: nlMessages }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = messages[locale as keyof typeof messages] ?? enMessages
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

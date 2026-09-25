import { NewsContent } from '@/app/_content/news'
import { getAllArticles } from '@/lib/articles'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import en from '../../../../messages/en.json'

export const metadata: Metadata = {
  title: en.news.metadata.title,
  description: en.news.metadata.description,
  alternates: buildAlternates('en', '/news'),
}

export default async function Page() {
  const blogPosts = await getAllArticles()
  return <NewsContent blogPosts={blogPosts} />
}

import { NewsContent } from '@/app/_content/news'
import { getAllArticles } from '@/lib/articles'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | News',
  description:
    'Stay up to date with the latest cybersecurity news, insights, and expert articles from the Modelverse team.',
  alternates: buildAlternates('en', '/news'),
}

export default async function Page() {
  const blogPosts = await getAllArticles()
  return <NewsContent blogPosts={blogPosts} />
}

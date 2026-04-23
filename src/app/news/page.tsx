import type { Metadata } from 'next'

import { getAllArticles } from '@/lib/articles'

import { NewsContent } from './content'

export const metadata: Metadata = {
  title: 'Modelverse | News',
  description:
    'Stay up to date with the latest cybersecurity news, insights, and expert articles from the Modelverse team.',
}

export default async function Page() {
  const blogPosts = await getAllArticles()
  return <NewsContent blogPosts={blogPosts} />
}

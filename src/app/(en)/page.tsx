import { HomeContent } from '@/app/_content/home'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import en from '../../../messages/en.json'

export const metadata: Metadata = {
  title: en.home.metadata.title,
  description: en.home.metadata.description,
  alternates: buildAlternates('en', ''),
}

export default function Page() {
  return <HomeContent />
}

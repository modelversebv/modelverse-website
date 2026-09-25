import { AboutContent } from '@/app/_content/about'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import en from '../../../../messages/en.json'

export const metadata: Metadata = {
  title: en.about.metadata.title,
  description: en.about.metadata.description,
  alternates: buildAlternates('en', '/about'),
}

export default function Page() {
  return <AboutContent />
}

import { PlatformContent } from '@/app/_content/platform'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import en from '../../../../messages/en.json'

export const metadata: Metadata = {
  title: en.platform.metadata.title,
  description: en.platform.metadata.description,
  alternates: buildAlternates('en', '/platform'),
}

export default function Page() {
  return <PlatformContent />
}

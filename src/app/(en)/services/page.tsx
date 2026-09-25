import { ServicesContent } from '@/app/_content/services'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import en from '../../../../messages/en.json'

export const metadata: Metadata = {
  title: en.services.metadata.title,
  description: en.services.metadata.description,
  alternates: buildAlternates('en', '/services'),
}

export default function Page() {
  return <ServicesContent />
}

import { ContactContent } from '@/app/_content/contact'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import en from '../../../../messages/en.json'

export const metadata: Metadata = {
  title: en.contact.metadata.title,
  description: en.contact.metadata.description,
  alternates: buildAlternates('en', '/contact'),
}

export default function Page() {
  return <ContactContent />
}

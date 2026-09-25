import { ContactContent } from '@/app/_content/contact'
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
    title: t.contact.metadata.title,
    description: t.contact.metadata.description,
    alternates: buildAlternates(locale, '/contact'),
  }
}

export default function Page() {
  return <ContactContent />
}

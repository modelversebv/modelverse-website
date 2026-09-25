import { ServicesContent } from '@/app/_content/services'
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
    title: t.services.metadata.title,
    description: t.services.metadata.description,
    alternates: buildAlternates(locale, '/services'),
  }
}

export default function Page() {
  return <ServicesContent />
}

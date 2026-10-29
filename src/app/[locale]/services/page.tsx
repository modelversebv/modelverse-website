import { ServicesContent } from '@/app/_content/services'
import type { Locale } from '@/lib/locales'
import { messages } from '@/lib/messages'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = messages[locale as Locale] ?? messages.en
  return {
    title: t.services.metadata.title,
    description: t.services.metadata.description,
    alternates: buildAlternates(locale, '/services'),
  }
}

export default function Page() {
  return <ServicesContent />
}

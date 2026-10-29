import { ContactContent } from '@/app/_content/contact'
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
    title: t.contact.metadata.title,
    description: t.contact.metadata.description,
    alternates: buildAlternates(locale, '/contact'),
  }
}

export default function Page() {
  return <ContactContent />
}

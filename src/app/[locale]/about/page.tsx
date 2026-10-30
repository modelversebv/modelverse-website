import { AboutContent } from '@/app/_content/about'
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
    title: t.about.metadata.title,
    description: t.about.metadata.description,
    alternates: buildAlternates(locale, '/about'),
  }
}

export default function Page() {
  return <AboutContent />
}

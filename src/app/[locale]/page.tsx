import { HomeContent } from '@/app/_content/home'
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
    title: t.home.metadata.title,
    description: t.home.metadata.description,
    alternates: buildAlternates(locale, ''),
  }
}

export default function Page() {
  return <HomeContent />
}

import { CasesContent } from '@/app/_content/cases'
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
    title: t.cases.metadata.title,
    description: t.cases.metadata.description,
    alternates: buildAlternates(locale, '/cases'),
  }
}

export default function Page() {
  return <CasesContent />
}

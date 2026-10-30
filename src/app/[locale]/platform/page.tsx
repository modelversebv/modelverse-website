import { PlatformContent } from '@/app/_content/platform'
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
    title: t.platform.metadata.title,
    description: t.platform.metadata.description,
    alternates: buildAlternates(locale, '/platform'),
  }
}

export default function Page() {
  return <PlatformContent />
}

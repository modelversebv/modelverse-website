import { PlatformContent } from '@/app/_content/platform'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Modelverse | Platform',
    description:
      'Manage your cybersecurity risks and compliance using the Modelverse Risk & Compliance SaaS platform.',
    alternates: buildAlternates(locale, '/platform'),
  }
}

export default function Page() {
  return <PlatformContent />
}

import { HomeContent } from '@/app/_content/home'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Modelverse | Cybersecurity Risk Management',
    description:
      'Modelverse provides a cybersecurity risk management platform and consultancy services for organizations of all sizes.',
    alternates: buildAlternates(locale, ''),
  }
}

export default function Page() {
  return <HomeContent />
}

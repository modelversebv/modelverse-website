import { ServicesContent } from '@/app/_content/services'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Modelverse | Services',
    description:
      'Explore Modelverse cybersecurity consultancy services — risk assessments, compliance support, and expert guidance for organizations of all sizes.',
    alternates: buildAlternates(locale, '/services'),
  }
}

export default function Page() {
  return <ServicesContent />
}

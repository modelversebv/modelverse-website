import { AboutContent } from '@/app/_content/about'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Modelverse | About',
    description:
      'Learn about Modelverse — our mission, team, and commitment to helping organizations manage cybersecurity risk and achieve compliance.',
    alternates: buildAlternates(locale, '/about'),
  }
}

export default function Page() {
  return <AboutContent />
}

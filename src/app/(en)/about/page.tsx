import { AboutContent } from '@/app/_content/about'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | About',
  description:
    'Learn about Modelverse — our mission, team, and commitment to helping organizations manage cybersecurity risk and achieve compliance.',
  alternates: buildAlternates('en', '/about'),
}

export default function Page() {
  return <AboutContent />
}

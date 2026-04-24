import { AboutContent } from '@/app/_content/about'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | About',
  description:
    'Learn about Modelverse — our mission, team, and commitment to helping organizations manage cybersecurity risk and achieve compliance.',
  alternates: {
    canonical: 'https://modelverse.online/about',
    languages: {
      en: 'https://modelverse.online/about',
      nl: 'https://modelverse.online/nl/about',
    },
  },
}

export default function Page() {
  return <AboutContent />
}

import type { Metadata } from 'next'

import { AboutContent } from './content'

export const metadata: Metadata = {
  title: 'Modelverse | About',
  description:
    'Learn about Modelverse — our mission, team, and commitment to helping organizations manage cybersecurity risk and achieve compliance.',
}

export default function Page() {
  return <AboutContent />
}

import type { Metadata } from 'next'

import { ServicesContent } from './content'

export const metadata: Metadata = {
  title: 'Modelverse | Services',
  description:
    'Explore Modelverse cybersecurity consultancy services — risk assessments, compliance support, and expert guidance for organizations of all sizes.',
}

export default function Page() {
  return <ServicesContent />
}

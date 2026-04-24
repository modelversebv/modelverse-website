import { ServicesContent } from '@/app/_content/services'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | Services',
  description:
    'Explore Modelverse cybersecurity consultancy services — risk assessments, compliance support, and expert guidance for organizations of all sizes.',
  alternates: buildAlternates('en', '/services'),
}

export default function Page() {
  return <ServicesContent />
}

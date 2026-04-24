import { HomeContent } from '@/app/_content/home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | Cybersecurity Risk Management',
  description:
    'Modelverse provides a cybersecurity risk management platform and consultancy services for organizations of all sizes.',
}

export default function Page() {
  return <HomeContent />
}

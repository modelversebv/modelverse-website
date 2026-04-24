import { PlatformContent } from '@/app/_content/platform'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | Platform',
  description:
    'Manage your cybersecurity risks and compliance using the Modelverse Risk & Compliance SaaS platform.',
  alternates: {
    canonical: 'https://modelverse.online/platform',
    languages: {
      en: 'https://modelverse.online/platform',
      nl: 'https://modelverse.online/nl/platform',
    },
  },
}

export default function Page() {
  return <PlatformContent />
}

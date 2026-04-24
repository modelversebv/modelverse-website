import { CasesContent } from '@/app/_content/cases'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | Cases',
  description:
    'Discover how Modelverse has helped organizations strengthen their cybersecurity posture through real-world risk and compliance case studies.',
  alternates: {
    canonical: 'https://modelverse.online/cases',
    languages: {
      en: 'https://modelverse.online/cases',
      nl: 'https://modelverse.online/nl/cases',
    },
  },
}

export default function Page() {
  return <CasesContent />
}

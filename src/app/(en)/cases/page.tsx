import { CasesContent } from '@/app/_content/cases'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | Cases',
  description:
    'Discover how Modelverse has helped organizations strengthen their cybersecurity posture through real-world risk and compliance case studies.',
  alternates: buildAlternates('en', '/cases'),
}

export default function Page() {
  return <CasesContent />
}

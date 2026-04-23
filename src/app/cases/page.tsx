import type { Metadata } from 'next'

import { CasesContent } from './content'

export const metadata: Metadata = {
  title: 'Modelverse | Cases',
  description:
    'Discover how Modelverse has helped organizations strengthen their cybersecurity posture through real-world risk and compliance case studies.',
}

export default function Page() {
  return <CasesContent />
}

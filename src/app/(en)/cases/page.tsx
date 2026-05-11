import { CasesContent } from '@/app/_content/cases'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import en from '../../../../messages/en.json'

export const metadata: Metadata = {
  title: en.cases.metadata.title,
  description: en.cases.metadata.description,
  alternates: buildAlternates('en', '/cases'),
}

export default function Page() {
  return <CasesContent />
}

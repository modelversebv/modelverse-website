import { CasesContent } from '@/app/_content/cases'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Modelverse | Cases',
    description:
      'Discover how Modelverse has helped organizations strengthen their cybersecurity posture through real-world risk and compliance case studies.',
    alternates: buildAlternates(locale, '/cases'),
  }
}

export default function Page() {
  return <CasesContent />
}

import { ContactContent } from '@/app/_content/contact'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Modelverse | Contact',
    description:
      'Get in touch with Modelverse. Reach out to our team for questions about our cybersecurity risk management platform or consultancy services.',
    alternates: buildAlternates(locale, '/contact'),
  }
}

export default function Page() {
  return <ContactContent />
}

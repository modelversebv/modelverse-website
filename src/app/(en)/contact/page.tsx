import { ContactContent } from '@/app/_content/contact'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | Contact',
  description:
    'Get in touch with Modelverse. Reach out to our team for questions about our cybersecurity risk management platform or consultancy services.',
  alternates: buildAlternates('en', '/contact'),
}

export default function Page() {
  return <ContactContent />
}

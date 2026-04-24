import { ContactContent } from '@/app/_content/contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelverse | Contact',
  description:
    'Get in touch with Modelverse. Reach out to our team for questions about our cybersecurity risk management platform or consultancy services.',
  alternates: {
    canonical: 'https://modelverse.online/contact',
    languages: {
      en: 'https://modelverse.online/contact',
      nl: 'https://modelverse.online/nl/contact',
    },
  },
}

export default function Page() {
  return <ContactContent />
}

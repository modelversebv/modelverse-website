import type { Metadata } from 'next'

import { ContactContent } from './content'

export const metadata: Metadata = {
  title: 'Modelverse | Contact',
  description:
    'Get in touch with Modelverse. Reach out to our team for questions about our cybersecurity risk management platform or consultancy services.',
}

export default function Page() {
  return <ContactContent />
}

import '../index.css'
import 'flag-icons/css/flag-icons.min.css'
import type { Metadata } from 'next'

import { IntlProvider } from '@/providers/IntlProvider'

export const metadata: Metadata = {
  title: 'Modelverse',
  description: 'Cybersecurity Risk & Compliance management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <IntlProvider>
          <div id="root">{children}</div>
        </IntlProvider>
      </body>
    </html>
  )
}

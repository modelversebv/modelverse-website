import 'flag-icons/css/flag-icons.min.css'
import type { Metadata } from 'next'

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
        <div id="root">{children}</div>
      </body>
    </html>
  )
}

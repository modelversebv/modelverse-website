import 'flag-icons/css/flag-icons.min.css'
import type { Metadata } from 'next'
import { preload } from 'react-dom'

import '../index.css'

const heroImages = [
  '/images/heroes/home.avif',
  '/images/heroes/about.avif',
  '/images/heroes/cases.avif',
  '/images/heroes/contact.avif',
  '/images/heroes/news.avif',
  '/images/heroes/platform.avif',
  '/images/heroes/services.avif',
]

export const metadata: Metadata = {
  metadataBase: new URL('https://modelverse.online'),
  title: 'Modelverse',
  description: 'Cybersecurity Risk & Compliance management',
  openGraph: {
    siteName: 'Modelverse',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Modelverse',
  legalName: 'Modelverse B.V.',
  url: 'https://modelverse.online',
  logo: 'https://modelverse.online/icon.png',
  description:
    'Empowering organisations to manage cybersecurity risks and compliance with confidence.',
  email: 'info@modelverse.online',
  telephone: '+31627612498',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
  },
  sameAs: [
    'https://www.linkedin.com/company/modelverse/',
    'https://github.com/modelversebv',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Modelverse',
  url: 'https://modelverse.online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  heroImages.forEach((src) => preload(src, { as: 'image', fetchPriority: 'high' }))

  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" title="LLMs.txt" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="LLMs-full.txt" href="/llms-full.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}

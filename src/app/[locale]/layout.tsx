import { SUPPORTED_LOCALES, type Locale } from '@/lib/locales'
import { IntlProvider } from '@/providers/IntlProvider'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return SUPPORTED_LOCALES.filter((l) => l !== 'en').map((locale) => ({
    locale,
  }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!SUPPORTED_LOCALES.includes(locale as Locale) || locale === 'en') {
    notFound()
  }

  return <IntlProvider locale={locale as Locale}>{children}</IntlProvider>
}

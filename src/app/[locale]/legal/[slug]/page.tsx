import { LegalContent } from '@/app/_content/legal'
import CookiePolicy, { metadata as cookieMeta } from '@/legal/cookie_policy.mdx'
import PrivacyPolicy, { metadata as privacyMeta } from '@/legal/privacy_policy.mdx'
import TermsOfService, { metadata as termsMeta } from '@/legal/terms_of_service.mdx'
import { buildAlternates } from '@/lib/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import enMessages from '../../../../../messages/en.json'
import nlMessages from '../../../../../messages/nl.json'

const messages = { en: enMessages, nl: nlMessages }

type LegalMeta = {
  title: string
  last_updated: string
  effective_date: string
}

const pages: Record<
  string,
  { Component: React.ComponentType<any>; meta: LegalMeta }
> = {
  cookie_policy: { Component: CookiePolicy, meta: cookieMeta as LegalMeta },
  privacy_policy: { Component: PrivacyPolicy, meta: privacyMeta as LegalMeta },
  terms_of_service: { Component: TermsOfService, meta: termsMeta as LegalMeta },
}

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const page = pages[slug]
  if (!page) return {}
  const t = messages[locale as keyof typeof messages] ?? enMessages
  const lm = t.legal.metadata
  return {
    title: `${page.meta.title} | Modelverse`,
    description: `${lm.description_line1} ${page.meta.title} ${lm.description_line2}`,
    alternates: buildAlternates(locale, `/legal/${slug}`),
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()

  const { Component, meta } = page

  return (
    <LegalContent slug={slug} metadata={meta}>
      <Component />
    </LegalContent>
  )
}

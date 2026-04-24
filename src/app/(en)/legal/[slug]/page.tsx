import { LegalContent } from '@/app/_content/legal'
import CookiePolicy, { metadata as cookieMeta } from '@/legal/cookie_policy.mdx'
import PrivacyPolicy, {
  metadata as privacyMeta,
} from '@/legal/privacy_policy.mdx'
import TermsOfService, {
  metadata as termsMeta,
} from '@/legal/terms_of_service.mdx'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return {
    title: `Modelverse | ${page.meta.title}`,
    description: `The official ${page.meta.title} document for Modelverse B.V.`,
    alternates: {
      canonical: `https://modelverse.online/legal/${slug}`,
      languages: {
        en: `https://modelverse.online/legal/${slug}`,
        nl: `https://modelverse.online/nl/legal/${slug}`,
      },
    },
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

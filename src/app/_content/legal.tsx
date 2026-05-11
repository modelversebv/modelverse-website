'use client'

import { useEffect, useRef, useState } from 'react'

import { Card } from '@/components/common/card'
import { Layout } from '@/components/layout/page-layout'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ArrowLeft, FileText } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/providers/IntlProvider'

type LegalMeta = {
  title: string
  last_updated: string
  effective_date: string
}

type TocEntry = {
  id: string
  text: string
  level: number
}

type LegalContentProps = {
  slug: string
  metadata: LegalMeta
  children: React.ReactNode
}

export function LegalContent({ slug, metadata, children }: LegalContentProps) {
  const layoutRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const t = useTranslations()
  const { locale } = useLocale()
  const prefix = locale === 'en' ? '' : `/${locale}`

  const crumb = slug
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const [toc, setToc] = useState<TocEntry[]>([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const article = document.querySelector('article')
      if (!article) return

      const headings = Array.from(
        article.querySelectorAll('h2, h3, h4, h5, h6')
      ) as HTMLElement[]

      setToc(
        headings.map((h) => ({
          id: h.id,
          text: h.innerText,
          level: Number(h.tagName.replace('H', '')),
        }))
      )
    }, 0)

    return () => clearTimeout(timeout)
  }, [slug])

  return (
    <Layout ref={layoutRef}>
      <div className="shrink-0 border-b border-white/20 pt-18">
        <div className="p-4 md:container md:mx-auto">
          <div className="mx-auto max-w-6xl">
            <Breadcrumb>
              <BreadcrumbList className="text-white/70">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`${prefix}/`} className="hover:text-white">
                      {t('legal.breadcrumb.home')}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-lime-500">
                  {crumb}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="mx-auto grow px-4 py-16 text-white md:container md:mx-auto">
        <div className="mx-auto flex h-full max-w-6xl flex-col gap-4 md:gap-8">
          <button
            className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full px-4 py-2 text-sm font-semibold text-lime-500 transition-all duration-300"
            onClick={() => router.push(`${prefix}/`)}
          >
            <ArrowLeft className="size-5 transition-all duration-300 group-hover:-translate-x-1" />
            {t('legal.back')}
          </button>

          <div className="relative flex flex-col gap-4 md:gap-8 lg:flex-row">
            {toc.length > 0 && (
              <Card className="shrink-0 gap-4 bg-white/5 p-4 text-white hover:border-lime-500/50 hover:bg-white/10 lg:sticky lg:top-36 lg:size-fit">
                <div className="flex flex-row items-center-safe gap-2 text-xl font-semibold">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-lime-500 to-teal-500">
                    <FileText className="size-6" />
                  </div>
                  {t('legal.toc')}
                </div>
                <ul className="pl-2">
                  {toc.map((item) => (
                    <li
                      key={item.id}
                      className="mb-2 cursor-pointer rounded-lg px-4 py-2 text-white/70 hover:bg-white/20"
                    >
                      <a href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <article className="prose prose-invert prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:w-full prose-img:object-cover max-w-full">
              <div className="not-prose flex flex-col gap-4">
                <h1 className="text-4xl text-white sm:text-5xl">
                  {metadata.title}
                </h1>
                <div className="flex flex-col">
                  <p className="text-white/70">
                    <span className="font-bold">
                      {t('legal.last_updated')}:{' '}
                    </span>
                    {metadata.last_updated}
                  </p>
                  <p className="text-white/70">
                    <span className="font-bold">
                      {t('legal.effective_date')}:{' '}
                    </span>
                    {metadata.effective_date}
                  </p>
                </div>
              </div>
              {children}
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

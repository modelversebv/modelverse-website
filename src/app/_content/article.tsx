'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Layout } from '@/components/layout/page-layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ArrowLeft, Calendar, User } from 'lucide-react'

import type { MetaData } from '@/lib/articles'

type ArticleContentProps = {
  metadata: MetaData
  children: React.ReactNode
}

export function ArticleContent({ metadata, children }: ArticleContentProps) {
  const layoutRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const t = useTranslations()

  return (
    <Layout ref={layoutRef}>
      <div className="shrink-0 border-b border-white/20 pt-18">
        <div className="px-4 py-4 md:container md:mx-auto md:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumb>
              <BreadcrumbList className="text-white/70">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="hover:text-white">
                      {t('article.breadcrumb.home')}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/news" className="hover:text-white">
                      {t('article.breadcrumb.news')}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-lime-500">
                  {t('article.breadcrumb.article')}
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] w-full overflow-hidden bg-black">
        <img src={metadata.image} alt={metadata.title} className="size-full object-cover" />
        <div className="absolute inset-0 size-full bg-linear-to-t from-gray-900 via-gray-900/50 to-gray-900">
          <div className="flex size-full items-end-safe justify-center-safe px-4 py-16 md:container md:mx-auto">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 md:gap-8">
              <h1 className="text-4xl text-white drop-shadow-lg sm:text-5xl">
                {metadata.title}
              </h1>
              {metadata.subtitle != '' && (
                <h2 className="text-2xl text-white/95 drop-shadow-lg sm:text-3xl">
                  {metadata.subtitle}
                </h2>
              )}
              <div className="flex flex-row flex-wrap items-center-safe gap-4 text-white/90">
                <div className="flex shrink-0 flex-row items-center-safe gap-2">
                  <Avatar className="size-8 self-center">
                    <AvatarImage
                      src={metadata.portrait}
                      className="object-cover object-center"
                    />
                    <AvatarFallback className="bg-transparent">
                      <User className="size-4 shrink-0" />
                    </AvatarFallback>
                  </Avatar>
                  {metadata.author}
                </div>
                <div className="flex shrink-0 flex-row items-center-safe gap-2">
                  <Avatar>
                    <AvatarImage></AvatarImage>
                    <AvatarFallback className="bg-transparent">
                      <Calendar className="size-4 shrink-0" />
                    </AvatarFallback>
                  </Avatar>
                  {metadata.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grow px-4 py-16 text-white md:container md:mx-auto">
        <div className="mx-auto flex h-full max-w-4xl flex-col gap-4 md:gap-8">
          <button
            className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full px-4 py-2 text-sm font-semibold text-lime-500 transition-all duration-300"
            onClick={() => router.push('/news')}
          >
            <ArrowLeft className="size-5 transition-all duration-300 group-hover:-translate-x-1" />
            {t('article.back')}
          </button>
          <article className="prose prose-invert prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:w-full prose-img:object-cover max-w-full">
            {children}
          </article>
        </div>
      </div>
    </Layout>
  )
}

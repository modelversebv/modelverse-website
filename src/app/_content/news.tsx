'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { Card } from '@/components/common/card'
import { Hero } from '@/components/common/hero'
import { Layout } from '@/components/layout/page-layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  staggerContainer,
} from '@/lib/animation-variants'
import type { BlogPost } from '@/lib/articles'
import { formatDate } from '@/lib/format-date'
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  EllipsisIcon,
  Shield,
  User,
} from 'lucide-react'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/providers/IntlProvider'

// --- Sub-components ---

function NewsHero() {
  const t = useTranslations()
  return (
    <Hero
      className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
      backgroundClassName="object-[center_40%]"
      backgroundImg="/images/heroes/news.avif"
      backgroundAlt="Modelverse news and insights"
      overlay
    >
      <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
        <Shield className="size-5" />
        <p className="text-sm">{t('news.hero.badge')}</p>
      </div>
      <h1 className="text-5xl sm:text-6xl">
        {t('news.hero.title_line1')}{' '}
        <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
          {t('news.hero.title_line2')}
        </span>{' '}
        {t('news.hero.title_line3')}
      </h1>
      <p className="text-xl text-white/70">{t('news.hero.description')}</p>
    </Hero>
  )
}

function FeaturedPostItem({ post, index }: { post: BlogPost; index: number }) {
  const t = useTranslations()
  const { locale } = useLocale()
  const prefix = locale === 'en' ? '' : `/${locale}`
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInLeft}
    >
      <Card className="relative grid grid-cols-1 overflow-hidden bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10 lg:grid-cols-2">
        <div className="absolute z-1 mt-4 ml-4 flex w-fit flex-row gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-1 text-white shadow-lg backdrop-blur-md">
          <p className="text-sm">{t('news.featured')}</p>
        </div>
        <div
          className={`relative flex max-h-[300px] items-center-safe justify-center-safe overflow-hidden lg:h-auto lg:max-h-none lg:basis-1/2 ${index % 2 != 0 && 'lg:order-last'}`}
        >
          {post.metadata.image != '' ? (
            <img
              src={post.metadata.image}
              alt={post.metadata.title}
              className="size-full rounded-t-xl object-cover transition-all duration-300 lg:absolute lg:inset-0 lg:rounded-t-none lg:rounded-l-xl"
            />
          ) : (
            <div className="size-full rounded-t-xl bg-black lg:rounded-t-none lg:rounded-l-xl" />
          )}
        </div>
        <div className="flex flex-col gap-4 p-4 lg:basis-1/2 lg:justify-center-safe">
          <Link href={`${prefix}/news/${post.postId}`}>
            <h2 className="cursor-pointer text-3xl transition-all duration-300 hover:text-lime-500">
              {post.metadata.title}
            </h2>
          </Link>
          <p className="text-lg text-white/70">{post.metadata.summary}</p>
          <div className="flex flex-row flex-wrap items-center-safe gap-4 text-white/60">
            <div className="flex shrink-0 flex-row items-center-safe gap-2">
              <Avatar className="size-8 self-center">
                <AvatarImage
                  src={post.metadata.portrait}
                  className="object-cover object-center"
                />
                <AvatarFallback>
                  <User className="size-4 shrink-0" />
                </AvatarFallback>
              </Avatar>
              {post.metadata.author}
            </div>
            <div className="flex shrink-0 flex-row items-center-safe gap-2">
              <Avatar>
                <AvatarImage></AvatarImage>
                <AvatarFallback className="bg-transparent">
                  <Calendar className="size-4 shrink-0" />
                </AvatarFallback>
              </Avatar>
              {formatDate(post.metadata.publishedAt)}
            </div>
          </div>
          <Link
            href={`${prefix}/news/${post.postId}`}
            className="group flex cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
          >
            {t('news.read_article')}
            <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}

function RecentPostItem({ post }: { post: BlogPost }) {
  const router = useRouter()
  const { locale } = useLocale()
  const prefix = locale === 'en' ? '' : `/${locale}`

  return (
    <Card
      className="group size-full cursor-pointer overflow-hidden bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10"
      onClick={() => router.push(`${prefix}/news/${post.postId}`)}
    >
      <div className="flex h-[200px] items-center-safe justify-center-safe overflow-hidden">
        {post.metadata.image != '' ? (
          <img
            src={post.metadata.image}
            alt={post.metadata.title}
            className="size-full rounded-t-xl object-cover transition-all duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="size-full rounded-t-xl bg-black" />
        )}
      </div>
      <div className="flex grow flex-col gap-4 p-4 md:justify-center-safe">
        <h3 className="text-xl transition-all duration-300 group-hover:text-lime-500">
          {post.metadata.title}
        </h3>
        <p className="text-white/70">{post.metadata.summary}</p>
        <div className="flex grow flex-col justify-end-safe gap-4">
          <div className="mt-auto flex flex-col gap-4 text-white/60">
            <div className="flex shrink-0 flex-row items-center-safe gap-2">
              <Avatar className="size-8 self-center">
                <AvatarImage
                  src={post.metadata.portrait}
                  className="object-cover object-center"
                />
                <AvatarFallback>
                  <User className="size-4 shrink-0" />
                </AvatarFallback>
              </Avatar>
              {post.metadata.author}
            </div>
            <div className="flex shrink-0 flex-row items-center-safe gap-2">
              <Avatar>
                <AvatarImage></AvatarImage>
                <AvatarFallback className="bg-transparent">
                  <Calendar className="size-4 shrink-0" />
                </AvatarFallback>
              </Avatar>
              {formatDate(post.metadata.publishedAt)}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// --- Page ---

export function NewsContent({ blogPosts }: { blogPosts: BlogPost[] }) {
  const layoutRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  const featuredBlogPosts = blogPosts.filter((p) => p.metadata.featured)
  const recentBlogPosts = blogPosts.filter((p) => !p.metadata.featured)

  const [currentPage, setCurrentPage] = useState(0)
  const [articlesPerPage, setArticlesPerPage] = useState(3)

  const blogPostPages = useMemo(() => {
    const pages: BlogPost[][] = []
    const totalPages = Math.ceil(recentBlogPosts.length / articlesPerPage)
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        recentBlogPosts.slice(i * articlesPerPage, (i + 1) * articlesPerPage)
      )
    }
    return pages
  }, [recentBlogPosts, articlesPerPage])

  const currentPageData = blogPostPages[currentPage]

  const getPaginationRange = () => {
    const totalPages = blogPostPages.length
    if (totalPages <= 1) return [0]

    let range = [0]
    for (let i = 1; i < totalPages - 1; i++) {
      range.push(i < currentPage - 1 || i > currentPage + 1 ? -1 : i)
    }
    range.push(totalPages - 1)
    return [...new Set(range)]
  }

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth
      if (width >= 1280) setArticlesPerPage(4)
      else if (width >= 1024) setArticlesPerPage(3)
      else setArticlesPerPage(2)
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [articlesPerPage])

  useEffect(() => {
    if (currentPage >= blogPostPages.length && blogPostPages.length > 0) {
      setCurrentPage(blogPostPages.length - 1)
    }
  }, [currentPage, blogPostPages.length])

  const recentArticlesRef = useRef<HTMLDivElement>(null)
  const recentArticlesInView = useInView(recentArticlesRef, {
    once: true,
    margin: '-100px',
  })

  function scrollToRecentArticles() {
    const target = recentArticlesRef.current
    if (!target) return
    const offset = -96
    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(target, { offset, immediate: false })
      return
    }
    const container = layoutRef.current
    if (!container) return
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect()
        const targetRect = target.getBoundingClientRect()
        container.scrollTop += targetRect.top - containerRect.top + offset
      })
    })
  }

  return (
    <Layout news={true} hero={<NewsHero />} ref={layoutRef}>
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="flex flex-col justify-center-safe gap-32 px-4 py-16 text-white md:container md:mx-auto">
          {blogPosts.length != 0 ? (
            featuredBlogPosts.map((post, index) => (
              <FeaturedPostItem key={index} post={post} index={index} />
            ))
          ) : (
            <div className="flex flex-col items-center-safe justify-center-safe gap-4">
              <h2 className="text-4xl sm:text-5xl">{t('news.empty.title')}</h2>
              <p className="text-xl text-white/70">
                {t('news.empty.subtitle')}
              </p>
            </div>
          )}

          {recentBlogPosts.length != 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                ref={recentArticlesRef}
                initial="hidden"
                animate={recentArticlesInView ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className="flex flex-col gap-8"
              >
                <motion.h2 className="text-4xl sm:text-5xl">
                  {t('news.recent_articles')}
                </motion.h2>

                <motion.div
                  key={currentPage}
                  variants={staggerContainer}
                  initial="hidden"
                  animate={recentArticlesInView ? 'visible' : 'hidden'}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {currentPageData?.map((post, index) => (
                    <motion.div variants={scaleIn} key={index}>
                      <RecentPostItem post={post} />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  className="flex flex-row justify-center-safe gap-2"
                >
                  <motion.div variants={fadeInUp}>
                    <button
                      className="flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border border-white/20 bg-white/5 p-1 font-semibold shadow-lg transition-all duration-300 hover:bg-white/10 md:pr-3"
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(prev - 1, 0))
                        scrollToRecentArticles()
                      }}
                    >
                      <ChevronLeft className="size-6" />
                      <span className="hidden md:inline-block">
                        {t('news.pagination.previous')}
                      </span>
                    </button>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="flex shrink-0 flex-row items-center-safe justify-center-safe gap-1"
                  >
                    {getPaginationRange().map((page, index) => {
                      if (page == -1)
                        return (
                          <EllipsisIcon key={index} className="size-6 p-1" />
                        )
                      const isActive = page === currentPage
                      return (
                        <button
                          key={index}
                          className={`flex size-8 cursor-pointer items-center-safe justify-center-safe rounded-full border font-semibold transition-all duration-300 ${isActive ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-transparent hover:bg-white/5'}`}
                          onClick={() => {
                            setCurrentPage(page)
                            scrollToRecentArticles()
                          }}
                        >
                          {page + 1}
                        </button>
                      )
                    })}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <button
                      className="flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border border-white/20 bg-white/5 p-1 font-semibold shadow-lg transition-all duration-300 hover:bg-white/10 md:pl-3"
                      onClick={() => {
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, blogPostPages.length - 1)
                        )
                        scrollToRecentArticles()
                      }}
                    >
                      <span className="hidden md:inline-block">
                        {t('news.pagination.next')}
                      </span>
                      <ChevronRight className="size-6" />
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </Layout>
  )
}

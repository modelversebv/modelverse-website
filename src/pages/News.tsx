import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  staggerContainer,
} from '@/animations/variants'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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

export const markdownFiles = import.meta.glob('@/articles/!(*test*).mdx', {
  eager: true,
})

const NewsHero = (
  <Hero
    className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
    backgroundClassName="object-[center_40%]"
    backgroundImg="/images/heroes/news.avif"
    overlay
  >
    <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
      <Shield className="size-5" />
      <p className="text-sm">We secure. You succeed!</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">
      Insights on{' '}
      <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
        Cyber Risk
      </span>{' '}
      & Compliance
    </h1>
    <p className="text-xl text-white/70">
      Expert advice, industry trends, and practical guides to help you manage
      information risk.
    </p>
  </Hero>
)

export type MetaData = {
  featured: boolean
  title: string
  subtitle: string
  summary: string
  image: string
  date: string
  author: string
  portrait: string
}

export type BlogPost = {
  postId: string
  metadata: MetaData
}

export function NewsPage() {
  const layoutRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  function parseDate(dateString: string) {
    const [day, month, year] = dateString.split('/').map(Number)
    return new Date(year, month - 1, day)
  }

  const blogPosts: BlogPost[] = Object.entries(markdownFiles)
    .map(([path, file]) => {
      const mod = file as any

      return {
        postId: path.split('/').pop()?.replace('.mdx', '') || path,
        metadata: {
          featured: mod.metadata.featured,
          title: mod.metadata.title,
          subtitle: mod.metadata.subtitle,
          summary: mod.metadata.summary,
          image: mod.metadata.image,
          date: mod.metadata.date,
          author: mod.metadata.author,
          portrait: mod.metadata.portrait,
        },
      }
    })
    .sort(
      (a, b) =>
        parseDate(b.metadata.date).getTime() -
        parseDate(a.metadata.date).getTime()
    )

  const featuredBlogPosts: BlogPost[] = blogPosts.filter(
    (post) => post.metadata.featured
  )

  const recentBlogPosts: BlogPost[] = blogPosts.filter(
    (post) => !post.metadata.featured
  )

  // Creating blog posts pages
  // Creating blog posts pages
  const [currentPage, setCurrentPage] = useState(0)
  const [articlesPerPage, setArticlesPerPage] = useState(3)

  // Compute pages from articles - memoize to avoid recalculation
  const blogPostPages = useMemo(() => {
    const pages: BlogPost[][] = []
    const totalPages = Math.ceil(recentBlogPosts.length / articlesPerPage)

    for (let i = 0; i < totalPages; i++) {
      const start = i * articlesPerPage
      const end = start + articlesPerPage
      pages.push(recentBlogPosts.slice(start, end))
    }

    return pages
  }, [recentBlogPosts, articlesPerPage])

  const currentPageData = blogPostPages[currentPage]

  const getPaginationRange = () => {
    const totalPages = blogPostPages.length
    if (totalPages <= 1) return [0]

    let paginationRange = [0]

    for (let i = 1; i < totalPages - 1; i++) {
      if (i < currentPage - 1 || i > currentPage + 1) {
        paginationRange.push(-1)
      } else {
        paginationRange.push(i)
      }
    }

    paginationRange.push(totalPages - 1)
    paginationRange = [...new Set(paginationRange)]

    return paginationRange
  }

  // Handle responsive articles per page
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth
      if (width >= 1280) setArticlesPerPage(4)
      else if (width >= 1024) setArticlesPerPage(3)
      else if (width >= 768) setArticlesPerPage(2)
      else setArticlesPerPage(2)
    }

    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  // Reset to first page when articles per page changes
  useEffect(() => {
    setCurrentPage(0)
  }, [articlesPerPage])

  // Also ensure current page doesn't exceed available pages
  useEffect(() => {
    if (currentPage >= blogPostPages.length && blogPostPages.length > 0) {
      setCurrentPage(blogPostPages.length - 1)
    }
  }, [currentPage, blogPostPages.length])

  // Framer Motion
  // Refs for scroll-triggered animations
  const recentArticlesRef = useRef<HTMLDivElement>(null)

  // Track visibility for animations
  const recentArticlesInView = useInView(recentArticlesRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <Layout news={true} hero={NewsHero} ref={layoutRef}>
      {/* Metadata */}
      <title>Modelverse Blog | Cybersecurity Insights</title>
      <meta
        name="description"
        content="Stay up-to-date with Modelverse's latest insights on GRC, compliance regulations, cybersecurity trends, and risk management best practices."
      />

      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="flex flex-col justify-center-safe gap-32 px-4 py-16 text-white md:container md:mx-auto">
          {blogPosts.length != 0 ? (
            featuredBlogPosts.map((post, index) => {
              const postRef = useRef(null)
              const isInView = useInView(postRef, {
                once: true,
                amount: 0.3,
              })

              return (
                <motion.div
                  ref={postRef}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={slideInLeft}
                  key={index}
                >
                  <Card
                    className="relative grid grid-cols-1 overflow-hidden bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10 lg:grid-cols-2"
                    key={index}
                  >
                    <div className="absolute z-1 mt-4 ml-4 flex w-fit flex-row gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-1 text-white shadow-lg backdrop-blur-md">
                      <p className="text-sm">Featured</p>
                    </div>
                    <div className="relative flex max-h-[300px] items-center-safe justify-center-safe overflow-hidden lg:h-auto lg:max-h-none lg:basis-1/2">
                      {post.metadata.image != '' ? (
                        <img
                          src={post.metadata.image}
                          alt=""
                          className="size-full rounded-t-xl object-cover transition-all duration-300 lg:absolute lg:inset-0 lg:rounded-t-none lg:rounded-l-xl"
                        />
                      ) : (
                        <div className="size-full rounded-t-xl bg-black lg:rounded-t-none lg:rounded-l-xl" />
                      )}
                    </div>
                    <div className="flex flex-col gap-4 p-4 lg:basis-1/2 lg:justify-center-safe">
                      <h1
                        className="cursor-pointer text-3xl transition-all duration-300 hover:text-lime-500"
                        onClick={() => navigate(`/article/${post.postId}`)}
                      >
                        {post.metadata.title}
                      </h1>
                      <p className="text-lg text-white/70">
                        {post.metadata.summary}
                      </p>
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
                          {post.metadata.date}
                        </div>
                      </div>
                      <button
                        className="group flex cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
                        onClick={() => navigate(`/article/${post.postId}`)}
                      >
                        Read Article
                        <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              )
            })
          ) : (
            <div className="flex flex-col items-center-safe justify-center-safe gap-4">
              <h1 className="text-4xl sm:text-5xl">Nothing new!</h1>
              <p className="text-xl text-white/70">
                Come back later for interesting updates!
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
                <motion.h1 id="recentArticles" className="text-4xl sm:text-5xl">
                  Recent Articles
                </motion.h1>

                <motion.div
                  key={currentPage}
                  variants={staggerContainer}
                  initial="hidden"
                  animate={recentArticlesInView ? 'visible' : 'hidden'}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {currentPageData?.map((post, index) => (
                    <motion.div variants={scaleIn} key={index}>
                      <Card
                        className="group size-full cursor-pointer overflow-hidden bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10"
                        onClick={() => navigate(`/article/${post.postId}`)}
                      >
                        <div className="flex h-[200px] items-center-safe justify-center-safe overflow-hidden">
                          {post.metadata.image != '' ? (
                            <img
                              src={post.metadata.image}
                              alt=""
                              className="size-full rounded-t-xl object-cover transition-all duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="size-full rounded-t-xl bg-black" />
                          )}
                        </div>
                        <div className="flex grow flex-col gap-4 p-4 md:justify-center-safe">
                          <h1 className="text-xl transition-all duration-300 group-hover:text-lime-500">
                            {post.metadata.title}
                          </h1>
                          <p className="text-white/70">
                            {post.metadata.summary}
                          </p>
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
                                {post.metadata.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  className="flex flex-row justify-center-safe gap-2"
                >
                  <motion.div variants={fadeInUp}>
                    <a
                      href="#recentArticles"
                      className="flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border border-white/20 bg-white/5 p-1 font-semibold shadow-lg transition-all duration-300 hover:bg-white/10 md:pr-3"
                      onClick={() => {
                        setCurrentPage((prev) => {
                          if (prev == 0) return prev
                          return prev - 1
                        })
                      }}
                    >
                      <ChevronLeft className="size-6" />
                      <span className="hidden md:md:inline-block">
                        Previous
                      </span>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="flex shrink-0 flex-row items-center-safe justify-center-safe gap-1"
                  >
                    {getPaginationRange().map((page, index) => {
                      if (page == -1)
                        return <EllipsisIcon className="size-6 p-1" />

                      const isActive = page === currentPage

                      return (
                        <a
                          href="#recentArticles"
                          key={index}
                          className={`flex size-8 cursor-pointer items-center-safe justify-center-safe rounded-full border font-semibold transition-all duration-300 ${isActive ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-transparent hover:bg-white/5'}`}
                          onClick={() => {
                            setCurrentPage(page)
                          }}
                        >
                          {page + 1}
                        </a>
                      )
                    })}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <a
                      href="#recentArticles"
                      className="flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border border-white/20 bg-white/5 p-1 font-semibold shadow-lg transition-all duration-300 hover:bg-white/10 md:pl-3"
                      onClick={() => {
                        setCurrentPage((prev) => {
                          if (prev == blogPostPages.length - 1) return prev
                          return prev + 1
                        })
                      }}
                    >
                      <span className="hidden md:inline-block">Next</span>
                      <ChevronRight className="size-6" />
                    </a>
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

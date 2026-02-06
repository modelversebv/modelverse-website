import { useRef, useState } from 'react'
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
      <p className="text-sm">Blog & News</p>
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
  const blogPostPages: BlogPost[][] = []
  const pages = Math.trunc(recentBlogPosts.length / 4)
  const reminder = recentBlogPosts.length % 4
  let i = 0
  for (i = 0; i < pages; i++) {
    const blogPostsPage = recentBlogPosts.slice(i * 4, i * 4 + 4)
    blogPostPages.push(blogPostsPage)
  }
  if (reminder) {
    const blogPostsPage = recentBlogPosts.slice(i * 4, i * 4 + reminder)
    blogPostPages.push(blogPostsPage)
  }

  const [currentPage, setCurrentPage] = useState(0)
  const currentPageData = blogPostPages[currentPage]

  // Helper function pagination
  const getPaginationRange = () => {
    let paginationRange = [0]
    for (let i = 1; i < pages - 1; i++) {
      console.log(i)
      if (i < currentPage - 1 || i > currentPage + 1) paginationRange.push(-1)
      else paginationRange.push(i)
    }
    paginationRange.push(blogPostPages.length - 1)
    paginationRange = [...new Set(paginationRange)]
    console.log(paginationRange)
    return paginationRange
  }
  getPaginationRange()

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
                <motion.h1 className="text-4xl sm:text-5xl">
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
                    <button
                      className="flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border border-white/20 bg-white/5 py-1 pr-3 pl-1 font-semibold shadow-lg transition-all duration-300 hover:bg-white/10"
                      onClick={() => {
                        setCurrentPage((prev) => {
                          if (prev == 0) return prev
                          return prev - 1
                        })
                      }}
                    >
                      <ChevronLeft className="size-6" />
                      Previous
                    </button>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-row items-center-safe justify-center-safe gap-1"
                  >
                    {getPaginationRange().map((page, index) => {
                      if (page == -1)
                        return <EllipsisIcon className="size-6 p-1" />

                      const isActive = page === currentPage

                      return (
                        <button
                          key={index}
                          className={`size-8 cursor-pointer rounded-full border font-semibold transition-all duration-300 ${isActive ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-transparent hover:bg-white/5'}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page + 1}
                        </button>
                      )
                    })}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <button
                      className="flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border border-white/20 bg-white/5 py-1 pr-1 pl-3 font-semibold shadow-lg transition-all duration-300 hover:bg-white/10"
                      onClick={() => {
                        setCurrentPage((prev) => {
                          if (prev == pages) return prev
                          return prev + 1
                        })
                      }}
                    >
                      Next
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

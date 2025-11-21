import { useNavigate } from 'react-router-dom'

import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, User } from 'lucide-react'

// // For testing
// export const markdownFiles = import.meta.glob('@/articles/(*test*).mdx', {
//   eager: true,
// })

// For production
export const markdownFiles = import.meta.glob('@/articles/!(*test*).mdx', {
  eager: true,
})

const NewsHero = (
  <Hero className="items-center-safe justify-center-safe text-center md:max-w-4xl">
    <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
      <p className="text-sm">Blog & News</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">
      Insights on Cybersecurity Risks & Compliance
    </h1>
    <p className="text-xl text-gray-600">
      Expert advice, industry trends, and practical guides to help you manage
      information risk.
    </p>
  </Hero>
)

export type MetaData = {
  featured: boolean
  title: string
  summary: string
  image: string
  date: string
  author: string
}

export type BlogPost = {
  postId: string
  metadata: MetaData
}

export function NewsPage() {
  const navigate = useNavigate()

  const blogPosts: BlogPost[] = []

  Object.entries(markdownFiles).map(([path, file]) => {
    const mod = file as any

    const metadata: MetaData = {
      featured: mod.metadata.featured,
      title: mod.metadata.title,
      summary: mod.metadata.summary,
      image: mod.metadata.image,
      date: mod.metadata.date,
      author: mod.metadata.author,
    }

    const postId = path.split('/').pop()?.replace('.mdx', '') || path

    blogPosts.push({
      postId,
      metadata,
    })
  })

  return (
    <Layout news={true} hero={NewsHero}>
      <div className="bg-gray-50">
        <div className="flex flex-col justify-center-safe gap-8 px-4 py-16 md:container md:mx-auto">
          {blogPosts.length != 0 ? (
            blogPosts
              .filter((post) => post.metadata.featured)
              .map((post, index) => (
                <Card
                  className="grid grid-cols-1 bg-white p-0 lg:grid-cols-2"
                  key={index}
                >
                  <div className="flex items-center-safe justify-center-safe lg:h-full lg:basis-1/2">
                    {post.metadata.image != '' ? (
                      <img
                        src={post.metadata.image}
                        alt=""
                        className="size-full rounded-t-lg object-cover lg:rounded-t-none lg:rounded-l-lg"
                      />
                    ) : (
                      <div className="size-full rounded-t-lg bg-black lg:rounded-t-none lg:rounded-l-lg" />
                    )}
                  </div>
                  <div className="flex flex-col gap-4 p-8 lg:basis-1/2 lg:justify-center-safe">
                    <Badge className="bg-amber-200 text-amber-700">
                      Featured
                    </Badge>
                    <h1 className="text-3xl">{post.metadata.title}</h1>
                    <p className="text-lg text-gray-600">
                      {post.metadata.summary}
                    </p>
                    <div className="flex flex-row flex-wrap items-center-safe gap-4 text-gray-500">
                      <div className="flex shrink-0 flex-row items-center-safe gap-2">
                        <User className="size-4 shrink-0" />
                        {post.metadata.author}
                      </div>
                      <div className="flex shrink-0 flex-row items-center-safe gap-2">
                        <Calendar className="size-4 shrink-0" />
                        {post.metadata.date}
                      </div>
                    </div>
                    <button
                      className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 sm:w-fit"
                      onClick={() => navigate(`/article/${post.postId}`)}
                    >
                      Read Article
                    </button>
                  </div>
                </Card>
              ))
          ) : (
            <div className="flex flex-col items-center-safe justify-center-safe gap-4">
              <h1 className="text-4xl sm:text-5xl">Nothing new!</h1>
              <p className="text-xl text-gray-600">
                Come back later for interesting updates!
              </p>
            </div>
          )}

          {blogPosts.filter((post) => !post.metadata.featured).length != 0 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl">Recent Articles</h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {blogPosts
                  .filter((post) => !post.metadata.featured)
                  .map((post, index) => (
                    <Card className="bg-white p-0" key={index}>
                      <div className="flex min-h-[200px] items-center-safe justify-center-safe">
                        {post.metadata.image != '' ? (
                          <img
                            src={post.metadata.image}
                            alt=""
                            className="size-full rounded-t-lg object-cover"
                          />
                        ) : (
                          <div className="size-full rounded-t-lg bg-black" />
                        )}
                      </div>
                      <div className="flex flex-col gap-4 p-8 md:justify-center-safe">
                        <h1 className="text-xl">{post.metadata.title}</h1>
                        <p className="text-gray-600">{post.metadata.summary}</p>
                        <div className="flex flex-row flex-wrap items-center-safe gap-4 text-gray-500">
                          <div className="flex shrink-0 flex-row items-center-safe gap-2">
                            <User className="size-4 shrink-0" />
                            {post.metadata.author}
                          </div>
                          <div className="flex shrink-0 flex-row items-center-safe gap-2">
                            <Calendar className="size-4 shrink-0" />
                            {post.metadata.date}
                          </div>
                        </div>
                        <button
                          className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r text-amber-500/70 hover:text-amber-500"
                          onClick={() => navigate(`/article/${post.postId}`)}
                        >
                          Read Article
                          <ArrowRight className="size-5 transition-all duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

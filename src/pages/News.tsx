import { useNavigate } from 'react-router-dom'

import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
    <h1 className="text-5xl sm:text-6xl">Insights on Risks & Compliance</h1>
    <p className="text-xl text-gray-600">
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

  return (
    <Layout news={true} hero={NewsHero}>
      {/* Metadata */}
      <title>
        Modelverse Blog | Cybersecurity Insights
      </title>
      <meta
        name="description"
        content="Stay up-to-date with Modelverse's latest insights on GRC, compliance regulations, cybersecurity trends, and risk management best practices."
      />

      {/* Content */}
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
                      <div className="flex min-h-[200px] max-h-[200px] items-center-safe justify-center-safe">
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
                      <div className="flex grow flex-col gap-4 p-8 md:justify-center-safe">
                        <h1 className="text-xl">{post.metadata.title}</h1>
                        <p className="text-gray-600">{post.metadata.summary}</p>
                        <div className="flex grow flex-col justify-end-safe gap-4">
                          <div className="mt-auto flex flex-col gap-4 text-gray-500">
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
                            className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r text-amber-500/70 hover:text-amber-500"
                            onClick={() => navigate(`/article/${post.postId}`)}
                          >
                            Read Article
                            <ArrowRight className="size-5 transition-all duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
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

import { useEffect, useState } from 'react'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { MDXRenderer } from '@/components/app/mdx/mdxRenderer'
import { Layout } from '@/components/layout'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ArrowLeft, Calendar, User } from 'lucide-react'

import { type BlogPost, type MetaData, markdownFiles } from './News'

export function ArticlePage() {
  const navigate = useNavigate()

  const { slug } = useParams<{ slug: string }>()
  const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(
    null
  )
  const [metadata, setMetadata] = useState<MetaData>({
    featured: false,
    title: '',
    summary: '',
    image: '',
    date: '',
    author: '',
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

    import(`@/articles/${slug}.mdx`)
      .then((mod: any) => {
        console.log('success')
        setMDXComponent(() => mod.default)
        setMetadata({
          featured: mod.metadata.featured,
          title: mod.metadata.title,
          summary: mod.metadata.summary,
          image: mod.metadata.image,
          date: mod.metadata.date,
          author: mod.metadata.author,
        })
      })
      .catch(() => {
        console.log('error')
        setError(true)
      })
  }, [slug])

  // Other Articles
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
    <Layout>
      <div className="shrink-0 bg-gray-50">
        <div className="px-4 py-4 md:container md:mx-auto md:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/news">News</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-black">Article</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="mx-auto grow px-4 py-16 md:container md:mx-auto">
        <div className="mx-auto flex h-full max-w-4xl flex-col gap-4 md:gap-8">
          {error ? (
            <div className="mx-auto flex h-full max-w-4xl flex-col items-center-safe justify-center-safe gap-4 px-4 py-16 text-center">
              <h1 className="text-4xl sm:text-5xl">Article Not Found</h1>
              <p className="text-xl text-gray-600">
                Sorry, the article you’re looking for does not exist or has been
                removed.
              </p>
              <button
                className="cursor-pointer self-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-3 py-1 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 sm:w-fit"
                onClick={() => navigate(`/news`)}
              >
                Back to News
              </button>
            </div>
          ) : (
            <>
              <button
                className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full px-3 py-1 text-sm font-semibold text-amber-500 transition-all duration-300 hover:bg-gray-200"
                onClick={() => navigate('/news')}
              >
                <ArrowLeft className="size-5 transition-all duration-300 group-hover:-translate-x-1" />
                Back to News
              </button>
              <article className="prose prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:w-full prose-img:object-cover max-w-full">
                <h1>{metadata.title}</h1>
                <div className="not-prose flex flex-row flex-wrap items-center-safe gap-4 text-gray-500">
                  <div className="flex shrink-0 flex-row items-center-safe gap-2">
                    <User className="size-4 shrink-0" />
                    {metadata.author}
                  </div>
                  <div className="flex shrink-0 flex-row items-center-safe gap-2">
                    <Calendar className="size-4 shrink-0" />
                    {metadata.date}
                  </div>
                </div>
                {MDXComponent && <MDXRenderer mdxContent={MDXComponent} />}
              </article>
            </>
          )}
        </div>
      </div>
      {/* {blogPosts.filter((post) => !post.metadata.featured).length != 0 && (
        <div className="bg-gray-50">
          <div className="px-4 py-8 sm:px-16 sm:py-32 md:container md:mx-auto">
            <div className="mx-auto flex max-w-4xl flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl">Other Articles</h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </div>
      )} */}
    </Layout>
  )
}

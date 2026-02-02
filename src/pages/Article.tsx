import { useEffect, useState } from 'react'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { MDXRenderer } from '@/components/app/mdx/mdxRenderer'
import { Layout } from '@/components/layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ArrowLeft, Calendar, User } from 'lucide-react'

// import { type BlogPost, type MetaData, markdownFiles } from './News'
import { type MetaData } from './News'

export function ArticlePage() {
  const navigate = useNavigate()

  const { slug } = useParams<{ slug: string }>()
  const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(
    null
  )
  const [metadata, setMetadata] = useState<MetaData>({
    featured: false,
    title: '',
    subtitle: '',
    summary: '',
    image: '',
    date: '',
    author: '',
    portrait: '',
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

    import(`@/articles/${slug}.mdx`)
      .then((mod: any) => {
        // console.log('success')
        setMDXComponent(() => mod.default)
        setMetadata({
          featured: mod.metadata.featured,
          title: mod.metadata.title,
          subtitle: mod.metadata.subtitle,
          summary: mod.metadata.summary,
          image: mod.metadata.image,
          date: mod.metadata.date,
          author: mod.metadata.author,
          portrait: mod.metadata.portrait,
        })
      })
      .catch(() => {
        // console.log('error')
        setError(true)
      })
  }, [slug])

  // // Other Articles
  // const blogPosts: BlogPost[] = []

  // Object.entries(markdownFiles).map(([path, file]) => {
  //   const mod = file as any

  //   const metadata: MetaData = {
  //     featured: mod.metadata.featured,
  //     title: mod.metadata.title,
  //     summary: mod.metadata.summary,
  //     image: mod.metadata.image,
  //     date: mod.metadata.date,
  //     author: mod.metadata.author,
  //   }

  //   const postId = path.split('/').pop()?.replace('.mdx', '') || path

  //   blogPosts.push({
  //     postId,
  //     metadata,
  //   })
  // })

  const pageTitle = metadata.title
    ? `Modelverse Blog | ${metadata.title}`
    : 'Modelverse Blog Loading...'
  const pageDescription = metadata.summary || 'Loading article summary...'

  return (
    <Layout>
      {/* Metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link
        rel="canonical"
        href={`https://modelverse.online/article/${slug}`}
      />

      {/* Content */}
      <div className="shrink-0 border-b border-white/20 pt-18">
        <div className="px-4 py-4 md:container md:mx-auto md:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumb>
              <BreadcrumbList className="text-white/70">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-white">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/news" className="hover:text-white">
                      News
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-lime-500">
                  Article
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {!error && (
        <div className="relative h-[500px] w-full overflow-hidden bg-black">
          <img src={metadata.image} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 size-full bg-linear-to-t from-gray-900 via-gray-900/50 to-gray-900">
            <div className="flex size-full items-end-safe justify-center-safe px-4 py-16 md:container md:mx-auto">
              <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 md:gap-8">
                <h1 className="text-4xl text-white drop-shadow-lg sm:text-5xl">
                  {metadata.title}
                </h1>
                {metadata.subtitle != '' && (
                  <h2 className="sm:text:xxl text-2xl text-white/95 drop-shadow-lg">
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
      )}

      <div className="mx-auto grow px-4 pt-8 pb-16 text-white md:container md:mx-auto">
        <div className="mx-auto flex h-full max-w-4xl flex-col gap-4 md:gap-8">
          {error ? (
            <div className="mx-auto flex h-full max-w-4xl flex-col items-center-safe justify-center-safe gap-4 px-4 py-16 text-center">
              <h1 className="text-4xl sm:text-5xl">Article Not Found</h1>
              <p className="text-xl text-white/70">
                Sorry, the article you’re looking for does not exist or has been
                removed.
              </p>
              <button
                className="group flex cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
                onClick={() => navigate(`/news`)}
              >
                Back to News
              </button>
            </div>
          ) : (
            <>
              <button
                className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full px-4 py-2 text-sm font-semibold text-lime-500 transition-all duration-300"
                onClick={() => navigate('/news')}
              >
                <ArrowLeft className="size-5 transition-all duration-300 group-hover:-translate-x-1" />
                Back to News
              </button>
              <article className="prose prose-invert prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:w-full prose-img:object-cover max-w-full">
                {MDXComponent && <MDXRenderer mdxContent={MDXComponent} />}
              </article>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

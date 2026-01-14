import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { MDXRenderer } from '@/components/app/mdx/mdxRenderer'
import { Card } from '@/components/app/misc/card'
import { Layout } from '@/components/layout'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ArrowLeft, FileText } from 'lucide-react'

type MetaData = {
  title: string
  last_updated: string
  effective_date: string
}

type TocEntry = {
  id: string
  text: string
  level: number
}

export const legalPages = import.meta.glob('@/legal/*.mdx', {
  eager: true,
})

export function LegalPage() {
  const layoutRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  const { slug } = useParams<{ slug: string }>()
  const crumb = slug
    ?.split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(
    null
  )
  const [metadata, setMetadata] = useState<MetaData>({
    title: '',
    last_updated: '',
    effective_date: '',
  })
  const [toc, setToc] = useState<TocEntry[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

    setError(false)
    setMDXComponent(null)

    import(`@/legal/${slug}.mdx`)
      .then((mod: any) => {
        console.log('success')
        setMDXComponent(() => mod.default)
        setMetadata({
          title: mod.metadata.title,
          last_updated: mod.metadata.last_updated,
          effective_date: mod.metadata.effective_date,
        })
      })
      .catch(() => {
        console.log('error')
        setError(true)
      })
  }, [slug])

  useEffect(() => {
    if (!MDXComponent) return

    // Delay to ensure MDX renders into the DOM
    const timeout = setTimeout(() => {
      const article = document.querySelector('article')
      if (!article) return

      const headings = Array.from(
        article.querySelectorAll('h2, h3, h4, h5, h6')
      ) as HTMLElement[]

      const newToc: TocEntry[] = headings.map((h) => ({
        id: h.id,
        text: h.innerText,
        level: Number(h.tagName.replace('H', '')),
      }))

      setToc(newToc)

      if (layoutRef.current) {
        layoutRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [MDXComponent])

  const pageTitle = metadata.title
    ? `${metadata.title}`
    : 'Modelverse Legal Page Loading...'

  const pageDescription = metadata.title
    ? `The official ${metadata.title} document for the Modelverse GRC and Risk Compliance platform.`
    : 'Loading essential legal and regulatory documentation...'

  return (
    <Layout ref={layoutRef}>
      {/* Metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={`https://modelverse.online/legal/${slug}`} />

      {/* Content */}
      <div className="bg-gray-50">
        <div className="p-4 md:container md:mx-auto">
          <div className="mx-auto max-w-6xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-black">{crumb}</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="mx-auto grow px-4 py-16 md:container md:mx-auto">
        <div className="mx-auto flex h-full max-w-6xl flex-col gap-4 md:gap-8">
          {error ? (
            <div className="mx-auto flex h-full max-w-4xl flex-col items-center-safe justify-center-safe gap-4 px-4 py-16 text-center">
              <h1 className="text-4xl sm:text-5xl">Page Not Found</h1>
              <p className="text-xl text-gray-600">
                Sorry, the page you’re looking for does not exist or has been
                removed.
              </p>
              <button
                className="cursor-pointer self-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 sm:w-fit"
                onClick={() => navigate(`/`)}
              >
                Back to Home
              </button>
            </div>
          ) : (
            <>
              <button
                className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full px-4 py-2 text-sm font-semibold text-amber-500 transition-all duration-300 hover:bg-gray-200"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="size-5 transition-all duration-300 group-hover:-translate-x-1" />
                Back to Home
              </button>
              <div className="relative flex flex-col gap-4 md:gap-8 lg:flex-row">
                {toc.length > 0 && (
                  <Card className="not-prose shrink-0 gap-4 p-4 lg:sticky lg:top-36 lg:size-fit">
                    <div className="flex flex-row items-center-safe gap-2 text-xl font-semibold">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10">
                        <FileText className="size-6 text-amber-500" />
                      </div>
                      Table of Contents
                    </div>
                    <ul className="pl-2">
                      {toc.map((item) => (
                        <li
                          key={item.id}
                          className="bg mb-2 cursor-pointer rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          <a href={`#${item.id}`}>{item.text}</a>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                <article className="prose prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:w-full prose-img:object-cover max-w-full">
                  <div className="not-prose flex flex-col gap-4">
                    <h1 className="text-4xl text-black sm:text-5xl">
                      {metadata.title}
                    </h1>
                    <div className="flex flex-col">
                      <p className="text-gray-600">
                        <span className="font-bold">Last Updated: </span>
                        {metadata.last_updated}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-bold">Effective Date: </span>
                        {metadata.effective_date}
                      </p>
                    </div>
                  </div>
                  {MDXComponent && <MDXRenderer mdxContent={MDXComponent} />}
                </article>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

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
import { ArrowLeft } from 'lucide-react'

type MetaData = {
  title: string
  last_updated: string
  effective_date: string
}

export function LegalPage() {
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
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

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

  return (
    <Layout>
      <div className="bg-gray-50">
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
                <BreadcrumbItem className="text-black">{crumb}</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="mx-auto p-4 md:container md:mx-auto md:p-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 md:gap-8">
          {error ? (
            <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-8 text-center sm:px-16 sm:py-32">
              <h1 className="text-4xl sm:text-5xl">Page Not Found</h1>
              <p className="text-xl text-gray-600">
                Sorry, the page you’re looking for does not exist or has been
                removed.
              </p>
              <button
                className="cursor-pointer self-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-3 py-1 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 sm:w-fit"
                onClick={() => navigate(`/`)}
              >
                Back to Home
              </button>
            </div>
          ) : (
            <>
              <button
                className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full px-3 py-1 text-sm font-semibold text-amber-500 transition-all duration-300 hover:bg-gray-200"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="size-5 transition-all duration-300 group-hover:-translate-x-1" />
                Back to Home
              </button>
              <article className="prose prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-2xl prose-img:w-full prose-img:object-cover max-w-full">
                <div className="not-prose mx-auto flex max-w-4xl flex-col gap-4">
                  <h1 className="text-4xl sm:text-5xl">{metadata.title}</h1>
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
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

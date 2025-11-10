import React from 'react'

import YouTubeEmbed from '@/components/app/embed/youtubeEmbed'
import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'
import { Separator } from '@/components/ui/separator'

// // For testing
// const markdownFiles = import.meta.glob('@/blogs/*.mdx', {
//   eager: true,
// })

// For production
const markdownFiles = import.meta.glob('@/blogs/!(*test*).mdx', {
  eager: true,
})

const newsBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Keep up to date</h1>
    <p className="text-lg">
      Find out the most recent news about Modelverse and CyberSecurity
    </p>
  </Banner>
)

type MetaData = {
  title?: string
  date?: string
  author?: string
}

export function News() {
  return (
    <Layout news={true} banner={newsBanner}>
      <div className="mx-4 flex h-full flex-col items-center-safe gap-16 md:mx-64">
        {Object.keys(markdownFiles).length === 0 ? (
          <div className="flex h-full flex-col items-center-safe justify-center-safe gap-8">
            <h1 className="text-center text-4xl font-bold">Nothing new!</h1>
            <p className="text-sm">Come back later for new updates!</p>
          </div>
        ) : (
          Object.entries(markdownFiles).map(([path, file], index) => {
            const mod = file as any
            const MDXComponent = mod.default
            const metadata: MetaData = {
              title: mod.metadata.title,
              date: mod.metadata.date,
              author: mod.metadata.author,
            }

            const postId = path.split('/').pop()?.replace('.mdx', '') || path

            return (
              <React.Fragment key={postId}>
                <article className="prose prose-img:rounded-2xl prose-img:mx-auto prose-img:max-w-2xl prose-img:w-full prose-img:object-cover w-full max-w-none">
                  <h1>{metadata.title}</h1>
                  <div className="not-prose flex flex-col">
                    <h1>
                      <span className="font-bold">Author:</span>{' '}
                      {metadata.author}
                    </h1>
                    <h1>
                      <span className="font-bold">Date:</span> {metadata.date}
                    </h1>
                  </div>
                  <MDXComponent components={{ YouTubeEmbed }} />
                </article>

                {index !== Object.entries(markdownFiles).length - 1 && (
                  <Separator className="rounded-full data-[orientation=horizontal]:h-1" />
                )}
              </React.Fragment>
            )
          })
        )}
      </div>
    </Layout>
  )
}

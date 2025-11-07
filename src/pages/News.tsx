import { useEffect, useState } from 'react'
import React from 'react'

import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'
import { Separator } from '@/components/ui/separator'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

const markdownFiles = import.meta.glob('@/blogs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseFrontMatter(md: string) {
  const match = /^---\n([\s\S]+?)\n---/.exec(md)
  if (!match) return { content: md, data: {} }

  const yaml = match[1]
  const content = md.slice(match[0].length)

  const data: Record<string, string> = {}
  yaml.split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':')
    if (!key) return
    data[key.trim()] = rest.join(':').trim()
  })

  return { content, data }
}

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

type Post = {
  id: string
  html: string
  metadata: MetaData
}

export function News() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function loadPosts() {
      const loadedPosts: Post[] = []

      for (const [path, file] of Object.entries(markdownFiles)) {
        const split = path.split('/')
        const postId: string = path.split('/')[split.length - 1]

        const { content, data } = parseFrontMatter(file as string)

        // MD content
        const rawHTML = await marked.parse(content)
        const sanitizedHTML = DOMPurify.sanitize(rawHTML)

        // MetaData content
        const metadata: MetaData = {
          title: data.title,
          date: data.date,
          author: data.author,
        }

        // Pushing post
        loadedPosts.push({
          id: postId,
          html: sanitizedHTML,
          metadata: metadata,
        })
      }

      setPosts(loadedPosts)
    }

    loadPosts()
  }, [])

  return (
    <Layout news={true} banner={newsBanner}>
      <div className="mx-4 flex h-full flex-col items-center-safe gap-8 md:mx-32">
        {posts.length == 0 ? (
          <div className="flex h-full flex-col items-center-safe justify-center-safe gap-8">
            <h1 className="text-center text-4xl font-bold">Nothing new!</h1>
            <p className="text-sm">Come back later for new updates!</p>
          </div>
        ) : (
          posts.map((post: Post, index: number) => (
            <React.Fragment key={post.id}>
              <div className="flex flex-col justify-center-safe gap-4">
                <article className="prose lg:prose-lg w-full max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </article>
                <div className="flex flex-row justify-between">
                  <h1>
                    <span className="font-bold">Author:</span>{' '}
                    {post.metadata.author}
                  </h1>
                  <h1>
                    <span className="font-bold">Date:</span>{' '}
                    {post.metadata.date}
                  </h1>
                </div>
              </div>

              {index != posts.length - 1 && (
                <Separator className="rounded-full data-[orientation=horizontal]:h-2" />
              )}
            </React.Fragment>
          ))
        )}
      </div>
    </Layout>
  )
}

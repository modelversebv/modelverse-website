import fs from 'fs'
import path from 'path'

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

export function parseDate(dateString: string) {
  const [day, month, year] = dateString.split('/').map(Number)
  return new Date(year, month - 1, day)
}

export function getArticleSlugs(): string[] {
  const dir = path.join(process.cwd(), 'src/articles')
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') && !f.includes('test'))
    .map((f) => f.replace('.mdx', ''))
}

export async function getAllArticles(): Promise<BlogPost[]> {
  const slugs = getArticleSlugs()

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/articles/${slug}.mdx`)
      return {
        postId: slug,
        metadata: mod.metadata as MetaData,
      }
    })
  )

  return articles.sort(
    (a, b) =>
      parseDate(b.metadata.date).getTime() -
      parseDate(a.metadata.date).getTime()
  )
}

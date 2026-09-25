import fs from 'fs'
import path from 'path'

export type MetaData = {
  featured: boolean
  title: string
  subtitle: string
  summary: string
  seoDescription: string
  image: string
  publishedAt: string
  locale: string
  author: string
  portrait: string
}

export type BlogPost = {
  postId: string
  metadata: MetaData
  wordCount: number
}

export function getArticleSlugs(): string[] {
  const dir = path.join(process.cwd(), 'src/articles')
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') && !f.includes('test'))
    .map((f) => f.replace('.mdx', ''))
}

export function computeWordCount(slug: string): number {
  const filePath = path.join(process.cwd(), 'src/articles', `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const withoutMeta = raw.replace(/^export const \w+ = \{[\s\S]*?^}\s*\n/m, '')
  const text = withoutMeta
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]+`/g, ' ')
    .replace(/^\s*#{1,6}\s+/gm, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[*_~>|]/g, ' ')
    .replace(/\n+/g, ' ')
  return text.trim().split(/\s+/).filter(Boolean).length
}

export async function getAllArticles(): Promise<BlogPost[]> {
  const slugs = getArticleSlugs()

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/articles/${slug}.mdx`)
      return {
        postId: slug,
        metadata: mod.metadata as MetaData,
        wordCount: computeWordCount(slug),
      }
    })
  )

  return articles.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )
}

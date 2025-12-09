import fs from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

// --- Configuration ---
const HOSTNAME = 'https://modelverse.online'
const OUTPUT_FILE_PATH = './public/sitemap.xml'

const ARTICLE_SLUGS = [
  '11-2025_blog_digital_omnibus',
  '11-2025_blog_interview_ben',
  '12-25_blog_dnssec',
]

const LEGAL_SLUGS = ['privacy_policy', 'terms_of_service', 'cookie-policy']

async function generateSitemap() {
  const staticLinks = [
    { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date() },
    { url: '/news', changefreq: 'daily', priority: 0.8, lastmod: new Date() },
    { url: '/cases', changefreq: 'weekly', priority: 0.8, lastmod: new Date() },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    },
  ]

  const articleLinks = ARTICLE_SLUGS.map((slug) => ({
    url: `/article/${slug}`,
    changefreq: 'daily',
    priority: 0.6,
    lastmod: new Date(),
  }))

  const legalLinks = LEGAL_SLUGS.map((slug) => ({
    url: `/legal/${slug}`,
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date(),
  }))

  const allLinks = [...staticLinks, ...articleLinks, ...legalLinks]

  const sitemapStream = new SitemapStream({ hostname: HOSTNAME })

  const xml = await streamToPromise(
    Readable.from(allLinks).pipe(sitemapStream)
  ).then((data) => data.toString())

  fs.writeFileSync(OUTPUT_FILE_PATH, xml)

  console.log(`✅ Sitemap successfully generated at ${OUTPUT_FILE_PATH}`)
}

generateSitemap().catch(console.error)

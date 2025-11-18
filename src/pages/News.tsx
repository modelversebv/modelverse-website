import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const NewsHero = (
  <Hero>
    <div className="flex flex-col items-center-safe gap-8 lg:basis-1/2 lg:justify-center-safe">
      <div className="flex flex-col items-center-safe gap-4 text-center">
        <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
          <p className="text-sm">Blog & News</p>
        </div>
        <h1 className="text-4xl">
          Insights on Cybersecurity Risks & Compliance
        </h1>
        <p className="text-lg">
          Expert advice, industry trends, and practical guides to help you
          manage information risk.
        </p>
        {/* <div className="group flex w-full flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gray-100 p-2 ring-2 ring-transparent transition-all duration-300 focus-within:ring-gray-300">
          <Search className="size-5 border-2 border-transparent text-gray-400" />
          <input
            type="search"
            placeholder="Search articles..."
            className="w-full focus:outline-none"
          />
        </div> */}
      </div>
    </div>
  </Hero>
)

export function NewsPage() {
  return (
    <Layout news={true} hero={NewsHero}>
      <div className="bg-gray-50">
        <div className="flex flex-col justify-center-safe gap-8 px-4 py-16 md:container md:mx-auto">
          <div className="grid grid-cols-1 rounded-lg border bg-white md:grid-cols-2">
            <div className="size-full min-h-[400px] rounded-t-lg bg-black md:rounded-t-none md:rounded-l-lg" />
            <div className="flex flex-col gap-4 px-4 py-8 md:justify-center-safe md:p-8">
              <Badge className="bg-amber-200 text-amber-700">Featured</Badge>
              <h1 className="text-2xl">Title</h1>
              <p>
                This is a summary of the article that is written as an example
                to observe how well will the paragraph look as it grows.
              </p>
              <button className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-3 py-1 font-semibold text-white">
                Read Article
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Recent Articles</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="grid grid-cols-1 rounded-lg border bg-white">
                <div className="h-48 rounded-t-lg bg-black" />
                <div className="flex basis-1/2 flex-col gap-4 px-4 py-8">
                  <h1 className="text-2xl">Title</h1>
                  <p>
                    This is a summary of the article that is written as an
                    example to observe how well will the paragraph look as it
                    grows.
                  </p>
                  <button className="group flex w-fit cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r text-amber-500/70 hover:text-amber-500">
                    Read Article
                    <ArrowRight className="size-5 transition duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

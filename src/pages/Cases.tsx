import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Shield, TrendingUp } from 'lucide-react'

const CasesHero = (
  <Hero>
    <div className="flex flex-col items-center-safe gap-8 lg:basis-1/2 lg:justify-center-safe">
      <div className="flex flex-col items-center-safe gap-4 text-center">
        <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
          <p className="text-sm">Success Stories</p>
        </div>
        <h1 className="text-4xl">Real Results from Real Customers</h1>
        <p className="text-lg">
          See how organizations like yours are transforming their cybersecurity
          risk management with Modelverse.
        </p>
      </div>
    </div>
  </Hero>
)

export function CasesPage() {
  return (
    <Layout cases={true} hero={CasesHero}>
      <div className="bg-gray-50">
        <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto">
          <div className="grid grid-cols-1 rounded-lg border bg-white md:grid-cols-2">
            <div className="size-full min-h-[400px] rounded-t-lg bg-black md:rounded-t-none md:rounded-l-lg" />
            <div className="flex flex-col gap-4 px-4 py-8 md:justify-center-safe md:p-8">
              <h1 className="text-2xl">Company name</h1>
              <div className="flex flex-col justify-center-safe">
                <div className="flex w-fit flex-row gap-2 text-lg">
                  <Shield className="size-5 self-center text-red-500" />
                  The Challenge
                </div>
                <p>
                  This is a summary of the article that is written as an example
                  to observe how well will the paragraph look as it grows.
                </p>
              </div>
              <div className="flex flex-col justify-center-safe">
                <div className="flex w-fit flex-row gap-2 text-lg">
                  <TrendingUp className="size-5 self-center text-green-500" />
                  The Solution
                </div>
                <p>
                  This is a summary of the article that is written as an example
                  to observe how well will the paragraph look as it grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 bg-gradient-to-r from-green-500 to-teal-500 px-4 py-16 text-white sm:items-center-safe">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl">Ready to Write Your Success Story?</h1>
          <p className="text-lg">
            Join these leading organizations in transforming your cyber risk
            management.
          </p>
        </div>
        <button className="rounded-full bg-white px-4 py-2 font-semibold sm:w-fit">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            Request a Demo
          </div>
        </button>
      </div>
    </Layout>
  )
}

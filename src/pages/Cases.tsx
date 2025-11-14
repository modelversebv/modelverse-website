import { useRef, useState } from 'react'

import { Banner } from '@/components/app/misc/banner'
import { Card } from '@/components/app/misc/card'
import { ContentSection } from '@/components/app/misc/contentSection'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import infoFile from '@/data/cases.yaml?raw'
import { parse } from 'yaml'

const casesBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Our Customers</h1>
    <p className="text-lg">
      Discover how we've helped our clients grow and innovate their approaches
      to (cyber) security
    </p>
  </Banner>
)

type Case = {
  name: string
  about: string
  case: string
  logo: string
  url: string
}

const Carousel = () => {
  // const { ref, inView } = useInView({
  //   threshold: 0.9,
  // })

  const cases = parse(infoFile)
  const [extendedCard, setExtenedCard] = useState(true)

  const handleCardBtn = () => {
    if (extendedCard) {
      setExtenedCard(false)
    } else {
      setExtenedCard(true)
    }
  }

  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const handleBtnNext = () => {
    if (!scrollerRef.current) return
    const container = scrollerRef.current

    // Scroll by one item width
    const scrollAmount = 48 // or customize, e.g., 300
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const handleBtnPrev = () => {
    if (!scrollerRef.current) return
    const container = scrollerRef.current

    const firstChild = container.children[0] as HTMLElement
    if (!firstChild) return

    const scrollAmount = firstChild.getBoundingClientRect().width
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }

  return (
    <div className="flex w-full flex-row justify-center gap-8 overflow-hidden">
      <div className="hidden items-center-safe justify-center-safe lg:flex lg:w-1/10">
        <button
          className="cursor-pointer self-center rounded-full outline-none"
          onClick={handleBtnPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="size-12 stroke-amber-500/70 hover:stroke-amber-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex w-full flex-col items-center gap-4 lg:w-8/10">
        <div
          className="scrollbar-hide flex w-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth"
          ref={scrollerRef}
        >
          {cases.map((item: Case, index: number) => (
            <Card
              className="m-4 w-48 shrink-0 snap-center snap-always"
              key={index}
            >
              <img
                src={`${item.logo}`}
                alt={item.name}
                className="h-16 object-scale-down md:rounded-t-lg md:p-2"
                onClick={() => (window.location.href = item.url)}
              />
              <Separator className="hidden md:block" />
              <ScrollArea
                className={`transition-card-height px-4 ${!extendedCard ? 'h-0' : 'h-64'} md:h-64`}
              >
                {item.about}
                <br />
                <br />
                {item.case}
              </ScrollArea>
            </Card>
          ))}
        </div>
        <button
          onClick={handleCardBtn}
          className="flex w-fit cursor-pointer flex-row bg-clip-text text-black/70 outline-0 hover:text-black md:hidden"
        >
          {!extendedCard ? (
            <>
              <span>Show more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ml-2 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </>
          ) : (
            <>
              <span>Show less</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ml-2 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </>
          )}
        </button>
      </div>
      <div className="hidden items-center-safe justify-center-safe lg:flex lg:w-1/10">
        <button
          className="cursor-pointer self-center rounded-full outline-none"
          onClick={handleBtnNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="size-12 stroke-amber-500/70 hover:stroke-amber-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export function Cases() {
  return (
    <div className="relative mb-12">
      {casesBanner}
      <ContentSection>
        <div className="flex flex-col items-center-safe justify-center-safe gap-8">
          <Carousel />
        </div>
      </ContentSection>
    </div>
  )
}

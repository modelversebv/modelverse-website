import { forwardRef, useEffect, useRef, useState } from 'react'

import Lenis from 'lenis'

import { CookieBanner } from './app/cookies/cookieBanner'
import { Footer } from './app/footer/footer'
import { NavBar } from './app/navigation/navbar'

type LayoutProps = {
  home?: boolean
  news?: boolean
  cases?: boolean
  about?: boolean
  services?: boolean
  contact?: boolean
  test?: boolean
  hero?: React.ReactNode
  children?: React.ReactNode
}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  (
    {
      home = false,
      news = false,
      cases = false,
      services = false,
      about = false,
      hero,
      children,
    },
    scrollRef
  ) => {
    const [showConsentPreferences, setShowConsentPreferences] = useState(false)

    // Lenis
    const [pauseScroll, setPauseScroll] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const lenisRef = useRef<Lenis | null>(null)
    const internalRef = useRef<HTMLDivElement>(null)
    const containerRef =
      (scrollRef as React.RefObject<HTMLDivElement>) || internalRef

    useEffect(() => {
      const isMobile = window.innerWidth < 1024

      if (isMobile || !containerRef.current) return
      const lenis = new Lenis({
        wrapper: containerRef.current,
        content: containerRef.current.firstElementChild as HTMLElement,
        smoothWheel: true,
        lerp: 0.08,
      })
      lenisRef.current = lenis

      // Listen for anchor scroll
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const anchor = target.closest('a')

        // Check if it's a link with a hash (e.g., #privacy)
        if (anchor && anchor.hash && anchor.origin === window.location.origin) {
          // Find the element within the Layout's container
          const targetId = anchor.hash.slice(1)
          const targetElement = document.getElementById(targetId)

          if (targetElement && lenisRef.current) {
            e.preventDefault()
            lenisRef.current.scrollTo(targetElement, {
              offset: -90,
              duration: 1.2,
              immediate: false,
            })
          }
        }
      }

      window.addEventListener('click', handleAnchorClick)

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      return () => lenis.destroy()
    }, [])

    // Pause or resume scrolling
    useEffect(() => {
      if (!lenisRef.current) return
      if (pauseScroll) {
        lenisRef.current.stop()
      } else {
        lenisRef.current.start()
      }
    }, [pauseScroll])

    return (
      <div
        ref={scrollRef}
        className="scrollbar-hide h-dvh w-screen overflow-scroll bg-slate-900 font-sans lg:overflow-hidden"
      >
        <CookieBanner
          preferences={showConsentPreferences}
          setPreferences={setShowConsentPreferences}
          onOpen={() => setPauseScroll(true)}
          onClose={() => setPauseScroll(false)}
        />

        <NavBar
          home={home}
          about={about}
          cases={cases}
          news={news}
          services={services}
        />
        <div ref={contentRef} className="flex min-h-screen flex-col">
          {hero}
          <div className="flex grow flex-col">{children}</div>
          <Footer onManagePrivacy={setShowConsentPreferences} />
        </div>
      </div>
    )
  }
)

Layout.displayName = 'Layout'

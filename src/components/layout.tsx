import { useEffect, useRef, useState } from 'react'

import { throttle } from 'lodash'

import { CookieBanner } from './app/cookies/cookieBanner'
import { Footer } from './app/footer/footer'
import { NavBar } from './app/navigation/navbar'

type LayoutProps = {
  banner?: React.ReactNode
  children?: React.ReactNode
  home?: boolean
  about?: boolean
  news?: boolean
  cases?: boolean
  team?: boolean
  contact?: boolean
}

export function Layout({
  banner,
  children,
  home = false,
  about = false,
  news = false,
  cases = false,
  team = false,
  contact = false,
}: LayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Cookie consent
  const [showConsentPreferences, setShowConsentPreferences] = useState(false)

  // Scrolling behaviour
  const HEIGHT_THRESHOLD = 0
  const lastScrollY = useRef(0)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [expandedMenu, setExpandedMenu] = useState(false)

  const handleScroll = () => {
    if (!scrollRef.current) return

    const currentScrollY = scrollRef.current.scrollTop

    if (currentScrollY > HEIGHT_THRESHOLD) {
      if (lastScrollY.current < currentScrollY) {
        setIsNavVisible(false)
      } else if (lastScrollY.current > currentScrollY) {
        setIsNavVisible(true)
      }
    } else {
      setIsNavVisible(true)
    }

    lastScrollY.current = currentScrollY
  }
  useEffect(() => {
    const currentElement = scrollRef.current
    if (!currentElement) return

    currentElement.addEventListener('scroll', throttle(handleScroll, 150))
    return () =>
      currentElement.removeEventListener('scroll', throttle(handleScroll, 150))
  }, [])

  return (
    <>
      <CookieBanner
        preferences={showConsentPreferences}
        setPreferences={setShowConsentPreferences}
      ></CookieBanner>
      <div
        className="scrollbar-hide md:bg-container flex h-screen w-screen flex-col justify-center-safe overflow-auto bg-[url(/background.jpg)] bg-cover bg-bottom-right md:bg-center"
        ref={scrollRef}
      >
        <NavBar
          home={home}
          about={about}
          news={news}
          cases={cases}
          team={team}
          contact={contact}
          isNavVisible={isNavVisible}
          expandedMenu={expandedMenu}
          setExpandedMenu={setExpandedMenu}
        />

        {/* <div className="mt-20 md:mt-26">{banner}</div> */}

        {banner}
        <div className="flex grow flex-col">{children}</div>

        {/* <div className="w-full bg-white">
          <div className="container mx-auto mt-20 flex grow flex-col justify-center-safe gap-16 pb-16 md:mt-26">
            {children}
          </div>
        </div> */}

        {/* <div className="container mx-auto flex grow flex-col justify-center-safe gap-16 bg-gray-50 py-16 sm:rounded-t-lg">
          {children}
        </div> */}

        <Footer onManagePrivacy={setShowConsentPreferences} />
      </div>
    </>
  )
}

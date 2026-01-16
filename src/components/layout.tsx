import { forwardRef, useState } from 'react'

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
    ref
  ) => {
    const [showConsentPreferences, setShowConsentPreferences] = useState(false)

    return (
      <div
        ref={ref} // <- this is the key for parent to scroll
        className="scrollbar-hide flex h-screen w-screen flex-col overflow-auto scroll-smooth font-sans"
      >
        <CookieBanner
          preferences={showConsentPreferences}
          setPreferences={setShowConsentPreferences}
        />
        <NavBar
          home={home}
          news={news}
          cases={cases}
          services={services}
          about={about}
        />
        <div className="mt-20 flex grow flex-col lg:mt-28">
          {hero}
          {children}
        </div>

        <Footer onManagePrivacy={setShowConsentPreferences} />
      </div>
    )
  }
)

Layout.displayName = 'Layout'

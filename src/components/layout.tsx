import { forwardRef, useState } from 'react'

import { CookieBanner } from './app/cookies/cookieBanner'
import { Footer } from './app/footer/footer'
import { NavBar } from './app/navigation/navbar'

type LayoutProps = {
  home?: boolean
  news?: boolean
  cases?: boolean
  about?: boolean
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
      about = false,
      contact = false,
      hero,
      children,
    },
    ref
  ) => {
    const [showConsentPreferences, setShowConsentPreferences] = useState(false)

    return (
      <div
        ref={ref} // <- this is the key for parent to scroll
        className="scrollbar-hide flex h-dvh w-dvw flex-col overflow-auto scroll-smooth font-sans"
      >
        <CookieBanner
          preferences={showConsentPreferences}
          setPreferences={setShowConsentPreferences}
        />
        <NavBar
          home={home}
          news={news}
          cases={cases}
          about={about}
          contact={contact}
        />
        <div className="flex grow flex-col">
          {hero}
          {children}
        </div>

        <Footer onManagePrivacy={setShowConsentPreferences} />
      </div>
    )
  }
)

Layout.displayName = 'Layout'

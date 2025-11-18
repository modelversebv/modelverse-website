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

export function Layout({
  home = false,
  news = false,
  cases = false,
  about = false,
  contact = false,
  hero,
  children,
}: LayoutProps) {
  return (
    <div className="scrollbar-hide h-screen w-screen overflow-auto">
      <NavBar
        home={home}
        news={news}
        cases={cases}
        about={about}
        contact={contact}
      />
      {hero}
      {children}
      <Footer />
    </div>
  )
}

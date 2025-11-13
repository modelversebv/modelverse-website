import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// import logo from '@/assets/logo.png'

import { NavLink } from './navlink'

type NavProps = {
  home: boolean
  about: boolean
  news: boolean
  cases: boolean
  team: boolean
  contact: boolean
  isNavVisible: boolean
  expandedMenu: boolean
  setExpandedMenu: (value: boolean) => void
}

export function NavBar({
  home,
  about,
  news,
  cases,
  team,
  contact,
  isNavVisible,
  expandedMenu,
  setExpandedMenu,
}: NavProps) {
  const navigate = useNavigate()

  // const [animateMenu, setAnimateMenu] = useState(false)

  const handleMenuBtn = () => {
    if (expandedMenu) {
      // requestAnimationFrame(() => setAnimateMenu(false))
      requestAnimationFrame(() => setExpandedMenu(false))
      // setTimeout(() => {
      //   setExpandedMenu(false)
      // }, 100)
    } else {
      requestAnimationFrame(() => setExpandedMenu(true))
      // requestAnimationFrame(() => setAnimateMenu(true))
    }
  }

  useEffect(() => {
    if (!isNavVisible) setExpandedMenu(false)
  }, [isNavVisible])

  return (
    <div
      className={`absolute top-0 left-0 z-50 w-full bg-black/70 transition duration-300 md:h-26 ${expandedMenu ? 'h-screen' : 'h-20'} ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="size-full shadow-lg md:border-b md:bg-white/10 md:backdrop-blur-md">
        <div className="mx-auto flex h-full flex-col overflow-hidden md:container md:flex-row">
          <div className="flex h-20 shrink-0 flex-row items-center-safe border-b bg-white/10 px-4 backdrop-blur-md md:mr-auto md:h-26 md:border-b-0 md:bg-transparent md:backdrop-blur-none">
            <img
              // src={logo}
              src="/icon.png"
              alt="Modelverse"
              className="mr-auto size-10 md:size-14"
              onClick={() => navigate('/')}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="size-10 stroke-amber-500 md:hidden"
              onClick={handleMenuBtn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="flex grow flex-col gap-2 bg-white/5 p-4 shadow-inner backdrop-blur-md md:flex-row md:items-center-safe md:justify-end-safe md:gap-1 md:bg-transparent md:shadow-none md:backdrop-blur-none">
            <NavLink url="/" active={home}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="mr-2 size-6 stroke-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </NavLink>
            <NavLink url="/about" active={about}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="mr-2 size-6 stroke-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              About
            </NavLink>
            <NavLink url="/news" active={news}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="mr-2 size-6 stroke-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              News
            </NavLink>
            <NavLink url="/cases" active={cases}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="mr-2 size-6 stroke-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
              Cases
            </NavLink>
            <NavLink url="/team" active={team}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="mr-2 size-6 stroke-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              Team
            </NavLink>
            <NavLink url="/contact" active={contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="mr-2 size-6 stroke-amber-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

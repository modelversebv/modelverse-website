import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.png'
import { Folder, Home, Info, Layers, Newspaper } from 'lucide-react'

import { NavLink } from './navlink'

type NavBarProps = {
  home: boolean
  news: boolean
  cases: boolean
  services: boolean
  about: boolean
}

export function NavBar({ home, news, cases, services, about }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 z-50 w-full shrink-0 border-b lg:bg-white">
      <div
        className={`flex flex-col overflow-hidden lg:container lg:mx-auto lg:h-fit lg:flex-row lg:items-center-safe lg:justify-between lg:overflow-visible ${mobileMenuOpen ? 'h-screen' : 'h-fit'}`}
      >
        <div className="flex flex-row items-center-safe justify-between bg-white p-4">
          <img
            src="/icon.png"
            className="size-12 cursor-pointer lg:hidden"
            alt="Modelverse"
            onClick={() => navigate('/')}
          />
          <img
            src={logo}
            alt="Modelverse"
            className="hidden h-20 cursor-pointer lg:block"
            onClick={() => navigate('/')}
          />
          <div
            className="relative size-6 cursor-pointer lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-amber-500 transition-all duration-200 ${!mobileMenuOpen ? '-translate-y-1' : '-rotate-45'}`}
            />
            <div
              className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-amber-500 transition-all duration-200 ${!mobileMenuOpen ? 'translate-y-1' : 'rotate-45'}`}
            />
          </div>
        </div>
        <div
          className={`h-full flex-col gap-4 bg-white lg:flex lg:bg-transparent lg:opacity-100 lg:backdrop-blur-none ${mobileMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'} p-4 lg:flex lg:flex-row lg:items-center-safe lg:justify-end-safe`}
        >
          {/* <div className="h-px w-full bg-gray-300 md:hidden" /> */}
          <div className="flex flex-col gap-2 lg:mr-auto lg:flex-row">
            <NavLink to="/" active={home}>
              <Home className="size-6 text-amber-500" />
              <p>Home</p>
            </NavLink>
            <NavLink to="/services" active={services}>
              <Layers className="size-6 text-amber-500" />
              <p>Services</p>
            </NavLink>
            <NavLink to="/news" active={news}>
              <Newspaper className="size-6 text-amber-500" />
              <p>News</p>
            </NavLink>
            <NavLink to="/cases" active={cases}>
              <Folder className="size-6 text-amber-500" />
              <p>Cases</p>
            </NavLink>
            <NavLink to="/about" active={about}>
              <Info className="size-6 text-amber-500" />
              <p>About</p>
            </NavLink>
          </div>
          <div className="hidden h-px w-full bg-gray-300 lg:block lg:h-12 lg:w-px" />
          <div className="flex flex-col gap-2">
            <button
              className="cursor-pointer rounded-full bg-linear-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

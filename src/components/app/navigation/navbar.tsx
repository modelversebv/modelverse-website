import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.png'
import {
  ChevronDown,
  Folder,
  Home,
  Info,
  Layers,
  Mail,
  Menu,
  Newspaper,
} from 'lucide-react'

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
    <div className="fixed top-0 z-50 w-full shrink-0 border-b md:bg-white">
      <div
        className={`flex flex-col overflow-hidden md:container md:mx-auto md:h-fit md:flex-row md:items-center-safe md:justify-between md:overflow-visible ${mobileMenuOpen ? 'h-screen' : 'h-fit'}`}
      >
        <div className="flex flex-row items-center-safe justify-between bg-white p-4">
          <img
            src="/icon.png"
            className="size-12 cursor-pointer md:hidden"
            alt="Modelverse"
            onClick={() => navigate('/')}
          />
          <img
            src={logo}
            alt="Modelverse"
            className="hidden h-20 cursor-pointer md:block"
            onClick={() => navigate('/')}
          />
          <button
            className="cursor-pointer p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="size-8 text-amber-500" />
          </button>
        </div>
        <div
          className={`h-full flex-col gap-4 bg-black/50 backdrop-blur-sm md:flex md:bg-transparent md:opacity-100 md:backdrop-blur-none ${mobileMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'} p-4 md:flex md:flex-row md:items-center-safe md:justify-end-safe`}
        >
          <div className="h-px w-full bg-gray-300 md:hidden" />
          <div className="flex flex-col gap-2 md:flex-row lg:mr-auto">
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
          <div className="h-px w-full bg-gray-300 md:hidden lg:block lg:h-12 lg:w-px" />
          <div className="flex flex-col gap-2 md:hidden lg:flex">
            <button
              className="cursor-pointer rounded-full bg-linear-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 lg:shadow-none"
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

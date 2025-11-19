import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.png'
import { Folder, Home, Info, Mail, Menu, Newspaper } from 'lucide-react'

import { NavLink } from './navlink'

type NavBarProps = {
  home: boolean
  news: boolean
  cases: boolean
  about: boolean
  contact: boolean
}

export function NavBar({ home, news, cases, about, contact }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex flex-col gap-4 p-4 md:container md:mx-auto md:p-8 lg:flex-row lg:items-center-safe lg:justify-between">
        <div className="flex flex-row items-center-safe justify-between">
          <img
            src="/icon.png"
            className="size-12 cursor-pointer md:hidden"
            alt=""
            onClick={() => navigate('/')}
          />
          <img
            src={logo}
            className="hidden h-20 cursor-pointer md:block"
            onClick={() => navigate('/')}
          />
          <button
            className="cursor-pointer p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="size-8 text-amber-500" />
          </button>
        </div>
        <div
          className={`flex-col gap-4 ${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex lg:flex-row lg:items-center-safe lg:justify-end-safe`}
        >
          <div className="h-px w-full bg-gray-300 lg:hidden" />
          <div className="flex flex-col gap-2 lg:mr-auto lg:flex-row">
            <NavLink to="/" active={home}>
              <Home className="size-6 text-amber-500" />
              <p>Home</p>
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
            <NavLink to="/contact" active={contact}>
              <Mail className="size-6 text-amber-500" />
              <p>Contact</p>
            </NavLink>
          </div>
          <div className="h-px w-full bg-gray-300 lg:h-12 lg:w-px" />
          <div className="flex flex-col gap-2">
            <button
              className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50"
              onClick={() =>
                (window.location.href =
                  'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
              }
            >
              Book a meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

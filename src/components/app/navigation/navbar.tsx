import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from './dropdown'
import { DropdownLink } from './dropdownLink'
import { NavLink } from './navlink'

type NavBarProps = {
  home: boolean
  news: boolean
  cases: boolean
  services: boolean
  about: boolean
  layoutRef: React.RefObject<HTMLDivElement>
}

export function NavBar({
  home = false,
  news = false,
  cases = false,
  services = false,
  about = false,
  layoutRef,
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const scrollToTop = () => {
    if (!home || !layoutRef) return

    const offset = -96

    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, {
        offset,
      })
      return
    }

    // Native scroll (mobile or fallback)
    if (layoutRef.current) {
      layoutRef.current.scrollTo({
        top: 0 + offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      className={`fixed top-0 right-0 left-0 flex flex-col gap-4 overflow-hidden border-b border-white/20 bg-black/10 p-4 text-white backdrop-blur-md transition-all duration-300 md:h-fit md:flex-row ${isOpen ? 'h-dvh' : 'h-16'} z-100 md:overflow-visible`}
    >
      <div className="flex shrink-0 flex-row items-center-safe justify-between md:container md:mx-auto md:w-full">
        <div
          className="flex cursor-pointer flex-row items-center-safe gap-2"
          onClick={() => {
            navigate('/')
            scrollToTop()
          }}
        >
          <img src="/icon.png" alt="Modelverse" className="size-8" />
          <span className="text-lg font-semibold">Modelverse</span>
        </div>
        <div className="hidden flex-row items-center-safe gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold md:flex lg:gap-8">
          <NavLink active={home} to="/">
            Home
          </NavLink>
          <Dropdown title="Solutions" active={services}>
            <DropdownLink to="/platform" title="Platform" disabled>
              Risk & compliance management
            </DropdownLink>
            <DropdownLink to="/services" title="Services" active={services}>
              Security Plans
            </DropdownLink>
          </Dropdown>
          <NavLink active={cases} to="/cases">
            Case Studies
          </NavLink>
          <NavLink active={news} to="/news">
            News
          </NavLink>
          <NavLink active={about} to="/about">
            About
          </NavLink>
        </div>
        <div className="hidden flex-row items-center md:flex">
          <button
            className="cursor-pointer rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
        <div
          className="relative size-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-white transition-all duration-200 ${!isOpen ? '-translate-y-1' : '-rotate-45'}`}
          />
          <div
            className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-white transition-all duration-200 ${!isOpen ? 'translate-y-1' : 'rotate-45'}`}
          />
        </div>
      </div>
      <div className="flex grow flex-col gap-4 overflow-scroll md:hidden">
        <div className="flex flex-col gap-4 border-y border-y-white/20 py-4 font-semibold">
          <NavLink active={home} to="/">
            Home
          </NavLink>
          <Dropdown title="Solutions" active={services}>
            <DropdownLink to="/" title="Platform" disabled>
              Risk & compliance management
            </DropdownLink>
            <DropdownLink to="/services" title="Services" active={services}>
              Pricing & Plans
            </DropdownLink>
          </Dropdown>
          <NavLink active={cases} to="/cases">
            Case Studies
          </NavLink>
          <NavLink active={news} to="/news">
            News
          </NavLink>
          <NavLink active={about} to="/about">
            About
          </NavLink>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

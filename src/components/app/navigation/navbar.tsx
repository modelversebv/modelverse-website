import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown } from '../misc/dropdown'

// type NavBarProps = {
//   home: boolean
//   news: boolean
//   cases: boolean
//   services: boolean
//   about: boolean
// }

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`fixed top-0 right-0 left-0 flex flex-col gap-4 overflow-hidden border-b border-white/20 bg-white/10 p-4 text-white backdrop-blur-md transition-all duration-300 md:h-fit md:flex-row ${isOpen ? 'h-screen' : 'h-16'} z-100 md:overflow-visible`}
    >
      <div className="flex shrink-0 flex-row items-center-safe justify-between md:container md:mx-auto md:w-full">
        <div className="flex flex-row items-center-safe gap-2">
          <img src="/icon.png" alt="Modelverse" className="size-8" />
          <span className="text-lg font-semibold">Modelverse</span>
        </div>
        <div className="hidden flex-row items-center-safe gap-4 md:flex">
          <Link to="/test">Home</Link>
          <Dropdown title="Solutions">
            <Link to="/test">Platform</Link>
            <Link to="/test">Services</Link>
          </Dropdown>
          <Link to="/test">Case Studies</Link>
          <Link to="/test">News</Link>
          <Link to="/test">About</Link>
        </div>
        <div className="hidden flex-row items-center md:flex">
          <button className="cursor-pointer rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50">
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
        <div className="flex flex-col gap-4 border-y border-y-white/20 py-4">
          <Link to="/test">Home</Link>
          <Dropdown title="Solutions">
            <Link to="/test">Platform</Link>
            <Link to="/test">Services</Link>
          </Dropdown>
          <Link to="/test">Case Studies</Link>
          <Link to="/test">News</Link>
          <Link to="/test">About</Link>
        </div>
        <div className="flex flex-col gap-4">
          <button className="rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

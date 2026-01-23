import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.png'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useIsMobile } from '@/hooks/use-mobile'
import {
  ChevronDown,
  Equal,
  Folder,
  Home,
  House,
  Info,
  Layers,
  Mail,
  Menu,
  Newspaper,
  X,
} from 'lucide-react'

import { Dropdown, DropdownLink } from '../../../../experimental/dropdown_new'
import { NavLink } from './navlink_new'

export function NavBar() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [expandedMenu, setExpendedMenu] = useState(false)

  return (
    <div className="fixed top-0 flex flex-col">
      <div className="flex flex-row items-center-safe justify-between bg-white p-4 shadow-lg">
        <div className="size-12">
          <img src="icon.png" alt="Modelverse" />
        </div>
        <div
          className="relative size-6"
          onClick={() => setExpendedMenu(!expandedMenu)}
        >
          <div
            className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-black transition-all duration-200 ${!expandedMenu ? '-translate-y-1' : '-rotate-45'}`}
          />
          <div
            className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-black transition-all duration-200 ${!expandedMenu ? 'translate-y-1' : 'rotate-45'}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ${expandedMenu ? 'h-full' : 'h-0'}`}
      >
        <div className="flex flex-col gap-4 px-4 py-8">
          <span className="font-semibold text-gray-600">Menu</span>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">
            Solutions
            <Dropdown>
              <DropdownLink to="/services">Services</DropdownLink>
            </Dropdown>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

import type React from 'react'
import { useState } from 'react'

import { ChevronDown } from 'lucide-react'

type DropdownProps = {
  title: string
  children: React.ReactNode
}

export function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="group relative hidden flex-row items-center-safe gap-2 md:flex">
        {title}
        <ChevronDown
          className={`size-4 transition-all duration-300 group-hover:rotate-180`}
        />
        <div className="invisible absolute top-full translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mt-2 flex flex-col gap-2 rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
            {children}
          </div>
        </div>
      </div>
      <div className="group relative flex flex-col md:hidden">
        <div
          className="flex flex-row items-center-safe justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <ChevronDown
            className={`size-4 transition-all duration-300 ${isOpen && 'rotate-180'}`}
          />
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden">
            <div className="ml-4 flex flex-col gap-2 pt-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

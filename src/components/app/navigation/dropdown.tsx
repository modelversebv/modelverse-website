import type React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

type DropdownProps = {
  title: React.ReactNode
  active?: boolean
  children: React.ReactNode
  classname?: string
  childrenClassname?: string
}

export function Dropdown({
  title,
  active,
  children,
  classname,
  childrenClassname,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={cn(
          classname,
          'group relative hidden flex-row items-center-safe gap-2 md:flex'
        )}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row items-center-safe gap-2"
        >
          <span
            className={`flex flex-row items-center-safe justify-center-safe transition-all duration-300 ${active ? 'text-teal-500' : 'text-white/90 group-hover:text-white'}`}
          >
            {title}
          </span>
          <ChevronDown
            className={`size-4 transition-all duration-300 group-hover:rotate-180 ${active && 'text-teal-500'} ${isOpen && 'rotate-180'}`}
          />
        </div>

        <div
          className={cn(
            childrenClassname,
            `invisible absolute top-full min-w-full opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${isOpen ? 'visible opacity-100' : 'translate-y-2'}`
          )}
        >
          <div className="mt-6 flex flex-col overflow-hidden rounded-xl border border-white/30 bg-slate-900 shadow-lg">
            {children}
          </div>
        </div>
      </div>
      <div className="group relative flex flex-col md:hidden">
        <div
          className="flex flex-row items-center-safe justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`transition-all duration-300 ${active ? 'text-teal-500' : 'text-white/90 group-hover:text-white'}`}
          >
            {title}
          </span>
          <ChevronDown
            className={`size-4 transition-all duration-300 ${isOpen && 'rotate-180'} ${active && 'text-teal-500'}`}
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

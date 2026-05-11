'use client'

import { useState } from 'react'

import { slideInLeft } from '@/lib/animation-variants'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { motion } from 'motion/react'

type AccordionItem = {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <motion.div
            key={index}
            className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-colors duration-300 hover:border-lime-500/50 hover:bg-white/10"
            variants={slideInLeft}
          >
            <button
              className="flex w-full cursor-pointer items-center gap-4 p-6 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <Plus
                className={`size-5 shrink-0 text-lime-500 transition-all duration-300 ${isOpen && 'rotate-45'}`}
              />
              <span className="text-lg font-medium">{item.question}</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-white/70">{item.answer}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

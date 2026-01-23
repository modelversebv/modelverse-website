import { useEffect } from 'react'

import { Hero } from '@/components/app/misc/hero'
import { NavBar } from '@/components/app/navigation/navbar'
import { Layout } from '@/components/layout'
import * as echarts from 'echarts'

export function TestPage() {
  return (
    <div className="relative h-[200vh] w-screen">
      <div className="absolute inset-0 h-1/2 bg-[url(/background-9-16.jpg)] bg-cover bg-center" />
      <NavBar></NavBar>
    </div>
  )
}

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { trackPageView } from './ga4'

export function useGaTracker() {
  const pathname = usePathname()

  useEffect(() => {
    trackPageView(pathname, document.title)
  }, [pathname])
}

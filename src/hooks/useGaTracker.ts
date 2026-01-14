// src/hooks/useGaTracker.js (or .ts)
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { trackPageView } from '../services/ga4'

export const useGaTracker = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname, document.title)
  }, [location])
}

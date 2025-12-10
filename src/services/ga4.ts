import ReactGA from 'react-ga4'

import { removeCookie } from 'typescript-cookie'

const TRACKING_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || ''

const isGa4Enabled = !!TRACKING_ID
let isInitialized = false

if (!isGa4Enabled) {
  console.warn('GA4 Tracking disabled. VITE_GA4_MEASUREMENT_ID is missing.')
}

const deleteGaCookies = () => {
  const allCookies = document.cookie.split('; ')

  allCookies.forEach((cookie) => {
    const cookieName = cookie.split('=')[0]
    if (cookieName.startsWith('_ga')) {
      removeCookie(cookieName)
    }
  })
}

export const initializeGa4 = (hasAnalyticsConsent: boolean) => {
  if (!isGa4Enabled) {
    return
  }

  const consentStatus = hasAnalyticsConsent ? 'granted' : 'denied'
  ReactGA.gtag('consent', 'default', {
    analytics_storage: consentStatus,
    ad_storage: consentStatus,
  })

  if (!isInitialized) {
    ReactGA.initialize(TRACKING_ID)
    isInitialized = true
  }
}

export const grantAnalyticsConsent = () => {
  if (!isGa4Enabled || !isInitialized) {
    return
  }

  ReactGA.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
  })

  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}

export const denyAnalyticsConsent = () => {
  if (!isGa4Enabled || !isInitialized) {
    return
  }

  ReactGA.gtag('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
  })

  deleteGaCookies()
}

export const trackPageView = (path: string, title?: string) => {
  if (!isGa4Enabled || !isInitialized) {
    return
  }
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title,
  })
}

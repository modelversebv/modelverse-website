import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Toaster } from 'sonner'
import { getCookie } from 'typescript-cookie'

import './App.css'
import { useGaTracker } from './hooks/useGaTracker'
import { AboutPage } from './pages/About'
import { ArticlePage } from './pages/Article'
import { CasesPage } from './pages/Cases'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { LegalPage } from './pages/Legal'
import { NewsPage } from './pages/News'
import { ServicesPage } from './pages/Services'
// import { TestPage } from './pages/Test'
import { initializeGa4 } from './services/ga4'

const COOKIE_CONSENT = 'user-preferences'
const ANALYTICAL_COOKIE_KEY = 'analytical-cookies'

const getAnalyticalConsentFromCookie = (): boolean => {
  const consentCookie = getCookie(COOKIE_CONSENT)
  if (!consentCookie) {
    return false
  }
  try {
    const userPreferences = JSON.parse(consentCookie)
    return userPreferences[ANALYTICAL_COOKIE_KEY] === true
  } catch (error) {
    console.error('Error parsing cookie consent:', error)
    return false
  }
}

const RouterWrapper = () => {
  useGaTracker()

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        {/* <Route path="/test" element={<TestPage />} /> */}
        <Route path="/legal/:slug" element={<LegalPage />} />
      </Routes>
    </>
  )
}

function App() {
  useEffect(() => {
    const hasAnalyticsConsent = getAnalyticalConsentFromCookie()
    initializeGa4(hasAnalyticsConsent)
  }, [])

  return (
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Toaster } from 'sonner'

import './App.css'
import { AboutPage } from './pages/About'
import { CasesPage } from './pages/Cases'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { NewsPage } from './pages/News'

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

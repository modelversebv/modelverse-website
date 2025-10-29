import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { CookieBanner } from './components/app/cookies/cookieBanner'
import { About } from './pages/About'
import { Cases } from './pages/Cases'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Team } from './pages/Team'

function App() {
  return (
    <BrowserRouter>
      <CookieBanner></CookieBanner>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

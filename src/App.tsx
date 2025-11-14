import { Toaster } from 'sonner'

import './App.css'
import { Layout } from './components/layout'
import { About } from './pages/About'
import { Cases } from './pages/Cases'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
// import { News } from './pages/News'
import { Team } from './pages/Team'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Cases />
      <Team />
      <Contact />
      {/* <News /> */}
      <Toaster position="top-center" />
    </Layout>
  )
}

export default App

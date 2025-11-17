import { Toaster } from 'sonner'

import './App.css'
import { HomePage } from './pages/Home'

function App() {
  return (
    <>
      <HomePage />
      <Toaster position="top-center" />
    </>
  )
}

export default App

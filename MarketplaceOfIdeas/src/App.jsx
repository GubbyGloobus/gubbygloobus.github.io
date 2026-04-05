import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the Marketplace</h1>
    <p>People have ideas. Yours are next, and can be turned into Money. Money can become a purchase, and that means you're doing it right.
    </p>
    </>  
  )
}

export default App

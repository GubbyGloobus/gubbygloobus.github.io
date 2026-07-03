import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home'
import BigIdea from './pages/BigIdea'
import ShopIdeas from './pages/ShopIdeas'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './components/navbar'
import SupportFAQ from './pages/SupportFAQ'
import Support from './pages/Support'
import FAQ from './pages/FAQ'
import Checkout from './pages/Checkout'
import IDEAINJECTION from './pages/IDEAINJECTION'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/BigIdea" element={<BigIdea />}/>
          <Route path="/ShopIdeas" element={<ShopIdeas />}/>
          <Route path="/SupportFAQ" element={<SupportFAQ />}/>
          <Route path="/Support" element ={<Support />}/>
          <Route path="/FAQ" element ={<FAQ />}/>
          <Route path="/Checkout" element={<Checkout />}/>
          <Route path="/IDEAINJECTION" element={<IDEAINJECTION />}/>
        </Routes>
      </BrowserRouter>
    </>  
  )
}

export default App

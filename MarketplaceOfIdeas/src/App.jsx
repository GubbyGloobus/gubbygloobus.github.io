import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home'
import BigIdea from './pages/BigIdea'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <NavBar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/BigIdea" element={<BigIdea />}/>
      </Routes>
   </BrowserRouter>
    </>  
  )
}

export default App

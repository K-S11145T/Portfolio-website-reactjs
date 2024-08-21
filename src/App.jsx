import React from 'react'
import Home from './components/Home'
import {Routes , Route, Link} from "react-router-dom"
import Experience from './components/Experience'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

// 

function App() {


  return (
    <div  className=' bg-[#1F1E24] text-white w-[100vw] h-screen overflow-y-scroll'>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/experience" element = {<Experience />} />
        <Route path = "/projects" element = {<Work />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
    </div>
  )
}

export default App

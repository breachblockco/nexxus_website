import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  return (
    <div className='w-full h-screen px-20 bg-zinc-800'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default App
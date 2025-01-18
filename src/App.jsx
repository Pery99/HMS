import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Features />
      <Rooms />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
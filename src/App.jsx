import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import BookingPage from './pages/BookingPage'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Rooms />
      <Gallery />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </div>
  )
}

export default App
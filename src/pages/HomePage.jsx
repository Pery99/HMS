import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Rooms from '../components/Rooms'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Rooms />
      <Gallery />
      <Location />
      <Footer />
    </>
  )
}

export default HomePage

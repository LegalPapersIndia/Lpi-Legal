import React from 'react'
import Hero from '../Components/Hero'
import AboutUs from '../Components/About'
import Services from '../Components/Sevices'
import Testimonials from '../Components/Testimonials'
import FAQ from '../Components/FAQ'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <FAQ />
    </div>
  )
}

export default Home
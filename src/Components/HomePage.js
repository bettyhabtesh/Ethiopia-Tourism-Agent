import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import TopDestinations from './Topdestinations'
import ContactUs from './ContactUs'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection/>
      <TopDestinations/>
      <ContactUs/>
     
    </div>
  )
}

export default HomePage

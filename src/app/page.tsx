import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import Hero from './Components/Hero';
import Role from './Components/Role';
import Features from './Components/Features';
import BelowFeatures from './Components/BelowFeatures';
import CTA from './Components/CTA';
import Reviews from './Components/Reviews';
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <Cards/>
      <BelowFeatures/>
    
      <Features/>
      <CTA/>
      <Reviews/>
     
     
      <Footer/>
    </div>
  )
}

export default page
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import Hero from './Components/Hero';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default page
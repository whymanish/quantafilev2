import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Cards from './Components/Cards'


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
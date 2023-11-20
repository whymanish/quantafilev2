import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import HeroDashboard from './Components/HeroDashboard';

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroDashboard/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default page
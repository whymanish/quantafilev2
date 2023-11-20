import React from 'react'
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

const HeroDashboard = () => {
  return (
    <div>
      <div className='hidden lg:block'>
        <DesktopHero/>
      </div>
      <div className='block lg:hidden'>
        <MobileHero/>
      </div>
    </div>
  )
}

export default HeroDashboard

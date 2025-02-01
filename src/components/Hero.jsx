import React from 'react'
import Navbar from './Navbar'
import House from './House'

const Hero = () => {
  return (
    <div className='bg-blue-600 text-white'>
      <Navbar></Navbar>
      <House></House>
    </div>
  )
}

export default Hero
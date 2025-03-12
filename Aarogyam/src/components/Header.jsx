import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight'>Connecting you with<br/>Compassionate Care
        </p>

      <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
        

        <p className = 'text-xl'>SereneConnect: Your safe haven for mental wellness. Connect with licensed professionals, prioritize your well-being, and thrive. Break free from stigma and take the first step towards healing and growth</p>

        </div>
         
         <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-black-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Book appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
      </div>

      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.Counselling} alt="" />
      </div>
      
    </div>

    
  )
}

export default Header

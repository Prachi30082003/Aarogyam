import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* left section */}

         <div>
           
         <div onClick={()=>navigate('/')} className='text-xl text-primary cursor-pointer'> <span className='text-2xl'>🕊</span>Serene<span className='text-blue-900'>Connect</span></div>
           <p className='w-full md:w-2/3 text-gray-600 leading-6 pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente praesentium, commodi voluptatibus dolore unde iste alias fugit repudiandae aspernatur iure mollitia, nam, corrupti dignissimos </p>
         </div>

          {/* center section */}

         <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600' >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
         </div>

         {/* right section */}
         <div>
         
         <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
         <ul className='flex flex-col gap-2 text-gray-600'>
          <li>6260542508</li>
          <li>shrivastavaprachi2003@gmail.com</li>
         </ul>


         </div>
           </div>

           {/* copyright text */}

           <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright 2024@ SereneConnect - All Rights Reserved</p>
           </div>
      
    </div>
  )
}

export default Footer

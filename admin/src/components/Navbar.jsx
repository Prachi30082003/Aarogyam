import React, { useContext } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

  const {aToken,setAToken} = useContext(AdminContext)
  const {dToken,setDToken} = useContext(DoctorContext)

  const navigate = useNavigate()

  const logout = ()=>{
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('adminToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    //if aToken present then setAToken to empty string and remove the token from localStorage
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-200 bg-white '>
      <div className='flex items-center gap-2 text-xs'>
      <div onClick={()=>navigate('/')} className='text-xl text-primary cursor-pointer'> <span className='text-2xl'>🕊</span>Serene<span className='text-blue-900'>Connect</span></div>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 '>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>

      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full cursor-pointer'>Logout</button>
      
    </div>
  )
}

export default Navbar

import React, { useContext, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useState } from 'react';
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const {speciality} = useParams();
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter , setShowFilter] = useState(false)
  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)

  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=> doc.speciality===speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
      applyFilter()
  },[doctors,speciality])

  
  return (
    <div>

      <p className='text-gray-600'>Browse through doctors specialist.</p>
      
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>

        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          
          <p onClick={()=> speciality==='Psychiatrist'? navigate('/doctors') : navigate('/doctors/Psychiatrist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Psychiatrist" ? "bg-indigo-100 text-black" : ""}`}>Psychiatrist</p>

          <p onClick={()=> speciality==='Peer Support Specialist'? navigate('/doctors') : navigate('/doctors/Peer Support Specialist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Peer Support Specialist" ? "bg-indigo-100 text-black" : ""}`}>Peer Support Specialist</p>

          <p onClick={()=> speciality==='Licensed Professional Counselor'? navigate('/doctors') : navigate('/doctors/Licensed Professional Counselor')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Licensed Professional Counselor" ? "bg-indigo-100 text-black" : ""}`}>Licensed Professional Counselor</p>

          <p onClick={()=> speciality==='Substance Abuse Counselor'? navigate('/doctors') : navigate('/doctors/Substance Abuse Counselor')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Substance Abuse Counselor" ? "bg-indigo-100 text-black" : ""}`}>Substance Abuse Counselor</p>

          <p onClick={()=> speciality==='Marriage and Family Therapist'? navigate('/doctors') : navigate('/doctors/Marriage and Family Therapist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Marriage and Family Therapist" ? "bg-indigo-100 text-black" : ""}`}>Marriage and Family Therapist</p>

          <p onClick={()=> speciality==='Pastoral Counselor'? navigate('/doctors') : navigate('/doctors/Pastoral Counselor')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pastoral Counselor" ? "bg-indigo-100 text-black" : ""}`}>Pastoral Counselor</p>
        </div>
      

      <div className='w-full grid grid-cols-(--my-grid-cols) gap-4 gap-y-6' >
        {
          filterDoc.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
             <img className='bg-blue-50 w-full h-[200px] object-contain' src={item.image} alt="" />
             <div className='p-4'>
             <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                  <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></p>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
               <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
               <p className='text-gray-600 text-sm'>{item.speciality}</p>
             </div>
            </div>
       ))
        }
      </div>

      </div>
      
    </div>
  )
}

export default Doctors

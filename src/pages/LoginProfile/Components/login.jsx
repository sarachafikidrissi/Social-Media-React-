import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/friendwave-removebg-preview.png'
const LoginPage = () => {
  const navigate =useNavigate()
  return (
    <div className=''>
    <div className='navbar flex justify-between  px-5 '>
      <div className='leftNav flex gap-52'>
        <img width={50} src={logo}/>
        <div class="relative  items-center hidden md:inline-flex">
        <input type="text" placeholder="Search" class="border border-gray-200 rounded-md py-1 px-2 w-[35vw]"/>
        <svg class="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
      </div>
      <div className='rightNav flex gap-5'>
          <h3>user user</h3>
          <img width={50} src={logo} className='rounded-full  bg-white '/>
      </div>
    </div>
    
  </div>
  )
}

export default LoginPage

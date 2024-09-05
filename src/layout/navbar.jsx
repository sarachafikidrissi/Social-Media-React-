import React from 'react';
import logo from "../../src/assets/images/logo_fw-removebg-preview.png"
import { Link } from 'react-router-dom';
import { useAuth } from '../context';

const Navbar = () => {
    const {users}=useAuth()

    return (
        <div className='navbar flex justify-between  px-5 '>
      <div className='leftNav flex gap-52'>
        <img width={70} src={logo} />
        <div class="relative  items-center hidden md:inline-flex">
        <input type="text" placeholder="Search" class="border border-gray-200 rounded-md py-1 px-2 w-[35vw]"/>
        <svg class="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
      </div>
      
      
      <div class="group relative cursor-pointer py-2">

      <div class="flex items-center justify-between space-x-5 bg-white px-4">
      {users.map((e)=>
      <h3 className='text-black'>{e.username}</h3>
    )}
          <img width={50} src={logo} className='menu-hover rounded-full  bg-white '/>
         
      </div>

      <div class="invisible absolute z-50 flex w-full flex-col bg-[#fcfc] py-3 px-4 text-gray-800 shadow-xl group-hover:visible">
            
            <a  className=' hover:bg-[#a40ea46d] border-b-2 border-red-700 text-center text-1xl'><Link to={"/profile"}>Profile</Link></a>
            <a className=' hover:bg-[#a40ea46d] border-b-2 border-red-700 text-center text-1xl'><Link to={"/edit-profile"}>Edit</Link></a>
            <a className=' hover:bg-[#a40ea46d] border-b-2 border-red-700 text-center text-1xl'><Link to={"/login"}>logout</Link></a>
      </div>
  </div>
 
    </div>
    );
};

export default Navbar;
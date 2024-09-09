import React, { useState } from 'react';
import logo from "../../src/assets/images/newLogo_black-removebg-preview.png"
import { Link, useParams } from 'react-router-dom';
import { FaMoon,  FaSun} from "react-icons/fa";
import { useAuth } from '../context';
import { CiUser } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {

    const { users, setUsers, darkmode, setDarkmode } = useAuth();  
    let connectedUser = useParams();
    let newUsername = connectedUser["username"];
    let user = users.find((user)=>user.username== newUsername )
    let userr = users.find((user)=>user.isLoggedIn== true )



const handleLogout = () => {

  if (user) {
    let newTab = [...users]
    let userIn = newTab.find(e => e.isLoggedIn == true)
    userIn.isLoggedIn = false
    setUsers(newTab)

  }
};



    return (
        <div className={`navbar flex justify-between flex-row  px-5 ${darkmode && "bg-[#242424]" }`}>
      <div className={`leftNav flex gap-52   `}>
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
      
      
      <div class="group relative cursor-pointer py-2 ">

      <div class="flex items-center justify-between space-x-5 px-4">

      <h3 className={`text-black text-xl font-semibold ${darkmode && "text-[#fff]" }`}>{userr.username}</h3>   
          <img  src={userr.profileImage} className='menu-hover rounded-full border-2 border-btnColor  w-[50px] h-[50px] '/>
          <button onClick={() => { setDarkmode(!darkmode) }} className="bg-btnColor px-[1.3vw] py-[12px] text-white text-lg font-semi-bold rounded-full border-none">{darkmode ? <FaSun /> : <FaMoon />}</button>
      </div>
     

      <div class="invisible bg-white cursor-pointer absolute z-50 mt-2 rounded-md flex w-full flex-col py-5 px-4 text-gray-800 shadow-xl group-hover:visible">
            
            <div  className='cursor-pointer hover:bg-hoverBtn hover:rounded-md w-[100%] ps-5 text-xl pb-2 flex flex-row gap-4 items-center'><div><CiUser /></div><Link to={"/profile"}> Profile</Link></div>
            <div className='cursor-pointer hover:bg-hoverBtn hover:rounded-md w-[100%]  ps-5 text-xl pb-2 pt-1 flex flex-row gap-4 items-center'> <div><MdOutlineEdit /></div><Link to={"/edit-profile"}>Edit</Link></div>
            <div className='cursor-pointer hover:bg-hoverBtn hover:rounded-md w-[100%]  ps-5 text-xl pb-2 pt-1 flex flex-row gap-4 items-center'><div><CiLogout /></div><Link to={"/login"} onClick={handleLogout}>Logout</Link></div>
      </div>
  </div>
 
    </div>
    );
};

export default Navbar;
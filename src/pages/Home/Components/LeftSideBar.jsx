import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
const LeftSideBar = () => {
  return (
    <div className='w-[25%] text-slateGray text-xl flex flex-col gap-5 pt-5 ps-10 '>
      <div className='flex justify-start items-center  gap-3 hover:text-pink'> <IoHomeOutline /> <h2>Feed</h2></div>
      <div className='flex justify-start items-center gap-3  hover:text-pink'><FiShoppingBag /> <h2>MarketPlace</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink'><MdOndemandVideo /> <h2>Video</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink'><FiMessageSquare /> <h2>Messages</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink'><CiBookmark /> <h2>My Favorites</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink'><FaUsers /> <h2>Groupes</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink'><CiSettings /> <h2>Settings</h2></div>
      
      
      
      
      
      
    </div>
  )
}

export default LeftSideBar

import React from 'react'
import { Images } from '../../../constants';
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { useAuth } from '../../../context';
const LeftSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // kan3tiw chemin fin mabghinash tab9a tla3 my friends
  let isGroupsPage = location.pathname === '/groups';
  const { logedUser } = useAuth();
  console.log(logedUser[0]);
  return (
    
    <div className=' pt-5 ps-10  '>
      <div className='text-slateGray text-xl gap-5 flex flex-col'>
      <div className='flex justify-start items-center  gap-3 hover:text-pink cursor-pointer'> <IoHomeOutline /> <h2>Feed</h2></div>
      <div className='flex justify-start items-center gap-3  hover:text-pink cursor-pointer'><FiShoppingBag /> <h2>MarketPlace</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink cursor-pointer'><MdOndemandVideo /> <h2>Video</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink cursor-pointer'><FiMessageSquare /> <h2>Messages</h2></div>
      <div onClick={() => {navigate('/myfavorite')}} className='flex justify-start items-center  gap-3  hover:text-pink cursor-pointer '><CiBookmark  /> <h2>My Favorites</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink cursor-pointer'><FaUsers /> <h2>Groupes</h2></div>
      <div className='flex justify-start items-center  gap-3  hover:text-pink cursor-pointer'><CiSettings /> <h2>Settings</h2></div>
      </div>
      {/* My Friends */}
      {!isGroupsPage &&(
      <div className='flex flex-col pt-12 gap-5'>
        <h1 className='text-xl font-bold text-charcoal'>My Friends</h1>
        <div className='flex flex-row gap-4'>
          <img src={Images.profile1} alt="" srcset="" className='rounded-full w-[45px] h-[45px]' />
          <div className=''>
            <h1 className='text-l font-bold text-charcoal'>Ismail Horre</h1>
            <p className=' text-slateGray font-light'> Casablanca,Anfa</p>
          </div>

        </div>
        <div className='flex flex-row gap-4'>
          <img src={Images.profile2} alt="" srcset="" className='rounded-full w-[45px] h-[45px]' />
          <div className=''>
            <h1 className='text-l font-bold text-charcoal'>Rajae Bensafy</h1>
            <p className=' text-slateGray font-light'> Tanger,Anfa</p>
          </div>

        </div>
        <div className='flex flex-row gap-4'>
          <img src={Images.profile3} alt="" srcset="" className='rounded-full w-[45px] h-[45px]' />
          <div className=''>
            <h1 className='text-l font-bold text-charcoal'>Sara Idrissi</h1>
            <p className=' text-slateGray font-light'> Rabat,Anfa</p>
          </div>

        </div>

      </div>
      
      
      
      
      
    )}
    </div>
  )
}

export default LeftSideBar

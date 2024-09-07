




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
import { useParams } from 'react-router-dom';
const LeftSideBar = () => {
  let connectedUser = useParams()
  let newUsername = connectedUser["username"]
  console.log(newUsername);
  const navigate = useNavigate();
  const location = useLocation();
  // kan3tiw chemin fin mabghinash tab9a tla3 my friends
  let isGroupsPage = location.pathname === '/groups';

  let isMarketPlace = location.pathname === '/market';
  const { users, image, coverImage}  = useAuth()

  let filterConnectedUser = users.find((e) => e.isLoggedIn === true);
  console.log(filterConnectedUser);
  // const { logedUser } = useAuth();
  return (
    
    <div className=' pt-5 ps-10  '>
      <div className='text-slateGray text-2xl gap-5 flex flex-col'>
      <div className='flex justify-start items-center  gap-3  cursor-pointer'><div className='bg-[#CA8787] text-white p-2 rounded-full'><IoHomeOutline className='' /></div>  <h2>Feed</h2></div>
      <div className='flex justify-start items-center gap-3   cursor-pointer'><div className='bg-[#A87676] text-white p-2 rounded-full'><FiShoppingBag /></div> <h2>MarketPlace</h2></div>
      <div className='flex justify-start items-center  gap-3   cursor-pointer'> <div className='bg-[#83375b] text-white p-2 rounded-full'><MdOndemandVideo /></div> <h2>Video</h2></div>
      <div className='flex justify-start items-center  gap-3   cursor-pointer'><div className='bg-[#eca7a7] text-white p-2 rounded-full'><FiMessageSquare /></div> <h2>Messages</h2></div>
      <div onClick={() => {navigate('/myfavorite')}} className='flex justify-start items-center  gap-3   cursor-pointer '><div className='bg-[#99627A] text-white p-2 rounded-full'><CiBookmark  /> </div><h2>My Favorites</h2></div>
      <div className='flex justify-start items-center  gap-3   cursor-pointer'><div className='bg-[#FC819E] text-white p-2 rounded-full'><FaUsers /> </div><h2>Groupes</h2></div>
      <div className='flex justify-start items-center  gap-3   cursor-pointer'><div className='bg-[#697565] text-white p-2 rounded-full'><CiSettings /> </div> <h2>Settings</h2></div>
      </div>
      
      {!isGroupsPage && !isMarketPlace &&(
      <div className='flex flex-col pt-12 gap-5'>
        <h1 className='text-xl font-bold text-charcoal'>My Friends</h1>
        {
          filterConnectedUser ?(filterConnectedUser.friends.map((e, index) => (
            <div className='flex flex-row gap-4'>
          <img src={image} alt="" srcset="" className='rounded-full w-[45px] h-[45px]' />
          <div className=''>
            <h1 className='text-l font-bold text-charcoal capitalize'>{e.name}</h1>
            <p className=' text-slateGray font-light'> Casablanca,Anfa</p>
          </div>

        </div>
          ) ) ) : null
        }

      </div>
      
      
      
      
      
    )}
    </div>
  )
}

export default LeftSideBar

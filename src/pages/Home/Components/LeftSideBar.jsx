




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
import { IoAdd } from "react-icons/io5";
const LeftSideBar = () => {
  const { users, image, coverImage, suggestedfriends, setSuggestedFriends}  = useAuth()
  let connectedUser = useParams()
  let newUsername = connectedUser["username"]

  let loggedInUser = users.find((e) => e.isLoggedIn === true);

  const navigate = useNavigate();
  const location = useLocation();
  // kan3tiw chemin fin mabghinash tab9a tla3 my friends
  let isGroupsPage = location.pathname === '/groups';

  let isMarketPlace = location.pathname === '/market';
  let iswatchVideo = location.pathname === '/watch-video';

  const { darkmode, setDarkmode } = useAuth();  

  let filterConnectedUser = users.find((e) => e.isLoggedIn === true);
  // const { logedUser } = useAuth();
  return (
    
    <div className={`pt-5 ps-10 ${darkmode && "bg-[#242424]" }`}  >
      <div className={` text-2xl gap-5 flex flex-col ${darkmode ? 'text-[#fff]':' text-slateGray' }`} >
      <div  onClick={() => {navigate(`/${loggedInUser.name}`)}} className={`flex justify-start items-center  gap-3  cursor-pointer`}><div className= {` p-2 rounded-full ${darkmode ? 'bg-[#fff] text-black':'bg-[#d3b7e0] text-white'}`}><IoHomeOutline className='' /></div>  <h2>Feed</h2></div>
      <div onClick={() => {navigate(`/market`)}} className='flex justify-start items-center gap-3   cursor-pointer'><div className={` p-2 rounded-full ${darkmode ? 'bg-[#fff] text-black':'bg-[#f3c1db] text-white'}`}><FiShoppingBag /></div> <h2>MarketPlace</h2></div>
      <div onClick={() => {navigate('/watch-video')}} className='flex justify-start items-center  gap-3   cursor-pointer'> <div className={` p-2 rounded-full  ${darkmode ? 'bg-[#fff] text-black':'bg-[#db84b9] text-white'}`}><MdOndemandVideo /></div> <h2>Video</h2></div>
      <div className='flex justify-start items-center  gap-3   cursor-pointer'><div className={` p-2 rounded-full ${darkmode ? 'bg-[#fff] text-black':'bg-[#ce629f] text-white'} `}><FiMessageSquare /></div> <h2>Messages</h2></div>
      <div onClick={() => {navigate('/myfavorite')}} className='flex justify-start items-center  gap-3   cursor-pointer '><div className={`p-2 rounded-full ${darkmode ? 'bg-[#fff] text-black':'bg-[#e8a9ce] text-white '}`}><CiBookmark  /> </div><h2>My Favorites</h2></div>
      <div onClick={() => {navigate('/groups')}}  className='flex justify-start items-center  gap-3   cursor-pointer'><div className={` p-2 rounded-full ${darkmode ? 'bg-[#fff] text-black':'bg-[#a675be] text-white'}`}><FaUsers /> </div><h2>Groupes</h2></div>
      <div onClick={() => {navigate('/create-group')}} className='flex justify-start items-center  gap-3   cursor-pointer'><div className={`p-2 rounded-full ${darkmode ? 'bg-[#fff] text-black':'bg-[#b58fbf] text-white'}`} ><IoAdd /> </div> <h2>Add Group</h2></div>
      </div>
      
      {!isGroupsPage && !isMarketPlace && !iswatchVideo && (
      <div className='flex flex-col pt-12 gap-5'>
        <h1 className={`text-xl font-bold ${darkmode ? 'text-white' :'text-charcoal'}`} >My Friends</h1>
        {
          filterConnectedUser ?(filterConnectedUser.friends.map((e, index) => (
            <div className='flex flex-row gap-4'>
          <img src={e.profileImage} alt="" srcset="" className='rounded-full w-[45px] h-[45px]' />
          <div className=''>
            <h1 className={`text-l font-bold capitalize ${darkmode ? ' text-white':'text-charcoal'}`} >{e.name}</h1>
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

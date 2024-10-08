import {React, useState} from 'react'
import Feeds from './Components/Feeds'
import LeftSideBar from './Components/LeftSideBar'
import RightSideBar from './Components/RightSideBar'
import Navbar from '../../layout/navbar'
import { useAuth } from '../../context'
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const logedUser = useAuth()

  const { darkmode, setDarkmode } = useAuth();  
  const [isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (

    <>
    <Navbar/>
    <div className={`h-[100vh] flex flex-col md:flex-row relative ${darkmode && "bg-[#242424]"}`}>
       <button 
          className='md:hidden p-2 absolute top-[-8vh] left-0 z-20' 
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>

       <div className={`md:flex md:relative z-30 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
          <LeftSideBar />
        </div>

        {isSidebarOpen && (
          <div 
            className='fixed  inset-0 z-10 md:hidden'
            onClick={toggleSidebar}
          ></div>
        )}

        <div className={`flex-1 mx-4 md:mx-0 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'hidden md:block' : 'block'}`}>
          <Feeds />
        </div>

        <div className='hidden md:block'>
          <RightSideBar />
        </div>
    </div>
    </>
  )
}

export default Home

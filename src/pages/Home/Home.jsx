import React, { useState } from 'react';
import Feeds from './Components/Feeds';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import Navbar from '../../layout/navbar';
import { useAuth } from '../../context';
import { FaBars } from 'react-icons/fa'; 

const Home = () => {
  const logedUser = useAuth();
  const [isSidebarOpen, setIsSidebarOpen ] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { darkmode, setDarkmode } = useAuth();
  return (
    <>
    <Navbar/>
    <div className='flex gap-x-2'>
      <LeftSideBar />
      <Feeds />
      <RightSideBar />
    </div>
    </>
  );
}

export default Home;

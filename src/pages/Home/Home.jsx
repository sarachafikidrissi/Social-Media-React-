import React from 'react'
import Feeds from './Components/Feeds'
import LeftSideBar from './Components/LeftSideBar'
import RightSideBar from './Components/RightSideBar'
import Navbar from '../../layout/navbar'
import { useAuth } from '../../context'

const Home = () => {
  const logedUser = useAuth()

  const { darkmode, setDarkmode } = useAuth();  
  return (
    <>
    <Navbar/>
    <div className={`flex gap-x-2 h-[100vh] ${darkmode && "bg-[#242424]"}`}>
      <LeftSideBar />
      <Feeds />
      <RightSideBar />
    </div>
    </>
  )
}

export default Home

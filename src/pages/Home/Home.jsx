import React from 'react'
import Feeds from './Components/Feeds'
import LeftSideBar from './Components/LeftSideBar'
import RightSideBar from './Components/RightSideBar'
import Navbar from '../../layout/navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='flex gap-x-2'>
      <LeftSideBar />
      <Feeds />
      <RightSideBar />
    </div>
    </>
  )
}

export default Home

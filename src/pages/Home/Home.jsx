import React from 'react'
import Feeds from './Components/Feeds'
import LeftSideBar from './Components/LeftSideBar'
import RightSideBar from './Components/RightSideBar'

const Home = () => {
  return (
    <div>
      <LeftSideBar />
      <Feeds />
      <RightSideBar />
    </div>
  )
}

export default Home

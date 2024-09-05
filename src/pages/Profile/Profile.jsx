import React from 'react'
import LeftSideBar from '../Home/Components/LeftSideBar'
import Navbar from '../../layout/navbar'
import { useAuth } from '../../context'

const Profile = () => {
  const {users}=useAuth()

  return (
    <div>
    <Navbar/>
    <div className='flex'>
    <LeftSideBar  />
    <div className='bg-[#fcfc] w-[80%] ms-auto flex'>
      <div className='bg-black w-[30vw] h-[45vh] flex justify-center items-center '>
          <div className='bg-slate-50 w-[60%] h-[85%] rounded-full'></div>
      </div>
      <div className='bg-slate-900 w-[50vw] h-[45vh]'>
        {users.map((e)=>
          <div className='text-white'>
          <h1 className='text-white font-bold text-2xl'>{e.name} -{e.username}</h1>
          <h1>{
            e.userPost.length
          } post</h1>
          </div>

          )}
          </div>
    </div>
    </div>
    </div>
  )
}

export default Profile

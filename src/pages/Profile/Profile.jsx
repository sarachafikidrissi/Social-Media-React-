import React from 'react'
import LeftSideBar from '../Home/Components/LeftSideBar'
import Navbar from '../../layout/navbar'
import { useAuth } from '../../context'
import { FaPlus } from 'react-icons/fa'

const Profile = () => {
  const {users}=useAuth()
  console.log(users);
  
  return (
    <div>
    <Navbar/>
    <div className='flex '>
    <LeftSideBar  />
    <div className='bg-[rgba(229,220,220,0.72)] w-[80%] ms-auto  '>
    {users.map((e)=>
      <>
     <div className='flex'>
     <div className=' w-[30vw] h-[45vh] flex justify-center items-center '>
     <div className='bg-slate-50 w-[60%] h-[85%] rounded-full'></div>
 </div>
 <div className=' w-[50vw] h-[45vh] flex items-center'>
     <div className=' flex flex-col gap-5 '>
     <h1 className=' text-2xl capitalize'>{e.name} -{e.username}</h1>
     <div className='flex  gap-5'>
     <h1>{
       e.userPost.length
     } Post</h1>
     <h1>{e.username.length} Followers</h1>
     <h1>{e.username.length} Following</h1>
     </div>
     <h1>{e.email}</h1>
     <h1>{e.birthday}</h1>
     </div>

     </div>
     </div>
     <div className='bg-[#a8a8a835] w-[6vw] h-[12vh] rounded-full relative ms-[6rem]  '>
     <FaPlus className='absolute bottom-2.5 left-3 text-6xl'/>
     </div>
     <div className='flex gap-5  flex-wrap  ms-[1rem]'>
     <div className=' w-[24vw] h-[30vh] rounded-md  '>
        <div className='bg-white flex gap-5 rounded-t-md border-b-4 p-2'>
          <div className='profil bg-[#fcfc] w-[4vw] h-[8vh] rounded-full'>
          </div>
          <div className='nameProfil capitalize '>{e.name}-{e.username}</div>
        </div>
        <div className=' w-[100%]  '>
            {e.userPost.image}
        </div>
        
     </div>
    
     </div>
     </>
    )}
          
          
    </div>
    </div>
    </div>
  )
}

export default Profile

import React from 'react'
import { Images } from '../../constants'
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

const MarketPlace = () => {
  return (
    <div className=''>
      <div className=' flex flex-col justify-center items-center gap-10'>
        {/* <div><h1 className=' font-bold text-xl flex justify-start '>MarketPlace</h1></div> */}
        <div className=' '><input type="text" className=' w-[25vw] p-1.5 rounded-3xl bg-slateGray text-white flex justify-center placeholder:text-white placeholder:ps-6' placeholder='Saerch products' /></div>
        <div className=' flex flex-row text-white gap-5 justify-center items-center py-5'>
                    <div className='text-xl bg-[#8fa3b0] py-2 px-7 rounded-2xl flex flex-row items-center gap-2 hover:bg-[#658292]' > <h1></h1></div>
                    <div className='text-xl bg-[#8fa3b0] py-2 px-7 rounded-2xl flex flex-row items-center gap-2 hover:bg-[#658292]'><h1></h1></div>
                    <div className='text-xl bg-[#8fa3b0] py-2 px-7 rounded-2xl flex flex-row items-center gap-2 hover:bg-[#658292]'> <h1></h1></div>
                    <div className='text-xl bg-[#8fa3b0] py-2 px-7 rounded-2xl flex flex-row items-center gap-2 hover:bg-[#658292]'> <h1></h1></div>
                </div>
        <div className='flex justify-center  flex-col max-w-lg p-5 m-3 bg-white rounded-lg shadow-md '>
        <div className='flex items-center mb-4 gap-2'>
          <img className='w-12 h-12 rounded-full' src={Images.profile1} alt='User'/>
          <input type='text' placeholder="Ajouter un Article" className='ml-3 w-[90%] h-[20vh] py-2 px-3 border rounded-lg focus:ring-pink'/>
        </div>
        <div className='flex  items-center gap-10 justify-between'>
          <div className='flex justify-center gap-10 ps-20'>
          <div className='flex items-center text-slateGray hover:text-pink gap-2 cursor-pointer text-xl'>
          <MdOutlineVideoCameraFront />
            <span>Video</span>
            <input type='file' accept='video/' className='hidden' />
          </div>
          < div className='flex items-center text-slateGray hover:text-pink gap-2 cursor-pointer text-xl'>
          <CiImageOn />
            <span>Photos</span>
            <input type='file' accept='image/'  className='hidden' />
          <div/>
        </div>
          </div>
         
        <div className=''>
        <button  className='text-white bg-pink py-1 px-4 rounded-xl hover:bg-pink text-xl'>Add Article</button>
        </div>
      </div>
    </div>
      </div>
     
    </div>

  )
}

export default MarketPlace

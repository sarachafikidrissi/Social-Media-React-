import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/friendwave-removebg-preview.png'
import { useRef } from 'react'

const LoginPage = () => {
  const navigate =useNavigate()
  const inputRef =useRef(null)
  const [image,setImage]=useState("")
  const inputRefCover =useRef(null)
  const [cover,setCover]=useState("")
  const handleClick =()=>{
    inputRef.current.click()
  }
  const handleChange =(event)=>{
    const file =event.target.files[0]
    console.log(file);
    setImage(event.target.files[0])

  }




  const handlCOverClick =()=>{
    inputRefCover.current.click()
  }
  const handlChangeCover =(event)=>{
    const filesss =event.target.files[0]
    console.log(filesss);
    setCover(event.target.files[0])

  }
  return (
    <div className=''>
    <div className='navbar flex justify-between  px-5 '>
      <div className='leftNav flex gap-52'>
        <img width={50} src={logo}/>
        <div class="relative  items-center hidden md:inline-flex">
        <input type="text" placeholder="Search" class="border border-gray-200 rounded-md py-1 px-2 w-[35vw]"/>
        <svg class="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
      </div>
      
      
      <div class="group relative cursor-pointer py-2">

      <div class="flex items-center justify-between space-x-5 bg-white px-4">
      <h3>user user</h3>
          <img width={50} src={logo} className='menu-hover rounded-full  bg-white '/>
         
      </div>

      <div class="invisible absolute z-50 flex w-full flex-col bg-[#fcfc] py-3 px-4 text-gray-800 shadow-xl group-hover:visible">
            
            <a  className=' hover:bg-[#a40ea46d] border-b-2 border-red-700 text-center text-1xl'><Link to={"/profil"}>Profile</Link></a>
            <a className=' hover:bg-[#a40ea46d] border-b-2 border-red-700 text-center text-1xl'><Link to={"/editProfil"}>Edit</Link></a>
            <a className=' hover:bg-[#a40ea46d] border-b-2 border-red-700 text-center text-1xl'><Link to={"/login"}>logout</Link></a>
      </div>
  </div>
 
    </div>
    <section class="py-10 my-auto dark:bg-gray-900 ">
    <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div
            class="lg:w-[88%]  xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40" >
            
            <div class="">
            {/* create btn kadik lhome page */}
            <h1 className=' text-end text-4xl cursor-pointer'><span onClick={() => navigate('/')} className='hover:text-red-600'>x</span></h1>
            
                <h1
                    class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                    Profile
                </h1>
                <h2 class="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
                <form>
                {/* create bg cover */}
                    <div>
                        <div className='bg-black w-full h-[40vh] relative' onClick={handlCOverClick} >
                        {  cover ? <img src={URL.createObjectURL(cover)} className='w-full h-[40vh]' /> : <div  className='w-full h-[40vh]'></div>   }
                        <input type='file' ref={inputRefCover} onChange={handlChangeCover} className='hidden' />
                        </div>
                        <div className='w-[15vw] h-[30vh] rounded-full absolute bottom-36 left-[33rem]' onClick={handleClick}>
                        {  image ? <img src={URL.createObjectURL(image)} className='h-[200px] w-[200px] rounded-full' /> : <div  className='h-[200px] w-[200px] rounded-full bg-slate-300'></div>   }
                        <input type='file' ref={inputRef} onChange={handleChange} className='hidden' />
                        </div>
                    </div>
                    
                    <h2 class="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image
                    </h2>
                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                    
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2 dark:text-gray-300">First Name</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" dark:text-gray-300">User Name</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="User Name"/>
                        </div>
                    </div>

                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full">
                            <h3 class="dark:text-gray-300 mb-2">Sex</h3>
                            <select
                                    class="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                    <option disabled value="">Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                        </div>
                        <div class="w-full">
                            <h3 class="dark:text-gray-300 mb-2">Date Of Birth</h3>
                            <input type="date"
                                    class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"/>
                        </div>
                    </div>
                    <div class="w-full rounded-lg bg-[#ea4c89] mt-4 text-white text-lg font-semibold">
                        <button type="submit" class="w-full p-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  </div>
  )
}

export default LoginPage

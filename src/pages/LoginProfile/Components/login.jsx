import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useAuth } from '../../../context'

const LoginPage = () => {
    const {users}=useAuth()
    console.log(users);
    
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
                    <div className='pb-10 relative'>
                        <div className='bg-black w-full h-[40vh] ' onClick={handlCOverClick} >
                        {  cover ? <img src={URL.createObjectURL(cover)} className='w-full h-[40vh]' /> : <div  className='w-full h-[40vh]'></div>   }
                        <input type='file' ref={inputRefCover} onChange={handlChangeCover} className='hidden' />
                        </div>
                        <div className='w-[15vw] h-[30vh] rounded-full absolute bottom-0 translate-y-[-50%] left-[50%] translate-x-[-50%] ' onClick={handleClick}>
                        {  image ? <img src={URL.createObjectURL(image)} className='h-[200px] w-[200px] rounded-full' /> : <div  className='h-[200px] w-[200px] rounded-full bg-slate-300'></div>   }
                        <input type='file' ref={inputRef} onChange={handleChange} className='hidden' />
                        </div>
                    </div>
                    
                   
                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                    
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2 dark:text-gray-300">First Name</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name" defaultValue={users.name}/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" dark:text-gray-300">User Name</label>
                            <input type="text"
                                    class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="User Name" 
                                    defaultValue={users.email}/>
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

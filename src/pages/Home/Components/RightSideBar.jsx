import React, { useEffect, useState } from "react";
import { assets } from "../../../assets";
import { CiSearch  } from "react-icons/ci";
import { useAuth } from "../../../context";

const RightSideBar = () => {

  const [activeStories, setActiveStories] = useState({});

  const { users } = useAuth()

  // Log users only when it changes
  useEffect(() => {
    console.log(users);
  }, [users]); 

  let a = 1
  let b = 2

  

  let values = Object.values(activeStories)
  let state = values.some(e => e)

  const toggleStory = (index) => {
    if(!state){
      setActiveStories((prev) => ({
        ...prev,
        [index]: !prev[index], 
      }));
      
      state = false
    }
  };

  useEffect(() => {
    let timeout;
    if (activeStories) {
      timeout = setTimeout(() => {
        setActiveStories({});
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [activeStories])
  return (
    <div className="w-[30%] p-2 flex flex-col gap-y-4 relative ">
      {/* search stories */}

      <div className="w-full p-2 shadow-md relative bg-gray-50 ">
        <CiSearch className="text-2xl font-bold text-gray-400 absolute top-[50%] left-4 translate-y-[-50%]" />
        <input type="text" className="w-full ps-8 text-[14px] bg-transparent focus:outline-none placeholder-gray-500 border-none" placeholder="Search Stories" />
      </div>

      {/* stories*/}


        
      <div className="flex no-scrollbar  space-x-2 ps-2 py-2">
        <div key={a} className="flex  w-[80px] h-[80px] rounded-full  outline outline-offset-2 outline-2 flex-shrink-0 cursor-pointer relative">
          <img
          onClick={() => toggleStory(a)}
           src={assets.test} alt="" className="w-full" />
           { state === true  && (
          activeStories[a] && <div className="bg-white border-2 border-red-400 w-[20vw] h-[50vh] rounded-md absolute top-0 z-10  ">
            <img src={assets.test} alt="" />
            
          </div>)
        }
        </div>
        <div key={b} className=" w-[80px] h-[80px] rounded-full flex-shrink-0 cursor-pointer relative">
          <img onClick={() => toggleStory(b)} src={assets.test} alt="" className="w-full" />
          { state === true && (
          activeStories[b] && <div  className={`bg-white border-2 border-red-400 w-[20vw] h-[50vh] rounded-md absolute top-0`}>
            <img  src={assets.barbie} alt="" />
          </div>)
        }
        </div>
        <div className=" w-[80px] h-[80px] rounded-full flex-shrink-0 cursor-pointer">
          <img src={assets.test} alt="" className="w-full" />
        </div>
        <div className=" w-[80px] h-[80px] rounded-full flex-shrink-0 cursor-pointer">
          <img src={assets.test} alt="" className="w-full" />
        </div>
      </div>


      {/* Suggested friend */}
      <div className="bg-red-400p-2 flex flex-col gap-y-4 shadow-md p-4 rounded-md">
        <div className="  flex justify-between  pb-3 border-b">
        <h1 className="text-slateGray  font-[600]">You might like? </h1>
        <span className="text-royalBlue font-medium">See all</span>
        </div>


        <div className="">
        <div className=" rounded-full flex gap-x-4 items-center  ">
          <img src={assets.test} alt="" className="w-[50px] h-[50px] " />
          <span className="text-gray-300 font-bold">Full Name</span>
        </div>
        <div className="flex justify-around pt-5">
          <button className="bg-pink py-2 px-10 rounded-md text-white hover:bg-white hover:text-pink hover:border-pink hover:border-2">Follow</button>
          <button className="py-2 px-10 rounded-md  text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white">Ignore</button>
        </div>
        </div>
        {/* 2 */}
        <div className="">
        <div className=" rounded-full flex gap-x-4 items-center  ">
          <img src={assets.test} alt="" className="w-[50px] h-[50px] " />
          <span className="text-gray-300 font-bold">Full Name</span>
        </div>
        <div className="flex justify-around pt-5">
          <button className="bg-pink py-2 px-10 rounded-md text-white hover:bg-white hover:text-pink hover:border-pink hover:border-2">Follow</button>
          <button className="py-2 px-10 rounded-md  text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white">Ignore</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

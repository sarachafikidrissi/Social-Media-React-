import React, { useEffect, useState } from "react";
import { assets } from "../../../assets";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../../../context";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';






const RightSideBar = () => {

  const location = useLocation();

  const navigate = useNavigate();

 let isFavorite = location.pathname === "./myfavorite"

  const {users, setUsers, suggestedfriends, setSuggestedFriends, friendsPost, setFriendsPost}  = useAuth()
  const [stories, setStories] = useState([]);
  const [activeStories, setActiveStories] = useState({});
  const [state, setState] = useState(false);
  const [storyTimeouts, setStoryTimeouts] = useState({});

  let filterConnectedUser = users.find((e) => e.isLoggedIn == true);
  console.log(filterConnectedUser);


    //user friends


  const toggleStory = (index) => {
    if (storyTimeouts[index]) {
      clearTimeout(storyTimeouts[index]);
    }

    const updatedActiveStories = { ...activeStories };
    updatedActiveStories[index] = true;
    setActiveStories(updatedActiveStories);

    setState(true);

   
    const timeoutId = setTimeout(() => {
      const updatedActiveStoriesAfterTimeout = { ...updatedActiveStories };
      updatedActiveStoriesAfterTimeout[index] = false;
      setActiveStories(updatedActiveStoriesAfterTimeout);
      setState(false);
    }, 5000);

    const updatedStoryTimeouts = { ...storyTimeouts };
    updatedStoryTimeouts[index] = timeoutId;
    setStoryTimeouts(updatedStoryTimeouts);
  };




  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newStory = {
          src: reader.result, // Uploaded image
          createdAt: Date.now(), // Capture the current time of upload
        };
        const newStories = [...stories, newStory]; // Add the new story to the array
        setStories(newStories); // Update stories state
        
        // Call removeStoryAfterTime after the new story is added
        removeStoryAfterTime(newStories.length - 1); // Use the index of the new story
      };
      reader.readAsDataURL(file);
    }
  };


  const removeStoryAfterTime = (index) => {
    setTimeout(() => {
      const updatedStories = [...stories];
      updatedStories.splice(index, 1); 
      setStories(updatedStories);
    }, 180000); 
  };





 console.log(users);

 let otherUsers = users.filter(e => e.isLoggedIn === false)
 let userFriends = users.find((user) => user.isLoggedIn).friends
 console.log(otherUsers);
 console.log(userFriends);
 let a = []
//  userFriends
otherUsers.forEach(e => {
  if(!userFriends.includes(e)){
    a.push(e)
  }
})

  useEffect(() => {
    // setSuggestedFriends(users.filter((e) => e.isLoggedIn === false))
    setSuggestedFriends(a)
  }, [])

  const handlFollow = (index) => {
    const currentUsers = [...users];
    const loggedInUserIndex = currentUsers.findIndex((user) => user.isLoggedIn);
    if (loggedInUserIndex !== -1 && suggestedfriends[index]) {
      const loggedInUser = currentUsers[loggedInUserIndex];
      const suggestedFriend = suggestedfriends[index];
      
      loggedInUser.friends = [...loggedInUser.friends, suggestedFriend];
      currentUsers[loggedInUserIndex] = loggedInUser;
      let user2 = currentUsers.findIndex(e => e === suggestedfriends[index])
      currentUsers[user2].friends.push(loggedInUser)
      console.log(currentUsers[user2]);
      setUsers(currentUsers);
      suggestedfriends.splice(index, 1)

    }
  };



  const handleIgnore = (index) => {
    let newTable = [...suggestedfriends]
    console.log(suggestedfriends);
    newTable.splice(index, 1)
    setSuggestedFriends(newTable)
  }


  return (
    <div className="w-[25vw] p-2 flex flex-col gap-y-4">

      {/* Stroy */}

      <div className="">
      {/* Stories Display */}
      <div className="flex no-scrollbar space-x-5 ps-2 py-2">
      <div className="w-[80px] h-[80px] rounded-full bg-[#b58fbf]  flex-shrink-0 cursor-pointer relative">
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex justify-center items-center w-full h-full">
            <span className="text-sm text-white font-bold"><IoAddCircleOutline className="text-8xl" /></span>
          </div>
        </div>
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex w-[80px] h-[80px]  rounded-full outline outline-offset-2 outline-[#b58fbf] outline-2 flex-shrink-0 cursor-pointer relative"
          >
            <img
              onClick={() => toggleStory(index)}
              src={story.src}
              alt={`Story ${index}`}
              className="w-full rounded-full"
            />
            {state === true && activeStories[index] && (
              <div className="bg-white border-4 w-[20vw] border-[#83375b] h-[50vh] rounded-md absolute top-0 z-10">
                <img className="h-full object-cover rounded-md" src={story.src} alt={`Active Story ${index}`} />
              </div>
            )}
          </div>
        ))}
      </div>
      </div>

      {
        
        <div className={`bg-red-400p-2 flex flex-col gap-y-4 shadow-md ${suggestedfriends.length == 0 ? 'p-0' : 'p-4'  }  rounded-md`}>
          
            <div className={`  flex justify-between  pb-3  ${suggestedfriends.length == 0 ? 'border-b-0' : 'border-b'  } `}>
              {

                suggestedfriends.length > 0 ? <div className="flex flex-row justify-between w-full">
                <h1 className="text-slateGray  font-[600]">You might like? </h1>
                <span className="text-royalBlue font-medium">See all</span>
              </div> : <div className="p-4">
              <h1 className="text-slateGray  font-[600] text-center">No Suggested Friends</h1>
            </div>

            
              }
          </div> 
          
          

          <div className="">
            {  suggestedfriends ? suggestedfriends.map((e, index) => (
              <div key={index} className="border-b-2 pb-5">
                <div className=" rounded-full flex gap-x-2 items-center  ">
                  <img src={e.profileImage} alt="" className="w-[50px] h-[50px]  rounded-full " />
                  <span className=" font-bold">
                    {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between pt-5">
                  <button onClick={() => {handlFollow(index)} } className="bg-btnColor hover:bg-hoverBtn py-2 px-10 rounded-md text-white ">
                    Follow
                  </button>
                  <button onClick={() => {handleIgnore(index)}} className="py-2 px-10 rounded-md  text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white">
                    Ignore
                  </button>
                </div>
              </div>
            )) : null }
          </div>
        </div>
        }
      
    </div>
  );
}

export default RightSideBar;
import React, { useEffect, useState } from "react";
import { assets } from "../../../assets";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../../../context";





const RightSideBar = () => {



  const {users, setUsers}  = useAuth()
  const [stories, setStories] = useState([]);
  const [activeStories, setActiveStories] = useState({});
  const [state, setState] = useState(false);
  const [storyTimeouts, setStoryTimeouts] = useState({});

  let filterConnectedUser = users.find((e) => e.isLoggedIn == true);
  console.log(filterConnectedUser);

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



  const [suggestedfriends, setSuggestedFriends] = useState([])

 console.log(users);

  useEffect(() => {
    setSuggestedFriends(users.filter((e) => e.isLoggedIn === false))
  }, [])

  const handlFollow = (index) => {
    const currentUsers = [...users];
  
    const loggedInUserIndex = currentUsers.findIndex((user) => user.isLoggedIn);

  
    if (loggedInUserIndex !== -1 && suggestedfriends[index]) {
      const loggedInUser = currentUsers[loggedInUserIndex];
      const suggestedFriend = suggestedfriends[index];

      
  
      loggedInUser.friends = [...loggedInUser.friends, suggestedFriend];
  
      currentUsers[loggedInUserIndex] = loggedInUser;
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
    <div className="w-[30%] p-2 flex flex-col gap-y-4">

      {/* Stroy */}

      <div className="">
      {/* Stories Display */}
      <div className="flex no-scrollbar space-x-5 ps-2 py-2">
      <div className="w-[80px] h-[80px] rounded-full bg-[#83375b]  flex-shrink-0 cursor-pointer relative">
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex justify-center items-center w-full h-full">
            <span className="text-sm text-white font-bold">Add Story</span>
          </div>
        </div>
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex w-[80px] h-[80px]  rounded-full outline outline-offset-2 outline-pink outline-2 flex-shrink-0 cursor-pointer relative"
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
            {suggestedfriends ? suggestedfriends.map((e, index) => (
              <div key={index}>
                <div className=" rounded-full flex gap-x-4 items-center  ">
                  <img src={e.profileImage} alt="" className="w-[50px] h-[50px]  rounded-full " />
                  <span className="text-gray-300 font-bold">
                    {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                  </span>
                </div>
                <div className="flex justify-around pt-5">
                  <button onClick={() => {handlFollow(index)} } className="bg-pink py-2 px-10 rounded-md text-white hover:bg-white hover:text-pink hover:border-pink hover:border-2">
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
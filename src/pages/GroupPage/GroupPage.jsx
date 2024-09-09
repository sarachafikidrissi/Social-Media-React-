import React, { useState, useEffect } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoMdPhotos } from "react-icons/io";
import { IoBookmark, IoHeart, IoVideocam } from "react-icons/io5";
import LeftSideBar from '../Home/Components/LeftSideBar';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useAuth } from '../../context';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../layout/navbar';
import { Carousel } from 'flowbite-react';
const GroupPage = () => {
    const navigate = useNavigate()
    const {groups, setGroups, users, setUsers, enteredGroup, setEnteredGroup, joined, setJoined} = useAuth()

    console.log(enteredGroup);



    let filterConnectedUser = users.find((e) => e.isLoggedIn == true);
    console.log(filterConnectedUser);

  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  
  // Handling image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  // Handling video upload
  const handleVideoUpload = (event) => {
    setVideo(URL.createObjectURL(event.target.files[0]));
  };

  // Handling post submission
  const submitPost = () => {
    if (content || images.length > 0 || video) {
      const newPost = { content, images, video, comments: [], likes: false, favoris: false };
      setPosts([newPost, ...posts]); 
      setImages([]); 
      setVideo(null); 
      setContent('');
    }
  };

  // Function to handle liking a post
  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes = !newPosts[index].likes; 
    setPosts(newPosts);
  };

  // Function to handle favoriting a post
  const handleFavoris = (index) => {
    const newPosts = [...posts];
    newPosts[index].favoris = !newPosts[index].favoris; 
    setPosts(newPosts);
  };

  // Function to open the comment modal
  const openCommentModal = (index) => {
    setCurrentPostIndex(index);
    setShowModal(true);
  };

  // Function to handle adding a comment
  const handleAddComment = () => {
    if (commentInput.trim()) {
      const newPosts = [...posts];
      newPosts[currentPostIndex].comments.push(commentInput);
      setPosts(newPosts);
      setCommentInput('');
      setShowModal(false);
    }
  };

  // Function to toggle the settings dropdown
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };
  console.log(1);
  

  const [suivre, setSuivre] = useState(true)
  const nePlusSuivre = () => {
    let newUsers = [...users]
    let newJoined = [...joined]
    let newGroup = [...groups]
    let userWhoJoinedgroup = newUsers.find(e => e === filterConnectedUser)
   let groupToDelete = userWhoJoinedgroup.groupsJoined.findIndex(e => e === enteredGroup)
   newGroup.push(userWhoJoinedgroup.groupsJoined[groupToDelete])
  let groupInjoinedArr = joined.findIndex(e => e == userWhoJoinedgroup.groupsJoined[groupToDelete])
    newJoined.splice(groupInjoinedArr, 1)
   userWhoJoinedgroup.groupsJoined.splice(groupToDelete, 1)
   setJoined(newJoined)
   setUsers(newUsers)
   setGroups(newGroup)
  }
  // Carousel component
const Carousel = ({ images, autoSlide = true, slideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (!autoSlide) return;
  
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, slideInterval);
  
      return () => clearInterval(interval);
    }, [currentIndex, images.length, autoSlide, slideInterval]);
  
    return (
      <div className="relative w-full h-80">
        <img
          src={images[currentIndex]}
          alt={`Post Image ${currentIndex}`}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    );
  };
  return (
    <>
    <Navbar />
    <div className='flex '>
     <div className='w-[25%]'>
        <LeftSideBar/>
      </div>
    <div className="flex gap-5 items-center w-[100%]  justify-center">
    <div className=' pb-8 w-full  gap-10 '>
    {/* Group Header */}
    <img
        className='w-[100%] h-[50vh] rounded-sm object-center'
        src={enteredGroup.imgGrp}
        alt='User'
    />
    <div >
        <h1 className="text-4xl from-neutral-600 p-5">{enteredGroup.nameGrp}</h1>
       
    </div>
    <div className='flex justify-between items-center px-10'>
        <div><p className='flex gap-2 items-center justify-center '> <HiOutlineUserGroup color="#c17d7d" size="30px" />
        {enteredGroup.membres} Membres</p></div>
    <div className='flex justify-evenly gap-5 '>
        <button className="mt-4 px-6 py-2 
   bg-btnColor hover:bg-hoverBtn
    hover:from-[#af7878] hover:to-[#ae385e]  
    text-white rounded-lg">{suivre == true ? `+Inviter` : `Join`}</button>
        <button className="mt-4 px-6 py-2 
   bg-btnColor hover:bg-hoverBtn
    hover:from-[#af7878] hover:to-[#ae385e] 
    text-white rounded-lg">Share</button>
        <div className="relative ">
            <button
                className="mt-4 px-6 py-2 
       bg-btnColor hover:bg-hoverBtn
    hover:from-[#af7878] hover:to-[#ae385e] 
    text-white rounded-lg"
                onClick={toggleSettings}
              >
                Setting
            </button>
            {showSettings && (
                <div className="  absolute right-0 w-[15vw] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col gap-y-3">
                    <button onClick={() => {setSuivre(false); nePlusSuivre()}} className="
             block w-full text-center  font-medium py-2 cursor-pointer hover:bg-[#e7daed] hover:text-white hover:font-bold hover:rounded-md"> Ne plus suivre </button>
              <button onClick={() => {navigate('/groups')}} className=" 
             block w-full text-center  font-medium py-2 cursor-pointer hover:bg-[#e7daed] hover:text-white hover:rounded-md hover:font-bold "> Quitter le groupe </button>
                </div>
              )}
            </div>
          </div>
        </div>

    {/* Create Post */}
    <div className=" w-[70%] p-4 rounded-lg  bg-[#FAF2EA] shadow-md mt-4 mx-40">
    <div className='flex items-center mb-4'>
              <img
                className='w-10 h-10 rounded-full'
                src={filterConnectedUser.profileImage}
                alt='User'
              />
              <div className='ml-3'>
                <h3 className='font-semibold capitalize'>{filterConnectedUser.name}</h3>
                <p className='text-slateGray text-sm'>Casablanca, Morocco</p>
              </div>
            </div>
        <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="ml-3 mb-4 w-full py-2 px-3 border rounded-full focus:ring-pink"
          />
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <IoMdPhotos /> <span>Photo</span>
              <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <IoVideocam /><span>Video</span>
              <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
            </label>
            <button onClick={submitPost} className="bg-gradient-to-b from-[#c17d7d] to-[#d76a83] hover:from-[#af7878] hover:to-[#ae385e] text-white px-4 py-2 rounded-lg">
              Post
            </button>
          </div>
        </div>

          {/* Post Feed */}
          <div className="mt-4">
          {posts.map((post, index) => (
            <div key={index} className="w-[70%]  bg-[#FAF2EA] p-4 rounded-lg shadow-md mb-4 mx-40">
              <div className='flex items-center mb-4'>
                <img
                  className='w-10 h-10 rounded-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NV9q05F16g50huet5CWXj-AtbmH30NTR4A&s'
                  alt='User'
                />
                <div className='ml-3'>
                  <h3 className='font-semibold'>Rajae Bensafy</h3>
                  <p className='text-slateGray text-sm'>Casablanca, Morocco</p>
                </div>
              </div>
              <p>{post.content}</p>
              {post.images && post.images.length > 0 && (
                <Carousel images={post.images} />
              )}
              {post.video && (
                <video src={post.video} controls className="w-full h-auto rounded-lg shadow-lg mt-4"></video>
              )}
              <div className='flex justify-between items-center border-t pt-2'>
                <button
                  className='flex items-center text-slateGray hover:text-royalBlue'
                  onClick={() => handleLike(index)}
                >
                  <IoHeart color={post.likes ? 'red' : 'black'} />
                  Like
                </button>
                <button
                  className='flex items-center text-slateGray hover:text-royalBlue'
                  onClick={() => openCommentModal(index)}
                >
                  <FaRegCommentAlt />
                  Comments {post.comments.length > 0 && `(${post.comments.length})`}
                </button>
                <button
                  className='flex items-center text-slateGray hover:text-royalBlue'
                  onClick={() => handleFavoris(index)}
                >
                  <IoBookmark color={post.favoris ? 'yellow' : 'black'} />
                  Favoris
                </button>
              </div>
              {post.comments.length > 0 && (
              <div className='mt-3'>
                {post.comments.map((comment, commentIndex) => (
                  <p key={commentIndex} className='text-slateGray text-sm mb-4'>
                    {comment}
                  </p>
                ))}
              </div>
            )}
            </div>
          ))}
        </div>

        {/* Comment Modal */}
        {showModal && (
          <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 max-w-md w-full'>
              <h2 className='text-lg font-semibold mb-4'>Add a Comment</h2>
              <textarea
                className='w-full p-2 border border-gray-300 rounded-lg mb-4'
                rows='4'
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder='Write your comment here...'
              ></textarea>
              <div className='flex justify-end gap-2'>
                <button
                  className='px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400'
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                  onClick={handleAddComment}
                >
                  Submit
                </button>
              </div>
            </div>
        </div>
    )}
</div>
</div>
</div>
</>
  )
}

export default GroupPage;

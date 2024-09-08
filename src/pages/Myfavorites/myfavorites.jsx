import React, { useState } from 'react';
import LeftSideBar from '../Home/Components/LeftSideBar';
import { useAuth } from '../../context';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoIosPhotos } from 'react-icons/io';
import { IoBookmark, IoHeart, IoVideocam } from 'react-icons/io5';
import { FaTrash } from "react-icons/fa6";
import RightSideBar from '../Home/Components/RightSideBar';
import Navbar from '../../layout/navbar';

const MyFavorites = () => {
    const [tasks, setTasks] = useState([]);
    const [inputChange, setInputChange] = useState('');
    const [selectedImage, setSelectedImage] = useState(null); 
    const [selectedVideo, setSelectedVideo] = useState(null); 
    const [showModal, setShowModal] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
    const [commentInput, setCommentInput] = useState('');


    const {post, setPost, users} = useAuth()


    let filterConnectedUser = users.find((e) => e.isLoggedIn == true);
    console.log(filterConnectedUser);


    const date = new Date();
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
  // Function to handle liking a post
  const handleLike = (index) => {
    const newTasks = [...tasks];
    newTasks[index].likes = !newTasks[index].likes  ;
    setTasks(newTasks);
 
  };
  //function to favoris a post
  const handleFavoris = (index) => {
    const newTasks = [...tasks];
    newTasks[index].favoris = !newTasks[index].favoris ;
    setTasks(newTasks);
 
  };

  //  to open the comment modal
  const openCommentModal = (index) => {
    setCurrentTaskIndex(index);
    setShowModal(true);
  };

  // Function  adding a comment
  const handleAddComment = () => {
  
    const newTasks = [...tasks];
    newTasks[currentTaskIndex].comments.push(commentInput);
    setTasks(newTasks);
    setCommentInput('');
    setShowModal(false);
  };

  // Remove Post

  const removePost = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
    



    let username=users[0].username
    console.log(username);
    



  
  const filteredUser = users.findIndex((e) => e.username === username);
//  const addedPost =users[filteredUser].userPost

//  setPost(addedPost)
//  console.log(post);
 

  return (
    <>
    <Navbar />
      <div className="flex w-full  justify-between">
        <div className="w-1/4">
          <LeftSideBar  />
        </div>
        <div className='w-[50%] me-10'>
          
        
         {filterConnectedUser.favoritePosts.map((task, index) => (
          <div key={index} className='p-4  mt-4 rounded-lg shadow-md relative '>
            <FaTrash  onClick={() => removePost(index)}  className='absolute right-4 text-xl text-pink'/>
            <div className='flex items-center mb-4'>
              <img
                className='w-10 h-10 rounded-full'
                // 
                src={filterConnectedUser.profileImage}
                alt='User'
              />
              <div className='ml-3'>
                <h3 className='font-semibold capitalize'>{filterConnectedUser.name}</h3>
                <p className='text-slateGray text-sm'>Casablanca, Morocco {timeString}</p>
              </div>
            </div>
            <div className='mb-2'>
              <p>{task.name}</p>
              {task.images[0] && <img src={task.images[0]} alt='Uploaded' className='mt-2 rounded-lg' />}
              {task.video && (
                <video controls className='mt-2 rounded-lg'>
                  <source src={task.video} type='video/mp4' />
                </video>
              )}
            </div>
            <div className='flex justify-between items-center border-t pt-2'>
              <button
                className='flex items-center text-slateGray hover:text-royalBlue'
                onClick={() => handleLike(index)}
              >
                {task.likes ?<IoHeart color='red' />:<IoHeart />}
                 Like 
              </button>
              <button
                className='flex items-center text-slateGray hover:text-royalBlue'
                onClick={() => openCommentModal(index)}
              >
                <FaRegCommentAlt />
                Comments {task.comments.length > 0 && `(${task.comments.length})`}
              </button>
              <button className='flex items-center text-slateGray hover:text-royalBlue'
                onClick={() => handleFavoris(index)}>
                  {task.favoris ? <IoBookmark color='yellow' />:<IoBookmark />}
                favoris
                
              </button>
            </div>
            {task.comments.length > 0 && (
              <div className='mt-3'>
                {task.comments.map((comment, commentIndex) => (
                  <p key={commentIndex} className='text-slateGray text-sm mb-2'>
                    {comment}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))} 
      </div>
      <RightSideBar />
      </div>
    </>
  );
};

export default MyFavorites;

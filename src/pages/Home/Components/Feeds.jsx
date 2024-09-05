import React, { useState } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoIosPhotos } from 'react-icons/io';
import { IoBookmark, IoHeart, IoVideocam } from 'react-icons/io5';
import { FaTrash } from "react-icons/fa6";
import { useAuth } from '../../../context';

import { useParams } from 'react-router-dom';

const Feeds = () => {

  let connectedUser = useParams()
let newUsername = connectedUser["username"]
newUsername = newUsername.substring(1)


const {image, setImage} = useAuth()



console.log(newUsername);
 

  const { users, setUsers } = useAuth();




  const [tasks, setTasks] = useState([]);
  const [inputChange, setInputChange] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [commentInput, setCommentInput] = useState('');
 const {posts, setPosts} = useAuth()

  const date = new Date();
  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Function  image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Function  video selection
  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedVideo(URL.createObjectURL(e.target.files[0]));
    }
  };


//update user data

// const updateParameterForUser = (username, parameter, value) => {
//   setUsers((prevUsers) =>
//     prevUsers.map(user =>
//       user.username === username
//         ? { ...user, [parameter]: value }
//         : user
//     )
//   );
// };

let userIndex = users.findIndex(e => e.username = newUsername)

  // Function to create a task (post)
  const createTask = () => {

    const newTab = [...tasks];
   
    let newTask = {
      name: inputChange,
      image: selectedImage,
      video: selectedVideo,
      likes: 0,
      favorited:false,
      comments: [],
    };
    if(inputChange || selectedImage || selectedVideo){

      users[userIndex].userPost.push(newTask)
      newTab.push(newTask);
      setTasks(newTab);
      setInputChange('');
      setSelectedImage(null);
      setSelectedVideo(null);
      
  
   
    }
  };

  // console.log(users);
  // let userPostArr = users[0].userPost
  // console.log(userPostArr);



  console.log(users);
  // console.log(tasks);
  // let index = users.findIndex(e => e.username = newUsername)
  // users[index].userPost.push(tasks)
  // console.log(users);



  //add posts to user data












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

  return (
    <div className=' w-[50%] flex flex-col  items-center my-4 bg-[#f5f5f5cc]'>
      {/* Input creating posts */}
      <div className='w-full max-w-md p-4 m-3 bg-white rounded-lg shadow-md'>
        <div className='flex items-center mb-4 gap-2'>
          <img
            className='w-10 h-10 rounded-full'
            // src={image}
            src='https://img.freepik.com/photos-gratuite/portrait-femme-souriante-espace-copie_23-2148784759.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725235200&semt=ais_hybrid'
            alt='User'
          />
          <input
            value={inputChange}
            onChange={(e) => setInputChange(e.target.value)}
            type='text'
            placeholder="What's happening?"
            className='ml-3 w-full py-2 px-3 border rounded-full focus:ring-pink'
          />
        </div>
        <div className='flex justify-between items-center gap-4'>
        <div className='flex flex-col justify-between items-center '>
        {selectedVideo && <video src={selectedVideo} alt="Preview" className='w-[100px] h-[100px] object-cover mt-2 rounded' />}
          <label className='flex items-center text-slateGray hover:text-pink gap-2 cursor-pointer'>
            <IoVideocam />
            <span>Video</span>
            <input type='file' accept='video/*' onChange={handleVideoChange} className='hidden' />
          </label>
          </div>
          <div className='flex flex-col justify-between items-center '>
            {selectedImage && <img src={selectedImage} alt="Preview" className='w-[100px] h-[100px] object-cover mt-2 rounded'    />}
          <label className='flex items-center text-slateGray hover:text-pink gap-2 cursor-pointer'>
            <IoIosPhotos />
            <span>Photos</span>
            
            <input type='file' accept='image/*' onChange={handleImageChange} className='hidden' />
          </label>
          </div>
          
          <button onClick={createTask} className='text-white bg-pink py-1 px-4 rounded-lg hover:bg-pink'>
            Post
          </button>
        </div>
      </div>

      
      <div className='w-full max-w-md'>
        
        {tasks.map((task, index) => (
          <div key={index} className='p-4 bg-white mt-4 rounded-lg shadow-md relative'>
            <FaTrash  onClick={() => removePost(index)}  className='absolute right-4 text-xl text-pink'/>
            <div className='flex items-center mb-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NV9q05F16g50huet5CWXj-AtbmH30NTR4A&s'
                alt='User'
              />
              <div className='ml-3'>
                <h3 className='font-semibold'>Rajae Bensafy</h3>
                <p className='text-slateGray text-sm'>Casablanca, Morocco {timeString}</p>
              </div>
            </div>
            <div className='mb-2'>
              <p>{task.name}</p>
              {task.image && <img src={task.image} alt='Uploaded' className='mt-2 rounded-lg' />}
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
            {/*  comments */}
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

      {/*  Modal */}
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
  );
};

export default Feeds;

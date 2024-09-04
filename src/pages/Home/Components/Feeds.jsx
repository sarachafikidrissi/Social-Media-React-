import React, { useState } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoIosPhotos } from 'react-icons/io';
import { IoBookmark, IoHeart, IoText, IoVideocam } from 'react-icons/io5';

const Feeds = () => {
  const [tasks, setTasks] = useState([]);
  const [inputChange, setInputChange] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [commentInput, setCommentInput] = useState('');

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

  // Function to create a task (post)
  const createTask = () => {
   

    const newTab = [...tasks];

    let newTask = {
      name: inputChange,
      image: selectedImage,
      video: selectedVideo,
      likes: 0,
      comments: [],
    };

    newTab.push(newTask);
    setTasks(newTab);
    setInputChange('');
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  // Function to handle liking a post
  const handleLike = (index) => {
    const newTasks = [...tasks];
    newTasks[index].likes += 1;
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

  return (
    <div className=' w-[50%] flex flex-col justify-center items-center my-4'>
      {/* Input creating posts */}
      <div className='w-full max-w-md p-4 m-3 bg-white rounded-lg shadow-md'>
        <div className='flex items-center mb-4 gap-2'>
          <img
            className='w-10 h-10 rounded-full'
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
          <label className='flex items-center text-slateGray hover:text-pink gap-2 cursor-pointer'>
            <IoVideocam />
            <span>Video</span>
            <input type='file' accept='video/*' onChange={handleVideoChange} className='hidden' />
          </label>
          <label className='flex items-center text-slateGray hover:text-pink gap-2 cursor-pointer'>
            <IoIosPhotos />
            <span>Photos</span>
            <input type='file' accept='image/*' onChange={handleImageChange} className='hidden' />
          </label>
          
          <button onClick={createTask} className='text-white bg-pink py-1 px-4 rounded-lg hover:bg-pink'>
            Post
          </button>
        </div>
      </div>

      
      <div className='w-full max-w-md'>
        {tasks.map((task, index) => (
          <div key={index} className='p-4 bg-white mt-4 rounded-lg shadow-md'>
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
                <IoHeart />
                Like {task.likes > 0 && `(${task.likes})`}
              </button>
              <button
                className='flex items-center text-slateGray hover:text-royalBlue'
                onClick={() => openCommentModal(index)}
              >
                <FaRegCommentAlt />
                Comments {task.comments.length > 0 && `(${task.comments.length})`}
              </button>
              <button className='flex items-center text-slateGray hover:text-royalBlue'>
                <IoBookmark />
                Favoris
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

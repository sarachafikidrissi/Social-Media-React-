import React, { useState, useRef, useEffect } from 'react';
import LeftSideBar from '../Home/Components/LeftSideBar';
import { CiBookmark, CiFaceSmile, CiHeart, CiSearch } from "react-icons/ci";
import { assets } from '../../assets';
import { AiOutlineLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import { FcLike } from 'react-icons/fc';
import { IoBookmark } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

const WatchVideo = () => {
  const [searchcat, setSearchcat] = useState('');
  const [arraywatch, setArraywatch] = useState([
    { id: "1", nameUser: "Ismail Horre", video: assets.nt1, likes: 120, comments: 45, imgUser: assets.profile5, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'nature' },
    { id: "2", nameUser: "Sara Idrissi", video: assets.nt2, likes: 95, comments: 30, imgUser: assets.profile1, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'nature' },
    { id: "3", nameUser: "Raje Bensafy", video: assets.nt3, likes: 110, comments: 55, imgUser: assets.profile2, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'nature' },
    { id: "4", nameUser: "Fadwa Jamaldine", video: assets.nt4, likes: 85, comments: 40, imgUser: assets.profile3, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'nature' },
    { id: "5", nameUser: "Chahd Sabouri", video: assets.web3, likes: 200, comments: 70, imgUser: assets.profile4, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'web' },
    { id: "6", nameUser: "Chahd Sabouri", video: assets.web1, likes: 200, comments: 70, imgUser: assets.profile5, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'web' },
    { id: "7", nameUser: "Chahd Sabouri", video: assets.web2, likes: 200, comments: 70, imgUser: assets.profile1, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'web' },
    { id: "8", nameUser: "Chahd Sabouri", video: assets.web4, likes: 200, comments: 70, imgUser: assets.profile2, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'web' },
    { id: "9", nameUser: "Ismail Horre", video: assets.music1, likes: 120, comments: 45, imgUser: assets.profile5, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'music' },
    { id: "10", nameUser: "Sara Idrissi", video: assets.music2, likes: 95, comments: 30, imgUser: assets.profile1, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'music' },
    { id: "11", nameUser: "Raje Bensafy", video: assets.music3, likes: 110, comments: 55, imgUser: assets.profile2, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'music' },
    { id: "12", nameUser: "Fadwa Jamaldine", video: assets.music4, likes: 85, comments: 40, imgUser: assets.profile3, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'music' },
    { id: "13", nameUser: "Ismail Horre", video: assets.ann1, likes: 120, comments: 45, imgUser: assets.profile5, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'animal' },
    { id: "14", nameUser: "Sara Idrissi", video: assets.ann2, likes: 95, comments: 30, imgUser: assets.profile1, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'animal' },
    { id: "15", nameUser: "Raje Bensafy", video: assets.ann3, likes: 110, comments: 55, imgUser: assets.profile2, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'animal' },
    { id: "16", nameUser: "Fadwa Jamaldine", video: assets.ann4, likes: 85, comments: 40, imgUser: assets.profile3, titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category: 'animal' },
  ]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const commentsEndRef = useRef(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setComments([]); // Reset comments when opening a new video
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const filteredVideos = arraywatch.filter(video =>
    video.category.toLowerCase().startsWith(searchcat.toLowerCase())
  );

  const handleLike = (id) => {
    setArraywatch(prevVideos =>
      prevVideos.map(video =>
        video.id === id
          ? {
              ...video,
              likes: video.liked ? video.likes - 1 : video.likes + 1,
              liked: !video.liked
            }
          : video
      )
    );

    if (selectedVideo && selectedVideo.id === id) {
      setSelectedVideo({
        ...selectedVideo,
        likes: selectedVideo.liked ? selectedVideo.likes - 1 : selectedVideo.likes + 1,
        liked: !selectedVideo.liked
      });
    }
  };

  // Function to favorite a post
  const handleFavoris = (id) => {
    setArraywatch(prevVideos =>
      prevVideos.map(video =>
        video.id === id
          ? { ...video, favoris: !video.favoris }
          : video
      )
    );

    if (selectedVideo && selectedVideo.id === id) {
      setSelectedVideo({
        ...selectedVideo,
        favoris: !selectedVideo.favoris
      });
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments(prevComments => [...prevComments, newComment]);
      setNewComment('');
      setSelectedVideo(prevVideo => ({
        ...prevVideo,
        comments: prevVideo.comments + 1
      }));
    }
  };

  // Scroll to the bottom of the comments container when comments change
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  return (
    <div className='flex flex-row gap-10 pt-6'>
      <div>
        <LeftSideBar />
      </div>
      <div className='flex flex-col w-[80%] '>
        <div className='relative'>
          <CiSearch className="text-2xl font-bold text-black absolute top-[50%] left-4 translate-y-[-50%]" />
          <input type="text"
            className='w-[25vw] px-10 rounded-lg' placeholder="Search by category..."
            value={searchcat} onChange={(e) => setSearchcat(e.target.value)} />
        </div>

        {/* Display videos */}
        <div className='mt-6 flex gap-10'>
          <div className='w-[100%] '>
            {searchcat === '' ? (
              <div className='grid grid-cols-2 gap-4'>
              {arraywatch.map((video) => (
                <div key={video.id} className="w-full h-auto cursor-pointer " onClick={() => openModal(video)}>
                  <video src={video.video} className="w-full h-auto mb-3 rounded-xl mt-4 " controls />
                  <div className="flex  gap-2 ps-3">
                    <img src={video.imgUser} alt={video.nameUser} className="w-10 h-10 rounded-full" />
                    <div className='flex flex-col ps-2'>
                      <p className="text-lg font-semibold">{video.nameUser}</p>
                    <p className='  text-slateGray font-light text-sm'> Casablanca,Anfa</p>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
            ) : (
              <div>
                <h2 className='font-bold text-2xl mb-4 text-[#772c4f]'>Search Results</h2>
                {filteredVideos.length > 0 ? (
                  <div className='grid grid-cols-2 gap-4'>
                    {filteredVideos.map(video => (
                      <div key={video.id} className="w-full h-auto cursor-pointer " onClick={() => openModal(video)}>
                        <video src={video.video} className="w-full h-auto mb-2 rounded-xl" controls />
                        <div className="flex  gap-2">
                          <img src={video.imgUser} alt={video.nameUser} className="w-10 h-10 rounded-full" />
                          <div className='flex flex-col ps-2'>
                      <p className="text-lg font-semibold">{video.nameUser}</p>
                    <p className='  text-slateGray font-light text-sm'> Casablanca,Anfa</p>
                    </div>
                        </div>
                      </div>
                    ))}
                   
                  </div>
                ) : (
                  <p className="text-center text-2xl text-red-700">No videos found</p>
                )}
              </div>
            )}
          </div>

          {searchcat !== '' && (
            <div className='w-[35%] flex flex-col'>
              <h2 className='font-bold text-2xl mb-4 text-[#772c4f]'>List of other videos</h2>
              {arraywatch.map((video) => (
                !filteredVideos.includes(video) && (
                  <div key={video.id} className='mb-4 cursor-pointer ' onClick={() => openModal(video)}>
                    <div className='flex items-start mb-3'>
                      <img src={video.imgUser} alt={video.nameUser} className='w-12 h-12 rounded-full' />
                      <div>
                        <p className='ml-1 text-lg font-bold'>{video.nameUser}</p>
                        <p className=' text-slateGray font-light text-sm'> Casablanca,Anfa</p>
                      </div>
                    </div>
                    <video src={video.video} className="w-full h-auto cursor-pointer" controls />
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedVideo && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white w-[80vw] h-[80vh] p-4 relative flex'>
            <div className='w-[60%] h-[80%]'>
              <video src={selectedVideo.video} className="w-full h-full" controls />
              <div className='flex justify-between mt-4'>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row items-center'>
                    <div className='flex flex-row gap-1 hover:text-xl'>
                      <div className='bg-blue-700 px-1 py-1 rounded-full '><AiOutlineLike className='text-white' /></div>
                      <div className='bg-yellow-400 rounded-full px-1 py-1'><CiFaceSmile className='text-white' /></div>
                      <div className='bg-red-700 px-1 py-1 rounded-full'><CiHeart className="text-white font-bold" /></div>
                    </div>
                    <div className='ps-2 text-lg '>{selectedVideo.likes}</div>
                  </div>
                  <div className={`flex flex-row items-center gap-3 text-lg`} onClick={() => handleLike(selectedVideo.id)}>
                    {selectedVideo.liked ? (
                      <FcLike color='red' />
                    ) : (
                      <FcLike />
                    )} Likes
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='text-lg'>{selectedVideo.comments} comments</div>
                  <div className='flex flex-row items-center gap-3 text-lg'>
                    <LiaComments className='text-2xl' />Comments
                  </div>
                </div>
                <button className='flex items-center text-slateGray hover:text-royalBlue'
                  onClick={() => handleFavoris(selectedVideo.id)}>
                  {selectedVideo.favoris ? <IoBookmark color='yellow' /> : <IoBookmark />}
                  favoris
                </button>
              </div>
            </div>

            <div className='w-[40%] pl-6 flex flex-col gap-5'>
              <div className='text-2xl text-slateGray'>
                {selectedVideo.titre}
              </div>
              <div className='flex gap-2 items-center'>
                <input
                  type='text'
                  className='border border-gray-300 rounded-md px-4 py-2 w-full'
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder='Write a comment...'
                />
                <button className='bg-gradient-to-b from-[#c17d7d] to-[#d76a83] 
    hover:from-[#af7878] hover:to-[#ae385e] text-white rounded-md px-4 py-2' onClick={handleAddComment}>
                  Comment
                </button>
              </div>
              <div className='flex flex-col gap-2 overflow-y-auto h-[200px]'>
                {comments.map((comment, index) => (
                  <div key={index} className='border border-gray-200 rounded-md p-2'>
                    {comment}
                  </div>
                ))}
                <div ref={commentsEndRef} />
              </div>
              <button className='absolute top-2 right-2 text-3xl font-bold '
                onClick={closeModal}>
               <MdClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchVideo;

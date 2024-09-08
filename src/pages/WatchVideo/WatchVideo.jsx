import React, { useState } from 'react';
import LeftSideBar from '../Home/Components/LeftSideBar';
import { CiBookmark, CiFaceSmile, CiHeart, CiSearch } from "react-icons/ci";
import { assets } from '../../assets';
import { AiOutlineLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";

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

  // Fonction pour ouvrir le modal
  const openModal = (video) => {
    setSelectedVideo(video);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Filtrer les vidéos par catégorie
  const filteredVideos = arraywatch.filter(video =>
    video.category.toLowerCase().startsWith(searchcat.toLowerCase())
  );

  const handleLike = (id) => {
    // Update the likes count for the selected video
    setArraywatch(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, likes: video.likes + 1 } : video
      )
    );

    // Optionnellement, mettre à jour la vidéo sélectionnée pour refléter le nouveau nombre de likes
    setSelectedVideo(prevVideo => ({ ...prevVideo, likes: prevVideo.likes + 1 }));
  };

  return (
    <div className='flex flex-row gap-10 pt-6'>
      <div>
        <LeftSideBar />
      </div>
      <div className='flex flex-col w-[80%] '>
        <div className='relative'>
          <CiSearch className="text-2xl font-bold text-black absolute top-[50%] left-4 translate-y-[-50%]" />
          <input
            type="text"
            className='w-[25vw] px-10 rounded-lg'
            placeholder="Search by category..."
            value={searchcat}
            onChange={(e) => setSearchcat(e.target.value)}
          />
        </div>

        {/* Affichage des vidéos */}
        <div className='mt-6 flex gap-10'>
          {/* Vidéo correspondante à la recherche au centre */}
          <div className='w-[100%] '>
            {searchcat === '' ? (
              <div className='grid grid-cols-4 gap-4'>
                {arraywatch.map((video) => (
                  <video key={video.id} src={video.video}
                    className="w-full h-auto cursor-pointer" controls onClick={() => openModal(video)} />
                ))}
              </div>
            ) : (
              <div>
                <h2 className='font-bold text-2xl mb-4 text-[#772c4f]'>Search Results</h2>
                {filteredVideos.length > 0 ? (
                  <div className='grid grid-cols-2 gap-4'>
                    {filteredVideos.map(video => (
                      <video key={video.id} src={video.video}
                        className="w-full h-auto cursor-pointer" controls
                        onClick={() => openModal(video)} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-2xl text-red-700">No videos found</p>
                )}
              </div>
            )}
          </div>

          {/* affichée seulement pendant la recherche */}
          {searchcat !== '' && (
            <div className='w-[35%] flex flex-col'>
              <h2 className='font-bold text-2xl mb-4 text-[#772c4f]'>List of other videos</h2>
              {arraywatch.map((video) => (
                !filteredVideos.includes(video) && (
                  <div key={video.id} className='mb-4 cursor-pointer' onClick={() => openModal(video)}>
                    <div className='flex items-start mb-3'>
                      <img src={video.imgUser} alt={video.nameUser} className='w-12 h-12 rounded-full' />
                      <div>
                        <p className='ml-1 text-lg font-bold'>{video.nameUser}</p>
                        <p className=' ml-4 text-slateGray font-light text-sm'> Casablanca,Anfa</p>
                      </div>
                    </div>
                    <video src={video.video} className='w-full h-auto' controls />
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
            {/* Vidéo à gauche */}
            <div className='w-[60%] h-[80%]'>
              <video src={selectedVideo.video} className="w-full h-full" controls />
              <div className='flex justify-between mt-4'>
                {/* Hna fin kaynini like 9albi fin kayna onclick temma fin hatiha */}
                <div className='flex flex-col gap-3'><div className='flex flex-row items-center'><div className='flex flex-row gap-1 hover:text-xl'><div className='bg-blue-700 px-1 py-1 rounded-full ' ><AiOutlineLike className='text-white' /></div><div className='bg-yellow-400 rounded-full px-1 py-1'><CiFaceSmile className='text-white²'/></div><div className='bg-red-700 px-1 py-1 rounded-full'><CiHeart className="text-white font-bold" /></div></div><div className='ps-2 text-lg '>{selectedVideo.likes}</div> </div><div className='flex flex-row items-center gap-3 text-lg ' onClick={() => handleLike(selectedVideo.id)}><AiOutlineLike className='text-2xl'/>Likes</div></div>
                 {/* Hna fin kaynini comments */}
                <div className='flex flex-col gap-3'><div className='text-lg'>{selectedVideo.comments} comments</div><div className='flex flex-row items-center gap-3 text-lg'><LiaComments className='text-2xl' />Comments</div> </div>
                 {/* Hna fin kaynini favorit */}
                <div className='flex flex-col gap-3'><div className='flex flex-row items-center gap-3 text-lg'><CiBookmark   className='text-2xl' />Favorit</div></div>
              </div>
            </div>
            
            {/* Infos de l'utilisateur à droite */}
            <div className='w-[40%]  pl-6 flex flex-col  gap-5'>
              <div className='flex items-center'>
                <div className='flex flex-row'>
                  <img src={selectedVideo.imgUser} alt={selectedVideo.nameUser} className='w-16 h-16 rounded-full' />
                <div className='flex flex-col'>
                <p className='ml-4 text-lg font-bold'>{selectedVideo.nameUser}</p>
                <p className=' ml-4 text-slateGray font-light text-sm'> Casablanca,Anfa</p>
                </div> 
                </div>
               
               
              </div>
              <div>
                  <h1 className='text-xl font-semi-bold text-[#8E3E63]'>{selectedVideo.titre}</h1>
                </div>
             
              <button className='absolute top-2 right-2 text-2xl font-bold'
                onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
 
};

export default WatchVideo;
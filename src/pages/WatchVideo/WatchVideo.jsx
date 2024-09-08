import React, { useState } from 'react';
import LeftSideBar from '../Home/Components/LeftSideBar';
import { CiSearch } from "react-icons/ci";
import { assets } from '../../assets';

const WatchVideo = () => {
  const [searchcat, setSearchcat] = useState('');
  const [arraywatch, setArraywatch] = useState([
    { id: "1", nameUser: "Ismail Horre", video: assets.nt1,likes: 120, comments: 45,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ", category:'nature' },
    { id: "2", nameUser: "Sara Idrissi", video: assets.nt2,  likes: 95, comments: 30,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas " ,category:'nature'  },
    { id: "3", nameUser: "Raje Bensafy", video: assets.nt3, likes: 110, comments: 55 ,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas " ,category:'nature' },
    { id: "4", nameUser: "Fadwa Jamaldine", video: assets.nt4, likes: 85, comments: 40,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ",category:'nature'  },
    { id: "5", nameUser: "Chahd Sabouri", video: assets.web3,likes: 200, comments: 70,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ",category:'web' },
    { id: "6", nameUser: "Chahd Sabouri", video: assets.web1,likes: 200, comments: 70,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ",category:'web' },
    { id: "7", nameUser: "Chahd Sabouri", video: assets.web2,likes: 200, comments: 70,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ",category:'web' },
    { id: "8", nameUser: "Chahd Sabouri", video: assets.web4,likes: 200, comments: 70,titre:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam quas ",category:'web' },
  ]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //? Fonction pour ouvrir le modal
  const openModal = (video) => {
    setSelectedVideo(video);
  };

  //! Fonction pour fermer le modal
  const closeModal = () => {
    setSelectedVideo(null);
  };

  //* Filtrer les vidéos par catégorie
  const filteredVideos = arraywatch.filter(video =>
    video.category.toLowerCase().startsWith(searchcat.toLowerCase())
  );

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
            value={searchcat}onChange={(e) => setSearchcat(e.target.value)} />
        </div>

        {/* Affichage des vidéos */}
        <div className='mt-6 flex gap-10'>
          {/* Vidéo correspondante à la recherche au centre */}
          <div className='w-[100%] '>
            {searchcat === '' ? (
              <div className='grid grid-cols-4 gap-4'>
                {arraywatch.map((video) => (
                  <video key={video.id} src={video.video} 
                    className="w-full h-auto cursor-pointer" controls 
                    onClick={() => openModal(video)}/>
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
                    {/* <p className='font-bold'>{video.titre}</p> */}
                    <div className='flex items-start'>
                <img src={video.imgUser} alt={video.nameUser} className='w-16 h-16 rounded-full' />
                <p className='ml-1 text-lg font-bold'>{video.nameUser}</p>
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
            {/* Vidéo à gauche */}
            <div className='w-[60%]'>
              <video src={selectedVideo.video} className="w-full h-full" controls />
              <div className='flex justify-between mt-4'>
                <p>{selectedVideo.likes} Likes</p>
                <p>{selectedVideo.comments} Comments</p>
              </div>
            </div>
            
            {/* Infos de l'utilisateur à droite */}
            <div className='w-[40%] pl-6 flex flex-col justify-between'>
              <div className='flex items-center'>
                <img src={selectedVideo.imgUser} alt={selectedVideo.nameUser} className='w-16 h-16 rounded-full' />
                <p className='ml-4 text-lg font-bold'>{selectedVideo.nameUser}</p>
              </div>
              <button 
                className='absolute top-2 right-2 text-2xl font-bold'
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchVideo

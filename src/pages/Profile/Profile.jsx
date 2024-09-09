import {React, useState} from 'react';
import LeftSideBar from '../Home/Components/LeftSideBar';
import Navbar from '../../layout/navbar';
import { useAuth } from '../../context';
import { RiGalleryView2 } from "react-icons/ri";
import { PiArticle } from "react-icons/pi";

const Profile = () => {
  const [showPosts, setShowPosts] = useState(true);
  const { users } = useAuth();
  console.log(users);
  
  const filterConnectedUser = users.find(e => e.isLoggedIn === true);
  
  if (!filterConnectedUser) return <div>No user logged in</div>;

  const { profileImage, name, email, birthday, userPost, followers, following } = filterConnectedUser;


  const handleShowPosts = () => setShowPosts(true);
  const handleShowThreads = () => setShowPosts(false);

  return (
    <div>
      <Navbar />
      <div className='flex justify-between'>
        <LeftSideBar />
        <div className=' w-[80%]   bg-[#f5f7f9]'>
          <div className='w-[100%] '>
            {/* profile info */}

            <div className=' flex gap-x-5 '>
              <div className='w-[30vw]  flex  justify-center p-10'>
                <div className='w-[60%]  rounded-full   border-4 border-[#83385b]'>
                  {profileImage ? (
                    <img
                      src={profileImage}
                      className=''
                      alt='Profile'
                    />
                  ) : (
                    <div className="bg-white w-full h-full rounded-full" />
                  )}
                </div>
              </div>
              <div className='w-[30vw]  flex    p-10 '>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-5xl capitalize font-semibold'>
                    {filterConnectedUser.username}
                  </h1>
                  <div className='flex gap-10 text-1xl '>
                    <h1> <span className='font-bold'>{userPost ? userPost.length : 0} </span>Posts</h1>
                    <h1> <span className='font-bold'>{followers ? followers.length : 0}</span> Followers</h1>
                    <h1> <span className='font-bold'>{following ? following.length : 0}</span> Following</h1>
                  </div>
                  <h1 className='text-2xl '>{name}</h1>

                </div>
              </div>
            </div>

<div>
      <div className='flex items-center justify-center gap-x-10'>
        <div 
          onClick={handleShowPosts}
          className={`flex items-center justify-center py-2 gap-x-2 cursor-pointer ${showPosts ? 'border-b-2 border-red-600' : ''}`}
        >
          <RiGalleryView2 className='text-2xl text-[#99627a]' />
          <h1 className='m-0 p-0'>
            <span className='text-2xl font-serif'>
              Posts
            </span>
          </h1>
        </div>
        <div 
          onClick={handleShowThreads}
          className={`flex items-center justify-center py-2 gap-x-2 cursor-pointer ${!showPosts ? 'border-b-2 border-red-600' : ''}`}
        >
          <PiArticle className='text-2xl text-[#99627a]' />
          <h1 className='m-0 p-0'>
            <span className='text-2xl font-serif'>
              Threads
            </span>
          </h1>
        </div>
      </div>

      <div className='flex  flex-wrap gap-2 p-5'>
        {userPost && userPost.map((post, index) => {
          if (showPosts && post.images.length > 0) {
            return (
              <div key={index} className='w-[25vw]  rounded-md'>
                <div className='bg-white w-[100%] flex rounded-t-md items-center gap-3 ps-2 py-2'>
                  <div className='profil border-2 border-[#99627a] w-[15%] rounded-full'>
                    {profileImage ? (
                      <img src={profileImage} alt='Profile' />
                    ) : (
                      <div className="bg-gray-200" />
                    )}
                  </div>
                  <div className='nameProfil capitalize font-bold'>
                    {name}
                  </div>
                </div>
                <div className='w-[100%] bg-white'>
                  {/* {post.name !== '' && <p className='ps-2 text-xl bg-red-300'>{post.name}</p>} */}
                  <img className='h-[40vh] w-full bg-cover' src={post.images} alt='Post' />
                </div>
                <div className='bg-white w-[100%] h-[10vh] rounded-b-md text-black flex justify-between items-center p-2'>
                  <h1><span className='font-bold'>{post.likes}</span> Likes</h1>
                  <h1><span className='font-bold'>{post.comments.length}</span> Comments</h1>
                  <h1><span className='font-bold'>{post.favorited}</span> Favorites</h1>
                </div>
              </div>
            );
          } else if (!showPosts && post.images.length === 0) {
            return (
              <div key={index} className='w-[25vw] rounded-md'>
                <div className='bg-white w-[100%] flex rounded-t-md items-center gap-3 ps-2 py-2'>
                  <div className='profil border-2 border-[#99627a] w-[15%] rounded-full'>
                    {profileImage ? (
                      <img src={profileImage} alt='Profile' />
                    ) : (
                      <div className="bg-gray-200" />
                    )}
                  </div>
                  <div className='nameProfil capitalize font-bold'>
                    {name}
                  </div>
                </div>
                <div className='w-[100%] bg-white'>
                  {post.name !== '' && <p className='ps-2 text-xl'>{post.name}</p>}
                </div>
                <div className='bg-white w-[100%] h-[10vh] rounded-b-md text-black flex justify-between items-center p-2'>
                  <h1><span className='font-bold'>{post.likes}</span> Likes</h1>
                  <h1><span className='font-bold'>{post.comments.length}</span> Comments</h1>
                  <h1><span className='font-bold'>{post.favorited}</span> Favorites</h1>
                </div>
              </div>
            );
          }

          return null; 
        })}
      </div>
    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

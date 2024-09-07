import React from 'react';
import LeftSideBar from '../Home/Components/LeftSideBar';
import Navbar from '../../layout/navbar';
import { useAuth } from '../../context';

const Profile = () => {
  const { users } = useAuth();
  console.log(users);
  let filterConnectedUser = users.find(e => e.isLoggedIn === true);
  console.log(filterConnectedUser);

  

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <LeftSideBar />
        <div className='bg-[rgba(229,220,220,0.72)] w-[80%] ms-auto'>
          <div>
            <div className='flex'>
              <div className='w-[30vw] flex justify-center items-center'>
                <div className='w-[60%] h-[85%] rounded-full'>
                  {filterConnectedUser.profileImage ? 
                    <img
                      src={filterConnectedUser.profileImage}
                      className='w-[15vw] h-[30vh] rounded-full'
                      alt='Profile'
                    />
                  : 
                    <div className="bg-white w-full h-full rounded-full" />
                  }
                </div>
              </div>
              <div className='w-[50vw] h-[45vh] flex items-center'>
                <div className='flex flex-col gap-5'>
                  <h1 className='text-2xl capitalize font-serif'>
                    {filterConnectedUser.name}
                  </h1>
                  <div className='flex gap-10 text-1xl font-serif'>
                    <h1>{filterConnectedUser.userPost} Posts</h1>
                    <h1>{filterConnectedUser.userPost} Followers</h1>
                    <h1>{filterConnectedUser.userPost} Following</h1>
                  </div>
                  <h1 className='font-serif'>{filterConnectedUser.email}</h1>
                  <h1 className='font-serif'>{filterConnectedUser.birthday}</h1>
                </div>
              </div>
            </div>

            <h1 className='w-14 pt-8 pb-10 m-auto'>
              <span className='ms-[1rem] text-2xl border-b-2 border-red-600 font-serif'>
                Posts
              </span>
            </h1>
            <div className='flex gap-5 flex-wrap ms-[1rem] bg-[#a19a9a7a] rounded-md'>
              
                <div className='w-[24vw] rounded-md'>
                  <div className='bg-white flex gap-5 rounded-t-md border-b-4 p-2'>
                    <div className='profil bg-[#fcfc] w-[4vw] h-[8vh] rounded-full'>
                      {filterConnectedUser.profileImage ? 
                        <img
                          src={filterConnectedUser.profileImage}
                          className='w-full h-full rounded-full'
                          alt='Profile'
                        />
                       : 
                        <div className="bg-gray-200 w-full h-full rounded-full" />
                      }
                    </div>
                    <div className='nameProfil capitalize font-serif'>
                      {filterConnectedUser.name}
                    </div>
                  </div>
                  <div className='w-[100%]'>
                    <img
                      className='h-[50vh] w-full bg-cover'
                      src={filterConnectedUser.userPost.image}
                      
                    />
                  </div>
                  <div className='bg-white w-[24vw] h-[10vh] rounded-b-md text-black flex justify-between items-center p-2'>
                    <h1>{filterConnectedUser.userPost.likes} Likes</h1>
                    <h1>{filterConnectedUser.userPost.comments} Comments</h1>
                    <h1>{filterConnectedUser.userPost.favorited} Favorites</h1>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

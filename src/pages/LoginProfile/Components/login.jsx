import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context';

const LoginPage = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const { profileImage, setProfileImage, coverImage, setCoverImage, users, setUsers } = useAuth();
    

    // Adjust username extraction
    const newUsername = username.substring(1);

    // Find user by username
    const userIndex = users.findIndex(user => user.username === newUsername);
    console.log(userIndex);
    const [user, setUser] = useState(users[userIndex] || {});

    const inputRefProfile = useRef(null);
    const inputRefCover = useRef(null);

    useEffect(() => {
        if (userIndex !== -1) {
            setUser(users[userIndex]);
        }
    }, [users, userIndex]);

    const handleProfileClick = () => {
        inputRefProfile.current.click();
    };

    const handleProfileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
            console.log(profileImage);
            // Update user profile image
            const updatedUsers = [...users];
            updatedUsers[userIndex].profileImage = file;
            setUsers(updatedUsers);
        }
    };

    const handleCoverClick = () => {
        inputRefCover.current.click();
    };

    const handleCoverChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setCoverImage(imageUrl);
            console.log(coverImage);
            // Update user cover image
            const updatedUsers = [...users];
            updatedUsers[userIndex].coverImage = file;
            setUsers(updatedUsers);
        }
    };

    useEffect(() => {
        return () => {
            if (profileImage) URL.revokeObjectURL(profileImage);
            if (coverImage) URL.revokeObjectURL(coverImage);
        };
    }, [profileImage, coverImage]);

    return (
        <div>
            <section className="py-10 my-auto dark:bg-gray-900">
                <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                        <div>
                            <h1 className='text-end text-4xl cursor-pointer'>
                                <span onClick={() => navigate(`/login`)} className='hover:text-red-600'>x</span>
                            </h1>
                            <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                                Profile
                            </h1>
                            <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
                            <form>
                                <div className='pb-10 relative'>
                                    <div className='bg-black w-full h-[40vh]' onClick={handleCoverClick}>
                                        {coverImage ? (
                                            <img src={coverImage} className='w-full h-[40vh] bg-cover' alt="Cover" />
                                        ) : (
                                            <div className='w-full h-[40vh]'></div>
                                        )}
                                        <input
                                            type='file'
                                            ref={inputRefCover}
                                            onChange={handleCoverChange}
                                            className='hidden'
                                        />
                                    </div>

                                    <div className='w-[15vw] h-[30vh] rounded-full absolute bottom-0 translate-y-[-50%] left-[50%] translate-x-[-50%]' onClick={handleProfileClick}>
                                        {profileImage ? (
                                            <img src={profileImage} className='h-[200px] w-[200px] rounded-full' alt="Profile" />
                                        ) : (
                                            <div className='h-[200px] w-[200px] rounded-full bg-slate-300'></div>
                                        )}
                                        <input
                                            type='file'
                                            ref={inputRefProfile}
                                            onChange={handleProfileChange}
                                            className='hidden'
                                        />
                                    </div>
                                </div>

                                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                    <div className="w-full mb-4 mt-6">
                                        <label htmlFor="firstName" className="mb-2 dark:text-gray-300">First Name</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                            placeholder="First Name"
                                            value={user.name || ''}
                                            onChange={(e) => {
                                                const updatedUser = { ...user, name: e.target.value };
                                                setUser(updatedUser);
                                                const updatedUsers = [...users];
                                                updatedUsers[userIndex] = updatedUser;
                                                setUsers(updatedUsers);
                                            }}
                                        />
                                    </div>
                                    <div className="w-full mb-4 lg:mt-6">
                                        <label htmlFor="username" className="dark:text-gray-300">User Name</label>
                                        <input
                                            id="username"
                                            type="text"
                                            className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                            placeholder="User Name"
                                            value={user.username || ''}
                                            onChange={(e) => {
                                                const updatedUser = { ...user, username: e.target.value };
                                                setUser(updatedUser);
                                                const updatedUsers = [...users];
                                                updatedUsers[userIndex] = updatedUser;
                                                setUsers(updatedUsers);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                    <div className="w-full">
                                        <h3 className="dark:text-gray-300 mb-2">Sex</h3>
                                        <select
                                            className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                            value={user.sex || ''}
                                            onChange={(e) => {
                                                const updatedUser = { ...user, sex: e.target.value };
                                                setUser(updatedUser);
                                                const updatedUsers = [...users];
                                                updatedUsers[userIndex] = updatedUser;
                                                setUsers(updatedUsers);
                                            }}
                                        >
                                            <option disabled value="">Select Sex</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
                                        <input
                                            type="date"
                                            className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                            value={user.dateOfBirth || ''}
                                            onChange={(e) => {
                                                const updatedUser = { ...user, dateOfBirth: e.target.value };
                                                setUser(updatedUser);
                                                const updatedUsers = [...users];
                                                updatedUsers[userIndex] = updatedUser;
                                                setUsers(updatedUsers);
                                            }}
                                        />
                                    </div>
                                </div>

                    <div class="flex items-center justify-center  mt-4 text-white text-lg font-semibold">
                        <button class="w-[20%] bg-[#ea4c89] rounded-lg   p-4"><Link to={`/login`}>Submit</Link></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  </div>
  )
}

export default LoginPage
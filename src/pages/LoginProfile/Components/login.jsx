import React, { useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context';

const LoginPage = () => {
    const { username } = useParams(); 
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const inputRefCover = useRef(null);

    const { users, setUsers } = useAuth();
    const [cover, setCover] = useState(null);
    const [image, setImage] = useState(null);

    // Find the user index by username
    const userIndex = users.findIndex(user => user.username === username);

    // Handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl); 
        }
    };

    // Handle cover image selection
    const handleCoverChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const coverUrl = URL.createObjectURL(file);
            setCover(coverUrl); 
        }
    };

    const handleSave = () => {
        const updatedUsers = [...users];
        if (image) {
            updatedUsers[userIndex].profileImage = image; 
        }
        if (cover) {
            updatedUsers[userIndex].coverImage = cover; 
        }
        setUsers(updatedUsers); 
        navigate(`/login`); 
    };

    return (
        <div>
            <section className="py-10 my-auto dark:bg-gray-900">
                <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                        <div className="flex flex-col gap-y-4">
                            <h1 className='text-end text-4xl cursor-pointer'>
                                <span onClick={() => navigate(`/login`)} className='hover:text-red-600'>x</span>
                            </h1>
                            <h1 className="text-center lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                                Update Profile
                            </h1>
                            <form>
                                {/* Background cover */}
                                <div className='pb-10 relative'>
                                    <div className='bg-black w-full h-[40vh]' onClick={() => inputRefCover.current.click()}>
                                        {cover ? <img src={cover} alt="Cover" className='w-full h-[40vh] bg-cover' /> : <div className='w-full h-[40vh]'></div>}
                                        <input type='file' accept='image/*' ref={inputRefCover} onChange={handleCoverChange} className='hidden' />
                                    </div>
                                    <div className='w-[15vw] h-[30vh] rounded-full absolute bottom-0 translate-y-[-50%] left-[50%] translate-x-[-50%]' onClick={() => inputRef.current.click()}>
                                        {image ? <img src={image} alt="Profile" className='h-[200px] w-[200px] rounded-full' /> : <div className='h-[200px] w-[200px] rounded-full bg-slate-300'></div>}
                                        <input type='file' accept='image/*' ref={inputRef} onChange={handleImageChange} className='hidden' />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-4 text-white text-lg font-semibold">
                                    <button type="button" className="w-[20%] bg-[#ea4c89] rounded-lg p-4" onClick={handleSave}>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;

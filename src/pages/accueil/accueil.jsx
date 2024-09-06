import React from 'react';
import accueil from "../../assets/hand-holding-smartphone-social-media-concept.jpg"
import { Link } from 'react-router-dom';

const Accueil = () => {
    return (
        <div className=' bg-gradient-to-b from-[#550b28]  to-[#210611] h-[100vh] ' >
            <div className="flex justify-between">
                <h1 className="font-serif text-3xl font-medium text-white p-10">
                    Friend<span className='text-[#ea4c89]'>Wave</span>
                </h1>
                <div className='flex gap-3 p-10'>
                    <button className="self-start px-8 py-3 leading-none text-gray-200 bg-[#ac2659] hover:bg-[#ea4c89] rounded-full font-serif">
                    <Link to={"/login"}>Login</Link>
                    </button>
                    <button className="self-start px-8 py-3 leading-none text-gray-200 bg-[#ac2659] hover:bg-[#ea4c89] rounded-full font-serif">
                    <Link to={"/sign-up"}>Sign Up</Link>

                    </button>
                </div>
            </div>
            <div className="h-32 md:h-14"></div>

            <div className='flex  gap-[1rem] '>
                <div className='pt-8'>
                    <p className="font-sans text-4xl font-bold text-gray-200 max-w-3xl lg:text-7xl lg:pr-24 md:text-6xl ms-[4rem]">
                        Social Media Influencer
                    </p>
                    <div className="h-10"></div>
                    <p className="max-w-3xl font-serif text-xl text-gray-400 md:text-2xl ms-[4rem]">
                    Passionné par la vie, amateur de découvertes et toujours à la recherche d’inspiration. 🌟 Partageons nos moments et nos idées!
                    </p>
                </div>

                <div>
                    <img className='w-[30vw] rounded-lg' src={accueil} alt="Social media concept" />
                </div>
            </div>
        </div>
    );
};

export default Accueil;

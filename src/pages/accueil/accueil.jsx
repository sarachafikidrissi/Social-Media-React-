import React, { useState } from 'react';
import accueil from "../../assets/hand-holding-smartphone-social-media-concept.jpg"
import { FaMoon,  FaSun} from "react-icons/fa";
import { Link } from 'react-router-dom';



const Accueil = () => {
    const [darkmode, setDarkmode] = useState(false)
    return (
        
        <div className={`bg-gradient-to-b from-[#550b28] to-[#210611] h-[100vh] ${darkmode && "bg-[#242424]" }` }  >
            <div className="flex justify-between">
                <h1 className="font-serif text-3xl font-medium text-white p-10">
                    Friend<span className='text-[#ea4c89]'>Wave</span>
                </h1>
                <div className='flex gap-3 p-10 items-center'>
                    <button className={`self-start px-8 py-3 leading-none text-gray-200 bg-[#ac2659] hover:bg-[#ea4c89] rounded-full font-serif ${darkmode && "bg-[#464545] && hover:bg-white && hover:text-black "}`}>
                    <Link to={"/login"}>Login</Link>
                    </button>
                    <button className={`self-start px-8 py-3 leading-none text-gray-200 bg-[#ac2659] hover:bg-[#ea4c89] rounded-full font-serif ${darkmode && "bg-[#464545] hover:bg-white && hover:text-black"}`}>
                    <Link to={"/sign-up"}>Sign Up</Link>

                    </button>
                    <button onClick={() => { setDarkmode(!darkmode) }} className="bg-[#ac2659] px-[1.3vw] py-[12px] text-white text-lg font-semi-bold rounded-full border-none">{darkmode ? <FaSun /> : <FaMoon />}</button>
                </div>
            </div>
            <div className="h-32 md:h-14"></div>

            <div className='flex  gap-[1rem] '>
                <div className='pt-8'>
                    <p className="font-sans text-4xl font-bold text-gray-200 max-w-3xl lg:text-7xl lg:pr-24 md:text-6xl ms-[4rem]">
                        Social Media Influencer
                    </p>
                    <div className="h-10"></div>
                    <p className={`max-w-3xl font-serif text-xl pb-5 text-gray-400 md:text-2xl ms-[4rem] ${darkmode && "text-white" }`}>
                    Passionné par la vie, amateur de découvertes et toujours à la recherche d’inspiration. 🌟 Partageons nos moments et nos idées!
                    </p>
                    <button  className='text-white ms-[4rem] bg-gradient-to-b from-[#972150] to-[#91093f]  font-serif py-3 px-9 rounded-full  '>Join Now</button>
                </div>

                <div>
                    <img className='w-[30vw] rounded-lg hover:p-3' src={accueil} alt="Social media concept" />
                </div>
            </div>
        </div>
    );
};

export default Accueil;

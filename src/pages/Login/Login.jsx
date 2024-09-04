


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useAuth } from '../../context';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { users } = useAuth();
  const [loginUsername, setLoginusername] = useState('');
  const [loginpassword, setLoginPassword] = useState('');
const check = ()=>{
  let user = users.find((e)=>e.username==loginUsername && e.password==loginpassword)
  if (user) {
    alert("your loged in succesfully")
    navigate('/login-profile')
  }else{
    alert("not found")
  }
}

  return (
    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto h-[80vh] overflow-hidden flex">
      <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center">
        <form className="bg-white flex flex-col items-center justify-center p-12 w-full h-full text-center">
          <h1 className="text-3xl font-bold m-0">Login</h1>
          <div className="my-5 flex space-x-2">
            <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center h-12 w-12 hover:bg-pink">
              <FaFacebookF className="text-gray-700" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center h-12 w-12 hover:bg-pink">
              <FaGoogle className="text-gray-700" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center h-12 w-12 hover:bg-pink">
              <FaLinkedinIn className="text-gray-700" />
            </a>
          </div>
          <span className="text-sm">or use your account</span>
          <input type="text" placeholder="UserName"  value={loginUsername} onChange={(e) => setLoginusername(e.target.value)} className="bg-gray-200 border-none p-3 my-2 w-full" />
          <input type="password" placeholder="Password" value={loginpassword}  onChange={(e) => setLoginPassword(e.target.value)} className="bg-gray-200 border-none p-3 my-2 w-full" />
          <a href="#" className="text-blue-500 text-sm">Forgot your password?</a>
          <button onClick={check}  className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6 ">
            Login
          </button>
        </form>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center bg-gradient-to-r from-pink to-[#ff00d06c]">
        <div className="absolute flex flex-col items-center justify-center gap-y-8 p-12 text-center">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-sm">To keep connected with us please login with your personal info</p>
          <button className="border border-pink text-black rounded-full py-2 px-6 text-sm font-bold  hover:bg-pink hover:text-white" onClick={() => navigate('/sign-up')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;





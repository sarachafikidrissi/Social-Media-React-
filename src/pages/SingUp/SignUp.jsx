import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useAuth } from '../../context';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [code, setCode] = useState(''); 
  const [generatedCode, setGeneratedCode] = useState('');
  const { addUser } = useAuth();
  const navigate = useNavigate();
  const {users}=useAuth()

 let a = users.find(user=>user.username==userName)

  const handleLogin = (e) => {
    e.preventDefault();
    if (code && code === generatedCode && name&& email&&gender&&birthday&&password&&userName && !a ) {
      addUser(name, email, birthday,  gender, password,userName);
     console.log(users);
      setGeneratedCode("")
      alert("your account has been created succesfully")
      navigate(`/login-profile/:${userName}`)
     
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function notify() {
    const code = generateString(5);
    setGeneratedCode(code);
  
    const notification = new Notification('Your code is:', {
      body: code,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
    });

    setTimeout(() => notification.close(), 8000);
  }

  const notification = () => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        notify();
      } else {
        Notification.requestPermission().then((res) => {
          if (res === 'granted') {
            notify();
          } else {
            console.error('Did not receive permission for notifications');
          }
        });
      }
    } else {
      console.error('Browser does not support notifications');
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto h-[93vh] overflow-hidden flex">
      <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center">
        <form className="bg-white flex flex-col items-center justify-center p-12 w-full h-full text-center" onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold m-0">Sign Up</h1>
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
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-200 border-none p-3 my-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="UserName"
            className="bg-gray-200 border-none p-3 my-2 w-full"
            value={userName}
            onChange={(e) => setUserName(name + "123")}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200 border-none p-3 my-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            placeholder="Birthday"
            className="bg-gray-200 border-none p-3 my-2 w-full"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="bg-gray-200 border-none p-3 my-2 w-full"
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200 border-none p-3 my-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="text-blue-500 text-sm">Forgot your password?</a>
          <button type="button" onClick={notification}   className="">Get Code</button>
          <input
            type="text"
            placeholder="Enter code"
            className="bg-gray-200 border-none p-3 my-2 w-full"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            
          />
          <button
            type="submit"
            className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6" 
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center bg-gradient-to-r from-pink to-[#ff00d06c]">
        <div className="absolute flex flex-col items-center justify-center gap-y-8 p-12 text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-sm">Please insert your information to join our platform</p>
          <button
            className="border border-pink text-black rounded-full py-2 px-6 text-sm font-bold hover:bg-pink hover:text-white"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

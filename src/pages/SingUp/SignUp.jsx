import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useAuth } from '../../context';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [code, setCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [emptyFieldsModalIsOpen, setEmptyFieldsModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { addUser, users } = useAuth();
  const navigate = useNavigate();

  const userExists = users.find(user => user.username === userName);

  const handleLogin = (e) => {
    e.preventDefault();

    if (code && code === generatedCode && name && email && gender && birthday && password && userName && !userExists) {
      addUser(name, email, birthday, gender, password, userName);

      setGeneratedCode('');
      setSuccessModalIsOpen(true);
    } else {
      setErrorMessage('Incorrect code. Please try again.');
      setErrorModalIsOpen(true);
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

  const handleSignUpClick = () => {
    if (name && email && birthday && gender && password && userName) {
      notification();
      setModalIsOpen(true);
    } else {
      setEmptyFieldsModalIsOpen(true);
    }
  };

  const resend = () => {
    notification();
  };

  return (
    <div className='h-screen bg-hero-pattern bg-left-bottom flex items-center justify-center'>
    <div className="relative rounded-lg shadow-lg w-full max-w-4xl  h-[80vh] overflow-hidden flex ">
      <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center  animate-slideInRight ">
        <form className="bg-white flex flex-col items-center justify-center p-12 w-full h-full text-center">
          <h1 className="text-3xl font-bold m-0">Sign Up</h1>
          <div className="my-5 flex space-x-2">
            <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center h-12 w-12 text-xl hover:bg-[#C75B7A]">
              <FaFacebookF className="text-gray-700 hover:text-white" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center h-12 w-12 text-xl hover:bg-[#C75B7A]">
              <FaGoogle className="text-gray-700 hover:text-white" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full flex justify-center items-center h-12 w-12 text-xl hover:bg-[#C75B7A]">
              <FaLinkedinIn className="text-gray-700 hover:text-white" />
            </a>
          </div>
          <span className="text-md text-[#3D0C11]">or use your account</span>
          <input type="text"placeholder="Name"className="bg-gray-200 border-none p-3 my-2 w-full rounded-xl ps-3"
            value={name}onChange={(e) => setName(e.target.value)}
          />
          <input type="text"
            placeholder="UserName"className="bg-gray-200 border-none p-3 my-2 w-full rounded-xl ps-3"
            value={userName}onChange={(e) => setUserName(name + "123")}
          />
          <input type="email"
            placeholder="Email"className="bg-gray-200 border-none p-3 my-2 w-full rounded-xl ps-3"
            value={email}onChange={(e) => setEmail(e.target.value)}
          />
          <input type="date"
            placeholder="Birthday"
            className="bg-gray-200 border-none p-3 my-2 w-full rounded-xl ps-3"
            value={birthday}onChange={(e) => setBirthday(e.target.value)}
          />
          <select value={gender}onChange={(e) => setGender(e.target.value)}
            className="bg-gray-200 border-none p-3 my-2 w-full rounded-xl ps-3"
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="password"placeholder="Password"
            className="bg-gray-200 border-none p-3 my-2 w-full rounded-xl ps-3"
            value={password}onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="text-blue-500 text-md py-2">Forgot your password?</a>
          <button type="button"
            onClick={handleSignUpClick}
            className="rounded-full bg-gradient-to-t from-[#F4D9D0]  to-[#a675be] hover:bg-gradient-to-l hover:from-[#a675be] hover:to-[#D9ABAB] text-white text-xl font-bold py-3 px-10 mt-2">
            Sign Up
          </button>
        </form>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center  bg-gradient-to-l from-[#d3b7e0] via-[#b58fbf]  to-[#a675be] animate-slideInLeft ">
        <div className="absolute flex flex-col items-center justify-center gap-y-8 p-12 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome</h1>
          <p className="text-xl  text-white">Please insert your information to join our platform</p>
          <button
            className="border-none font-serif  rounded-full py-2 px-8 text-2xl font-semi-bold bg-gradient-to-t from-[#F4D9D0]  to-[#a675be] hover:bg-gradient-to-l hover:from-[#a675be] hover:to-[#D9ABAB] text-white"
            onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>

      {/* Modal dyal verefication */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Code Verification"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Enter Verification Code</h2>
          <input
            type="text"
            placeholder="Enter code"
            className="bg-gray-200 border-none p-3 my-2 w-full"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <div className='flex justify-between mx-6'>
            <button
              onClick={handleLogin}
              className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6 mt-4"
            >
              Verify and Sign Up
            </button>
            <button
              onClick={resend}
              className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6 mt-4"
            > 
              Resend the Code  
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal dyal ila khaliti input khawin */}
      <Modal
        isOpen={emptyFieldsModalIsOpen}
        onRequestClose={() => setEmptyFieldsModalIsOpen(false)}
        contentLabel="Empty Fields"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Incomplete Information</h2>
          <p className="text-lg">Please fill in all required fields before proceeding.</p>
          <button
            onClick={() => setEmptyFieldsModalIsOpen(false)}
            className="rounded-full border bg-btnColor hover:bg-hoverBtn text-white text-sm font-bold py-3 px-6 mt-4"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Modal fach kolshi nade */}
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md py-12">
          <h2 className="text-2xl font-bold mb-4">Account Created</h2>
          <p className="text-lg">Your account has been created successfully.</p>
          <button
            onClick={() => {
              setSuccessModalIsOpen(false);
              navigate(`/login-profile/${userName}`);
            }}
            className="rounded-full border border bg-btnColor hover:bg-hoverBtntext-white text-sm font-bold py-3 px-6 mt-4"
          >
            Continue
          </button>
        </div>
      </Modal>

      {/* Modal dyal les Error */}
      <Modal
        isOpen={errorModalIsOpen}
        onRequestClose={() => setErrorModalIsOpen(false)}
        contentLabel="Error"
        className="fixed inset-0 flex items-center justify-center p-4 "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md py-12">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-lg">{errorMessage}</p>
          <button
            onClick={() => setErrorModalIsOpen(false) && setModalIsOpen(false)}
            className="rounded-full borderborder bg-btnColor hover:bg-hoverBtn text-white text-sm font-bold py-3 px-6 mt-4"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
    </div>
  );
};

export default SignUp;

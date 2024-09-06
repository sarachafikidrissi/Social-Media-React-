import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useAuth } from '../../context';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Login = () => {
  const [loginUsername, setLoginusername] = useState('');
  const [loginpassword, setLoginPassword] = useState('');
  const [emptyFieldsModalIsOpen, setEmptyFieldsModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { users } = useAuth();
  const navigate = useNavigate();

  const check = () => {
    if (loginUsername && loginpassword) {
      let user = users.find((e) => e.username === loginUsername && e.password === loginpassword);
      if (user) {
        user.islogedin = true;
        setSuccessModalIsOpen(true);
      } else {
        setErrorMessage('Username or password is incorrect.');
        setErrorModalIsOpen(true);
      }
    } else {
      setEmptyFieldsModalIsOpen(true);
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto h-[93vh] overflow-hidden flex">
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
          <input
            type="text"
            placeholder="UserName"
            value={loginUsername}
            onChange={(e) => setLoginusername(e.target.value)}
            className="bg-gray-200 border-none p-3 my-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={loginpassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className="bg-gray-200 border-none p-3 my-2 w-full"
          />
          <a href="#" className="text-blue-500 text-sm">Forgot your password?</a>
          <button
            type="button"
            onClick={check}
            className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6"
          >
            Login
          </button>
        </form>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center bg-gradient-to-r from-pink to-[#ff00d06c]">
        <div className="absolute flex flex-col items-center justify-center gap-y-8 p-12 text-center">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-sm">To keep connected with us please login with your personal info</p>
          <button
            className="border border-pink text-black rounded-full py-2 px-6 text-sm font-bold hover:bg-pink hover:text-white"
            onClick={() => navigate('/sign-up')}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Modal inputs khawin */}
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
            className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6 mt-4"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Modal dyal kolshi nade */}
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Login Successful</h2>
          <p className="text-lg">You have logged in successfully.</p>
          <button
            onClick={() => {
              setSuccessModalIsOpen(false);
              navigate(`/${loginUsername}`);
            }}
            className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6 mt-4"
          >
            Continue
          </button>
        </div>
      </Modal>

      {/* Modal for Error */}
      <Modal
        isOpen={errorModalIsOpen}
        onRequestClose={() => setErrorModalIsOpen(false)}
        contentLabel="Error"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-lg">{errorMessage}</p>
          <button
            onClick={() => setErrorModalIsOpen(false)}
            className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6 mt-4"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;

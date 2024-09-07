import React, { useRef, useState } from 'react';
import { useAuth } from '../../context';
import LeftSideBar from '../../pages/Home/Components/LeftSideBar';
import Navbar from '../../layout/navbar';
import Modal from 'react-modal';

const Edit = () => {
  const { users, setUsers } = useAuth(); 
  const currentUser = users.find(e => e.isLoggedIn === true); 
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: currentUser.name,
    username: currentUser.username,
    email: currentUser.email,
    birthday: currentUser.birthday,
    password: currentUser.password,
    profileImage: currentUser.profileImage,
  });

  const [image, setImage] = useState(currentUser.profileImage || "");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser,
      ...formData,
      profileImage: image,
    };

    const updatedUsers = users.map(user =>
      user.isLoggedIn ? updatedUser : user
    );
    setSuccessModalIsOpen(true)

    setUsers(updatedUsers); 
    console.log( updatedUser);
  };

  const handleClickImage = () => {
    inputRef.current.click();
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <LeftSideBar />
        <div className='mx-auto pt-2'>
          <form onSubmit={handleSubmit}>
            <div onClick={handleClickImage} className='w-fit cursor-pointer m-auto'>
              {image ? (
                <img src={image} className='rounded-full w-[15vw] h-[30vh]' alt="Profile" />
              ) : (
                <div className='bg-[#757575cc] w-[15vw] h-[30vh] rounded-full'></div>
              )}
              <input
                type='file'
                ref={inputRef}
                onChange={handleChangeImage}
                hidden
              />
            </div>

            <div className='flex gap-2 pt-10'>
              <div>
                <label htmlFor="name" className='font-serif hover:text-[#9c1f51]'>Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Change Name'
                  className='rounded-xl w-[15.5vw] ms-5'
                />
              </div>
              <div>
                <label htmlFor="username" className='font-serif hover:text-[#9c1f51]'>Username: </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder='Change Username'
                  className='rounded-xl w-[15vw]'
                />
              </div>
            </div>

            <div className='pt-10'>
              <label htmlFor="email" className='font-serif hover:text-[#9c1f51]'>Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Change Email'
                className='rounded-xl w-[37.5vw] ms-6'
              />
            </div>

            <div className='flex gap-2'>
              <div className='pt-10'>
                <label htmlFor="birthday" className='font-serif hover:text-[#9c1f51]'>Birthday: </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  placeholder='Change Birthday'
                  className='rounded-xl w-[15vw] ms-1'
                />
              </div>
              <div className='pt-10 pb-10'>
                <label htmlFor="password" className='font-serif hover:text-[#9c1f51]'>Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Change Password'
                  className='rounded-xl w-[15vw] ms-3'
                />
              </div>
            </div>

            <button
              type="submit"
              className='bg-[#9c1f51] hover:bg-pink px-7 py-3 rounded-2xl ms-[15rem] font-bold font-serif'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
       {/* Modal fach kolshi nade */}
       <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md py-12">
          <h2 className="text-2xl font-bold mb-4">Changes mades</h2>
          <p className="text-lg">Your Changes has been made successfully.</p>
          <button
            onClick={() => {
              setSuccessModalIsOpen(false);
            }}
            className="rounded-full border border-pink bg-pink text-white text-sm font-bold py-3 px-6 mt-4"
          >
            ok
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Edit;

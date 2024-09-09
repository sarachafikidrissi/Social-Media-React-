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
    setSuccessModalIsOpen(true);

    setUsers(updatedUsers);
    console.log(updatedUser);
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
          <div className="bg-white  rounded-xl p-8 w-[90vw] max-w-[70vw] mx-auto">
            <h2 className="text-2xl font-bold text-center">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div onClick={handleClickImage} className='w-fit cursor-pointer m-auto'>
                {image ? (
                  <img src={image} className='rounded-full w-[150px] h-[150px] object-cover shadow-md' alt="Profile" />
                ) : (
                  <div className='bg-[#e4e6eb] w-[150px] h-[150px] rounded-full shadow-md'></div>
                )}
                <input
                  type='file'
                  ref={inputRef}
                  onChange={handleChangeImage}
                  hidden
                />
              </div>

             <div className='flex justify-between'>

             <div className='mt-6'>
             <label htmlFor="name" className='block font-semibold mb-1'>Name:</label>
             <input
               type="text"
               name="name"
               id="name"
               value={formData.name}
               onChange={handleChange}
               placeholder='Change Name'
               className='border border-gray-300 rounded-lg  py-2 px-4 w-[32vw]'
             />
           </div>

           <div className='mt-6'>
             <label htmlFor="username" className='block font-semibold mb-1'>Username:</label>
             <input
               type="text"
               name="username"
               id="username"
               value={formData.username}
               onChange={handleChange}
               placeholder='Change Username'
               className='border border-gray-300 rounded-lg  py-2 px-4 w-[32vw]'
             />
           </div>
             </div>

              <div className='mt-6'>
                <label htmlFor="email" className='block font-semibold mb-1'>Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Change Email'
                  className='border border-gray-300 rounded-lg w-full py-2 px-4'
                />
              </div>

              <div className='mt-6'>
                <label htmlFor="birthday" className='block font-semibold mb-1'>Birthday:</label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  placeholder='Change Birthday'
                  className='border border-gray-300 rounded-lg w-full py-2 px-4'
                />
              </div>

              <div className='mt-6'>
                <label htmlFor="password" className='block font-semibold mb-1'>Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Change Password'
                  className='border border-gray-300 rounded-lg w-full py-2 px-4'
                />
              </div>

              <button
                type="submit"
                className='bg-btnColor hover:bg-hoverBtn text-white font-semibold py-3 px-6 rounded-lg mt-6 w-[15vw] ms-[20rem]'
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Changes Saved</h2>
          <p className="text-lg">Your profile has been updated successfully.</p>
          <button
            onClick={() => setSuccessModalIsOpen(false)}
            className="rounded-full border  bg-btnColor text-white text-sm font-bold py-3 px-6 mt-4"
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Edit;

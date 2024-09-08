import React, { useRef, useState } from 'react';
import Navbar from '../../layout/navbar';
import LeftSideBar from '../Home/Components/LeftSideBar';

const CreateGroup = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleClickImg = () => {
    inputRef.current.click();
  };

  const handleChangeImg = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <Navbar />
      <div className="flex gap-5">
        <LeftSideBar />
        <div className="w-full">
          <div onClick={handleClickImg} className="ms-[25rem] w-fit cursor-pointer pb-5 pt-5">
            {image ? (
              <img className="w-[15vw] h-[30vh] rounded-full" src={URL.createObjectURL(image)} alt="Group" />
            ) : (
              <div className="bg-black w-[15vw] h-[30vh] rounded-full"></div>
            )}
            <input type="file" className="hidden" ref={inputRef} onChange={handleChangeImg} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-around">
              <div>
                <label className="font-serif">Titre: </label>
                <input className="w-[30vw] rounded-xl" type="text" placeholder="Insert Titre De Group" />
              </div>
              <div>
                <select className="border-none">
                  <option>Public</option>
                  <option>Privé</option>
                </select>
              </div>
            </div>
            <div className="ms-[8rem]">
              <p className="font-serif pb-3">
                <label htmlFor="w3review">Description: </label>
              </p>
              <textarea
                className="rounded-xl"
                id="w3review"
                name="w3review"
                rows="4"
                cols="100"
                placeholder="Bio"
              ></textarea>
            </div>
            <button className="bg-[#c72c67] w-[13vw] m-auto py-3 rounded-xl text-white font-serif">
              Create Groupe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;

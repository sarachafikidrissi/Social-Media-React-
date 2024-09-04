import React from 'react'
import { Images } from '../../constants'
import  { useState } from 'react';

import LeftSideBar from '../Home/Components/LeftSideBar';

const MarketPlace = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const AfficherModal = () => {
    setShowModal(true);
  };
  const AjouterArticles = () => {
    console.log({ image, price, title, category});
    setImage(null);
    setPrice('');
    setTitle('');
    setCategory('');
    setShowModal(false);
  };

  const ChangerImages = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='flex gap-x-5 items-center w-[100%]'><div className='w-[25%] '><LeftSideBar  /></div>
    <div className='flex justify-center flex-col items-center '>
      <div className='flex flex-col pb-8 w-[60%] justify-center items-center gap-10'>
        <div className=''>
          <input
            type="text"
            className='w-[25vw] p-1.5 rounded-3xl bg-slateGray text-white flex justify-center placeholder:text-white placeholder:ps-6'
            placeholder='Search products'
          />
        </div>
        <div className='flex flex-row text-white gap-5 justify-center items-center py-5'>
          <div className='text-lg bg-coolGray py-2 px-7 rounded-3xl flex flex-row items-center gap-2 hover:bg-pink'>
            <h1>Vehicle</h1>
          </div>
          <div className='text-lg bg-coolGray py-2 px-7 rounded-3xl flex flex-row items-center gap-2 hover:bg-pink'>
            <h1>Electronics</h1>
          </div>
          <div className='text-lg bg-coolGray py-2 px-7 rounded-3xl flex flex-row items-center gap-2 hover:bg-pink'>
            <h1>Appliance</h1>
          </div>
          <div className='text-lg bg-coolGray py-2 px-7 rounded-3xl flex flex-row items-center gap-2 hover:bg-pink'>
            <h1>Beauty</h1>
          </div>
        </div>
      </div>
      <div className='w-[60vw] flex flex-col gap-8'>
        <h1 className='flex text-2xl font-semi-bold'>Selection of the day</h1>
        <div className='flex flex-row gap-5'>
          <div className='w-[17vw] flex flex-col gap-3'>
            <img src={Images.car1} alt="" className='w-[16vw] h-[40vh] rounded-2xl' />
            <p className='ps-2 text-wrap font-bold'>Toyota CHR hybride première main</p>
          </div>
          <div>
            <img src={Images.car1} alt="" className='w-[16vw] h-[40vh] rounded-2xl' />
            <p className='ps-2 text-wrap font-bold'>Toyota CHR hybride première main</p>
          </div>
          <div>
            <img src={Images.car1} alt="" className='w-[16vw] h-[40vh] rounded-2xl' />
            <p className='ps-2 text-wrap font-bold'>Toyota CHR hybride première main</p>
          </div>
          <div>
            <img src={Images.car1} alt="" className='w-[16vw] h-[40vh] rounded-2xl' />
            <p className='ps-2 text-wrap font-bold'>Toyota CHR hybride première main</p>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='bg-pink px-8 py-2 text-xl text-white rounded-2xl' onClick={AfficherModal}>
            Add Article
          </button>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-2xl w-[40vw] min-h-[50vh]'>
            <h2 className='text-2xl font-bold mb-4'>Add New Article</h2>
            <div className='flex flex-col gap-4'>
              <input type="text"className='p-2 border rounded-lg'placeholder='Enter title'value={title}onChange={(e) => setTitle(e.target.value)}/>
              <input type="number" className='p-2 border rounded-lg'placeholder='Enter price' value={price}onChange={(e) => setPrice(e.target.value)}/>
              <select
                className='p-2 border rounded'value={category} onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Electronics">Electronics</option>
                <option value="Appliance">Appliance</option>
                <option value="Beauty">Beauty</option>
              </select>
              <input type="file" className='p-2 border rounded'onChange={ChangerImages}/>
              {image && <img src={image} alt="Preview" className='w-[100px] h-[100px] object-cover mt-2 rounded' />}
            </div>
            <div className='flex justify-end gap-4 mt-4'>
              <button className='bg-gray-500 text-white px-4 py-2 rounded' onClick={() => setShowModal(false)}>Cancel</button>
              <button className='bg-pink text-white px-4 py-2 rounded' onClick={AjouterArticles}>Add Article</button>
            </div>
          </div>
        </div>
      )}
    </div></div>
  );
}

export default MarketPlace;
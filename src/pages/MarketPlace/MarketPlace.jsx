import React, { useState} from 'react';
import { assets } from '../../assets';
import LeftSideBar from '../Home/Components/LeftSideBar';
import { CiSearch } from "react-icons/ci";
import Modal from 'react-modal';
import { IoMdAdd } from "react-icons/io";
import Navbar from '../../layout/navbar';

const MarketPlace = () => {
  const [selectedCategory, setSelectedCategory] = useState('vehicle');
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState('vehicle');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const [filteredCategory, setFilteredCategory] = useState([]);
  const [emptyFieldsModalIsOpen, setEmptyFieldsModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
 

  const [arrayCategory, setArrayCategory] = useState({
    vehicle: [
      { imgSrc: assets.car1, title: 'Toyota CHR hybride', description: 'Toyota CHR hybride en excellent état, faible consommation, idéale pour les trajets urbains. Année 2020, 30,000 km au compteur.', price: '22,500' },
      { imgSrc: assets.car2, title: 'Mini Cooper  Essence', description: 'Mini Cooper 3 portes avec transmission automatique. Compacte, stylée, et très bien entretenue. Année 2018, 40,000 km.', price: '18,000' },
      { imgSrc: assets.car3, title: 'Skoda Octavia Diesel', description: 'Skoda Octavia Diesel avec moteur économique, idéale pour les longs trajets. Année 2019, 50,000 km.', price: '16,500' },
    ],
    electronics: [
      { imgSrc: assets.watch, title: 'Montre Connectée Samsung Galaxy Watch', description: 'Montre connectée Samsung Galaxy Watch avec suivi de la santé, GPS intégré, et autonomie de longue durée. Compatible avec Android et iOS.', price: '299.95' },
      { imgSrc: assets.iphone, title: 'iPhone 15 Pro Max', description: 'iPhone 15 Pro Max avec écran Super Retina XDR de 6.7 pouces, puce A17 Bionic, et triple appareil photo 48MP. Capacité de stockage 256GB.', price: '1,299.95' },
      { imgSrc: assets.samsung, title: 'Samsung Galaxy S22 Ultra', description: 'Samsung Galaxy S22 Ultra avec écran AMOLED 6.8 pouces, S Pen intégré, et appareil photo 108MP. 256GB de stockage, 12GB RAM.', price: '1,199.95' },
    ],
    appliance: [
      { imgSrc: assets.lg, title: 'Réfrigérateur LG Inverter', description: 'Réfrigérateur LG Inverter avec capacité de 500 litres, technologie de refroidissement intelligent, et faible consommation d\'énergie.', price: '899.95' },
      { imgSrc: assets.four, title: 'Four encastrable Bosch', description: 'Four encastrable Bosch avec convection assistée, 10 modes de cuisson, et une capacité de 71 litres. Parfait pour une cuisson uniforme.', price: '699.95' },
      { imgSrc: assets.mecro, title: 'Micro-ondes Panasonic', description: 'Micro-ondes Panasonic avec une puissance de 1200W, technologie Inverter, et 15 programmes automatiques pour une cuisson rapide et efficace.', price: '249.95' },
    ],
    beauty: [
      { imgSrc: assets.sol, title: 'Crème solaire SPF 50', description: 'Crème solaire à large spectre SPF 50, résistante à l\'eau et idéale pour une protection quotidienne contre les rayons UV.', price: '230' },
      { imgSrc: assets.gel, title: 'Nettoyant visage purifiant', description: 'Nettoyant visage doux et purifiant, formulé avec des extraits naturels pour éliminer les impuretés sans assécher la peau.', price: '180' },
      { imgSrc: assets.vernis, title: 'Vernis à ongles longue tenue', description: 'Vernis à ongles longue tenue disponible en plusieurs teintes vibrantes, avec une formule qui sèche rapidement et résiste aux éclats.', price: '65' },
    ],
  });

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchCategory(searchValue);
    // Vérifie si la recherche correspond à une catégorie existante
    if (arrayCategory[searchValue]) {
      setSelectedCategory(searchValue);
    }

  };
  const AcheterArticle = () => {
    // Validation des champs email et message
    if (!email.trim() || !message.trim()) {
      setError("Please fill in both email and message fields.");
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Si tout est valide, procéder à l'achat
    setSuccessModalIsOpen(true)
    setShowModal(false);
    setEmail('');
    setMessage('');
    setError('');
  };

  const activeCategory = (category) => {
    setSelectedCategory(category);
    setSearchCategory('');
  };

  const AfficherModal = () => {
    setShowModal(true);
  };

  const ChangerImages = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const AjouterArticles = () => {
    if (!image || !title || !price || !description || !category) {
      setEmptyFieldsModalIsOpen(true);

      return;
    }

    const newArticle = { imgSrc: image, title, description, price: `${price}` };
    setArrayCategory((prevCategories) => ({
      ...prevCategories,
      [category]: [...prevCategories[category], newArticle],
    }));
    setImage(null);
    setPrice('');
    setTitle('');
    setCategory('vehicle');
    setShowModal(false);
  };

  const AfficherModalInfo = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
    <Navbar />
    <div className="flex gap-x-5  w-[100%]">
      <div className='w-[25%] pt-8'>
        <LeftSideBar />
        <div className='flex justify-start items-center text-2xl gap-3  cursor-pointer ps-10 pt-5'><div className='bg-gradient-to-t from-[#c17d7d] to-[#ad3e58] text-white p-2 rounded-full'><IoMdAdd className='' onClick={AfficherModal} /></div>  <button className='text-slateGray text-2xl hover:text-[#ae385e] hover:font-bold'onClick={AfficherModal} >Add Article</button></div >
      
      </div>
      <div className='flex flex-col pb-8 w-[85%] justify-center items-center gap-10'>

          <div className='flex flex-row items-end gap-10  w-[100%] justify-around'>
        <div className='shadow-lg bg-[#FBA1B7] mt-5 rounded-3xl relative '>
          <CiSearch className="text-2xl font-bold text-[#FF597B] absolute top-[50%] left-4 translate-y-[-50%] " />
          < input type="text"
            className='w-[40vw] p-1.5 rounded-3xl ps-11 bg-[#F1E4F7] py-2 border-none text-black flex justify-center placeholder:text-black '
            placeholder='Search products'value={searchCategory} onChange={handleSearch}/>
        </div>    
        <div className='rounded-3xl '>
          <button className='bg-btnColor hover:bg-hoverBtn text-white px-9 py-2 text-xl rounded-2xl font-semibold  ' 
          onClick={AfficherModal}>Add Article</button>
        </div>  
          </div>
        
        
        
        
        <div className="flex justify-center gap-5 py-3 ">
          <button
            className={`text-xl py-2 px-10 rounded-3xl  ${selectedCategory === 'vehicle' ? 'bg-hoverBtn text-white font-semibold' : 'bg-[#f3c1db] font-semibold text-white  hover:text-white'}`}
            onClick={() => activeCategory('vehicle')}
          >Vehicle</button>
          <button
            className={`text-xl py-2 px-10 rounded-3xl ${selectedCategory === 'electronics' ? 'bg-hoverBtn text-white font-semibold' : 'bg-[#f3c1db] font-semibold text-white hover:text-white'}`}
            onClick={() => activeCategory('electronics')}
          >Electronics</button>
          <button
            className={`text-xl py-2 px-10 rounded-3xl ${selectedCategory === 'appliance' ? 'bg-hoverBtn text-white font-semibold' : 'bg-[#f3c1db] font-semibold text-white hover:text-white'}`}
            onClick={() => activeCategory('appliance')}
          >Appliance</button>
          <button
            className={`text-xl py-2 px-10 rounded-3xl ${selectedCategory === 'beauty' ? 'bg-hoverBtn text-white font-semibold' : 'bg-[#f3c1db] font-semibold text-white hover:text-white'}`}
            onClick={() => activeCategory('beauty')}
          >Beauty</button>
        </div>
        <div className="grid grid-cols-3  gap-2 py-8 w-[100%]">
          {arrayCategory[selectedCategory].map((item, index) => (
            <div key={index} className=" py-3 px-5 rounded-2xl shadow-2xl w-[85%] flex flex-col gap-3">
             <div className='h-[30vh]   border-b-2  border-[#ff8db1a6]'><img src={item.imgSrc} alt={item.title} className='w-[90%] h-[100%]' /></div> 
              <div className='w-[100%] h-[15%] '><h3 className="text-xl font-bold    text-[#402B3A]">{item.title}</h3></div>
              <div className=" font-bold  w-[100%]  text-[#921A40] text-lg ">{item.price} DH</div>
              <div className='flex justify-center'>
                <button className='bg-gradient-to-b from-[#ce629f]  to-[#fc819e75] px-4 py-2 rounded-xl text-black text-xl font-semibold hover:text-[#571f39] mt-2' onClick={() => AfficherModalInfo(item)}>
                  More information
                </button>

              </div>
            </div>
          ))}
        </div>
        {/* <div className='flex justify-center'>
          <button className='bg-gradient-to-b from-[#c17d7d] to-[#d76a83] hover:from-[#af7878] hover:to-[#ae385e] px-12 py-2 text-2xl text-white rounded-2xl font-semibold mt-10 text-center' 
          onClick={AfficherModal}>
            Add Article
          </button>
        </div> */}
        {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-2xl w-[40vw] min-h-[50vh]'>
            <h2 className='text-2xl font-bold mb-4 text-[#921A40]'>Add New Article</h2>
            <div className='flex flex-col gap-4'>
              <input type="text" className='p-2 border rounded-xl' placeholder='Enter title' value={title}
                onChange={(e) => setTitle(e.target.value)} />
              <input type="number" className='p-2 border rounded-xl' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} />
              <input type="text" className='p-2 border rounded-xl' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
              <select className='p-2 border rounded' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="vehicle">Vehicle</option>
                <option value="electronics">Electronics</option>
                <option value="appliance">Appliance</option>
                <option value="beauty">Beauty</option>
              </select>
              <input type="file" className='p-2 border rounded' onChange={ChangerImages} />
              {image && <img src={image} alt="Preview" className='w-[100px] h-[100px] object-cover mt-2 rounded' />}
            </div>
            <div className='flex justify-end gap-4 mt-4'>
              <button className='bg-gray-500 text-white font-semibold px-4 py-2 rounded' onClick={() => setShowModal(false)}>Cancel</button>
              <button className=' text-white font-semibold px-4 py-2 rounded bg-gradient-to-b from-[#c17d7d] to-[#d76a83]' onClick={AjouterArticles}>Add Article</button>
            </div>
          </div>
        </div>
      )}
      {selectedItem && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg w-[80%]  flex gap-4'>
            <div className='w-[50%]  shadow-lg rounded-md'>
              <img src={selectedItem.imgSrc} alt={selectedItem.title} className='w-50 h-50' />
            </div>
            <div className='w-[50%] p-4'>
              <h2 className='text-3xl font-bold pb-4 text-[#921A40]'>{selectedItem.title}</h2>
              <p className='pb-4 text-xl'>{selectedItem.description}</p>
              <p className=' text-lg font-bold pb-4'><span className='text-[#C75B7A] pe-3 text-xl'>Price:</span> {selectedItem.price} DH</p>
              <p className='text-lg font-bold pb-4'> <span className='text-[#C75B7A] pe-3 text-xl'>Contact me :</span> {selectedItem.contact}</p>
              <div action="" className='flex flex-col gap-5'>
                <input type="email" className='w-full p-2 pb-4 border border-gray-300 rounded' placeholder='entrer email'
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea className='w-full p-2 pb-4 border border-gray-300 rounded' placeholder='Leave a message'
                  value={message} onChange={(e) => setMessage(e.target.value)} />
                {error && <p className="text-red-500">{error}</p>}
                <div className='flex flex-row gap-5 justify-center mt-4'>
                  <button className='bg-btnColor hover:bg-hoverBtn px-6 py-2 text-xl font-semibold text-white rounded-lg' onClick={() => AcheterArticle()}> Send a message</button>
                  <button className=' bg-gray-500 px-6 py-2 text-xl font-semibold text-white rounded-lg' onClick={() => setSelectedItem(false)}> Close</button>
                </div>
              </div>


            </div>
          </div>
        </div>
      )}
          <Modal isOpen={emptyFieldsModalIsOpen}
        onRequestClose={() => setEmptyFieldsModalIsOpen(false)} contentLabel="Empty Fields"
        className="fixed inset-0 flex items-center justify-center p-4"  overlayClassName="fixed inset-0 bg-black bg-opacity-60">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-[#89375F]">Incomplete Information</h2>
          <p className="text-lg ">Please fill in all required fields before proceeding.</p>
          <button
            onClick={() => setEmptyFieldsModalIsOpen(false)}
            className="rounded-full border border-none bg-[#C75B7A] text-white text-lg font-semi-bold py-3 px-6 mt-4 text-center" >
            Close</button>
        </div>
      </Modal>
      <Modal isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)} contentLabel="Success"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-[#89375F]">Message Sent !</h2>
          <p className="text-lg">We will contact you as soon as possible!</p>
          <button
            onClick={() => {
              setSuccessModalIsOpen(false);
              setSelectedItem(false)
            }}
            className="rounded-full border-none bg-[#C75B7A] text-white text-sm font-bold py-3 px-6 mt-4"
          >
            Continue
          </button>
        </div>
      </Modal>
    </div>
      
      
    </div>

    </>
  );
};

export default MarketPlace; 
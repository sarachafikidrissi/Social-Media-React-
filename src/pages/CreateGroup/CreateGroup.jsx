import React, { useRef, useState } from 'react';
import LeftSideBar from '../Home/Components/LeftSideBar';

const CreateGroup = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState("Public");

  const handleClickImg = () => {
    inputRef.current.click();
  };

  const handleChangeImg = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("privacy", privacy);
    formData.append("image", image);

    console.log({
      title,
      description,
      privacy,
      image
    });

    alert('Group created successfully!');
  };

  return (
    <div className=" min-h-screen p-10">
      <div className="flex gap-5 ">
        <LeftSideBar />
        <div className="w-full max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl ">
            <h2 className="text-xl font-bold mb-4">Create a New Group</h2>

            <div onClick={handleClickImg} className="relative w-fit mx-auto mb-6 cursor-pointer">
              {image ? (
                <img
                  className="w-40 h-40 rounded-full object-cover"
                  src={URL.createObjectURL(image)}
                  alt="Group"
                />
              ) : (
                <div className="bg-gray-200 w-40 h-40 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">Upload Image</span>
                </div>
              )}
              <input type="file" className="hidden" ref={inputRef} onChange={handleChangeImg} accept="image/*" />
            </div>

            <div className="flex justify-between mb-6">
              <div className="w-1/2">
                <label className="font-medium mb-2 block">Group Name</label>
                <input
                  className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
                  type="text"
                  placeholder="Enter group name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="font-medium mb-2 block">Privacy</label>
                <select
                  className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
                  value={privacy}
                  onChange={(e) => setPrivacy(e.target.value)}
                  required
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="font-medium mb-2 block">Description</label>
              <textarea
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Describe your group..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-btnColor text-white py-2 px-6 rounded-full hover:bg-hoverBtn transition"
              >
                Create Group
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;

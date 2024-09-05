import React, { createContext, useState, useContext } from 'react';
import { assets } from '../assets';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([{name: "sara", email: "sara@demo.com", birthday: "15/10/15", gender: "Female", password:"1234", username: "sara", userPost: [], profileImage: `${assets.barbie}`, favoritePosts: []}]);

  const [image,setImage]=useState("")
  const [posts,setPosts]=useState([])




  const addUser = (name, email, birthday, gender, password,username) => {
    setUsers((prevUsers) => [...prevUsers, { name, email, birthday, gender, password, username, userPost: [], profileImage: "", favoritePosts: [],islogedin:false}]);
  };


  return (
    <AuthContext.Provider value={{ users, setUsers, addUser, posts, setPosts, image, setImage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

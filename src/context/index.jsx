import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([{name: 'rajae', email:'bensafyrajae19@gmail.com', birthday:'19-10-2001', gender:'femme', password:1234567,username:'rajaebensafy', userPost: []}]);
  const [post, setPost] = useState([])

  const [image,setImage]=useState("")




  const addUser = (name, email, birthday, gender, password,username) => {
    setUsers((prevUsers) => [...prevUsers, { name, email, birthday, gender, password, username, userPost: [], profileImage: ""}]);
  };


  return (
    <AuthContext.Provider value={{ users, setUsers, addUser, post, setPost, image, setImage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

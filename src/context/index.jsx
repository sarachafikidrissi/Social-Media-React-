import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([{ name:"abdellah", email:"abde@gmail.com", birthday:"04-04-2002", gender:"male", password:"123", username:"majdoul", userPost: [], profileImage:``}]);
  const [market, setMarket] = useState([])

  const [image,setImage]=useState("")




  const addUser = (name, email, birthday, gender, password,username) => {
    setUsers((prevUsers) => [...prevUsers, { name, email, birthday, gender, password, username, userPost: [], profileImage: ""}]);
  };

  const addProduct = (title, price, productImg, category) => {
    setMarket((prevMarket) => [...prevMarket, {title, price, productImg, category}])
  }

  return (
    <AuthContext.Provider value={{ users, setUsers, addUser, market, addProduct, image, setImage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

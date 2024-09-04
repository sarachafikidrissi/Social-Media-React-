import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [market, setMarket] = useState([])
  const [posts, setPosts] = useState({})




  const addUser = (name, email, birthday, gender, password,username, userPost) => {
    setUsers((prevUsers) => [...prevUsers, { name, email, birthday, gender, password, username, userPost}]);
  };

  const addProduct = (title, price, productImg, category) => {
    setMarket((prevMarket) => [...prevMarket, {title, price, productImg, category}])
  }

  return (
    <AuthContext.Provider value={{ users, addUser, market, addProduct, posts, setPosts }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

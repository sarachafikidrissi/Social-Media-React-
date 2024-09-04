import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (name, email, birthday, gender, password,username) => {
    setUsers((prevUsers) => [...prevUsers, { name, email, birthday, gender, password, username }]);
  };

  return (
    <AuthContext.Provider value={{ users, addUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

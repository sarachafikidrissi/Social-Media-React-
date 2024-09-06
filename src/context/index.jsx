import React, { createContext, useState, useContext } from "react";
import { assets } from "../assets";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "sara",
      email: "sara@demo.com",
      birthday: "15/10/15",
      gender: "Female",
      password: "1234",
      username: "sara",
      userPost: [],
      profileImage: `${assets.car1}`,
      favoritePosts: [],
      isLoggedIn: false,
      friends: []
    },
    {
      name: "user2",
      email: "sara@demo.com",
      birthday: "15/10/15",
      gender: "Female",
      password: "1234",
      username: "user2",
      userPost: [],
      profileImage: `${assets.car1}`,
      favoritePosts: [],
      isLoggedIn: false,
      friends: []
    },
    {
      name: "user3",
      email: "sara@demo.com",
      birthday: "15/10/15",
      gender: "Female",
      password: "1234",
      username: "user3",
      userPost: [],
      profileImage: `${assets.car1}`,
      favoritePosts: [],
      isLoggedIn: false,
      friends: []
    },
  ]);

  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  console.log(users);

  let filterConnectedUser = users.filter((e) => e.isLoggedIn == true);

  // const { logedUser } = filterConnectedUser;

  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);

  const addUser = (name, email, birthday, gender, password, username) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name,
        email,
        birthday,
        gender,
        password,
        username,
        userPost: [],
        profileImage: "",
        favoritePosts: [],
        isLoggedIn: false,
        friends: [],
      },
    ]);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        addUser,
        posts,
        setPosts,
        image,
        setImage,
        profileImage,
        setProfileImage,
        coverImage,
        setCoverImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

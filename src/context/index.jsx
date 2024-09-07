import React, { createContext, useState, useContext } from "react";
import { assets } from "../assets";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  //! User Data
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
      friends: [],
      groupsCreated: []
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
      friends: [],
      groupsCreated: []
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
      friends: [],
      groupsCreated: []
    },
  ]);


  //! Group Data
  const [groups, setGroups] = useState([
    {
      id: 1,
      nameGrp: "Tech Enthusiasts",
      imgGrp: assets.grp1,
      membres: "150K",
      joined: []
    },
    {
      id: 2,
      nameGrp: "AI Researchers",
      imgGrp: assets.grp2,
      membres: "85K",
      joined: []
    },
    {
      id: 3,
      nameGrp: "Web Developers",
      imgGrp: assets.grp3,
      membres: "200K",
      joined: []
    },
    {
      id: 4,
      nameGrp: "Tech Enthusiasts",
      imgGrp: assets.grp1,
      membres: "150K",
      joined: []
    },
    {
      id: 5,
      nameGrp: "AI Researchers",
      imgGrp: assets.grp2,
      membres: "85K",
      joined: []
    },
    {
      id: 6,
      nameGrp: "Web Developers",
      imgGrp: assets.grp3,
      membres: "200K",
      joined: []
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
        groups: []
      },
    ]);
  };



  const addGroup = (admin, nameGrp, imgGrp, members) => {
    setGroups((prevGroups) => [
      ...prevGroups,
      {
        admin,
        nameGrp,
        imgGrp,
        members,
        joined: [],
        id: Date.now(),
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
        groups,
        setGroups
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

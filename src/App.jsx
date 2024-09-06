import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "flowbite"
import Friends from "./pages/Friends/Friends";
import Groups from "./pages/Groups/Groups";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import Setting from "./pages/Setting/Setting";
import SignUp from "./pages/SingUp/SignUp";
import LoginProfile from "./pages/LoginProfile/LoginProfile";
import Profile from "./pages/Profile/Profile";
import { AuthProvider } from "./context";
import EditProfil from "./EditProfil/EditProfil";
import MyFavorites from "./pages/Myfavorites/myfavorites";
import Accueil from "./pages/accueil/accueil";
import GroupPage from "./pages/GroupPage/GroupPage";
import CreateGroup from "./pages/CreateGroup/CreateGroup";
const App = () => {
  return (
    <AuthProvider>
      <div className=" sm-px-[5vw] md-px-[7vw] lg-px-[9vw]">
      <Routes>
        <Route path="/:username" element={<Home />} />
        <Route path="/login-profile/:username" element={<LoginProfile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/group-page" element={<GroupPage />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/market" element={<MarketPlace />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/myfavorite" element={<MyFavorites/>} />
      </Routes>
    </div>
    </AuthProvider>
  );
};

export default App;
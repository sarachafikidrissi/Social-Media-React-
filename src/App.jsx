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
const App = () => {
  return (
    <div className="py-6 px-4 sm-px-[5vw] md-px-[7vw] lg-px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-profile" element={<LoginProfile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/market" element={<MarketPlace />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { assets } from "../../assets";
import LeftSideBar from "../Home/Components/LeftSideBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import Navbar from "../../layout/navbar";

const Groups = () => {
  const {users, setUsers, groups, setGroups, joined, setJoined, enteredGroup, setEnteredGroup} = useAuth()
  let filterConnectedUser = users.filter((e) => e.isLoggedIn == true);

  const navigate = useNavigate()

  
  const handleJoin = (id) => {
    let newGroupArr = [...groups]
    let newJoined = [...joined]
    let joinedGroupIs = newGroupArr.find(e => e.id == id)
    newJoined.push(joinedGroupIs)
    setJoined(newJoined)
    let newUsers = [...users]
    let userWhoJoinedGroupIs = newUsers.find(e => e == filterConnectedUser[0])
    userWhoJoinedGroupIs.groupsJoined.push(joinedGroupIs)
    setUsers(newUsers)
    let indexOfGroupJoined = newGroupArr.findIndex(e => e === joinedGroupIs)
    newGroupArr.splice(indexOfGroupJoined, 1)
    setGroups(newGroupArr)
  };


  return (
    <>
    <Navbar />
    <div className="w-[100%] flex flex-row gap-8 ">
      <div className="w-[25%] flex flex-col ">
        <LeftSideBar />
        <div className="border-t-2 p-3 flex flex-col gap-y-5 mt-4 ">
          <h1 className="pt-1 text-2xl text-[#3b1137] font-bold ps-5 text-center ">
            Joined Groups
          </h1>
          <div className="flex flex-col gap-y-4 cursor-pointer  ">
            {joined.length > 0 &&
              joined.map((e, index) => (
                <div key={index} onClick={() => {{navigate("/group-page")}; setEnteredGroup(joined[index])}}  className="flex items-center gap-x-2 ps-5 ">
                  <img
                    src={e.imgGrp}
                    alt=""
                    srcset=""
                    className="rounded-full w-[45px] h-[45px] "
                  />
                    <h1 className="text-xl font-bold text-[#921A40] hover:text-[#b87b8f]">{e.nameGrp}</h1>
                    {/* <p className=" text-slateGray font-light"> </p> */}
                </div>
              ))}
          </div>
          
        </div>
      </div>
      <div className="groups-container grid grid-cols-3 w-[65%] gap-5 p-5 ">
        {groups.map((group) => (
          <div
            key={group.id}
            className="max-w-sm h-[50vh] flex flex-col justify-between border border-gray-200 rounded-lg shadow "
          >
            <div className=" h-[60%] ">
              <img
                className="rounded-t-lg h-full bg-cover w-full"
                src={group.imgGrp}
                alt={group.nameGrp}
              />
            </div>
            <div className="p-5 ">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-[#921A40] ">
                  {group.nameGrp}
                </h1>
              </div>

              <div className="">
                <p className="   text-xl">
                  <span className="font-bold text-[#C75B7A]"> members:</span>{" "}
                  {group.membres}
                </p>
              </div>
              <div className="flex justify-end pt-4">
                {" "}
                <button
                  onClick={() => {
                    handleJoin(group.id);
                  }}
                  className="inline-flex items-center px-12 py-2 text-xl font-semibold text-center bg-hoverBtn hover:bg-btnColor rounded-lg  text-white  "
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Groups;

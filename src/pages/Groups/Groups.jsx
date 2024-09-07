import React, { useState } from "react";
import { assets } from "../../assets";
import LeftSideBar from "../Home/Components/LeftSideBar";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const navigate = useNavigate()
  const [joined, setJoined] = useState([]);
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
  const handleJoin = (id) => {
    let newTab = [...groups];
    let newJoined = [...joined];
    let group = groups.findIndex((e) => e.id == id);
    newJoined.push(newTab[group]);
    setJoined(newJoined);
    newTab.splice(group, 1);
    setGroups(newTab);
    console.log(joined);
  };

  console.log(joined);

  return (
    <div className="w-[100%] flex flex-row gap-8">
      <div className="w-[25%] flex flex-col ">
        <LeftSideBar />
        <div className="border-t-2 p-3 flex flex-col gap-y-5">
          <h1 className="pt-1 text-xl font-bold ps-5 text-center text-pink">
            Groups
          </h1>
          <div onClick={() => {navigate("/group-page")}} className="flex flex-col gap-y-4 cursor-pointer ">
            {joined.length > 0 &&
              joined.map((e, index) => (
                <div className="flex items-center gap-x-2 ps-5 ">
                  <img
                    src={e.imgGrp}
                    alt=""
                    srcset=""
                    className="rounded-full w-[45px] h-[45px]"
                  />
                    <h1 className="text-xl font-bold text-[#921A40] hover:text-[#b87b8f]">{e.nameGrp}</h1>
                    {/* <p className=" text-slateGray font-light"> </p> */}
                </div>
              ))}
          </div>
          
        </div>
      </div>
      <div className="groups-container grid grid-cols-3 w-[65%] gap-5 ">
        {groups.map((group) => (
          <div
            key={group.id}
            className="max-w-sm  border border-gray-200 rounded-lg shadow  "
          >
            <div>
              <img
                className="rounded-t-lg"
                src={group.imgGrp}
                alt={group.nameGrp}
              />
            </div>
            <div className="p-5">
              <div>
                <h1 className="pb-2 text-2xl font-bold tracking-tight text-[#921A40] ">
                  {group.nameGrp}
                </h1>
              </div>

              <div>
                <p className="pb-3   text-xl">
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
                  className="inline-flex items-center px-12 py-2 text-xl font-semibold text-center bg-gradient-to-b from-[#c75b79e7]  to-[#fc819ea1] rounded-lg  text-back  "
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;

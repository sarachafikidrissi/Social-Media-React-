import React, { useState } from 'react'
import { assets } from '../../assets';

const Groups = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      nameGrp: "Tech Enthusiasts",
      imgGrp: assets.grp1,
      membres: 150,
    },
    {
      id: 2,
      nameGrp: "AI Researchers",
      imgGrp: assets.grp2 ,
      membres: 85,
    },
    {
      id: 3,
      nameGrp: "Web Developers",
      imgGrp: assets.grp3 ,
      membres: 200,
    },
  ]);

  return (
    <div className="groups-container grid grid-cols-3 w-[70%] gap-5 justify-end">
      {groups.map((group) => (
        <div key={group.id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
          <div>
            <img className="rounded-t-lg"src={group.imgGrp}alt={group.nameGrp}/>
          </div>
          <div className="p-5">
            
              <div><h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{group.nameGrp}</h1></div>
            
            <div><p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> members: {group.membres}</p></div>
           <dir> <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Join
            </button></dir>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Groups

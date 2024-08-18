import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white h-screen w-64 py-6 px-4  flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-10">DEXCHANGE</h2>
        <nav>
          <ul className="space-y-2">
            <li className="py-2 px-4 flex items-center justify-between">
              {" "}
              <span className="flex items-center gap-1">
                <IoSettingsOutline />
                <Link to= "/dashboard">
                <button>Configuration</button> 
                </Link>
               
              </span>
              <IoIosArrowDown />{" "}
            </li>
            <li className="py-2 px-12  bg-blue-800 rounded "><Link to="/dashboard"> <button> LISTE USERS</button></Link></li>
            <li className="py-2 px-4 flex items-center justify-between  text-gray-400">
              {" "}
              <span className="flex items-center gap-1">
                {" "}
                <GoFileDirectory /> Nouveau{" "}
              </span>
              <IoIosArrowUp />
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="  text-white py-2 px-4  mt-8 w-full flex items-center gap-2">
          <LuLogOut className="size-16" />
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import photo from '../assets/userImg.jpg'

const Entete: React.FC = () =>{
  return (
    <div>
      <header className=" bg-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">utilisateurs</span>
        </div>
        <div className="flex items-center space-x-4">
          <img src={photo} alt="Profile" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Omar FALL</span>
            <span className="text-sm font-medium">fallo@dexchage.sn</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Entete;

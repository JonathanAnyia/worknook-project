import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, activeTab, setActiveTab, setProfileSettings }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
     transition-transform duration-300 ease-in-out bg-gray-900 w-64  p-4 text-white lg:static lg:translate-x-0 z-10`}> 
      
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold">Logo</h2>
        <button className="lg:hidden text-white font-bold" onClick={toggleSidebar}>✕</button>
      </div>
      <nav className="pl-4">
        <Link
            to="/"
            className="block md:text-[1.2rem] text-lg active:bg-sky-600 p-2 my-4 font-semibold rounded-md"
          >
            Home
        </Link>
      <ul>
          <li
            className={`block md:text-[1.2rem] text-lg active:bg-sky-600 p-2 my-4 font-semibold rounded-md cursor-pointer ${activeTab === 'dashboard' ? 'bg-sky-600' : ''}`}
            onClick={() => {
              setActiveTab('dashboard');
              setProfileSettings(false); // Reset profile section state
            }}
          >
            Dashboard
          </li>
          <li
            className={`block md:text-[1.2rem] text-lg  active:bg-sky-600 p-2 my-4 font-semibold rounded-md cursor-pointer ${activeTab === 'cleaning-requests' ? 'bg-sky-600' : ''} `}
            onClick={() => {
              setActiveTab('cleaning-requests');
              setProfileSettings(false); // Reset profile section state
            }}
          >
            Service requests
          </li>
          <li
            className={`block text-lg active:bg-sky-600 p-2 my-4 font-semibold rounded-md cursor-pointer ${activeTab === 'collection-points' ? 'bg-sky-600' : ''} `}
            onClick={() => {
              setActiveTab('collection-points');
              setProfileSettings(false); // Reset profile section state
            }}
          >
            Collection Points
          </li>
      </ul>
      </nav>
      <div className="mt-auto absolute bottom-4  cursor-pointer">
        <div className="pl-4 font-semibold">
          <button className="text-white mt-8 w-full text-left p-2 md:text-[1.2rem] text-lg">Logout</button>
          <button className="text-white mt-2 w-full text-left p-2 md:text-[1.2rem] text-lg">Support</button>
        </div>
         <div className={`active:bg-sky-600   rounded-md cursor-pointer ${activeTab === 'profile-settings' ? 'bg-sky-600' : ''} `}
        onClick={() => {
          setActiveTab('profile-settings'); // Clear other active tabs
          setProfileSettings(false); // Show Notification preferences
        }}>
          <div className=" left-4 flex items-center pl-4 my-4 text-sm">
              <img src="https://via.placeholder.com/50" alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="m-2 font-semibold rounded-md">
                <p className="font-bold">John Doe</p>
                <p className="text-sm">johndoe@gmail.com</p>
              </div>
          </div>
      </div>
      </div>
     
      
     
    </div>
  );
};

export default Sidebar;




 {/*
        <div className="absolute bottom-4 left-4 flex items-center">
          <img src="https://via.placeholder.com/50" alt="Profile" className="w-10 h-10 rounded-full" />
          <div className="m-2 font-semibold rounded-md">
            <p className="font-bold">John Doe</p>
            <p className="text-sm">johndoe@gmail.com</p>
          </div>
        </div>
       */}




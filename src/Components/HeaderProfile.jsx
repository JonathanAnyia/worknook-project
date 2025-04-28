import React from 'react';

const HeaderProfile = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-900 w-[100dvw] lg:w-auto shadow p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-white text-2xl lg:hidden">☰</button>
      <h1 className="text-xl text-white font-bold">Dashboard</h1>
    </header>
  );
};

export default HeaderProfile;

import React, { useState, useRef } from "react";

const PersonalInfo = () => {
  const [fullName, setFullName] = useState("Abe John");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState("/person-placeholder.png");
  const fileInputRef = useRef(null);

  const handleSave = () => {
    
    console.log("Saved changes!");
  };

  const handleCancel = () => {
    
    console.log("Changes cancelled.");
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Personal information</h1>
      <p className="text-gray-500 mb-6">Manage and update your personal information</p>

      {/* Profile Picture */}
      <div className="flex items-center mb-6">
        <div className="relative w-16 h-16">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-full border border-gray-300 cursor-pointer"
            onClick={handleImageClick}
          />
          <button 
            className="absolute bottom-0 right-0 bg-sky-600 text-white rounded-full p-1 cursor-pointer"
            onClick={handleImageClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">New email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">New number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={handleCancel}
          className=" text-gray-700 px-4 py-2 font-semibold rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-gray-900 text-white px-4 py-2 font-semibold rounded-md hover:bg-sky-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
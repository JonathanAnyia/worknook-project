import React, { useState } from 'react';

const EyeOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeClosedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving new password');
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Cancelling password change');
  };

  return (
    <div className="py-8 px-4 rounded-lg max-w-2xl mx-auto shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Security</h1>
      <p className="text-gray-600 mb-4">Manage your account security</p>
      
      <h2 className="font-semibold text-[1.3rem] mb-6">Change your password</h2>
      
      <div className="space-y-4 mb-8">
        <div className="relative">
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current password"
            className="w-full p-3 border rounded-lg pr-12"
          />
          <button 
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showCurrentPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        </div>
        
        <div className="relative">
          <input
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            className="w-full p-3 border rounded-lg pr-12"
          />
          <button 
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showNewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleCancel}
          className="px-6 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-gray-900 font-semibold text-white rounded-md hover:bg-sky-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Security;
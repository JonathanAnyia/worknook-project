import React, { useState } from 'react';
import NotificationPreferences from './NotificationPreferences';
import Security from '../Components/Security';
import PersonalInfo from './PersonalInfo';

const ProfileSettings = () => {
    const [selectedOption, setSelectedOption] = useState('notification');

    const renderContent = () => {
      switch (selectedOption) {
        case 'personalInfo':
          return <PersonalInfo />;
        case 'notification':
          return <NotificationPreferences />;
        case 'security':
          return <Security />;
        default:
          return <PersonalInfo />;
      }
    };
  
    return (
      <div className="min-h-screen flex flex-col lg:flex-row px-2">
  
        {/* Sidebar / Horizontal Buttons */}
        <div
          className={`lg:w-1/4 w-full lg:h-auto h-auto flex lg:flex-col flex-row gap-2 justify-between  lg:justify-start lg:p-4 mb-2 `}>
          <button
            className={`p-2 w-[30%] md:text-left text-center text-sm lg:text-[1rem] font-semibold rounded-lg lg:w-auto ${selectedOption === 'personalInfo' ? 'bg-gray-300' : ''}`}
            onClick={() => setSelectedOption('personalInfo')}
          >
            Personal Information
          </button>
          <button
            className={`p-2 w-[30%] md:text-left text-center text-sm lg:text-[1rem] font-semibold rounded-lg lg:w-auto ${selectedOption === 'notification' ? 'bg-gray-300' : ''}`}
            onClick={() => setSelectedOption('notification')}
          >
            Notification Preferences
          </button>
          <button
            className={`p-2 w-[30%] md:text-left text-center text-sm lg:text-[1rem] font-semibold rounded-lg lg:w-auto ${selectedOption === 'security' ? 'bg-gray-300' : ''}`}
            onClick={() => setSelectedOption('security')}
          >
            Security
          </button>
        </div>
  
        {/* Content Section */}
        <div className="lg:w-3/4 w-full">
          {renderContent()}
        </div>
      </div>
    );
};

export default ProfileSettings;

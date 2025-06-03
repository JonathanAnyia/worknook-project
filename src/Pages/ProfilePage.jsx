import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import HeaderProfile from '../Components/HeaderProfile';
import DashboardContent from '../Components/DashboardContent';
import CleaningRequests from '../Components/CleaningRequests';
import CollectionPoint from '../Components/CollectionPoint';
import ProfileSettings from '../Components/ProfileSettings';
import ArtisanBg from "../assets/ArtisanBg.png" 

function ProfilePage() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showProfileSettings, setProfileSettings] = useState(false); // New state for profile click
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const renderContent = () => {
        if (showProfileSettings) {
            return <ProfileSettings />; // Render Profile Settings when the profile section is clicked
          }
      switch (activeTab) {
        case 'dashboard':
          return <DashboardContent />;
        case 'service-requests':
          return <CleaningRequests />;
        case 'profile-settings':
          return <ProfileSettings />;
        default:
          return <DashboardContent />;
      }
    };

    const user = JSON.parse(localStorage.getItem('worker')) || {};
    console.log(user)
  
    return (
        <div className="flex h-screen relative" style={{ backgroundImage: `url("${ArtisanBg}")` }}>
            <div className="absolute inset-0 bg-blue-100 bg-opacity-10 -z-10"></div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} setActiveTab={setActiveTab} setProfileSettings={setProfileSettings} />
            <div className="flex flex-col flex-1 md:overflow-hidden">
                <HeaderProfile toggleSidebar={toggleSidebar} />
                <div className=" p-1 md:overflow-y-scroll">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;







{/* <div className="flex min-h-screen">
<Sidebar
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  setProfileSettings={setProfileSettings} // Pass down the state setter for profile click
/>
<div className="flex-1 p-6 bg-gray-50">
  {renderContent()}
</div>
</div> */}


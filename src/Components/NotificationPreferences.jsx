import React, { useState } from 'react';

const NotificationPreferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [textNotifications, setTextNotifications] = useState(false);

  return (
    <div className="min-h-[40%] bg-white bg-opacity-10 flex justify-center">
      <div className=" w-full max-w-3xl rounded-lg shadow-lg px-4 py-7 ">
        <h2 className="text-2xl  font-bold text-gray-900 mb-4">Notification preferences</h2>
        <p className="text-gray-600 mb-8 font-semibold">Manage and update how you receive notifications.</p>

        {/* Notification Settings */}
        <div className="space-y-6">
            <div className='font-semibold text-[1.3rem]'>General Notifications</div>
          {/* Email Notifications */}
          <div className="flex items-center gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="sr-only peer"
              />
              <div className="w-11 h-7  bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
            </label>
            <div>
              <h3 className="text-lg  font-medium text-gray-800">Email notifications</h3>
              <p className="text-gray-500 text-sm">
                We will send updates associated with your role to the email address associated with your account.
              </p>
            </div>
          </div>

          {/* Text Message Notifications */}
          <div className="flex items-center gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={textNotifications}
                onChange={() => setTextNotifications(!textNotifications)}
                className="sr-only peer"
              />
              <div className="w-11 h-7  bg-gray-200  rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
              </label>
            <div>
              <h3 className="text-lg  font-medium text-gray-800">Text message</h3>
              <p className="text-gray-500 text-sm">
                We will send you sensitive updates and activities regarding your role.
              </p>
            </div>
            
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-8 space-x-4">
          <button className="text-gray-500 hover:text-gray-700 font-semibold">Cancel</button>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-sky-600">Save</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;

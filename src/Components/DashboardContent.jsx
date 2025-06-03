import React from 'react';
import ArtisanBg from "../assets/ArtisanBg.png";

const DashboardContent = () => {
  const recentRequests = [
    { date: '7 July 2024', hours: '2hrs', type: 'Standard', status: 'Completed' },
    { date: '7 July 2024', hours: '2hrs', type: 'Standard', status: 'Completed' },
    { date: '7 July 2024', hours: '2hrs', type: 'Standard', status: 'Completed' },
    { date: '7 July 2024', hours: '2hrs', type: 'Standard', status: 'Completed' },
    { date: '7 July 2024', hours: '2hrs', type: 'Standard', status: 'Completed' },
    { date: '7 July 2024', hours: '2hrs', type: 'Standard', status: 'Completed' },
    { date: '7 July 2024', hours: '2hrs', type: 'Standard', status: 'Completed' },
  ];


  const user = JSON.parse(localStorage.getItem('worker')) || {};
  return (
    <div className="h-full min-h-screen relative overflow-hidden" style={{ backgroundImage: `url("${ArtisanBg}")` }}>
      <div className="absolute inset-0 bg-blue-100 bg-opacity-10 -z-10"></div>

      {/* Main content area */}
      <main className="w-[95vw] md:w-[80vw] px-3 py-6 sm:px-3 lg:px-8 mx-auto overflow-x-hidden ">
       
        <div className="bg-gray-50 md:w-[100%] bg-opacity-20 p-4 sm:p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Personal information</h2>
        <div className="flex flex-col md:flex-row gap-6">
          
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.654 9.172a3.345 3.345 0 116.692 0 3.345 3.345 0 01-6.692 0zM12 18.61a7.267 7.267 0 01-5.915-3.016 5.336 5.336 0 0111.83 0A7.267 7.267 0 0112 18.611z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          {/* User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={user?.name} readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={user?.email} readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
            </div>
            {/* <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
              <input type="text" id="userName" name="userName" placeholder="Username" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value="081111111111" readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
            </div> */}
          </div>
        </div>
    </div>


        {/* Recent Service Requests */}
        <div className="bg-white md:w-[100%] bg-opacity-20 p-4 sm:p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[1rem] md:text-xl font-semibold">Recent Service Requests</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm md:text-[1rem] font-semibold">View All</button>
          </div>
          {/* Ensure horizontal scrolling when content exceeds the screen size */}
          <div className="overflow-x-auto w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Hours</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentRequests.map((request, index) => (
                  <tr key={index}>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-900">{request.date}</span>
                    </td>
                    <td className="px-4 py-4  whitespace-nowrap text-sm text-gray-500">{request.hours}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{request.type}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardContent;




// //  {/* Header */}
// //  <header className="bg-white shadow-sm">
// //  <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
// //    <div className="flex items-center">
// //      <div className="bg-sky-600 text-white font-bold py-2 px-4 rounded mr-4">
// //        Logo
// //      </div>
// //      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
// //    </div>
// //    <button className="p-2 rounded-full hover:bg-gray-100">
// //      &#128276; {/* Bell icon Unicode */}
// //    </button>
// //  </div>
// // </header>


{/*  */}
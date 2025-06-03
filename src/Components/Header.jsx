import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem('user')) || {};
  // Sidebar component
  const Sidebar = ({ isOpen, toggleSidebar }) => {
 console.log(user)
    return (
      <div
        className={`fixed inset-y-0 left-0 transform ${ isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform  duration-300 ease-in-out bg-gray-800 w-64 p-4 text-white z-10 `}
      >
        <div className="flex justify-end mb-8">
          <button className="text-white font-semibold" onClick={toggleSidebar}>
            ✕
          </button>
        </div>
        <nav className="space-y-4 pl-6">
          <ul className="gap-8">
            <li className="cursor-pointer">
              <Link
                to="/"
                className={`hover:text-blue-600 font-bold transition-colors duration-300 block text-lg active:bg-sky-600 p-3 rounded-md text-gray-300
                }`}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/AboutPage"
                className={`hover:text-blue-600 font-bold transition-colors duration-300 block text-lg active:bg-sky-600 p-3 rounded-md text-gray-300
                  }`}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/Services"
                className={`hover:text-blue-600 font-bold transition-colors duration-300 block text-lg active:bg-sky-600 p-3 rounded-md text-gray-300
                  }`}
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/ContactPage"
                className={`hover:text-blue-600 font-bold transition-colors duration-300 block text-lg active:bg-sky-600 p-3 rounded-md text-gray-300
                  }`}
              >
                Contact
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/ProfilePage"
                className={`hover:text-blue-600 font-bold transition-colors duration-300 block text-lg active:bg-sky-600 p-3 rounded-md text-gray-300
                  }`}
              >
                Profile Page
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="/SignUpRole"
                className={`hover:text-blue-600 font-bold transition-colors duration-300 block text-lg active:bg-sky-600 p-3 rounded-md text-gray-300
                  }`}
              >
                Sign Up Role
              </Link>
            </li>
          </ul>
          <div className="flex flex-col ">
            <Link
              to="/Login"
              className={`hover:text-blue-600 font-bold transition-colors duration-300 block text-lg active:bg-sky-600 p-3 rounded-md ${user ? 'hidden' : 'hidden'} text-gray-300
                }`}
            >
              Sign In
            </Link>
            <Link
              to="/SignUp"
              className={`bg-sky-600 ${user ? 'hidden' : 'block'} text-white ml-2 px-4 py-2 rounded hover:bg-blue-700 w-fit text-lg font-semibold `}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    );
  };

  return (
    <header
      className={`lg:py-4 py-1 px-6 gap-4 flex justify-between items-center fixed w-full z-20 transition-all duration-300 ${
        scrolled ? "bg-white text-blue-500 shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`text-2xl font-bold ${
          scrolled ? "text-blue-500" : "text-gray-300"
        }`}
      >
        Logo
      </div>
      <ul className="gap-6 hidden md:flex">
        <li className="cursor-pointer">
          <Link
            to="/"
            className={`hover:text-blue-600 font-semibold transition-colors duration-300 ${
              scrolled ? "text-blue-500" : "text-gray-300"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/AboutPage"
            className={`hover:text-blue-600 font-semibold transition-colors duration-300 ${
              scrolled ? "text-blue-500" : "text-gray-300"
            }`}
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/Services"
            className={`hover:text-blue-600 font-semibold transition-colors duration-300 ${
              scrolled ? "text-blue-500" : "text-gray-300"
            }`}
          >
            Services
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/ContactPage"
            className={`hover:text-blue-600 font-semibold transition-colors duration-300 ${
              scrolled ? "text-blue-500" : "text-gray-300"
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/ProfilePage"
            className={`hover:text-blue-600 ${user ? 'hidden' : 'block'}   font-semibold transition-colors duration-300 ${
              scrolled ? "text-blue-500" : "text-gray-300"
            }`}
          >
            ProfilePage
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/SignUpRole"
            className={`hover:text-blue-600  ${user ? 'hidden' : 'block'} font-semibold transition-colors duration-300 ${
              scrolled ? "text-blue-500" : "text-gray-300"
            }`}
          >
           SignUp Role
          </Link>
        </li>
      </ul>
      <div className="space-x-4 hidden md:flex">
        <Link
          to="/Login"
          className={`hover:text-blue-600 ${user ? 'hidden' : 'block'} py-2 px-4 rounded font-semibold transition-colors duration-300 ${
            scrolled ? "text-blue-500" : "text-gray-300"
          }`}
        >
          Sign In
        </Link>
        <Link
          to="/SignUp"
          className={`bg-sky-600 text-white px-4 py-2 ${user ? 'hidden' : 'block'} rounded hover:bg-blue-700`}
        >
          Sign Up
        </Link>
      </div>
      <div className="p-4 flex justify-between items-center md:hidden">
        <button
          onClick={toggleSidebar}
          className={`text-2xl font-semibold ${
            scrolled ? "text-blue-500 bg-transparent" : "text-white"
          }`}
        >
          &#9776;
        </button>
      </div>

      {/* Render Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;






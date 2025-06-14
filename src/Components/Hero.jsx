import React, { useState } from "react";
import LandingImg from "../assets/LandingImg.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <section
      className="h-[60vh] md:h-[50vh] lg:h-[75vh] bg-cover bg-center text-center  relative"
      style={{ backgroundImage: `url("${LandingImg}")` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 pt-16">
        <h1 className="md:text-4xl text-2xl font-bold mb-6 md:px-[7rem] lg:px-[10rem] text-white">
          Experience the Difference of Professional Artisan Services
        </h1>
        <p className="md:text-lg text-[1rem] mb-6 text-gray-300 font-normal">
          Reliable and professional Artisan services tailored to meet your needs
        </p>
        <div className="space-x-4">
          <button className="bg-none md:py-3 md:px-6 py-2 px-4 rounded font-semibold text-white">
            <Link to="/Services">View Services</Link>
          </button>
          <button className="bg-sky-600 text-white md:py-3 md:px-6 py-2 px-4 font-semibold rounded">
            Get Started
          </button>
        </div>
        <div>
          <input
            onChange={handleSearch}
            value={search}
            className="focus:outline-0 bg-white/80 border-gray-300 w-1/3 my-3 rounded-full py-4 px-8  outline-0"
            placeholder="Search"
            type="text"
          />
          <div>
            <div className="flex text-black items-center gap-2 px-7">
              <FaSearch className="text-4xl" />
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from 'react';
// import LandingImg from "../assets/LandingImg.png";

// const Hero = () => {
//   return (

//     <section className="md:h-screen h-[70vh] bg-cover bg-center text-center text-white " style = {{backgroundImage: `url("${LandingImg}")`}} >
//       <div className='bg-black inset-0 bg-opacity-60 w-full'></div>
//       <div className="flex flex-col justify-center  h-full px-8">
//         <h1 className="md:text-4xl text-2xl font-bold mb-4">Experience the Difference of Professional Cleaning</h1>
//         <p className="md:text-lg text-[1rem] mb-6">Reliable and professional cleaning services tailored to meet your needs</p>
//         <div className="space-x-4">
//           <button className="bg-none md:py-3 md:px-6 py-2 px-4 rounded font-semibold">View Services</button>
//           <button className="bg-sky-600 text-white md:py-3 md:px-6 py-2 px-4 font-semibold rounded">Get Started</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

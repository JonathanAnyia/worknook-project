import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sky-600  py-2 text-center md:text-justify flex flex-col md:flex-row justify-evenly">
      <div className="mb-4 mt-2 text-white">
        <div className="font-bold text-lg">Logo</div>
      </div>
      <div className=" mb-4 mt-2 flex flex-col gap-2 z-50 ">
        <h3 className=' text-gray-100 font-semibold opacity-[50%] text-[1.1rem] md:mb-1 '>INFO</h3>
          <ul className='text-white space-y-3'>
            <li className='cursor-pointer'><Link to="/AboutPage" className="hover:font-semibold">About us</Link></li>
            <li className='cursor-pointer'><Link to="/Services" className="hover:font-semibold">Services</Link></li>
            <li className='cursor-pointer'><Link to="/ContactPage" className="hover:font-semibold">Contacts</Link></li>
          </ul>
      </div>
      <div className="mb-4 mt-2 flex flex-col gap-2">
        <h3 className=' text-gray-100 font-semibold opacity-[50%] text-[1.1rem] md:mb-1'>CONTACT US</h3>
        <p className='text-white'>+234 980 971-24-19</p>
        <p className='text-white'>ynotech@gmail.com</p>
      </div>
      <div className="mb-4 mt-2 flex flex-col gap-2">
        <h3 className=' text-gray-100 font-semibold opacity-[50%] text-[1.1rem] md:mb-1'>FIND US</h3>
        <p className='text-white'>Jos</p>
        <p className=' text-gray-100 opacity-[50%]'>Everyday from 10am to 8pm</p>
      </div>
      
    </footer>
  );
};

export default Footer;

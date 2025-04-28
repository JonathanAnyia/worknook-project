import React from 'react';
import LandingPage from '../assets/LandingImg.png';

const CTA = () => {
  return (
    <section id="cta" className="py-12  bg-sky-600 text-white flex justify-between w-full md:w-[80%] md:rounded-3xl mx-auto mb-12  ">
      <div className="px-[.8rem] lg:px-[2rem] flex flex-col justify-center w-full md:w-[60%]">   
          <h2 className="md:text-[2rem] lg:text-[2.5rem] text-3xl font-semibold md:mb-3 ">Feel The Push ?</h2>
          <h2 className="md:text-[2rem] lg:text-[2.5rem] text-3xl font-semibold mb-4">Join Us For Free</h2>
          <p className="mb-6 font-thin">Enter your email Below to start the Process.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email Address" className="py-2 px-4 rounded-md w-full " />
            <button type="submit" className="bg-blue-300 text-gray-800 font-semibold w-fit px-2 md:px-3 rounded-md text-sm md:text-[1rem]">SignUp</button>
          </form>
      </div>
      <div>
        <img src={LandingPage} className='rounded-2xl hidden md:flex pr-[2rem]'/>
      </div>
    </section>
  );
};

export default CTA;

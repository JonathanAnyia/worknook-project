import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Hero from "../Components/Hero"
import CTA from "../Components/CTA"
import ArtisanBg from "../assets/ArtisanBg.png" 
import Mission from "../assets/Mission.png"
import AboutImg from "../assets/AboutImg.png";


export default function Services(){
return(
    <div className='relative' style={{ backgroundImage: `url("${ArtisanBg}")` }}>
      <div className="absolute inset-0 bg-blue-100 bg-opacity-20"></div>
      <Header />
      <Hero />

      <section className="py-16 md:px-[3rem] lg:px-[8rem]">
            <div className="container mx-auto px-4">
              <div className="flex gap-8 md:gap-[6rem] flex-wrap ">
                <div className='flex flex-col md:flex-row md:gap-[2.5rem] lg:gap-[3rem]'>
                  <div>
                    <img src={Mission} className='rounded-lg '/>
                  </div>
                  <div className="w-full mb-8 pt-[1rem] flex flex-col justify-center">
                    <span className="bg-sky-600 w-fit text-white px-3 py-1 mb-2 rounded-full  text-sm font-semibold tracking-wide">
                      Mission
                    </span>
                    <h2 className="text-lg md:text-2xl font-bold md:mb-4 mb-3">Mission</h2>
                    <p>Our mission is to revolutionize cleaning in the community by providing efficient, reliable, and sustainable solutions that benefit both the environment and the community.</p>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-[2.5rem] lg:gap-[3rem]'>
                  <div className='flex md:hidden'>
                    <img src={AboutImg} className='rounded-lg'/>
                  </div>
                  <div className="w-full mb-8 pt-[1rem] flex flex-col justify-center">
                    <span className="bg-sky-600 w-fit text-white px-3 py-1 mb-2 rounded-full  text-sm font-semibold tracking-wide">
                      Vision
                    </span>
                    <h2 className="text-lg md:text-2xl font-bold md:mb-4 mb-3">Vision</h2>
                    <p>Our vision is to revolutionize cleaning in the community by providing efficient, reliable, and sustainable solutions that benefit both the environment and the community.</p>
                  </div>
                  <div className='hidden md:flex'>
                    <img src={AboutImg} className='rounded-lg'/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <CTA />
        <Footer />
    </div>
)

}
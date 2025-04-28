import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CTA from '../Components/CTA';
import AboutImg from "../assets/AboutImg.png";
import Mission from "../assets/Mission.png"
import ArtisanBg from "../assets/ArtisanBg.png" 



const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col  relative" style={{ backgroundImage: `url("${ArtisanBg}")` }}>
      <div className="absolute inset-0 bg-blue-100 bg-opacity-20"></div>
     
      <Header />
      <main className="flex-grow">
          <section className="h-[60vh] md:h-[50vh] lg:h-[75vh]  bg-cover bg-center text-center text-white relative"
          style={{ backgroundImage: `url("${AboutImg}")` }}>
            
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          
          <div className="relative z-10 flex flex-col justify-center h-full pt-[4rem]">
            <h1 className="md:text-4xl text-2xl font-bold mb-6 md:px-[10rem] px-8 text-white">
              About Our Service Systems
            </h1>
            <p className="md:text-lg text-[1rem] mb-6 text-gray-300 font-normal px-4">
              Learn more about our mission to create a productive, more friendly environment through innovative blue collar solutions.
            </p>
            <div className="space-x-4">
              <button className="bg-none md:py-3 md:px-6  py-2 px-4 rounded font-semibold">
                Our Values
              </button>
            </div>
          </div>
        </section>

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
                  <p>Our mission is to produce productive individuals in the community by providing efficient, reliable, and sustainable solutions that benefit both the environment and the community.</p>
                </div>
              </div>

              <div className='flex flex-col md:flex-row md:gap-[2.5rem] lg:gap-[3rem]'>
                <div className='flex md:hidden'>
                  <img src={AboutImg} className='rounded-lg'/>
                </div>
                <div className="w-full md:mb-8 pt-[1rem] flex flex-col justify-center">
                  <span className="bg-sky-600 w-fit text-white px-3 py-1 mb-2 rounded-full  text-sm font-semibold tracking-wide">
                    Vision
                  </span>
                  <h2 className="text-lg md:text-2xl font-bold md:mb-4 mb-3">Vision</h2>
                  <p>Our vision is to encourage the development of blue-collar services in the community by providing efficient, reliable, and sustainable solutions that benefit both the environment and the community.</p>
                </div>
                <div className='hidden md:flex'>
                  <img src={AboutImg} className='rounded-lg'/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center px-4 relative">
          
          
            <div className='text-center'>
              <span className="bg-sky-600 text-white px-3 py-1 rounded-full  text-sm font-semibold tracking-wide ">
                  Our Values
              </span>
              <h2 className="md:text-3xl text-[1.5rem] font-bold mt-3 mb-1">Our Values</h2>
              <p className="text-center">Our core principles guide everything we do, driving us to deliver exceptional design solutions with creativty, innovation, and integrity. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-8 mt-6 z-10 mb-6 md:mb-10">
              <div className='bg-white px-3 py-4 text-center flex flex-col gap-3 justify-center items-center rounded-md'>
                <h2 className='font-bold text-xl md:text-[1.5rem]'>Reliability</h2>
                <p>Ensuring every service is completed efficiently and on time.</p>
              </div>
              <div className='bg-white px-3 py-4 text-center flex flex-col gap-3 justify-center items-center rounded-md'>
                <h2 className='font-bold text-xl md:text-[1.5rem]'>Professionalism</h2>
                <p>Upholding high standards in service delivery and customer interaction.</p>
              </div>
              <div className='bg-white px-3 py-4 text-center flex flex-col gap-3 justify-center items-center rounded-md'>
                <h2 className='font-bold text-xl md:text-[1.5rem]'>Innovation</h2>
                <p>Embracing technology and best practices to enhance eefficiency.</p>
              </div>
              <div className='bg-white px-3 py-4 text-center flex flex-col gap-3 justify-center items-center rounded-md'>
                <h2 className='font-bold text-xl md:text-[1.5rem]'>Customer Focus</h2>
                <p>Prioritising customer satisfaction and building long-term relationships.</p>
              </div>
              <div className='bg-white px-3 py-4 text-center flex flex-col gap-3 justify-center items-center rounded-md'>
                <h2 className='font-bold text-xl md:text-[1.5rem]'>Integrity</h2>
                <p>Operating with honesty and transparency in all business dealings.</p>
              </div>
              <div className='bg-white px-3 py-4 text-center flex flex-col gap-3 justify-center items-center rounded-md'>
                <h2 className='font-bold text-xl md:text-[1.5rem]'>Professionalism</h2>
                <p>Upholding high standards in service delivery and customer interaction.</p>
              </div>
            </div>
         
        </section>

      <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
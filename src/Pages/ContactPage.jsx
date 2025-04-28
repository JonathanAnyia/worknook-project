import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LandingImg from "../assets/LandingImg.png";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${LandingImg}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="bg-white bg-opacity-50 md:rounded-[1.5rem] rounded-[.7rem] shadow-lg p-5 md:p-10 z-10 max-w-4xl w-full mt-[7rem] mb-[2rem]">
          <div className="flex justify-center mb-4">
            <button className="bg-sky-600 text-white font-semibold py-2 px-4 rounded-2xl">
              Contact Us
            </button>
          </div>
          <div className="text-center mb-6">
            <h2 className="md:text-4xl text-[1.5rem] font-bold text-black">
              Get in Touch
            </h2>
            <p className="text-lg text-black">
              Any question or remarks? Just write us a message!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Left Section - Contact Info */}
            <div className="bg-white bg-opacity-60 p-6 md:rounded-[2rem] rounded-[1rem] w-full md:w-1/3 flex flex-col items-center shadow-md gap-3">
              <div className="mb-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-blue-100 w-10 h-10 rounded-full mb-2">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7-5 7 5v6a8 8 0 11-14 0V8z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="font-bold md:text-xl text-[1rem]">
                    Call To Us
                  </h4>
                </div>

                <p className="text-gray-600">
                  Call us for immediate support, inquiries, or to discuss your
                  next project.
                </p>
                <p className="font-semibold text-gray-800 mt-2">
                  Phone: +234 (323) 275-1718
                </p>
              </div>

              <div className=" border border-gray-400 w-full p"></div>

              <div className="mt-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-blue-100 w-10 h-10 rounded-full mb-2">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v8"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="font-bold md:text-xl text-[1rem]">
                    Write To Us
                  </h4>
                </div>

                <p className="text-gray-600 text-lef">
                  Email us for project discussions, or any questions. We are here
                  to help.
                </p>
                <p className="font-semibold text-gray-800 mt-2">
                  Email: trashaway@gmail.com
                </p>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="bg-white bg-opacity-60 p-3 md:p-6 md:rounded-[2rem] rounded-[1rem] md:w-2/3 shadow-md">
              <form className="flex flex-col gap-4">
                <div className="flex md:flex-row flex-col gap-4">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    placeholder="Your Name *"
                    required
                  />
                  <input
                    type="email"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-3 w-full"
                  placeholder="Your Phone *"
                  required
                />
                <textarea
                  className="border border-gray-300 rounded-md p-3 w-full h-[10rem]"
                  placeholder="Your Message"
                  required
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-sky-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 md:w-[30%] "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

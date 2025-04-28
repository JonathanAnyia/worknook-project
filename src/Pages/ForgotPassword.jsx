import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArtisanBg from "../assets/ArtisanBg.png"

const ForgotPassword = () => {

    const pageTransition = {
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: "-100%" }
        };

  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={pageTransition}
    transition={{ duration: 0.5 }}
    >
        <div className="flex items-center justify-center h-screen relative" style={{ backgroundImage: `url("${ArtisanBg}")` }}>
        <div className="absolute inset-0 bg-blue-100 bg-opacity-20"></div>
        <div className=" p-6 rounded-lg shadow-lg max-w-md w-full z-10">
            <div className="text-center mb-4">
                <div className="text-2xl font-bold">Logo</div>
                <h2 className="text-lg font-semibold m-4">Forgot Password?</h2>
                <p className="text-sm text-gray-600 m-2">Enter your email address to get the password reset link.</p>
            </div>

            <form>
            <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-bold">Email Address</label>
                <input type="email" className="w-full p-2 mb-3 border border-gray-300 rounded" placeholder="hello@example.com" />
            </div>

            <button
                type="submit"
                className="w-full bg-sky-600 text-white p-2  rounded-sm font-semibold hover:bg-blue-600 transition duration-300"
            >
                Password Reset
            </button>

            <div className="mt-4 text-center text-sm text-gray-600">
                <Link to="/Login" className="font-semibold">Back to Login</Link>
            </div>
            </form>
        </div>
        </div>
    </motion.div>
  );
};

export default ForgotPassword;

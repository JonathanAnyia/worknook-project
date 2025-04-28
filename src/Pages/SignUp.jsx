import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArtisanBg from "../assets/ArtisanBg.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission, e.g., send data to an API
      console.log("Form submitted", formData);
    }
  };

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
        <div className="p-6 rounded-lg z-10 shadow-lg max-w-md w-full">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold">Logo</div>
            <h2 className="text-lg font-semibold mt-4">Create an account</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-bold">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-bold">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="+234  . . . . . . . ."
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-4 relative">
              <label className="block mb-1 text-gray-700 font-bold">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform cursor-pointer text-gray-600"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </span>
            </div>

            <div className="mb-4 text-sm text-gray-600">
              By continuing, you agree to our <a href="#" className="text-blue-500">terms of service</a>.
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Sign up
            </button>

            <div className="flex justify-center items-center gap-3 my-4">
              <div className='border border-gray-300 w-[30%]'></div>
              <div className="text-center font-semibold text-sm text-gray-400">or sign up with</div>
              <div className='border border-gray-300 w-[30%]'></div>
            </div>

            <button
              type="button"
              className="w-full bg-gray-100 border border-gray-300 text-gray-600 p-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>

            <div className="mt-4 text-center text-sm text-gray-600">
              Already have an account? <Link to="/Login" className="text-blue-500">Sign in here</Link>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;

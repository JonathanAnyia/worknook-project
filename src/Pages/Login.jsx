import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArtisanBg from "../assets/ArtisanBg.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    // Basic email validation using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      formValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
      formValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      formValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      // Perform the login action, such as calling an API
      console.log('Form submitted successfully', { email, password });
    }
  };

  const pageTransition = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '-100%' },
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
        <div className="absolute inset-0 bg-blue-100 bg-opacity-30"></div>
        <div className="p-6 rounded-lg shadow-lg z-10 max-w-md w-full">

          <div className="text-center mb-6">
            <div className="text-2xl font-bold">Logo</div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-6">Login Account</h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-bold">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                placeholder="johndoe@email.com"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            <div className="mb-4 relative">
              <label className="block mb-1 text-gray-700 font-bold">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
                placeholder="********"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform  cursor-pointer text-gray-600"
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
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">Keep me signed in</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-500 cursor-pointer font-semibold">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>

            <div className="flex justify-center items-center gap-3 my-4">
              <div className="border border-gray-300 w-[30%]"></div>
              <div className="text-center font-semibold text-sm text-gray-400">or sign in with</div>
              <div className="border border-gray-300 w-[30%]"></div>
            </div>

            <button
              type="button"
              className="w-full bg-gray-100 border border-gray-300 text-gray-600 p-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>

            <div className="mt-4 text-center text-sm text-gray-600">
              <Link to="/SignUp" className="text-blue-500 cursor-pointer font-semibold">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;

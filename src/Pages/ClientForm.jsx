import React, { useEffect, useState } from "react";
import ArtisanBg from "../assets/ArtisanBg.png";
import axios from "axios";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    lga: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [states, setStates] = useState([]);
  const [lga, setLga] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchStates = async () => {
    try {
      const response = await fetch("https://nga-states-lga.onrender.com/fetch");
      const data = await response.json();
      setStates(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchLGA = async (state) => {
    try {
      const response = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${state}`
      );
      setLga(response.data);
    } catch (error) {
      console.error("Error fetching LGA:", error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (formData.state) {
      fetchLGA(formData.state);
    } else {
      setLga([]);
    }
  }, [formData.state]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      console.log("Profile picture:", profilePicture);
      const response = axios.post(
        "http://localhost:3000/api/auth/register/client",
        {
          Headers: {
            "Content-Type": "application/json",
          },
          ...formData,
        }
      );
      const data = await response;

      console.log(data);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const inputStyle =
    "mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none";

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 relative"
      style={{ backgroundImage: `url("${ArtisanBg}")` }}
    >
      <div className="absolute inset-0 bg-blue-100 bg-opacity-30"></div>
      <div className="max-w-2xl w-full space-y-8 z-10">
        <div>
          <h2 className="mt-6 text-center text-xl md:text-2xl font-bold">
            Applicants Profile
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-br-[2.5rem]"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-end mb-4">
            <div className="relative w-32 h-32">
              <img
                src={profilePicture || "/api/placeholder/128/128"}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
              <label
                htmlFor="profile-picture"
                className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </label>
              <input
                id="profile-picture"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="space-y-4 sm:w-[70%]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2 sm:w-[70%]">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className={inputStyle}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-bold text-gray-700"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={inputStyle}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2 sm:w-[70%]">
                <label
                  htmlFor="address"
                  className="block text-sm font-bold text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  className={inputStyle}
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-bold text-gray-700"
                >
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  onChange={handleChange}
                  className={inputStyle}
                  value={formData.state}
                >
                  <option value="">Select a state</option>
                  {states.map((item, idx) => (
                    <option className="w-full" key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="lga"
                  className="block text-sm font-bold text-gray-700"
                >
                  LGA
                </label>
                <select
                  id="lga"
                  name="lga"
                  onChange={handleChange}
                  className={inputStyle}
                  value={formData.lga}
                >
                  {/* <option value="">Select an LGA</option> */}
                  {lga.map((item, idx) => (
                    <option className="w-full" key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-fit flex justify-center py-2 px-5 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-sky-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;

import React, { useState } from 'react';
import ArtisanBg from "../assets/ArtisanBg.png";

const CleanerForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    applyingPosition: '',
    passport: null,
    driversLicense: null,
    nin: '',
    passportPreview: null,
    driversLicensePreview: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFormData({ ...formData, [field]: file, [`${field}Preview`]: fileUrl });
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (number) => /^\d{10}$/.test(number); // Adjust based on your format
  const validateNIN = (nin) => /^\d{4}\s\d{3}\s\d{4}$/.test(nin); // Adjust as per your NIN format

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.applyingPosition) newErrors.applyingPosition = "Applying position is required";
    if (!formData.passport) newErrors.passport = "Passport is required";
    if (!formData.driversLicense) newErrors.driversLicense = "Driver's License is required";
    if (!formData.nin) {
      newErrors.nin = "NIN is required";
    } else if (!validateNIN(formData.nin)) {
      newErrors.nin = "NIN format is invalid (XXXX XXX XXXX)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('address', formData.address);
    data.append('city', formData.city);
    data.append('state', formData.state);
    data.append('applyingPosition', formData.applyingPosition);
    data.append('passport', formData.passport);
    data.append('driversLicense', formData.driversLicense);
    data.append('nin', formData.nin);

    try {
      const response = await fetch('/your-backend-endpoint', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form or show success message here
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Employee Registration Form</h2>
      {/* Input Fields */}
      {['Full Name', 'Email', 'Phone Number', 'Address', 'City', 'State', 'Applying Position'].map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block text-sm font-bold text-gray-700">{field.replace(/([A-Z])/g, ' $1')}</label>
          <input
            type="text"
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Enter your ${field}`}
            className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors[field] ? 'border-red-500' : ''}`}
          />
          {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          className="px-4 py-2 bg-sky-600 text-sm font-semibold text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Employee Registration Form</h2>
      {/* File Inputs with Preview */}
      {['Passport', 'Drivers License'].map((field) => (
        <div key={field}>
          <label className="block text-sm font-bold text-gray-700">Upload {field.replace(/([A-Z])/g, ' $1')}</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <label htmlFor={field} className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                <span>Browse Files</span>
                <input id={field} name={field} type="file" className="sr-only" onChange={(e) => handleFileChange(e, field)} />
              </label>
              {formData[`${field}Preview`] && (
                <img src={formData[`${field}Preview`]} alt={`${field} preview`} className="mt-4 h-20 w-20 object-cover mx-auto" />
              )}
              <p className="text-xs text-gray-500">Choose a file</p>
              {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
            </div>
          </div>
        </div>
      ))}
      <div>
        <label htmlFor="nin" className="block text-sm font-bold text-gray-700">NIN</label>
        <input
          type="text"
          id="nin"
          name="nin"
          value={formData.nin}
          onChange={handleChange}
          placeholder="0000 000 0000"
          className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.nin ? 'border-red-500' : ''}`}
        />
        {errors.nin && <p className="text-xs text-red-500">{errors.nin}</p>}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-white text-sm font-semibold text-blue-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Prev.
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 bg-sky-600 text-white text-sm font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center flex-col h-screen py-12 sm:px-6 lg:px-8 relative" style={{ backgroundImage: `url("${ArtisanBg}")` }}>
      <div className="absolute inset-0 bg-blue-100 bg-opacity-30"></div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            {step === 1 ? renderStep1() : renderStep2()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CleanerForm;

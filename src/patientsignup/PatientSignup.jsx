// src/pages/PatientSignup.jsx
import React from "react";
import { Link } from "react-router-dom";
import Patient from '../assets/images/patience.png'; // ✅ single image

const PatientSignup = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Section (Static Image) */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={Patient}
          alt="Patient"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
            Patient Sign 
          </h2>
          <p className="text-gray-500 mb-8 text-center md:text-left">
            Use your information to sign into your account.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 
                focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 
                focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* Required For */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required for
              </label>
              <input
                type="text"
                placeholder="Guardian"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 
                focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* Submit Button */}
            <Link to={"/ReceptionistDashboard"}>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 
              text-white py-2.5 rounded-lg shadow-md transition font-medium"
            >
              Next
            </button>
            </Link>
          </form>

          {/* Footer Link */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientSignup;

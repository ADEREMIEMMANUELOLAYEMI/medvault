// src/pages/PatientSignup.jsx
import React from "react";
import { Link } from "react-router-dom";
import Patient from "../assets/images/patient.png"; // ✅ single image

const PatientSignup = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left Section (Image - hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src={Patient}
          alt="Patient"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-0">
        <div className="max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
            Patient Sign Up
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-8 text-center md:text-left">
            Use your information to create your account.
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
                Required For
              </label>
              <input
                type="text"
                placeholder="Guardian"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 
                focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* Submit Button */}
            <Link to="/ReceptionistDashboard">
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
          <p className="mt-6 text-sm sm:text-base text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientSignup;

import React from "react";
import { Link } from "react-router-dom";
import Attendance from "../../src/assets/images/attendance.png";

const Hospital = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left Image Section (hidden on mobile/tablet) */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src={Attendance}
          alt="Healthcare staff"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Signup Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 sm:px-10 md:px-16 py-10 lg:py-0">
        <div className="max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center lg:text-left">
            Hospital Sign Up
          </h2>
          <p className="text-sm text-gray-500 mb-8 text-center lg:text-left">
            Use your information to create your account.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Hospital Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hospital Name
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none">
                <option>Jos University Teaching Hospital (JUTH)</option>
                <option>Abuja National Hospital</option>
                <option>Lagos State Teaching Hospital</option>
              </select>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="josuniversityhospital@gmail.com"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                defaultValue="Rayfield Road, Jos, Plateau State."
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
            </div>

            {/* Hospital License Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hospital License Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
              />
            </div>

            {/* Submit Button */}
            <Link to="/specialist-signup">
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg shadow-md transition font-medium"
              >
                Next
              </button>
            </Link>
          </form>

          {/* Footer Text */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an Account?{" "}
            <a
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hospital;

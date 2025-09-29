import { useState } from "react";
import Hospitals from "../../src/assets/images/hospitals.png";
import { Link } from "react-router-dom";

export default function HospitalSignUp() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left side - Image */}
      <div className="hidden md:flex md:w-1/2">
        <img
          src={Hospitals}
          alt="Doctor with patient"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 md:py-0">
        <div className="w-full max-w-md">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
            Hospital Sign Up
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 text-center md:text-left">
            Upload your hospital license to continue.
          </p>

          {/* Upload hospital license */}
          <label className="block mb-4">
            <span className="block text-gray-700 font-medium mb-2">
              Upload hospital license image:
            </span>
            <div className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                id="fileUpload"
              />
              <label
                htmlFor="fileUpload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                {/* Upload Icon */}
                <svg
                  className="w-10 h-10 mb-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6H16a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="text-gray-500 text-sm sm:text-base text-center">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-gray-400 text-center">
                  JPG, JPEG, PNG (max 10MB)
                </p>
              </label>
            </div>
            {file && (
              <p className="mt-2 text-sm text-green-600 truncate text-center md:text-left">
                ✅ {file.name} selected
              </p>
            )}
          </label>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
            <button className="w-full sm:w-auto px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
              Previous
            </button>
            <Link to="/ReviewingInfo" className="w-full sm:w-auto">
              <button className="w-full px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition">
                Upload
              </button>
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center md:text-left text-gray-600 text-sm sm:text-base">
            Already have an Account?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

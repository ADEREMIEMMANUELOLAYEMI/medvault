import { useState } from "react";
import  Hospitals from '../../src/assets/images/hospitals.png'
import { Link } from "react-router-dom";
export default function HospitalSignUp() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left side - Image */}
      <div className="w-1/2 hidden md:flex">
        <img
          src={Hospitals}
          alt="Doctor with patient"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Hospital Sign Up</h2>
          <p className="text-gray-600 mb-6">
            Use your information to sign into your account.
          </p>

          {/* Upload hospital license */}
          <label className="block mb-4">
            <span className="block text-gray-700 font-medium mb-2">
              Upload hospital license image:
            </span>
            <div className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                id="fileUpload"
              />
              <label htmlFor="fileUpload" className="flex flex-col items-center justify-center cursor-pointer">
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
                <p className="text-gray-500">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400">
                  JPG, JPEG, PNG (max 10MB)
                </p>
              </label>
            </div>
            {file && (
              <p className="mt-2 text-sm text-green-600">
                {file.name} selected
              </p>
            )}
          </label>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
              Previous
            </button>
            <Link
            to='/Reviewing'>
            <button className="px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
              Upload
            </button>
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-600">
            Already have an Account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


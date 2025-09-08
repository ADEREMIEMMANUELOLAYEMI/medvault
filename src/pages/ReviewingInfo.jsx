import React from "react";
import Review from '../../src/assets/images/review.png'
export default function ReviewingInfo() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Section - Image */}
      <div className="w-1/2 hidden lg:block">
        <img
          src={Review}// Replace with your local image if needed
          alt="Healthcare staff"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 md:px-16">
        <div className="max-w-md w-full text-center">
          {/* Save Icon with Checkmark */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Reviewing Information Supplied
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-8">
            Please be patient while we review your information. <br />
            Check back in the next 6 hours.
          </p>

          {/* Loading Spinner */}
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}





// src/pages/HealthSpecialistLogin.jsx
import React, { useState } from "react";
import Specialist from "../../src/assets/images/specialist.png"; // ✅ fixed spelling

const HealthSpecialist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // You can add more images later if needed
  const slides = [Specialist];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left Section (Slider) */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center">
        <img
          src={slides[currentSlide]}
          alt="Health Specialist"
          className="h-full w-full object-cover transition-all duration-500"
        />

        {/* Dots */}
        <div className="absolute bottom-4 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Health Specialist Sign In
          </h2>
          <p className="text-gray-500 mb-8">
            Use your information to sign into your account.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Health Specialist Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Health Specialist Type
              </label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                defaultValue="Doctor"
              >
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Pharmacist</option>
              </select>
            </div>

            {/* Hospital */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hospital
              </label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                defaultValue="Jos University Teaching Hospital (JUTH)"
              >
                <option>Jos University Teaching Hospital (JUTH)</option>
                <option>Abuja National Hospital</option>
                <option>Lagos State Teaching Hospital</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="josuniversityhospital@gmail.com"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg shadow-md transition font-medium"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HealthSpecialist;

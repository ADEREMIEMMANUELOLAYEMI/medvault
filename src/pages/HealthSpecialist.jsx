// src/pages/HealthSpecialistLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Specialist from "../../src/assets/images/specialist.png";

const HealthSpecialistLogin = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Specialist];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "Doctor",
    hospital: "Jos University Teaching Hospital (JUTH)",
    email: "josuniversityhospital@gmail.com",
    license: "12345678ASDF",
    password: "1234mhb",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // TODO: replace with real API validation
    if (formData.email && formData.password) {
      navigate("/HealthSpecialistSignin");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left Section (Slider) */}
      <div className="hidden md:flex md:w-1/2 relative items-center justify-center">
        <img
          src={slides[currentSlide]}
          alt="Specialist"
          className="h-full w-full object-cover transition-all duration-500"
        />
        {slides.length > 1 && (
          <div className="absolute bottom-4 flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Section (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-0">
        <div className="max-w-md w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
            Health Specialist Log In
          </h2>
          <p className="text-gray-500 mb-8 text-center md:text-left">
            Use your information to sign into your account.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Specialist Type */}
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Health Specialist Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              >
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Pharmacist</option>
              </select>
            </div>

            {/* Hospital */}
            <div>
              <label
                htmlFor="hospital"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hospital
              </label>
              <select
                id="hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              >
                <option>Jos University Teaching Hospital (JUTH)</option>
                <option>Abuja National Hospital</option>
                <option>Lagos State Teaching Hospital</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* License Number */}
            <div>
              <label
                htmlFor="license"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hospital License Number
              </label>
              <input
                id="license"
                name="license"
                type="text"
                value={formData.license}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
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

export default HealthSpecialistLogin;

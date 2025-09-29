// src/pages/Login.jsx
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Testing from "../../src/assets/images/testing.png";
import Hospng from "../../src/assets/icons/hos.png";

const roles = [
  {
    title: "Hospital",
    description: "Access your account as a Hospital with your valid credentials",
    icon: "local",
    img: Hospng,
    link: "/hospital-signup",
  },
  {
    title: "Health Specialist",
    description: "Access your account as a doctor with your valid credentials",
    icon: "mdi:nurse",
    link: "/HealthSpecialist",
  },
  {
    title: "Patients",
    description: "Access your account as a Patient with your valid credentials",
    icon: "healthicons:symptom-sick",
    link: "/PatientSignup",
  },
];

const Sign = () => {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left Section (Image) */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img
          src={Testing}
          alt="Doctor with patient"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold readex text-[#000000] mb-4">
          Sign Up/Login to your account as
        </h2>
        <p className="text-[#717074] mb-6 readex text-base sm:text-lg leading-snug">
          Click on your role below to access your account
        </p>

        <div className="space-y-4 sm:space-y-6">
          {roles.map((role, index) => (
            <Link key={index} to={role.link} className="block">
              <div className="flex items-center justify-between bg-white border border-[#838383] shadow-sm rounded-lg p-4 sm:p-5 hover:shadow-md transition cursor-pointer">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  {role.icon === "local" ? (
                    <img src={role.img} alt={role.title} className="w-7 h-7 sm:w-8 sm:h-8" />
                  ) : (
                    <Icon icon={role.icon} className="text-2xl sm:text-3xl text-[#231EAF]" />
                  )}

                  <div>
                    <h3 className="text-black text-lg sm:text-xl font-medium">
                      {role.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#717074]">
                      {role.description}
                    </p>
                  </div>
                </div>
                <Icon icon="mdi:chevron-right" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Sign;

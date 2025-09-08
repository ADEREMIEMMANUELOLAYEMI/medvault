// src/pages/Login.jsx
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom"; // ✅ Link import
import Testing from "../../src/assets/images/testing.png";
import Hospng from "../../src/assets/icons/hos.png"; // ✅ correct import

const roles = [
  {
    title: "Hospital",
    description: "Access your account as a Hospital with your valid credentials",
    icon: "local", // ✅ local image
    img: Hospng,
    link: "/hospital-signup", // ✅ route for hospital signup
  },
  {
    title: "Health Specialist",
    description: "Access your account as a doctor with your valid credentials",
    icon: "mdi:nurse",
    link: "/specialist-signup", // ✅ route for specialist signup
  },
  {
    title: "Patients",
    description: "Access your account as a Patient with your valid credentials",
    icon: "healthicons:symptom-sick",
    link: "/first", // ✅ route for patient signup
  },
];

const Sign = () => {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left Section (Image) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={Testing}
          alt="Doctor with patient"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold readex text-[#000000] mb-6">
          Sign Up/Login to your account as
        </h2>
        <p className="text-[#717074] mb-8 readex text-[20px] leading-[100%] font-normal">
          Click on your role below to access your account
        </p>

        <div className="space-y-6">
          {roles.map((role, index) => (
            <Link
              key={index}
              to={role.link}
              className="block"
            >
              <div className="flex items-center justify-between bg-[#FFFFFF] border border-[#838383] shadow-sm rounded-[8px] p-4 hover:shadow-md transition cursor-pointer">
                <div className="flex items-start space-x-4">
                  {/* ✅ Local image or Iconify icon */}
                  {role.icon === "local" ? (
                    <img src={role.img} alt={role.title} className="w-8 h-8" />
                  ) : (
                    <Icon icon={role.icon} className="text-3xl text-[#231EAF]" />
                  )}

                  <div>
                    <h3 className="text-[#000] text-[24px] font-normal leading-normal">
                      {role.title}
                    </h3>
                    <p className="text-sm text-[#717074] text-[16px]">
                      {role.description}
                    </p>
                  </div>
                </div>
                <Icon
                  icon="mdi:chevron-right"
                  className="w-6 h-6 text-gray-500"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Sign;

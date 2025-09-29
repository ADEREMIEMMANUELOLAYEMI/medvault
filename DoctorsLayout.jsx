// src/layouts/DoctorsLayout.jsx
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Cross from "./src/assets/images/cross.png";
import BellSvg from "./src/libs/svgs/BellSvg";
import BulbSvg from "./src/libs/svgs/BulbSvg";

const DoctorsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="border-b flex items-center justify-between px-4 sm:px-6 py-3 border-black/20 shadow sticky top-0 bg-white z-20">
        {/* Logo */}
        <img
          src="./src/assets/images/logo.png"
          alt="Logo"
          className="w-24 sm:w-32 object-contain"
        />

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Search */}
          <div className="relative hidden md:block w-56 lg:w-80">
            <input
              type="search"
              id="search"
              className="w-full h-10 rounded-lg bg-[#F7F6F9] pl-10 pr-3 text-sm text-[#A49F9F] focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Search for patients ID and more"
            />
            <Icon
              icon="mynaui:search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A49F9F]"
              width={20}
              height={20}
            />
          </div>

          {/* Notifications */}
          <button className="relative">
            <BellSvg />
          </button>

          {/* Hospital Info */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <h1 className="text-sm sm:text-base font-medium">JUTH</h1>
              <span className="bg-[#CFE2FF] border py-0.5 px-2 rounded-lg text-xs text-[#095194] border-[#61CCD0]">
                Hospital
              </span>
            </div>
            <img
              src={Cross}
              alt="profile"
              className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
            />
          </div>

          {/* Mobile Sidebar Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Icon icon="ci:hamburger-lg" width={24} height={24} />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-md z-30 transform transition-transform duration-300 md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-4 overflow-y-auto">
            <h1 className="text-sm font-semibold text-[#717074] mb-4">
              Hospital Panel
            </h1>

            <nav className="flex flex-col gap-2 text-sm">
              {[
                {
                  to: "/DoctorsDashboard",
                  icon: "material-symbols:dashboard-outline",
                  label: "Dashboard",
                },
                {
                  to: "/DoctorsDepartment",
                  icon: "tabler:stack-filled",
                  label: "Department Management",
                },
                {
                  to: "/doctorsstaff",
                  icon: "ion:people",
                  label: "Staff Management",
                },
                {
                  to: "/DoctorsPatient",
                  icon: "ion:people",
                  label: "Patient Management",
                },
                {
                  to: "/DoctorsAppointment",
                  icon: "streamline:waiting-appointments-calendar-solid",
                  label: "Appointments",
                },
                {
                  to: "/DoctorsPayments",
                  icon: "zondicons:currency-dollar",
                  label: "Payment Status",
                },
                {
                  to: "/DoctorsSupport",
                  icon: "streamline-plump:customer-support-7-solid",
                  label: "Support & Compliance",
                },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition ${
                      isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"
                    }`
                  }
                >
                  <Icon
                    icon={item.icon}
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <span className="truncate">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto flex flex-col gap-3">
              <BulbSvg />
              <NavLink
                to={"/"}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#E3434C] hover:bg-gray-100 transition"
              >
                <Icon icon="carbon:logout" className="w-5 h-5 flex-shrink-0" />
                <span>Log Out</span>
              </NavLink>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorsLayout;

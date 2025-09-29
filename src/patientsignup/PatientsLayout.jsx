import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Outlet } from "react-router-dom";
import Cross from "../assets/images/cross.png";
import BellSvg from "../libs/svgs/BellSvg";
import BulbSvg from "../libs/svgs/BulbSvg";

const PatientsLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header */}
      <header className="border-b flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 border-black/20 shadow bg-white">
        {/* Logo */}
        <img
          src="./src/assets/images/logo.png"
          alt="Logo"
          className="h-8 sm:h-10 w-auto"
        />

        {/* Right side header */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Search box */}
          <div className="relative w-[200px] sm:w-[280px] lg:w-[360px] h-10">
            <input
              type="search"
              id="search"
              placeholder="Search for patients ID and more"
              className="w-full h-full pl-10 pr-3 rounded-lg bg-[#F7F6F9] text-sm sm:text-base text-[#A49F9F] focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <Icon
              icon="mynaui:search"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A49F9F]"
            />
          </div>

          {/* Notification bell */}
          <BellSvg className="w-6 h-6 cursor-pointer" />

          {/* User info */}
          <div className="flex items-center">
            <div className="mr-2 flex flex-col items-end">
              <h1 className="text-sm sm:text-base font-medium text-gray-700">
                JUTH
              </h1>
              <span className="bg-[#CFE2FF] border border-[#61CCD0] py-0.5 px-2 rounded text-xs sm:text-sm text-[#095194] font-normal">
                Hospital
              </span>
            </div>
            <img
              src={Cross}
              alt="User avatar"
              className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 bg-white overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col p-4 sm:p-6 border-r border-gray-200 max-w-[260px] w-full overflow-y-auto">
          <h1 className="text-sm font-medium text-[#717074] mb-4">
            Hospital Panel
          </h1>

          <nav className="flex flex-col gap-2">
            {/* Dashboard */}
            <NavLink
              to="/DoctorsDashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm sm:text-base transition 
                ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
              }
            >
              <Icon
                icon="material-symbols:dashboard-outline"
                className="w-5 h-5 shrink-0"
              />
              <span className="truncate">Dashboard</span>
            </NavLink>

            {/* Department */}
            <NavLink
              to="/DoctorsDepartment"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm sm:text-base transition 
                ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
              }
            >
              <Icon
                icon="tabler:stack-filled"
                className="w-5 h-5 shrink-0"
              />
              <span className="truncate">Department Management</span>
            </NavLink>

            {/* Staff */}
            <NavLink
              to="/doctorsstaff"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm sm:text-base transition 
                ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
              }
            >
              <Icon icon="ion:people" className="w-5 h-5 shrink-0" />
              <span className="truncate">Staff Management</span>
            </NavLink>

            {/* Patients */}
            <NavLink
              to="/DoctorsPatient"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm sm:text-base transition 
                ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
              }
            >
              <Icon icon="ion:people" className="w-5 h-5 shrink-0" />
              <span className="truncate">Patient Management</span>
            </NavLink>

            {/* Appointments */}
            <NavLink
              to="/DoctorsAppointment"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm sm:text-base transition 
                ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
              }
            >
              <Icon
                icon="streamline:waiting-appointments-calendar-solid"
                className="w-5 h-5 shrink-0"
              />
              <span className="truncate">Appointments</span>
            </NavLink>

            {/* Payments */}
            <NavLink
              to="/DoctorsPayments"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm sm:text-base transition 
                ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
              }
            >
              <Icon icon="zondicons:currency-dollar" className="w-5 h-5 shrink-0" />
              <span className="truncate">Payment Status</span>
            </NavLink>

            {/* Support */}
            <NavLink
              to="/DoctorsSupport"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm sm:text-base transition 
                ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
              }
            >
              <Icon
                icon="streamline-plump:customer-support-7-solid"
                className="w-5 h-5 shrink-0"
              />
              <span className="truncate">Support & Compliance</span>
            </NavLink>
          </nav>

          <div className="mt-6">
            <BulbSvg className="w-6 h-6" />
          </div>

          <NavLink
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm sm:text-base text-[#E3434C] hover:bg-[#EFE9FF] transition"
          >
            <Icon icon="carbon:logout" className="w-5 h-5 shrink-0" />
            <span>Log Out</span>
          </NavLink>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PatientsLayout;

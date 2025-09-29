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
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-black/20 shadow sticky top-0 bg-white z-20">
        {/* Logo */}
        <img src="./src/assets/images/logo.png" alt="Logo" className="h-8 sm:h-10 w-auto" />

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search */}
          <div className="relative w-36 sm:w-56 md:w-80 h-9 md:h-10 hidden md:block">
            <input
              type="search"
              id="search"
              placeholder="Search for patients ID and more"
              className="w-full h-full pl-9 pr-3 rounded-lg bg-[#F7F6F9] text-xs sm:text-sm md:text-base text-[#A49F9F] focus:ring-2 focus:ring-indigo-500 outline-none truncate"
            />
            <Icon
              icon="mynaui:search"
              width={18}
              height={18}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-[#A49F9F]"
            />
          </div>

          {/* Notifications */}
          <BellSvg className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />

          {/* Hospital Info */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="flex flex-col items-end">
              <h1 className="text-xs sm:text-sm md:text-base font-medium truncate">JUTH</h1>
              <span className="bg-[#CFE2FF] border border-[#61CCD0] py-0.5 px-2 rounded text-[10px] sm:text-xs md:text-sm text-[#095194] truncate">
                Hospital
              </span>
            </div>
            <img
              src={Cross}
              alt="profile"
              className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-cover rounded-full"
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

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-56 md:w-64 bg-white shadow-md z-30 transform transition-transform duration-300 md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-3 md:p-6 overflow-y-auto">
            <h1 className="text-sm md:text-base font-semibold text-[#717074] mb-4 truncate">
              Hospital Panel
            </h1>

            <nav className="flex flex-col gap-2 text-sm md:text-base">
              {[
                { to: "/DoctorsDashboard", icon: "material-symbols:dashboard-outline", label: "Dashboard" },
                { to: "/DoctorsDepartment", icon: "tabler:stack-filled", label: "Department Management" },
                { to: "/doctorsstaff", icon: "ion:people", label: "Staff Management" },
                { to: "/DoctorsPatient", icon: "ion:people", label: "Patient Management" },
                { to: "/DoctorsAppointment", icon: "streamline:waiting-appointments-calendar-solid", label: "Appointments" },
                { to: "/DoctorsPayments", icon: "zondicons:currency-dollar", label: "Payment Status" },
                { to: "/DoctorsSupport", icon: "streamline-plump:customer-support-7-solid", label: "Support & Compliance" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg truncate transition 
                    ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
                  }
                >
                  <Icon icon={item.icon} className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto flex flex-col gap-3">
              <BulbSvg className="w-5 h-5 md:w-6 md:h-6" />
              <NavLink
                to="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#E3434C] hover:bg-[#EFE9FF] transition truncate"
              >
                <Icon icon="carbon:logout" className="w-5 h-5 flex-shrink-0" />
                <span>Log Out</span>
              </NavLink>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorsLayout;

import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Cross from "../assets/images/cross.png";
import BellSvg from "../libs/svgs/BellSvg";
import BulbSvg from "../libs/svgs/BulbSvg";

const DoctorsMainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <header className="border-b flex justify-between px-4 md:px-[30px] items-center border-black/20 shadow h-[64px]">
        <img
          src="./src/assets/images/logo.png"
          alt="Logo"
          className="w-24 md:w-auto"
        />

        {/* Search + Actions */}
        <section className="flex gap-3 md:gap-[36px] items-center">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Icon icon="ci:hamburger-md" width={28} />
          </button>

          {/* Search Box (hidden on small) */}
          <section className="hidden md:block relative w-[280px] lg:w-[358px] h-[40px] lg:h-[48px]">
            <input
              type="search"
              name="search"
              id="search"
              className="rounded-[8px] bg-[#F7F6F9] px-[50px] w-full h-full text-[#A49F9F] text-sm"
              placeholder="Search for patients ID and more"
            />
            <Icon
              icon="mynaui:search"
              width={22}
              height={22}
              className="text-[#A49F9F] absolute left-[16px] top-1/2 -translate-y-1/2"
            />
          </section>

          <BellSvg />

          <div className="hidden sm:flex">
            <div className="mr-[7px] flex flex-col items-end">
              <h1 className="text-sm md:text-base font-semibold">JUTH</h1>
              <span className="bg-[#CFE2FF] border py-[2px] px-[6px] md:py-[4px] md:px-[8px] rounded-[6px] text-[12px] md:text-[14px] text-[#095194] font-normal readex border-[#61CCD0]">
                Hospital
              </span>
            </div>
            <img src={Cross} alt="Hospital Logo" className="w-8 h-8 md:w-auto md:h-auto" />
          </div>
        </section>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full bg-white border-r transition-transform transform md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } w-[240px] md:max-w-[330px] md:w-full z-50 p-[20px] md:p-[27px]`}
        >
          <h1 className="text-[#717074] mb-3">Hospital Panel</h1>

          <nav className="flex flex-col gap-[12px] overflow-y-auto h-[calc(100vh-120px)]">
            <NavLink
              to="/DoctorsDashboard"
              className={({ isActive }) =>
                `flex rounded-[8px] px-[16px] py-2 items-center gap-[8px] transition ${
                  isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#808080]"
                }`
              }
            >
              <Icon
                icon="material-symbols:dashboard-outline"
                className="w-[24px] h-[24px]"
              />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/DocAppointments"
              className={({ isActive }) =>
                `flex rounded-[8px] px-[16px] py-2 items-center gap-[8px] transition ${
                  isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#808080]"
                }`
              }
            >
              <Icon
                icon="streamline:waiting-appointments-calendar-solid"
                className="w-[24px] h-[24px]"
              />
              <span>Appointments</span>
            </NavLink>

            <NavLink
              to="/Support"
              className={({ isActive }) =>
                `flex rounded-[8px] px-[16px] py-2 items-center gap-[8px] transition ${
                  isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#808080]"
                }`
              }
            >
              <Icon
                icon="streamline-plump:customer-support-7-solid"
                className="w-[24px] h-[24px]"
              />
              <span>Support & Compliance</span>
            </NavLink>

            <div className="mt-6">
              <BulbSvg />
            </div>

            <NavLink
              to="/"
              className="flex hover:bg-[#EFE9FF] rounded-[8px] px-[16px] py-2 items-center gap-[8px] text-[#E3434C]"
            >
              <Icon icon="carbon:logout" className="w-[24px] h-[24px]" />
              Log Out
            </NavLink>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-[#F9FAFB] p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorsMainLayout;

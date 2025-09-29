import React from "react";
import { Icon } from "@iconify/react";
import { FiSearch, FiFilter, FiMoreVertical } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Example staff data for the table
const staffData = [
  {
    id: "12345-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Completed",
    phone: "08012345678",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "12456-SEC",
    name: "Jane Doe",
    dept: "Pediatrics",
    status: "Unattended",
    phone: "08087654321",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
];

const stats = [
  {
    title: "Total Appointments",
    value: "3,799",
    subtitle: "TODAY (23 AUG, 2025)",
    icon: "mdi:calendar",
    bg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Completed Appointments",
    value: "3,205",
    subtitle: "TODAY (23 AUG, 2025)",
    icon: "mdi:check-circle",
    bg: "bg-green-100 text-green-600",
  },
  {
    title: "Cancel Appointments",
    value: "594",
    subtitle: "TODAY (23 AUG, 2025)",
    icon: "mdi:close-circle",
    bg: "bg-orange-100 text-orange-600",
  },
];

// ✅ Simple badge for status
const StatusBadge = ({ status }) => {
  const colors =
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-700";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${colors}`}
    >
      {status}
    </span>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f6fb] p-4 md:p-6">
      {/* ✅ Header */}
      <h1 className="text-xl font-normal mb-1 text-[#000]">Appointments</h1>
      <p className="text-[#717074] mb-6 text-[16px] font-normal">
        Manage all appointments in your hospital
      </p>

      {/* ✅ Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] p-4 rounded-[8px] shadow-sm relative flex flex-col justify-between overflow-hidden"
          >
            <p className="text-sm text-[#464255] font-medium truncate">
              {stat.title}
            </p>
            <h2 className="font-semibold text-[#464255] text-[24px] md:text-[32px] truncate">
              {stat.value}
            </h2>
            <div
              className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full absolute right-4 top-4 shrink-0 ${stat.bg}`}
            >
              <Icon icon={stat.icon} className="w-6 h-6" />
            </div>
            <p className="text-xs text-[#717074] mt-12 md:mt-14 truncate">
              {stat.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div className="flex items-center bg-white border rounded-lg px-3 py-2 w-full md:w-80">
          <FiSearch className="text-gray-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search for doctors"
            className="flex-1 outline-none text-sm min-w-0"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-[8px] font-normal text-[#838383] hover:bg-gray-100 text-[14px] whitespace-nowrap">
            <FiFilter className="mr-2 text-[#2C2C2C] shrink-0" /> Filter
          </button>
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-[8px] font-normal text-[#838383] hover:bg-gray-100 text-[14px] whitespace-nowrap">
            <Icon
              icon="fluent:arrow-sort-24-regular"
              className="text-[#000000] mr-1 shrink-0"
              width="20"
              height="20"
            />
            Sort By
          </button>
        </div>
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto bg-[#FFFFFF] rounded-lg shadow border border-[#A49F9F]">
        <table className="w-full text-sm min-w-[650px]">
          <thead className="bg-gray-50 text-left">
            <tr>
              {["#", "Doctor ID", "Name", "Department", "Status", "Phone no", "Action"].map(
                (head, i) => (
                  <th
                    key={i}
                    className="p-3 text-[#717074] font-normal text-[14px] whitespace-nowrap"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff, i) => (
              <tr
                key={i}
                className="border-b border-[#E5E7EB] hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-[#717074] text-[14px] font-normal whitespace-nowrap">
                  {staff.id}
                </td>
                <td className="p-3 flex items-center gap-2 text-[#838383] text-[14px] font-normal leading-normal min-w-0">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-8 h-8 rounded-full shrink-0"
                  />
                  <span className="truncate">{staff.name}</span>
                </td>
                <td className="p-3 text-[#717074] text-[14px] font-normal whitespace-nowrap">
                  {staff.dept}
                </td>
                <td className="p-3">
                  <StatusBadge status={staff.status} />
                </td>
                <td className="p-3 text-[#717074] text-[14px] font-normal whitespace-nowrap">
                  {staff.phone}
                </td>
                <td className="p-3">
                  <button className="p-1">
                    <FiMoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 text-[14px] text-[#2C2C2C] font-normal">
        <p className="whitespace-nowrap">1-12 of 2,060 items</p>

        <div className="flex items-center gap-3">
          <button className="flex justify-center items-center border border-[#838383] rounded-full bg-[#FFF] hover:bg-gray-100 w-[28px] h-[28px] shrink-0">
            <BsChevronLeft />
          </button>
          <span className="text-[#2C2C2C] font-normal text-[14px] whitespace-nowrap">
            Page <b>1</b> of 50
          </span>
          <button className="flex justify-center items-center border border-[#838383] rounded-full bg-[#FFF] hover:bg-gray-100 w-[28px] h-[28px] shrink-0">
            <BsChevronRight />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#2C2C2C] font-normal text-[14px] leading-normal whitespace-nowrap">
            Show
          </span>
          <select className="border border-[#838383] rounded-[8px] bg-[#fff] py-2 px-3 text-sm">
            <option>12</option>
            <option>24</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

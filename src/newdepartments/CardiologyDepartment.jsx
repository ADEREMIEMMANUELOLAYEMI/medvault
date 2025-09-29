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
  // ...more staff
];

const stats = [
  {
    title: "Total Doctors",
    value: "704",
    icon: "mdi:calendar",
    bg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Active Doctors",
    value: "653",
    icon: "mdi:check-circle",
    bg: "bg-green-100 text-green-600",
  },
  {
    title: "Inactive Doctors",
    value: "49",
    icon: "mdi:close-circle",
    bg: "bg-orange-100 text-orange-600",
  },
];

// Simple badge for status
const StatusBadge = ({ status }) => {
  const colors =
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-700";
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors}`}>
      {status}
    </span>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f6fb] p-4 md:p-6">
      {/* Header */}
      <h1 className="text-xl font-normal text-[#000] mb-8">Cardiology</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 flex flex-col relative"
          >
            <p className="text-sm text-[#464255] font-medium">{stat.title}</p>
            <h2 className="font-semibold text-[#464255] text-3xl mt-2">
              {stat.value}
            </h2>
            <div
              className={`absolute right-4 top-4 w-12 h-12 flex items-center justify-center rounded-full ${stat.bg}`}
            >
              <Icon icon={stat.icon} width="20" height="20" />
            </div>
          </div>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div className="flex items-center bg-white border rounded-lg px-3 py-2 w-full md:w-80">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for doctors"
            className="flex-1 outline-none text-sm"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-sm text-[#838383] hover:bg-gray-100">
            <FiFilter className="mr-2 text-[#2C2C2C]" /> Filter
          </button>
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-sm text-[#838383] hover:bg-gray-100">
            <Icon
              icon="fluent:arrow-sort-24-regular"
              width="20"
              height="20"
              className="text-[#000000] mr-1"
            />
            Sort By
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-[#A49F9F]">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3 text-gray-500 text-sm">Doctor ID</th>
              <th className="p-3 text-gray-500 text-sm">Name</th>
              <th className="p-3 text-gray-500 text-sm">Department</th>
              <th className="p-3 text-gray-500 text-sm">Status</th>
              <th className="p-3 text-gray-500 text-sm">Phone no</th>
              <th className="p-3 text-gray-500 text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-gray-600 text-sm">{staff.id}</td>
                <td className="p-3 flex items-center gap-2 text-gray-700 text-sm">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {staff.name}
                </td>
                <td className="p-3 text-gray-600 text-sm">{staff.dept}</td>
                <td className="p-3">
                  <StatusBadge status={staff.status} />
                </td>
                <td className="p-3 text-gray-600 text-sm">{staff.phone}</td>
                <td className="p-3">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 text-sm text-[#2C2C2C]">
        <p>1-12 of 2,060 items</p>

        <div className="flex items-center gap-3">
          <button className="flex justify-center items-center border border-gray-400 rounded-full bg-white hover:bg-gray-100 w-8 h-8">
            <BsChevronLeft />
          </button>
          <span>
            Page <b>1</b> of 50
          </span>
          <button className="flex justify-center items-center border border-gray-400 rounded-full bg-white hover:bg-gray-100 w-8 h-8">
            <BsChevronRight />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border border-gray-400 rounded-lg bg-white py-1 px-2 text-sm">
            <option>12</option>
            <option>24</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// src/App.jsx
import React, { useState } from "react";
import { FiSearch, FiFilter, FiMoreVertical } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
import NewStaff from "../../src/newdepartments/NewStaff"; // ✅ Correct import

const staffData = [
  {
    id: "12345-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "12346-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Inactive",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  // ...repeat items
];

const StatusBadge = ({ status }) => {
  const base =
    "px-3 py-1 rounded-lg text-xs font-medium flex items-center justify-center";
  if (status === "Active")
    return (
      <span className={`${base} bg-[#E1F4EE] text-[#56B597]`}>Active</span>
    );
  return <span className={`${base} bg-gray-200 text-gray-600`}>Inactive</span>;
};

export default function DoctorsStaff() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-gray-900 font-medium text-lg md:text-xl">
            Patient Management
          </h1>
          <p className="text-sm md:text-base text-[#717074] max-w-md">
            Manage all staff members in your hospital
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0F21E4] text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-blue-700"
        >
          + Add Patient
        </button>
      </div>

      {/* AddStaff Modal */}
      <NewStaff isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        {/* Search Box */}
        <div className="flex items-center bg-white border rounded-lg px-3 py-2 w-full md:w-80">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for doctors"
            className="flex-1 outline-none text-sm"
          />
        </div>

        {/* Filter + Sort */}
        <div className="flex gap-2">
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            <FiFilter className="mr-2 text-[#2C2C2C]" /> Filter
          </button>
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            <Icon
              icon="fluent:arrow-sort-24-regular"
              width="18"
              height="18"
              className="mr-1 text-black"
            />
            Sort By
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3 text-gray-500 font-medium">#</th>
              <th className="p-3 text-gray-500 font-medium">Doctor ID</th>
              <th className="p-3 text-gray-500 font-medium">Name</th>
              <th className="p-3 text-gray-500 font-medium">Department</th>
              <th className="p-3 text-gray-500 font-medium">Status</th>
              <th className="p-3 text-gray-500 font-medium">Phone no</th>
              <th className="p-3 text-gray-500 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-gray-700">{staff.id}</td>
                <td className="p-3 flex items-center gap-2 text-gray-700">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {staff.name}
                </td>
                <td className="p-3 text-gray-700">{staff.dept}</td>
                <td className="p-3">
                  <StatusBadge status={staff.status} />
                </td>
                <td className="p-3 text-gray-700">{staff.phone}</td>
                <td className="p-3">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 text-sm text-gray-700">
        <p>1-12 of 2,060 items</p>

        <div className="flex items-center gap-3">
          <button className="p-2 border rounded-full bg-white hover:bg-gray-100">
            <BsChevronLeft />
          </button>
          <span>
            Page <b>1</b> of 50
          </span>
          <button className="p-2 border rounded-full bg-white hover:bg-gray-100">
            <BsChevronRight />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded-lg bg-white py-1 px-2 text-sm">
            <option>12</option>
            <option>24</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

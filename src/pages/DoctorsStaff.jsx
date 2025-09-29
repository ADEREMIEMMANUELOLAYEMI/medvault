// src/App.jsx
import React, { useState } from "react";
import { FiFilter, FiMoreVertical } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
import NewStaff from "../../src/newdepartments/NewStaff";

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
    name: "Jane Doe",
    dept: "Nursing",
    status: "Inactive",
    phone: "+234 8012345678",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "12347-SEC",
    name: "Ahmed Musa",
    dept: "Lab Tech",
    status: "Active",
    phone: "+234 8098765432",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

const Tab = ({ label, active }) => (
  <button
    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
      active
        ? "bg-[#D5C8F8] text-[#0F21E4]"
        : "bg-white text-[#838383] hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-[#000] font-medium text-lg md:text-xl">
            Staff Management
          </h1>
          <p className="text-sm md:text-base text-[#717074]">
            Manage all staff members in your hospital
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2C26DB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base"
        >
          + Add Health Worker
        </button>
      </div>

      {/* Modal */}
      <NewStaff isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6 bg-[#EFE9FF] px-4 py-2 rounded-lg">
        <Tab label="Doctors" active />
        <Tab label="Nurses" />
        <Tab label="Lab Technician" />
        <Tab label="Pharmacy" />
        <Tab label="Receptionist" />
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        {/* Search */}
        <div className="relative flex items-center w-full md:w-80">
          <Icon
            icon="mynaui:search"
            width={20}
            height={20}
            className="absolute left-3 text-[#A49F9F]"
          />
          <input
            type="search"
            placeholder="Search for staff ID, name, or department"
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#F7F6F9] border focus:ring-2 focus:ring-blue-500 text-sm text-[#333]"
          />
        </div>

        {/* Filter + Sort */}
        <div className="flex gap-3">
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-sm text-[#838383] hover:bg-gray-100">
            <FiFilter className="mr-2 text-[#2C2C2C]" /> Filter
          </button>
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-sm text-[#838383] hover:bg-gray-100">
            <Icon
              icon="fluent:arrow-sort-24-regular"
              width="20"
              height="20"
              className="mr-1 text-[#000000]"
            />
            Sort By
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-[#A49F9F]">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="p-3 text-left text-[#717074] font-normal">#</th>
              <th className="p-3 text-left text-[#717074] font-normal">
                Staff ID
              </th>
              <th className="p-3 text-left text-[#717074] font-normal">Name</th>
              <th className="p-3 text-left text-[#717074] font-normal">
                Department
              </th>
              <th className="p-3 text-left text-[#717074] font-normal">
                Status
              </th>
              <th className="p-3 text-left text-[#717074] font-normal">
                Phone no
              </th>
              <th className="p-3 text-left text-[#717074] font-normal">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-[#717074]">{staff.id}</td>
                <td className="p-3 flex items-center gap-2 text-[#333]">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {staff.name}
                </td>
                <td className="p-3 text-[#717074]">{staff.dept}</td>
                <td className="p-3">
                  <StatusBadge status={staff.status} />
                </td>
                <td className="p-3 text-[#717074]">{staff.phone}</td>
                <td className="p-3">
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 text-sm text-[#2C2C2C]">
        <p>1-12 of 2,060 items</p>

        <div className="flex items-center gap-3">
          <button className="p-2 border border-[#838383] rounded-full bg-white hover:bg-gray-100">
            <BsChevronLeft />
          </button>
          <span>
            Page <b>1</b> of 50
          </span>
          <button className="p-2 border border-[#838383] rounded-full bg-white hover:bg-gray-100">
            <BsChevronRight />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border border-[#838383] rounded-lg py-1 px-2">
            <option>12</option>
            <option>24</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

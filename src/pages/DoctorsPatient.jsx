// src/App.jsx
import React, { useState } from "react";
import { FiSearch, FiFilter, FiMoreVertical } from "react-icons/fi";
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
    dept: "Dentistry",
    status: "Inactive",
    phone: "+234 8107000000",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "12347-SEC",
    name: "Ahmed Musa",
    dept: "Pediatrics",
    status: "Active",
    phone: "+234 8107999999",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

const StatusBadge = ({ status }) => {
  const base =
    "px-2 py-1 rounded-md text-xs font-medium flex items-center justify-center";
  if (status === "Active")
    return (
      <span className={`${base} bg-[#E1F4EE] text-[#56B597] text-[14px]`}>
        Active
      </span>
    );
  return (
    <span className={`${base} bg-gray-200 text-gray-600 text-[14px]`}>
      Inactive
    </span>
  );
};

export default function DoctorsStaff() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[#000] readex font-medium text-[20px]">
            Staff Management
          </h1>
          <p className="text-[16px] text-[#717074] font-normal leading-normal">
            Manage all staff members in your hospital
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0F21E4] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Staff
        </button>
      </div>

      {/* Modal */}
      <NewStaff isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Search + Filter */}
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
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-[#838383] hover:bg-gray-100 text-[14px]">
            <FiFilter className="mr-2 text-[#2C2C2C]" /> Filter
          </button>
          <button className="flex items-center border border-[#A49F9F] px-3 py-2 rounded-lg text-[#838383] hover:bg-gray-100 text-[14px]">
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
              <th className="p-3 text-[#717074] font-normal">#</th>
              <th className="p-3 text-[#717074] font-normal text-[14px]">
                Doctor ID
              </th>
              <th className="p-3 text-[#717074] font-normal text-[14px]">
                Name
              </th>
              <th className="p-3 text-[#717074] font-normal text-[14px]">
                Department
              </th>
              <th className="p-3 text-[#717074] font-normal text-[14px]">
                Status
              </th>
              <th className="p-3 text-[#717074] font-normal text-[14px]">
                Phone no
              </th>
              <th className="p-3 text-[#717074] font-normal text-[14px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr
                key={staff.id}
                className="border-b border-[#A49F9F] hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-[#717074] text-[14px]">{staff.id}</td>
                <td className="p-3 flex items-center gap-2 text-[#838383] text-[14px]">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {staff.name}
                </td>
                <td className="p-3 text-[#717074] text-[14px]">
                  {staff.dept}
                </td>
                <td className="p-3">
                  <StatusBadge status={staff.status} />
                </td>
                <td className="p-3 text-[#717074] text-[14px]">
                  {staff.phone}
                </td>
                <td className="p-3">
                  <button>
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 text-[14px] text-[#2C2C2C]">
        <p>1-12 of 2,060 items</p>

        <div className="flex items-center gap-3">
          <button disabled className="p-1 border rounded-full bg-white opacity-50 cursor-not-allowed">
            <BsChevronLeft />
          </button>
          <span>
            Page <b>1</b> of 50
          </span>
          <button className="p-1 border rounded-full bg-white hover:bg-gray-100">
            <BsChevronRight />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded-lg bg-white py-1 px-2">
            <option>12</option>
            <option>24</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

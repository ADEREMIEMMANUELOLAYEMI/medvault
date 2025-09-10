// src/App.jsx
import React, { useState } from "react";
import { FiSearch, FiFilter, FiMoreVertical } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
import NewStaff from "../../src/newdepartments/NewStaff"; // ✅ Correct import (relative, no /src)

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
  {
    id: "12345-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "12347-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
   {
    id: "12347-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
   {
    id: "12347-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
   {
    id: "12347-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
   {
    id: "12347-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
   {
    id: "12347-SEC",
    name: "Femi Yakubu Sam",
    dept: "Cardiology",
    status: "Active",
    phone: "+234 8107929290",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

const Tab = ({ label, active }) => (
  <div className="flex flex-col">
    <button
      className={`p-[8px] rounded-[8px] text-[16px] font-normal shadow-lg ${
        active
          ? "bg-[#D5C8F8] text-[#0F21E4] gap-[36px]"
          : "flex flex-row bg-[#FFF] text-[#838383] hover:bg-gray-200 shadow-lg rounded-[8px] text-[16px] .readex relative right-[10%]" 
      }`}
    >
      {label}
    </button>
  </div>
);

const StatusBadge = ({ status }) => {
  const base =
    "p-[4px] rounded-[8px] text-xs font-medium flex items-center justify-center";
  if (status === "Active")
    return (
      <span
        className={`${base} bg-[#E1F4EE] text-[#56B597] .readex text-[14px] font-normal`}
      >
        Active
      </span>
    );
  return <span className={`${base} bg-gray-200 text-gray-600`}>Inactive</span>;
};

export default function DoctorsStaff() {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ modal state

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[#000] .readex font-medium text-[20px]">
            Staff Management
          </h1>
          <p className="text-[16px] text-[#717074] font-normal leading-normal w-[321px] h-[20px]">
            Manage all staff members in your hospital
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)} // ✅ open modal
          className="bg-[#2C26DB] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Health Worker
        </button>
      </div>

      {/* ✅ AddStaff Modal */}
      <NewStaff isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6 bg-[#EFE9FF] px-[20px] py-[10px]">
        <Tab label="Doctors" active  />
        <Tab label="Nurses" />
        <Tab label="Lab Technician" />
        <Tab label="Pharmacy" />
        <Tab label="Receptionist" />
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div className="flex items-center bg-white border rounded-lg px-3 py-2 w-full md:w-80">
      
          <input
              type='search'
              name='search'
              id='search'
              className=' rounded-[8px] bg-[#F7F6F9]  px-[50px] w-full h-full text-[#A49F9F]'
              placeholder='Search for patients ID and more'
            />
             <Icon
               icon={"mynaui:search"}
               width={30}
               height={30}
               className='text-[#A49F9F] absolute left-[16px] top-[22%] '
              />
        </div>

        <div className="flex gap-18 mt-[20px]">
          <button className="flex items-center border border-[#A49F9F] p-[8px] rounded-[8px] font-normal text-[#838383] hover:bg-gray-100 text-[14px] .readex">
            <FiFilter className="mr-2 text-[#2C2C2C]" /> Filter
          </button>
          <button className="flex items-center border border-[#A49F9F] p-[8px] rounded-[8px] font-normal text-[#838383] hover:bg-gray-100 text-[14px] .readex">
            <Icon
              icon="fluent:arrow-sort-24-regular"
              width="20"
              height="20"
              className="text-[#000000]"
            />
            <span> Sort By</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#FFFFFF] rounded-lg shadow border border-[#A49F9F]">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3 text-[#717074] .readex font-normal">#</th>
              <th className="p-3 text-[#717074] .readex font-normal text-[14px]">
                Doctor ID
              </th>
              <th className="p-3 text-[#717074] .readex font-normal text-[14px]">
                Name
              </th>
              <th className="p-3 text-[#717074] .readex font-normal text-[14px]">
                Department
              </th>
              <th className="p-3 text-[#717074] .readex font-normal text-[14px]">
                Status
              </th>
              <th className="p-3 text-[#717074] .readex font-normal text-[14px]">
                Phone no
              </th>
              <th className="p-3 text-[#717074] .readex font-normal text-[14px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff, i) => (
              <tr
                key={i}
                className="border border-[#A49F9F] hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-[#717074] .readex text-[14px] font-normal">
                  {staff.id}
                </td>
                <td className="p-3 flex items-center gap-2 text-[#838383] .readex text-[14px] font-normal leading-normal">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {staff.name}
                </td>
                <td className="p-3 text-[#717074] text-[14px] .readex font-normal">
                  {staff.dept}
                </td>

                <td className="p-3">
                  <StatusBadge status={staff.status} />
                </td>

                <td className="p-3 text-[#717074] text-[14px] font-normal .readex">
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 text-[14px] text-[#2C2C2C] font-normal .readex">
        <p>1-12 of 2,060 items</p>

        <div className="flex items-center gap-3">
          <button className="p-4 border border-[#838383] rounded-[28px] bg-[#FFF] hover:bg-gray-100 w-[28px] h-[28px] justify-center items-center">
            <BsChevronLeft />
          </button>
          <span className="text-[#2C2C2C] font-normal text-[14px] .readex">
            Page <b>1</b> of 50
          </span>
          <button className="p-4 border border-[#838383] rounded-[28px] bg-[#FFF] hover:bg-gray-100 w-[28px] h-[28px] justify-center items-center">
            <BsChevronRight />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#2C2C2C] font-normal text-[14px] .readex leading-normal">
            Show
          </span>
          <select className="border border-[#838383] rounded-[8px] bg-[#fff] py-2 px-3">
            <option>12</option>
            <option>24</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}



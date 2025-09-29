import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateDepartment from "../../src/newdepartments/CreateDepartment";
import { Button } from "../../src/pages/Button";
import Cardiology from "../../src/assets/images/cardiology.png";
import Dentist from "../../src/assets/images/dentist.png";
import Gynacology from "../../src/assets/images/gynacology.png";
import labScience from "../../src/assets/images/labscience.png";
import Pshchatary from "../../src/assets/images/pshchatary.png";
import Pediatry from "../../src/assets/images/pediatry.png";
import Emergency from "../../src/assets/images/emergency.png";
import Orthopedics from "../../src/assets/images/orthopedics.png";

const departments = [
  { id: 1, name: "CARDIOLOGY", img: Cardiology, path: "/CardiologyDepartment" },
  { id: 2, name: "DENTAL", img: Dentist, path: "/dental" },
  { id: 3, name: "GYNAECOLOGY", img: Gynacology, path: "/gynaecology" },
  { id: 4, name: "LAB SCIENCE", img: labScience, path: "/lab-science" },
  { id: 5, name: "PSYCHIATRY", img: Pshchatary, path: "/psychiatry" },
  { id: 6, name: "PEDIATRICS", img: Pediatry, path: "/pediatrics" },
  { id: 7, name: "EMERGENCY", img: Emergency, path: "/emergency" },
  { id: 8, name: "ORTHOPEDICS", img: Orthopedics, path: "/orthopedics" },
];

const DepartmentManagement = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <h1 className="font-medium text-gray-800 text-xl md:text-2xl">
            Department Management
          </h1>
          <p className="text-sm md:text-base text-[#717074] font-normal">
            Manage all Department members in your hospital
          </p>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-[#2C26DB] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#03022d]"
        >
          + Add Department
        </Button>
      </div>

      {/* Grid of Departments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col"
          >
            {/* Department Image */}
            <img
              src={dept.img}
              alt={dept.name}
              className="w-full h-40 object-cover rounded-lg"
            />

            {/* Department Name */}
            <h2 className="text-center text-[#0E145C] font-medium text-lg uppercase bg-[#C6C9E4] rounded-lg p-2 border border-[#0E145C] mt-3">
              {dept.name}
            </h2>

            {/* Department Stats */}
            <div className="mt-3 text-gray-600 space-y-1">
              <p className="text-base text-[#2C2C2C] font-normal">
                Total Doctors: <span className="font-semibold">640</span>
              </p>
              <p className="text-sm text-[#717074]">● Active doctors: 537</p>
              <p className="text-sm text-[#717074]">● Inactive doctors: 103</p>
            </div>

            {/* Navigate Button */}
            <button
              onClick={() => navigate(dept.path)}
              className="mt-4 bg-[#BEBCF4] text-[#2C2C2C] py-2 rounded-lg hover:bg-[#5853d7] text-sm md:text-base"
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {/* See All */}
      <div className="flex justify-end mt-6">
        <Button
          variant="outline"
          className="border border-[#000000] rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
        >
          See all
        </Button>
      </div>

      {/* Modal */}
      <CreateDepartment isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default DepartmentManagement;

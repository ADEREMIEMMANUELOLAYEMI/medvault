





import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
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
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <section className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-medium text-gray-800 text-[20px]">Department Management</h1>
          <p className="text-[16px] text-[#717074] font-normal leading-normal">
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
            className="bg-[#FFFFFF] relative rounded-[12px] shadow p-[8px] flex flex-col "
          >
            <img
              src={dept.img}
              alt={dept.name}
              className="w-full h-[140px] object-cover rounded-md"
            />
            <div className="relative top-[-20%] m-[37px] text-sm ">
            <h2 className="text-center text-[#0E145C] font-normal text-[16px] mt-3 uppercase bg-[#C6C9E4] rounded-[8px] p-[4px] border border-[#0E145C]  ">
              {dept.name}
            </h2>
          </div > 
            <div className="mt-2  text-gray-600 space-y-1  mb-[-35%] relative top-[-29%]">
              <p className="text-[18px] text-[#2C2C2C] .readex font-normal">
                Total Doctors:{" "}
                <span className=" relative left-[10%]">640</span>
              </p>
              <p className="text-[#717074] text-[14px] ">● Active doctors: 537</p>
              <p className="text-[#717074] text-[14px]">● Inactive doctors: 103</p>
            </div>

            {/* ✅ navigate to department page */}
            <button
              onClick={() => navigate(dept.path)}
              className="mt-3 bg-[#BEBCF4] text-[#2C2C2C] text-xs p-[8px]  rounded-[8px] hover:bg-[#5853d7] text-[16px] m-[-1%] "
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
          className="border border-[#000000] rounded-[8px] p-[8px] text-sm hover:bg-gray-100"
        >
          See all
        </Button>
      </div>

      {/* Import and render the CreateDepartment modal */}
      <CreateDepartment isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default DepartmentManagement;

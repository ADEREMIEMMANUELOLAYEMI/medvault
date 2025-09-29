// import { Icon } from "@iconify/react";
// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Cross from "./src/assets/images/cross.png";
// import BellSvg from "./src/libs/svgs/BellSvg";
// import BulbSvg from "./src/libs/svgs/BulbSvg";


// const DoctorsLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Header */}
//       <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-black/20 shadow sticky top-0 bg-white z-20">
//         {/* Logo */}
//         <img src="./src/assets/images/logo.png" alt="Logo" className="h-8 sm:h-10 w-auto" />

//         {/* Right Section */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           {/* Search */}
//           <div className="relative w-36 sm:w-56 md:w-80 h-9 md:h-10 hidden md:block">
//             <input
//               type="search"
//               id="search"
//               placeholder="Search for patients ID and more"
//               className="w-full h-full pl-9 pr-3 rounded-lg bg-[#F7F6F9] text-xs sm:text-sm md:text-base text-[#A49F9F] focus:ring-2 focus:ring-indigo-500 outline-none truncate"
//             />
//             <Icon
//               icon="mynaui:search"
//               width={18}
//               height={18}
//               className="absolute left-2 top-1/2 -translate-y-1/2 text-[#A49F9F]"
//             />
//           </div>

//           {/* Notifications */}
//           <BellSvg className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />

//           {/* Hospital Info */}
//           <div className="flex items-center gap-1 sm:gap-2">
//             <div className="flex flex-col items-end">
//               <h1 className="text-xs sm:text-sm md:text-base font-medium truncate">JUTH</h1>
//               <span className="bg-[#CFE2FF] border border-[#61CCD0] py-0.5 px-2 rounded text-[10px] sm:text-xs md:text-sm text-[#095194] truncate">
//                 Hospital
//               </span>
//             </div>
//             <img
//               src={Cross}
//               alt="profile"
//               className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-cover rounded-full"
//             />
//           </div>

//           {/* Mobile Sidebar Toggle */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             <Icon icon="ci:hamburger-lg" width={24} height={24} />
//           </button>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <aside
//           className={`fixed md:static top-0 left-0 h-full w-56 md:w-64 bg-white shadow-md z-30 transform transition-transform duration-300 md:translate-x-0 ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col h-full p-3 md:p-6 overflow-y-auto">
//             <h1 className="text-sm md:text-base font-semibold text-[#717074] mb-4 truncate">
//               Hospital Panel
//             </h1>

//             <nav className="flex flex-col gap-2 text-sm md:text-base">
//               {[
//                 { to: "/DoctorsDashboard", icon: "material-symbols:dashboard-outline", label: "Dashboard" },
//                 { to: "/DoctorsDepartment", icon: "tabler:stack-filled", label: "Department Management" },
//                 { to: "/doctorsstaff", icon: "ion:people", label: "Staff Management" },
//                 { to: "/DoctorsPatient", icon: "ion:people", label: "Patient Management" },
//                 { to: "/DoctorsAppointment", icon: "streamline:waiting-appointments-calendar-solid", label: "Appointments" },
//                 { to: "/DoctorsPayments", icon: "zondicons:currency-dollar", label: "Payment Status" },
//                 { to: "/DoctorsSupport", icon: "streamline-plump:customer-support-7-solid", label: "Support & Compliance" },
//               ].map((item) => (
//                 <NavLink
//                   key={item.to}
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `flex items-center gap-2 px-3 py-2 rounded-lg truncate transition 
//                     ${isActive ? "bg-[#EFE9FF] text-[#2C26DB]" : "text-[#84828A]"}`
//                   }
//                 >
//                   <Icon icon={item.icon} className="w-5 h-5 flex-shrink-0" />
//                   <span className="truncate">{item.label}</span>
//                 </NavLink>
//               ))}
//             </nav>

//             {/* Footer */}
//             <div className="mt-auto flex flex-col gap-3">
//               <BulbSvg className="w-5 h-5 md:w-6 md:h-6" />
//               <NavLink
//                 to="/"
//                 className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#E3434C] hover:bg-[#EFE9FF] transition truncate"
//               >
//                 <Icon icon="carbon:logout" className="w-5 h-5 flex-shrink-0" />
//                 <span>Log Out</span>
//               </NavLink>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DoctorsLayout;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNotes from "./AddNotes";
import Prescriptions from "./Prescriptions";
import Addlabs from "./Addlabs";
import RequestSpecialist from "./RequestSpecialist";

export default function PatientProfile() {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  const tests = Array(6).fill({
    name: "Jane Danjuma Kunle_labResults.pdf",
    size: "12mb",
    date: "25/10/2025",
  });

  const actions = [
    { label: "Add Notes", key: "notes" },
    { label: "Prescribe Medication", key: "prescribe" },
    { label: "Request Labs", key: "labs" },
    { label: "Refer Specialist", key: "refer" },
  ];

  return (
    <div className="bg-[#F5F5F9] min-h-screen p-4 md:p-8">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-black"
        >
          <span className="text-2xl mr-2">←</span>
          Patients Profile
        </button>
      </div>

      {/* Patient Info */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <p><span className="font-semibold">Patient ID:</span> 823FG29J10</p>
          <p><span className="font-semibold">Sex:</span> F</p>
          <p><span className="font-semibold">Patient Name:</span> Jane Danjuma Kunle</p>
          <p><span className="font-semibold">Age:</span> 26</p>
          <p><span className="font-semibold">Insurance Number:</span> 5674655476567</p>
          <p><span className="font-semibold">Genotype:</span> SS</p>
          <p><span className="font-semibold">Blood Group:</span> A</p>
          <p><span className="font-semibold">Allergies:</span> Paracetamol, Limotin, Flagyl, Peanuts</p>
        </div>
      </div>

      {/* Laboratory Tests & Doctor's Action */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* Laboratory Tests */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="font-semibold text-lg mb-4">Laboratory Tests</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tests.map((test, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex justify-between items-center text-sm"
              >
                <div>
                  <p className="font-medium text-gray-800">{test.name}</p>
                  <p className="text-xs text-gray-500">
                    {test.size} • {test.date}
                  </p>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100">⋮</button>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor’s Action */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-4">Doctor’s Action</h2>
          <div className="flex flex-col gap-3">
            {actions.map((action) => (
              <button
                key={action.key}
                className="w-full py-2 px-4 bg-[#EDEBFE] hover:bg-[#D9D6FE] text-sm rounded-md font-medium"
                onClick={() => setActiveModal(action.key)}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Medical Records */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mt-6">
        <h2 className="font-semibold text-lg mb-4">Medical Records</h2>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">30 Sept 2025</p>
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-2 gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://via.placeholder.com/40"
                alt="doctor"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Femi Yakubu Sam</p>
                <p className="text-xs text-gray-500">Cardiologist • JUTH</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-xs text-gray-500">ID: P001</p>
            </div>
            <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-lg self-start md:self-auto">
              Emergency
            </span>
          </div>
          <div className="mt-4 text-sm text-gray-700">
            <p className="font-semibold">Test Results</p>
            <p>From: JUTH</p>
            <p>Test For Diabetes</p>
            <p>
              <span className="font-medium">Result:</span> Fasting Blood Glucose (FBG): 132 mg/dL
            </p>
            <p>Reference Range: 70–99 mg/dL</p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddNotes isOpen={activeModal === "notes"} onClose={() => setActiveModal(null)} />
      <Prescriptions isOpen={activeModal === "prescribe"} onClose={() => setActiveModal(null)} />
      <Addlabs isOpen={activeModal === "labs"} onClose={() => setActiveModal(null)} />
      <RequestSpecialist isOpen={activeModal === "refer"} onClose={() => setActiveModal(null)} />
    </div>
  );
}

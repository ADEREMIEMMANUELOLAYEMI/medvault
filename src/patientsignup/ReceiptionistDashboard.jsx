// src/pages/ReceptionistDashboard.jsx
import React from "react";
import { Plus } from "lucide-react";

const statsData = [
  { label: "Patients Booked", value: 120, change: "+5%", changeColor: "text-green-600" },
  { label: "Checked-In", value: 98, change: "+3%", changeColor: "text-green-600" },
  { label: "Waiting", value: 22, change: "-2%", changeColor: "text-red-500" },
];

const appointmentsData = [
  {
    date: "30 Sept 2025, 11AM - 12PM",
    doctor: "Dr Danjuma Frank",
    role: "Doctor",
    patient: "John Doe",
    patientId: "P001",
    status: "Checked-In",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    date: "30 Sept 2025, 12PM - 1PM",
    doctor: "Dr Aisha Bello",
    role: "Doctor",
    patient: "Mary Jane",
    patientId: "P002",
    status: "Waiting",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
];

const avatars = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
];

const ReceptionistDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2">
              Receptionist Dashboard
              <span className="px-2 py-0.5 text-xs sm:text-sm rounded-full bg-indigo-100 text-indigo-700 font-medium">
                Active
              </span>
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base truncate">
              Aurelia, Lior, Zara +12 others
            </p>
          </div>

          {/* Avatars */}
          <div className="flex -space-x-2 mt-2 md:mt-0">
            {avatars.map((url, idx) => (
              <img
                key={idx}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                src={url}
                alt={`User ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
          {statsData.map((stat, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-3 sm:p-4 flex flex-col items-center text-center">
              <p className="text-xs sm:text-sm md:text-sm text-gray-500 truncate">{stat.label}</p>
              <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900">{stat.value}</h2>
              <p className={`text-xs sm:text-sm md:text-sm ${stat.changeColor}`}>{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Tabs + Add Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div className="flex flex-wrap gap-2">
            <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-sm font-medium rounded-lg bg-indigo-600 text-white truncate">
              Appointments
            </button>
            <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-sm font-medium rounded-lg bg-gray-100 text-gray-700 truncate">
              Doctors Available
            </button>
          </div>
          <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-sm font-medium bg-white border rounded-lg shadow-sm hover:bg-gray-50 mt-2 sm:mt-0 truncate">
            <Plus size={16} /> Add Appointment
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-3">
          {appointmentsData.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 rounded-lg p-3 sm:p-4">
              
              {/* Left */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2 sm:mb-0">
                <p className="text-xs sm:text-sm text-gray-500 truncate">{item.date}</p>
                <p className="text-gray-900 font-medium truncate">
                  {item.doctor} <span className="text-gray-500 font-normal">· {item.role}</span>
                </p>
              </div>

              {/* Middle */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-700 mb-2 sm:mb-0">
                <p className="font-medium truncate">{item.patient}</p>
                <p className="text-xs sm:text-sm text-gray-500 truncate">ID: {item.patientId}</p>
              </div>

              {/* Right */}
              <span className={`px-2 py-1 text-xs sm:text-sm rounded-full ${item.statusColor} font-medium truncate text-center`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ReceptionistDashboard;

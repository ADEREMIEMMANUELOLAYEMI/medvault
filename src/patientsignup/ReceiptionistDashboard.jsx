// src/pages/ReceptionistDashboard.jsx
import React from "react";
import { Plus } from "lucide-react";

const ReceptionistDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 flex flex-wrap items-center gap-2">
              Receptionist Dashboard
              <span className="px-2 py-0.5 text-xs sm:text-sm rounded-full bg-indigo-100 text-indigo-700 font-medium">
                Active
              </span>
            </h1>
            <p className="text-gray-500 text-sm truncate">
              Aurelia, Lior, Zara +12 others
            </p>
          </div>

          {/* Avatars */}
          <div className="flex -space-x-2 shrink-0">
            {[
              "https://randomuser.me/api/portraits/women/68.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/22.jpg",
            ].map((src, idx) => (
              <img
                key={idx}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover"
                src={src}
                alt="User"
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
            <p className="text-xs sm:text-sm text-gray-500">Patients Booked</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">120</h2>
            <p className="text-xs text-green-600">+5%</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
            <p className="text-xs sm:text-sm text-gray-500">Checked-In</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">98</h2>
            <p className="text-xs text-green-600">+3%</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
            <p className="text-xs sm:text-sm text-gray-500">Waiting</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">22</h2>
            <p className="text-xs text-red-500">-2%</p>
          </div>
        </div>

        {/* Tabs + Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button className="px-3 sm:px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white">
              Appointments
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-700">
              Doctors Available
            </button>
          </div>
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium bg-white border rounded-lg shadow-sm hover:bg-gray-50 whitespace-nowrap">
            <Plus size={16} /> Add Appointment
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-3 sm:space-y-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 rounded-lg p-3 sm:p-4 gap-3"
            >
              {/* Left side */}
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500">
                  30 Sept 2025, 11AM - 12PM
                </p>
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  Dr Danjuma Frank{" "}
                  <span className="text-gray-500">· Doctor</span>
                </p>
              </div>

              {/* Middle */}
              <div className="text-gray-700 min-w-0">
                <p className="font-medium text-sm sm:text-base">John Doe</p>
                <p className="text-xs sm:text-sm text-gray-500">ID: P001</p>
              </div>

              {/* Right side */}
              <span className="self-start sm:self-auto px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-green-100 text-green-700 font-medium whitespace-nowrap">
                Checked-In
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReceptionistDashboard;

// src/pages/ReceptionistDashboard.jsx
import React from "react";
import { Plus } from "lucide-react"; // for add button icon (optional)

const ReceptionistDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              Receptionist Dashboard
              <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700 font-medium">
                Active
              </span>
            </h1>
            <p className="text-gray-500 text-sm">
              Aurelia, Lior, Zara +12 others
            </p>
          </div>
          <div className="flex -space-x-2">
            {/* avatars */}
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="User"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Patients Booked</p>
            <h2 className="text-2xl font-bold text-gray-900">120</h2>
            <p className="text-xs text-green-600">+5%</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Checked-In</p>
            <h2 className="text-2xl font-bold text-gray-900">98</h2>
            <p className="text-xs text-green-600">+3%</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Waiting</p>
            <h2 className="text-2xl font-bold text-gray-900">22</h2>
            <p className="text-xs text-red-500">-2%</p>
          </div>
        </div>

        {/* Tabs + Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white">
              Appointments
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-700">
              Doctors Available
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border rounded-lg shadow-sm hover:bg-gray-50">
            <Plus size={16} /> Add Appointment
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-4"
            >
              {/* Left side */}
              <div>
                <p className="text-sm text-gray-500">
                  30 Sept 2025, 11AM - 12PM
                </p>
                <p className="text-gray-900 font-medium">
                  Dr Danjuma Frank <span className="text-gray-500">· Doctor</span>
                </p>
              </div>

              {/* Middle */}
              <div className="text-gray-700">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">ID: P001</p>
              </div>

              {/* Right side */}
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
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

// src/pages/DoctorsOverview.jsx
import { useState } from "react";

export default function DoctorsOverview() {
  const stats = [
    { label: "Appointments Today", value: "26.5 min", icon: "⏱️" },
    { label: "Patients Seen Today", value: "5", icon: "👥" },
    { label: "Avg. Consultation Time", value: "26.5 min", icon: "📊" },
  ];

  const patients = [
    { title: "Routine Checkup", name: "Daniel Chung", time: "9:00 AM" },
    { title: "Heart Follow-Up", name: "Rashad Mangi", time: "10:30 AM" },
    { title: "Consultation", name: "Olu David", time: "12:00 PM" },
  ];

  const labResults = [
    { name: "Daniel Chung", test: "Complete Blood Count", category: "Hematology", status: "Completed" },
    { name: "Julie Smith", test: "Lipid Panel", category: "Chemistry", status: "Completed" },
    { name: "Robert Fox", test: "Thyroid Function Test", category: "Endocrinology", status: "Pending" },
    { name: "Robert Fox", test: "Liver Function Test", category: "Chemistry", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
            <span className="text-2xl">{stat.icon}</span>
          </div>
        ))}
      </div>

      {/* Today's Patients */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Today's Patients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((p, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-indigo-600">{p.title}</h3>
              <p className="text-gray-700">{p.name}</p>
              <p className="text-sm text-gray-500">{p.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lab Results */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Lab Results</h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full min-w-[600px] text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Patient Name</th>
                <th className="p-3">Test Type</th>
                <th className="p-3">Category</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {labResults.map((row, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="p-3">{row.name}</td>
                  <td className="p-3">{row.test}</td>
                  <td className="p-3">{row.category}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

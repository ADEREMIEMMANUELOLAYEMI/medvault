// src/pages/DocAppointments.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DocAppointments = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDay, setFilterDay] = useState("");
  const navigate = useNavigate();

  // Load dummy patients
  useEffect(() => {
    setPatients([
      {
        id: 1,
        name: "Robert Fox",
        day: "Monday",
        phone: "080320532053",
        time: "8:00am to 9:00am",
        status: "Completed",
      },
      {
        id: 2,
        name: "Sarah Connor",
        day: "Tuesday",
        phone: "080987654321",
        time: "10:00am to 11:00am",
        status: "Cancelled",
      },
      {
        id: 3,
        name: "John Doe",
        day: "Wednesday",
        phone: "080123456789",
        time: "1:00pm to 2:00pm",
        status: "Pending",
      },
    ]);
  }, []);

  // Filter patients by search and day
  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterDay ? p.day === filterDay : true)
  );

  // Get color classes for status badges
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow rounded-lg p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold">Patient Queue</h2>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring w-full sm:w-48"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring w-full sm:w-52"
              value={filterDay}
              onChange={(e) => setFilterDay(e.target.value)}
            >
              <option value="">Filter by Appointment Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="p-3">Name</th>
                <th className="p-3">Day</th>
                <th className="p-3">Phone Number</th>
                <th className="p-3">Appointment Time</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((p) => (
                <tr
                  key={p.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 flex items-center gap-2">
                    {/* Clickable Avatar */}
                    <div
                      className="w-8 h-8 rounded-full bg-purple-200 cursor-pointer hover:ring-2 hover:ring-purple-400 shrink-0"
                      onClick={() => navigate(`/patient-profile/${p.id}`)}
                    ></div>
                    <span className="truncate">{p.name}</span>
                  </td>
                  <td className="p-3">{p.day}</td>
                  <td className="p-3">{p.phone}</td>
                  <td className="p-3">{p.time}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        p.status
                      )}`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 gap-2">
          <span>
            Showing {filteredPatients.length} of {patients.length}
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              1
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocAppointments;

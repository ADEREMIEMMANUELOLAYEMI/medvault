// src/components/NewStaff.jsx
import React, { useState } from "react";

export default function NewStaff({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [license, setLicense] = useState("");

  if (!isOpen) return null;

  const submit = (e) => {
    e.preventDefault();
    onCreate?.({ name, email, role, department, license });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-2 text-[#2C2C2C]">
          Add New Staff
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill in the information for the new staff
        </p>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Samuel Dannie"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="samuel@gmail.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select a role</option>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select a department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Radiology">Radiology</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>

          {/* License */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              License (If Applicable)
            </label>
            <input
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              type="text"
              placeholder="Enter license number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

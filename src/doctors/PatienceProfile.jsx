import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNotes from "./AddNotes";
import Prescriptions from "./Prescriptions";
import Addlabs from "./Addlabs";
import RequestSpecialist from "./RequestSpecialist";

// Reusable Modal
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

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

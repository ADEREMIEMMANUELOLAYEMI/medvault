import React, { useEffect, useState } from "react";

export default function Prescriptions({ isOpen, onClose }) {
  const [medication, setMedication] = useState("");
  const [dosage, setDosage] = useState("");
  const [instructions, setInstructions] = useState("");

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!medication || !dosage) {
      alert("Please fill in all required fields");
      return;
    }
    console.log({ medication, dosage, instructions });
    onClose();
    // Here you can send the data to backend or API
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg p-6 z-50 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
          Prescriptions
        </h2>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Medication Input */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Medication
            </label>
            <input
              type="text"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              placeholder="e.g., Metformin 500mg"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Dosage Dropdown */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Dosage
            </label>
            <select
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Dosage</option>
              <option value="once">Once Daily</option>
              <option value="twice">Twice Daily</option>
              <option value="three">Three Times Daily</option>
            </select>
          </div>

          {/* Instructions Textarea */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Instructions
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="5"
              placeholder="Enter instructions for the patient..."
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base font-medium"
          >
            Send to Pharmacy
          </button>
        </form>
      </div>
    </div>
  );
}

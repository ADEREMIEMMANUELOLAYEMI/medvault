import React from "react";

export default function Prescriptions({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 z-50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-lg font-semibold mb-4">Prescriptions</h2>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Medication Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Medication
            </label>
            <input
              type="text"
              placeholder="e.g., Metformin 500mg"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Dosage Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dosage
            </label>
            <select className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Select Dosage</option>
              <option>Once Daily</option>
              <option>Twice Daily</option>
              <option>Three Times Daily</option>
            </select>
          </div>

          {/* Instructions Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructions
            </label>
            <textarea
              rows="6"
              placeholder="Enter instructions for the patient..."
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={onClose}
          >
            Send to Pharmacy
          </button>
        </form>
      </div>
    </div>
  );
}

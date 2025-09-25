import React from "react";

export default function AddNotes({ isOpen, onClose }) {
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
        <h2 className="text-lg font-semibold mb-4">Add Notes</h2>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="Test For Diabetes"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>In Progress</option>
            </select>
          </div>

          {/* Notes Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Note
            </label>
            <textarea
              rows="6"
              defaultValue={`Fasting Blood Glucose (FBG): 132 mg/dL
Reference Range: 70 – 99 mg/dL
Interpretation: High (Prediabetes)

2-Hour OGTT: 185 mg/dL
Reference Range: < 140 mg/dL
Interpretation: Diabetes Range

Random Blood Glucose (RBG): 160 mg/dL
Reference Range: < 140 mg/dL
Interpretation: Elevated

HbA1c: 7.2 %
Reference Range: ≤ 5.7 % (Normal), 5.7–6.4 % (Prediabetes), ≥ 6.5 % (Diabetes)`}
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={onClose}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

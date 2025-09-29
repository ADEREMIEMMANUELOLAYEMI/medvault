import React from "react";

export default function Addlabs({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-xl w-[95%] sm:w-[90%] md:w-[80%] lg:max-w-lg p-4 sm:p-6 md:p-8 z-50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
          Request Lab
        </h2>

        {/* Form */}
        <form className="flex flex-col space-y-4 text-sm sm:text-base">
          {/* Title Input */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Test For Diabetes"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base">
              <option>Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>In Progress</option>
            </select>
          </div>

          {/* Notes Textarea */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Lab Request Details
            </label>
            <textarea
              rows="5"
              placeholder="Write lab request details here..."
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-y text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base font-medium transition"
            onClick={onClose}
          >
            Send to Lab
          </button>
        </form>
      </div>
    </div>
  );
}

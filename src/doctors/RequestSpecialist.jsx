import React, { useEffect } from "react";

export default function RequestSpecialist({ isOpen, onClose }) {
  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-xl w-[95%] sm:w-[80%] md:w-[500px] p-6 z-50 transform transition-all duration-300 scale-95 animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-lg font-semibold mb-4">Request Specialist</h2>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="Cardiologist Consultation"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Select Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>In Progress</option>
            </select>
          </div>

          {/* Notes Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Specialist Request Details
            </label>
            <textarea
              rows="5"
              placeholder="Write specialist request details here..."
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={onClose}
          >
            Send to Specialist
          </button>
        </form>
      </div>
    </div>
  );
}

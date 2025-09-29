import React, { useEffect, useState } from "react";

export default function RequestSpecialist({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

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
    if (!title || !status) {
      alert("Please fill in all required fields");
      return;
    }
    console.log({ title, status, notes });
    onClose();
    // You can send this data to backend here
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
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
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg p-6 z-50 overflow-y-auto max-h-[90vh] transform transition-all duration-300 scale-95">
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
          Request Specialist
        </h2>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Cardiologist Consultation"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Notes Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Specialist Request Details
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="5"
              placeholder="Write specialist request details here..."
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base font-medium"
          >
            Send to Specialist
          </button>
        </form>
      </div>
    </div>
  );
}


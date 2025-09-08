import React, { useState } from "react";

export default function NewDepartmentModal({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const submit = (e) => {
    e.preventDefault();
    onCreate?.({ name, count: Number(count), file });
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
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-2 text-[#2C2C2C]">
          Creating New Department
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill in the information for the new department
        </p>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department's Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Radiology"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Doctors
            </label>
            <input
              value={count}
              onChange={(e) => setCount(e.target.value)}
              type="number"
              placeholder="350"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image (optional)
            </label>
            <label className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 cursor-pointer hover:border-blue-500">
              <input
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
              Click to upload or drag and drop
              <div className="text-xs text-gray-400 mt-1">
                JPG, JPEG, PNG less than 1MB
              </div>
              {file && <div className="mt-2 text-xs">{file.name}</div>}
            </label>
          </div>

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

// import React, { useState, useEffect } from "react";

// const DocAppointments = () => {
//   const [patients, setPatients] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterDay, setFilterDay] = useState("");

//   // Dummy data (replace with backend API call)
//   useEffect(() => {
//     const fetchPatients = async () => {
//       // Example API integration (replace URL with your backend endpoint)
//       // const res = await fetch("http://localhost:5000/patients");
//       // const data = await res.json();
//       // setPatients(data);

//       // Static demo data
//       setPatients([
//         {
//           id: 1,
//           name: "Robert Fox",
//           day: "Monday",
//           phone: "080320532053",
//           time: "8:00am to 9:00am",
//           status: "Completed",
//         },
//         {
//           id: 2,
//           name: "Robert Fox",
//           day: "Monday",
//           phone: "080320532053",
//           time: "8:00am to 9:00am",
//           status: "Cancelled",
//         },
//         {
//           id: 3,
//           name: "Robert Fox",
//           day: "Monday",
//           phone: "080320532053",
//           time: "8:00am to 9:00am",
//           status: "Pending",
//         },
//       ]);
//     };

//     fetchPatients();
//   }, []);

//   // Filtering
//   const filteredPatients = patients.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) &&
//       (filterDay ? p.day === filterDay : true)
//   );

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Completed":
//         return "bg-green-100 text-green-600";
//       case "Cancelled":
//         return "bg-red-100 text-red-600";
//       case "Pending":
//         return "bg-yellow-100 text-yellow-600";
//       default:
//         return "bg-gray-100 text-gray-600";
//     }
//   };

//   return (
//     <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
//       <div className="bg-white shadow rounded-lg p-4 md:p-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
//           <h2 className="text-lg font-semibold">Patient Queue</h2>

//           <div className="flex flex-col md:flex-row gap-2">
//             <input
//               type="text"
//               placeholder="Search"
//               className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring w-full md:w-48"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <select
//               className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring"
//               value={filterDay}
//               onChange={(e) => setFilterDay(e.target.value)}
//             >
//               <option value="">Filter by Appointment Day</option>
//               <option value="Monday">Monday</option>
//               <option value="Tuesday">Tuesday</option>
//               <option value="Wednesday">Wednesday</option>
//             </select>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-left text-gray-600">
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Day</th>
//                 <th className="p-3">Phone Number</th>
//                 <th className="p-3">Appointment Time</th>
//                 <th className="p-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPatients.map((p) => (
//                 <tr key={p.id} className="border-b hover:bg-gray-50">
//                   <td className="p-3 flex items-center gap-2">
//                     <div className="w-8 h-8 rounded-full bg-purple-200"></div>
//                     {p.name}
//                   </td>
//                   <td className="p-3">{p.day}</td>
//                   <td className="p-3">{p.phone}</td>
//                   <td className="p-3">{p.time}</td>
//                   <td className="p-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
//                         p.status
//                       )}`}
//                     >
//                       {p.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
//           <span>
//             Showing {filteredPatients.length} of {patients.length}
//           </span>
//           <div className="flex gap-2">
//             <button className="px-3 py-1 border rounded">1</button>
//             <button className="px-3 py-1 border rounded">2</button>
//             <button className="px-3 py-1 border rounded">3</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocAppointments;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

const DocAppointments = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDay, setFilterDay] = useState("");
  const navigate = useNavigate(); // ✅ init navigate

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
        name: "Robert Fox",
        day: "Monday",
        phone: "080320532053",
        time: "8:00am to 9:00am",
        status: "Cancelled",
      },
      {
        id: 3,
        name: "Robert Fox",
        day: "Monday",
        phone: "080320532053",
        time: "8:00am to 9:00am",
        status: "Pending",
      },
    ]);
  }, []);

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterDay ? p.day === filterDay : true)
  );

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

          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring w-full md:w-48"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring"
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
          <table className="w-full text-sm border-collapse">
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
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-2">
                    {/* ✅ Clickable Avatar */}
                    <div
                      className="w-8 h-8 rounded-full bg-purple-200 cursor-pointer hover:ring-2 hover:ring-purple-400"
                      onClick={() => navigate(`/patient-profile/${p.id}`)}
                    ></div>
                    {p.name}
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
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>
            Showing {filteredPatients.length} of {patients.length}
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocAppointments;

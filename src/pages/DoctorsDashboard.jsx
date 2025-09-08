  
// import React from "react";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Users, Stethoscope, Activity, Calendar } from "lucide-react";

// const data = [
//   { name: "Jan", patients: 1200 },
//   { name: "Feb", patients: 1500 },
//   { name: "Mar", patients: 1300 },
//   { name: "Apr", patients: 900 },
//   { name: "May", patients: 1100 },
//   { name: "Jun", patients: 1400 },
//   { name: "Jul", patients: 1600 },
//   { name: "Aug", patients: 1300 },
//   { name: "Sep", patients: 1200 },
//   { name: "Oct", patients: 1350 },
//   { name: "Nov", patients: 1340 },
//   { name: "Dec", patients: 1320 },
// ];

// const statCards = [
//   { 
//     title: "Active ", 
//     value: "34,000", 
//     icon: "solar:arrow-up-linear", 
//     color: "bg-green-100 text-green-600",
//     iconBg: "bg-green-100", 
//     iconColor: "text-green-600",
//     icon: Users
//   },
//   { 
//     title: "Total Doctors", 
//     value: "2,468", 
//     change: "+", 
//     color: "bg-yellow-100 text-yellow-600",
//     iconBg: "bg-yellow-100", 
//     iconColor: "text-yellow-600",
//     icon: Stethoscope
//   },
//   { 
//     title: "Emergency", 
//     value: "22,459", 
//     change: "+4%", 
//     color: "bg-purple-100 text-purple-600",
//     iconBg: "bg-purple-100", 
//     iconColor: "text-purple-600",
//     icon: Activity
//   },
//   { 
//     title: "Appointments", 
//     value: "7,632", 
//     change: "+4%", 
//     color: "bg-red-100 text-red-600",
//     iconBg: "bg-red-100", 
//     iconColor: "text-red-600",
//     icon: Calendar
//   },
// ];

// export default function DoctorsDashboard() {
//   return (
//     <div className="min-h-screen bg-[#F7F6F9] p-6">
//       {/* ✅ Top Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//         {statCards.map((card, i) => {
//           const IconComponent = card.icon;
//           return (
//             <div 
//               key={i} 
//               className="bg-[#FFFFFF] shadow rounded-[8px] p-4 flex flex-col items-center "
//             >
//               <div className=" mr-20 items-center h-10 ">
//                   <h2 className="text-[#464255] text-[16px]">{card.title}</h2>
//                    <p className="font-normal text-[#464255] text-[36px] .barlow">{card.value}</p>
//                <span className={`rounded-[24px] bg-[#D9F1EC]  w-[24px] h-[24px]${card.color}`}>
//                 {card.change}
//               </span>

//               </div>  
//               {/* Circle Icon */}
//               <div className={`w-[80px] h-[80px] flex items-center justify-center rounded-[80px] relative left-[35%] top-[-30%] ${card.iconBg} mb-3`}>
//                 <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
//               </div>

            
            
//             </div>
//           );
//         })}
//       </div>

//       {/* ✅ Chart Section */}
//       <div className="bg-[#FFF] shadow rounded-2xl p-6 mb-6">
//         <h3 className="font-normal mb-4 .readex leading-medium text-[16px]">
//           Active Patients
//         </h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="patients" fill="url(#colorUv)" radius={[4, 4, 4, 4]} />
//             <defs>
//               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#2C26DBF0" stopOpacity={0.9} />
//                 <stop offset="95%" stopColor="#3B315561" stopOpacity={0.1} />
//               </linearGradient>
//             </defs>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* ✅ Bottom Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Quick Actions */}
//         <div className="bg-white shadow rounded-2xl p-6">
//           <h3 className="text-lg font-medium mb-4 readex">Quick Actions</h3>
//           <div className="space-y-3">
//             <button className="w-full py-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
//               Add New Staff Member
//             </button>
//             <button className="w-full py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
//               Manage Departments
//             </button>
//             <button className="w-full py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
//               View Appointment
//             </button>
//             <button className="w-full py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
//               Hospital Settings
//             </button>
//           </div>
//         </div>

//         {/* Notifications */}
//         <div className="bg-[#FFFFFF] shadow rounded-[8px] p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-normal .readex">Notifications</h3>
//             <a href="#" className="text-indigo-600 text-sm hover:underline">
//               View all
//             </a>
//           </div>
//           <div className="space-y-4">
//             {Array(3).fill().map((_, i) => (
//               <div key={i} className="border-b pb-2">
//                 <p className="font-medium text-indigo-600">New Doctor Created</p>
//                 <p className="text-gray-500 text-sm">Doctor Moses James has been added</p>
//                 <span className="text-xs text-gray-400">22 Apr 3:24PM</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, Stethoscope, Activity, Calendar } from "lucide-react";

const data = [
  { name: "Jan", patients: 1200 },
  { name: "Feb", patients: 1500 },
  { name: "Mar", patients: 1500 },
  { name: "Apr", patients: 900 },
  { name: "May", patients: 1100 },
  { name: "Jun", patients: 1400 },
  { name: "Jul", patients: 1500 },
  { name: "Aug", patients: 1300 },
  { name: "Sep", patients: 1200 },
  { name: "Oct", patients: 1350 },
  { name: "Nov", patients: 1340 },
  { name: "Dec", patients: 1500 },
];

const statCards = [
  { 
    title: "Active ", 
    value: "34,000", 
    change: "930 days", 
    icon: Users,
    color: "bg-green-100 text-green-600",
    iconBg: "bg-green-100", 
    iconColor: "text-green-600"
  },
  { 
    title: "Total Doctors", 
    value: "2,468", 
    change: "+", 
    icon: Stethoscope,
    color: "bg-yellow-100 text-yellow-600",
    iconBg: "bg-yellow-100", 
    iconColor: "text-yellow-600"
  },
  { 
    title: "Emergency", 
    value: "22,459", 
    change: "+4%", 
    icon: Activity,
    color: "bg-purple-100 text-purple-600",
    iconBg: "bg-purple-100", 
    iconColor: "text-purple-600"  
  },
  { 
    title: "Appointments", 
    value: "7,632", 
    change: "+4%", 
    icon: Calendar,
    color: "bg-red-100 text-red-600",
    iconBg: "bg-red-100", 
    iconColor: "text-red-600"
  },
];

export default function DoctorsDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] p-6">
      {/* ✅ Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {statCards.map((card, i) => {
          const IconComponent = card.icon;
          return (
            <div 
              key={i} 
              className="bg-[#FFFFFF] shadow rounded-[8px] p-4 flex flex-col items-center"
            >
              {/* ✅ Title & Value */}
              <div className="flex flex-col items-start w-full ">
                <h2 className="text-[#464255] text-[16px]">{card.title}</h2>
                <p className="font-normal text-[#464255] text-[36px] barlow">{card.value}</p>
                
                {/* ✅ Change (separate from value) */}
                {card.change && (
                  <span className="text-sm font-medium text-gray-500">
                    {card.change}
                  </span>
                )}
              </div>  

              {/* ✅ Circle Icon (separate on its own) */}
              <div className={`w-[80px] h-[80px] flex items-center justify-center rounded-full mt-4 ${card.iconBg}`}>
                <IconComponent className={`w-6 h-6  ${card.iconColor}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Chart Section */}
      <div className="bg-[#FFF] shadow rounded-2xl p-6 mb-6">
        <h3 className="font-normal mb-4 readex leading-medium text-[16px]">
          Active Patients
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="patients" fill="url(#colorUv)" radius={[4, 4, 4, 4]} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2C26DBF0" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#3B315561" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-lg font-medium mb-4 readex">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Add New Staff Member
            </button>
            <button className="w-full py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
              Manage Departments
            </button>
            <button className="w-full py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
              View Appointment
            </button>
            <button className="w-full py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100">
              Hospital Settings
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#FFFFFF] shadow rounded-[8px] p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-normal readex">Notifications</h3>
            <a href="#" className="text-indigo-600 text-sm hover:underline">
              View all
            </a>
          </div>
          <div className="space-y-4">
            {Array(3).fill().map((_, i) => (
              <div key={i} className="border-b pb-2">
                <p className="font-medium text-indigo-600">New Doctor Created</p>
                <p className="text-gray-500 text-sm">Doctor Moses James has been added</p>
                <span className="text-xs text-gray-400">22 Apr 3:24PM</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

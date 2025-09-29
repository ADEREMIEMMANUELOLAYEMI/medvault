import React from "react";
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
    title: "Active Patients",
    value: "34,000",
    change: "930 days",
    icon: Users,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Total Doctors",
    value: "2,468",
    change: "+",
    icon: Stethoscope,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Emergency",
    value: "22,459",
    change: "+4%",
    icon: Activity,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Appointments",
    value: "7,632",
    change: "+4%",
    icon: Calendar,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export default function DoctorsDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F6F9] p-4 md:p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {statCards.map((card, i) => {
          const IconComponent = card.icon;
          return (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-4 flex flex-col justify-between overflow-hidden hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col flex-grow min-w-0">
                  <h2 className="text-sm md:text-base text-gray-600 truncate">
                    {card.title}
                  </h2>
                  <p className="font-semibold text-2xl md:text-3xl text-gray-800 mt-1 truncate">
                    {card.value}
                  </p>
                  {card.change && (
                    <span className="text-xs md:text-sm text-gray-500 truncate">
                      {card.change}
                    </span>
                  )}
                </div>
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shrink-0 ${card.iconBg}`}
                >
                  <IconComponent
                    className={`w-5 h-5 md:w-6 md:h-6 ${card.iconColor}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow rounded-xl p-4 md:p-6 mb-6">
        <h3 className="font-medium mb-4 text-sm md:text-base text-gray-700 truncate">
          Active Patients
        </h3>
        <div className="w-full h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="patients" fill="url(#colorUv)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2C26DBF0" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#3B315561" stopOpacity={0.1} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white shadow rounded-xl p-4 md:p-6">
          <h3 className="text-base font-medium mb-4 text-gray-700">
            Quick Actions
          </h3>
          <div className="flex flex-col space-y-3">
            {[
              "Add New Staff Member",
              "Manage Departments",
              "View Appointments",
              "Hospital Settings",
            ].map((action, i) => (
              <button
                key={i}
                className="w-full py-2 px-4 rounded-lg text-sm md:text-base truncate
                           bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent
                           disabled:opacity-50 transition"
                aria-label={action}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow rounded-xl p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium text-gray-700">Notifications</h3>
            <a
              href="#"
              className="text-indigo-600 text-sm hover:underline whitespace-nowrap"
            >
              View all
            </a>
          </div>
          <div className="space-y-4 max-h-60 overflow-y-auto">
            {Array(3)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="border-b pb-2 last:border-none overflow-hidden"
                >
                  <p className="font-medium text-indigo-600 text-sm md:text-base truncate">
                    New Doctor Created
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm truncate">
                    Doctor Moses James has been added
                  </p>
                  <span className="text-xs text-gray-400 block">
                    22 Apr 3:24PM
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

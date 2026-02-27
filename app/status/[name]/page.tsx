"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const years = [2023, 2024, 2025];
const users = [
  "Amar Singh",
  "Amit Srivastava",
  "Kanav Agarwal",
  "Mani Kant",
  "Mukesh Tyagi",
  "Powerbi",
  "Promod Yadav",
  "Sanjeev Ahuja",
  "SK Brahma",
  "Satyanarayan Naik",
  "Ankur Verma",
  "Simarpreet Singh",
  "RK Chaurasiya",
  "Manoj Gupta",
  "Sushant Sinha",
  "Ashish Nagpal",
  "Ram Prakash Sharma",
  "Simran Rawat",
  "Amit Tiwary",
];

export default function DashboardDetail() {
  const params = useParams();

  const dashboardName =
    params && typeof params.name === "string"
      ? params.name.replace(/-/g, " ")
      : "Dashboard";

  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedUser, setSelectedUser] = useState("All");

  // ✅ Stable deterministic data generator (NO random)
  const generateMonthlyData = (user: string) => {
    const base =
      user.length +
      selectedMonth.length +
      selectedYear.toString().length;
    return (base * 7) % 100; // Always same result for same selection
  };

  const displayedUsers = selectedUser === "All" ? users : [selectedUser];

  // Memoize to avoid recalculating unnecessarily
  const tableData = useMemo(() => {
    return displayedUsers.map((user) => ({
      user,
      value: generateMonthlyData(user),
    }));
  }, [displayedUsers, selectedMonth, selectedYear]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-6 md:p-12">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 drop-shadow-lg">
          {dashboardName} Status
        </h1>
        <p className="text-gray-700 mt-2 text-lg md:text-xl">
          Select Year, Month & User to view dashboard status
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Year</label>
          <select
            className="px-4 py-2 rounded-lg shadow-lg border border-gray-300"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Month</label>
          <select
            className="px-4 py-2 rounded-lg shadow-lg border border-gray-300"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">User</label>
          <select
            className="px-4 py-2 rounded-lg shadow-lg border border-gray-300"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="All">All</option>
            {users.map((user) => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-52 md:h-64 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-2xl mb-10">
        {dashboardName} Status - {selectedMonth} {selectedYear}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.user} className="border-b hover:bg-indigo-50 transition">
                <td className="px-4 py-3 font-semibold text-gray-800">{row.user}</td>
                <td className="px-4 py-3 text-center text-gray-700">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
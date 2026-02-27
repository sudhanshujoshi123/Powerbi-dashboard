"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

// Months, Years, Users
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
  let dashboardName = "Dashboard";
  if (params && typeof params.name === "string") {
    dashboardName = params.name.replace(/-/g, " ");
  }

  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedUser, setSelectedUser] = useState("All");

  // Dummy data generator
  const generateMonthlyData = (user: string) => Math.floor(Math.random() * 100);

  // Filtered users
  const displayedUsers = selectedUser === "All" ? users : [selectedUser];

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
        {/* Year */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Year</label>
          <select
            className="px-4 py-2 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Month */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Month</label>
          <select
            className="px-4 py-2 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>

        {/* User Name */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">User</label>
          <select
            className="px-4 py-2 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
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

      {/* Mini chart placeholder */}
      <div
        className="w-full h-52 md:h-64 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-2xl mb-10"
      >
        {dashboardName} Status - {selectedMonth} {selectedYear}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-indigo-600/90 text-white sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user) => (
              <tr key={user} className="border-b border-gray-200 hover:bg-indigo-50 transition">
                <td className="px-4 py-3 font-semibold text-gray-800">{user}</td>
                <td className="px-4 py-3 text-center text-gray-700">{generateMonthlyData(user)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back button */}
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
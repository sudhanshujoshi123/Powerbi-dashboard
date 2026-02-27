"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const dashboards = [
  { name: "Production And Utilities", emoji: "🏭" },
  { name: "Process Downtime", emoji: "⏳" },
  { name: "Sales", emoji: "📈" },
  { name: "OTIF", emoji: "🚚" },
  { name: "Sales & Billing", emoji: "💳" },
  { name: "Plant Maintenance", emoji: "🛠️" },
  { name: "Raw Material", emoji: "📦" },
  { name: "Order To Variance", emoji: "📊" },
  { name: "Power", emoji: "⚡" },
];

export default function StatusPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  // 🔐 Authentication Check
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");

    if (isAuth === "true") {
      setAuthorized(true);
    } else {
      router.replace("/login"); // better than push
    }
  }, [router]);

  if (!authorized) return null; // page render hi nahi hoga

  const handleDashboardClick = (name: string) => {
    router.push(`/status/${name.replace(/\s+/g, "-")}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.replace("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Dashboard Status
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((dash) => (
          <div
            key={dash.name}
            onClick={() => handleDashboardClick(dash.name)}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-2">{dash.emoji}</div>
            <h2 className="text-xl font-semibold text-gray-700">
              {dash.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Click to view status
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
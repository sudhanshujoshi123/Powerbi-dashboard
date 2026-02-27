"use client";

import React from "react";
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

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800">
        Dashboard Status
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((dash) => (
          <div
            key={dash.name}
            onClick={() => router.push(`/status/${dash.name.replace(/\s+/g, "-")}`)}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-2">{dash.emoji}</div>
            <h2 className="text-xl font-semibold text-gray-700">{dash.name}</h2>
            <p className="text-sm text-gray-500 mt-1">Click to view status</p>
          </div>
        ))}
      </div>
    </div>
  );
}
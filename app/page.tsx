"use client";

import React from "react";
import { useRouter } from "next/navigation";

const dashboards = [
  {
    name: "Production & Utilities",
    emoji: "🏭",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/7c651eb6-1fca-4bf9-b98d-a61b766e0099?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "Process Downtime",
    emoji: "⏳",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/0faf2d2d-1f03-415b-8d68-2c05eca62177?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "Sales",
    emoji: "📈",
    link: "https://app.powerbi.com/links/JGupzdKE5H?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "OTIF",
    emoji: "🚚",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/9d14f233-84e2-413c-993e-5eed36145028?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "Sales & Billing",
    emoji: "💳",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/bc32f86e-6037-47a8-88ce-b3cfcfcefd94?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "Plant Maintenance",
    emoji: "🛠️",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/981a3769-2142-4159-8b48-ef7082f787f5?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "Raw Material",
    emoji: "📦",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/b5d5243c-2460-4e82-a970-f78f768b11f6?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "Order To Variance",
    emoji: "📊",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/040ffeda-30e8-42e9-aa25-738dd17a6ee7?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
  {
    name: "Power",
    emoji: "⚡",
    link: "https://app.powerbi.com/groups/e347cd1f-881c-4483-ab3d-cce01bad7d68/reports/f5024a4e-4dcc-4431-bf94-13f1296159f3?ctid=95f4c681-13d1-437f-8c18-ba9d195dca71",
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      
      {/* Header */}
      <header className="w-full py-5 px-6 flex flex-col md:flex-row items-center justify-between bg-white relative z-10">
        
        <div className="mb-4 md:mb-0 flex-shrink-0">
          <img
            src="/npl-banner.png"
            alt="NPL Logo"
            className="w-36 md:w-48 h-auto object-contain"
          />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            NPL Dashboards
          </h1>
        </div>

        <div className="mt-4 md:mt-0">
          <button
            onClick={() => router.push("/login")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Status
          </button>
        </div>
      </header>

      {/* Dashboard Cards */}
      <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboards.map((dash, idx) => (
          <a
            key={idx}
            href={dash.link}
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-5xl mb-4">{dash.emoji}</div>
            <h2 className="text-2xl font-bold text-gray-800">
              {dash.name}
            </h2>
          </a>
        ))}
      </div>

    </div>
  );
}
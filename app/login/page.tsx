"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      email === "powerbi@nainigroup.com" &&
      password === "Naini#123"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      router.replace("/status");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Glass Card */}
      <div className="relative bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl p-10 w-[420px]">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
            <img
              src="/npl-banner.png"
              alt="NPL Logo"
              className="w-48 object-contain"
            />
          </div>

          <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
            Status Portal
          </h1>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Secure access to NPL dashboard status
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 mb-4 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-4 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold p-3 rounded-xl hover:bg-indigo-700 hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
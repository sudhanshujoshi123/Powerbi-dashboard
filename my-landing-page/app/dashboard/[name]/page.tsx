"use client";

import { useParams, useRouter } from "next/navigation";

export default function DashboardDetail() {
  const params = useParams();
  const router = useRouter();
  const dashboardName = decodeURIComponent(params?.name as string);

  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem" }}>{dashboardName}</h1>
      <p style={{ marginBottom: "2rem" }}>
        Monthwise Dashboard Views Status
      </p>

      <div style={{
        height: "250px",
        borderRadius: "16px",
        background: "linear-gradient(90deg,#ff6b6b,#fddb92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.5rem"
      }}>
        📊 Chart Placeholder (Monthwise Views)
      </div>

      <button
        style={{
          marginTop: "2rem",
          padding: "12px 25px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: "#2c5364",
          color: "#fff"
        }}
        onClick={() => router.back()}
      >
        🔙 Back to Dashboards
      </button>
    </div>
  );
}
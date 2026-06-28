import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const safeEvent = event || {};

  const capacity =
    safeEvent.capacity > 0
      ? Math.min(
          100,
          (safeEvent.registrations / safeEvent.capacity) * 100
        )
      : 0;

  return (
    <div
      style={{
        border: safeEvent.isCancelled
          ? "1px solid #e74c3c"
          : "1px solid #e6e6e6",
        padding: "16px",
        borderRadius: "14px",
        background: safeEvent.isCancelled ? "#fff0f0" : "#ffffff",
        opacity: safeEvent.isCancelled ? 0.55 : 1,

        // ✨ PREMIUM UI TOUCH
        transition: "all 0.25s ease",
        lineHeight: "1.5",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 14px 30px rgba(0,0,0,0.12)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 12px rgba(0,0,0,0.06)";
      }}
    >
      {/* TITLE */}
      <h3
        style={{
          marginBottom: "6px",
          fontSize: "17px",
          fontWeight: "700",
          color: "#111",
        }}
      >
        {safeEvent.title || "Untitled Event"}
      </h3>

      {/* CLUB */}
      <p
        style={{
          color: "#666",
          marginBottom: "10px",
          fontSize: "13px",
        }}
      >
        {safeEvent.club || "Unknown Club"}
      </p>

      {/* TIME + LOCATION */}
      <p style={{ fontSize: "13px", margin: "3px 0", color: "#444" }}>
        📅 {safeEvent.startTime || "TBA"}
      </p>
      <p style={{ fontSize: "13px", margin: "3px 0", color: "#444" }}>
        📍 {safeEvent.location || "TBA"}
      </p>

      {/* CANCELLED BADGE */}
      {safeEvent.isCancelled && (
        <span
          style={{
            display: "inline-block",
            marginTop: "10px",
            color: "#fff",
            background: "#e74c3c",
            padding: "5px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          CANCELLED
        </span>
      )}

      {/* CAPACITY INFO */}
      <p
        style={{
          marginTop: "12px",
          fontSize: "13px",
          fontWeight: "500",
          color: "#333",
        }}
      >
        👥 {safeEvent.registrations ?? 0} /{" "}
        {safeEvent.capacity ?? 0}
      </p>

      {/* CAPACITY BAR */}
      <div
        style={{
          height: "7px",
          background: "#eee",
          borderRadius: "20px",
          marginTop: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${capacity}%`,
            height: "100%",
            background:
              capacity > 80 ? "#e74c3c" : "#2ecc71",
            borderRadius: "20px",
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* LINK */}
      <Link
        to={`/event/${safeEvent.id}`}
        style={{
          display: "inline-block",
          marginTop: "14px",
          color: "#2563eb",
          fontWeight: "600",
          fontSize: "13px",
          textDecoration: "none",
        }}
      >
        View Details →
      </Link>
    </div>
  );
}
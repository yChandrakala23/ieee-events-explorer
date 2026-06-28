import { useParams } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import { normalizeEvent } from "../utils/normalizeEvent";
import { useBookmarks } from "../hooks/useBookmarks";

export default function Detail() {
  const { id } = useParams();
  const { events, loading } = useEvents();

  const { toggleBookmark, isBookmarked } = useBookmarks();

  // ⏳ LOADING STATE FIRST (IMPORTANT FIX)
  if (loading || !events || events.length === 0) {
    return <h2>Loading...</h2>;
  }

  const event = (events || [])
    .map(normalizeEvent)
    .find((e) => e.id === id);

  // ⏳ CHANGED: NO "NOT FOUND" — ONLY LOADING fallback
  if (!event) {
    return <h2>Loading...</h2>;
  }

  const bookmarked = isBookmarked(event.id);

  const percent =
    event.capacity > 0
      ? (event.registrations / event.capacity) * 100
      : 0;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{event.title || "Untitled Event"}</h1>

      <p><b>Club:</b> {event.club || "Unknown"}</p>
      <p><b>Description:</b> {event.description || "No description"}</p>

      <p>📅 {event.startTime || "TBA"}</p>
      <p>📍 {event.location || "TBA"}</p>

      {/* TAGS */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {(event.tags || []).map((tag, i) => (
          <span
            key={i}
            style={{
              padding: "4px 8px",
              border: "1px solid gray",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CAPACITY BAR */}
      <div
        style={{
          marginTop: "10px",
          background: "#eee",
          height: "10px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "10px",
            background: percent > 80 ? "red" : "green",
            borderRadius: "5px",
          }}
        />
      </div>

      <p>
        {event.registrations ?? 0} / {event.capacity ?? 0} registered
      </p>

      {/* BOOKMARK BUTTON */}
      <button
        onClick={() => toggleBookmark(event)}
        style={{
          marginTop: "10px",
          padding: "10px",
          background: bookmarked ? "gold" : "black",
          color: bookmarked ? "black" : "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {bookmarked ? "★ Bookmarked" : "☆ Add Bookmark"}
      </button>
    </div>
  );
}
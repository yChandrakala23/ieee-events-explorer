import EventCard from "../components/EventCard";
import { useBookmarks } from "../hooks/useBookmarks";

export default function Bookmarks() {
  const { bookmarks } = useBookmarks();

  return (
    <div style={{ padding: "20px" }}>
      <h1>⭐ Bookmarked Events</h1>

      {bookmarks.length === 0 ? (
        <div style={{ marginTop: "40px", color: "#777" }}>
          <h2>No bookmarks yet</h2>
          <p>Save events to see them here</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {bookmarks.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
import { useState, useMemo } from "react";
import { useEvents } from "../hooks/useEvents";
import { normalizeEvent } from "../utils/normalizeEvent";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SkeletonCard from "../components/SkeletonCard";
import { useDebounce } from "../hooks/useDebounce";

export default function Feed() {
  const { events, loading } = useEvents();

  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  // 🔥 Normalize once
  const cleanEvents = useMemo(() => {
    return (events || []).map(normalizeEvent);
  }, [events]);

  // ⏳ Debounced search input
  const debouncedSearch = useDebounce(search, 300);

  // 🔍 Search filter (safe)
  const filteredBySearch = useMemo(() => {
    const query = (debouncedSearch || "").toLowerCase();

    return cleanEvents.filter((e) =>
      (e?.title || "").toLowerCase().includes(query)
    );
  }, [cleanEvents, debouncedSearch]);

  // 🏷️ Tag filter (safe)
  const filteredEvents = useMemo(() => {
    if (activeTag === "all") return filteredBySearch;

    return filteredBySearch.filter((e) =>
      (e?.tags || []).includes((activeTag || "").toLowerCase())
    );
  }, [filteredBySearch, activeTag]);

  // ⏳ Loading state (Skeleton UI)
  if (loading) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          padding: "20px",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>IEEE Events Explorer</h1>

      {/* SEARCH */}
      <SearchBar value={search} onChange={setSearch} />

      {/* FILTER */}
      <FilterBar active={activeTag} setActive={setActiveTag} />

      {/* EMPTY STATE */}
      {filteredEvents.length === 0 ? (
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            color: "#777",
          }}
        >
          <h2>No events found 😕</h2>
          <p>Try changing search or filters</p>
        </div>
      ) : (
        // 🎯 EVENTS GRID
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginTop: "20px",
          }}
        >
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
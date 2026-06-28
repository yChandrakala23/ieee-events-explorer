import { useEffect, useState } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const source = import.meta.env.VITE_DATA_SOURCE;

        const res = await fetch(source);
        const data = await res.json();

        const safeData = Array.isArray(data)
          ? data
          : Array.isArray(data?.events)
          ? data.events
          : [];

        setEvents(safeData);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { events, loading };
};
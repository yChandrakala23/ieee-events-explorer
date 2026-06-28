import { useState, useEffect } from "react";

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  // load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarks(saved);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("bookmarks", JSON.stringify(data));
    setBookmarks(data);
  };

  const toggleBookmark = (event) => {
    const exists = bookmarks.find((b) => b.id === event.id);

    let updated;

    if (exists) {
      updated = bookmarks.filter((b) => b.id !== event.id);
    } else {
      updated = [...bookmarks, event];
    }

    saveToStorage(updated);
  };

  const isBookmarked = (id) => {
    return bookmarks.some((b) => b.id === id);
  };

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
  };
};
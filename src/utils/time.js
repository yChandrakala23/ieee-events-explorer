export const safeTime = (t) => {
  if (!t) return "TBA";

  // timestamp (number)
  if (typeof t === "number") {
    return new Date(t).toLocaleString();
  }

  // string date
  if (typeof t === "string") {
    const d = new Date(t);
    return isNaN(d) ? "TBA" : d.toLocaleString();
  }

  return "TBA";
};
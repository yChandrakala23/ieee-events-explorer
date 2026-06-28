export const cleanTags = (tags) => {
  if (!Array.isArray(tags)) return [];

  return tags
    .map(t =>
      t
        .toLowerCase()
        .replace(/\s+/g, "")
        .trim()
    );
};
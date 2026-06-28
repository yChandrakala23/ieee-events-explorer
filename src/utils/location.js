export const safeLocation = (loc) => {
  if (!loc) return "Location TBA";

  // simple string
  if (typeof loc === "string") return loc;

  // array coords
  if (Array.isArray(loc)) return loc.join(", ");

  // object format
  if (typeof loc === "object") {
    if (loc.building) return loc.building;

    const mc = loc.map_coordinates;

    if (Array.isArray(mc)) return mc.join(", ");

    if (mc?.latitude && mc?.longitude) {
      return `${mc.latitude}, ${mc.longitude}`;
    }

    if (mc?.lat && mc?.lng) {
      return `${mc.lat}, ${mc.lng}`;
    }
  }

  return "Location TBA";
};
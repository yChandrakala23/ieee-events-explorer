import { safeTime } from "./time";
import { safeLocation } from "./location";
import { cleanTags } from "./tags";

export const normalizeEvent = (e) => {
  if (!e || typeof e !== "object") {
    return {
      id: crypto.randomUUID(),
      title: "Untitled Event",
      club: "Unknown Club",
      description: "No description available",
      startTime: "TBA",
      endTime: "TBA",
      location: "Location TBA",
      tags: [],
      registrations: 0,
      capacity: 0,
      isCancelled: false,
      requiresTicket: false,
    };
  }

  return {
    id: e?.id || crypto.randomUUID(),

    title: e?.title || "Untitled Event",
    club: e?.host_club || "Unknown Club",

    description: e?.description || "No description available",

    startTime: safeTime(e?.start_time),
    endTime: safeTime(e?.end_time),

    location: safeLocation(e?.location),

    tags: cleanTags(e?.tags || []),

    registrations: Number(e?.current_registrations) || 0,
    capacity: Number(e?.max_capacity) || 0,

    isCancelled: Boolean(e?.is_cancelled),

    requiresTicket: Boolean(e?.requires_ticket),
  };
};
import {
  i18n
} from "./chunk-EMG3U6W6.js";

// apps/concierge/src/app/ui/bulk-booking-actions.ts
function bookingRowKey(booking) {
  return `${booking.id}:${booking.instance || ""}`;
}
function selectedBookings(list, keys) {
  const selected = new Set(keys);
  return list.filter((booking) => selected.has(bookingRowKey(booking)));
}
function bulkRejectOptions(count, dialog) {
  return {
    dialog,
    confirm: {
      title: i18n("APP.CONCIERGE.BULK_REJECT_TITLE"),
      content: i18n("APP.CONCIERGE.BULK_REJECT_MSG", { count }),
      icon: "event_busy"
    }
  };
}

export {
  bookingRowKey,
  selectedBookings,
  bulkRejectOptions
};
//# debugId=23a8394b-75ec-5466-8f13-65d658e7e391
//# sourceMappingURL=chunk-WS7DCZQV.js.map

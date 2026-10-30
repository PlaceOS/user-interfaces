import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/reports.utilities.ts
function isActiveReportBooking(booking) {
  return !booking.deleted && !isDeclinedReportBooking(booking);
}
function activeReportBookings(bookings) {
  return bookings.filter(isActiveReportBooking);
}
function noShowReportBookings(bookings) {
  return activeReportBookings(bookings).filter((booking) => !booking.asset_id?.startsWith("unallocated") && !booking.checked_in && !booking.checked_in_at && booking.booking_end * 1e3 < Date.now());
}
function reportBookingStatusStats(bookings) {
  const deleted_count = bookings.filter((booking) => booking.deleted).length;
  const cancelled_count = bookings.filter((booking) => !booking.deleted && isDeclinedReportBooking(booking)).length;
  return {
    active_count: bookings.length - cancelled_count - deleted_count,
    cancelled_count,
    deleted_count,
    inactive_count: cancelled_count + deleted_count,
    total_count: bookings.length
  };
}
function reportBookingStatus(booking) {
  if (booking.deleted)
    return "Cancelled";
  if (isDeclinedReportBooking(booking))
    return "Rejected";
  if (booking.status === "approved")
    return "Approved";
  return booking.status || "tentative";
}
function reportEventStatus(event) {
  if (event.deleted)
    return "Cancelled";
  if (isDeclinedReportEvent(event))
    return "Rejected";
  if (event.status === "approved")
    return "Approved";
  return event.status || "tentative";
}
function formatReportPercentage(value = 0, total = 0) {
  const percent = total ? Math.floor(value / total * 1e3) / 10 : 0;
  return `${value || 0} (${percent}%)`;
}
function isActiveReportEvent(event) {
  return !event.deleted && !isDeclinedReportEvent(event);
}
function activeReportEvents(events) {
  return events.filter(isActiveReportEvent);
}
function cappedReportAttendeeCount(event, capacity = event.system?.capacity) {
  const attendee_count = event.attendees?.length || 0;
  return capacity > 0 ? Math.min(attendee_count, capacity) : attendee_count;
}
function reportBookableMinutes(bookable_hours) {
  if (!bookable_hours)
    return 8 * 60;
  const start = Number(bookable_hours.start);
  const end = Number(bookable_hours.end);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    return 8 * 60;
  }
  return (end - start) * 60;
}
function reportBookingDuration(event, bookable_minutes = 8 * 60) {
  const start = Number(event.date);
  const end = Number(event.date_end);
  if (Number.isFinite(start) && Number.isFinite(end) && end > start) {
    return Math.floor((end - start) / (60 * 1e3));
  }
  if (!Number.isFinite(event.duration))
    return bookable_minutes;
  return event.duration || 0;
}
function totalReportBookingDuration(bookings, bookable_minutes = 8 * 60) {
  return bookings.reduce((total, booking) => total + reportBookingDuration(booking, bookable_minutes), 0);
}
function reportBookedTimeUtilisationPercent(bookings, total_spaces = 0, bookable_minutes = 8 * 60) {
  const available_minutes = total_spaces * bookable_minutes;
  if (available_minutes <= 0)
    return 0;
  return Math.floor(totalReportBookingDuration(bookings, bookable_minutes) / available_minutes * 1e3) / 10;
}
function reportEventStatusStats(events) {
  const deleted_count = events.filter((event) => event.deleted).length;
  const cancelled_count = events.filter((event) => !event.deleted && isDeclinedReportEvent(event)).length;
  return {
    active_count: events.length - cancelled_count - deleted_count,
    cancelled_count,
    deleted_count,
    inactive_count: cancelled_count + deleted_count,
    total_count: events.length
  };
}
function isDeclinedReportBooking(booking) {
  const state = booking.state;
  return booking.rejected === true || booking.status === "cancelled" || booking.status === "declined" || state === "cancelled";
}
function isDeclinedReportEvent(event) {
  const state = event.state;
  const status = event.status;
  return event.rejected === true || event.type === "cancelled" || status === "cancelled" || status === "declined" || state === "cancelled";
}
function generateReportForDeskBookings(bookings, util_period = 1, counts = {}) {
  util_period = Math.max(1, util_period);
  let total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
  total = Math.max(1, total);
  const utilisation = Math.floor(bookings.length / total / util_period * 1e4) / 1e4;
  return __spreadProps(__spreadValues({}, reportBookingStatusStats(bookings)), {
    total,
    count: bookings.length,
    utilisation,
    events: bookings
  });
}
function generateReportForBookings(bookings, util_period = 8, bookable_minutes = 8 * 60, counts = {}) {
  util_period = Math.max(1, util_period);
  const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
  const occupancy_users = bookings.reduce((c, i) => c + cappedReportAttendeeCount(i), 0);
  const total_capacity = bookings.reduce((c, i) => c + Math.max(1, i.system?.capacity), 0);
  const utilisation = Math.floor(totalReportBookingDuration(bookings, bookable_minutes) / (util_period * 60) * 100) / 100;
  const occupancy = Math.floor(occupancy_users / total_capacity * 100) / 100;
  const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
  return {
    count: bookings.length,
    avg_length: Math.floor(bookings.reduce((c, i) => c + reportBookingDuration(i), 0) / bookings.length * 100) / 100,
    efficiency: Math.floor((utilisation + occupancy) / 2 * 100) / 100,
    total,
    total_users,
    total_capacity,
    occupancy,
    utilisation,
    events: bookings
  };
}

export {
  activeReportBookings,
  noShowReportBookings,
  reportBookingStatusStats,
  reportBookingStatus,
  reportEventStatus,
  formatReportPercentage,
  activeReportEvents,
  cappedReportAttendeeCount,
  reportBookableMinutes,
  reportBookingDuration,
  reportBookedTimeUtilisationPercent,
  reportEventStatusStats,
  isDeclinedReportEvent,
  generateReportForDeskBookings,
  generateReportForBookings
};
//# debugId=6637798b-0b13-5aa3-8656-541c3bfd019f
//# sourceMappingURL=chunk-M7D6LSL2.js.map

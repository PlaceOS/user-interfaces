import {
  queryAllBookingsOrThrow,
  removeBooking,
  showBooking,
  updateBooking
} from "./chunk-MBCHZ5RB.js";
import {
  subDays
} from "./chunk-4CVTYVK7.js";
import {
  addDays,
  endOfDay,
  getUnixTime,
  startOfDay,
  unique
} from "./chunk-PH2SWG67.js";

// apps/concierge/src/app/ui/assigned-booking.ts
var SERIES_LOOKAHEAD_DAYS = 7;
async function clearAssignedBooking(type, asset_id, email, now = Date.now()) {
  if (!email)
    return;
  const today_start = getUnixTime(startOfDay(now));
  const today_end = getUnixTime(endOfDay(now));
  const bookings = await queryAllBookingsOrThrow({
    period_start: today_start,
    period_end: getUnixTime(endOfDay(addDays(now, SERIES_LOOKAHEAD_DAYS))),
    type,
    email,
    include_checked_out: true,
    limit: 200
  });
  const matches = unique(bookings.filter((_) => _.asset_id === asset_id && (_.instance || _.booking_start <= today_end)), "id");
  const series_starts = await Promise.all(matches.map((booking) => booking.instance ? showBooking(booking.id).then((_) => _.booking_start) : null));
  for (const [index, booking] of matches.entries()) {
    const series_start = series_starts[index];
    if (series_start === null || getUnixTime(startOfDay(series_start * 1e3)) >= today_start) {
      await removeBooking(booking.id);
    } else {
      await updateBooking(booking.id, { recurrence_end: getUnixTime(endOfDay(subDays(now, 1))) }, "patch");
    }
  }
}

export {
  clearAssignedBooking
};
//# debugId=fe8af347-8ebf-54f5-919c-3a9f44f78c46
//# sourceMappingURL=chunk-VLZAWC4B.js.map

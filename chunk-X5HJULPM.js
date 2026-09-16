import {
  getNextFreeTimeSlot
} from "./chunk-Y37GE2Y5.js";
import {
  addMinutes,
  differenceInMilliseconds,
  format,
  getRoundingMethod,
  toDate
} from "./chunk-COTYPJPA.js";

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options == null ? void 0 : options.roundingMethod)(diff);
}

// node_modules/date-fns/getMinutes.js
function getMinutes(date, options) {
  return toDate(date, options == null ? void 0 : options.in).getMinutes();
}

// node_modules/date-fns/startOfHour.js
function startOfHour(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// apps/booking-panel/src/app/new-panel/helpers.ts
function timelineStart(now = Date.now()) {
  return addMinutes(startOfHour(now), -60).valueOf();
}
function timelineData(bookings, now = Date.now(), start = timelineStart(now), step = 10) {
  const blocks = [];
  let time = start;
  const end = addMinutes(start, 12 * 60).valueOf();
  const duration = end - start;
  while (time < end) {
    blocks.push({
      id: `${time}`,
      time,
      hour: format(time, "ha"),
      on_hour: getMinutes(time) === 0
    });
    time = addMinutes(time, step).valueOf();
  }
  return {
    blocks,
    bookings: bookings.map((booking, index) => {
      const booking_end = addMinutes(booking.date, booking.duration).valueOf();
      const visible_start = Math.max(booking.date, start);
      const visible_end = Math.min(booking_end, end);
      return {
        id: `${booking.id || booking.date}-${index}`,
        start: (visible_start - start) / duration * 100,
        size: (visible_end - visible_start) / duration * 100,
        title: `${format(booking.date, "h:mm a")} - ${format(booking_end, "h:mm a")}`
      };
    }).filter((booking) => booking.size > 0),
    now: Math.max(0, Math.min(100, (now - start) / duration * 100))
  };
}
function nextPeriod(next) {
  const next_diff = Math.ceil(differenceInSeconds(next == null ? void 0 : next.date, Date.now()) / 60);
  return next && next_diff < 24 * 60 ? `${format(next.date, "h:mm a")} - ${format(addMinutes(next.date, next.duration), "h:mm a")}` : "";
}
function currentPeriod(bookings, current, next) {
  const slot = getNextFreeTimeSlot(bookings);
  const next_diff = Math.ceil(differenceInSeconds(next == null ? void 0 : next.date, Date.now()) / 60);
  if (!current)
    return next && next_diff < 24 * 60 ? [false, Math.floor(next_diff / 60), next_diff % 60] : [];
  const checked_in = true;
  const current_diff = Math.ceil(differenceInSeconds(slot.start, Date.now()) / 60);
  return checked_in ? [true, Math.floor(current_diff / 60), current_diff % 60] : [];
}

export {
  timelineStart,
  timelineData,
  nextPeriod,
  currentPeriod
};
//# debugId=5c9b4345-806c-56d7-b90f-519e6d149095
//# sourceMappingURL=chunk-X5HJULPM.js.map

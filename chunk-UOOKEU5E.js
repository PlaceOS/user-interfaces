import {
  $,
  Booking,
  S,
  VERSION,
  Vs,
  addDays,
  addMinutes,
  ae,
  ce,
  currentUser,
  ee,
  endOfDay,
  f,
  flatten,
  fromBookingRecurrence,
  getUnixTime,
  isRecurrenceInstanceDate,
  setting,
  startOfDay,
  toQueryString,
  unique
} from "./chunk-HZ6PXTLM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/bookings.fn.ts
var BOOKINGS_ENDPOINT = `/api/staff/v1/bookings`;
var APP_VERSION = VERSION.raw || VERSION.version || VERSION.hash;
function appName() {
  return setting("app.name") || setting("app.short_name") || "PlaceOS";
}
function bookingUtmSource() {
  return `${appName()}_${VERSION.hash}_${currentUser().email || ""}`;
}
function withAppVersion(data) {
  const booking_data = __spreadValues({}, data);
  delete booking_data.created_at;
  return __spreadProps(__spreadValues({}, booking_data), {
    extension_data: __spreadProps(__spreadValues({}, booking_data.extension_data || {}), {
      app_name: appName(),
      app_version: APP_VERSION
    })
  });
}
async function queryBookings(q) {
  const query = toQueryString(q);
  try {
    const list = await f(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`);
    return list.map((item) => new Booking(item));
  } catch (_) {
    return [];
  }
}
async function bookedResourceList(q, resource_count) {
  try {
    let { data, next, total } = await $({
      query_params: __spreadProps(__spreadValues({}, q), { limit: Math.max(200, resource_count || 0) }),
      endpoint: BOOKINGS_ENDPOINT,
      path: "booked"
    });
    let list = [...data];
    let count = 1;
    while (next && (!total || list.length < total) && count <= MAX_PAGES) {
      const resp = await next();
      data = resp.data;
      next = resp.next;
      total = resp.total;
      list = [...list, ...data];
      count += 1;
    }
    return unique(list);
  } catch (_) {
    return [];
  }
}
async function findBookingClashes(booking, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e3 }));
  try {
    const list = await S(`${BOOKINGS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, booking.toJSON()).catch(() => []);
    return q.include_clash_time ? list : list;
  } catch (_) {
    return [];
  }
}
function queryPagedBookings(q) {
  return $({
    query_params: q,
    fn: (item) => new Booking(item),
    endpoint: BOOKINGS_ENDPOINT,
    path: ""
  });
}
var MAX_PAGES = 50;
async function queryAllBookings(q) {
  try {
    let { data, next } = await $({
      query_params: q,
      fn: (item) => new Booking(item),
      endpoint: BOOKINGS_ENDPOINT,
      path: ""
    });
    let list = [...data];
    let count = 1;
    while (next && count <= MAX_PAGES) {
      const resp = await next();
      data = resp.data;
      next = resp.next;
      list = [...list, ...data];
      count += 1;
    }
    return unique(list, "id");
  } catch (_) {
    return [];
  }
}
async function showBooking(id) {
  return new Booking(await f(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`));
}
async function createBooking(data, q) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { utm_source: bookingUtmSource() }));
  return new Booking(await S(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`, withAppVersion(data)));
}
async function updateBooking(id, data, method = "patch") {
  return new Booking(await (method === "patch" ? ae : ce)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`, withAppVersion(data)));
}
async function updateBookingInductionStatus(id, status) {
  return new Booking(await S(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/update_induction?induction=${encodeURIComponent(status)}`, {}));
}
async function updateBookingInstance(id, start_time, data, method = "patch") {
  return new Booking(await (method === "patch" ? ae : ce)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}`, withAppVersion(data)));
}
var saveBooking = async (data, q) => {
  const id = data.id;
  delete data.id;
  const instance = q?.instance;
  if (q)
    delete q.instance;
  return id ? instance ? updateBookingInstance(id, data.instance || data.booking_start, data) : updateBooking(id, data) : createBooking(Vs(data, ["", null, void 0]) || {}, q);
};
function removeBooking(id, q = {}) {
  if (q.instance) {
    return removeBookingInstance(id, q.start_time);
  }
  const query = toQueryString({ utm_source: bookingUtmSource() });
  return ee(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}?${query}`, {
    response_type: "void"
  });
}
function bookingsTimeOfDayOverlap(a, b) {
  const window = (bk) => {
    if (bk.all_day)
      return [0, 24 * 60];
    const date = new Date(bk.date);
    const start = date.getHours() * 60 + date.getMinutes();
    return [start, start + (bk.duration || 0)];
  };
  const [a_start, a_end] = window(a);
  const [b_start, b_end] = window(b);
  return a_start < b_end && b_start < a_end;
}
async function rejectOverlappingRecurringBookings(booking, type, window_days = 28) {
  if (!booking?.recurrence_type || booking.recurrence_type === "none") {
    return [];
  }
  const email = booking.user_email;
  if (!email)
    return [];
  const now = Date.now();
  const existing = await queryBookings({
    period_start: getUnixTime(startOfDay(now)),
    period_end: getUnixTime(endOfDay(addDays(now, window_days))),
    type,
    email,
    limit: 1e3
  });
  const recurrence = fromBookingRecurrence(booking);
  const overlapping = existing.filter((other) => other.id !== booking.id && other.parent_id !== booking.id && other.status !== "declined" && other.status !== "cancelled" && !other.rejected && isRecurrenceInstanceDate(recurrence, booking.date, other.date) && bookingsTimeOfDayOverlap(booking, other));
  await Promise.all(overlapping.map((other) => (other.instance ? rejectBookingInstance(other.id, other.instance) : rejectBooking(other.id)).catch(() => null)));
  return overlapping.map((_) => _.id);
}
function removeBookingInstance(id, start_time) {
  const query = toQueryString({ utm_source: bookingUtmSource() });
  return ee(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}?${query}`, {
    response_type: "void"
  });
}
async function approveBooking(id) {
  return new Booking(await S(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve`, ""));
}
async function approveBookingInstance(id, start_time) {
  return new Booking(await S(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve/${start_time}`, ""));
}
async function rejectBooking(id) {
  return new Booking(await S(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject`, ""));
}
async function rejectBookingInstance(id, start_time) {
  return new Booking(await S(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject/${start_time}`, ""));
}
async function checkinBooking(id, state) {
  const query = toQueryString({ state });
  try {
    return new Booking(await S(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in?${query}&utm_source=${bookingUtmSource()}`, ""));
  } catch (e) {
    const body = await e.json();
    throw body.error || body.message || body;
  }
}
async function checkinBookingInstance(id, start_time, state) {
  const query = toQueryString({ state });
  try {
    return new Booking(await S(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in/${start_time}?${query}&utm_source=${bookingUtmSource()}`, ""));
  } catch (e) {
    const body = await e.json();
    throw body.error || body.message || body;
  }
}
async function queryResourceAvailability(id_list, start, duration, ignore, type = "room") {
  const bookings = await queryBookings({
    type,
    period_start: getUnixTime(start),
    period_end: getUnixTime(addMinutes(start, duration))
  });
  return id_list.map((id) => !bookings.find((b) => b.asset_id === id && (!ignore || ignore !== b.id)));
}
async function createBookingsForEvent(event, type, resources) {
  const bookings = (await queryBookings({
    type,
    period_start: getUnixTime(event.date),
    period_end: getUnixTime(addMinutes(event.date, event.duration))
  })).filter((_) => _.parent_id === event.id);
  await Promise.all(bookings.map((_) => removeBooking(_.id)));
  await Promise.all(event.linked_bookings.filter((_) => _.booking_type === type).map((_) => removeBooking(_.id)));
  const zones = event.system?.zones || unique(flatten(event.resources.map((_) => _.zones))) || [];
  await Promise.all(resources.map((item) => {
    const booking = bookings.find((_) => _.asset_ids.find((id) => item.items?.find((i) => i.item_ids.includes(id))));
    return createBooking(new Booking({
      type,
      booking_type: type,
      date: event.date,
      duration: event.duration,
      description: event.title || item.name,
      user_email: event.host,
      asset_id: item.email || item.id,
      asset_name: item.name,
      title: event.title,
      attendees: item.email ? [item] : [],
      approved: booking?.approved && !item._changed,
      rejected: booking?.rejected && !item._changed,
      extension_data: {
        parent_id: event.id,
        name: item.name,
        location_id: event.location,
        details: item
      },
      zones
    }).toJSON(), { ical_uid: event.ical_uid, event_id: event.id });
  }));
}

export {
  queryBookings,
  bookedResourceList,
  findBookingClashes,
  queryPagedBookings,
  queryAllBookings,
  showBooking,
  createBooking,
  updateBooking,
  updateBookingInductionStatus,
  updateBookingInstance,
  saveBooking,
  removeBooking,
  rejectOverlappingRecurringBookings,
  approveBooking,
  approveBookingInstance,
  rejectBooking,
  rejectBookingInstance,
  checkinBooking,
  checkinBookingInstance,
  queryResourceAvailability,
  createBookingsForEvent
};
//# sourceMappingURL=chunk-UOOKEU5E.js.map

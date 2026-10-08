import {
  Booking,
  User,
  VERSION,
  currentUser,
  fromBookingRecurrence,
  getUnixTime,
  isRecurrenceInstanceDate,
  setting,
  toQueryString
} from "./chunk-NFHUAPMJ.js";
import {
  $,
  V,
  _,
  addDays,
  addMinutes,
  ce,
  endOfDay,
  flatten,
  oi,
  startOfDay,
  te,
  unique,
  v
} from "./chunk-EMG3U6W6.js";
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
  const booking_data = __spreadValues({}, data instanceof Booking ? data.toJSON() : data);
  delete booking_data.created_at;
  return __spreadProps(__spreadValues({}, booking_data), {
    extension_data: __spreadProps(__spreadValues({}, booking_data.extension_data || {}), {
      app_name: appName(),
      app_version: APP_VERSION
    })
  });
}
async function queryBookings(q) {
  return queryBookingsOrThrow(q).catch(() => []);
}
async function queryBookingsOrThrow(q) {
  const query = toQueryString(q);
  const list = await _(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`);
  return list.map((item) => new Booking(item));
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
  } catch (_2) {
    return [];
  }
}
async function findBookingClashes(booking, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e3 }));
  try {
    const list = await v(`${BOOKINGS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, booking.toJSON()).catch(() => []);
    return q.include_clash_time ? list : list;
  } catch (_2) {
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
  } catch (_2) {
    return [];
  }
}
async function showBooking(id) {
  return new Booking(await _(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`));
}
async function createBooking(data, q) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { utm_source: bookingUtmSource() }));
  return new Booking(await v(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`, withAppVersion(data)));
}
async function updateBooking(id, data, method = "patch") {
  return new Booking(await (method === "patch" ? te : ce)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`, withAppVersion(data)));
}
async function updateBookingInductionStatus(id, status) {
  return new Booking(await v(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/update_induction?induction=${encodeURIComponent(status)}`, {}));
}
async function updateBookingInstance(id, start_time, data, method = "patch") {
  return new Booking(await (method === "patch" ? te : ce)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}`, withAppVersion(data)));
}
var saveBooking = async (data, q) => {
  const id = data.id;
  delete data.id;
  const instance = q?.instance;
  if (q)
    delete q.instance;
  return id ? instance ? updateBookingInstance(id, data.instance || data.booking_start, data) : updateBooking(id, data) : createBooking(oi(data, ["", null, void 0]) || {}, q);
};
function removeBooking(id, q = {}) {
  if (q.instance) {
    return removeBookingInstance(id, q.start_time);
  }
  const query = toQueryString({ utm_source: bookingUtmSource() });
  return V(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}?${query}`, {
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
async function overlappingRecurringBookings(booking, type, window_days = 28) {
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
  return existing.filter((other) => other.id !== booking.id && other.parent_id !== booking.id && other.status !== "declined" && other.status !== "cancelled" && !other.rejected && isRecurrenceInstanceDate(recurrence, booking.date, other.date) && bookingsTimeOfDayOverlap(booking, other));
}
async function rejectOverlappingRecurringBookings(booking, type, window_days = 28) {
  const overlapping = await overlappingRecurringBookings(booking, type, window_days);
  await Promise.all(overlapping.map((other) => (other.instance ? rejectBookingInstance(other.id, other.instance) : rejectBooking(other.id)).catch(() => null)));
  return overlapping.map((_2) => _2.id);
}
async function cancelOverlappingRecurringBookings(booking, type, window_days = 28) {
  const overlapping = await overlappingRecurringBookings(booking, type, window_days);
  await Promise.all(overlapping.map((other) => (other.instance ? removeBookingInstance(other.id, other.instance) : removeBooking(other.id)).catch(() => null)));
  return overlapping.map((_2) => _2.id);
}
function removeBookingInstance(id, start_time) {
  const query = toQueryString({ utm_source: bookingUtmSource() });
  return V(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}?${query}`, {
    response_type: "void"
  });
}
async function approveBooking(id) {
  return new Booking(await v(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve`, ""));
}
async function approveBookingInstance(id, start_time) {
  return new Booking(await v(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve/${start_time}`, ""));
}
async function rejectBooking(id) {
  return new Booking(await v(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject`, ""));
}
async function rejectBookingInstance(id, start_time) {
  return new Booking(await v(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject/${start_time}`, ""));
}
async function checkinBooking(id, state) {
  const query = toQueryString({ state });
  try {
    return new Booking(await v(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in?${query}&utm_source=${bookingUtmSource()}`, ""));
  } catch (e) {
    const body = await e.json();
    throw body.error || body.message || body;
  }
}
async function checkinBookingInstance(id, start_time, state) {
  const query = toQueryString({ state });
  try {
    return new Booking(await v(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in/${start_time}?${query}&utm_source=${bookingUtmSource()}`, ""));
  } catch (e) {
    const body = await e.json();
    throw body.error || body.message || body;
  }
}
async function setBookingCheckedIn(booking, state) {
  const is_recurring = !!booking.instance || !!booking.recurrence_type && booking.recurrence_type !== "none";
  return is_recurring ? checkinBookingInstance(booking.id, booking.instance || booking.booking_start, state) : checkinBooking(booking.id, state);
}
async function queryResourceAvailability(id_list, start, duration, ignore, type = "room") {
  const bookings = await queryBookings({
    type,
    period_start: getUnixTime(start),
    period_end: getUnixTime(addMinutes(start, duration))
  });
  return id_list.map((id) => !bookings.find((b) => (b.asset_id === id || b.asset_ids.includes(id)) && (!ignore || ignore !== b.id)));
}
async function linkedBookingsForEvent(event, type) {
  const bookings = await queryBookingsOrThrow({
    type,
    event_id: event.id,
    period_start: getUnixTime(event.date),
    period_end: getUnixTime(addMinutes(event.date, event.duration)),
    limit: 500
  });
  return bookings.filter((_2) => _2.extension_data?.parent_id === event.id);
}
function replacedEventBookingIds(event, type) {
  return (event.linked_bookings || []).filter((_2) => {
    const parent_id = _2.extension_data?.parent_id;
    return _2.booking_type === type && !!parent_id && parent_id !== event.id;
  }).map((_2) => _2.id);
}
function bookingMatchesResource(booking, item) {
  if (item.id && booking.extension_data?.details?.id === item.id) {
    return true;
  }
  if (item.email && booking.attendees?.find((_2) => _2.email === item.email)) {
    return true;
  }
  return !!booking.asset_ids?.find((id) => item.items?.find((i) => i.item_ids?.includes(id)));
}
function detailsKey(details) {
  const data = JSON.parse(JSON.stringify(details ?? null));
  if (data && typeof data === "object")
    delete data.deliver_at_time;
  return JSON.stringify(data, (_2, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a < b ? -1 : 1)) : value);
}
function attendeeEmails(list = []) {
  return list.map((_2) => _2.email?.toLowerCase()).sort().join(",");
}
function linkedBookingChanges(booking, desired) {
  const changes = {};
  if (booking.booking_start !== desired.booking_start || booking.booking_end !== desired.booking_end) {
    changes.booking_start = desired.booking_start;
    changes.booking_end = desired.booking_end;
    changes.all_day = desired.all_day;
  }
  for (const key of ["title", "description", "asset_name"]) {
    if (booking[key] !== desired[key])
      changes[key] = desired[key];
  }
  if (booking.user_email.toLowerCase() !== desired.user_email.toLowerCase()) {
    changes.user_email = desired.user_email;
  }
  if (booking.asset_id !== desired.asset_id) {
    changes.asset_id = desired.asset_id;
    changes.asset_ids = desired.asset_ids;
  }
  if ([...booking.zones].sort().join() !== [...desired.zones].sort().join()) {
    changes.zones = desired.zones;
  }
  if (attendeeEmails(booking.attendees) !== attendeeEmails(desired.attendees)) {
    changes.attendees = desired.attendees;
  }
  const details_changed = detailsKey(booking.extension_data?.details) !== detailsKey(desired.extension_data?.details);
  if (!details_changed && !Object.keys(changes).length)
    return null;
  return __spreadProps(__spreadValues({}, changes), { extension_data: desired.extension_data });
}
async function createBookingsForEvent(event, type, resources) {
  const existing = await linkedBookingsForEvent(event, type);
  const zones = event.system?.zones || unique(flatten(event.resources.map((_2) => _2.zones))) || [];
  const kept = /* @__PURE__ */ new Set();
  const created_bookings = [];
  try {
    for (const id of replacedEventBookingIds(event, type)) {
      await removeBooking(id);
    }
    for (const item of resources) {
      const booking = existing.find((_2) => !kept.has(_2.id) && bookingMatchesResource(_2, item));
      const assigned_space = type === "catering-order" && item.system_id ? event.resources.find((_2) => _2.id === item.system_id || _2.email === item.system_id) : void 0;
      const resource_id = assigned_space?.id || item.system_id || item.email || item.id;
      const resource_name = assigned_space?.display_name || assigned_space?.name || item.name;
      const desired = new Booking({
        type,
        booking_type: type,
        date: event.date,
        duration: event.duration,
        description: event.title || item.name,
        user_email: event.host,
        asset_id: resource_id,
        asset_name: resource_name,
        title: event.title,
        attendees: item.email ? [new User(item)] : [],
        extension_data: {
          parent_id: event.id,
          name: resource_name,
          location_id: assigned_space?.id || event.location,
          details: item
        },
        zones: assigned_space?.zones || zones
      });
      if (booking) {
        kept.add(booking.id);
        const changes = linkedBookingChanges(booking, desired);
        if (changes)
          await updateBooking(booking.id, changes);
        continue;
      }
      created_bookings.push(await createBooking(desired.toJSON(), {
        ical_uid: event.ical_uid,
        event_id: event.id
      }));
    }
    for (const booking of existing) {
      if (!kept.has(booking.id))
        await removeBooking(booking.id);
    }
  } catch (error) {
    await Promise.all(created_bookings.filter((booking) => !!booking.id).map((booking) => removeBooking(booking.id).catch(() => void 0)));
    throw error;
  }
}

export {
  queryBookings,
  queryBookingsOrThrow,
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
  cancelOverlappingRecurringBookings,
  approveBooking,
  approveBookingInstance,
  rejectBooking,
  rejectBookingInstance,
  checkinBooking,
  setBookingCheckedIn,
  queryResourceAvailability,
  createBookingsForEvent
};
//# debugId=75396c4e-8794-520e-87f8-eef307db76d4
//# sourceMappingURL=chunk-FPO3VPLV.js.map

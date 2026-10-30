import {
  Booking,
  CateringItem,
  GuestUser,
  User,
  VERSION,
  appDetails,
  currentUser,
  getUnixTime,
  readAttendeeFlags,
  toQueryString
} from "./chunk-4KFQL45D.js";
import {
  $,
  V,
  addDays,
  addMinutes,
  ce,
  d,
  flatten,
  li,
  te,
  unique,
  v
} from "./chunk-PARB3GVO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// libs/bookings/src/lib/bookings.fn.ts
var BOOKINGS_ENDPOINT = `/api/staff/v1/bookings`;
function bookingUtmSource() {
  return `${appDetails().app_name}_${VERSION.hash}_${currentUser().email || ""}`;
}
function withAppVersion(data) {
  const booking_data = __spreadValues({}, data instanceof Booking ? data.toJSON() : data);
  delete booking_data.created_at;
  return __spreadProps(__spreadValues({}, booking_data), {
    extension_data: __spreadValues(__spreadValues({}, booking_data.extension_data || {}), appDetails())
  });
}
async function queryBookings(q) {
  return queryBookingsOrThrow(q).catch(() => []);
}
async function queryBookingsOrThrow(q) {
  const query = toQueryString(q);
  const list = await d(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`);
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
  } catch (_) {
    return [];
  }
}
async function findBookingClashes(booking, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e3 }));
  try {
    const list = await v(`${BOOKINGS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, booking.toJSON()).catch(() => []);
    return q.include_clash_time ? list : list;
  } catch (_) {
    return [];
  }
}
var MAX_PAGES = 50;
async function queryAllBookings(q, options = {}) {
  const { signal } = options;
  try {
    if (signal?.aborted)
      return [];
    let { data, next } = await $({
      query_params: q,
      fn: (item) => new Booking(item),
      endpoint: BOOKINGS_ENDPOINT,
      path: ""
    });
    const list = [...data];
    let count = 1;
    while (next && count <= MAX_PAGES) {
      if (signal?.aborted)
        return [];
      const resp = await next();
      data = resp.data;
      next = resp.next;
      list.push(...data);
      count += 1;
    }
    return signal?.aborted ? [] : unique(list, "id");
  } catch (_) {
    return [];
  }
}
async function showBooking(id) {
  return new Booking(await d(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`));
}
function parentBookingId(id) {
  if (!id)
    throw new Error("Missing parent booking id");
  const parent_id = Number(id);
  return Number.isSafeInteger(parent_id) ? parent_id : id;
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
  return id ? instance ? updateBookingInstance(id, data.instance || data.booking_start, data) : updateBooking(id, data) : createBooking(li(data, ["", null, void 0]) || {}, q);
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
function removeBookingInstance(id, start_time) {
  const query = toQueryString({ utm_source: bookingUtmSource() });
  return V(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}?${query}`, {
    response_type: "void"
  });
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
async function queryResourceAvailability(id_list, start, duration, ignore, type = "room") {
  const bookings = await queryBookings({
    type,
    period_start: getUnixTime(start),
    period_end: getUnixTime(addMinutes(start, duration))
  });
  return id_list.map((id) => !bookings.find((b) => (b.asset_id === id || b.asset_ids.includes(id)) && (!ignore || ignore !== b.id)));
}
async function linkedBookingsForEvent(event, type) {
  if (event.from_bookings) {
    return event.linked_bookings.filter((_) => _.booking_type === type).map((_) => new Booking(_));
  }
  const bookings = await queryBookingsOrThrow({
    type,
    event_id: event.id,
    period_start: getUnixTime(event.date),
    period_end: getUnixTime(addMinutes(event.date, event.duration)),
    limit: 500
  });
  return bookings.filter((_) => _.extension_data?.parent_id === event.id);
}
function replacedEventBookingIds(event, type) {
  if (event.from_bookings)
    return [];
  return (event.linked_bookings || []).filter((_) => {
    const parent_id = _.extension_data?.parent_id;
    return _.booking_type === type && !!parent_id && parent_id !== event.id;
  }).map((_) => _.id);
}
function bookingMatchesResource(booking, item) {
  if (item.id && booking.extension_data?.details?.id === item.id) {
    return true;
  }
  if (item.email && booking.attendees?.find((_) => _.email === item.email)) {
    return true;
  }
  return !!booking.asset_ids?.find((id) => item.items?.find((i) => i.item_ids?.includes(id)));
}
function detailsKey(details) {
  const data = JSON.parse(JSON.stringify(details ?? null));
  if (data && typeof data === "object")
    delete data.deliver_at_time;
  return JSON.stringify(data, (_, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a < b ? -1 : 1)) : value);
}
function attendeeEmails(list = []) {
  return list.map((_) => _.email?.toLowerCase()).sort().join(",");
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
function visitorFlagExtension(item) {
  return __spreadValues(__spreadValues({}, readAttendeeFlags(item)), readAttendeeFlags(item.extension_data || {}));
}
async function createBookingsForEvent(event, type, resources) {
  const existing = await linkedBookingsForEvent(event, type);
  const zones = event.system?.zones || unique(flatten(event.resources.map((_) => _.zones))) || [];
  const kept = /* @__PURE__ */ new Set();
  const created_bookings = [];
  try {
    for (const id of replacedEventBookingIds(event, type)) {
      await removeBooking(id);
    }
    for (const item of resources) {
      const booking = existing.find((_) => !kept.has(_.id) && bookingMatchesResource(_, item));
      const assigned_space = type === "catering-order" && item.system_id ? event.resources.find((_) => _.id === item.system_id || _.email === item.system_id) : void 0;
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
        extension_data: __spreadValues({
          parent_id: event.id,
          name: resource_name,
          location_id: assigned_space?.id || event.location,
          details: item
        }, type === "visitor" ? visitorFlagExtension(item) : {}),
        zones: assigned_space?.zones || zones
      });
      if (booking) {
        kept.add(booking.id);
        const changes = linkedBookingChanges(booking, desired);
        if (changes)
          await updateBooking(booking.id, changes);
        continue;
      }
      created_bookings.push(event.from_bookings ? await createBooking(__spreadProps(__spreadValues({}, desired.toJSON()), {
        parent_id: parentBookingId(event.id)
      })) : await createBooking(desired.toJSON(), {
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

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
async function searchGuests(q) {
  const query = toQueryString({ q });
  const list = await d(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await d(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}
async function getGuestCateringItem(email, booking_id = "") {
  const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
  const query = booking_id ? `?booking_id=${encodeURIComponent(booking_id)}` : "";
  const item = await d(`${path}${query}`);
  return item ? new CateringItem(item) : null;
}
async function setGuestCateringItem(email, catering_item, booking_id = "") {
  const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
  const query = booking_id ? `?booking_id=${encodeURIComponent(booking_id)}` : "";
  const item = await te(`${path}${query}`, catering_item);
  return item ? new CateringItem(item) : null;
}

export {
  subDays,
  queryBookings,
  bookedResourceList,
  findBookingClashes,
  queryAllBookings,
  showBooking,
  parentBookingId,
  createBooking,
  updateBooking,
  updateBookingInductionStatus,
  saveBooking,
  removeBooking,
  checkinBooking,
  queryResourceAvailability,
  createBookingsForEvent,
  searchGuests,
  showGuest,
  getGuestCateringItem,
  setGuestCateringItem
};
//# debugId=32911487-8b04-5fda-b8e5-97cd3602dff0
//# sourceMappingURL=chunk-5Q6KVQLJ.js.map

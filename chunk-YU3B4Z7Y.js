import {
  Booking as Booking2,
  bookings_exports
} from "./chunk-TX4URROJ.js";
import {
  Booking,
  CallFailed,
  User,
  VERSION,
  addDays,
  addMinutes,
  appDetails,
  checkRequest,
  cleanObject,
  currentUser,
  endOfDay,
  flatten,
  fromBookingRecurrence,
  getUnixTime,
  isRecurrenceInstanceDate,
  orThrow,
  orThrowPage,
  readAttendeeFlags,
  startOfDay,
  unique
} from "./chunk-PGIU34W2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/bookings/src/lib/request-body.ts
var DEPTH_MAX = 32;
var SKIP = /* @__PURE__ */ Symbol("skip");
function requestBody(schema, value) {
  const body = fit(schema.node, value, 0);
  return body === SKIP ? {} : body;
}
function fit(node, value, depth) {
  if (depth > DEPTH_MAX)
    throw new Error("Request schema is too deep");
  if (value === void 0)
    return SKIP;
  switch (node.kind) {
    case "nullable":
      return value === null ? null : fit(node.inner, value, depth + 1);
    case "json":
      return JSON.parse(JSON.stringify(value));
    case "integer":
      if (typeof value === "string" && /^-?\d+$/.test(value)) {
        return Number(value);
      }
      return value === null ? SKIP : value;
    case "literal":
      if (typeof value === "string" && !node.values.has(value)) {
        const lower = value.toLowerCase();
        if (node.values.has(lower))
          return lower;
      }
      return value === null ? SKIP : value;
    case "array":
      if (!Array.isArray(value))
        return value === null ? SKIP : value;
      return value.map((item) => fit(node.items, item, depth + 1)).filter((item) => item !== SKIP);
    case "record":
      if (!isRecord(value))
        return value === null ? SKIP : value;
      return fitEntries(Object.keys(value), value, () => node.values, depth);
    case "object":
      if (!isRecord(value))
        return value === null ? SKIP : value;
      return fitEntries(node.fields.map((_) => _.key), value, (key) => node.fields.find((_) => _.key === key).node, depth);
    case "union": {
      const fits = node.variants.some((variant) => checkRequest({ node: variant }, value).ok);
      if (fits)
        return value;
      const options = node.variants.map((variant) => fit(variant, value, depth + 1));
      const match = options.find((option, index) => option !== SKIP && checkRequest({ node: node.variants[index] }, option).ok);
      return match ?? options[0];
    }
    default:
      return value === null ? SKIP : value;
  }
}
function fitEntries(keys, value, nodeFor, depth) {
  const output = {};
  for (const key of keys) {
    if (!Object.hasOwn(value, key))
      continue;
    const item = fit(nodeFor(key), value[key], depth + 1);
    if (item !== SKIP)
      output[key] = item;
  }
  return output;
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// libs/bookings/src/lib/bookings.fn.ts
function bookingQuery(q) {
  return {
    period_start: q.period_start,
    period_end: q.period_end,
    type: q.type,
    zones: q.zones,
    user: q.user,
    email: q.email,
    include_checked_out: q.include_checked_out,
    include_booked_by: q.include_booked_by,
    include_deleted: q.include_deleted,
    deleted: q.deleted,
    event_id: q.event_id,
    ical_uid: q.ical_uid,
    limit: q.limit,
    rejected: q.rejected
  };
}
function bookedQuery(q, limit) {
  return {
    period_start: q.period_start,
    period_end: q.period_end,
    type: q.type,
    zones: q.zones,
    user: q.user,
    email: q.email,
    include_booked_by: q.include_booked_by,
    event_id: q.event_id,
    ical_uid: q.ical_uid,
    limit
  };
}
function bookingId(id) {
  const value = Number(id);
  if (`${id}`.trim() === "" || !Number.isSafeInteger(value)) {
    throw new Error(`Booking id is not an integer: ${id}`);
  }
  return value;
}
function toBooking(data) {
  return new Booking(data);
}
function mapPage(page, fn) {
  const next = page.next;
  return {
    data: page.data.map(fn),
    total: page.total,
    next_offset: page.next_offset,
    next: next ? () => next()?.then((_) => mapPage(_, fn)) ?? null : null
  };
}
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
function bookingBody(data) {
  return requestBody(Booking2, withAppVersion(data));
}
async function queryBookings(q) {
  return queryBookingsOrThrow(q).catch(() => []);
}
async function queryBookingsOrThrow(q) {
  const list = await bookings_exports.query(bookingQuery(q)).then(orThrow);
  return list.map(toBooking);
}
async function bookedResourceList(q, resource_count) {
  try {
    let page = await bookings_exports.booked(bookedQuery(q, Math.max(200, resource_count || 0))).then(orThrowPage);
    const list = [...page.data];
    let count = 1;
    while (page.next && (!page.total || list.length < page.total) && count <= MAX_PAGES) {
      const next = page.next();
      if (!next)
        break;
      page = await next;
      list.push(...page.data);
      count += 1;
    }
    return unique(list);
  } catch (_) {
    return [];
  }
}
function isJsonRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function toBookingClash(item) {
  if (!isJsonRecord(item))
    return null;
  const { asset_id, booking_start, booking_end } = item;
  if (typeof asset_id !== "string")
    return null;
  return {
    asset_id,
    booking_start: typeof booking_start === "number" ? booking_start : 0,
    booking_end: typeof booking_end === "number" ? booking_end : 0
  };
}
async function findBookingClashes(booking, q = {}) {
  try {
    const list = await bookings_exports.clashingAssets({
      return_available: q.return_available,
      include_clash_time: q.include_clash_time,
      body: requestBody(Booking2, booking.toJSON())
    }).then(orThrow);
    return q.include_clash_time ? list.map(toBookingClash).filter((_) => !!_) : list.filter((_) => typeof _ === "string");
  } catch (_) {
    return [];
  }
}
function queryPagedBookings(q) {
  return bookings_exports.query(bookingQuery(q)).then(orThrowPage).then((page) => mapPage(page, toBooking));
}
var MAX_PAGES = 50;
async function queryAllBookings(q, options = {}) {
  const { signal } = options;
  try {
    if (signal?.aborted)
      return [];
    let page = await queryPagedBookings(q);
    const list = [...page.data];
    let count = 1;
    while (page.next && count <= MAX_PAGES) {
      if (signal?.aborted)
        return [];
      const next = page.next();
      if (!next)
        break;
      page = await next;
      list.push(...page.data);
      count += 1;
    }
    return signal?.aborted ? [] : unique(list, "id");
  } catch (_) {
    return [];
  }
}
async function showBooking(id) {
  return toBooking(await bookings_exports.show({ id: bookingId(id) }).then(orThrow));
}
function parentBookingId(id) {
  if (!id)
    throw new Error("Missing parent booking id");
  const parent_id = Number(id);
  return Number.isSafeInteger(parent_id) ? parent_id : id;
}
async function createBooking(data, q) {
  const booking = await bookings_exports.create(__spreadProps(__spreadValues(__spreadValues({
    utm_source: bookingUtmSource()
  }, q?.event_id ? { event_id: q.event_id } : {}), q?.ical_uid ? { ical_uid: q.ical_uid } : {}), {
    body: bookingBody(data)
  })).then(orThrow);
  return toBooking(booking);
}
async function updateBooking(id, data, _method = "patch") {
  const booking = await bookings_exports.update({ id: bookingId(id), body: bookingBody(data) }).then(orThrow);
  return toBooking(booking);
}
async function updateBookingInductionStatus(id, status) {
  const booking = await bookings_exports.updateInduction({ id: bookingId(id), induction: status }).then(orThrow);
  return toBooking(booking);
}
async function updateBookingInstance(id, start_time, data, _method = "patch") {
  const booking = await bookings_exports.updateInstance({
    id: bookingId(id),
    instance: start_time,
    body: bookingBody(data)
  }).then(orThrow);
  return toBooking(booking);
}
var saveBooking = async (data, q) => {
  const id = data.id;
  delete data.id;
  const instance = q?.instance;
  if (q)
    delete q.instance;
  return id ? instance ? updateBookingInstance(id, data.instance || data.booking_start, data) : updateBooking(id, data) : createBooking(cleanObject(data, ["", null, void 0]) || {}, q);
};
async function removeBooking(id, q = {}) {
  if (q.instance) {
    return removeBookingInstance(id, q.start_time);
  }
  return bookings_exports.destroy({ id: bookingId(id), utm_source: bookingUtmSource() }).then(orThrow).then(() => void 0);
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
  return existing.filter((other) => (
    // The API sends integer ids, and the app can hold string ones
    `${other.id}` !== `${booking.id}` && `${other.parent_id}` !== `${booking.id}` && other.status !== "declined" && other.status !== "cancelled" && !other.rejected && isRecurrenceInstanceDate(recurrence, booking.date, other.date) && bookingsTimeOfDayOverlap(booking, other)
  ));
}
async function rejectOverlappingRecurringBookings(booking, type, window_days = 28) {
  const overlapping = await overlappingRecurringBookings(booking, type, window_days);
  await Promise.all(overlapping.map((other) => (other.instance ? rejectBookingInstance(other.id, other.instance) : rejectBooking(other.id)).catch(() => null)));
  return overlapping.map((_) => _.id);
}
async function cancelOverlappingRecurringBookings(booking, type, window_days = 28) {
  const overlapping = await overlappingRecurringBookings(booking, type, window_days);
  await Promise.all(overlapping.map((other) => (other.instance ? removeBookingInstance(other.id, other.instance) : removeBooking(other.id)).catch(() => null)));
  return overlapping.map((_) => _.id);
}
async function removeBookingInstance(id, start_time) {
  return bookings_exports.destroyInstance({
    id: bookingId(id),
    instance: start_time,
    utm_source: bookingUtmSource()
  }).then(orThrow).then(() => void 0);
}
async function approveBooking(id) {
  return toBooking(await bookings_exports.approve({ id: bookingId(id) }).then(orThrow));
}
async function approveBookingInstance(id, start_time) {
  return toBooking(await bookings_exports.approveInstance({ id: bookingId(id), instance: start_time }).then(orThrow));
}
async function rejectBooking(id) {
  return toBooking(await bookings_exports.reject({ id: bookingId(id) }).then(orThrow));
}
async function rejectBookingInstance(id, start_time) {
  return toBooking(await bookings_exports.rejectInstance({ id: bookingId(id), instance: start_time }).then(orThrow));
}
function checkinError(error) {
  const body = error.kind === "http" ? error.body : null;
  const record = body !== null && isJsonRecord(body) ? body : {};
  throw record["error"] || record["message"] || body || new CallFailed(error);
}
async function checkinBooking(id, state) {
  const result = await bookings_exports.checkIn({
    id: bookingId(id),
    state,
    utm_source: bookingUtmSource()
  });
  if (result.ok === false)
    checkinError(result.error);
  return toBooking(result.value.data);
}
async function checkinBookingInstance(id, start_time, state) {
  const result = await bookings_exports.checkInInstance({
    id: bookingId(id),
    instance: start_time,
    state,
    utm_source: bookingUtmSource()
  });
  if (result.ok === false)
    checkinError(result.error);
  return toBooking(result.value.data);
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
  return id_list.map((id) => !bookings.find((b) => (b.asset_id === id || b.asset_ids.includes(id)) && (!ignore || ignore !== `${b.id}`)));
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

export {
  requestBody,
  queryBookings,
  queryBookingsOrThrow,
  bookedResourceList,
  toBookingClash,
  findBookingClashes,
  queryPagedBookings,
  queryAllBookings,
  showBooking,
  parentBookingId,
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
//# debugId=5cbb9ee8-10ee-580c-8d46-42425f905711
//# sourceMappingURL=chunk-YU3B4Z7Y.js.map

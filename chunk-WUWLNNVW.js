import {
  requestBody
} from "./chunk-ZYPX4NLH.js";
import {
  PlaceCalendarEvent,
  PlaceCalendarEventAttendee,
  calendars_exports,
  events_exports
} from "./chunk-YQNZFZDM.js";
import {
  Calendar,
  CalendarEvent,
  GuestUser,
  Space,
  appDetails,
  getUnixTime,
  isJsonRecord,
  jsonRecord,
  toJsonValue
} from "./chunk-OSWO757V.js";
import {
  CallFailed,
  addMinutes,
  differenceInMinutes,
  orThrow
} from "./chunk-UZ4XWXGS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/events/src/lib/calendar.fn.ts
function availabilityQuery(q) {
  return {
    period_start: q.period_start,
    period_end: q.period_end,
    calendars: q.calendars,
    zone_ids: q.zone_ids,
    system_ids: q.system_ids,
    features: q.features,
    capacity: q.capacity
  };
}
function toSpace(system) {
  return new Space(__spreadProps(__spreadValues({}, system), {
    zones: [...system.zones || []],
    features: [...system.features || []],
    images: [...system.images || []],
    camera_snapshot_urls: [...system.camera_snapshot_urls || []]
  }));
}
function toCalendar(item) {
  return new Calendar({
    id: item.id,
    resource: item.system ? toSpace(item.system) : void 0,
    availability: (item.availability || []).map((block) => ({
      date: block.starts_at * 1e3,
      duration: differenceInMinutes(block.ends_at * 1e3, block.starts_at * 1e3),
      status: block.status
    }))
  });
}
async function queryCalendars() {
  const list = await calendars_exports.query().then(orThrow);
  return list.map((c) => new Calendar(c));
}
async function queryCalendarAvailability(q) {
  const list = await calendars_exports.availability(availabilityQuery(q)).then(orThrow);
  return (list || []).map(toCalendar);
}
var calendarsToSpaces = (list, org) => list.filter((cal) => !!cal.resource).map((cal) => new Space(__spreadProps(__spreadValues({}, cal.resource), {
  level: org?.levelWithID(cal.resource.zones),
  availability: cal.availability
}))).filter((space) => space.bookable);
async function querySpaceFreeBusy(q, org) {
  const list = await calendars_exports.freeBusy(availabilityQuery(q)).then(orThrow);
  return calendarsToSpaces(list.map(toCalendar), org);
}
async function queryCalendarPermission(user_email) {
  const data = await calendars_exports.checkPermission({ user_email }).then(orThrow);
  return { can_edit: data.can_edit, has_access: false, role: "" };
}

// libs/events/src/lib/events.fn.ts
function eventQuery(q) {
  return {
    period_start: q.period_start,
    period_end: q.period_end,
    calendars: q.calendars,
    zone_ids: q.zone_ids,
    system_ids: q.system_ids,
    include_cancelled: q.include_cancelled,
    ical_uid: q.ical_uid,
    strict: q.strict
  };
}
function toCalendarEvent(data) {
  return new CalendarEvent(data);
}
function toGuestUser(data) {
  const extension_data = "extension_data" in data ? jsonRecord(data.extension_data) : {};
  return new GuestUser(__spreadProps(__spreadValues({}, "id" in data && data.id ? { id: `${data.id}` } : {}), {
    name: data.name,
    email: data.email,
    phone: data.phone,
    organisation: data.organisation,
    notes: data.notes,
    photo: data.photo,
    checked_in: data.checked_in,
    visit_expected: data.visit_expected,
    extension_data: __spreadValues({}, extension_data)
  }));
}
function toEventExtensionData(value) {
  return __spreadValues({}, jsonRecord(value));
}
function eventBody(data) {
  return requestBody(PlaceCalendarEvent, new CalendarEvent(withAppVersion(data)).toJSON());
}
function withAppVersion(data) {
  return __spreadProps(__spreadValues({}, data), {
    extension_data: __spreadValues(__spreadValues({}, data.extension_data || {}), appDetails())
  });
}
async function queryEvents(q) {
  return queryEventsOrThrow(q).catch(() => []);
}
async function queryEventsOrThrow(q) {
  return (await queryEventListOrThrow(q)).events;
}
async function queryEventListOrThrow(q) {
  const result = await events_exports.query(eventQuery(q));
  if (result.ok === false)
    throw new CallFailed(result.error);
  const issues = result.value.headers.get("x-calendar-issue") || "";
  return {
    events: result.value.data.map(toCalendarEvent),
    failed_calendars: issues.split(",").map((id) => id.trim().toLowerCase()).filter(Boolean)
  };
}
async function queryEventHistory(q) {
  try {
    const list = await events_exports.history({
      period_start: q.period_start,
      period_end: q.period_end,
      zone_ids: q.zone_ids,
      system_ids: q.system_ids,
      calendars: q.calendars,
      ical_uid: q.ical_uid
    }).then(orThrow);
    return list.map((item) => ({
      id: item.id || "",
      created_at: item.created_at || 0,
      updated_at: item.created_at || 0,
      type: item.resource_type || "",
      resource_id: item.resource_id || "",
      action: item.action || "",
      changed_fields: [...item.changed_fields || []]
    }));
  } catch (_) {
    return [];
  }
}
async function queryAllEvents(q, options = {}) {
  const { signal } = options;
  if (signal?.aborted)
    return [];
  const result = await events_exports.query(eventQuery(q), { signal });
  if (signal?.aborted || result.ok === false)
    return [];
  return result.value.data.map(toCalendarEvent);
}
async function showEvent(id, q = {}) {
  const item = await events_exports.show({ id, calendar: q.calendar, system_id: q.system_id }).then(orThrow);
  return toCalendarEvent(item);
}
async function createEvent(data) {
  const item = await events_exports.create({ body: eventBody(data) }).then(orThrow);
  return toCalendarEvent(item);
}
async function updateEvent(id, data, q = {}) {
  const item = await events_exports.update({
    id,
    calendar: q.calendar,
    system_id: q.system_id,
    notify_existing_attendees: q.notify_existing_attendees,
    body: eventBody(data)
  }).then(orThrow);
  return toCalendarEvent(item);
}
var saveEvent = async (data, q) => {
  const id = data.update_master ? data.recurring_event_id || data.id : data.id;
  delete data?.status;
  return id ? updateEvent(id, __spreadProps(__spreadValues({}, data), { id }), q) : createEvent(data);
};
function removeEvent(id, q = {}) {
  return events_exports.destroy({ id, calendar: q.calendar, system_id: q.system_id }).then(orThrow).then(() => void 0);
}
async function declineEvent(id, query = {}) {
  await events_exports.decline({ id, calendar: query.calendar, system_id: query.system_id }).then(orThrow);
  return new CalendarEvent();
}
async function checkinEventGuest(id, guest_id, state, q = {}) {
  const item = await events_exports.guestCheckin({
    id,
    guest_id,
    state,
    calendar: q.calendar,
    system_id: q.system_id
  }).then(orThrow);
  return toGuestUser(item);
}
async function addEventGuest(id, guest, q = {}) {
  const item = await events_exports.addAttendee({
    id,
    calendar: q.calendar,
    system_id: q.system_id,
    notify_existing_attendees: q.notify_existing_attendees,
    body: requestBody(PlaceCalendarEventAttendee, guest)
  }).then(orThrow);
  return toGuestUser(item);
}
async function removeEventGuest(id, guest, q = {}) {
  await events_exports.deleteAttendee({
    id,
    email: guest.email,
    calendar: q.calendar,
    system_id: q.system_id
  }).then(orThrow);
  return new GuestUser();
}
async function eventMetadata(id, system_id, query) {
  const data = await events_exports.getMetadata({ id, system_id, ical_uid: query.ical_uid }).then(orThrow);
  return toEventExtensionData(data);
}
async function getEventMetadata(id, system_id, query = {}) {
  return eventMetadata(id, system_id, query);
}
async function showEventMetadata(id, system_id, query = {}) {
  return eventMetadata(id, system_id, query);
}
async function updateEventMetadata(id, system_id, metadata, query = {}) {
  const data = await events_exports.patchMetadata({
    id,
    system_id,
    ical_uid: query.ical_uid,
    body: jsonRecord(toJsonValue(metadata))
  }).then(orThrow);
  return toEventExtensionData(data);
}
async function querySpaceAvailability(id_list, start, duration, ignore, type, ignore_period = [0, 0]) {
  const end = addMinutes(start, duration).valueOf();
  const ignore_ids = [ignore ?? []].flat().filter((id) => id_list.includes(id));
  const [spaces, ignore_check] = await Promise.all([
    queryCalendarAvailability({
      system_ids: id_list.join(),
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    }).catch(() => []),
    ignore_ids.length ? querySpaceFreeBusy({
      period_start: getUnixTime(start),
      period_end: getUnixTime(end),
      system_ids: ignore_ids.join()
    }) : Promise.resolve([])
  ]);
  const short_list = id_list.map((id) => !!spaces.find((s) => s.id === id || s.resource?.id === id));
  for (const space of ignore_check) {
    if (!id_list.includes(space.id))
      continue;
    const availability = space.availability.filter((i) => !(i.date === ignore_period[0] && i.duration === ignore_period[1]));
    short_list[id_list.indexOf(space.id)] = !availability.find((i) => i.status !== "free");
  }
  return short_list;
}
function eventSpaceIds(event) {
  const ids = (event?.resources || []).map((_) => _.id).filter(Boolean);
  if (ids.length)
    return ids;
  const fallback = event?.system?.id || event?.id;
  return fallback ? [fallback] : [];
}
async function findEventClashes(event, q = {}) {
  try {
    const list = await events_exports.clashingAssets({
      return_available: q.return_available,
      include_clash_time: q.include_clash_time,
      body: requestBody(PlaceCalendarEvent, event.toJSON())
    }).then(orThrow);
    return q.include_clash_time ? list.map(toEventClash).filter((_) => !!_) : list.filter((_) => typeof _ === "string");
  } catch (_) {
    return [];
  }
}
function toEventClash(item) {
  if (!isJsonRecord(item))
    return null;
  const { system_id, event_start, event_end } = item;
  if (typeof system_id !== "string")
    return null;
  return {
    asset_id: system_id,
    booking_start: typeof event_start === "number" ? event_start : 0,
    booking_end: typeof event_end === "number" ? event_end : 0
  };
}

export {
  queryCalendars,
  queryCalendarAvailability,
  querySpaceFreeBusy,
  queryCalendarPermission,
  queryEvents,
  queryEventsOrThrow,
  queryEventListOrThrow,
  queryEventHistory,
  queryAllEvents,
  showEvent,
  saveEvent,
  removeEvent,
  declineEvent,
  checkinEventGuest,
  addEventGuest,
  removeEventGuest,
  getEventMetadata,
  showEventMetadata,
  updateEventMetadata,
  querySpaceAvailability,
  eventSpaceIds,
  findEventClashes
};
//# debugId=95bd8757-cdc5-5e8d-868c-68aa59f9b535
//# sourceMappingURL=chunk-WUWLNNVW.js.map

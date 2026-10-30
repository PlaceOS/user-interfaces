import {
  Calendar,
  CalendarEvent,
  GuestUser,
  Space,
  appDetails,
  getUnixTime,
  toQueryString
} from "./chunk-ACYV7NM4.js";
import {
  $,
  V,
  Wi,
  addMinutes,
  ce,
  d,
  te,
  v
} from "./chunk-JYQPCPCB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/events/src/lib/calendar.fn.ts
var CALENDAR_ENDPOINT = "/api/staff/v1/calendars";
async function queryCalendars() {
  const list = await d(CALENDAR_ENDPOINT);
  return list.map((c) => new Calendar(c));
}
async function queryCalendarAvailability(q) {
  const query = toQueryString(q);
  const list = await d(`${CALENDAR_ENDPOINT}/availability${query ? "?" + query : ""}`);
  return list.map((c) => new Calendar(c));
}
var calendarsToSpaces = (list, org) => list.filter((cal) => !!cal.resource).map((cal) => new Space(__spreadProps(__spreadValues({}, cal.resource), {
  level: org?.levelWithID(cal.resource.zones),
  availability: cal.availability
}))).filter((space) => space.bookable);
async function querySpaceFreeBusy(q, org) {
  const query = toQueryString(q);
  const list = await d(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`);
  return calendarsToSpaces(list.map((c) => new Calendar(c)), org);
}
async function queryCalendarPermission(user_email) {
  return await d(`${CALENDAR_ENDPOINT}/${encodeURIComponent(user_email)}/permission`);
}

// libs/events/src/lib/events.fn.ts
var EVENTS_ENDPOINT = `/api/staff/v1/events`;
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
  const query = toQueryString(q);
  const url = `${EVENTS_ENDPOINT}${query ? "?" + query : ""}`;
  const list = await d(url);
  const issues = Wi(new URL(url, document.baseURI).href)["x-calendar-issue"] || "";
  return {
    events: list.map((e) => new CalendarEvent(e)),
    failed_calendars: issues.split(",").map((id) => id.trim().toLowerCase()).filter(Boolean)
  };
}
async function queryEventHistory(q) {
  const query = toQueryString(q);
  try {
    return await d(`${EVENTS_ENDPOINT}/history${query ? "?" + query : ""}`);
  } catch (_) {
    return [];
  }
}
var MAX_EVENT_PAGES = 500;
async function queryAllEvents(q, options = {}) {
  const { signal } = options;
  const list = [];
  let complete = false;
  try {
    if (signal?.aborted)
      return [];
    let { data, next } = await $({
      query_params: q,
      fn: (item) => new CalendarEvent(item),
      endpoint: EVENTS_ENDPOINT,
      path: ""
    });
    list.push(...data);
    for (let page = 1; next && page < MAX_EVENT_PAGES; page++) {
      if (signal?.aborted)
        return [];
      ({ data, next } = await next());
      list.push(...data);
    }
    complete = !next;
  } catch (_) {
    return [];
  }
  if (signal?.aborted)
    return [];
  if (!complete) {
    throw new Error(`Event list has more than ${MAX_EVENT_PAGES} pages`);
  }
  return list;
}
async function showEvent(id, q = {}) {
  const query = toQueryString(q);
  const item = await d(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`);
  return new CalendarEvent(item);
}
async function createEvent(data) {
  const item = await v(`${EVENTS_ENDPOINT}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
async function updateEvent(id, data, q = {}, method = "patch") {
  const query = toQueryString(q);
  const item = await (method === "patch" ? te : ce)(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
var saveEvent = async (data, q) => {
  const id = data.update_master ? data.recurring_event_id || data.id : data.id;
  delete data?.status;
  return id ? updateEvent(id, __spreadProps(__spreadValues({}, data), { id }), q) : createEvent(data);
};
function removeEvent(id, q = {}) {
  const query = toQueryString(q);
  return V(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, {
    response_type: "void"
  });
}
async function declineEvent(id, query = {}) {
  const q = toQueryString(query);
  const item = await v(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/decline${q ? "?" + q : ""}`, "");
  return new CalendarEvent(item);
}
async function checkinEventGuest(id, guest_id, state, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { state }));
  const item = await v(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/guests/${guest_id}/checkin${query ? "?" + query : ""}`, "");
  return new GuestUser(item);
}
async function addEventGuest(id, guest, q = {}) {
  const query = toQueryString(q);
  const item = await v(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee${query ? "?" + query : ""}`, guest);
  return new GuestUser(item);
}
async function removeEventGuest(id, guest, q = {}) {
  const query = toQueryString(q);
  const item = await V(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee/${encodeURIComponent(guest.email)}${query ? "?" + query : ""}`);
  return new GuestUser(item);
}
async function getEventMetadata(id, system_id, query = {}) {
  const q = toQueryString(__spreadValues({}, query));
  return await d(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/metadata/${encodeURIComponent(system_id)}${q ? "?" + q : ""}`);
}
async function showEventMetadata(id, system_id, query = {}) {
  const q = toQueryString(__spreadValues({}, query));
  return await d(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/metadata/${encodeURIComponent(system_id)}${q ? "?" + q : ""}`);
}
async function updateEventMetadata(id, system_id, metadata, query = {}) {
  const q = toQueryString(__spreadValues({}, query));
  return await te(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/metadata/${encodeURIComponent(system_id)}${q ? "?" + q : ""}`, metadata);
}
async function querySpaceAvailability(id_list, start, duration, ignore, type, ignore_period = [0, 0]) {
  const end = addMinutes(start, duration).valueOf();
  const [spaces, ignore_check] = await Promise.all([
    queryCalendarAvailability({
      system_ids: id_list.join(),
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    }).catch(() => []),
    ignore && id_list.includes(ignore) ? querySpaceFreeBusy({
      period_start: getUnixTime(start),
      period_end: getUnixTime(end),
      system_ids: ignore
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
async function findEventClashes(event, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e4 }));
  try {
    const list = await v(`${EVENTS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, event.toJSON());
    return q.include_clash_time ? list : list;
  } catch (_) {
    return [];
  }
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
  findEventClashes
};
//# debugId=472a43b6-11bd-56de-b90d-7c7e20492458
//# sourceMappingURL=chunk-GQ7BZQ4E.js.map

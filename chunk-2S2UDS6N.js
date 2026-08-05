import {
  USER_DOMAIN
} from "./chunk-5HOTIMGX.js";
import {
  CalendarEvent,
  GuestUser,
  OrganisationService,
  Space,
  User,
  VERSION,
  add,
  currentUser,
  disabled,
  form,
  getUnixTime,
  isAfter,
  queryCalendarAvailability,
  querySpaceFreeBusy,
  required,
  setHours,
  setting,
  toQueryString,
  validate
} from "./chunk-TKBUED64.js";
import {
  LOCAL_TIMEZONE,
  Pipe,
  S,
  addMinutes,
  ae,
  ce,
  ee,
  f,
  from,
  guardModelUndefinedWrites,
  ia,
  map,
  oa,
  of,
  onFieldChange,
  predictableRandomInt,
  ra,
  setClassMetadata,
  setupFormTimeSync,
  shareReplay,
  signal,
  startOfDay,
  tap,
  toDate,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-CKWNTDV3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/setMinutes.js
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}

// libs/events/src/lib/space.pipe.ts
var SPACE_LIST = [];
var ATTEMPT_COUNT = {};
var EMPTY_SPACE = new Space({ email: "empty.space@place.os" });
function updateSpaceList(space_list) {
  for (const space of space_list) {
    if (!SPACE_LIST.find(({ id }) => id === space.id)) {
      SPACE_LIST.push(space);
    }
  }
}
setInterval(() => {
  for (const id in ATTEMPT_COUNT) {
    ATTEMPT_COUNT[id] = ATTEMPT_COUNT[id] - 1;
    if (ATTEMPT_COUNT[id] <= 0) {
      delete ATTEMPT_COUNT[id];
    }
  }
}, 10 * 1e3);
var _org_service = null;
var SpacePipe = class _SpacePipe {
  get org() {
    return _org_service;
  }
  set org(value) {
    _org_service = value;
  }
  constructor(org = null) {
    if (org)
      this.org = org;
  }
  /**
   * Get details of the space with the given ID
   * @param space_id ID or Email of the space
   */
  async transform(space_id) {
    if (this.org) {
      await this.org.waitUntilInitialised();
    }
    const is_email = space_id?.includes("@");
    if (!space_id)
      return EMPTY_SPACE;
    let space = SPACE_LIST.find(({ id, email }) => id === space_id || email === space_id);
    if (space)
      return space;
    if (ATTEMPT_COUNT[space_id])
      return EMPTY_SPACE;
    if (!is_email) {
      const system = await oa(space_id).catch((_) => null);
      if (system) {
        space = new Space(__spreadProps(__spreadValues({}, system), {
          level: this.org?.levelWithID([...system.zones])
        }));
        SPACE_LIST.push(space);
        return space;
      }
    }
    const systems = (await ra({
      in: space_id
    })).data;
    if (systems.length === 1) {
      space = new Space(__spreadProps(__spreadValues({}, systems[0]), {
        level: this.org?.levelWithID([...systems[0].zones])
      }));
      SPACE_LIST.push(space);
      return space;
    }
    return EMPTY_SPACE;
  }
  get(space_id) {
    return SPACE_LIST.find(({ id, email }) => id === space_id || email === space_id) || EMPTY_SPACE;
  }
  updateSpaceList(space_list) {
    updateSpaceList(space_list);
  }
  static {
    this.\u0275fac = function SpacePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpacePipe)(\u0275\u0275directiveInject(OrganisationService, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "space", type: _SpacePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacePipe, [{
    type: Pipe,
    args: [{
      name: "space"
    }]
  }], () => [{ type: OrganisationService }], null);
})();

// libs/events/src/lib/events.fn.ts
var EVENTS_ENDPOINT = `/api/staff/v1/events`;
var APP_VERSION = VERSION.raw || VERSION.version || VERSION.hash;
function appName() {
  return setting("app.name") || setting("app.short_name") || "PlaceOS";
}
function withAppVersion(data) {
  return __spreadProps(__spreadValues({}, data), {
    extension_data: __spreadProps(__spreadValues({}, data.extension_data || {}), {
      app_name: appName(),
      app_version: APP_VERSION
    })
  });
}
async function queryEvents(q) {
  const query = toQueryString(q);
  try {
    const list = await f(`${EVENTS_ENDPOINT}${query ? "?" + query : ""}`);
    return list.map((e) => new CalendarEvent(e));
  } catch (_) {
    return [];
  }
}
async function createEvent(data) {
  const item = await S(`${EVENTS_ENDPOINT}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
async function updateEvent(id, data, q = {}, method = "patch") {
  const query = toQueryString(q);
  const item = await (method === "patch" ? ae : ce)(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
var saveEvent = async (data, q) => {
  const id = data.update_master ? data.recurring_event_id || data.id : data.id;
  delete data?.status;
  return id ? updateEvent(id, __spreadProps(__spreadValues({}, data), { id }), q) : createEvent(data);
};
function removeEvent(id, q = {}) {
  const query = toQueryString(q);
  return ee(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, {
    response_type: "void"
  });
}
async function checkinEventGuest(id, guest_id, state, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { state }));
  const item = await S(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/guests/${guest_id}/checkin${query ? "?" + query : ""}`, "");
  return new GuestUser(item);
}
async function addEventGuest(id, guest, q = {}) {
  const query = toQueryString(q);
  const item = await S(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee${query ? "?" + query : ""}`, guest);
  return new GuestUser(item);
}
async function removeEventGuest(id, guest, q = {}) {
  const query = toQueryString(q);
  const item = await ee(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee/${encodeURIComponent(guest.email)}${query ? "?" + query : ""}`);
  return new GuestUser(item);
}
async function getEventMetadata(id, system_id, query = {}) {
  const q = toQueryString(__spreadValues({}, query));
  return await f(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/metadata/${encodeURIComponent(system_id)}${q ? "?" + q : ""}`);
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
    const list = await S(`${EVENTS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, event.toJSON());
    return q.include_clash_time ? list : list;
  } catch (_) {
    return [];
  }
}

// libs/events/src/lib/space.utilities.ts
var SPACE_LIST_REQUESTS = {};
function requestSpacesForZone(id) {
  if (!id)
    return of([]);
  if (SPACE_LIST_REQUESTS[id])
    return SPACE_LIST_REQUESTS[id];
  SPACE_LIST_REQUESTS[id] = from(ia({
    zone_id: id,
    limit: 500,
    signage: false
  })).pipe(map((_) => (_.data || []).map((_2) => new Space(_2))), tap((_) => updateSpaceList(_)), shareReplay(1));
  return SPACE_LIST_REQUESTS[id];
}
var SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
  const id = `space-${SPACE_COUNT++}`;
  const name = `Test Space ${SPACE_COUNT}`;
  const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
  const space = __spreadValues({
    id,
    name,
    long_name: `${name} with an long name`,
    map_id: `${SPACE_COUNT}`,
    capacity: predictableRandomInt(21, 1) * 2,
    email: `${name.toLowerCase().split(" ").join(".")}@${USER_DOMAIN}`,
    type: "",
    searchable: predictableRandomInt(99999) % 2 === 0,
    controlable: predictableRandomInt(99999) % 2 === 0,
    bookable: predictableRandomInt(99999) % 2 === 0,
    cost_hour: predictableRandomInt(300) * 100,
    setup: predictableRandomInt(6) * 5,
    breakdown: predictableRandomInt(6) * 5,
    zones: ["zone_lvl-0"],
    support_url: `/control/#/panel/${id}`,
    bookings: [],
    //Array(10).fill(0).map(i => generateMockBooking()),
    linked_rooms: linked ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`] : [],
    image: ""
  }, overrides);
  if (space["configurations"] && space["configurations"].length > 0) {
    space["configurations"].forEach((config) => config.capacity = predictableRandomInt(space.capacity) + 1);
    space["configurations"][0].capacity = space.capacity;
  }
  return space;
}

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
function eventFormValue(event = new CalendarEvent()) {
  return {
    id: event.id || "",
    ical_uid: event.ical_uid || "",
    host: event.host || event.organiser?.email || currentUser()?.email || "",
    organiser: event.organiser || { email: event.host || "" },
    creator: event.creator || currentUser()?.email || "",
    calendar: event.calendar || "",
    attendees: event.attendees || [],
    resources: event.resources || [],
    title: event.title || "",
    body: event.body || "",
    private: event.private ?? false,
    date: event.date ?? 0,
    duration: event.duration ?? 0,
    all_day: event.all_day ?? false,
    date_end: event.date_end ?? 0,
    recurring: event.recurring ?? false,
    recurrence: event.recurrence ?? null,
    recurring_event_id: event.recurring_event_id || "",
    master: event.master ?? null,
    attachments: event.attachments ?? null,
    catering: event.extension_data?.catering || [],
    catering_notes: event.extension_data?.catering?.[0]?.notes || "",
    catering_charge_code: event.extension_data?.catering?.[0]?.charge_code || "",
    setup_time: event.setup_time || 0,
    breakdown_time: event.breakdown_time || 0,
    assets: event.extension_data?.assets || [],
    visitor_type: event.extension_data?.visitor_type ?? null,
    location: event.location || "",
    visibility: event.visibility || "normal",
    needs_space: true,
    needs_parking: event.extension_data?.needs_parking || false,
    event_type: event.extension_data?.event_type || "",
    category: event.extension_data?.category || "",
    tags: event.extension_data?.tags || [],
    update_master: false,
    system: event.system ?? null,
    attendance_type: event.extension_data?.attendance_type || "ONSITE",
    timezone: event.timezone || LOCAL_TIMEZONE,
    shared_event: event.extension_data?.shared_event || false,
    view_access: event.extension_data?.view_access || "OPEN",
    images: event.extension_data?.images || [],
    featured: event.extension_data?.featured || false,
    meeting_provider: event.meeting_provider || null
  };
}
function generateEventForm(event = new CalendarEvent(), settings, injector) {
  if (!event)
    event = new CalendarEvent();
  const lock_start_time = signal(
    !!event.id && (event.state === "started" || event.state === "in_progress"),
    ...ngDevMode ? [{ debugName: "lock_start_time" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const has_id = !!event.id;
  const notes_required = () => !!(settings?.get("app.events.catering_notes_required") || settings?.value("require_catering_notes"));
  const model = signal(
    eventFormValue(event),
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  guardModelUndefinedWrites(model, eventFormValue(new CalendarEvent()));
  const event_form = form(model, (p) => {
    required(p.host);
    required(p.date);
    validate(p.duration, ({ value, valueOf }) => {
      const date = valueOf(p.date);
      return date && isAfter(Date.now(), addMinutes(date, value())) ? { kind: "duration" } : void 0;
    });
    required(p.catering_notes, {
      when: ({ valueOf }) => !!valueOf(p.catering)?.length && notes_required()
    });
    disabled(p.host, { when: () => has_id });
    disabled(p.organiser, { when: () => has_id });
    disabled(p.date, { when: () => lock_start_time() });
    disabled(p.assets, { when: ({ valueOf }) => !valueOf(p.resources)?.length });
    disabled(p.duration, { when: ({ valueOf }) => !!valueOf(p.all_day) });
  }, { injector });
  onFieldChange(model, (v) => v.organiser, (organiser) => (
    // Coalesce to '' so the `host` sub-field is never removed from the
    // FieldTree (an undefined value breaks its `required`/`[formField]`).
    model.update((m) => __spreadProps(__spreadValues({}, m), { host: organiser?.email ?? "" }))
  ), injector);
  onFieldChange(model, (v) => v.resources, (resources) => model.update((m) => __spreadProps(__spreadValues({}, m), {
    system: resources?.length ? resources[0] : null
  })), injector);
  onFieldChange(model, (v) => v.date, (date) => {
    const recurrence = model().recurrence;
    if (!recurrence?.pattern)
      return;
    if (recurrence._pattern !== "custom_display" && recurrence._pattern !== "none") {
      model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence: __spreadProps(__spreadValues({}, m.recurrence), {
          days_of_week: [new Date(date).getDay()]
        })
      }));
    }
  }, injector);
  const setCateringTime = () => {
    const value = model();
    if (!value.catering?.length || !value.date)
      return;
    const event2 = {
      date: value.all_day ? startOfDay(value.date) : value.date,
      duration: value.all_day ? 24 * 60 : value.duration
    };
    if (value.catering.every((order) => +order.event?.date === +event2.date && order.event?.duration === event2.duration))
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      catering: (m.catering || []).map((order) => __spreadProps(__spreadValues({}, order), {
        event: event2
      }))
    }));
  };
  onFieldChange(model, (v) => v.catering, setCateringTime, injector);
  const time_sync = setupFormTimeSync(model, { on_time_change: setCateringTime }, injector);
  return { model, form: event_form, time_sync, lock_start_time };
}
function newCalendarEventFromBooking(booking) {
  let attendees = [
    {
      id: booking.user_id,
      name: booking.user_name,
      email: booking.user_email,
      organizer: true
    }
  ];
  if (booking.booking_type === "visitor") {
    attendees.push(new User({
      name: booking.asset_name || booking.description,
      email: booking.asset_id,
      checked_in: booking.checked_in
    }));
  }
  attendees = attendees.concat(booking.attendees);
  return new CalendarEvent(__spreadProps(__spreadValues(__spreadValues({}, booking), booking.extension_data), {
    attendees,
    id: booking.id || booking.extension_data.id,
    host: booking.user_email,
    from_bookings: true
  }));
}

export {
  setMinutes,
  SpacePipe,
  requestSpacesForZone,
  generateMockSpace,
  queryEvents,
  saveEvent,
  removeEvent,
  checkinEventGuest,
  addEventGuest,
  removeEventGuest,
  getEventMetadata,
  querySpaceAvailability,
  findEventClashes,
  eventFormValue,
  generateEventForm,
  newCalendarEventFromBooking
};
//# sourceMappingURL=chunk-2S2UDS6N.js.map

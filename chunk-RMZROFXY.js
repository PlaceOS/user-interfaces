import {
  setHours
} from "./chunk-TLPZYJMD.js";
import {
  disabled,
  form,
  required,
  validate
} from "./chunk-B22PE7BM.js";
import {
  CalendarEvent,
  GuestUser,
  LOCAL_TIMEZONE,
  OrganisationService,
  Space,
  StaffUser,
  User,
  add,
  addMinutes,
  ba,
  currentUser,
  f,
  ga,
  guardModelUndefinedWrites,
  isAfter,
  onFieldChange,
  setupFormTimeSync,
  startOfDay,
  toDate,
  toQueryString,
  ya
} from "./chunk-EFL5ZC6C.js";
import {
  Pipe,
  computed,
  from,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  tap,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-RKFYMMSC.js";
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
var MAX_CACHED_SPACES = 5e3;
var MAX_FAILED_LOOKUPS = 500;
var FAILED_LOOKUP_TTL = 30 * 1e3;
var SPACE_CACHE = /* @__PURE__ */ new Map();
var SPACE_BY_ID = /* @__PURE__ */ new Map();
var SPACE_BY_EMAIL = /* @__PURE__ */ new Map();
var SPACE_REQUESTS = /* @__PURE__ */ new Map();
var FAILED_LOOKUPS = /* @__PURE__ */ new Map();
var EMPTY_SPACE = new Space({ email: "empty.space@place.os" });
function cacheSpace(space) {
  const cache_key = space.id || space.email;
  if (!cache_key)
    return;
  if (SPACE_CACHE.has(cache_key))
    SPACE_CACHE.delete(cache_key);
  SPACE_CACHE.set(cache_key, space);
  if (space.id)
    SPACE_BY_ID.set(space.id, space);
  if (space.email)
    SPACE_BY_EMAIL.set(space.email, space);
  while (SPACE_CACHE.size > MAX_CACHED_SPACES) {
    const oldest_key = SPACE_CACHE.keys().next().value;
    if (!oldest_key)
      break;
    const oldest = SPACE_CACHE.get(oldest_key);
    SPACE_CACHE.delete(oldest_key);
    if (oldest?.id && SPACE_BY_ID.get(oldest.id) === oldest) {
      SPACE_BY_ID.delete(oldest.id);
    }
    if (oldest?.email && SPACE_BY_EMAIL.get(oldest.email) === oldest) {
      SPACE_BY_EMAIL.delete(oldest.email);
    }
  }
}
function cachedSpace(space_id) {
  return SPACE_BY_ID.get(space_id) || SPACE_BY_EMAIL.get(space_id);
}
function rememberFailedLookup(space_id) {
  FAILED_LOOKUPS.delete(space_id);
  FAILED_LOOKUPS.set(space_id, Date.now() + FAILED_LOOKUP_TTL);
  while (FAILED_LOOKUPS.size > MAX_FAILED_LOOKUPS) {
    const oldest_id = FAILED_LOOKUPS.keys().next().value;
    if (!oldest_id)
      break;
    FAILED_LOOKUPS.delete(oldest_id);
  }
}
function updateSpaceList(space_list) {
  for (const space of space_list)
    cacheSpace(space);
}
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
  /** Get details of the space with the given ID or email address. */
  async transform(space_id) {
    if (this.org)
      await this.org.waitUntilInitialised();
    if (!space_id)
      return EMPTY_SPACE;
    const cached = cachedSpace(space_id);
    if (cached)
      return cached;
    const retry_after = FAILED_LOOKUPS.get(space_id) || 0;
    if (retry_after > Date.now())
      return EMPTY_SPACE;
    FAILED_LOOKUPS.delete(space_id);
    const pending = SPACE_REQUESTS.get(space_id);
    if (pending)
      return pending;
    const request = this._loadSpace(space_id).finally(() => SPACE_REQUESTS.delete(space_id));
    SPACE_REQUESTS.set(space_id, request);
    return request;
  }
  get(space_id) {
    return cachedSpace(space_id) || EMPTY_SPACE;
  }
  updateSpaceList(space_list) {
    updateSpaceList(space_list);
  }
  async _loadSpace(space_id) {
    if (!space_id.includes("@")) {
      const system = await ba(space_id).catch(() => null);
      if (system)
        return this._cacheSystem(system);
    }
    const systems = (await ya({ in: space_id }).catch(() => ({
      data: []
    }))).data;
    if (systems.length === 1)
      return this._cacheSystem(systems[0]);
    rememberFailedLookup(space_id);
    return EMPTY_SPACE;
  }
  _cacheSystem(system) {
    const space = new Space(__spreadProps(__spreadValues({}, system), {
      zones: [...system.zones || []],
      images: [...system.images || []],
      camera_snapshot_urls: [...system.camera_snapshot_urls || []],
      level: this.org?.levelWithID([...system.zones || []])
    }));
    cacheSpace(space);
    return space;
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

// libs/events/src/lib/space.utilities.ts
var SPACE_LIST_REQUESTS = {};
function requestSpacesForZone(id) {
  if (!id)
    return of([]);
  if (SPACE_LIST_REQUESTS[id])
    return SPACE_LIST_REQUESTS[id];
  SPACE_LIST_REQUESTS[id] = from(ga({
    zone_id: id,
    limit: 500,
    signage: false
  })).pipe(map((_) => (_.data || []).map((_2) => new Space(_2))), tap((_) => updateSpaceList(_)), shareReplay(1));
  return SPACE_LIST_REQUESTS[id];
}

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
async function searchGuests(q) {
  const query = toQueryString({ q });
  const list = await f(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await f(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}

// libs/users/src/lib/staff.fn.ts
var STAFF_ENDPOINT = "/api/staff/v1/people";
async function searchStaff(q) {
  const query = toQueryString({
    q,
    fields: [
      "id",
      "name",
      "email",
      "username",
      "organisation",
      "department"
    ].join(",")
  });
  const list = await f(`${STAFF_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new StaffUser(item));
}
async function searchStaffByEmailPrefix(email_prefix) {
  const escaped_prefix = email_prefix.replace(/'/g, "''");
  const query = toQueryString({
    filter: `startsWith(mail,'${escaped_prefix}')`
  });
  const list = await f(`${STAFF_ENDPOINT}?${query}`);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await f(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`));
}

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var INFLIGHT_REQUESTS = /* @__PURE__ */ new Map();
var EMPTY_USER = {};
async function fetchUser(user_id, lookup_mode) {
  if (lookup_mode === "email-prefix") {
    const email_prefix = user_id.split("@")[0];
    const [staff] = await searchStaffByEmailPrefix(email_prefix).catch(() => []);
    return staff ? new User({ name: staff.name, email: user_id }) : EMPTY_USER;
  }
  let user = await showStaff(user_id).catch(() => null);
  if (user) {
    USER_LIST.push(user);
    return user;
  }
  user = await showGuest(user_id).catch(() => null);
  if (user) {
    USER_LIST.push(user);
    return user;
  }
  return EMPTY_USER;
}
var UserPipe = class _UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   * @param lookup_mode Whether to match the full ID or an email prefix
   */
  async transform(user_id, lookup_mode = "exact") {
    if (!user_id)
      return EMPTY_USER;
    if (lookup_mode === "exact") {
      const user = USER_LIST.find(({ id, email }) => id === user_id || email === user_id);
      if (user)
        return user;
    }
    const lookup_key = `${lookup_mode}:${user_id}`;
    const existing = INFLIGHT_REQUESTS.get(lookup_key);
    if (existing)
      return existing;
    const request = fetchUser(user_id, lookup_mode).finally(() => INFLIGHT_REQUESTS.delete(lookup_key));
    INFLIGHT_REQUESTS.set(lookup_key, request);
    return request;
  }
  static {
    this.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
function multipleSpacesEnabled(settings) {
  return settings.get("app.events.multiple_spaces") === true || settings.get("app.events.allow_multiple_spaces") === true;
}
function multipleSpacesSignal(settings) {
  const current = settings.signal("events.multiple_spaces", false);
  const legacy = settings.signal("events.allow_multiple_spaces", false);
  return computed(() => current() || legacy());
}
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
    disabled(p.assets, {
      when: ({ valueOf }) => !valueOf(p.resources)?.length
    });
    disabled(p.duration, {
      when: ({ valueOf }) => !!valueOf(p.all_day)
    });
  }, { injector });
  onFieldChange(model, (v) => v.organiser, (organiser) => (
    // Coalesce to '' so the `host` sub-field is never removed from the
    // FieldTree (an undefined value breaks its `required`/`[formField]`).
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      host: organiser?.email ?? ""
    }))
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
  SpacePipe,
  requestSpacesForZone,
  searchGuests,
  searchStaff,
  UserPipe,
  multipleSpacesEnabled,
  multipleSpacesSignal,
  eventFormValue,
  generateEventForm,
  newCalendarEventFromBooking
};
//# debugId=95395009-38ae-59b6-ae7c-9999c59e4692
//# sourceMappingURL=chunk-RMZROFXY.js.map

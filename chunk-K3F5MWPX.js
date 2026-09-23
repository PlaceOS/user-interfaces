import {
  USER_DOMAIN
} from "./chunk-X4QCJGM4.js";
import {
  disabled,
  form,
  required,
  setHours,
  validate
} from "./chunk-7CYURA5J.js";
import {
  CalendarEvent,
  OrganisationService,
  Space,
  User,
  add,
  currentUser,
  isAfter
} from "./chunk-BBWQXWRS.js";
import {
  LOCAL_TIMEZONE,
  Pipe,
  addMinutes,
  ba,
  computed,
  from,
  ga,
  guardModelUndefinedWrites,
  map,
  of,
  onFieldChange,
  predictableRandomInt,
  setClassMetadata,
  setupFormTimeSync,
  shareReplay,
  signal,
  startOfDay,
  tap,
  toDate,
  ya,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-C5JCVNGY.js";
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
function multipleSpacesEnabled(settings) {
  return settings.get("app.events.multiple_spaces") === true || settings.get("app.events.allow_multiple_spaces") === true;
}
function multipleSpacesSignal(settings) {
  const current = settings.signal("events.multiple_spaces", false);
  const legacy = settings.signal("events.allow_multiple_spaces", false);
  return computed(() => current() || legacy());
}
function organiserTimezone(user) {
  const details = user?.extension_data;
  const timezone = details?.timezone || details?.time_zone;
  return typeof timezone === "string" ? timezone : "";
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
  setMinutes,
  SpacePipe,
  requestSpacesForZone,
  generateMockSpace,
  multipleSpacesEnabled,
  multipleSpacesSignal,
  organiserTimezone,
  eventFormValue,
  generateEventForm,
  newCalendarEventFromBooking
};
//# debugId=24d6b4dd-ec96-5b4e-89b5-8d6b72ca3684
//# sourceMappingURL=chunk-K3F5MWPX.js.map

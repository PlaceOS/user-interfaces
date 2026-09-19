import {
  USER_DOMAIN
} from "./chunk-EFXZETCH.js";
import {
  searchStaffByEmailPrefix,
  showGuest,
  showStaff
} from "./chunk-LEALQSFT.js";
import {
  AssetStateService,
  CalendarService,
  createBookingsForEvent,
  disabled,
  findEventClashes,
  form,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  newBookingFromCalendarEvent,
  openRecurringClashModal,
  queryResourceAvailability,
  querySpaceAvailability,
  removeEvent,
  required,
  saveBooking,
  saveEvent,
  setHours,
  validate,
  validateAssetRequestsForResource
} from "./chunk-HAX554ML.js";
import {
  AssetRequest,
  AsyncHandler,
  CalendarEvent,
  DEFAULT_SETTINGS,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  OrganisationService,
  SETTING_KEYS,
  SafePipe,
  SanitizePipe,
  SettingsService,
  Space,
  User,
  add,
  currentUser,
  currentUserIsLoaded,
  currentUserLoaded,
  filterResourcesFromRules,
  firstValueWhere,
  isAfter,
  isEmptyUser,
  rulesForResource,
  setDefaultCreator
} from "./chunk-ZG4EZZAB.js";
import {
  TranslatePipe
} from "./chunk-45XEP3DZ.js";
import {
  Component,
  Injectable,
  Injector,
  LOCAL_TIMEZONE,
  MatRipple,
  MatRippleModule,
  NavigationEnd,
  Pipe,
  Router,
  addMinutes,
  ba,
  computed,
  debounced,
  effect,
  flatten,
  from,
  ga,
  getAllDayTimeRange,
  getInvalidSignalFields,
  getItemWithKeys,
  getTimeInTimezone,
  guardModelUndefinedWrites,
  i18n,
  ic,
  inject,
  isWithinBookableHours,
  map,
  notifyError,
  notifyWarn,
  of,
  onFieldChange,
  predictableRandomInt,
  resource,
  setClassMetadata,
  setupFormTimeSync,
  shareReplay,
  signal,
  startOfDay,
  tap,
  toDate,
  unique,
  ya,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VRMULRUP.js";
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

// libs/events/src/lib/event-link-modal.component.ts
var EventLinkModalComponent = class _EventLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._dialog = inject(MatDialogRef);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
    this.has_actioned = signal(
      false,
      ...ngDevMode ? [{ debugName: "has_actioned" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  close() {
    if (!this.has_actioned()) {
      return notifyError("You need to select a calendar option to finish creating this booking");
    }
    this._dialog.close(true);
  }
  static {
    this.\u0275fac = function EventLinkModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventLinkModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventLinkModalComponent, selectors: [["event-link-modal"]], decls: 29, vars: 28, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "click", "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["btn", "", "matRipple", "", 1, "w-64", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-0", 3, "mat-dialog-close"]], template: function EventLinkModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
        \u0275\u0275pipe(5, "sanitize");
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_4_listener() {
          return ctx.has_actioned.set(true);
        });
        \u0275\u0275element(6, "img", 3);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "a", 2);
        \u0275\u0275pipe(11, "sanitize");
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_10_listener() {
          return ctx.has_actioned.set(true);
        });
        \u0275\u0275element(12, "img", 4);
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "a", 2);
        \u0275\u0275pipe(17, "safe");
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_16_listener() {
          return ctx.has_actioned.set(true);
        });
        \u0275\u0275elementStart(18, "icon", 5);
        \u0275\u0275text(19, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 6);
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_button_click_23_listener() {
          return ctx.close();
        });
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 7)(27, "icon");
        \u0275\u0275text(28, "close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "BOOKINGS.LINK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 11, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "BOOKINGS.LINK_OUTLOOK"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 16, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "BOOKINGS.LINK_GOOGLE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 21, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 24, "BOOKINGS.LINK_ICAL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "COMMON.CLOSE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.has_actioned());
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe,
      SafePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventLinkModalComponent, [{
    type: Component,
    args: [{ selector: "event-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKINGS.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned.set(true)"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned.set(true)"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned.set(true)"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
            </a>
            <button class="w-64" btn matRipple (click)="close()">
                {{ 'COMMON.CLOSE' | translate }}
            </button>
        </div>
        <button
            icon
            matRipple
            [mat-dialog-close]="has_actioned()"
            class="absolute top-2 right-0"
        >
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventLinkModalComponent, { className: "EventLinkModalComponent", filePath: "libs/events/src/lib/event-link-modal.component.ts", lineNumber: 91 });
})();

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
function multipleSpacesEnabled(settings) {
  return settings.get("app.events.multiple_spaces") === true || settings.get("app.events.allow_multiple_spaces") === true;
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

// libs/events/src/lib/event-form.service.ts
var BOOKING_URLS = [
  "book/rooms",
  "book/spaces",
  "book/meeting",
  "schedule/view",
  "confirm/success",
  "upcoming"
];
var PERSISTED_EVENT_CONTEXT_URLS = ["landing"];
var IGNORED_DETAIL_FIELDS = [
  "attendees",
  "body",
  "system",
  "date_end",
  "organiser",
  "recurrence",
  "resources"
];
function normaliseEventBody(body) {
  const template = document.createElement("template");
  template.innerHTML = body || "";
  const serialise = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node.textContent || "").replace(/\u200b/g, "");
    }
    if (node.nodeType !== Node.ELEMENT_NODE)
      return "";
    const element = node;
    if (element.tagName === "BR")
      return "\n";
    const content = [...element.childNodes].map(serialise).join("");
    if (element.tagName === "DIV" || element.tagName === "P") {
      return `
${content}
`;
    }
    const tag = element.tagName.toLowerCase();
    const attributes = [...element.attributes].sort((a, b) => a.name.localeCompare(b.name)).map(({ name, value }) => ` ${name}="${value}"`).join("");
    return `<${tag}${attributes}>${content}</${tag}>`;
  };
  return [...template.content.childNodes].map(serialise).join("").replace(/[ \t]+\n|\n[ \t]+/g, "\n").replace(/\n+/g, "\n").trim();
}
var Tags;
(function(Tags2) {
  Tags2["Availability"] = "AVAILABILITY";
  Tags2["BookingRules"] = "BOOKING_RULES";
  Tags2["ListingRooms"] = "LIST_ROOMS";
  Tags2["PostBooking"] = "MAKING_BOOKING";
})(Tags || (Tags = {}));
var ROOM_CAPACITY_RANGES = {
  1: { min: 1, max: 2 },
  3: { min: 3, max: 4 },
  5: { min: 5, max: 8 },
  9: { min: 9, max: 999 }
};
var EventFormService = class _EventFormService extends AsyncHandler {
  get timezone() {
    if (multipleSpacesEnabled(this._settings)) {
      return this._model?.()?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    return this._settings.get("app.events.use_building_timezone") ? this._org.building?.timezone || "" : "";
  }
  _startNetwork() {
    this._network_requested = true;
    this._network_consumed.set(true);
  }
  loadLastSuccess() {
    const event = new CalendarEvent(JSON.parse(sessionStorage?.getItem("PLACEOS.last_modified_event") || "{}"));
    this.last_success.set(event);
    return event;
  }
  get form() {
    return this._form;
  }
  get model() {
    return this._model;
  }
  get event() {
    return this._event();
  }
  get is_multiday() {
    return this._event()?.duration > 24 * 60;
  }
  get favorite_spaces() {
    return this._settings.get(SETTING_KEYS.FAVORITE_ROOMS) || [];
  }
  get book_internal() {
    return this._settings.get("app.events.use_bookings") === true;
  }
  get lone_space() {
    return this._settings.get("app.events.no_space_resource");
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._assets = inject(AssetStateService);
    this._calendar = inject(CalendarService);
    this._dialog = inject(MatDialog);
    this._injector = inject(Injector);
    this._user_pipe = new UserPipe();
    this._view = signal(
      "form",
      ...ngDevMode ? [{ debugName: "_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      {
        date: Date.now(),
        zones: []
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filters = signal(
      {
        capacity: -1,
        features: []
      },
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event = signal(
      new CalendarEvent(),
      ...ngDevMode ? [{ debugName: "_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._network_requested = false;
    this._network_consumed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_network_consumed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_requests = /* @__PURE__ */ new Map();
    this._loaded_space_lists = signal(
      {},
      ...ngDevMode ? [{ debugName: "_loaded_space_lists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loaded_space_lists = this._loaded_space_lists.asReadonly();
    this._availability_requests = /* @__PURE__ */ new Map();
    this._form_ref = generateEventForm(void 0, this._settings, this._injector);
    this._form = this._form_ref.form;
    this._model = this._form_ref.model;
    this._initial_attendees = [];
    this._initial_event_details = "";
    this._space_pipe = new SpacePipe();
    this.notify_new_attendees_only = signal(
      false,
      ...ngDevMode ? [{ debugName: "notify_new_attendees_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_notify_new_attendees_only = computed(
      () => {
        const model = this._model();
        if (!model.id)
          return false;
        const attendee_emails = model.attendees.map((_) => (_.email || _).toLowerCase());
        return this._initial_attendees.every((_) => attendee_emails.includes(_)) && attendee_emails.some((_) => !this._initial_attendees.includes(_)) && this._eventDetails(model) === this._initial_event_details;
      },
      ...ngDevMode ? [{ debugName: "can_notify_new_attendees_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.removeLoadingTag = (t) => this._loading.set(this._loading().replace(`[${t}]`, "").trim());
    this.addLoadingTag = (t) => t ? this._loading.set(`${this._loading().replace(`[${t}]`, "")}[${t}]`.trim()) : "";
    this._overflow = (id = "") => id ? this._settings.get(`app.events.overflow.${id}`) || {} : {
      setup: this._settings.get(`app.events.setup`) || 0,
      breakdown: this._settings.get(`app.events.breakdown`) || 0
    };
    this._host = (host, space) => this._settings.get("app.events.force_host") || (this._settings.get("app.events.room_as_host") ? space : "") || host;
    this._requests_ready = computed(
      () => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return this._org.initialised() && (!this._org.regions.length || !!region?.id) && !!building?.id && overrides.length >= required_overrides;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._loading.asReadonly();
    this.view = this._view.asReadonly();
    this.options = this._options.asReadonly();
    this.filters = this._filters.asReadonly();
    this.last_success = signal(
      null,
      ...ngDevMode ? [{ debugName: "last_success" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_consumed() || !this._requests_ready()) {
          return void 0;
        }
        const list = this._org.building_list();
        return list.length ? list.map((bld) => bld.id) : void 0;
      },
      loader: ({ params: ids }) => {
        this.addLoadingTag(Tags.BookingRules);
        return Promise.all(ids.map((id) => ic(id, "room_booking_rules").then((_) => ({
          id,
          details: _.details instanceof Array ? _.details : []
        })).catch(() => ({ id, details: [] })))).then((building_rules) => {
          const mapping = {};
          for (const rules of building_rules) {
            mapping[rules.id] = rules.details;
          }
          return mapping;
        }).finally(() => this.removeLoadingTag(Tags.BookingRules));
      }
    }));
    this.booking_rules = computed(
      () => {
        return this._booking_rules_resource.value() ?? {};
      },
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_zone = computed(
      () => {
        const zone = this._settings.get("app.use_region") ? this._org.active_region() : this._org.active_building();
        return zone?.id || "";
      },
      ...ngDevMode ? [{ debugName: "_space_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_zone_debounced = debounced(this._space_zone, 300, {
      injector: this._injector,
      equal: Object.is
    });
    this._spaces_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_consumed() && this._requests_ready() ? this._space_zone_debounced.value() || void 0 : void 0,
      loader: ({ params: zone_id }) => {
        this.addLoadingTag(Tags.ListingRooms);
        return this._requestSpaces(zone_id).then((list) => {
          const spaces = list.filter((_) => _.bookable && _.email && !_.room_booking_url);
          this._loaded_space_lists.update((loaded) => __spreadProps(__spreadValues({}, loaded), {
            [zone_id]: spaces
          }));
          return { zone_id, spaces };
        }).catch(() => null).finally(() => this.removeLoadingTag(Tags.ListingRooms));
      }
    }));
    this.loaded_space_zone = computed(
      () => this._spaces_resource.value()?.zone_id || "",
      ...ngDevMode ? [{ debugName: "loaded_space_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.spaces = computed(
      () => {
        return this._spaces_resource.value()?.spaces ?? [];
      },
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this.spaces().map((_) => _.features))),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._room_alerts_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_room_alerts_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_consumed() && this._requests_ready() ? this._org.organisation?.id || void 0 : void 0,
      loader: ({ params: id }) => ic(id, "room_alerts").then((r) => r.details).catch(() => ({}))
    }));
    this.room_alerts = computed(
      () => {
        return this._room_alerts_resource.value() ?? {};
      },
      ...ngDevMode ? [{ debugName: "room_alerts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_spaces = computed(
      () => {
        if (!this._org.initialised())
          return [];
        let list = this.spaces();
        if (!list.length)
          return list;
        const filters = this._filters();
        let zones = this._options().zones;
        if (!zones?.length) {
          zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
        }
        if (zones.length) {
          list = list.filter((space) => zones.find((id) => space.zones.includes(id)));
        }
        if (filters.show_fav) {
          list = list.filter(({ id }) => this.favorite_spaces.includes(id));
        }
        if (filters.capacity > 0) {
          const range = ROOM_CAPACITY_RANGES[filters.capacity] || {
            min: filters.capacity,
            max: 999
          };
          list = list.filter(({ capacity }) => capacity < 0 || capacity >= range.min && capacity <= range.max);
        }
        if (filters.features) {
          list = list.filter(({ features }) => filters.features.every((f) => features.includes(f)));
        }
        return list.sort((a, b) => {
          const cap_diff = (a.capacity || 0) - (b.capacity || 0);
          if (cap_diff !== 0)
            return cap_diff;
          return (a.display_name || a.name).localeCompare(b.display_name || b.name);
        });
      },
      ...ngDevMode ? [{ debugName: "filtered_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_params = computed(
      () => ({
        spaces: this.filtered_spaces(),
        rules: this.booking_rules(),
        event: this._event(),
        options: this._options()
      }),
      ...ngDevMode ? [{ debugName: "_available_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_params_debounced = debounced(this._available_params, 300, { injector: this._injector, equal: Object.is });
    this._available_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_consumed() || !this._requests_ready()) {
          return void 0;
        }
        if (this._spaces_resource.isLoading() || this._booking_rules_resource.isLoading()) {
          return void 0;
        }
        return this._available_params_debounced.value();
      },
      loader: ({ params: { spaces, rules, event, options } }) => {
        if (!spaces.length)
          return Promise.resolve([]);
        this.addLoadingTag(Tags.Availability);
        return this._computeAvailableSpaces(spaces, rules, event, options).catch(() => []).finally(() => this.removeLoadingTag(Tags.Availability));
      }
    }));
    this.available_spaces = computed(
      () => {
        return this._available_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "available_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_pipe.org = this._org;
    effect(() => {
      const overrides = this._settings.overrides();
      if (overrides?.length)
        this._applyDurationSettings();
    });
    this.init();
  }
  async init() {
    await currentUserLoaded();
    setDefaultCreator(currentUser());
    onFieldChange(this._model, (v) => v.date, (date) => this.setOptions({ date }), this._injector);
    onFieldChange(this._model, (v) => v.duration, (duration) => this.setOptions({ duration }), this._injector);
    onFieldChange(this._model, (v) => v.all_day, (all_day) => this.setOptions({ all_day }), this._injector);
    this.subscription("router.events", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !BOOKING_URLS.some((_) => event.url.includes(_)) && !PERSISTED_EVENT_CONTEXT_URLS.some((_) => event.url.includes(_))) {
        this.clearForm();
      }
    }));
    const previous = {};
    effect(() => {
      const { date: raw_date, duration: raw_duration } = this._model();
      if (raw_date && raw_date !== previous["date"] || raw_duration && raw_duration !== previous["duration"]) {
        this._assets.setOptions({
          date: raw_date,
          duration: raw_duration
        });
        previous["date"] = raw_date;
        previous["duration"] = raw_duration;
      }
      this.storeForm();
    }, { injector: this._injector });
    this.loadLastSuccess();
  }
  /** Push the current building's duration and bookable-hours settings into the time sync. */
  _applyDurationSettings() {
    const handle = this._form_ref.time_sync;
    const period = this._settings.get("app.events.all_day_period");
    handle?.updateOptions({
      min_duration: this._settings.get("app.events.min_duration") ?? 30,
      max_duration: this._settings.get("app.events.max_duration") ?? 0,
      default_duration: this._settings.get("app.events.default_duration") ?? 60,
      custom_duration_options: this._settings.get("app.events.custom_duration_options") ?? [],
      bookable_hours: this._settings.get("app.events.bookable_hours") ?? null,
      timezone: this.timezone,
      all_day_start: period?.start,
      all_day_end: period?.end
    });
  }
  _allDayTimeRange(date) {
    const period = this._settings.get("app.events.all_day_period");
    return getAllDayTimeRange(date, this.timezone, period?.start, period?.end);
  }
  /** Resolve the bookable space list for the given zone */
  _requestSpaces(zone_id) {
    if (!zone_id)
      return Promise.resolve([]);
    const existing = this._space_requests.get(zone_id);
    if (existing)
      return existing;
    const request = new Promise((resolve) => {
      requestSpacesForZone(zone_id).subscribe({
        next: (list) => resolve(list || []),
        error: () => resolve([])
      });
    }).finally(() => this._space_requests.delete(zone_id));
    this._space_requests.set(zone_id, request);
    return request;
  }
  _queryAvailability(ids, date, duration, ignore, event) {
    const key = JSON.stringify({
      book_internal: this.book_internal,
      ids,
      date,
      duration,
      ignore,
      event: [event?.date, event?.duration]
    });
    const existing = this._availability_requests.get(key);
    if (existing)
      return existing;
    const request = (this.book_internal ? queryResourceAvailability(ids, date, duration, ignore, void 0) : querySpaceAvailability(ids, date, duration, ignore, void 0, [event?.date, event?.duration])).finally(() => this._availability_requests.delete(key));
    this._availability_requests.set(key, request);
    return request;
  }
  /** Filter the given spaces down to those available for the selection */
  async _computeAvailableSpaces(spaces, rules, event, { date, duration, all_day }) {
    const period = all_day ? this._allDayTimeRange(date) : { date, duration };
    spaces = filterResourcesFromRules(spaces, {
      date: period.date,
      duration: period.duration,
      resource: null,
      host: currentUser()
    }, rules[this._org.building?.id] || []);
    const ignore = event?.resources[0]?.id || event?.system?.id || event?.id;
    const availability = await this._queryAvailability(spaces.map(({ id }) => id), period.date || 60, period.duration || 60, ignore, event);
    let list = spaces.filter((_, i) => availability[i]);
    list = filterResourcesFromRules(list, {
      date: period.date,
      duration: period.duration,
      resource: null,
      host: currentUser()
    }, rules[this._org.building?.id] || []);
    return list;
  }
  /** Resolve once the given resource has finished loading */
  _whenSettled(ref) {
    return firstValueWhere(ref.isLoading, (loading) => !loading, this._injector);
  }
  /** Resolve with the spaces available to book once the list has loaded */
  async listAvailableSpaces() {
    this._startNetwork();
    await this._whenSettled(this._available_resource);
    return this.available_spaces();
  }
  setView(value) {
    this.timeout("set_view", () => this._view.set(value), 50);
  }
  setFilters(filters) {
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), filters));
  }
  setOptions(options) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
  }
  newForm(event = new CalendarEvent()) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.newForm(event));
      return;
    }
    this._startNetwork();
    this._calendar.loadCalendars();
    this._loading.set("");
    const lock_start_time = !!event.id && (event.state === "started" || event.state === "in_progress");
    this._form_ref.lock_start_time.set(lock_start_time);
    const value = eventFormValue(event);
    this.notify_new_attendees_only.set(false);
    value.assets = (event.extension_data.assets || []).map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event })));
    this._model.set(value);
    this._form().reset();
    this._applyDurationSettings();
    this._setInitialEvent(this._model());
    if (!event.id)
      return;
    sessionStorage.setItem("PLACEOS.event", JSON.stringify(event?.toJSON() || {}));
    this._event.set(event);
  }
  resetForm() {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.resetForm());
      return;
    }
    this._model.set(eventFormValue(this._event() || new CalendarEvent()));
    this._form().reset();
  }
  storeForm() {
    this.timeout("store", () => {
      sessionStorage.setItem("PLACEOS.event_form", JSON.stringify(this._model() || {}));
    });
  }
  loadForm() {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.loadForm());
      return;
    }
    this._startNetwork();
    this._calendar.loadCalendars();
    const event_data = JSON.parse(sessionStorage.getItem("PLACEOS.event") || "{}");
    const event = new CalendarEvent(event_data);
    this._event.set(event);
    const initial_value = eventFormValue(event);
    initial_value.assets = (event.extension_data.assets || []).map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event })));
    this._setInitialEvent(initial_value);
    this.notify_new_attendees_only.set(false);
    const form_data = JSON.parse(sessionStorage.getItem("PLACEOS.event_form") || "{}");
    this._model.update((m) => __spreadValues(__spreadValues(__spreadValues({}, m), initial_value), form_data));
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.event");
    sessionStorage.removeItem("PLACEOS.event_form");
    this.newForm();
  }
  openEventLinkModal(force = false) {
    this._form().markAsTouched();
    if (!this._form().valid() && !force)
      return;
    const event = new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), {
      assets: []
    }));
    const ref = this._dialog.open(EventLinkModalComponent, { data: event });
    ref.afterClosed().subscribe((d) => d ? this._router.navigate(["/"]) : "");
  }
  cancelPostForm() {
  }
  async postForm(force = false, ignore_space_check = [], ignore_owner = false, force_calendar = false) {
    await currentUserLoaded();
    const notify_new_attendees_only = this.notify_new_attendees_only() && this.can_notify_new_attendees_only();
    if (isEmptyUser({ email: this._model().host })) {
      this._model.update((m) => __spreadProps(__spreadValues({}, m), { host: currentUser().email }));
    }
    if (isEmptyUser({ email: this._model().creator })) {
      this._model.update((m) => __spreadProps(__spreadValues({}, m), { creator: currentUser().email }));
    }
    this._form().markAsTouched();
    if (this._form().invalid() && !force) {
      throw i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this._form, this._model).join(", ")
      });
    }
    const on_error = (e) => {
      this.removeLoadingTag(Tags.PostBooking);
      throw e;
    };
    this.addLoadingTag(Tags.PostBooking);
    try {
      const event = this._event();
      const space_list = this._model().resources || [];
      let spaces = space_list.filter((_) => !ignore_space_check.includes(_.id));
      const recurr = this._model().recurrence;
      const raw_value = this._model();
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurring: recurr?._pattern && recurr?._pattern !== "none"
      }));
      if (!this._model().recurring) {
        this._model.update((m) => __spreadProps(__spreadValues({}, m), { recurrence: null }));
      }
      const changed_spaces = spaces.filter((_) => !event.resources.find((s) => s.id === _.id));
      const resources_changed = !!changed_spaces.length || event.resources.some((space) => !spaces.some((_) => _.id === space.id));
      const all_day_period = raw_value.all_day ? this._allDayTimeRange(raw_value.date) : {
        date: raw_value.date,
        duration: raw_value.duration,
        date_end: raw_value.date_end
      };
      const has_time_changed = !event.id || event.date !== raw_value.date || event.duration !== raw_value.duration;
      const organiser_timezone = this.timezone || raw_value.timezone;
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        timezone: organiser_timezone
      }));
      await this._checkBuildingBookableHours(spaces, all_day_period.date, all_day_period.date_end || all_day_period.date + all_day_period.duration * 60 * 1e3, organiser_timezone);
      if (spaces.length && (has_time_changed || resources_changed)) {
        const date = raw_value.all_day ? all_day_period.date : raw_value.date;
        const duration = raw_value.all_day ? all_day_period.duration : raw_value.duration;
        const availability_candidates = has_time_changed ? spaces : changed_spaces;
        if (availability_candidates.length) {
          const availability_spaces = await Promise.all(availability_candidates.map((space) => this._space_pipe.transform(space.email)));
          await this._checkResourcesAvailable(availability_spaces, date, duration, event.ical_uid || event.id || "").catch(on_error);
        }
        await this._checkResourceRules(spaces, date, duration, this._host(this._model().host, spaces[0]?.email)).catch(on_error);
      } else if (!space_list.length && this.lone_space) {
        spaces = [await this._space_pipe.transform(this.lone_space)];
        this._model.update((m) => __spreadProps(__spreadValues({}, m), { resources: spaces }));
      }
      if (this._model().recurring && spaces.length) {
        await this._checkRecurringClashes(new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), {
          date: all_day_period.date,
          duration: all_day_period.duration,
          date_end: all_day_period.date_end,
          resources: spaces
        }))).catch(on_error);
      }
      const valid_attendee = (user) => !isEmptyUser(user) && !!user.email.split("@")[0].trim();
      this._model.update((m) => {
        const organiser = valid_attendee(m.organiser) ? m.organiser : m.host === currentUser().email ? currentUser() : new User({ email: m.host });
        return __spreadProps(__spreadValues({}, m), {
          organiser,
          attendees: unique([...m.attendees, organiser].filter(valid_attendee), "email")
        });
      });
      if (!spaces.length && this._model().attendees.find((_) => _.is_external)) {
        this.removeLoadingTag(Tags.PostBooking);
        throw i18n("CALENDAR_EVENT.SPACE_EXTERNALS_ERROR");
      }
      const default_oflow = this._overflow();
      let [setup, breakdown] = [
        this._model().setup_time || default_oflow.setup,
        this._model().breakdown_time || default_oflow.breakdown
      ];
      for (const space of spaces) {
        const overflow = this._overflow(space.id);
        setup = Math.max(overflow.setup || 0, setup);
        breakdown = Math.max(overflow.breakdown || 0, breakdown);
      }
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        setup_time: setup,
        breakdown_time: breakdown
      }));
      for (const order of this._model().catering || []) {
        order.notes = this._model().catering_notes;
        order.charge_code = this._model().catering_charge_code;
      }
      const query = event.id ? {
        system_id: event?.resources[0]?.id || event?.system?.id || spaces[0]?.id
      } : {};
      if (notify_new_attendees_only)
        query.notify_existing_attendees = false;
      const user_email = currentUser()?.email?.toLowerCase() || "";
      const source_calendar = event.calendar || event.host || event.creator || raw_value.calendar || raw_value.creator;
      const target_calendar = raw_value.host || raw_value.creator;
      const query_calendar = event.id ? source_calendar : target_calendar;
      const owner_fields = event.id ? [event.host, event.creator, event.calendar] : [raw_value.host, raw_value.creator, raw_value.calendar];
      const is_owner = owner_fields.some((_) => _?.toLowerCase?.() === user_email);
      if ((is_owner && !ignore_owner || force_calendar) && query_calendar)
        query.calendar = query_calendar;
      const processed_assets = (this._model().assets || []).map((_) => new AssetRequest(_).toJSON());
      const host = this._host(this._model().host, spaces[0]?.email);
      const ext = {
        department: this._model().organiser?.department || currentUser()?.department
      };
      if (this._model().host !== host)
        ext.host_override = this._model().host;
      const value = this._model();
      let created_event = await this._performBooking(new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), {
        date: all_day_period.date,
        duration: all_day_period.duration,
        date_end: all_day_period.date_end,
        old_system: event?.system,
        system: null,
        host,
        title: this._model().title || "Space Booking",
        attendees: this._model().attendees.map((_) => {
          const v = __spreadValues({}, _);
          delete v.visit_expected;
          delete v.extension_data;
          return v;
        }),
        assets: processed_assets,
        extension_data: ext
      })), query).catch(on_error);
      const date_end = all_day_period.date_end || all_day_period.date + all_day_period.duration * 60 * 1e3;
      const saved_resources = created_event.resources || [];
      const resolved_resources = this._resolveResourceResponses(space_list, saved_resources);
      const failed_resources = resolved_resources.filter((_) => _.response_status === "declined");
      const booked_resources = resolved_resources.filter((_) => _.response_status !== "declined");
      spaces = booked_resources;
      created_event = new CalendarEvent(__spreadProps(__spreadValues({}, created_event), {
        event_start: Math.floor(all_day_period.date / 1e3),
        event_end: Math.floor(date_end / 1e3),
        date: all_day_period.date,
        duration: all_day_period.duration,
        date_end,
        resources: booked_resources
      }));
      if (failed_resources.length) {
        const names = failed_resources.map((_) => _.display_name || _.name || _.email).join(", ");
        notifyWarn(i18n(failed_resources.length > 1 ? "CALENDAR_EVENT.SPACES_UNAVAILABLE" : "CALENDAR_EVENT.SPACE_UNAVAILABLE", { spaces: names }));
      }
      const domain = (currentUser()?.email || "@").split("@")[1];
      const visitors = this._model().attendees.filter((user) => user.is_external && user.email !== event.host && !user.email.includes(domain) && user.visit_expected);
      if (visitors.length) {
        await createBookingsForEvent(created_event, "visitor", visitors).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
      }
      if (this._model().catering?.length) {
        await createBookingsForEvent(created_event, "catering-order", this._model().catering).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
      }
      const assets = this._model().assets || event.extension_data.assets || [];
      if (assets.length) {
        try {
          const requests = await validateAssetRequestsForResource(created_event, {
            date: all_day_period.date,
            duration: all_day_period.duration,
            host: value.host,
            all_day: value.all_day,
            location_name: spaces[0]?.display_name || spaces[0]?.name || "",
            location_id: spaces[0]?.id || "",
            zones: unique([
              this._org.organisation.id,
              this._org.region?.id,
              this._org.building?.id,
              ...spaces[0]?.zones || []
            ]).filter((_) => !!_),
            reset_state: has_time_changed
          }, assets, changed_spaces.length > 0 || has_time_changed);
          if (!requests)
            throw i18n("CALENDAR_EVENT.ASSETS_INVALID_ERROR");
          await requests();
        } catch (e) {
          await this._removeBookingAfterError(!event.id, created_event, true, e);
        }
      }
      this.clearForm();
      sessionStorage.setItem("PLACEOS.last_modified_event", JSON.stringify(created_event.toJSON()));
      this.last_success.set(created_event);
      return created_event;
    } catch (e) {
      this.removeLoadingTag(Tags.PostBooking);
      if (this._isPermissionError(e))
        this._clearSavedHostChange();
      throw e;
    }
  }
  _isPermissionError(error) {
    const status = error?.status || error?.error?.status;
    if (status === 403)
      return true;
    const message = this._errorMessage(error).toLowerCase();
    return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
  }
  _errorMessage(error) {
    if (typeof error === "string")
      return error;
    if (error instanceof Error && error.message)
      return error.message;
    if (typeof error?.error === "string")
      return error.error;
    if (typeof error?.message === "string")
      return error.message;
    if (typeof error?.error?.message === "string")
      return error.error.message;
    return "";
  }
  _clearSavedHostChange() {
    const user = currentUser();
    if (!user)
      return;
    const host_data = {
      host: user.email,
      organiser: user,
      creator: user.email,
      calendar: user.email
    };
    this._model.update((m) => __spreadValues(__spreadValues({}, m), host_data));
    const saved_form = JSON.parse(sessionStorage.getItem("PLACEOS.event_form") || "{}");
    sessionStorage.setItem("PLACEOS.event_form", JSON.stringify(__spreadValues(__spreadValues({}, saved_form), host_data)));
  }
  async _checkResourcesAvailable(spaces, date, duration, ignore) {
    if (!spaces?.length)
      return true;
    const event = this._event();
    const id_list = spaces.map((_) => _.id);
    const response = await (this.book_internal ? queryResourceAvailability(id_list, date, duration, ignore) : querySpaceAvailability(id_list, date, duration, event?.resources[0]?.id || event?.system?.id || event?.id || void 0, void 0, [event?.date, event?.duration]));
    const unavailable = spaces.filter((_, i) => !response[i]);
    if (unavailable.length) {
      const names = unavailable.map((_) => _.display_name || _.name || _.email).join(", ");
      throw i18n(unavailable.length > 1 ? "CALENDAR_EVENT.SPACES_UNAVAILABLE" : "CALENDAR_EVENT.SPACE_UNAVAILABLE", { spaces: names });
    }
    return true;
  }
  /** Resolve an app setting against one building's override stack. */
  _buildingSetting(key, building) {
    const keys = key.split(".");
    const override_keys = keys[0] === "app" ? keys.slice(1) : keys;
    const overrides = [
      this._org.buildingSettings(building.id),
      this._org.regionSettings(building.parent_id),
      ...this._org.settings || []
    ];
    for (const override of overrides) {
      const value = getItemWithKeys(override_keys, override);
      if (value != null)
        return value;
    }
    return getItemWithKeys(keys, DEFAULT_SETTINGS);
  }
  _resolveResourceResponses(requested, saved) {
    const require_saved_resource = requested.length > 1;
    return requested.map((space) => {
      const response = saved.find((_) => _.email && _.email === space.email || _.id && _.id === space.id);
      return new Space(__spreadProps(__spreadValues({}, space), {
        response_status: response?.response_status || (response || !require_saved_resource ? space.response_status : "declined")
      }));
    });
  }
  /** Check the event instant against every selected building's local hours. */
  async _checkBuildingBookableHours(spaces, date, date_end, organiser_timezone) {
    const buildings = await this._org.loadBuildingsForZones(spaces.map((space) => space.zones));
    await Promise.all(buildings.map((building) => this._org.loadBuildingData(building)));
    const policies = buildings.length ? buildings.map((building) => ({
      hours: this._buildingSetting("app.events.bookable_hours", building),
      timezone: building.timezone || organiser_timezone
    })) : [
      {
        hours: this._settings.get("app.events.bookable_hours"),
        timezone: organiser_timezone
      }
    ];
    for (const { hours, timezone } of policies) {
      if (!hours)
        continue;
      const { hours: end_hour, minutes: end_minute } = getTimeInTimezone(date_end, timezone);
      const end_minutes = end_hour * 60 + end_minute;
      const end_is_valid = end_minutes >= hours.start * 60 && end_minutes <= hours.end * 60;
      if (!isWithinBookableHours(date, hours, timezone) || !end_is_valid) {
        throw i18n("FORM.BOOKABLE_HOURS_ERROR");
      }
    }
  }
  async _checkResourceRules(spaces, date, duration, host) {
    const user = await this._bookingRulesHost(host);
    await this._whenSettled(this._booking_rules_resource);
    const rules = __spreadValues({}, this.booking_rules());
    const buildings = await this._org.loadBuildingsForZones(spaces.map((space) => space.zones));
    for (const space of spaces) {
      const bld = buildings.find((b) => space.zones.includes(b.id));
      if (!bld || rules[bld.id])
        continue;
      const metadata = await ic(bld.id, "room_booking_rules").catch(() => ({ details: [] }));
      rules[bld.id] = metadata.details instanceof Array ? metadata.details : [];
    }
    const space_rules = spaces.map((space) => {
      const bld = buildings.find((b) => space.zones.includes(b.id));
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id]);
    });
    const hidden = spaces.filter((_, i) => space_rules[i]?.hidden);
    if (hidden.length) {
      const names = hidden.map((_) => _.display_name || _.name || _.email).join(", ");
      throw i18n("CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN", { spaces: names }, hidden.length);
    }
    return true;
  }
  async _bookingRulesHost(host) {
    const current_user = currentUser();
    if (this._settings.get("app.events.force_current_user_for_booking_rules") === true || host === current_user.email) {
      return current_user;
    }
    return this._user_pipe.transform(host).catch(() => ({ email: host, name: host }));
  }
  /**
   * Check for clashing events in a recurring event series
   * @param event The calendar event to check for clashes
   * @returns true if no clashes or user confirmed to continue
   * @throws Error if first instance clashes or clashes not allowed
   */
  async _checkRecurringClashes(event) {
    if (!event.recurring) {
      return true;
    }
    const clashes = await findEventClashes(event, {
      include_clash_time: true
    });
    if (!clashes?.length) {
      return true;
    }
    const sorted_clashes = [...clashes].sort((a, b) => a.booking_start - b.booking_start);
    const event_start_unix = Math.floor(event.date / 1e3);
    const first_clash = sorted_clashes[0];
    const is_first_instance_clash = first_clash.booking_start === event_start_unix;
    if (is_first_instance_clash) {
      throw i18n("CALENDAR_EVENT.FIRST_INSTANCE_CLASH");
    }
    const allow_clashes = this._settings.get("app.events.allow_recurring_instance_clashes") ?? false;
    if (!allow_clashes) {
      throw i18n("CALENDAR_EVENT.RECURRING_CLASHES_NOT_ALLOWED", {
        count: clashes.length
      });
    }
    const result = await openRecurringClashModal({ clashes: sorted_clashes }, this._dialog);
    if (result?.reason !== "done") {
      throw "User cancelled";
    }
    return true;
  }
  async _performBooking(event, query) {
    this._updateVisitorList(event.attendees);
    const old_system = event.old_system?.id || event.old_system?.email || event.resources[0]?.email;
    const system_id = event.system?.id || event.system?.email || event.resources[0]?.email;
    if (old_system !== system_id) {
      event.attendees = event.attendees.filter((_) => _.email !== old_system || _.id !== old_system);
    }
    return this.book_internal ? saveBooking(newBookingFromCalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
      status: this._settings.get("app.bookings.no_approval") === true ? "approved" : "tentative"
    }))).then((_) => newCalendarEventFromBooking(_)) : saveEvent(event, query);
  }
  _setInitialEvent(value) {
    this._initial_attendees = value.attendees.map((_) => (_.email || _).toLowerCase());
    this._initial_event_details = this._eventDetails(value);
  }
  _eventDetails(value) {
    const details = Object.entries(value).filter(([key]) => !IGNORED_DETAIL_FIELDS.includes(key));
    const recurrence = value.recurrence;
    details.push(["body", normaliseEventBody(value.body)]);
    details.push(["host_email", value.organiser?.email || ""]);
    details.push([
      "recurrence",
      recurrence?.pattern && recurrence?._pattern !== "none" ? [
        recurrence.pattern,
        recurrence.interval || 1,
        [...recurrence.days_of_week || []].sort(),
        recurrence.nth_of_month || null,
        recurrence.start || null,
        recurrence.end || null,
        recurrence.occurrences || null
      ] : null
    ]);
    details.push([
      "space_ids",
      (value.resources || []).map((_) => (_.email || _.id || "").toLowerCase()).sort()
    ]);
    details.sort(([a], [b]) => a > b ? 1 : -1);
    return JSON.stringify(details);
  }
  async _removeBookingAfterError(is_new, event, assets = false, e) {
    if (is_new) {
      await removeEvent(event.id, event.resources.length ? {
        calendar: this._model().host || currentUser()?.email,
        system_id: event.resources[0].id
      } : {});
      throw e?.status === 409 ? i18n("CALENDAR_EVENT.ASSETS_CLASH_ERROR") : i18n("CALENDAR_EVENT.ASSETS_ERROR");
    } else if (assets) {
      throw i18n("CALENDAR_EVENT.ASSETS_PARTIAL_ERROR", {
        error: this._errorMessage(e) || e
      });
    }
    this.removeLoadingTag(Tags.PostBooking);
    throw e;
  }
  _updateVisitorList(attendees) {
    const visitors = attendees.filter((user) => user.is_external);
    if (!visitors?.length)
      return;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", unique([
      ...old_visitors.filter((_) => !_.includes(_.email)),
      ...visitors.map((_) => `${_.email}|${_.name}|${_.organisation}`)
    ]));
  }
  static {
    this.\u0275fac = function EventFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventFormService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventFormService, factory: _EventFormService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  setMinutes,
  SpacePipe,
  requestSpacesForZone,
  generateMockSpace,
  newCalendarEventFromBooking,
  UserPipe,
  EventFormService
};
//# debugId=be697ac0-bc4a-5f1a-87a7-7bc189998e67
//# sourceMappingURL=chunk-PMZYPFMZ.js.map

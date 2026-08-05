import {
  eventFormValue,
  generateEventForm,
  newCalendarEventFromBooking
} from "./chunk-D2Y4DFVK.js";
import {
  assetAvailable,
  getAssetRulesForZone
} from "./chunk-FH5SJGTJ.js";
import {
  getMapDetails
} from "./chunk-G4OAJSYR.js";
import {
  queryLockerAssetsForZones,
  queryLockerBankAssetsForZones
} from "./chunk-7T3MZAA2.js";
import {
  UserPipe
} from "./chunk-342X24XS.js";
import {
  findEventClashes,
  queryCalendarAvailability,
  queryCalendars,
  querySpaceAvailability,
  querySpaceFreeBusy,
  removeEvent,
  saveEvent
} from "./chunk-Q3G65SEE.js";
import {
  queryAssetCategories,
  queryAssets,
  queryGroupAvailability,
  validateAssetRequestsForResource
} from "./chunk-CL5SYF3K.js";
import {
  createBookingsForEvent,
  queryBookings,
  queryResourceAvailability,
  saveBooking
} from "./chunk-JXZJQLGG.js";
import {
  requestSpacesForZone
} from "./chunk-5LJLE5G4.js";
import {
  SpacePipe
} from "./chunk-RNZ4ZX4F.js";
import {
  AssetRequest,
  AsyncHandler,
  Booking,
  CalendarEvent,
  Component,
  DatePipe,
  EventEmitter,
  IconComponent,
  Injectable,
  Injector,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  NavigationEnd,
  OrganisationService,
  Output,
  Pipe,
  Router,
  SafePipe,
  SanitizePipe,
  SettingsService,
  TranslatePipe,
  User,
  Wu,
  addDays,
  addMinutes,
  computed,
  currentUser,
  currentUserIsLoaded,
  currentUserLoaded,
  current_user,
  debounced,
  disabled,
  effect,
  email,
  endOfDay,
  filterResourcesFromRules,
  first,
  firstValueWhere,
  flatten,
  form,
  format,
  fromEventRecurrence,
  getAllDayTimeRange,
  getInvalidSignalFields,
  getTimeInTimezone,
  getUnixTime,
  guardModelUndefinedWrites,
  i18n,
  il,
  inject,
  isAfter,
  isEmptyUser,
  isWithinBookableHours,
  localToTimezone,
  notifyError,
  onFieldChange,
  required,
  resource,
  rulesForResource,
  setClassMetadata,
  setDefaultCreator,
  settingSignal,
  setupFormTimeSync,
  signal,
  startOfDay,
  startOfMinute,
  toBookingRecurrence,
  toDate,
  toQueryString,
  unique,
  untracked,
  validate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-J3FDPPYQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// libs/assets/src/lib/asset-group.pipe.ts
var ASSET_GROUP_LIST = [];
var EMPTY_ASSET_GROUP = {};
function updateAssetGroupList(assetgroup_list) {
  for (const assetgroup of assetgroup_list) {
    if (!ASSET_GROUP_LIST.find(({ id }) => id === assetgroup.id)) {
      ASSET_GROUP_LIST.push(assetgroup);
    }
  }
}
var AssetGroupPipe = class _AssetGroupPipe {
  /**
   * Get details of the assetgroup with the given ID
   * @param assetgroup_id ID or Email of the assetgroup
   */
  async transform(group_id) {
    if (!group_id)
      return EMPTY_ASSET_GROUP;
    let asset_group = ASSET_GROUP_LIST.find(({ id }) => id === group_id);
    if (asset_group)
      return asset_group;
    const group = await il(group_id).catch(() => null);
    if (group) {
      asset_group = __spreadValues({}, group);
      ASSET_GROUP_LIST.push(asset_group);
      return asset_group;
    }
    return EMPTY_ASSET_GROUP;
  }
  updateAssetGroupList(assetgroup_list) {
    updateAssetGroupList(assetgroup_list);
  }
  static {
    this.\u0275fac = function AssetGroupPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetGroupPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "assetgroup", type: _AssetGroupPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupPipe, [{
    type: Pipe,
    args: [{
      name: "assetgroup"
    }]
  }], null, null);
})();

// libs/assets/src/lib/asset-state.service.ts
function assetOptionsMatch(a, b) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b)
  ]));
  return keys.every((key) => Object.is(a[key], b[key]));
}
var AssetStateService = class _AssetStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings_service = inject(SettingsService);
    this._injector = inject(Injector);
    this._options = signal(
      { date: Date.now() },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search = signal(
      "",
      ...ngDevMode ? [{ debugName: "_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._category = signal(
      [],
      ...ngDevMode ? [{ debugName: "_category" }] : (
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
    this._rules = signal(
      [],
      ...ngDevMode ? [{ debugName: "_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._asset_list = signal(
      null,
      ...ngDevMode ? [{ debugName: "_asset_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._asset_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_asset_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_groups = signal(
      [],
      ...ngDevMode ? [{ debugName: "_available_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._category_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_category_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_settings" }] : (
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
    this._asset_list_request = null;
    this._category_list_request = null;
    this._booking_requests = /* @__PURE__ */ new Map();
    this._available_group_requests = /* @__PURE__ */ new Map();
    this._settings_requests = /* @__PURE__ */ new Map();
    this._options_debounced = debounced(this._options, 300, {
      injector: this._injector,
      equal: assetOptionsMatch
    });
    this._requests_ready = computed(
      () => {
        const building = this._org.active_building();
        const overrides = this._settings_service.overrides();
        return this._network_consumed() && this._assetsEnabled() && this._org.initialised() && !!building?.id && overrides.length >= (this._org.settings?.length || 0) + 2;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._search.asReadonly();
    this.category = this._category.asReadonly();
    this.options = this._options.asReadonly();
    this.loading = this._loading.asReadonly();
    this.rules = computed(
      () => {
        this._requestNetwork();
        return this._rules();
      },
      ...ngDevMode ? [{ debugName: "rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_list = computed(
      () => {
        this._requestNetwork();
        return this._asset_list();
      },
      ...ngDevMode ? [{ debugName: "asset_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_bookings = computed(
      () => {
        this._requestNetwork();
        return this._asset_bookings();
      },
      ...ngDevMode ? [{ debugName: "asset_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_groups = computed(
      () => {
        this._requestNetwork();
        return this._available_groups();
      },
      ...ngDevMode ? [{ debugName: "available_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.category_list = computed(
      () => {
        this._requestNetwork();
        return this._category_list();
      },
      ...ngDevMode ? [{ debugName: "category_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible_category_ids = computed(
      () => this._category_list().map((item) => item.id),
      ...ngDevMode ? [{ debugName: "visible_category_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_assets = computed(
      () => {
        this._requestNetwork();
        const search = this._search().toLowerCase();
        const category = this._category();
        const visible_categories = this.visible_category_ids();
        const assets = this._available_groups();
        const rules = this._rules();
        return assets.filter((_) => _.assets?.length && visible_categories.includes(_.category_id) && (!category.length || category.includes(_.category_id)) && (_.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search)) && assetAvailable(_, rules, this._options()));
      },
      ...ngDevMode ? [{ debugName: "filtered_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = computed(
      () => {
        this._requestNetwork();
        return this._settings();
      },
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled_rooms = computed(
      () => {
        this._requestNetwork();
        return this._settings().disabled_rooms || [];
      },
      ...ngDevMode ? [{ debugName: "disabled_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const options = this._options_debounced.value();
      const bld = this._org.active_building();
      if (!this._requests_ready() || !bld?.id || !options)
        return;
      untracked(() => {
        this._loadRules(options, bld.id);
        this._loadAssetList();
        this._loadAssetBookings(options);
        this._loadAvailableGroups(options, bld.id);
        this._loadSettings(bld.id);
        this._loadCategories();
      });
    });
    effect(() => {
      const visible_ids = this.visible_category_ids();
      const selected_categories = this._category();
      const valid_categories = selected_categories.filter((item) => visible_ids.includes(item));
      if (valid_categories.length !== selected_categories.length) {
        this._category.set(valid_categories);
      }
    });
  }
  _requestNetwork() {
    if (this._network_requested)
      return;
    this._network_requested = true;
    queueMicrotask(() => this._network_consumed.set(true));
  }
  _assetsEnabled() {
    return this._settings_service.get("app.has_assets") !== false;
  }
  setSearch(value) {
    this._search.set(`${value}`);
  }
  toggleCategory(value) {
    const categories = untracked(this._category);
    if (categories.includes(value)) {
      this._category.set(categories.filter((_) => _ !== value));
    } else {
      this._category.set([...categories, value]);
    }
  }
  getOptions() {
    return this._options();
  }
  setOptions(options) {
    const current = untracked(this._options);
    const next = __spreadValues(__spreadValues({}, current), options);
    if (assetOptionsMatch(current, next)) {
      return;
    }
    this._options.set(next);
  }
  _appendLoading(value) {
    this._loading.set(this._loading() + value);
  }
  _removeLoading(value) {
    this._loading.set(this._loading().split(value).join(""));
  }
  async _loadRules(options, building_id) {
    const zone_id = options.zone || options.zone_id || building_id || "";
    this._appendLoading("[Rules]");
    this._rules.set(await getAssetRulesForZone(zone_id));
    this._removeLoading("[Rules]");
  }
  async _loadAssetList() {
    if (this._asset_list_request)
      return this._asset_list_request;
    this._appendLoading("[Assets]");
    this._asset_list_request = queryAssets().then((list) => {
      this._asset_list.set(list);
      return list;
    }).finally(() => {
      this._asset_list_request = null;
      this._removeLoading("[Assets]");
    });
    return this._asset_list_request;
  }
  async _loadAssetBookings({ zone, zone_id, date }) {
    const query = {
      zones: zone || zone_id || "",
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      type: "asset-request"
    };
    const key = JSON.stringify(query);
    const existing = this._booking_requests.get(key);
    this._appendLoading("[Bookings]");
    const request = existing || queryBookings(query);
    if (!existing)
      this._booking_requests.set(key, request);
    this._asset_bookings.set(await request);
    request.finally(() => this._booking_requests.delete(key));
    this._removeLoading("[Bookings]");
  }
  async _loadAvailableGroups({ zone, zone_id, date, duration, ignore }, building_id) {
    const query = {
      zones: zone || zone_id || building_id || "",
      period_start: getUnixTime(startOfMinute(date)),
      period_end: getUnixTime(endOfMinute(addMinutes(date, duration || 30))),
      type: "asset-request",
      rejected: false
    };
    const key = JSON.stringify({ query, ignore });
    const existing = this._available_group_requests.get(key);
    const request = existing || queryGroupAvailability(query, ignore).catch((e) => {
      console.error(e);
      return [];
    });
    if (!existing)
      this._available_group_requests.set(key, request);
    const list = await request;
    request.finally(() => this._available_group_requests.delete(key));
    const sorted_list = list.sort((a, b) => a.name.localeCompare(b.name));
    updateAssetGroupList(sorted_list);
    this._available_groups.set(sorted_list);
  }
  async _loadCategories() {
    if (this._category_list_request)
      return this._category_list_request;
    this._category_list_request = queryAssetCategories().then((categories) => {
      this._category_list.set(categories.data.sort((a, b) => a.name.localeCompare(b.name)).filter((c) => !c.hidden));
      return categories;
    }).finally(() => this._category_list_request = null);
    return this._category_list_request;
  }
  async _loadSettings(building_id) {
    const existing = this._settings_requests.get(building_id);
    const request = existing || Wu(building_id, "assets-settings").then((metadata) => metadata.details || {}).catch(() => ({}));
    if (!existing)
      this._settings_requests.set(building_id, request);
    this._settings.set(await request);
    request.finally(() => this._settings_requests.delete(building_id));
  }
  static {
    this.\u0275fac = function AssetStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateService, factory: _AssetStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/bookings/src/lib/booking.utilities.ts
function parseJson(value, fallback) {
  if (!value)
    return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}
function parkingRequestStatus(booking) {
  if (booking?.process_state !== "unapproved")
    return "pending";
  return booking.extension_data?.requires_manual_approval ? "approval_required" : "waitlist";
}
function lockerBankFromAsset(asset) {
  const data = asset.other_data || {};
  return {
    id: asset.id,
    map_id: asset.map_id || data.map_id || "",
    level_id: asset.zone_id,
    name: asset.identifier || data.name || "",
    height: +(data.height || 3),
    notes: asset.notes || "",
    zones: asset.zones || [asset.zone_id].filter((_) => _),
    tags: asset.tags || parseJson(data.tags, []),
    images: parseJson(data.images, [])
  };
}
function lockerFromAsset(asset, banks) {
  const data = asset.other_data || {};
  const bank_id = asset.parent_id || "";
  const bank = banks.find((_) => _.id === bank_id);
  return {
    id: asset.id,
    bank_id,
    map_id: asset.map_id || data.map_id,
    assigned_to: asset.assigned_to || data.assigned_to,
    assigned_name: asset.assigned_name || data.assigned_name,
    name: asset.identifier || data.name || "",
    accessible: data.accessible === "true",
    bookable: asset.bookable !== false,
    position: parseJson(data.position, [0, 0]),
    size: parseJson(data.size, [1, 1]),
    bank,
    zone: bank?.zone,
    features: asset.features || parseJson(data.features, [])
  };
}
function setBookingAsset(model, resource2) {
  if (!resource2) {
    model.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: "" }));
    return;
  }
  model.update((m) => __spreadProps(__spreadValues({}, m), {
    asset_id: resource2.id,
    asset_name: resource2.name,
    name: resource2.display_name || resource2.name || resource2.id,
    map_id: resource2.map_id || resource2.id,
    description: resource2.name,
    zones: resource2.zone ? [resource2.zone?.parent_id, resource2.zone?.id] : [],
    booking_asset: resource2
  }));
}
function bookingAttachments(booking = new Booking()) {
  booking = booking || new Booking();
  const extension_data = booking.extension_data || {};
  return [
    ...extension_data.attachments || [],
    ...extension_data.p2_document_names || []
  ].filter((item) => !!item);
}
function bookingHostUser(booking = new Booking()) {
  if (!booking?.user_email)
    return currentUser();
  return new User({
    id: booking.user_id || "",
    email: booking.user_email,
    name: booking.user_name || booking.user_email
  });
}
function bookingFormValue(booking = new Booking()) {
  const extension_data = booking.extension_data || {};
  const visitor_name = booking.booking_type === "visitor" ? extension_data.visitor_name || booking.asset_name || "" : booking.asset_name || booking.description;
  return {
    id: booking.id || "",
    parent_id: booking.parent_id || "",
    event_id: booking.event_id || "",
    ical_uid: extension_data.ical_uid || "",
    date: booking.date ?? 0,
    date_end: booking.date_end ?? 0,
    all_day: booking.all_day ?? false,
    name: extension_data.name || booking.asset_name || "",
    duration: booking.duration ?? 0,
    booking_type: booking.booking_type || "",
    zones: booking.zones || [],
    title: booking.title || "",
    description: booking.description || "",
    booking_asset: {},
    resources: [],
    company: extension_data.company || "",
    asset_id: booking.asset_id || "",
    asset_name: visitor_name || "",
    assets: extension_data.assets || [],
    attendees: booking.attendees || [],
    map_id: extension_data.map_id || "",
    featured: extension_data.featured || false,
    user: bookingHostUser(booking),
    user_id: booking.user_id || "",
    group: booking.group ?? {},
    user_email: booking.user_email || "",
    user_name: booking.user_name || "",
    timezone: booking.timezone || "",
    booked_by: currentUser(),
    booked_by_id: booking.booked_by_id || "",
    booked_by_email: booking.booked_by_email || "",
    secondary_resource: extension_data.other_asset_type || extension_data.secondary_resource || {},
    location: extension_data.location || "",
    attendance_type: extension_data.attendance_type || "ANY",
    phone: extension_data.phone || "",
    permission: booking.permission || "PRIVATE",
    images: booking.images || [],
    tags: booking?.tags || [],
    plate_number: extension_data.plate_number || "",
    vehicle_type: extension_data.vehicle_type || "car",
    request_type: extension_data.request_type || "standard",
    requires_manual_approval: extension_data.requires_manual_approval ?? false,
    space_restrictions: extension_data.space_restrictions ?? false,
    extra_space_restrictions: extension_data.extra_space_restrictions ?? [],
    approver_group: extension_data.approver_group || "",
    prefer_booked_location_first: extension_data.prefer_booked_location_first ?? false,
    pass_number: extension_data.pass_number || "",
    international: extension_data.international ?? false,
    recurrence_custom: extension_data.recurrence_custom ?? false,
    recurrence_type: booking.recurrence_type || "none",
    recurrence_days: booking.recurrence_days ?? 0,
    recurrence_nth_of_month: booking.recurrence_nth_of_month ?? 0,
    recurrence_interval: booking.recurrence_interval ?? 0,
    recurrence_end: booking.recurrence_end ?? 0,
    recurrence_instances: extension_data.recurrence_instances ?? 0,
    notes: extension_data.notes || "",
    attachments: bookingAttachments(booking),
    update_master: false,
    self_registered: false,
    is_assgined: false
  };
}
function generateBookingForm(booking = new Booking(), injector) {
  const started = booking.state === "started";
  const model = signal(
    bookingFormValue(booking),
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  guardModelUndefinedWrites(model, bookingFormValue(new Booking()));
  const require_plate_number = settingSignal("parking.require_plate_number", false);
  const require_space_restriction = settingSignal("parking.require_space_restriction", false);
  const booking_form = form(model, (p) => {
    required(p.date);
    required(p.asset_id);
    email(p.asset_id, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "visitor"
    });
    required(p.plate_number, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "parking" && require_plate_number()
    });
    validate(p.plate_number, ({ value, valueOf }) => valueOf(p.booking_type) === "parking" && require_plate_number() && !`${value() || ""}`.trim() ? { kind: "required" } : void 0);
    validate(p.space_restrictions, ({ value, valueOf }) => valueOf(p.booking_type) === "parking" && require_space_restriction() && !value() ? { kind: "required" } : void 0);
    validate(p.duration, ({ value, valueOf }) => {
      const date = valueOf(p.date);
      if (value() <= 0)
        return { kind: "duration" };
      return date && isAfter(Date.now(), addMinutes(date, value())) ? { kind: "duration" } : void 0;
    });
    disabled(p.date, ({ value }) => {
      if (started)
        return true;
      return value() < Date.now() && !!untracked(model).id;
    });
  }, { injector });
  onFieldChange(model, (v) => v.user, (user) => {
    if (!user)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      user,
      user_id: user?.id ?? "",
      user_email: user?.email ?? "",
      user_name: user?.name ?? ""
    }));
  }, injector);
  onFieldChange(model, (v) => v.resources, (resources) => {
    if (untracked(model).booking_type === "visitor")
      return;
    setBookingAsset(model, (resources || [])[0]);
  }, injector);
  current_user.subscribe((user) => {
    if (!user)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      booked_by: user,
      booked_by_id: user?.id,
      booked_by_email: user?.email
    }));
  });
  const time_sync = setupFormTimeSync(model, {}, injector);
  booking_form._time_sync = time_sync;
  model._time_sync = time_sync;
  return { model, form: booking_form, time_sync };
}
async function findNearbyFeature(map_url, centered_at, desk_ids = []) {
  const details = await getMapDetails(map_url);
  const centerOf = (id) => {
    const bounds = details.element_bounds.get(id);
    return bounds ? { x: bounds.x + bounds.w / 2, y: bounds.y + bounds.h / 2 } : null;
  };
  const point = (typeof centered_at === "string" ? centerOf(centered_at) : centered_at) || { x: 0.5, y: 0.5 };
  let dist = 10;
  let closest = "";
  for (const desk of desk_ids) {
    const { x, y } = centerOf(desk) || { x: 2, y: 2 };
    const d = Math.sqrt((x - point.x) * (x - point.x) + (y - point.y) * (y - point.y));
    if (d < dist) {
      dist = d;
      closest = desk;
    }
  }
  return closest;
}
function newBookingFromCalendarEvent(event) {
  const date = event.date || event.event_start * 1e3;
  const recurrence = event.recurrence?.pattern ? toBookingRecurrence(fromEventRecurrence(event.recurrence), date) : {};
  return new Booking(__spreadProps(__spreadValues({
    id: event.id,
    user_email: event.host,
    date,
    duration: event.duration,
    asset_id: event.system?.id || event.system_id,
    asset_name: event.system?.display_name || event.system?.name,
    booking_type: "room",
    approved: event.status === "approved"
  }, recurrence), {
    extension_data: __spreadValues({}, event)
  }));
}
async function loadLockerBanksForScope(org, scope_id) {
  if (!scope_id)
    return [];
  const assets = await queryLockerBankAssetsForZones([scope_id]).catch(() => []);
  const banks = assets.map(lockerBankFromAsset);
  for (const bank of banks) {
    bank.zone = org.levelWithID(bank.zones || []);
  }
  return banks;
}
async function loadLockersForScope(org, scope_id, banks) {
  if (!scope_id)
    return [];
  const assets = await queryLockerAssetsForZones([scope_id]).catch(() => []);
  const lockers = assets.map((_) => lockerFromAsset(_, banks));
  for (const bank of banks) {
    bank.lockers = lockers.filter((_) => _.bank_id === bank.id).map((_) => __spreadValues({}, _));
  }
  return lockers.filter((_) => _.bank);
}
async function loadLockerResources(org, scope_id) {
  const banks = await loadLockerBanksForScope(org, scope_id);
  return loadLockersForScope(org, scope_id, banks);
}

// libs/components/src/lib/recurring-clash-modal.component.ts
var _forTrack0 = ($index, $item) => $item.booking_start;
function RecurringClashModalComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clash_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, clash_r1.booking_start * 1e3, "EEE, MMM d, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 6, clash_r1.booking_start * 1e3, "h:mm a"), " - ", \u0275\u0275pipeBind2(7, 9, clash_r1.booking_end * 1e3, "h:mm a"), " ");
  }
}
async function openRecurringClashModal(data, dialog) {
  const ref = dialog.open(RecurringClashModalComponent, {
    data
  });
  return Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ]);
}
var RecurringClashModalComponent = class _RecurringClashModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
  }
  get clashes() {
    return this._data.clashes || [];
  }
  onConfirm() {
    this.event.emit({ reason: "done" });
    this._dialog_ref.close({ reason: "done" });
  }
  static {
    this.\u0275fac = function RecurringClashModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurringClashModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringClashModalComponent, selectors: [["placeos-recurring-clash-modal"]], outputs: { event: "event" }, decls: 35, vars: 21, consts: [[1, "relative"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "max-h-[60vh]", "w-full", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "space-y-4", "overflow-auto", "px-4", "py-2", "sm:max-w-md"], [1, "border-base-200", "bg-warning", "text-warning-content", "flex", "items-center", "space-x-2", "rounded-xl", "border", "p-2", "shadow-sm"], [1, "text-5xl"], [1, "border-base-300", "bg-base-100", "max-h-48", "w-full", "overflow-auto", "rounded-sm", "border"], [1, "w-full", "text-sm"], [1, "bg-base-200", "sticky", "top-0"], [1, "p-2", "text-left"], [1, "border-base-300", "border-t"], [1, "text-base-content/70", "text-center", "text-xs"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "p-2"]], template: function RecurringClashModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "main", 3)(6, "div", 4)(7, "icon", 5);
        \u0275\u0275text(8, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "table", 7)(14, "thead", 8)(15, "tr")(16, "th", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th", 9);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, RecurringClashModalComponent_For_24_Template, 8, 12, "tr", 10, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "p", 11);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "footer", 12)(29, "button", 13);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 14);
        \u0275\u0275listener("click", function RecurringClashModalComponent_Template_button_click_32_listener() {
          return ctx.onConfirm();
        });
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "BOOKINGS.RECURRING_CLASHES_TITLE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "BOOKINGS.RECURRING_CLASHES_MSG"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "FORM.DATE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "COMMON.TIME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.clashes);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 15, "BOOKINGS.RECURRING_CLASHES_CONFIRM"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 17, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 19, "BOOKINGS.CONTINUE_BOOKING"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      TranslatePipe,
      DatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurringClashModalComponent, [{
    type: Component,
    args: [{ selector: "placeos-recurring-clash-modal", template: `
        <div class="relative">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'BOOKINGS.RECURRING_CLASHES_TITLE' | translate }}
                </h2>
            </header>
            <main
                class="flex max-h-[60vh] w-full max-w-[calc(100vw-2rem)] flex-col items-center space-y-4 overflow-auto px-4 py-2 sm:max-w-md"
            >
                <div
                    class="border-base-200 bg-warning text-warning-content flex items-center space-x-2 rounded-xl border p-2 shadow-sm"
                >
                    <icon class="text-5xl">warning</icon>
                    <p>
                        {{ 'BOOKINGS.RECURRING_CLASHES_MSG' | translate }}
                    </p>
                </div>
                <div
                    class="border-base-300 bg-base-100 max-h-48 w-full overflow-auto rounded-sm border"
                >
                    <table class="w-full text-sm">
                        <thead class="bg-base-200 sticky top-0">
                            <tr>
                                <th class="p-2 text-left">
                                    {{ 'FORM.DATE' | translate }}
                                </th>
                                <th class="p-2 text-left">
                                    {{ 'COMMON.TIME' | translate }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @for (clash of clashes; track clash.booking_start) {
                                <tr class="border-base-300 border-t">
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'EEE, MMM d, yyyy'
                                        }}
                                    </td>
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'h:mm a'
                                        }}
                                        -
                                        {{
                                            clash.booking_end * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <p class="text-base-content/70 text-center text-xs">
                    {{ 'BOOKINGS.RECURRING_CLASHES_CONFIRM' | translate }}
                </p>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="onConfirm()">
                    {{ 'BOOKINGS.CONTINUE_BOOKING' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      DatePipe
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurringClashModalComponent, { className: "RecurringClashModalComponent", filePath: "libs/components/src/lib/recurring-clash-modal.component.ts", lineNumber: 128 });
})();

// libs/events/src/lib/calendar-links.ts
function formatUTC(date) {
  const utc_date = localToTimezone(date, "UTC");
  return `${format(utc_date, "yyyyMMdd")}T${format(utc_date, "HHmmss")}Z`;
}
function formatAllDay(date) {
  return `${format(date, "yyyyMMdd")}`;
}
function escapeText(text) {
  return (text || "").replace(/\\|;|,|\n/g, (match) => {
    switch (match) {
      case "\\":
        return "\\\\";
      case ";":
        return "\\;";
      case ",":
        return "\\,";
      case "\n":
        return "\\n";
      default:
        return match;
    }
  });
}
function generateCalendarFileLink(event) {
  if (!event)
    return "data:text/calendar;charset=utf8,";
  const chunks = [];
  const description = escapeText(`${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`);
  const location = escapeText(`${event.location}`);
  chunks.push(["BEGIN", "VCALENDAR"]);
  chunks.push(["VERSION", "2.0"]);
  chunks.push(["BEGIN", "VEVENT"]);
  chunks.push(["UID", `${event.id || "uid-" + Date.now()}`]);
  chunks.push(["DTSTAMP", formatUTC(/* @__PURE__ */ new Date())]);
  if (event.meeting_url) {
    chunks.push(["URL", `${event.meeting_url}`]);
  }
  if (event.all_day) {
    chunks.push(["DTSTART;VALUE=DATE", formatAllDay(event.date)]);
    chunks.push(["DTEND;VALUE=DATE", formatAllDay(addDays(event.date, 1))]);
  } else {
    chunks.push(["DTSTART", formatUTC(event.date)]);
    chunks.push([
      "DTEND",
      formatUTC(addMinutes(event.date, event.duration || 60))
    ]);
  }
  chunks.push(["SUMMARY", escapeText(event.title)]);
  chunks.push(["DESCRIPTION", description]);
  chunks.push(["LOCATION", location]);
  const hostEmail = event.host || event.user_email || `no-reply@place.tech`;
  const hostName = event.organiser?.name || hostEmail.split("@")[0] || "Staff";
  chunks.push([
    "ORGANIZER",
    `CN=${escapeText(hostName)}:mailto:${hostEmail}`
  ]);
  chunks.push(["END", "VEVENT"]);
  chunks.push(["END", "VCALENDAR"]);
  const content = chunks.map(([key, value]) => `${key}:${value}`).join("\r\n");
  const url_data = encodeURIComponent(content);
  return `data:text/calendar;charset=utf8,${url_data}`;
}
function generateGoogleCalendarLink(event) {
  const fmt = event.all_day ? formatAllDay : formatUTC;
  const details = {
    action: "TEMPLATE",
    text: event.title,
    details: `${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    trp: false,
    dates: `${fmt(event.date)}/${fmt(addMinutes(event.date, event.duration ?? 60))}`
  };
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    details.add = unique([...emails, ...resources]).join();
  return `https://calendar.google.com/calendar/render?${toQueryString(details)}`;
}
function dateToISO(date) {
  return `${format(date, "yyyy-MM-dd")}T${format(date, "HH:mm:ss")}`;
}
function generateMicrosoftCalendarLink(event, type = "office", status = "free") {
  if (!event.date)
    event.date = Date.now();
  const data = {
    // path: '/calendar/deeplink/compose',
    // rru: 'addevent',
    startdt: dateToISO(event.date),
    enddt: dateToISO(addMinutes(event.date, event.duration ?? 60)),
    subject: event.title,
    body: `${event.body || ""}${event.id ? "\n\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    allday: event.all_day ?? false
    // availability: status,
    // freebusy: status,
  };
  if (event.all_day)
    delete data.enddt;
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    data.to = unique([...emails, ...resources]).filter((_) => !!_).join(",");
  return type === "office" ? `https://outlook.office.com/calendar/deeplink/compose?${toQueryString(data)}` : `https://outlook.live.com/calendar/deeplink/compose?${toQueryString(data)}`;
}

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

// libs/events/src/lib/calendar.service.ts
var CalendarService = class _CalendarService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._calendars = signal(
      [],
      ...ngDevMode ? [{ debugName: "_calendars" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._calendars_request = null;
    this.calendar_list = this._calendars.asReadonly();
    this.query = () => queryCalendars();
    this.freeBusy = (q) => querySpaceFreeBusy(q, this._org);
    this.availability = (q) => queryCalendarAvailability(q);
    this._waitForOrg();
  }
  async init() {
    if (this._settings.get("app.events.use_bookings"))
      return;
    this._initialised.next(true);
  }
  get calendars() {
    return this._calendars();
  }
  /** Get Free busy for the selected day
   * @param calendars User calendar
   * @param date Selected day
   */
  getFreeBusyDate(date, calendars) {
    return querySpaceFreeBusy({
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  async checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    const result = await queryCalendarAvailability({
      period_start,
      period_end,
      system_ids: system_ids.join(",")
    });
    const start = new Date(old_booking?.date).valueOf();
    const end = addMinutes(start, old_booking?.duration).valueOf();
    const available = result.every((i) => {
      const availability = i.availability;
      if (old_booking && i.id === old_booking.system?.email) {
        const index = availability.findIndex((block) => {
          return block.date >= start && addMinutes(block.date, block.duration).valueOf() <= end;
        });
        if (index !== -1) {
          availability.splice(index, 1);
        }
      }
      return !availability.length;
    });
    return !!available;
  }
  async loadCalendars() {
    if (this._calendars().length)
      return;
    this._calendars_request = this._calendars_request || queryCalendars().then((list) => this._calendars.set(list)).finally(() => this._calendars_request = null);
    await this._calendars_request;
  }
  _waitForOrg() {
    const check = () => {
      if (this._org.initialised())
        return this.init();
      this.timeout("init", check, 100);
    };
    check();
  }
  static {
    this.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/event-form.service.ts
var BOOKING_URLS = [
  "book/rooms",
  "book/spaces",
  "book/meeting",
  "schedule/view",
  "confirm/success",
  "upcoming"
];
var IGNORED_DETAIL_FIELDS = [
  "attendees",
  "system",
  "date_end",
  "organiser",
  "resources"
];
var Tags;
(function(Tags2) {
  Tags2["Availability"] = "AVAILABILITY";
  Tags2["BookingRules"] = "BOOKING_RULES";
  Tags2["ListingRooms"] = "LIST_ROOMS";
  Tags2["PostBooking"] = "MAKING_BOOKING";
})(Tags || (Tags = {}));
var EventFormService = class _EventFormService extends AsyncHandler {
  get timezone() {
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
    return this._settings.get("favourite_spaces") || [];
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
        return Promise.all(ids.map((id) => Wu(id, "room_booking_rules").then((_) => ({
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
    this._space_zone_debounced = debounced(this._space_zone, 300, { injector: this._injector, equal: Object.is });
    this._spaces_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_consumed() && this._requests_ready() ? this._space_zone_debounced.value() || void 0 : void 0,
      loader: ({ params: zone_id }) => {
        this.addLoadingTag(Tags.ListingRooms);
        return this._requestSpaces(zone_id).then((list) => list.filter((_) => _.bookable && _.email && !_.room_booking_url)).catch(() => []).finally(() => this.removeLoadingTag(Tags.ListingRooms));
      }
    }));
    this.spaces = computed(
      () => {
        return this._spaces_resource.value() ?? [];
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
      loader: ({ params: id }) => Wu(id, "room_alerts").then((r) => r.details).catch(() => ({}))
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
          list = list.filter(({ capacity }) => filters.capacity <= capacity || capacity < 0);
        }
        if (filters.features) {
          list = list.filter(({ features }) => filters.features.every((f) => features.includes(f)));
        }
        return list;
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
      if (event instanceof NavigationEnd && !BOOKING_URLS.some((_) => event.url.includes(_))) {
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
    const request = (this.book_internal ? queryResourceAvailability(ids, date, duration, ignore, void 0) : querySpaceAvailability(ids, date, duration, ignore, void 0, [
      event?.date,
      event?.duration
    ])).finally(() => this._availability_requests.delete(key));
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
    const event = new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), { assets: [] }));
    const ref = this._dialog.open(EventLinkModalComponent, { data: event });
    ref.afterClosed().subscribe((d) => d ? this._router.navigate(["/"]) : "");
  }
  cancelPostForm() {
  }
  async postForm(force = false, ignore_space_check = [], ignore_owner = false, force_calendar = false) {
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
      const all_day_period = raw_value.all_day ? this._allDayTimeRange(raw_value.date) : {
        date: raw_value.date,
        duration: raw_value.duration,
        date_end: raw_value.date_end
      };
      const has_time_changed = !event.id || event.date !== raw_value.date || event.duration !== raw_value.duration;
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        timezone: this.timezone || raw_value.timezone
      }));
      const bookable_hours = this._settings.get("app.events.bookable_hours");
      if (!isWithinBookableHours(raw_value.date, bookable_hours, raw_value.timezone)) {
        throw i18n("FORM.BOOKABLE_HOURS_ERROR");
      }
      if (raw_value.date_end && raw_value.duration > 24 * 60 && bookable_hours) {
        const { hours, minutes } = getTimeInTimezone(raw_value.date_end, raw_value.timezone);
        const end_minutes = hours * 60 + minutes;
        const within_end_window = end_minutes >= bookable_hours.start * 60 && end_minutes <= bookable_hours.end * 60;
        if (!within_end_window) {
          throw i18n("FORM.BOOKABLE_HOURS_ERROR");
        }
      }
      if (spaces.length && has_time_changed) {
        const space_list2 = await Promise.all(changed_spaces.map((_) => this._space_pipe.transform(_.email)));
        const date = raw_value.all_day ? all_day_period.date : raw_value.date;
        const duration = raw_value.all_day ? all_day_period.duration : raw_value.duration;
        await this._checkResourcesAvailable(space_list2, date, duration, event.ical_uid || event.id || "").catch(on_error);
        await this._checkResourceRules(space_list2, date, duration, this._host(this._model().host, spaces[0]?.email)).catch(on_error);
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
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        attendees: unique([...m.attendees, m.organiser || currentUser()], "email")
      }));
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
      if (force_calendar)
        delete query.system_id;
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
      created_event = new CalendarEvent(__spreadProps(__spreadValues({}, created_event), {
        event_start: Math.floor(all_day_period.date / 1e3),
        event_end: Math.floor(date_end / 1e3),
        date: all_day_period.date,
        duration: all_day_period.duration,
        date_end,
        resources: space_list,
        system: space_list[0] || null
      }));
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
        }, assets, changed_spaces.length > 0 || has_time_changed).catch((e) => this._removeBookingAfterError(!event.id, created_event, true, e));
        if (!requests)
          throw i18n("CALENDAR_EVENT.ASSETS_INVALID_ERROR");
        await requests();
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
  async _checkResourceRules(spaces, date, duration, host) {
    const user = await this._bookingRulesHost(host);
    await this._whenSettled(this._booking_rules_resource);
    const rules = __spreadValues({}, this.booking_rules());
    for (const space of spaces) {
      const bld = this._org.buildings.find((b) => space.zones.includes(b.id));
      if (!bld || rules[bld.id])
        continue;
      const metadata = await Wu(bld.id, "room_booking_rules").catch(() => ({ details: [] }));
      rules[bld.id] = metadata.details instanceof Array ? metadata.details : [];
    }
    const space_rules = spaces.map((space) => {
      const bld = this._org.buildings.find((b) => space.zones.includes(b.id));
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
    const current_user2 = currentUser();
    if (this._settings.get("app.events.force_current_user_for_booking_rules") === true || host === current_user2.email) {
      return current_user2;
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
    details.push(["host_email", value.organiser?.email || ""]);
    details.push([
      "space_ids",
      (value.resources || []).map((_) => _.id || _.email || "")
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
  AssetStateService,
  parkingRequestStatus,
  lockerBankFromAsset,
  lockerFromAsset,
  bookingAttachments,
  bookingHostUser,
  bookingFormValue,
  generateBookingForm,
  findNearbyFeature,
  loadLockerBanksForScope,
  loadLockersForScope,
  loadLockerResources,
  openRecurringClashModal,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  CalendarService,
  EventFormService
};
//# sourceMappingURL=chunk-EZ7IWG33.js.map

import {
  disabled,
  email,
  form,
  required,
  validate
} from "./chunk-BUXLBBSZ.js";
import {
  TranslatePipe
} from "./chunk-IBKNRV7T.js";
import {
  AssetRequest,
  AsyncHandler,
  Booking,
  Calendar,
  CalendarEvent,
  Fl,
  GuestUser,
  IconComponent,
  J,
  Jl,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  Mt,
  OrganisationService,
  SettingsService,
  Space,
  User,
  V,
  VERSION,
  Vl,
  Xe,
  Yl,
  Zl,
  addDays,
  addHours,
  addMinutes,
  b,
  ce,
  currentUser,
  current_user,
  ed,
  endOfDay,
  f,
  flatten,
  format,
  fromEventRecurrence,
  getUnixTime,
  guardModelUndefinedWrites,
  ic,
  isAfter,
  isBefore,
  isMobileSafari,
  localToTimezone,
  log,
  nd,
  oi,
  onFieldChange,
  randomString,
  sd,
  setting,
  settingSignal,
  setupFormTimeSync,
  startOfDay,
  startOfMinute,
  stringToMinutes,
  te,
  toBookingRecurrence,
  toDate,
  toQueryString,
  unique,
  v
} from "./chunk-3OQ2BSWE.js";
import {
  ChangeDetectorRef,
  Component,
  DatePipe,
  EventEmitter,
  Injectable,
  Injector,
  Output,
  Pipe,
  computed,
  debounced,
  effect,
  first,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-E52RJLI7.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

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
  const query = toQueryString(q);
  try {
    const list = await f(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`);
    return list.map((item) => new Booking(item));
  } catch (_) {
    return [];
  }
}
async function bookedResourceList(q, resource_count) {
  try {
    let { data, next, total } = await b({
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
async function createBooking(data, q) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { utm_source: bookingUtmSource() }));
  return new Booking(await v(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`, withAppVersion(data)));
}
async function updateBooking(id, data, method = "patch") {
  return new Booking(await (method === "patch" ? te : ce)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`, withAppVersion(data)));
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
  return id_list.map((id) => !bookings.find((b2) => b2.asset_id === id && (!ignore || ignore !== b2.id)));
}
async function createBookingsForEvent(event, type, resources) {
  const bookings = (await queryBookings({
    type,
    period_start: getUnixTime(event.date),
    period_end: getUnixTime(addMinutes(event.date, event.duration))
  })).filter((_) => _.parent_id === event.id);
  await Promise.all(bookings.map((_) => removeBooking(_.id)));
  await Promise.all(event.linked_bookings.filter((_) => _.booking_type === type).map((_) => removeBooking(_.id)));
  const zones = event.system?.zones || unique(flatten(event.resources.map((_) => _.zones))) || [];
  const created_bookings = [];
  try {
    for (const item of resources) {
      const booking = bookings.find((_) => _.extension_data?.details?.id === item.id || _.asset_ids.find((id) => item.items?.find((i) => i.item_ids.includes(id))));
      const assigned_space = type === "catering-order" && item.system_id ? event.resources.find((_) => _.id === item.system_id || _.email === item.system_id) : void 0;
      const resource_id = assigned_space?.id || item.system_id || item.email || item.id;
      const resource_name = assigned_space?.display_name || assigned_space?.name || item.name;
      created_bookings.push(await createBooking(new Booking({
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
        approved: booking?.approved && !item._changed,
        rejected: booking?.rejected && !item._changed,
        extension_data: {
          parent_id: event.id,
          name: resource_name,
          location_id: assigned_space?.id || event.location,
          details: item
        },
        zones: assigned_space?.zones || zones
      }).toJSON(), { ical_uid: event.ical_uid, event_id: event.id }));
    }
  } catch (error) {
    await Promise.all(created_bookings.filter((booking) => !!booking.id).map((booking) => removeBooking(booking.id).catch(() => void 0)));
    throw error;
  }
}

// libs/events/src/lib/calendar.fn.ts
var CALENDAR_ENDPOINT = "/api/staff/v1/calendars";
async function queryCalendars() {
  const list = await f(CALENDAR_ENDPOINT);
  return list.map((c) => new Calendar(c));
}
async function queryCalendarAvailability(q) {
  const query = toQueryString(q);
  const list = await f(`${CALENDAR_ENDPOINT}/availability${query ? "?" + query : ""}`);
  return list.map((c) => new Calendar(c));
}
var calendarsToSpaces = (list, org) => list.filter((cal) => !!cal.resource).map((cal) => new Space(__spreadProps(__spreadValues({}, cal.resource), {
  level: org?.levelWithID(cal.resource.zones),
  availability: cal.availability
}))).filter((space) => space.bookable);
async function queryUserFreeBusy(q) {
  const query = toQueryString(q);
  return await f(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`);
}
async function querySpaceFreeBusy(q, org) {
  const query = toQueryString(q);
  const list = await f(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`);
  return calendarsToSpaces(list.map((c) => new Calendar(c)), org);
}

// libs/events/src/lib/events.fn.ts
var EVENTS_ENDPOINT = `/api/staff/v1/events`;
var APP_VERSION2 = VERSION.raw || VERSION.version || VERSION.hash;
function appName2() {
  return setting("app.name") || setting("app.short_name") || "PlaceOS";
}
function withAppVersion2(data) {
  return __spreadProps(__spreadValues({}, data), {
    extension_data: __spreadProps(__spreadValues({}, data.extension_data || {}), {
      app_name: appName2(),
      app_version: APP_VERSION2
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
  const item = await v(`${EVENTS_ENDPOINT}`, new CalendarEvent(withAppVersion2(data)).toJSON());
  return new CalendarEvent(item);
}
async function updateEvent(id, data, q = {}, method = "patch") {
  const query = toQueryString(q);
  const item = await (method === "patch" ? te : ce)(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, new CalendarEvent(withAppVersion2(data)).toJSON());
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
    const list = await v(`${EVENTS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, event.toJSON());
    return q.include_clash_time ? list : list;
  } catch (_) {
    return [];
  }
}

// libs/assets/src/lib/assets.fn.ts
function findOldestByName(list, name = "") {
  const match_name = name.trim().toLowerCase();
  return list.filter((_) => (_.name || "").trim().toLowerCase() === match_name).sort((a, b2) => (a.created_at || 0) - (b2.created_at || 0))[0];
}
function filter_hidden_items(response) {
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !item?.hidden)
  });
}
async function visible_category_ids() {
  const response = await ed({});
  return new Set(response.data.filter((item) => !item?.hidden).map((item) => item.id));
}
async function queryAssetCategories(query = {}) {
  if (query.hidden === true)
    return ed(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  return filter_hidden_items(await ed(rest));
}
async function queryAssetTypes(query = {}) {
  if (query.hidden === true)
    return Zl(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  const [response, visible_ids] = await Promise.all([
    Zl(rest),
    visible_category_ids()
  ]);
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !item?.hidden && visible_ids.has(item.category_id))
  });
}
async function queryAssets(query = {}) {
  if (query.hidden === true)
    return Fl(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  const [response, types] = await Promise.all([
    Fl(rest),
    queryAssetTypes(__spreadProps(__spreadValues({}, rest.zone_id ? { zone_id: rest.zone_id } : {}), {
      limit: 2e3
    }))
  ]);
  const visible_type_ids = new Set(types.data.map((item) => item.id));
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !item?.hidden && visible_type_ids.has(item.asset_type_id))
  });
}
function saveAssetCategory(category) {
  return category.id ? nd(category.id, category) : sd(category);
}
var _GROUPS_CACHE = /* @__PURE__ */ new Map();
var REMOVE_QUERY_KEYS = ["period_start", "period_end", "type", "rejected"];
async function queryAllAssetPages(query = {}) {
  let response = await Fl(__spreadProps(__spreadValues({}, query), {
    limit: query.limit || 500
  }));
  let total = response.total;
  const data = [...response.data];
  while (typeof response.next === "function") {
    const next = response.next();
    if (!next)
      break;
    response = await next;
    total = response.total;
    data.push(...response.data);
  }
  return { total, next: () => null, data };
}
async function queryAssetGroupsExtended(query = {}) {
  const cache_key = JSON.stringify({
    zones: query.zones || query.zone_id || "",
    category_id: query.category_id || "",
    q: query.q || "",
    type_id: query.type_id || ""
  });
  if (_GROUPS_CACHE.has(cache_key)) {
    return _GROUPS_CACHE.get(cache_key);
  }
  const q = __spreadValues({}, query);
  for (const key of REMOVE_QUERY_KEYS) {
    if (key in q)
      delete q[key];
  }
  if (q.zones && !q.zone_id)
    q.zone_id = q.zones;
  if (q.zones)
    delete q.zones;
  const [types, assets] = await Promise.all([
    Zl(q),
    queryAllAssetPages(q)
  ]);
  let groups = types.data.filter((item) => !item?.hidden);
  if (q.type_id)
    groups = groups.filter((item) => item.id === q.type_id);
  const visible_type_ids = new Set(groups.map((item) => item.id));
  const assets_by_type = /* @__PURE__ */ new Map();
  for (const asset of assets.data) {
    if (asset?.hidden || !visible_type_ids.has(asset.asset_type_id)) {
      continue;
    }
    const list2 = assets_by_type.get(asset.asset_type_id) || [];
    list2.push(asset);
    assets_by_type.set(asset.asset_type_id, list2);
  }
  const list = groups.map((group) => __spreadProps(__spreadValues({}, group), {
    assets: assets_by_type.get(group.id) || []
  }));
  _GROUPS_CACHE.set(cache_key, list);
  setTimeout(() => _GROUPS_CACHE.delete(cache_key), 5 * 60 * 1e3);
  return list;
}
function saveAssetType(product) {
  return product.id ? Vl(product.id, product) : Yl(product);
}
async function queryGroupAvailability(query, ignore = []) {
  const [products, bookings] = await Promise.all([
    queryAssetGroupsExtended(query),
    queryBookings(__spreadProps(__spreadValues({}, query), { type: "asset-request" }))
  ]);
  const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled");
  return products.map((product) => __spreadProps(__spreadValues({}, product), {
    assets: product.assets.filter((asset) => ignore?.includes(asset.id) || !active_bookings.find((booking) => !ignore.includes(booking.id) && (booking.asset_id === asset.id || booking.asset_ids?.includes(asset.id))))
  }));
}
function differenceBetweenAssetRequests(new_assets, old_assets) {
  if ((!new_assets || new_assets?.length <= 0) && old_assets?.length)
    return [];
  if (!old_assets)
    return [];
  const changed = [];
  for (const request of new_assets) {
    const match = old_assets.find((_) => _.id === request.id);
    if (!match || match.ref_id !== request.ref_id) {
      changed.push(request.id);
    }
  }
  return changed;
}
async function validateAssetRequestsForResource({ id, ical_uid, from_booking }, { date, duration, all_day, host, location_name, location_id, zones, reset_state }, new_assets = [], force_create = false) {
  const requests = await queryBookings({
    period_start: getUnixTime(date),
    period_end: getUnixTime(addMinutes(date, duration)),
    type: "asset-request",
    zones: zones.join(",")
  });
  const bookings = id && ical_uid ? await queryBookings({
    period_start: getUnixTime(startOfDay(date)),
    period_end: getUnixTime(endOfDay(date)),
    type: "asset-request",
    email: host,
    event_id: from_booking ? "" : id,
    booking_id: from_booking ? id : "",
    ical_uid
  }) : [];
  const booking_list = bookings.map((_) => [
    _.id,
    new AssetRequest(_.extension_data.request)
  ]);
  new_assets?.forEach((_) => _.conflict = false);
  let changed = force_create ? new_assets.map((_) => _.id) : differenceBetweenAssetRequests(new_assets, booking_list.map(([_, r]) => r));
  if (reset_state) {
    const has_state = bookings.filter((_) => _.approved || _.rejected);
    changed = unique([
      ...changed,
      ...has_state.map((_) => _.extension_data.request_id)
    ]);
  }
  const unchanged = booking_list.filter(([_, request]) => !changed.includes(request.id));
  const changed_requests = booking_list.filter(([_, { id: id2 }]) => changed.includes(id2));
  const changed_assets = new_assets.filter(({ id: id2 }) => changed.includes(id2));
  const filtered = requests.filter((req) => !req.rejected && (!bookings.find((b2) => b2.id === req.id) || unchanged.find(([id2]) => req.event_id === id2)));
  let used_ids = flatten(filtered.map((_) => _.asset_ids));
  for (const [_, request] of unchanged) {
    used_ids = [
      ...used_ids,
      ...flatten(request.items.map((_2) => _2.item_ids))
    ];
  }
  const available_groups = await queryGroupAvailability({
    period_start: getUnixTime(date),
    period_end: getUnixTime(addMinutes(date, duration)),
    type: "asset-request",
    zones: (zones || []).join(",")
  }, bookings.map((_) => _.id));
  const processed_requests = changed_assets.map((request) => {
    const asset_ids = flatten(request.items.map(({ id: id2, item_ids, quantity }) => {
      const selected_ids = item_ids || [];
      const assets = available_groups.find((_) => _.id === id2)?.assets;
      if (!assets)
        return selected_ids;
      const list = [];
      return new Array(quantity).fill(0).map((_, idx) => {
        const item = used_ids.includes(selected_ids[idx]) || list.includes(selected_ids[idx]) || !selected_ids[idx] ? assets?.find(({ id: id3 }) => {
          return !used_ids.includes(id3) && !list.includes(id3);
        })?.id : selected_ids[idx];
        if (!item) {
          request.conflict = true;
          throw "Unable to find available asset for request";
        }
        list.push(item);
        return item;
      });
    }));
    if (!asset_ids.length || asset_ids.some((id2) => !id2)) {
      request.conflict = true;
      throw "Unable to find available asset for request";
    }
    const booking = bookings.find((_) => _.asset_ids.find((id2) => request.items?.find((i) => i.item_ids?.includes(id2))));
    used_ids = [...used_ids, ...asset_ids];
    const asset_data = {
      type: "asset-request",
      booking_type: "asset-request",
      date,
      duration,
      all_day,
      description: location_name,
      user_email: host,
      asset_id: asset_ids[0],
      asset_ids,
      asset_name: request.items.map((_) => _.name).join(", "),
      title: request.items.map((_) => _.name).join(", "),
      approved: !reset_state && booking?.approved && !request._changed,
      rejected: !reset_state && booking?.rejected && !request._changed,
      extension_data: {
        parent_id: id,
        request_id: request.id,
        location_id,
        request: new AssetRequest(__spreadProps(__spreadValues({}, request), { event: null }))
      },
      zones: zones || []
    };
    if (from_booking)
      asset_data.parent_id = id;
    return () => createBooking(new Booking(asset_data), {
      ical_uid,
      event_id: from_booking ? "" : id
    });
  });
  return async () => {
    await Promise.all(changed_requests.map(([id2]) => removeBooking(id2)));
    await Promise.all(processed_requests.map((create) => create()));
  };
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
    const group = await Jl(group_id).catch(() => null);
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

// libs/assets/src/lib/asset.utilities.ts
var RULE_REQUESTS = {};
function getAssetRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return Promise.resolve([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = ic(zone_id, "assets_config").then((_) => _.details instanceof Array ? _.details : []).catch(() => []);
  return RULE_REQUESTS[zone_id];
}
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => item.name === rule.name || item.category?.name.includes(rule.name) || event.resources?.some((resource) => resource.zones?.includes(rule.name)) || event.space?.zones?.includes(rule.name) || rule.name === "*";
  const countMatches = (rule) => rule.rules.reduce((matches, condition) => {
    switch (condition[0]) {
      case "is_before":
        return matches + (isBefore(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "within_hours":
        return matches + (isAfter(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "after_hour":
        return matches + (isAfter(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "before_hour":
        return matches + (isBefore(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "min_length":
        return matches + (event.duration >= stringToMinutes(condition[1]) ? 1 : 0);
      case "max_length":
        return matches + (event.duration <= stringToMinutes(condition[1]) ? 1 : 0);
      case "visitor_type":
        return matches + (event.ext("visitor_type") === condition[1] ? 1 : 0);
      default:
        return matches + 1;
    }
  }, 0);
  for (const rule of rules) {
    if (isRuleMatch(rule)) {
      if (countMatches(rule) < rule.rules.length) {
        return false;
      }
    }
  }
  return true;
}

// libs/assets/src/lib/asset-state.service.ts
function assetOptionsMatch(a, b2) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b2)
  ]));
  return keys.every((key) => Object.is(a[key], b2[key]));
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
    const sorted_list = list.sort((a, b2) => a.name.localeCompare(b2.name));
    updateAssetGroupList(sorted_list);
    this._available_groups.set(sorted_list);
  }
  async _loadCategories() {
    if (this._category_list_request)
      return this._category_list_request;
    this._category_list_request = queryAssetCategories().then((categories) => {
      this._category_list.set(categories.data.sort((a, b2) => a.name.localeCompare(b2.name)).filter((c) => !c.hidden));
      return categories;
    }).finally(() => this._category_list_request = null);
    return this._category_list_request;
  }
  async _loadSettings(building_id) {
    const existing = this._settings_requests.get(building_id);
    const request = existing || ic(building_id, "assets-settings").then((metadata) => metadata.details || {}).catch(() => ({}));
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

// libs/components/src/lib/authenticated-image.pipe.ts
var MAX_CACHED_IMAGES = 64;
var MAX_FAILED_LOADS = 64;
var FAILED_LOAD_TTL = 30 * 1e3;
var LEGACY_CACHE_NAME = "PlaceOS.image-cache-v1";
var LEGACY_CACHE_KEYS = "PlaceOS.image-cache-keys-v1";
var IMAGE_STORE = /* @__PURE__ */ new Map();
var IMAGE_LOADS = /* @__PURE__ */ new Map();
var FAILED_LOADS = /* @__PURE__ */ new Map();
var _legacy_cache_removed = false;
function removeLegacyCache() {
  if (_legacy_cache_removed)
    return;
  _legacy_cache_removed = true;
  if (typeof caches !== "undefined") {
    void caches.delete(LEGACY_CACHE_NAME).catch(() => false);
  }
  if (typeof sessionStorage !== "undefined") {
    try {
      sessionStorage.removeItem(LEGACY_CACHE_KEYS);
    } catch {
    }
  }
}
function getCachedAuthenticatedImage(source) {
  const cached = IMAGE_STORE.get(source);
  if (!cached)
    return void 0;
  IMAGE_STORE.delete(source);
  IMAGE_STORE.set(source, cached);
  return cached;
}
function canLoadAuthenticatedImage(source) {
  return (FAILED_LOADS.get(source) || 0) <= Date.now();
}
function cacheObjectUrl(source, url) {
  const previous = IMAGE_STORE.get(source);
  if (previous && previous !== url)
    URL.revokeObjectURL(previous);
  IMAGE_STORE.delete(source);
  IMAGE_STORE.set(source, url);
  while (IMAGE_STORE.size > MAX_CACHED_IMAGES) {
    const oldest_source = IMAGE_STORE.keys().next().value;
    if (!oldest_source)
      break;
    const oldest_url = IMAGE_STORE.get(oldest_source);
    IMAGE_STORE.delete(oldest_source);
    if (oldest_url)
      URL.revokeObjectURL(oldest_url);
  }
  return url;
}
function rememberFailedLoad(source) {
  FAILED_LOADS.delete(source);
  FAILED_LOADS.set(source, Date.now() + FAILED_LOAD_TTL);
  while (FAILED_LOADS.size > MAX_FAILED_LOADS) {
    const oldest_source = FAILED_LOADS.keys().next().value;
    if (!oldest_source)
      break;
    FAILED_LOADS.delete(oldest_source);
  }
}
function setAuthCookie(cookie_path) {
  const tkn = J();
  document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Xe()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=${cookie_path};samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
}
function authHeaders() {
  const tkn = J();
  return tkn === "x-api-key" ? { "X-API-Key": Xe() } : { Authorization: `Bearer ${tkn}` };
}
function loadAuthenticatedImage(source, cookie_path) {
  return loadImage(source, () => {
    setAuthCookie(cookie_path);
    return fetch(source);
  });
}
function loadAuthenticatedImageWithHeader(source) {
  return loadImage(source, () => fetch(source, { headers: authHeaders() }));
}
async function loadImage(source, request) {
  removeLegacyCache();
  const cached = getCachedAuthenticatedImage(source);
  if (cached)
    return cached;
  const retry_after = FAILED_LOADS.get(source) || 0;
  if (retry_after > Date.now()) {
    throw new Error("Image load is in retry cooldown");
  }
  FAILED_LOADS.delete(source);
  const pending = IMAGE_LOADS.get(source);
  if (pending)
    return pending;
  const load = request().then(async (response) => {
    if (!response?.ok) {
      throw new Error(`Failed to fetch image: ${response?.status}`);
    }
    const url = URL.createObjectURL(await response.blob());
    return cacheObjectUrl(source, url);
  }).catch((error) => {
    rememberFailedLoad(source);
    throw error;
  }).finally(() => IMAGE_LOADS.delete(source));
  IMAGE_LOADS.set(source, load);
  return load;
}
var AuthenticatedImagePipe = class _AuthenticatedImagePipe {
  constructor() {
    this._change_detector = inject(ChangeDetectorRef);
    this._loading = /* @__PURE__ */ new Set();
  }
  transform(source) {
    if (!source || typeof source !== "string")
      return "";
    if (!source.includes("/api/engine/v2/uploads"))
      return source;
    const cached = getCachedAuthenticatedImage(source);
    if (cached)
      return cached;
    if (!Mt() || this._loading.has(source) || !canLoadAuthenticatedImage(source)) {
      return "";
    }
    this._loading.add(source);
    void loadAuthenticatedImage(source, "/api/engine/v2/uploads").catch((error) => console.info("Failed to load image:", source, error)).finally(() => {
      this._loading.delete(source);
      this._change_detector.markForCheck();
    });
    return "";
  }
  static {
    this.\u0275fac = function AuthenticatedImagePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthenticatedImagePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "authenticatedImage,authImage", type: _AuthenticatedImagePipe, pure: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImagePipe, [{
    type: Pipe,
    args: [{
      name: "authenticatedImage,authImage",
      pure: false
    }]
  }], null, null);
})();

// libs/assets/src/lib/locker-assets.fn.ts
var LOCKER_CATEGORY_NAME = "_LOCKERS_";
var LOCKER_BANK_TYPE_NAME = "_LOCKER_BANKS_";
var LOCKER_TYPE_NAME = "_LOCKERS_";
var _locker_bank_type_id = null;
var _locker_bank_type_id_promise = null;
var _locker_type_id = null;
var _locker_type_id_promise = null;
var _hidden_categories_promise = null;
var _types_for_category_promises = /* @__PURE__ */ new Map();
async function query_hidden_categories() {
  if (!_hidden_categories_promise) {
    _hidden_categories_promise = ed({
      hidden: true,
      limit: 500
    }).then((_) => _.data).catch(() => []);
  }
  return _hidden_categories_promise;
}
async function query_types_for_category(category_id) {
  if (!_types_for_category_promises.has(category_id)) {
    _types_for_category_promises.set(category_id, Zl({ category_id, limit: 500 }).then((_) => _.data).catch(() => []));
  }
  return _types_for_category_promises.get(category_id);
}
async function ensure_hidden_category(name) {
  let category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  _hidden_categories_promise = null;
  category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  const created = await saveAssetCategory({
    name,
    hidden: true
  });
  _hidden_categories_promise = null;
  return created;
}
async function ensure_type(category_id, name) {
  let type = findOldestByName(await query_types_for_category(category_id), name);
  if (type)
    return type;
  const created = await saveAssetType({
    name,
    brand: "PlaceOS",
    category_id
  });
  _types_for_category_promises.delete(category_id);
  return created;
}
async function bootstrap_locker_type(type_name) {
  const category = await ensure_hidden_category(LOCKER_CATEGORY_NAME);
  const type = await ensure_type(category.id, type_name);
  return type.id;
}
function resolveLockerBankTypeId() {
  if (_locker_bank_type_id)
    return Promise.resolve(_locker_bank_type_id);
  if (!_locker_bank_type_id_promise) {
    _locker_bank_type_id_promise = bootstrap_locker_type(LOCKER_BANK_TYPE_NAME).then((id) => {
      _locker_bank_type_id = id;
      return id;
    });
  }
  return _locker_bank_type_id_promise;
}
function resolveLockerTypeId() {
  if (_locker_type_id)
    return Promise.resolve(_locker_type_id);
  if (!_locker_type_id_promise) {
    _locker_type_id_promise = bootstrap_locker_type(LOCKER_TYPE_NAME).then((id) => {
      _locker_type_id = id;
      return id;
    });
  }
  return _locker_type_id_promise;
}
async function queryLockerBankAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  const type_id = await resolveLockerBankTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => Fl({ zone_id, type_id, limit: 500 }).then((_) => _.data)));
  return flatten(results);
}
async function queryLockerAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  const type_id = await resolveLockerTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => Fl({ zone_id, type_id, limit: 500 }).then((_) => _.data)));
  return flatten(results);
}

// libs/components/src/lib/map-viewer.class.ts
var MAX_ZOOM = 10;
var MIN_ZOOM = 1;
var VIEW_PADDING = 0.05;
var DESKTOP_TEXTURE_MEGAPIXELS = 16;
var MOBILE_TEXTURE_MEGAPIXELS = 4;
var FIXED_TEXTURE_CONTAINER_MULTIPLIER = 2;
var MAX_TEXTURE_DIMENSION = 8192;
function isMobileDevice() {
  if (typeof window === "undefined" || !window.matchMedia)
    return false;
  const coarse_pointer = window.matchMedia("(pointer: coarse)").matches;
  const small_viewport = window.matchMedia("(max-width: 1024px)").matches;
  return coarse_pointer && small_viewport;
}
function cleanCssSelector(selector) {
  const escaped = selector.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g, "\\$&");
  return escaped.split(" ").map((part) => part.replace(/^\\/, "")).join(" ");
}
function getSvgDimensions(svg_element) {
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  const view_box = svg_element.getAttribute("viewBox");
  if (view_box) {
    const parts = view_box.split(/[\s,]+/).map(parseFloat);
    if (parts.length >= 4) {
      x = parts[0] || 0;
      y = parts[1] || 0;
      width = parts[2];
      height = parts[3];
    }
  }
  if (!width || !height) {
    const width_attr = svg_element.getAttribute("width");
    const height_attr = svg_element.getAttribute("height");
    width = width_attr ? parseFloat(width_attr) : 0;
    height = height_attr ? parseFloat(height_attr) : 0;
  }
  if (!width || !height) {
    try {
      const bbox = svg_element.getBBox();
      x = bbox.x;
      y = bbox.y;
      width = bbox.width;
      height = bbox.height;
    } catch {
    }
  }
  return { x, y, width: width || 1, height: height || 1 };
}
function getElementBoundsInSvgSpace(element, svg_inverse_ctm) {
  const bbox = element.getBBox();
  const ctm = svg_inverse_ctm && element.getScreenCTM?.();
  if (!ctm)
    return bbox;
  const matrix = svg_inverse_ctm.multiply(ctm);
  const corners = [
    { x: bbox.x, y: bbox.y },
    { x: bbox.x + bbox.width, y: bbox.y },
    { x: bbox.x, y: bbox.y + bbox.height },
    { x: bbox.x + bbox.width, y: bbox.y + bbox.height }
  ].map((p) => ({
    x: matrix.a * p.x + matrix.c * p.y + matrix.e,
    y: matrix.b * p.x + matrix.d * p.y + matrix.f
  }));
  const min_x = Math.min(...corners.map((p) => p.x));
  const min_y = Math.min(...corners.map((p) => p.y));
  return {
    x: min_x,
    y: min_y,
    width: Math.max(...corners.map((p) => p.x)) - min_x,
    height: Math.max(...corners.map((p) => p.y)) - min_y
  };
}
function generateElementBounds(data) {
  const bounds_map = /* @__PURE__ */ new Map();
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.visibility = "hidden";
  container.style.pointerEvents = "none";
  container.style.left = "-9999px";
  container.style.top = "-9999px";
  container.innerHTML = data;
  document.body.appendChild(container);
  const svg_element = container.querySelector("svg");
  if (!svg_element) {
    document.body.removeChild(container);
    return { bounds: bounds_map, aspect_ratio: 1 };
  }
  const { x: svg_x, y: svg_y, width: svg_width, height: svg_height } = getSvgDimensions(svg_element);
  const aspect_ratio = svg_width / svg_height;
  const svg_ctm = svg_element.getScreenCTM?.();
  const svg_inverse_ctm = svg_ctm ? svg_ctm.inverse() : null;
  const elements_with_id = svg_element.querySelectorAll("[id]");
  elements_with_id.forEach((element) => {
    const id = element.getAttribute("id");
    if (!id)
      return;
    if (typeof element.getBBox === "function") {
      try {
        const bbox = getElementBoundsInSvgSpace(element, svg_inverse_ctm);
        bounds_map.set(id, {
          x: (bbox.x - svg_x) / svg_width,
          y: (bbox.y - svg_y) / svg_height,
          w: bbox.width / svg_width,
          h: bbox.height / svg_height
        });
      } catch {
      }
    }
  });
  document.body.removeChild(container);
  return { bounds: bounds_map, aspect_ratio };
}
var MapStore = class {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  get(path) {
    if (!this.store.has(path)) {
      const details = this._load(path);
      details.catch(() => this.store.delete(path));
      this.store.set(path, details);
    }
    return this.store.get(path);
  }
  async _load(path) {
    while (!Mt()) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    const options = {};
    const tkn = J();
    const is_same_origin = new URL(path, location.origin).origin === location.origin;
    if (tkn && is_same_origin) {
      if (!isMobileSafari()) {
        options.headers = tkn === "x-api-key" ? { "x-api-key": Xe() } : { Authorization: `Bearer ${tkn}` };
      } else {
        setAuthCookie("/");
      }
    }
    const response = await fetch(path, options);
    if (!response.ok)
      throw new Error("Failed to load map");
    const data = await response.text();
    const { bounds, aspect_ratio } = generateElementBounds(data);
    return { raw_data: data, element_bounds: bounds, aspect_ratio };
  }
};
var STORE = new MapStore();
function getMapDetails(url) {
  return STORE.get(url);
}
var MapViewer = class {
  constructor(el) {
    this.map_image = null;
    this.styles_string = "";
    this.center = { x: 0.5, y: 0.5 };
    this.zoom = 1;
    this.fixed_resolution_megapixels = 0;
    this.disable_zoom = false;
    this.disable_pan = false;
    this.onViewChange = null;
    this.debug = false;
    this.debug_info = {
      /** Pointer position in normalised map coordinates */
      pointer: null,
      /** ID of the smallest map element under the pointer */
      hover_id: "",
      /** ID of the map element explicitly highlighted from debug controls */
      highlight_id: "",
      /** Duration of the last map draw in milliseconds */
      last_draw_ms: 0,
      /** Number of map draws over the last second */
      draws_last_second: 0
    };
    this._map_path = "";
    this._image_generation = 0;
    this._texture_width = 0;
    this._texture_height = 0;
    this._image_frame_id = null;
    this._draw_frame_id = null;
    this._notify_frame_id = null;
    this._debug_draw_count = 0;
    this._debug_count_start = 0;
    this._events = /* @__PURE__ */ new Map();
    this._resize_observer = null;
    this._pointers = /* @__PURE__ */ new Map();
    this._is_panning = false;
    this._pinch_distance = null;
    this._pan_start_time = null;
    this._pan_exceeded_threshold = false;
    this._overlay_instances = [];
    this._actions = [];
    this._action_event_handlers = /* @__PURE__ */ new Map();
    this._action_pointerdown_pos = null;
    this._action_last_triggered = /* @__PURE__ */ new Map();
    this.container = el;
    this.id = `m_view-${randomString(8, "0123456789ABCDEF")}`;
    this.container.innerHTML = "";
    this.container.style.overflow = "hidden";
    this.container.style.touchAction = "none";
    this.canvas = document.createElement("canvas");
    this.canvas.style.cssText = "position: absolute; inset: 0; pointer-events: none;";
    this._ctx = this.canvas.getContext("2d");
    this.container.appendChild(this.canvas);
    this.overlays = document.createElement("div");
    this.overlays.id = `${this.id}-overlays`;
    this.overlays.style.cssText = "position: absolute; inset: 0; z-index: 0; pointer-events: none;";
    this.container.appendChild(this.overlays);
    this._resize_observer = new ResizeObserver(() => this._onResize());
    this._resize_observer.observe(this.container);
    this._events.set("wheel", (e) => this._onWheel(e));
    this.container.addEventListener("wheel", this._events.get("wheel"), {
      passive: false
    });
    this._events.set("pointerdown", (e) => this._onPointerDown(e));
    this._events.set("pointermove", (e) => this._onPointerMove(e));
    this._events.set("pointerup", (e) => this._onPointerUp(e));
    this.container.addEventListener("pointerdown", this._events.get("pointerdown"));
    window.addEventListener("pointermove", this._events.get("pointermove"));
    window.addEventListener("pointerup", this._events.get("pointerup"));
    window.addEventListener("pointercancel", this._events.get("pointerup"));
  }
  async setMap(path) {
    this._map_path = path;
    const map = await STORE.get(path);
    if (this._map_path !== path)
      return;
    this.map = map;
    this._renderMapImage();
  }
  setCenter(point) {
    const center = this._clampCenter(point);
    if (center.x === this.center.x && center.y === this.center.y)
      return;
    this.center = center;
    this._renderMap();
  }
  setZoom(new_zoom) {
    new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
    if (new_zoom === this.zoom)
      return;
    this.zoom = new_zoom;
    this._renderMap();
  }
  /**
   * Override the texture budget for fixed (zoom-disabled) maps, in
   * megapixels. Pass 0 to restore the default of twice the container pixels.
   */
  setFixedResolution(megapixels) {
    const value = megapixels > 0 ? megapixels : 0;
    if (this.fixed_resolution_megapixels === value)
      return;
    this.fixed_resolution_megapixels = value;
    if (this.disable_zoom)
      this._renderMapImage();
  }
  setOptions(options) {
    const was_zoom_disabled = this.disable_zoom;
    this.disable_zoom = !!options?.disable_zoom;
    this.disable_pan = !!options?.disable_pan;
    if (was_zoom_disabled !== this.disable_zoom)
      this._renderMapImage();
  }
  /** Number of overlays currently attached to the map */
  get overlay_count() {
    return this._overlay_instances.length;
  }
  /** Human-readable description of the current texture sizing mode, for debug */
  get texture_mode() {
    if (this.disable_zoom) {
      return this.fixed_resolution_megapixels ? `fixed ${this.fixed_resolution_megapixels}MP` : `fixed ${FIXED_TEXTURE_CONTAINER_MULTIPLIER}\xD7 container`;
    }
    return isMobileDevice() ? `mobile ${MOBILE_TEXTURE_MEGAPIXELS}MP` : `desktop ${DESKTOP_TEXTURE_MEGAPIXELS}MP`;
  }
  /** Toggle rendering of debugging info over the map */
  setDebug(enabled) {
    if (this.debug === enabled)
      return;
    this.debug = enabled;
    if (enabled) {
      const move = (e) => {
        this.debug_info.pointer = this._eventToMap(e);
        this.debug_info.hover_id = this._elementAt(this.debug_info.pointer);
        this._renderMap();
      };
      const leave = () => {
        this.debug_info.pointer = null;
        this.debug_info.hover_id = "";
        this._renderMap();
      };
      const click = (e) => {
        const point = this._eventToMap(e);
        console.log(`[MAP][DEBUG] Click at { x: ${point.x.toFixed(4)}, y: ${point.y.toFixed(4)} } on "${this._elementAt(point) || "no element"}"`);
      };
      this._events.set("debug_move", move);
      this._events.set("debug_leave", leave);
      this._events.set("debug_click", click);
      this.container.addEventListener("pointermove", move);
      this.container.addEventListener("pointerleave", leave);
      this.container.addEventListener("click", click);
    } else {
      for (const name of ["debug_move", "debug_leave", "debug_click"]) {
        const handler = this._events.get(name);
        if (!handler)
          continue;
        const event_name = name === "debug_move" ? "pointermove" : name === "debug_leave" ? "pointerleave" : "click";
        this.container.removeEventListener(event_name, handler);
        this._events.delete(name);
      }
      this.debug_info.pointer = null;
      this.debug_info.hover_id = "";
      this.debug_info.highlight_id = "";
    }
    this._applyOverlayOutlines();
    this._renderMap();
  }
  /** Highlight a map element while debug mode is active */
  setDebugHighlight(ref) {
    if (this.debug_info.highlight_id === ref)
      return;
    this.debug_info.highlight_id = ref;
    if (this.debug)
      this._renderMap();
  }
  /** Center the view on the map element with the given ID */
  focusOn(ref) {
    const bounds = this.map?.element_bounds.get(ref);
    if (!bounds)
      return;
    this.setCenter({
      x: bounds.x + bounds.w / 2,
      y: bounds.y + bounds.h / 2
    });
    this._notifyViewChange();
  }
  setOverlays(overlays) {
    for (const instance of this._overlay_instances) {
      instance.element.remove();
    }
    this._overlay_instances = [];
    for (const overlay of overlays) {
      const element = document.createElement("div");
      element.style.cssText = "position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;";
      if (overlay.z_index != null) {
        element.style.zIndex = `${overlay.z_index}`;
      }
      if (overlay.hover) {
        element.classList.add("map-overlay-hover");
      }
      if (typeof overlay.contents === "string") {
        element.innerHTML = overlay.contents;
      } else {
        element.appendChild(overlay.contents);
      }
      this.overlays.appendChild(element);
      this._overlay_instances.push({ overlay, element });
    }
    this._applyOverlayOutlines();
    this._updateOverlayPositions();
  }
  /** Outline overlay elements while debug mode is active */
  _applyOverlayOutlines() {
    for (const { element } of this._overlay_instances) {
      element.style.outline = this.debug ? "1px dashed #f0f" : "";
    }
  }
  /** ID of the smallest map element containing the given point */
  _elementAt(point) {
    let best = "";
    let best_area = Number.POSITIVE_INFINITY;
    for (const [id, bounds] of this.map?.element_bounds || []) {
      if (point.x < bounds.x || point.x > bounds.x + bounds.w || point.y < bounds.y || point.y > bounds.y + bounds.h) {
        continue;
      }
      const area = bounds.w * bounds.h;
      if (area < best_area) {
        best = id;
        best_area = area;
      }
    }
    return best;
  }
  setActions(actions) {
    for (const [event_name, handler] of this._action_event_handlers) {
      this.container.removeEventListener(event_name, handler);
    }
    this._action_event_handlers.clear();
    this._action_last_triggered.clear();
    this._actions = actions;
    const event_names = new Set(actions.flatMap((_) => _.events));
    for (const event_name of event_names) {
      const handler = (e) => this._handleActionEvent(event_name, e);
      this._action_event_handlers.set(event_name, handler);
      this.container.addEventListener(event_name, handler);
    }
    if (!this._events.has("action_pointerdown")) {
      const handler = (e) => {
        this._action_pointerdown_pos = { x: e.clientX, y: e.clientY };
      };
      this._events.set("action_pointerdown", handler);
      this.container.addEventListener("pointerdown", handler);
    }
  }
  /** Apply CSS to the map's SVG elements. Mapping of CSS selector to style declaration */
  setStyles(styles) {
    let style_content = "";
    for (const [selector, css_text] of Object.entries(styles)) {
      if (css_text) {
        style_content += `svg ${cleanCssSelector(selector)} { ${css_text} }
`;
      }
    }
    if (style_content !== this.styles_string) {
      this.styles_string = style_content;
      this._renderMapImage();
    }
  }
  destroy() {
    this.setDebug(false);
    this._resize_observer?.disconnect();
    this._resize_observer = null;
    this.container.removeEventListener("wheel", this._events.get("wheel"));
    this.container.removeEventListener("pointerdown", this._events.get("pointerdown"));
    window.removeEventListener("pointermove", this._events.get("pointermove"));
    window.removeEventListener("pointerup", this._events.get("pointerup"));
    window.removeEventListener("pointercancel", this._events.get("pointerup"));
    for (const [event_name, handler] of this._action_event_handlers) {
      this.container.removeEventListener(event_name, handler);
    }
    this._action_event_handlers.clear();
    this._action_last_triggered.clear();
    this._actions = [];
    if (this._events.has("action_pointerdown")) {
      const handler = this._events.get("action_pointerdown");
      this.container.removeEventListener("pointerdown", handler);
      this._events.delete("action_pointerdown");
    }
    this._action_pointerdown_pos = null;
    this._image_generation++;
    this._map_path = "";
    if (this._image_frame_id !== null) {
      cancelAnimationFrame(this._image_frame_id);
      this._image_frame_id = null;
    }
    if (this._draw_frame_id !== null) {
      cancelAnimationFrame(this._draw_frame_id);
      this._draw_frame_id = null;
    }
    if (this._notify_frame_id !== null) {
      cancelAnimationFrame(this._notify_frame_id);
      this._notify_frame_id = null;
    }
    for (const instance of this._overlay_instances) {
      instance.element.remove();
    }
    this._overlay_instances = [];
    this.map_image = null;
    this.container.innerHTML = "";
  }
  /**
   * Pixels per normalised map unit on each axis at the given zoom level.
   * At zoom 1 the whole map image fits within the view.
   */
  _viewScale(zoom = this.zoom) {
    const aspect = this.map?.aspect_ratio || 1;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const fit_height = Math.min(height, width / aspect) * (1 - VIEW_PADDING * 2) * zoom;
    return { x: fit_height * aspect, y: fit_height };
  }
  /** Convert a pointer event position to normalised map coordinates (0-1) */
  _eventToMap(e, rect = this.container.getBoundingClientRect()) {
    const scale = this._viewScale();
    return {
      x: (e.clientX - rect.left - rect.width / 2) / scale.x + this.center.x,
      y: (e.clientY - rect.top - rect.height / 2) / scale.y + this.center.y
    };
  }
  _clampCenter(point) {
    return {
      x: Math.max(0, Math.min(1, point.x)),
      y: Math.max(0, Math.min(1, point.y))
    };
  }
  /** Zoom about a fixed screen position so the point under it stays in place */
  _zoomAboutPoint(new_zoom, position) {
    const old_zoom = this.zoom;
    new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
    if (new_zoom === old_zoom)
      return;
    const rect = this.container.getBoundingClientRect();
    const fixed_point = this._eventToMap({ clientX: position.x, clientY: position.y }, rect);
    const new_scale = this._viewScale(new_zoom);
    const new_center = {
      x: fixed_point.x - (position.x - rect.left - rect.width / 2) / new_scale.x,
      y: fixed_point.y - (position.y - rect.top - rect.height / 2) / new_scale.y
    };
    this.zoom = new_zoom;
    this.center = this._clampCenter(new_center);
    this._renderMap();
    this._notifyViewChange();
  }
  _onWheel(e) {
    e.preventDefault();
    if (this.disable_zoom || !this.map_image)
      return;
    const zoom_delta = e.deltaY > 0 ? 0.97 : 1.03;
    this._zoomAboutPoint(this.zoom * zoom_delta, {
      x: e.clientX,
      y: e.clientY
    });
  }
  _onPointerDown(e) {
    if (!this.map_image)
      return;
    if (e.button !== 0)
      return;
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this._pointers.size === 2) {
      this._is_panning = false;
      const [p1, p2] = [...this._pointers.values()];
      this._pinch_distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      return;
    }
    if (this.disable_pan)
      return;
    this._is_panning = true;
    this._pan_start_time = Date.now();
    this._pan_exceeded_threshold = false;
    this.container.style.cursor = "grabbing";
  }
  _onPointerMove(e) {
    const last = this._pointers.get(e.pointerId);
    if (!last)
      return;
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this._pointers.size === 2 && this._pinch_distance) {
      if (this.disable_zoom)
        return;
      const [p1, p2] = [...this._pointers.values()];
      const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      if (distance > 0) {
        this._zoomAboutPoint(this.zoom * (distance / this._pinch_distance), { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 });
        this._pinch_distance = distance;
      }
      return;
    }
    if (!this._is_panning)
      return;
    if (this._pan_start_time && !this._pan_exceeded_threshold && Date.now() - this._pan_start_time > 200) {
      this._pan_exceeded_threshold = true;
    }
    const scale = this._viewScale();
    this.center = this._clampCenter({
      x: this.center.x - (e.clientX - last.x) / scale.x,
      y: this.center.y - (e.clientY - last.y) / scale.y
    });
    this._renderMap();
    this._notifyViewChange();
  }
  _onPointerUp(e) {
    this._pointers.delete(e.pointerId);
    if (this._pointers.size < 2) {
      this._pinch_distance = null;
    }
    if (this._is_panning && this._pointers.size === 0) {
      this._is_panning = false;
      this.container.style.cursor = "";
    }
  }
  _onResize() {
    this._renderMap();
    if (this.disable_zoom && !this.fixed_resolution_megapixels) {
      const { width, height } = this._textureDimensions();
      if (width !== this._texture_width || height !== this._texture_height) {
        this._renderMapImage();
      }
    }
  }
  /**
   * Total texture pixel budget for the current map. Zoomable maps use a
   * fixed megapixel budget (reduced on mobile) so the map stays sharp when
   * zoomed in. Fixed maps never scale up, so they only need enough pixels
   * to cover the container, defaulting to twice the container's pixel count.
   */
  _targetTexturePixels() {
    if (this.disable_zoom) {
      if (this.fixed_resolution_megapixels > 0) {
        return this.fixed_resolution_megapixels * 1e6;
      }
      const container_pixels = (this.container.clientWidth || 1) * (this.container.clientHeight || 1);
      return container_pixels * FIXED_TEXTURE_CONTAINER_MULTIPLIER;
    }
    const megapixels = isMobileDevice() ? MOBILE_TEXTURE_MEGAPIXELS : DESKTOP_TEXTURE_MEGAPIXELS;
    return megapixels * 1e6;
  }
  /**
   * Texture dimensions matching the SVG's aspect ratio with a total area of
   * `_targetTexturePixels()`. Each side is clamped to the maximum canvas
   * dimension, so very wide or tall maps render slightly below the budget.
   */
  _textureDimensions() {
    const aspect = this.map?.aspect_ratio || 1;
    const target_pixels = this._targetTexturePixels();
    const height = Math.sqrt(target_pixels / aspect);
    const width = height * aspect;
    return {
      width: Math.max(1, Math.min(MAX_TEXTURE_DIMENSION, Math.round(width))),
      height: Math.max(1, Math.min(MAX_TEXTURE_DIMENSION, Math.round(height)))
    };
  }
  _renderMapImage() {
    if (this._image_frame_id !== null) {
      cancelAnimationFrame(this._image_frame_id);
    }
    this._image_frame_id = requestAnimationFrame(() => {
      this._image_frame_id = null;
      this._doRenderMapImage();
    });
  }
  _doRenderMapImage() {
    if (!this.map?.raw_data)
      return;
    const generation = ++this._image_generation;
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.map.raw_data, "image/svg+xml");
    const svg_element = doc.querySelector("svg");
    if (!svg_element)
      return;
    const { width, height } = this._textureDimensions();
    this._texture_width = width;
    this._texture_height = height;
    if (!svg_element.getAttribute("viewBox")) {
      const attr_width = parseFloat(svg_element.getAttribute("width") || "");
      const attr_height = parseFloat(svg_element.getAttribute("height") || "");
      if (attr_width > 0 && attr_height > 0) {
        svg_element.setAttribute("viewBox", `0 0 ${attr_width} ${attr_height}`);
      }
    }
    if (svg_element.getAttribute("viewBox")) {
      svg_element.setAttribute("width", `${width}`);
      svg_element.setAttribute("height", `${height}`);
    }
    if (this.styles_string) {
      const style_element = doc.createElementNS("http://www.w3.org/2000/svg", "style");
      style_element.textContent = this.styles_string;
      svg_element.appendChild(style_element);
    }
    const serializer = new XMLSerializer();
    const svg_string = serializer.serializeToString(svg_element);
    const svg_blob = new Blob([svg_string], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg_blob);
    const svg_image = new Image();
    svg_image.onload = () => {
      URL.revokeObjectURL(url);
      if (generation !== this._image_generation)
        return;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return;
      }
      ctx.drawImage(svg_image, 0, 0, width, height);
      this.map_image = canvas;
      this._renderMap();
    };
    svg_image.onerror = () => {
      URL.revokeObjectURL(url);
      console.error("Failed to load map image");
    };
    svg_image.src = url;
  }
  _renderMap() {
    if (this._draw_frame_id !== null)
      return;
    this._draw_frame_id = requestAnimationFrame(() => {
      this._draw_frame_id = null;
      this._drawMap();
    });
  }
  _drawMap() {
    if (!this.map_image)
      return;
    const draw_start = this.debug ? performance.now() : 0;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const dpr = window.devicePixelRatio || 1;
    if (this.canvas.width !== Math.round(width * dpr) || this.canvas.height !== Math.round(height * dpr)) {
      this.canvas.width = Math.round(width * dpr);
      this.canvas.height = Math.round(height * dpr);
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
    }
    const scale = this._viewScale();
    const view_left = this.center.x - width / 2 / scale.x;
    const view_top = this.center.y - height / 2 / scale.y;
    const sx0 = Math.max(0, view_left);
    const sy0 = Math.max(0, view_top);
    const sx1 = Math.min(1, view_left + width / scale.x);
    const sy1 = Math.min(1, view_top + height / scale.y);
    this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._ctx.clearRect(0, 0, width, height);
    if (sx1 > sx0 && sy1 > sy0) {
      this._ctx.imageSmoothingEnabled = true;
      this._ctx.imageSmoothingQuality = "high";
      const img_w = this.map_image.width;
      const img_h = this.map_image.height;
      this._ctx.drawImage(this.map_image, sx0 * img_w, sy0 * img_h, (sx1 - sx0) * img_w, (sy1 - sy0) * img_h, (sx0 - view_left) * scale.x, (sy0 - view_top) * scale.y, (sx1 - sx0) * scale.x, (sy1 - sy0) * scale.y);
    }
    if (this.debug) {
      this._drawDebugInfo(scale, view_left, view_top);
      const now = performance.now();
      this.debug_info.last_draw_ms = now - draw_start;
      this._debug_draw_count++;
      if (now - this._debug_count_start >= 1e3) {
        this.debug_info.draws_last_second = this._debug_draw_count;
        this._debug_draw_count = 0;
        this._debug_count_start = now;
      }
    }
    this._updateOverlayPositions();
  }
  /** Draw element bounds, map border and view crosshair over the map */
  _drawDebugInfo(scale, view_left, view_top) {
    if (!this.map)
      return;
    const ctx = this._ctx;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const toScreenX = (x) => (x - view_left) * scale.x;
    const toScreenY = (y) => (y - view_top) * scale.y;
    ctx.strokeStyle = "#f0f";
    ctx.lineWidth = 2;
    ctx.strokeRect(toScreenX(0), toScreenY(0), scale.x, scale.y);
    ctx.strokeStyle = "rgba(0, 200, 255, 0.6)";
    ctx.lineWidth = 1;
    for (const [, bounds] of this.map.element_bounds) {
      const x = toScreenX(bounds.x);
      const y = toScreenY(bounds.y);
      const w = bounds.w * scale.x;
      const h = bounds.h * scale.y;
      if (x + w < 0 || y + h < 0 || x > width || y > height)
        continue;
      ctx.strokeRect(x, y, w, h);
    }
    const highlight_id = this.debug_info.highlight_id || this.debug_info.hover_id;
    const hover_bounds = highlight_id ? this.map.element_bounds.get(highlight_id) : null;
    if (hover_bounds) {
      const x = toScreenX(hover_bounds.x);
      const y = toScreenY(hover_bounds.y);
      ctx.fillStyle = "rgba(255, 0, 255, 0.25)";
      ctx.fillRect(x, y, hover_bounds.w * scale.x, hover_bounds.h * scale.y);
      const label = `#${highlight_id}`;
      ctx.font = "12px monospace";
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(x, y - 16, ctx.measureText(label).width + 8, 16);
      ctx.fillStyle = "#fff";
      ctx.fillText(label, x + 4, y - 4);
    }
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 8, height / 2);
    ctx.lineTo(width / 2 + 8, height / 2);
    ctx.moveTo(width / 2, height / 2 - 8);
    ctx.lineTo(width / 2, height / 2 + 8);
    ctx.stroke();
  }
  _updateOverlayPositions() {
    if (!this.map?.element_bounds)
      return;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const scale = this._viewScale();
    const mapToScreen = (point) => ({
      x: (point.x - this.center.x) * scale.x + width / 2,
      y: (point.y - this.center.y) * scale.y + height / 2
    });
    const setDisplay = (instance, value) => {
      if (instance.last_display === value)
        return;
      instance.last_display = value;
      instance.element.style.display = value;
    };
    const setTransform = (instance, value) => {
      if (instance.last_transform === value)
        return;
      instance.last_transform = value;
      instance.element.style.transform = value;
    };
    const setSize = (instance, w, h) => {
      const size = `${w} ${h}`;
      if (instance.last_size === size)
        return;
      instance.last_size = size;
      instance.element.style.width = w;
      instance.element.style.height = h;
    };
    for (const instance of this._overlay_instances) {
      const { overlay } = instance;
      if (overlay.min_zoom && this.zoom < overlay.min_zoom) {
        setDisplay(instance, "none");
        continue;
      }
      let bounds;
      if (typeof overlay.ref === "string") {
        bounds = this.map.element_bounds.get(overlay.ref);
        if (!bounds) {
          setDisplay(instance, "none");
          continue;
        }
      } else {
        bounds = __spreadValues({ w: 0, h: 0 }, overlay.ref);
      }
      setDisplay(instance, "");
      if (overlay.type === "box" && bounds.w > 0 && bounds.h > 0) {
        const top_left = mapToScreen({ x: bounds.x, y: bounds.y });
        setTransform(instance, `translate(${top_left.x}px, ${top_left.y}px)`);
        setSize(instance, `${bounds.w * scale.x}px`, `${bounds.h * scale.y}px`);
      } else {
        const screen_pos = mapToScreen({
          x: bounds.x + bounds.w / 2,
          y: bounds.y + bounds.h / 2
        });
        setSize(instance, "", "");
        setTransform(instance, overlay.scale_with_zoom ? `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%) scale(${this.zoom})` : `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%)`);
      }
    }
  }
  /**
   * Handle action events (click, pointer events, etc.) on the map.
   * Only the best matching action is triggered, where the best match is the
   * highest priority action with the smallest map element under the event.
   */
  _handleActionEvent(event_name, e) {
    if (!this.map_image || !this.map?.element_bounds)
      return;
    if (this._pan_exceeded_threshold)
      return;
    if (event_name === "click" && this._action_pointerdown_pos) {
      const dx = e.clientX - this._action_pointerdown_pos.x;
      const dy = e.clientY - this._action_pointerdown_pos.y;
      if (Math.hypot(dx, dy) > 5)
        return;
    }
    const norm = this._eventToMap(e);
    if (norm.x < 0 || norm.x > 1 || norm.y < 0 || norm.y > 1)
      return;
    let best = null;
    let best_area = Number.POSITIVE_INFINITY;
    for (const action of this._actions) {
      if (!action.events.includes(event_name))
        continue;
      if (action.ref === "*") {
        if (!best)
          best = action;
        continue;
      }
      const bounds = this.map.element_bounds.get(action.ref);
      if (!bounds)
        continue;
      if (norm.x < bounds.x || norm.x > bounds.x + bounds.w || norm.y < bounds.y || norm.y > bounds.y + bounds.h) {
        continue;
      }
      const area = bounds.w * bounds.h;
      if (!best || best.ref === "*" || (action.priority || 0) > (best.priority || 0) || (action.priority || 0) === (best.priority || 0) && area < best_area) {
        best = action;
        best_area = area;
      }
    }
    if (!best)
      return;
    const now = Date.now();
    const debounce_key = `${best.ref}:${event_name}`;
    const last_triggered = this._action_last_triggered.get(debounce_key) || 0;
    if (now - last_triggered < 300)
      return;
    this._action_last_triggered.set(debounce_key, now);
    best.callback(norm);
  }
  /**
   * Notify listeners of view changes from user interaction. Notifications
   * are coalesced to one per animation frame as pointer events can fire
   * more often than the display refreshes and listeners may be expensive
   */
  _notifyViewChange() {
    if (!this.onViewChange || this._notify_frame_id !== null)
      return;
    this._notify_frame_id = requestAnimationFrame(() => {
      this._notify_frame_id = null;
      this.onViewChange?.({
        zoom: this.zoom,
        center: __spreadValues({}, this.center)
      });
    });
  }
};

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
  const requires_manual_approval = !!booking?.extension_data?.requires_manual_approval;
  if (booking?.approved !== false)
    return "pending";
  if (requires_manual_approval)
    return "approval_required";
  if (booking.process_state === "wait_list")
    return "waitlist";
  return "pending";
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
function setBookingAsset(model, resource) {
  if (!resource) {
    model.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: "" }));
    return;
  }
  model.update((m) => __spreadProps(__spreadValues({}, m), {
    asset_id: resource.id,
    asset_name: resource.name,
    name: resource.display_name || resource.name || resource.id,
    map_id: resource.map_id || resource.id,
    description: resource.name,
    zones: resource.zone ? [resource.zone?.parent_id, resource.zone?.id] : [],
    booking_asset: resource
  }));
}
var visitorGroupMemberName = (booking) => {
  const member = (booking.extension_data?.group_members || []).find((item) => item?.email === booking.asset_id);
  const name = `${member?.name || ""}`.trim();
  return name || "";
};
var visitorAttendeeName = (booking) => {
  const attendee = (booking.attendees || []).find((item) => item?.email === booking.asset_id) || booking.attendees?.[0];
  const name = `${attendee?.name || ""}`.trim();
  return name || "";
};
var formatEmailName = (value) => {
  if (!value.includes("@"))
    return value;
  const [local_part] = value.split("@");
  const formatted_local = local_part.replace(/[._-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!formatted_local)
    return value;
  return formatted_local.replace(/\b\w/g, (char) => char.toUpperCase());
};
var visitorDisplayNameFor = (booking) => {
  const asset_id = `${booking?.asset_id || ""}`.trim();
  const group_member_name = visitorGroupMemberName(booking);
  if (group_member_name)
    return group_member_name;
  const attendee_name = visitorAttendeeName(booking);
  if (attendee_name)
    return attendee_name;
  const asset_name = `${booking?.extension_data?.visitor_name || booking?.asset_name || ""}`.trim();
  const reason_values = [
    `${booking?.title || ""}`.trim().toLowerCase(),
    `${booking?.description || ""}`.trim().toLowerCase()
  ].filter((_) => !!_);
  if (asset_name && asset_name.toLowerCase() !== asset_id.toLowerCase() && !reason_values.includes(asset_name.toLowerCase())) {
    return asset_name;
  }
  return formatEmailName(asset_id || asset_name || "Visitor");
};
function bookingLocationString(booking, org) {
  let location2 = "";
  let level_name = "";
  if (booking instanceof Booking) {
    location2 = booking.booking_type === "visitor" ? booking.extension_data?.location || "" : booking.location || booking.asset_name || "";
    if (location2.startsWith("unallocated"))
      location2 = "";
    const level = org.levelWithID(booking.zones);
    level_name = level?.display_name || level?.name || "";
  } else {
    location2 = booking.location || booking.space?.display_name || booking.space?.name || booking.system?.name || "";
    level_name = booking.space?.level?.display_name || booking.space?.level?.name || booking.system?.zones ? org.levelWithID(booking.system?.zones || [])?.display_name || org.levelWithID(booking.system?.zones || [])?.name : "";
  }
  if (location2 && level_name) {
    return `${location2} - ${level_name}`;
  }
  return location2 || level_name || "";
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
      when: ({ valueOf }) => {
        const booking_type = valueOf(p.booking_type);
        return booking_type === "parking" && require_plate_number();
      }
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
  onFieldChange(model, (v2) => v2.user, (user) => {
    if (!user)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      user,
      user_id: user?.id ?? "",
      user_email: user?.email ?? "",
      user_name: user?.name ?? ""
    }));
  }, injector);
  onFieldChange(model, (v2) => v2.resources, (resources) => {
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
  const duration = event.duration ?? (event.event_end - event.event_start) / 60;
  const recurrence = event.recurrence?.pattern ? toBookingRecurrence(fromEventRecurrence(event.recurrence), date) : {};
  return new Booking(__spreadProps(__spreadValues({
    id: event.id,
    user_id: event.organiser?.id || event.host,
    user_email: event.host,
    user_name: event.organiser?.name || event.host,
    date,
    duration,
    asset_id: event.system?.id || event.system_id,
    asset_name: event.system?.display_name || event.system?.name,
    zones: [...event.system?.zones || []],
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
    this._calendars_request = this._calendars_request || queryCalendars().then((list) => this._calendars.set(list)).catch((error) => {
      log("CalendarService", "Failed to load calendars", error, "warn");
    }).finally(() => this._calendars_request = null);
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
  const location2 = escapeText(`${event.location}`);
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
  chunks.push(["LOCATION", location2]);
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

export {
  setHours,
  getCachedAuthenticatedImage,
  loadAuthenticatedImage,
  loadAuthenticatedImageWithHeader,
  MapViewer,
  queryBookings,
  bookedResourceList,
  findBookingClashes,
  updateBooking,
  saveBooking,
  removeBooking,
  setBookingCheckedIn,
  queryResourceAvailability,
  createBookingsForEvent,
  queryCalendars,
  queryUserFreeBusy,
  queryEvents,
  saveEvent,
  removeEvent,
  checkinEventGuest,
  addEventGuest,
  removeEventGuest,
  getEventMetadata,
  querySpaceAvailability,
  findEventClashes,
  findOldestByName,
  saveAssetCategory,
  saveAssetType,
  validateAssetRequestsForResource,
  AssetStateService,
  parkingRequestStatus,
  visitorDisplayNameFor,
  bookingLocationString,
  bookingAttachments,
  bookingHostUser,
  bookingFormValue,
  generateBookingForm,
  findNearbyFeature,
  newBookingFromCalendarEvent,
  loadLockerResources,
  openRecurringClashModal,
  CalendarService,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
};
//# debugId=e5978461-58fc-5406-ad02-6a509296bb28
//# sourceMappingURL=chunk-5VXUUSI7.js.map

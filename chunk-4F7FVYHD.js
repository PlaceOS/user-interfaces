import {
  AssetRequest,
  CateringItem,
  GuestUser,
  User,
  VERSION,
  add,
  addMonths,
  addWeeks,
  addYears,
  currentUser,
  getUnixTime,
  isAfter,
  isBefore,
  setting,
  toQueryString
} from "./chunk-L3IRON44.js";
import {
  $,
  V,
  _,
  addDays,
  addHours,
  addMinutes,
  capitalizeFirstLetter,
  ce,
  ci,
  differenceInMinutes,
  endOfDay,
  endOfDayInTimezone,
  flatten,
  isSameDay,
  normalizeDates,
  removeEmptyFields,
  roundToNearestMinutes,
  startOfDayInTimezone,
  te,
  toDate,
  unique,
  v
} from "./chunk-ZRRK77LZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// libs/common/src/lib/types/booking.class.ts
var IGNORE_EXT_KEYS = ["user", "booked_by", "resources", "assets", "members"];
var RecurrenceDays;
(function(RecurrenceDays2) {
  RecurrenceDays2[RecurrenceDays2["SUNDAY"] = 1] = "SUNDAY";
  RecurrenceDays2[RecurrenceDays2["MONDAY"] = 2] = "MONDAY";
  RecurrenceDays2[RecurrenceDays2["TUESDAY"] = 4] = "TUESDAY";
  RecurrenceDays2[RecurrenceDays2["WEDNESDAY"] = 8] = "WEDNESDAY";
  RecurrenceDays2[RecurrenceDays2["THURSDAY"] = 16] = "THURSDAY";
  RecurrenceDays2[RecurrenceDays2["FRIDAY"] = 32] = "FRIDAY";
  RecurrenceDays2[RecurrenceDays2["SATURDAY"] = 64] = "SATURDAY";
})(RecurrenceDays || (RecurrenceDays = {}));
var DAY_MINUTES = 24 * 60;
function resolveAssetName(data, booking_type) {
  const ext = data.extension_data;
  const name = data.asset_name || ext?.asset_name || ext?.name;
  if (booking_type === "visitor") {
    return ext?.visitor_name || name || data.asset_id || "";
  }
  return name || data.description || data.asset_id || "";
}
function resolveUnixWindow(data) {
  const duration = data.duration || 60;
  if (data.date) {
    const start2 = Math.floor(data.date / 1e3);
    return { start: start2, end: start2 + duration * 60 };
  }
  const start = data.booking_start || getUnixTime(roundToNearestMinutes(addMinutes(Date.now(), 5), {
    nearestTo: 5
  }));
  return {
    start,
    end: data.booking_end || getUnixTime(addMinutes(start * 1e3, duration))
  };
}
function toBookingWindow(data, start, end) {
  const date = data.date || start * 1e3 || Date.now();
  const span = Math.abs(differenceInMinutes(start * 1e3, end * 1e3));
  const duration = data.booking_end ? span || 60 : data.duration || span || 60;
  return {
    date,
    duration,
    date_end: end * 1e3 || date + duration * 60 * 1e3
  };
}
function isCustomAllDay(data) {
  return !!(data.extension_data?.custom_all_day || data.custom_all_day);
}
function snapToWholeDays(data, window, timezone) {
  const has_length = !!(data.duration || data.date_end || data.booking_end);
  if (has_length && window.duration % DAY_MINUTES !== 0)
    return window;
  const date = startOfDayInTimezone(window.date, timezone);
  return {
    date,
    duration: has_length ? Math.max(1, window.duration - 1) : DAY_MINUTES - 1,
    date_end: endOfDayInTimezone(date, timezone)
  };
}
function resolveStatus(booking, status) {
  if (booking.deleted || status === "cancelled")
    return "cancelled";
  if (booking.rejected || status === "declined")
    return "declined";
  if (booking.has_ended)
    return "ended";
  if (booking.approved || status === "approved")
    return "approved";
  return "tentative";
}
function copyUnknownFields(booking, data) {
  for (const key in data) {
    if (!(key in booking) && !IGNORE_EXT_KEYS.includes(key) && data[key]) {
      booking.extension_data[key] = data[key];
    }
  }
}
var Booking = class {
  get group() {
    return this.extension_data.group || "";
  }
  get is_all_day() {
    return this.all_day || this.duration >= 18 * 60;
  }
  get has_ended() {
    return this.checked_out_at > 0 || isAfter(Date.now(), this.date_end);
  }
  get valid_assets() {
    if (this._valid_cache_expiry > Date.now() && this._valid_asset_cache.length) {
      return this._valid_asset_cache;
    }
    const list = this.linked_bookings;
    this._valid_asset_cache = (this.extension_data.assets || []).map((request) => new AssetRequest(__spreadProps(__spreadValues({}, request), { event: this }))).filter((request) => request.deliver_at < this.date_end).map((request) => {
      const booking = list.find((_2) => _2.extension_data.request_id === request.id);
      if (booking) {
        request.state = booking.approved ? "approved" : booking.rejected ? "rejected" : "pending";
      }
      return request;
    });
    this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
    return this._valid_asset_cache;
  }
  constructor(data = {}) {
    this._valid_asset_cache = [];
    this._valid_cache_expiry = 0;
    this.id = data.id || "";
    this.parent_id = data.parent_id || "";
    this.asset_id = data.asset_id || "";
    this.asset_ids = data.asset_ids || [data.asset_id].filter((_2) => _2);
    this.asset_name = resolveAssetName(data, data.booking_type || data.type || " ");
    this.zones = data.zones || [];
    const { start, end } = resolveUnixWindow(data);
    this.booking_start = start;
    this.booking_end = end;
    this.booking_type = data.booking_type || " ";
    this.type = data.type || data.booking_type || "booking";
    const timezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    const base_window = toBookingWindow(data, start, end);
    const all_day = !!data.all_day || isCustomAllDay(data) || base_window.duration >= DAY_MINUTES;
    const window = all_day ? snapToWholeDays(data, base_window, timezone) : base_window;
    this.date = window.date;
    this.duration = window.duration;
    this.date_end = window.date_end;
    this.timezone = timezone;
    this.user_email = data.user_email || "";
    this.user_id = data.user_id || "";
    this.user_name = data.user_name || "";
    this.title = data.title ?? (this.booking_type ? `${capitalizeFirstLetter(this.booking_type)} Booking`.trim() : "");
    this.description = data.description || "";
    this.checked_in = !!data.checked_in;
    this.rejected = !!data.rejected;
    this.approved = !!data.approved;
    this.deleted = !!data.deleted;
    this.booked_by_id = data.booked_by_id || "";
    this.booked_by_name = data.booked_by_name || "";
    this.booked_by_email = data.booked_by_email || "";
    this.approver_id = data.approver_id || "";
    this.approver_email = data.approver_email || "";
    this.approver_name = data.approver_name || "";
    this.extension_data = data.extension_data || {};
    this.access = !!data.extension_data?.access;
    this.event_id = data.event_id;
    this.permission = (data.permission || "PRIVATE").toUpperCase();
    this.attendees = data.attendees || data.guests || data.members || [];
    this.tags = data.tags || data.extension_data?.tags || [];
    this.images = data.images || [];
    this.all_day = all_day;
    this.induction = data.induction || void 0;
    this.created_at = data.created_at || Date.now();
    this.history = data.history || [];
    this.checked_out_at = data.checked_out_at;
    this.checked_in_at = data.checked_in_at;
    this.linked_event = data.linked_event || null;
    this.linked_bookings = data.linked_bookings || [];
    this.linked_parent_booking = data.linked_parent_booking || null;
    this.status = resolveStatus(this, data.status);
    this.process_state = data.process_state || "pending";
    this.recurrence_type = data.recurrence_type || "none";
    this.recurrence_days = data.recurrence_days;
    this.recurrence_nth_of_month = data.recurrence_nth_of_month;
    this.recurrence_interval = data.recurrence_interval;
    this.recurrence_end = data.recurrence_end;
    this.instance = data.instance;
    copyUnknownFields(this, data);
    this.extension_data.assets = (this.extension_data.assets || []).map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: this, date: this.date })));
    this.extension_data.tags = data.tags || [];
    if (this.extension_data.request) {
      this.extension_data.request = new AssetRequest(__spreadProps(__spreadValues({}, this.extension_data.request), {
        event: this,
        date: this.date
      }));
    }
  }
  toJSON() {
    const data = __spreadValues({}, this);
    if (!this.id)
      delete data.id;
    data.extension_data.assets = data.extension_data.assets.map((i) => new AssetRequest(__spreadProps(__spreadValues({}, i), { event: null })));
    if (data.extension_data.request) {
      data.extension_data.request = new AssetRequest(__spreadProps(__spreadValues({}, data.extension_data.request), {
        event: null
      }));
    }
    if (!data.parent_id)
      delete data.parent_id;
    data.zones = data.zones.filter((_2) => _2);
    delete data.date;
    delete data.duration;
    delete data.created_at;
    delete data.history;
    delete data.process_state;
    removeEmptyFields(data);
    return data;
  }
  get location() {
    return this.extension_data?.location || this.description;
  }
  /** Whether the booking occurs today */
  get is_today() {
    return isSameDay(this.date, /* @__PURE__ */ new Date());
  }
  /** Whether booking is done */
  get is_done() {
    const start = /* @__PURE__ */ new Date();
    const end = this.all_day ? addHours(this.date, 24) : addMinutes(this.date, this.duration);
    const checked_out = (this.checked_out_at || this.extension_data.checked_out_at || 0) * 1e3;
    const end_time = end.getTime();
    if (checked_out && Date.now() > checked_out)
      return true;
    return isAfter(start, new Date(end_time));
  }
  /** Status of the booking */
  get state() {
    const now = /* @__PURE__ */ new Date();
    const date = this.date;
    if (isBefore(now, add(date, { minutes: -15 })))
      return "future";
    if (isBefore(now, date))
      return "upcoming";
    if (isBefore(now, add(date, { minutes: 15 })))
      return "started";
    if (isBefore(now, add(date, { minutes: this.duration })))
      return "in_progress";
    return "done";
  }
};

// libs/common/src/lib/recurrence.ts
var WeekOfMonth;
(function(WeekOfMonth2) {
  WeekOfMonth2[WeekOfMonth2["First"] = 1] = "First";
  WeekOfMonth2[WeekOfMonth2["Second"] = 2] = "Second";
  WeekOfMonth2[WeekOfMonth2["Third"] = 3] = "Third";
  WeekOfMonth2[WeekOfMonth2["Fourth"] = 4] = "Fourth";
  WeekOfMonth2[WeekOfMonth2["Fifth"] = 5] = "Fifth";
  WeekOfMonth2[WeekOfMonth2["Last"] = -1] = "Last";
  WeekOfMonth2[WeekOfMonth2["SecondLast"] = -2] = "SecondLast";
  WeekOfMonth2[WeekOfMonth2["ThirdLast"] = -3] = "ThirdLast";
  WeekOfMonth2[WeekOfMonth2["FourthLast"] = -4] = "FourthLast";
  WeekOfMonth2[WeekOfMonth2["FifthLast"] = -5] = "FifthLast";
})(WeekOfMonth || (WeekOfMonth = {}));
var RecurrDays;
(function(RecurrDays2) {
  RecurrDays2[RecurrDays2["SUNDAY"] = 1] = "SUNDAY";
  RecurrDays2[RecurrDays2["MONDAY"] = 2] = "MONDAY";
  RecurrDays2[RecurrDays2["TUESDAY"] = 4] = "TUESDAY";
  RecurrDays2[RecurrDays2["WEDNESDAY"] = 8] = "WEDNESDAY";
  RecurrDays2[RecurrDays2["THURSDAY"] = 16] = "THURSDAY";
  RecurrDays2[RecurrDays2["FRIDAY"] = 32] = "FRIDAY";
  RecurrDays2[RecurrDays2["SATURDAY"] = 64] = "SATURDAY";
  RecurrDays2[RecurrDays2["ALL"] = 127] = "ALL";
})(RecurrDays || (RecurrDays = {}));
var DAYS_OF_WEEK_INDEX = [
  RecurrDays.SUNDAY,
  RecurrDays.MONDAY,
  RecurrDays.TUESDAY,
  RecurrDays.WEDNESDAY,
  RecurrDays.THURSDAY,
  RecurrDays.FRIDAY,
  RecurrDays.SATURDAY
];
var WEEK_MS = 7 * 24 * 60 * 60 * 1e3;
function weekOfMonth(date) {
  const date_obj = new Date(date);
  const day = date_obj.getDate();
  const week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
  if (week === 4 && day >= 25 || week === 5)
    return -1;
  return week;
}
function monthlyWeekdayStart(date, week, day_of_week) {
  const date_obj = new Date(date);
  const year = date_obj.getFullYear();
  const month = date_obj.getMonth();
  let day_of_month;
  if (week < 0) {
    const last_day = new Date(year, month + 1, 0);
    day_of_month = last_day.getDate() - (last_day.getDay() - day_of_week + 7) % 7 + (week + 1) * 7;
  } else {
    const first_day = new Date(year, month, 1);
    day_of_month = 1 + (day_of_week - first_day.getDay() + 7) % 7 + (week - 1) * 7;
  }
  const recurrence_date = new Date(date);
  recurrence_date.setDate(day_of_month);
  if (recurrence_date.getMonth() !== month) {
    recurrence_date.setDate(day_of_month - 7);
  }
  return recurrence_date.valueOf();
}
function startOfWeekMs(date) {
  const date_obj = new Date(date);
  date_obj.setDate(date_obj.getDate() - date_obj.getDay());
  date_obj.setHours(0, 0, 0, 0);
  return date_obj.valueOf();
}
function validWeekdays(days) {
  if (!days?.size)
    return [];
  return Array.from(days).filter((day) => day >= 0 && day < 7).sort((a, b) => a - b);
}
function recurrenceInstanceCount(value) {
  const count = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  return Number.isFinite(count) && count >= 1 ? Math.floor(count) : void 0;
}
function isWeeklyInstance(date, start_date, interval, weekdays) {
  const day = new Date(date).getDay();
  const days = validWeekdays(weekdays);
  if (days.length && !days.includes(day))
    return false;
  const weeks = Math.floor((startOfWeekMs(date) - startOfWeekMs(start_date)) / WEEK_MS);
  return weeks >= 0 && weeks % Math.max(interval, 1) === 0;
}
function firstRecurrenceInstance(recurrence, date = Date.now()) {
  if (recurrence.type === "weekly") {
    for (let offset = 0; offset < 7 * Math.max(recurrence.interval, 1); offset++) {
      const candidate = addDays(date, offset).valueOf();
      if (isWeeklyInstance(candidate, date, recurrence.interval, recurrence.weekdays)) {
        return candidate;
      }
    }
  }
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && recurrence.weekdays?.size) {
    const day = validWeekdays(recurrence.weekdays)[0];
    const week = recurrence.week || weekOfMonth(date);
    for (let offset = 0; offset <= Math.max(recurrence.interval, 1); offset++) {
      const candidate = monthlyWeekdayStart(addMonths(date, offset).valueOf(), week, day);
      if (candidate >= date)
        return candidate;
    }
  }
  return date;
}
function recurrenceEndDate(recurrence, date = Date.now()) {
  const instances = Math.max((recurrenceInstanceCount(recurrence.end_instances) || 1) - 1, 0);
  const interval = Math.max(recurrence.interval, 1);
  const first_instance = firstRecurrenceInstance(recurrence, date);
  if (recurrence.type === "daily") {
    return endOfDay(addDays(first_instance, interval * instances)).valueOf();
  }
  if (recurrence.type === "weekly") {
    const days = validWeekdays(recurrence.weekdays);
    if (days.length > 1) {
      let count = 0;
      let candidate = first_instance;
      while (count < instances) {
        candidate = addDays(candidate, 1).valueOf();
        if (isWeeklyInstance(candidate, date, interval, recurrence.weekdays)) {
          count++;
        }
      }
      return endOfDay(candidate).valueOf();
    }
    return endOfDay(addWeeks(first_instance, interval * instances)).valueOf();
  }
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && recurrence.weekdays?.size) {
    const day = validWeekdays(recurrence.weekdays)[0];
    const week = recurrence.week || weekOfMonth(date);
    return endOfDay(monthlyWeekdayStart(addMonths(first_instance, interval * instances).valueOf(), week, day)).valueOf();
  }
  if (recurrence.type === "yearly") {
    return endOfDay(addYears(first_instance, interval * instances)).valueOf();
  }
  return endOfDay(addMonths(first_instance, interval * instances)).valueOf();
}
function fromEventRecurrence(r) {
  if (!r.pattern || r._pattern === "none") {
    return {
      _custom: false,
      type: "none",
      interval: 1,
      end_type: "never"
    };
  }
  const occurrences = recurrenceInstanceCount(r.occurrences);
  const recurr = {
    _custom: r._pattern == "custom_display",
    type: r.pattern,
    interval: r.interval || 1,
    end_type: r._end_type ?? (occurrences ? "instances" : r.end ? "date" : "never")
  };
  if (r.end)
    recurr.end_date = r.end;
  if (occurrences)
    recurr.end_instances = occurrences;
  if (r.pattern === "weekly" && r.days_of_week?.length) {
    recurr.weekdays = new Set(r.days_of_week);
  }
  if (r.pattern === "monthly") {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_week";
    if (r.days_of_week?.length) {
      recurr.weekdays = new Set(r.days_of_week);
    }
    if (r.nth_of_month) {
      recurr.week = r.nth_of_month;
    } else if (r.start) {
      recurr.week = weekOfMonth(r.start);
    }
  }
  if (r.pattern === "month_day" && r.days_of_week?.length) {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_week";
    recurr.weekdays = new Set(r.days_of_week);
    if (r.nth_of_month) {
      recurr.week = r.nth_of_month;
    } else if (r.start) {
      recurr.week = weekOfMonth(r.start);
    }
  } else if (r.pattern === "month_day") {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_month";
  }
  return recurr;
}
function toBookingRecurrence(r, date = Date.now()) {
  if (r.type === "none") {
    return {
      recurrence_custom: false,
      recurrence_type: "none",
      recurrence_days: void 0,
      recurrence_nth_of_month: void 0,
      recurrence_interval: void 0,
      recurrence_end: void 0,
      recurrence_instances: void 0
    };
  }
  const booking = {
    recurrence_custom: r._custom,
    recurrence_type: r.type === "yearly" ? "monthly" : r.type,
    recurrence_days: void 0,
    recurrence_nth_of_month: void 0,
    recurrence_interval: r.type === "yearly" ? r.interval * 12 : r.interval,
    recurrence_end: void 0,
    recurrence_instances: void 0
  };
  if (r.end_type === "date" && r.end_date) {
    booking.recurrence_end = getUnixTime(r.end_date);
  } else if (r.end_type === "instances") {
    booking.recurrence_instances = recurrenceInstanceCount(r.end_instances);
    booking.recurrence_end = getUnixTime(recurrenceEndDate(r, date));
  }
  if (r.type === "daily") {
    booking.recurrence_days = RecurrDays.ALL;
  }
  if (r.type === "weekly" && r.weekdays) {
    let days = 0;
    r.weekdays.forEach((day) => {
      days |= DAYS_OF_WEEK_INDEX[day];
    });
    booking.recurrence_days = days;
    booking.recurrence_type = "daily";
  }
  if ((r.type === "monthly" || r.type === "yearly") && r.weekdays) {
    let days = 0;
    r.weekdays.forEach((day) => {
      days |= 1 << day;
    });
    booking.recurrence_days = days;
  }
  if ((r.type === "monthly" || r.type === "yearly") && r.week) {
    booking.recurrence_nth_of_month = r.week;
  }
  return booking;
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
  return queryBookingsOrThrow(q).catch(() => []);
}
async function queryBookingsOrThrow(q) {
  const query = toQueryString(q);
  const list = await _(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`);
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
  } catch (_2) {
    return [];
  }
}
async function findBookingClashes(booking, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e3 }));
  try {
    const list = await v(`${BOOKINGS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, booking.toJSON()).catch(() => []);
    return q.include_clash_time ? list : list;
  } catch (_2) {
    return [];
  }
}
var MAX_PAGES = 50;
async function queryAllBookings(q) {
  try {
    let { data, next } = await $({
      query_params: q,
      fn: (item) => new Booking(item),
      endpoint: BOOKINGS_ENDPOINT,
      path: ""
    });
    let list = [...data];
    let count = 1;
    while (next && count <= MAX_PAGES) {
      const resp = await next();
      data = resp.data;
      next = resp.next;
      list = [...list, ...data];
      count += 1;
    }
    return unique(list, "id");
  } catch (_2) {
    return [];
  }
}
async function showBooking(id) {
  return new Booking(await _(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`));
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
  return id ? instance ? updateBookingInstance(id, data.instance || data.booking_start, data) : updateBooking(id, data) : createBooking(ci(data, ["", null, void 0]) || {}, q);
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
    return event.linked_bookings.filter((_2) => _2.booking_type === type).map((_2) => new Booking(_2));
  }
  const bookings = await queryBookingsOrThrow({
    type,
    event_id: event.id,
    period_start: getUnixTime(event.date),
    period_end: getUnixTime(addMinutes(event.date, event.duration)),
    limit: 500
  });
  return bookings.filter((_2) => _2.extension_data?.parent_id === event.id);
}
function replacedEventBookingIds(event, type) {
  if (event.from_bookings)
    return [];
  return (event.linked_bookings || []).filter((_2) => {
    const parent_id = _2.extension_data?.parent_id;
    return _2.booking_type === type && !!parent_id && parent_id !== event.id;
  }).map((_2) => _2.id);
}
function bookingMatchesResource(booking, item) {
  if (item.id && booking.extension_data?.details?.id === item.id) {
    return true;
  }
  if (item.email && booking.attendees?.find((_2) => _2.email === item.email)) {
    return true;
  }
  return !!booking.asset_ids?.find((id) => item.items?.find((i) => i.item_ids?.includes(id)));
}
function detailsKey(details) {
  const data = JSON.parse(JSON.stringify(details ?? null));
  if (data && typeof data === "object")
    delete data.deliver_at_time;
  return JSON.stringify(data, (_2, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a < b ? -1 : 1)) : value);
}
function attendeeEmails(list = []) {
  return list.map((_2) => _2.email?.toLowerCase()).sort().join(",");
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
async function createBookingsForEvent(event, type, resources) {
  const existing = await linkedBookingsForEvent(event, type);
  const zones = event.system?.zones || unique(flatten(event.resources.map((_2) => _2.zones))) || [];
  const kept = /* @__PURE__ */ new Set();
  const created_bookings = [];
  try {
    for (const id of replacedEventBookingIds(event, type)) {
      await removeBooking(id);
    }
    for (const item of resources) {
      const booking = existing.find((_2) => !kept.has(_2.id) && bookingMatchesResource(_2, item));
      const assigned_space = type === "catering-order" && item.system_id ? event.resources.find((_2) => _2.id === item.system_id || _2.email === item.system_id) : void 0;
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
        extension_data: {
          parent_id: event.id,
          name: resource_name,
          location_id: assigned_space?.id || event.location,
          details: item
        },
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
  const list = await _(`${GUEST_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await _(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}
async function getGuestCateringItem(email, booking_id = "") {
  const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
  const query = booking_id ? `?booking_id=${encodeURIComponent(booking_id)}` : "";
  const item = await _(`${path}${query}`);
  return item ? new CateringItem(item) : null;
}
async function setGuestCateringItem(email, catering_item, booking_id = "") {
  const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
  const query = booking_id ? `?booking_id=${encodeURIComponent(booking_id)}` : "";
  const item = await te(`${path}${query}`, catering_item);
  return item ? new CateringItem(item) : null;
}

export {
  differenceInCalendarMonths,
  endOfMonth,
  fromEventRecurrence,
  toBookingRecurrence,
  Booking,
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
//# debugId=a46ef9f4-5122-5a96-b112-36f58f62b413
//# sourceMappingURL=chunk-4F7FVYHD.js.map

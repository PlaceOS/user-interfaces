import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-3ZEQ5DCG.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WT4BWV7J.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-RYULPSWU.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatSuffix
} from "./chunk-D3FLHK5D.js";
import {
  SanitizePipe
} from "./chunk-B5SX2KOQ.js";
import {
  MatOption
} from "./chunk-G2XWN7US.js";
import {
  SpacePipe,
  requestSpacesForZone,
  setHours,
  setMinutes
} from "./chunk-5GTXQUDB.js";
import {
  FormField,
  disabled,
  form,
  required,
  submit,
  validate
} from "./chunk-F6TIV3U5.js";
import {
  TranslatePipe
} from "./chunk-2ACANVNU.js";
import {
  AssetRequest,
  CalendarEvent,
  DEFAULT_SETTINGS,
  EMPTY_USER,
  GuestUser,
  OrganisationService,
  SETTING_KEYS,
  SettingsService,
  Space,
  StaffUser,
  User,
  VERSION,
  add,
  addMonths,
  addWeeks,
  addYears,
  currentUser,
  currentUserCanApprove,
  currentUserIsLoaded,
  currentUserLoaded,
  firstValueWhere,
  getUnixTime,
  isAfter,
  isBefore,
  isEmptyUser,
  setDefaultCreator,
  setting,
  settingSignal,
  toQueryString,
  user_group_names
} from "./chunk-V35SNJ6C.js";
import {
  AsyncHandler,
  Fp,
  Gp,
  J,
  LOCAL_TIMEZONE,
  Mt,
  Ql,
  Sa,
  Us,
  V,
  _,
  ac,
  addDays,
  addHours,
  addMilliseconds,
  addMinutes,
  capitalizeFirstLetter,
  ce,
  ci,
  differenceInMilliseconds,
  differenceInMinutes,
  eh,
  endOfDay,
  endOfDayInTimezone,
  et,
  flatten,
  format,
  formatDuration,
  formatTimeInTimezone,
  getAllDayTimeRange,
  getInvalidSignalFields,
  getItemWithKeys,
  getRoundingMethod,
  getTimeInTimezone,
  getTimezoneOffsetString,
  guardModelUndefinedWrites,
  i18n,
  isSameDay,
  isWithinBookableHours,
  localToTimezone,
  log,
  markUserDateChange,
  notifyError,
  notifySuccess,
  notifyWarn,
  np,
  onFieldChange,
  op,
  randomInt,
  removeEmptyFields,
  roundToNearestMinutes,
  sameDayInTimezone,
  set,
  setTimeInTimezone,
  setupFormTimeSync,
  startOfDay,
  startOfDayInTimezone,
  startOfMinute,
  te,
  th,
  toDate,
  tp,
  unique,
  v,
  wr,
  xa
} from "./chunk-NZWA6BRH.js";
import {
  NavigationEnd,
  Router
} from "./chunk-INGPUCP7.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-SHFLO3X7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-FKHN7L5A.js";
import {
  Overlay
} from "./chunk-JOAYWECQ.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-MQ5HRBFJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  Pipe,
  ViewChild,
  computed,
  debounced,
  effect,
  first,
  forwardRef,
  inject,
  input,
  model,
  output,
  resource,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuerySignal
} from "./chunk-JQIZG7UA.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-SZBWVRCN.js";

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options == null ? void 0 : options.roundingMethod)(diff);
}

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/getMinutes.js
function getMinutes(date, options) {
  return toDate(date, options == null ? void 0 : options.in).getMinutes();
}

// node_modules/date-fns/startOfHour.js
function startOfHour(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

// libs/common/src/lib/booking-rules.ts
var MINUTE = 1;
var HOUR = 60;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var DURATION_MAP = {
  month: MONTH,
  months: MONTH,
  week: WEEK,
  weeks: WEEK,
  day: DAY,
  days: DAY,
  hour: HOUR,
  hours: HOUR,
  minute: MINUTE,
  minutes: MINUTE
};
var DEFAULT_RULES = {
  auto_approve: true,
  hidden: false
};
function stringToMinutes(str) {
  const parts = (str || "").split(" ");
  return parts.length > 1 ? +parts[0] * DURATION_MAP[parts[1].toLowerCase()] : 0;
}
function addToDate(add2, date = /* @__PURE__ */ new Date()) {
  return addMinutes(date, stringToMinutes(add2));
}
function filterResourcesFromRules(resources, details, ruleset_list) {
  return resources.filter((_2) => {
    var _a;
    return !((_a = rulesForResource(__spreadProps(__spreadValues({}, details), { resource: _2 }), ruleset_list)) == null ? void 0 : _a.hidden);
  });
}
function rulesForResource(details, ruleset_list) {
  var _a, _b;
  if (!(ruleset_list instanceof Array))
    return DEFAULT_RULES;
  for (const ruleset of ruleset_list) {
    if (ruleset.zone === "*" || ruleset.zone === ((_a = details.resource.zone) == null ? void 0 : _a.id) || ((_b = details.resource.zones) == null ? void 0 : _b.includes(ruleset.zone))) {
      if (checkRulesMatch(details, ruleset)) {
        if (window.debug_booking_rules) {
          console.log("Matched Ruleset:", details.resource.id, details, ruleset);
        }
        return ruleset.rules;
      }
    }
  }
  if (window.debug_booking_rules) {
    console.log("No Matched Ruleset:", details.resource.id, details, DEFAULT_RULES);
  }
  return DEFAULT_RULES;
}
function checkRulesMatch({ date, duration, host, resource: resource2 }, ruleset) {
  const date_obj = new Date(date);
  let matches = 0;
  const { conditions } = ruleset;
  if (!conditions)
    return true;
  if (conditions.groups instanceof Array && conditions.groups.every((_2) => {
    var _a;
    return (_a = host == null ? void 0 : host.groups) == null ? void 0 : _a.includes(_2);
  }))
    matches += 1;
  if (conditions.is_before && isBefore(addMinutes(date, duration), addToDate(conditions.is_before)))
    matches += 1;
  if (conditions.is_after && isAfter(date, addToDate(conditions.is_after)))
    matches += 1;
  if (conditions.min_length && conditions.min_length <= duration)
    matches += 1;
  if (conditions.is_between && date_obj.getHours() + date_obj.getMinutes() / 60 >= conditions.is_between[0] && date_obj.getHours() + date_obj.getMinutes() / 60 < conditions.is_between[1])
    matches += 1;
  if (conditions.is_period && date >= conditions.is_period[0] && date < conditions.is_period[1])
    matches += 1;
  if (conditions.max_length && conditions.max_length >= duration)
    matches += 1;
  if (conditions.resource_ids && conditions.resource_ids.includes(resource2.id))
    matches += 1;
  if (conditions.tags && conditions.tags.every((tag) => (resource2.tags || []).find((t) => t === tag)))
    matches += 1;
  if (conditions.locations && conditions.locations.includes(resource2.name))
    matches += 1;
  return matches >= Object.keys(conditions).length;
}

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
  if (!(days == null ? void 0 : days.size))
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
  var _a;
  if (recurrence.type === "weekly") {
    for (let offset = 0; offset < 7 * Math.max(recurrence.interval, 1); offset++) {
      const candidate = addDays(date, offset).valueOf();
      if (isWeeklyInstance(candidate, date, recurrence.interval, recurrence.weekdays)) {
        return candidate;
      }
    }
  }
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && ((_a = recurrence.weekdays) == null ? void 0 : _a.size)) {
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
  var _a;
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
  if (recurrence.type === "monthly" && recurrence.monthly_type === "day_of_week" && ((_a = recurrence.weekdays) == null ? void 0 : _a.size)) {
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
  var _a, _b, _c;
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
  if (r.pattern === "weekly" && ((_a = r.days_of_week) == null ? void 0 : _a.length)) {
    recurr.weekdays = new Set(r.days_of_week);
  }
  if (r.pattern === "monthly") {
    recurr.type = "monthly";
    recurr.monthly_type = "day_of_week";
    if ((_b = r.days_of_week) == null ? void 0 : _b.length) {
      recurr.weekdays = new Set(r.days_of_week);
    }
    if (r.nth_of_month) {
      recurr.week = r.nth_of_month;
    } else if (r.start) {
      recurr.week = weekOfMonth(r.start);
    }
  }
  if (r.pattern === "month_day" && ((_c = r.days_of_week) == null ? void 0 : _c.length)) {
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
  const name = data.asset_name || (ext == null ? void 0 : ext.asset_name) || (ext == null ? void 0 : ext.name);
  if (booking_type === "visitor") {
    return (ext == null ? void 0 : ext.visitor_name) || name || data.asset_id || "";
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
  var _a;
  return !!(((_a = data.extension_data) == null ? void 0 : _a.custom_all_day) || data.custom_all_day);
}
function snapToWholeDays(data, window2, timezone) {
  const has_length = !!(data.duration || data.date_end || data.booking_end);
  if (has_length && window2.duration % DAY_MINUTES !== 0)
    return window2;
  const date = startOfDayInTimezone(window2.date, timezone);
  return {
    date,
    duration: has_length ? Math.max(1, window2.duration - 1) : DAY_MINUTES - 1,
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
    var _a, _b;
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
    const window2 = all_day ? snapToWholeDays(data, base_window, timezone) : base_window;
    this.date = window2.date;
    this.duration = window2.duration;
    this.date_end = window2.date_end;
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
    this.access = !!((_a = data.extension_data) == null ? void 0 : _a.access);
    this.event_id = data.event_id;
    this.permission = (data.permission || "PRIVATE").toUpperCase();
    this.attendees = data.attendees || data.guests || data.members || [];
    this.tags = data.tags || ((_b = data.extension_data) == null ? void 0 : _b.tags) || [];
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
    var _a;
    return ((_a = this.extension_data) == null ? void 0 : _a.location) || this.description;
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

// libs/common/src/lib/types/calendar.class.ts
var Calendar = class {
  constructor(data = {}) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.primary = !!data.primary;
    this.summary = data.summary || "";
    this.can_edit = !!data.can_edit;
    this.resource = new Space(data.resource || data.system);
    this.availability = (data.availability || []).map(({ starts_at, ends_at, date, duration, status }) => {
      return {
        date: new Date(date || starts_at * 1e3).valueOf(),
        duration: duration || differenceInMinutes(ends_at * 1e3, starts_at * 1e3),
        status
      };
    });
    this.hidden = !!data.hidden;
  }
};

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
  document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(et()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=${cookie_path};samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
}
function authHeaders() {
  const tkn = J();
  return tkn === "x-api-key" ? { "X-API-Key": et() } : { Authorization: `Bearer ${tkn}` };
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
    if (!(response == null ? void 0 : response.ok)) {
      throw new Error(`Failed to fetch image: ${response == null ? void 0 : response.status}`);
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
var _AuthenticatedImagePipe = class _AuthenticatedImagePipe {
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
};
_AuthenticatedImagePipe.\u0275fac = function AuthenticatedImagePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthenticatedImagePipe)();
};
_AuthenticatedImagePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "authenticatedImage,authImage", type: _AuthenticatedImagePipe, pure: false });
var AuthenticatedImagePipe = _AuthenticatedImagePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImagePipe, [{
    type: Pipe,
    args: [{
      name: "authenticatedImage,authImage",
      pure: false
    }]
  }], null, null);
})();

// libs/components/src/lib/authenticated-image.directive.ts
var _AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._observer = null;
    this._source_version = 0;
    this.source = input(
      void 0,
      ...ngDevMode ? [{ debugName: "source" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnChanges(changes) {
    var _a;
    if (!changes.source)
      return;
    this._source_version += 1;
    this.clearTimeout("load");
    (_a = this._observer) == null ? void 0 : _a.disconnect();
    this._observer = null;
    const source = this.source();
    if (!source)
      return;
    if (!this._isLocalUrl(source)) {
      this._element.nativeElement.src = source;
      return;
    }
    this._loadWhenVisible(source, this._source_version);
  }
  ngOnDestroy() {
    var _a;
    (_a = this._observer) == null ? void 0 : _a.disconnect();
    this._observer = null;
    super.ngOnDestroy();
  }
  _loadWhenVisible(source, version) {
    if (typeof IntersectionObserver === "undefined") {
      void this._loadImage(source, version);
      return;
    }
    this._observer = new IntersectionObserver((entries) => {
      var _a;
      if (!entries.some(({ isIntersecting }) => isIntersecting)) {
        return;
      }
      (_a = this._observer) == null ? void 0 : _a.disconnect();
      this._observer = null;
      void this._loadImage(source, version);
    }, { rootMargin: "300px" });
    this._observer.observe(this._element.nativeElement);
  }
  async _loadImage(source, version) {
    if (version !== this._source_version || source !== this.source())
      return;
    if (!Mt()) {
      this.timeout("load", () => void this._loadImage(source, version), 300);
      return;
    }
    const cached = getCachedAuthenticatedImage(source);
    if (cached) {
      this._element.nativeElement.src = cached;
      return;
    }
    const is_api = source.includes("/api/engine/v2/uploads") || source.includes("/api/engine/v2/signage");
    try {
      const url = is_api ? await loadAuthenticatedImage(source, this._cookiePath(source)) : await loadAuthenticatedImageWithHeader(source);
      if (version === this._source_version && source === this.source()) {
        this._element.nativeElement.src = url;
      }
    } catch (error) {
      if (version === this._source_version) {
        this._element.nativeElement.dispatchEvent(new ErrorEvent("error", { error }));
      }
    }
  }
  /** Whether the source resolves to the current origin. */
  _isLocalUrl(source) {
    try {
      return new URL(source, location.href).origin === location.origin;
    } catch {
      return false;
    }
  }
  /** Return the narrowest cookie path that includes the resource. */
  _cookiePath(source) {
    return source.includes("/api/engine/v2/uploads") ? "/api/engine/v2/uploads" : "/api/engine/v2/signage";
  }
};
_AuthenticatedImageDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AuthenticatedImageDirective_BaseFactory;
  return function AuthenticatedImageDirective_Factory(__ngFactoryType__) {
    return (\u0275AuthenticatedImageDirective_BaseFactory || (\u0275AuthenticatedImageDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AuthenticatedImageDirective)))(__ngFactoryType__ || _AuthenticatedImageDirective);
  };
})();
_AuthenticatedImageDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AuthenticatedImageDirective, selectors: [["img", "auth", ""], ["video", "auth", ""], ["audio", "auth", ""]], inputs: { source: [1, "source"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
var AuthenticatedImageDirective = _AuthenticatedImageDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[auth], video[auth], audio[auth]"
    }]
  }], null, { source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: false }] }] });
})();

// libs/events/src/lib/helpers.ts
function getFreeTimeSlots(list, min_size = 29) {
  var _a, _b;
  let start = /* @__PURE__ */ new Date(0);
  const slots = [];
  list.sort((a, b) => a.date - b.date);
  for (const booking of list) {
    const setup_time = booking.setup_time ?? ((_a = booking.extension_data) == null ? void 0 : _a.setup_time) ?? 0;
    const breakdown_time = booking.breakdown_time ?? ((_b = booking.extension_data) == null ? void 0 : _b.breakdown_time) ?? 0;
    const bkn_start = new Date(addMinutes(booking.date, -setup_time));
    const bkn_end = addMinutes(booking.date, booking.duration + breakdown_time);
    if (isAfter(bkn_start, start)) {
      const diff = Math.abs(differenceInMinutes(bkn_start, start));
      if (diff >= min_size) {
        slots.push({
          start: start.valueOf(),
          end: bkn_start.valueOf()
        });
      }
    }
    if (isAfter(bkn_end, start)) {
      start = bkn_end;
    }
  }
  const s = start.valueOf();
  slots.push({
    start: s,
    end: (s ? s : Date.now()) * 10
  });
  return slots;
}
function getNextFreeTimeSlot(list, date = (/* @__PURE__ */ new Date()).valueOf(), min_size = 29) {
  const slots = getFreeTimeSlots(list, min_size);
  const time = addSeconds(startOfMinute(date), 1);
  for (const block of slots) {
    if (isAfter(block.start, time)) {
      return block;
    } else if (isBefore(time, block.end)) {
      const duration = differenceInMinutes(block.end, time);
      if (duration >= min_size)
        return block;
    }
  }
  return slots[slots.length - 1];
}

// libs/events/src/lib/event-form.ts
function eventFormValue(event = new CalendarEvent()) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
  return {
    id: event.id || "",
    ical_uid: event.ical_uid || "",
    host: event.host || ((_a = event.organiser) == null ? void 0 : _a.email) || ((_b = currentUser()) == null ? void 0 : _b.email) || "",
    organiser: event.organiser || { email: event.host || "" },
    creator: event.creator || ((_c = currentUser()) == null ? void 0 : _c.email) || "",
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
    catering: ((_d = event.extension_data) == null ? void 0 : _d.catering) || [],
    catering_notes: ((_g = (_f = (_e = event.extension_data) == null ? void 0 : _e.catering) == null ? void 0 : _f[0]) == null ? void 0 : _g.notes) || "",
    catering_charge_code: ((_j = (_i = (_h = event.extension_data) == null ? void 0 : _h.catering) == null ? void 0 : _i[0]) == null ? void 0 : _j.charge_code) || "",
    setup_time: event.setup_time || 0,
    breakdown_time: event.breakdown_time || 0,
    assets: ((_k = event.extension_data) == null ? void 0 : _k.assets) || [],
    visitor_type: ((_l = event.extension_data) == null ? void 0 : _l.visitor_type) ?? null,
    location: event.location || "",
    visibility: event.visibility || "normal",
    needs_space: true,
    needs_parking: ((_m = event.extension_data) == null ? void 0 : _m.needs_parking) || false,
    event_type: ((_n = event.extension_data) == null ? void 0 : _n.event_type) || "",
    category: ((_o = event.extension_data) == null ? void 0 : _o.category) || "",
    tags: ((_p = event.extension_data) == null ? void 0 : _p.tags) || [],
    update_master: false,
    system: event.system ?? null,
    attendance_type: ((_q = event.extension_data) == null ? void 0 : _q.attendance_type) || "ONSITE",
    timezone: event.timezone || LOCAL_TIMEZONE,
    shared_event: ((_r = event.extension_data) == null ? void 0 : _r.shared_event) || false,
    view_access: ((_s = event.extension_data) == null ? void 0 : _s.view_access) || "OPEN",
    images: ((_t = event.extension_data) == null ? void 0 : _t.images) || [],
    featured: ((_u = event.extension_data) == null ? void 0 : _u.featured) || false,
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
  const notes_required = () => !!((settings == null ? void 0 : settings.get("app.events.catering_notes_required")) || (settings == null ? void 0 : settings.value("require_catering_notes")));
  const model2 = signal(
    eventFormValue(event),
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  guardModelUndefinedWrites(model2, eventFormValue(new CalendarEvent()));
  const event_form = form(model2, (p) => {
    required(p.host);
    required(p.date);
    validate(p.duration, ({ value, valueOf }) => {
      const date = valueOf(p.date);
      return date && isAfter(Date.now(), addMinutes(date, value())) ? { kind: "duration" } : void 0;
    });
    required(p.catering_notes, {
      when: ({ valueOf }) => {
        var _a;
        return !!((_a = valueOf(p.catering)) == null ? void 0 : _a.length) && notes_required();
      }
    });
    disabled(p.host, { when: () => has_id });
    disabled(p.organiser, { when: () => has_id });
    disabled(p.date, { when: () => lock_start_time() });
    disabled(p.assets, {
      when: ({ valueOf }) => {
        var _a;
        return !((_a = valueOf(p.resources)) == null ? void 0 : _a.length);
      }
    });
    disabled(p.duration, {
      when: ({ valueOf }) => !!valueOf(p.all_day)
    });
  }, { injector });
  onFieldChange(model2, (v2) => v2.organiser, (organiser) => (
    // Coalesce to '' so the `host` sub-field is never removed from the
    // FieldTree (an undefined value breaks its `required`/`[formField]`).
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      host: (organiser == null ? void 0 : organiser.email) ?? ""
    }))
  ), injector);
  onFieldChange(model2, (v2) => v2.resources, (resources) => model2.update((m) => __spreadProps(__spreadValues({}, m), {
    system: (resources == null ? void 0 : resources.length) ? resources[0] : null
  })), injector);
  onFieldChange(model2, (v2) => v2.date, (date) => {
    const recurrence = model2().recurrence;
    if (!(recurrence == null ? void 0 : recurrence.pattern))
      return;
    if (recurrence._pattern !== "custom_display" && recurrence._pattern !== "none") {
      model2.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence: __spreadProps(__spreadValues({}, m.recurrence), {
          days_of_week: [new Date(date).getDay()]
        })
      }));
    }
  }, injector);
  const setCateringTime = () => {
    var _a;
    const value = model2();
    if (!((_a = value.catering) == null ? void 0 : _a.length) || !value.date)
      return;
    const event2 = {
      date: value.all_day ? startOfDay(value.date) : value.date,
      duration: value.all_day ? 24 * 60 : value.duration
    };
    if (value.catering.every((order) => {
      var _a2, _b;
      return +((_a2 = order.event) == null ? void 0 : _a2.date) === +event2.date && ((_b = order.event) == null ? void 0 : _b.duration) === event2.duration;
    }))
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      catering: (m.catering || []).map((order) => __spreadProps(__spreadValues({}, order), {
        event: event2
      }))
    }));
  };
  onFieldChange(model2, (v2) => v2.catering, setCateringTime, injector);
  const time_sync = setupFormTimeSync(model2, { on_time_change: setCateringTime }, injector);
  return { model: model2, form: event_form, time_sync, lock_start_time };
}

// libs/events/src/lib/calendar.fn.ts
var CALENDAR_ENDPOINT = "/api/staff/v1/calendars";
async function queryCalendars() {
  const list = await _(CALENDAR_ENDPOINT);
  return list.map((c) => new Calendar(c));
}
async function queryCalendarAvailability(q) {
  const query = toQueryString(q);
  const list = await _(`${CALENDAR_ENDPOINT}/availability${query ? "?" + query : ""}`);
  return list.map((c) => new Calendar(c));
}
var calendarsToSpaces = (list, org) => list.filter((cal) => !!cal.resource).map((cal) => new Space(__spreadProps(__spreadValues({}, cal.resource), {
  level: org == null ? void 0 : org.levelWithID(cal.resource.zones),
  availability: cal.availability
}))).filter((space) => space.bookable);
async function querySpaceFreeBusy(q, org) {
  const query = toQueryString(q);
  const list = await _(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`);
  return calendarsToSpaces(list.map((c) => new Calendar(c)), org);
}

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
  data == null ? true : delete data.status;
  return id ? updateEvent(id, __spreadProps(__spreadValues({}, data), { id }), q) : createEvent(data);
};
function removeEvent(id, q = {}) {
  const query = toQueryString(q);
  return V(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, {
    response_type: "void"
  });
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
  const short_list = id_list.map((id) => !!spaces.find((s) => {
    var _a;
    return s.id === id || ((_a = s.resource) == null ? void 0 : _a.id) === id;
  }));
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
  } catch (_2) {
    return [];
  }
}

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
function multipleSpacesEnabled(settings) {
  return settings.get("app.events.multiple_spaces") === true || settings.get("app.events.allow_multiple_spaces") === true;
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

// libs/bookings/src/lib/bookings.fn.ts
var BOOKINGS_ENDPOINT = `/api/staff/v1/bookings`;
var APP_VERSION2 = VERSION.raw || VERSION.version || VERSION.hash;
function appName2() {
  return setting("app.name") || setting("app.short_name") || "PlaceOS";
}
function bookingUtmSource() {
  return `${appName2()}_${VERSION.hash}_${currentUser().email || ""}`;
}
function withAppVersion2(data) {
  const booking_data = __spreadValues({}, data instanceof Booking ? data.toJSON() : data);
  delete booking_data.created_at;
  return __spreadProps(__spreadValues({}, booking_data), {
    extension_data: __spreadProps(__spreadValues({}, booking_data.extension_data || {}), {
      app_name: appName2(),
      app_version: APP_VERSION2
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
function parentBookingId(id) {
  if (!id)
    throw new Error("Missing parent booking id");
  const parent_id = Number(id);
  return Number.isSafeInteger(parent_id) ? parent_id : id;
}
async function createBooking(data, q) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { utm_source: bookingUtmSource() }));
  return new Booking(await v(`${BOOKINGS_ENDPOINT}${query ? "?" + query : ""}`, withAppVersion2(data)));
}
async function updateBooking(id, data, method = "patch") {
  return new Booking(await (method === "patch" ? te : ce)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`, withAppVersion2(data)));
}
async function updateBookingInstance(id, start_time, data, method = "patch") {
  return new Booking(await (method === "patch" ? te : ce)(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}`, withAppVersion2(data)));
}
var saveBooking = async (data, q) => {
  const id = data.id;
  delete data.id;
  const instance = q == null ? void 0 : q.instance;
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
  return bookings.filter((_2) => {
    var _a;
    return ((_a = _2.extension_data) == null ? void 0 : _a.parent_id) === event.id;
  });
}
function replacedEventBookingIds(event, type) {
  if (event.from_bookings)
    return [];
  return (event.linked_bookings || []).filter((_2) => {
    var _a;
    const parent_id = (_a = _2.extension_data) == null ? void 0 : _a.parent_id;
    return _2.booking_type === type && !!parent_id && parent_id !== event.id;
  }).map((_2) => _2.id);
}
function bookingMatchesResource(booking, item) {
  var _a, _b, _c, _d;
  if (item.id && ((_b = (_a = booking.extension_data) == null ? void 0 : _a.details) == null ? void 0 : _b.id) === item.id) {
    return true;
  }
  if (item.email && ((_c = booking.attendees) == null ? void 0 : _c.find((_2) => _2.email === item.email))) {
    return true;
  }
  return !!((_d = booking.asset_ids) == null ? void 0 : _d.find((id) => {
    var _a2;
    return (_a2 = item.items) == null ? void 0 : _a2.find((i) => {
      var _a3;
      return (_a3 = i.item_ids) == null ? void 0 : _a3.includes(id);
    });
  }));
}
function detailsKey(details) {
  const data = JSON.parse(JSON.stringify(details ?? null));
  if (data && typeof data === "object")
    delete data.deliver_at_time;
  return JSON.stringify(data, (_2, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a < b ? -1 : 1)) : value);
}
function attendeeEmails(list = []) {
  return list.map((_2) => {
    var _a;
    return (_a = _2.email) == null ? void 0 : _a.toLowerCase();
  }).sort().join(",");
}
function linkedBookingChanges(booking, desired) {
  var _a, _b;
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
  const details_changed = detailsKey((_a = booking.extension_data) == null ? void 0 : _a.details) !== detailsKey((_b = desired.extension_data) == null ? void 0 : _b.details);
  if (!details_changed && !Object.keys(changes).length)
    return null;
  return __spreadProps(__spreadValues({}, changes), { extension_data: desired.extension_data });
}
async function createBookingsForEvent(event, type, resources) {
  var _a;
  const existing = await linkedBookingsForEvent(event, type);
  const zones = ((_a = event.system) == null ? void 0 : _a.zones) || unique(flatten(event.resources.map((_2) => _2.zones))) || [];
  const kept = /* @__PURE__ */ new Set();
  const created_bookings = [];
  try {
    for (const id of replacedEventBookingIds(event, type)) {
      await removeBooking(id);
    }
    for (const item of resources) {
      const booking = existing.find((_2) => !kept.has(_2.id) && bookingMatchesResource(_2, item));
      const assigned_space = type === "catering-order" && item.system_id ? event.resources.find((_2) => _2.id === item.system_id || _2.email === item.system_id) : void 0;
      const resource_id = (assigned_space == null ? void 0 : assigned_space.id) || item.system_id || item.email || item.id;
      const resource_name = (assigned_space == null ? void 0 : assigned_space.display_name) || (assigned_space == null ? void 0 : assigned_space.name) || item.name;
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
          location_id: (assigned_space == null ? void 0 : assigned_space.id) || event.location,
          details: item
        },
        zones: (assigned_space == null ? void 0 : assigned_space.zones) || zones
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

// libs/components/src/lib/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("alt", ctx_r0.initials)("source", ctx_r0.user().photo);
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.user().photo ? 1 : 2);
  }
}
var _UserAvatarComponent = class _UserAvatarComponent {
  constructor() {
    this.user = input(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_valid = computed(
      () => {
        const user = this.user();
        if (!user)
          return false;
        const name = (user.name || "").trim();
        const email = (user.email || "").trim();
        if (name.startsWith("<empty>") || email.startsWith("<empty>")) {
          return false;
        }
        return !!(name || email || user.first_name || user.last_name);
      },
      ...ngDevMode ? [{ debugName: "is_valid" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get initials() {
    const user = this.user();
    if (!user)
      return "NA";
    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`;
    }
    let name = (user.name || "").replace(/<[^>]*>/g, " ").trim();
    if (!name)
      name = (user.email || user.name || "").split("@")[0];
    const parts = name.replace(/[()[\]\-+=\\/@<>]+/gi, " ").split(/\s+/).filter(Boolean);
    if (parts.length === 0)
      return "NA";
    return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0].slice(0, 2);
  }
};
_UserAvatarComponent.\u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserAvatarComponent)();
};
_UserAvatarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "border-base-100", "bg-base-200", "flex", "h-[2.5em]", "w-[2.5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2"], ["initials", "", 1, "text-base-content", "uppercase", "opacity-60"], ["auth", "", 1, "flex", "h-full", "w-full", "items-center", "justify-center", "object-cover", "object-center", 3, "alt", "source"]], template: function UserAvatarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.is_valid() ? 0 : -1);
  }
}, dependencies: [AuthenticatedImageDirective], encapsulation: 2 });
var UserAvatarComponent = _UserAvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (is_valid()) {
            <div
                class="border-base-100 bg-base-200 flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2"
                [attr.user-id]="user().id"
            >
                @if (!user().photo) {
                    <div
                        initials
                        class="text-base-content uppercase opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="flex h-full w-full items-center justify-center object-cover object-center"
                        [alt]="initials"
                        [source]="user().photo"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "libs/components/src/lib/user-avatar.component.ts", lineNumber: 34 });
})();

// libs/components/src/lib/confirm-modal.component.ts
function ConfirmModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "icon", 5)(2, "p", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.content(), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 7);
    \u0275\u0275element(2, "mat-spinner", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r0.cancel_text()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r0.confirm_text()), " ");
  }
}
var CONFIRM_METADATA = {
  height: "auto"
};
async function openConfirmModal(data, dialog) {
  const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
    data
  }));
  return __spreadProps(__spreadValues({}, await Promise.race([
    ref.componentInstance.event.pipe(first((_2) => _2.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ])), {
    loading: (s) => {
      var _a;
      return (_a = ref.componentInstance.loading) == null ? void 0 : _a.set(s);
    },
    close: () => ref.close()
  });
}
var _ConfirmModalComponent = class _ConfirmModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = new EventEmitter();
    this.title = signal(
      this._data.title || "COMMON.CONFIRM",
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.content = signal(
      this._data.content || "Are you sure?",
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_text = signal(
      this._data.confirm_text || "COMMON.ACCEPT",
      ...ngDevMode ? [{ debugName: "confirm_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancel_text = signal(
      this._data.cancel_text || "COMMON.CANCEL",
      ...ngDevMode ? [{ debugName: "cancel_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = signal(
      this._data.icon || {
        class: "material-symbols-rounded",
        content: "done"
      },
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disableClose = () => this._dialog_ref.disableClose = true;
    this.enableClose = () => this._dialog_ref.disableClose = false;
  }
  ngOnInit() {
    if (this._data.close_delay) {
      this.timeout("close", () => this._dialog_ref.close(), this._data.close_delay);
    }
  }
  /** User confirmation of the content of the modal */
  onConfirm() {
    this.event.emit({ reason: "done" });
  }
};
_ConfirmModalComponent.\u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmModalComponent)();
};
_ConfirmModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", 3, "innerHTML"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_3_Template, 3, 2, "main", 2)(4, ConfirmModalComponent_Conditional_4_Template, 5, 1, "main", 3);
    \u0275\u0275conditionalCreate(5, ConfirmModalComponent_Conditional_5_Template, 7, 6, "footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
  }
}, dependencies: [
  MatProgressSpinnerModule,
  MatProgressSpinner,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  TranslatePipe
], encapsulation: 2 });
var ConfirmModalComponent = _ConfirmModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title() }}</h2>
        </header>
        @if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon()" class="text-5xl"></icon>
                <p content class="text-center" [innerHTML]="content()"></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading() }}</p>
                </div>
            </main>
        }
        @if (!loading()) {
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ cancel_text() | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    (click)="onConfirm()"
                >
                    {{ confirm_text() | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "libs/components/src/lib/confirm-modal.component.ts", lineNumber: 123 });
})();

// libs/form-fields/src/lib/time-field.component.ts
var _c0 = ["*"];
var _forTrack0 = ($index, $item) => $item.id;
function TimeFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.active_time(), ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.force_time(), ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TimeFieldComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(ctx_r0.force_time().toString()));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_Conditional_10_Conditional_6_Template, 3, 5, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_Conditional_10_Conditional_7_Template, 2, 0, "icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.force_time());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r0.force_time(), ctx_r0.time_format()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time() === ctx_r0.force_time() ? 7 : -1);
  }
}
function TimeFieldComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r4.date, ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TimeFieldComponent_For_12_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(option_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_For_12_Conditional_6_Template, 3, 5, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_For_12_Conditional_7_Template, 2, 0, "icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275attribute("data-time", option_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 6, option_r4.date, ctx_r0.time_format()), " ", ctx_r0.extra_info_fn()(option_r4.date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time() === option_r4.date ? 7 : -1);
  }
}
function TimeFieldComponent_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "No time options to select");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function toHourOfDay(value) {
  if (value === null || value === void 0 || value === "")
    return null;
  const hour = Number(value);
  return Number.isFinite(hour) ? hour : null;
}
var _TimeFieldComponent = class _TimeFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.step = input(
      15,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_past_times = input(
      true,
      ...ngDevMode ? [{ debugName: "no_past_times" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = input(
      false,
      ...ngDevMode ? [{ debugName: "use_24hr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force_time = input(
      void 0,
      ...ngDevMode ? [{ debugName: "force_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_error = input(
      void 0,
      ...ngDevMode ? [{ debugName: "no_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.extra_info_fn = input(
      (t) => "",
      ...ngDevMode ? [{ debugName: "extra_info_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.from = input(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.range = input(
      void 0,
      ...ngDevMode ? [{ debugName: "range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._range = computed(
      () => {
        const range = this.range();
        if (!range)
          return void 0;
        const start = toHourOfDay(range.start);
        const end = toHourOfDay(range.end);
        if (start === null || end === null || end <= start)
          return void 0;
        return { start, end };
      },
      ...ngDevMode ? [{ debugName: "_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = input(
      0,
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = input(
      "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = signal(
      (/* @__PURE__ */ new Date()).valueOf(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time = signal(
      format(/* @__PURE__ */ new Date(), "HH:mm"),
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._time_options = signal(
      [],
      ...ngDevMode ? [{ debugName: "_time_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_select = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "active_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_options = signal(
      false,
      ...ngDevMode ? [{ debugName: "no_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._menu_trigger = viewChild(
      MatMenuTrigger,
      ...ngDevMode ? [{ debugName: "_menu_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this.use_24hr() ? "HH : mm" : "h : mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.tz = computed(
      () => {
        const tz = this.timezone();
        if (!tz)
          return "";
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? "" : tz_offset;
      },
      ...ngDevMode ? [{ debugName: "tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    var _a;
    this.show_select.set(true);
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
    this._updateNoOptions();
    this.timeout("hide", () => this.show_select.set(false));
    const tz = this.timezone() || void 0;
    this.active_time.set(((_a = this._time_options().find((_2) => _2.id === formatTimeInTimezone(this.date(), tz))) == null ? void 0 : _a.date) || this.active_time());
  }
  ngOnChanges(changes) {
    if (changes.no_past_times || changes.step || changes.from || changes.range || changes.min_duration) {
      this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
      this._updateNoOptions();
    }
  }
  ngAfterViewInit() {
    const trigger = this._menu_trigger();
    if (trigger) {
      this.subscription("menu_opened", trigger.menuOpened.subscribe(() => {
        this._scrollToSelectedTime();
      }));
    }
  }
  /** Scroll the menu to the selected or nearest time option */
  _scrollToSelectedTime() {
    requestAnimationFrame(() => {
      const trigger = this._menu_trigger();
      if (!(trigger == null ? void 0 : trigger.menu))
        return;
      const panel = document.querySelector(".mat-mdc-menu-panel");
      if (!panel)
        return;
      const tz = this.timezone() || void 0;
      const target_time = this.time() || formatTimeInTimezone(/* @__PURE__ */ new Date(), tz);
      let target_element = panel.querySelector(`[data-time="${target_time}"]`);
      if (!target_element && this._time_options().length) {
        const current_minutes = this._timeToMinutes(target_time);
        let closest_option = this._time_options()[0];
        let closest_diff = Infinity;
        for (const option of this._time_options()) {
          const option_minutes = this._timeToMinutes(option.id);
          const diff = Math.abs(option_minutes - current_minutes);
          if (diff < closest_diff) {
            closest_diff = diff;
            closest_option = option;
          }
        }
        target_element = panel.querySelector(`[data-time="${closest_option.id}"]`);
      }
      if (target_element) {
        if (typeof target_element.scrollIntoView !== "function") {
          return;
        }
        target_element.scrollIntoView({
          block: "center",
          behavior: "instant"
        });
      }
    });
  }
  /** Convert time string (HH:mm) to minutes since midnight */
  _timeToMinutes(time_str) {
    const [hours, minutes] = time_str.split(":").map(Number);
    return hours * 60 + minutes;
  }
  /** Available time blocks for the selected date */
  time_options() {
    const tz = this.timezone() || void 0;
    const time = (this.time() || "00:00").split(":");
    const date_value = setTimeInTimezone(this.date(), +time[0], +time[1], tz);
    const { minutes } = getTimeInTimezone(date_value, tz);
    const time_str = formatTimeInTimezone(date_value, tz);
    const time_options = [...this._time_options()];
    if (minutes % this.step() !== 0 && this._isWithinRange(date_value) && !time_options.find((t) => t.id === time_str)) {
      time_options.push({
        date: date_value,
        id: time_str
      });
      time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
    }
    return time_options;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    var _a;
    this.time.set(new_value);
    const tz = this.timezone() || void 0;
    if (this._onChange) {
      const time2 = (this.time() || "00:00").split(":");
      const date_value2 = setTimeInTimezone(this.date(), +time2[0], +time2[1], tz);
      markUserDateChange();
      this._onChange(date_value2);
    }
    const time = this.force_time() || this.time();
    const time_parts = (typeof time === "string" ? time : formatTimeInTimezone(time, tz)).split(":");
    const date_value = setTimeInTimezone(this.date(), +time_parts[0], +time_parts[1], tz);
    this.active_time.set(((_a = this._time_options().find((_2) => _2.id === (typeof time === "string" ? time : formatTimeInTimezone(time, tz)))) == null ? void 0 : _a.date) || date_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    var _a;
    this.date.set(value || this.date());
    const tz = this.timezone() || void 0;
    let date = startOfMinute(this.date());
    date = roundToNearestMinutes(date, { nearestTo: 5 });
    this.time.set(formatTimeInTimezone(date, tz));
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
    this._updateNoOptions();
    const force = this.force_time();
    const time_id = force ? formatTimeInTimezone(force, tz) : this.time();
    this.active_time.set(((_a = this._time_options().find((_2) => _2.id === time_id)) == null ? void 0 : _a.date) || date.valueOf());
  }
  setDisabledState(disabled2) {
    this.disabled.set(disabled2);
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times() || disabled2, this.step()));
    this._updateNoOptions();
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /** Update whether the field should show as disabled due to no options */
  _updateNoOptions() {
    this.no_options.set(!this.disabled() && (!this._time_options() || this._time_options().length === 0) && !this.force_time());
  }
  /**
   * Generate a list of time options for the given date
   * @param datestamp Date to generate options for
   * @param show_past Whether past times should be options
   */
  generateAvailableTimes(datestamp, show_past, step = 15) {
    const min_date = show_past ? this.from() : Math.max(this.from(), Date.now());
    const blocks = [];
    const time_range = this._range();
    const tz = this.timezone() || void 0;
    const day_start = tz ? startOfDayInTimezone(datestamp, tz) : startOfDay(datestamp).valueOf();
    const day_end = tz ? endOfDayInTimezone(datestamp, tz) : endOfDay(datestamp).valueOf();
    const min_dur = this.min_duration() || 0;
    const start_minutes = time_range ? time_range.start * 60 : void 0;
    const end_minutes = time_range ? time_range.end * 60 : void 0;
    const effective_end = end_minutes != null && min_dur > 0 ? end_minutes - min_dur : end_minutes;
    const range_start = Math.max(day_start, min_date, start_minutes != null ? day_start + start_minutes * 60 * 1e3 : day_start);
    const range_end = Math.min(day_end, effective_end != null ? day_start + effective_end * 60 * 1e3 : day_end);
    if (range_start > range_end) {
      return blocks;
    }
    let date = this._roundUpToStep(range_start, step);
    const end = this._roundDownToStep(range_end, step);
    while (!isAfter(date, end)) {
      blocks.push({
        date: date.valueOf(),
        id: formatTimeInTimezone(date, tz)
      });
      date = addMinutes(date, step);
    }
    return blocks;
  }
  _isWithinRange(date) {
    if (isBefore(date, this.from())) {
      return false;
    }
    const time_range = this._range();
    if (!time_range) {
      return true;
    }
    const start_minutes = time_range.start * 60;
    const end_minutes = time_range.end * 60;
    const min_dur = this.min_duration() || 0;
    const effective_end = min_dur > 0 ? end_minutes - min_dur : end_minutes;
    const tz = this.timezone() || void 0;
    const { hours, minutes } = getTimeInTimezone(date, tz);
    const mins = hours * 60 + minutes;
    if (mins < start_minutes || mins > effective_end) {
      return false;
    }
    return true;
  }
  _roundUpToStep(datestamp, step) {
    let date = roundToNearestMinutes(datestamp, { nearestTo: step });
    if (isBefore(date, datestamp)) {
      date = addMinutes(date, step);
    }
    return startOfMinute(date);
  }
  _roundDownToStep(datestamp, step) {
    let date = roundToNearestMinutes(datestamp, { nearestTo: step });
    if (isAfter(date, datestamp)) {
      date = addMinutes(date, -step);
    }
    return startOfMinute(date);
  }
};
_TimeFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TimeFieldComponent_BaseFactory;
  return function TimeFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275TimeFieldComponent_BaseFactory || (\u0275TimeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TimeFieldComponent)))(__ngFactoryType__ || _TimeFieldComponent);
  };
})();
_TimeFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeFieldComponent, selectors: [["a-time-field"], ["time-field"]], viewQuery: function TimeFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._menu_trigger, MatMenuTrigger, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { step: [1, "step"], disabled: [1, "disabled"], no_past_times: [1, "no_past_times"], use_24hr: [1, "use_24hr"], force_time: [1, "force_time"], no_error: [1, "no_error"], extra_info_fn: [1, "extra_info_fn"], from: [1, "from"], range: [1, "range"], min_duration: [1, "min_duration"], timezone: [1, "timezone"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _TimeFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 15, vars: 12, consts: [["menu", "matMenu"], ["type", "button", "time-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-60", "min-w-[18rem]"], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "value"], ["mat-menu-item", "", "disabled", ""], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "click", "value"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, ""], [1, "text-xs", "opacity-30"], [1, "ml-2", "text-2xl"]], template: function TimeFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, TimeFieldComponent_Conditional_5_Template, 3, 5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-menu", 6, 0);
    \u0275\u0275conditionalCreate(10, TimeFieldComponent_Conditional_10_Template, 8, 7, "button", 7);
    \u0275\u0275repeaterCreate(11, TimeFieldComponent_For_12_Template, 8, 9, "button", 7, _forTrack0, false, TimeFieldComponent_ForEmpty_13_Template, 2, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, TimeFieldComponent_Conditional_14_Template, 2, 0, "mat-error");
  }
  if (rf & 2) {
    const menu_r5 = \u0275\u0275reference(9);
    \u0275\u0275classProp("opacity-30", ctx.disabled() || ctx.no_options());
    \u0275\u0275property("disabled", ctx.disabled() || ctx.no_options())("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 9, ctx.active_time(), ctx.time_format()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone() && ctx.tz() ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.force_time() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.time_options());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.no_error() ? 14 : -1);
  }
}, dependencies: [CommonModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, IconComponent, DatePipe], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */"] });
var TimeFieldComponent = _TimeFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeFieldComponent, [{
    type: Component,
    args: [{ selector: "a-time-field,time-field", template: `
        <button
            type="button"
            time-field
            matRipple
            class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
            [disabled]="disabled() || no_options()"
            [class.opacity-30]="disabled() || no_options()"
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{ active_time() | date: time_format() }}
                </div>
                @if (timezone() && tz()) {
                    <div class="truncate text-xs opacity-30">
                        {{
                            active_time() | date: time_format() + ' (z)' : tz()
                        }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-60 min-w-[18rem]">
            @if (force_time()) {
                <button
                    type="button"
                    mat-menu-item
                    [value]="force_time()"
                    class="text-left"
                    (click)="setValue(force_time().toString())"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ force_time() | date: time_format() }}
                            </div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        force_time()
                                            | date
                                                : time_format() + ' (z)'
                                                : tz()
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time() === force_time()) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
            @for (option of time_options(); track option.id) {
                <button
                    type="button"
                    mat-menu-item
                    [attr.data-time]="option.id"
                    [value]="option.id"
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ option.date | date: time_format() }}
                                {{ extra_info_fn()(option.date) }}
                            </div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        option.date
                                            | date
                                                : time_format() + ' (z)'
                                                : tz()
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time() === option.date) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            } @empty {
                <div mat-menu-item disabled>No time options to select</div>
            }
        </mat-menu>
        @if (!no_error()) {
            <mat-error><ng-content /></mat-error>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeFieldComponent),
        multi: true
      }
    ], imports: [CommonModule, MatMenuModule, MatFormFieldModule, IconComponent], styles: ["/* angular:styles/component:css;5a9d4ad78fbd733d6bae3e98235b5cff9293f47e8579cab48bc92b1fef278e28;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/time-field.component.ts */\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], no_past_times: [{ type: Input, args: [{ isSignal: true, alias: "no_past_times", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], force_time: [{ type: Input, args: [{ isSignal: true, alias: "force_time", required: false }] }], no_error: [{ type: Input, args: [{ isSignal: true, alias: "no_error", required: false }] }], extra_info_fn: [{ type: Input, args: [{ isSignal: true, alias: "extra_info_fn", required: false }] }], from: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], range: [{ type: Input, args: [{ isSignal: true, alias: "range", required: false }] }], min_duration: [{ type: Input, args: [{ isSignal: true, alias: "min_duration", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], _menu_trigger: [{ type: ViewChild, args: [forwardRef(() => MatMenuTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeFieldComponent, { className: "TimeFieldComponent", filePath: "libs/form-fields/src/lib/time-field.component.ts", lineNumber: 169 });
})();

// libs/components/src/lib/virtual-keyboard.component.ts
var DEFAULT_KEYS = [
  "0123456789".split(""),
  "qwertyuiop_".split(""),
  "asdfghjkl+".split(""),
  "zxcvbnm@.-".split(""),
  ["{caps}", "{space}", "{backspace}"]
];
var FADE_DURATION = 160;
var _VirtualKeyboardComponent = class _VirtualKeyboardComponent extends AsyncHandler {
  /** Whether virtual keyboard should activate */
  static get enabled() {
    return this._enabled;
  }
  static set enabled(value) {
    this._enabled = value;
    for (const instance of this._instances) {
      instance.syncNativeKeyboardState();
    }
  }
  onFocus() {
    this.syncNativeKeyboardState();
    if (!_VirtualKeyboardComponent.enabled)
      return;
    this.open();
    this.clearTimeout("blur-sm");
  }
  onBlur() {
    this.timeout("blur-sm", () => this.close());
  }
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this.keyset = model(
      DEFAULT_KEYS,
      ...ngDevMode ? [{ debugName: "keyset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = signal(
      "normal",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._overlay_ref = null;
    this._keyboard_el = null;
    this._position = "bottom";
    this._native_keyboard_prevented = false;
    this._original_readonly = false;
    this._original_inputmode = null;
    _VirtualKeyboardComponent._instances.add(this);
    this.syncNativeKeyboardState();
    effect(() => {
      const keys = this.keyset();
      if (!keys)
        this.keyset.set(DEFAULT_KEYS);
    });
  }
  ngOnDestroy() {
    _VirtualKeyboardComponent._instances.delete(this);
    this.restoreNativeKeyboardState();
    super.ngOnDestroy();
    this.close(true);
  }
  focusInput() {
    var _a, _b, _c, _d;
    (_b = (_a = this._element) == null ? void 0 : _a.nativeElement) == null ? void 0 : _b.blur();
    (_d = (_c = this._element) == null ? void 0 : _c.nativeElement) == null ? void 0 : _d.focus();
  }
  open() {
    this.clearTimeout("close-animation");
    if (this._overlay_ref) {
      this._overlay_ref.hostElement.style.pointerEvents = "auto";
      if (this._keyboard_el)
        this._keyboard_el.style.opacity = "1";
      return;
    }
    this._position = this.preferredPosition();
    const position_strategy = this._overlay.position().global().centerHorizontally();
    if (this._position === "top") {
      position_strategy.top("0");
    } else {
      position_strategy.bottom("0");
    }
    this._overlay_ref = this._overlay.create({
      width: "100vw",
      positionStrategy: position_strategy
    });
    this._overlay_ref.hostElement.style.display = "block";
    this._overlay_ref.hostElement.style.pointerEvents = "auto";
    this.applyOverlayPosition();
    this.renderKeyboard();
  }
  close(immediate = false) {
    if (!this._overlay_ref)
      return;
    this.clearTimeout("close-animation");
    if (immediate || !this._keyboard_el) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
      this._keyboard_el = null;
      return;
    }
    this._overlay_ref.hostElement.style.pointerEvents = "none";
    this._keyboard_el.style.opacity = "0";
    this.timeout("close-animation", () => {
      var _a;
      (_a = this._overlay_ref) == null ? void 0 : _a.dispose();
      this._overlay_ref = null;
      this._keyboard_el = null;
    }, FADE_DURATION);
  }
  handleKeyPress(key) {
    const input_el = this._element.nativeElement;
    const str = input_el.value || "";
    let cursor_pos = input_el.selectionStart ?? str.length;
    switch (key.toLowerCase()) {
      case "{caps}":
        this.state.set(this.state() === "caps" ? "normal" : "caps");
        break;
      case "{shift}":
        this.state.set(this.state() === "shift" ? "normal" : "shift");
        break;
      case "{backspace}":
        input_el.value = `${str.substr(0, cursor_pos - 1)}${str.substr(cursor_pos, str.length)}`;
        cursor_pos = Math.max(0, cursor_pos - 1);
        break;
      case "{space}":
        input_el.value = `${str.substr(0, cursor_pos)}${" "}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
        break;
      default:
        if (this.state() === "shift")
          this.state.set("normal");
        input_el.value = `${str.substr(0, cursor_pos)}${key}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
    }
    input_el.dispatchEvent(new InputEvent("input"));
    this.updateKeyState();
    this.timeout("focus", () => {
      this.focusInput();
      try {
        input_el.setSelectionRange(cursor_pos, cursor_pos);
      } catch {
      }
    }, 50);
  }
  updateKeyState() {
    this.keyset.set(this.keyset().map((_2) => _2.map((k) => k.length > 1 ? k : k[this.state() !== "normal" ? "toUpperCase" : "toLowerCase"]())));
    if (this._overlay_ref)
      this.renderKeyboard();
  }
  syncNativeKeyboardState() {
    if (_VirtualKeyboardComponent.enabled) {
      this.preventNativeKeyboard();
    } else {
      this.restoreNativeKeyboardState();
    }
  }
  reposition() {
    if (!this._overlay_ref)
      return;
    const position = this.preferredPosition();
    if (position === this._position)
      return;
    this.close(true);
    this.open();
  }
  renderKeyboard() {
    if (!this._overlay_ref)
      return;
    const overlay_el = this._overlay_ref.overlayElement;
    const should_animate = !this._keyboard_el;
    this.applyOverlayPosition();
    overlay_el.replaceChildren();
    const keyboard_el = document.createElement("div");
    keyboard_el.setAttribute("keyboard-view", "");
    keyboard_el.className = "border-base-200 bg-base-200 flex w-screen flex-col gap-[16px] p-[8px]";
    keyboard_el.style.background = "var(--base-200)";
    keyboard_el.style.borderBottom = this._position === "top" ? "1px solid var(--base-200)" : "";
    keyboard_el.style.borderTop = this._position === "bottom" ? "1px solid var(--base-200)" : "";
    keyboard_el.style.display = "flex";
    keyboard_el.style.flexDirection = "column";
    keyboard_el.style.gap = "16px";
    keyboard_el.style.opacity = should_animate ? "0" : "1";
    keyboard_el.style.padding = "8px";
    keyboard_el.style.transition = `opacity ${FADE_DURATION}ms ease`;
    keyboard_el.style.width = "100vw";
    for (const row of this.keyset()) {
      const row_el = document.createElement("div");
      row_el.setAttribute("row", "");
      row_el.className = "flex items-center justify-center gap-[8px]";
      row_el.style.alignItems = "center";
      row_el.style.display = "flex";
      row_el.style.gap = "8px";
      row_el.style.justifyContent = "center";
      for (const key of row) {
        row_el.appendChild(this.renderKey(key));
      }
      keyboard_el.appendChild(row_el);
    }
    overlay_el.appendChild(keyboard_el);
    this._keyboard_el = keyboard_el;
    if (should_animate) {
      requestAnimationFrame(() => {
        if (this._keyboard_el === keyboard_el) {
          keyboard_el.style.opacity = "1";
        }
      });
    }
  }
  renderKey(key) {
    const button_el = document.createElement("button");
    button_el.setAttribute("key", key);
    button_el.setAttribute("tabindex", "0");
    button_el.type = "button";
    button_el.className = "border-base-200 bg-base-100 relative cursor-pointer rounded-xl border p-[8px]";
    button_el.style.height = "56px";
    button_el.style.width = key[0] === "{" && key.length > 1 ? "160px" : "64px";
    button_el.style.transition = "box-shadow 200ms, top 200ms";
    button_el.style.boxShadow = "0 4px 0 0.04px rgba(0, 0, 0, 0.1)";
    if (key === "{space}") {
      button_el.style.flex = "1";
      button_el.style.minWidth = "160px";
      button_el.style.maxWidth = "400px";
    }
    button_el.textContent = this.keyLabel(key);
    button_el.addEventListener("mousedown", (event) => event.preventDefault());
    button_el.addEventListener("focus", () => this.focusInput());
    button_el.addEventListener("click", () => this.handleKeyPress(key));
    if (key === "{caps}") {
      const dot_el = document.createElement("div");
      dot_el.setAttribute("dot", "");
      dot_el.className = `absolute top-[8px] right-[8px] h-[8px] w-[8px] rounded-full ${this.state() !== "normal" ? "bg-success" : "bg-base-200"}`;
      button_el.appendChild(dot_el);
    }
    return button_el;
  }
  keyLabel(key) {
    return key === "{space}" ? "Space" : key === "{caps}" ? "Caps Lock" : key === "{backspace}" ? "Backspace" : key;
  }
  preventNativeKeyboard() {
    const input_el = this._element.nativeElement;
    if (!this._native_keyboard_prevented) {
      this._original_readonly = input_el.readOnly;
      this._original_inputmode = input_el.getAttribute("inputmode");
      this._native_keyboard_prevented = true;
    }
    input_el.readOnly = true;
    input_el.setAttribute("readonly", "");
    input_el.setAttribute("inputmode", "none");
  }
  restoreNativeKeyboardState() {
    if (!this._native_keyboard_prevented)
      return;
    const input_el = this._element.nativeElement;
    input_el.readOnly = this._original_readonly;
    if (this._original_readonly) {
      input_el.setAttribute("readonly", "");
    } else {
      input_el.removeAttribute("readonly");
    }
    if (this._original_inputmode === null) {
      input_el.removeAttribute("inputmode");
    } else {
      input_el.setAttribute("inputmode", this._original_inputmode);
    }
    this._native_keyboard_prevented = false;
  }
  applyOverlayPosition() {
    if (!this._overlay_ref)
      return;
    const overlay_el = this._overlay_ref.overlayElement;
    overlay_el.style.position = "fixed";
    overlay_el.style.left = "0";
    overlay_el.style.right = "0";
    overlay_el.style.width = "100vw";
    overlay_el.style.top = this._position === "top" ? "0" : "";
    overlay_el.style.bottom = this._position === "bottom" ? "0" : "";
  }
  preferredPosition() {
    const box = this._element.nativeElement.getBoundingClientRect();
    const space_above = box.top;
    const space_below = window.innerHeight - box.bottom;
    return space_below >= space_above ? "bottom" : "top";
  }
};
_VirtualKeyboardComponent._enabled = false;
_VirtualKeyboardComponent._instances = /* @__PURE__ */ new Set();
_VirtualKeyboardComponent.\u0275fac = function VirtualKeyboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VirtualKeyboardComponent)();
};
_VirtualKeyboardComponent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _VirtualKeyboardComponent, selectors: [["input", "keyboard", ""], ["textarea", "keyboard", ""]], hostBindings: function VirtualKeyboardComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("pointerdown", function VirtualKeyboardComponent_pointerdown_HostBindingHandler() {
      return ctx.syncNativeKeyboardState();
    })("focus", function VirtualKeyboardComponent_focus_HostBindingHandler() {
      return ctx.onFocus();
    })("blur", function VirtualKeyboardComponent_blur_HostBindingHandler() {
      return ctx.onBlur();
    })("resize", function VirtualKeyboardComponent_resize_HostBindingHandler() {
      return ctx.reposition();
    }, \u0275\u0275resolveWindow);
  }
}, inputs: { keyset: [1, "keyset"] }, outputs: { keyset: "keysetChange" }, features: [\u0275\u0275InheritDefinitionFeature] });
var VirtualKeyboardComponent = _VirtualKeyboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualKeyboardComponent, [{
    type: Directive,
    args: [{
      selector: "input[keyboard],textarea[keyboard]",
      host: {
        "(pointerdown)": "syncNativeKeyboardState()",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()",
        "(window:resize)": "reposition()"
      }
    }]
  }], () => [], { keyset: [{ type: Input, args: [{ isSignal: true, alias: "keyset", required: false }] }, { type: Output, args: ["keysetChange"] }] });
})();

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
  const list = await _(`${STAFF_ENDPOINT}${q ? "?" + query : ""}`);
  return list.map((item) => new StaffUser(item));
}
async function searchStaffByEmailPrefix(email_prefix) {
  const escaped_prefix = email_prefix.replace(/'/g, "''");
  const query = toQueryString({
    filter: `startsWith(mail,'${escaped_prefix}')`
  });
  const list = await _(`${STAFF_ENDPOINT}?${query}`);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await _(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`));
}

// libs/form-fields/src/lib/user-search-field.component.ts
var _c02 = ["input"];
var _c1 = (a0) => ({ name: a0 });
function UserSearchFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("user", ctx);
  }
}
function UserSearchFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function UserSearchFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
function UserSearchFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 14);
    \u0275\u0275element(2, "a-user-avatar", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("value", user_r1);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r1.email, " ");
  }
}
function UserSearchFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 18);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_14_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_14_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const term_r4 = \u0275\u0275readContextLet(11);
      ctx_r2.setExternalValue(term_r4);
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    });
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FORM.USER_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c1, term_r4)), " ");
  }
}
function UserSearchFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 20);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_15_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_15_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const term_r4 = \u0275\u0275readContextLet(11);
      ctx_r2.setValueFromEmail(term_r4);
      return \u0275\u0275resetView(ctx_r2.stopEvent($event));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "FORM.USER_SET_EXTERNAL", \u0275\u0275pureFunction1(4, _c1, term_r4)), " ");
  }
}
function UserSearchFieldComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_16_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.empty_fn()());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const term_r4 = \u0275\u0275readContextLet(11);
    \u0275\u0275property("disabled", !ctx_r2.empty_fn());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, term_r4 ? "FORM.USER_EMPTY" : ""), " ", ctx_r2.error(), " ");
  }
}
function UserSearchFieldComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearUser());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "person_cancel");
    \u0275\u0275elementEnd()();
  }
}
var _UserSearchFieldComponent = class _UserSearchFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.autocomplete = input(
      ...ngDevMode ? [void 0, { debugName: "autocomplete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_basic_search = settingSignal("basic_user_search", true);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._search.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      null,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_user = computed(
      () => {
        const term = this.search_term();
        return term && typeof term !== "string" && term.email !== EMPTY_USER.email ? term : null;
      },
      ...ngDevMode ? [{ debugName: "selected_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placeholder = input(
      "FORM.USER_SEARCH",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      void 0,
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests = input(
      void 0,
      ...ngDevMode ? [{ debugName: "guests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests_only = input(
      false,
      ...ngDevMode ? [{ debugName: "guests_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disable_search = input(
      false,
      ...ngDevMode ? [{ debugName: "disable_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear = input(
      false,
      ...ngDevMode ? [{ debugName: "clear" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = input(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.validate = input(
      void 0,
      ...ngDevMode ? [{ debugName: "validate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.empty_fn = input(
      void 0,
      ...ngDevMode ? [{ debugName: "empty_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_externals = input(
      false,
      ...ngDevMode ? [{ debugName: "allow_externals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = input(
      void 0,
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.query_fn = input(
      async (q) => {
        var _a;
        const guest_query = () => searchGuests(q).catch(() => []);
        if (this.guests_only())
          return guest_query();
        const staff = this.use_basic_search() ? await eh({
          q,
          authority_id: (_a = Mt()) == null ? void 0 : _a.id,
          fields: ["id", "name", "email"].join(",")
        }).then((_2) => _2.data.map((u2) => new User(u2))).catch(() => []) : await searchStaff(q).catch(() => []);
        if (!this.guests())
          return staff;
        return [...staff, ...await guest_query()];
      },
      ...ngDevMode ? [{ debugName: "query_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_term = debounced(this.search_term, 300);
    this._search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ term: this._debounced_term.value() }),
      loader: async ({ params: { term } }) => {
        var _a;
        if (term && typeof term !== "string") {
          const user = term;
          return user.email === EMPTY_USER.email ? [] : [user];
        }
        const selected = this.user();
        if (selected && term === selected.name)
          return [selected];
        if (this.disable_search())
          return [];
        const s = `${term || ""}`.toLowerCase();
        if ((_a = this.options()) == null ? void 0 : _a.length) {
          return this.options().filter((_2) => _2.email !== EMPTY_USER.email && (_2.name.toLowerCase().includes(s) || _2.email.toLowerCase().includes(s)));
        }
        if (s.length <= 2)
          return [];
        const list = await this.query_fn()(s).catch(() => []);
        return list.filter((_2) => !!_2 && _2.email !== EMPTY_USER.email).sort((a, b) => {
          var _a2, _b;
          return (((_a2 = a.name) == null ? void 0 : _a2.toLowerCase()) || "").localeCompare((_b = b.name) == null ? void 0 : _b.toLowerCase());
        });
      }
    }));
    this.search_results = computed(
      () => this._search.value() ?? [],
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._input_el = viewChild("input", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_input_el" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this._autocomplete_trigger = viewChild(
      MatAutocompleteTrigger,
      ...ngDevMode ? [{ debugName: "_autocomplete_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value, email) {
    const value = typeof new_value === "string" ? new User({ name: new_value, email }) : new_value;
    this._onChange ? this._onChange(value) : null;
    this._onTouch ? this._onTouch(value) : null;
    this.user.set(value);
    this.search_term.set(value);
    if (typeof new_value !== "string" && !this.use_basic_search() && ((value == null ? void 0 : value.id) || (value == null ? void 0 : value.email))) {
      th(value.email || value.id).then((details) => {
        if (!details)
          return;
        const updated = new User(__spreadValues(__spreadValues({}, value), new User(details)));
        this._onChange ? this._onChange(updated) : null;
        this.user.set(updated);
        this.search_term.set(updated);
      }).catch(() => value);
    }
  }
  setExternalValue(name) {
    this.setValue(name);
    this.dismissAutocomplete();
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.user.set(value);
    this.resetTerm();
  }
  displayFn(user) {
    return user && user.email !== EMPTY_USER.email && user.name ? user.name : "";
  }
  stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  /** Check if a string is a valid email address */
  isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  /**
   * Set the value from a typed email address
   * @param email Email address to create a user from
   */
  setValueFromEmail(email) {
    const name = email.split("@")[0];
    this.setValue(name, email);
    this.dismissAutocomplete();
  }
  clearUser() {
    this.user.set(null);
    this._onChange ? this._onChange(null) : null;
    this._onTouch ? this._onTouch(null) : null;
    this.resetTerm();
  }
  blurInput() {
    var _a, _b;
    (_b = (_a = this._input_el()) == null ? void 0 : _a.nativeElement) == null ? void 0 : _b.blur();
  }
  selectInputText() {
    setTimeout(() => {
      var _a, _b;
      return (_b = (_a = this._input_el()) == null ? void 0 : _a.nativeElement) == null ? void 0 : _b.select();
    });
  }
  dismissAutocomplete() {
    setTimeout(() => {
      var _a;
      (_a = this._autocomplete_trigger()) == null ? void 0 : _a.closePanel();
      this.blurInput();
    });
  }
  resetTerm() {
    var _a;
    this.search_term.set(this.user());
    const input2 = (_a = this._input_el()) == null ? void 0 : _a.nativeElement;
    if (input2)
      input2.value = this.displayFn(this.user());
  }
};
_UserSearchFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UserSearchFieldComponent_BaseFactory;
  return function UserSearchFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275UserSearchFieldComponent_BaseFactory || (\u0275UserSearchFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserSearchFieldComponent)))(__ngFactoryType__ || _UserSearchFieldComponent);
  };
})();
_UserSearchFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSearchFieldComponent, selectors: [["a-user-search-field"]], viewQuery: function UserSearchFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c02, 5, ElementRef)(ctx._autocomplete_trigger, MatAutocompleteTrigger, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, inputs: { autocomplete: [1, "autocomplete"], disabled: [1, "disabled"], placeholder: [1, "placeholder"], options: [1, "options"], guests: [1, "guests"], guests_only: [1, "guests_only"], disable_search: [1, "disable_search"], clear: [1, "clear"], error: [1, "error"], validate: [1, "validate"], empty_fn: [1, "empty_fn"], allow_externals: [1, "allow_externals"], filter: [1, "filter"], query_fn: [1, "query_fn"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UserSearchFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 20, vars: 18, consts: [["input", ""], ["auto", "matAutocomplete"], [1, "flex", "w-full", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matPrefix", "", 1, "mr-2", "-ml-1", "flex", "h-8", "w-8", "items-center", "justify-center"], [3, "user"], [1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["keyboard", "", "matInput", "", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled", "matAutocomplete", "placeholder"], ["matSuffix", "", "diameter", "24"], [3, "optionSelected", "displayWith"], [3, "value"], [1, "pointer-events-none", "relative"], [3, "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border"], [1, "flex", "items-center", "space-x-2"], [1, "-ml-2", 3, "user"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "pointer-events-auto", "absolute", "inset-0", "px-4", 3, "mousedown", "touchstart", "click"], [1, "pointer-events-none"], [1, "pointer-events-auto", "absolute", "inset-0", "flex", "items-center", "px-4", 3, "mousedown", "touchstart", "click"], [3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "div", 4);
    \u0275\u0275conditionalCreate(3, UserSearchFieldComponent_Conditional_3_Template, 1, 1, "a-user-avatar", 5)(4, UserSearchFieldComponent_Conditional_4_Template, 2, 0, "icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 7, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_5_listener($event) {
      return ctx.search_term.set($event);
    })("focus", function UserSearchFieldComponent_Template_input_focus_5_listener() {
      return ctx.selectInputText();
    })("blur", function UserSearchFieldComponent_Template_input_blur_5_listener() {
      return ctx.resetTerm();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(8, UserSearchFieldComponent_Conditional_8_Template, 1, 0, "mat-spinner", 8);
    \u0275\u0275elementStart(9, "mat-autocomplete", 9, 1);
    \u0275\u0275listener("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_9_listener($event) {
      return ctx.setValue($event.option.value);
    });
    \u0275\u0275declareLet(11);
    \u0275\u0275repeaterCreate(12, UserSearchFieldComponent_For_13_Template, 8, 4, "mat-option", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, UserSearchFieldComponent_Conditional_14_Template, 5, 6, "mat-option", 11);
    \u0275\u0275conditionalCreate(15, UserSearchFieldComponent_Conditional_15_Template, 4, 6, "mat-option", 11);
    \u0275\u0275conditionalCreate(16, UserSearchFieldComponent_Conditional_16_Template, 3, 5, "mat-option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-error");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, UserSearchFieldComponent_Conditional_19_Template, 3, 0, "button", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const auto_r8 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275classProp("no-subscript", !ctx.error() && !ctx.selected_user());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx.selected_user()) ? 3 : 4, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.search_term())("disabled", ctx.disabled())("matAutocomplete", auto_r8)("placeholder", \u0275\u0275pipeBind1(7, 15, ctx.placeholder()));
    \u0275\u0275attribute("autocomplete", ctx.autocomplete());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loading() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("displayWith", ctx.displayFn);
    const user_list_r9 = ctx.search_results();
    \u0275\u0275advance(2);
    const term_r10 = \u0275\u0275storeLet(ctx.search_term());
    \u0275\u0275advance();
    \u0275\u0275repeater(user_list_r9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(term_r10 && ctx.validate() && ctx.validate()(term_r10) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(term_r10 && ctx.allow_externals() && ctx.isValidEmail(term_r10) && !(ctx.validate() && ctx.validate()(term_r10)) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(user_list_r9 == null ? void 0 : user_list_r9.length) && (ctx.search_term() || ctx.error()) && !ctx.disable_search() ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.error());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.clear() ? 19 : -1);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatPrefix,
  MatSuffix,
  MatInputModule,
  MatInput,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatRippleModule,
  MatRipple,
  IconComponent,
  UserAvatarComponent,
  VirtualKeyboardComponent,
  TranslatePipe
], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nicon[_ngcontent-%COMP%] {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */"] });
var UserSearchFieldComponent = _UserSearchFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-search-field", template: `
        <div class="flex w-full space-x-2">
            <mat-form-field
                appearance="outline"
                class="w-1/2 flex-1"
                [class.no-subscript]="!error() && !selected_user()"
            >
                <div
                    matPrefix
                    class="mr-2 -ml-1 flex h-8 w-8 items-center justify-center"
                >
                    @if (selected_user(); as user) {
                        <a-user-avatar [user]="user" />
                    } @else {
                        <icon
                            class="block flex w-6 items-center justify-center text-2xl"
                            >search</icon
                        >
                    }
                </div>
                <input
                    #input
                    keyboard
                    matInput
                    [attr.autocomplete]="autocomplete()"
                    [ngModel]="search_term()"
                    (ngModelChange)="search_term.set($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
                    (focus)="selectInputText()"
                    (blur)="resetTerm()"
                />
                @if (loading()) {
                    <mat-spinner matSuffix diameter="24"></mat-spinner>
                }
                <mat-autocomplete
                    #auto="matAutocomplete"
                    [displayWith]="displayFn"
                    (optionSelected)="setValue($event.option.value)"
                >
                    @let user_list = search_results();
                    @let term = search_term();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (term && validate() && validate()(term)) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setExternalValue(term); stopEvent($event)
                                "
                            >
                                <div class="pointer-events-none">
                                    {{
                                        'FORM.USER_ADD_EXTERNAL'
                                            | translate: { name: term }
                                    }}
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (
                        term &&
                        allow_externals() &&
                        isValidEmail(term) &&
                        !(validate() && validate()(term))
                    ) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 flex items-center px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setValueFromEmail(term); stopEvent($event)
                                "
                            >
                                {{
                                    'FORM.USER_SET_EXTERNAL'
                                        | translate: { name: term }
                                }}
                            </div>
                        </mat-option>
                    }
                    @if (
                        !user_list?.length &&
                        (search_term() || error()) &&
                        !disable_search()
                    ) {
                        <mat-option
                            [disabled]="!empty_fn()"
                            (click)="empty_fn()()"
                        >
                            {{ (term ? 'FORM.USER_EMPTY' : '') | translate }}
                            {{ error() }}
                        </mat-option>
                    }
                </mat-autocomplete>
                <mat-error>{{ error() }}</mat-error>
            </mat-form-field>
            @if (clear()) {
                <button
                    icon
                    matRipple
                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                    (click)="clearUser()"
                >
                    <icon>person_cancel</icon>
                </button>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserSearchFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      UserAvatarComponent,
      VirtualKeyboardComponent
    ], styles: ["/* angular:styles/component:css;d84628be6394a4ab204c469dc548d2d04b7c619d7a49b10690a47d4a374a3d83;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/user-search-field.component.ts */\n:host {\n  display: block;\n}\nicon {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */\n"] }]
  }], null, { autocomplete: [{ type: Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], guests: [{ type: Input, args: [{ isSignal: true, alias: "guests", required: false }] }], guests_only: [{ type: Input, args: [{ isSignal: true, alias: "guests_only", required: false }] }], disable_search: [{ type: Input, args: [{ isSignal: true, alias: "disable_search", required: false }] }], clear: [{ type: Input, args: [{ isSignal: true, alias: "clear", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], validate: [{ type: Input, args: [{ isSignal: true, alias: "validate", required: false }] }], empty_fn: [{ type: Input, args: [{ isSignal: true, alias: "empty_fn", required: false }] }], allow_externals: [{ type: Input, args: [{ isSignal: true, alias: "allow_externals", required: false }] }], filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }], query_fn: [{ type: Input, args: [{ isSignal: true, alias: "query_fn", required: false }] }], _input_el: [{ type: ViewChild, args: ["input", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }], _autocomplete_trigger: [{ type: ViewChild, args: [forwardRef(() => MatAutocompleteTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 199 });
})();

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var INFLIGHT_REQUESTS = /* @__PURE__ */ new Map();
var EMPTY_USER2 = {};
async function fetchUser(user_id, lookup_mode) {
  if (lookup_mode === "email-prefix") {
    const email_prefix = user_id.split("@")[0];
    const [staff] = await searchStaffByEmailPrefix(email_prefix).catch(() => []);
    return staff ? new User({ name: staff.name, email: user_id }) : EMPTY_USER2;
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
  return EMPTY_USER2;
}
var _UserPipe = class _UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   * @param lookup_mode Whether to match the full ID or an email prefix
   */
  async transform(user_id, lookup_mode = "exact") {
    if (!user_id)
      return EMPTY_USER2;
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
};
_UserPipe.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserPipe)();
};
_UserPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
var UserPipe = _UserPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

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
var _AssetGroupPipe = class _AssetGroupPipe {
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
    const group = await np(group_id).catch(() => null);
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
};
_AssetGroupPipe.\u0275fac = function AssetGroupPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetGroupPipe)();
};
_AssetGroupPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "assetgroup", type: _AssetGroupPipe, pure: true });
var AssetGroupPipe = _AssetGroupPipe;
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
    RULE_REQUESTS[zone_id] = ac(zone_id, "assets_config").then((_2) => _2.details instanceof Array ? _2.details : []).catch(() => []);
  return RULE_REQUESTS[zone_id];
}
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => {
    var _a, _b, _c, _d;
    return item.name === rule.name || ((_a = item.category) == null ? void 0 : _a.name.includes(rule.name)) || ((_b = event.resources) == null ? void 0 : _b.some((resource2) => {
      var _a2;
      return (_a2 = resource2.zones) == null ? void 0 : _a2.includes(rule.name);
    })) || ((_d = (_c = event.space) == null ? void 0 : _c.zones) == null ? void 0 : _d.includes(rule.name)) || rule.name === "*";
  };
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

// libs/assets/src/lib/assets.fn.ts
function filter_hidden_items(response) {
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !(item == null ? void 0 : item.hidden))
  });
}
async function visible_category_ids() {
  const response = await op({});
  return new Set(response.data.filter((item) => !(item == null ? void 0 : item.hidden)).map((item) => item.id));
}
async function queryAssetCategories(query = {}) {
  if (query.hidden === true)
    return op(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  return filter_hidden_items(await op(rest));
}
async function queryAssetTypes(query = {}) {
  if (query.hidden === true)
    return tp(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  const [response, visible_ids] = await Promise.all([
    tp(rest),
    visible_category_ids()
  ]);
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !(item == null ? void 0 : item.hidden) && visible_ids.has(item.category_id))
  });
}
async function queryAssets(query = {}) {
  if (query.hidden === true)
    return Ql(query);
  const _a = query, { hidden } = _a, rest = __objRest(_a, ["hidden"]);
  const [response, types] = await Promise.all([
    Ql(rest),
    queryAssetTypes(__spreadProps(__spreadValues({}, rest.zone_id ? { zone_id: rest.zone_id } : {}), {
      limit: 2e3
    }))
  ]);
  const visible_type_ids = new Set(types.data.map((item) => item.id));
  return __spreadProps(__spreadValues({}, response), {
    data: response.data.filter((item) => !(item == null ? void 0 : item.hidden) && visible_type_ids.has(item.asset_type_id))
  });
}
var _GROUPS_CACHE = /* @__PURE__ */ new Map();
var REMOVE_QUERY_KEYS = ["period_start", "period_end", "type", "rejected"];
async function queryAllAssetPages(query = {}) {
  let response = await Ql(__spreadProps(__spreadValues({}, query), {
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
    tp(q),
    queryAllAssetPages(q)
  ]);
  let groups = types.data.filter((item) => !(item == null ? void 0 : item.hidden));
  if (q.type_id)
    groups = groups.filter((item) => item.id === q.type_id);
  const visible_type_ids = new Set(groups.map((item) => item.id));
  const assets_by_type = /* @__PURE__ */ new Map();
  for (const asset of assets.data) {
    if ((asset == null ? void 0 : asset.hidden) || !visible_type_ids.has(asset.asset_type_id)) {
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
async function queryGroupAvailability(query, ignore = []) {
  const [products, bookings] = await Promise.all([
    queryAssetGroupsExtended(query),
    queryBookings(__spreadProps(__spreadValues({}, query), { type: "asset-request" }))
  ]);
  const active_bookings = bookings.filter((_2) => _2.status !== "declined" && _2.status !== "cancelled");
  return products.map((product) => __spreadProps(__spreadValues({}, product), {
    assets: product.assets.filter((asset) => (ignore == null ? void 0 : ignore.includes(asset.id)) || !active_bookings.find((booking) => {
      var _a;
      return !ignore.includes(booking.id) && (booking.asset_id === asset.id || ((_a = booking.asset_ids) == null ? void 0 : _a.includes(asset.id)));
    }))
  }));
}
function differenceBetweenAssetRequests(new_assets, old_assets) {
  if ((!new_assets || (new_assets == null ? void 0 : new_assets.length) <= 0) && (old_assets == null ? void 0 : old_assets.length))
    return [];
  if (!old_assets)
    return [];
  const changed = [];
  for (const request of new_assets) {
    const match = old_assets.find((_2) => _2.id === request.id);
    if (!match || match.ref_id !== request.ref_id) {
      changed.push(request.id);
    }
  }
  return changed;
}
async function validateAssetRequestsForResource({ id, ical_uid, from_booking, from_bookings }, { date, duration, all_day, host, location_name, location_id, zones, reset_state }, new_assets = [], force_create = false) {
  const requests = await queryBookings({
    period_start: getUnixTime(date),
    period_end: getUnixTime(addMinutes(date, duration)),
    type: "asset-request",
    zones: zones.join(",")
  });
  const native = !!(from_booking || from_bookings);
  const bookings = id && (ical_uid || native) ? (await queryBookings({
    period_start: getUnixTime(startOfDay(date)),
    period_end: getUnixTime(endOfDay(date)),
    type: "asset-request",
    email: host,
    event_id: native ? "" : id,
    ical_uid
  })).filter((_2) => {
    var _a;
    return !native || String((_a = _2.extension_data) == null ? void 0 : _a.parent_id) === String(id);
  }) : [];
  const booking_list = bookings.map((_2) => [
    _2.id,
    new AssetRequest(_2.extension_data.request)
  ]);
  new_assets == null ? void 0 : new_assets.forEach((_2) => _2.conflict = false);
  let changed = force_create ? new_assets.map((_2) => _2.id) : differenceBetweenAssetRequests(new_assets, booking_list.map(([_2, r]) => r));
  if (reset_state) {
    const has_state = bookings.filter((_2) => _2.approved || _2.rejected);
    changed = unique([
      ...changed,
      ...has_state.map((_2) => _2.extension_data.request_id)
    ]);
  }
  const unchanged = booking_list.filter(([_2, request]) => !changed.includes(request.id));
  const changed_requests = booking_list.filter(([_2, { id: id2 }]) => changed.includes(id2));
  const changed_assets = new_assets.filter(({ id: id2 }) => changed.includes(id2));
  const filtered = requests.filter((req) => !req.rejected && (!bookings.find((b) => b.id === req.id) || unchanged.find(([id2]) => req.event_id === id2)));
  let used_ids = flatten(filtered.map((_2) => _2.asset_ids));
  for (const [_2, request] of unchanged) {
    used_ids = [
      ...used_ids,
      ...flatten(request.items.map((_3) => _3.item_ids))
    ];
  }
  const available_groups = await queryGroupAvailability({
    period_start: getUnixTime(date),
    period_end: getUnixTime(addMinutes(date, duration)),
    type: "asset-request",
    zones: (zones || []).join(",")
  }, bookings.map((_2) => _2.id));
  const processed_requests = changed_assets.map((request) => {
    const asset_ids = flatten(request.items.map(({ id: id2, item_ids, quantity }) => {
      var _a;
      const selected_ids = item_ids || [];
      const assets = (_a = available_groups.find((_2) => _2.id === id2)) == null ? void 0 : _a.assets;
      if (!assets)
        return selected_ids;
      const list = [];
      return new Array(quantity).fill(0).map((_2, idx) => {
        var _a2;
        const item = used_ids.includes(selected_ids[idx]) || list.includes(selected_ids[idx]) || !selected_ids[idx] ? (_a2 = assets == null ? void 0 : assets.find(({ id: id3 }) => {
          return !used_ids.includes(id3) && !list.includes(id3);
        })) == null ? void 0 : _a2.id : selected_ids[idx];
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
    const booking = bookings.find((_2) => _2.asset_ids.find((id2) => {
      var _a;
      return (_a = request.items) == null ? void 0 : _a.find((i) => {
        var _a2;
        return (_a2 = i.item_ids) == null ? void 0 : _a2.includes(id2);
      });
    }));
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
      asset_name: request.items.map((_2) => _2.name).join(", "),
      title: request.items.map((_2) => _2.name).join(", "),
      approved: !reset_state && (booking == null ? void 0 : booking.approved) && !request._changed,
      rejected: !reset_state && (booking == null ? void 0 : booking.rejected) && !request._changed,
      extension_data: {
        parent_id: id,
        request_id: request.id,
        location_id,
        request: new AssetRequest(__spreadProps(__spreadValues({}, request), { event: null }))
      },
      zones: zones || []
    };
    return () => native ? createBooking(__spreadProps(__spreadValues({}, new Booking(asset_data).toJSON()), {
      parent_id: parentBookingId(id)
    })) : createBooking(new Booking(asset_data), {
      ical_uid,
      event_id: id
    });
  });
  return async () => {
    await Promise.all(changed_requests.map(([id2]) => removeBooking(id2)));
    await Promise.all(processed_requests.map((create) => create()));
  };
}

// libs/assets/src/lib/asset-state.service.ts
function assetOptionsMatch(a, b) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b)
  ]));
  return keys.every((key) => Object.is(a[key], b[key]));
}
var _AssetStateService = class _AssetStateService {
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
        var _a;
        const building = this._org.active_building();
        const overrides = this._settings_service.overrides();
        return this._network_consumed() && this._assetsEnabled() && this._org.initialised() && !!(building == null ? void 0 : building.id) && overrides.length >= (((_a = this._org.settings) == null ? void 0 : _a.length) || 0) + 2;
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
        return assets.filter((_2) => {
          var _a;
          return ((_a = _2.assets) == null ? void 0 : _a.length) && visible_categories.includes(_2.category_id) && (!category.length || category.includes(_2.category_id)) && (_2.name.toLowerCase().includes(search) || _2.description.toLowerCase().includes(search)) && assetAvailable(_2, rules, this._options());
        });
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
      if (!this._requests_ready() || !(bld == null ? void 0 : bld.id) || !options)
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
      this._category.set(categories.filter((_2) => _2 !== value));
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
    const request = existing || ac(building_id, "assets-settings").then((metadata) => metadata.details || {}).catch(() => ({}));
    if (!existing)
      this._settings_requests.set(building_id, request);
    this._settings.set(await request);
    request.finally(() => this._settings_requests.delete(building_id));
  }
};
_AssetStateService.\u0275fac = function AssetStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetStateService)();
};
_AssetStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateService, factory: _AssetStateService.\u0275fac, providedIn: "root" });
var AssetStateService = _AssetStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/form-fields/src/lib/duration-field.component.ts
var _c03 = ["*"];
var _forTrack02 = ($index, $item) => $item.id;
function DurationFieldComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r2.time() + ctx_r2.duration() * 6e4, ctx_r2.time_format() + " (z)", ctx_r2.tz()), " ");
  }
}
function DurationFieldComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.end_time_error(), " ");
  }
}
function DurationFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7, 1);
    \u0275\u0275listener("change", function DurationFieldComponent_Conditional_0_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r1);
      const end_input_r2 = \u0275\u0275reference(2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEndTime(end_input_r2.value));
    })("blur", function DurationFieldComponent_Conditional_0_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.touch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8)(4, "icon", 9);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, DurationFieldComponent_Conditional_0_Conditional_6_Template, 3, 5, "div", 10);
    \u0275\u0275conditionalCreate(7, DurationFieldComponent_Conditional_0_Conditional_7_Template, 2, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(3);
    \u0275\u0275classProp("opacity-30", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.end_time_value())("disabled", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275attribute("aria-invalid", !!ctx_r2.end_time_error());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disabled() || ctx_r2.no_options())("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.end_time_error() ? 7 : -1);
  }
}
function DurationFieldComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, (_a = ctx_r2.selected()) == null ? void 0 : _a.date, ctx_r2.time_format() + " (z)", ctx_r2.tz()), " ");
  }
}
function DurationFieldComponent_Conditional_1_Template(rf, ctx) {
  var _a, _b, _c, _d, _e;
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_Conditional_1_Conditional_5_Template, 3, 5, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 9);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(3);
    \u0275\u0275classProp("opacity-30", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275property("disabled", ctx_r2.disabled() || ctx_r2.no_options())("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ((_a = ctx_r2.selected()) == null ? void 0 : _a.date) ? \u0275\u0275pipeBind2(4, 8, (_b = ctx_r2.selected()) == null ? void 0 : _b.date, ctx_r2.selected().id >= 24 * 60 ? "mediumDate" : ctx_r2.time_format()) + " (" : ((_c = ctx_r2.duration_options()) == null ? void 0 : _c.length) ? "" : "No duration options available", "", (_d = ctx_r2.selected()) == null ? void 0 : _d.name, "", ((_e = ctx_r2.selected()) == null ? void 0 : _e.date) ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 5 : -1);
  }
}
function DurationFieldComponent_For_5_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r6.date, ctx_r2.time_format() + " (z)", ctx_r2.tz()), " ");
  }
}
function DurationFieldComponent_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DurationFieldComponent_For_5_Conditional_2_Conditional_4_Template, 3, 5, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", option_r6.date ? \u0275\u0275pipeBind2(3, 4, option_r6.date, option_r6.id >= 24 * 60 ? "mediumDate" : ctx_r2.time_format()) + " (" : "", "", option_r6.name, "", option_r6.date ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 4 : -1);
  }
}
function DurationFieldComponent_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 19);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function DurationFieldComponent_For_5_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function DurationFieldComponent_For_5_Template_button_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setValue(option_r6.id);
      return \u0275\u0275resetView(ctx_r2.touch());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DurationFieldComponent_For_5_Conditional_2_Template, 5, 7, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_For_5_Conditional_5_Template, 2, 0, "icon", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-duration", option_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.force() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.force());
    \u0275\u0275advance();
    \u0275\u0275conditional(((_a = ctx_r2.selected()) == null ? void 0 : _a.id) === option_r6.id ? 5 : -1);
  }
}
function DurationFieldComponent_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "No duration options to select");
    \u0275\u0275elementEnd();
  }
}
var _DurationFieldComponent = class _DurationFieldComponent {
  constructor() {
    this.max = input(
      240,
      ...ngDevMode ? [{ debugName: "max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min = input(
      30,
      ...ngDevMode ? [{ debugName: "min" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.step = input(
      15,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time = input(
      void 0,
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_options = input(
      [],
      ...ngDevMode ? [{ debugName: "custom_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force = input(
      void 0,
      ...ngDevMode ? [{ debugName: "force" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = input(
      false,
      ...ngDevMode ? [{ debugName: "use_24hr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = input(
      "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time = input(
      void 0,
      ...ngDevMode ? [{ debugName: "end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_end_time = input(
      false,
      ...ngDevMode ? [{ debugName: "allow_end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time_error = signal(
      "",
      ...ngDevMode ? [{ debugName: "end_time_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time_value = computed(
      () => this.time() != null ? format(addMinutes(this.time(), this.duration()), "HH:mm") : "",
      ...ngDevMode ? [{ debugName: "end_time_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration = signal(
      60,
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration_options = signal(
      [],
      ...ngDevMode ? [{ debugName: "duration_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_options = signal(
      false,
      ...ngDevMode ? [{ debugName: "no_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this.use_24hr() ? "HH : mm" : "h : mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = computed(
      () => this.duration_options().find((_2) => _2.id === this.duration()),
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.tz = computed(
      () => {
        const tz = this.timezone();
        if (!tz)
          return "";
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? "" : tz_offset;
      },
      ...ngDevMode ? [{ debugName: "tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._setDurationOptions();
    this._updateNoOptions();
    this._updateOption();
  }
  ngOnChanges(changes) {
    this._clearEndTimeError();
    if (changes.max || changes.min || changes.step || changes.time || changes.custom_options || changes.end_time || changes.timezone) {
      this._setDurationOptions();
      this._updateNoOptions();
      this._updateOption();
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this._clearEndTimeError();
    this.duration.set(new_value);
    if (this._onChange) {
      this._onChange(+new_value);
    }
  }
  touch() {
    var _a;
    (_a = this._onTouch) == null ? void 0 : _a.call(this, this.duration());
  }
  /** Convert a local end time on the reference date to a duration in minutes. */
  setEndTime(value) {
    var _a;
    const start = this.time();
    if (!this.allow_end_time() || start == null || this.disabled() || this.no_options())
      return;
    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
    const end = match ? set(start, {
      hours: +match[1],
      minutes: +match[2],
      seconds: 0,
      milliseconds: 0
    }) : void 0;
    const duration = end ? differenceInMinutes(end, start) : NaN;
    if (!Number.isFinite(duration) || duration <= 0 || duration < this.min() || duration > this._effectiveMax(this.max(), start)) {
      this.end_time_error.set("Enter an end time after the start time and within the allowed duration.");
      (_a = this._onValidatorChange) == null ? void 0 : _a.call(this);
      this.touch();
      return;
    }
    this.setValue(duration);
    this._setDurationOptions();
    this._updateNoOptions();
    this.touch();
  }
  _clearEndTimeError() {
    var _a;
    if (!this.end_time_error())
      return;
    this.end_time_error.set("");
    (_a = this._onValidatorChange) == null ? void 0 : _a.call(this);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this._clearEndTimeError();
    this.duration.set(value);
    this._setDurationOptions();
    this._updateNoOptions();
    this._updateOption();
  }
  _setDurationOptions() {
    this.duration_options.set(this.generateDurationOptions(this.max(), this.min(), this.step()));
  }
  setDisabledState(disabled2) {
    this.disabled.set(disabled2);
    this._updateNoOptions();
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /** Mark the control invalid when the selected date has no valid durations. */
  validate(_2) {
    if (this.no_options())
      return { no_duration_options: true };
    return this.end_time_error() ? { invalid_end_time: true } : null;
  }
  registerOnValidatorChange(fn) {
    this._onValidatorChange = fn;
  }
  generateDurationOptions(max, min, step) {
    const blocks = [];
    let time = min;
    const timeValue = this.time();
    const date = timeValue ? timeValue : null;
    const effective_max = this._effectiveMax(max, timeValue);
    const latest_end_max = this._effectiveMax(Number.POSITIVE_INFINITY, timeValue);
    const custom_option_ids = new Set([...this.custom_options(), this.duration()].map((_2) => Math.round(+_2 || 0)).filter((_2) => _2 > 0));
    for (const option of custom_option_ids) {
      blocks.push({
        id: option,
        date: date && option < 24 * 60 ? addMinutes(date, option).valueOf() : void 0,
        name: option >= 24 * 60 ? `${formatDuration({
          days: Math.floor(option / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(option / 60),
          minutes: option % 60
        })}`
      });
    }
    while (time <= effective_max) {
      blocks.push({
        id: time,
        date: date && time < 24 * 60 ? addMinutes(date, time).valueOf() : void 0,
        name: time === 0 ? formatDuration({ minutes: 0 }, { zero: true }) : time >= 24 * 60 ? `${formatDuration({
          days: Math.floor(time / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(Math.abs(time) / 60),
          minutes: time % 60
        })}`
      });
      time += step;
    }
    blocks.sort((a, b) => a.id - b.id);
    return blocks.filter((option, index, options) => (index === 0 || options[index - 1].id !== option.id) && option.id > 0 && (custom_option_ids.has(option.id) ? option.id <= latest_end_max : option.id >= min && option.id <= effective_max));
  }
  /** Update whether the field should show as disabled due to no options */
  _updateNoOptions() {
    var _a;
    const next_no_options = !this.disabled() && (!this.duration_options() || this.duration_options().length === 0);
    if (this.no_options() === next_no_options)
      return;
    this.no_options.set(next_no_options);
    (_a = this._onValidatorChange) == null ? void 0 : _a.call(this);
  }
  _updateOption() {
    var _a;
    const duration_options = this.duration_options();
    if (!(duration_options == null ? void 0 : duration_options.length))
      return;
    const idx = duration_options.findIndex((_2) => _2.id === this.duration());
    if (idx < 0)
      this.setValue(((_a = duration_options[0]) == null ? void 0 : _a.id) ?? this.min());
  }
  _effectiveMax(max, time_value) {
    const end_time = this.end_time();
    if (end_time === void 0 || end_time === null || !time_value) {
      return max;
    }
    const end_time_minutes = end_time * 60;
    const tz = this.timezone() || void 0;
    const { hours, minutes } = getTimeInTimezone(time_value, tz);
    const start_minutes = hours * 60 + minutes;
    return Math.max(0, Math.min(max, end_time_minutes - start_minutes));
  }
};
_DurationFieldComponent.\u0275fac = function DurationFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DurationFieldComponent)();
};
_DurationFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DurationFieldComponent, selectors: [["a-duration-field"], ["duration-field"]], inputs: { max: [1, "max"], min: [1, "min"], step: [1, "step"], time: [1, "time"], disabled: [1, "disabled"], custom_options: [1, "custom_options"], force: [1, "force"], use_24hr: [1, "use_24hr"], timezone: [1, "timezone"], end_time: [1, "end_time"], allow_end_time: [1, "allow_end_time"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DurationFieldComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => _DurationFieldComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c03, decls: 9, vars: 2, consts: [["menu", "matMenu"], ["end_input", ""], ["type", "button", "duration-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "opacity-30", "matMenuTriggerFor"], ["xPosition", "before", 1, "max-h-60", "min-w-[18rem]"], ["type", "button", "mat-menu-item", "", 1, "text-left"], ["mat-menu-item", "", "disabled", ""], [1, "border-neutral", "flex", "h-12", "w-full", "items-center", "rounded-sm", "border"], ["type", "time", "aria-label", "End time", 1, "h-full", "min-w-0", "flex-1", "border-0", "bg-transparent", "px-4", 3, "change", "blur", "value", "disabled"], ["type", "button", "end-time-options", "", "aria-label", "Choose duration", 1, "flex", "h-full", "w-12", "shrink-0", "items-center", "justify-center", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], [1, "text-xs", "opacity-30"], ["role", "alert", 1, "text-error", "text-sm"], ["type", "button", "duration-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, "ml-2", "text-2xl"]], template: function DurationFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275conditionalCreate(0, DurationFieldComponent_Conditional_0_Template, 8, 9)(1, DurationFieldComponent_Conditional_1_Template, 8, 11, "button", 2);
    \u0275\u0275elementStart(2, "mat-menu", 3, 0);
    \u0275\u0275repeaterCreate(4, DurationFieldComponent_For_5_Template, 6, 4, "button", 4, _forTrack02, false, DurationFieldComponent_ForEmpty_6_Template, 2, 0, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275projection(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.allow_end_time() && ctx.time() != null && !ctx.force() ? 0 : 1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.duration_options());
  }
}, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, CommonModule, IconComponent, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n}\n.no-subscript[_nghost-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */"] });
var DurationFieldComponent = _DurationFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationFieldComponent, [{
    type: Component,
    args: [{ selector: "a-duration-field,duration-field", template: `
        @if (allow_end_time() && time() != null && !force()) {
            <div
                class="border-neutral flex h-12 w-full items-center rounded-sm border"
                [class.opacity-30]="disabled() || no_options()"
            >
                <input
                    #end_input
                    type="time"
                    aria-label="End time"
                    class="h-full min-w-0 flex-1 border-0 bg-transparent px-4"
                    [value]="end_time_value()"
                    [disabled]="disabled() || no_options()"
                    [attr.aria-invalid]="!!end_time_error()"
                    (change)="setEndTime(end_input.value)"
                    (blur)="touch()"
                />
                <button
                    type="button"
                    end-time-options
                    aria-label="Choose duration"
                    class="flex h-full w-12 shrink-0 items-center justify-center"
                    [disabled]="disabled() || no_options()"
                    [matMenuTriggerFor]="menu"
                >
                    <icon class="text-2xl">arrow_drop_down</icon>
                </button>
            </div>
            @if (timezone() && tz()) {
                <div class="text-xs opacity-30">
                    {{
                        time() + duration() * 60000
                            | date: time_format() + ' (z)' : tz()
                    }}
                </div>
            }
            @if (end_time_error()) {
                <div role="alert" class="text-error text-sm">
                    {{ end_time_error() }}
                </div>
            }
        } @else {
            <button
                type="button"
                duration-field
                class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
                [disabled]="disabled() || no_options()"
                [class.opacity-30]="disabled() || no_options()"
                matRipple
                [matMenuTriggerFor]="menu"
            >
                <div
                    class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
                >
                    <div class="truncate">
                        {{
                            selected()?.date
                                ? (selected()?.date
                                      | date
                                          : (selected().id >= 24 * 60
                                                ? 'mediumDate'
                                                : time_format())) + ' ('
                                : duration_options()?.length
                                  ? ''
                                  : 'No duration options available'
                        }}{{ selected()?.name
                        }}{{ selected()?.date ? ')' : '' }}
                    </div>
                    @if (timezone() && tz()) {
                        <div class="truncate text-xs opacity-30">
                            {{
                                selected()?.date
                                    | date: time_format() + ' (z)' : tz()
                            }}
                        </div>
                    }
                </div>
                <icon class="text-2xl">arrow_drop_down</icon>
            </button>
        }
        <mat-menu
            #menu="matMenu"
            xPosition="before"
            class="max-h-60 min-w-[18rem]"
        >
            @for (option of duration_options(); track option.id) {
                <button
                    type="button"
                    mat-menu-item
                    class="text-left"
                    [attr.data-duration]="option.id"
                    (click)="setValue(option.id); touch()"
                >
                    <div class="flex items-center justify-between">
                        @if (!force()) {
                            <div class="flex flex-col leading-tight">
                                <div class="truncate">
                                    {{
                                        option.date
                                            ? (option.date
                                                  | date
                                                      : (option.id >= 24 * 60
                                                            ? 'mediumDate'
                                                            : time_format())) +
                                              ' ('
                                            : ''
                                    }}{{ option.name
                                    }}{{ option.date ? ')' : '' }}
                                </div>
                                @if (timezone() && tz()) {
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            option.date
                                                | date
                                                    : time_format() + ' (z)'
                                                    : tz()
                                        }}
                                    </div>
                                }
                            </div>
                        }
                        <div>{{ force() }}</div>
                        @if (selected()?.id === option.id) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            } @empty {
                <div mat-menu-item disabled>No duration options to select</div>
            }
        </mat-menu>
        <mat-error><ng-content /></mat-error>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DurationFieldComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DurationFieldComponent),
        multi: true
      }
    ], imports: [MatMenuModule, MatFormFieldModule, CommonModule, IconComponent], styles: ["/* angular:styles/component:css;1a90da3d4d9819e7500633b134638efb235f4203ba84410ba53431dd8a393b18;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/duration-field.component.ts */\n:host {\n  width: 100%;\n}\n:host.no-subscript mat-error {\n  display: none;\n}\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */\n"] }]
  }], null, { max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], custom_options: [{ type: Input, args: [{ isSignal: true, alias: "custom_options", required: false }] }], force: [{ type: Input, args: [{ isSignal: true, alias: "force", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], end_time: [{ type: Input, args: [{ isSignal: true, alias: "end_time", required: false }] }], allow_end_time: [{ type: Input, args: [{ isSignal: true, alias: "allow_end_time", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DurationFieldComponent, { className: "DurationFieldComponent", filePath: "libs/form-fields/src/lib/duration-field.component.ts", lineNumber: 203 });
})();

// libs/bookings/src/lib/booking.utilities.ts
function newBookingFromCalendarEvent(event) {
  var _a, _b, _c, _d, _e;
  const date = event.date || event.event_start * 1e3;
  const duration = event.duration ?? (event.event_end - event.event_start) / 60;
  const recurrence = ((_a = event.recurrence) == null ? void 0 : _a.pattern) ? toBookingRecurrence(fromEventRecurrence(event.recurrence), date) : {};
  const rooms = [event.system, ...event.resources || []].filter((_2) => !!(_2 == null ? void 0 : _2.id));
  const { system_id } = event;
  const asset_ids = unique([...rooms.map((_2) => _2.id), system_id].filter((_2) => !!_2));
  return new Booking(__spreadProps(__spreadValues({
    id: event.id,
    user_id: ((_b = event.organiser) == null ? void 0 : _b.id) || event.host,
    user_email: event.host,
    user_name: ((_c = event.organiser) == null ? void 0 : _c.name) || event.host,
    // An empty title uses the booking type default.
    title: event.title || void 0,
    date,
    duration,
    all_day: event.all_day,
    timezone: event.timezone,
    asset_id: asset_ids[0],
    asset_ids,
    asset_name: ((_d = event.system) == null ? void 0 : _d.display_name) || ((_e = event.system) == null ? void 0 : _e.name),
    zones: unique(rooms.flatMap((_2) => _2.zones || [])),
    booking_type: "room",
    approved: event.status === "approved"
  }, recurrence), {
    extension_data: __spreadValues({}, event)
  }));
}

// libs/events/src/lib/calendar.service.ts
var _CalendarService = class _CalendarService extends AsyncHandler {
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
    const start = new Date(old_booking == null ? void 0 : old_booking.date).valueOf();
    const end = addMinutes(start, old_booking == null ? void 0 : old_booking.duration).valueOf();
    const available = result.every((i) => {
      var _a;
      const availability = i.availability;
      if (old_booking && i.id === ((_a = old_booking.system) == null ? void 0 : _a.email)) {
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
};
_CalendarService.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalendarService)();
};
_CalendarService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
var CalendarService = _CalendarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/event-form-changes.ts
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
function attendeeEmails2(value) {
  return value.attendees.map((_2) => (_2.email || _2).toLowerCase());
}
function eventDetailsKey(value) {
  var _a;
  const details = Object.entries(value).filter(([key]) => !IGNORED_DETAIL_FIELDS.includes(key));
  const recurrence = value.recurrence;
  details.push(["body", normaliseEventBody(value.body)]);
  details.push(["host_email", ((_a = value.organiser) == null ? void 0 : _a.email) || ""]);
  details.push([
    "recurrence",
    (recurrence == null ? void 0 : recurrence.pattern) && (recurrence == null ? void 0 : recurrence._pattern) !== "none" ? [
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
    (value.resources || []).map((_2) => (_2.email || _2.id || "").toLowerCase()).sort()
  ]);
  details.sort(([a], [b]) => a > b ? 1 : -1);
  return JSON.stringify(details);
}

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
  var _a;
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
  const hostName = ((_a = event.organiser) == null ? void 0 : _a.name) || hostEmail.split("@")[0] || "Staff";
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
  var _a;
  const fmt = event.all_day ? formatAllDay : formatUTC;
  const details = {
    action: "TEMPLATE",
    text: event.title,
    details: `${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    trp: false,
    dates: `${fmt(event.date)}/${fmt(addMinutes(event.date, event.duration ?? 60))}`
  };
  const emails = (event.attendees || []).map((_2) => _2.email || _2);
  const resources = ((((_a = event.resources) == null ? void 0 : _a.length) ? event.resources : null) || [event.system]).map((_2) => (_2 == null ? void 0 : _2.email) || _2);
  if (emails.length || resources.length)
    details.add = unique([...emails, ...resources]).join();
  return `https://calendar.google.com/calendar/render?${toQueryString(details)}`;
}
function dateToISO(date) {
  return `${format(date, "yyyy-MM-dd")}T${format(date, "HH:mm:ss")}`;
}
function generateMicrosoftCalendarLink(event, type = "office", status = "free") {
  var _a;
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
  const emails = (event.attendees || []).map((_2) => _2.email || _2);
  const resources = ((((_a = event.resources) == null ? void 0 : _a.length) ? event.resources : null) || [event.system]).map((_2) => (_2 == null ? void 0 : _2.email) || _2);
  if (emails.length || resources.length)
    data.to = unique([...emails, ...resources]).filter((_2) => !!_2).join(",");
  return type === "office" ? `https://outlook.office.com/calendar/deeplink/compose?${toQueryString(data)}` : `https://outlook.live.com/calendar/deeplink/compose?${toQueryString(data)}`;
}

// libs/events/src/lib/event-link-modal.component.ts
var _EventLinkModalComponent = class _EventLinkModalComponent {
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
};
_EventLinkModalComponent.\u0275fac = function EventLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventLinkModalComponent)();
};
_EventLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventLinkModalComponent, selectors: [["event-link-modal"]], decls: 29, vars: 28, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "click", "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["btn", "", "matRipple", "", 1, "w-64", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-0", 3, "mat-dialog-close"]], template: function EventLinkModalComponent_Template(rf, ctx) {
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
var EventLinkModalComponent = _EventLinkModalComponent;
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

// libs/components/src/lib/recurring-clash-modal.component.ts
var _forTrack03 = ($index, $item) => $item.booking_start;
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
    ref.componentInstance.event.pipe(first((_2) => _2.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ]);
}
var _RecurringClashModalComponent = class _RecurringClashModalComponent {
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
};
_RecurringClashModalComponent.\u0275fac = function RecurringClashModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecurringClashModalComponent)();
};
_RecurringClashModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringClashModalComponent, selectors: [["placeos-recurring-clash-modal"]], outputs: { event: "event" }, decls: 35, vars: 21, consts: [[1, "relative"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "max-h-[60vh]", "w-full", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "space-y-4", "overflow-auto", "px-4", "py-2", "sm:max-w-md"], [1, "border-base-200", "bg-warning", "text-warning-content", "flex", "items-center", "space-x-2", "rounded-xl", "border", "p-2", "shadow-sm"], [1, "text-5xl"], [1, "border-base-300", "bg-base-100", "max-h-48", "w-full", "overflow-auto", "rounded-sm", "border"], [1, "w-full", "text-sm"], [1, "bg-base-200", "sticky", "top-0"], [1, "p-2", "text-left"], [1, "border-base-300", "border-t"], [1, "text-base-content/70", "text-center", "text-xs"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "p-2"]], template: function RecurringClashModalComponent_Template(rf, ctx) {
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
    \u0275\u0275repeaterCreate(23, RecurringClashModalComponent_For_24_Template, 8, 12, "tr", 10, _forTrack03);
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
var RecurringClashModalComponent = _RecurringClashModalComponent;
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

// libs/events/src/lib/event-save.fn.ts
function spaceNames(spaces) {
  return spaces.map((_2) => _2.display_name || _2.name || _2.email).join(", ");
}
async function checkSpacesAvailable(spaces, date, duration, { ignore, event, book_internal }) {
  var _a, _b;
  if (!(spaces == null ? void 0 : spaces.length))
    return true;
  const id_list = spaces.map((_2) => _2.id);
  const response = await (book_internal ? queryResourceAvailability(id_list, date, duration, ignore) : querySpaceAvailability(id_list, date, duration, ((_a = event == null ? void 0 : event.resources[0]) == null ? void 0 : _a.id) || ((_b = event == null ? void 0 : event.system) == null ? void 0 : _b.id) || (event == null ? void 0 : event.id) || void 0, void 0, [event == null ? void 0 : event.date, event == null ? void 0 : event.duration]));
  const unavailable = spaces.filter((_2, i) => !response[i]);
  if (unavailable.length) {
    throw i18n(unavailable.length > 1 ? "CALENDAR_EVENT.SPACES_UNAVAILABLE" : "CALENDAR_EVENT.SPACE_UNAVAILABLE", { spaces: spaceNames(unavailable) });
  }
  return true;
}
async function checkSpaceRules(org, spaces, { date, duration, host }, rules) {
  const building_rules = __spreadValues({}, rules);
  const buildings = await org.loadBuildingsForZones(spaces.map((space) => space.zones));
  for (const space of spaces) {
    const bld = buildings.find((b) => space.zones.includes(b.id));
    if (!bld || building_rules[bld.id])
      continue;
    const metadata = await ac(bld.id, "room_booking_rules").catch(() => ({ details: [] }));
    building_rules[bld.id] = metadata.details instanceof Array ? metadata.details : [];
  }
  const space_rules = spaces.map((space) => {
    const bld = buildings.find((b) => space.zones.includes(b.id));
    return rulesForResource({ date, duration, host, resource: space }, building_rules[bld == null ? void 0 : bld.id]);
  });
  const hidden = spaces.filter((_2, i) => {
    var _a;
    return (_a = space_rules[i]) == null ? void 0 : _a.hidden;
  });
  if (hidden.length) {
    throw i18n("CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN", { spaces: spaceNames(hidden) }, hidden.length);
  }
  return true;
}
function buildingSetting(org, key, building) {
  const keys = key.split(".");
  const override_keys = keys[0] === "app" ? keys.slice(1) : keys;
  const overrides = [
    org.buildingSettings(building.id),
    org.regionSettings(building.parent_id),
    ...org.settings || []
  ];
  for (const override of overrides) {
    const value = getItemWithKeys(override_keys, override);
    if (value != null)
      return value;
  }
  return getItemWithKeys(keys, DEFAULT_SETTINGS);
}
async function checkBuildingBookableHours(org, settings, spaces, date, date_end, organiser_timezone) {
  const buildings = await org.loadBuildingsForZones(spaces.map((space) => space.zones));
  await Promise.all(buildings.map((building) => org.loadBuildingData(building)));
  const policies = buildings.length ? buildings.map((building) => ({
    hours: buildingSetting(org, "app.events.bookable_hours", building),
    timezone: building.timezone || organiser_timezone
  })) : [
    {
      hours: settings.get("app.events.bookable_hours"),
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
async function checkRecurringClashes(event, settings, dialog) {
  if (!event.recurring) {
    return true;
  }
  const clashes = await findEventClashes(event, {
    include_clash_time: true
  });
  if (!(clashes == null ? void 0 : clashes.length)) {
    return true;
  }
  const sorted_clashes = [...clashes].sort((a, b) => a.booking_start - b.booking_start);
  const event_start_unix = Math.floor(event.date / 1e3);
  const first_clash = sorted_clashes[0];
  const is_first_instance_clash = first_clash.booking_start === event_start_unix;
  if (is_first_instance_clash) {
    throw i18n("CALENDAR_EVENT.FIRST_INSTANCE_CLASH");
  }
  const allow_clashes = settings.get("app.events.allow_recurring_instance_clashes") ?? false;
  if (!allow_clashes) {
    throw i18n("CALENDAR_EVENT.RECURRING_CLASHES_NOT_ALLOWED", {
      count: clashes.length
    });
  }
  const result = await openRecurringClashModal({ clashes: sorted_clashes }, dialog);
  if ((result == null ? void 0 : result.reason) !== "done") {
    throw "User cancelled";
  }
  return true;
}
function eventSaveQuery(event, value, spaces, options) {
  var _a, _b, _c, _d, _e;
  const query = event.id ? {
    system_id: ((_a = event == null ? void 0 : event.resources[0]) == null ? void 0 : _a.id) || ((_b = event == null ? void 0 : event.system) == null ? void 0 : _b.id) || ((_c = spaces[0]) == null ? void 0 : _c.id)
  } : {};
  if (options.notify_new_attendees_only)
    query.notify_existing_attendees = false;
  const user_email = ((_e = (_d = currentUser()) == null ? void 0 : _d.email) == null ? void 0 : _e.toLowerCase()) || "";
  const source_calendar = event.calendar || event.host || event.creator || value.calendar || value.creator;
  const target_calendar = value.host || value.creator;
  const query_calendar = event.id ? source_calendar : target_calendar;
  const owner_fields = event.id ? [event.host, event.creator, event.calendar] : [value.host, value.creator, value.calendar];
  const is_owner = owner_fields.some((_2) => {
    var _a2;
    return ((_a2 = _2 == null ? void 0 : _2.toLowerCase) == null ? void 0 : _a2.call(_2)) === user_email;
  });
  if ((is_owner && !options.ignore_owner || options.force_calendar) && query_calendar)
    query.calendar = query_calendar;
  return query;
}
function errorMessage(error) {
  if (typeof error === "string")
    return error;
  if (error instanceof Error && error.message)
    return error.message;
  const api_error = error;
  const nested = api_error == null ? void 0 : api_error.error;
  if (typeof nested === "string")
    return nested;
  if (typeof (api_error == null ? void 0 : api_error.message) === "string")
    return api_error.message;
  if (typeof (nested == null ? void 0 : nested.message) === "string")
    return nested.message;
  return "";
}
function isPermissionError(error) {
  const api_error = error;
  const nested = api_error == null ? void 0 : api_error.error;
  const status = (api_error == null ? void 0 : api_error.status) || typeof nested === "object" && (nested == null ? void 0 : nested.status);
  if (status === 403)
    return true;
  const message = errorMessage(error).toLowerCase();
  return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
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
var _EventFormService = class _EventFormService extends AsyncHandler {
  get timezone() {
    var _a, _b, _c;
    if (multipleSpacesEnabled(this._settings)) {
      return ((_b = (_a = this._model) == null ? void 0 : _a.call(this)) == null ? void 0 : _b.timezone) || Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    return this._settings.get("app.events.use_building_timezone") ? ((_c = this._org.building) == null ? void 0 : _c.timezone) || "" : "";
  }
  _startNetwork() {
    this._network_requested = true;
    this._network_consumed.set(true);
  }
  loadLastSuccess() {
    const event = new CalendarEvent(JSON.parse((sessionStorage == null ? void 0 : sessionStorage.getItem("PLACEOS.last_modified_event")) || "{}"));
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
    var _a;
    return ((_a = this._event()) == null ? void 0 : _a.duration) > 24 * 60;
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
        const model2 = this._model();
        if (!model2.id)
          return false;
        const attendee_emails = attendeeEmails2(model2);
        return this._initial_attendees.every((_2) => attendee_emails.includes(_2)) && attendee_emails.some((_2) => !this._initial_attendees.includes(_2)) && eventDetailsKey(model2) === this._initial_event_details;
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
        var _a;
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (((_a = this._org.settings) == null ? void 0 : _a.length) || 0) + 2;
        return this._org.initialised() && (!this._org.regions.length || !!(region == null ? void 0 : region.id)) && !!(building == null ? void 0 : building.id) && overrides.length >= required_overrides;
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
        return Promise.all(ids.map((id) => ac(id, "room_booking_rules").then((_2) => ({
          id,
          details: _2.details instanceof Array ? _2.details : []
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
        return (zone == null ? void 0 : zone.id) || "";
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
          const spaces = list.filter((_2) => _2.bookable && _2.email && !_2.room_booking_url);
          this._loaded_space_lists.update((loaded) => __spreadProps(__spreadValues({}, loaded), {
            [zone_id]: spaces
          }));
          return { zone_id, spaces };
        }).catch(() => null).finally(() => this.removeLoadingTag(Tags.ListingRooms));
      }
    }));
    this.loaded_space_zone = computed(
      () => {
        var _a;
        return ((_a = this._spaces_resource.value()) == null ? void 0 : _a.zone_id) || "";
      },
      ...ngDevMode ? [{ debugName: "loaded_space_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.spaces = computed(
      () => {
        var _a;
        return ((_a = this._spaces_resource.value()) == null ? void 0 : _a.spaces) ?? [];
      },
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this.spaces().map((_2) => _2.features))),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._room_alerts_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_room_alerts_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        var _a;
        return this._network_consumed() && this._requests_ready() ? ((_a = this._org.organisation) == null ? void 0 : _a.id) || void 0 : void 0;
      },
      loader: ({ params: id }) => ac(id, "room_alerts").then((r) => r.details).catch(() => ({}))
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
        if (!(zones == null ? void 0 : zones.length)) {
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
        // Booking rules can depend on the current user's groups
        groups: user_group_names(),
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
      if (overrides == null ? void 0 : overrides.length)
        this._applyDurationSettings();
    });
    this.init();
  }
  async init() {
    await currentUserLoaded();
    setDefaultCreator(currentUser());
    onFieldChange(this._model, (v2) => v2.date, (date) => this.setOptions({ date }), this._injector);
    onFieldChange(this._model, (v2) => v2.duration, (duration) => this.setOptions({ duration }), this._injector);
    onFieldChange(this._model, (v2) => v2.all_day, (all_day) => this.setOptions({ all_day }), this._injector);
    this.subscription("router.events", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !BOOKING_URLS.some((_2) => event.url.includes(_2)) && !PERSISTED_EVENT_CONTEXT_URLS.some((_2) => event.url.includes(_2))) {
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
    handle == null ? void 0 : handle.updateOptions({
      min_duration: this._settings.get("app.events.min_duration") ?? 30,
      max_duration: this._settings.get("app.events.max_duration") ?? 0,
      default_duration: this._settings.get("app.events.default_duration") ?? 60,
      custom_duration_options: this._settings.get("app.events.custom_duration_options") ?? [],
      bookable_hours: this._settings.get("app.events.bookable_hours") ?? null,
      timezone: this.timezone,
      all_day_start: period == null ? void 0 : period.start,
      all_day_end: period == null ? void 0 : period.end
    });
  }
  _allDayTimeRange(date, timezone = this.timezone) {
    const period = this._settings.get("app.events.all_day_period");
    return getAllDayTimeRange(date, timezone, period == null ? void 0 : period.start, period == null ? void 0 : period.end);
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
      event: [event == null ? void 0 : event.date, event == null ? void 0 : event.duration]
    });
    const existing = this._availability_requests.get(key);
    if (existing)
      return existing;
    const request = (this.book_internal ? queryResourceAvailability(ids, date, duration, ignore, void 0) : querySpaceAvailability(ids, date, duration, ignore, void 0, [event == null ? void 0 : event.date, event == null ? void 0 : event.duration])).finally(() => this._availability_requests.delete(key));
    this._availability_requests.set(key, request);
    return request;
  }
  /** Filter the given spaces down to those available for the selection */
  async _computeAvailableSpaces(spaces, rules, event, { date, duration, all_day }) {
    var _a, _b, _c, _d;
    const period = all_day ? this._allDayTimeRange(date) : { date, duration };
    spaces = filterResourcesFromRules(spaces, {
      date: period.date,
      duration: period.duration,
      resource: null,
      host: currentUser()
    }, rules[(_a = this._org.building) == null ? void 0 : _a.id] || []);
    const ignore = ((_b = event == null ? void 0 : event.resources[0]) == null ? void 0 : _b.id) || ((_c = event == null ? void 0 : event.system) == null ? void 0 : _c.id) || (event == null ? void 0 : event.id);
    const availability = await this._queryAvailability(spaces.map(({ id }) => id), period.date || 60, period.duration || 60, ignore, event);
    let list = spaces.filter((_2, i) => availability[i]);
    list = filterResourcesFromRules(list, {
      date: period.date,
      duration: period.duration,
      resource: null,
      host: currentUser()
    }, rules[(_d = this._org.building) == null ? void 0 : _d.id] || []);
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
    value.assets = (event.extension_data.assets || []).map((_2) => new AssetRequest(__spreadProps(__spreadValues({}, _2), { event })));
    this._model.set(value);
    this._form().reset();
    this._applyDurationSettings();
    this._setInitialEvent(this._model());
    this._event.set(event.id ? event : new CalendarEvent());
    if (!event.id) {
      sessionStorage.removeItem("PLACEOS.event");
      return;
    }
    sessionStorage.setItem("PLACEOS.event", JSON.stringify((event == null ? void 0 : event.toJSON()) || {}));
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
    initial_value.assets = (event.extension_data.assets || []).map((_2) => new AssetRequest(__spreadProps(__spreadValues({}, _2), { event })));
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
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
      let spaces = space_list.filter((_2) => !ignore_space_check.includes(_2.id));
      const recurr = this._model().recurrence;
      const raw_value = this._model();
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurring: (recurr == null ? void 0 : recurr._pattern) && (recurr == null ? void 0 : recurr._pattern) !== "none"
      }));
      if (!this._model().recurring) {
        this._model.update((m) => __spreadProps(__spreadValues({}, m), { recurrence: null }));
      }
      const changed_spaces = spaces.filter((_2) => !event.resources.find((s) => s.id === _2.id));
      const resources_changed = !!changed_spaces.length || event.resources.some((space) => !spaces.some((_2) => _2.id === space.id));
      const ignored_emails = ignore_space_check.map((_2) => _2.toLowerCase());
      const isIgnored = (space) => {
        var _a2;
        return ignored_emails.includes((_a2 = space.email) == null ? void 0 : _a2.toLowerCase());
      };
      const rooms = spaces.filter((_2) => !isIgnored(_2));
      const organiser_timezone = await this._organiserTimezone(rooms.length ? rooms : spaces, raw_value.timezone);
      const has_date_changed = !event.id || event.date !== raw_value.date;
      const all_day_date = has_date_changed ? sameDayInTimezone(raw_value.date, this.timezone, organiser_timezone) : raw_value.date;
      const all_day_period = raw_value.all_day ? this._allDayTimeRange(all_day_date, organiser_timezone) : {
        date: raw_value.date,
        duration: raw_value.duration,
        date_end: raw_value.date_end
      };
      const has_time_changed = !event.id || event.date !== raw_value.date || event.duration !== raw_value.duration;
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        timezone: organiser_timezone
      }));
      await this._checkBuildingBookableHours(spaces, all_day_period.date, all_day_period.date_end || all_day_period.date + all_day_period.duration * 60 * 1e3, organiser_timezone);
      if (spaces.length && (has_time_changed || resources_changed)) {
        const date = raw_value.all_day ? all_day_period.date : raw_value.date;
        const duration = raw_value.all_day ? all_day_period.duration : raw_value.duration;
        const availability_candidates = (has_time_changed ? spaces : changed_spaces).filter((_2) => !isIgnored(_2));
        if (availability_candidates.length) {
          const availability_spaces = await Promise.all(availability_candidates.map((space) => this._space_pipe.transform(space.email)));
          await this._checkResourcesAvailable(availability_spaces, date, duration, event.ical_uid || event.id || "").catch(on_error);
        }
        await this._checkResourceRules(spaces, date, duration, this._host(this._model().host, (_a = spaces[0]) == null ? void 0 : _a.email)).catch(on_error);
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
      if (!spaces.length && this._model().attendees.find((_2) => _2.is_external)) {
        this.removeLoadingTag(Tags.PostBooking);
        throw i18n("CALENDAR_EVENT.SPACE_EXTERNALS_ERROR");
      }
      const { setup, breakdown } = this._overflowTimes(spaces);
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        setup_time: setup,
        breakdown_time: breakdown
      }));
      for (const order of this._model().catering || []) {
        order.notes = this._model().catering_notes;
        order.charge_code = this._model().catering_charge_code;
      }
      const query = eventSaveQuery(event, raw_value, spaces, {
        notify_new_attendees_only,
        ignore_owner,
        force_calendar
      });
      const processed_assets = (this._model().assets || []).map((_2) => new AssetRequest(_2).toJSON());
      const host = this._host(this._model().host, (_b = spaces[0]) == null ? void 0 : _b.email);
      const ext = {
        department: ((_c = this._model().organiser) == null ? void 0 : _c.department) || ((_d = currentUser()) == null ? void 0 : _d.department)
      };
      if (this._model().host !== host)
        ext.host_override = this._model().host;
      const value = this._model();
      let created_event = await this._performBooking(new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), {
        date: all_day_period.date,
        duration: all_day_period.duration,
        date_end: all_day_period.date_end,
        old_system: event == null ? void 0 : event.system,
        system: null,
        host,
        title: this._model().title || "Space Booking",
        attendees: this._model().attendees.map((_2) => {
          const v2 = __spreadValues({}, _2);
          delete v2.visit_expected;
          delete v2.extension_data;
          return v2;
        }),
        assets: processed_assets,
        extension_data: ext
      })), query).catch(on_error);
      const date_end = all_day_period.date_end || all_day_period.date + all_day_period.duration * 60 * 1e3;
      const saved_resources = created_event.resources || [];
      const resolved_resources = this._resolveResourceResponses(space_list, saved_resources);
      const failed_resources = resolved_resources.filter((_2) => _2.response_status === "declined");
      const booked_resources = resolved_resources.filter((_2) => _2.response_status !== "declined");
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
        notifyWarn(i18n(failed_resources.length > 1 ? "CALENDAR_EVENT.SPACES_UNAVAILABLE" : "CALENDAR_EVENT.SPACE_UNAVAILABLE", { spaces: spaceNames(failed_resources) }));
      }
      const domain = (((_e = currentUser()) == null ? void 0 : _e.email) || "@").split("@")[1];
      const visitors = this._model().attendees.filter((user) => user.is_external && user.email !== event.host && !user.email.includes(domain) && user.visit_expected);
      if (visitors.length || event.id) {
        await createBookingsForEvent(created_event, "visitor", visitors).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
      }
      if ((_f = this._model().catering) == null ? void 0 : _f.length) {
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
            location_name: ((_g = spaces[0]) == null ? void 0 : _g.display_name) || ((_h = spaces[0]) == null ? void 0 : _h.name) || "",
            location_id: ((_i = spaces[0]) == null ? void 0 : _i.id) || "",
            zones: unique([
              this._org.organisation.id,
              (_j = this._org.region) == null ? void 0 : _j.id,
              (_k = this._org.building) == null ? void 0 : _k.id,
              ...((_l = spaces[0]) == null ? void 0 : _l.zones) || []
            ]).filter((_2) => !!_2),
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
      if (isPermissionError(e))
        this._clearSavedHostChange();
      throw e;
    }
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
  /** Throw when any of the spaces is booked for the period. */
  _checkResourcesAvailable(spaces, date, duration, ignore) {
    return checkSpacesAvailable(spaces, date, duration, {
      ignore,
      event: this._event(),
      book_internal: this.book_internal
    });
  }
  _resolveResourceResponses(requested, saved) {
    const require_saved_resource = requested.length > 1;
    return requested.map((space) => {
      const response = saved.find((_2) => _2.email && _2.email === space.email || _2.id && _2.id === space.id);
      return new Space(__spreadProps(__spreadValues({}, space), {
        response_status: (response == null ? void 0 : response.response_status) || (response || !require_saved_resource ? space.response_status : "declined")
      }));
    });
  }
  /**
   * Timezone to save with the event. With building timezones on, the
   * building of the event's rooms decides it before the active building.
   */
  async _organiserTimezone(spaces, fallback) {
    if (spaces.length && !multipleSpacesEnabled(this._settings) && this._settings.get("app.events.use_building_timezone")) {
      const [building] = await this._org.loadBuildingsForZones(spaces.map((space) => space.zones || []));
      if (building == null ? void 0 : building.timezone)
        return building.timezone;
    }
    return this.timezone || fallback;
  }
  /** Check the event instant against every selected building's local hours. */
  _checkBuildingBookableHours(spaces, date, date_end, organiser_timezone) {
    return checkBuildingBookableHours(this._org, this._settings, spaces, date, date_end, organiser_timezone);
  }
  /** Throw when the booking rules hide any of the spaces from the host. */
  async _checkResourceRules(spaces, date, duration, host) {
    const user = await this._bookingRulesHost(host);
    await this._whenSettled(this._booking_rules_resource);
    return checkSpaceRules(this._org, spaces, { date, duration, host: new User(user) }, this.booking_rules());
  }
  async _bookingRulesHost(host) {
    const current_user = currentUser();
    if (this._settings.get("app.events.force_current_user_for_booking_rules") === true || host === current_user.email) {
      return current_user;
    }
    return this._user_pipe.transform(host).catch(() => ({ email: host, name: host }));
  }
  /** Check for clashing events in a recurring event series. */
  _checkRecurringClashes(event) {
    return checkRecurringClashes(event, this._settings, this._dialog);
  }
  /** Largest setup and breakdown times of the form, defaults and spaces. */
  _overflowTimes(spaces) {
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
    return { setup, breakdown };
  }
  async _performBooking(event, query) {
    var _a, _b, _c, _d, _e, _f;
    this._updateVisitorList(event.attendees);
    const old_system = ((_a = event.old_system) == null ? void 0 : _a.id) || ((_b = event.old_system) == null ? void 0 : _b.email) || ((_c = event.resources[0]) == null ? void 0 : _c.email);
    const system_id = ((_d = event.system) == null ? void 0 : _d.id) || ((_e = event.system) == null ? void 0 : _e.email) || ((_f = event.resources[0]) == null ? void 0 : _f.email);
    if (old_system !== system_id) {
      event.attendees = event.attendees.filter((_2) => _2.email !== old_system || _2.id !== old_system);
    }
    return this.book_internal ? saveBooking(newBookingFromCalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
      // Native recurrence needs weekday indices and millisecond dates.
      recurrence: event.recurrence,
      status: this._settings.get("app.bookings.no_approval") === true && currentUserCanApprove() ? "approved" : "tentative"
    }))).then((_2) => newCalendarEventFromBooking(_2)) : saveEvent(event, query);
  }
  /** Snapshot the loaded event to detect edits that only add attendees. */
  _setInitialEvent(value) {
    this._initial_attendees = attendeeEmails2(value);
    this._initial_event_details = eventDetailsKey(value);
  }
  async _removeBookingAfterError(is_new, event, assets = false, e) {
    var _a;
    if (is_new) {
      await (event.from_bookings ? removeBooking(event.id) : removeEvent(event.id, event.resources.length ? {
        calendar: this._model().host || ((_a = currentUser()) == null ? void 0 : _a.email),
        system_id: event.resources[0].id
      } : {}));
      throw (e == null ? void 0 : e.status) === 409 ? i18n("CALENDAR_EVENT.ASSETS_CLASH_ERROR") : i18n("CALENDAR_EVENT.ASSETS_ERROR");
    } else if (assets) {
      throw i18n("CALENDAR_EVENT.ASSETS_PARTIAL_ERROR", {
        error: errorMessage(e) || e
      });
    }
    this.removeLoadingTag(Tags.PostBooking);
    throw e;
  }
  _updateVisitorList(attendees) {
    const visitors = attendees.filter((user) => user.is_external);
    if (!(visitors == null ? void 0 : visitors.length))
      return;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", unique([
      ...old_visitors.filter((_2) => !_2.includes(_2.email)),
      ...visitors.map((_2) => `${_2.email}|${_2.name}|${_2.organisation}`)
    ]));
  }
};
_EventFormService.\u0275fac = function EventFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventFormService)();
};
_EventFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventFormService, factory: _EventFormService.\u0275fac, providedIn: "root" });
var EventFormService = _EventFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/spaces.service.ts
var SPACE_PIPE;
var _SpacesService = class _SpacesService {
  /** List of available spaces */
  get space_list() {
    return this.list();
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._all_spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_all_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this.all_spaces = this._all_spaces.asReadonly();
    this.list = computed(
      () => this._all_spaces().filter((space) => space.map_id),
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces_by_id = computed(
      () => new Map(this.list().map((space) => [space.id, space])),
      ...ngDevMode ? [{ debugName: "_spaces_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces_by_email = computed(
      () => new Map(this.list().filter(({ email }) => !!email).map((space) => [space.email, space])),
      ...ngDevMode ? [{ debugName: "_spaces_by_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this.list().map((i) => i.features.filter((_2) => _2.trim())))),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._compare = (space) => space.zones.includes(this._org.building.id);
    SPACE_PIPE = new SpacePipe();
    if (!SPACE_PIPE.org)
      SPACE_PIPE.org = this._org;
    effect(() => {
      if (!this._org.initialised())
        return;
      this._init();
    });
  }
  _init() {
    if (!this._settings.get("app.prevent_space_init"))
      this.loadSpaces();
    else
      this._initialised.set(true);
  }
  /**
   * Get a filtered list of the available spaces
   * @param predicate Predicate for filtering spaces
   */
  filter(predicate = this._compare) {
    return this.space_list.filter((_2) => predicate(_2));
  }
  async loadSpace(space_id) {
    const system = await xa(space_id);
    const space = new Space(__spreadProps(__spreadValues({}, system), {
      level: this._org.levelWithID([...system.zones])
    }));
    SPACE_PIPE.updateSpaceList([space]);
  }
  /**
   * Find space with given id/email
   * @param space_id ID/Email address associated with the space
   */
  find(space_id) {
    return this._spaces_by_id().get(space_id) || this._spaces_by_email().get(space_id);
  }
  async loadSpaces() {
    var _a;
    const systems = (await Sa({
      zone_id: (_a = this._org.organisation) == null ? void 0 : _a.id,
      limit: 5e3
    })).data;
    const space_list = systems.map((sys) => new Space(__spreadProps(__spreadValues({}, sys), {
      level: this._org.levelWithID([...sys.zones])
    })));
    this._all_spaces.set(space_list);
    SPACE_PIPE.updateSpaceList(this.space_list);
    this._initialised.set(true);
  }
};
_SpacesService.\u0275fac = function SpacesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpacesService)();
};
_SpacesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpacesService, factory: _SpacesService.\u0275fac, providedIn: "root" });
var SpacesService = _SpacesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/booking-panel/src/app/new-panel/helpers.ts
var TIMELINE_SPAN = 12 * 60;
var QUICK_BOOK_DURATIONS = [15, 30, 60];
var EXTEND_MINUTES = 15;
var ENDING_WARNING_MINUTES = 5;
function bookingEnd(booking) {
  return addMinutes(booking.date, booking.duration).valueOf();
}
function overlapsBooking(bookings, start, end) {
  return bookings.some((booking) => booking.date < end && bookingEnd(booking) > start);
}
function timelineStart(now = Date.now()) {
  return addMinutes(startOfHour(now), -60).valueOf();
}
function timelineData(bookings, now = Date.now(), start = timelineStart(now), step = 10) {
  const blocks = [];
  let time = start;
  const end = addMinutes(start, TIMELINE_SPAN).valueOf();
  const duration = end - start;
  while (time < end) {
    blocks.push({
      id: `${time}`,
      time,
      hour: format(time, "ha"),
      on_hour: getMinutes(time) === 0
    });
    time = addMinutes(time, step).valueOf();
  }
  return {
    blocks,
    bookings: bookings.map((booking, index) => {
      const booking_end = addMinutes(booking.date, booking.duration).valueOf();
      const visible_start = Math.max(booking.date, start);
      const visible_end = Math.min(booking_end, end);
      return {
        id: `${booking.id || booking.date}-${index}`,
        start: (visible_start - start) / duration * 100,
        size: (visible_end - visible_start) / duration * 100,
        title: `${format(booking.date, "h:mm a")} - ${format(booking_end, "h:mm a")}`
      };
    }).filter((booking) => booking.size > 0),
    now: Math.max(0, Math.min(100, (now - start) / duration * 100))
  };
}
function nextPeriod(next) {
  const next_diff = Math.ceil(differenceInSeconds(next == null ? void 0 : next.date, Date.now()) / 60);
  return next && next_diff < 24 * 60 ? `${format(next.date, "h:mm a")} - ${format(addMinutes(next.date, next.duration), "h:mm a")}` : "";
}
function currentPeriod(bookings, current, next) {
  const slot = getNextFreeTimeSlot(bookings);
  const next_diff = Math.ceil(differenceInSeconds(next == null ? void 0 : next.date, Date.now()) / 60);
  if (!current)
    return next && next_diff < 24 * 60 ? [false, Math.floor(next_diff / 60), next_diff % 60] : [];
  const checked_in = true;
  const current_diff = Math.ceil(differenceInSeconds(slot.start, Date.now()) / 60);
  return checked_in ? [true, Math.floor(current_diff / 60), current_diff % 60] : [];
}
function releaseCountdown(booking, pending_period, now = Date.now()) {
  if (!booking || !pending_period || pending_period < 1)
    return null;
  return Math.max(0, addMinutes(booking.date, pending_period).valueOf() - now);
}
function formatCountdown(ms) {
  const seconds = Math.ceil(ms / 1e3);
  return `${Math.floor(seconds / 60)}:${`${seconds % 60}`.padStart(2, "0")}`;
}
function freeMinutes(bookings, now = Date.now(), max = 480) {
  const starts = bookings.filter((booking) => booking.date > now).map((booking) => booking.date);
  if (!starts.length)
    return max;
  return Math.min(max, differenceInMinutes(Math.min(...starts), now));
}
function quickBookDurations(free, min_duration = 15) {
  return QUICK_BOOK_DURATIONS.filter((duration) => duration >= min_duration && duration <= free);
}
function canExtend(current, bookings, minutes = EXTEND_MINUTES) {
  if (!current)
    return false;
  const end = bookingEnd(current);
  return !overlapsBooking(bookings, end, addMinutes(end, minutes).valueOf());
}
function endingSoon(current, next, now = Date.now(), warn = ENDING_WARNING_MINUTES) {
  if (!current || !next)
    return null;
  const end = bookingEnd(current);
  if (end < now || end - now > warn * 60 * 1e3)
    return null;
  return next.date - end <= 15 * 60 * 1e3 ? next : null;
}
function timelineSlot(fraction, start, bookings, now = Date.now(), step = 15) {
  const offset = Math.max(0, Math.min(1, fraction)) * TIMELINE_SPAN;
  const slot = roundToNearestMinutes(addMinutes(start, offset), {
    nearestTo: step,
    roundingMethod: "floor"
  }).valueOf();
  const slot_end = addMinutes(slot, step).valueOf();
  if (slot_end <= now)
    return null;
  const date = Math.max(slot, now);
  if (overlapsBooking(bookings, date, slot_end))
    return null;
  return date;
}
function isNightTime(now, start, end) {
  const toMinutes = (time) => {
    const match = /^(\d{1,2}):(\d{2})$/.exec(time || "");
    if (!match || +match[1] > 23 || +match[2] > 59)
      return null;
    return +match[1] * 60 + +match[2];
  };
  const from = toMinutes(start ?? "19:00");
  const to = toMinutes(end ?? "07:00");
  if (from === null || to === null || from === to)
    return false;
  const date = new Date(now);
  const minutes = date.getHours() * 60 + date.getMinutes();
  return from < to ? minutes >= from && minutes < to : minutes >= from || minutes < to;
}
var BURN_IN_OFFSETS = [
  [0, 0],
  [2, 0],
  [2, 2],
  [0, 2],
  [-2, 2],
  [-2, 0],
  [-2, -2],
  [0, -2],
  [2, -2]
];
function burnInOffset(now) {
  const step = Math.floor(now / (60 * 1e3)) % BURN_IN_OFFSETS.length;
  return BURN_IN_OFFSETS[step];
}

// apps/booking-panel/src/app/overlays/booking-modal.component.ts
function BookingModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function BookingModalComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BookingModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "APP.BOOKING_PANEL.BOOKING_HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("query_fn", ctx_r1.searchStaff)("formField", ctx_r1.form.organiser)("error", "Host is required");
    \u0275\u0275control();
  }
}
function BookingModalComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-time-field", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.date);
    \u0275\u0275control();
  }
}
function BookingModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, BookingModalComponent_Conditional_6_Conditional_1_Template, 7, 6, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275conditionalCreate(3, BookingModalComponent_Conditional_6_Conditional_3_Template, 5, 4, "div", 10);
    \u0275\u0275elementStart(4, "div", 10)(5, "label", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "a-duration-field", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "label", 14);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 15);
    \u0275\u0275element(14, "input", 16);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_host() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.future ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "FORM.DURATION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", ctx_r1.min_duration)("max", ctx_r1.max_duration)("step", ctx_r1.max_duration < 120 ? 5 : 15)("formField", ctx_r1.form.duration);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "FORM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 14, "FORM.TITLE"))("formField", ctx_r1.form.title);
    \u0275\u0275control();
  }
}
function BookingModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.BOOKING_PANEL.BOOKING_LOADING"), " ");
  }
}
function BookingModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 22);
    \u0275\u0275listener("click", function BookingModalComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
async function openBookingModal(data, dialog) {
  const ref = dialog.open(BookingModalComponent, {
    data,
    disableClose: true,
    backdropClass: ["pointer-events-none", "bg-black", "opacity-60"]
  });
  const result = await new Promise((resolve) => {
    let resolved = false;
    let event_sub;
    const finish = (event) => {
      if (resolved)
        return;
      resolved = true;
      event_sub == null ? void 0 : event_sub.unsubscribe();
      resolve(event || {});
    };
    const close = ref.close.bind(ref);
    ref.close = ((event) => {
      finish(event);
      close(event);
    });
    event_sub = ref.componentInstance.event.subscribe((event) => {
      finish(event);
    });
  });
  return __spreadProps(__spreadValues({}, result), {
    close: () => ref.close()
  });
}
var _BookingModalComponent = class _BookingModalComponent extends AsyncHandler {
  constructor() {
    var _a;
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef, {
      optional: true
    });
    this.event = output();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_host = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.future = this._data.future;
    this.min_duration = this._data.min_duration || 15;
    this.max_duration = this._data.max_duration || 480;
    this.model = signal(
      {
        organiser: this._data.user || null,
        room_ids: [((_a = this._data.space) == null ? void 0 : _a.email) || ""],
        date: this._data.date || (/* @__PURE__ */ new Date()).valueOf(),
        duration: Math.max(this.min_duration, Math.min(30, this.max_duration)),
        title: `${this._data.title || ""}`
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      validate(p.organiser, ({ value }) => {
        if (this._data.disable_book_now_host || this._data.user || value()) {
          return void 0;
        }
        return {
          kind: "required",
          message: "Host is required"
        };
      });
    });
    this.searchStaff = async (q) => {
      var _a2;
      const mod = Gp((_a2 = this._data.space) == null ? void 0 : _a2.id, "Bookings");
      if (!mod)
        return [];
      return mod.execute("list_users", [q]).catch(() => []);
    };
  }
  ngOnInit() {
    if (this._data.disable_book_now_host || this._data.user) {
      this.hide_host.set(true);
    }
  }
  /**
   * Post form data
   */
  async save() {
    const success = await submit(this.form, async () => {
      if (!this.future) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          date: (/* @__PURE__ */ new Date()).valueOf()
        }));
      }
      const value = this.model();
      this.loading.set(true);
      this.event.emit({
        reason: "done",
        metadata: __spreadProps(__spreadValues({}, value), {
          user: value.organiser,
          title: value.title || "Ad-Hoc Panel Booking"
        })
      });
    });
    if (!success) {
      notifyError(i18n(`FORM.INVALID_FIELDS`, {
        field_list: getInvalidSignalFields(this.form, this.model, {
          organiser: i18n("APP.BOOKING_PANEL.BOOKING_HOST"),
          date: i18n("FORM.TIME_START"),
          duration: i18n("FORM.DURATION"),
          title: i18n("FORM.TITLE")
        }).join(", ")
      }));
    }
  }
  cancel() {
    var _a;
    this.event.emit({ reason: "close" });
    (_a = this._dialog_ref) == null ? void 0 : _a.close();
  }
};
_BookingModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BookingModalComponent_BaseFactory;
  return function BookingModalComponent_Factory(__ngFactoryType__) {
    return (\u0275BookingModalComponent_BaseFactory || (\u0275BookingModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookingModalComponent)))(__ngFactoryType__ || _BookingModalComponent);
  };
})();
_BookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingModalComponent, selectors: [["booking-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "bg-base-100", "mx-auto", "h-full", "w-full", "overflow-auto", "rounded-sm", "sm:h-auto", "sm:w-lg"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", ""], ["form", "", 1, "max-h-[calc(100vh-12rem)]", "w-full", "overflow-auto", "px-4"], [1, "flex", "h-64", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], [1, "bg-base-200", "sticky", "bottom-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "justify-end", "rounded-sm", "border-none", "p-2"], ["icon", "", "matRipple", "", 3, "click"], [1, "field"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "duration"], ["name", "duration", 3, "min", "max", "step", "formField"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "placeholder", "formField"], ["for", "host"], ["name", "host", 1, "mb-2", 3, "query_fn", "formField", "error"], ["for", "start-time"], ["name", "start-time", 3, "formField"], [3, "diameter"], ["btn", "", "matRipple", "", "name", "save", "type", "button", 1, "w-32", 3, "click"]], template: function BookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BookingModalComponent_Conditional_5_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, BookingModalComponent_Conditional_6_Template, 16, 16, "div", 4)(7, BookingModalComponent_Conditional_7_Template, 5, 4, "div", 5);
    \u0275\u0275conditionalCreate(8, BookingModalComponent_Conditional_8_Template, 4, 3, "footer", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.BOOKING_PANEL.BOOKING_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 8 : -1);
  }
}, dependencies: [
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  DurationFieldComponent,
  TimeFieldComponent,
  UserSearchFieldComponent,
  FormField,
  MatDialogModule,
  TranslatePipe
], encapsulation: 2, changeDetection: 1 });
var BookingModalComponent = _BookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingModalComponent, [{
    type: Component,
    args: [{ selector: "booking-modal", template: `
        <div
            class="bg-base-100 mx-auto h-full w-full overflow-auto rounded-sm sm:h-auto sm:w-lg"
        >
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'APP.BOOKING_PANEL.BOOKING_NEW' | translate }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple (click)="cancel()">
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <div
                    form
                    class="max-h-[calc(100vh-12rem)] w-full overflow-auto px-4"
                >
                    @if (!hide_host()) {
                        <div class="field">
                            <label for="host"
                                >{{
                                    'APP.BOOKING_PANEL.BOOKING_HOST'
                                        | translate
                                }}<span>*</span></label
                            >
                            <a-user-search-field
                                name="host"
                                [query_fn]="searchStaff"
                                [formField]="form.organiser"
                                class="mb-2"
                                [error]="'Host is required'"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex space-x-2">
                        @if (future) {
                            <div class="flex-1">
                                <label for="start-time">{{
                                    'FORM.TIME_START' | translate
                                }}</label>
                                <a-time-field
                                    name="start-time"
                                    [formField]="form.date"
                                ></a-time-field>
                            </div>
                        }
                        <div class="flex-1">
                            <label for="duration">{{
                                'FORM.DURATION' | translate
                            }}</label>
                            <a-duration-field
                                [min]="min_duration"
                                [max]="max_duration"
                                [step]="max_duration < 120 ? 5 : 15"
                                name="duration"
                                [formField]="form.duration"
                            ></a-duration-field>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="title">{{
                            'FORM.TITLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [placeholder]="'FORM.TITLE' | translate"
                                [formField]="form.title"
                            />
                        </mat-form-field>
                    </div>
                </div>
            } @else {
                <div
                    class="flex h-64 flex-col items-center justify-center space-y-4 p-8"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>
                        {{ 'APP.BOOKING_PANEL.BOOKING_LOADING' | translate }}
                    </p>
                </div>
            }
            @if (!loading()) {
                <footer
                    class="bg-base-200 sticky bottom-0 z-10 m-2 flex w-[calc(100%-1rem)] justify-end rounded-sm border-none p-2"
                >
                    <button
                        btn
                        matRipple
                        name="save"
                        type="button"
                        class="w-32"
                        (click)="save()"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      DurationFieldComponent,
      TimeFieldComponent,
      UserSearchFieldComponent,
      FormField,
      MatDialogModule
    ] }]
  }], null, { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingModalComponent, { className: "BookingModalComponent", filePath: "apps/booking-panel/src/app/overlays/booking-modal.component.ts", lineNumber: 203 });
})();

// apps/booking-panel/src/app/overlays/embedded-control-modal.component.ts
var _EmbeddedControlModalComponent = class _EmbeddedControlModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.control_url = this._data.control_url;
    this.countdown = signal(
      30,
      ...ngDevMode ? [{ debugName: "countdown" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.countdown.set(30);
    this.interval("countdown", () => this.tick(), 1e3);
  }
  /**
   * Close the modal
   */
  close() {
    this._dialog_ref.close();
    this.countdown.set(30);
  }
  /**
   * User confirmation of the content of the modal
   */
  reset() {
    this.countdown.set(30);
    this.interval("countdown", () => this.tick(), 1e3);
  }
  /**
   * Decrement countdown and close if 0
   */
  tick() {
    const remaining = Math.max(0, this.countdown() - 1);
    this.countdown.set(remaining);
    if (remaining === 0)
      this.close();
  }
};
_EmbeddedControlModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmbeddedControlModalComponent_BaseFactory;
  return function EmbeddedControlModalComponent_Factory(__ngFactoryType__) {
    return (\u0275EmbeddedControlModalComponent_BaseFactory || (\u0275EmbeddedControlModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EmbeddedControlModalComponent)))(__ngFactoryType__ || _EmbeddedControlModalComponent);
  };
})();
_EmbeddedControlModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmbeddedControlModalComponent, selectors: [["embedded-control-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 5, consts: [[1, "bg-base-100", "absolute", "inset-0"], ["modal", "", 1, "bg-secondary", "absolute", "w-screen", "overflow-hidden", 3, "click"], [1, "h-full", "w-full", "border-none"], [1, "h-full", "w-full", "border-none", 3, "src"], [1, "absolute", "top-0", "left-0", "flex", "h-12", "items-center"], ["countdown", "", 1, "mx-2", "text-2xl"], ["icon", "", "matRipple", "", 1, "close", 3, "click", "contextmenu"], [1, "mx-2", "text-2xl"]], template: function EmbeddedControlModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function EmbeddedControlModalComponent_Template_div_click_1_listener() {
      return ctx.reset();
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "iframe", 3);
    \u0275\u0275pipe(4, "safe");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275listener("click", function EmbeddedControlModalComponent_Template_button_click_8_listener() {
      return ctx.close();
    })("contextmenu", function EmbeddedControlModalComponent_Template_button_contextmenu_8_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275elementStart(9, "icon", 7);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275pipeBind2(4, 2, ctx.control_url, "resource"), \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.countdown());
  }
}, dependencies: [MatRippleModule, MatRipple, IconComponent, SafePipe], styles: ["\n[modal][_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_control-modal-enter 500ms ease-out;\n  height: calc(100vh - 3em);\n  box-sizing: content-box;\n  border: 2px solid #fff;\n  border-top: 1px solid #ccc;\n  transform: translate(-50%, calc(-50% + 1.75em));\n}\n@keyframes _ngcontent-%COMP%_control-modal-enter {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  height: 3em;\n}\n/*# sourceMappingURL=embedded-control-modal.component.css.map */"], changeDetection: 1 });
var EmbeddedControlModalComponent = _EmbeddedControlModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmbeddedControlModalComponent, [{
    type: Component,
    args: [{ selector: "embedded-control-modal", template: `
        <div class="bg-base-100 absolute inset-0"></div>
        <div
            class="bg-secondary absolute w-screen overflow-hidden"
            modal
            (window:click)="reset()"
        >
            <div class="h-full w-full border-none">
                <iframe
                    class="h-full w-full border-none"
                    [src]="control_url | safe: 'resource'"
                ></iframe>
            </div>
        </div>
        <div class="absolute top-0 left-0 flex h-12 items-center">
            <div countdown class="mx-2 text-2xl">{{ countdown() }}</div>
            <button
                icon
                matRipple
                class="close"
                (click)="close()"
                (contextmenu)="$event.preventDefault()"
            >
                <icon class="mx-2 text-2xl">close</icon>
            </button>
        </div>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [SafePipe, MatRippleModule, IconComponent], styles: ["/* angular:styles/component:css;7591ac5d8e39a74430fdf8346e47df2d6cfa421375c5300edbec9d674fb4d87e;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/overlays/embedded-control-modal.component.ts */\n[modal] {\n  animation: control-modal-enter 500ms ease-out;\n  height: calc(100vh - 3em);\n  box-sizing: content-box;\n  border: 2px solid #fff;\n  border-top: 1px solid #ccc;\n  transform: translate(-50%, calc(-50% + 1.75em));\n}\n@keyframes control-modal-enter {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  height: 3em;\n}\n/*# sourceMappingURL=embedded-control-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmbeddedControlModalComponent, { className: "EmbeddedControlModalComponent", filePath: "apps/booking-panel/src/app/overlays/embedded-control-modal.component.ts", lineNumber: 80 });
})();

// apps/booking-panel/src/app/panel-state.service.ts
var _PanelStateService = class _PanelStateService extends AsyncHandler {
  /** Active system */
  get system() {
    return this._system();
  }
  set system(value) {
    if (this._system() === value)
      return;
    this._system.set(value);
    this._spaces.loadSpace(value);
  }
  setting(name) {
    return this._settings()[name];
  }
  /** Value of the app setting `app.<key>` */
  appSetting(key) {
    return this._app_settings.get(`app.${key}`);
  }
  /** Whether the given opt-in feature is enabled in the app settings */
  hasFeature(feature) {
    const features = this._app_settings.get("app.features") || [];
    return features.includes(feature);
  }
  constructor() {
    super();
    this._spaces = inject(SpacesService);
    this._dialog = inject(MatDialog);
    this._events = inject(EventFormService);
    this._app_settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._space_pipe = new SpacePipe(this._org);
    this._settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._system = signal(
      "",
      ...ngDevMode ? [{ debugName: "_system" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._clock = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_clock" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_id = 0;
    this.clock = this._clock.asReadonly();
    this.connected = signal(
      true,
      ...ngDevMode ? [{ debugName: "connected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offline_since = signal(
      0,
      ...ngDevMode ? [{ debugName: "offline_since" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bound_system = "";
    this.settings = this._settings.asReadonly();
    this.space = signal(
      null,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._current = signal(
      null,
      ...ngDevMode ? [{ debugName: "_current" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current = computed(
      () => {
        this._clock();
        const e = this._current();
        return !e || e.state === "done" ? null : e;
      },
      ...ngDevMode ? [{ debugName: "current" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._next = signal(
      null,
      ...ngDevMode ? [{ debugName: "_next" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next = computed(
      () => {
        this._clock();
        const e = this._next();
        return !e || Date.now() > e.date ? null : e;
      },
      ...ngDevMode ? [{ debugName: "next" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.status = computed(
      () => {
        const { status } = this._settings();
        const booking = this._current();
        return status || (booking ? "busy" : "free");
      },
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.interval("clock", () => this._clock.set(Date.now()), 5e3);
    this.interval("pending_check", () => this._checkPending(), 15 * 1e3);
    effect(() => {
      if (!this._org.initialised())
        return;
      const id = this._system();
      untracked(() => this._bindSystem(id));
    });
    this._init();
  }
  _bindSystem(id) {
    if (this._bound_system === id)
      return;
    this._bound_system = id;
    this.unsubWith("listen:");
    this.unsubWith("binding:");
    this.clearTimeout("load_system");
    this.clearTimeout("reload_system");
    this._load_id += 1;
    this._resetPanelState();
    if (!id)
      return;
    this._loadSystem(id);
    const settings = [
      "room_name",
      "custom_qr_url",
      "custom_qr_color",
      "disable_book_now",
      "disable_qr_booking",
      "hide_meeting_details",
      "hide_meeting_title",
      "disable_book_now_host",
      "disable_end_meeting",
      "enable_end_meeting_button",
      "show_timeline",
      "timeline_position",
      "min_duration",
      "max_duration",
      "pending",
      "status",
      "control_ui",
      "catering_ui",
      "pending_period",
      "pending_before",
      "room_image",
      "offline_image",
      "show_qr_code",
      "hide_qr_text",
      "presence",
      "room_capacity"
    ];
    settings.forEach((k) => this.bindTo(id, k));
    this._listenToModuleBinding(id, "bookings", (value) => this.bookings.set((value == null ? void 0 : value.length) ? value.map((item) => new CalendarEvent(item)) : []));
    this._listenToModuleBinding(id, "current_booking", (value) => this._current.set(value ? new CalendarEvent(value) : null));
    this._listenToModuleBinding(id, "next_booking", (value) => this._next.set(value ? new CalendarEvent(value) : null));
  }
  _resetPanelState() {
    this._settings.set({});
    this.space.set(null);
    this.bookings.set([]);
    this._current.set(null);
    this._next.set(null);
  }
  _checkPending() {
    const current = this._current();
    const status = this.status();
    if (!current || status !== "pending" || current.body.includes("main_event_id") || this.setting("disable_end_meeting") === true) {
      return;
    }
    if (this._isUnattended(current)) {
      this.endCurrent("No presence detected.").catch((e) => log("Panel", "Error releasing empty meeting:", e, "error"));
      return;
    }
    const pending_period = this.setting("pending_period");
    if (!pending_period || pending_period < 1)
      return;
    const diff = differenceInMinutes(Date.now(), current.date);
    if (diff <= pending_period)
      return;
    this.endCurrent("Pending period expired.").catch((e) => log("Panel", "Error auto-ending pending meeting:", e, "error"));
  }
  /**
   * Whether a pending booking has had no presence detected for
   * `presence_release_after` minutes (default 5) since it started.
   * Needs the `presence_release` feature.
   */
  _isUnattended(current) {
    if (!this.hasFeature("presence_release"))
      return false;
    if (this.setting("presence") !== false)
      return false;
    const after = this._app_settings.get("app.presence_release_after") ?? 5;
    return differenceInMinutes(Date.now(), current.date) >= after;
  }
  async _init() {
    this.subscription("websocket-status", wr().subscribe((online) => {
      this.connected.set(online);
      if (online)
        this.offline_since.set(0);
      else if (!this.offline_since())
        this.offline_since.set(Date.now());
    }));
    await this._org.waitUntilInitialised();
    if (this._app_settings.get("app.refresh_when_websocket_unstable")) {
      let count = 0;
      this.subscription("stability-check", Fp().subscribe(([_2, time]) => {
        if (time >= 30 * 1e3)
          count = 0;
        else
          count += 1;
        if (count > 10)
          return location.reload();
      }));
    }
  }
  async _loadSystem(id) {
    const load_id = ++this._load_id;
    this.timeout("load_system", async () => {
      log("Panel", `Loading system "${id}"...`);
      const system = await xa(id).catch(({ status, message }) => {
        log("Panel", "Error loading system details:", [status, message], "error");
        if (status === 404)
          this._router.navigate(["/bootstrap"]);
        else {
          this.timeout("reload_system", () => this._loadSystem(id), 2e3 + randomInt(3e3));
        }
        return new Us();
      });
      if (load_id !== this._load_id)
        return;
      this.space.set(new Space(system));
    }, 1e3);
  }
  /**
   * Open modal to create new booking
   * @param date Start time of the new booking
   */
  async newBooking(date = Date.now(), user = false, future = false, force_api = false) {
    var _a;
    const current = this._current();
    if (current && isAfter(date, current.date) && isBefore(date, addMinutes(current.date, current.duration)))
      return notifyError("Booking already exists for this time");
    let max_duration = this._settings().max_duration;
    const next = this.next();
    if (next && date <= Date.now()) {
      const diff = Math.abs(differenceInMinutes(next.date, date));
      const max = this._settings().max_duration || 480;
      max_duration = diff < max ? diff : max;
    } else if (future) {
      const max = this._settings().max_duration || 480;
      const free = freeMinutes(this.bookings(), date, max);
      if (free < max)
        max_duration = free;
    }
    if (max_duration != null && max_duration < 15) {
      return notifyError("Unable to make bookings as the time available before the next meeting is less than 15 minutes");
    }
    const min_duration = this._settings().min_duration;
    const space = await this._space_pipe.transform(this.system);
    this.timeout("reset_view", () => this._dialog.closeAll(), 2 * 60 * 1e3);
    this._dialog.closeAll();
    const details = await openBookingModal(__spreadProps(__spreadValues({}, this._settings()), {
      user: user ? currentUser() : void 0,
      space,
      date: future ? date : startOfMinute(Date.now()).getTime() + 1e3,
      future,
      max_duration,
      min_duration: force_api ? Math.max(min_duration || 15, 30) : min_duration
    }), this._dialog);
    if (details.reason !== "done")
      return details.close();
    const booking = __spreadProps(__spreadValues({}, details.metadata), {
      host: (_a = details.metadata.organiser) == null ? void 0 : _a.email,
      resources: [space],
      system: space
    });
    try {
      await this.makeBooking(booking, force_api);
    } catch (e) {
      notifyError(`Error creating meeting. ${e}`);
      throw e;
    } finally {
      details.close();
      this.clearTimeout("reset_view");
    }
  }
  async confirmBookNow() {
    this.timeout("reset_view", () => this._dialog.closeAll(), 2 * 60 * 1e3);
    const date = Date.now();
    const current = this._current();
    if (current && isAfter(date, current.date) && isBefore(date, addMinutes(current.date, current.duration))) {
      return notifyError("Booking already exists for this time");
    }
    let max_duration = void 0;
    const next = this._next();
    if (next && date <= Date.now()) {
      const diff = Math.abs(differenceInMinutes(next.date, date));
      const max = this._settings().max_duration || 480;
      max_duration = diff < max ? diff : max;
    }
    if (max_duration != null && max_duration < 15) {
      return notifyError("Unable to make bookings as the time available before the next meeting is less than 15 minutes");
    }
    const ref = await openConfirmModal({
      title: "Book Meeting",
      content: `Do you wish to book a meeting in this room for ${Math.min(max_duration || 180, 30)} minutes?`,
      icon: { content: "event" }
    }, this._dialog);
    if (ref.reason !== "done")
      return;
    ref.loading("Creating Meeting...");
    try {
      const module = Gp(this.system, "Bookings");
      if (!module)
        throw "Unable to find module";
      await module.execute("book_now", [
        Math.min(max_duration || 180, 30) * 60,
        "Ad-hoc Panel Booking"
      ]);
      notifySuccess("Successfully created meeting.");
    } catch (e) {
      notifyError(`Error creating meeting. ${e}`);
    }
    ref.close();
    this.clearTimeout("reset_view");
  }
  /**
   * Book the room from now for `minutes` without the booking form.
   * The signed-in user is the host.
   */
  async quickBook(minutes) {
    var _a;
    const max = this._settings().max_duration || 480;
    const free = freeMinutes(this.bookings(), Date.now(), max);
    if (this._current() || minutes > free) {
      return notifyError("Booking already exists for this time");
    }
    await this.makeBooking({
      date: Date.now(),
      duration: minutes,
      title: this._settings().default_title || "Ad-Hoc Panel Booking",
      host: (_a = currentUser()) == null ? void 0 : _a.email
    });
  }
  /**
   * Extend the current booking with the staff API.
   * Fails when the extra time clashes with another booking.
   */
  async extendMeeting(minutes = EXTEND_MINUTES) {
    const current = this._current();
    if (!(current == null ? void 0 : current.id))
      return;
    if (!canExtend(current, this.bookings(), minutes)) {
      return notifyError("Unable to extend. The room is booked after.");
    }
    try {
      await updateEvent(current.id, __spreadProps(__spreadValues({}, current), { event_end: current.event_end + minutes * 60 }), { system_id: this.system });
      notifySuccess(`Extended meeting by ${minutes} minutes.`);
    } catch (e) {
      notifyError(`Error extending meeting. ${e}`);
    }
  }
  /**
   * Create new booking with the given details
   * @param details
   */
  async makeBooking(details, force_api = false) {
    if (isAfter(details.date, addMinutes(Date.now(), 5)) || force_api) {
      this._events.newForm();
      this._events.model.update((m) => __spreadProps(__spreadValues(__spreadValues({}, m), details), {
        date_end: addMinutes(details.date, details.duration).valueOf()
      }));
      try {
        await this._events.postForm(true);
      } finally {
        this._events.clearForm();
      }
    } else {
      const module = Gp(this.system, "Bookings");
      if (!details || !module)
        return;
      const use_as_host = this._app_settings.get("app.user_as_default_host");
      await module.execute("book_now", [
        details.duration * 60,
        details.title,
        details.host || (use_as_host ? currentUser().email : null)
      ]).catch((e) => notifyError(`Error creating meeting. ${e}`));
    }
  }
  /**
   * Open confirmation modal for starting the meeting
   */
  async confirmStart() {
    this.timeout("reset_view", () => this._dialog.closeAll(), 2 * 60 * 1e3);
    const details = await openConfirmModal({
      title: "Do you wish to start your meeting?",
      content: `If you don't start your meeting it will be cancelled ${this._settings().pending_period} minutes after the start time.`,
      icon: {
        class: "material-symbols-rounded",
        content: "play_arrow"
      }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    this.startMeeting();
    this.clearTimeout("reset_view");
  }
  /**
   * Execute the logic on the engine driver to start the current or upcoming meeting
   */
  async startMeeting() {
    if (!this.system || this.setting("status") !== "pending") {
      return notifyWarn("Current or upcoming meeting is not in a pending state.");
    }
    const meeting = this._current() || this._next();
    const mod = Gp(this.system, "Bookings");
    if (!meeting || !mod)
      return;
    try {
      await mod.execute("start_meeting", [getUnixTime(meeting.date)]);
    } catch (e) {
      return notifyError(`Error starting meeting. ${e}`);
    }
    this.updateProperty("status", "busy");
  }
  /**
   * Open confirmation modal for ending the meeting
   */
  async confirmEnd() {
    this.timeout("reset_view", () => this._dialog.closeAll(), 2 * 60 * 1e3);
    const details = await openConfirmModal({
      title: "Are you sure want to end your meeting?",
      content: "Ending your meeting early will free up this room for others to use",
      icon: {
        class: "material-symbols-rounded",
        content: "event_busy"
      }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading("Ending Meeting...");
    await this.endCurrent().catch((e) => notifyError(`Error ending meeting. ${(e == null ? void 0 : e.message) || e}`));
    details.close();
    this.clearTimeout("reset_view");
  }
  /**
   * End the current meeting. Rejects when the driver call fails.
   * @param reason Reason for ending the meeting early
   */
  async endCurrent(reason = "user_input") {
    const current = this._current();
    const module = Gp(this.system, "Bookings");
    if (!current || !module)
      return;
    await module.execute("end_meeting", [
      getUnixTime(current.date),
      true,
      reason
    ]);
  }
  /** Open the room control UI in an embedded modal */
  viewControl() {
    this._openEmbedded(this._settings().control_ui);
  }
  /** Open the catering UI in an embedded modal */
  viewCatering() {
    this._openEmbedded(this._settings().catering_ui);
  }
  _openEmbedded(control_url) {
    if (!control_url)
      return;
    this._dialog.open(EmbeddedControlModalComponent, {
      data: { control_url }
    });
  }
  /**
   * Execute the logic on the engine driver to call waiting staff
   */
  async checkin() {
    const module = Gp(this.system, "Bookings");
    if (!module)
      return;
    const time = startOfMinute(Date.now()).valueOf();
    await module.execute("checkin", [time]).catch((e) => {
      notifyError(`Error checking in booking. ${e}`);
      throw e;
    });
    notifySuccess("Successfully checked in booking.");
  }
  /**
   * Open confirmation modal for calling waiter
   */
  async confirmWaiter() {
    this.timeout("reset_view", () => this._dialog.closeAll(), 2 * 60 * 1e3);
    const details = await openConfirmModal({
      title: "Do you wish to call a waiter?",
      content: `Note that it can take up to 15 minutes for them to turn up.`,
      icon: {
        class: "material-symbols-rounded",
        content: "room_service"
      }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    this.callWaiter();
    this.clearTimeout("reset_view");
  }
  /**
   * Execute the logic on the engine driver to call waiting staff
   */
  async callWaiter() {
    const module = Gp(this.system, "Bookings");
    if (module) {
      await module.execute("waiter_call", [Date.now()]).catch((e) => notifyError(`Error calling waiter. ${e}`));
    }
  }
  /** List to binding */
  bindTo(id, name, mod = "Bookings", on_change = (v2) => this.updateProperty(name, v2)) {
    const binding = Gp(id, mod).variable(name);
    this.subscription(`listen:${name}`, binding.bindThenSubscribe(on_change));
  }
  /** Update properties of the system data */
  updateProperty(name, value) {
    const item = this._settings();
    if (item[name] === value)
      return;
    this._settings.set(__spreadProps(__spreadValues({}, item), { [name]: value }));
  }
  _listenToModuleBinding(id, name, update, mod_name = "Bookings") {
    const mod = Gp(id, mod_name);
    if (window.debug)
      window.panel_module = mod;
    const binding = mod.variable(name);
    this.subscription(`binding:${mod_name}:${name}`, binding.bind());
    const listen = binding.listen();
    update(listen());
    this.subscription(`binding:${mod_name}:${name}:listen`, listen.subscribe(update));
  }
};
_PanelStateService.\u0275fac = function PanelStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanelStateService)();
};
_PanelStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PanelStateService, factory: _PanelStateService.\u0275fac, providedIn: "root" });
var PanelStateService = _PanelStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  subHours,
  AuthenticatedImageDirective,
  getNextFreeTimeSlot,
  EXTEND_MINUTES,
  timelineStart,
  timelineData,
  nextPeriod,
  currentPeriod,
  releaseCountdown,
  formatCountdown,
  freeMinutes,
  quickBookDurations,
  canExtend,
  endingSoon,
  timelineSlot,
  isNightTime,
  burnInOffset,
  PanelStateService
};
//# debugId=9ed8801e-caea-5752-8af7-1064203e8e67
//# sourceMappingURL=chunk-7XHXFCNW.js.map

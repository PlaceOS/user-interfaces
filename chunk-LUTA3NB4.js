import {
  formatPlayDateTime,
  fromUnixTime,
  playOnceStart,
  playPeriodMinutes
} from "./chunk-BBNJH3M4.js";
import {
  isCronMonthlyWeekday,
  isPlayOnceSchedule,
  parseCronNumber,
  parseCronWeekdays,
  parseCronWeeksOfMonth,
  settingSignal
} from "./chunk-UDFVYU3Q.js";
import {
  format,
  i18n
} from "./chunk-AAF65IVH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/schedule-summary.util.ts
var DEFAULT_RECURRING_TIME = "00:00";
var DEFAULT_RECURRING_CRON = "0 0 * * *";
var WEEKDAY_OPTIONS = [1, 2, 3, 4, 5, 6, 0].map((value) => ({
  value
}));
var WEEK_OF_MONTH_OPTIONS = [1, 2, 3, 4, 5];
function formatClockTime(minutes) {
  const hours = Math.floor(minutes / 60) % 24;
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}
function formatSettingTime(time) {
  const [hours, minutes] = time.split(":").map((part) => +part || 0);
  return format(new Date(2e3, 0, 1, hours, minutes), settingSignal("use_24_hour_time", false)() ? "HH:mm" : "h:mm a");
}
function cronMinuteInterval(cron) {
  const [minute, ...rest] = cron.trim().split(/\s+/);
  if (rest.length !== 4 || rest.some((part) => part !== "*"))
    return null;
  return minute === "*" ? 1 : parseCronStep(minute, 1, 59);
}
function normaliseWeekdays(value) {
  const seen_days = /* @__PURE__ */ new Set();
  for (const day of value || []) {
    if (day >= 0 && day <= 6)
      seen_days.add(day);
  }
  return WEEKDAY_OPTIONS.map((day) => day.value).filter((day) => seen_days.has(day));
}
function normaliseMonthDays(value) {
  const seen_days = /* @__PURE__ */ new Set();
  for (const day of value || []) {
    if (day >= 1 && day <= 31)
      seen_days.add(day);
  }
  return Array.from({ length: 31 }, (_, index) => index + 1).filter((day) => seen_days.has(day));
}
function normaliseWeeksOfMonth(value) {
  const seen_weeks = /* @__PURE__ */ new Set();
  for (const week of value || []) {
    if (week >= 1 && week <= 5)
      seen_weeks.add(week);
  }
  return WEEK_OF_MONTH_OPTIONS.filter((week) => seen_weeks.has(week));
}
function parseCronMonthDays(value) {
  if (!value || value === "*")
    return [];
  const days = value.split(",").map((part) => parseCronNumber(part, 1, 31));
  return days.every((day) => day !== null) ? [...new Set(days)].sort((a, b) => a - b) : [];
}
function parseCronStep(value, min, max) {
  const match = /^\*\/(\d+)$/.exec(value || "");
  if (!match)
    return null;
  const step = +match[1];
  return step >= min && step <= max ? step : null;
}
function parseRecurringCron(value) {
  const [minute_part, hour_part, day_part, month_part, weekday_part] = (value || DEFAULT_RECURRING_CRON).trim().split(/\s+/);
  const minute = parseCronNumber(minute_part, 0, 59);
  const hour = parseCronNumber(hour_part, 0, 23);
  const time = minute === null || hour === null ? DEFAULT_RECURRING_TIME : formatClockTime(hour * 60 + minute);
  const custom = {
    recurrence_type: "custom",
    recurrence_time: time,
    recurrence_interval: 1,
    recurrence_week_of_month: [1],
    recurrence_weekdays: [1],
    recurrence_day_of_month: [1]
  };
  if (day_part === "*" && month_part === "*" && weekday_part === "*") {
    const minute_step = minute_part === "*" ? 1 : parseCronStep(minute_part, 1, 59);
    if (minute_step !== null && hour_part === "*")
      return custom;
    const hour_step = hour_part === "*" ? 1 : parseCronStep(hour_part, 1, 23);
    if (parseCronNumber(minute_part, 0, 59) === 0 && hour_step !== null) {
      return __spreadProps(__spreadValues({}, custom), {
        recurrence_type: "hours",
        recurrence_interval: hour_step
      });
    }
  }
  if (minute === null || hour === null || month_part !== "*")
    return custom;
  if (day_part === "*" && weekday_part === "*") {
    return __spreadProps(__spreadValues({}, custom), { recurrence_type: "daily" });
  }
  if (day_part === "*" && weekday_part === "1-5") {
    return __spreadProps(__spreadValues({}, custom), { recurrence_type: "weekdays" });
  }
  const weekdays = normaliseWeekdays(parseCronWeekdays(weekday_part));
  if (isCronMonthlyWeekday(day_part, weekday_part)) {
    return __spreadProps(__spreadValues({}, custom), {
      recurrence_type: "monthly_weekday",
      recurrence_week_of_month: parseCronWeeksOfMonth(day_part),
      recurrence_weekdays: weekdays
    });
  }
  if (day_part === "*" && weekdays.length) {
    return __spreadProps(__spreadValues({}, custom), {
      recurrence_type: "weekly",
      recurrence_weekdays: weekdays
    });
  }
  const days_of_month = parseCronMonthDays(day_part);
  if (days_of_month.length && weekday_part === "*") {
    return __spreadProps(__spreadValues({}, custom), {
      recurrence_type: "monthly",
      recurrence_day_of_month: days_of_month
    });
  }
  return custom;
}
function ordinalLabel(value) {
  return i18n("SIGNAGE_MANAGER.ORDINAL", { count: value }, value);
}
function formatDuration(value) {
  const total_minutes = Math.max(0, Math.round(value || 0));
  if (!total_minutes)
    return "";
  const parts = [
    {
      value: Math.floor(total_minutes / (24 * 60)),
      key: "SIGNAGE_MANAGER.DURATION_DAY"
    },
    {
      value: Math.floor(total_minutes % (24 * 60) / 60),
      key: "SIGNAGE_MANAGER.DURATION_HOUR"
    },
    { value: total_minutes % 60, key: "SIGNAGE_MANAGER.DURATION_MINUTE" }
  ];
  return parts.filter((part) => part.value).map((part) => i18n(part.key, { count: part.value }, part.value)).join(" ");
}
function playLengthLabel(minutes) {
  return formatDuration(minutes) || i18n("SIGNAGE_MANAGER.ONE_PLAYLIST_PASS");
}
function weekdayNames(value, locale) {
  const format2 = new Intl.DateTimeFormat(locale, { weekday: "long" });
  const weekdays = normaliseWeekdays(value);
  return (weekdays.length ? weekdays : [1]).map((day) => format2.format(new Date(2024, 0, day === 0 ? 7 : day))).join(", ");
}
function recurringScheduleSummary(value, time, period, locale) {
  const duration = playLengthLabel(period);
  switch (value.recurrence_type) {
    case "custom":
      return null;
    case "hours": {
      const interval = value.recurrence_interval || 1;
      return i18n("SIGNAGE_MANAGER.SUMMARY_EVERY_HOUR", { interval }, interval);
    }
    case "weekdays":
      return i18n("SIGNAGE_MANAGER.SUMMARY_WEEKDAYS", { time, duration });
    case "weekly":
      return i18n("SIGNAGE_MANAGER.SUMMARY_WEEKLY", {
        days: weekdayNames(value.recurrence_weekdays, locale),
        time,
        duration
      });
    case "monthly": {
      const days = normaliseMonthDays(value.recurrence_day_of_month);
      return i18n("SIGNAGE_MANAGER.SUMMARY_MONTHLY", {
        days: (days.length ? days : [1]).map(ordinalLabel).join(", "),
        time,
        duration
      });
    }
    case "monthly_weekday": {
      const weeks = normaliseWeeksOfMonth(value.recurrence_week_of_month);
      return i18n("SIGNAGE_MANAGER.SUMMARY_MONTHLY_WEEKDAY", {
        weeks: (weeks.length ? weeks : [1]).map(ordinalLabel).join(", "),
        days: weekdayNames(value.recurrence_weekdays, locale),
        time,
        duration
      });
    }
    default:
      return i18n("SIGNAGE_MANAGER.SUMMARY_DAILY", { time, duration });
  }
}
function distanceLabel(milliseconds) {
  const minutes = Math.max(1, Math.round(milliseconds / 6e4));
  const [value, key] = minutes >= 24 * 60 ? [Math.round(minutes / (24 * 60)), "SIGNAGE_MANAGER.DURATION_DAY"] : minutes >= 60 ? [Math.round(minutes / 60), "SIGNAGE_MANAGER.DURATION_HOUR"] : [minutes, "SIGNAGE_MANAGER.DURATION_MINUTE"];
  return i18n(key, { count: value }, value);
}
function scheduleExpiryLabel(valid_until, now = Date.now()) {
  if (!valid_until)
    return "";
  const expiry = fromUnixTime(valid_until).getTime();
  const time = distanceLabel(Math.abs(expiry - now));
  return expiry >= now ? i18n("SIGNAGE_MANAGER.SCHEDULE_UNTIL_FROM_NOW", { time }) : i18n("SIGNAGE_MANAGER.SCHEDULE_UNTIL_AGO", { time });
}
function scheduleMaskLabel(mask) {
  return i18n("SIGNAGE_MANAGER.SCHEDULE_MASK_SUMMARY", {
    mask,
    size: mask.length
  });
}
function scheduleSummary(schedule, locale) {
  const period = playPeriodMinutes(schedule);
  const takeover = schedule.play_takeover ? i18n("SIGNAGE_MANAGER.TAKEOVER_SUFFIX") : "";
  const suffix = [
    scheduleExpiryLabel(schedule.valid_until),
    schedule.mask ? scheduleMaskLabel(schedule.mask) : ""
  ].filter((part) => part).map((part) => ` \xB7 ${part}`).join("");
  if (isPlayOnceSchedule(schedule)) {
    const start = playOnceStart(schedule);
    const hour12 = !settingSignal("use_24_hour_time", false)();
    const date = start ? formatPlayDateTime(start, void 0, hour12) : "";
    const datetime = schedule.play_at ? date : `${date} ${i18n("SIGNAGE_MANAGER.DISPLAY_LOCAL_TIME")}`;
    return `${i18n("SIGNAGE_MANAGER.SUMMARY_PLAY_ONCE", {
      datetime,
      duration: playLengthLabel(period)
    })}${takeover}${suffix}`;
  }
  const cron = schedule.play_cron || DEFAULT_RECURRING_CRON;
  const recurrence = parseRecurringCron(cron);
  const minute_interval = cronMinuteInterval(cron);
  const summary = minute_interval !== null ? i18n("SIGNAGE_MANAGER.SUMMARY_EVERY_MINUTE", { interval: minute_interval }, minute_interval) : recurringScheduleSummary(recurrence, formatSettingTime(recurrence.recurrence_time), period, locale) ?? `${i18n("SIGNAGE_MANAGER.CUSTOM_SCHEDULE")} (${cron})`;
  return `${summary}${takeover}${suffix}`;
}

export {
  DEFAULT_RECURRING_TIME,
  DEFAULT_RECURRING_CRON,
  WEEKDAY_OPTIONS,
  WEEK_OF_MONTH_OPTIONS,
  formatClockTime,
  normaliseWeekdays,
  normaliseMonthDays,
  normaliseWeeksOfMonth,
  parseRecurringCron,
  ordinalLabel,
  playLengthLabel,
  recurringScheduleSummary,
  scheduleExpiryLabel,
  scheduleMaskLabel,
  scheduleSummary
};
//# debugId=91fecdd6-bfa4-5cd8-90bc-87577bf62c59
//# sourceMappingURL=chunk-LUTA3NB4.js.map

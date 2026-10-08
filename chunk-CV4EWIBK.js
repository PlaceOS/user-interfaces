import {
  getUnixTime
} from "./chunk-IDK2QKPP.js";
import {
  Os,
  differenceInMilliseconds,
  enUS,
  endOfDay,
  format,
  formatInTimeZone,
  fromZonedTime,
  getDefaultOptions,
  getRoundingMethod,
  getTimezoneOffsetInMilliseconds,
  minutesInDay,
  minutesInMonth,
  normalizeDates,
  toDate,
  toZonedTime
} from "./chunk-VC4MJRPT.js";

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

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

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/formatDistance.js
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(earlierDate_, laterDate_);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// apps/signage-manager/src/app/signage-cron.util.ts
var MAX_CRON_SEARCH_DAYS = 2 * 366;
var MS_PER_DAY = 864e5;
function cronParts(cron) {
  const parts = (cron || "").trim().split(/\s+/);
  return parts.length === 5 ? parts : null;
}
function matchesCronPart(value, cron_part) {
  if (cron_part === "*")
    return true;
  if (cron_part.includes(",")) {
    return cron_part.split(",").some((item) => matchesCronPart(value, item));
  }
  if (cron_part.includes("/")) {
    const [base, step] = cron_part.split("/");
    const step_value = Number(step);
    if (!step_value)
      return false;
    if (base === "*")
      return value % step_value === 0;
    if (base.includes("-")) {
      const [start, end] = base.split("-").map(Number);
      if (value < start || value > end)
        return false;
      return (value - start) % step_value === 0;
    }
    return value % step_value === 0 && matchesCronPart(value, base);
  }
  if (cron_part.includes("-")) {
    const [start, end] = cron_part.split("-").map(Number);
    return value >= start && value <= end;
  }
  return Number(cron_part) === value;
}
function parseCronNumber(value, min, max) {
  if (!/^\d+$/.test(value || ""))
    return null;
  const number_value = Number(value);
  return number_value >= min && number_value <= max ? number_value : null;
}
function parseCronWeekdays(value) {
  if (!value?.trim() || value === "*")
    return [];
  const days = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((_) => parseCronNumber(_, 0, 6));
      if (start === null || end === null || start > end)
        return [];
      for (let day = start; day <= end; day++)
        days.add(day);
    } else {
      const day = parseCronNumber(part, 0, 6);
      if (day === null)
        return [];
      days.add(day);
    }
  }
  return [...days].sort((a, b) => a - b);
}
function parseCronWeekOfMonthRange(value) {
  const match = /^(\d+)-(\d+)$/.exec(value || "");
  if (!match)
    return null;
  const start = Number(match[1]);
  const end = Number(match[2]);
  if (start === 29 && end === 31)
    return 5;
  if ((start - 1) % 7 !== 0 || end !== start + 6)
    return null;
  const week = (start - 1) / 7 + 1;
  return week >= 1 && week <= 4 ? week : null;
}
function parseCronWeeksOfMonth(value) {
  if (!value?.trim() || value === "*")
    return [];
  const weeks = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    const week = parseCronWeekOfMonthRange(part);
    if (week === null)
      return [];
    weeks.add(week);
  }
  return [...weeks].sort((a, b) => a - b);
}
function isCronMonthlyWeekday(day_part, weekday_part) {
  return !!parseCronWeeksOfMonth(day_part).length && !!parseCronWeekdays(weekday_part).length;
}
function doesCronMatchDay(parts, date) {
  const [, , day_part, month_part, weekday_part] = parts;
  if (!matchesCronPart(date.getMonth() + 1, month_part))
    return false;
  if (day_part === "*" && weekday_part === "*")
    return true;
  const day_matches = matchesCronPart(date.getDate(), day_part);
  if (weekday_part === "*")
    return day_matches;
  const weekday_matches = matchesCronPart(date.getDay(), weekday_part);
  if (day_part === "*")
    return weekday_matches;
  if (isCronMonthlyWeekday(day_part, weekday_part)) {
    return day_matches && weekday_matches;
  }
  return day_matches || weekday_matches;
}
function cronDaySlots(parts) {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    if (!matchesCronPart(hour, parts[1]))
      continue;
    for (let minute = 0; minute < 60; minute++) {
      if (matchesCronPart(minute, parts[0]))
        slots.push(hour * 60 + minute);
    }
  }
  return slots;
}
function wallClockTime(year, month, day, minutes, timezone) {
  if (!timezone) {
    const date = new Date(year, month, day, 0, minutes);
    return date.getDate() === day && date.getHours() * 60 + date.getMinutes() === minutes ? date.getTime() : null;
  }
  const pad = (value) => String(value).padStart(2, "0");
  const wall = `${year}-${pad(month + 1)}-${pad(day)}T${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}:00`;
  const instant = fromZonedTime(wall, timezone);
  return formatInTimeZone(instant, timezone, "yyyy-MM-dd'T'HH:mm:ss") === wall ? instant.getTime() : null;
}
function nextCronDates(cron, { from, count, until = Infinity, timezone, allows }) {
  const result = [];
  const parts = cronParts(cron);
  if (!parts || !Number.isFinite(from) || count <= 0)
    return result;
  const slots = cronDaySlots(parts);
  if (!slots.length)
    return result;
  const first = timezone ? toZonedTime(from, timezone) : new Date(from);
  for (let offset = -1; offset < MAX_CRON_SEARCH_DAYS; offset++) {
    const calendar = new Date(first.getFullYear(), first.getMonth(), first.getDate() + offset, 12);
    if (!doesCronMatchDay(parts, calendar))
      continue;
    const [year, month, day] = [
      calendar.getFullYear(),
      calendar.getMonth(),
      calendar.getDate()
    ];
    const next_day = new Date(year, month, day + 1, 12);
    const day_start = wallClockTime(year, month, day, 0, timezone);
    const next_day_start = wallClockTime(next_day.getFullYear(), next_day.getMonth(), next_day.getDate(), 0, timezone);
    const even_day = day_start !== null && next_day_start !== null && next_day_start - day_start === MS_PER_DAY;
    if (even_day && next_day_start <= from)
      continue;
    for (const slot of slots) {
      const time = even_day ? day_start + slot * 6e4 : wallClockTime(year, month, day, slot, timezone);
      if (time === null || time < from)
        continue;
      if (time > until)
        return result;
      const start = new Date(time);
      if (allows && !allows(start))
        continue;
      result.push(start);
      if (result.length >= count)
        return result;
    }
  }
  return result;
}

// apps/signage-manager/src/app/signage-playlist.util.ts
var PLAY_AT_LOCAL_PATTERN = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
function isPlayOnceSchedule(schedule) {
  return !!schedule.play_at || !!schedule.play_at_local;
}
function parsePlayAtLocal(value) {
  const match = PLAY_AT_LOCAL_PATTERN.exec(value || "");
  if (!match)
    return null;
  const [year, month, day, hours, minutes, seconds] = match.slice(1).map(Number);
  const date = new Date(year, month - 1, day, hours, minutes, seconds);
  return date.getDate() === day && date.getMonth() === month - 1 && minutes < 60 && seconds < 60 ? date : null;
}
function formatPlayAtLocal(date) {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss");
}
function playOnceLabel(schedule) {
  const start = playOnceStart(schedule)?.toLocaleString() ?? "";
  return schedule.play_at ? start : `${start} display local time`;
}
function playOnceStart(schedule) {
  if (schedule.play_at)
    return fromUnixTime(schedule.play_at);
  return parsePlayAtLocal(schedule.play_at_local);
}
var DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
var WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function mediaAnimation(value) {
  if (typeof value !== "number")
    return value || Os.Default;
  const animations = Object.values(Os);
  return Number.isInteger(value) && value >= 0 && value < animations.length ? animations[value] : Os.Default;
}
function playlistAnimation(playlist) {
  const value = playlist.default_animation;
  return value === Os.Cut ? Os.Default : mediaAnimation(value);
}
function playlistMediaThumbnailUrl(item) {
  if (!item?.thumbnail_id)
    return "";
  return item.id ? `/api/engine/v2/signage/media/${item.id}/thumbnail` : item.thumbnail_url || "";
}
function playlistMediaUrl(item) {
  return item?.media_id ? `/api/engine/v2/uploads/${item.media_id}/url` : item?.media_uri || "";
}
function playlistMediaIcon(item) {
  return item?.media_type === "video" ? "video_library" : item?.media_type === "webpage" ? "http" : item?.media_type === "plugin" ? "extension" : "image";
}
function playlistMediaItems(list) {
  const scheduled_media = (list.schedules || []).map((item) => item.media).filter((item) => !!item?.id);
  if (!list.media?.length && scheduled_media.length)
    return scheduled_media;
  const media = list.media?.length ? list.media : scheduled_media;
  const media_by_id = new Map(media.map((item) => [item.id, item]));
  for (const schedule of list.schedules || []) {
    if (!schedule.media?.id)
      continue;
    if (schedule.id)
      media_by_id.set(schedule.id, schedule.media);
    if (schedule.item_id) {
      media_by_id.set(schedule.item_id, schedule.media);
    }
  }
  return list.items?.length ? list.items.map((id) => media_by_id.get(id)).filter((item) => !!item) : media;
}
function reorderPlaylistItemIds(item_ids, ordered_ids) {
  if (!item_ids.length)
    return [...ordered_ids];
  const shown_ids = new Set(ordered_ids);
  let next_index = 0;
  return item_ids.map((id) => shown_ids.has(id) && next_index < ordered_ids.length ? ordered_ids[next_index++] : id);
}
function playlistMediaIds(list) {
  return playlistMediaItems(list).map((item) => item.id);
}
function playlistItemScheduleMap(list) {
  const map = /* @__PURE__ */ new Map();
  for (const item of list.schedules || []) {
    if (item.id)
      map.set(item.id, item);
    if (item.item_id)
      map.set(item.item_id, item);
    if (item.media?.id)
      map.set(item.media.id, item);
  }
  return map;
}
function ordinal(value) {
  if (value >= 11 && value <= 13)
    return `${value}th`;
  switch (value % 10) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}
function formatCronTime(hour_part, minute_part) {
  const date = /* @__PURE__ */ new Date();
  date.setHours(+hour_part || 0, +minute_part || 0, 0, 0);
  return date.toLocaleTimeString(void 0, {
    hour: "numeric",
    minute: "2-digit"
  });
}
function durationLabel(duration_minutes) {
  if (!duration_minutes)
    return "one playlist pass";
  if (duration_minutes < 60) {
    return `${duration_minutes} minute${duration_minutes === 1 ? "" : "s"}`;
  }
  if (duration_minutes % 60 === 0) {
    const hours2 = duration_minutes / 60;
    return `${hours2} hour${hours2 === 1 ? "" : "s"}`;
  }
  const hours = Math.floor(duration_minutes / 60);
  const minutes = duration_minutes % 60;
  return `${hours} hr ${minutes} min`;
}
function parseCronMonthDays(value) {
  if (!value || value === "*")
    return [];
  const days = value.split(",").map((part) => parseCronNumber(part, 1, 31));
  return days.every((day) => day !== null) ? [...new Set(days)].sort((a, b) => a - b) : [];
}
function listText(values) {
  if (values.length <= 1)
    return values[0] || "";
  if (values.length === 2)
    return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(", ")} and ${values.at(-1)}`;
}
function weekOfMonthLabel(day_part) {
  const [start, end] = day_part.split("-").map(Number);
  if (start === 1 && end === 7)
    return "1st";
  if (start === 8 && end === 14)
    return "2nd";
  if (start === 15 && end === 21)
    return "3rd";
  if (start === 22 && end === 28)
    return "4th";
  if (start === 29 && end === 31)
    return "5th";
  return "";
}
function weekOfMonthLabels(day_part) {
  const labels = day_part.split(",").map((range) => weekOfMonthLabel(range));
  return labels.every((label) => label) ? labels : [];
}
function humanizeCronSchedule(cron, duration_minutes) {
  const parts = (cron || "0 0 * * *").trim().split(/\s+/);
  if (parts.length !== 5)
    return `Custom schedule (${cron})`;
  const [minute, hour, day, month, day_of_week] = parts;
  const duration = durationLabel(duration_minutes);
  const suffix = ` for ${duration}`;
  if (month !== "*")
    return `Custom schedule (${cron})`;
  const minute_interval = /^\*\/(\d+)$/.exec(minute)?.[1];
  if (minute === "*" && hour === "*" && day === "*" && day_of_week === "*") {
    return `Every minute${suffix}`;
  }
  if (minute_interval && hour === "*" && day === "*" && day_of_week === "*") {
    return `Every ${minute_interval} minutes${suffix}`;
  }
  const hour_interval = /^\*\/(\d+)$/.exec(hour)?.[1];
  if (minute === "0" && hour === "*" && day === "*" && day_of_week === "*") {
    return `Every hour${suffix}`;
  }
  if (minute === "0" && hour_interval && day === "*" && day_of_week === "*") {
    return `Every ${hour_interval} hours${suffix}`;
  }
  if (!/^\d+$/.test(minute) || !/^\d+$/.test(hour)) {
    return `Custom schedule (${cron})`;
  }
  const time = formatCronTime(hour, minute);
  if (day === "*" && day_of_week === "*") {
    return `Every day at ${time}${suffix}`;
  }
  if (day === "*" && day_of_week === "1-5") {
    return `Weekdays at ${time}${suffix}`;
  }
  if (day === "*" && day_of_week !== "*") {
    const weekdays = parseCronWeekdays(day_of_week).map((day_value) => WEEKDAY_NAMES[day_value]);
    return weekdays.length ? `Every ${listText(weekdays)} at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  if (day !== "*" && day_of_week === "*") {
    const days = parseCronMonthDays(day).map((day_value) => ordinal(day_value));
    return days.length ? `On the ${listText(days)} of each month at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  if (isCronMonthlyWeekday(day, day_of_week)) {
    const weeks = weekOfMonthLabels(day);
    const weekdays = parseCronWeekdays(day_of_week).map((day_value) => WEEKDAY_NAMES[day_value]);
    return weeks.length && weekdays.length ? `On the ${listText(weeks)} ${listText(weekdays)} of each month at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  return `Custom schedule (${cron})`;
}
function schedulePeriod(schedule) {
  return Number.isFinite(schedule.play_period) ? schedule.play_period || 0 : DEFAULT_PLAY_PERIOD_MINUTES;
}
var DEFAULT_PLAY_TIME_MS = 15 * 1e3;
function playlistLoopDuration(items, default_duration = 0) {
  return items.reduce((total, item) => total + (item.play_time || item.video_length || default_duration || DEFAULT_PLAY_TIME_MS), 0);
}
function playlistScheduleExpiryLabel(schedule, now = Date.now()) {
  if (!schedule.valid_until)
    return "";
  const expiry = fromUnixTime(schedule.valid_until);
  const distance = formatDistance(expiry, new Date(now));
  const relative_time = expiry.getTime() >= now ? `${distance} from now` : `${distance} ago`;
  return `until ${relative_time}`;
}
function playlistScheduleExpiryTooltip(schedule) {
  return schedule.valid_until ? fromUnixTime(schedule.valid_until).toLocaleString() : "";
}
function playlistExpiredAt(playlist, now = Date.now()) {
  if (playlist.valid_until && playlist.valid_until * 1e3 < now) {
    return playlist.valid_until;
  }
  const ends = (playlist.schedules || []).map(({ valid_until }) => valid_until || 0);
  if (!ends.length || ends.some((end) => !end || end * 1e3 >= now)) {
    return 0;
  }
  return Math.max(...ends);
}
function playlistStatus(playlist, approvals, requests, now = Date.now()) {
  if (playlistExpiredAt(playlist, now))
    return "expired";
  if (playlist.valid_from && playlist.valid_from * 1e3 > now) {
    return "pending";
  }
  if (!(playlist.id in approvals) || approvals[playlist.id])
    return null;
  return requests[playlist.id] ? "awaiting_review" : "awaiting_approval";
}
function playlistScheduleLabel(schedule) {
  const period = schedulePeriod(schedule);
  const expiry = playlistScheduleExpiryLabel(schedule);
  const suffix = [
    schedule.play_takeover ? "takeover" : "",
    expiry,
    schedule.mask ? `mask ${schedule.mask}, repeats every ${schedule.mask.length} instances` : ""
  ].filter((_) => _).join(" \xB7 ");
  if (isPlayOnceSchedule(schedule)) {
    return `Plays once on ${playOnceLabel(schedule)} for ${durationLabel(period)}${suffix ? ` \xB7 ${suffix}` : ""}`;
  }
  return `${humanizeCronSchedule(schedule.play_cron || "0 0 * * *", period)}${suffix ? ` \xB7 ${suffix}` : ""}`;
}
function isValidScheduleMask(mask) {
  return mask.length > 0 && mask.length <= 128 && !/[^01]/.test(mask);
}
function hasPlayableScheduleMask(schedule) {
  const mask = schedule.mask || "";
  return !mask || isValidScheduleMask(mask) && !!schedule.valid_from && mask.includes("1");
}
function createScheduleMaskFilter(schedule, timezone) {
  const mask = schedule.mask || "";
  const size = mask.length;
  if (!size)
    return () => true;
  if (!hasPlayableScheduleMask(schedule))
    return () => false;
  const anchor = schedule.valid_from * 1e3;
  if (!Number.isFinite(new Date(anchor).getTime()))
    return () => false;
  if (isPlayOnceSchedule(schedule))
    return (date) => date.getTime() >= anchor && mask[0] === "1";
  const parts = cronParts(schedule.play_cron || "0 0 * * *");
  if (!parts)
    return () => false;
  const slots = cronDaySlots(parts);
  if (!slots.length)
    return () => false;
  const wallTime = (date) => timezone ? toZonedTime(date, timezone) : new Date(date);
  const instant = (date) => timezone ? fromZonedTime(date, timezone) : new Date(date);
  const first_day = wallTime(new Date(anchor));
  first_day.setHours(0, 0, 0, 0);
  let cursor = new Date(first_day);
  let preceding = 0;
  let cached_day = NaN;
  let cached_times = [];
  const countBefore = (day, before) => {
    if (!doesCronMatchDay(parts, day))
      return 0;
    const next_day = new Date(day);
    next_day.setDate(next_day.getDate() + 1);
    const start = instant(day).getTime();
    const end = instant(next_day).getTime();
    if (start >= anchor && end <= before && end - start === 864e5)
      return slots.length;
    if (cached_day !== day.getTime()) {
      cached_day = day.getTime();
      cached_times = [];
      for (const slot of slots) {
        const wall = new Date(day);
        wall.setHours(0, slot, 0, 0);
        const time = instant(wall);
        if (time.getTime() >= anchor && wallTime(time).getTime() === wall.getTime()) {
          cached_times.push(time.getTime());
        }
      }
      cached_times.sort((left, right) => left - right);
    }
    let lower = 0;
    let upper = cached_times.length;
    while (lower < upper) {
      const middle = Math.floor((lower + upper) / 2);
      if (cached_times[middle] < before)
        lower = middle + 1;
      else
        upper = middle;
    }
    return lower;
  };
  return (date) => {
    const time = date.getTime();
    if (!Number.isFinite(time) || time < anchor)
      return false;
    const day = wallTime(date);
    day.setHours(0, 0, 0, 0);
    if (day < cursor) {
      cursor = new Date(first_day);
      preceding = 0;
    }
    for (; cursor < day; cursor.setDate(cursor.getDate() + 1)) {
      preceding = (preceding + countBefore(cursor, Infinity)) % size;
    }
    const index = (preceding + countBefore(day, time)) % size;
    return mask[index] === "1";
  };
}
function formatPlayDateTime(date, timeZone) {
  return date.toLocaleString(void 0, {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}
function formatPlayTime(date, timeZone) {
  return date.toLocaleTimeString(void 0, {
    timeZone,
    hour: "numeric",
    minute: "2-digit"
  });
}
function playEndTime(start, duration_minutes) {
  const duration = Math.max(0, duration_minutes || 0);
  return new Date(start.getTime() + duration * 6e4 - (duration > 0 ? 1e3 : 0));
}
function formatPlayDateTimeRange(start, duration_minutes, timeZone) {
  const end = playEndTime(start, duration_minutes);
  const day = (date) => (timeZone ? toZonedTime(date, timeZone) : date).toDateString();
  const end_text = day(start) === day(end) ? formatPlayTime(end, timeZone) : formatPlayDateTime(end, timeZone);
  return `${formatPlayDateTime(start, timeZone)} \u2013 ${end_text}`;
}
function nextSchedulePlays(schedule, count, now) {
  const period = schedulePeriod(schedule);
  if (isPlayOnceSchedule(schedule)) {
    const start = playOnceStart(schedule);
    if (!start)
      return [];
    const end = playEndTime(start, period);
    const play_at = getUnixTime(start);
    const outside_valid_window = !!schedule.valid_until && play_at > schedule.valid_until || !!schedule.valid_from && play_at < schedule.valid_from;
    return end.getTime() >= now && !outside_valid_window && createScheduleMaskFilter(schedule)(start) ? [{ start, period }] : [];
  }
  if (!hasPlayableScheduleMask(schedule))
    return [];
  return nextCronDates(schedule.play_cron || "0 0 * * *", {
    from: Math.max(now + 1, (schedule.valid_from || 0) * 1e3),
    until: schedule.valid_until ? schedule.valid_until * 1e3 : void 0,
    count,
    allows: createScheduleMaskFilter(schedule)
  }).map((start) => ({ start, period }));
}
function playlistNextPlayLabels(schedules, count = 5, now = Date.now()) {
  return schedules.flatMap((schedule) => nextSchedulePlays(schedule, count, now)).sort((a, b) => a.start.getTime() - b.start.getTime()).slice(0, count).map(({ start, period }) => formatPlayDateTimeRange(start, period));
}
function playlistScheduleNextPlayLabels(schedule, count = 5) {
  return playlistNextPlayLabels([schedule], count);
}

export {
  differenceInMonths,
  fromUnixTime,
  cronParts,
  parseCronNumber,
  parseCronWeekdays,
  parseCronWeeksOfMonth,
  isCronMonthlyWeekday,
  doesCronMatchDay,
  cronDaySlots,
  nextCronDates,
  isPlayOnceSchedule,
  parsePlayAtLocal,
  formatPlayAtLocal,
  playOnceStart,
  DEFAULT_PLAY_PERIOD_MINUTES,
  playlistAnimation,
  playlistMediaThumbnailUrl,
  playlistMediaUrl,
  playlistMediaIcon,
  playlistMediaItems,
  reorderPlaylistItemIds,
  playlistMediaIds,
  playlistItemScheduleMap,
  ordinal,
  parseCronMonthDays,
  playlistLoopDuration,
  playlistScheduleExpiryLabel,
  playlistScheduleExpiryTooltip,
  playlistExpiredAt,
  playlistStatus,
  playlistScheduleLabel,
  isValidScheduleMask,
  hasPlayableScheduleMask,
  createScheduleMaskFilter,
  formatPlayDateTime,
  formatPlayDateTimeRange,
  playlistNextPlayLabels,
  playlistScheduleNextPlayLabels
};
//# debugId=04a93b55-7d58-5a33-8881-84a21dbdf902
//# sourceMappingURL=chunk-CV4EWIBK.js.map

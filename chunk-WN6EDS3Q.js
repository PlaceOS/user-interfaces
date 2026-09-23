import {
  differenceInMilliseconds,
  enUS,
  endOfDay,
  fromZonedTime,
  getDefaultOptions,
  getRoundingMethod,
  getTimezoneOffsetInMilliseconds,
  minutesInDay,
  minutesInMonth,
  normalizeDates,
  toDate,
  toZonedTime
} from "./chunk-QSNPLM4U.js";

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

// apps/signage-manager/src/app/signage-playlist.util.ts
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
function parseCronList(value, min, max) {
  const values = /* @__PURE__ */ new Set();
  if (!value || value === "*")
    return [];
  for (const part of value.split(",")) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      if (start < min || end > max || start > end)
        return [];
      for (let item = start; item <= end; item++)
        values.add(item);
    } else {
      const item = Number(part);
      if (item < min || item > max)
        return [];
      values.add(item);
    }
  }
  return [...values].sort((a, b) => a - b);
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
function isCronMonthlyWeekday(day_part, weekday_part) {
  return /^\d+-\d+(,\d+-\d+)*$/.test(day_part || "") && weekday_part !== "*";
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
    const weekdays = parseCronList(day_of_week, 0, 6).map((day_value) => WEEKDAY_NAMES[day_value]);
    return weekdays.length ? `Every ${listText(weekdays)} at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  if (day !== "*" && day_of_week === "*") {
    const days = parseCronList(day, 1, 31).map((day_value) => ordinal(day_value));
    return days.length ? `On the ${listText(days)} of each month at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  if (isCronMonthlyWeekday(day, day_of_week)) {
    const weeks = weekOfMonthLabels(day);
    const weekdays = parseCronList(day_of_week, 0, 6).map((day_value) => WEEKDAY_NAMES[day_value]);
    return weeks.length && weekdays.length ? `On the ${listText(weeks)} ${listText(weekdays)} of each month at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  return `Custom schedule (${cron})`;
}
function schedulePeriod(schedule) {
  return Number.isFinite(schedule.play_period) ? schedule.play_period || 0 : DEFAULT_PLAY_PERIOD_MINUTES;
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
function playlistScheduleLabel(schedule) {
  const period = schedulePeriod(schedule);
  const expiry = playlistScheduleExpiryLabel(schedule);
  const suffix = [
    schedule.play_takeover ? "takeover" : "",
    expiry,
    schedule.mask ? `mask ${schedule.mask}, repeats every ${schedule.mask.length} instances` : ""
  ].filter((_) => _).join(" \xB7 ");
  if (schedule.play_at) {
    const date = fromUnixTime(schedule.play_at);
    return `Plays once on ${date.toLocaleString()} for ${durationLabel(period)}${suffix ? ` \xB7 ${suffix}` : ""}`;
  }
  return `${humanizeCronSchedule(schedule.play_cron || "0 0 * * *", period)}${suffix ? ` \xB7 ${suffix}` : ""}`;
}
function matchesCronPart(value, cron_part) {
  if (cron_part === "*")
    return true;
  if (cron_part.includes(",")) {
    return cron_part.split(",").some((item) => matchesCronPart(value, item));
  }
  if (cron_part.includes("/")) {
    const [base, step] = cron_part.split("/");
    return !!+step && value % +step === 0 && matchesCronPart(value, base);
  }
  if (cron_part.includes("-")) {
    const [start, end] = cron_part.split("-").map(Number);
    return value >= start && value <= end;
  }
  return Number(cron_part) === value;
}
function doesCronMatchDate(cron, date) {
  const parts = cron.trim().split(/\s+/);
  if (parts.length !== 5)
    return false;
  const [minute, hour, day, month, day_of_week] = parts;
  if (!matchesCronPart(date.getMinutes(), minute))
    return false;
  if (!matchesCronPart(date.getHours(), hour))
    return false;
  if (!matchesCronPart(date.getMonth() + 1, month))
    return false;
  const day_matches = matchesCronPart(date.getDate(), day);
  const weekday_matches = matchesCronPart(date.getDay(), day_of_week);
  if (day === "*" && day_of_week === "*")
    return true;
  if (day !== "*" && day_of_week === "*")
    return day_matches;
  if (day === "*" && day_of_week !== "*")
    return weekday_matches;
  if (isCronMonthlyWeekday(day, day_of_week)) {
    return day_matches && weekday_matches;
  }
  return day_matches || weekday_matches;
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
  if (schedule.play_at)
    return (date) => date.getTime() >= anchor && mask[0] === "1";
  const cron = schedule.play_cron || "0 0 * * *";
  const parts = cron.trim().split(/\s+/);
  if (parts.length !== 5)
    return () => false;
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    if (!matchesCronPart(hour, parts[1]))
      continue;
    for (let minute = 0; minute < 60; minute++) {
      if (matchesCronPart(minute, parts[0]))
        slots.push(hour * 60 + minute);
    }
  }
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
    const probe = new Date(day);
    probe.setHours(0, slots[0], 0, 0);
    if (!doesCronMatchDate(cron, probe))
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
function formatPlayDateTime(date) {
  return date.toLocaleString(void 0, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}
function formatPlayTime(date) {
  return date.toLocaleTimeString(void 0, {
    hour: "numeric",
    minute: "2-digit"
  });
}
function formatPlayDateTimeRange(start, duration_minutes) {
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + Math.max(0, duration_minutes || 0));
  if (duration_minutes > 0)
    end.setSeconds(end.getSeconds() - 1);
  const end_text = start.toDateString() === end.toDateString() ? formatPlayTime(end) : formatPlayDateTime(end);
  return `${formatPlayDateTime(start)} \u2013 ${end_text}`;
}
function nextCronPlayDates(cron, count, valid_until = 0, valid_from = 0, mask = "") {
  const allows = createScheduleMaskFilter({
    play_cron: cron,
    valid_from,
    mask
  });
  const result = [];
  if (!cron?.trim() || !hasPlayableScheduleMask({ mask, valid_from }))
    return result;
  let date = /* @__PURE__ */ new Date();
  date.setSeconds(0, 0);
  date.setMinutes(date.getMinutes() + 1);
  if (valid_from && fromUnixTime(valid_from) > date) {
    date = fromUnixTime(valid_from);
    if (date.getSeconds())
      date.setMinutes(date.getMinutes() + 1);
    date.setSeconds(0, 0);
  }
  const end = new Date(date);
  end.setFullYear(end.getFullYear() + 2);
  const expiry = valid_until ? fromUnixTime(valid_until) : end;
  while (date <= end && date <= expiry && result.length < count) {
    if (doesCronMatchDate(cron, date) && allows(date))
      result.push(new Date(date));
    date.setMinutes(date.getMinutes() + 1);
  }
  return result;
}
function playlistScheduleNextPlayLabels(schedule, count = 5) {
  const period = schedulePeriod(schedule);
  if (schedule.play_at) {
    const start = fromUnixTime(schedule.play_at);
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + Math.max(0, period || 0));
    if (period > 0)
      end.setSeconds(end.getSeconds() - 1);
    const outside_valid_window = !!schedule.valid_until && schedule.play_at > schedule.valid_until || !!schedule.valid_from && schedule.play_at < schedule.valid_from;
    return end >= /* @__PURE__ */ new Date() && !outside_valid_window && createScheduleMaskFilter(schedule)(start) ? [formatPlayDateTimeRange(start, period)] : [];
  }
  return nextCronPlayDates(schedule.play_cron || "0 0 * * *", count, schedule.valid_until, schedule.valid_from, schedule.mask).map((start) => formatPlayDateTimeRange(start, period));
}

export {
  differenceInMonths,
  fromUnixTime,
  playlistMediaThumbnailUrl,
  playlistMediaUrl,
  playlistMediaIcon,
  playlistMediaItems,
  playlistMediaIds,
  playlistItemScheduleMap,
  playlistScheduleExpiryLabel,
  playlistScheduleExpiryTooltip,
  playlistScheduleLabel,
  isValidScheduleMask,
  hasPlayableScheduleMask,
  createScheduleMaskFilter,
  playlistScheduleNextPlayLabels
};
//# debugId=87e356d6-aa5d-57c4-896f-aa8d038c8f02
//# sourceMappingURL=chunk-WN6EDS3Q.js.map

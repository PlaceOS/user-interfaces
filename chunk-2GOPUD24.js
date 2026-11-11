import {
  uploadUrl
} from "./chunk-3EBYOC5X.js";
import {
  DEFAULT_PLAY_PERIOD_MINUTES,
  cronDaySlots,
  cronParts,
  doesCronMatchDay,
  hasPlayableScheduleMask,
  isPlayOnceSchedule,
  mediaAnimation,
  parsePlayAtLocal
} from "./chunk-ZJ4GPTT6.js";
import {
  getUnixTime
} from "./chunk-7Y7SMIGA.js";
import {
  format,
  formatInTimeZone,
  fromZonedTime,
  toDate,
  toZonedTime,
  zs
} from "./chunk-5AOQ34DQ.js";

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// apps/signage-manager/src/app/signage-cron.util.ts
var MAX_CRON_SEARCH_DAYS = 2 * 366;
var MS_PER_DAY = 864e5;
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
function formatPlayAtLocal(date) {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss");
}
function playOnceStart(schedule) {
  if (schedule.play_at)
    return fromUnixTime(schedule.play_at);
  const local_time = parsePlayAtLocal(schedule.play_at_local);
  return local_time === null ? null : new Date(local_time);
}
function playlistAnimation(playlist) {
  const value = playlist.default_animation;
  return value === zs.Cut ? zs.Default : mediaAnimation(value);
}
function playlistMediaThumbnailUrl(item) {
  if (!item?.thumbnail_id)
    return "";
  return item.id ? `/api/engine/v2/signage/media/${item.id}/thumbnail` : item.thumbnail_url || "";
}
function playlistMediaUrl(item) {
  return item?.media_id ? uploadUrl(item.media_id) : item?.media_uri || "";
}
function playlistMediaIcon(item) {
  return item?.media_type === "video" ? "video_library" : item?.media_type === "webpage" ? "http" : item?.media_type === "plugin" ? "extension" : "image";
}
function playlistItemEntries(list) {
  const media_by_id = new Map((list.media || []).map((item) => [item.id, item]));
  for (const schedule of list.schedules || []) {
    if (!schedule.media?.id)
      continue;
    if (schedule.id)
      media_by_id.set(schedule.id, schedule.media);
    if (schedule.item_id) {
      media_by_id.set(schedule.item_id, schedule.media);
    }
  }
  return (list.items || []).flatMap((id) => {
    const item = media_by_id.get(id);
    return item ? [{ id, media: item }] : [];
  });
}
function playlistMediaItems(list) {
  return playlistItemEntries(list).map(({ media }) => media);
}
function playlistItemMediaIds(list) {
  const schedule_map = playlistItemScheduleMap(list);
  return (list.items || []).map((id) => {
    const schedule = schedule_map.get(id);
    return schedule?.media?.id || schedule?.item_id || id;
  });
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
function playPeriodMinutes(schedule) {
  return Number.isFinite(schedule.play_period) ? Math.max(0, schedule.play_period || 0) : DEFAULT_PLAY_PERIOD_MINUTES;
}
var DEFAULT_PLAY_TIME_MS = 15 * 1e3;
function playlistLoopDuration(items, default_duration = 0) {
  return items.reduce((total, item) => total + (item.play_time || item.video_length || default_duration || DEFAULT_PLAY_TIME_MS), 0);
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
function createScheduleMaskFilter(schedule, timezone) {
  const mask = schedule.mask || "";
  const size = mask.length;
  if (!size)
    return () => true;
  if (!hasPlayableScheduleMask(schedule))
    return () => false;
  const anchor = schedule.valid_from * 1e3;
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
function formatPlayDateTime(date, timeZone, hour12) {
  return date.toLocaleString(void 0, {
    timeZone,
    hour12,
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
  const period = playPeriodMinutes(schedule);
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
function playlistNextPlayTime(schedules, now = Date.now()) {
  let next = Infinity;
  for (const schedule of schedules) {
    const from = isPlayOnceSchedule(schedule) ? now : now - playPeriodMinutes(schedule) * 6e4;
    const [play] = nextSchedulePlays(schedule, 1, from);
    if (play)
      next = Math.min(next, Math.max(play.start.getTime(), now));
  }
  return Number.isFinite(next) ? next : null;
}
function playlistNextPlayLabels(schedules, count = 5, now = Date.now()) {
  return schedules.flatMap((schedule) => nextSchedulePlays(schedule, count, now)).sort((a, b) => a.start.getTime() - b.start.getTime()).slice(0, count).map(({ start, period }) => formatPlayDateTimeRange(start, period));
}
function playlistScheduleNextPlayLabels(schedule, count = 5) {
  return playlistNextPlayLabels([schedule], count);
}

export {
  fromUnixTime,
  nextCronDates,
  formatPlayAtLocal,
  playOnceStart,
  playlistAnimation,
  playlistMediaThumbnailUrl,
  playlistMediaUrl,
  playlistMediaIcon,
  playlistItemEntries,
  playlistMediaItems,
  playlistItemMediaIds,
  reorderPlaylistItemIds,
  playlistMediaIds,
  playlistItemScheduleMap,
  playPeriodMinutes,
  playlistLoopDuration,
  playlistScheduleExpiryTooltip,
  playlistExpiredAt,
  playlistStatus,
  createScheduleMaskFilter,
  formatPlayDateTime,
  formatPlayDateTimeRange,
  playlistNextPlayTime,
  playlistNextPlayLabels,
  playlistScheduleNextPlayLabels
};
//# debugId=219feb19-973e-5d14-ad29-79ec1f990c71
//# sourceMappingURL=chunk-2GOPUD24.js.map

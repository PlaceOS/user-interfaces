import {
  fromUnixTime,
  i18n,
  isSameDay,
  startOfDay
} from "./chunk-JDUUHHJA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/schedules/signage-schedule.util.ts
var BLOCK_PALETTE = [
  { bg: "#dbeafe", text: "#1e40af" },
  { bg: "#d1fae5", text: "#065f46" },
  { bg: "#fef3c7", text: "#92400e" },
  { bg: "#fee2e2", text: "#991b1b" },
  { bg: "#ede9fe", text: "#5b21b6" },
  { bg: "#fce7f3", text: "#9d174d" },
  { bg: "#cffafe", text: "#155e75" }
];
var DAY_COUNT = 7;
var MINUTES_PER_DAY = 1440;
var DEFAULT_PLAYLIST_DURATION = 24 * 60;
function parseCronNumber(value, min, max) {
  if (!/^\d+$/.test(value || ""))
    return null;
  const number_value = +value;
  return number_value >= min && number_value <= max ? number_value : null;
}
function parseCronWeekOfMonthRange(value) {
  const match = /^(\d+)-(\d+)$/.exec(value || "");
  if (!match)
    return null;
  const start = +match[1];
  const end = +match[2];
  if (start === 29 && end === 31)
    return 5;
  if ((start - 1) % 7 !== 0 || end !== start + 6)
    return null;
  const week = (start - 1) / 7 + 1;
  return week >= 1 && week <= 4 ? week : null;
}
function parseCronWeeksOfMonth(value) {
  if (!value?.trim() || value === "*")
    return null;
  const weeks = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    const week = parseCronWeekOfMonthRange(part);
    if (week === null)
      return null;
    weeks.add(week);
  }
  return [...weeks];
}
function parseCronWeekdays(value) {
  if (!value?.trim() || value === "*")
    return null;
  const days = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((_) => parseCronNumber(_, 0, 6));
      if (start === null || end === null || start > end)
        return null;
      for (let day = start; day <= end; day++)
        days.add(day);
    } else {
      const day = parseCronNumber(part, 0, 6);
      if (day === null)
        return null;
      days.add(day);
    }
  }
  return [...days];
}
function isCronMonthlyWeekday(day_part, weekday_part) {
  return !!parseCronWeeksOfMonth(day_part)?.length && !!parseCronWeekdays(weekday_part)?.length;
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
  }
  if (cron_part.includes("-")) {
    const [start, end] = cron_part.split("-").map(Number);
    return value >= start && value <= end;
  }
  return Number(cron_part) === value;
}
function playlistSchedules(playlist) {
  const legacy_playlist = playlist;
  if (playlist.schedules?.length)
    return playlist.schedules;
  return [
    {
      play_at: legacy_playlist.play_at,
      play_cron: legacy_playlist.play_cron || "0 0 * * *",
      play_period: legacy_playlist.play_period ?? DEFAULT_PLAYLIST_DURATION,
      play_takeover: !!legacy_playlist.play_takeover
    }
  ];
}
function playPeriodMinutes(schedule) {
  return Number.isFinite(schedule.play_period) ? Math.max(0, schedule.play_period || 0) : DEFAULT_PLAYLIST_DURATION;
}
function formatTime(minutes) {
  const hours = Math.floor(minutes / 60) % 24;
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}
function formatTimeRange(start_minutes, duration_minutes) {
  return `${formatTime(start_minutes)} \u2013 ${formatTime(start_minutes + duration_minutes)}`;
}
function parsePlayAt(play_at) {
  if (!play_at)
    return null;
  return fromUnixTime(play_at);
}
function isDayInRange(day, valid_from, valid_until) {
  const day_start = startOfDay(day).getTime();
  if (valid_from) {
    const from_start = startOfDay(fromUnixTime(valid_from)).getTime();
    if (day_start < from_start)
      return false;
  }
  if (valid_until) {
    const until_start = startOfDay(fromUnixTime(valid_until)).getTime();
    if (day_start > until_start)
      return false;
  }
  return true;
}
function getCronBlocksForDay(cron, schedule) {
  const parts = cron.trim().split(/\s+/);
  if (parts.length !== 5)
    return [];
  const [minute_part, hour_part] = parts;
  const duration = playPeriodMinutes(schedule);
  const blocks = [];
  for (let hours = 0; hours < 24; hours++) {
    if (!matchesCronPart(hours, hour_part))
      continue;
    for (let minutes = 0; minutes < 60; minutes++) {
      if (!matchesCronPart(minutes, minute_part))
        continue;
      const start_minutes = hours * 60 + minutes;
      blocks.push({
        start_minutes,
        duration_minutes: duration,
        all_day: duration >= MINUTES_PER_DAY,
        label: duration ? formatTimeRange(start_minutes, duration) : i18n("SIGNAGE_MANAGER.PLAY_THROUGH_ONCE")
      });
    }
  }
  return blocks;
}
function doesCronMatchDay(cron, day) {
  const parts = cron.trim().split(/\s+/);
  if (parts.length !== 5)
    return false;
  const [, , dom_part, month_part, dow_part] = parts;
  const month = day.getMonth() + 1;
  const day_of_month = day.getDate();
  const day_of_week = day.getDay();
  if (!matchesCronPart(month, month_part))
    return false;
  if (dom_part === "*" && dow_part === "*")
    return true;
  if (dom_part !== "*" && dow_part === "*") {
    return matchesCronPart(day_of_month, dom_part);
  }
  if (dom_part === "*" && dow_part !== "*") {
    return matchesCronPart(day_of_week, dow_part);
  }
  if (isCronMonthlyWeekday(dom_part, dow_part)) {
    return matchesCronPart(day_of_month, dom_part) && matchesCronPart(day_of_week, dow_part);
  }
  return matchesCronPart(day_of_month, dom_part) || matchesCronPart(day_of_week, dow_part);
}
function buildScheduleBlocks(assignments, days) {
  return assignments.flatMap((assignment, index) => generateScheduleBlocks(assignment, days, index));
}
function generateScheduleBlocks(assignment, days, palette_index) {
  const { playlist, source_label, source_type } = assignment;
  const colour = BLOCK_PALETTE[palette_index % BLOCK_PALETTE.length];
  const blocks = [];
  const { valid_from, valid_until } = playlist;
  for (let index = 0; index < days.length; index++) {
    const day = days[index];
    if (!isDayInRange(day, valid_from, valid_until))
      continue;
    for (const schedule of playlistSchedules(playlist)) {
      const { play_at } = schedule;
      const play_cron = schedule.play_cron?.trim() || "0 0 * * *";
      const play_period = playPeriodMinutes(schedule);
      if (play_at) {
        const at_date = parsePlayAt(play_at);
        if (!at_date || !isSameDay(day, at_date))
          continue;
        const start_minutes = at_date.getHours() * 60 + at_date.getMinutes();
        const duration_minutes = play_period;
        blocks.push({
          playlist,
          day_index: index,
          start_minutes,
          duration_minutes,
          all_day: false,
          bg_color: colour.bg,
          text_color: colour.text,
          label: formatTimeRange(start_minutes, duration_minutes),
          source_label,
          source_type
        });
        continue;
      }
      if (!doesCronMatchDay(play_cron, day))
        continue;
      const cron_blocks = getCronBlocksForDay(play_cron, schedule);
      for (const block of cron_blocks) {
        blocks.push(__spreadProps(__spreadValues({}, block), {
          playlist,
          day_index: index,
          bg_color: colour.bg,
          text_color: colour.text,
          source_label,
          source_type
        }));
      }
    }
  }
  return blocks;
}
function buildDisplayScheduleAssignments(display, zones, playlists) {
  const playlist_map = new Map(playlists.map((playlist) => [playlist.id, playlist]));
  const assignments = [];
  const seen_playlist_ids = /* @__PURE__ */ new Set();
  for (const playlist_id of display.playlists || []) {
    const playlist = playlist_map.get(playlist_id);
    if (!playlist || seen_playlist_ids.has(playlist.id))
      continue;
    seen_playlist_ids.add(playlist.id);
    assignments.push({
      playlist,
      source_type: "display",
      source_label: i18n("SIGNAGE_MANAGER.SOURCE_DISPLAY")
    });
  }
  const zone_playlist_sources = {};
  for (const zone of zones.filter((item) => display.zones?.includes(item.id))) {
    for (const playlist_id of zone.playlists || []) {
      if (!zone_playlist_sources[playlist_id]) {
        zone_playlist_sources[playlist_id] = [];
      }
      zone_playlist_sources[playlist_id].push(zone.display_name || zone.name || i18n("RESOURCE.ZONE"));
    }
  }
  for (const [playlist_id, labels] of Object.entries(zone_playlist_sources)) {
    const playlist = playlist_map.get(playlist_id);
    if (!playlist || seen_playlist_ids.has(playlist.id))
      continue;
    seen_playlist_ids.add(playlist.id);
    assignments.push({
      playlist,
      source_type: "zone",
      source_label: labels.length > 1 ? i18n("SIGNAGE_MANAGER.ZONE_COUNT_LABEL", {
        count: labels.length
      }, labels.length) : labels[0]
    });
  }
  return assignments.sort((left, right) => left.playlist.name.localeCompare(right.playlist.name));
}
function buildZoneScheduleAssignments(zone, playlists) {
  const playlist_map = new Map(playlists.map((playlist) => [playlist.id, playlist]));
  return (zone.playlists || []).map((playlist_id) => playlist_map.get(playlist_id)).filter((playlist) => !!playlist).sort((left, right) => left.name.localeCompare(right.name)).map((playlist) => ({
    playlist,
    source_type: "zone",
    source_label: zone.display_name || zone.name || i18n("RESOURCE.ZONE")
  }));
}

export {
  DAY_COUNT,
  MINUTES_PER_DAY,
  buildScheduleBlocks,
  buildDisplayScheduleAssignments,
  buildZoneScheduleAssignments
};
//# sourceMappingURL=chunk-XI2FRLVI.js.map

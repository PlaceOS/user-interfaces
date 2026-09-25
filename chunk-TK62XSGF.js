import {
  decodeEntityNames
} from "./chunk-XASXFKEM.js";
import {
  HydratedSignageTemplateMapping
} from "./chunk-QAMSNMBO.js";
import {
  SIGNAGE_MEDIA_PICKER_ACCEPT,
  getVideoContainer,
  isImageSourceFile,
  isSupportedImageFile,
  validateSignageMediaDimensions,
  validateSignageMediaFile
} from "./chunk-OZEEJTZM.js";
import {
  markSignageSharedGroupsChanged,
  openConfirmModal
} from "./chunk-TTI4PR6G.js";
import {
  loadAuthenticatedImage
} from "./chunk-W4PNQNWS.js";
import {
  createScheduleMaskFilter,
  fromUnixTime,
  playlistItemScheduleMap,
  playlistMediaIds,
  playlistMediaItems
} from "./chunk-KOTTAT56.js";
import {
  OrganisationService,
  SettingsService,
  UploadsService,
  userSignal
} from "./chunk-7X43NIYS.js";
import {
  $,
  $a,
  $l,
  Aa,
  Al,
  Bh,
  Bu,
  Cu,
  Dh,
  Eu,
  Fh,
  Gh,
  Gu,
  Hh,
  Injectable,
  Iu,
  Ja,
  Jh,
  Ju,
  Kh,
  Lh,
  Lu,
  MatDialog,
  Mu,
  Oh,
  Qu,
  Rs,
  Ru,
  Sa,
  Sl,
  Tu,
  Uu,
  V,
  Vh,
  Vu,
  Wh,
  Wu,
  Xt,
  Zh,
  Zu,
  _l,
  _r,
  addDays,
  addMinutes,
  ah,
  bl,
  computed,
  debounced,
  dh,
  effect,
  el,
  f,
  fh,
  fl,
  format,
  fr,
  gl,
  gr,
  i18n,
  il,
  inject,
  isSameDay,
  jh,
  ka,
  lh,
  linkedSignal,
  ll,
  nl,
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarn,
  ol,
  ph,
  pl,
  resource,
  rl,
  setClassMetadata,
  signal,
  sl,
  startOfDay,
  tl,
  u,
  untracked,
  v,
  va,
  wh,
  ws,
  xl,
  zh,
  ɵɵdefineInjectable
} from "./chunk-56VJTSNA.js";
import {
  __objRest,
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
function hasTakeoverSchedule(playlist) {
  return playlistSchedules(playlist).some((schedule) => !!schedule.play_takeover);
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
function isScheduleValidAt(schedule, date) {
  const time = date.getTime();
  return (!schedule.valid_from || time >= schedule.valid_from * 1e3) && (!schedule.valid_until || time <= schedule.valid_until * 1e3);
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
  const schedules = playlistSchedules(playlist).map((schedule) => ({
    schedule,
    allows: createScheduleMaskFilter(schedule)
  }));
  for (let index = 0; index < days.length; index++) {
    const day = days[index];
    if (!isDayInRange(day, valid_from, valid_until))
      continue;
    for (const { schedule, allows } of schedules) {
      const { play_at } = schedule;
      const play_cron = schedule.play_cron?.trim() || "0 0 * * *";
      const play_period = playPeriodMinutes(schedule);
      if (play_at) {
        const at_date = parsePlayAt(play_at);
        if (!at_date || !isSameDay(day, at_date) || !isScheduleValidAt(schedule, at_date) || !allows(at_date)) {
          continue;
        }
        const start_minutes = at_date.getHours() * 60 + at_date.getMinutes();
        const duration_minutes = play_period;
        blocks.push({
          playlist,
          day_index: index,
          start_minutes,
          duration_minutes,
          all_day: false,
          takeover: !!schedule.play_takeover,
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
        const starts_at = new Date(day);
        starts_at.setHours(0, block.start_minutes, 0, 0);
        if (!isScheduleValidAt(schedule, starts_at) || !allows(starts_at))
          continue;
        blocks.push(__spreadProps(__spreadValues({}, block), {
          playlist,
          day_index: index,
          takeover: !!schedule.play_takeover,
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

// apps/signage-manager/src/app/schedules/schedule-conflicts.util.ts
var CONFLICT_WINDOW_DAYS = 14;
function findTakeoverConflicts({ displays, zones, playlists, playlist_id, start = /* @__PURE__ */ new Date(), days = CONFLICT_WINDOW_DAYS }) {
  const first_day = startOfDay(start);
  const day_list = Array.from({ length: days }, (_, index) => addDays(first_day, index));
  const conflicts = [];
  for (const display of displays) {
    const assignments = buildDisplayScheduleAssignments(display, zones, playlists);
    if (playlist_id && !assignments.some(({ playlist }) => playlist.id === playlist_id)) {
      continue;
    }
    const blocks = buildScheduleBlocks(assignments, day_list).filter((block) => block.takeover).map((block) => {
      const block_start = block.day_index * MINUTES_PER_DAY + block.start_minutes;
      const length = Math.max(1, block.duration_minutes);
      return {
        playlist: block.playlist,
        start: block_start,
        end: block_start + length
      };
    }).sort((a, b) => a.start - b.start);
    const seen_pairs = /* @__PURE__ */ new Set();
    for (let i = 0; i < blocks.length; i++) {
      const first = blocks[i];
      for (let j = i + 1; j < blocks.length && blocks[j].start < first.end; j++) {
        const second = blocks[j];
        if (first.playlist.id === second.playlist.id)
          continue;
        if (playlist_id && first.playlist.id !== playlist_id && second.playlist.id !== playlist_id) {
          continue;
        }
        const pair = [first.playlist.id, second.playlist.id].sort().join("|");
        if (seen_pairs.has(pair))
          continue;
        seen_pairs.add(pair);
        conflicts.push({
          display,
          playlists: [first.playlist, second.playlist],
          starts_at: addMinutes(first_day, second.start),
          ends_at: addMinutes(first_day, Math.min(first.end, second.end))
        });
      }
    }
  }
  return conflicts;
}

// apps/signage-manager/src/app/displays/display-zones.util.ts
async function displayZoneIds(selected_zones, known_zones, load_zone) {
  const zones = new Map(known_zones.map((zone) => [zone.id, zone]));
  for (const zone of selected_zones)
    zones.set(zone.id, zone);
  const zone_ids = [];
  const added = /* @__PURE__ */ new Set();
  for (const selected_zone of selected_zones) {
    const path = [];
    const visited = /* @__PURE__ */ new Set();
    let zone = selected_zone;
    while (zone?.id && !visited.has(zone.id)) {
      path.unshift(zone.id);
      visited.add(zone.id);
      if (!zone.parent_id)
        break;
      let parent = zones.get(zone.parent_id) || null;
      if (!parent) {
        parent = await load_zone(zone.parent_id).catch(() => null);
        if (parent)
          zones.set(parent.id, parent);
      }
      if (!parent) {
        path.unshift(zone.parent_id);
        break;
      }
      zone = parent;
    }
    for (const zone_id of path) {
      if (added.has(zone_id))
        continue;
      added.add(zone_id);
      zone_ids.push(zone_id);
    }
  }
  return zone_ids;
}

// apps/signage-manager/src/app/media/media-view.util.ts
var MEDIA_SORTS = ["newest", "oldest", "name", "expiry"];
var MEDIA_TYPE_FILTERS = [
  "image",
  "video",
  "webpage",
  "plugin"
];
var MEDIA_EXPIRY_FILTERS = ["expiring", "expired"];
var DEFAULT_MEDIA_VIEW = {
  sort: "newest",
  type: null,
  expiry: null
};
var MEDIA_EXPIRING_DAYS = 7;
function mediaTypeGroup(item) {
  switch (item.media_type) {
    case "image":
    case "webpage":
    case "plugin":
      return item.media_type;
    default:
      return "video";
  }
}
function isMediaViewActive(options) {
  return options.sort !== DEFAULT_MEDIA_VIEW.sort || !!options.type || !!options.expiry;
}
function matchesExpiry(item, expiry, now) {
  if (!item.valid_until)
    return false;
  const valid_until = item.valid_until * 1e3;
  if (expiry === "expired")
    return valid_until < now;
  return valid_until >= now && valid_until <= now + MEDIA_EXPIRING_DAYS * 24 * 60 * 60 * 1e3;
}
function compareMedia(sort) {
  const newest = (a, b) => b.created_at - a.created_at;
  switch (sort) {
    case "oldest":
      return (a, b) => -newest(a, b);
    case "name":
      return (a, b) => a.name.localeCompare(b.name) || newest(a, b);
    case "expiry":
      return (a, b) => (a.valid_until || Infinity) - (b.valid_until || Infinity) || newest(a, b);
    default:
      return newest;
  }
}
function applyMediaView(items, options, now = Date.now()) {
  return items.filter((item) => (!options.type || mediaTypeGroup(item) === options.type) && (!options.expiry || matchesExpiry(item, options.expiry, now))).sort(compareMedia(options.sort));
}

// apps/signage-manager/src/app/signage-media-tags.util.ts
function sortTagNames(tags) {
  return [...tags].sort((a, b) => a.localeCompare(b));
}
async function listSignageMediaTagCounts(query_params = {}) {
  const params = Object.entries(query_params).filter((entry) => !!entry[1]);
  const query = new URLSearchParams(params).toString();
  try {
    const response = await f(`${u()}/signage/media/tag_counts${query ? `?${query}` : ""}`);
    const counts = {};
    for (const [tag, count] of Object.entries(response || {})) {
      counts[tag] = Number(count) || 0;
    }
    return { tags: sortTagNames(Object.keys(counts)), counts };
  } catch {
    const tags = await wh(query_params);
    return { tags: sortTagNames(tags), counts: {} };
  }
}

// apps/signage-manager/src/app/signage-features.ts
var SIGNAGE_FEATURES = [
  { id: "templates", label: i18n("SIGNAGE_MANAGER.FEATURE_TEMPLATES") },
  {
    id: "template-editing",
    label: i18n("SIGNAGE_MANAGER.FEATURE_TEMPLATE_EDITING")
  },
  {
    id: "ai-generation",
    label: i18n("SIGNAGE_MANAGER.FEATURE_AI_GENERATION")
  },
  { id: "ai-editing", label: i18n("SIGNAGE_MANAGER.FEATURE_AI_EDITING") },
  {
    id: "branding-editing",
    label: i18n("SIGNAGE_MANAGER.FEATURE_BRANDING_EDITING")
  }
];
var SIGNAGE_FEATURE_IDS = SIGNAGE_FEATURES.map(({ id }) => id);
function isRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function stringList(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : void 0;
}
function signageGroupFeatures(raw) {
  if (!isRecord(raw))
    return {};
  const source = isRecord(raw.signage) ? raw.signage : raw;
  const result = {};
  const features = stringList(source.features);
  const plugins = stringList(source.available_plugins);
  if (features)
    result.features = features;
  if (plugins)
    result.available_plugins = plugins;
  return result;
}
function effectiveFeatures(global, group) {
  const allowed = group.features;
  return allowed ? global.filter((id) => allowed.includes(id)) : [...global];
}

// apps/signage-manager/src/app/templates/template-layout.util.ts
var EDGE_BAR_HEIGHT_PC = 15;
var SIDEBAR_WIDTH_PC = 20;
var FLOATING_DEFAULT_X_PC = 0;
var FLOATING_DEFAULT_Y_PC = 0;
var LAYOUT_POSITIONS = [
  "top",
  "bottom",
  "left",
  "right",
  "floating"
];
var POSITION_ICONS = {
  top: "align_vertical_top",
  bottom: "align_vertical_bottom",
  left: "align_horizontal_left",
  right: "align_horizontal_right",
  floating: "picture_in_picture"
};
var POSITION_LABELS = {
  top: "SIGNAGE_MANAGER.TEMPLATE_POSITION_TOP",
  bottom: "SIGNAGE_MANAGER.TEMPLATE_POSITION_BOTTOM",
  left: "SIGNAGE_MANAGER.TEMPLATE_POSITION_LEFT",
  right: "SIGNAGE_MANAGER.TEMPLATE_POSITION_RIGHT",
  floating: "SIGNAGE_MANAGER.TEMPLATE_POSITION_FLOATING"
};
function layoutPositionIcon(position) {
  return POSITION_ICONS[position] || "crop_free";
}
function layoutPositionLabel(position) {
  return POSITION_LABELS[position] || position;
}
var clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
function layoutRatioToPercentage(value) {
  return value === void 0 ? null : clamp(value, 0, 1) * 100;
}
function layoutPercentageToRatio(value) {
  return value === null || !Number.isFinite(value) ? void 0 : clamp(value / 100, 0, 1);
}
function applyLayoutPositionDefaults(layout) {
  switch (layout.position) {
    case "top":
    case "bottom":
      return __spreadProps(__spreadValues({}, layout), {
        y_pos: layout.y_pos ?? layoutPercentageToRatio(EDGE_BAR_HEIGHT_PC)
      });
    case "left":
    case "right":
      return __spreadProps(__spreadValues({}, layout), {
        x_pos: layout.x_pos ?? layoutPercentageToRatio(SIDEBAR_WIDTH_PC)
      });
    case "floating":
      return __spreadProps(__spreadValues({}, layout), {
        x_pos: layout.x_pos ?? layoutPercentageToRatio(FLOATING_DEFAULT_X_PC),
        y_pos: layout.y_pos ?? layoutPercentageToRatio(FLOATING_DEFAULT_Y_PC)
      });
  }
}
function computeTemplateLayoutRects(layouts) {
  const rem = { left: 0, top: 0, width: 100, height: 100 };
  return layouts.map((layout) => {
    switch (layout.position) {
      case "top": {
        const height = Math.min(layoutRatioToPercentage(layout.y_pos) ?? EDGE_BAR_HEIGHT_PC, rem.height);
        const rect = __spreadProps(__spreadValues({}, rem), { height });
        rem.top += height;
        rem.height -= height;
        return rect;
      }
      case "bottom": {
        const height = Math.min(layoutRatioToPercentage(layout.y_pos) ?? EDGE_BAR_HEIGHT_PC, rem.height);
        const rect = __spreadProps(__spreadValues({}, rem), {
          top: rem.top + rem.height - height,
          height
        });
        rem.height -= height;
        return rect;
      }
      case "left": {
        const width = Math.min(layoutRatioToPercentage(layout.x_pos) ?? SIDEBAR_WIDTH_PC, rem.width);
        const rect = __spreadProps(__spreadValues({}, rem), { width });
        rem.left += width;
        rem.width -= width;
        return rect;
      }
      case "right": {
        const width = Math.min(layoutRatioToPercentage(layout.x_pos) ?? SIDEBAR_WIDTH_PC, rem.width);
        const rect = __spreadProps(__spreadValues({}, rem), {
          left: rem.left + rem.width - width,
          width
        });
        rem.width -= width;
        return rect;
      }
      case "floating":
      default: {
        const left = clamp(layoutRatioToPercentage(layout.x_pos) ?? FLOATING_DEFAULT_X_PC, 0, 100);
        const top = clamp(layoutRatioToPercentage(layout.y_pos) ?? FLOATING_DEFAULT_Y_PC, 0, 100);
        return { left, top, width: 100 - left, height: 100 - top };
      }
    }
  });
}

// apps/signage-manager/src/app/signage.service.ts
function dataURLtoFile(data_url, filename) {
  const [prefix, data] = data_url.split(",");
  const mime_type = prefix.split(":")[1].split(";")[0];
  const byte_string = atob(data);
  const array_buffer = new ArrayBuffer(byte_string.length);
  const uint8_array = new Uint8Array(array_buffer);
  for (let i = 0; i < byte_string.length; i++) {
    uint8_array[i] = byte_string.charCodeAt(i);
  }
  return new File([uint8_array], filename, { type: mime_type });
}
var MEDIA_RETRY_DELAYS = [500, 1500, 4500];
var VIDEO_THUMBNAIL_OFFSET = 0.1;
var VIDEO_THUMBNAIL_TIMEOUT = 15 * 1e3;
var SIGNAGE_SHARE_CONFIG = {
  media: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE",
    success: "SIGNAGE_MANAGER.SVC_MEDIA_SHARED",
    request: Bh
  },
  playlists: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE",
    success: "SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED",
    request: rl
  },
  templates: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE",
    success: "SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED",
    request: gl
  }
};
function isRetryableMediaError(error) {
  const status = error?.status;
  if (typeof status !== "number")
    return true;
  return status === 408 || status === 429 || status >= 500;
}
async function retryMediaRequest(request) {
  let last_error;
  for (let attempt = 0; ; attempt++) {
    try {
      return await request();
    } catch (error) {
      last_error = error;
      if (!isRetryableMediaError(error) || attempt >= MEDIA_RETRY_DELAYS.length) {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, MEDIA_RETRY_DELAYS[attempt]));
    }
  }
  throw last_error;
}
var PLAYLIST_META_SESSION_KEY = "PlaceOS.SIGNAGE:playlist-meta-cache:v1";
var EMPTY_SEARCH_RESULTS = {
  displays: [],
  playlists: [],
  templates: [],
  zones: [],
  media: []
};
var MAX_EXPIRED_MEDIA_CHECKS = 100;
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var SIGNAGE_GROUP_STORAGE_KEY = "PlaceOS.SIGNAGE:selected-group:v1";
var SIGNAGE_VIEW_MODE_STORAGE_KEY = "PlaceOS.SIGNAGE:media-view-mode:v1";
var SEARCH_FIELDS = [
  "id",
  "name",
  "display_name",
  "description",
  "tags"
].join(",");
var SIGNAGE_GROUP_FIELDS = [
  "id",
  "name",
  "description",
  "subsystems",
  "authority_id",
  "parent_id",
  "features",
  "children_count"
].join(",");
function loadPlaylistMetaSessionCache() {
  if (typeof sessionStorage === "undefined")
    return {};
  try {
    const stored_value = sessionStorage.getItem(PLAYLIST_META_SESSION_KEY);
    return stored_value ? JSON.parse(stored_value) : {};
  } catch {
    return {};
  }
}
function persistPlaylistMetaSessionCache(cache) {
  if (typeof sessionStorage === "undefined")
    return;
  try {
    sessionStorage.setItem(PLAYLIST_META_SESSION_KEY, JSON.stringify(cache));
  } catch {
  }
}
function loadSelectedGroupId() {
  if (typeof localStorage === "undefined")
    return "";
  try {
    return localStorage.getItem(SIGNAGE_GROUP_STORAGE_KEY) || "";
  } catch {
    return "";
  }
}
function loadMediaViewMode() {
  if (typeof localStorage === "undefined")
    return "grid";
  try {
    const stored = localStorage.getItem(SIGNAGE_VIEW_MODE_STORAGE_KEY);
    return stored === "list" || stored === "folder" ? stored : "grid";
  } catch {
    return "grid";
  }
}
function persistMediaViewMode(mode) {
  if (typeof localStorage === "undefined")
    return;
  try {
    localStorage.setItem(SIGNAGE_VIEW_MODE_STORAGE_KEY, mode);
  } catch {
  }
}
function persistSelectedGroupId(group_id) {
  if (typeof localStorage === "undefined")
    return;
  try {
    if (group_id) {
      localStorage.setItem(SIGNAGE_GROUP_STORAGE_KEY, group_id);
    } else {
      localStorage.removeItem(SIGNAGE_GROUP_STORAGE_KEY);
    }
  } catch {
  }
}
function isSameSignageTemplate(first, second) {
  return (first.live_template_id || first.id) === (second.live_template_id || second.id);
}
function groupHierarchy(selected, all_groups) {
  if (!selected)
    return [];
  const groups = new Map(all_groups.map((item) => [item.id, item]));
  const hierarchy = [];
  const seen = /* @__PURE__ */ new Set();
  let group = selected;
  while (group?.id && !seen.has(group.id)) {
    hierarchy.unshift(group);
    seen.add(group.id);
    group = group.parent_id ? groups.get(group.parent_id) : void 0;
  }
  return hierarchy;
}
function dialogClosed(ref) {
  return new Promise((resolve) => {
    const subscription = ref.afterClosed().subscribe((value) => {
      subscription.unsubscribe();
      resolve(value);
    });
  });
}
var SignageService = class _SignageService {
  async groupChildren(parent_id) {
    if (!this.can_manage_all_groups()) {
      return this._sortGroups(this.manageable_signage_groups().filter((group) => group.parent_id === parent_id));
    }
    return this._queryManageableGroups({
      parent_id,
      include_children_count: true
    });
  }
  async _queryManageableGroups(params = {}) {
    const { data } = await Tu(__spreadValues({
      limit: 200,
      fields: SIGNAGE_GROUP_FIELDS,
      subsystem: "signage"
    }, params));
    return this._sortGroups((data || []).filter((group) => group.subsystems?.includes("signage")));
  }
  _currentSignageGroups(groups_change) {
    if (this._current_groups_request?.key === groups_change) {
      return this._current_groups_request.promise;
    }
    const promise = Iu({ subsystem: "signage" }).catch((err) => {
      if (this._current_groups_request?.key === groups_change) {
        this._current_groups_request = null;
      }
      throw err;
    });
    this._current_groups_request = { key: groups_change, promise };
    return promise;
  }
  async _currentManageableGroups(groups_change) {
    const groups = await this._currentSignageGroups(groups_change);
    return groups.filter((item) => !!(item.permissions & 64)).map((item) => decodeEntityNames(item.group));
  }
  _sortGroups(groups) {
    return groups.map(decodeEntityNames).sort((a, b) => a.name.localeCompare(b.name));
  }
  hasFeature(feature) {
    return this.features().includes(feature);
  }
  static {
    this.PAGE_SIZE = 200;
  }
  loadMoreMedia() {
    if (this._media_loading() || !this._media_has_more())
      return;
    const next = this._media_next?.();
    if (!next) {
      this._media_has_more.set(false);
      return;
    }
    this._fetchMediaPage(next, this._media_token);
  }
  async _fetchMediaPage(query, token) {
    this._media_loading.set(true);
    try {
      const page = await query;
      if (token !== this._media_token)
        return;
      const items = (page.data || []).map(decodeEntityNames);
      this._media_items.update((list) => {
        const by_id = new Map(list.map((item) => [item.id, item]));
        for (const item of items)
          by_id.set(item.id, item);
        return [...by_id.values()].sort((a, b) => b.created_at - a.created_at);
      });
      this._media_next = page.next;
      this._media_total.set(page.total);
      this._media_has_more.set(items.length > 0 && this._media_items().length < page.total);
    } catch {
      if (token === this._media_token)
        this._media_has_more.set(false);
    } finally {
      if (token === this._media_token)
        this._media_loading.set(false);
    }
  }
  loadMorePlaylists() {
    if (this._playlists_loading() || !this._playlists_has_more())
      return;
    const next = this._playlists_next?.();
    if (!next) {
      this._playlists_has_more.set(false);
      return;
    }
    this._fetchPlaylistPage(next, this._playlists_token);
  }
  async _fetchPlaylistPage(query, token) {
    this._playlists_loading.set(true);
    try {
      const page = await query;
      if (token !== this._playlists_token)
        return;
      const items = (page.data || []).map(decodeEntityNames);
      this._playlist_items.update((list) => {
        const by_id = new Map(list.map((item) => [item.id, item]));
        for (const item of items)
          by_id.set(item.id, item);
        return [...by_id.values()].sort((a, b) => a.name.localeCompare(b.name));
      });
      this._playlist_cache.update((cache) => {
        const next = __spreadValues({}, cache);
        for (const item of items)
          next[item.id] = item;
        return next;
      });
      this._playlists_next = page.next;
      this._playlists_has_more.set(this._playlist_items().length < page.total);
    } catch {
      if (token === this._playlists_token)
        this._playlists_has_more.set(false);
    } finally {
      if (token === this._playlists_token)
        this._playlists_loading.set(false);
    }
  }
  loadMoreTemplates() {
    if (this._templates_loading() || !this._templates_has_more())
      return;
    const next = this._templates_next?.();
    if (!next) {
      this._templates_has_more.set(false);
      return;
    }
    this._fetchTemplatePage(next, this._templates_token);
  }
  async _fetchTemplatePage(query, token) {
    this._templates_loading.set(true);
    try {
      const page = await query;
      if (token !== this._templates_token)
        return;
      const items = (page.data || []).map(decodeEntityNames);
      this._template_items.update((list) => {
        const by_id = new Map(list.map((item) => [item.id, item]));
        for (const item of items)
          by_id.set(item.id, item);
        return [...by_id.values()].sort((a, b) => a.name.localeCompare(b.name));
      });
      this._templates_next = page.next;
      this._templates_has_more.set(this._template_items().length < page.total);
    } catch {
      if (token === this._templates_token)
        this._templates_has_more.set(false);
    } finally {
      if (token === this._templates_token)
        this._templates_loading.set(false);
    }
  }
  /**
   * Paged queries for the picker modals, which search on their own without
   * disturbing the lists behind them. Null when the user may not query.
   */
  queryDisplays(search = "") {
    if (!this._canQueryLists())
      return null;
    return $a(__spreadValues(__spreadProps(__spreadValues({}, this._orgZoneQueryParams({})), {
      limit: _SignageService.PAGE_SIZE,
      signage: true
    }), this._searchParam(search)));
  }
  queryPlaylists(search = "") {
    if (!this._canQueryLists())
      return null;
    return Wh(__spreadValues(__spreadValues({}, this._orgZoneQueryParams({ limit: _SignageService.PAGE_SIZE })), this._searchParam(search)));
  }
  queryMedia(search = "") {
    if (!this._canQueryLists())
      return null;
    return Oh(__spreadValues(__spreadValues({}, this._orgZoneQueryParams({ limit: _SignageService.PAGE_SIZE })), this._searchParam(search)));
  }
  async listApprovedTemplates() {
    if (!this._canQueryLists())
      return [];
    const result = await $({
      path: "signage/templates",
      query_params: this._groupQueryParams({
        approved: true,
        limit: 1e4
      }),
      fn: (data) => new gr(data)
    });
    return result.data;
  }
  async listTemplateMappings(query_params) {
    if (!this._canQueryLists())
      return [];
    const result = await $({
      path: "signage/template_mappings",
      query_params: __spreadProps(__spreadValues({}, query_params), { limit: 1e4 }),
      fn: (data) => new HydratedSignageTemplateMapping(data)
    });
    return result.data;
  }
  querySelectableZones(search, parent_id) {
    if (!this._canQueryLists() || !parent_id || !search.trim())
      return null;
    return ah({
      q: search.trim(),
      parent_id,
      limit: 2500,
      include_children_count: true
    });
  }
  /** Zones a managed group can be given access to, not just signage ones */
  queryGroupZones(search = "") {
    const group = this.managed_group();
    return ah(__spreadValues(__spreadValues({
      limit: _SignageService.PAGE_SIZE
    }, group?.authority_id ? { authority_id: group.authority_id } : {}), this._searchParam(search)));
  }
  /**
   * First matches of each signage type for a search, for the command
   * palette. A type is empty when its query fails or is not available.
   * @param search Text to search for
   * @param limit Most results to return for each type
   */
  async searchAll(search, limit = 5) {
    const term = search.trim();
    if (!term || !this._canQueryLists())
      return EMPTY_SEARCH_RESULTS;
    const params = __spreadValues(__spreadValues({}, this._orgZoneQueryParams({ limit })), this._searchParam(term));
    const group_params = this._groupQueryParams(__spreadValues({
      limit
    }, this._searchParam(term)));
    const settle = async (query) => {
      try {
        const data = (await query).data || [];
        return data.slice(0, limit).map(decodeEntityNames);
      } catch {
        return [];
      }
    };
    const [displays, playlists, templates, zones, media] = await Promise.all([
      settle($a(__spreadProps(__spreadValues({}, params), { signage: true }))),
      settle(Wh(params)),
      this.templates_enabled() ? settle(ll(group_params)) : Promise.resolve([]),
      settle(ah(__spreadProps(__spreadValues({}, group_params), { tags: "signage" }))),
      settle(Oh(params))
    ]);
    return { displays, playlists, templates, zones, media };
  }
  /**
   * Fetch every display, zone and playlist in the active group. The lists
   * on screen only hold the pages loaded so far, so checks that need the
   * full set use this instead.
   */
  async loadSignageInventory() {
    if (!this._canQueryLists()) {
      return { displays: [], zones: [], playlists: [] };
    }
    const limit = _SignageService.PAGE_SIZE;
    const group_id = this._api_group_id();
    const [displays, zones, playlists] = await Promise.all([
      this._queryAll($a(__spreadProps(__spreadValues({}, this._orgZoneQueryParams({})), {
        limit,
        signage: true
      }))),
      this._queryAll(ah(__spreadValues({
        limit,
        tags: "signage"
      }, group_id ? { group_id } : {}))),
      this._queryAll(Wh(this._orgZoneQueryParams({ limit })))
    ]);
    return { displays, zones, playlists };
  }
  /**
   * Fetch every page of a query.
   * @param max_pages Most pages to fetch, so a bad response cannot loop forever
   */
  async _queryAll(query, max_pages = 50) {
    const items = [];
    let page = await query;
    for (let count = 1; ; count++) {
      const data = page.data || [];
      items.push(...data);
      const next = data.length && count < max_pages ? page.next?.() : null;
      if (!next)
        break;
      page = await next;
    }
    return items.map(decodeEntityNames);
  }
  /**
   * Warn when a change would make two takeover playlists play at the same
   * time on a display, in the next few weeks.
   * @returns Whether to go ahead with the change
   */
  async _confirmTakeoverChange(change) {
    const known = change.playlist || this.playlists().find(({ id }) => id === change.playlist_id);
    if (known && !hasTakeoverSchedule(known))
      return true;
    let inventory;
    try {
      inventory = await this.loadSignageInventory();
    } catch {
      return true;
    }
    const playlist = change.playlist || inventory.playlists.find(({ id }) => id === change.playlist_id);
    if (!playlist || !hasTakeoverSchedule(playlist))
      return true;
    const withPlaylist = (item, target_id) => item.id === target_id && !item.playlists?.includes(playlist.id) ? __spreadProps(__spreadValues({}, item), {
      playlists: [...item.playlists || [], playlist.id]
    }) : item;
    const conflicts = findTakeoverConflicts({
      displays: inventory.displays.map((item) => withPlaylist(item, change.display_id)),
      zones: inventory.zones.map((item) => withPlaylist(item, change.zone_id)),
      playlists: [
        ...inventory.playlists.filter(({ id }) => id !== playlist.id),
        playlist
      ],
      playlist_id: playlist.id
    });
    if (!conflicts.length)
      return true;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_TITLE"),
      content: this._takeoverConflictContent(conflicts, playlist.id),
      confirm_text: i18n("SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_CONFIRM"),
      icon: { content: "warning" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    result.close();
    return true;
  }
  /** Find content that needs attention, for the report page */
  async loadContentReport(now = Date.now()) {
    const [{ displays, zones, playlists }, expired_media] = await Promise.all([
      this.loadSignageInventory(),
      this._expiredMediaInPlaylists(now)
    ]);
    const zone_playlists = new Map(zones.map((zone) => [zone.id, zone.playlists || []]));
    const assigned_ids = new Set([...displays, ...zones].flatMap((item) => [
      ...item.playlists || []
    ]));
    return {
      empty_displays: displays.filter((display) => !display.playlists?.length && !(display.zones || []).some((zone_id) => zone_playlists.get(zone_id)?.length)),
      unassigned_playlists: playlists.filter(({ id }) => !assigned_ids.has(id)),
      expired_playlists: playlists.filter((playlist) => assigned_ids.has(playlist.id) && !!playlist.valid_until && playlist.valid_until * 1e3 < now),
      expired_media,
      conflicts: findTakeoverConflicts({ displays, zones, playlists })
    };
  }
  /** Expired media that is still in a playlist, read from the media show route */
  async _expiredMediaInPlaylists(now) {
    if (!this._canQueryLists())
      return [];
    const media = await this._queryAll(Oh(this._orgZoneQueryParams({ limit: _SignageService.PAGE_SIZE })));
    const expired = media.filter((item) => !!item.valid_until && item.valid_until * 1e3 < now).slice(0, MAX_EXPIRED_MEDIA_CHECKS);
    const query_params = this._groupQueryParams({});
    const usage = await Promise.all(expired.map(async (item) => {
      try {
        const detail = await zh(item.id, query_params);
        return { media: item, playlists: detail.playlists || [] };
      } catch {
        return { media: item, playlists: [] };
      }
    }));
    return usage.filter(({ playlists }) => playlists.length);
  }
  _takeoverConflictContent(conflicts, playlist_id) {
    const lines = conflicts.slice(0, 3).map((conflict) => {
      const other = conflict.playlists.find(({ id }) => id !== playlist_id) || conflict.playlists[1];
      return i18n("SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_LINE", {
        display: escapeHtml(conflict.display.display_name || conflict.display.name || ""),
        playlist: escapeHtml(other.name),
        time: format(conflict.starts_at, "EEE d MMM, HH:mm")
      });
    });
    const hidden_count = conflicts.length - lines.length;
    if (hidden_count > 0)
      lines.push(`+${hidden_count}`);
    return [
      i18n("SIGNAGE_MANAGER.SVC_TAKEOVER_CONFLICT_CONTENT", { count: conflicts.length, days: CONFLICT_WINDOW_DAYS }, conflicts.length),
      ...lines
    ].join("<br>");
  }
  _canQueryLists() {
    return this._org.initialised() && this._can_query_group_data();
  }
  _searchParam(search) {
    const term = search.trim();
    return term ? { q: term, fields: SEARCH_FIELDS } : {};
  }
  loadMoreDisplays() {
    if (this._displays_loading() || !this._displays_has_more())
      return;
    const next = this._displays_next?.();
    if (!next) {
      this._displays_has_more.set(false);
      return;
    }
    this._fetchDisplayPage(next, this._displays_token);
  }
  async _fetchDisplayPage(query, token) {
    this._displays_loading.set(true);
    try {
      const page = await query;
      if (token !== this._displays_token)
        return;
      const items = (page.data || []).filter((item) => item.signage).map(decodeEntityNames);
      this._display_items.update((list) => [...list, ...items]);
      this._display_cache.update((cache) => {
        const next = __spreadValues({}, cache);
        for (const item of items)
          next[item.id] = item;
        return next;
      });
      this._displays_next = page.next;
      this._displays_has_more.set(this._display_items().length < page.total);
    } catch {
      if (token === this._displays_token)
        this._displays_has_more.set(false);
    } finally {
      if (token === this._displays_token)
        this._displays_loading.set(false);
    }
  }
  async zoneChildren(parent_id) {
    const { data } = await ah({
      parent_id,
      limit: 2500,
      include_children_count: true
    });
    return (data || []).map(decodeEntityNames);
  }
  _pluginResource(plugin_type) {
    return resource({
      params: () => ({
        initialised: this._org.initialised(),
        change: this._change()
      }),
      loader: async ({ params }) => {
        if (!params.initialised)
          return [];
        try {
          const result = await ol(this._orgZoneQueryParams({
            limit: 500,
            plugin_type
          }));
          return (result.data || []).filter((plugin) => plugin.enabled).map(decodeEntityNames).sort((a, b) => a.name.localeCompare(b.name));
        } catch {
          return [];
        }
      }
    });
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._uploads = inject(UploadsService);
    this._dialog = inject(MatDialog);
    this._change = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._groups_change = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_groups_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display_overrides = signal(
      {},
      ...ngDevMode ? [{ debugName: "_display_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._zone_overrides = signal(
      {},
      ...ngDevMode ? [{ debugName: "_zone_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_upload_accept = SIGNAGE_MEDIA_PICKER_ACCEPT;
    this.show_group_selector = this._settings.signal("show_group_selector", true);
    this.show_media_group_tabs = this._settings.signal("show_media_group_tabs", true);
    this.global_features = this._settings.signal("features", SIGNAGE_FEATURE_IDS);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_view_mode = signal(
      loadMediaViewMode(),
      ...ngDevMode ? [{ debugName: "media_view_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.managed_group_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "managed_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._managed_group_id_debounced = debounced(this.managed_group_id, 300);
    this.managed_group_tab = signal(
      "users",
      ...ngDevMode ? [{ debugName: "managed_group_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._current_user = userSignal();
    this._active_user = computed(
      () => {
        const user = this._current_user();
        return !!user?.email && user.email !== "<empty>@dev.place.tech" ? user : null;
      },
      ...ngDevMode ? [{ debugName: "_active_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_groups_loaded = computed(
      () => {
        if (!this._active_user()?.email)
          return false;
        const status = this._signage_groups.status();
        return status === "resolved" || status === "local" || status === "error";
      },
      ...ngDevMode ? [{ debugName: "signage_groups_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_group_id = signal(
      loadSelectedGroupId(),
      ...ngDevMode ? [{ debugName: "selected_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_group_tree_expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "signage_group_tree_expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._signage_groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_signage_groups" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        user_email: this._active_user()?.email || "",
        groups_change: this._groups_change(),
        sys_admin: this.is_sys_admin()
      }),
      loader: async ({ params }) => {
        if (!params.user_email)
          return [];
        try {
          const groups = params.sys_admin ? (await this._queryManageableGroups()).map((group) => ({
            group,
            permissions: 64
          })) : await this._currentSignageGroups(params.groups_change);
          this.signage_groups_failed.set(false);
          return groups.map(decodeEntityNames).sort((a, b) => a.group.name.localeCompare(b.group.name));
        } catch {
          this.signage_groups_failed.set(true);
          return [];
        }
      }
    }));
    this.signage_groups_failed = signal(
      false,
      ...ngDevMode ? [{ debugName: "signage_groups_failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_groups = computed(
      () => this._signage_groups.value() || [],
      ...ngDevMode ? [{ debugName: "signage_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_group = computed(
      () => {
        const group_id = this.selected_group_id();
        return this.signage_groups().find((item) => item.group.id === group_id);
      },
      ...ngDevMode ? [{ debugName: "selected_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_group_hierarchy = computed(
      () => groupHierarchy(this.selected_group()?.group, this.signage_groups().map((item) => item.group)),
      ...ngDevMode ? [{ debugName: "selected_group_hierarchy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_sys_admin = computed(
      () => {
        const user = this._current_user();
        return !!user.sys_admin || (user.groups || []).includes("placeos_admin");
      },
      ...ngDevMode ? [{ debugName: "is_sys_admin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_support = computed(
      () => {
        const user = this._current_user();
        return !!user.support || (user.groups || []).includes("placeos_support");
      },
      ...ngDevMode ? [{ debugName: "is_support" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_all_groups = computed(
      () => this.is_sys_admin() || this.is_support(),
      ...ngDevMode ? [{ debugName: "can_manage_all_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._manageable_signage_groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_manageable_signage_groups" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        user_email: this._active_user()?.email || "",
        groups_change: this._groups_change(),
        can_manage_all: this.can_manage_all_groups()
      }),
      loader: async ({ params }) => {
        if (!params.user_email)
          return [];
        try {
          const groups = params.can_manage_all ? await this._queryManageableGroups() : await this._currentManageableGroups(params.groups_change);
          return this._sortGroups(groups);
        } catch {
          return [];
        }
      }
    }));
    this.manageable_signage_groups = computed(
      () => this._manageable_signage_groups.value() || [],
      ...ngDevMode ? [{ debugName: "manageable_signage_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._root_manageable_signage_groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_root_manageable_signage_groups" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        user_email: this._active_user()?.email || "",
        groups_change: this._groups_change(),
        can_manage_all: this.can_manage_all_groups()
      }),
      loader: async ({ params }) => {
        if (!params.user_email)
          return [];
        try {
          if (params.can_manage_all) {
            return this._queryManageableGroups({
              parent_id: "root",
              include_children_count: true
            });
          }
          const groups = await this._currentManageableGroups(params.groups_change);
          const group_ids = new Set(groups.map((group) => group.id));
          return this._sortGroups(groups.filter((group) => !group.parent_id || !group_ids.has(group.parent_id)));
        } catch {
          return [];
        }
      }
    }));
    this.root_manageable_signage_groups = computed(
      () => this._root_manageable_signage_groups.value() || [],
      ...ngDevMode ? [{ debugName: "root_manageable_signage_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.managed_group = computed(
      () => {
        const group_id = this.managed_group_id();
        return this.manageable_signage_groups().find((group) => group.id === group_id);
      },
      ...ngDevMode ? [{ debugName: "managed_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._current_groups_request = null;
    this._managed_group_users = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_managed_group_users" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        group_id: this._managed_group_id_debounced.value(),
        groups_change: this._groups_change()
      }),
      loader: async ({ params }) => {
        if (!params.group_id)
          return [];
        try {
          const { data } = await Lu({
            group_id: params.group_id,
            limit: 1e3
          });
          return data.map(decodeEntityNames).sort((a, b) => (a.user?.name || a.user_id).localeCompare(b.user?.name || b.user_id));
        } catch {
          return [];
        }
      }
    }));
    this.managed_group_users = computed(
      () => this._managed_group_users.value() || [],
      ...ngDevMode ? [{ debugName: "managed_group_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._managed_group_zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_managed_group_zones" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        group_id: this._managed_group_id_debounced.value(),
        groups_change: this._groups_change()
      }),
      loader: async ({ params }) => {
        if (!params.group_id)
          return [];
        try {
          const { data } = await Qu({
            group_id: params.group_id,
            limit: 200
          });
          return data.map(decodeEntityNames).sort((a, b) => (a.zone?.name || a.zone_id).localeCompare(b.zone?.name || b.zone_id));
        } catch {
          return [];
        }
      }
    }));
    this.managed_group_zones = computed(
      () => this._managed_group_zones.value() || [],
      ...ngDevMode ? [{ debugName: "managed_group_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._api_group_id = computed(
      () => this.selected_group()?.group.id || "",
      ...ngDevMode ? [{ debugName: "_api_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._api_group_id_debounced = debounced(this._api_group_id, 300);
    this.can_read = computed(
      () => this._hasGroupPermission(
        1
        /* SignageGroupPermission.Read */
      ),
      ...ngDevMode ? [{ debugName: "can_read" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_create = computed(
      () => this._hasGroupPermission(
        2
        /* SignageGroupPermission.Create */
      ),
      ...ngDevMode ? [{ debugName: "can_create" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = computed(
      () => this._hasGroupPermission(
        4
        /* SignageGroupPermission.Update */
      ),
      ...ngDevMode ? [{ debugName: "can_update" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete = computed(
      () => this._hasGroupPermission(
        8
        /* SignageGroupPermission.Delete */
      ),
      ...ngDevMode ? [{ debugName: "can_delete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update_media_tags = computed(
      () => this._api_group_id() ? this.can_update() : this.can_manage_all_groups(),
      ...ngDevMode ? [{ debugName: "can_update_media_tags" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete_tagged_media = computed(
      () => this._api_group_id() ? this.can_delete() : this.can_manage_all_groups(),
      ...ngDevMode ? [{ debugName: "can_delete_tagged_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete_displays = this.is_sys_admin;
    this.can_approve = computed(
      () => this._hasGroupPermission(
        32
        /* SignageGroupPermission.Approve */
      ),
      ...ngDevMode ? [{ debugName: "can_approve" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_share = computed(
      () => this._hasGroupPermission(
        128
        /* SignageGroupPermission.Share */
      ),
      ...ngDevMode ? [{ debugName: "can_share" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_admin = computed(
      () => this._hasGroupPermission(
        64
        /* SignageGroupPermission.Manage */
      ),
      ...ngDevMode ? [{ debugName: "is_admin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_zones = this.is_admin;
    this._group_features = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_group_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        group_id: this._api_group_id_debounced.value(),
        groups_change: this._groups_change()
      }),
      loader: async ({ params }) => {
        return this.loadGroupFeatures(params.group_id).catch(() => ({}));
      }
    }));
    this._selected_group_features = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_selected_group_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: () => this._group_features.value(),
      computation: (value, previous) => value ?? previous?.value ?? {}
    }));
    this.group_features = this._selected_group_features.asReadonly();
    this.features = computed(
      () => effectiveFeatures(this.global_features() || [], this.group_features()),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates_enabled = computed(
      () => this.hasFeature("templates"),
      ...ngDevMode ? [{ debugName: "templates_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit_templates = computed(
      () => this.hasFeature("template-editing"),
      ...ngDevMode ? [{ debugName: "can_edit_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_create_templates = computed(
      () => this.can_create() && this.can_edit_templates(),
      ...ngDevMode ? [{ debugName: "can_create_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update_templates = computed(
      () => this.can_update() && this.can_edit_templates(),
      ...ngDevMode ? [{ debugName: "can_update_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete_templates = computed(
      () => this.can_delete() && this.can_edit_templates(),
      ...ngDevMode ? [{ debugName: "can_delete_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._can_query_group_data = computed(
      () => {
        const group_id = this._api_group_id();
        return this.can_manage_all_groups() || !!group_id;
      },
      ...ngDevMode ? [{ debugName: "_can_query_group_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_search_debounced = debounced(this.search_term, 400);
    this._media_items = signal(
      [],
      ...ngDevMode ? [{ debugName: "_media_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_total = signal(
      0,
      ...ngDevMode ? [{ debugName: "_media_total" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_media_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_has_more = signal(
      false,
      ...ngDevMode ? [{ debugName: "_media_has_more" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_next = null;
    this._media_token = 0;
    this.media_view = signal(
      DEFAULT_MEDIA_VIEW,
      ...ngDevMode ? [{ debugName: "media_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_view_active = computed(
      () => isMediaViewActive(this.media_view()),
      ...ngDevMode ? [{ debugName: "media_view_active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media = computed(
      () => applyMediaView(this._media_items(), this.media_view()),
      ...ngDevMode ? [{ debugName: "media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_loading = this._media_loading.asReadonly();
    this.media_has_more = this._media_has_more.asReadonly();
    this.media_total = this._media_total.asReadonly();
    this._reload_media = effect(
      () => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._media_search_debounced.value().trim();
        this._change();
        untracked(() => {
          const token = ++this._media_token;
          this._media_items.set([]);
          this._media_total.set(0);
          this._media_next = null;
          this._media_has_more.set(false);
          if (!initialised || !can_query)
            return;
          this._fetchMediaPage(Oh(this._orgZoneQueryParams(__spreadValues({
            limit: _SignageService.PAGE_SIZE
          }, this._searchParam(search)), group_id)), token);
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_all_media = effect(
      () => {
        if (!this.media_view_active())
          return;
        if (!this._media_has_more() || this._media_loading())
          return;
        untracked(() => this.loadMoreMedia());
      },
      ...ngDevMode ? [{ debugName: "_load_all_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_tags = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_media_tags" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        initialised: this._org.initialised(),
        can_query: this._can_query_group_data(),
        group_id: this._api_group_id_debounced.value(),
        change: this._change()
      }),
      loader: async ({ params }) => {
        const empty = { tags: [], counts: {} };
        if (!params.initialised || !params.can_query)
          return empty;
        try {
          return await listSignageMediaTagCounts(this._orgZoneQueryParams({}, params.group_id));
        } catch {
          return empty;
        }
      }
    }));
    this.media_tags = computed(
      () => this._media_tags.value()?.tags || [],
      ...ngDevMode ? [{ debugName: "media_tags" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_tag_counts = computed(
      () => this._media_tags.value()?.counts || {},
      ...ngDevMode ? [{ debugName: "media_tag_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "playlist_search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_search_debounced = debounced(this.playlist_search_term, 400);
    this._playlist_items = signal(
      [],
      ...ngDevMode ? [{ debugName: "_playlist_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_cache = signal(
      {},
      ...ngDevMode ? [{ debugName: "_playlist_cache" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_cache_group = null;
    this._playlist_cache_change = null;
    this._playlists_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_playlists_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlists_has_more = signal(
      false,
      ...ngDevMode ? [{ debugName: "_playlists_has_more" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlists_next = null;
    this._playlists_token = 0;
    this.playlists = computed(
      () => Object.values(this._playlist_cache()).sort((a, b) => a.name.localeCompare(b.name)),
      ...ngDevMode ? [{ debugName: "playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlists_loading = this._playlists_loading.asReadonly();
    this.playlists_has_more = this._playlists_has_more.asReadonly();
    this._reload_playlists = effect(
      () => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._playlist_search_debounced.value().trim();
        const change = this._change();
        untracked(() => {
          const token = ++this._playlists_token;
          this._playlist_items.set([]);
          this._playlists_next = null;
          this._playlists_has_more.set(false);
          if (group_id !== this._playlist_cache_group || change !== this._playlist_cache_change) {
            this._playlist_cache_group = group_id;
            this._playlist_cache_change = change;
            this._playlist_cache.set({});
          }
          if (!initialised || !can_query)
            return;
          this._fetchPlaylistPage(Wh(this._orgZoneQueryParams(__spreadValues({
            limit: _SignageService.PAGE_SIZE
          }, this._searchParam(search)), group_id)), token);
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "template_search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._template_search_debounced = debounced(this.template_search_term, 400);
    this._template_items = signal(
      [],
      ...ngDevMode ? [{ debugName: "_template_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._templates_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_templates_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._templates_has_more = signal(
      false,
      ...ngDevMode ? [{ debugName: "_templates_has_more" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._templates_next = null;
    this._templates_token = 0;
    this.templates = this._template_items.asReadonly();
    this.templates_loading = this._templates_loading.asReadonly();
    this.templates_has_more = this._templates_has_more.asReadonly();
    this._reload_templates = effect(
      () => {
        const enabled = this.templates_enabled();
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._template_search_debounced.value().trim();
        this._change();
        untracked(() => {
          const token = ++this._templates_token;
          this._template_items.set([]);
          this._templates_next = null;
          this._templates_has_more.set(false);
          if (!enabled || !initialised || !can_query)
            return;
          this._fetchTemplatePage(ll(this._groupQueryParams(__spreadValues({
            limit: _SignageService.PAGE_SIZE
          }, this._searchParam(search)), group_id)), token);
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "display_search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display_search_debounced = debounced(this.display_search_term, 400);
    this._display_items = signal(
      [],
      ...ngDevMode ? [{ debugName: "_display_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display_cache = signal(
      {},
      ...ngDevMode ? [{ debugName: "_display_cache" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display_cache_group = null;
    this._displays_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_displays_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._displays_has_more = signal(
      false,
      ...ngDevMode ? [{ debugName: "_displays_has_more" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._displays_next = null;
    this._displays_token = 0;
    this.displays = computed(
      () => this._mergeItems(Object.values(this._display_cache()), this._display_overrides()),
      ...ngDevMode ? [{ debugName: "displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displays_loading = this._displays_loading.asReadonly();
    this.displays_has_more = this._displays_has_more.asReadonly();
    this._reload_displays = effect(
      () => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        const search = this._display_search_debounced.value().trim();
        this._change();
        untracked(() => {
          const token = ++this._displays_token;
          this._display_items.set([]);
          this._displays_next = null;
          this._displays_has_more.set(false);
          if (group_id !== this._display_cache_group) {
            this._display_cache_group = group_id;
            this._display_cache.set({});
          }
          if (!initialised || !can_query)
            return;
          this._fetchDisplayPage($a(__spreadValues(__spreadProps(__spreadValues({}, this._orgZoneQueryParams({}, group_id)), {
            limit: _SignageService.PAGE_SIZE,
            signage: true
          }), this._searchParam(search))), token);
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_mappings_revision = signal(
      0,
      ...ngDevMode ? [{ debugName: "template_mappings_revision" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._zone_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zone_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        initialised: this._org.initialised(),
        change: this._change(),
        group_id: this._api_group_id_debounced.value(),
        can_query: this._can_query_group_data()
      }),
      loader: async ({ params }) => {
        if (!params.initialised || !params.can_query)
          return [];
        try {
          const result = await ah(__spreadValues({
            limit: 250,
            tags: "signage"
          }, params.group_id ? { group_id: params.group_id } : {}));
          return (result.data || []).map(decodeEntityNames);
        } catch {
          return [];
        }
      }
    }));
    this.zones = computed(
      () => this._mergeItems(this._zone_list.value() || [], this._zone_overrides()),
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._all_zone_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_all_zone_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        initialised: this._org.initialised(),
        change: this._change(),
        group_id: this._api_group_id_debounced.value(),
        can_query: this._can_query_group_data()
      }),
      loader: async ({ params }) => {
        if (!params.initialised || !params.can_query)
          return [];
        try {
          const result = await ah(this._groupQueryParams({ limit: 500, include_children_count: true }, params.group_id));
          return (result.data || []).map(decodeEntityNames);
        } catch {
          return [];
        }
      }
    }));
    this.all_zones_loading = this._all_zone_list.isLoading;
    this.all_zones = computed(
      () => this._mergeItems(this._all_zone_list.value() || [], this._zone_overrides()),
      ...ngDevMode ? [{ debugName: "all_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._root_zone_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_root_zone_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        initialised: this._org.initialised(),
        change: this._change(),
        group_id: this._api_group_id_debounced.value(),
        can_query: this._can_query_group_data()
      }),
      loader: async ({ params }) => {
        if (!params.initialised || !params.can_query)
          return [];
        try {
          const result = await ah(__spreadValues({
            limit: 500,
            include_children_count: true
          }, params.group_id ? { group_id: params.group_id } : { parent_id: "root" }));
          const zones = (result.data || []).map(decodeEntityNames);
          const org_zone_id = this._org.organisation?.id;
          return org_zone_id && !params.group_id ? zones.filter((zone) => zone.id === org_zone_id) : zones;
        } catch {
          return [];
        }
      }
    }));
    this.root_zones = computed(
      () => {
        const roots = this._root_zone_list.value() || [];
        const root_ids = new Set(roots.map(({ id }) => id));
        return this._mergeItems(roots, this._zone_overrides()).filter(({ id }) => root_ids.has(id));
      },
      ...ngDevMode ? [{ debugName: "root_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._plugins = this._pluginResource("plugin");
    this._widgets = this._pluginResource("widget");
    this.all_plugins = computed(
      () => this._plugins.value() || [],
      ...ngDevMode ? [{ debugName: "all_plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plugins = computed(
      () => {
        const allowed = this.group_features().available_plugins;
        const plugins = this.all_plugins();
        return allowed ? plugins.filter((plugin) => allowed.includes(plugin.id)) : plugins;
      },
      ...ngDevMode ? [{ debugName: "plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.widgets = computed(
      () => this._widgets.value() || [],
      ...ngDevMode ? [{ debugName: "widgets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template_requires_approval = computed(
      () => {
        const template = this.selected_template();
        return !!template?.id && !template.approved;
      },
      ...ngDevMode ? [{ debugName: "selected_template_requires_approval" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_approval_request_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "template_approval_request_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_template_layout_index = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_template_layout_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_layout_draft = linkedSignal(
      () => structuredClone(this.selected_template()?.layouts ?? []),
      ...ngDevMode ? [{ debugName: "template_layout_draft" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template_layout_dirty = computed(
      () => JSON.stringify(this.template_layout_draft()) !== JSON.stringify(this.selected_template()?.layouts ?? []),
      ...ngDevMode ? [{ debugName: "template_layout_dirty" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selected_playlist_debounced = debounced(this.selected_playlist, 300);
    this.selected_playlist_item = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_playlist_item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist_item_index = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_playlist_item_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "zone_search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_tree_expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "zone_tree_expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_tree_children_cache = signal(
      {},
      ...ngDevMode ? [{ debugName: "zone_tree_children_cache" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._zone_search_debounced = debounced(this.zone_search_term, 400);
    this._zone_search_results = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zone_search_results" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        initialised: this._org.initialised(),
        can_query: this._can_query_group_data(),
        parent_id: this.selected_zone()?.id || "",
        search: this._zone_search_debounced.value().trim()
      }),
      loader: async ({ params }) => {
        if (!params.initialised || !params.can_query || !params.parent_id || !params.search) {
          return [];
        }
        try {
          const result = await ah({
            q: params.search,
            parent_id: params.parent_id,
            limit: 2500,
            include_children_count: true
          });
          return (result.data || []).map(decodeEntityNames);
        } catch {
          return [];
        }
      }
    }));
    this.selected_display = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_display" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_meta_state = signal(
      loadPlaylistMetaSessionCache(),
      ...ngDevMode ? [{ debugName: "_playlist_meta_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_meta_loading = signal(
      {},
      ...ngDevMode ? [{ debugName: "_playlist_meta_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_meta_queue = {};
    this._playlist_meta_processing = false;
    this.filtered_playlists = computed(
      () => {
        return this._playlist_items();
      },
      ...ngDevMode ? [{ debugName: "filtered_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist_requires_approval = computed(
      () => {
        const playlist = this.selected_playlist();
        if (!playlist?.id)
          return false;
        const approvals = this.playlist_approval_status();
        return playlist.id in approvals && !approvals[playlist.id];
      },
      ...ngDevMode ? [{ debugName: "selected_playlist_requires_approval" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_approval_status = computed(
      () => {
        const result = {};
        for (const [playlist_id, data] of Object.entries(this._playlist_meta_state())) {
          if (typeof data.approved === "boolean") {
            result[playlist_id] = data.approved;
          }
        }
        return result;
      },
      ...ngDevMode ? [{ debugName: "playlist_approval_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_approval_requested_status = computed(
      () => {
        const result = {};
        for (const [playlist_id, data] of Object.entries(this._playlist_meta_state())) {
          if (typeof data.approval_requested === "boolean") {
            result[playlist_id] = data.approval_requested;
          }
        }
        return result;
      },
      ...ngDevMode ? [{ debugName: "playlist_approval_requested_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_approval_request_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "playlist_approval_request_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_thumbnail_media = computed(
      () => {
        const result = {};
        for (const [playlist_id, data] of Object.entries(this._playlist_meta_state())) {
          result[playlist_id] = (data.media_ids || []).map((id) => Gh(id));
        }
        return result;
      },
      ...ngDevMode ? [{ debugName: "playlist_thumbnail_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_zones = computed(
      () => {
        if (!this.selected_zone()?.id || !this.zone_search_term().trim()) {
          return this.all_zones();
        }
        const overrides = this._zone_overrides();
        return (this._zone_search_results.value() || []).map((zone) => overrides[zone.id] || zone);
      },
      ...ngDevMode ? [{ debugName: "filtered_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_displays = computed(
      () => {
        const overrides = this._display_overrides();
        return this._display_items().map((display) => overrides[display.id] || display).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name));
      },
      ...ngDevMode ? [{ debugName: "filtered_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_change = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_playlist_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_media_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "playlist_media_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_media_items = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_playlist_media_items" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        playlist: this._selected_playlist_debounced.value(),
        playlist_change: this._playlist_change()
      }),
      loader: async ({ params }) => {
        const playlist = params.playlist;
        if (!playlist?.id) {
          this.playlist_media_loading.set(false);
          return null;
        }
        this.playlist_media_loading.set(true);
        try {
          const result = await Vh(playlist.id);
          this._setPlaylistMediaState(playlist.id, result.items || [], result.approved, result.schedules);
          return result;
        } catch {
          return null;
        } finally {
          this.playlist_media_loading.set(false);
        }
      }
    }));
    this.playlist_media_items = computed(
      () => playlistMediaItems(this._playlist_media_items.value() || {}),
      ...ngDevMode ? [{ debugName: "playlist_media_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_item_schedules = computed(
      () => playlistItemScheduleMap(this._playlist_media_items.value() || {}),
      ...ngDevMode ? [{ debugName: "playlist_item_schedules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_item_schedule_list = computed(
      () => this._playlist_media_items.value()?.schedules || [],
      ...ngDevMode ? [{ debugName: "playlist_item_schedule_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._ai_modal_ref = null;
    effect(() => {
      if (!this.signage_groups_loaded())
        return;
      const groups = this.signage_groups();
      const selected_group_id = this.selected_group_id();
      if (!groups.length) {
        this.selected_group_id.set("");
        return;
      }
      if (groups.some((item) => item.group.id === selected_group_id)) {
        return;
      }
      this.selected_group_id.set(this.can_manage_all_groups() ? "" : groups[0].group.id);
    });
    effect(() => {
      const groups = this.manageable_signage_groups();
      const group_id = this.managed_group_id();
      if (!groups.length) {
        this.managed_group_id.set("");
      } else if (!group_id || !groups.some((group) => group.id === group_id)) {
        this.managed_group_id.set(groups[0].id);
      }
    });
    effect(() => persistSelectedGroupId(this.selected_group_id()));
    effect(() => persistMediaViewMode(this.media_view_mode()));
  }
  async addPlaylist() {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS")))
      return;
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-MI5J7FL6.js");
    const ref = this._dialog.open(PlaylistEditModalComponent, {
      data: {
        playlist: new _r({}),
        onAdd: (data) => this._addSignagePlaylist(data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this.changed();
    }
  }
  queuePlaylistMeta(playlists) {
    const list = Array.isArray(playlists) ? playlists : [playlists];
    for (const playlist of list) {
      if (!playlist?.id || !this._needsPlaylistMetaRefresh(playlist)) {
        continue;
      }
      this._playlist_meta_queue[playlist.id] = playlist;
    }
    this._processPlaylistMetaQueue();
  }
  async editPlaylist(playlist) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-MI5J7FL6.js");
    const ref = this._dialog.open(PlaylistEditModalComponent, {
      data: {
        playlist,
        group_id: this._api_group_id(),
        onEdit: (id, data) => Kh(id, data),
        beforeSave: (data) => this._confirmTakeoverChange({
          playlist_id: playlist.id,
          playlist: new _r(__spreadValues(__spreadValues({}, playlist), data))
        })
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      if (this.selected_playlist()?.id === playlist.id) {
        this.selected_playlist.set(result);
      }
      this.changed();
    }
  }
  async removePlaylist(playlist) {
    if (!playlist?.id)
      return;
    if (!this._requirePermission(this.can_delete(), i18n("SIGNAGE_MANAGER.SVC_NO_DELETE_PLAYLISTS")))
      return;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: playlist.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await Jh(playlist.id);
    if (this.selected_playlist()?.id === playlist.id) {
      this.selected_playlist.set(null);
      this.selected_playlist_item.set(null);
      this.selected_playlist_item_index.set(null);
    }
    this._removePlaylistMediaState(playlist.id);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED"));
    result.close();
  }
  /**
   * Copy a playlist with its settings, items and item schedules. The copy
   * starts unapproved and is not assigned to any display or zone.
   * @returns The new playlist, or null when no copy was made
   */
  async duplicatePlaylist(playlist) {
    if (!playlist?.id)
      return null;
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS")))
      return null;
    try {
      const list = await Vh(playlist.id);
      const copy = await this._addSignagePlaylist({
        name: i18n("SIGNAGE_MANAGER.COPY_NAME", {
          name: playlist.name
        }),
        description: playlist.description,
        enabled: playlist.enabled,
        distribution: playlist.distribution,
        random: playlist.random,
        default_animation: playlist.default_animation,
        orientation: playlist.orientation,
        default_duration: playlist.default_duration,
        schedules: playlist.distribution ? void 0 : playlist.schedules,
        valid_from: playlist.valid_from || void 0,
        valid_until: playlist.valid_until || void 0
      });
      if (playlist.distribution) {
        const schedule_map = playlistItemScheduleMap(list);
        for (const item_id of list.items || []) {
          const schedule = schedule_map.get(item_id);
          if (!schedule?.item_id)
            continue;
          await sl(copy.id, {
            item_id: schedule.item_id,
            schedules: schedule.schedules
          });
        }
      } else {
        await nl(copy.id, list.items || []);
        for (const schedule of list.schedules || []) {
          if (!schedule.item_id || !schedule.schedules?.length) {
            continue;
          }
          await il(copy.id, schedule.item_id, {
            item_id: schedule.item_id,
            schedules: schedule.schedules
          });
        }
      }
      this.changed();
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATED"));
      return copy;
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATE_ERROR"));
      return null;
    }
  }
  async sharePlaylist(playlist) {
    if (!playlist?.id)
      return;
    await this._shareSignageItems("playlists", [playlist.id]);
  }
  async approvePlaylist(playlist) {
    if (!playlist?.id)
      return;
    if (!this._requirePermission(this.can_approve(), i18n("SIGNAGE_MANAGER.SVC_NO_APPROVE_PLAYLISTS")))
      return;
    const { PlaylistApproveModalComponent } = await import("./playlist-approve-modal.component-5BZBCXRQ.js");
    this._dialog.open(PlaylistApproveModalComponent, {
      data: { playlist },
      panelClass: "mobile-fullscreen"
    });
  }
  async requestPlaylistApproval(playlist) {
    if (!playlist?.id)
      return;
    if (this.playlist_approval_request_loading())
      return;
    if (this.can_approve()) {
      await this.approvePlaylist(playlist);
      return;
    }
    let approvers = [];
    let group = null;
    this.playlist_approval_request_loading.set(true);
    try {
      const groups = await this._playlistApprovalGroups(playlist);
      if (!groups.length) {
        notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_PLAYLIST"));
        return;
      }
      const selected_group_id = this._api_group_id();
      group = groups.find((item) => item.group.id === selected_group_id) || groups[0];
      approvers = await tl(group.group.id) || [];
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_APPROVERS"));
    } finally {
      this.playlist_approval_request_loading.set(false);
    }
    if (!group)
      return;
    const { PlaylistRequestApprovalModalComponent } = await import("./playlist-request-approval-modal.component-BNYLVY5V.js");
    const ref = this._dialog.open(PlaylistRequestApprovalModalComponent, {
      data: {
        playlist,
        approvers
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return;
    await el(playlist.id, group.group.id, result.message || "", result.approver_id || "");
    this.setPlaylistApprovalStatus(playlist.id, false, true);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_APPROVAL_REQUESTED"));
  }
  async removeMediaFromPlaylist(playlist_id, playlist_item_id, item_index) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    const media_list = await Vh(playlist_id);
    const new_items = [...media_list.items || []];
    if (typeof item_index === "number" && new_items[item_index] === playlist_item_id) {
      new_items.splice(item_index, 1);
    } else {
      const index = new_items.indexOf(playlist_item_id);
      if (index < 0)
        return;
      new_items.splice(index, 1);
    }
    await nl(playlist_id, new_items);
    this._setPlaylistMediaState(playlist_id, new_items, false, media_list.schedules);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ITEM_REMOVED"));
    this._playlist_change.set(Date.now());
    this.changed();
  }
  async removeMediaItemsFromPlaylist(playlist_id, selected_items) {
    const playlist_items = selected_items.filter((item) => !!item.id && item.index >= 0);
    if (!playlist_id || !playlist_items.length)
      return false;
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_ITEMS_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_SELECTED_PLAYLIST_ITEMS", { count: playlist_items.length }, playlist_items.length),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    const media_list = await Vh(playlist_id);
    const new_items = [...media_list.items || []];
    let removed_count = 0;
    for (const item of [...playlist_items].sort((first, second) => second.index - first.index)) {
      const index = new_items[item.index] === item.id ? item.index : new_items.indexOf(item.id);
      if (index < 0)
        continue;
      new_items.splice(index, 1);
      removed_count++;
    }
    if (!removed_count) {
      result.close();
      return false;
    }
    await nl(playlist_id, new_items);
    this._setPlaylistMediaState(playlist_id, new_items, false, media_list.schedules);
    const selected_index = this.selected_playlist_item_index();
    if (selected_index !== null && playlist_items.some((item) => item.index === selected_index)) {
      this.selected_playlist_item.set(null);
      this.selected_playlist_item_index.set(null);
    }
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ITEMS_REMOVED", { count: removed_count }, removed_count));
    this._playlist_change.set(Date.now());
    this.changed();
    result.close();
    return true;
  }
  async reorderPlaylistMedia(playlist_id, items) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    await nl(playlist_id, items);
    this._setPlaylistMediaState(playlist_id, items, false);
    this._playlist_change.set(Date.now());
  }
  async editPlaylistItemSchedule(item) {
    return this.editPlaylistItemSchedules([item]);
  }
  async editPlaylistItemSchedules(items) {
    const playlist = this.selected_playlist();
    const schedule_items = items.filter((item) => !!item?.item_id && !!(item.id || item.item_id));
    if (!playlist?.id || !schedule_items.length)
      return false;
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return false;
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-5XASPODU.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: schedule_items[0],
        save: (_schedule_id, schedules) => Promise.all(schedule_items.map((item) => il(playlist.id, item.id || item.item_id, {
          item_id: item.item_id,
          schedules
        })))
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this._playlist_change.set(Date.now());
      this.changed();
    }
    return !!result;
  }
  refreshPlaylist(playlist_id) {
    if (!playlist_id)
      return;
    this._removePlaylistMediaState(playlist_id);
    if (this.selected_playlist()?.id === playlist_id) {
      this._playlist_change.set(Date.now());
    }
    this.changed();
  }
  async _scheduleMediaForDistributionPlaylist(playlist_id, media_id) {
    const media = this._media_items().find((item) => item.id === media_id);
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-5XASPODU.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: new fr({
          item_id: media_id,
          media
        }),
        save: async (item_id, schedules) => {
          const media_list = await sl(playlist_id, {
            item_id,
            schedules
          });
          this._setPlaylistMediaState(playlist_id, media_list.items || [], false, media_list.schedules);
          return media_list;
        }
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return false;
    this._playlist_change.set(Date.now());
    return true;
  }
  async addTemplate() {
    if (!this._requirePermission(this.can_create_templates(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES")))
      return;
    const { TemplateEditModalComponent } = await import("./template-edit-modal.component-HVCF4WS7.js");
    const ref = this._dialog.open(TemplateEditModalComponent, {
      data: {
        template: new gr({}),
        onAdd: (data) => this._addSignageTemplate(data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this.changed();
    }
  }
  async editTemplate(template) {
    if (!this._requirePermission(this.can_update_templates(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES")))
      return;
    const { TemplateEditModalComponent } = await import("./template-edit-modal.component-HVCF4WS7.js");
    const ref = this._dialog.open(TemplateEditModalComponent, {
      data: {
        template,
        group_id: this._api_group_id(),
        onEdit: (id, data) => fl(id, data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this.updateCachedTemplate(result);
      this.changed();
    }
  }
  async editTemplateMapping(target, mapping = null) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return false;
    const templates = mapping ? [] : await this.listApprovedTemplates();
    const { TemplateMappingModalComponent } = await import("./template-mapping-modal.component-2YBW6RIB.js");
    const ref = this._dialog.open(TemplateMappingModalComponent, {
      data: {
        mapping,
        templates,
        save: (template_id, schedule) => mapping ? Al(mapping.id, { schedule }) : Sl(__spreadProps(__spreadValues({}, target), {
          template_id,
          schedule
        }))
      },
      panelClass: "mobile-fullscreen"
    });
    const changed = !!await dialogClosed(ref);
    if (changed)
      this.template_mappings_revision.update((value) => value + 1);
    return changed;
  }
  async removeTemplateMapping(mapping) {
    if (!mapping?.id || !this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_CONTENT", { name: mapping.template_details.name }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    try {
      await xl(mapping.id);
      this.template_mappings_revision.update((value) => value + 1);
      result.close();
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVED"));
      return true;
    } catch (error) {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVE_ERROR"));
      throw error;
    }
  }
  async approveTemplate(template) {
    if (!template?.id)
      return;
    if (!this._requirePermission(this.can_approve(), i18n("SIGNAGE_MANAGER.SVC_NO_APPROVE_TEMPLATES")))
      return;
    const { TemplateApproveModalComponent } = await import("./template-approve-modal.component-PP3EMLSN.js");
    this._dialog.open(TemplateApproveModalComponent, {
      data: { template },
      panelClass: "mobile-fullscreen"
    });
  }
  async requestTemplateApproval(template) {
    if (!template?.id || this.template_approval_request_loading())
      return;
    if (this.can_approve()) {
      await this.approveTemplate(template);
      return;
    }
    let approvers = [];
    let group = null;
    this.template_approval_request_loading.set(true);
    try {
      const groups = await this._templateApprovalGroups(template);
      if (!groups.length) {
        notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_TEMPLATE"));
        return;
      }
      const selected_group_id = this._api_group_id();
      group = groups.find((item) => item.group.id === selected_group_id) || groups[0];
      approvers = await $l(group.group.id) || [];
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS"));
    } finally {
      this.template_approval_request_loading.set(false);
    }
    if (!group)
      return;
    const { TemplateRequestApprovalModalComponent } = await import("./template-request-approval-modal.component-Y45LTNP6.js");
    const ref = this._dialog.open(TemplateRequestApprovalModalComponent, {
      data: { template, approvers },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return;
    await bl(template.id, group.group.id, result.message || "", result.approver_id || "");
    this.setTemplateApprovalStatus(template.id, false, true);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED"));
  }
  async removeTemplate(template) {
    if (!template?.id)
      return;
    if (!this._requirePermission(this.can_delete_templates(), i18n("SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES")))
      return;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: template.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    const group_id = this._api_group_id();
    await (group_id ? V(`${u()}/signage/templates/${encodeURIComponent(template.id)}?group_id=${encodeURIComponent(group_id)}`) : _l(template.id));
    if (this.selected_template()?.id === template.id) {
      this.selected_template.set(null);
      this.selected_template_layout_index.set(null);
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED"));
    result.close();
  }
  /**
   * Copy a template with its settings and saved layouts. The copy starts
   * unapproved and has no template mappings.
   * @returns The new template, or null when no copy was made
   */
  async duplicateTemplate(template) {
    if (!template?.id)
      return null;
    if (!this._requirePermission(this.can_create_templates(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES")))
      return null;
    try {
      const copy = await this._addSignageTemplate({
        name: i18n("SIGNAGE_MANAGER.COPY_NAME", {
          name: template.name
        }),
        description: template.description || void 0,
        tags: template.tags,
        background_item_id: template.background_item_id || void 0,
        full_screen_takeover: template.full_screen_takeover,
        merge: template.merge,
        layouts: (template.layouts || []).map(applyLayoutPositionDefaults)
      });
      this.changed();
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATED"));
      return copy;
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATE_ERROR"));
      return null;
    }
  }
  async shareTemplate(template) {
    if (!template?.id)
      return;
    await this._shareSignageItems("templates", [template.id]);
  }
  /** Persist the layout draft of the selected template */
  async saveTemplateLayouts() {
    const template = this.selected_template();
    if (!template?.id || !this.template_layout_dirty())
      return;
    if (!this._requirePermission(this.can_update_templates(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES")))
      return;
    try {
      const layouts = this.template_layout_draft().map(applyLayoutPositionDefaults);
      const response = await fl(template.id, {
        layouts
      });
      const result = decodeEntityNames(new gr(__spreadProps(__spreadValues({}, response), { layouts })));
      this.updateCachedTemplate(result);
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_SAVED"));
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_SAVE_ERROR"));
    }
  }
  discardTemplateLayoutDraft() {
    this.template_layout_draft.set(structuredClone(this.selected_template()?.layouts ?? []));
  }
  setTemplateApprovalStatus(template_id, approved, approval_requested = false) {
    const template = this.templates().find((item) => item.id === template_id) || this.selected_template();
    if (!template || template.id !== template_id)
      return;
    this.updateCachedTemplate(new gr(__spreadProps(__spreadValues({}, template), {
      approved,
      approval_requested
    })));
  }
  updateCachedTemplate(template) {
    this._template_items.update((items) => items.map((item) => isSameSignageTemplate(item, template) ? template : item));
    const selected_template = this.selected_template();
    if (selected_template && isSameSignageTemplate(selected_template, template)) {
      this.selected_template.set(template);
    }
  }
  _addSignageTemplate(form_data) {
    const group_id = this._api_group_id();
    return pl(form_data, group_id ? { group_id } : void 0);
  }
  changed() {
    this._change.set(Date.now());
  }
  canManageSignageGroup(group_id = "") {
    if (this.can_manage_all_groups())
      return true;
    const group = this.signage_groups().find((item) => item.group.id === group_id);
    return !!(group?.permissions & 64);
  }
  /**
   * Whether the user can change a group's feature flags. Only system admins
   * and managers of an ancestor group can, so members of a group cannot
   * lift the limits set on it.
   */
  canEditGroupFeatures(group) {
    if (!group?.id)
      return false;
    if (this.is_sys_admin())
      return true;
    const groups = this.signage_groups().map((item) => item.group);
    const parent = groups.find((item) => item.id === group.parent_id);
    const ancestor_ids = new Set(groupHierarchy(parent, groups).map((item) => item.id));
    return this.signage_groups().some((item) => ancestor_ids.has(item.group.id) && !!(item.permissions & 64));
  }
  /** Read a group with its current feature flags */
  async loadGroup(group_id) {
    return decodeEntityNames(await Ru(group_id));
  }
  /** Effective signage flags of a group, including inherited values */
  async loadGroupFeatures(group_id) {
    if (!group_id)
      return {};
    const raw = await Uu(group_id, { subsystem: "signage" });
    return signageGroupFeatures(raw);
  }
  /** Replace the signage flags a group sets itself. Other subsystems keep
   * their flags. */
  async saveGroupFeatures(group, signage) {
    if (!this.canEditGroupFeatures(group)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_EDIT_GROUP_FEATURES"));
      return null;
    }
    const features = __spreadProps(__spreadValues({}, group.features || {}), { signage: __spreadValues({}, signage) });
    const result = await Mu(group.id, { features }).catch((error) => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP"));
      throw error;
    });
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_GROUP_FEATURES_SAVED"));
    return result;
  }
  async saveSignageGroup(group, data) {
    const managed_group_id = group.id || data.parent_id || "";
    if (!this.canManageSignageGroup(managed_group_id)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP"));
      return null;
    }
    const payload = __spreadProps(__spreadValues(__spreadValues({}, group), data), {
      subsystems: Array.from(/* @__PURE__ */ new Set([...group.subsystems || [], "signage"]))
    });
    const result = await (group.id ? Mu(group.id, payload) : Eu(payload)).catch((error) => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP"));
      throw error;
    });
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_GROUP_SAVED"));
    return result;
  }
  async removeSignageGroup(group) {
    if (!group?.id)
      return;
    if (!this.canManageSignageGroup(group.id)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP"));
      return;
    }
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_GROUP_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: group.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await Cu(group.id).catch((error) => {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_GROUP"));
      throw error;
    });
    result.close();
    if (this.selected_group_id() === group.id) {
      this.selected_group_id.set("");
    }
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_GROUP_REMOVED"));
  }
  async searchGroupUsers(search = "") {
    const group = this.managed_group();
    const { data } = await Ja(__spreadValues({
      q: search,
      limit: 20
    }, group?.authority_id ? { authority_id: group.authority_id } : {}));
    return data;
  }
  async addManagedGroupUser(user) {
    const group_id = this.managed_group_id();
    if (!user?.id || !this.canManageSignageGroup(group_id))
      return;
    await Gu({
      group_id,
      user_id: user.id,
      permissions: 0
    }).catch((error) => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_ADD_USER"));
      throw error;
    });
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_USER_ADDED"));
  }
  async updateManagedGroupUser(item, permissions) {
    if (!this.canManageSignageGroup(item.group_id))
      return;
    await Bu(item.user_id, item.group_id, {
      permissions
    }).catch((error) => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_UPDATE_USER"));
      throw error;
    });
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_USER_UPDATED"));
  }
  async removeManagedGroupUser(item) {
    if (!this.canManageSignageGroup(item.group_id))
      return;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_USER_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP", {
        name: item.user?.name || item.user_id
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await Wu(item.user_id, item.group_id).catch((error) => {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_USER"));
      throw error;
    });
    result.close();
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_USER_REMOVED"));
  }
  async addManagedGroupZone(zone) {
    const group_id = this.managed_group_id();
    if (!zone?.id || !this.canManageSignageGroup(group_id))
      return;
    await Zu({
      group_id,
      zone_id: zone.id,
      permissions: 0
    }).catch((error) => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_ADD_ZONE"));
      throw error;
    });
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ZONE_ADDED"));
  }
  async updateManagedGroupZone(item, permissions, deny) {
    if (!this.canManageSignageGroup(item.group_id))
      return;
    await Ju(item.group_id, item.zone_id, {
      permissions,
      deny
    }).catch((error) => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_UPDATE_ZONE"));
      throw error;
    });
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ZONE_UPDATED"));
  }
  async removeManagedGroupZone(item) {
    if (!this.canManageSignageGroup(item.group_id))
      return;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_ZONE_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP", {
        name: item.zone?.name || item.zone_id
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await Vu(item.group_id, item.zone_id).catch((error) => {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_ZONE"));
      throw error;
    });
    result.close();
    this._groups_change.set(Date.now());
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ZONE_REMOVED"));
  }
  setSelectedGroup(group_id) {
    if (this.is_sys_admin() && !group_id) {
      this.selected_group_id.set("");
      this.selected_playlist.set(null);
      this.selected_playlist_item.set(null);
      this.selected_playlist_item_index.set(null);
      this.selected_zone.set(null);
      this.selected_display.set(null);
      this.changed();
      return;
    }
    if (!this.signage_groups().some((item) => item.group.id === group_id)) {
      return;
    }
    this.selected_group_id.set(group_id);
    this.selected_playlist.set(null);
    this.selected_playlist_item.set(null);
    this.selected_playlist_item_index.set(null);
    this.selected_zone.set(null);
    this.selected_display.set(null);
    this.changed();
  }
  _hasGroupPermission(permission) {
    if (this.is_sys_admin())
      return true;
    const permissions = this.selected_group()?.permissions || 0;
    return !!(permissions & 64 || permissions & permission);
  }
  _requirePermission(has_permission, message) {
    if (has_permission)
      return true;
    notifyWarn(message);
    return false;
  }
  _groupQueryParams(query_params, group_id = this._api_group_id()) {
    return __spreadValues(__spreadValues({}, query_params), group_id ? { group_id } : {});
  }
  _orgZoneQueryParams(query_params, group_id = this._api_group_id()) {
    const org_zone_id = this._org.organisation?.id;
    let zone_params = {};
    if (group_id) {
      zone_params = { group_id };
    } else if (org_zone_id) {
      zone_params = { zone_id: org_zone_id };
    }
    return __spreadValues(__spreadValues({}, query_params), zone_params);
  }
  async _addSignageMedia(form_data) {
    const group_id = this._api_group_id();
    const result = await retryMediaRequest(() => group_id ? v(`${u()}/signage/media?group_id=${encodeURIComponent(group_id)}`, form_data).then((resp) => new ws(resp)) : Lh(form_data));
    this._addMediaToList(result);
    return result;
  }
  /**
   * Fold a newly created item into the loaded media list. Refetching instead
   * loses the item whenever the backend index lags the write, which reads as
   * a failed upload.
   */
  _addMediaToList(media) {
    if (!media?.id)
      return;
    const item = decodeEntityNames(media);
    this._media_items.update((items) => [item, ...items.filter((existing) => existing.id !== item.id)].sort((a, b) => b.created_at - a.created_at));
    this._media_tags.reload();
  }
  _addSignagePlaylist(form_data) {
    const group_id = this._api_group_id();
    if (!group_id)
      return Zh(form_data);
    return v(`${u()}/signage/playlists?group_id=${encodeURIComponent(group_id)}`, form_data).then((resp) => new _r(resp));
  }
  async _shareSignageItems(item_type, item_ids) {
    if (!this._requirePermission(this.can_share(), i18n("SIGNAGE_MANAGER.SVC_NO_SHARE_ITEMS")))
      return false;
    const selected_group_id = this.selected_group()?.group.id || "";
    const target_groups = this.signage_groups().filter((item) => item.group.id !== selected_group_id);
    if (!target_groups.length) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_GROUPS_TO_SHARE"));
      return false;
    }
    const share_config = SIGNAGE_SHARE_CONFIG[item_type];
    const { GroupSelectModalComponent } = await import("./group-select-modal.component-GVLULLV7.js");
    const ref = this._dialog.open(GroupSelectModalComponent, {
      data: {
        title: i18n(share_config.title),
        groups: target_groups
      },
      panelClass: "mobile-fullscreen"
    });
    const group_id = await dialogClosed(ref);
    if (!group_id)
      return false;
    const options = { items: item_ids.join(","), to: group_id };
    await share_config.request(options);
    markSignageSharedGroupsChanged();
    notifySuccess(i18n(share_config.success));
    return true;
  }
  async _playlistApprovalGroups(playlist) {
    const groups = this.signage_groups();
    const selected_group_id = this._api_group_id();
    const matching_groups = [];
    for (const group of groups) {
      if (!group.group.id)
        continue;
      if (group.group.id === selected_group_id) {
        matching_groups.push(group);
        continue;
      }
      try {
        const result = await Wh({
          group_id: group.group.id,
          limit: 500
        });
        if ((result.data || []).some((item) => item.id === playlist.id)) {
          matching_groups.push(group);
        }
      } catch {
      }
    }
    return matching_groups;
  }
  async _templateApprovalGroups(template) {
    const groups = this.signage_groups();
    const selected_group_id = this._api_group_id();
    const matching_groups = [];
    for (const group of groups) {
      if (!group.group.id)
        continue;
      if (group.group.id === selected_group_id) {
        matching_groups.push(group);
        continue;
      }
      try {
        const result = await ll({
          group_id: group.group.id,
          limit: 500
        });
        if ((result.data || []).some((item) => item.id === template.id)) {
          matching_groups.push(group);
        }
      } catch {
      }
    }
    return matching_groups;
  }
  _cacheDisplay(display) {
    if (!display?.id)
      return;
    this._display_overrides.update((state) => __spreadProps(__spreadValues({}, state), {
      [display.id]: display
    }));
  }
  _addDisplayToList(display) {
    if (!display?.id)
      return;
    const item = decodeEntityNames(display);
    this._display_items.update((items) => [
      item,
      ...items.filter((existing) => existing.id !== item.id)
    ]);
    this._display_cache.update((cache) => __spreadProps(__spreadValues({}, cache), {
      [item.id]: item
    }));
    this._cacheDisplay(item);
  }
  _removeDisplayFromList(display_id) {
    this._display_items.update((items) => items.filter((item) => item.id !== display_id));
    this._display_cache.update((cache) => {
      const next = __spreadValues({}, cache);
      delete next[display_id];
      return next;
    });
    this._display_overrides.update((overrides) => {
      const next = __spreadValues({}, overrides);
      delete next[display_id];
      return next;
    });
  }
  _cacheZone(zone) {
    if (!zone?.id)
      return;
    this._zone_overrides.update((state) => __spreadProps(__spreadValues({}, state), {
      [zone.id]: zone
    }));
  }
  _mergeItems(list, overrides) {
    const item_map = new Map((list || []).map((item) => [item.id, item]));
    for (const item of Object.values(overrides)) {
      if (item?.id)
        item_map.set(item.id, item);
    }
    return [...item_map.values()].sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name));
  }
  async updatePlaylistMedia(playlist_id, list) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    await nl(playlist_id, list);
    this._setPlaylistMediaState(playlist_id, list, false);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED"));
    this._playlist_change.set(Date.now());
  }
  async addMediaToPlaylist(playlist_id, media_id) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    const media_list = await Vh(playlist_id);
    if (media_list.items?.includes(media_id)) {
      const result = await openConfirmModal({
        title: i18n("SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_TITLE"),
        content: i18n("SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_CONTENT"),
        icon: { content: "playlist_add" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.close();
    }
    const playlist = this.playlists().find((item) => item.id === playlist_id);
    const new_items = [...media_list.items || [], media_id];
    if (playlist?.distribution) {
      await this._scheduleMediaForDistributionPlaylist(playlist_id, media_id);
      return;
    }
    await this.updatePlaylistMedia(playlist_id, new_items);
  }
  async addMediaItemsToPlaylist(playlist_id, media_ids) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return false;
    const unique_media_ids = [...new Set(media_ids)].filter(Boolean);
    if (!playlist_id || !unique_media_ids.length)
      return false;
    const playlist = this.playlists().find((item) => item.id === playlist_id);
    const media_list = await Vh(playlist_id);
    const existing_items = media_list.items || [];
    const new_media_ids = unique_media_ids.filter((id) => !existing_items.includes(id));
    if (!new_media_ids.length) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_MEDIA_ALREADY_IN"));
      return false;
    }
    if (playlist?.distribution) {
      for (const media_id of new_media_ids) {
        const added = await this._scheduleMediaForDistributionPlaylist(playlist_id, media_id);
        if (!added)
          return false;
      }
      return true;
    }
    await this.updatePlaylistMedia(playlist_id, [
      ...existing_items,
      ...new_media_ids
    ]);
    return true;
  }
  _needsPlaylistMetaRefresh(playlist) {
    const meta = this._playlist_meta_state()[playlist.id];
    const loading = this._playlist_meta_loading()[playlist.id];
    const queued = !!this._playlist_meta_queue[playlist.id];
    const playlist_updated_at = playlist.updated_at || 0;
    return !loading && !queued && (meta?.updated_at !== playlist_updated_at || !Array.isArray(meta?.item_ids) || typeof meta?.approved !== "boolean" || typeof meta?.approval_requested !== "boolean");
  }
  async _processPlaylistMetaQueue() {
    if (this._playlist_meta_processing)
      return;
    this._playlist_meta_processing = true;
    try {
      while (Object.keys(this._playlist_meta_queue).length) {
        const next_playlist = Object.values(this._playlist_meta_queue)[0];
        delete this._playlist_meta_queue[next_playlist.id];
        const playlist_updated_at = next_playlist.updated_at || 0;
        this._playlist_meta_loading.update((state) => __spreadProps(__spreadValues({}, state), {
          [next_playlist.id]: true
        }));
        try {
          const media = await Vh(next_playlist.id);
          const media_ids = playlistMediaIds(media);
          this._setPlaylistMeta(next_playlist.id, {
            media_ids: media_ids.slice(0, 3),
            item_ids: media.items || media_ids,
            updated_at: playlist_updated_at,
            approved: media.approved,
            approval_requested: media.approval_requested
          });
        } catch {
          this._setPlaylistMeta(next_playlist.id, {
            media_ids: [],
            updated_at: playlist_updated_at
          });
        } finally {
          this._playlist_meta_loading.update((state) => __spreadProps(__spreadValues({}, state), {
            [next_playlist.id]: false
          }));
        }
      }
    } finally {
      this._playlist_meta_processing = false;
    }
  }
  _setPlaylistMeta(playlist_id, data) {
    this._updatePlaylistMetaState((state) => __spreadProps(__spreadValues({}, state), {
      [playlist_id]: data
    }));
  }
  setPlaylistApprovalStatus(playlist_id, approved, approval_requested = false) {
    const playlist = this.playlists().find((item) => item.id === playlist_id) || this.selected_playlist();
    const current_state = this._playlist_meta_state()[playlist_id];
    this._setPlaylistMeta(playlist_id, {
      media_ids: current_state?.media_ids || [],
      item_ids: current_state?.item_ids,
      updated_at: current_state?.updated_at || playlist?.updated_at || Date.now(),
      approved,
      approval_requested
    });
  }
  _setPlaylistMediaState(playlist_id, item_ids, approved, schedules) {
    const schedule_map = playlistItemScheduleMap({
      schedules: schedules || this._playlist_media_items.value()?.schedules
    });
    const media_ids = item_ids.map((id) => schedule_map.get(id)?.media?.id || id);
    const playlist = this.playlists().find((item) => item.id === playlist_id) || this.selected_playlist();
    const current_state = this._playlist_meta_state()[playlist_id];
    this._setPlaylistMeta(playlist_id, {
      media_ids: media_ids.slice(0, 3),
      item_ids,
      updated_at: current_state?.updated_at || playlist?.updated_at || Date.now(),
      approved: approved ?? current_state?.approved,
      approval_requested: approved === false ? false : current_state?.approval_requested ?? false
    });
  }
  _removePlaylistMediaState(playlist_id) {
    this._updatePlaylistMetaState((state) => {
      const next_state = __spreadValues({}, state);
      delete next_state[playlist_id];
      return next_state;
    });
  }
  /**
   * Playlists that include any of the media items, read from the media
   * show route. Returns an empty list when the lookup fails.
   */
  async _playlistsUsingMedia(media_ids) {
    const query_params = this._groupQueryParams({});
    try {
      const items = await Promise.all(media_ids.map((id) => zh(id, query_params)));
      const by_id = /* @__PURE__ */ new Map();
      for (const playlist of items.flatMap((item) => item.playlists || [])) {
        if (playlist?.id)
          by_id.set(playlist.id, playlist);
      }
      return [...by_id.values()];
    } catch {
      return [];
    }
  }
  /** Add the playlists that use the media to a delete confirmation message */
  _withMediaUsage(content, playlists) {
    if (!playlists.length)
      return content;
    const shown = playlists.slice(0, 3).map(({ name }) => name);
    const hidden_count = playlists.length - shown.length;
    const names = shown.join(", ") + (hidden_count > 0 ? ` +${hidden_count}` : "");
    const usage = i18n("SIGNAGE_MANAGER.SVC_MEDIA_USED_IN", { count: playlists.length, names }, playlists.length);
    return `${content} ${usage}`;
  }
  /**
   * Remove media from the playlists that hold it, before the media is
   * deleted. Also checks cached playlists that list the media, in case the
   * media lookup failed.
   * @param media_ids Media to remove
   * @param playlist_ids Playlists that the media lookup found
   */
  async _removeMediaFromPlaylists(media_ids, playlist_ids = []) {
    const removed_ids = new Set(media_ids.filter(Boolean));
    if (!removed_ids.size)
      return;
    const cached_ids = Object.entries(this._playlist_meta_state()).filter(([, state]) => (state.item_ids || state.media_ids || []).some((id) => removed_ids.has(id))).map(([playlist_id]) => playlist_id);
    const linked_playlist_ids = [
      .../* @__PURE__ */ new Set([...playlist_ids, ...cached_ids])
    ];
    if (!linked_playlist_ids.length)
      return;
    for (const playlist_id of linked_playlist_ids) {
      const list = await Vh(playlist_id);
      const current_items = list.items || [];
      const schedule_map = playlistItemScheduleMap(list);
      const updated_items = current_items.filter((id) => !removed_ids.has(schedule_map.get(id)?.media?.id || id));
      if (updated_items.length === current_items.length)
        continue;
      await nl(playlist_id, updated_items);
      this._setPlaylistMediaState(playlist_id, updated_items, false, list.schedules);
    }
    const selected_item = this.selected_playlist_item();
    if (selected_item?.id && removed_ids.has(selected_item.id)) {
      this.selected_playlist_item.set(null);
      this.selected_playlist_item_index.set(null);
    }
    this._playlist_change.set(Date.now());
  }
  _updatePlaylistMetaState(updater) {
    let next_state = {};
    this._playlist_meta_state.update((state) => {
      next_state = updater(state);
      return next_state;
    });
    persistPlaylistMetaSessionCache(next_state);
  }
  async previewMedia(item) {
    const plugin = item.media_type === "plugin" && item.plugin_id ? await this._resolvePlugin(item.plugin_id) : void 0;
    const { MediaPreviewModalComponent } = await import("./media-preview-modal.component-RMJR7CUQ.js");
    this._dialog.open(MediaPreviewModalComponent, {
      data: { media: item, plugin, group_id: this._api_group_id() },
      panelClass: "fullscreen-dialog"
    });
  }
  async previewFileFromInput(event, playlist_id = "") {
    const element = event.target;
    if (!element?.files?.length)
      return;
    try {
      await this.previewFiles(element.files, playlist_id);
    } finally {
      element.value = "";
    }
  }
  async previewFiles(files, playlist_id = "") {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")))
      return;
    if (!files)
      return;
    const upload_files = Array.from(files);
    if (upload_files.length > 1) {
      return this.bulkUploadMedia(upload_files, playlist_id);
    }
    for (const file of upload_files) {
      const prepared = await this._prepareUploadMedia(file);
      if (!prepared)
        continue;
      await this.editMedia(new ws({}), prepared.file, playlist_id, prepared.metadata);
    }
  }
  async bulkUploadMedia(files, playlist_id = "") {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")))
      return;
    const items = [];
    for (const file of files) {
      const prepared = await this._prepareUploadMedia(file);
      if (prepared)
        items.push(prepared);
    }
    if (!items.length)
      return;
    const data = {
      items,
      onUpload: (item, permissions, on_progress) => this._addMedia(item.file, new ws({}), playlist_id, item.metadata, void 0, { permissions, on_progress })
    };
    const { BulkMediaUploadModalComponent } = await import("./bulk-media-upload-modal.component-ZOHAQFRK.js");
    const ref = this._dialog.open(BulkMediaUploadModalComponent, {
      data,
      panelClass: "mobile-fullscreen"
    });
    await dialogClosed(ref);
    this.changed();
  }
  async addMediaFromLink(url) {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")))
      return;
    const url_obj = new URL(url);
    const media = new ws({
      name: url_obj.hostname,
      media_uri: url,
      media_type: "webpage",
      orientation: "landscape"
    });
    await this.editMedia(media);
  }
  /**
   * Create a media item from an image the backend already stored, without
   * sending the bytes up a second time.
   */
  async addMediaFromUpload(upload_id, media_item = {}, playlist_id = "") {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))) {
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_PERMISSION_DENIED"));
    }
    const media_url = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
    let thumbnail_id = "";
    try {
      const source = await loadAuthenticatedImage(media_url, "/api/engine/v2/uploads");
      const response = await fetch(source);
      const blob = await response.blob();
      const file = new File([blob], `${media_item.name || "image"}.${blob.type.includes("png") ? "png" : "jpg"}`, { type: blob.type || "image/jpeg" });
      const thumbnail = await this.generateThumbnailImage(file);
      if (thumbnail) {
        thumbnail_id = await this._uploadThumbnailImage(thumbnail, media_item.name || "image");
      }
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED"));
    }
    const data = __spreadValues({}, new ws(__spreadProps(__spreadValues({
      orientation: "landscape"
    }, media_item), {
      media_id: upload_id,
      media_uri: media_url,
      media_type: "image",
      thumbnail_id
    })));
    for (const key in data) {
      if (!data[key])
        delete data[key];
    }
    const result = await this._addSignageMedia(data);
    if (playlist_id && result?.id) {
      await this.addMediaToPlaylist(playlist_id, result.id);
    }
    return result;
  }
  /** Remove a media row when the generated upload could not be claimed. */
  async discardCreatedMedia(id) {
    await jh(id);
    this._media_items.update((items) => items.filter((item) => item.id !== id));
    this._media_tags.reload();
  }
  /** Open the AI image modal, either to create artwork or to change some. */
  async generateMediaWithAI(options = {}) {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")))
      return;
    if (!this._requirePermission(this.hasFeature(options.source_upload_id ? "ai-editing" : "ai-generation"), i18n("SIGNAGE_MANAGER.SVC_AI_DISABLED")))
      return;
    if (this._ai_modal_ref)
      return;
    const { AiImageModalComponent } = await import("./ai-image-modal.component-GPVOQDAG.js");
    const ref = this._dialog.open(AiImageModalComponent, {
      data: options,
      panelClass: "fullscreen-dialog",
      autoFocus: false
    });
    this._ai_modal_ref = ref;
    try {
      const result = await dialogClosed(ref);
      this.changed();
      return result;
    } finally {
      this._ai_modal_ref = null;
    }
  }
  async editMediaWithAI(media) {
    if (!media?.media_id)
      return;
    return this.generateMediaWithAI({
      source_upload_id: media.media_id,
      source_item_id: media.id,
      source_name: media.name,
      aspect_ratio: media.orientation === "portrait" ? "9:16" : "16:9"
    });
  }
  async addMediaFromPlugin(plugin) {
    if (plugin.plugin_type !== "plugin")
      return;
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")))
      return;
    const media = new ws({
      name: "",
      media_uri: plugin.uri,
      media_type: "plugin",
      plugin_id: plugin.id,
      orientation: "landscape"
    });
    await this.editMedia(media, void 0, "", void 0, plugin);
  }
  async editMedia(media = new ws({}), file, playlist_id = "", prepared_file_metadata, plugin) {
    if (media.id) {
      if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA")))
        return;
    } else if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")))
      return;
    const file_metadata = file ? prepared_file_metadata || await this._getMediaMetadata(file) : {
      is_landscape: media.orientation === "landscape",
      duration: 0,
      width: 0,
      height: 0
    };
    const dimensions_validation = validateSignageMediaDimensions(file_metadata);
    if (!dimensions_validation.valid) {
      notifyWarn(dimensions_validation.error);
    }
    const load_plugin = media.plugin_id ? () => this._resolvePlugin(media.plugin_id) : void 0;
    let file_thumbnail = "";
    if (file) {
      file_thumbnail = await this._generateThumbnail(file, 1024, 720);
    }
    const { MediaEditModalComponent } = await import("./media-edit-modal.component-KVI4YRNY.js");
    const ref = this._dialog.open(MediaEditModalComponent, {
      data: {
        media,
        file,
        file_metadata,
        file_thumbnail,
        playlist_id,
        group_id: this._api_group_id(),
        plugin,
        tag_options: this.media_tags(),
        loadPlugin: load_plugin,
        generateThumbnail: (f2) => this.generateThumbnailImage(f2),
        onAdd: (f2, m, file_metadata2, thumbnail) => this._addMedia(f2, m, playlist_id, file_metadata2, thumbnail || file_thumbnail),
        onEdit: async (id, data) => {
          const updated_media = await this._editMedia(id, data);
          Object.assign(media, updated_media);
        },
        preview: (item) => this.previewMedia(item)
      }
    });
    await dialogClosed(ref);
  }
  async _editMedia(id, data) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA")))
      return;
    const _a = data, { thumbnail_image } = _a, update = __objRest(_a, ["thumbnail_image"]);
    if (thumbnail_image) {
      const thumbnail_id = await this._uploadThumbnailImage(thumbnail_image, update.name);
      if (thumbnail_id)
        update.thumbnail_id = thumbnail_id;
    }
    const updated_media = decodeEntityNames(await Fh(id, update));
    this._media_items.update((items) => items.map((item) => item.id === id ? updated_media : item));
    this._media_tags.reload();
    return updated_media;
  }
  async _resolvePlugin(plugin_id) {
    if (!plugin_id)
      return void 0;
    try {
      const result = await ol({
        limit: 500,
        plugin_type: "plugin"
      }).catch(() => ({ data: [] }));
      const all_plugins = result.data || [];
      return all_plugins.find((p) => p.id === plugin_id);
    } catch {
      return void 0;
    }
  }
  async _addMedia(file, media_item, playlist_id = "", file_metadata, url_thumbnail, upload_options) {
    let result;
    if (file) {
      result = await this.addMedia(file, media_item, file_metadata, upload_options);
    } else {
      let thumbnail_id = "";
      if (url_thumbnail) {
        thumbnail_id = await this._uploadThumbnailImage(url_thumbnail, media_item.name);
      }
      const data = __spreadValues({}, new ws(__spreadProps(__spreadValues({}, media_item), {
        thumbnail_id: thumbnail_id || void 0
      })));
      for (const key in data) {
        if (!data[key])
          delete data[key];
      }
      result = await this._addSignageMedia(data);
    }
    if (playlist_id && result?.id) {
      const media_list = await Vh(playlist_id);
      const new_media_list = [...media_list.items, result.id];
      await this.updatePlaylistMedia(playlist_id, new_media_list);
      this.changed();
    }
    return result;
  }
  async addMedia(file, media_item = new ws({}), file_metadata, upload_options) {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))) {
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_PERMISSION_DENIED"));
    }
    const prepared = file_metadata && await this._prepareUploadMedia(file, file_metadata) || await this._prepareUploadMedia(file);
    if (!prepared) {
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE"));
    }
    const { file: upload_file, media_type, metadata } = prepared;
    const { is_landscape } = metadata;
    const thumbnail_image = await this._generateThumbnail(upload_file, 1280, 720).catch(() => null);
    let media_id;
    if (upload_options) {
      media_id = await this._uploads.uploadFileToCompletion(upload_file, false, upload_options.permissions, upload_options.on_progress);
    } else {
      media_id = await this._uploads.uploadFileWithPermissionsToCompletion(upload_file);
    }
    const media_url = `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(media_id)}/url`;
    let thumbnail_id = "";
    if (thumbnail_image) {
      const name_parts = upload_file.name.split(".");
      name_parts.pop();
      thumbnail_id = await this._uploadThumbnailImage(thumbnail_image, name_parts.join("."));
    }
    const data = __spreadValues({}, new ws(__spreadProps(__spreadValues({}, media_item), {
      name: media_item.name || upload_file.name,
      media_id,
      media_uri: media_url,
      media_type,
      orientation: is_landscape ? "landscape" : "portrait",
      thumbnail_id
    })));
    for (const key in data) {
      if (!data[key])
        delete data[key];
    }
    const result = await this._addSignageMedia(data);
    return result;
  }
  async _prepareUploadMedia(file, metadata) {
    if (!file) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE"));
      return null;
    }
    const normalized_file = await this._normalizeImageUpload(file);
    const validation = await validateSignageMediaFile(normalized_file, this._mediaValidationOptions());
    if (!validation.valid) {
      notifyError(validation.error);
      return null;
    }
    return {
      file: normalized_file,
      media_type: validation.media_type,
      metadata: metadata || await this._getMediaMetadata(normalized_file)
    };
  }
  async _normalizeImageUpload(file) {
    if (isSupportedImageFile(file) || getVideoContainer(file)) {
      return file;
    }
    if (!isImageSourceFile(file)) {
      return file;
    }
    try {
      const converted_file = await this._convertImageToWebp(file);
      notifyInfo(i18n("SIGNAGE_MANAGER.SVC_CONVERTED_MEDIA", {
        from: file.name,
        to: converted_file.name
      }));
      return converted_file;
    } catch {
      return file;
    }
  }
  async removeMedia(item) {
    if (!item?.id)
      return;
    if (!this._requirePermission(this.can_delete(), i18n("SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA")))
      return;
    const playlists = await this._playlistsUsingMedia([item.id]);
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE"),
      content: this._withMediaUsage(i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED_PLAIN", {
        name: item.name
      }), playlists),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await this._removeMediaFromPlaylists([item.id], playlists.map(({ id }) => id));
    await jh(item.id, this._groupQueryParams({}));
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_REMOVED"));
    result.close();
  }
  async removeMediaItems(items) {
    const media_items = items.filter((item) => !!item?.id);
    if (!media_items.length)
      return false;
    if (!this._requirePermission(this.can_delete(), i18n("SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA")))
      return false;
    const media_ids = media_items.map((item) => item.id);
    const playlists = await this._playlistsUsingMedia(media_ids);
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE"),
      content: this._withMediaUsage(i18n("SIGNAGE_MANAGER.SVC_DELETE_SELECTED_MEDIA", { count: media_items.length }, media_items.length), playlists),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    await this._removeMediaFromPlaylists(media_ids, playlists.map(({ id }) => id));
    await Promise.all(media_items.map((item) => jh(item.id, this._groupQueryParams({}))));
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_REMOVED"));
    result.close();
    return true;
  }
  async shareMedia(item) {
    if (!item?.id)
      return;
    await this._shareSignageItems("media", [item.id]);
  }
  async shareMediaItems(items) {
    const media_ids = items.map((item) => item.id).filter(Boolean);
    if (!media_ids.length)
      return false;
    return this._shareSignageItems("media", media_ids);
  }
  async addMediaTags(items) {
    const media_items = items.filter((item) => !!item?.id);
    if (!media_items.length)
      return false;
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA")))
      return false;
    const { MediaTagsModalComponent } = await import("./media-tags-modal.component-3DQ34RKW.js");
    const ref = this._dialog.open(MediaTagsModalComponent, {
      data: { tags: this.media_tags() },
      width: "min(28rem, calc(100vw - 2rem))"
    });
    const tags = await dialogClosed(ref);
    if (!tags?.length)
      return false;
    try {
      await Promise.all(media_items.map((item) => Fh(item.id, {
        tags: [.../* @__PURE__ */ new Set([...item.tags || [], ...tags])]
      })));
    } catch (error) {
      notifyError(i18n("SIGNAGE_MANAGER.MEDIA_SAVE_ERROR", {
        error: error instanceof Error ? error.message : `${error}`
      }));
      return false;
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS"));
    return true;
  }
  async renameMediaTag(tag, count) {
    if (!tag)
      return false;
    if (!this._requirePermission(this.can_update_media_tags(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA")))
      return false;
    const { MediaTagModalComponent } = await import("./media-tag-modal.component-K5IH357O.js");
    const ref = this._dialog.open(MediaTagModalComponent, {
      data: {
        action: "rename",
        tag,
        count,
        can_delete_media: false
      },
      width: "min(28rem, calc(100vw - 2rem))"
    });
    const result = await dialogClosed(ref);
    if (result?.action !== "rename")
      return false;
    try {
      const group_id = this._api_group_id();
      await Dh(__spreadValues({
        current_tag: tag,
        new_tag: result.new_tag
      }, group_id ? { group_id } : {}));
    } catch (error) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR", {
        error: error instanceof Error ? error.message : `${error}`
      }));
      return false;
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_RENAMED"));
    return true;
  }
  async removeMediaTag(tag, count) {
    if (!tag)
      return false;
    if (!this._requirePermission(this.can_update_media_tags(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA")))
      return false;
    const { MediaTagModalComponent } = await import("./media-tag-modal.component-K5IH357O.js");
    const ref = this._dialog.open(MediaTagModalComponent, {
      data: {
        action: "remove",
        tag,
        count,
        can_delete_media: this.can_delete_tagged_media()
      },
      width: "min(28rem, calc(100vw - 2rem))"
    });
    const result = await dialogClosed(ref);
    if (result?.action !== "remove")
      return false;
    if (result.remove_media && !this._requirePermission(this.can_delete_tagged_media(), i18n("SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA")))
      return false;
    try {
      const group_id = this._api_group_id();
      await Hh(__spreadValues(__spreadValues({
        tag
      }, result.remove_media ? { remove_media: true } : {}), group_id ? { group_id } : {}));
    } catch (error) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR", {
        error: error instanceof Error ? error.message : `${error}`
      }));
      return false;
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_REMOVED"));
    return true;
  }
  async openPlaylistSelectModal(media_id) {
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-DNCPLYGY.js");
    const ref = this._dialog.open(PlaylistSelectModalComponent, {
      data: { media_id },
      panelClass: "mobile-fullscreen"
    });
    const playlist_id = await dialogClosed(ref);
    if (!playlist_id)
      return;
    await this.addMediaToPlaylist(playlist_id, media_id);
  }
  async openBulkPlaylistSelectModal(media_ids) {
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-DNCPLYGY.js");
    const ref = this._dialog.open(PlaylistSelectModalComponent, {
      data: { media_ids },
      panelClass: "mobile-fullscreen"
    });
    const playlist_id = await dialogClosed(ref);
    if (!playlist_id)
      return false;
    return this.addMediaItemsToPlaylist(playlist_id, media_ids);
  }
  async addPlaylistToZone(zone) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-DNCPLYGY.js");
    const ref = this._dialog.open(PlaylistSelectModalComponent, {
      data: { zone_id: zone.id },
      panelClass: "mobile-fullscreen"
    });
    const playlist_id = await dialogClosed(ref);
    if (!playlist_id)
      return;
    if (zone.playlists?.includes(playlist_id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE"));
      return;
    }
    if (!await this._confirmTakeoverChange({
      playlist_id,
      zone_id: zone.id
    }))
      return;
    const playlists = [...zone.playlists || [], playlist_id];
    const updated = await dh(zone.id, { playlists, version: zone.version }, "patch");
    this._cacheZone(updated);
    this.selected_zone.set(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_ZONE"));
  }
  async removePlaylistFromZone(zone, playlist_id) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const playlists = (zone.playlists || []).filter((id) => id !== playlist_id);
    const updated = await dh(zone.id, { playlists, version: zone.version }, "patch");
    this._cacheZone(updated);
    this.selected_zone.set(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_ZONE"));
  }
  async addZone() {
    if (!this._requirePermission(this.can_manage_zones(), i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES")))
      return null;
    const { ZoneEditModalComponent } = await import("./zone-edit-modal.component-IO3FLTDO.js");
    const ref = this._dialog.open(ZoneEditModalComponent, {
      data: {
        zone: new Xt({}),
        default_parent_id: this.selected_zone()?.id || this.root_zones()[0]?.id || "",
        roots: this.root_zones,
        zones: this.all_zones,
        load_children: (parent_id) => this.zoneChildren(parent_id),
        query_zones: (search, parent_id) => this.querySelectableZones(search, parent_id),
        onSave: (zone, data) => this.saveZone(zone, data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return null;
    this.selected_zone.set(result);
    return result;
  }
  async editZone(zone) {
    if (!zone.tags?.includes("signage"))
      return null;
    if (!this._requirePermission(this.can_manage_zones(), i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES")))
      return null;
    const { ZoneEditModalComponent } = await import("./zone-edit-modal.component-IO3FLTDO.js");
    const ref = this._dialog.open(ZoneEditModalComponent, {
      data: {
        zone,
        roots: this.root_zones,
        zones: this.all_zones,
        load_children: (parent_id) => this.zoneChildren(parent_id),
        query_zones: (search, parent_id) => this.querySelectableZones(search, parent_id),
        onSave: (item, data) => this.saveZone(item, data)
      },
      panelClass: "mobile-fullscreen"
    });
    return await dialogClosed(ref);
  }
  async saveZone(zone, data) {
    if (!this._requirePermission(this.can_manage_zones(), i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES")) || !data.parent_id || data.parent_id === zone.id || zone.id && !zone.tags?.includes("signage")) {
      return null;
    }
    const form_data = __spreadValues({
      name: data.name,
      display_name: data.display_name,
      description: data.description,
      parent_id: data.parent_id,
      tags: [.../* @__PURE__ */ new Set([...zone.tags || [], "signage"])]
    }, zone.id ? { version: zone.version } : {});
    const result = zone.id ? await dh(zone.id, form_data) : await ph(form_data);
    this._cacheZone(result);
    this.zone_tree_children_cache.set({});
    this.selected_zone.set(result);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVED"));
    return result;
  }
  async removeZone(zone) {
    if (!zone?.id || !zone.tags?.includes("signage"))
      return false;
    if (!this._requirePermission(this.can_manage_zones(), i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES")))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_SIGNAGE_ZONE_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: zone.display_name || zone.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    await fh(zone.id);
    result.close();
    this._zone_overrides.update((overrides) => {
      const next = __spreadValues({}, overrides);
      delete next[zone.id];
      return next;
    });
    this.zone_tree_children_cache.set({});
    this.zone_tree_expanded.update((expanded) => {
      const next = __spreadValues({}, expanded);
      delete next[zone.id];
      return next;
    });
    if (this.selected_zone()?.id === zone.id) {
      this.selected_zone.set(null);
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVED"));
    return true;
  }
  async addDisplay() {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_DISPLAYS")))
      return null;
    const default_zone_ids = await this._defaultDisplayZoneIds();
    const { DisplayEditModalComponent } = await import("./display-edit-modal.component-X3HBYXGW.js");
    const ref = this._dialog.open(DisplayEditModalComponent, {
      data: {
        display: new Rs({}),
        default_zone_ids,
        roots: this.root_zones,
        zones: this.all_zones,
        load_children: (parent_id) => this.zoneChildren(parent_id),
        query_zones: (search, parent_id) => this.querySelectableZones(search, parent_id),
        onAdd: (data) => Sa(data),
        onEdit: (id, data) => ka(id, data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return null;
    this._addDisplayToList(result);
    this.selected_display.set(result);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_SAVED"));
    return result;
  }
  async editDisplay(display) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_DISPLAYS")))
      return null;
    const { DisplayEditModalComponent } = await import("./display-edit-modal.component-X3HBYXGW.js");
    const ref = this._dialog.open(DisplayEditModalComponent, {
      data: {
        display,
        default_zone_ids: [],
        roots: this.root_zones,
        zones: this.all_zones,
        load_children: (parent_id) => this.zoneChildren(parent_id),
        query_zones: (search, parent_id) => this.querySelectableZones(search, parent_id),
        onAdd: (data) => Sa(data),
        onEdit: (id, data) => ka(id, data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return null;
    this._addDisplayToList(result);
    this.selected_display.set(result);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_SAVED"));
    return result;
  }
  async removeDisplay(display) {
    if (!display?.id)
      return false;
    if (!this._requirePermission(this.can_delete_displays(), i18n("SIGNAGE_MANAGER.SVC_NO_DELETE_DISPLAYS")))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_DISPLAY_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: display.display_name || display.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    const used_elsewhere = !!(display.map_id || display.email || display.modules.length || display.module_list.length);
    if (used_elsewhere) {
      await ka(display.id, { signage: false });
    } else {
      await Aa(display.id);
    }
    result.close();
    this._removeDisplayFromList(display.id);
    if (this.selected_display()?.id === display.id) {
      this.selected_display.set(null);
    }
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED"));
    return true;
  }
  async _defaultDisplayZoneIds() {
    const group_id = this._api_group_id();
    const active_zone = this._org.building || this._org.region || this._org.organisation;
    let roots = group_id ? this.root_zones() : active_zone ? [active_zone] : [];
    if (group_id && !roots.length) {
      const result = await ah({
        group_id,
        limit: 500,
        include_children_count: true
      }).catch(() => null);
      roots = (result?.data || []).map(decodeEntityNames);
    }
    const known_zones = [
      ...this.all_zones(),
      this._org.organisation,
      this._org.region,
      this._org.building
    ].filter((zone) => !!zone?.id);
    return displayZoneIds(roots, known_zones, async (zone_id) => lh(zone_id).catch(() => null));
  }
  async addDisplayToZone(zone) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { DisplaySelectModalComponent } = await import("./display-select-modal.component-VCKM2F7Z.js");
    const ref = this._dialog.open(DisplaySelectModalComponent, {
      data: { zone_id: zone.id },
      panelClass: "mobile-fullscreen"
    });
    const display_id = await dialogClosed(ref);
    if (!display_id)
      return;
    const display = this.displays().find((d) => d.id === display_id) || await va(display_id).catch(() => null);
    if (!display)
      return;
    if (display.zones?.includes(zone.id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE"));
      return;
    }
    const zones = [...display.zones || [], zone.id];
    const updated = await ka(display.id, { zones, version: display.version }, "patch");
    this._cacheDisplay(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_ZONE"));
  }
  async removeDisplayFromZone(zone, display_id) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const displays = this.displays();
    const display = displays.find((d) => d.id === display_id);
    if (!display)
      return;
    const zones = (display.zones || []).filter((id) => id !== zone.id);
    const updated = await ka(display.id, { zones, version: display.version }, "patch");
    this._cacheDisplay(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_ZONE"));
  }
  async addPlaylistToDisplay(display) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-DNCPLYGY.js");
    const ref = this._dialog.open(PlaylistSelectModalComponent, {
      data: { display_id: display.id },
      panelClass: "mobile-fullscreen"
    });
    const playlist_id = await dialogClosed(ref);
    if (!playlist_id)
      return;
    if (display.playlists?.includes(playlist_id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY"));
      return;
    }
    if (!await this._confirmTakeoverChange({
      playlist_id,
      display_id: display.id
    }))
      return;
    const playlists = [...display.playlists || [], playlist_id];
    const updated = await ka(display.id, { playlists, version: display.version }, "patch").catch(() => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR"));
      return null;
    });
    if (!updated)
      return;
    this._cacheDisplay(updated);
    this.selected_display.set(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_DISPLAY"));
  }
  async addDisplayToPlaylist(playlist) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { DisplaySelectModalComponent } = await import("./display-select-modal.component-VCKM2F7Z.js");
    const ref = this._dialog.open(DisplaySelectModalComponent, {
      data: { playlist_id: playlist.id },
      panelClass: "mobile-fullscreen"
    });
    const display_id = await dialogClosed(ref);
    if (!display_id)
      return;
    const display = this.displays().find((d) => d.id === display_id) || await va(display_id).catch(() => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR"));
      return null;
    });
    if (!display)
      return;
    if (display.playlists?.includes(playlist.id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY"));
      return;
    }
    if (!await this._confirmTakeoverChange({
      playlist_id: playlist.id,
      playlist,
      display_id: display.id
    }))
      return;
    const playlists = [...display.playlists || [], playlist.id];
    const updated = await ka(display.id, { playlists, version: display.version }, "patch").catch(() => {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR"));
      return null;
    });
    if (!updated)
      return;
    this._cacheDisplay(updated);
    if (this.selected_display()?.id === display.id) {
      this.selected_display.set(updated);
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_PLAYLIST"));
  }
  async addZoneToPlaylist(playlist) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { ZoneSelectModalComponent } = await import("./zone-select-modal.component-JQQOLRTS.js");
    const ref = this._dialog.open(ZoneSelectModalComponent, {
      data: { playlist_id: playlist.id },
      panelClass: "mobile-fullscreen"
    });
    const zone_id = await dialogClosed(ref);
    if (!zone_id)
      return;
    const zone = this.zones().find((z) => z.id === zone_id) || await lh(zone_id).catch(() => null);
    if (!zone)
      return;
    if (zone.playlists?.includes(playlist.id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE"));
      return;
    }
    if (!await this._confirmTakeoverChange({
      playlist_id: playlist.id,
      playlist,
      zone_id: zone.id
    }))
      return;
    const playlists = [...zone.playlists || [], playlist.id];
    const updated = await dh(zone.id, { playlists, version: zone.version }, "patch");
    this._cacheZone(updated);
    if (this.selected_zone()?.id === zone.id) {
      this.selected_zone.set(updated);
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ZONE_ADDED_PLAYLIST"));
  }
  async removeDisplayFromPlaylist(playlist, display) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const playlists = (display.playlists || []).filter((id) => id !== playlist.id);
    const updated = await ka(display.id, { playlists, version: display.version }, "patch");
    this._cacheDisplay(updated);
    if (this.selected_display()?.id === display.id) {
      this.selected_display.set(updated);
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_PLAYLIST"));
  }
  async removeZoneFromPlaylist(playlist, zone) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const playlists = (zone.playlists || []).filter((id) => id !== playlist.id);
    const updated = await dh(zone.id, { playlists, version: zone.version }, "patch");
    this._cacheZone(updated);
    if (this.selected_zone()?.id === zone.id) {
      this.selected_zone.set(updated);
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ZONE_REMOVED_PLAYLIST"));
  }
  async removePlaylistFromDisplay(display, playlist_id) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const playlists = (display.playlists || []).filter((id) => id !== playlist_id);
    const updated = await ka(display.id, { playlists, version: display.version }, "patch");
    this._cacheDisplay(updated);
    this.selected_display.set(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_DISPLAY"));
  }
  _getMediaMetadata(file) {
    return new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      if (getVideoContainer(file)) {
        const video = document.createElement("video");
        video.src = url;
        video.addEventListener("loadedmetadata", () => {
          resolve({
            is_landscape: video.videoWidth > video.videoHeight,
            duration: video.duration,
            width: video.videoWidth,
            height: video.videoHeight
          });
          URL.revokeObjectURL(url);
        });
        video.load();
      } else {
        const img = new Image();
        img.onload = () => {
          resolve({
            is_landscape: img.width > img.height,
            duration: 0,
            width: img.width,
            height: img.height
          });
          URL.revokeObjectURL(url);
        };
        img.src = url;
      }
    });
  }
  _uploadThumbnailImage(data_url, name) {
    const file_name = `thumb+${(name || "media").replace(/[^a-zA-Z0-9_-]/g, "_")}.jpg`;
    return this._uploads.uploadFileToCompletion(dataURLtoFile(data_url, file_name)).catch(() => {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_UPLOAD_FAILED"));
      return "";
    });
  }
  /**
   * Scale an image the user picked down to a thumbnail data URL. Webpages
   * and plugins have no file to capture a frame from, and a cross origin
   * page cannot be rendered to a canvas, so the image is supplied by hand.
   */
  async generateThumbnailImage(file) {
    if (!file || !isImageSourceFile(file)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_NOT_IMAGE"));
      return "";
    }
    const image = await this._normalizeImageUpload(file);
    const thumbnail = await this._generateThumbnail(image, 1280, 720).catch(() => "");
    if (!thumbnail) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED"));
    }
    return thumbnail;
  }
  async _generateThumbnail(file, max_width, max_height) {
    if (getVideoContainer(file)) {
      return this._generateVideoThumbnail(file, max_width, max_height);
    } else if (isSupportedImageFile(file)) {
      return this._generateImageThumbnail(file, max_width, max_height);
    }
    return "";
  }
  async _generateImageThumbnail(file, max_width, max_height) {
    const source = await this._decodeImageSource(file);
    const { width, height } = this._imageSourceSize(source, max_width, max_height);
    try {
      return this._generateThumbnailFromResource(source, width, height, max_width, max_height);
    } finally {
      if (source instanceof ImageBitmap)
        source.close();
    }
  }
  /**
   * Decode the file completely before anything paints it. `load` on an
   * `<img>` only promises the bytes arrived, not that a frame is ready, and
   * browsers differ on when that becomes true.
   */
  async _decodeImageSource(file) {
    if (typeof createImageBitmap === "function") {
      try {
        const bitmap = await createImageBitmap(file);
        if (bitmap.width > 0 && bitmap.height > 0)
          return bitmap;
        bitmap.close();
      } catch {
      }
    }
    const image = await this._loadImage(file);
    if (typeof image.decode === "function") {
      await image.decode().catch(() => void 0);
    }
    return image;
  }
  /**
   * An SVG carrying no intrinsic size reports zero dimensions in Firefox
   * while Chrome substitutes a default, which yields a zero sized canvas and
   * a blank thumbnail. Fall back to the target box in that case.
   */
  _imageSourceSize(source, max_width, max_height) {
    const width = source.naturalWidth || source.width || 0;
    const height = source.naturalHeight || source.height || 0;
    if (width > 0 && height > 0)
      return { width, height };
    return { width: max_width, height: max_height };
  }
  async _convertImageToWebp(file) {
    const image = await this._loadImage(file);
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE"));
    ctx.drawImage(image, 0, 0);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", 0.92));
    if (!blob)
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE"));
    return new File([blob], this._replaceFileExtension(file.name, "webp"), {
      type: "image/webp",
      lastModified: file.lastModified
    });
  }
  _loadImage(file) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const url = URL.createObjectURL(file);
      image.onload = () => {
        URL.revokeObjectURL(url);
        resolve(image);
      };
      image.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE")));
      };
      image.src = url;
    });
  }
  _replaceFileExtension(file_name, next_extension) {
    return file_name.replace(/\.[^.]+$/, "") + `.${next_extension}`;
  }
  _mediaValidationOptions() {
    return {
      allow_extended_video_codecs: !!this._settings.get("app.media_allow_extended_video_codecs")
    };
  }
  _generateVideoThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      const url = URL.createObjectURL(file);
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      let settled = false;
      const cleanup = () => {
        clearTimeout(timer);
        URL.revokeObjectURL(url);
        video.removeAttribute("src");
        video.load();
      };
      const capture = () => {
        if (settled)
          return;
        settled = true;
        const image = this._generateThumbnailFromResource(video, video.videoWidth, video.videoHeight, max_width, max_height);
        cleanup();
        resolve(image);
      };
      const fail = (error) => {
        if (settled)
          return;
        settled = true;
        cleanup();
        reject(error);
      };
      const timer = setTimeout(() => fail(new Error("Timed out generating video thumbnail")), VIDEO_THUMBNAIL_TIMEOUT);
      video.onseeked = capture;
      video.onloadeddata = () => {
        const duration = Number.isFinite(video.duration) ? video.duration : 0;
        const target = duration ? Math.min(VIDEO_THUMBNAIL_OFFSET, duration / 2) : VIDEO_THUMBNAIL_OFFSET;
        if (video.currentTime === target) {
          capture();
          return;
        }
        video.currentTime = target;
      };
      video.onerror = () => fail(new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE")));
      video.src = url;
    });
  }
  _generateThumbnailFromResource(data, source_width, source_height, max_width, max_height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let thumbnail_width = source_width;
    let thumbnail_height = source_height;
    const aspect_ratio = thumbnail_width / thumbnail_height;
    if (thumbnail_width > max_width) {
      thumbnail_width = max_width;
      thumbnail_height = thumbnail_width / aspect_ratio;
    }
    if (thumbnail_height > max_height) {
      thumbnail_height = max_height;
      thumbnail_width = thumbnail_height * aspect_ratio;
    }
    const width = Math.max(1, Math.round(thumbnail_width));
    const height = Math.max(1, Math.round(thumbnail_height));
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(data, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg");
  }
  static {
    this.\u0275fac = function SignageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageService, factory: _SignageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  MEDIA_SORTS,
  MEDIA_TYPE_FILTERS,
  MEDIA_EXPIRY_FILTERS,
  DEFAULT_MEDIA_VIEW,
  DAY_COUNT,
  MINUTES_PER_DAY,
  buildScheduleBlocks,
  buildDisplayScheduleAssignments,
  buildZoneScheduleAssignments,
  CONFLICT_WINDOW_DAYS,
  SIGNAGE_FEATURES,
  SIGNAGE_FEATURE_IDS,
  signageGroupFeatures,
  EDGE_BAR_HEIGHT_PC,
  SIDEBAR_WIDTH_PC,
  FLOATING_DEFAULT_X_PC,
  FLOATING_DEFAULT_Y_PC,
  LAYOUT_POSITIONS,
  layoutPositionIcon,
  layoutPositionLabel,
  layoutRatioToPercentage,
  layoutPercentageToRatio,
  applyLayoutPositionDefaults,
  computeTemplateLayoutRects,
  isSameSignageTemplate,
  dialogClosed,
  SignageService
};
//# debugId=ee6fdaba-82bc-54f9-8bc6-5be57d7182e3
//# sourceMappingURL=chunk-TK62XSGF.js.map

import {
  createScheduleMaskFilter,
  cronDaySlots,
  cronParts,
  doesCronMatchDay,
  fromUnixTime,
  isPlayOnceSchedule,
  playOnceStart,
  playlistExpiredAt
} from "./chunk-AQZI3XHT.js";
import {
  querySignageDisplays
} from "./chunk-VSXK2O7T.js";
import {
  PAGE_SIZE,
  SignageContextService,
  queryAll
} from "./chunk-6HBHYQGE.js";
import {
  $h,
  Bh,
  Jh,
  addDays,
  differenceInCalendarDays,
  i18n,
  isSameDay,
  nl,
  startOfDay
} from "./chunk-MIKPTNJX.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KVLX4QPU.js";
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
var MIN_VISIBLE_MINUTES = 15;
var DEFAULT_PLAYLIST_DURATION = 24 * 60;
var ALL_DAY_SCHEDULE = {
  play_cron: "0 0 * * *",
  play_period: MINUTES_PER_DAY
};
function playlistSchedules(playlist) {
  return playlist.schedules?.length ? playlist.schedules : [ALL_DAY_SCHEDULE];
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
function blockBase(start_minutes, duration_minutes) {
  return {
    start_minutes,
    duration_minutes,
    all_day: start_minutes === 0 && duration_minutes >= MINUTES_PER_DAY,
    label: duration_minutes ? formatTimeRange(start_minutes, duration_minutes) : i18n("SIGNAGE_MANAGER.PLAY_THROUGH_ONCE")
  };
}
function clockMinutes(day, date) {
  return differenceInCalendarDays(date, day) * MINUTES_PER_DAY + date.getHours() * 60 + date.getMinutes();
}
function earliestEnd(...values) {
  return Math.min(Infinity, ...values.filter((value) => !!value).map((value) => value * 1e3));
}
function playedRun(day, starts_at, duration, schedule, playlist) {
  const time = starts_at.getTime();
  const ends_at = earliestEnd(schedule.valid_until, playlist.valid_until);
  if (time < (schedule.valid_from || 0) * 1e3 || time > ends_at) {
    return null;
  }
  const start = clockMinutes(day, starts_at);
  const from = playlist.valid_from ? Math.max(start, clockMinutes(day, fromUnixTime(playlist.valid_from))) : start;
  if (!duration)
    return from === start ? blockBase(start, 0) : null;
  const run_end = time + duration * 6e4;
  let until = Math.max(start + duration, clockMinutes(day, new Date(run_end)));
  if (ends_at < run_end) {
    until = Math.min(until, clockMinutes(day, new Date(ends_at)));
  }
  return until > from ? blockBase(from, until - from) : null;
}
function scheduleStarts(schedule, slots, parts, day) {
  if (isPlayOnceSchedule(schedule)) {
    const at_date = playOnceStart(schedule);
    return at_date && isSameDay(day, at_date) ? [at_date] : [];
  }
  if (!parts || !doesCronMatchDay(parts, day))
    return [];
  return slots.map((slot) => {
    const starts_at = new Date(day);
    starts_at.setHours(0, slot, 0, 0);
    return starts_at;
  }).filter(
    // A clock time that a daylight saving change skips never plays.
    // A repeated time plays once, at the first occurrence, which is
    // the time that Date picks.
    (starts_at, index) => starts_at.getHours() * 60 + starts_at.getMinutes() === slots[index]
  );
}
function buildScheduleBlocks(assignments, days) {
  return assignments.flatMap((assignment, index) => generateScheduleBlocks(assignment, days, index));
}
function generateScheduleBlocks(assignment, days, palette_index) {
  const { playlist, source_label, source_type } = assignment;
  const colour = BLOCK_PALETTE[palette_index % BLOCK_PALETTE.length];
  const blocks = [];
  const schedules = playlistSchedules(playlist).map((schedule) => {
    const parts = cronParts(schedule.play_cron?.trim() || "0 0 * * *");
    return {
      schedule,
      parts,
      slots: parts ? cronDaySlots(parts) : [],
      duration: playPeriodMinutes(schedule),
      allows: createScheduleMaskFilter(schedule)
    };
  });
  for (let index = 0; index < days.length; index++) {
    const day = startOfDay(days[index]);
    for (const { schedule, parts, slots, duration, allows } of schedules) {
      for (const starts_at of scheduleStarts(schedule, slots, parts, day)) {
        if (!allows(starts_at))
          continue;
        const run = playedRun(day, starts_at, duration, schedule, playlist);
        if (!run)
          continue;
        blocks.push(__spreadProps(__spreadValues({}, run), {
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
function visibleMinutes(block) {
  return block.all_day ? MINUTES_PER_DAY : Math.max(MIN_VISIBLE_MINUTES, Math.min(block.duration_minutes, MINUTES_PER_DAY - block.start_minutes));
}
function clipToDay(block) {
  const start = (block.day_index - 1) * MINUTES_PER_DAY + block.start_minutes;
  const end = start + block.duration_minutes;
  if (start < 0 ? end <= 0 : start >= MINUTES_PER_DAY)
    return [];
  const visible_start = Math.max(0, start);
  const visible_end = Math.min(MINUTES_PER_DAY, end);
  return [
    __spreadProps(__spreadValues({}, block), {
      start_minutes: visible_start,
      duration_minutes: visible_end - visible_start,
      all_day: visible_start === 0 && visible_end >= MINUTES_PER_DAY
    })
  ];
}
function mergePlaylistBlocks(blocks) {
  const merged = [];
  const last_blocks = /* @__PURE__ */ new Map();
  const end = (block) => block.start_minutes + Math.max(1, block.duration_minutes);
  for (const block of blocks) {
    const key = `${block.playlist.id}|${block.takeover}`;
    const last = last_blocks.get(key);
    if (last && block.start_minutes <= end(last)) {
      const last_end = Math.min(MINUTES_PER_DAY, Math.max(end(last), end(block)));
      last.duration_minutes = last_end - last.start_minutes;
      last.all_day = last.start_minutes === 0 && last_end >= MINUTES_PER_DAY;
      last.label = formatTimeRange(last.start_minutes, last.duration_minutes);
      continue;
    }
    const copy = __spreadValues({}, block);
    merged.push(copy);
    last_blocks.set(key, copy);
  }
  return merged;
}
function buildDayTimelineBlocks(assignments, day) {
  const selected_day = startOfDay(day);
  const blocks = buildScheduleBlocks(assignments, [
    addDays(selected_day, -1),
    selected_day
  ]).flatMap(clipToDay).sort((left, right) => left.start_minutes - right.start_minutes || left.playlist.name.localeCompare(right.playlist.name));
  const lane_ends = [];
  const timeline_blocks = mergePlaylistBlocks(blocks).map((block) => {
    const block_end = block.start_minutes + visibleMinutes(block);
    let lane = lane_ends.findIndex((lane_end) => lane_end <= block.start_minutes);
    if (lane < 0)
      lane = lane_ends.push(block_end) - 1;
    else
      lane_ends[lane] = block_end;
    return __spreadProps(__spreadValues({}, block), { lane });
  });
  return {
    blocks: timeline_blocks,
    lane_count: Math.max(1, lane_ends.length)
  };
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
function wallClockDate(first_day, minutes) {
  const days = Math.floor(minutes / MINUTES_PER_DAY);
  const date = addDays(first_day, days);
  date.setHours(0, minutes - days * MINUTES_PER_DAY, 0, 0);
  return date;
}
var byStart = (a, b) => a.start - b.start;
var pairKey = ([a, b]) => [a.id, b.id].sort().join("|");
function mergeRuns(runs) {
  const merged = [];
  for (const run of runs) {
    const last = merged[merged.length - 1];
    if (last && run.start <= last.end) {
      last.end = Math.max(last.end, run.end);
    } else {
      merged.push(__spreadValues({}, run));
    }
  }
  return merged;
}
function findOverlaps(runs, playlist_id) {
  const overlaps = [];
  for (let i = 0; i < runs.length; i++) {
    const first = runs[i];
    for (let j = i + 1; j < runs.length && runs[j].start < first.end; j++) {
      const second = runs[j];
      if (first.playlist.id === second.playlist.id || playlist_id && first.playlist.id !== playlist_id && second.playlist.id !== playlist_id) {
        continue;
      }
      overlaps.push({
        playlists: [first.playlist, second.playlist],
        start: second.start,
        end: Math.min(first.end, second.end)
      });
    }
  }
  return overlaps;
}
function findTakeoverConflicts({ displays, zones, playlists, playlist_id, start = /* @__PURE__ */ new Date(), days = CONFLICT_WINDOW_DAYS }) {
  const first_day = startOfDay(start);
  const now = start.getHours() * 60 + start.getMinutes();
  const day_list = Array.from({ length: days + 1 }, (_, index) => addDays(first_day, index - 1));
  const takeover_playlists = playlists.filter((playlist) => playlist.enabled && hasTakeoverSchedule(playlist));
  const playlist_runs = /* @__PURE__ */ new Map();
  const takeoverRuns = (playlist) => {
    const cached = playlist_runs.get(playlist.id);
    if (cached)
      return cached;
    const runs = { timed: [], single_pass: [] };
    for (const block of buildScheduleBlocks([{ playlist }], day_list)) {
      if (!block.takeover)
        continue;
      const run_start = (block.day_index - 1) * MINUTES_PER_DAY + block.start_minutes;
      const run_end = run_start + Math.max(1, block.duration_minutes);
      if (run_end <= now)
        continue;
      runs[block.duration_minutes ? "timed" : "single_pass"].push({
        playlist,
        start: run_start,
        end: run_end
      });
    }
    runs.timed = mergeRuns(runs.timed.sort(byStart));
    runs.single_pass = mergeRuns(runs.single_pass.sort(byStart));
    playlist_runs.set(playlist.id, runs);
    return runs;
  };
  const set_overlaps = /* @__PURE__ */ new Map();
  const overlapsOf = (assigned) => {
    const key = assigned.map(({ id }) => id).sort().join("|");
    const cached = set_overlaps.get(key);
    if (cached)
      return cached;
    const runs = assigned.map(takeoverRuns);
    const seen_pairs = /* @__PURE__ */ new Set();
    const overlaps = [
      ...findOverlaps(runs.flatMap(({ timed }) => timed).sort(byStart), playlist_id),
      ...findOverlaps(runs.flatMap(({ single_pass }) => single_pass).sort(byStart), playlist_id)
    ].sort(byStart).filter(({ playlists: playlists2 }) => {
      const pair = pairKey(playlists2);
      if (seen_pairs.has(pair))
        return false;
      seen_pairs.add(pair);
      return true;
    });
    set_overlaps.set(key, overlaps);
    return overlaps;
  };
  const conflicts = [];
  for (const display of displays) {
    const assigned = buildDisplayScheduleAssignments(display, zones, takeover_playlists).map(({ playlist }) => playlist);
    if (assigned.length < 2 || playlist_id && !assigned.some(({ id }) => id === playlist_id)) {
      continue;
    }
    for (const overlap of overlapsOf(assigned)) {
      conflicts.push({
        display,
        playlists: overlap.playlists,
        starts_at: wallClockDate(first_day, overlap.start),
        ends_at: wallClockDate(first_day, overlap.end)
      });
    }
  }
  return conflicts;
}

// apps/signage-manager/src/app/signage-inventory.service.ts
var MAX_EXPIRED_MEDIA_CHECKS = 100;
var EXPIRED_MEDIA_CONCURRENCY = 6;
var INVENTORY_MAX_AGE = 60 * 1e3;
var SignageInventoryService = class _SignageInventoryService {
  constructor() {
    this._context = inject(SignageContextService);
    this.inventory_key = computed(
      () => ({
        can_query: this._context.canQueryLists(),
        group_id: this._context.api_group_id(),
        change: this._context.data_change()
      }),
      ...ngDevMode ? [{ debugName: "inventory_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._inventory = null;
  }
  /**
   * Every display, zone and playlist in the active group. The lists on
   * screen only hold the pages loaded so far, so checks that need the full
   * set use this instead.
   *
   * Callers share one load for each `inventory_key`, for at most
   * `INVENTORY_MAX_AGE`. This stops a full download for each page visit
   * and each takeover check.
   */
  loadSignageInventory() {
    const key = this.inventory_key();
    const cached = this._inventory;
    if (cached?.key === key && Date.now() - cached.loaded_at < INVENTORY_MAX_AGE) {
      return cached.request;
    }
    const request = this._fetchSignageInventory();
    this._inventory = { key, loaded_at: Date.now(), request };
    request.catch(() => {
      if (this._inventory?.request === request)
        this._inventory = null;
    });
    return request;
  }
  async _fetchSignageInventory() {
    if (!this._context.canQueryLists()) {
      return { displays: [], zones: [], playlists: [] };
    }
    const limit = PAGE_SIZE;
    const [displays, zones, playlists] = await Promise.all([
      queryAll(querySignageDisplays(__spreadProps(__spreadValues({}, this._context.orgZoneQueryParams({})), {
        limit,
        signage: true
      }))),
      queryAll($h(this._context.groupQueryParams({
        limit,
        tags: "signage"
      }))),
      queryAll(nl(this._context.orgZoneQueryParams({ limit })))
    ]);
    return { displays, zones, playlists };
  }
  /** Find content that needs attention, for the report page */
  async loadContentReport(now = Date.now()) {
    const [{ displays, zones, playlists }, expired_media_check] = await Promise.all([
      this.loadSignageInventory(),
      this._expiredMediaInPlaylists(now)
    ]);
    const zone_playlists = new Map(zones.map((zone) => [zone.id, zone.playlists || []]));
    const assigned_ids = new Set([...displays, ...zones].flatMap((item) => item.playlists || []));
    return {
      empty_displays: displays.filter((display) => !display.playlists?.length && !(display.zones || []).some((zone_id) => zone_playlists.get(zone_id)?.length)),
      unassigned_playlists: playlists.filter(({ id }) => !assigned_ids.has(id)),
      expired_playlists: playlists.filter((playlist) => assigned_ids.has(playlist.id) && !!playlistExpiredAt(playlist, now)),
      expired_media: expired_media_check.items,
      expired_media_unchecked: expired_media_check.unchecked,
      conflicts: findTakeoverConflicts({ displays, zones, playlists })
    };
  }
  /**
   * Expired media that is still in a playlist, read from the media show
   * route. Checks at most `MAX_EXPIRED_MEDIA_CHECKS` items, a few at a time.
   * @returns The items in use and the number of expired items not checked
   */
  async _expiredMediaInPlaylists(now) {
    const usage = [];
    if (!this._context.canQueryLists()) {
      return { items: usage, unchecked: 0 };
    }
    const media = await queryAll(Bh(this._context.orgZoneQueryParams({ limit: PAGE_SIZE })));
    const all_expired = media.filter((item) => !!item.valid_until && item.valid_until * 1e3 < now);
    const expired = all_expired.slice(0, MAX_EXPIRED_MEDIA_CHECKS);
    const query_params = this._context.groupQueryParams({});
    let next = 0;
    const check = async () => {
      while (next < expired.length) {
        const index = next++;
        const item = expired[index];
        try {
          const detail = await Jh(item.id, query_params);
          usage[index] = {
            media: item,
            playlists: detail.playlists || []
          };
        } catch {
        }
      }
    };
    await Promise.all(Array.from({ length: EXPIRED_MEDIA_CONCURRENCY }, check));
    return {
      items: usage.filter((item) => item?.playlists.length),
      unchecked: all_expired.length - expired.length
    };
  }
  static {
    this.\u0275fac = function SignageInventoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageInventoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageInventoryService, factory: _SignageInventoryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageInventoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  DAY_COUNT,
  MINUTES_PER_DAY,
  playlistSchedules,
  hasTakeoverSchedule,
  buildScheduleBlocks,
  visibleMinutes,
  buildDayTimelineBlocks,
  buildDisplayScheduleAssignments,
  buildZoneScheduleAssignments,
  CONFLICT_WINDOW_DAYS,
  findTakeoverConflicts,
  SignageInventoryService
};
//# debugId=6e9d4e87-9686-50b4-b688-50873686bed8
//# sourceMappingURL=chunk-EOBO3AIN.js.map

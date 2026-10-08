import {
  createScheduleMaskFilter,
  cronDaySlots,
  cronParts,
  doesCronMatchDay,
  fromUnixTime,
  isPlayOnceSchedule,
  playOnceStart,
  playlistAnimation,
  playlistExpiredAt,
  playlistItemScheduleMap,
  playlistMediaIds,
  playlistMediaItems,
  reorderPlaylistItemIds
} from "./chunk-CV4EWIBK.js";
import {
  querySignageDisplays
} from "./chunk-Y465EEIV.js";
import {
  openConfirmModal
} from "./chunk-Q3SROXQF.js";
import {
  PAGE_SIZE,
  SignageContextService,
  dialogClosed,
  queryAll,
  searchParam
} from "./chunk-RUR53MNN.js";
import {
  PagedList,
  byName,
  decodeEntityNames
} from "./chunk-P5YDCKEY.js";
import {
  OrganisationService
} from "./chunk-IDK2QKPP.js";
import {
  Bh,
  Fh,
  Injectable,
  Jh,
  Kh,
  MatDialog,
  Qh,
  Vh,
  Yh,
  Zh,
  _r,
  addDays,
  computed,
  debounced,
  differenceInCalendarDays,
  effect,
  format,
  fr,
  hh,
  i18n,
  il,
  inject,
  isSameDay,
  linkedSignal,
  mr,
  nl,
  notifyError,
  notifySuccess,
  notifyWarn,
  resource,
  rl,
  setClassMetadata,
  signal,
  sl,
  startOfDay,
  tl,
  untracked,
  wh,
  ɵɵdefineInjectable
} from "./chunk-VC4MJRPT.js";
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
  }
  /**
   * Fetch every display, zone and playlist in the active group. The lists
   * on screen only hold the pages loaded so far, so checks that need the
   * full set use this instead.
   */
  async loadSignageInventory() {
    if (!this._context.canQueryLists()) {
      return { displays: [], zones: [], playlists: [] };
    }
    const limit = PAGE_SIZE;
    const [displays, zones, playlists] = await Promise.all([
      queryAll(querySignageDisplays(__spreadProps(__spreadValues({}, this._context.orgZoneQueryParams({})), {
        limit,
        signage: true
      }))),
      queryAll(hh(this._context.groupQueryParams({
        limit,
        tags: "signage"
      }))),
      queryAll(Qh(this._context.orgZoneQueryParams({ limit })))
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
    const media = await queryAll(wh(this._context.orgZoneQueryParams({ limit: PAGE_SIZE })));
    const all_expired = media.filter((item) => !!item.valid_until && item.valid_until * 1e3 < now);
    const expired = all_expired.slice(0, MAX_EXPIRED_MEDIA_CHECKS);
    const query_params = this._context.groupQueryParams({});
    let next = 0;
    const check = async () => {
      while (next < expired.length) {
        const index = next++;
        const item = expired[index];
        try {
          const detail = await Fh(item.id, query_params);
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

// apps/signage-manager/src/app/playlists/signage-playlist.service.ts
var PLAYLIST_META_SESSION_KEY = "PlaceOS.SIGNAGE:playlist-meta-cache:v1";
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
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
var SignagePlaylistService = class _SignagePlaylistService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this._inventory_service = inject(SignageInventoryService);
    this.playlist_search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "playlist_search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_search_debounced = debounced(this.playlist_search_term, 400);
    this._playlist_cache = signal(
      {},
      ...ngDevMode ? [{ debugName: "_playlist_cache" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_cache_group = null;
    this._playlist_cache_change = null;
    this._playlist_list = new PagedList({
      sort: byName,
      on_page: (items) => this._playlist_cache.update((cache) => {
        const next = __spreadValues({}, cache);
        for (const item of items)
          next[item.id] = item;
        return next;
      })
    });
    this.playlists = computed(
      () => Object.values(this._playlist_cache()).sort(byName),
      ...ngDevMode ? [{ debugName: "playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlists_loading = this._playlist_list.loading;
    this.playlists_error = this._playlist_list.error;
    this.playlists_total = this._playlist_list.total;
    this.playlists_has_more = this._playlist_list.has_more;
    this._playlists_retry = signal(
      0,
      ...ngDevMode ? [{ debugName: "_playlists_retry" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._reload_playlists = effect(
      () => {
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._playlist_search_debounced.value().trim();
        const change = this._context.data_change();
        this._playlists_retry();
        untracked(() => {
          if (group_id !== this._playlist_cache_group || change !== this._playlist_cache_change) {
            this._playlist_cache_group = group_id;
            this._playlist_cache_change = change;
            this._playlist_cache.set({});
          }
          this._playlist_list.reset(initialised && can_query ? Qh(this._context.orgZoneQueryParams(__spreadValues({ limit: PAGE_SIZE }, searchParam(search)), group_id)) : null);
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_playlist" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this._context.group_switch,
      computation: () => null
    }));
    this._selected_playlist_debounced = debounced(this.selected_playlist, 300);
    this.selected_playlist_item = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_playlist_item" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this._context.group_switch,
      computation: () => null
    }));
    this.selected_playlist_item_index = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_playlist_item_index" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this._context.group_switch,
      computation: () => null
    }));
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
    this.filtered_playlists = this._playlist_list.items;
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
      () => this._metaFlags("approved"),
      ...ngDevMode ? [{ debugName: "playlist_approval_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_approval_requested_status = computed(
      () => this._metaFlags("approval_requested"),
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
          result[playlist_id] = (data.media_ids || []).map((id) => Bh(id));
        }
        return result;
      },
      ...ngDevMode ? [{ debugName: "playlist_thumbnail_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlists_by_id = signal(
      {},
      ...ngDevMode ? [{ debugName: "_playlists_by_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlists_by_id_key = "";
    this._tracked_ids = signal(
      [],
      ...ngDevMode ? [{ debugName: "_tracked_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_tracked_playlists = effect(
      () => {
        const key = `${this._context.api_group_id()}:${this._context.data_change()}`;
        const ids = this._tracked_ids().flatMap((source) => source());
        const cache = this._playlist_cache();
        if (this.playlists_loading())
          return;
        untracked(() => {
          if (key !== this._playlists_by_id_key) {
            this._playlists_by_id_key = key;
            this._playlists_by_id.set({});
          }
          const known = this._playlists_by_id();
          const missing = [...new Set(ids)].filter((id) => !cache[id] && !(id in known));
          if (!missing.length)
            return;
          const query_params = this._context.groupQueryParams({});
          this._playlists_by_id.update((state) => __spreadValues(__spreadValues({}, state), Object.fromEntries(missing.map((id) => [id, null]))));
          for (const id of missing) {
            Kh(id, query_params).then((playlist) => {
              if (key !== this._playlists_by_id_key)
                return;
              this._playlists_by_id.update((state) => __spreadProps(__spreadValues({}, state), {
                [id]: decodeEntityNames(playlist)
              }));
            }).catch(() => null);
          }
        });
      },
      ...ngDevMode ? [{ debugName: "_load_tracked_playlists" }] : (
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
    this._selected_playlist_id = computed(
      () => this._selected_playlist_debounced.value()?.id || "",
      ...ngDevMode ? [{ debugName: "_selected_playlist_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_media_items = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_playlist_media_items" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        playlist_id: this._selected_playlist_id(),
        playlist_change: this._playlist_change()
      }),
      loader: async ({ params }) => {
        const { playlist_id } = params;
        if (!playlist_id)
          return null;
        const result = await Yh(playlist_id);
        this._setPlaylistMediaState(playlist_id, result.items || [], {
          approved: result.approved,
          approval_requested: result.approval_requested,
          schedules: result.schedules
        });
        return result;
      }
    }));
    this.playlist_media_loading = computed(
      () => this._playlist_media_items.isLoading(),
      ...ngDevMode ? [{ debugName: "playlist_media_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_media_error = computed(
      () => this._playlist_media_items.status() === "error",
      ...ngDevMode ? [{ debugName: "playlist_media_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_media_items = computed(
      () => playlistMediaItems(this._mediaList() || {}),
      ...ngDevMode ? [{ debugName: "playlist_media_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_item_schedules = computed(
      () => playlistItemScheduleMap(this._mediaList() || {}),
      ...ngDevMode ? [{ debugName: "playlist_item_schedules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_item_schedule_list = computed(
      () => this._mediaList()?.schedules || [],
      ...ngDevMode ? [{ debugName: "playlist_item_schedule_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_duplicating = signal(
      false,
      ...ngDevMode ? [{ debugName: "playlist_duplicating" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * Load the playlist page that failed again: the next page when some
   * pages are loaded, so they stay, otherwise the first page.
   */
  reloadPlaylists() {
    if (!this._playlist_list.retry()) {
      this._playlists_retry.update((count) => count + 1);
    }
  }
  loadMorePlaylists() {
    this._playlist_list.loadMore();
  }
  /**
   * Fetch a playlist that is not in the loaded pages, e.g. for a link to
   * it, and keep it with the loaded playlists.
   * @returns The playlist, or null when it cannot be loaded
   */
  async loadPlaylist(playlist_id) {
    if (!playlist_id)
      return null;
    try {
      const playlist = decodeEntityNames(await Kh(playlist_id, this._context.groupQueryParams({})));
      this._playlist_cache.update((cache) => __spreadProps(__spreadValues({}, cache), {
        [playlist.id]: playlist
      }));
      return playlist;
    } catch {
      return null;
    }
  }
  queryPlaylists(search = "") {
    if (!this._context.canQueryLists())
      return null;
    return Qh(__spreadValues(__spreadValues({}, this._context.orgZoneQueryParams({ limit: PAGE_SIZE })), searchParam(search)));
  }
  /**
   * Warn when a change would make two takeover playlists play at the same
   * time on a display, in the next few weeks.
   * @returns Whether to go ahead with the change
   */
  async confirmTakeoverChange(change) {
    const known = change.playlist || this.playlists().find(({ id }) => id === change.playlist_id);
    if (known && !hasTakeoverSchedule(known))
      return true;
    let inventory;
    try {
      inventory = await this._inventory_service.loadSignageInventory();
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
  /**
   * Fetch the playlists of a view that the loaded pages lack, such as the
   * playlists of the selected display. The ids are read in an effect, so
   * the fetch follows the signals that `ids` reads.
   */
  trackPlaylistIds(ids) {
    this._tracked_ids.update((list) => [...list, ids]);
  }
  /**
   * Playlists for a list of ids, from the loaded pages or fetched by id.
   * Only ids passed to `trackPlaylistIds` are fetched.
   */
  playlistsById(ids) {
    const cache = this._playlist_cache();
    const fetched = this._playlists_by_id();
    return [...new Set(ids)].map((id) => cache[id] || fetched[id]).filter((playlist) => !!playlist).sort(byName);
  }
  /** Load the items of the selected playlist again, e.g. after an error */
  reloadPlaylistMedia() {
    this._playlist_media_items.reload();
  }
  /** Media list of the selected playlist. Null while none is loaded. */
  _mediaList() {
    return this._playlist_media_items.hasValue() ? this._playlist_media_items.value() : null;
  }
  async addPlaylist() {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS"))
      return;
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-6PI3LU3S.js");
    const ref = this._dialog.open(PlaylistEditModalComponent, {
      data: {
        playlist: new mr({}),
        onAdd: (data) => this._addSignagePlaylist(data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this._context.changed();
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
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return;
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-6PI3LU3S.js");
    const ref = this._dialog.open(PlaylistEditModalComponent, {
      data: {
        playlist,
        group_id: this._context.api_group_id(),
        onEdit: (id, data) => Zh(id, data),
        beforeSave: (data) => this.confirmTakeoverChange({
          playlist_id: playlist.id,
          playlist: new mr(__spreadValues(__spreadValues({}, playlist), data))
        })
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      if (this.selected_playlist()?.id === playlist.id) {
        this.selected_playlist.set(result);
      }
      this._context.changed();
    }
  }
  async removePlaylist(playlist) {
    if (!playlist?.id)
      return;
    if (!this._context.requirePermission(this._context.can_delete(), "SIGNAGE_MANAGER.SVC_NO_DELETE_PLAYLISTS"))
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
    try {
      await Vh(playlist.id);
    } catch {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_PLAYLIST"));
      return;
    }
    if (this.selected_playlist()?.id === playlist.id) {
      this.selected_playlist.set(null);
      this.selected_playlist_item.set(null);
      this.selected_playlist_item_index.set(null);
    }
    this._removePlaylistMediaState(playlist.id);
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED"));
    result.close();
  }
  /**
   * Copy a playlist with its settings, items and item schedules. The copy
   * starts unapproved and is not assigned to any display or zone. When a
   * step fails, the partial copy is removed.
   * @returns The new playlist, or null when no copy was made
   */
  async duplicatePlaylist(playlist) {
    if (!playlist?.id || this.playlist_duplicating())
      return null;
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS"))
      return null;
    this.playlist_duplicating.set(true);
    let copy = null;
    try {
      const list = await Yh(playlist.id);
      copy = await this._addSignagePlaylist({
        name: i18n("SIGNAGE_MANAGER.COPY_NAME", {
          name: playlist.name
        }),
        description: playlist.description,
        enabled: playlist.enabled,
        distribution: playlist.distribution,
        random: playlist.random,
        default_animation: playlistAnimation(playlist),
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
          await il(copy.id, {
            item_id: schedule.item_id,
            schedules: schedule.schedules
          });
        }
      } else {
        await sl(copy.id, list.items || []);
        for (const schedule of list.schedules || []) {
          if (!schedule.item_id || !schedule.schedules?.length) {
            continue;
          }
          await rl(copy.id, schedule.item_id, {
            item_id: schedule.item_id,
            schedules: schedule.schedules
          });
        }
      }
      this._context.changed();
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATED"));
      return copy;
    } catch {
      if (copy?.id) {
        await Vh(copy.id).catch(() => this._context.changed());
      }
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATE_ERROR"));
      return null;
    } finally {
      this.playlist_duplicating.set(false);
    }
  }
  async sharePlaylist(playlist) {
    if (!playlist?.id)
      return;
    await this._context.shareItems("playlists", [playlist.id]);
  }
  async approvePlaylist(playlist) {
    if (!playlist?.id)
      return;
    if (!this._context.requirePermission(this._context.can_approve(), "SIGNAGE_MANAGER.SVC_NO_APPROVE_PLAYLISTS"))
      return;
    const { PlaylistApproveModalComponent } = await import("./playlist-approve-modal.component-D67VXLEK.js");
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
    if (this._context.can_approve()) {
      await this.approvePlaylist(playlist);
      return;
    }
    let approvers = [];
    let group = null;
    this.playlist_approval_request_loading.set(true);
    try {
      [group] = await this._context.groupsHolding(playlist.id, (group_id) => Qh({ group_id, limit: 500 }));
      if (!group) {
        notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_PLAYLIST"));
        return;
      }
      approvers = await nl(group.group.id) || [];
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_APPROVERS"));
    } finally {
      this.playlist_approval_request_loading.set(false);
    }
    if (!group)
      return;
    const { PlaylistRequestApprovalModalComponent } = await import("./playlist-request-approval-modal.component-CRWAKZ6R.js");
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
    try {
      await tl(playlist.id, group.group.id, result.message || "", result.approver_id || "");
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REQUEST_APPROVAL"));
      return;
    }
    this.setPlaylistApprovalStatus(playlist.id, false, true);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_APPROVAL_REQUESTED"));
  }
  async removeMediaFromPlaylist(playlist_id, playlist_item_id, item_index) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return;
    const previous = this._mediaList();
    let media_list;
    let new_items;
    try {
      media_list = await Yh(playlist_id);
      new_items = [...media_list.items || []];
      if (typeof item_index === "number" && new_items[item_index] === playlist_item_id) {
        new_items.splice(item_index, 1);
      } else {
        const index = new_items.indexOf(playlist_item_id);
        if (index < 0)
          return;
        new_items.splice(index, 1);
      }
      this._showPlaylistMedia(playlist_id, media_list, new_items);
      await sl(playlist_id, new_items);
    } catch {
      this._showPlaylistMedia(playlist_id, previous);
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_PLAYLIST_ITEMS"));
      return;
    }
    this._setPlaylistMediaState(playlist_id, new_items, {
      approved: false,
      schedules: media_list.schedules
    });
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ITEM_REMOVED"));
    this._context.changed();
  }
  async removeMediaItemsFromPlaylist(playlist_id, selected_items) {
    const playlist_items = selected_items.filter((item) => !!item.id && item.index >= 0);
    if (!playlist_id || !playlist_items.length)
      return false;
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return false;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_ITEMS_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_SELECTED_PLAYLIST_ITEMS", { count: playlist_items.length }, playlist_items.length),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    const previous = this._mediaList();
    let media_list;
    const new_items = [];
    let removed_count = 0;
    try {
      media_list = await Yh(playlist_id);
      new_items.push(...media_list.items || []);
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
      this._showPlaylistMedia(playlist_id, media_list, new_items);
      await sl(playlist_id, new_items);
    } catch {
      this._showPlaylistMedia(playlist_id, previous);
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_PLAYLIST_ITEMS"));
      return false;
    }
    this._setPlaylistMediaState(playlist_id, new_items, {
      approved: false,
      schedules: media_list.schedules
    });
    const selected_index = this.selected_playlist_item_index();
    if (selected_index !== null && playlist_items.some((item) => item.index === selected_index)) {
      this.selected_playlist_item.set(null);
      this.selected_playlist_item_index.set(null);
    }
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_ITEMS_REMOVED", { count: removed_count }, removed_count));
    this._context.changed();
    result.close();
    return true;
  }
  /**
   * Save a new order of the shown playlist items. The list shows the new
   * order at once and goes back to the old order when the save fails.
   * @param media_ids Ids of the shown items, in the new order
   */
  async reorderPlaylistMedia(playlist_id, media_ids) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return;
    const previous = this._mediaList();
    const loaded = this._selected_playlist_id() === playlist_id;
    const items = reorderPlaylistItemIds(loaded && previous?.items || [], media_ids);
    this._showPlaylistMedia(playlist_id, previous, items);
    try {
      await sl(playlist_id, items);
    } catch {
      this._showPlaylistMedia(playlist_id, previous);
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REORDER_PLAYLIST"));
      return;
    }
    this._setPlaylistMediaState(playlist_id, items, { approved: false });
  }
  /**
   * Show a media list for the selected playlist before the server confirms
   * it, so the items do not reload. Does nothing for other playlists.
   * @param items Item ids to show in place of the ones in the list
   */
  _showPlaylistMedia(playlist_id, list, items) {
    if (!list || this._selected_playlist_id() !== playlist_id)
      return;
    this._playlist_media_items.set(items ? new fr(__spreadProps(__spreadValues({}, list), { items })) : list);
  }
  async editPlaylistItemSchedules(items) {
    const playlist = this.selected_playlist();
    const schedule_items = items.filter((item) => !!item?.item_id && !!(item.id || item.item_id));
    if (!playlist?.id || !schedule_items.length)
      return false;
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return false;
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-CFBAHHXG.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: schedule_items[0],
        save: (_schedule_id, schedules) => Promise.all(schedule_items.map((item) => rl(playlist.id, item.id || item.item_id, {
          item_id: item.item_id,
          schedules
        })))
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this._playlist_change.set(Date.now());
      this._context.changed();
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
    this._context.changed();
  }
  async _scheduleMediaForDistributionPlaylist(playlist_id, media_id, media) {
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-CFBAHHXG.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: new _r({
          item_id: media_id,
          media
        }),
        save: async (item_id, schedules) => {
          const media_list = await il(playlist_id, {
            item_id,
            schedules
          });
          this._setPlaylistMediaState(playlist_id, media_list.items || [], { approved: false, schedules: media_list.schedules });
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
  _addSignagePlaylist(form_data) {
    return Jh(form_data, this._context.groupQueryParams({}));
  }
  async _updatePlaylistMedia(playlist_id, list) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return;
    await sl(playlist_id, list);
    this._setPlaylistMediaState(playlist_id, list, { approved: false });
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED"));
    this._playlist_change.set(Date.now());
  }
  /**
   * The playlist record, from the loaded pages or fetched by ID. Pickers
   * search the backend, so their playlist may not be in the loaded pages.
   * @throws When the playlist cannot be loaded
   */
  async _playlistRecord(playlist_id) {
    const playlist = this._playlist_cache()[playlist_id] || await this.loadPlaylist(playlist_id);
    if (!playlist)
      throw new Error(`Playlist ${playlist_id} not found`);
    return playlist;
  }
  /**
   * Add media to the end of a playlist. A distribution playlist asks for
   * the schedule of the media first. Shows an error when the add fails.
   * @param media Record of the media, shown in the schedule modal
   */
  async addMediaToPlaylist(playlist_id, media_id, media) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return;
    try {
      const [playlist, media_list] = await Promise.all([
        this._playlistRecord(playlist_id),
        Yh(playlist_id)
      ]);
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
      if (playlist.distribution) {
        await this._scheduleMediaForDistributionPlaylist(playlist_id, media_id, media);
        return;
      }
      await this._updatePlaylistMedia(playlist_id, [
        ...media_list.items || [],
        media_id
      ]);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_ADD_PLAYLIST_ITEMS"));
    }
  }
  /**
   * Add media items that the playlist does not hold yet to its end.
   * Shows an error when the add fails.
   * @param media Records of the media, shown in the schedule modal of a
   * distribution playlist
   * @returns Whether the media was added
   */
  async addMediaItemsToPlaylist(playlist_id, media_ids, media = []) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return false;
    const unique_media_ids = [...new Set(media_ids)].filter(Boolean);
    if (!playlist_id || !unique_media_ids.length)
      return false;
    try {
      const [playlist, media_list] = await Promise.all([
        this._playlistRecord(playlist_id),
        Yh(playlist_id)
      ]);
      const existing_items = media_list.items || [];
      const new_media_ids = unique_media_ids.filter((id) => !existing_items.includes(id));
      if (!new_media_ids.length) {
        notifyWarn(i18n("SIGNAGE_MANAGER.SVC_MEDIA_ALREADY_IN"));
        return false;
      }
      if (playlist.distribution) {
        for (const media_id of new_media_ids) {
          const added = await this._scheduleMediaForDistributionPlaylist(playlist_id, media_id, media.find(({ id }) => id === media_id));
          if (!added)
            return false;
        }
        return true;
      }
      await this._updatePlaylistMedia(playlist_id, [
        ...existing_items,
        ...new_media_ids
      ]);
      return true;
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_ADD_PLAYLIST_ITEMS"));
      return false;
    }
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
          const media = await Yh(next_playlist.id);
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
  /**
   * Keep the items and approval state of a playlist for its list row.
   * @param state Approval flags and item schedules. A flag that is not set
   * keeps its value, except that a local change (`approved: false`) also
   * clears the approval request.
   */
  _setPlaylistMediaState(playlist_id, item_ids, state = {}) {
    const { approved, approval_requested, schedules } = state;
    const schedule_map = playlistItemScheduleMap({
      schedules: schedules || this._mediaList()?.schedules
    });
    const media_ids = item_ids.map((id) => schedule_map.get(id)?.media?.id || id);
    const playlist = this.playlists().find((item) => item.id === playlist_id) || this.selected_playlist();
    const current_state = this._playlist_meta_state()[playlist_id];
    this._setPlaylistMeta(playlist_id, {
      media_ids: media_ids.slice(0, 3),
      item_ids,
      updated_at: current_state?.updated_at || playlist?.updated_at || Date.now(),
      approved: approved ?? current_state?.approved,
      approval_requested: approval_requested ?? (approved === false ? false : current_state?.approval_requested ?? false)
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
   * Remove media from the playlists that hold it, before the media is
   * deleted. Also checks cached playlists that list the media, in case the
   * media lookup failed.
   * @param media_ids Media to remove
   * @param playlist_ids Playlists that the media lookup found
   */
  async removeMediaFromPlaylists(media_ids, playlist_ids = []) {
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
      const list = await Yh(playlist_id);
      const current_items = list.items || [];
      const schedule_map = playlistItemScheduleMap(list);
      const updated_items = current_items.filter((id) => !removed_ids.has(schedule_map.get(id)?.media?.id || id));
      if (updated_items.length === current_items.length)
        continue;
      await sl(playlist_id, updated_items);
      this._setPlaylistMediaState(playlist_id, updated_items, {
        approved: false,
        schedules: list.schedules
      });
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
  /** Playlist IDs with a boolean meta flag, mapped to its value */
  _metaFlags(key) {
    const result = {};
    for (const [playlist_id, data] of Object.entries(this._playlist_meta_state())) {
      if (typeof data[key] === "boolean")
        result[playlist_id] = data[key];
    }
    return result;
  }
  static {
    this.\u0275fac = function SignagePlaylistService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignagePlaylistService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignagePlaylistService, factory: _SignagePlaylistService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePlaylistService, [{
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
  buildScheduleBlocks,
  visibleMinutes,
  buildDayTimelineBlocks,
  buildDisplayScheduleAssignments,
  buildZoneScheduleAssignments,
  CONFLICT_WINDOW_DAYS,
  SignageInventoryService,
  SignagePlaylistService
};
//# debugId=4c60b64a-9680-50a0-a815-3fefdd4b7fb9
//# sourceMappingURL=chunk-AT3FDUFG.js.map

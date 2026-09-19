import {
  decodeEntityNames
} from "./chunk-XASXFKEM.js";
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
} from "./chunk-442R65BD.js";
import {
  HydratedSignageTemplateMapping
} from "./chunk-LOC765HW.js";
import {
  loadAuthenticatedImage
} from "./chunk-VOXI3UVZ.js";
import {
  playlistItemScheduleMap,
  playlistMediaIds,
  playlistMediaItems
} from "./chunk-IROTSDQV.js";
import {
  OrganisationService,
  SettingsService,
  UploadsService,
  userSignal
} from "./chunk-SAAU3CSL.js";
import {
  $a,
  Bu,
  Eu,
  Fh,
  Fu,
  Gh,
  Gu,
  Hh,
  Injectable,
  Iu,
  Ju,
  Ka,
  Kh,
  Ku,
  Lh,
  MatDialog,
  Mh,
  Mu,
  Nh,
  Oh,
  Qh,
  Rs,
  Sl,
  Tu,
  Uu,
  V,
  Wh,
  Wu,
  Xh,
  Xt,
  Yh,
  Zh,
  Zu,
  _l,
  _r,
  ah,
  al,
  b,
  ba,
  computed,
  debounced,
  dh,
  dl,
  effect,
  el,
  f,
  fr,
  ga,
  gl,
  gr,
  hh,
  i18n,
  il,
  inject,
  jh,
  ju,
  ka,
  kl,
  lh,
  linkedSignal,
  ll,
  nl,
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarn,
  pl,
  resource,
  setClassMetadata,
  signal,
  sl,
  tl,
  u,
  uh,
  untracked,
  v,
  va,
  vl,
  wh,
  ws,
  yl,
  zh,
  ɵɵdefineInjectable
} from "./chunk-JABNH3I5.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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

// apps/signage-manager/src/app/signage-media-tags.util.ts
function sortTagNames(tags) {
  return [...tags].sort((a, b2) => a.localeCompare(b2));
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
    const tags = await Oh(query_params);
    return { tags: sortTagNames(tags), counts: {} };
  }
}

// apps/signage-manager/src/app/templates/template-layout.util.ts
var EDGE_BAR_HEIGHT_PC = 15;
var SIDEBAR_WIDTH_PC = 20;
var FLOATING_DEFAULT_X_PC = 50;
var FLOATING_DEFAULT_Y_PC = 50;
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
    request: jh
  },
  playlists: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE",
    success: "SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED",
    request: sl
  },
  templates: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE",
    success: "SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED",
    request: _l
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
    return groups.map(decodeEntityNames).sort((a, b2) => a.name.localeCompare(b2.name));
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
        return [...by_id.values()].sort((a, b2) => b2.created_at - a.created_at);
      });
      this._media_next = page.next;
      this._media_has_more.set(this._media_items().length < page.total);
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
        return [...by_id.values()].sort((a, b2) => a.name.localeCompare(b2.name));
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
        return [...by_id.values()].sort((a, b2) => a.name.localeCompare(b2.name));
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
    return ga(__spreadValues(__spreadProps(__spreadValues({}, this._orgZoneQueryParams({})), {
      limit: _SignageService.PAGE_SIZE,
      signage: true
    }), this._searchParam(search)));
  }
  queryPlaylists(search = "") {
    if (!this._canQueryLists())
      return null;
    return Gh(__spreadValues(__spreadValues({}, this._orgZoneQueryParams({ limit: _SignageService.PAGE_SIZE })), this._searchParam(search)));
  }
  queryMedia(search = "") {
    if (!this._canQueryLists())
      return null;
    return Mh(__spreadValues(__spreadValues({}, this._orgZoneQueryParams({ limit: _SignageService.PAGE_SIZE })), this._searchParam(search)));
  }
  async listApprovedTemplates() {
    if (!this._canQueryLists())
      return [];
    const result = await b({
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
    const result = await b({
      path: "signage/template_mappings",
      query_params: __spreadProps(__spreadValues({}, query_params), { limit: 1e4 }),
      fn: (data) => new HydratedSignageTemplateMapping(data)
    });
    return result.data;
  }
  querySelectableZones(search, parent_id) {
    if (!this._canQueryLists() || !parent_id || !search.trim())
      return null;
    return uh({
      q: search.trim(),
      parent_id,
      limit: 2500,
      include_children_count: true
    });
  }
  /** Zones a managed group can be given access to, not just signage ones */
  queryGroupZones(search = "") {
    const group = this.managed_group();
    return uh(__spreadValues(__spreadValues({
      limit: _SignageService.PAGE_SIZE
    }, group?.authority_id ? { authority_id: group.authority_id } : {}), this._searchParam(search)));
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
    const { data } = await uh({
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
          const result = await il(this._orgZoneQueryParams({
            limit: 500,
            plugin_type
          }));
          return (result.data || []).filter((plugin) => plugin.enabled).map(decodeEntityNames).sort((a, b2) => a.name.localeCompare(b2.name));
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
    this.templates_enabled = this._settings.signal("templates_enabled", false);
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
          return groups.map(decodeEntityNames).sort((a, b2) => a.group.name.localeCompare(b2.group.name));
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
          const { data } = await Fu({
            group_id: params.group_id,
            limit: 1e3
          });
          return data.map(decodeEntityNames).sort((a, b2) => (a.user?.name || a.user_id).localeCompare(b2.user?.name || b2.user_id));
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
          const { data } = await Wu({
            group_id: params.group_id,
            limit: 200
          });
          return data.map(decodeEntityNames).sort((a, b2) => (a.zone?.name || a.zone_id).localeCompare(b2.zone?.name || b2.zone_id));
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
    this._media_items = signal(
      [],
      ...ngDevMode ? [{ debugName: "_media_items" }] : (
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
    this.media = this._media_items.asReadonly();
    this.media_loading = this._media_loading.asReadonly();
    this.media_has_more = this._media_has_more.asReadonly();
    this._reload_media = effect(
      () => {
        const initialised = this._org.initialised();
        const can_query = this._can_query_group_data();
        const group_id = this._api_group_id_debounced.value();
        this._change();
        untracked(() => {
          const token = ++this._media_token;
          this._media_items.set([]);
          this._media_next = null;
          this._media_has_more.set(false);
          if (!initialised || !can_query)
            return;
          this._fetchMediaPage(Mh(this._orgZoneQueryParams({ limit: _SignageService.PAGE_SIZE }, group_id)), token);
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_media = computed(
      () => {
        const term = this.search_term().trim().toLowerCase();
        const media = this.media();
        if (!term)
          return media;
        return media.filter((item) => item.name.toLowerCase().includes(term) || (item.tags || []).some((tag) => tag.toLowerCase().includes(term)));
      },
      ...ngDevMode ? [{ debugName: "filtered_media" }] : (
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
      () => Object.values(this._playlist_cache()).sort((a, b2) => a.name.localeCompare(b2.name)),
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
          this._fetchPlaylistPage(Gh(this._orgZoneQueryParams(__spreadValues({
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
          this._fetchTemplatePage(al(this._groupQueryParams(__spreadValues({
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
          this._fetchDisplayPage(ga(__spreadValues(__spreadProps(__spreadValues({}, this._orgZoneQueryParams({}, group_id)), {
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
          const result = await uh(__spreadValues({
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
          const result = await uh(this._groupQueryParams({ limit: 500, include_children_count: true }, params.group_id));
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
          const result = await uh(__spreadValues({
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
    this.plugins = computed(
      () => this._plugins.value() || [],
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
          const result = await uh({
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
          result[playlist_id] = (data.media_ids || []).map((id) => Lh(id));
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
        return this._display_items().map((display) => overrides[display.id] || display).sort((a, b2) => (a.display_name || a.name).localeCompare(b2.display_name || b2.name));
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
          const result = await Zh(playlist.id);
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
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-7XU3DGVV.js");
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
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-7XU3DGVV.js");
    const ref = this._dialog.open(PlaylistEditModalComponent, {
      data: {
        playlist,
        group_id: this._api_group_id(),
        onEdit: (id, data) => Wh(id, data)
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
    await Kh(playlist.id);
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
    const { PlaylistApproveModalComponent } = await import("./playlist-approve-modal.component-RQDXIV53.js");
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
      approvers = await Xh(group.group.id) || [];
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_APPROVERS"));
    } finally {
      this.playlist_approval_request_loading.set(false);
    }
    if (!group)
      return;
    const { PlaylistRequestApprovalModalComponent } = await import("./playlist-request-approval-modal.component-IXE5SW42.js");
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
    await Yh(playlist.id, group.group.id, result.message || "", result.approver_id || "");
    this.setPlaylistApprovalStatus(playlist.id, false, true);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_APPROVAL_REQUESTED"));
  }
  async removeMediaFromPlaylist(playlist_id, playlist_item_id, item_index) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    const media_list = await Zh(playlist_id);
    const new_items = [...media_list.items || []];
    if (typeof item_index === "number" && new_items[item_index] === playlist_item_id) {
      new_items.splice(item_index, 1);
    } else {
      const index = new_items.indexOf(playlist_item_id);
      if (index < 0)
        return;
      new_items.splice(index, 1);
    }
    await el(playlist_id, new_items);
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
    const media_list = await Zh(playlist_id);
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
    await el(playlist_id, new_items);
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
    await el(playlist_id, items);
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
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-GPRT2C6L.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: schedule_items[0],
        save: (_schedule_id, schedules) => Promise.all(schedule_items.map((item) => nl(playlist.id, item.id || item.item_id, {
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
    const media = this.media().find((item) => item.id === media_id);
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-GPRT2C6L.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: new fr({
          item_id: media_id,
          media
        }),
        save: async (item_id, schedules) => {
          const media_list = await tl(playlist_id, {
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
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES")))
      return;
    const { TemplateEditModalComponent } = await import("./template-edit-modal.component-VZ4PFRAY.js");
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
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES")))
      return;
    const { TemplateEditModalComponent } = await import("./template-edit-modal.component-VZ4PFRAY.js");
    const ref = this._dialog.open(TemplateEditModalComponent, {
      data: {
        template,
        group_id: this._api_group_id(),
        onEdit: (id, data) => dl(id, data)
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
    const { TemplateMappingModalComponent } = await import("./template-mapping-modal.component-3XZUWVFW.js");
    const ref = this._dialog.open(TemplateMappingModalComponent, {
      data: {
        mapping,
        templates,
        save: (template_id, schedule) => mapping ? kl(mapping.id, { schedule }) : vl(__spreadProps(__spreadValues({}, target), {
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
      await Sl(mapping.id);
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
    const { TemplateApproveModalComponent } = await import("./template-approve-modal.component-VXEDFF5I.js");
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
      approvers = await gl(group.group.id) || [];
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS"));
    } finally {
      this.template_approval_request_loading.set(false);
    }
    if (!group)
      return;
    const { TemplateRequestApprovalModalComponent } = await import("./template-request-approval-modal.component-3TLBBGZQ.js");
    const ref = this._dialog.open(TemplateRequestApprovalModalComponent, {
      data: { template, approvers },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return;
    await yl(template.id, group.group.id, result.message || "", result.approver_id || "");
    this.setTemplateApprovalStatus(template.id, false, true);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED"));
  }
  async removeTemplate(template) {
    if (!template?.id)
      return;
    if (!this._requirePermission(this.can_delete(), i18n("SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES")))
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
    await (group_id ? V(`${u()}/signage/templates/${encodeURIComponent(template.id)}?group_id=${encodeURIComponent(group_id)}`) : pl(template.id));
    if (this.selected_template()?.id === template.id) {
      this.selected_template.set(null);
      this.selected_template_layout_index.set(null);
    }
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED"));
    result.close();
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
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES")))
      return;
    try {
      const layouts = this.template_layout_draft().map(applyLayoutPositionDefaults);
      const response = await dl(template.id, {
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
    return ll(form_data, group_id ? { group_id } : void 0);
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
  async saveSignageGroup(group, data) {
    const managed_group_id = group.id || data.parent_id || "";
    if (!this.canManageSignageGroup(managed_group_id)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP"));
      return null;
    }
    const payload = __spreadProps(__spreadValues(__spreadValues({}, group), data), {
      subsystems: Array.from(/* @__PURE__ */ new Set([...group.subsystems || [], "signage"]))
    });
    const result = await (group.id ? Eu(group.id, payload) : Uu(payload)).catch((error) => {
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
    await Mu(group.id).catch((error) => {
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
    const { data } = await Ka(__spreadValues({
      q: search,
      limit: 20
    }, group?.authority_id ? { authority_id: group.authority_id } : {}));
    return data;
  }
  async addManagedGroupUser(user) {
    const group_id = this.managed_group_id();
    if (!user?.id || !this.canManageSignageGroup(group_id))
      return;
    await ju({
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
    await Gu(item.user_id, item.group_id, {
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
    await Bu(item.user_id, item.group_id).catch((error) => {
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
    await Ku({
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
    await Zu(item.group_id, item.zone_id, {
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
    await Ju(item.group_id, item.zone_id).catch((error) => {
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
    const result = await retryMediaRequest(() => group_id ? v(`${u()}/signage/media?group_id=${encodeURIComponent(group_id)}`, form_data).then((resp) => new ws(resp)) : zh(form_data));
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
    this._media_items.update((items) => [item, ...items.filter((existing) => existing.id !== item.id)].sort((a, b2) => b2.created_at - a.created_at));
    this._media_tags.reload();
  }
  _addSignagePlaylist(form_data) {
    const group_id = this._api_group_id();
    if (!group_id)
      return Qh(form_data);
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
    const { GroupSelectModalComponent } = await import("./group-select-modal.component-Z2BDR4S7.js");
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
        const result = await Gh({
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
        const result = await al({
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
    return [...item_map.values()].sort((a, b2) => (a.display_name || a.name).localeCompare(b2.display_name || b2.name));
  }
  async updatePlaylistMedia(playlist_id, list) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    await el(playlist_id, list);
    this._setPlaylistMediaState(playlist_id, list, false);
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED"));
    this._playlist_change.set(Date.now());
  }
  async addMediaToPlaylist(playlist_id, media_id) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS")))
      return;
    const media_list = await Zh(playlist_id);
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
    const media_list = await Zh(playlist_id);
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
          const media = await Zh(next_playlist.id);
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
  async _removeMediaFromCachedPlaylists(media_ids) {
    const removed_ids = new Set(media_ids.filter(Boolean));
    if (!removed_ids.size)
      return;
    const cached_state = this._playlist_meta_state();
    const linked_playlist_ids = Object.entries(cached_state).filter(([, state]) => (state.item_ids || state.media_ids || []).some((id) => removed_ids.has(id))).map(([playlist_id]) => playlist_id);
    if (!linked_playlist_ids.length)
      return;
    for (const playlist_id of linked_playlist_ids) {
      const cached_items = cached_state[playlist_id]?.item_ids;
      const current_items = cached_items || (await Zh(playlist_id)).items || [];
      const updated_items = current_items.filter((id) => !removed_ids.has(id));
      if (updated_items.length === current_items.length)
        continue;
      await el(playlist_id, updated_items);
      this._setPlaylistMediaState(playlist_id, updated_items, false);
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
    const { MediaPreviewModalComponent } = await import("./media-preview-modal.component-QWJLBNLA.js");
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
    const { BulkMediaUploadModalComponent } = await import("./bulk-media-upload-modal.component-W7IDUQBB.js");
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
    await Fh(id);
    this._media_items.update((items) => items.filter((item) => item.id !== id));
    this._media_tags.reload();
  }
  /** Open the AI image modal, either to create artwork or to change some. */
  async generateMediaWithAI(options = {}) {
    if (!this._requirePermission(this.can_create(), i18n("SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")))
      return;
    if (this._ai_modal_ref)
      return;
    const { AiImageModalComponent } = await import("./ai-image-modal.component-GZJB4FV3.js");
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
    const { MediaEditModalComponent } = await import("./media-edit-modal.component-3BT7F7GL.js");
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
    const updated_media = decodeEntityNames(await Hh(id, update));
    this._media_items.update((items) => items.map((item) => item.id === id ? updated_media : item));
    this._media_tags.reload();
    return updated_media;
  }
  async _resolvePlugin(plugin_id) {
    if (!plugin_id)
      return void 0;
    try {
      const result = await il({
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
      const media_list = await Zh(playlist_id);
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
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED_PLAIN", {
        name: item.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await this._removeMediaFromCachedPlaylists([item.id]);
    await Fh(item.id, this._groupQueryParams({}));
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
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_SELECTED_MEDIA", { count: media_items.length }, media_items.length),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    await this._removeMediaFromCachedPlaylists(media_items.map((item) => item.id));
    await Promise.all(media_items.map((item) => Fh(item.id, this._groupQueryParams({}))));
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
    const { MediaTagsModalComponent } = await import("./media-tags-modal.component-7DZO64HS.js");
    const ref = this._dialog.open(MediaTagsModalComponent, {
      data: { tags: this.media_tags() },
      width: "min(28rem, calc(100vw - 2rem))"
    });
    const tags = await dialogClosed(ref);
    if (!tags?.length)
      return false;
    try {
      await Promise.all(media_items.map((item) => Hh(item.id, {
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
    const { MediaTagModalComponent } = await import("./media-tag-modal.component-QVVOFFCQ.js");
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
      await wh(__spreadValues({
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
    const { MediaTagModalComponent } = await import("./media-tag-modal.component-QVVOFFCQ.js");
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
      await Nh(__spreadValues(__spreadValues({
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
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-GT4YE2RB.js");
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
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-GT4YE2RB.js");
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
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-GT4YE2RB.js");
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
    const playlists = [...zone.playlists || [], playlist_id];
    const updated = await hh(zone.id, { playlists, version: zone.version }, "patch");
    this._cacheZone(updated);
    this.selected_zone.set(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_ZONE"));
  }
  async removePlaylistFromZone(zone, playlist_id) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const playlists = (zone.playlists || []).filter((id) => id !== playlist_id);
    const updated = await hh(zone.id, { playlists, version: zone.version }, "patch");
    this._cacheZone(updated);
    this.selected_zone.set(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_ZONE"));
  }
  async addZone() {
    if (!this._requirePermission(this.can_manage_zones(), i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES")))
      return null;
    const { ZoneEditModalComponent } = await import("./zone-edit-modal.component-AW6GE3QP.js");
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
    const { ZoneEditModalComponent } = await import("./zone-edit-modal.component-AW6GE3QP.js");
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
      display_name: data.display_name,
      name: `SIGNAGE ${data.display_name}`,
      description: data.description,
      parent_id: data.parent_id,
      tags: [.../* @__PURE__ */ new Set([...zone.tags || [], "signage"])]
    }, zone.id ? { version: zone.version } : {});
    const result = zone.id ? await hh(zone.id, form_data) : await lh(form_data);
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
    await dh(zone.id);
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
    const { DisplayEditModalComponent } = await import("./display-edit-modal.component-UWBUQ47B.js");
    const ref = this._dialog.open(DisplayEditModalComponent, {
      data: {
        display: new Rs({}),
        default_zone_ids,
        roots: this.root_zones,
        zones: this.all_zones,
        load_children: (parent_id) => this.zoneChildren(parent_id),
        query_zones: (search, parent_id) => this.querySelectableZones(search, parent_id),
        onAdd: (data) => va(data),
        onEdit: (id, data) => $a(id, data)
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
    const { DisplayEditModalComponent } = await import("./display-edit-modal.component-UWBUQ47B.js");
    const ref = this._dialog.open(DisplayEditModalComponent, {
      data: {
        display,
        default_zone_ids: [],
        roots: this.root_zones,
        zones: this.all_zones,
        load_children: (parent_id) => this.zoneChildren(parent_id),
        query_zones: (search, parent_id) => this.querySelectableZones(search, parent_id),
        onAdd: (data) => va(data),
        onEdit: (id, data) => $a(id, data)
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
      await $a(display.id, { signage: false });
    } else {
      await ka(display.id);
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
      const result = await uh({
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
    return displayZoneIds(roots, known_zones, async (zone_id) => ah(zone_id).catch(() => null));
  }
  async addDisplayToZone(zone) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { DisplaySelectModalComponent } = await import("./display-select-modal.component-XX47NQXM.js");
    const ref = this._dialog.open(DisplaySelectModalComponent, {
      data: { zone_id: zone.id },
      panelClass: "mobile-fullscreen"
    });
    const display_id = await dialogClosed(ref);
    if (!display_id)
      return;
    const display = this.displays().find((d) => d.id === display_id) || await ba(display_id).catch(() => null);
    if (!display)
      return;
    if (display.zones?.includes(zone.id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE"));
      return;
    }
    const zones = [...display.zones || [], zone.id];
    const updated = await $a(display.id, { zones, version: display.version }, "patch");
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
    const updated = await $a(display.id, { zones, version: display.version }, "patch");
    this._cacheDisplay(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_ZONE"));
  }
  async addPlaylistToDisplay(display) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-GT4YE2RB.js");
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
    const playlists = [...display.playlists || [], playlist_id];
    const updated = await $a(display.id, { playlists, version: display.version }, "patch");
    this._cacheDisplay(updated);
    this.selected_display.set(updated);
    this.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_DISPLAY"));
  }
  async addDisplayToPlaylist(playlist) {
    if (!this._requirePermission(this.can_update(), i18n("SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS")))
      return;
    const { DisplaySelectModalComponent } = await import("./display-select-modal.component-XX47NQXM.js");
    const ref = this._dialog.open(DisplaySelectModalComponent, {
      data: { playlist_id: playlist.id },
      panelClass: "mobile-fullscreen"
    });
    const display_id = await dialogClosed(ref);
    if (!display_id)
      return;
    const display = this.displays().find((d) => d.id === display_id) || await ba(display_id).catch(() => null);
    if (!display)
      return;
    if (display.playlists?.includes(playlist.id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY"));
      return;
    }
    const playlists = [...display.playlists || [], playlist.id];
    const updated = await $a(display.id, { playlists, version: display.version }, "patch");
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
    const { ZoneSelectModalComponent } = await import("./zone-select-modal.component-XBDHWCGU.js");
    const ref = this._dialog.open(ZoneSelectModalComponent, {
      data: { playlist_id: playlist.id },
      panelClass: "mobile-fullscreen"
    });
    const zone_id = await dialogClosed(ref);
    if (!zone_id)
      return;
    const zone = this.zones().find((z) => z.id === zone_id) || await ah(zone_id).catch(() => null);
    if (!zone)
      return;
    if (zone.playlists?.includes(playlist.id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE"));
      return;
    }
    const playlists = [...zone.playlists || [], playlist.id];
    const updated = await hh(zone.id, { playlists, version: zone.version }, "patch");
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
    const updated = await $a(display.id, { playlists, version: display.version }, "patch");
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
    const updated = await hh(zone.id, { playlists, version: zone.version }, "patch");
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
    const updated = await $a(display.id, { playlists, version: display.version }, "patch");
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
  EDGE_BAR_HEIGHT_PC,
  SIDEBAR_WIDTH_PC,
  FLOATING_DEFAULT_X_PC,
  FLOATING_DEFAULT_Y_PC,
  LAYOUT_POSITIONS,
  layoutPositionIcon,
  layoutPositionLabel,
  layoutRatioToPercentage,
  layoutPercentageToRatio,
  computeTemplateLayoutRects,
  dialogClosed,
  SignageService
};
//# debugId=bef7560e-78ea-5c3d-baff-c36540baebf0
//# sourceMappingURL=chunk-SGA7RFWJ.js.map

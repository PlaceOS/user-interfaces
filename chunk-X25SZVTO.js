import {
  SignagePlaylistService
} from "./chunk-FSD5ODU2.js";
import {
  openConfirmModal
} from "./chunk-CANWIIRQ.js";
import {
  SignageContextService,
  dialogClosed,
  mergeItems
} from "./chunk-IC6PDIJY.js";
import {
  decodeEntityNames
} from "./chunk-P5YDCKEY.js";
import {
  OrganisationService
} from "./chunk-DQYXLEKZ.js";
import {
  Injectable,
  MatDialog,
  Xt,
  _h,
  computed,
  debounced,
  dh,
  effect,
  fh,
  hh,
  i18n,
  inject,
  linkedSignal,
  notifyError,
  notifySuccess,
  ph,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-VC4MJRPT.js";
import {
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

// apps/signage-manager/src/app/zones/signage-zone.service.ts
function loadedZones(list) {
  return list.hasValue() ? list.value().zones : [];
}
var SignageZoneService = class _SignageZoneService {
  /** Search reachable zones, or the direct children of a selected parent. */
  querySelectableZones(search, parent_id = "", group_id = this._context.api_group_id_debounced.value()) {
    if (!this._context.canQueryLists() || !search.trim()) {
      return null;
    }
    if (parent_id)
      return this._queryChildZones(parent_id, search.trim());
    return hh(this._context.groupQueryParams(__spreadValues({
      q: search.trim(),
      limit: 2500,
      include_children_count: true
    }, group_id ? { descendants: true } : {}), group_id));
  }
  async zoneChildren(parent_id) {
    const { data } = await this._queryChildZones(parent_id);
    return (data || []).map(decodeEntityNames);
  }
  _queryChildZones(parent_id, q) {
    return hh(__spreadProps(__spreadValues({}, q ? { q } : {}), {
      parent_id,
      limit: 2500,
      include_children_count: true
    }));
  }
  /**
   * Zones of the debounced group, loaded again after each save. Empty when
   * the lists cannot be queried or when `load` gives no query. A failed
   * query puts the resource in its error state.
   */
  _zoneResource(load) {
    return resource({
      params: () => ({
        initialised: this._org.initialised(),
        change: this._context.data_change(),
        group_id: this._context.api_group_id_debounced.value(),
        can_query: this._context.can_query_group_data()
      }),
      loader: async ({ params }) => {
        const query = params.initialised && params.can_query ? load(params.group_id) : null;
        const result = await query;
        return {
          zones: (result?.data || []).map(decodeEntityNames),
          total: result?.total || 0
        };
      }
    });
  }
  /**
   * Load the zone lists that failed again. Includes the signage zone list,
   * which the header count and zone pickers read.
   */
  reloadZones() {
    const lists = [
      this._zone_list,
      this._all_zone_list,
      this._org_root_list
    ];
    for (const list of lists) {
      if (list.error())
        list.reload();
    }
  }
  /** Zone tree callbacks for the modals that pick zones */
  zoneTreeData() {
    return {
      roots: this.root_zones,
      zones: this.all_zones,
      load_children: (parent_id) => this.zoneChildren(parent_id),
      query_zones: (search, parent_id) => this.querySelectableZones(search, parent_id)
    };
  }
  /**
   * Ids of zones with their ancestors, parent first. A display must be in
   * the ancestors too, so playlists of a building reach its displays.
   */
  zoneIdsWithAncestors(zones) {
    const known_zones = [
      ...this.all_zones(),
      this._org.organisation,
      this._org.region,
      this._org.building
    ].filter((zone) => !!zone?.id);
    return displayZoneIds(zones, known_zones, async (zone_id) => ph(zone_id).catch(() => null));
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this._playlist_service = inject(SignagePlaylistService);
    this._zone_overrides = signal(
      {},
      ...ngDevMode ? [{ debugName: "_zone_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._clear_overrides = effect(
      () => {
        this._context.api_group_id();
        this._context.data_change();
        untracked(() => this._zone_overrides.set({}));
      },
      ...ngDevMode ? [{ debugName: "_clear_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._zone_list = this._zoneResource((group_id) => hh(this._context.groupQueryParams({ limit: 250, tags: "signage" }, group_id)));
    this.zones = computed(
      () => mergeItems(loadedZones(this._zone_list), this._zone_overrides()),
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_zone_count = computed(
      () => this._zone_list.hasValue() ? this._zone_list.value().total : null,
      ...ngDevMode ? [{ debugName: "signage_zone_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._all_zone_list = this._zoneResource((group_id) => hh(this._context.groupQueryParams({ limit: 500, include_children_count: true }, group_id)));
    this.all_zones = computed(
      () => mergeItems(loadedZones(this._all_zone_list), this._zone_overrides()),
      ...ngDevMode ? [{ debugName: "all_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._org_root_list = this._zoneResource((group_id) => group_id ? null : hh({
      limit: 500,
      include_children_count: true,
      parent_id: "root"
    }));
    this.root_zones = computed(
      () => {
        if (this._context.api_group_id_debounced.value()) {
          return this.all_zones();
        }
        const org_zone_id = this._org.organisation?.id;
        const zones = loadedZones(this._org_root_list);
        return mergeItems(org_zone_id ? zones.filter(({ id }) => id === org_zone_id) : zones, this._zone_overrides());
      },
      ...ngDevMode ? [{ debugName: "root_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zones_loading = computed(
      () => this._zone_list.isLoading() || this._all_zone_list.isLoading() || this._org_root_list.isLoading(),
      ...ngDevMode ? [{ debugName: "zones_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zones_error = computed(
      () => !!this._zone_list.error() || !!this._all_zone_list.error() || !!this._org_root_list.error(),
      ...ngDevMode ? [{ debugName: "zones_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_zone" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this._context.group_switch,
      computation: () => null
    }));
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
        can_query: this._context.can_query_group_data(),
        parent_id: this.selected_zone()?.id || "",
        group_id: this._context.api_group_id_debounced.value(),
        search: this._zone_search_debounced.value().trim()
      }),
      loader: async ({ params }) => {
        const result = await this.querySelectableZones(params.search, params.parent_id, params.group_id)?.catch(() => null);
        return (result?.data || []).map(decodeEntityNames);
      }
    }));
    this.filtered_zones = computed(
      () => {
        if (!this.zone_search_term().trim()) {
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
    this._playlist_service.trackPlaylistIds(() => this.selected_zone()?.playlists || []);
  }
  /**
   * Keep a saved zone until the lists reload.
   * @returns The zone with its names decoded, to use for selection
   */
  _cacheZone(zone) {
    const item = decodeEntityNames(zone);
    if (!item?.id)
      return item;
    this._zone_overrides.update((state) => __spreadProps(__spreadValues({}, state), {
      [item.id]: item
    }));
    return item;
  }
  async addPlaylistToZone(zone) {
    if (!this._canAssign())
      return;
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-HV7D3PBR.js");
    const ref = this._dialog.open(PlaylistSelectModalComponent, {
      data: { zone_id: zone.id },
      panelClass: "mobile-fullscreen"
    });
    const playlist_id = await dialogClosed(ref);
    if (!playlist_id)
      return;
    const updated = await this._addZonePlaylist(zone, { playlist_id }, "SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_ZONE");
    if (updated)
      this.selected_zone.set(updated);
  }
  async removePlaylistFromZone(zone, playlist_id) {
    const updated = await this._removeZonePlaylist(zone, playlist_id, "SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_ZONE");
    if (updated)
      this.selected_zone.set(updated);
  }
  async addZoneToPlaylist(playlist) {
    if (!this._canAssign())
      return;
    const { ZoneSelectModalComponent } = await import("./zone-select-modal.component-AMC5MI4Q.js");
    const ref = this._dialog.open(ZoneSelectModalComponent, {
      data: { playlist_id: playlist.id },
      panelClass: "mobile-fullscreen"
    });
    const zone_id = await dialogClosed(ref);
    if (!zone_id)
      return;
    const zone = this.zones().find((z) => z.id === zone_id) || await ph(zone_id).catch(() => null);
    if (!zone) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR"));
      return;
    }
    const updated = await this._addZonePlaylist(zone, { playlist_id: playlist.id, playlist }, "SIGNAGE_MANAGER.SVC_ZONE_ADDED_PLAYLIST");
    this._updateSelection(updated);
  }
  async removeZoneFromPlaylist(playlist, zone) {
    const updated = await this._removeZonePlaylist(zone, playlist.id, "SIGNAGE_MANAGER.SVC_ZONE_REMOVED_PLAYLIST");
    this._updateSelection(updated);
  }
  _canAssign() {
    return this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS");
  }
  /** Show a saved zone in place of the selected zone, when it is that zone */
  _updateSelection(zone) {
    if (zone && this.selected_zone()?.id === zone.id) {
      this.selected_zone.set(zone);
    }
  }
  /**
   * Add a playlist to a zone, after a check for takeover conflicts.
   * @returns The saved zone, or null when nothing was saved
   */
  async _addZonePlaylist(zone, change, success_key) {
    if (zone.playlists?.includes(change.playlist_id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE"));
      return null;
    }
    const confirmed = await this._playlist_service.confirmTakeoverChange(__spreadProps(__spreadValues({}, change), {
      zone_id: zone.id
    }));
    if (!confirmed)
      return null;
    return this._saveZonePlaylists(zone, [...zone.playlists || [], change.playlist_id], success_key);
  }
  /**
   * Take a playlist off a zone.
   * @returns The saved zone, or null when nothing was saved
   */
  async _removeZonePlaylist(zone, playlist_id, success_key) {
    if (!this._canAssign())
      return null;
    return this._saveZonePlaylists(zone, (zone.playlists || []).filter((id) => id !== playlist_id), success_key);
  }
  /**
   * Save the playlists of a zone and keep the result until the lists reload.
   * @returns The saved zone, or null after showing an error when it fails
   */
  async _saveZonePlaylists(zone, playlists, success_key) {
    const updated = await dh(zone.id, { playlists, version: zone.version }, "patch").catch(() => null);
    if (!updated) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR"));
      return null;
    }
    const saved = this._cacheZone(updated);
    this._context.changed();
    notifySuccess(i18n(success_key));
    return saved;
  }
  async addZone() {
    if (!this._canManageZones())
      return null;
    const result = await this._openZoneEditModal({
      zone: new Xt({}),
      default_parent_id: this.selected_zone()?.id || this.root_zones()[0]?.id || ""
    });
    if (result)
      this.selected_zone.set(result);
    return result;
  }
  async editZone(zone) {
    if (!zone.tags?.includes("signage"))
      return null;
    if (!this._canManageZones())
      return null;
    return this._openZoneEditModal({ zone });
  }
  _canManageZones() {
    return this._context.requirePermission(this._context.can_manage_zones(), "SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES");
  }
  async _openZoneEditModal(data) {
    const { ZoneEditModalComponent } = await import("./zone-edit-modal.component-MRIEFLGF.js");
    const ref = this._dialog.open(ZoneEditModalComponent, {
      data: __spreadProps(__spreadValues(__spreadValues({}, data), this.zoneTreeData()), {
        onSave: (zone, form) => this.saveZone(zone, form)
      }),
      panelClass: "mobile-fullscreen"
    });
    return await dialogClosed(ref) || null;
  }
  async saveZone(zone, data) {
    if (!this._canManageZones() || !data.parent_id || data.parent_id === zone.id || zone.id && !zone.tags?.includes("signage")) {
      return null;
    }
    const form_data = __spreadValues({
      name: data.name,
      display_name: data.display_name,
      description: data.description,
      parent_id: data.parent_id,
      tags: [.../* @__PURE__ */ new Set([...zone.tags || [], "signage"])]
    }, zone.id ? { version: zone.version } : {});
    const result = await (zone.id ? dh(zone.id, form_data) : fh(form_data)).catch(() => null);
    if (!result) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVE_ERROR"));
      return null;
    }
    const saved = this._cacheZone(result);
    this.zone_tree_children_cache.set({});
    this.selected_zone.set(saved);
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVED"));
    return saved;
  }
  async removeZone(zone) {
    if (!zone?.id || !zone.tags?.includes("signage"))
      return false;
    if (!this._canManageZones())
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
    const removed = await _h(zone.id).then(() => true, () => false);
    result.close();
    if (!removed) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVE_ERROR"));
      return false;
    }
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
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVED"));
    return true;
  }
  static {
    this.\u0275fac = function SignageZoneService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageZoneService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageZoneService, factory: _SignageZoneService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageZoneService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SignageZoneService
};
//# debugId=a049a8d9-81fc-59a0-81d7-4727b6f4b831
//# sourceMappingURL=chunk-X25SZVTO.js.map

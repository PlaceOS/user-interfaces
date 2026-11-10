import {
  CONFLICT_WINDOW_DAYS,
  SignageInventoryService,
  findTakeoverConflicts,
  hasTakeoverSchedule
} from "./chunk-UOZZTH7V.js";
import {
  playlistAnimation,
  playlistItemEntries,
  playlistItemMediaIds,
  playlistItemScheduleMap,
  playlistMediaIds,
  reorderPlaylistItemIds
} from "./chunk-7S7RMPXR.js";
import {
  confirmThenRun
} from "./chunk-I463ZZXL.js";
import {
  SignageContextService,
  storedSignal
} from "./chunk-H44MNH6H.js";
import {
  PAGE_SIZE,
  dialogClosed,
  searchParam
} from "./chunk-SUHBQTO6.js";
import {
  PagedList,
  byName,
  decodeEntityNames
} from "./chunk-VXDPGMUS.js";
import {
  openConfirmModal
} from "./chunk-3UZBDKWZ.js";
import {
  MatDialog
} from "./chunk-2APKA6IB.js";
import {
  OrganisationService
} from "./chunk-UQXBKVLO.js";
import {
  $r,
  br,
  dl,
  el,
  fl,
  format,
  hl,
  i18n,
  il,
  ll,
  nl,
  notifyError,
  notifySuccess,
  notifyWarn,
  ol,
  pl,
  rl,
  sl,
  ul,
  yr
} from "./chunk-C3VLFLNG.js";
import {
  Injectable,
  computed,
  debounced,
  effect,
  inject,
  linkedSignal,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-BKT2MDTY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/playlists/signage-playlist.service.ts
var PLAYLIST_META_SESSION_KEY = "PlaceOS.SIGNAGE:playlist-meta-cache:v1";
var PLAYLIST_META_CONCURRENCY = 4;
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
          this._playlist_list.reset(initialised && can_query ? nl(this._context.orgZoneQueryParams(__spreadValues({ limit: PAGE_SIZE }, searchParam(search)), group_id)) : null);
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
    this._playlist_meta_state = storedSignal(PLAYLIST_META_SESSION_KEY, (stored) => stored ? JSON.parse(stored) : {}, {
      storage: "session",
      serialise: JSON.stringify
    });
    this._playlist_meta_loading = signal(
      {},
      ...ngDevMode ? [{ debugName: "_playlist_meta_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_meta_queue = {};
    this._playlist_meta_workers = 0;
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
          result[playlist_id] = (data.media_ids || []).map((id) => el(id));
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
            sl(id, query_params).then((playlist) => {
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
      0,
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
        const result = await ul(playlist_id);
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
    this.playlist_item_entries = computed(
      () => playlistItemEntries(this._mediaList() || {}),
      ...ngDevMode ? [{ debugName: "playlist_item_entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_media_items = computed(
      () => this.playlist_item_entries().map(({ media }) => media),
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
      const playlist = decodeEntityNames(await sl(playlist_id, this._context.groupQueryParams({})));
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
    return nl(__spreadValues(__spreadValues({}, this._context.orgZoneQueryParams({ limit: PAGE_SIZE })), searchParam(search)));
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
  /**
   * Open the playlist form and create a playlist from it.
   * @returns The new playlist, or null when none was made
   */
  async addPlaylist() {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS"))
      return null;
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-63E5C7U4.js");
    const ref = this._dialog.open(PlaylistEditModalComponent, {
      data: {
        playlist: new br({}),
        onAdd: (data) => this._addSignagePlaylist(data)
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    return result?.id ? this._addPlaylistToList(result) : null;
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
    const { PlaylistEditModalComponent } = await import("./playlist-edit-modal.component-63E5C7U4.js");
    const ref = this._dialog.open(PlaylistEditModalComponent, {
      data: {
        playlist,
        group_id: this._context.api_group_id(),
        onEdit: (id, data) => il(id, data),
        beforeSave: (data) => this.confirmTakeoverChange({
          playlist_id: playlist.id,
          playlist: new br(__spreadValues(__spreadValues({}, playlist), data))
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
    const removed = await confirmThenRun(this._dialog, {
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: playlist.name
      }),
      icon: { content: "delete" }
    }, {
      loading_key: "SIGNAGE_MANAGER.SVC_REMOVING",
      error_key: "SIGNAGE_MANAGER.SVC_ERR_REMOVE_PLAYLIST",
      action: () => ol(playlist.id)
    });
    if (!removed)
      return;
    if (this.selected_playlist()?.id === playlist.id) {
      this.selected_playlist.set(null);
      this.selected_playlist_item.set(null);
      this.selected_playlist_item_index.set(null);
    }
    this._removePlaylistMediaState(playlist.id);
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED"));
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
      const list = await ul(playlist.id);
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
          await dl(copy.id, {
            item_id: schedule.item_id,
            schedules: schedule.schedules
          });
        }
      } else {
        await pl(copy.id, list.items || []);
        for (const schedule of list.schedules || []) {
          if (!schedule.item_id || !schedule.schedules?.length) {
            continue;
          }
          await fl(copy.id, schedule.item_id, {
            item_id: schedule.item_id,
            schedules: schedule.schedules
          });
        }
      }
      notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_DUPLICATED"));
      return this._addPlaylistToList(copy);
    } catch {
      if (copy?.id) {
        await ol(copy.id).catch(() => this._context.changed());
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
    const { PlaylistApproveModalComponent } = await import("./playlist-approve-modal.component-KJQ4C7N7.js");
    this._dialog.open(PlaylistApproveModalComponent, {
      data: { playlist },
      panelClass: "mobile-fullscreen"
    });
  }
  async requestPlaylistApproval(playlist) {
    if (!playlist?.id)
      return;
    await this._context.requestApproval({
      item_id: playlist.id,
      loading: this.playlist_approval_request_loading,
      approve: () => this.approvePlaylist(playlist),
      query: (group_id) => nl({ group_id, limit: 500 }),
      list_approvers: (group_id) => ll(group_id),
      pick: async (approvers) => {
        const { PlaylistRequestApprovalModalComponent } = await import("./playlist-request-approval-modal.component-PJOG5Q77.js");
        const ref = this._dialog.open(PlaylistRequestApprovalModalComponent, {
          data: { playlist, approvers },
          panelClass: "mobile-fullscreen"
        });
        return dialogClosed(ref);
      },
      request: (group_id, message, approver_id) => hl(playlist.id, group_id, message, approver_id),
      requested: () => this.setPlaylistApprovalStatus(playlist.id, false, true),
      no_groups_key: "SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_PLAYLIST",
      no_approvers_key: "SIGNAGE_MANAGER.SVC_NO_APPROVERS",
      error_key: "SIGNAGE_MANAGER.SVC_ERR_REQUEST_APPROVAL",
      success_key: "SIGNAGE_MANAGER.SVC_APPROVAL_REQUESTED"
    });
  }
  async removeMediaFromPlaylist(playlist_id, playlist_item_id, item_index) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return;
    const previous = this._mediaList();
    let media_list;
    let new_items;
    try {
      media_list = await ul(playlist_id);
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
      await pl(playlist_id, new_items);
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
      media_list = await ul(playlist_id);
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
      await pl(playlist_id, new_items);
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
      await pl(playlist_id, items);
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
    this._playlist_media_items.set(items ? new yr(__spreadProps(__spreadValues({}, list), { items })) : list);
  }
  async editPlaylistItemSchedules(items) {
    const playlist = this.selected_playlist();
    const schedule_items = items.filter((item) => !!item?.item_id && !!(item.id || item.item_id));
    if (!playlist?.id || !schedule_items.length)
      return false;
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return false;
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-J6UUB3PE.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: schedule_items[0],
        save: (_schedule_id, schedules) => Promise.all(schedule_items.map((item) => fl(playlist.id, item.id || item.item_id, {
          item_id: item.item_id,
          schedules
        })))
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (result) {
      this._playlist_change.update((count) => count + 1);
      this._context.changed();
    }
    return !!result;
  }
  /**
   * Put the media of a playlist back to an older version, after the user
   * confirms. Used by the approval modals.
   * @param previous_version Version of the media to restore
   * @returns Whether the media was restored
   */
  async undoPlaylistChanges(playlist, previous_version) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return false;
    const items = previous_version.items;
    if (!items)
      return false;
    const undone = await confirmThenRun(this._dialog, {
      title: i18n("SIGNAGE_MANAGER.UNDO_CHANGES"),
      content: i18n("SIGNAGE_MANAGER.PLAYLIST_REVERT_CONFIRM", {
        name: playlist.name
      }),
      confirm_text: i18n("SIGNAGE_MANAGER.UNDO_CHANGES"),
      icon: { content: "undo" }
    }, {
      loading_key: "SIGNAGE_MANAGER.UNDOING_CHANGES",
      error_key: "SIGNAGE_MANAGER.PLAYLIST_REVERT_ERROR",
      action: () => pl(playlist.id, items)
    });
    if (!undone)
      return false;
    this.setPlaylistApprovalStatus(playlist.id, false);
    notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_REVERTED"));
    this.refreshPlaylist(playlist.id);
    return true;
  }
  refreshPlaylist(playlist_id) {
    if (!playlist_id)
      return;
    this._removePlaylistMediaState(playlist_id);
    if (this.selected_playlist()?.id === playlist_id) {
      this._playlist_change.update((count) => count + 1);
    }
    this._context.changed();
  }
  async _scheduleMediaForDistributionPlaylist(playlist_id, media_id, media) {
    const { PlaylistItemScheduleModalComponent } = await import("./playlist-item-schedule-modal.component-J6UUB3PE.js");
    const ref = this._dialog.open(PlaylistItemScheduleModalComponent, {
      data: {
        item: new $r({
          item_id: media_id,
          media
        }),
        save: (item_id, schedules) => dl(playlist_id, {
          item_id,
          schedules
        })
      },
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return false;
    this.refreshPlaylist(playlist_id);
    return true;
  }
  /**
   * Fold a new playlist into the loaded list. Reloading the list instead
   * loses the playlist while the backend search index lags the write.
   */
  _addPlaylistToList(playlist) {
    const item = decodeEntityNames(playlist);
    if (!this._playlist_list.items().some(({ id }) => id === item.id)) {
      this._playlist_list.adjustTotal(1);
    }
    this._playlist_list.update((items) => [item, ...items.filter(({ id }) => id !== item.id)].sort(byName));
    this._playlist_cache.update((cache) => __spreadProps(__spreadValues({}, cache), { [item.id]: item }));
    return item;
  }
  _addSignagePlaylist(form_data) {
    return rl(form_data, this._context.groupQueryParams({}));
  }
  async _updatePlaylistMedia(playlist_id, list) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return;
    await pl(playlist_id, list);
    this._setPlaylistMediaState(playlist_id, list, { approved: false });
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED"));
    this._playlist_change.update((count) => count + 1);
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
        ul(playlist_id)
      ]);
      if (playlistItemMediaIds(media_list).includes(media_id)) {
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
   * Pick media from the library and add it to the end of a playlist.
   * @returns Whether media was added
   */
  async pickMediaForPlaylist(playlist) {
    if (!playlist?.id || !this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS"))
      return false;
    const { MediaSelectModalComponent: modal } = await import("./media-select-modal.component-LRMDLNOP.js");
    const ref = this._dialog.open(modal, {
      data: {
        multiple: true,
        heading: "SIGNAGE_MANAGER.ADD_MEDIA_TITLE"
      },
      panelClass: "mobile-fullscreen"
    });
    const media = await dialogClosed(ref);
    if (!media?.length)
      return false;
    return this.addMediaItemsToPlaylist(playlist.id, media.map(({ id }) => id), media);
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
        ul(playlist_id)
      ]);
      const existing_items = media_list.items || [];
      const existing_media_ids = playlistItemMediaIds(media_list);
      const new_media_ids = unique_media_ids.filter((id) => !existing_media_ids.includes(id));
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
  /** Start workers for queued playlists, at most `PLAYLIST_META_CONCURRENCY` */
  _processPlaylistMetaQueue() {
    let pending = Object.keys(this._playlist_meta_queue).length;
    while (pending-- > 0 && this._playlist_meta_workers < PLAYLIST_META_CONCURRENCY) {
      this._playlist_meta_workers++;
      void this._playlistMetaWorker().finally(() => this._playlist_meta_workers--);
    }
  }
  // Each pass takes one playlist off the queue, so it ends once it is empty
  async _playlistMetaWorker() {
    while (Object.keys(this._playlist_meta_queue).length) {
      const next_playlist = Object.values(this._playlist_meta_queue)[0];
      delete this._playlist_meta_queue[next_playlist.id];
      const playlist_updated_at = next_playlist.updated_at || 0;
      this._playlist_meta_loading.update((state) => __spreadProps(__spreadValues({}, state), {
        [next_playlist.id]: true
      }));
      try {
        const media = await ul(next_playlist.id);
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
    const media_ids = playlistItemMediaIds({
      items: item_ids,
      schedules: schedules || this._mediaList()?.schedules
    });
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
      const list = await ul(playlist_id);
      const current_items = list.items || [];
      const item_media_ids = playlistItemMediaIds(list);
      const updated_items = current_items.filter((_, index) => !removed_ids.has(item_media_ids[index]));
      if (updated_items.length === current_items.length)
        continue;
      await pl(playlist_id, updated_items);
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
    this._playlist_change.update((count) => count + 1);
  }
  _updatePlaylistMetaState(updater) {
    this._playlist_meta_state.update(updater);
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
  SignagePlaylistService
};
//# debugId=e32133d6-7455-5857-bceb-4235cc0eb3e9
//# sourceMappingURL=chunk-GTEH6W5M.js.map

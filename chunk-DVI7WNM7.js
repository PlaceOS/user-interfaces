import {
  PlaylistAssignments,
  SignageZoneService
} from "./chunk-PXINODZJ.js";
import {
  SignagePlaylistService
} from "./chunk-RRB2KGTS.js";
import {
  SignageTemplateService
} from "./chunk-JJLSKVCV.js";
import {
  confirmThenRun
} from "./chunk-ORNCOXEQ.js";
import {
  addSignageDisplay,
  querySignageDisplays,
  showSignageDisplay,
  updateSignageDisplay
} from "./chunk-S4TGVV2L.js";
import {
  PAGE_SIZE,
  SignageContextService,
  dialogClosed,
  mergeItems,
  queryAll,
  searchParam
} from "./chunk-GEJ763SF.js";
import {
  PagedList,
  decodeEntityNames
} from "./chunk-VXDPGMUS.js";
import {
  MatDialog
} from "./chunk-CHDADISI.js";
import {
  OrganisationService
} from "./chunk-4IL6MTBN.js";
import {
  $h,
  Ca,
  Cs,
  i18n,
  notifyError,
  notifySuccess,
  vh
} from "./chunk-AAF65IVH.js";
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

// apps/signage-manager/src/app/displays/signage-display.service.ts
var SignageDisplayService = class _SignageDisplayService {
  /**
   * Paged queries for the picker modals, which search on their own without
   * disturbing the lists behind them. Null when the user may not query.
   */
  queryDisplays(search = "") {
    if (!this._context.canQueryLists())
      return null;
    return querySignageDisplays(__spreadValues(__spreadProps(__spreadValues({}, this._context.orgZoneQueryParams({})), {
      limit: PAGE_SIZE,
      signage: true
    }), searchParam(search)));
  }
  loadMoreDisplays() {
    this._display_list.loadMore();
  }
  /** Load the display page that failed again: the next page when some
   * pages are loaded, otherwise the first page. */
  retryDisplays() {
    if (!this._display_list.retry()) {
      this._displays_reload.update((count) => count + 1);
    }
  }
  reloadSelectedDisplayZones() {
    this._selected_display_zones.reload();
  }
  reloadSelectedZoneDisplays() {
    this._selected_zone_displays.reload();
  }
  _addDisplayToList(display) {
    const item = decodeEntityNames(display);
    if (!item?.id)
      return item;
    this._display_list.update((items) => [
      item,
      ...items.filter((existing) => existing.id !== item.id)
    ]);
    this._display_cache.update((cache) => __spreadProps(__spreadValues({}, cache), {
      [item.id]: item
    }));
    return this._assignments.cache(item);
  }
  _removeDisplayFromList(display_id) {
    this._display_list.adjustTotal(-1);
    this._display_list.update((items) => items.filter((item) => item.id !== display_id));
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
  async addDisplay() {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_DISPLAYS"))
      return null;
    const display = await this._openDisplayEditModal(new Cs({}), await this._defaultDisplayZoneIds());
    if (display)
      this._display_list.adjustTotal(1);
    return display;
  }
  async editDisplay(display) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_DISPLAYS"))
      return null;
    return this._openDisplayEditModal(display, []);
  }
  /**
   * Open the display edit modal and select the saved display.
   * @returns The saved display, or null when the modal was cancelled
   */
  async _openDisplayEditModal(display, default_zone_ids) {
    const { DisplayEditModalComponent } = await import("./display-edit-modal.component-A4CB5VBA.js");
    const ref = this._dialog.open(DisplayEditModalComponent, {
      data: __spreadProps(__spreadValues({
        display,
        default_zone_ids
      }, this._zone_service.zoneTreeData()), {
        zone_ids: (zone) => this._zone_service.zoneIdsWithAncestors([zone]),
        load_zone: (zone_id) => vh(zone_id).then(decodeEntityNames, () => null),
        onAdd: (data) => addSignageDisplay(data),
        onEdit: (id, data) => updateSignageDisplay(id, data)
      }),
      panelClass: "mobile-fullscreen"
    });
    const result = await dialogClosed(ref);
    if (!result)
      return null;
    const saved = this._addDisplayToList(result);
    this.selected_display.set(saved);
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_SAVED"));
    return saved;
  }
  async removeDisplay(display) {
    if (!display?.id)
      return false;
    if (!this._context.requirePermission(this._context.can_delete_displays(), "SIGNAGE_MANAGER.SVC_NO_DELETE_DISPLAYS"))
      return false;
    const used_elsewhere = !!(display.map_id || display.email || display.modules.length || display.module_list.length);
    const removed = await confirmThenRun(this._dialog, {
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_DISPLAY_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: display.display_name || display.name
      }),
      icon: { content: "delete" }
    }, {
      loading_key: "SIGNAGE_MANAGER.SVC_REMOVING",
      error_key: "SIGNAGE_MANAGER.SVC_DISPLAY_REMOVE_ERROR",
      action: () => used_elsewhere ? updateSignageDisplay(display.id, { signage: false }) : Ca(display.id)
    });
    if (!removed)
      return false;
    this._removeDisplayFromList(display.id);
    if (this.selected_display()?.id === display.id) {
      this.selected_display.set(null);
    }
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED"));
    return true;
  }
  async _defaultDisplayZoneIds() {
    const group_id = this._context.api_group_id();
    const active_zone = this._org.building || this._org.region || this._org.organisation;
    let roots = group_id ? this._zone_service.root_zones() : active_zone ? [active_zone] : [];
    if (group_id && !roots.length) {
      const result = await $h(this._context.groupQueryParams({ limit: 500, include_children_count: true }, group_id)).catch(() => null);
      roots = (result?.data || []).map(decodeEntityNames);
    }
    return this._zone_service.zoneIdsWithAncestors(roots);
  }
  async addDisplayToZone(zone) {
    if (!this._assignments.canAssign())
      return;
    const display = await this._pickDisplay();
    if (display === void 0)
      return;
    if (!display) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR"));
      return;
    }
    if (display.zones?.includes(zone.id)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE"));
      return;
    }
    const zone_ids = await this._zone_service.zoneIdsWithAncestors([zone]);
    await this._assignments.save(() => updateSignageDisplay(display.id, {
      zones: [
        .../* @__PURE__ */ new Set([...display.zones || [], ...zone_ids])
      ],
      version: display.version
    }), "SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_ZONE");
  }
  async addPlaylistToDisplay(display) {
    if (!this._assignments.canAssign())
      return;
    const playlist_id = await this._assignments.pickPlaylist();
    if (!playlist_id)
      return;
    const updated = await this._assignments.add(display, { playlist_id }, "SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_DISPLAY");
    if (updated)
      this.selected_display.set(updated);
  }
  async addDisplayToPlaylist(playlist) {
    if (!this._assignments.canAssign())
      return;
    const display = await this._pickDisplay();
    if (display === void 0)
      return;
    if (!display) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR"));
      return;
    }
    const updated = await this._assignments.add(display, { playlist_id: playlist.id, playlist }, "SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_PLAYLIST");
    this._assignments.updateSelection(updated);
  }
  async removeDisplayFromPlaylist(playlist, display) {
    const updated = await this._assignments.remove(display, playlist.id, "SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_PLAYLIST");
    this._assignments.updateSelection(updated);
  }
  async removePlaylistFromDisplay(display, playlist_id) {
    const updated = await this._assignments.remove(display, playlist_id, "SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_DISPLAY");
    if (updated)
      this.selected_display.set(updated);
  }
  /**
   * Let the user pick a display. The picker searches the backend, so the
   * choice may be a display the list never loaded.
   * @returns The display, null when it cannot be read, or undefined when
   * the picker was closed
   */
  async _pickDisplay() {
    const { DisplaySelectModalComponent } = await import("./display-select-modal.component-RQKSFZU4.js");
    const ref = this._dialog.open(DisplaySelectModalComponent, {
      panelClass: "mobile-fullscreen"
    });
    const display_id = await dialogClosed(ref);
    if (!display_id)
      return void 0;
    return this.displays().find(({ id }) => id === display_id) || showSignageDisplay(display_id).catch(() => null);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this._zone_service = inject(SignageZoneService);
    this._playlist_service = inject(SignagePlaylistService);
    this._template_service = inject(SignageTemplateService);
    this._display_overrides = signal(
      {},
      ...ngDevMode ? [{ debugName: "_display_overrides" }] : (
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
    this._display_cache = signal(
      {},
      ...ngDevMode ? [{ debugName: "_display_cache" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._display_cache_group = null;
    this._display_search = null;
    this._display_list = new PagedList({
      filter: (item) => item.signage,
      on_page: (items) => this._display_cache.update((cache) => {
        const next = __spreadValues({}, cache);
        for (const item of items)
          next[item.id] = item;
        return next;
      })
    });
    this.displays = computed(
      () => mergeItems(Object.values(this._display_cache()), this._display_overrides()),
      ...ngDevMode ? [{ debugName: "displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displays_loading = this._display_list.loading;
    this.displays_has_more = this._display_list.has_more;
    this.displays_error = this._display_list.error;
    this.displays_total = this._display_list.total;
    this._displays_reload = signal(
      0,
      ...ngDevMode ? [{ debugName: "_displays_reload" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._reload_displays = effect(
      () => {
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._display_search_debounced.value().trim();
        this._context.data_change();
        this._displays_reload();
        untracked(() => {
          const same_query = group_id === this._display_cache_group && search === this._display_search;
          const limit = same_query ? Math.max(PAGE_SIZE, this._display_list.loaded_rows) : PAGE_SIZE;
          this._display_search = search;
          if (group_id !== this._display_cache_group) {
            this._display_cache_group = group_id;
            this._display_cache.set({});
          }
          this._display_list.reset(initialised && can_query ? querySignageDisplays(__spreadValues(__spreadProps(__spreadValues({}, this._context.orgZoneQueryParams({}, group_id)), {
            limit,
            signage: true
          }), searchParam(search))) : null, { keep_items: same_query });
        });
      },
      ...ngDevMode ? [{ debugName: "_reload_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_display = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_display" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this._context.group_switch,
      computation: () => null
    }));
    this._assignments = new PlaylistAssignments({
      context: this._context,
      playlist_service: this._playlist_service,
      dialog: this._dialog,
      overrides: this._display_overrides,
      selected: this.selected_display,
      target: "display_id",
      already_assigned_key: "SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY",
      add_error_key: "SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR",
      save_playlists: (display, playlists) => updateSignageDisplay(display.id, {
        playlists,
        version: display.version
      })
    });
    this.filtered_displays = computed(
      () => mergeItems(this._display_list.items(), this._display_overrides()),
      ...ngDevMode ? [{ debugName: "filtered_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selected_display_zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_selected_display_zones" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const display = this.selected_display();
        if (!display?.id || !this._context.canQueryLists())
          return void 0;
        return {
          id: display.id,
          zone_ids: display.zones,
          group_id: this._context.api_group_id(),
          change: this._context.data_change()
        };
      },
      loader: async ({ params }) => {
        const { data } = await $h(this._context.groupQueryParams({ control_system_id: params.id, limit: 500 }, params.group_id));
        return (data || []).filter(({ id }) => params.zone_ids.includes(id)).map(decodeEntityNames);
      }
    }));
    this.selected_display_zones = computed(
      () => this._selected_display_zones.hasValue() ? this._selected_display_zones.value() : [],
      ...ngDevMode ? [{ debugName: "selected_display_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_display_zones_loading = this._selected_display_zones.isLoading;
    this.selected_display_zones_error = computed(
      () => !!this._selected_display_zones.error(),
      ...ngDevMode ? [{ debugName: "selected_display_zones_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selected_zone_displays = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_selected_zone_displays" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const id = this._zone_service.selected_zone()?.id;
        if (!id || !this._context.canQueryLists())
          return void 0;
        return { id, change: this._context.data_change() };
      },
      loader: ({ params }) => queryAll(querySignageDisplays(__spreadProps(__spreadValues({}, this._context.orgZoneQueryParams({
        limit: PAGE_SIZE,
        signage: true
      })), {
        zone_id: params.id
      })))
    }));
    this.selected_zone_displays = computed(
      () => {
        const displays = this._selected_zone_displays.hasValue() ? this._selected_zone_displays.value() : [];
        return mergeItems(displays, this._display_overrides());
      },
      ...ngDevMode ? [{ debugName: "selected_zone_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone_displays_loading = this._selected_zone_displays.isLoading;
    this.selected_zone_displays_error = computed(
      () => !!this._selected_zone_displays.error(),
      ...ngDevMode ? [{ debugName: "selected_zone_displays_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selected_display_template_mappings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_selected_display_template_mappings" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const id = this.selected_display()?.id;
        return this._context.templates_enabled() && id ? {
          id,
          revision: this._template_service.template_mappings_revision()
        } : void 0;
      },
      loader: ({ params }) => this._template_service.listTemplateMappings({
        control_system_id: params.id
      })
    }));
    this.selected_display_template_mappings = computed(
      () => this._selected_display_template_mappings.hasValue() ? this._selected_display_template_mappings.value() : [],
      ...ngDevMode ? [{ debugName: "selected_display_template_mappings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_display_template_mappings_loading = this._selected_display_template_mappings.isLoading;
    this.selected_display_template_mappings_error = computed(
      () => !!this._selected_display_template_mappings.error(),
      ...ngDevMode ? [{ debugName: "selected_display_template_mappings_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_service.trackPlaylistIds(() => [
      ...this.selected_display()?.playlists || [],
      ...this.selected_display_zones().flatMap(({ playlists }) => playlists || [])
    ]);
  }
  static {
    this.\u0275fac = function SignageDisplayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageDisplayService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageDisplayService, factory: _SignageDisplayService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageDisplayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SignageDisplayService
};
//# debugId=b0df159d-a0a2-5723-81f2-cb66fdda6bbd
//# sourceMappingURL=chunk-DVI7WNM7.js.map

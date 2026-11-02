import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    linkedSignal,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    PlaceSystem,
    PlaceZone,
    type QueryResponse,
    queryZones,
    removeSystem,
    showZone,
    SignagePlaylist,
} from '@placeos/ts-client';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { confirmThenRun } from '../shared/confirm-then-run';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { PagedList } from '../shared/paged-list';
import { PlaylistAssignments } from '../shared/playlist-assignments';
import { SignageContextService } from '../signage-context.service';
import {
    dialogClosed,
    mergeItems,
    PAGE_SIZE,
    queryAll,
    searchParam,
} from '../signage-service.util';
import { SignageTemplateService } from '../templates/signage-template.service';
import { SignageZoneService } from '../zones/signage-zone.service';
import { type ZoneNode } from './display-zones.util';
import {
    addSignageDisplay,
    querySignageDisplays,
    showSignageDisplay,
    updateSignageDisplay,
} from './signage-display';

/**
 * Signage displays, the selected display, and the playlists and zones
 * assigned to displays
 */
@Injectable({
    providedIn: 'root',
})
export class SignageDisplayService {
    private readonly _org = inject(OrganisationService);
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);
    private readonly _zone_service = inject(SignageZoneService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _template_service = inject(SignageTemplateService);

    private readonly _display_overrides = signal<Record<string, PlaceSystem>>(
        {},
    );

    // --- Displays (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // list; filtering the loaded pages would only ever search the displays
    // that happened to be fetched already.
    public readonly display_search_term = signal('');
    private readonly _display_search_debounced = debounced(
        this.display_search_term,
        400,
    );
    // Every display seen since the group last changed, keyed by id. Zone,
    // schedule and playlist views resolve displays by id, so they need the
    // whole set rather than whatever the current search narrowed it to.
    private readonly _display_cache = signal<Record<string, PlaceSystem>>({});
    private _display_cache_group: string | null = null;
    private _display_search: string | null = null;
    private readonly _display_list = new PagedList<PlaceSystem>({
        filter: (item) => item.signage,
        on_page: (items) =>
            this._display_cache.update((cache) => {
                const next = { ...cache };
                for (const item of items) next[item.id] = item;
                return next;
            }),
    });

    public readonly displays = computed(() =>
        mergeItems(
            Object.values(this._display_cache()),
            this._display_overrides(),
        ),
    );
    public readonly displays_loading = this._display_list.loading;
    public readonly displays_has_more = this._display_list.has_more;
    /** Whether the last page of displays failed to load */
    public readonly displays_error = this._display_list.error;
    /** Number of displays the server has for the current query */
    public readonly displays_total = this._display_list.total;
    private readonly _displays_reload = signal(0);

    private readonly _reload_displays = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._display_search_debounced.value().trim();
        this._context.data_change();
        this._displays_reload();
        untracked(() => {
            // A data change on the same query keeps the loaded rows on screen
            // and reloads as many rows as were loaded, so the list does not
            // empty or drop the pages the user scrolled to.
            const same_query =
                group_id === this._display_cache_group &&
                search === this._display_search;
            const limit = same_query
                ? Math.max(PAGE_SIZE, this._display_list.loaded_rows)
                : PAGE_SIZE;
            this._display_search = search;
            // Only drop the id cache when the source of the data changes, a
            // new search term still needs the displays other views look up.
            if (group_id !== this._display_cache_group) {
                this._display_cache_group = group_id;
                this._display_cache.set({});
            }
            this._display_list.reset(
                initialised && can_query
                    ? querySignageDisplays({
                          ...this._context.orgZoneQueryParams({}, group_id),
                          limit,
                          signage: true,
                          ...searchParam(search),
                      })
                    : null,
                { keep_items: same_query },
            );
        });
    });

    /**
     * Paged queries for the picker modals, which search on their own without
     * disturbing the lists behind them. Null when the user may not query.
     */
    public queryDisplays(search = ''): QueryResponse<PlaceSystem> | null {
        if (!this._context.canQueryLists()) return null;
        return querySignageDisplays({
            ...this._context.orgZoneQueryParams({}),
            limit: PAGE_SIZE,
            signage: true,
            ...searchParam(search),
        });
    }

    public loadMoreDisplays() {
        this._display_list.loadMore();
    }

    /** Load the display page that failed again: the next page when some
     * pages are loaded, otherwise the first page. */
    public retryDisplays() {
        if (!this._display_list.retry()) {
            this._displays_reload.update((count) => count + 1);
        }
    }

    // Cleared when the user switches group
    public readonly selected_display = linkedSignal<number, PlaceSystem | null>(
        {
            source: this._context.group_switch,
            computation: () => null,
        },
    );

    private readonly _assignments = new PlaylistAssignments<PlaceSystem>({
        context: this._context,
        playlist_service: this._playlist_service,
        dialog: this._dialog,
        overrides: this._display_overrides,
        selected: this.selected_display,
        target: 'display_id',
        already_assigned_key: 'SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY',
        add_error_key: 'SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR',
        save_playlists: (display, playlists) =>
            updateSignageDisplay(display.id, {
                playlists,
                version: display.version,
            }),
    });

    // The listing itself, which is whatever page(s) of the (possibly
    // searched) query have been loaded so far. Local edits are applied over
    // the loaded items, but never add a display the query didn't return.
    public readonly filtered_displays = computed(() =>
        mergeItems(this._display_list.items(), this._display_overrides()),
    );

    /**
     * Zones of the selected display. Queried by display, as `all_zones` holds
     * only the first 500 zones of the group.
     */
    private readonly _selected_display_zones = resource({
        params: () => {
            const display = this.selected_display();
            if (!display?.id || !this._context.canQueryLists())
                return undefined;
            return {
                id: display.id,
                zone_ids: display.zones,
                group_id: this._context.api_group_id(),
                change: this._context.data_change(),
            };
        },
        loader: async ({ params }) => {
            // Users without admin rights may only query zones in a group
            const { data } = await queryZones(
                this._context.groupQueryParams(
                    { control_system_id: params.id, limit: 500 },
                    params.group_id,
                ),
            );
            return (data || [])
                .filter(({ id }) => params.zone_ids.includes(id))
                .map(decodeEntityNames);
        },
    });
    public readonly selected_display_zones = computed(() =>
        this._selected_display_zones.hasValue()
            ? this._selected_display_zones.value()
            : [],
    );
    public readonly selected_display_zones_loading =
        this._selected_display_zones.isLoading;
    public readonly selected_display_zones_error = computed(
        () => !!this._selected_display_zones.error(),
    );

    public reloadSelectedDisplayZones() {
        this._selected_display_zones.reload();
    }

    /**
     * Displays in the selected zone. Queried by zone, as the display list
     * holds only the pages loaded so far.
     */
    private readonly _selected_zone_displays = resource({
        params: () => {
            const id = this._zone_service.selected_zone()?.id;
            if (!id || !this._context.canQueryLists()) return undefined;
            return { id, change: this._context.data_change() };
        },
        loader: ({ params }) =>
            queryAll(
                querySignageDisplays({
                    ...this._context.orgZoneQueryParams({
                        limit: PAGE_SIZE,
                        signage: true,
                    }),
                    zone_id: params.id,
                }),
            ),
    });
    public readonly selected_zone_displays = computed(() => {
        const displays = this._selected_zone_displays.hasValue()
            ? this._selected_zone_displays.value()
            : [];
        return mergeItems(displays, this._display_overrides());
    });
    public readonly selected_zone_displays_loading =
        this._selected_zone_displays.isLoading;
    public readonly selected_zone_displays_error = computed(
        () => !!this._selected_zone_displays.error(),
    );

    public reloadSelectedZoneDisplays() {
        this._selected_zone_displays.reload();
    }

    /**
     * Template mappings of the selected display, loaded once for the tab
     * count and the schedule. Empty when templates are off.
     */
    private readonly _selected_display_template_mappings = resource({
        params: () => {
            const id = this.selected_display()?.id;
            return this._context.templates_enabled() && id
                ? {
                      id,
                      revision:
                          this._template_service.template_mappings_revision(),
                  }
                : undefined;
        },
        loader: ({ params }) =>
            this._template_service.listTemplateMappings({
                control_system_id: params.id,
            }),
    });
    public readonly selected_display_template_mappings = computed(() =>
        this._selected_display_template_mappings.hasValue()
            ? this._selected_display_template_mappings.value()
            : [],
    );
    public readonly selected_display_template_mappings_loading =
        this._selected_display_template_mappings.isLoading;
    public readonly selected_display_template_mappings_error = computed(
        () => !!this._selected_display_template_mappings.error(),
    );

    private _addDisplayToList(display: PlaceSystem) {
        const item = decodeEntityNames(display);
        if (!item?.id) return item;
        this._display_list.update((items) => [
            item,
            ...items.filter((existing) => existing.id !== item.id),
        ]);
        this._display_cache.update((cache) => ({
            ...cache,
            [item.id]: item,
        }));
        return this._assignments.cache(item);
    }

    private _removeDisplayFromList(display_id: string) {
        this._display_list.adjustTotal(-1);
        this._display_list.update((items) =>
            items.filter((item) => item.id !== display_id),
        );
        this._display_cache.update((cache) => {
            const next = { ...cache };
            delete next[display_id];
            return next;
        });
        this._display_overrides.update((overrides) => {
            const next = { ...overrides };
            delete next[display_id];
            return next;
        });
    }

    public async addDisplay() {
        if (
            !this._context.requirePermission(
                this._context.can_create(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_DISPLAYS',
            )
        )
            return null;
        const display = await this._openDisplayEditModal(
            new PlaceSystem({}),
            await this._defaultDisplayZoneIds(),
        );
        if (display) this._display_list.adjustTotal(1);
        return display;
    }

    public async editDisplay(display: PlaceSystem) {
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_DISPLAYS',
            )
        )
            return null;
        return this._openDisplayEditModal(display, []);
    }

    /**
     * Open the display edit modal and select the saved display.
     * @returns The saved display, or null when the modal was cancelled
     */
    private async _openDisplayEditModal(
        display: PlaceSystem,
        default_zone_ids: string[],
    ) {
        const { DisplayEditModalComponent } =
            await import('./display-edit-modal.component');
        const ref = this._dialog.open(DisplayEditModalComponent, {
            data: {
                display,
                default_zone_ids,
                ...this._zone_service.zoneTreeData(),
                zone_ids: (zone: PlaceZone) =>
                    this._zone_service.zoneIdsWithAncestors([zone]),
                load_zone: (zone_id: string) =>
                    showZone(zone_id).then(decodeEntityNames, () => null),
                onAdd: (data: Partial<PlaceSystem>) => addSignageDisplay(data),
                onEdit: (id: string, data: Partial<PlaceSystem>) =>
                    updateSignageDisplay(id, data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed<PlaceSystem>(ref);
        if (!result) return null;
        const saved = this._addDisplayToList(result);
        this.selected_display.set(saved);
        // Zone, schedule and report views hold their own copies of displays
        this._context.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_SAVED'));
        return saved;
    }

    public async removeDisplay(display: PlaceSystem) {
        if (!display?.id) return false;
        if (
            !this._context.requirePermission(
                this._context.can_delete_displays(),
                'SIGNAGE_MANAGER.SVC_NO_DELETE_DISPLAYS',
            )
        )
            return false;
        const used_elsewhere = !!(
            display.map_id ||
            display.email ||
            display.modules.length ||
            display.module_list.length
        );
        const removed = await confirmThenRun(
            this._dialog,
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_DISPLAY_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: display.display_name || display.name,
                }),
                icon: { content: 'delete' },
            },
            {
                loading_key: 'SIGNAGE_MANAGER.SVC_REMOVING',
                error_key: 'SIGNAGE_MANAGER.SVC_DISPLAY_REMOVE_ERROR',
                action: () =>
                    used_elsewhere
                        ? updateSignageDisplay(display.id, { signage: false })
                        : removeSystem(display.id),
            },
        );
        if (!removed) return false;
        this._removeDisplayFromList(display.id);
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(null);
        }
        this._context.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED'));
        return true;
    }

    private async _defaultDisplayZoneIds() {
        const group_id = this._context.api_group_id();
        const active_zone =
            this._org.building || this._org.region || this._org.organisation;
        let roots: ZoneNode[] = group_id
            ? this._zone_service.root_zones()
            : active_zone
              ? [active_zone]
              : [];
        if (group_id && !roots.length) {
            const result = await queryZones(
                this._context.groupQueryParams(
                    { limit: 500, include_children_count: true },
                    group_id,
                ),
            ).catch(() => null);
            roots = (result?.data || []).map(decodeEntityNames);
        }
        return this._zone_service.zoneIdsWithAncestors(roots);
    }

    public async addDisplayToZone(zone: PlaceZone) {
        if (!this._assignments.canAssign()) return;
        const display = await this._pickDisplay();
        if (display === undefined) return;
        if (!display) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR'));
            return;
        }
        if (display.zones?.includes(zone.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE'));
            return;
        }
        const zone_ids = await this._zone_service.zoneIdsWithAncestors([zone]);
        await this._assignments.save(
            () =>
                updateSignageDisplay(display.id, {
                    zones: [
                        ...new Set([...(display.zones || []), ...zone_ids]),
                    ],
                    version: display.version,
                }),
            'SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_ZONE',
        );
    }

    public async addPlaylistToDisplay(display: PlaceSystem) {
        if (!this._assignments.canAssign()) return;
        const playlist_id = await this._assignments.pickPlaylist();
        if (!playlist_id) return;
        const updated = await this._assignments.add(
            display,
            { playlist_id },
            'SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_DISPLAY',
        );
        if (updated) this.selected_display.set(updated);
    }

    public async addDisplayToPlaylist(playlist: SignagePlaylist) {
        if (!this._assignments.canAssign()) return;
        const display = await this._pickDisplay();
        if (display === undefined) return;
        if (!display) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR'));
            return;
        }
        const updated = await this._assignments.add(
            display,
            { playlist_id: playlist.id, playlist },
            'SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_PLAYLIST',
        );
        this._assignments.updateSelection(updated);
    }

    public async removeDisplayFromPlaylist(
        playlist: SignagePlaylist,
        display: PlaceSystem,
    ) {
        const updated = await this._assignments.remove(
            display,
            playlist.id,
            'SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_PLAYLIST',
        );
        this._assignments.updateSelection(updated);
    }

    public async removePlaylistFromDisplay(
        display: PlaceSystem,
        playlist_id: string,
    ) {
        const updated = await this._assignments.remove(
            display,
            playlist_id,
            'SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_DISPLAY',
        );
        if (updated) this.selected_display.set(updated);
    }

    /**
     * Let the user pick a display. The picker searches the backend, so the
     * choice may be a display the list never loaded.
     * @returns The display, null when it cannot be read, or undefined when
     * the picker was closed
     */
    private async _pickDisplay() {
        const { DisplaySelectModalComponent } =
            await import('../shared/display-select-modal.component');
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await dialogClosed<string>(ref);
        if (!display_id) return undefined;
        return (
            this.displays().find(({ id }) => id === display_id) ||
            showSignageDisplay(display_id).catch(() => null)
        );
    }

    constructor() {
        // Playlists of the selected display and its zones can be outside the
        // loaded pages
        this._playlist_service.trackPlaylistIds(() => [
            ...(this.selected_display()?.playlists || []),
            ...this.selected_display_zones().flatMap(
                ({ playlists }) => playlists || [],
            ),
        ]);
    }
}

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
import { openConfirmModal } from '@placeos/components';
import {
    PlaceSystem,
    PlaceZone,
    type QueryResponse,
    queryZones,
    removeSystem,
    SignagePlaylist,
} from '@placeos/ts-client';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { PagedList } from '../shared/paged-list';
import { SignageContextService } from '../signage-context.service';
import {
    dialogClosed,
    mergeItems,
    PAGE_SIZE,
    queryAll,
    searchParam,
} from '../signage-service.util';
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
    /** Number of displays the server has for the current query */
    public readonly displays_total = this._display_list.total;

    private readonly _reload_displays = effect(() => {
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._display_search_debounced.value().trim();
        this._context.data_change();
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

    // Local edits only bridge the gap until the lists reload. Drop them when
    // the group or data changes, so a stale copy never hides newer server data
    // or sends an old version with the next patch.
    private readonly _clear_overrides = effect(() => {
        this._context.api_group_id();
        this._context.data_change();
        untracked(() => this._display_overrides.set({}));
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

    // Cleared when the user switches group
    public readonly selected_display = linkedSignal<number, PlaceSystem | null>(
        {
            source: this._context.group_switch,
            computation: () => null,
        },
    );

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

    /**
     * Keep a saved display until the lists reload.
     * @returns The display with its names decoded, to use for selection
     */
    private _cacheDisplay(display: PlaceSystem) {
        const item = decodeEntityNames(display);
        if (!item?.id) return item;
        this._display_overrides.update((state) => ({
            ...state,
            [item.id]: item,
        }));
        return item;
    }

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
        return this._cacheDisplay(item);
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
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_DISPLAY_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: display.display_name || display.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        const used_elsewhere = !!(
            display.map_id ||
            display.email ||
            display.modules.length ||
            display.module_list.length
        );
        const request: Promise<unknown> = used_elsewhere
            ? updateSignageDisplay(display.id, { signage: false })
            : removeSystem(display.id);
        const removed = await request.then(
            () => true,
            () => false,
        );
        result.close();
        if (!removed) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_REMOVE_ERROR'));
            return false;
        }
        this._removeDisplayFromList(display.id);
        if (this.selected_display()?.id === display.id) {
            this.selected_display.set(null);
        }
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
            const result = await queryZones({
                group_id,
                limit: 500,
                include_children_count: true,
            } as any).catch(() => null);
            roots = (result?.data || []).map(decodeEntityNames);
        }
        return this._zone_service.zoneIdsWithAncestors(roots);
    }

    public async addDisplayToZone(zone: PlaceZone) {
        if (!this._canAssign()) return;
        const { DisplaySelectModalComponent } =
            await import('../shared/display-select-modal.component');
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { zone_id: zone.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await dialogClosed<string>(ref);
        if (!display_id) return;
        const display = await this._findDisplay(display_id);
        if (!display) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR'));
            return;
        }
        if (display.zones?.includes(zone.id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE'));
            return;
        }
        const zone_ids = await this._zone_service.zoneIdsWithAncestors([zone]);
        await this._saveDisplay(
            display,
            { zones: [...new Set([...(display.zones || []), ...zone_ids])] },
            'SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_ZONE',
        );
    }

    public async addPlaylistToDisplay(display: PlaceSystem) {
        if (!this._canAssign()) return;
        const { PlaylistSelectModalComponent } =
            await import('../shared/playlist-select-modal.component');
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { display_id: display.id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed<string>(ref);
        if (!playlist_id) return;
        const updated = await this._addDisplayPlaylist(
            display,
            { playlist_id },
            'SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_DISPLAY',
        );
        if (updated) this.selected_display.set(updated);
    }

    public async addDisplayToPlaylist(playlist: SignagePlaylist) {
        if (!this._canAssign()) return;
        const { DisplaySelectModalComponent } =
            await import('../shared/display-select-modal.component');
        const ref = this._dialog.open(DisplaySelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const display_id = await dialogClosed<string>(ref);
        if (!display_id) return;
        const display = await this._findDisplay(display_id);
        if (!display) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR'));
            return;
        }
        const updated = await this._addDisplayPlaylist(
            display,
            { playlist_id: playlist.id, playlist },
            'SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_PLAYLIST',
        );
        this._updateSelection(updated);
    }

    public async removeDisplayFromPlaylist(
        playlist: SignagePlaylist,
        display: PlaceSystem,
    ) {
        const updated = await this._removeDisplayPlaylist(
            display,
            playlist.id,
            'SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_PLAYLIST',
        );
        this._updateSelection(updated);
    }

    public async removePlaylistFromDisplay(
        display: PlaceSystem,
        playlist_id: string,
    ) {
        const updated = await this._removeDisplayPlaylist(
            display,
            playlist_id,
            'SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_DISPLAY',
        );
        if (updated) this.selected_display.set(updated);
    }

    private _canAssign() {
        return this._context.requirePermission(
            this._context.can_update(),
            'SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS',
        );
    }

    /**
     * A display from the loaded list, or read by ID. The pickers search the
     * backend, so the choice may be a display the list never loaded.
     */
    private async _findDisplay(display_id: string) {
        return (
            this.displays().find(({ id }) => id === display_id) ||
            showSignageDisplay(display_id).catch(() => null)
        );
    }

    /** Show a saved display in place of the selected display, when it is
     * that display */
    private _updateSelection(display: PlaceSystem | null) {
        if (display && this.selected_display()?.id === display.id) {
            this.selected_display.set(display);
        }
    }

    /**
     * Add a playlist to a display, after a check for takeover conflicts.
     * @returns The saved display, or null when nothing was saved
     */
    private async _addDisplayPlaylist(
        display: PlaceSystem,
        change: { playlist_id: string; playlist?: SignagePlaylist },
        success_key: string,
    ) {
        if (display.playlists?.includes(change.playlist_id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY'));
            return null;
        }
        const confirmed = await this._playlist_service.confirmTakeoverChange({
            ...change,
            display_id: display.id,
        });
        if (!confirmed) return null;
        return this._saveDisplay(
            display,
            { playlists: [...(display.playlists || []), change.playlist_id] },
            success_key,
            'SIGNAGE_MANAGER.SVC_PLAYLIST_ADD_DISPLAY_ERROR',
        );
    }

    /**
     * Take a playlist off a display.
     * @returns The saved display, or null when nothing was saved
     */
    private async _removeDisplayPlaylist(
        display: PlaceSystem,
        playlist_id: string,
        success_key: string,
    ) {
        if (!this._canAssign()) return null;
        return this._saveDisplay(
            display,
            {
                playlists: (display.playlists || []).filter(
                    (id) => id !== playlist_id,
                ),
            },
            success_key,
        );
    }

    /**
     * Save the playlists or zones of a display and keep the result until the
     * lists reload.
     * @param error_key Translation key of the error to show when it fails
     * @returns The saved display, or null after showing an error when it fails
     */
    private async _saveDisplay(
        display: PlaceSystem,
        data: Pick<Partial<PlaceSystem>, 'playlists' | 'zones'>,
        success_key: string,
        error_key = 'SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR',
    ) {
        const updated = await updateSignageDisplay(display.id, {
            ...data,
            version: display.version,
        }).catch(() => null);
        if (!updated) {
            notifyError(i18n(error_key));
            return null;
        }
        const saved = this._cacheDisplay(updated);
        this._context.changed();
        notifySuccess(i18n(success_key));
        return saved;
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

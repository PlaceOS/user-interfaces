import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    linkedSignal,
    type Resource,
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
    addZone as createZone,
    removeZone as deleteZone,
    PlaceZone,
    type QueryResponse,
    queryZones,
    showZone,
    SignagePlaylist,
    updateZone,
} from '@placeos/ts-client';
import { displayZoneIds, type ZoneNode } from '../displays/display-zones.util';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { SignageContextService } from '../signage-context.service';
import { dialogClosed, mergeItems } from '../signage-service.util';
import type { ZoneEditFormModel } from './zone-edit-modal.component';

/** One load of a zone list, with the number of zones the server has */
interface ZoneList {
    zones: PlaceZone[];
    total: number;
}

/** Zones of a zone list resource, empty while it loads or after it fails */
function loadedZones(list: Resource<ZoneList | undefined>) {
    return list.hasValue() ? list.value().zones : [];
}

/** Signage zones, the selected zone, and the playlists assigned to zones */
@Injectable({
    providedIn: 'root',
})
export class SignageZoneService {
    private readonly _org = inject(OrganisationService);
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);
    private readonly _playlist_service = inject(SignagePlaylistService);

    private readonly _zone_overrides = signal<Record<string, PlaceZone>>({});

    // Local edits only bridge the gap until the lists reload. Drop them when
    // the group or data changes, so a stale copy never hides newer server data
    // or sends an old version with the next patch.
    private readonly _clear_overrides = effect(() => {
        this._context.api_group_id();
        this._context.data_change();
        untracked(() => this._zone_overrides.set({}));
    });

    /** Search reachable zones, or the direct children of a selected parent. */
    public querySelectableZones(
        search: string,
        parent_id = '',
        group_id = this._context.api_group_id_debounced.value(),
    ): QueryResponse<PlaceZone> | null {
        if (!this._context.canQueryLists() || !search.trim()) {
            return null;
        }
        if (parent_id) return this._queryChildZones(parent_id, search.trim());
        return queryZones(
            this._context.groupQueryParams(
                {
                    q: search.trim(),
                    limit: 2500,
                    include_children_count: true,
                    ...(group_id ? { descendants: true } : {}),
                },
                group_id,
            ) as any,
        );
    }

    public async zoneChildren(parent_id: string) {
        const { data } = await this._queryChildZones(parent_id);
        return (data || []).map(decodeEntityNames);
    }

    private _queryChildZones(parent_id: string, q?: string) {
        return queryZones({
            ...(q ? { q } : {}),
            parent_id,
            limit: 2500,
            include_children_count: true,
        });
    }

    /**
     * Zones of the debounced group, loaded again after each save. Empty when
     * the lists cannot be queried or when `load` gives no query. A failed
     * query puts the resource in its error state.
     */
    private _zoneResource(
        load: (group_id: string) => QueryResponse<PlaceZone> | null,
    ) {
        return resource({
            params: () => ({
                initialised: this._org.initialised(),
                change: this._context.data_change(),
                group_id: this._context.api_group_id_debounced.value(),
                can_query: this._context.can_query_group_data(),
            }),
            loader: async ({ params }): Promise<ZoneList> => {
                const query =
                    params.initialised && params.can_query
                        ? load(params.group_id)
                        : null;
                const result = await query;
                return {
                    zones: (result?.data || []).map(decodeEntityNames),
                    total: result?.total || 0,
                };
            },
        });
    }

    private readonly _zone_list = this._zoneResource((group_id) =>
        queryZones(
            this._context.groupQueryParams(
                { limit: 250, tags: 'signage' },
                group_id,
            ),
        ),
    );
    public readonly zones = computed(() =>
        mergeItems(loadedZones(this._zone_list), this._zone_overrides()),
    );
    /**
     * Number of signage zones the server has, loaded or not. Null while the
     * count loads or after it fails, as the count is not known.
     */
    public readonly signage_zone_count = computed(() =>
        this._zone_list.hasValue() ? this._zone_list.value().total : null,
    );

    private readonly _all_zone_list = this._zoneResource((group_id) =>
        queryZones(
            this._context.groupQueryParams(
                { limit: 500, include_children_count: true },
                group_id,
            ),
        ),
    );
    public readonly all_zones = computed(() =>
        mergeItems(loadedZones(this._all_zone_list), this._zone_overrides()),
    );

    // A selected group has its own zones as roots, which the all zones list
    // already holds. "All groups" has the organisation zone as its root.
    private readonly _org_root_list = this._zoneResource((group_id) =>
        group_id
            ? null
            : queryZones({
                  limit: 500,
                  include_children_count: true,
                  parent_id: 'root',
              }),
    );
    public readonly root_zones = computed(() => {
        if (this._context.api_group_id_debounced.value()) {
            return this.all_zones();
        }
        const org_zone_id = this._org.organisation?.id;
        const zones = loadedZones(this._org_root_list);
        return mergeItems(
            org_zone_id ? zones.filter(({ id }) => id === org_zone_id) : zones,
            this._zone_overrides(),
        );
    });

    /** Whether the zone lists of the zones page are loading */
    public readonly zones_loading = computed(
        () =>
            this._zone_list.isLoading() ||
            this._all_zone_list.isLoading() ||
            this._org_root_list.isLoading(),
    );
    /**
     * Whether a zone list of the zones page failed to load. The tree can
     * still show the lists that loaded, so it shows this beside them.
     */
    public readonly zones_error = computed(
        () =>
            !!this._zone_list.error() ||
            !!this._all_zone_list.error() ||
            !!this._org_root_list.error(),
    );

    /**
     * Load the zone lists that failed again. Includes the signage zone list,
     * which the header count and zone pickers read.
     */
    public reloadZones() {
        const lists = [
            this._zone_list,
            this._all_zone_list,
            this._org_root_list,
        ];
        for (const list of lists) {
            if (list.error()) list.reload();
        }
    }

    /** Zone tree callbacks for the modals that pick zones */
    public zoneTreeData() {
        return {
            roots: this.root_zones,
            zones: this.all_zones,
            load_children: (parent_id: string) => this.zoneChildren(parent_id),
            query_zones: (search: string, parent_id: string) =>
                this.querySelectableZones(search, parent_id),
        };
    }

    /**
     * Ids of zones with their ancestors, parent first. A display must be in
     * the ancestors too, so playlists of a building reach its displays.
     */
    public zoneIdsWithAncestors(zones: ZoneNode[]) {
        const known_zones = [
            ...this.all_zones(),
            this._org.organisation,
            this._org.region,
            this._org.building,
        ].filter((zone): zone is PlaceZone => !!zone?.id);
        return displayZoneIds(zones, known_zones, async (zone_id) =>
            showZone(zone_id).catch(() => null),
        );
    }

    // Cleared when the user switches group
    public readonly selected_zone = linkedSignal<number, PlaceZone | null>({
        source: this._context.group_switch,
        computation: () => null,
    });
    public readonly zone_search_term = signal('');
    public readonly zone_tree_expanded = signal<Record<string, boolean>>({});
    public readonly zone_tree_children_cache = signal<
        Record<string, PlaceZone[]>
    >({});
    private readonly _zone_search_debounced = debounced(
        this.zone_search_term,
        400,
    );
    private readonly _zone_search_results = resource({
        params: () => ({
            initialised: this._org.initialised(),
            can_query: this._context.can_query_group_data(),
            parent_id: this.selected_zone()?.id || '',
            group_id: this._context.api_group_id_debounced.value(),
            search: this._zone_search_debounced.value().trim(),
        }),
        loader: async ({ params }) => {
            const result = await this.querySelectableZones(
                params.search,
                params.parent_id,
                params.group_id,
            )?.catch(() => null);
            return (result?.data || []).map(decodeEntityNames);
        },
    });

    public readonly filtered_zones = computed(() => {
        if (!this.zone_search_term().trim()) {
            return this.all_zones();
        }
        const overrides = this._zone_overrides();
        return (this._zone_search_results.value() || []).map(
            (zone) => overrides[zone.id] || zone,
        );
    });

    constructor() {
        // Playlists of the selected zone can be outside the loaded pages
        this._playlist_service.trackPlaylistIds(
            () => this.selected_zone()?.playlists || [],
        );
    }

    /**
     * Keep a saved zone until the lists reload.
     * @returns The zone with its names decoded, to use for selection
     */
    private _cacheZone(zone: PlaceZone) {
        const item = decodeEntityNames(zone);
        if (!item?.id) return item;
        this._zone_overrides.update((state) => ({
            ...state,
            [item.id]: item,
        }));
        return item;
    }

    public async addPlaylistToZone(zone: PlaceZone) {
        if (!this._canAssign()) return;
        const { PlaylistSelectModalComponent } =
            await import('../shared/playlist-select-modal.component');
        const ref = this._dialog.open(PlaylistSelectModalComponent, {
            data: { zone_id: zone.id },
            panelClass: 'mobile-fullscreen',
        });
        const playlist_id = await dialogClosed<string>(ref);
        if (!playlist_id) return;
        const updated = await this._addZonePlaylist(
            zone,
            { playlist_id },
            'SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_ZONE',
        );
        if (updated) this.selected_zone.set(updated);
    }

    public async removePlaylistFromZone(zone: PlaceZone, playlist_id: string) {
        const updated = await this._removeZonePlaylist(
            zone,
            playlist_id,
            'SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_ZONE',
        );
        if (updated) this.selected_zone.set(updated);
    }

    public async addZoneToPlaylist(playlist: SignagePlaylist) {
        if (!this._canAssign()) return;
        const { ZoneSelectModalComponent } =
            await import('../shared/zone-select-modal.component');
        const ref = this._dialog.open(ZoneSelectModalComponent, {
            data: { playlist_id: playlist.id },
            panelClass: 'mobile-fullscreen',
        });
        const zone_id = await dialogClosed<string>(ref);
        if (!zone_id) return;
        // The picker searches the backend, so the choice may be a zone the
        // list never loaded
        const zone =
            this.zones().find((z) => z.id === zone_id) ||
            (await showZone(zone_id).catch(() => null));
        if (!zone) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR'));
            return;
        }
        const updated = await this._addZonePlaylist(
            zone,
            { playlist_id: playlist.id, playlist },
            'SIGNAGE_MANAGER.SVC_ZONE_ADDED_PLAYLIST',
        );
        this._updateSelection(updated);
    }

    public async removeZoneFromPlaylist(
        playlist: SignagePlaylist,
        zone: PlaceZone,
    ) {
        const updated = await this._removeZonePlaylist(
            zone,
            playlist.id,
            'SIGNAGE_MANAGER.SVC_ZONE_REMOVED_PLAYLIST',
        );
        this._updateSelection(updated);
    }

    private _canAssign() {
        return this._context.requirePermission(
            this._context.can_update(),
            'SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS',
        );
    }

    /** Show a saved zone in place of the selected zone, when it is that zone */
    private _updateSelection(zone: PlaceZone | null) {
        if (zone && this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(zone);
        }
    }

    /**
     * Add a playlist to a zone, after a check for takeover conflicts.
     * @returns The saved zone, or null when nothing was saved
     */
    private async _addZonePlaylist(
        zone: PlaceZone,
        change: { playlist_id: string; playlist?: SignagePlaylist },
        success_key: string,
    ) {
        if (zone.playlists?.includes(change.playlist_id)) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE'));
            return null;
        }
        const confirmed = await this._playlist_service.confirmTakeoverChange({
            ...change,
            zone_id: zone.id,
        });
        if (!confirmed) return null;
        return this._saveZonePlaylists(
            zone,
            [...(zone.playlists || []), change.playlist_id],
            success_key,
        );
    }

    /**
     * Take a playlist off a zone.
     * @returns The saved zone, or null when nothing was saved
     */
    private async _removeZonePlaylist(
        zone: PlaceZone,
        playlist_id: string,
        success_key: string,
    ) {
        if (!this._canAssign()) return null;
        return this._saveZonePlaylists(
            zone,
            (zone.playlists || []).filter((id) => id !== playlist_id),
            success_key,
        );
    }

    /**
     * Save the playlists of a zone and keep the result until the lists reload.
     * @returns The saved zone, or null after showing an error when it fails
     */
    private async _saveZonePlaylists(
        zone: PlaceZone,
        playlists: string[],
        success_key: string,
    ) {
        const updated = await updateZone(
            zone.id,
            { playlists, version: zone.version },
            'patch',
        ).catch(() => null);
        if (!updated) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR'));
            return null;
        }
        const saved = this._cacheZone(updated);
        this._context.changed();
        notifySuccess(i18n(success_key));
        return saved;
    }

    public async addZone() {
        if (!this._canManageZones()) return null;
        const result = await this._openZoneEditModal({
            zone: new PlaceZone({}),
            default_parent_id:
                this.selected_zone()?.id || this.root_zones()[0]?.id || '',
        });
        if (result) this.selected_zone.set(result);
        return result;
    }

    public async editZone(zone: PlaceZone) {
        if (!zone.tags?.includes('signage')) return null;
        if (!this._canManageZones()) return null;
        return this._openZoneEditModal({ zone });
    }

    private _canManageZones() {
        return this._context.requirePermission(
            this._context.can_manage_zones(),
            'SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES',
        );
    }

    private async _openZoneEditModal(data: {
        zone: PlaceZone;
        default_parent_id?: string;
    }) {
        const { ZoneEditModalComponent } =
            await import('./zone-edit-modal.component');
        const ref = this._dialog.open(ZoneEditModalComponent, {
            data: {
                ...data,
                ...this.zoneTreeData(),
                onSave: (zone: PlaceZone, form: ZoneEditFormModel) =>
                    this.saveZone(zone, form),
            },
            panelClass: 'mobile-fullscreen',
        });
        return (await dialogClosed<PlaceZone>(ref)) || null;
    }

    public async saveZone(zone: PlaceZone, data: ZoneEditFormModel) {
        if (
            !this._canManageZones() ||
            !data.parent_id ||
            data.parent_id === zone.id ||
            (zone.id && !zone.tags?.includes('signage'))
        ) {
            return null;
        }
        const form_data: Partial<PlaceZone> = {
            name: data.name,
            display_name: data.display_name,
            description: data.description,
            parent_id: data.parent_id,
            tags: [...new Set([...(zone.tags || []), 'signage'])],
            ...(zone.id ? { version: zone.version } : {}),
        };
        const result = await (
            zone.id ? updateZone(zone.id, form_data) : createZone(form_data)
        ).catch(() => null);
        if (!result) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVE_ERROR'));
            return null;
        }
        const saved = this._cacheZone(result);
        this.zone_tree_children_cache.set({});
        this.selected_zone.set(saved);
        this._context.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVED'));
        return saved;
    }

    public async removeZone(zone: PlaceZone) {
        if (!zone?.id || !zone.tags?.includes('signage')) return false;
        if (!this._canManageZones()) return false;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_SIGNAGE_ZONE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: zone.display_name || zone.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        const removed = await deleteZone(zone.id).then(
            () => true,
            () => false,
        );
        result.close();
        if (!removed) {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVE_ERROR'));
            return false;
        }
        this._zone_overrides.update((overrides) => {
            const next = { ...overrides };
            delete next[zone.id];
            return next;
        });
        this.zone_tree_children_cache.set({});
        this.zone_tree_expanded.update((expanded) => {
            const next = { ...expanded };
            delete next[zone.id];
            return next;
        });
        if (this.selected_zone()?.id === zone.id) {
            this.selected_zone.set(null);
        }
        this._context.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVED'));
        return true;
    }
}

import { computed, inject, Injectable } from '@angular/core';
import {
    PlaceSystem,
    PlaceZone,
    querySignageMedia,
    querySignagePlaylists,
    querySystems,
    queryZones,
    showSignageMedia,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import {
    findTakeoverConflicts,
    type TakeoverConflict,
} from './schedules/schedule-conflicts.util';
import { SignageContextService } from './signage-context.service';
import { playlistExpiredAt } from './signage-playlist.util';
import { PAGE_SIZE, queryAll } from './signage-service.util';

/** Every display, zone and playlist in the active group */
export interface SignageInventory {
    displays: PlaceSystem[];
    zones: PlaceZone[];
    playlists: SignagePlaylist[];
}

/** Content that needs attention, shown on the report page */
export interface ContentReport {
    /** Displays with no playlist from the display or its zones */
    empty_displays: PlaceSystem[];
    /** Playlists not assigned to any display or zone */
    unassigned_playlists: SignagePlaylist[];
    /** Expired playlists, or playlists with only expired schedules, that are still assigned */
    expired_playlists: SignagePlaylist[];
    /** Expired media that is still in a playlist */
    expired_media: { media: SignageMedia; playlists: SignagePlaylist[] }[];
    /** Expired media items not checked, because the report checks at most 100 */
    expired_media_unchecked: number;
    /** Takeover playlists that overlap on a display in the coming weeks */
    conflicts: TakeoverConflict[];
}

/** Most expired media items the report looks up playlists for */
const MAX_EXPIRED_MEDIA_CHECKS = 100;
/** Most media requests the report sends at the same time */
const EXPIRED_MEDIA_CONCURRENCY = 6;

/**
 * Every display, zone and playlist in the active group, for checks that need
 * the full set rather than the pages loaded so far.
 */
@Injectable({
    providedIn: 'root',
})
export class SignageInventoryService {
    private readonly _context = inject(SignageContextService);

    /**
     * Changes with the active group and after each save. Resources that call
     * `loadSignageInventory()` use it as their params.
     */
    public readonly inventory_key = computed(() => ({
        can_query: this._context.canQueryLists(),
        group_id: this._context.api_group_id(),
        change: this._context.data_change(),
    }));

    /**
     * Fetch every display, zone and playlist in the active group. The lists
     * on screen only hold the pages loaded so far, so checks that need the
     * full set use this instead.
     */
    public async loadSignageInventory(): Promise<SignageInventory> {
        if (!this._context.canQueryLists()) {
            return { displays: [], zones: [], playlists: [] };
        }
        const limit = PAGE_SIZE;
        const [displays, zones, playlists] = await Promise.all([
            queryAll(
                querySystems({
                    ...this._context.orgZoneQueryParams({}),
                    limit,
                    signage: true,
                } as any),
            ),
            queryAll(
                queryZones(
                    this._context.groupQueryParams({
                        limit,
                        tags: 'signage',
                    }) as any,
                ),
            ),
            queryAll(
                querySignagePlaylists(
                    this._context.orgZoneQueryParams({ limit }),
                ),
            ),
        ]);
        return { displays, zones, playlists };
    }

    /** Find content that needs attention, for the report page */
    public async loadContentReport(now = Date.now()): Promise<ContentReport> {
        const [{ displays, zones, playlists }, expired_media_check] =
            await Promise.all([
                this.loadSignageInventory(),
                this._expiredMediaInPlaylists(now),
            ]);
        const zone_playlists = new Map(
            zones.map((zone) => [zone.id, zone.playlists || []]),
        );
        const assigned_ids = new Set(
            [...displays, ...zones].flatMap((item) => item.playlists || []),
        );
        return {
            empty_displays: displays.filter(
                (display) =>
                    !display.playlists?.length &&
                    !(display.zones || []).some(
                        (zone_id) => zone_playlists.get(zone_id)?.length,
                    ),
            ),
            unassigned_playlists: playlists.filter(
                ({ id }) => !assigned_ids.has(id),
            ),
            expired_playlists: playlists.filter(
                (playlist) =>
                    assigned_ids.has(playlist.id) &&
                    !!playlistExpiredAt(playlist, now),
            ),
            expired_media: expired_media_check.items,
            expired_media_unchecked: expired_media_check.unchecked,
            conflicts: findTakeoverConflicts({ displays, zones, playlists }),
        };
    }

    /**
     * Expired media that is still in a playlist, read from the media show
     * route. Checks at most `MAX_EXPIRED_MEDIA_CHECKS` items, a few at a time.
     * @returns The items in use and the number of expired items not checked
     */
    private async _expiredMediaInPlaylists(now: number) {
        const usage: { media: SignageMedia; playlists: SignagePlaylist[] }[] =
            [];
        if (!this._context.canQueryLists()) {
            return { items: usage, unchecked: 0 };
        }
        const media = await queryAll(
            querySignageMedia(
                this._context.orgZoneQueryParams({ limit: PAGE_SIZE }),
            ),
        );
        const all_expired = media.filter(
            (item) => !!item.valid_until && item.valid_until * 1000 < now,
        );
        const expired = all_expired.slice(0, MAX_EXPIRED_MEDIA_CHECKS);
        const query_params = this._context.groupQueryParams({});
        let next = 0;
        const check = async () => {
            // Each pass takes one item, so the loop ends after the list
            while (next < expired.length) {
                const index = next++;
                const item = expired[index];
                try {
                    const detail = await showSignageMedia(
                        item.id,
                        query_params,
                    );
                    // Keep the media order, whichever request ends first
                    usage[index] = {
                        media: item,
                        playlists: detail.playlists || [],
                    };
                } catch {
                    // Leave out media that cannot be read
                }
            }
        };
        await Promise.all(
            Array.from({ length: EXPIRED_MEDIA_CONCURRENCY }, check),
        );
        return {
            items: usage.filter((item) => item?.playlists.length),
            unchecked: all_expired.length - expired.length,
        };
    }
}

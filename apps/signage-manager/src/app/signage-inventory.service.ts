import { computed, inject, Injectable } from '@angular/core';
import { mapWithLimit, withTimeout } from '@placeos/common';
import {
    listSignagePlaylistMedia,
    PlaceSystem,
    PlaceZone,
    querySignageMedia,
    querySignagePlaylists,
    queryZones,
    showSignageMedia,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { isDisplayOnline } from './displays/display-status.util';
import { querySignageDisplays } from './displays/signage-display';
import {
    findTakeoverConflicts,
    type TakeoverConflict,
} from './schedules/schedule-conflicts.util';
import { SignageContextService } from './signage-context.service';
import { playlistEndsAt, playlistExpiredAt } from './signage-playlist.util';
import { PAGE_SIZE, queryAll } from './signage-service.util';

/** Every display, zone and playlist in the active group */
export interface SignageInventory {
    displays: PlaceSystem[];
    zones: PlaceZone[];
    playlists: SignagePlaylist[];
}

/** Content that needs attention, shown on the report page */
export interface ContentReport {
    /**
     * Displays with no playlist that can play, from the display or its zones.
     * Disabled and expired playlists cannot play.
     */
    empty_displays: PlaceSystem[];
    /** Playlists not assigned to any display or zone */
    unassigned_playlists: SignagePlaylist[];
    /** Time in milliseconds that the report checked against */
    checked_at: number;
    /** Displays whose player has not checked in recently, or never */
    offline_displays: PlaceSystem[];
    /** Expired playlists, or playlists with only expired schedules, that are still assigned */
    expired_playlists: SignagePlaylist[];
    /** Assigned playlists that expire within `EXPIRING_DAYS` */
    expiring_playlists: SignagePlaylist[];
    /** Expired media that is still in a playlist */
    expired_media: { media: SignageMedia; playlists: SignagePlaylist[] }[];
    /** Expired media items not checked, because the report checks at most 100 */
    expired_media_unchecked: number;
    /** Playlists whose approval was requested and not given yet */
    awaiting_review: SignagePlaylist[];
    /** Playlists not checked for review, because the report checks at most 100 */
    awaiting_review_unchecked: number;
    /** Takeover playlists that overlap on a display in the coming weeks */
    conflicts: TakeoverConflict[];
}

/** Days ahead that the report lists playlists that expire */
const EXPIRING_DAYS = 7;
const EXPIRING_WINDOW_MS = EXPIRING_DAYS * 24 * 60 * 60 * 1000;
/** Most playlists the report checks for a review request */
const MAX_REVIEW_CHECKS = 100;
/** Most time in milliseconds for one playlist review check */
const REVIEW_CHECK_TIMEOUT_MS = 15 * 1000;
/** Most expired media items the report looks up playlists for */
const MAX_EXPIRED_MEDIA_CHECKS = 100;
/** Most media requests the report sends at the same time */
const EXPIRED_MEDIA_CONCURRENCY = 6;
/**
 * Most time, in milliseconds, that a loaded inventory is used again. Local
 * saves change `inventory_key` and load it again sooner. This limit picks up
 * changes that other users make.
 */
const INVENTORY_MAX_AGE = 60 * 1000;

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

    // Last inventory load, shared by the pages and checks that need it
    private _inventory: {
        key: ReturnType<typeof this.inventory_key>;
        loaded_at: number;
        request: Promise<SignageInventory>;
    } | null = null;

    /**
     * Every display, zone and playlist in the active group. The lists on
     * screen only hold the pages loaded so far, so checks that need the full
     * set use this instead.
     *
     * Callers share one load for each `inventory_key`, for at most
     * `INVENTORY_MAX_AGE`. This stops a full download for each page visit
     * and each takeover check.
     */
    public loadSignageInventory(): Promise<SignageInventory> {
        const key = this.inventory_key();
        const cached = this._inventory;
        if (
            cached?.key === key &&
            Date.now() - cached.loaded_at < INVENTORY_MAX_AGE
        ) {
            return cached.request;
        }
        const request = this._fetchSignageInventory();
        this._inventory = { key, loaded_at: Date.now(), request };
        // Do not keep a failed load, so the next caller tries again
        request.catch(() => {
            if (this._inventory?.request === request) this._inventory = null;
        });
        return request;
    }

    private async _fetchSignageInventory(): Promise<SignageInventory> {
        if (!this._context.canQueryLists()) {
            return { displays: [], zones: [], playlists: [] };
        }
        const limit = PAGE_SIZE;
        const [displays, zones, playlists] = await Promise.all([
            queryAll(
                querySignageDisplays({
                    ...this._context.orgZoneQueryParams({}),
                    limit,
                    signage: true,
                }),
            ),
            queryAll(
                queryZones(
                    this._context.groupQueryParams({
                        limit,
                        tags: 'signage',
                    }),
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

    /**
     * Find content that needs attention, for the report page
     * @param signal Stops the review checks that have not started
     */
    public async loadContentReport(
        now = Date.now(),
        signal?: AbortSignal,
    ): Promise<ContentReport> {
        const [{ displays, zones, playlists }, expired_media_check] =
            await Promise.all([
                this.loadSignageInventory(),
                this._expiredMediaInPlaylists(now),
            ]);
        const review_check = await this._playlistsAwaitingReview(
            playlists,
            signal,
        );
        const zone_playlists = new Map(
            zones.map((zone) => [zone.id, zone.playlists || []]),
        );
        const assigned_ids = new Set(
            [...displays, ...zones].flatMap((item) => item.playlists || []),
        );
        const playlists_by_id = new Map(playlists.map((_) => [_.id, _]));
        // A playlist outside the inventory, such as a shared one, may play
        const canPlay = (id: string) => {
            const playlist = playlists_by_id.get(id);
            return (
                !playlist ||
                (playlist.enabled && !playlistExpiredAt(playlist, now))
            );
        };
        return {
            empty_displays: displays.filter(
                (display) =>
                    ![
                        ...(display.playlists || []),
                        ...(display.zones || []).flatMap(
                            (zone_id) => zone_playlists.get(zone_id) || [],
                        ),
                    ].some(canPlay),
            ),
            unassigned_playlists: playlists.filter(
                ({ id }) => !assigned_ids.has(id),
            ),
            checked_at: now,
            offline_displays: displays.filter(
                (display) => !isDisplayOnline(display.signage_last_seen, now),
            ),
            expired_playlists: playlists.filter(
                (playlist) =>
                    assigned_ids.has(playlist.id) &&
                    !!playlistExpiredAt(playlist, now),
            ),
            expiring_playlists: playlists.filter((playlist) => {
                const ends_at = playlistEndsAt(playlist) * 1000;
                return (
                    playlist.enabled &&
                    assigned_ids.has(playlist.id) &&
                    ends_at > now &&
                    ends_at <= now + EXPIRING_WINDOW_MS
                );
            }),
            awaiting_review: review_check.items,
            awaiting_review_unchecked: review_check.unchecked,
            expired_media: expired_media_check.items,
            expired_media_unchecked: expired_media_check.unchecked,
            conflicts: findTakeoverConflicts({ displays, zones, playlists }),
        };
    }

    /**
     * Playlists whose approval was requested and not given, read from each
     * playlist's media list. Checks at most `MAX_REVIEW_CHECKS` playlists, a
     * few at a time, each bounded by `REVIEW_CHECK_TIMEOUT_MS`.
     * @returns The playlists, and the number of playlists not checked: over
     * the limit, failed, late, or skipped after `signal` aborts
     */
    private async _playlistsAwaitingReview(
        playlists: SignagePlaylist[],
        signal?: AbortSignal,
    ) {
        const checked = playlists.slice(0, MAX_REVIEW_CHECKS);
        // A late read is still open, so start no more reads after one
        let timed_out = false;
        // True or false when read, null when not read
        const states = await mapWithLimit(
            checked,
            EXPIRED_MEDIA_CONCURRENCY,
            (playlist) =>
                signal?.aborted || timed_out
                    ? Promise.resolve(null)
                    : withTimeout(
                          listSignagePlaylistMedia(playlist.id),
                          REVIEW_CHECK_TIMEOUT_MS,
                          'timeout',
                          () => (timed_out = true),
                      ).then(
                          (media) =>
                              media.approval_requested && !media.approved,
                          () => null,
                      ),
        );
        return {
            items: checked.filter((_, index) => states[index] === true),
            unchecked:
                playlists.length -
                states.filter((state) => state !== null).length,
        };
    }

    /**
     * Expired media that is still in a playlist, read from the media show
     * route. Checks at most `MAX_EXPIRED_MEDIA_CHECKS` items, a few at a time.
     * @returns The items in use and the number of expired items not checked
     */
    private async _expiredMediaInPlaylists(now: number) {
        if (!this._context.canQueryLists()) {
            return { items: [], unchecked: 0 };
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
        // Results keep the media order, whichever request ends first
        const usage = await mapWithLimit(
            expired,
            EXPIRED_MEDIA_CONCURRENCY,
            (media) =>
                showSignageMedia(media.id, query_params).then(
                    (detail) => ({ media, playlists: detail.playlists || [] }),
                    // Media that cannot be read is left out below
                    () => ({ media, playlists: [] as SignagePlaylist[] }),
                ),
        );
        return {
            items: usage.filter((item) => item.playlists.length),
            unchecked: all_expired.length - expired.length,
        };
    }
}

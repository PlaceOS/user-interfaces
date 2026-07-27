import { computed, inject, Injectable, signal } from '@angular/core';
import {
    AsyncHandler,
    MINUTES,
    randomInt,
    scoped_log,
    SECONDS,
    shuffleArray,
} from '@placeos/common';
import {
    cleanObject,
    getModule,
    post,
    querySignagePlugins,
    showSignage,
    SignageMedia,
    SignagePlaylist,
    SignagePlugin,
} from '@placeos/ts-client';
import { getNextCronRunTimestampInRange } from './cron-helpers';
import { MediaCacheService } from './media-cache.service';
import { mockTimeState, time } from './media-helpers';
import { MediaPlayerItem } from './types';

/** Base interval for re-evaluating time-based playlist schedules */
const SCHEDULE_TICK_MS = 15 * SECONDS;
/** Shortest schedule re-evaluation delay when debug time is fast-forwarding */
const MIN_SCHEDULE_TICK_MS = 250;

const DISPLAY_KEY = 'PlaceOS.SIGNAGE.display_details';

export interface MediaEvent {
    type: 'media_count' | 'playlist_count' | 'playlist_through';
    ref_id: string;
}

interface PlaylistOverride {
    ends_at: number;
    playlist: MediaPlayerItem[];
    schedule_keys?: string[];
}

interface SignageMetrics {
    play_through_counts: Record<string, number>;
    playlist_counts: Record<string, number>;
    media_counts: Record<string, number>;
}

interface PlaylistSchedule {
    readonly play_cron?: string;
    readonly play_period?: number;
    readonly play_at?: number;
    readonly play_takeover?: boolean;
}

interface ActivePlaylistSchedule {
    playlist: SignagePlaylist;
    schedule: PlaylistSchedule;
    starts_at: number;
    ends_at: number;
    key: string;
}

interface PlaylistMediaReference {
    id: string;
    playlist_id: string;
    valid_from: number;
    valid_until: number;
}

const EMPTY_METRICS = JSON.stringify({
    play_through_counts: {},
    playlist_counts: {},
    media_counts: {},
});

const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
const SINGLE_PASS_TRIGGER_WINDOW_MS = 30 * 1000;
const log = scoped_log('Signage');

function signageDisplayIDFromURL(url = '') {
    if (!url) return '';
    try {
        const parsed_url = new URL(url, location.href);
        const route = parsed_url.hash?.startsWith('#/')
            ? parsed_url.hash.slice(1)
            : parsed_url.pathname;
        const match = route.match(/(?:^|\/)signage\/([^/?#]+)/);
        return match ? decodeURIComponent(match[1]) : '';
    } catch {
        return '';
    }
}

function isNestedPlayerWindow() {
    try {
        return window.self !== window.top;
    } catch {
        return true;
    }
}

function displayCacheKey(id: string) {
    return `${DISPLAY_KEY}.${id}`;
}

function playlistSchedules(playlist: SignagePlaylist): PlaylistSchedule[] {
    return playlist.schedules || [];
}

function playlistPlayPeriodMinutes(schedule: PlaylistSchedule) {
    return Number.isFinite(schedule.play_period)
        ? Math.max(0, schedule.play_period)
        : DEFAULT_PLAY_PERIOD_MINUTES;
}

function parsePlayAtTimestamp(value: number) {
    if (!Number.isFinite(value) || value <= 0) return 0;
    // The API carries play_at in seconds; the player works in milliseconds
    return value * 1000;
}

function scheduledPlaylistEnd(starts_at: number, period_minutes: number) {
    return period_minutes
        ? starts_at + period_minutes * 60 * 1000
        : starts_at + SINGLE_PASS_TRIGGER_WINDOW_MS;
}

function scheduledPlaylistWindow(
    schedule: PlaylistSchedule,
    now = time(),
    trigger_window_seconds = 0,
) {
    const period_minutes = playlistPlayPeriodMinutes(schedule);
    const window_seconds = trigger_window_seconds || period_minutes * 60;
    if (schedule.play_at) {
        const starts_at = parsePlayAtTimestamp(schedule.play_at);
        if (!starts_at) return null;
        const ends_at = scheduledPlaylistEnd(starts_at, period_minutes);
        return now >= starts_at && now <= ends_at
            ? { starts_at, ends_at }
            : null;
    }
    if (schedule.play_cron?.trim()) {
        try {
            const search_start = now - Math.max(window_seconds, 30) * 1000;
            const next = getNextCronRunTimestampInRange(
                schedule.play_cron,
                Math.max(window_seconds, 30),
                search_start,
            );
            if (!next) return null;
            const starts_at = next * 1000;
            const ends_at = scheduledPlaylistEnd(starts_at, period_minutes);
            return starts_at <= now && now <= ends_at
                ? { starts_at, ends_at }
                : null;
        } catch {
            return null;
        }
    }
    return null;
}

function activePlaylistSchedules(
    playlist: SignagePlaylist,
    now = time(),
    trigger_window_seconds = 0,
) {
    return playlistSchedules(playlist)
        .map((schedule, index) => {
            const window = scheduledPlaylistWindow(
                schedule,
                now,
                trigger_window_seconds,
            );
            return window
                ? {
                      playlist,
                      schedule,
                      ...window,
                      key: `${playlist.id}:${index}:${window.starts_at}`,
                  }
                : null;
        })
        .filter((_) => !!_) as ActivePlaylistSchedule[];
}

function activePlaylistSchedule(
    playlist: SignagePlaylist,
    now = time(),
    trigger_window_seconds = 0,
) {
    return activePlaylistSchedules(playlist, now, trigger_window_seconds)[0];
}

@Injectable({
    providedIn: 'root',
})
export class SignageService extends AsyncHandler {
    private _media_cache = inject(MediaCacheService);

    public readonly debug = signal(false);
    public readonly playing_id = signal('');
    /** Active display system id */
    private readonly _display = signal('');
    /** Resolved display details for the active system */
    private readonly _display_data = signal<any>(null);
    /** Counter incremented on the schedule timer to re-evaluate time windows */
    private readonly _tick = signal(0);
    private _display_signature = '';
    private _playlists: SignagePlaylist[] = [];
    private _last_playlist: MediaPlayerItem[] = [];
    private _last_override_playlists: string[] = [];
    private _metrics: SignageMetrics = {
        play_through_counts: {},
        playlist_counts: {},
        media_counts: {},
    };
    private _completed_schedule_overrides = new Set<string>();

    public readonly override_playlist = signal<PlaylistOverride>({
        ends_at: 0,
        playlist: [],
    });

    /** Resolved display details for the active system */
    public readonly display = this._display_data.asReadonly();

    public readonly playlist = computed<MediaPlayerItem[]>(() => {
        this._tick();
        const item = this._display_data();
        try {
            if (!item?.id || !item.playlist_mappings?.[item.id]) {
                return this._last_playlist;
            }
            const playlists = this._mappedPlaylistIds(item);
            this._setActivePlaylistConfigs(item, playlists);
            const media = this._getPlaylistMedia(
                item,
                playlists,
                (p) =>
                    p.enabled &&
                    (!playlistSchedules(p).length ||
                        activePlaylistSchedules(p).some(
                            ({ schedule }) => !schedule.play_takeover,
                        )),
            );
            this._last_playlist = media;
            return media;
        } catch (e) {
            log.error(
                'Failed to build playlist; keeping last known playlist.',
                e,
            );
            return this._last_playlist;
        }
    });

    public readonly override_playlists = computed<string[]>(() => {
        const item = this._display_data();
        try {
            if (!item?.id || !item.playlist_mappings?.[item.id]) {
                return this._last_override_playlists;
            }
            const playlists = this._mappedPlaylistIds(item);
            this._setActivePlaylistConfigs(item, playlists);
            const filtered = playlists.filter((id) =>
                this._isOverridePlaylist(item, id),
            );
            this._last_override_playlists = filtered;
            return filtered;
        } catch (e) {
            log.error('Failed to build override playlists.', e);
            return this._last_override_playlists;
        }
    });

    public setDisplay(system_id: string) {
        this._display.set(system_id);
        this._reloadDisplay();
        // Re-arm the schedule timer so its cadence reflects the current debug
        // time speed (fast-forwarding shortens the re-evaluation interval).
        this._scheduleTick();
    }

    constructor() {
        super();
        this.interval('poll', () => this._reloadDisplay(), 1 * MINUTES);
        this.interval('metrics', () => this._postMetrics(), 10 * MINUTES);
        this._scheduleTick();
    }

    /** Re-fetch the active display details and refresh derived player state. */
    private async _reloadDisplay() {
        const id = this._display();
        if (!id) return;
        const value = await this._fetchDisplay(id);
        const display_signature = `${id}:${JSON.stringify(value || {})}`;
        if (
            display_signature === this._display_signature &&
            this._display_data()
        ) {
            return;
        }
        this._display_signature = display_signature;
        const display = this._parseDisplay(value);
        display.plugins = await this._resolveDisplayPlugins(display);
        this._display_data.set(display);
        this._bindTriggers(display);
        this._syncMediaCache(display);
        this._checkScheduledOverrides(display, this.override_playlists());
    }

    private async _fetchDisplay(id: string) {
        let d: any = await showSignage(
            id,
            cleanObject({ preview: this.debug(), item_id: this.playing_id() }, [
                undefined,
                null,
                '',
            ]),
        ).catch((_) => null);
        if (!d) {
            const display_key = displayCacheKey(id);
            d = JSON.parse(
                localStorage.getItem(display_key) ||
                    localStorage.getItem(DISPLAY_KEY) ||
                    '{}',
            );
            if (d.id !== id) d = {};
        }
        if (d.id === id) {
            localStorage.setItem(displayCacheKey(id), JSON.stringify(d));
        }
        return d;
    }

    private _bindTriggers(display: any) {
        const triggers = Object.keys(display.playlist_mappings || {}).filter(
            (_) => _.startsWith('trig-'),
        );
        this.unsubWith('trigger_');
        const mod = getModule(display.id, '_TRIGGER__1');
        for (const id of triggers) {
            const binding = mod.variable(id);
            this.subscription(
                `trigger_listen-${id}`,
                binding.bindThenSubscribe(() => this._handleTrigger(id)),
            );
        }
    }

    /**
     * Re-evaluate time-based schedules on a recurring timer, speeding up when
     * debug time is fast-forwarding so scheduled playlists activate on time.
     */
    private _scheduleTick() {
        const { active, speed } = mockTimeState();
        const effective_speed = active && speed > 1 ? speed : 1;
        const delay = Math.max(
            MIN_SCHEDULE_TICK_MS,
            Math.min(SCHEDULE_TICK_MS, SCHEDULE_TICK_MS / effective_speed),
        );
        this.timeout(
            'schedule_tick',
            () => {
                this._tick.update((_) => _ + 1);
                const display = this._display_data();
                if (display) {
                    this._checkScheduledOverrides(
                        display,
                        this.override_playlists(),
                    );
                }
                this._scheduleTick();
            },
            delay,
        );
    }

    public setPlaylistOverride(media: MediaPlayerItem[], ends_at = 0) {
        this.override_playlist.set({ playlist: media, ends_at });
    }

    public clearPlaylistOverride() {
        const { schedule_keys } = this.override_playlist();
        for (const key of schedule_keys || []) {
            this._completed_schedule_overrides.add(key);
        }
        this.override_playlist.set({ playlist: [], ends_at: 0 });
    }

    public async storeMetricEvent(event: MediaEvent) {
        if (event.type === 'media_count') {
            this._incrementMetric(this._metrics.media_counts, event.ref_id);
        } else {
            const playlist = this._playlists.find(
                ({ id }) => id === event.ref_id,
            );
            if (!playlist || !playlist?.random) {
                if (event.type === 'playlist_through') {
                    this._incrementMetric(
                        this._metrics.play_through_counts,
                        event.ref_id,
                    );
                } else if (event.type === 'playlist_count') {
                    this._incrementMetric(
                        this._metrics.playlist_counts,
                        event.ref_id,
                    );
                }
            }
        }
    }

    private _postMetrics() {
        this.timeout(
            'post-metrics',
            async () => {
                if (EMPTY_METRICS === JSON.stringify(this._metrics)) return;
                const display_id = this._display();
                await post(
                    `/api/engine/v2/signage/${encodeURIComponent(display_id)}/metrics`,
                    this._metrics,
                );
                log.debug('Posted metrics:', this._metrics);
                this._metrics = {
                    play_through_counts: {},
                    playlist_counts: {},
                    media_counts: {},
                };
            },
            randomInt(60),
        );
    }

    private _mappedPlaylistIds(display: any) {
        let playlists: string[] = [...display.playlist_mappings[display.id]];
        for (const zone of display.zones || []) {
            if (!display.playlist_mappings[zone]) continue;
            playlists = playlists.concat(display.playlist_mappings[zone]);
        }
        return playlists;
    }

    private _setActivePlaylistConfigs(display: any, playlist_ids: string[]) {
        this._playlists = playlist_ids
            .map((id) => display.playlist_config?.[id]?.[0])
            .filter((_) => !!_);
    }

    private _isOverridePlaylist(display: any, id: string) {
        const playlist = this._playlistConfig(display, id)?.[0];
        return (
            playlist?.enabled &&
            playlistSchedules(playlist).some(
                (schedule) => schedule.play_takeover,
            )
        );
    }

    private async _syncMediaCache(display: any) {
        if (!display?.id) return;
        const cache_owner = display.id || '';
        const media = this._activeCacheableMediaURLs(display);
        const known_media = this._cacheableMediaURLs(display);
        const available_media = this._media_cache.availableFiles(cache_owner);
        const extra_media = available_media.filter(
            (url) => !known_media.includes(url),
        );
        const has_failures = await this._media_cache.requestFilesToCache(
            media,
            cache_owner,
            { prune_other_owners: !this._isNestedPlayerWindow() },
        );
        for (const item of extra_media) {
            this._media_cache.invalidateFile(item, cache_owner);
        }
        // Retry caching after a delay so a transient failure can recover without
        // hammering the network (previously a debounced `_retry` stream).
        if (has_failures) {
            this.timeout(
                'retry_cache',
                () => this._syncMediaCache(this._display_data()),
                15 * SECONDS,
            );
        }
    }

    private _activeCacheableMediaURLs(display: any) {
        if (!display?.id || !display.playlist_mappings?.[display.id]) {
            return this._cacheableMediaURLs(display);
        }
        const playlists = this._mappedPlaylistIds(display);
        const active_media = [
            ...this._getPlaylistMedia(
                display,
                playlists,
                (p) =>
                    p.enabled &&
                    (!playlistSchedules(p).length ||
                        activePlaylistSchedules(p).some(
                            ({ schedule }) => !schedule.play_takeover,
                        )),
            ),
            ...this._getPlaylistMedia(
                display,
                playlists,
                (p) =>
                    p.enabled &&
                    activePlaylistSchedules(p).some(
                        ({ schedule }) => schedule.play_takeover,
                    ),
            ),
        ];
        const urls = active_media
            .filter(({ type }) => type !== 'webpage' && type !== 'plugin')
            .map(({ url }) => url)
            .filter((_) => !!_) as string[];
        return [...new Set(urls)];
    }

    private _cacheableMediaURLs(display: any) {
        return (display.playlist_media || [])
            .filter((item) => {
                const type = item.media_type || item.type;
                return type !== 'webpage' && type !== 'plugin';
            })
            .map((item) => item.media_url)
            .filter((_) => !!_);
    }

    private _checkScheduledOverrides(display: any, playlist_ids: string[]) {
        const active_schedules = this._activeOverrideSchedules(
            display,
            playlist_ids,
        );
        const active_playlists = active_schedules.map(
            ({ playlist }) => playlist,
        );
        if (!active_playlists.length) {
            if (this.override_playlist().schedule_keys?.length) {
                this.override_playlist.set({ playlist: [], ends_at: 0 });
            }
            return;
        }
        if (this._hasCurrentOverrideFor(active_schedules)) return;
        const media = this._getPlaylistMedia(
            display,
            active_playlists.map((_) => _.id),
        );
        const ends_at = this._scheduledOverrideEnd(active_schedules);
        log.debug('Setting override playlist', media, ends_at || 0);
        this.override_playlist.set({
            playlist: media,
            ends_at,
            schedule_keys: active_schedules.map(({ key }) => key),
        });
    }

    private _activeOverrideSchedules(display: any, playlist_ids: string[]) {
        const now = time();
        return playlist_ids
            .map((id) => this._playlistConfig(display, id)?.[0])
            .filter((_) => !!_)
            // Detect across each schedule's full play period (like `play_at` and
            // the background playlist) so an in-progress cron takeover is picked
            // up even if the display booted/ticked after it fired. Single-pass
            // (period 0) schedules still resolve to a short ~30s window.
            .flatMap((playlist) => activePlaylistSchedules(playlist, now))
            .filter(({ key }) => !this._completed_schedule_overrides.has(key));
    }

    private _hasCurrentOverrideFor(schedules: ActivePlaylistSchedule[]) {
        const existing_keys = this.override_playlist().schedule_keys || [];
        const active_keys = new Set(schedules.map(({ key }) => key));
        return (
            existing_keys.length === active_keys.size &&
            existing_keys.every((key) => active_keys.has(key))
        );
    }

    private _scheduledOverrideEnd(schedules: ActivePlaylistSchedule[]) {
        const duration_minutes = schedules.reduce(
            (duration, { schedule }) =>
                Math.max(duration, playlistPlayPeriodMinutes(schedule)),
            0,
        );
        return duration_minutes
            ? Math.max(...schedules.map(({ ends_at }) => ends_at))
            : 0;
    }

    private _incrementMetric(metrics: Record<string, number>, ref_id: string) {
        metrics[ref_id] = (metrics[ref_id] || 0) + 1;
    }

    private _getPlaylistMedia(
        display: any,
        playlists: string[],
        filter_fn: (item: SignagePlaylist) => boolean = () => true,
    ): MediaPlayerItem[] {
        const plugins: SignagePlugin[] = display.plugins || [];
        const playlist_media = this._playlistMediaReferences(
            display,
            playlists,
            filter_fn,
        );
        return playlist_media
            .map((media) =>
                this._createMediaPlayerItem(display, media, plugins),
            )
            .filter((_) => !!_);
    }

    private _parseDisplay(value: any) {
        log.debug('Display updated.');
        value = value || {};
        try {
            value.playlist_media =
                value.playlist_media?.map((_) => new SignageMedia(_)) || [];
            value.plugins =
                value.plugins?.map((_) => new SignagePlugin(_)) || [];
        } catch (e) {
            log.error('Failed to parse display media.', e);
            value = value || {};
            value.playlist_media = value.playlist_media || [];
            value.plugins = value.plugins || [];
        }
        return value;
    }

    private _resolveDisplayPlugins(display: any) {
        const display_plugins = display?.plugins || [];
        const plugin_ids = display?.playlist_media
            ?.filter((media: SignageMedia) => media.media_type === 'plugin')
            .map((media: SignageMedia) => media.plugin_id)
            .filter((id: string) => !!id);
        const unresolved_plugin = plugin_ids?.some(
            (id: string) =>
                !display_plugins.find(
                    (plugin: SignagePlugin) => plugin.id === id && plugin.uri,
                ),
        );
        if (!unresolved_plugin) return Promise.resolve(display_plugins);
        return querySignagePlugins({ limit: 500 } as any)
            .catch(() => ({ data: [] }))
            .then((result: any) => {
                const plugins = new Map<string, SignagePlugin>();
                for (const plugin of result.data || []) {
                    if (plugin?.id) plugins.set(plugin.id, plugin);
                }
                for (const plugin of display_plugins) {
                    if (plugin?.id) plugins.set(plugin.id, plugin);
                }
                return [...plugins.values()];
            });
    }

    private _playlistConfig(display: any, id: string) {
        return display.playlist_config?.[id] as
            | [SignagePlaylist, string[]]
            | undefined;
    }

    private _playlistMediaReferences(
        display: any,
        playlists: string[],
        filter_fn: (item: SignagePlaylist) => boolean,
    ): PlaylistMediaReference[] {
        return playlists
            .map((id) => {
                const config = this._playlistConfig(display, id);
                if (!config) return [];
                const [playlist, media_list] = config;
                if (!playlist || !filter_fn(playlist)) return [];
                const [valid_from, valid_until] =
                    this._playlistValidityWindow(playlist);
                const media = media_list.map((media_id) => ({
                    id: media_id,
                    playlist_id: id,
                    valid_from,
                    valid_until,
                }));
                return playlist.random ? shuffleArray(media) : media;
            })
            .flat();
    }

    private _playlistValidityWindow(playlist: SignagePlaylist) {
        const schedule = activePlaylistSchedule(playlist);
        const schedule_start = schedule
            ? Math.floor(schedule.starts_at / 1000)
            : 0;
        const schedule_end = schedule ? Math.ceil(schedule.ends_at / 1000) : 0;
        const valid_from =
            playlist?.valid_from && schedule_start
                ? Math.max(playlist.valid_from, schedule_start)
                : playlist?.valid_from || schedule_start;
        const valid_until =
            playlist?.valid_until && schedule_end
                ? Math.min(playlist.valid_until, schedule_end)
                : playlist?.valid_until || schedule_end;
        return [valid_from, valid_until];
    }

    private _createMediaPlayerItem(
        display: any,
        reference: PlaylistMediaReference,
        plugins: SignagePlugin[],
    ) {
        const { id, playlist_id, valid_from, valid_until } = reference;
        const media_ref: SignageMedia | null = display.playlist_media.find(
            (item) => item.id === id,
        );
        if (!media_ref) return null;
        if (!this._canEmbedMedia(display, media_ref)) return null;
        const playlist: SignagePlaylist | undefined = this._playlistConfig(
            display,
            playlist_id,
        )?.[0];
        const is_plugin = media_ref.media_type === 'plugin';
        const plugin = is_plugin
            ? plugins.find((_) => _.id === media_ref.plugin_id)
            : undefined;
        const media_valid_from = media_ref.valid_from || 0;
        const media_valid_until = media_ref.valid_until || 0;
        const final_valid_from =
            valid_from && media_valid_from
                ? Math.max(valid_from, media_valid_from)
                : media_valid_from || valid_from;
        const final_valid_until =
            valid_until && media_valid_until
                ? Math.min(valid_until, media_valid_until)
                : media_valid_until || valid_until;
        return {
            id,
            url: media_ref.media_url,
            name: media_ref.name,
            animation: media_ref.animation || playlist?.default_animation,
            playlist: playlist_id || '',
            playlist_name: playlist?.name || '',
            type: media_ref.media_type,
            start_time: media_ref.start_time || 0,
            duration:
                media_ref.play_time ||
                media_ref.video_length ||
                playlist?.default_duration ||
                15 * 1000,
            valid_from: final_valid_from,
            valid_until: final_valid_until,
            validity: {
                valid_from_source: this._validFromSource(
                    valid_from,
                    media_valid_from,
                    final_valid_from,
                ),
                valid_until_source: this._validUntilSource(
                    valid_until,
                    media_valid_until,
                    final_valid_until,
                ),
            },
            plugin,
            plugin_params: is_plugin
                ? {
                      ...(plugin?.defaults || {}),
                      ...(media_ref.plugin_params || {}),
                  }
                : undefined,
            getURL: () => this._mediaURL(media_ref, plugin),
            isLoading:
                media_ref.media_type === 'webpage' || is_plugin
                    ? () => false
                    : () =>
                          this._media_cache.isLoadingFile(media_ref.media_url),
            isCached:
                media_ref.media_type === 'webpage' || is_plugin
                    ? () => false
                    : () => this._media_cache.isCachedFile(media_ref.media_url),
        } as MediaPlayerItem;
    }

    private _validFromSource(
        playlist_valid_from: number,
        media_valid_from: number,
        final_valid_from: number,
    ): 'playlist' | 'media' | 'playlist_media' | undefined {
        if (!final_valid_from) return undefined;
        if (
            playlist_valid_from === final_valid_from &&
            media_valid_from === final_valid_from
        )
            return 'playlist_media';
        if (media_valid_from === final_valid_from) return 'media';
        if (playlist_valid_from === final_valid_from) return 'playlist';
        return undefined;
    }

    private _validUntilSource(
        playlist_valid_until: number,
        media_valid_until: number,
        final_valid_until: number,
    ): 'playlist' | 'media' | 'playlist_media' | undefined {
        if (!final_valid_until) return undefined;
        if (
            playlist_valid_until === final_valid_until &&
            media_valid_until === final_valid_until
        )
            return 'playlist_media';
        if (media_valid_until === final_valid_until) return 'media';
        if (playlist_valid_until === final_valid_until) return 'playlist';
        return undefined;
    }

    private _canEmbedMedia(display: any, media: SignageMedia) {
        const embedded_display_id = signageDisplayIDFromURL(media.media_url);
        if (!embedded_display_id) return true;
        if (embedded_display_id === display.id) {
            log.warn(
                'Skipped signage media embedded with the same display ID.',
                media.id,
                embedded_display_id,
            );
            return false;
        }
        if (this._isNestedPlayerWindow()) {
            log.warn(
                'Skipped nested signage media inside an embedded player.',
                media.id,
                embedded_display_id,
            );
            return false;
        }
        return true;
    }

    private _isNestedPlayerWindow() {
        return isNestedPlayerWindow();
    }

    private async _mediaURL(media: SignageMedia, plugin?: SignagePlugin) {
        if (media.media_type === 'webpage' || media.media_type === 'plugin') {
            return media.media_url || plugin?.uri;
        }
        return await this._media_cache
            .getFile(media.media_url)
            .catch((_) => null)
            .then((_) => (_ ? URL.createObjectURL(_) : ''))
            .catch((_) => '');
    }

    private async _handleTrigger(id: string) {
        const display = this._display_data();
        if (!display?.playlist_mappings) return;
        if (this.override_playlist().playlist?.length > 0) return;
        const playlists = [...display.playlist_mappings[id]];
        const media = this._getPlaylistMedia(
            display,
            playlists,
            (p) => p.enabled,
        );
        if (media.length <= 0) return;
        log.debug(`Handled trigger ${id}`, media);
        this.setPlaylistOverride(media);
    }
}

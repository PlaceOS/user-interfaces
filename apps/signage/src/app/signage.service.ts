import { inject, Injectable, signal } from '@angular/core';
import {
    AsyncHandler,
    log,
    nextValueFrom,
    randomInt,
    shuffleArray,
} from '@placeos/common';
import {
    cleanObject,
    getModule,
    post,
    responseHeaders,
    showSignage,
    SignageMedia,
    SignagePlaylist,
    SignagePlugin,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    interval,
    lastValueFrom,
    of,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';
import { getNextCronRunTimestampInRange } from './cron-helpers';
import { MediaCacheService } from './media-cache.service';
import { time } from './media-helpers';
import { MediaPlayerItem } from './types';

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

const EMPTY_METRICS = JSON.stringify({
    play_through_counts: {},
    playlist_counts: {},
    media_counts: {},
});

const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
const SCHEDULE_TRIGGER_WINDOW_SECONDS = 28;
const SINGLE_PASS_TRIGGER_WINDOW_MS = 30 * 1000;

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
    return value > 1_000_000_000_000 ? value : value * 1000;
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
    private _display = new BehaviorSubject<string>('');
    private _poll = new BehaviorSubject(0);
    private _retry = new BehaviorSubject(0);
    private _last_modified = 0;
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

    public readonly display = combineLatest([this._display, this._poll]).pipe(
        filter(([_]) => !!_),
        switchMap(([id]) =>
            showSignage(
                id,
                cleanObject(
                    { preview: this.debug(), item_id: this.playing_id() },
                    [undefined, null, ''],
                ),
                {
                    headers: {
                        'If-Modified-Since': new Date(
                            this._last_modified,
                        ).toUTCString(),
                    },
                },
            ).pipe(
                catchError((_) => of(null)),
                map((d: any) => {
                    if (!d) {
                        d = JSON.parse(
                            localStorage.getItem(DISPLAY_KEY) || '{}',
                        );
                        if (d.id !== id) d = {};
                    }
                    localStorage.setItem(DISPLAY_KEY, JSON.stringify(d));
                    const path = `/api/engine/v2/signage/${id}`;
                    const headers = responseHeaders(
                        `${location.origin}${path}`,
                    );
                    this._last_modified =
                        new Date(headers['last-modified']).valueOf() ||
                        Date.now();
                    return [d, this._last_modified];
                }),
            ),
        ),
        distinctUntilKeyChanged(1),
        map(([value]) => {
            log('Signage', 'Display updated.');
            try {
                value.playlist_media =
                    value.playlist_media?.map((_) => new SignageMedia(_)) || [];
                value.plugins =
                    value.plugins?.map((_) => new SignagePlugin(_)) || [];
            } catch (e) {
                log('Signage', 'Failed to parse display media.', [e], 'error');
                value = value || {};
                value.playlist_media = value.playlist_media || [];
                value.plugins = value.plugins || [];
            }
            return value;
        }),
        shareReplay(1),
    );

    public readonly triggers = this.display.pipe(
        tap((display) => {
            const triggers = Object.keys(display.playlist_mappings).filter(
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
        }),
    );

    public readonly playlist = combineLatest([
        this.display,
        interval(15 * 1000).pipe(startWith(0)),
    ]).pipe(
        map(([item]: [any, number]) => {
            try {
                if (!item?.id || !item.playlist_mappings?.[item.id]) {
                    return this._last_playlist;
                }
                let playlists = [...item.playlist_mappings[item.id]];
                for (const zone of item.zones || []) {
                    if (!item.playlist_mappings[zone]) continue;
                    playlists = playlists.concat(item.playlist_mappings[zone]);
                }
                this._playlists = playlists
                    .map((id) => item.playlist_config?.[id]?.[0])
                    .filter((_) => !!_);
                // Map playlists to media
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
                log(
                    'SIGNAGE',
                    'Failed to build playlist; keeping last known playlist.',
                    [e],
                    'error',
                );
                return this._last_playlist;
            }
        }),
        startWith([]),
        shareReplay(1),
    );

    public readonly override_playlists = this.display.pipe(
        map((item: any) => {
            try {
                if (!item?.id || !item.playlist_mappings?.[item.id]) {
                    return this._last_override_playlists;
                }
                let playlists: string[] = [...item.playlist_mappings[item.id]];
                for (const zone of item.zones || []) {
                    if (!item.playlist_mappings[zone]) continue;
                    playlists = playlists.concat(item.playlist_mappings[zone]);
                }
                this._playlists = playlists
                    .map((id) => item.playlist_config?.[id]?.[0])
                    .filter((_) => !!_);
                const filtered = playlists.filter((id) => {
                    const config = item.playlist_config?.[id] as [
                        SignagePlaylist,
                        string[],
                    ];
                    if (!config?.[0]) return false;
                    const [playlist] = config;
                    return (
                        playlist.enabled &&
                        playlistSchedules(playlist).some(
                            (schedule) => schedule.play_takeover,
                        )
                    );
                });
                // Map playlists to media
                this._last_override_playlists = filtered;
                return filtered;
            } catch (e) {
                log(
                    'SIGNAGE',
                    'Failed to build override playlists.',
                    [e],
                    'error',
                );
                return this._last_override_playlists;
            }
        }),
        startWith([]),
        shareReplay(1),
    );

    public readonly override_check = combineLatest([
        this.display,
        this.override_playlists,
        interval(15 * 1000).pipe(startWith(0)),
    ]);

    public setDisplay(system_id: string) {
        this._display.next(system_id);
    }

    constructor() {
        super();
        combineLatest([
            this.display,
            this._retry.pipe(debounceTime(15 * 1000), startWith(0)),
        ]).subscribe(async ([_]) => {
            const available_media = this._media_cache.availableFiles();
            const media = _.playlist_media
                .filter(
                    (_) =>
                        _.type !== 'webpage' &&
                        _.media_type !== 'webpage' &&
                        _.type !== 'plugin' &&
                        _.media_type !== 'plugin',
                )
                .map((_) => _.media_url);
            const extra_media = available_media.filter(
                (url) => !media.includes(url),
            );
            const has_failures =
                await this._media_cache.requestFilesToCache(media);
            // Remove unneeded media items
            for (const item of extra_media) {
                this._media_cache.invalidateFile(item);
            }
            if (has_failures) this._retry.next(Date.now());
        });
        this.interval('poll', () => this._poll.next(Date.now()), 60 * 1000);
        this.interval('metrics', () => this._postMetrics(), 10 * 60 * 1000);
        this.subscription(
            'override_check',
            this.override_check.subscribe(([display, playlists]) => {
                const playlist_details: SignagePlaylist[] = playlists.map(
                    (id) => display.playlist_config[id][0],
                );
                const now = time();
                const active_schedules = playlist_details
                    .flatMap((playlist) =>
                        activePlaylistSchedules(
                            playlist,
                            now,
                            SCHEDULE_TRIGGER_WINDOW_SECONDS,
                        ),
                    )
                    .filter(({ key }) => {
                        return !this._completed_schedule_overrides.has(
                            key,
                        );
                    });
                const active_playlists = active_schedules.map(
                    ({ playlist }) => playlist,
                );
                const existing_override = this.override_playlist();
                if (
                    active_playlists.length &&
                    active_playlists.every(({ id }) =>
                        existing_override.playlist.find(
                            (media) => media.playlist === id,
                        ),
                    )
                ) {
                    return;
                }
                if (!active_playlists.length) return;
                const media = this._getPlaylistMedia(
                    display,
                    active_playlists.map((_) => _.id),
                );
                const duration_minutes = active_playlists.reduce(
                    (a, _playlist, index) =>
                        Math.max(
                            a,
                            playlistPlayPeriodMinutes(
                                active_schedules[index].schedule,
                            ),
                        ),
                    0,
                );
                const ends_at = duration_minutes
                    ? Math.max(
                          ...active_schedules.map(({ ends_at }) => ends_at),
                      )
                    : 0;
                log('SIGNAGE', 'Setting override playlist', [
                    media,
                    ends_at || 0,
                ]);
                this.override_playlist.set({
                    playlist: media,
                    ends_at,
                    schedule_keys: active_schedules.map(
                        ({ key }) => key,
                    ),
                });
            }),
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
            const value = this._metrics.media_counts[event.ref_id] || 0;
            this._metrics.media_counts[event.ref_id] = value + 1;
        } else {
            const playlist = this._playlists.find(
                ({ id }) => id === event.ref_id,
            );
            if (!playlist || !playlist?.random) {
                if (event.type === 'playlist_through') {
                    const value =
                        this._metrics.play_through_counts[event.ref_id] || 0;
                    this._metrics.play_through_counts[event.ref_id] = value + 1;
                } else if (event.type === 'playlist_count') {
                    const value =
                        this._metrics.playlist_counts[event.ref_id] || 0;
                    this._metrics.playlist_counts[event.ref_id] = value + 1;
                }
            }
        }
    }

    private _postMetrics() {
        this.timeout(
            'post-metrics',
            async () => {
                if (EMPTY_METRICS === JSON.stringify(this._metrics)) return;
                const display_id = this._display.getValue();
                await lastValueFrom(
                    post(
                        `/api/engine/v2/signage/${encodeURIComponent(display_id)}/metrics`,
                        this._metrics,
                    ),
                );
                log('SIGNAGE', 'Posted metrics:', [this._metrics]);
                this._metrics = {
                    play_through_counts: {},
                    playlist_counts: {},
                    media_counts: {},
                };
            },
            randomInt(60),
        );
    }

    private _getPlaylistMedia(
        display: any,
        playlists: string[],
        filter_fn: (item: SignagePlaylist) => boolean = () => true,
    ): MediaPlayerItem[] {
        const plugins: SignagePlugin[] = display.plugins || [];
        const playlist_media = playlists
            .map((id) => {
                const config = display.playlist_config?.[id] as [
                    SignagePlaylist,
                    string[],
                ];
                if (!config) return [];
                const [playlist, media_list] = config;
                if (!playlist || !filter_fn(playlist)) return [];
                const schedule = activePlaylistSchedule(playlist);
                const schedule_start = schedule
                    ? Math.floor(schedule.starts_at / 1000)
                    : 0;
                const schedule_end = schedule
                    ? Math.ceil(schedule.ends_at / 1000)
                    : 0;
                const playlist_valid_from =
                    playlist?.valid_from && schedule_start
                        ? Math.max(playlist.valid_from, schedule_start)
                        : playlist?.valid_from || schedule_start;
                const playlist_valid_until =
                    playlist?.valid_until && schedule_end
                        ? Math.min(playlist.valid_until, schedule_end)
                        : playlist?.valid_until || schedule_end;
                const media = media_list.map((media_id) => ({
                    id: media_id,
                    playlist_id: id,
                    valid_from: playlist_valid_from,
                    valid_until: playlist_valid_until,
                }));
                return playlist.random ? shuffleArray(media) : media;
            })
            .flat();
        return playlist_media
            .map(({ id, playlist_id, valid_from, valid_until }) => {
                const media_ref: SignageMedia | null =
                    display.playlist_media.find((item) => item.id === id);
                if (!media_ref) return null;
                const playlist: SignagePlaylist | undefined =
                    display.playlist_config[playlist_id]?.[0];
                const is_plugin = media_ref.media_type === 'plugin';
                const plugin = is_plugin
                    ? plugins.find((_) => _.id === media_ref.plugin_id)
                    : undefined;
                return {
                    id,
                    url: media_ref.media_url,
                    name: media_ref.name,
                    animation:
                        media_ref.animation || playlist?.default_animation,
                    playlist: playlist_id || '',
                    playlist_name: playlist?.name || '',
                    type: media_ref.media_type,
                    start_time: media_ref.start_time || 0,
                    duration:
                        media_ref.play_time ||
                        media_ref.video_length ||
                        playlist?.default_duration ||
                        15 * 1000,
                    valid_from:
                        valid_from && media_ref.valid_from
                            ? Math.max(valid_from, media_ref.valid_from)
                            : media_ref.valid_from || valid_from,
                    valid_until:
                        valid_until && media_ref.valid_until
                            ? Math.min(valid_until, media_ref.valid_until)
                            : media_ref.valid_until || valid_until,
                    plugin,
                    plugin_params: is_plugin
                        ? {
                              ...(plugin?.defaults || {}),
                              ...(media_ref.plugin_params || {}),
                          }
                        : undefined,
                    getURL: async () =>
                        media_ref
                            ? media_ref.media_type === 'webpage' || is_plugin
                                ? media_ref.media_url || plugin?.uri
                                : await this._media_cache
                                      .getFile(media_ref.media_url)
                                      .catch((_) => null)
                                      .then((_) => URL.createObjectURL(_))
                                      .catch((_) => '')
                            : null,
                    isLoading:
                        media_ref.media_type === 'webpage' || is_plugin
                            ? () => false
                            : () =>
                                  this._media_cache.isLoadingFile(
                                      media_ref.media_url,
                                  ),
                } as MediaPlayerItem;
            })
            .filter((_) => !!_);
    }

    private async _handleTrigger(id: string) {
        const display = await nextValueFrom(this.display);
        if (this.override_playlist().playlist?.length > 0) return;
        const playlists = [...display.playlist_mappings[id]];
        const media = this._getPlaylistMedia(
            display,
            playlists,
            (p) => p.enabled,
        );
        if (media.length <= 0) return;
        log('SIGNAGE', `Handled trigger ${id}`, [media]);
        this.setPlaylistOverride(media);
    }
}

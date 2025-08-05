import { inject, Injectable, signal } from '@angular/core';
import {
    AsyncHandler,
    log,
    nextValueFrom,
    randomInt,
    shuffleArray,
} from '@placeos/common';
import {
    getModule,
    post,
    responseHeaders,
    showSignage,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { addSeconds, differenceInSeconds } from 'date-fns';
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
}

interface SignageMetrics {
    play_through_counts: Record<string, number>;
    playlist_counts: Record<string, number>;
    media_counts: Record<string, number>;
}

const EMPTY_METRICS = JSON.stringify({
    play_through_counts: {},
    playlist_counts: {},
    media_counts: {},
});

function durationStampToMinutes(duration: string) {
    const [hours, minutes] = duration.split(':').map(Number);
    return hours * 60 + minutes;
}

@Injectable({
    providedIn: 'root',
})
export class SignageService extends AsyncHandler {
    private _media_cache = inject(MediaCacheService);

    private _display = new BehaviorSubject<string>('');
    private _poll = new BehaviorSubject(0);
    private _retry = new BehaviorSubject(0);
    private _last_modified = 0;
    private _playlists: SignagePlaylist[] = [];
    private _metrics: SignageMetrics = {
        play_through_counts: {},
        playlist_counts: {},
        media_counts: {},
    };

    public readonly override_playlist = signal<PlaylistOverride>({
        ends_at: 0,
        playlist: [],
    });

    public readonly display = combineLatest([this._display, this._poll]).pipe(
        filter(([_]) => !!_),
        switchMap(([id]) =>
            showSignage(
                id,
                {},
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
            value.playlist_media =
                value.playlist_media?.map((_) => new SignageMedia(_)) || [];
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
                const binding = mod.binding(id);
                this.subscription(`trigger_bind-${id}`, binding.bind());
                this.subscription(
                    `trigger_listen-${id}`,
                    binding.listen().subscribe(() => this._handleTrigger(id)),
                );
            }
        }),
    );

    public readonly playlist = this.display.pipe(
        map((item: any) => {
            if (!item) return [];
            let playlists = [...item.playlist_mappings[item.id]];
            for (const zone of item.zones) {
                if (!item.playlist_mappings[zone]) continue;
                playlists = playlists.concat(item.playlist_mappings[zone]);
            }
            this._playlists = playlists;
            // Map playlists to media
            return this._getPlaylistMedia(
                item,
                playlists,
                (p) => !p.play_at && !p.play_cron && p.enabled,
            );
        }),
        startWith([]),
        shareReplay(1),
    );

    public readonly override_playlists = this.display.pipe(
        map((item: any) => {
            if (!item) return [];
            let playlists: string[] = [...item.playlist_mappings[item.id]];
            for (const zone of item.zones) {
                if (!item.playlist_mappings[zone]) continue;
                playlists = playlists.concat(item.playlist_mappings[zone]);
            }
            this._playlists = playlists as any;
            const filtered = playlists.filter((id) => {
                const [playlist] = item.playlist_config[id] as [
                    SignagePlaylist,
                    string[],
                ];
                return (
                    (playlist.play_at || playlist.play_cron) && playlist.enabled
                );
            });
            // Map playlists to media
            return filtered;
        }),
        startWith([]),
        shareReplay(1),
    );

    public readonly override_check = combineLatest([
        this.display,
        this.override_playlists,
        interval(30 * 1000).pipe(startWith(0)),
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
                .filter((_) => _.type !== 'webpage')
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
                const active_playlists = playlist_details.filter((plist) => {
                    if (plist.play_at) {
                        return (
                            Math.abs(
                                differenceInSeconds(plist.play_at, time()),
                            ) <= 36
                        );
                    }
                    if (plist.play_cron && plist.play_cron !== '* * * * *') {
                        try {
                            const next = getNextCronRunTimestampInRange(
                                plist.play_cron,
                                60,
                                addSeconds(time(), -30).valueOf(),
                            );
                            return !!next;
                        } catch {
                            return false;
                        }
                    }
                    return false;
                });
                const existing_override = this.override_playlist();
                if (
                    active_playlists.every(({ id }) =>
                        existing_override.playlist.find(
                            (media) => media.playlist === id,
                        ),
                    )
                ) {
                    return;
                }
                const media = this._getPlaylistMedia(
                    display,
                    active_playlists.map((_) => _.id),
                );
                const duration_minutes = playlist_details.reduce(
                    (a, v) => Math.max(a, durationStampToMinutes(v.play_hours)),
                    0,
                );
                const duration = duration_minutes * 60 * 1000;
                log('SIGNAGE', 'Setting override playlist', [
                    media,
                    duration || 0,
                ]);
                this.override_playlist.set({
                    playlist: media,
                    ends_at: duration ? time() + duration : 0,
                });
            }),
        );
    }

    public setPlaylistOverride(media: MediaPlayerItem[], ends_at = 0) {
        this.override_playlist.set({ playlist: media, ends_at });
    }

    public clearPlaylistOverride() {
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
        const playlist_media = playlists
            .map((id) => {
                const [playlist, media_list] = display.playlist_config[id] as [
                    SignagePlaylist,
                    string[],
                ];
                if (!filter_fn(playlist)) return [];
                const media = media_list.map((media_id) => ({
                    id: media_id,
                    playlist_id: id,
                    valid_from: playlist?.valid_from || 0,
                    valid_until: playlist?.valid_until || 0,
                    play_hours: playlist?.play_hours || '00:00-00:00',
                }));
                return playlist.random ? shuffleArray(media) : media;
            })
            .flat();
        return playlist_media
            .map(({ id, playlist_id, valid_from, valid_until, play_hours }) => {
                const media_ref: SignageMedia | null =
                    display.playlist_media.find((item) => item.id === id);
                if (!media_ref) return null;
                const playlist: SignagePlaylist | undefined =
                    display.playlist_config[playlist_id][0];
                return {
                    id,
                    url: media_ref.media_url,
                    name: media_ref.name,
                    animation:
                        media_ref.animation || playlist.default_animation,
                    playlist: playlist_id || '',
                    playlist_name: playlist?.name || '',
                    type: media_ref.media_type,
                    start_time: media_ref.start_time || 0,
                    duration:
                        media_ref.play_time ||
                        media_ref.video_length ||
                        playlist?.default_duration ||
                        15 * 1000,
                    valid_from: media_ref.valid_from || valid_from,
                    valid_until: media_ref.valid_until || valid_until,
                    play_hours,
                    getURL: async () =>
                        media_ref
                            ? media_ref.media_type === 'webpage'
                                ? media_ref.media_url
                                : await this._media_cache
                                      .getFile(media_ref.media_url)
                                      .then((_) => URL.createObjectURL(_))
                                      .catch((_) => '')
                            : null,
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

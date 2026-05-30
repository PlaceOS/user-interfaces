import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import * as ts_client from '@placeos/ts-client';
import { MediaAnimation } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { firstValueFrom, of, skip, take } from 'rxjs';

import { MediaCacheService } from '../app/media-cache.service';
import { SignageService } from '../app/signage.service';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        showSignage: jest.fn(),
        responseHeaders: jest.fn(),
        post: jest.fn(),
    };
});

describe('SignageService', () => {
    let spectator: SpectatorService<SignageService>;
    let media_cache: any;

    const create_service = createServiceFactory({
        service: SignageService,
        providers: [MockProvider(MediaCacheService)],
    });

    const create_display = (overrides: Record<string, any> = {}) => ({
        id: 'display-1',
        zones: ['zone-1'],
        playlist_mappings: {
            'display-1': ['base-playlist', 'scheduled-playlist'],
            'zone-1': ['zone-playlist'],
            'trig-fire': ['trigger-playlist'],
        },
        playlist_config: {
            'base-playlist': [
                {
                    id: 'base-playlist',
                    name: 'Base Playlist',
                    enabled: true,
                    default_animation: MediaAnimation.Cut,
                    default_duration: 15000,
                },
                ['media-1'],
            ],
            'zone-playlist': [
                {
                    id: 'zone-playlist',
                    name: 'Zone Playlist',
                    enabled: true,
                    default_animation: MediaAnimation.Cut,
                    default_duration: 20000,
                },
                ['media-2'],
            ],
            'scheduled-playlist': [
                {
                    id: 'scheduled-playlist',
                    name: 'Scheduled Playlist',
                    enabled: true,
                    default_animation: MediaAnimation.Cut,
                    default_duration: 10000,
                    schedules: [
                        {
                            play_at: Math.floor(Date.now() / 1000),
                            play_cron: '',
                            play_period: 10,
                            play_takeover: true,
                        },
                    ],
                },
                ['media-3'],
            ],
            'trigger-playlist': [
                {
                    id: 'trigger-playlist',
                    name: 'Trigger Playlist',
                    enabled: true,
                    default_animation: MediaAnimation.Cut,
                    default_duration: 5000,
                },
                ['media-4'],
            ],
            'random-playlist': [
                {
                    id: 'random-playlist',
                    name: 'Random Playlist',
                    enabled: true,
                    random: true,
                    default_animation: MediaAnimation.Cut,
                    default_duration: 5000,
                },
                ['media-5'],
            ],
        },
        playlist_media: [
            {
                id: 'media-1',
                name: 'Welcome',
                media_type: 'image',
                media_url: '/media-1.jpg',
            },
            {
                id: 'media-2',
                name: 'Zone Video',
                media_type: 'video',
                media_url: '/media-2.mp4',
            },
            {
                id: 'media-3',
                name: 'Scheduled Notice',
                media_type: 'image',
                media_url: '/media-3.jpg',
            },
            {
                id: 'media-4',
                name: 'Triggered Notice',
                media_type: 'webpage',
                media_url: 'https://example.com',
            },
            {
                id: 'media-5',
                name: 'Random Notice',
                media_type: 'image',
                media_url: '/media-5.jpg',
            },
        ],
        plugins: [],
        ...overrides,
    });

    beforeEach(() => {
        jest.useFakeTimers();
        localStorage.clear();
        media_cache = {
            availableFiles: jest.fn(() => ['/stale-file.jpg']),
            requestFilesToCache: jest.fn(() => Promise.resolve(false)),
            invalidateFile: jest.fn(),
            getFile: jest.fn(() => Promise.resolve(new File([], 'cached'))),
        };
        (ts_client.showSignage as jest.Mock).mockReturnValue(
            of(create_display() as any),
        );
        (ts_client.responseHeaders as jest.Mock).mockReturnValue({
            'last-modified': new Date().toUTCString(),
        } as any);
        (ts_client.post as jest.Mock).mockReturnValue(of({} as any));
        spectator = create_service({
            providers: [MockProvider(MediaCacheService, media_cache)],
        });
    });

    afterEach(() => {
        if (spectator?.service) spectator.service.ngOnDestroy();
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should map base and zone playlists into the active media playlist', async () => {
        const playlist_promise = firstValueFrom(
            spectator.service.playlist.pipe(skip(1), take(1)),
        );

        spectator.service.setDisplay('display-1');
        const playlist = await playlist_promise;

        expect(playlist.map((_) => _.id)).toEqual(['media-1', 'media-2']);
        expect(media_cache.availableFiles).toHaveBeenCalledWith('display-1');
        expect(media_cache.requestFilesToCache).toHaveBeenCalled();
        expect(media_cache.requestFilesToCache.mock.calls[0][0]).toHaveLength(
            4,
        );
        expect(media_cache.requestFilesToCache.mock.calls[0][1]).toBe(
            'display-1',
        );
        expect(media_cache.invalidateFile).toHaveBeenCalledWith(
            '/stale-file.jpg',
            'display-1',
        );
    });

    it('should not include signage media that embeds the same display', async () => {
        (ts_client.showSignage as jest.Mock).mockReturnValue(
            of(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist'],
                        'zone-1': [],
                        'trig-fire': ['trigger-playlist'],
                    },
                    playlist_config: {
                        ...create_display().playlist_config,
                        'base-playlist': [
                            {
                                id: 'base-playlist',
                                name: 'Base Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                            },
                            ['media-1', 'self-signage'],
                        ],
                    },
                    playlist_media: [
                        ...create_display().playlist_media,
                        {
                            id: 'self-signage',
                            name: 'Self Signage',
                            media_type: 'webpage',
                            media_uri: '/#/signage/display-1',
                        },
                    ],
                }) as any,
            ),
        );
        const playlist_promise = firstValueFrom(
            spectator.service.playlist.pipe(skip(1), take(1)),
        );

        spectator.service.setDisplay('display-1');
        const playlist = await playlist_promise;

        expect(playlist.map((_) => _.id)).toEqual(['media-1']);
    });

    it('should not include signage media inside an embedded signage player', async () => {
        jest.spyOn(
            spectator.service as any,
            '_isNestedPlayerWindow',
        ).mockReturnValue(true);
        (ts_client.showSignage as jest.Mock).mockReturnValue(
            of(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist'],
                        'zone-1': [],
                        'trig-fire': ['trigger-playlist'],
                    },
                    playlist_config: {
                        ...create_display().playlist_config,
                        'base-playlist': [
                            {
                                id: 'base-playlist',
                                name: 'Base Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                            },
                            ['media-1', 'nested-signage'],
                        ],
                    },
                    playlist_media: [
                        ...create_display().playlist_media,
                        {
                            id: 'nested-signage',
                            name: 'Nested Signage',
                            media_type: 'webpage',
                            media_uri: '/#/signage/display-2',
                        },
                    ],
                }) as any,
            ),
        );
        const playlist_promise = firstValueFrom(
            spectator.service.playlist.pipe(skip(1), take(1)),
        );

        spectator.service.setDisplay('display-1');
        const playlist = await playlist_promise;

        expect(playlist.map((_) => _.id)).toEqual(['media-1']);
    });

    it('should activate scheduled override playlists', async () => {
        spectator.service.setDisplay('display-1');
        await Promise.resolve();

        const override_playlist = spectator.service.override_playlist();

        expect(override_playlist.playlist.map((_) => _.id)).toEqual([
            'media-3',
        ]);
        const [media] = override_playlist.playlist;
        expect(media.valid_from * 1000).toBeLessThanOrEqual(Date.now());
        expect(media.valid_until * 1000).toBeGreaterThan(Date.now());
        expect(override_playlist.ends_at).toBeGreaterThan(Date.now());
    });

    it('should set and clear playlist overrides manually', () => {
        spectator.service.setPlaylistOverride([
            { id: 'override-1', playlist: 'playlist-1' } as any,
        ]);
        expect(spectator.service.override_playlist().playlist).toHaveLength(1);

        spectator.service.clearPlaylistOverride();
        expect(spectator.service.override_playlist()).toEqual({
            playlist: [],
            ends_at: 0,
        });
    });

    it('should update non-takeover scheduled playlists on the schedule timer', async () => {
        const now = new Date('2026-01-01T10:00:00Z');
        jest.setSystemTime(now);
        (ts_client.showSignage as jest.Mock).mockReturnValue(
            of(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist', 'future-playlist'],
                        'zone-1': [],
                        'trig-fire': ['trigger-playlist'],
                    },
                    playlist_config: {
                        ...create_display().playlist_config,
                        'future-playlist': [
                            {
                                id: 'future-playlist',
                                name: 'Future Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 10000,
                                schedules: [
                                    {
                                        play_at: Math.floor(
                                            (now.getTime() + 15_000) / 1000,
                                        ),
                                        play_cron: '',
                                        play_period: 1,
                                        play_takeover: false,
                                    },
                                ],
                            },
                            ['media-3'],
                        ],
                    },
                }) as any,
            ),
        );
        const playlists: string[][] = [];
        const subscription = spectator.service.playlist.subscribe((playlist) =>
            playlists.push(playlist.map((_) => _.id)),
        );

        spectator.service.setDisplay('display-1');
        await Promise.resolve();
        expect(playlists.at(-1)).toEqual(['media-1']);

        jest.advanceTimersByTime(15_000);
        await Promise.resolve();

        expect(playlists.at(-1)).toEqual(['media-1', 'media-3']);
        subscription.unsubscribe();
    });

    it('should end late-detected scheduled overrides at the schedule end time', async () => {
        const starts_at = new Date('2026-01-01T10:00:00Z').getTime();
        jest.setSystemTime(starts_at + 5 * 60 * 1000);
        (ts_client.showSignage as jest.Mock).mockReturnValue(
            of(
                create_display({
                    playlist_config: {
                        ...create_display().playlist_config,
                        'scheduled-playlist': [
                            {
                                id: 'scheduled-playlist',
                                name: 'Scheduled Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 10000,
                                schedules: [
                                    {
                                        play_at: Math.floor(starts_at / 1000),
                                        play_cron: '',
                                        play_period: 10,
                                        play_takeover: true,
                                    },
                                ],
                            },
                            ['media-3'],
                        ],
                    },
                }) as any,
            ),
        );

        spectator.service.setDisplay('display-1');
        await Promise.resolve();

        expect(spectator.service.override_playlist().ends_at).toBe(
            starts_at + 10 * 60 * 1000,
        );
    });

    it('should not retrigger completed single-pass scheduled overrides', async () => {
        const now = new Date('2026-01-01T10:00:00Z').getTime();
        jest.setSystemTime(now);
        (ts_client.showSignage as jest.Mock).mockReturnValue(
            of(
                create_display({
                    playlist_config: {
                        ...create_display().playlist_config,
                        'scheduled-playlist': [
                            {
                                id: 'scheduled-playlist',
                                name: 'Scheduled Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 10000,
                                schedules: [
                                    {
                                        play_at: Math.floor(now / 1000),
                                        play_cron: '',
                                        play_period: 0,
                                        play_takeover: true,
                                    },
                                ],
                            },
                            ['media-3'],
                        ],
                    },
                }) as any,
            ),
        );

        spectator.service.setDisplay('display-1');
        await Promise.resolve();
        expect(spectator.service.override_playlist().playlist).toHaveLength(1);

        spectator.service.clearPlaylistOverride();
        jest.advanceTimersByTime(15_000);
        await Promise.resolve();

        expect(spectator.service.override_playlist().playlist).toHaveLength(0);
    });

    it('should store metric events and ignore playlist counts for random playlists', async () => {
        (ts_client.showSignage as jest.Mock).mockReturnValue(
            of(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist', 'random-playlist'],
                        'zone-1': [],
                        'trig-fire': ['trigger-playlist'],
                    },
                }) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await firstValueFrom(spectator.service.playlist.pipe(skip(1), take(1)));

        await spectator.service.storeMetricEvent({
            type: 'media_count',
            ref_id: 'media-1',
        });
        await spectator.service.storeMetricEvent({
            type: 'playlist_count',
            ref_id: 'base-playlist',
        });
        await spectator.service.storeMetricEvent({
            type: 'playlist_through',
            ref_id: 'base-playlist',
        });
        await spectator.service.storeMetricEvent({
            type: 'playlist_count',
            ref_id: 'random-playlist',
        });

        expect((spectator.service as any)._metrics).toEqual({
            media_counts: { 'media-1': 1 },
            playlist_counts: { 'base-playlist': 1 },
            play_through_counts: { 'base-playlist': 1 },
        });
    });

    it('should handle trigger overrides when no override is active', async () => {
        spectator.service.setDisplay('display-1');
        await firstValueFrom(spectator.service.display.pipe(take(1)));
        spectator.service.clearPlaylistOverride();

        await (spectator.service as any)._handleTrigger('trig-fire');

        expect(
            spectator.service.override_playlist().playlist.map((_) => _.id),
        ).toEqual(['media-4']);
    });

    it('should post metrics and reset counters', async () => {
        spectator.service.setDisplay('display-1');
        await spectator.service.storeMetricEvent({
            type: 'media_count',
            ref_id: 'media-1',
        });

        (spectator.service as any)._postMetrics();
        jest.runOnlyPendingTimers();
        await Promise.resolve();

        expect(ts_client.post).toHaveBeenCalledWith(
            '/api/engine/v2/signage/display-1/metrics',
            {
                media_counts: { 'media-1': 1 },
                playlist_counts: {},
                play_through_counts: {},
            },
        );
        expect((spectator.service as any)._metrics).toEqual({
            media_counts: {},
            playlist_counts: {},
            play_through_counts: {},
        });
    });
});

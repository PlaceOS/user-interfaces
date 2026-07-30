import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import * as ts_client from '@placeos/ts-client';
import { MediaAnimation } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { MediaCacheService } from '../app/media-cache.service';
import { setMockTime } from '../app/media-helpers';
import { SignageService } from '../app/signage.service';

/**
 * Flush the microtask queue so the async display load (and its downstream
 * media-cache sync / schedule checks) settle. Fake timers do not auto-flush
 * promises, so several rounds are awaited to cover the chained awaits.
 */
const flush = async () => {
    for (let i = 0; i < 8; i++) await Promise.resolve();
};

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageService', () => {
    let spectator: SpectatorService<SignageService>;
    let media_cache: any;
    let trigger_binding: any;

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
                media_uri: '/media-1.jpg',
            },
            {
                id: 'media-2',
                name: 'Zone Video',
                media_type: 'video',
                media_uri: '/media-2.mp4',
            },
            {
                id: 'media-3',
                name: 'Scheduled Notice',
                media_type: 'image',
                media_uri: '/media-3.jpg',
            },
            {
                id: 'media-4',
                name: 'Triggered Notice',
                media_type: 'webpage',
                media_uri: 'https://example.com',
            },
            {
                id: 'media-5',
                name: 'Random Notice',
                media_type: 'image',
                media_uri: '/media-5.jpg',
            },
        ],
        plugins: [],
        ...overrides,
    });

    beforeEach(() => {
        vi.useFakeTimers();
        localStorage.clear();
        media_cache = {
            availableFiles: vi.fn(() => ['/stale-file.jpg']),
            requestFilesToCache: vi.fn(() => Promise.resolve(false)),
            invalidateFile: vi.fn(),
            getFile: vi.fn(() => Promise.resolve(new File([], 'cached'))),
        };
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(create_display() as any),
        );
        (ts_client.querySignagePlugins as any).mockReturnValue(
            Promise.resolve({ data: [] } as any),
        );
        trigger_binding = {
            bindThenSubscribe: vi.fn(() => ({ unsubscribe: vi.fn() })),
        };
        (ts_client.getModule as any).mockReturnValue({
            variable: vi.fn(() => trigger_binding),
        });
        (ts_client.post as any).mockReturnValue(Promise.resolve({} as any));
        spectator = create_service({
            providers: [MockProvider(MediaCacheService, media_cache)],
        });
    });

    afterEach(() => {
        if (spectator?.service) spectator.service.ngOnDestroy();
        setMockTime(0);
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should map base and zone playlists into the active media playlist', async () => {
        spectator.service.setDisplay('display-1');
        await flush();
        const playlist = spectator.service.playlist();

        expect(playlist.map((_) => _.id)).toEqual(['media-1', 'media-2']);
        expect(media_cache.availableFiles).toHaveBeenCalledWith('display-1');
        expect(media_cache.requestFilesToCache).toHaveBeenCalled();
        const cache_call = media_cache.requestFilesToCache.mock.calls.find(
            ([urls]) => urls.length,
        );
        expect(cache_call?.[0]).toEqual([
            '/media-1.jpg',
            '/media-2.mp4',
            '/media-3.jpg',
        ]);
        expect(cache_call?.[1]).toBe('display-1');
        expect(cache_call?.[2]).toEqual({ prune_other_owners: true });
        expect(media_cache.invalidateFile).toHaveBeenCalledWith(
            '/stale-file.jpg',
            'display-1',
        );
    });

    it('should cache media for playlists scheduled later in the day', async () => {
        vi.setSystemTime(new Date('2026-01-01T22:00:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': ['morning-playlist'] },
                    playlist_config: {
                        'morning-playlist': [
                            {
                                id: 'morning-playlist',
                                name: 'Morning Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                                schedules: [
                                    {
                                        play_at: 0,
                                        play_cron: '0 6 * * *',
                                        play_period: 12 * 60,
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
        spectator.service.setDisplay('display-1');
        await flush();

        expect(spectator.service.playlist()).toHaveLength(0);
        const cache_call = media_cache.requestFilesToCache.mock.calls.find(
            ([urls]) => urls.length,
        );
        expect(cache_call?.[0]).toEqual(['/media-3.jpg']);
    });

    it('should cache media once a schedule comes into look-ahead range', async () => {
        vi.setSystemTime(new Date('2026-01-01T00:00:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': ['monthly-playlist'] },
                    playlist_config: {
                        'monthly-playlist': [
                            {
                                id: 'monthly-playlist',
                                name: 'Monthly Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                                schedules: [
                                    {
                                        play_at: 0,
                                        play_cron: '0 6 3 * *',
                                        play_period: 12 * 60,
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
        spectator.service.setDisplay('display-1');
        await flush();
        // Over 24 hours out, so nothing is downloaded yet
        expect(
            media_cache.requestFilesToCache.mock.calls.find(
                ([urls]) => urls.length,
            ),
        ).toBeUndefined();

        // Move to within the look-ahead window and let the schedule tick run
        vi.setSystemTime(new Date('2026-01-02T12:00:00'));
        vi.advanceTimersByTime(15_000);
        await flush();

        const cache_call = media_cache.requestFilesToCache.mock.calls.find(
            ([urls]) => urls.length,
        );
        expect(cache_call?.[0]).toEqual(['/media-3.jpg']);
    });

    it('should release cached media once a schedule has finished', async () => {
        const now = new Date('2026-01-01T10:00:00');
        vi.setSystemTime(now);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist', 'one-off-playlist'],
                    },
                    playlist_config: {
                        ...create_display().playlist_config,
                        'one-off-playlist': [
                            {
                                id: 'one-off-playlist',
                                name: 'One Off Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                                schedules: [
                                    {
                                        play_at: Math.floor(
                                            now.getTime() / 1000,
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
        spectator.service.setDisplay('display-1');
        await flush();
        expect(
            media_cache.requestFilesToCache.mock.calls.find(
                ([urls]) => urls.length,
            )?.[0],
        ).toEqual(['/media-1.jpg', '/media-3.jpg']);
        media_cache.requestFilesToCache.mockClear();

        vi.setSystemTime(new Date('2026-01-01T10:02:00'));
        vi.advanceTimersByTime(15_000);
        await flush();

        const cache_call = media_cache.requestFilesToCache.mock.calls.find(
            ([urls]) => urls.length,
        );
        expect(cache_call?.[0]).toEqual(['/media-1.jpg']);
    });

    it('should not re-sync the media cache while the media set is unchanged', async () => {
        spectator.service.setDisplay('display-1');
        await flush();
        media_cache.requestFilesToCache.mockClear();

        vi.advanceTimersByTime(15_000);
        await flush();

        expect(media_cache.requestFilesToCache).not.toHaveBeenCalled();
    });

    it('should not re-sync the media cache for playlists that play in random order', async () => {
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': ['random-playlist'] },
                    playlist_config: {
                        'random-playlist': [
                            {
                                id: 'random-playlist',
                                name: 'Random Playlist',
                                enabled: true,
                                random: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 5000,
                            },
                            ['media-1', 'media-2', 'media-5'],
                        ],
                    },
                }) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        media_cache.requestFilesToCache.mockClear();

        // Three ticks, staying under the one minute display poll so only the
        // schedule tick can trigger a sync. A stable three item playlist
        // shuffles back into the same order roughly one time in six.
        for (let i = 0; i < 3; i++) {
            vi.advanceTimersByTime(15_000);
            await flush();
        }

        expect(media_cache.requestFilesToCache).not.toHaveBeenCalled();
    });

    it('should not cache media for playlists scheduled beyond the look-ahead', async () => {
        vi.setSystemTime(new Date('2026-01-01T22:00:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': ['monthly-playlist'] },
                    playlist_config: {
                        'monthly-playlist': [
                            {
                                id: 'monthly-playlist',
                                name: 'Monthly Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                                schedules: [
                                    {
                                        play_at: 0,
                                        play_cron: '0 6 15 * *',
                                        play_period: 12 * 60,
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
        spectator.service.setDisplay('display-1');
        await flush();

        const cache_call = media_cache.requestFilesToCache.mock.calls.find(
            ([urls]) => urls.length,
        );
        expect(cache_call).toBeUndefined();
    });

    it('should rank active media ahead of look-ahead media for cache eviction', async () => {
        vi.setSystemTime(new Date('2026-01-01T22:00:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist', 'morning-playlist'],
                    },
                    playlist_config: {
                        ...create_display().playlist_config,
                        'morning-playlist': [
                            {
                                id: 'morning-playlist',
                                name: 'Morning Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                                schedules: [
                                    {
                                        play_at: 0,
                                        play_cron: '0 6 * * *',
                                        play_period: 12 * 60,
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
        spectator.service.setDisplay('display-1');
        await flush();

        const cache_call = media_cache.requestFilesToCache.mock.calls.find(
            ([urls]) => urls.length,
        );
        expect(cache_call?.[0]).toEqual(['/media-1.jpg', '/media-3.jpg']);
    });

    it('should request media that is missing from the cache when resolving its URL', async () => {
        const object_url = vi.fn(() => 'blob:recovered');
        Object.defineProperty(URL, 'createObjectURL', {
            configurable: true,
            value: object_url,
        });
        media_cache.getFile
            .mockRejectedValueOnce(new Error('Unable to find file with URL'))
            .mockResolvedValueOnce(new File([], 'recovered'));
        spectator.service.setDisplay('display-1');
        await flush();
        media_cache.requestFilesToCache.mockClear();
        const [item] = spectator.service.playlist();

        const url = await item.getURL();

        expect(media_cache.requestFilesToCache).toHaveBeenCalledWith(
            ['/media-1.jpg'],
            'display-1',
        );
        expect(url).toBe('blob:recovered');
    });

    it('should rate limit recovery downloads for the same media file', async () => {
        Object.defineProperty(URL, 'createObjectURL', {
            configurable: true,
            value: vi.fn(() => 'blob:recovered'),
        });
        media_cache.getFile.mockRejectedValue(
            new Error('Unable to find file with URL'),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        media_cache.requestFilesToCache.mockClear();
        const [item] = spectator.service.playlist();

        expect(await item.getURL()).toBe('');
        expect(await item.getURL()).toBe('');
        expect(await item.getURL()).toBe('');

        expect(media_cache.requestFilesToCache).toHaveBeenCalledTimes(1);
    });

    it('should retry a recovery download after the rate limit has passed', async () => {
        Object.defineProperty(URL, 'createObjectURL', {
            configurable: true,
            value: vi.fn(() => 'blob:recovered'),
        });
        media_cache.getFile.mockRejectedValue(
            new Error('Unable to find file with URL'),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        media_cache.requestFilesToCache.mockClear();
        const [item] = spectator.service.playlist();
        await item.getURL();

        vi.advanceTimersByTime(15_000);
        await item.getURL();

        expect(media_cache.requestFilesToCache).toHaveBeenCalledTimes(2);
    });

    it('should play a playlist scheduled for the morning after an empty night', async () => {
        Object.defineProperty(URL, 'createObjectURL', {
            configurable: true,
            value: vi.fn(() => 'blob:morning'),
        });
        vi.setSystemTime(new Date('2026-01-01T22:00:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': ['morning-playlist'] },
                    playlist_config: {
                        'morning-playlist': [
                            {
                                id: 'morning-playlist',
                                name: 'Morning Playlist',
                                enabled: true,
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                                schedules: [
                                    {
                                        play_at: 0,
                                        play_cron: '0 6 * * *',
                                        play_period: 12 * 60,
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
        spectator.service.setDisplay('display-1');
        await flush();
        // Nothing plays overnight, but the morning media is already downloaded
        expect(spectator.service.playlist()).toHaveLength(0);
        expect(
            media_cache.requestFilesToCache.mock.calls.find(
                ([urls]) => urls.length,
            )?.[0],
        ).toEqual(['/media-3.jpg']);

        vi.setSystemTime(new Date('2026-01-02T06:00:02'));
        vi.advanceTimersByTime(15_000);
        await flush();
        const playlist = spectator.service.playlist();

        expect(playlist.map((_) => _.id)).toEqual(['media-3']);
        expect(playlist[0].valid_from * 1000).toBe(
            new Date('2026-01-02T06:00:00').getTime(),
        );
        expect(playlist[0].valid_until * 1000).toBe(
            new Date('2026-01-02T18:00:00').getTime(),
        );
        await expect(playlist[0].getURL()).resolves.toBe('blob:morning');
    });

    it('should bind trigger playlists when display data is loaded', async () => {
        spectator.service.setDisplay('display-1');
        await flush();

        expect(ts_client.getModule).toHaveBeenCalledWith(
            'display-1',
            '_TRIGGER__1',
        );
        expect(trigger_binding.bindThenSubscribe).toHaveBeenCalledWith(
            expect.any(Function),
        );
    });

    it('should resolve plugin media URLs from the plugin catalogue', async () => {
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist'],
                        'zone-1': [],
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
                            ['plugin-media'],
                        ],
                    },
                    playlist_media: [
                        {
                            id: 'plugin-media',
                            name: 'Weather Plugin',
                            media_type: 'plugin',
                            media_uri: '',
                            plugin_id: 'weather-plugin',
                            plugin_params: { theme: 'dark' },
                        },
                    ],
                    plugins: [],
                }) as any,
            ),
        );
        (ts_client.querySignagePlugins as any).mockReturnValue(
            Promise.resolve({
                data: [
                    {
                        id: 'weather-plugin',
                        name: 'Weather',
                        uri: '/plugins/weather/index.html',
                        defaults: { units: 'metric' },
                    },
                ],
            } as any),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        const [plugin_item] = spectator.service.playlist();

        expect(plugin_item.plugin?.uri).toBe('/plugins/weather/index.html');
        expect(plugin_item.plugin_params).toEqual({
            units: 'metric',
            theme: 'dark',
        });
        await expect(plugin_item.getURL()).resolves.toBe(
            '/plugins/weather/index.html',
        );
    });

    it('should track whether playlist or media validity controls the item window', async () => {
        const now = Date.UTC(2026, 0, 1, 10, 0, 0);
        setMockTime(now);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: {
                        'display-1': ['playlist-source', 'media-source'],
                    },
                    playlist_config: {
                        'playlist-source': [
                            {
                                id: 'playlist-source',
                                name: 'Playlist Source',
                                enabled: true,
                                valid_from: Math.floor(
                                    (now + 60 * 60 * 1000) / 1000,
                                ),
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                            },
                            ['playlist-controlled-media'],
                        ],
                        'media-source': [
                            {
                                id: 'media-source',
                                name: 'Media Source',
                                enabled: true,
                                valid_from: Math.floor(
                                    (now + 60 * 60 * 1000) / 1000,
                                ),
                                default_animation: MediaAnimation.Cut,
                                default_duration: 15000,
                            },
                            ['media-controlled-media'],
                        ],
                    },
                    playlist_media: [
                        {
                            id: 'playlist-controlled-media',
                            name: 'Playlist Controlled',
                            media_type: 'image',
                            media_uri: '/playlist-controlled.jpg',
                        },
                        {
                            id: 'media-controlled-media',
                            name: 'Media Controlled',
                            media_type: 'image',
                            media_uri: '/media-controlled.jpg',
                            valid_from: Math.floor(
                                (now + 2 * 60 * 60 * 1000) / 1000,
                            ),
                        },
                    ],
                }) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        const playlist = spectator.service.playlist();

        expect(
            playlist.find((_) => _.id === 'playlist-controlled-media')?.validity
                ?.valid_from_source,
        ).toBe('playlist');
        expect(
            playlist.find((_) => _.id === 'media-controlled-media')?.validity
                ?.valid_from_source,
        ).toBe('media');
    });

    it('should not allow embedded players to prune other display caches', async () => {
        vi.spyOn(
            spectator.service as any,
            '_isNestedPlayerWindow',
        ).mockReturnValue(true);

        spectator.service.setDisplay('display-1');
        await flush();

        const cache_call = media_cache.requestFilesToCache.mock.calls.find(
            ([urls]) => urls.length,
        );
        expect(cache_call?.[2]).toEqual({ prune_other_owners: false });
    });

    it('should not clear another display cache when display loading fails', async () => {
        localStorage.setItem(
            'PlaceOS.SIGNAGE.display_details.display-1',
            JSON.stringify(create_display()),
        );
        (ts_client.showSignage as any).mockImplementation(() =>
            Promise.reject(new Error('display unavailable')),
        );
        spectator.service.setDisplay('display-2');
        await flush();
        const display = spectator.service.display();

        expect(display).toEqual(
            expect.objectContaining({
                playlist_media: [],
                plugins: [],
            }),
        );
        expect(
            JSON.parse(
                localStorage.getItem(
                    'PlaceOS.SIGNAGE.display_details.display-1',
                ) || '{}',
            ).id,
        ).toBe('display-1');
        expect(
            localStorage.getItem('PlaceOS.SIGNAGE.display_details.display-2'),
        ).toBeNull();
    });

    it('should not prune media cache when display loading has no matching fallback', async () => {
        (ts_client.showSignage as any).mockImplementation(() =>
            Promise.reject(new Error('display unavailable')),
        );
        media_cache.availableFiles.mockClear();
        media_cache.requestFilesToCache.mockClear();
        media_cache.invalidateFile.mockClear();

        spectator.service.setDisplay('display-2');
        await flush();

        expect(media_cache.availableFiles).not.toHaveBeenCalled();
        expect(media_cache.requestFilesToCache).not.toHaveBeenCalled();
        expect(media_cache.invalidateFile).not.toHaveBeenCalled();
    });

    it('should apply a changed schedule when last modified is unchanged', async () => {
        const now = new Date('2026-01-01T10:05:00');
        vi.setSystemTime(now);
        const scheduled_display = (play_cron: string) =>
            create_display({
                playlist_mappings: {
                    'display-1': ['scheduled-playlist'],
                    'zone-1': [],
                    'trig-fire': ['trigger-playlist'],
                },
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
                                    play_at: 0,
                                    play_cron,
                                    play_period: 10,
                                    play_takeover: false,
                                },
                            ],
                        },
                        ['media-3'],
                    ],
                },
            });
        (ts_client.showSignage as any)
            .mockResolvedValueOnce(scheduled_display('0 9 * * *'))
            .mockResolvedValueOnce(scheduled_display('0 10 * * *'));
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.playlist()).toHaveLength(0);

        await (spectator.service as any)._reloadDisplay();
        await flush();

        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-3',
        ]);
        expect(ts_client.showSignage).toHaveBeenLastCalledWith(
            'display-1',
            expect.any(Object),
        );
    });

    it('should not include signage media that embeds the same display', async () => {
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
        spectator.service.setDisplay('display-1');
        await flush();
        const playlist = spectator.service.playlist();

        expect(playlist.map((_) => _.id)).toEqual(['media-1']);
    });

    it('should not include signage media inside an embedded signage player', async () => {
        vi.spyOn(
            spectator.service as any,
            '_isNestedPlayerWindow',
        ).mockReturnValue(true);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
        spectator.service.setDisplay('display-1');
        await flush();
        const playlist = spectator.service.playlist();

        expect(playlist.map((_) => _.id)).toEqual(['media-1']);
    });

    it('should activate scheduled override playlists', async () => {
        spectator.service.setDisplay('display-1');
        await flush();

        const override_playlist = spectator.service.override_playlist();

        expect(override_playlist.playlist.map((_) => _.id)).toEqual([
            'media-3',
        ]);
        const [media] = override_playlist.playlist;
        expect(media.valid_from * 1000).toBeLessThanOrEqual(Date.now());
        expect(media.valid_until * 1000).toBeGreaterThan(Date.now());
        expect(override_playlist.ends_at).toBeGreaterThan(Date.now());
    });

    it('should clear a scheduled override removed from the display', async () => {
        (ts_client.showSignage as any)
            .mockResolvedValueOnce(create_display())
            .mockResolvedValueOnce(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist'],
                        'zone-1': ['zone-playlist'],
                        'trig-fire': ['trigger-playlist'],
                    },
                }),
            );
        spectator.service.setDisplay('display-1');
        await flush();
        expect(
            spectator.service.override_playlist().playlist.map((_) => _.id),
        ).toEqual(['media-3']);

        await (spectator.service as any)._reloadDisplay();
        await flush();

        expect(spectator.service.override_playlist()).toEqual({
            playlist: [],
            ends_at: 0,
        });
    });

    it('should remove one takeover while keeping another active', async () => {
        const second_takeover = {
            id: 'second-takeover',
            name: 'Second Takeover',
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
        };
        const display_with = (playlist_ids: string[]) =>
            create_display({
                playlist_mappings: {
                    'display-1': playlist_ids,
                    'zone-1': [],
                    'trig-fire': ['trigger-playlist'],
                },
                playlist_config: {
                    ...create_display().playlist_config,
                    'second-takeover': [second_takeover, ['media-5']],
                },
            });
        (ts_client.showSignage as any)
            .mockResolvedValueOnce(
                display_with(['scheduled-playlist', 'second-takeover']),
            )
            .mockResolvedValueOnce(display_with(['second-takeover']));
        spectator.service.setDisplay('display-1');
        await flush();
        expect(
            spectator.service.override_playlist().playlist.map((_) => _.id),
        ).toEqual(['media-3', 'media-5']);

        await (spectator.service as any)._reloadDisplay();
        await flush();

        expect(
            spectator.service.override_playlist().playlist.map((_) => _.id),
        ).toEqual(['media-5']);
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
        vi.setSystemTime(now);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
        ]);

        vi.advanceTimersByTime(15_000);
        await flush();

        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
            'media-3',
        ]);
    });

    it('should update scheduled playlists quickly while debug time is fast-forwarding', async () => {
        const now = new Date('2026-01-01T10:00:00Z');
        vi.setSystemTime(now);
        setMockTime(now.getTime(), 64);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
        ]);

        vi.advanceTimersByTime(250);
        await flush();

        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
            'media-3',
        ]);
    });

    it('should end late-detected scheduled overrides at the schedule end time', async () => {
        const starts_at = new Date('2026-01-01T10:00:00Z').getTime();
        vi.setSystemTime(starts_at + 5 * 60 * 1000);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
        await flush();

        expect(spectator.service.override_playlist().ends_at).toBe(
            starts_at + 10 * 60 * 1000,
        );
    });

    it('should activate an in-progress cron takeover detected after it fired', async () => {
        const fired_at = new Date('2026-01-01T09:00:00');
        // Boot the display two hours into an eight-hour takeover window.
        vi.setSystemTime(fired_at.getTime() + 2 * 60 * 60 * 1000);
        const cron = `${fired_at.getMinutes()} ${fired_at.getHours()} * * *`;
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
                                        play_at: 0,
                                        play_cron: cron,
                                        play_period: 8 * 60,
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
        await flush();

        expect(
            spectator.service.override_playlist().playlist.map((_) => _.id),
        ).toEqual(['media-3']);
        expect(spectator.service.override_playlist().ends_at).toBe(
            fired_at.getTime() + 8 * 60 * 60 * 1000,
        );
    });

    it('should use the most recent cron run when several fall in the play period', async () => {
        // Fires every 6 hours and each run lasts 12 hours, so at 07:00 the
        // 06:00 run is the active one and it should end at 18:00.
        vi.setSystemTime(new Date('2026-01-01T07:00:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
                                        play_at: 0,
                                        play_cron: '0 */6 * * *',
                                        play_period: 12 * 60,
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
        await flush();

        expect(spectator.service.override_playlist().ends_at).toBe(
            new Date('2026-01-01T18:00:00').getTime(),
        );
    });

    it('should not expire single-pass scheduled media with the trigger window', async () => {
        const fired_at = new Date('2026-01-01T06:00:00');
        vi.setSystemTime(fired_at.getTime() + 2000);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
                                        play_at: 0,
                                        play_cron: '0 6 * * *',
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
        await flush();
        const [media] = spectator.service.override_playlist().playlist;

        expect(media?.id).toBe('media-3');
        expect(media.valid_until).toBe(0);
        expect(spectator.service.override_playlist().ends_at).toBe(0);
    });

    it('should still expire scheduled media at the end of a play period', async () => {
        const fired_at = new Date('2026-01-01T06:00:00');
        vi.setSystemTime(fired_at.getTime() + 2000);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
                                        play_at: 0,
                                        play_cron: '0 6 * * *',
                                        play_period: 12 * 60,
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
        await flush();
        const [media] = spectator.service.override_playlist().playlist;

        expect(media.valid_until * 1000).toBe(
            fired_at.getTime() + 12 * 60 * 60 * 1000,
        );
    });

    it('should not retrigger completed single-pass scheduled overrides', async () => {
        const now = new Date('2026-01-01T10:00:00Z').getTime();
        vi.setSystemTime(now);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
        await flush();
        expect(spectator.service.override_playlist().playlist).toHaveLength(1);

        spectator.service.clearPlaylistOverride();
        vi.advanceTimersByTime(15_000);
        await flush();

        expect(spectator.service.override_playlist().playlist).toHaveLength(0);
    });

    it('should keep evaluating schedules after a failed tick', async () => {
        spectator.service.setDisplay('display-1');
        await flush();
        const check_overrides = vi
            .spyOn(spectator.service as any, '_checkScheduledOverrides')
            .mockImplementationOnce(() => {
                throw new Error('schedule evaluation failed');
            });

        vi.advanceTimersByTime(15_000);
        await flush();
        vi.advanceTimersByTime(15_000);
        await flush();

        expect(check_overrides).toHaveBeenCalledTimes(2);
    });

    it('should store metric events and ignore playlist counts for random playlists', async () => {
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
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
        await flush();

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
        await flush();
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
        vi.runOnlyPendingTimers();
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

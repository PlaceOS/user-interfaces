import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
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

    /** A display whose `scheduled-playlist` uses the given schedules and media */
    const display_with_schedules = (
        schedules: Record<string, unknown>[],
        media = ['media-3'],
        playlist: Record<string, unknown> = {},
    ) =>
        create_display({
            playlist_config: {
                ...create_display().playlist_config,
                'scheduled-playlist': [
                    {
                        id: 'scheduled-playlist',
                        name: 'Scheduled Playlist',
                        enabled: true,
                        default_animation: MediaAnimation.Cut,
                        default_duration: 15000,
                        schedules,
                        ...playlist,
                    },
                    media,
                ],
            },
        });

    beforeEach(() => {
        vi.useFakeTimers();
        localStorage.clear();
        media_cache = {
            availableFiles: vi.fn(() => ['/stale-file.jpg']),
            requestFilesToCache: vi.fn(() => Promise.resolve(false)),
            invalidateFile: vi.fn(() => Promise.resolve()),
            getFile: vi.fn(() => Promise.resolve(new File([], 'cached'))),
            fetchFile: vi.fn(() => Promise.resolve(null)),
            directURL: vi.fn((url: string) => url),
            cacheState: vi.fn(() => ({
                file_count: 2,
                cached_count: 1,
                total_bytes: 10,
                limit_bytes: 100,
                files: [],
            })),
        };
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(create_display() as any),
        );
        (ts_client.querySignagePlugins as any).mockReturnValue(
            Promise.resolve({ data: [] } as any),
        );
        (ts_client.responseHeaders as any).mockReturnValue({});
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

    it('converts API animation indexes before items reach the player', async () => {
        const display = create_display({
            playlist_mappings: { 'display-1': ['base-playlist'] },
            playlist_config: {
                'base-playlist': [
                    {
                        id: 'base-playlist',
                        enabled: true,
                        default_animation: 3,
                    },
                    ['media-1', 'media-2', 'media-3'],
                ],
            },
            playlist_media: [
                {
                    id: 'media-1',
                    name: 'Cut',
                    media_type: 'image',
                    animation: 1,
                },
                {
                    id: 'media-2',
                    name: 'Fade',
                    media_type: 'image',
                    animation: 2,
                },
                {
                    id: 'media-3',
                    name: 'Playlist default',
                    media_type: 'image',
                    animation: 0,
                },
            ],
        });
        vi.mocked(ts_client.showSignage).mockResolvedValue(display);
        spectator.service.setDisplay('display-1');
        await flush();
        expect(
            spectator.service.playlist().find((item) => item.id === 'media-1')
                .animation,
        ).toBe(MediaAnimation.Cut);
        expect(
            spectator.service.playlist().find((item) => item.id === 'media-2')
                .animation,
        ).toBe(MediaAnimation.CrossFade);
        expect(
            spectator.service.playlist().find((item) => item.id === 'media-3')
                .animation,
        ).toBe(MediaAnimation.SlideTop);
    });

    it('should report scheduling and cache state for diagnostics', async () => {
        spectator.service.setDisplay('display-1');
        await flush();

        const state = spectator.service.diagnostics();

        expect(state.display_id).toBe('display-1');
        expect(state.poll.interval_ms).toBe(60_000);
        expect(state.poll.last_success).not.toBe('never');
        expect(state.poll.next_due).not.toBe('never');
        expect(state.active_media.map((_) => _.id)).toEqual([
            'media-1',
            'media-2',
        ]);
        expect(state.playlists.mapped).toContain('base-playlist');
        expect(state.playlists.takeover.media.map((_) => _.id)).toEqual([
            'media-3',
        ]);
        expect(state.media_cache.file_count).toBe(2);
    });

    it('should list upcoming schedules in playback order', async () => {
        vi.setSystemTime(new Date('2026-01-01T10:00:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': ['evening', 'morning'] },
                    playlist_config: {
                        evening: [
                            {
                                id: 'evening',
                                name: 'Evening',
                                enabled: true,
                                schedules: [
                                    {
                                        play_at: 0,
                                        play_cron: '0 18 * * *',
                                        play_period: 60,
                                    },
                                ],
                            },
                            ['media-1'],
                        ],
                        morning: [
                            {
                                id: 'morning',
                                name: 'Morning',
                                enabled: true,
                                schedules: [
                                    {
                                        play_at: 0,
                                        play_cron: '0 6 * * *',
                                        play_period: 0,
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

        const upcoming = spectator.service.diagnostics().upcoming_schedules;

        // 18:00 today comes before 06:00 tomorrow
        expect(upcoming.map((_) => _.playlist_id)).toEqual([
            'evening',
            'morning',
        ]);
        expect(upcoming[0].starts_at).toBe(
            new Date('2026-01-01T18:00:00').toISOString(),
        );
        expect(upcoming[1].starts_at).toBe(
            new Date('2026-01-02T06:00:00').toISOString(),
        );
        expect(upcoming[1].ends_at).toBe('single pass');
    });

    it.each([false, true])(
        'applies repeating masks to playback and templates, takeover=%s',
        async (play_takeover) => {
            const start = new Date(2026, 2, 2, 9).getTime();
            vi.setSystemTime(start);
            const schedule = {
                play_cron: '* * * * *',
                play_period: 10,
                play_takeover,
                valid_from: start / 1000,
                mask: '01',
            };
            const display = create_display({
                playlist_mappings: { 'display-1': ['scheduled-playlist'] },
                playlist_config: {
                    'scheduled-playlist': [
                        {
                            id: 'scheduled-playlist',
                            enabled: true,
                            schedules: [schedule],
                        },
                        ['media-3'],
                    ],
                },
                template_schedules: [
                    { template_id: 'masked-template', schedule },
                ],
            });
            vi.mocked(ts_client.showSignage).mockResolvedValue(display);
            spectator.service.setDisplay('display-1');
            await flush();
            const playback = () =>
                play_takeover
                    ? spectator.service.override_playlist().playlist
                    : spectator.service.playlist();
            expect(playback()).toHaveLength(0);
            expect(spectator.service.active_templates()).toHaveLength(0);

            vi.advanceTimersByTime(60_000);
            await flush();
            expect(playback().map((item) => item.id)).toEqual(['media-3']);
            expect(
                spectator.service
                    .active_templates()
                    .map((item) => item.template_id),
            ).toEqual(['masked-template']);

            vi.advanceTimersByTime(60_000);
            await flush();
            expect(playback()).toHaveLength(0);
            expect(spectator.service.active_templates()).toHaveLength(0);
        },
    );

    it.each(['0', '01', 'invalid'])(
        'excludes masked one-off runs from playback, cache and upcoming schedules: %s',
        async (mask) => {
            const start = new Date(2026, 2, 2, 9).getTime();
            vi.setSystemTime(start);
            const schedule = {
                play_at: start / 1000 + 60,
                play_period: 10,
                valid_from: start / 1000,
                mask,
            };
            const display = create_display({
                playlist_mappings: { 'display-1': ['scheduled-playlist'] },
                playlist_config: {
                    'scheduled-playlist': [
                        {
                            id: 'scheduled-playlist',
                            enabled: true,
                            schedules: [schedule],
                        },
                        ['media-3'],
                    ],
                },
            });
            vi.mocked(ts_client.showSignage).mockResolvedValue(display);
            spectator.service.setDisplay('display-1');
            await flush();
            expect(spectator.service.diagnostics().upcoming_schedules).toEqual(
                [],
            );
            expect(
                media_cache.requestFilesToCache.mock.calls.every(
                    ([urls]: [string[]]) => urls.length === 0,
                ),
            ).toBe(true);
            vi.advanceTimersByTime(60_000);
            await flush();
            expect(spectator.service.playlist()).toHaveLength(0);
            expect(spectator.service.override_playlist().playlist).toHaveLength(
                0,
            );
        },
    );

    it('plays a local one-off run at the wall-clock time of the display', async () => {
        vi.setSystemTime(new Date(2026, 11, 31, 23, 59, 30));
        const display = create_display({
            playlist_mappings: { 'display-1': ['scheduled-playlist'] },
            playlist_config: {
                'scheduled-playlist': [
                    {
                        id: 'scheduled-playlist',
                        enabled: true,
                        schedules: [
                            {
                                play_at_local: '2027-01-01T00:00:00',
                                // The fallback cron would be active now.
                                play_cron: '0 0 * * *',
                                play_period: 24 * 60,
                            },
                        ],
                    },
                    ['media-3'],
                ],
            },
        });
        vi.mocked(ts_client.showSignage).mockResolvedValue(display);
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.playlist()).toHaveLength(0);
        expect(spectator.service.diagnostics().upcoming_schedules).toEqual([
            expect.objectContaining({
                play_at_local: '2027-01-01T00:00:00',
                starts_at: new Date(2027, 0, 1).toISOString(),
            }),
        ]);

        vi.advanceTimersByTime(60_000);
        await flush();
        expect(spectator.service.playlist().map((item) => item.id)).toEqual([
            'media-3',
        ]);
    });

    it('ignores an invalid local one-off run and does not use the fallback cron', async () => {
        vi.setSystemTime(new Date(2027, 0, 1, 0, 0, 30));
        const display = create_display({
            playlist_mappings: { 'display-1': ['scheduled-playlist'] },
            playlist_config: {
                'scheduled-playlist': [
                    {
                        id: 'scheduled-playlist',
                        enabled: true,
                        schedules: [
                            {
                                play_at_local: '2027-01-01T00:00:00Z',
                                play_cron: '0 0 * * *',
                                play_period: 24 * 60,
                            },
                        ],
                    },
                    ['media-3'],
                ],
            },
        });
        vi.mocked(ts_client.showSignage).mockResolvedValue(display);
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.playlist()).toHaveLength(0);
    });

    it('should stop normal playlist playback when its schedule expires', async () => {
        const now = new Date('2026-01-01T10:00:00Z');
        vi.setSystemTime(now);
        const valid_until = Math.floor((now.getTime() + 30_000) / 1000);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: {
                        'display-1': ['base-playlist', 'scheduled-playlist'],
                        'zone-1': [],
                    },
                    playlist_config: {
                        ...create_display().playlist_config,
                        'scheduled-playlist': [
                            {
                                id: 'scheduled-playlist',
                                name: 'Scheduled Playlist',
                                enabled: true,
                                default_duration: 10_000,
                                schedules: [
                                    {
                                        play_at: Math.floor(
                                            now.getTime() / 1000,
                                        ),
                                        play_period: 10,
                                        play_takeover: false,
                                        valid_until,
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
            'media-3',
        ]);
        expect(
            spectator.service.playlist().find((_) => _.id === 'media-3')
                ?.valid_until,
        ).toBe(valid_until);

        vi.advanceTimersByTime(31_000);
        await flush();

        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
        ]);
    });

    it('should ignore an expired takeover schedule', async () => {
        const now = new Date('2026-01-01T10:00:00Z');
        vi.setSystemTime(now);
        const expired_at = Math.floor((now.getTime() - 1_000) / 1000);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: {
                        'display-1': ['scheduled-playlist'],
                        'zone-1': [],
                    },
                    playlist_config: {
                        ...create_display().playlist_config,
                        'scheduled-playlist': [
                            {
                                id: 'scheduled-playlist',
                                name: 'Scheduled Playlist',
                                enabled: true,
                                default_duration: 10_000,
                                schedules: [
                                    {
                                        play_at: Math.floor(
                                            (now.getTime() - 60_000) / 1000,
                                        ),
                                        play_period: 10,
                                        play_takeover: true,
                                        valid_until: expired_at,
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

        expect(spectator.service.override_playlist().playlist).toEqual([]);
    });

    it('should finish reloading when trigger binding fails', async () => {
        (ts_client.getModule as any).mockImplementation(() => {
            throw new Error('module unavailable');
        });

        spectator.service.setDisplay('display-1');
        await flush();

        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
            'media-2',
        ]);
        expect(media_cache.requestFilesToCache).toHaveBeenCalled();
        expect(
            spectator.service.override_playlist().playlist.map((_) => _.id),
        ).toEqual(['media-3']);
    });

    it('should retry the whole reload after a failure part way through', async () => {
        vi.spyOn(
            spectator.service as any,
            '_syncMediaCache',
        ).mockImplementationOnce(() => {
            throw new Error('cache sync exploded');
        });

        spectator.service.setDisplay('display-1');
        await flush();
        const parse = vi.spyOn(spectator.service as any, '_parseDisplay');

        // The payload has not changed, but the failed pass must not be recorded
        // as handled, so the next poll redoes the work rather than skipping it.
        vi.advanceTimersByTime(60_000);
        await flush();

        expect(parse).toHaveBeenCalled();
    });

    it('should back off media cache retries while downloads keep failing', async () => {
        media_cache.requestFilesToCache.mockResolvedValue(true);
        spectator.service.setDisplay('display-1');
        await flush();
        const service = spectator.service as any;
        service._cache_retry_attempt = 0;
        const timeout = vi.spyOn(service, 'timeout');
        const delays: number[] = [];

        for (let i = 0; i < 6; i++) {
            timeout.mockClear();
            await service._syncMediaCache(spectator.service.display());
            const call = timeout.mock.calls
                .filter(([name]) => name === 'retry_cache')
                .pop();
            delays.push(call?.[2] as number);
        }

        expect(delays).toEqual([
            15_000, 30_000, 60_000, 120_000, 240_000, 300_000,
        ]);
    });

    it('should schedule a retry when the media cache sync throws', async () => {
        media_cache.requestFilesToCache.mockRejectedValue(new Error('boom'));
        spectator.service.setDisplay('display-1');
        await flush();

        const service = spectator.service as any;
        expect(service._cache_retry_attempt).toBe(1);
        expect(service._media_sync_in_flight).toBe(false);
        expect(spectator.service.diagnostics().media_cache.sync_in_flight).toBe(
            false,
        );
    });

    it('should run a sync asked for during another once that one finishes', async () => {
        let finish: (failed: boolean) => void;
        media_cache.requestFilesToCache.mockImplementation(
            () => new Promise<boolean>((resolve) => (finish = resolve)),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        expect(media_cache.requestFilesToCache).toHaveBeenCalledTimes(1);

        const service = spectator.service as any;
        service._syncMediaCache(spectator.service.display());
        await flush();
        expect(media_cache.requestFilesToCache).toHaveBeenCalledTimes(1);
        expect(spectator.service.diagnostics().media_cache.sync_queued).toBe(
            true,
        );

        finish(false);
        await flush();

        expect(media_cache.requestFilesToCache).toHaveBeenCalledTimes(2);
    });

    it('should not let a lost media cache sync block later syncs', async () => {
        spectator.service.setDisplay('display-1');
        await flush();
        const service = spectator.service as any;
        media_cache.requestFilesToCache.mockClear();
        service._media_sync_in_flight = true;
        service._media_sync_started = Date.now() - 31 * 60 * 1000;

        await service._syncMediaCache(spectator.service.display());

        expect(media_cache.requestFilesToCache).toHaveBeenCalledTimes(1);
        expect(service._media_sync_in_flight).toBe(false);
    });

    it('should reset the media cache backoff once downloads succeed', async () => {
        media_cache.requestFilesToCache.mockResolvedValue(true);
        spectator.service.setDisplay('display-1');
        await flush();
        expect((spectator.service as any)._cache_retry_attempt).toBe(1);

        media_cache.requestFilesToCache.mockResolvedValue(false);
        await (spectator.service as any)._syncMediaCache(
            spectator.service.display(),
        );

        expect((spectator.service as any)._cache_retry_attempt).toBe(0);
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should order defaults before active schedules by start and creation time', async () => {
        const now = new Date('2026-01-01T10:30:00Z');
        vi.setSystemTime(now);
        const play_at = (minutes_ago: number) =>
            Math.floor((now.getTime() - minutes_ago * 60_000) / 1000);
        (ts_client.showSignage as any).mockResolvedValue(
            create_display({
                template_schedules: [
                    {
                        template_id: 'template-default',
                        created_at: '2026-01-01T08:00:00Z',
                        schedule: null,
                    },
                    {
                        template_id: 'template-older-start',
                        created_at: '2026-01-01T09:00:00Z',
                        schedule: { play_at: play_at(30), play_period: 60 },
                    },
                    {
                        template_id: 'template-older-tie',
                        created_at: '2026-01-01T09:10:00Z',
                        schedule: { play_at: play_at(15), play_period: 60 },
                    },
                    {
                        template_id: 'template-latest-tie',
                        created_at: '2026-01-01T09:20:00Z',
                        schedule: { play_at: play_at(15), play_period: 60 },
                    },
                ],
            }) as any,
        );

        spectator.service.setDisplay('display-1');
        await flush();

        expect(
            spectator.service
                .active_templates()
                .map((mapping) => mapping.template_id),
        ).toEqual([
            'template-default',
            'template-older-start',
            'template-older-tie',
            'template-latest-tie',
        ]);
    });

    it('should use the default template when no schedule is active', async () => {
        const now = new Date('2026-01-01T10:00:00Z');
        vi.setSystemTime(now);
        (ts_client.showSignage as any).mockResolvedValue(
            create_display({
                template_schedules: [
                    {
                        template_id: 'template-default',
                        schedule: null,
                    },
                    {
                        template_id: 'template-future',
                        schedule: {
                            play_at: Math.floor(
                                (now.getTime() + 15_000) / 1000,
                            ),
                            play_period: 1,
                        },
                    },
                ],
            }) as any,
        );

        spectator.service.setDisplay('display-1');
        await flush();

        expect(spectator.service.active_templates().at(-1)?.template_id).toBe(
            'template-default',
        );

        vi.advanceTimersByTime(15_000);
        await flush();

        expect(spectator.service.active_templates().at(-1)?.template_id).toBe(
            'template-future',
        );
    });

    it('should keep polling the display while nothing is scheduled', async () => {
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': [] },
                    playlist_config: {},
                }) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.playlist()).toHaveLength(0);
        (ts_client.showSignage as any).mockClear();

        for (let i = 0; i < 3; i++) {
            vi.advanceTimersByTime(60_000);
            await flush();
        }

        expect((ts_client.showSignage as any).mock.calls.length).toBe(3);
    });

    it('should keep polling over a long idle period', async () => {
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': [] },
                    playlist_config: {},
                }) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        (ts_client.showSignage as any).mockClear();

        // Four hours, stepped at the schedule tick interval
        for (let i = 0; i < 4 * 60 * 4; i++) {
            vi.advanceTimersByTime(15_000);
            await Promise.resolve();
        }

        expect((ts_client.showSignage as any).mock.calls.length).toBe(4 * 60);
    });

    it('should keep polling after the display request fails', async () => {
        (ts_client.showSignage as any).mockImplementation(() =>
            Promise.reject(new Error('backend unavailable')),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        (ts_client.showSignage as any).mockClear();

        for (let i = 0; i < 3; i++) {
            vi.advanceTimersByTime(60_000);
            await flush();
        }

        expect((ts_client.showSignage as any).mock.calls.length).toBe(3);
    });

    it('should abandon a display request that never settles', async () => {
        localStorage.setItem(
            'PlaceOS.SIGNAGE.display_details.display-1',
            JSON.stringify(create_display()),
        );
        (ts_client.showSignage as any).mockImplementation(
            () => new Promise(() => undefined),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        expect((spectator.service as any)._poll_in_flight).toBe(true);

        // Past the fetch timeout, but before the next poll would be due
        vi.advanceTimersByTime(35_000);
        await flush();

        expect((spectator.service as any)._poll_in_flight).toBe(false);
        // The abandoned request falls back to the last known display details
        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
            'media-2',
        ]);
    });

    it('should keep polling after the display request never settles', async () => {
        (ts_client.showSignage as any).mockImplementation(
            () => new Promise(() => undefined),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        (ts_client.showSignage as any).mockClear();

        for (let i = 0; i < 3; i++) {
            vi.advanceTimersByTime(60_000);
            await flush();
        }

        expect((ts_client.showSignage as any).mock.calls.length).toBe(3);
    });

    it('should recover the display once the backend comes back', async () => {
        (ts_client.showSignage as any).mockImplementationOnce(() =>
            Promise.reject(new Error('backend unavailable')),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.playlist()).toHaveLength(0);

        vi.advanceTimersByTime(60_000);
        await flush();

        expect(spectator.service.playlist().map((_) => _.id)).toEqual([
            'media-1',
            'media-2',
        ]);
    });

    it('should rebuild the poll timer if it stops firing', async () => {
        spectator.service.setDisplay('display-1');
        await flush();
        // Simulate the interval being lost without the service knowing
        (spectator.service as any).clearInterval('poll');
        (ts_client.showSignage as any).mockClear();

        vi.advanceTimersByTime(4 * 60_000);
        await flush();
        (ts_client.showSignage as any).mockClear();
        vi.advanceTimersByTime(60_000);
        await flush();

        expect((ts_client.showSignage as any).mock.calls.length).toBe(1);
    });

    it('should only ask for a preview when debug is enabled', async () => {
        spectator.service.setDisplay('display-1');
        await flush();
        expect(ts_client.showSignage).toHaveBeenLastCalledWith(
            'display-1',
            {},
            { headers: {}, cache: 'no-store' },
        );

        spectator.service.debug.set(true);
        vi.advanceTimersByTime(60_000);
        await flush();

        expect(ts_client.showSignage).toHaveBeenLastCalledWith(
            'display-1',
            { preview: true },
            { headers: {}, cache: 'no-store' },
        );
    });

    it('should carry display validators across item-specific polls', async () => {
        const first_validators = {
            etag: '"display-v1"',
            'last-modified': 'Thu, 03 Sep 2026 01:02:03 GMT',
        };
        const next_validators = {
            etag: 'W/"display-v2"',
            'last-modified': 'Thu, 03 Sep 2026 01:03:04 GMT',
        };
        (ts_client.responseHeaders as any)
            .mockReturnValueOnce(first_validators)
            .mockReturnValueOnce(next_validators);
        spectator.service.setDisplay('display-1');
        await flush();
        spectator.service.playing_id.set('media / 1');

        await (spectator.service as any)._reloadDisplay();
        await flush();

        expect(ts_client.showSignage).toHaveBeenLastCalledWith(
            'display-1',
            { item_id: 'media / 1' },
            {
                headers: {
                    'If-None-Match': first_validators.etag,
                    'If-Modified-Since': first_validators['last-modified'],
                },
                cache: 'no-store',
            },
        );
        expect(ts_client.responseHeaders).toHaveBeenLastCalledWith(
            expect.stringContaining(
                '/signage/display-1?item_id=media%20%2F%201',
            ),
        );

        localStorage.clear();
        spectator.service.playing_id.set('media-2');
        const parse = vi.spyOn(spectator.service as any, '_parseDisplay');
        (ts_client.showSignage as any).mockRejectedValueOnce(
            new Response(null, { status: 304 }),
        );

        await (spectator.service as any)._reloadDisplay();
        await flush();

        expect(ts_client.showSignage).toHaveBeenLastCalledWith(
            'display-1',
            { item_id: 'media-2' },
            {
                headers: {
                    'If-None-Match': next_validators.etag,
                    'If-Modified-Since': next_validators['last-modified'],
                },
                cache: 'no-store',
            },
        );
        expect(parse).not.toHaveBeenCalled();
        expect(spectator.service.display()?.id).toBe('display-1');
    });

    it('should not reload the display when the payload is unchanged', async () => {
        const display = create_display();
        (ts_client.showSignage as any).mockImplementation(() =>
            Promise.resolve(display as any),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        media_cache.requestFilesToCache.mockClear();
        const parse = vi.spyOn(spectator.service as any, '_parseDisplay');

        await (spectator.service as any)._reloadDisplay();
        await flush();

        expect(parse).not.toHaveBeenCalled();
        expect(media_cache.requestFilesToCache).not.toHaveBeenCalled();
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

    it('should keep the order of a random playlist across schedule ticks', async () => {
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                create_display({
                    playlist_mappings: { 'display-1': ['random-playlist'] },
                    playlist_config: {
                        'random-playlist': [
                            {
                                ...create_display().playlist_config[
                                    'random-playlist'
                                ][0],
                            },
                            ['media-1', 'media-2', 'media-3', 'media-5'],
                        ],
                    },
                }) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        const order = spectator.service.playlist().map((_) => _.id);

        // A reshuffle on each tick keeps four items in the same order across
        // four ticks about once in 330,000 runs.
        for (let i = 0; i < 4; i++) {
            vi.advanceTimersByTime(15_000);
            await flush();
            expect(spectator.service.playlist().map((_) => _.id)).toEqual(
                order,
            );
        }
        expect([...order].sort()).toEqual([
            'media-1',
            'media-2',
            'media-3',
            'media-5',
        ]);
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
        media_cache.getFile.mockRejectedValue(
            new Error('Unable to find file with URL'),
        );
        media_cache.fetchFile.mockResolvedValue(new File([], 'recovered'));
        spectator.service.setDisplay('display-1');
        await flush();
        const [item] = spectator.service.playlist();

        const url = await item.getURL();

        expect(media_cache.fetchFile).toHaveBeenCalledWith(
            '/media-1.jpg',
            'display-1',
            expect.any(Number),
        );
        expect(url).toBe('blob:recovered');
    });

    it('should play media from the server when the cache cannot supply it', async () => {
        Object.defineProperty(URL, 'createObjectURL', {
            configurable: true,
            value: vi.fn(() => 'blob:never'),
        });
        media_cache.getFile.mockRejectedValue(new Error('Cache DB not ready'));
        media_cache.fetchFile.mockRejectedValue(
            new Error('Cache DB not ready'),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        const [item] = spectator.service.playlist();

        const url = await item.getURL();

        expect(url).toBe('/media-1.jpg');
        expect(media_cache.directURL).toHaveBeenCalledWith('/media-1.jpg');
        expect(URL.createObjectURL).not.toHaveBeenCalled();
    });

    it('should not wait on the cache indefinitely when resolving a URL', async () => {
        media_cache.getFile.mockResolvedValue(null);
        spectator.service.setDisplay('display-1');
        await flush();
        const [item] = spectator.service.playlist();

        await item.getURL();

        expect(media_cache.getFile).toHaveBeenCalledWith(
            '/media-1.jpg',
            expect.any(Number),
        );
        const [, wait_ms] = media_cache.getFile.mock.calls.at(-1);
        expect(wait_ms).toBeLessThan(30_000);
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
        const [item] = spectator.service.playlist();

        expect(await item.getURL()).toBe('/media-1.jpg');
        expect(await item.getURL()).toBe('/media-1.jpg');
        expect(await item.getURL()).toBe('/media-1.jpg');

        expect(media_cache.fetchFile).toHaveBeenCalledTimes(1);
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
        const [item] = spectator.service.playlist();
        await item.getURL();

        vi.advanceTimersByTime(15_000);
        await item.getURL();

        expect(media_cache.fetchFile).toHaveBeenCalledTimes(2);
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

    it('should only fire a trigger when its value turns true', async () => {
        let emit: (value: unknown) => void = () => undefined;
        // A trigger already held true when the display binds to it.
        trigger_binding.value = true;
        trigger_binding.bindThenSubscribe.mockImplementation(
            (next: (value: unknown) => void) => {
                emit = next;
                next(trigger_binding.value);
                return () => undefined;
            },
        );
        const handle_trigger = vi.spyOn(
            spectator.service as any,
            '_handleTrigger',
        );
        spectator.service.setDisplay('display-1');
        await flush();

        expect(handle_trigger).not.toHaveBeenCalled();
        emit(false);
        expect(handle_trigger).not.toHaveBeenCalled();
        emit(true);
        expect(handle_trigger).toHaveBeenCalledTimes(1);
        expect(handle_trigger).toHaveBeenCalledWith('trig-fire');
        emit(false);
        expect(handle_trigger).toHaveBeenCalledTimes(1);
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
            { headers: {}, cache: 'no-store' },
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

    it('should not treat background schedules of a takeover playlist as takeovers', async () => {
        const day = (time: string) => new Date(`2026-01-05T${time}`).getTime();
        vi.setSystemTime(day('12:02:00'));
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                // Background first, so it is not picked just by coming first
                display_with_schedules([
                    { play_cron: '0 9 * * *', play_period: 8 * 60 },
                    {
                        play_cron: '0 12 * * *',
                        play_period: 10,
                        play_takeover: true,
                    },
                ]) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        const background = () =>
            spectator.service.playlist().find(({ id }) => id === 'media-3');

        const override = spectator.service.override_playlist();
        expect(override.ends_at).toBe(day('12:10:00'));
        expect(override.playlist[0].valid_until * 1000).toBe(day('12:10:00'));
        expect(background()?.valid_until * 1000).toBe(day('17:00:00'));
        const summary = () =>
            spectator.service
                .diagnostics()
                .playlists.active.find(({ id }) => id === 'scheduled-playlist');
        expect(summary()?.takeover).toBe(true);

        vi.advanceTimersByTime(13 * 60 * 1000);
        await flush();

        expect(spectator.service.override_playlist().playlist).toHaveLength(0);
        expect(background()?.valid_until * 1000).toBe(day('17:00:00'));
        expect(summary()?.takeover).toBe(false);
    });

    it('should play a single-pass takeover through after its trigger window', async () => {
        const fired_at = new Date('2026-01-05T06:00:00').getTime();
        vi.setSystemTime(fired_at + 2000);
        const media = [
            'media-1',
            'media-2',
            'media-3',
            'media-5',
            'media-6',
            'media-7',
        ];
        const display = (enabled: boolean) => ({
            ...display_with_schedules(
                [
                    {
                        play_cron: '0 6 * * *',
                        play_period: 0,
                        play_takeover: true,
                    },
                ],
                media,
                { enabled },
            ),
            playlist_media: [
                ...create_display().playlist_media,
                { id: 'media-6', name: 'Six', media_type: 'image' },
                { id: 'media-7', name: 'Seven', media_type: 'image' },
            ],
        });
        (ts_client.showSignage as any).mockResolvedValue(display(true));
        spectator.service.setDisplay('display-1');
        await flush();
        const override_ids = () =>
            spectator.service.override_playlist().playlist.map((_) => _.id);
        expect(override_ids()).toEqual(media);

        // Six 15 second items take 90 seconds, well past the trigger window.
        vi.advanceTimersByTime(60_000);
        await flush();
        expect(override_ids()).toEqual(media);

        // What the player does once it reports `playlist_through`.
        spectator.service.clearPlaylistOverride();
        vi.advanceTimersByTime(15_000);
        await flush();
        expect(override_ids()).toEqual([]);

        // The hold also ends when the playlist stops being a takeover.
        vi.setSystemTime(fired_at + 24 * 60 * 60 * 1000 + 2000);
        vi.advanceTimersByTime(15_000);
        await flush();
        expect(override_ids()).toEqual(media);
        vi.advanceTimersByTime(45_000);
        await flush();
        (ts_client.showSignage as any).mockResolvedValue(display(false));
        await (spectator.service as any)._reloadDisplay();
        await flush();
        expect(override_ids()).toEqual([]);
    });

    describe('single-pass and timed takeovers', () => {
        const day = (time: string) => new Date(`2026-01-05T${time}`).getTime();
        /** A single-pass takeover (media-3) and a timed takeover (media-5) */
        const display = (
            single_cron: string,
            timed_cron: string,
            timed_period: number,
            timed_enabled = true,
        ) => {
            const base = display_with_schedules([
                { play_cron: single_cron, play_period: 0, play_takeover: true },
            ]);
            return {
                ...base,
                playlist_mappings: {
                    ...base.playlist_mappings,
                    'display-1': [
                        'base-playlist',
                        'scheduled-playlist',
                        'timed-takeover',
                    ],
                },
                playlist_config: {
                    ...base.playlist_config,
                    'timed-takeover': [
                        {
                            id: 'timed-takeover',
                            name: 'Timed Takeover',
                            enabled: timed_enabled,
                            default_animation: MediaAnimation.Cut,
                            default_duration: 15000,
                            schedules: [
                                {
                                    play_cron: timed_cron,
                                    play_period: timed_period,
                                    play_takeover: true,
                                },
                            ],
                        },
                        ['media-5'],
                    ],
                },
            };
        };
        const override_ids = () =>
            spectator.service.override_playlist().playlist.map((_) => _.id);
        const tick = async (ms = 15_000) => {
            vi.advanceTimersByTime(ms);
            await flush();
        };

        it('should not keep playing a disabled timed takeover beside a single pass', async () => {
            vi.setSystemTime(day('10:00:02'));
            (ts_client.showSignage as any).mockResolvedValue(
                display('0 10 * * *', '0 10 * * *', 60),
            );
            spectator.service.setDisplay('display-1');
            await flush();
            await tick(60_000);

            (ts_client.showSignage as any).mockResolvedValue(
                display('0 10 * * *', '0 10 * * *', 60, false),
            );
            await (spectator.service as any)._reloadDisplay();
            await flush();
            expect(override_ids()).toEqual(['media-3']);

            spectator.service.clearPlaylistOverride();
            await tick();
            expect(override_ids()).toEqual([]);
        });

        it('should let a single pass outlast the end of a timed takeover', async () => {
            vi.setSystemTime(day('09:59:02'));
            (ts_client.showSignage as any).mockResolvedValue(
                display('59 9 * * *', '50 9 * * *', 10),
            );
            spectator.service.setDisplay('display-1');
            await flush();
            expect(override_ids()).toEqual(['media-3']);
            expect(spectator.service.override_playlist().ends_at).toBe(0);

            await tick(2 * 60 * 1000);
            expect(override_ids()).toEqual(['media-3']);
            expect(spectator.service.override_playlist().ends_at).toBe(0);
        });

        it('should not expire single-pass media with a timed run on the same playlist', async () => {
            vi.setSystemTime(day('09:59:02'));
            (ts_client.showSignage as any).mockResolvedValue(
                // The timed run is listed first and ends at 10:00
                display_with_schedules([
                    {
                        play_cron: '50 9 * * *',
                        play_period: 10,
                        play_takeover: true,
                    },
                    {
                        play_cron: '59 9 * * *',
                        play_period: 0,
                        play_takeover: true,
                    },
                ]),
            );
            spectator.service.setDisplay('display-1');
            await flush();

            const [item] = spectator.service.override_playlist().playlist;
            expect(item.id).toBe('media-3');
            expect(item.valid_until * 1000).not.toBe(day('10:00:00'));
        });

        it('should start a timed takeover once a held single pass finishes', async () => {
            vi.setSystemTime(day('10:00:02'));
            (ts_client.showSignage as any).mockResolvedValue(
                display('0 10 * * *', '1 10 * * *', 10),
            );
            spectator.service.setDisplay('display-1');
            await flush();
            await tick(75_000);
            expect(override_ids()).toEqual(['media-3']);

            // What the player does once it reports `playlist_through`.
            spectator.service.clearPlaylistOverride();
            await tick();
            expect(override_ids()).toEqual(['media-5']);
            expect(spectator.service.override_playlist().ends_at).toBe(
                day('10:11:00'),
            );
        });
    });

    it('should not start a takeover whose playlist has expired', async () => {
        const now = new Date('2026-01-05T09:05:00').getTime();
        vi.setSystemTime(now);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(
                display_with_schedules(
                    [
                        {
                            play_cron: '0 9 * * *',
                            play_period: 60,
                            play_takeover: true,
                        },
                    ],
                    ['media-3'],
                    { valid_until: Math.floor(now / 1000) - 24 * 60 * 60 },
                ) as any,
            ),
        );
        spectator.service.setDisplay('display-1');
        await flush();

        expect(spectator.service.override_playlist().playlist).toHaveLength(0);
        expect(spectator.service.playlist().map((_) => _.id)).toContain(
            'media-1',
        );
    });

    it('should start a takeover once its media becomes valid', async () => {
        const now = new Date('2026-01-05T09:05:00').getTime();
        vi.setSystemTime(now);
        const display = display_with_schedules([
            { play_cron: '0 9 * * *', play_period: 60, play_takeover: true },
        ]);
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve({
                ...display,
                playlist_media: display.playlist_media.map((item) =>
                    item.id === 'media-3'
                        ? { ...item, valid_from: Math.floor(now / 1000) + 300 }
                        : item,
                ),
            } as any),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        expect(spectator.service.override_playlist().playlist).toHaveLength(0);

        vi.advanceTimersByTime(6 * 60 * 1000);
        await flush();

        expect(
            spectator.service.override_playlist().playlist.map((_) => _.id),
        ).toEqual(['media-3']);
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

    it('should keep metrics recorded while a post is in flight', async () => {
        let finishPost = () => undefined as void;
        (ts_client.post as any).mockClear();
        (ts_client.post as any).mockReturnValue(
            new Promise<void>((resolve) => (finishPost = resolve)),
        );
        spectator.service.setDisplay('display-1');
        await spectator.service.storeMetricEvent({
            type: 'media_count',
            ref_id: 'media-1',
        });
        (spectator.service as any)._postMetrics();
        vi.advanceTimersByTime(60);
        expect(ts_client.post).toHaveBeenCalledTimes(1);

        await spectator.service.storeMetricEvent({
            type: 'media_count',
            ref_id: 'media-2',
        });
        finishPost();
        await flush();

        expect((spectator.service as any)._metrics.media_counts).toEqual({
            'media-2': 1,
        });
    });

    it('should keep metrics that fail to post for the next attempt', async () => {
        (ts_client.post as any).mockReturnValueOnce(
            Promise.reject(new Error('backend unavailable')),
        );
        spectator.service.setDisplay('display-1');
        await spectator.service.storeMetricEvent({
            type: 'media_count',
            ref_id: 'media-1',
        });
        (spectator.service as any)._postMetrics();
        vi.advanceTimersByTime(60);
        await flush();
        await spectator.service.storeMetricEvent({
            type: 'media_count',
            ref_id: 'media-1',
        });

        (spectator.service as any)._postMetrics();
        vi.advanceTimersByTime(60);
        await flush();

        expect(ts_client.post).toHaveBeenLastCalledWith(
            '/api/engine/v2/signage/display-1/metrics',
            {
                media_counts: { 'media-1': 2 },
                playlist_counts: {},
                play_through_counts: {},
            },
        );
    });

    it('should not keep the validators of a display that failed to apply', async () => {
        (ts_client.responseHeaders as any).mockReturnValue({
            etag: '"display-v1"',
        });
        vi.spyOn(
            spectator.service as any,
            '_checkScheduledOverrides',
        ).mockImplementationOnce(() => {
            throw new Error('schedule evaluation failed');
        });
        spectator.service.setDisplay('display-1');
        await flush();

        // A conditional request here would get a 304 for the payload that
        // failed, and it would never be applied.
        await (spectator.service as any)._reloadDisplay();
        expect(ts_client.showSignage).toHaveBeenLastCalledWith(
            'display-1',
            {},
            { headers: {}, cache: 'no-store' },
        );

        await (spectator.service as any)._reloadDisplay();
        expect(ts_client.showSignage).toHaveBeenLastCalledWith(
            'display-1',
            {},
            {
                headers: { 'If-None-Match': '"display-v1"' },
                cache: 'no-store',
            },
        );
    });

    it('should apply the display when it cannot be saved for offline use', async () => {
        vi.spyOn(
            Object.getPrototypeOf(localStorage),
            'setItem',
        ).mockImplementation(() => {
            throw new DOMException('Storage is full', 'QuotaExceededError');
        });

        spectator.service.setDisplay('display-1');
        await flush();

        expect(spectator.service.display()?.id).toBe('display-1');
    });

    it('should ignore a saved display that cannot be read', async () => {
        localStorage.setItem(
            'PlaceOS.SIGNAGE.display_details.display-1',
            '{not json',
        );
        (ts_client.showSignage as any).mockImplementation(() =>
            Promise.reject(new Error('backend unavailable')),
        );

        spectator.service.setDisplay('display-1');
        await flush();

        expect(spectator.service.display()).toEqual(
            expect.objectContaining({ playlist_media: [], plugins: [] }),
        );
    });

    it('should only record a poll success when the backend answers', async () => {
        (ts_client.showSignage as any).mockImplementationOnce(() =>
            Promise.reject(new Error('backend unavailable')),
        );
        localStorage.setItem(
            'PlaceOS.SIGNAGE.display_details.display-1',
            JSON.stringify(create_display()),
        );
        spectator.service.setDisplay('display-1');
        await flush();

        expect(spectator.service.display()?.id).toBe('display-1');
        expect(spectator.service.diagnostics().poll.last_success).toBe('never');

        await spectator.service.refresh();

        expect(spectator.service.diagnostics().poll.last_success).not.toBe(
            'never',
        );
    });

    it('should keep one schedule timer however often the display is set', async () => {
        spectator.service.setDisplay('display-1');
        await flush();
        vi.advanceTimersByTime(15_000);
        await flush();
        spectator.service.setDisplay('display-1');
        spectator.service.setDisplay('display-1');
        const tick = vi.spyOn(spectator.service as any, '_checkPollHealth');

        vi.advanceTimersByTime(15_000);
        expect(tick).toHaveBeenCalledTimes(1);

        spectator.service.ngOnDestroy();
        vi.advanceTimersByTime(60_000);
        expect(tick).toHaveBeenCalledTimes(1);
    });

    it('should forget a completed takeover run once its window has passed', async () => {
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
        spectator.service.clearPlaylistOverride();
        const completed: Map<string, number> = (spectator.service as any)
            ._completed_schedule_overrides;

        vi.advanceTimersByTime(15_000);
        await flush();
        expect(completed.size).toBe(1);

        vi.advanceTimersByTime(30_000);
        await flush();
        expect(completed.size).toBe(0);
        expect(spectator.service.override_playlist().playlist).toHaveLength(0);
    });

    it('should not replay a completed takeover when its playlist briefly leaves the display', async () => {
        const now = new Date('2026-01-01T10:00:00Z').getTime();
        vi.setSystemTime(now);
        const display = create_display({
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
        });
        (ts_client.showSignage as any).mockReturnValue(
            Promise.resolve(display),
        );
        spectator.service.setDisplay('display-1');
        await flush();
        spectator.service.clearPlaylistOverride();

        (ts_client.showSignage as any).mockReturnValueOnce(
            Promise.resolve({
                ...display,
                playlist_mappings: { 'display-1': ['base-playlist'] },
            }),
        );
        await (spectator.service as any)._reloadDisplay();
        vi.setSystemTime(now + 10_000);
        await (spectator.service as any)._reloadDisplay();

        expect(spectator.service.override_playlist().playlist).toHaveLength(0);
    });

    it('should not release media the cache has already evicted', async () => {
        let cached = ['/stale-file.jpg'];
        media_cache.availableFiles.mockImplementation(() => cached);
        media_cache.requestFilesToCache.mockImplementation(() => {
            cached = [];
            return Promise.resolve(false);
        });

        spectator.service.setDisplay('display-1');
        await flush();

        expect(media_cache.invalidateFile).not.toHaveBeenCalled();
    });
});

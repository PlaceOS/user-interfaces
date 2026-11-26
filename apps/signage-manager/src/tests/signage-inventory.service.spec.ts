import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    listSignagePlaylistMedia,
    PlaceSystem,
    PlaceZone,
    query,
    querySignageMedia,
    querySignagePlaylists,
    queryZones,
    showSignageMedia,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { SignageContextService } from '../app/signage-context.service';
import { SignageInventoryService } from '../app/signage-inventory.service';

type SignageInventoryServiceTestAccess = SignageInventoryService &
    Record<string, unknown>;

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageInventoryService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: unknown) =>
            signal(default_value),
    };
    const org = {
        initialised: signal(true),
        organisation: { id: 'org-1' },
    };
    const dialog = {
        open: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();
        settings.get.mockReturnValue(false);
        vi.mocked(listSignagePlaylistMedia).mockResolvedValue({
            approved: true,
            approval_requested: false,
        } as never);
        TestBed.configureTestingModule({
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        return TestBed.inject(SignageInventoryService);
    }

    // The schedules timeline shows its online status from these displays
    it('keeps a display that never checked in as never seen, its name decoded once', async () => {
        const service = createService();
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'canQueryLists',
        ).mockReturnValue(true);
        const empty_page = { data: [], total: 0, next: null };
        vi.mocked(querySignagePlaylists).mockResolvedValue(empty_page as never);
        vi.mocked(queryZones).mockResolvedValue(empty_page as never);
        vi.mocked(query).mockImplementation(((params: {
            fn: (raw: Partial<PlaceSystem>) => PlaceSystem;
        }) =>
            Promise.resolve({
                // A saved name of `R&amp;D`, encoded once by the backend
                data: [params.fn({ id: 'd1', name: 'R&amp;amp;D' })],
                total: 1,
                next: null,
            })) as unknown as typeof query);

        const { displays } = await service.loadSignageInventory();

        expect(displays.map(({ id }) => id)).toEqual(['d1']);
        expect(displays[0].signage_last_seen).toBe(0);
        expect(displays[0].name).toBe('R&amp;D');
    });

    it('shares one load until a save, and loads again after a failure', async () => {
        const service = createService();
        const context = TestBed.inject(SignageContextService);
        vi.spyOn(context, 'canQueryLists').mockReturnValue(true);
        const empty_page = { data: [], total: 0, next: null };
        vi.mocked(querySignagePlaylists).mockResolvedValue(empty_page as never);
        vi.mocked(query).mockResolvedValue(empty_page as never);
        vi.mocked(queryZones)
            .mockRejectedValueOnce(new Error('offline'))
            .mockResolvedValue(empty_page as never);

        await expect(service.loadSignageInventory()).rejects.toThrow();
        await Promise.all([
            service.loadSignageInventory(),
            service.loadSignageInventory(),
        ]);
        expect(queryZones).toHaveBeenCalledTimes(2);

        context.changed();
        await service.loadSignageInventory();
        expect(queryZones).toHaveBeenCalledTimes(3);
    });

    describe('content report', () => {
        const takeover = (id: string, play_cron: string) =>
            new SignagePlaylist({
                id,
                name: id,
                schedules: [
                    { play_cron, play_period: 60, play_takeover: true },
                ],
            });
        const inventory = {
            displays: [
                new PlaceSystem({
                    id: 'd1',
                    name: 'Lobby',
                    playlists: ['a'],
                }),
                new PlaceSystem({ id: 'd2', name: 'Cafe' }),
            ],
            zones: [],
            playlists: [
                takeover('a', '0 9 * * *'),
                takeover('b', '30 9 * * *'),
                new SignagePlaylist({ id: 'c', name: 'Old', valid_until: 1 }),
            ],
        };

        it('reports empty displays, unassigned and expired content', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            vi.spyOn(service, 'loadSignageInventory').mockResolvedValue({
                ...inventory,
                displays: [
                    ...inventory.displays,
                    new PlaceSystem({
                        id: 'd3',
                        name: 'Hall',
                        playlists: ['c'],
                    }),
                    new PlaceSystem({
                        id: 'd4',
                        name: 'Lift',
                        playlists: ['off'],
                    }),
                    new PlaceSystem({
                        id: 'd5',
                        name: 'Shared',
                        playlists: ['other-group'],
                    }),
                    new PlaceSystem({ id: 'd6', name: 'Off', zones: ['z1'] }),
                    new PlaceSystem({ id: 'd7', name: 'On', zones: ['z2'] }),
                ],
                zones: [
                    new PlaceZone({ id: 'z1', playlists: ['off'] }),
                    new PlaceZone({ id: 'z2', playlists: ['off', 'a'] }),
                ],
                playlists: [
                    ...inventory.playlists,
                    new SignagePlaylist({
                        id: 'off',
                        name: 'Off',
                        enabled: false,
                    }),
                ],
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });

            const report = await service.loadContentReport();

            // d3 has only an expired playlist, d4 and d6 only a disabled one
            expect(report.empty_displays.map(({ id }) => id)).toEqual([
                'd2',
                'd3',
                'd4',
                'd6',
            ]);
            expect(report.unassigned_playlists.map(({ id }) => id)).toEqual([
                'b',
            ]);
            expect(report.expired_playlists.map(({ id }) => id)).toEqual(['c']);
        });

        it('lists playlists whose approval was requested and not given', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            vi.spyOn(service, 'loadSignageInventory').mockResolvedValue({
                displays: [],
                zones: [],
                playlists: ['asked', 'done', 'none'].map(
                    (id) => new SignagePlaylist({ id, name: id }),
                ),
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });
            vi.mocked(listSignagePlaylistMedia).mockImplementation(
                async (id) =>
                    ({
                        asked: { approved: false, approval_requested: true },
                        done: { approved: true, approval_requested: true },
                        none: { approved: false, approval_requested: false },
                    })[id] as never,
            );

            const report = await service.loadContentReport();

            expect(report.awaiting_review.map(({ id }) => id)).toEqual([
                'asked',
            ]);
            expect(report.awaiting_review_unchecked).toBe(0);
        });

        it('counts playlists that fail or take too long as not checked', async () => {
            vi.useFakeTimers();
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            vi.spyOn(service, 'loadSignageInventory').mockResolvedValue({
                displays: [],
                zones: [],
                playlists: ['slow', 'fails'].map(
                    (id) => new SignagePlaylist({ id, name: id }),
                ),
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });
            vi.mocked(listSignagePlaylistMedia).mockImplementation((id) =>
                id === 'slow'
                    ? new Promise(() => {})
                    : Promise.reject(new Error('500')),
            );

            const loading = service.loadContentReport();
            await vi.advanceTimersByTimeAsync(16_000);
            const report = await loading;

            expect(report.awaiting_review).toEqual([]);
            expect(report.awaiting_review_unchecked).toBe(2);
            vi.useRealTimers();
        });

        it('starts no more review checks after one takes too long', async () => {
            vi.useFakeTimers();
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            vi.spyOn(service, 'loadSignageInventory').mockResolvedValue({
                displays: [],
                zones: [],
                playlists: Array.from(
                    { length: 7 },
                    (_, index) =>
                        new SignagePlaylist({ id: `p${index}`, name: 'p' }),
                ),
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });
            vi.mocked(listSignagePlaylistMedia).mockClear();
            vi.mocked(listSignagePlaylistMedia).mockImplementation(
                () => new Promise(() => {}),
            );

            const loading = service.loadContentReport();
            await vi.advanceTimersByTimeAsync(16_000);
            const report = await loading;

            // Six reads at a time, and the seventh never starts
            expect(listSignagePlaylistMedia).toHaveBeenCalledTimes(6);
            expect(report.awaiting_review_unchecked).toBe(7);
            vi.useRealTimers();
        });

        it('stops the review checks when the load is cancelled', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            vi.spyOn(service, 'loadSignageInventory').mockResolvedValue({
                displays: [],
                zones: [],
                playlists: [new SignagePlaylist({ id: 'p1', name: 'p1' })],
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });
            vi.mocked(listSignagePlaylistMedia).mockClear();
            const controller = new AbortController();
            controller.abort();

            await service.loadContentReport(Date.now(), controller.signal);

            expect(listSignagePlaylistMedia).not.toHaveBeenCalled();
        });

        it('lists assigned playlists that expire within a week', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            const now = Date.now();
            const ending = (id: string, days: number) =>
                new SignagePlaylist({
                    id,
                    name: id,
                    valid_until: Math.floor(now / 1000) + days * 86_400,
                });
            vi.spyOn(service, 'loadSignageInventory').mockResolvedValue({
                displays: [
                    new PlaceSystem({
                        id: 'd1',
                        playlists: ['soon', 'later', 'off'],
                        signage_last_seen: Math.floor(now / 1000) - 3600,
                    }),
                ],
                zones: [],
                // `loose` expires soon but is not assigned
                playlists: [
                    ending('soon', 3),
                    ending('later', 30),
                    ending('loose', 3),
                    // Assigned, but disabled, so it plays nowhere
                    new SignagePlaylist({
                        ...ending('off', 3),
                        enabled: false,
                    }),
                ],
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });

            const report = await service.loadContentReport(now);

            expect(report.expiring_playlists.map(({ id }) => id)).toEqual([
                'soon',
            ]);
            // Its player last checked in an hour ago
            expect(report.offline_displays.map(({ id }) => id)).toEqual(['d1']);
        });

        it('checks expired media a few at a time and counts the rest', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            vi.spyOn(
                TestBed.inject(SignageContextService),
                'canQueryLists',
            ).mockReturnValue(true);
            // `queryAll` reads every page, so one page holds all the media
            vi.mocked(querySignageMedia).mockResolvedValue({
                data: Array.from(
                    { length: 105 },
                    (_, i) =>
                        new SignageMedia({
                            id: `m${i}`,
                            name: `m${i}`,
                            valid_until: 1,
                        }),
                ),
            } as Awaited<ReturnType<typeof querySignageMedia>>);
            let active = 0;
            let most_active = 0;
            vi.mocked(showSignageMedia).mockImplementation(async (id) => {
                most_active = Math.max(most_active, ++active);
                await new Promise((resolve) => setTimeout(resolve));
                active--;
                return new SignageMedia({
                    playlists:
                        id === 'm0'
                            ? [new SignagePlaylist({ name: 'News' })]
                            : [],
                });
            });

            const result = await test_service['_expiredMediaInPlaylists'](
                Date.now(),
            );

            expect(showSignageMedia).toHaveBeenCalledTimes(100);
            expect(most_active).toBeLessThanOrEqual(6);
            expect(result.unchecked).toBe(5);
            expect(result.items.map(({ media }) => media.id)).toEqual(['m0']);
        });

        it('reports a playlist whose schedules have all ended', async () => {
            const service = createService();
            const test_service =
                service as unknown as SignageInventoryServiceTestAccess;
            const ended = (id: string, valid_until: number[]) =>
                new SignagePlaylist({
                    id,
                    name: id,
                    schedules: valid_until.map((end) => ({
                        play_cron: '0 9 * * *',
                        play_period: 60,
                        play_takeover: false,
                        valid_until: end,
                    })),
                });
            vi.spyOn(service, 'loadSignageInventory').mockResolvedValue({
                displays: [
                    new PlaceSystem({
                        id: 'd1',
                        name: 'Lobby',
                        playlists: ['all', 'some'],
                    }),
                ],
                zones: [],
                playlists: [ended('all', [1, 2]), ended('some', [1, 0])],
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });

            const report = await service.loadContentReport();

            expect(report.expired_playlists.map(({ id }) => id)).toEqual([
                'all',
            ]);
        });
    });
});

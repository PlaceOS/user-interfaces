import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    PlaceSystem,
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
    Record<string, any>;

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageInventoryService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: any) => signal(default_value),
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
        vi.mocked(querySignagePlaylists).mockResolvedValue(
            empty_page as never,
        );
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

    describe('content report', () => {
        const takeover = (id: string, play_cron: string) =>
            new SignagePlaylist({
                id,
                name: id,
                schedules: [
                    { play_cron, play_period: 60, play_takeover: true },
                ],
            } as any);
        const inventory = {
            displays: [
                new PlaceSystem({
                    id: 'd1',
                    name: 'Lobby',
                    playlists: ['a'],
                } as any),
                new PlaceSystem({ id: 'd2', name: 'Cafe' } as any),
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
                    } as any),
                ],
            });
            test_service['_expiredMediaInPlaylists'] = vi
                .fn()
                .mockResolvedValue({ items: [], unchecked: 0 });

            const report = await service.loadContentReport();

            expect(report.empty_displays.map(({ id }) => id)).toEqual(['d2']);
            expect(report.unassigned_playlists.map(({ id }) => id)).toEqual([
                'b',
            ]);
            expect(report.expired_playlists.map(({ id }) => id)).toEqual(['c']);
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
                    } as any),
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

import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';

import { ExploreLockersService } from '../lib/explore-lockers.service';
import { DEFAULT_COLOURS } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

// Locker asset fns run for real; only the ts-client API layer is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

describe('ExploreLockersService', () => {
    let spectator: SpectatorService<ExploreLockersService>;
    const createService = createServiceFactory({
        service: ExploreLockersService,
        providers: [
            MockProvider(ExploreStateService, {
                level: signal({ id: 'lvl-1' }) as any,
                options: signal({ is_public: false }),
                setStyles: vi.fn(),
                setFeatures: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }) as any,
                active_region: signal({ id: 'region-1' }) as any,
                region: { id: 'region-1' } as any,
                levelWithID: vi.fn(),
                module: vi.fn(() => null),
                binding: vi.fn(() => 'sys-1'),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [{ id: 'cat-lockers', name: '_LOCKERS_', hidden: true }],
        } as any);
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [
                {
                    id: 'type-lockers',
                    name: '_LOCKERS_',
                    category_id: 'cat-lockers',
                },
                {
                    id: 'type-banks',
                    name: '_LOCKER_BANKS_',
                    category_id: 'cat-lockers',
                },
            ],
        } as any);
        vi.mocked(ts_client.queryAssets).mockResolvedValue({
            data: [],
        } as any);
        spectator = createService();
        // Provider mocks are shared, so reset implementations set by a test
        vi.mocked(spectator.inject(SettingsService).get).mockReset();
    });

    it('should load the region lockers into their banks and drop lockers without a bank', async () => {
        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) => key === 'app.use_region',
        );
        vi.mocked(ts_client.queryAssets).mockImplementation(
            async ({ type_id }: any) =>
                ({
                    data:
                        type_id === 'type-banks'
                            ? [{ id: 'b1', zone_id: 'lvl-1' }]
                            : [
                                  { id: 'l1', parent_id: 'b1' },
                                  { id: 'l2', parent_id: 'gone' },
                              ],
                }) as any,
        );

        await vi.waitFor(() => {
            TestBed.tick();
            expect(spectator.service.lockers().map((_) => _.id)).toEqual([
                'l1',
            ]);
        });
        expect(
            spectator.service.locker_banks()[0].lockers.map((_) => _.id),
        ).toEqual(['l1']);
        const zones = vi
            .mocked(ts_client.queryAssets)
            .mock.calls.map(([query]) => (query as any).zone_id);
        expect(new Set(zones)).toEqual(new Set(['region-1']));
    });

    it('should filter lockers by the active level', () => {
        const state = spectator.inject(ExploreStateService);
        (spectator.service as any)._lockers = {
            value: () => [
                { id: 'l1', bank_id: 'b1', bank: { zones: ['lvl-1'] } },
                { id: 'l2', bank_id: 'b2', bank: { zones: ['lvl-2'] } },
            ],
        };
        const filtered = spectator.service.filtered_lockers();
        expect(filtered.length).toBe(1);
        expect(filtered[0].id).toBe('l1');
        // Clearing the level returns all lockers
        (state.level as any).set(null);
        expect(spectator.service.filtered_lockers().length).toBe(2);
    });

    it('should filter locker banks by the active level', () => {
        const state = spectator.inject(ExploreStateService);
        (state.level as any).set({ id: 'lvl-1' });
        (spectator.service as any)._locker_banks = {
            value: () => [
                { id: 'b1', zones: ['lvl-1'] },
                { id: 'b2', zones: ['lvl-2'] },
            ],
        };
        const filtered = spectator.service.filtered_banks();
        expect(filtered.length).toBe(1);
        expect(filtered[0].id).toBe('b1');
    });

    it('should colour a bank by the share of its lockers in use', () => {
        const state = spectator.inject(ExploreStateService);
        const org = spectator.inject(OrganisationService);
        let update: (data: unknown) => void;
        vi.mocked(org.module).mockReturnValue({
            variable: () => ({
                bindThenSubscribe: (callback) => {
                    update = callback;
                    return () => null;
                },
            }),
        } as any);
        const ids = Array.from({ length: 10 }, (_, i) => `l${i}`);
        (spectator.service as any).locker_banks = () => [
            { id: 'b1', map_id: 'm1', level_id: 'lvl-1', zones: ['lvl-1'] },
        ];
        (spectator.service as any).lockers = () =>
            ids.map((id) => ({ id, bank_id: 'b1' }));
        const inUse = (count: number) =>
            update({
                value: [
                    ...ids.slice(0, count).map((locker_id) => ({
                        location: 'locker',
                        locker_id,
                        allocated: true,
                    })),
                    // Not allocated, or not a locker, so not in use
                    { location: 'locker', locker_id: 'l9', allocated: false },
                    { location: 'desk', locker_id: 'l8', allocated: true },
                ],
            });
        const bankStyle = () =>
            vi
                .mocked(state.setStyles)
                .mock.calls.filter(([group]) => group === 'lockers')
                .at(-1)[1]['#m1'];
        (state.level as any).set({ id: 'lvl-1' });
        TestBed.tick();

        inUse(3);
        TestBed.tick();
        expect(bankStyle()).toEqual({ fill: DEFAULT_COLOURS.free });

        inUse(4);
        TestBed.tick();
        expect(bankStyle()).toEqual({ fill: DEFAULT_COLOURS.pending });
        const [, features] = vi.mocked(state.setFeatures).mock.calls.at(-1);
        expect(features).toEqual([
            expect.objectContaining({
                location: 'm1',
                data: expect.objectContaining({
                    in_use_count: 4,
                    locker_count: 10,
                }),
            }),
        ]);

        inUse(9);
        TestBed.tick();
        expect(bankStyle()).toEqual({ fill: DEFAULT_COLOURS.busy });
        vi.mocked(org.module).mockReturnValue(null);
    });
});

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
                options: signal({ is_public: false }) as any,
                setStyles: vi.fn(),
                setFeatures: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }) as any,
                active_region: signal({ id: 'region-1' }) as any,
                region: { id: 'region-1' } as any,
                levelWithID: vi.fn() as any,
                module: vi.fn(() => null) as any,
                binding: vi.fn(() => 'sys-1') as any,
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
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
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

    it('should set map styles and features for the active level banks', () => {
        const state = spectator.inject(ExploreStateService);
        (spectator.service as any).locker_banks = () => [
            {
                id: 'b1',
                map_id: 'm1',
                level_id: 'lvl-1',
                zones: ['lvl-1'],
            },
        ];
        (spectator.service as any).lockers = () => [
            { id: 'l1', bank_id: 'b1' },
        ];
        // Re-trigger the styling effect by changing the tracked level signal
        (state.level as any).set({ id: 'lvl-1' });
        TestBed.tick();
        expect(state.setStyles).toHaveBeenCalledWith('lockers', {
            '#m1': { fill: DEFAULT_COLOURS['free'] },
        });
        const feature_call = vi
            .mocked(state.setFeatures)
            .mock.calls.find((_) => _[0] === 'lockers');
        expect(feature_call).toBeTruthy();
        const features = feature_call[1];
        expect(features.length).toBe(1);
        expect(features[0].location).toBe('m1');
    });
});

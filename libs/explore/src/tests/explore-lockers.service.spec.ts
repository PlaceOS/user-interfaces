import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ExploreLockersService } from '../lib/explore-lockers.service';
import { DEFAULT_COLOURS } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/assets', () => ({
    ...jest.requireActual('@placeos/assets'),
    queryLockerAssetsForZones: jest.fn(),
    queryLockerBankAssetsForZones: jest.fn(),
}));

import {
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
} from '@placeos/assets';

describe('ExploreLockersService', () => {
    let spectator: SpectatorService<ExploreLockersService>;
    const createService = createServiceFactory({
        service: ExploreLockersService,
        providers: [
            MockProvider(ExploreStateService, {
                level: signal({ id: 'lvl-1' }) as any,
                options: signal({ is_public: false }) as any,
                setStyles: jest.fn(),
                setFeatures: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }) as any,
                active_region: signal({ id: 'region-1' }) as any,
                region: { id: 'region-1' } as any,
                levelWithID: jest.fn() as any,
                module: jest.fn(() => null) as any,
                binding: jest.fn(() => 'sys-1') as any,
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(queryLockerAssetsForZones).mockResolvedValue([] as any);
        jest.mocked(queryLockerBankAssetsForZones).mockResolvedValue([] as any);
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
        const feature_call = jest
            .mocked(state.setFeatures)
            .mock.calls.find((_) => _[0] === 'lockers');
        expect(feature_call).toBeTruthy();
        const features = feature_call[1];
        expect(features.length).toBe(1);
        expect(features[0].location).toBe('m1');
    });
});

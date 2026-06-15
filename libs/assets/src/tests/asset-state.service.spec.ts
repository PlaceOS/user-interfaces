import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { AssetStateService } from '../lib/asset-state.service';
import * as assets_mod from '../lib/assets.fn';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(() => Promise.resolve({ details: {} })),
}));
jest.mock('../lib/assets.fn', () => ({
    queryAssetCategories: jest.fn(() => Promise.resolve({ data: [] })),
    queryAssets: jest.fn(() => Promise.resolve([])),
    queryGroupAvailability: jest.fn(() => Promise.resolve([])),
}));
jest.mock('libs/bookings/src/lib/bookings.fn', () => ({
    queryBookings: jest.fn(() => Promise.resolve([])),
}));
jest.mock('../lib/asset.utilities', () => ({
    assetAvailable: jest.fn(() => true),
    getAssetRulesForZone: jest.fn(() => Promise.resolve([])),
}));

describe('AssetStateService', () => {
    let spectator: SpectatorService<AssetStateService>;
    const createService = createServiceFactory({
        service: AssetStateService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createService();
        TestBed.flushEffects();
        jest.clearAllMocks();
    });

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should ignore unchanged options', () => {
        const initial_options = spectator.service.options();

        spectator.service.setOptions({});
        spectator.service.setOptions({ date: initial_options.date });

        expect(spectator.service.options()).toBe(initial_options);
        expect(assets_mod.queryGroupAvailability).toHaveBeenCalledTimes(0);
    });

    it('should load asset list', () => {});
    it('should load asset bookings for selected options', () => {});
    it('should generate available assets for selected options', () => {});
    it('should allow filtering of available assets', () => {});
});

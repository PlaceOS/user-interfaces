import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
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

import * as bookings_mod from 'libs/bookings/src/lib/bookings.fn';
import * as ts_client from '@placeos/ts-client';

describe('AssetStateService', () => {
    let spectator: SpectatorService<AssetStateService>;
    const createService = createServiceFactory({
        service: AssetStateService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(() => undefined),
                overrides: signal([{}, {}]),
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                active_building: signal({ id: 'bld-1' }),
                settings: [],
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createService();
        TestBed.flushEffects();
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

    it('should not make asset requests before asset data is consumed', () => {
        expect(assets_mod.queryAssets).not.toHaveBeenCalled();
        expect(assets_mod.queryAssetCategories).not.toHaveBeenCalled();
        expect(assets_mod.queryGroupAvailability).not.toHaveBeenCalled();
        expect(bookings_mod.queryBookings).not.toHaveBeenCalled();
        expect(ts_client.showMetadata).not.toHaveBeenCalled();
    });

    it('should not make asset requests when assets are disabled', () => {
        const settings = spectator.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.has_assets' ? false : undefined,
        );

        spectator.service.filtered_assets();
        TestBed.flushEffects();

        expect(assets_mod.queryAssets).not.toHaveBeenCalled();
        expect(assets_mod.queryAssetCategories).not.toHaveBeenCalled();
        expect(assets_mod.queryGroupAvailability).not.toHaveBeenCalled();
        expect(bookings_mod.queryBookings).not.toHaveBeenCalled();
        expect(ts_client.showMetadata).not.toHaveBeenCalled();
    });

    it('should share identical in-flight asset booking requests', async () => {
        const options = {
            date: new Date(2026, 5, 22, 9).valueOf(),
            zone: 'zone-1',
        };

        await Promise.all([
            (spectator.service as any)._loadAssetBookings(options),
            (spectator.service as any)._loadAssetBookings(options),
        ]);

        expect(bookings_mod.queryBookings).toHaveBeenCalledTimes(1);
    });

    it('should share identical in-flight asset list requests', async () => {
        await Promise.all([
            (spectator.service as any)._loadAssetList(),
            (spectator.service as any)._loadAssetList(),
        ]);

        expect(assets_mod.queryAssets).toHaveBeenCalledTimes(1);
    });

    it('should load asset list', () => {});
    it('should load asset bookings for selected options', () => {});
    it('should generate available assets for selected options', () => {});
    it('should allow filtering of available assets', () => {});
});

import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { AssetStateService } from '../lib/asset-state.service';

// Workspace modules (assets.fn, bookings.fn, asset.utilities) run for real;
// only the ts-client API layer beneath them is stubbed. Assertions that used
// to target those workspace fns now target the ts-client calls they make:
//   assets_mod.queryAssets        -> ts_client.queryAssets
//   assets_mod.queryAssetCategories -> ts_client.queryAssetCategories
//   assets_mod.queryGroupAvailability -> ts_client.queryAssetTypes
//   bookings_mod.queryBookings    -> ts_client.get
vi.mock('@placeos/ts-client', { spy: true });

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    }) as any;
}

describe('AssetStateService', () => {
    let spectator: SpectatorService<AssetStateService>;
    const createService = createServiceFactory({
        service: AssetStateService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(() => undefined),
                overrides: signal([{}, {}]) as any,
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true) as any,
                active_building: signal({ id: 'bld-1' }) as any,
                settings: [],
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(response([]));
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(response([]));
        vi.mocked(ts_client.queryAssets).mockReturnValue(response([]));
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        spectator = createService();
        TestBed.tick();
    });

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should ignore unchanged options', () => {
        const initial_options = spectator.service.options();

        spectator.service.setOptions({});
        spectator.service.setOptions({ date: initial_options.date });

        expect(spectator.service.options()).toBe(initial_options);
        expect(ts_client.queryAssetTypes).not.toHaveBeenCalled();
    });

    it('should not make asset requests before asset data is consumed', () => {
        expect(ts_client.queryAssets).not.toHaveBeenCalled();
        expect(ts_client.queryAssetCategories).not.toHaveBeenCalled();
        expect(ts_client.queryAssetTypes).not.toHaveBeenCalled();
        expect(ts_client.get).not.toHaveBeenCalled();
        expect(ts_client.showMetadata).not.toHaveBeenCalled();
    });

    it('should not make asset requests when assets are disabled', () => {
        const settings = spectator.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.has_assets' ? false : undefined,
        );

        spectator.service.filtered_assets();
        TestBed.tick();

        expect(ts_client.queryAssets).not.toHaveBeenCalled();
        expect(ts_client.queryAssetCategories).not.toHaveBeenCalled();
        expect(ts_client.queryAssetTypes).not.toHaveBeenCalled();
        expect(ts_client.get).not.toHaveBeenCalled();
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

        expect(ts_client.get).toHaveBeenCalledTimes(1);
    });

    it('should share identical in-flight asset list requests', async () => {
        await Promise.all([
            (spectator.service as any)._loadAssetList(),
            (spectator.service as any)._loadAssetList(),
        ]);

        expect(ts_client.queryAssets).toHaveBeenCalledTimes(1);
    });

    it('should load asset list', () => {});
    it('should load asset bookings for selected options', () => {});
    it('should generate available assets for selected options', () => {});
    it('should allow filtering of available assets', () => {});
});

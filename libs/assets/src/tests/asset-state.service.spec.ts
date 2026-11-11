import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
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
vi.mock('@placeos/ts-client', { spy: true });

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    });
}

describe('AssetStateService', () => {
    let spectator: SpectatorService<AssetStateService>;
    const createService = createServiceFactory({
        service: AssetStateService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(() => undefined),
                overrides: signal([{}, {}]),
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
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
        // The mock is shared across tests and clearAllMocks keeps its
        // implementation, so reset it to "assets enabled"
        spectator
            .inject(SettingsService)
            .get.mockImplementation(() => undefined);
        TestBed.tick();
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
        const settings = spectator.inject(SettingsService);
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

    it('should load and filter available groups once asset data is consumed', async () => {
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([
                { id: 'c1', name: 'Audio' },
                { id: 'c2', name: 'Video' },
            ]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([
                {
                    id: 't1',
                    name: 'Speaker',
                    description: 'Loud',
                    category_id: 'c1',
                },
                {
                    id: 't2',
                    name: 'Projector',
                    description: 'HD',
                    category_id: 'c2',
                },
                {
                    id: 't3',
                    name: 'Orphan',
                    description: '',
                    category_id: 'gone',
                },
                { id: 't4', name: 'Empty', description: '', category_id: 'c1' },
            ]),
        );
        vi.mocked(ts_client.queryAssets).mockReturnValue(
            response([
                { id: 'a1', asset_type_id: 't1' },
                { id: 'a2', asset_type_id: 't2' },
                { id: 'a3', asset_type_id: 't3' },
            ]),
        );
        const names = () =>
            spectator.service.filtered_assets().map((_) => _.name);

        names();
        await Promise.resolve();
        TestBed.tick();
        await vi.waitFor(() =>
            expect(spectator.service.category_list()).toHaveLength(2),
        );
        await vi.waitFor(() =>
            expect(spectator.service.available_groups()).toHaveLength(4),
        );

        // Sorted by name, without empty groups or groups in unknown categories
        expect(names()).toEqual(['Projector', 'Speaker']);
        spectator.service.setSearch('LOUD');
        expect(names()).toEqual(['Speaker']);
        spectator.service.setSearch('');
        spectator.service.toggleCategory('c2');
        expect(names()).toEqual(['Projector']);
        spectator.service.toggleCategory('c2');
        expect(names()).toEqual(['Projector', 'Speaker']);
    });

    it('should drop selected categories that are not visible', async () => {
        spectator.service.toggleCategory('gone');
        expect(spectator.service.category()).toEqual(['gone']);

        TestBed.tick();

        expect(spectator.service.category()).toEqual([]);
    });

    it('should show loading while availability is pending', async () => {
        let resolve: (value: unknown) => void;
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            new Promise((r) => (resolve = r)) as any,
        );
        const request = (spectator.service as any)._loadAvailableGroups(
            { date: new Date(2026, 5, 22, 9).valueOf(), zone: 'zone-1' },
            'bld-1',
        );
        await Promise.resolve();

        expect(spectator.service.loading()).toContain('[Availability]');

        resolve({ data: [], total: 0, next: () => null });
        await request;

        expect(spectator.service.loading()).not.toContain('[Availability]');
    });
});

import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';
import { bookings } from '@placeos/ts-client/staff';
import { MockProvider } from 'ng-mocks';

import { AssetStateService } from '../lib/asset-state.service';

// Workspace modules (assets.fn, asset.utilities, bookings.fn) run for real;
// only the ts-client API layer beneath them is stubbed. Assertions target
// the calls they make:
//   assets_mod.queryAssets        -> ts_client.assets.query
//   assets_mod.queryAssetCategories -> ts_client.asset_categories.query
//   assets_mod.queryGroupAvailability -> ts_client.asset_types.query
//   bookings_fn.queryBookings     -> staff bookings.query
vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

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
        vi.mocked(ts_client.asset_categories.query).mockImplementation(
            fromV1Mock(() => response([]), ['...'], 'page'),
        );
        vi.mocked(ts_client.asset_types.query).mockImplementation(
            fromV1Mock(() => response([]), ['...'], 'page'),
        );
        vi.mocked(ts_client.assets.query).mockImplementation(
            fromV1Mock(() => response([]), ['...'], 'page'),
        );
        vi.mocked(bookings.query).mockResolvedValue(mockReply([]));
        vi.mocked(ts_client.metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: {},
                    }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
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
        expect(ts_client.asset_types.query).not.toHaveBeenCalled();
    });

    it('should not make asset requests before asset data is consumed', () => {
        expect(ts_client.assets.query).not.toHaveBeenCalled();
        expect(ts_client.asset_categories.query).not.toHaveBeenCalled();
        expect(ts_client.asset_types.query).not.toHaveBeenCalled();
        expect(bookings.query).not.toHaveBeenCalled();
        expect(ts_client.metadata.show).not.toHaveBeenCalled();
    });

    it('should not make asset requests when assets are disabled', () => {
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation((key: string) =>
            key === 'app.has_assets' ? false : undefined,
        );

        spectator.service.filtered_assets();
        TestBed.tick();

        expect(ts_client.assets.query).not.toHaveBeenCalled();
        expect(ts_client.asset_categories.query).not.toHaveBeenCalled();
        expect(ts_client.asset_types.query).not.toHaveBeenCalled();
        expect(bookings.query).not.toHaveBeenCalled();
        expect(ts_client.metadata.show).not.toHaveBeenCalled();
    });

    it('should load and filter available groups once asset data is consumed', async () => {
        vi.mocked(ts_client.asset_categories.query).mockImplementation(
            fromV1Mock(
                () =>
                    response([
                        { id: 'c1', name: 'Audio' },
                        { id: 'c2', name: 'Video' },
                    ]),
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.asset_types.query).mockImplementation(
            fromV1Mock(
                () =>
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
                        {
                            id: 't4',
                            name: 'Empty',
                            description: '',
                            category_id: 'c1',
                        },
                    ]),
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.assets.query).mockImplementation(
            fromV1Mock(
                () =>
                    response([
                        { id: 'a1', asset_type_id: 't1' },
                        { id: 'a2', asset_type_id: 't2' },
                        { id: 'a3', asset_type_id: 't3' },
                    ]),
                ['...'],
                'page',
            ),
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

    it('should hide groups that fail the asset rules of the zone', async () => {
        vi.mocked(ts_client.asset_categories.query).mockImplementation(
            fromV1Mock(
                () => response([{ id: 'c1', name: 'Audio' }]),
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.asset_types.query).mockImplementation(
            fromV1Mock(
                () =>
                    response([
                        {
                            id: 't1',
                            name: 'Speaker',
                            description: '',
                            category_id: 'c1',
                        },
                        {
                            id: 't2',
                            name: 'Mic',
                            description: '',
                            category_id: 'c1',
                        },
                    ]),
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.assets.query).mockImplementation(
            fromV1Mock(
                () =>
                    response([
                        { id: 'a1', asset_type_id: 't1' },
                        { id: 'a2', asset_type_id: 't2' },
                    ]),
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.metadata.show).mockImplementation(
            fromV1Mock(
                (_, name) =>
                    Promise.resolve({
                        name,
                        details:
                            name === 'assets_config'
                                ? [
                                      {
                                          id: 'r1',
                                          name: 'Speaker',
                                          rules: [['min_length', '2 hours']],
                                      },
                                  ]
                                : {},
                    }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        const names = () =>
            spectator.service.filtered_assets().map((_) => _.name);
        // Rules are cached per zone in asset.utilities, so use a zone of its own
        spectator.service.setOptions({ zone: 'zone-rules', duration: 60 });

        names();
        await vi.waitFor(() => {
            TestBed.tick();
            expect(spectator.service.rules()).toHaveLength(1);
            expect(spectator.service.category_list()).toHaveLength(1);
            expect(spectator.service.available_groups()).toHaveLength(2);
        });

        expect(ts_client.metadata.show).toHaveBeenCalledWith({
            id: 'zone-rules',
            name: 'assets_config',
        });
        expect(names()).toEqual(['Mic']);
        spectator.service.setOptions({ duration: 120 });
        expect(names()).toEqual(['Mic', 'Speaker']);
    });

    it('should drop selected categories that are not visible', async () => {
        spectator.service.toggleCategory('gone');
        expect(spectator.service.category()).toEqual(['gone']);

        TestBed.tick();

        expect(spectator.service.category()).toEqual([]);
    });

    // Group results are cached per zone in assets.fn, so each test below
    // uses a zone of its own
    it('should show loading while availability is pending', async () => {
        /** The 6.x page that `fromV1Mock` gives as a 7.x page */
        type TypesResponse = { data: never[]; total: number; next: () => null };
        let resolve_types: (value: TypesResponse) => void = () => undefined;
        vi.mocked(ts_client.asset_types.query).mockImplementation(
            fromV1Mock(
                () => new Promise<TypesResponse>((r) => (resolve_types = r)),
                ['...'],
                'page',
            ),
        );
        spectator.service.setOptions({ zone: 'zone-pending' });
        spectator.service.filtered_assets();

        await vi.waitFor(() => {
            TestBed.tick();
            expect(spectator.service.loading()).toContain('[Availability]');
        });
        expect(ts_client.asset_types.query).toHaveBeenCalledWith(
            expect.objectContaining({ zone_id: 'zone-pending' }),
        );

        resolve_types({ data: [], total: 0, next: () => null });

        await vi.waitFor(() =>
            expect(spectator.service.loading()).not.toContain('[Availability]'),
        );
    });

    it('should clear loading when the availability request fails', async () => {
        const log = vi.spyOn(console, 'error').mockImplementation(() => {});
        vi.mocked(ts_client.asset_types.query).mockRejectedValue(
            new Error('offline'),
        );
        spectator.service.setOptions({ zone: 'zone-error' });
        spectator.service.filtered_assets();

        await vi.waitFor(() => {
            TestBed.tick();
            expect(log).toHaveBeenCalled();
        });

        expect(spectator.service.loading()).not.toContain('[Availability]');
        expect(spectator.service.available_groups()).toEqual([]);
        log.mockRestore();
    });

    it('should read the disabled rooms from the building asset settings', async () => {
        vi.mocked(ts_client.metadata.show).mockImplementation(
            fromV1Mock(
                (_, name) =>
                    Promise.resolve({
                        name,
                        details:
                            name === 'assets-settings'
                                ? { disabled_rooms: ['room-1'] }
                                : [],
                    }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        spectator.service.setOptions({ zone: 'zone-settings' });

        expect(spectator.service.disabled_rooms()).toEqual([]);
        await vi.waitFor(() => {
            TestBed.tick();
            expect(spectator.service.disabled_rooms()).toEqual(['room-1']);
        });
        expect(ts_client.metadata.show).toHaveBeenCalledWith({
            id: 'bld-1',
            name: 'assets-settings',
        });
    });

    it('should apply visitor type zone rules without an event', async () => {
        vi.mocked(ts_client.metadata.show).mockImplementation(
            fromV1Mock(
                (_, name) =>
                    Promise.resolve({
                        name,
                        details:
                            name === 'assets_config'
                                ? [
                                      {
                                          name: '*',
                                          rules: [['visitor_type', 'x']],
                                      },
                                  ]
                                : {},
                    }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        vi.mocked(ts_client.asset_categories.query).mockImplementation(
            fromV1Mock(
                () => response([{ id: 'c1', name: 'Audio' }]),
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.asset_types.query).mockImplementation(
            fromV1Mock(
                () =>
                    response([
                        {
                            id: 't1',
                            name: 'Speaker',
                            description: '',
                            category_id: 'c1',
                        },
                    ]),
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.assets.query).mockImplementation(
            fromV1Mock(
                () => response([{ id: 'a1', asset_type_id: 't1' }]),
                ['...'],
                'page',
            ),
        );
        // Rules and groups are cached per zone, so use a zone of its own
        spectator.service.setOptions({ zone: 'zone-visitor-rules' });
        spectator.service.available_groups();

        await vi.waitFor(() => {
            TestBed.tick();
            expect(spectator.service.rules()).toHaveLength(1);
            expect(spectator.service.available_groups()).toHaveLength(1);
            expect(spectator.service.category_list()).toHaveLength(1);
        });

        // The options set no visitor type, so the rule hides the group
        expect(spectator.service.filtered_assets()).toEqual([]);
    });
});

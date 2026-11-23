import { createEnvironmentInjector, EnvironmentInjector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { OrganisationService } from '../lib/org/organisation.service';
import { Building, Region } from '../lib/types/org.classes';
import { FakeSession, startFakePlaceClient } from './fake-session';
import { mockData } from './mock-data';

import * as ts_client from '@placeos/ts-client';
import { Zone } from '@placeos/ts-client';
import { fromV1Mock, mockPage, mockReply } from '@placeos/ts-client/compat';

// Real ts-client helpers run for real; only the API layer touched by this
// service is overridden per-test via `vi.mocked(...)` in `beforeEach`.
vi.mock('@placeos/ts-client', { spy: true });

describe('OrganisationService', () => {
    let spectator: SpectatorService<OrganisationService>;
    const createService = createServiceFactory({
        service: OrganisationService,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    let place: FakeSession;

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        sessionStorage.clear();
        place = startFakePlaceClient();
        place.signIn({ id: 'auth-1' });
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({ data: [] } as any),
        );
        vi.mocked(ts_client.metadata.bulkFetch).mockResolvedValue(
            mockReply({}),
        );
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
    });

    it('should keep cache keys stable when the authority is unavailable', () => {
        place.setAuthority({
            id: 'auth-1',
            config: { metadata_cache_id: 'meta-7' },
        });
        const service = spectator.service as any;
        const params = { tags: 'org' };
        const online_zone_key = service._zoneCacheKey(params);
        const online_metadata_id = service._metadataCacheID();

        // Offline cold boot: /auth/authority cannot be fetched
        place.setAuthority(null);

        expect(service._zoneCacheKey(params)).toBe(online_zone_key);
        expect(service._metadataCacheID()).toBe(online_metadata_id);
        expect(online_zone_key).toContain('auth-1');
        expect(online_metadata_id).toBe('meta-7');
    });

    it('should read back org data cached while online after the authority is lost', () => {
        const service = spectator.service as any;
        const key = service._zoneCacheKey({ tags: 'org' });
        service._setCachedItem(key, [{ id: 'zone-1' }]);

        place.setAuthority(null);

        expect(
            service._getCachedItem(service._zoneCacheKey({ tags: 'org' })),
        ).toEqual([{ id: 'zone-1' }]);
    });

    it('should keep retrying and initialise once the backend returns', async () => {
        vi.useFakeTimers();
        vi.mocked(ts_client.zones.query).mockRejectedValue(
            new Error('servers unavailable'),
        );
        const service = spectator.service as any;

        service.init().catch(() => undefined);
        await vi.advanceTimersByTimeAsync(1000);
        expect(spectator.service.initialised()).toBe(false);

        // Still down a minute later, still retrying
        await vi.advanceTimersByTimeAsync(60_000);
        expect(spectator.service.initialised()).toBe(false);
        const attempts = vi.mocked(ts_client.zones.query).mock.calls.length;
        expect(attempts).toBeGreaterThan(1);

        // Backend comes back; the next retry succeeds without a reload
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({ data: [] } as any),
        );
        await vi.advanceTimersByTimeAsync(30_000);

        expect(spectator.service.initialised()).toBe(true);
        vi.useRealTimers();
    });

    // Late overrides touch the DOM after the test environment is gone
    it('should not apply settings overrides after it is destroyed', async () => {
        vi.useFakeTimers();
        const set_overrides = vi.fn();
        const injector = createEnvironmentInjector(
            [
                OrganisationService,
                {
                    provide: SettingsService,
                    useValue: { get: vi.fn(), setOverrides: set_overrides },
                },
            ],
            TestBed.inject(EnvironmentInjector),
        );

        // Startup loading schedules overrides on its own
        injector.get(OrganisationService);
        injector.destroy();
        await vi.advanceTimersByTimeAsync(1000);

        expect(set_overrides).not.toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should not say the building settings are ready before they load', async () => {
        vi.useFakeTimers();
        const injector = createEnvironmentInjector(
            [
                OrganisationService,
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(() => false),
                        setOverrides: vi.fn(),
                    },
                },
            ],
            TestBed.inject(EnvironmentInjector),
        );
        const org = injector.get(OrganisationService) as any;
        org._active_building.set({ id: 'bld-1' });

        // The timer fires while the building metadata is still loading
        org._updateSettingOverrides();
        await vi.advanceTimersByTimeAsync(400);
        org._loaded_buildings.set(['bld-1']);

        expect(org.active_settings_ready()).toBe(false);
        org._updateSettingOverrides();
        await vi.advanceTimersByTimeAsync(400);
        expect(org.active_settings_ready()).toBe(true);
        injector.destroy();
        vi.useRealTimers();
    });

    it('should stop waiting when geolocation does not respond', async () => {
        vi.useFakeTimers();
        const original = Object.getOwnPropertyDescriptor(
            navigator,
            'geolocation',
        );
        Object.defineProperty(navigator, 'geolocation', {
            configurable: true,
            value: { getCurrentPosition: vi.fn() },
        });

        const service = spectator.service as unknown as {
            _setBuildingFromGeolocation(): Promise<Building | null>;
        };
        const result = service._setBuildingFromGeolocation();
        await vi.advanceTimersByTimeAsync(10_000);

        await expect(result).resolves.toBeNull();
        if (original) Object.defineProperty(navigator, 'geolocation', original);
        else Reflect.deleteProperty(navigator, 'geolocation');
        vi.useRealTimers();
    });

    it('should describe a location from its zone IDs', () => {
        spectator.service.addZone(
            mockData(Zone, {
                id: 'region-1',
                tags: ['region'],
                name: 'Australia',
            }),
        );
        spectator.service.addZone(
            mockData(Zone, {
                id: 'bld-1',
                parent_id: 'region-1',
                tags: ['building'],
                name: 'Sydney',
            }),
        );
        spectator.service.addZone(
            mockData(Zone, {
                id: 'lvl-1',
                parent_id: 'bld-1',
                tags: ['level'],
                name: 'Level 1',
            }),
        );

        expect(
            spectator.service.locationWithID(['bld-1', 'lvl-1']),
        ).toMatchObject({
            building: { id: 'bld-1' },
            level: { id: 'lvl-1' },
            region: { id: 'region-1' },
            label: 'Australia / Sydney / Level 1',
        });
    });

    it('should load remote buildings represented by selected zones', async () => {
        const region_1 = new Region({ id: 'region-1' });
        const region_2 = new Region({ id: 'region-2' });
        const building_1 = new Building({
            id: 'bld-1',
            parent_id: region_1.id,
        });
        const building_2 = new Building({
            id: 'bld-2',
            parent_id: region_2.id,
        });
        spectator.service.addZone(
            mockData(Zone, {
                id: region_1.id,
                tags: ['region'],
            }),
        );
        spectator.service.addZone(
            mockData(Zone, {
                id: region_2.id,
                tags: ['region'],
            }),
        );
        spectator.service.addZone(
            mockData(Zone, {
                id: building_1.id,
                parent_id: region_1.id,
                tags: ['building'],
            }),
        );
        vi.spyOn(spectator.service, 'loadBuildings').mockImplementation(
            async (parent_id?: string) =>
                parent_id === region_2.id ? [building_2] : [building_1],
        );

        const buildings = await spectator.service.loadBuildingsForZones([
            ['bld-1'],
            ['bld-2'],
        ]);

        expect(buildings.map((building) => building.id)).toEqual([
            'bld-1',
            'bld-2',
        ]);
    });

    it('should sort levels by parent, name then display name', () => {
        spectator.service.addZone({
            id: 'region-1',
            tags: ['region'],
            name: 'Region 1',
        } as any);
        spectator.service.addZone({
            id: 'bld-b',
            parent_id: 'region-1',
            tags: ['building'],
            name: 'Building B',
        } as any);
        spectator.service.addZone({
            id: 'bld-a',
            parent_id: 'region-1',
            tags: ['building'],
            name: 'Building A',
        } as any);
        spectator.service.addZone({
            id: 'lvl-b2',
            parent_id: 'bld-b',
            tags: ['level'],
            name: 'Level 2',
            display_name: 'Z Display',
        } as any);
        spectator.service.addZone({
            id: 'lvl-b2-display',
            parent_id: 'bld-b',
            tags: ['level'],
            name: 'Level 2',
            display_name: 'A Display',
        } as any);
        spectator.service.addZone({
            id: 'lvl-a2',
            parent_id: 'bld-a',
            tags: ['level'],
            name: 'Level 2',
        } as any);
        spectator.service.addZone({
            id: 'lvl-b1',
            parent_id: 'bld-b',
            tags: ['level'],
            name: 'Level 1',
        } as any);

        expect(
            spectator.service
                .levelsForRegion(spectator.service.regions[0])
                .map(({ id }) => id),
        ).toEqual(['lvl-a2', 'lvl-b1', 'lvl-b2-display', 'lvl-b2']);
    });

    it('should put parking after normal levels when loading and adding zones', async () => {
        const zones = [
            mockData(Zone, {
                id: 'parking-2',
                parent_id: 'bld-1',
                name: '02 Parking',
                tags: ['level', 'parking'],
            }),
            mockData(Zone, {
                id: 'level-2',
                parent_id: 'bld-1',
                name: 'Level 2',
                tags: ['level'],
            }),
            mockData(Zone, {
                id: 'parking-1',
                parent_id: 'bld-1',
                name: '01 Parking',
                tags: ['level', 'parking'],
            }),
            mockData(Zone, {
                id: 'level-1',
                parent_id: 'bld-1',
                name: 'Level 1',
                tags: ['level'],
            }),
        ];
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({
                data: zones,
                total: zones.length,
                next: vi.fn(),
            }),
        );

        await spectator.service.loadLevels();

        const expected = ['level-1', 'level-2', 'parking-1', 'parking-2'];
        expect(spectator.service.levels.map(({ id }) => id)).toEqual(expected);
        expect(
            spectator.service
                .levelsForBuilding(new Building({ id: 'bld-1' }))
                .map(({ id }) => id),
        ).toEqual(expected);

        spectator.service.addZone(
            mockData(Zone, {
                id: 'level-3',
                parent_id: 'bld-1',
                name: 'Level 3',
                tags: ['level'],
            }),
        );
        expect(spectator.service.levels.map(({ id }) => id)).toEqual([
            'level-1',
            'level-2',
            'level-3',
            'parking-1',
            'parking-2',
        ]);
    });

    it('should cache zone data for the browser session', async () => {
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'bld-1', tags: ['building'] }],
            } as any),
        );

        const first_list = await spectator.service.loadBuildings('org-1');
        const second_list = await spectator.service.loadBuildings('org-1');

        expect(ts_client.zones.query).toHaveBeenCalledTimes(1);
        expect(first_list.map(({ id }) => id)).toEqual(['bld-1']);
        expect(second_list.map(({ id }) => id)).toEqual(['bld-1']);
    });

    it('should flag that cached data was used so it can be refreshed', async () => {
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'bld-1', tags: ['building'] }],
            } as any),
        );

        await spectator.service.loadBuildings('org-1');
        expect((spectator.service as any)._served_cache).toBe(false);
        await spectator.service.loadBuildings('org-1');

        expect((spectator.service as any)._served_cache).toBe(true);
    });

    it('should skip the cache while refreshing', async () => {
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'bld-1', tags: ['building'] }],
            } as any),
        );

        await spectator.service.loadBuildings('org-1');
        await (spectator.service as any)._refresh(() =>
            spectator.service.loadBuildings('org-1'),
        );

        expect(ts_client.zones.query).toHaveBeenCalledTimes(2);
        // The flag is cleared once the refresh completes
        expect((spectator.service as any)._refreshing).toBe(false);
    });

    it('should discard cached zone data older than the maximum age', async () => {
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'bld-1', tags: ['building'] }],
            } as any),
        );

        await spectator.service.loadBuildings('org-1');
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (!key?.startsWith('PLACEOS.org')) continue;
            const item = JSON.parse(localStorage.getItem(key));
            item.cached_at -= 8 * 24 * 60 * 60 * 1000;
            localStorage.setItem(key, JSON.stringify(item));
        }
        await spectator.service.loadBuildings('org-1');

        expect(ts_client.zones.query).toHaveBeenCalledTimes(2);
        expect((spectator.service as any)._served_cache).toBe(false);
    });

    it('should invalidate cached zone data when metadata cache id changes', async () => {
        const setCacheId = (metadata_cache_id: string) =>
            place.setAuthority({ id: 'auth-1', config: { metadata_cache_id } });
        setCacheId('cache-1');
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'bld-1', tags: ['building'] }],
            } as any),
        );

        await spectator.service.loadBuildings('org-1');
        await spectator.service.loadBuildings('org-1');
        setCacheId('cache-2');
        await spectator.service.loadBuildings('org-1');

        expect(ts_client.zones.query).toHaveBeenCalledTimes(2);
    });

    it('should cache bulk metadata across loads', async () => {
        vi.mocked(ts_client.metadata.bulkFetch).mockImplementation(
            fromV1Mock(
                (name) =>
                    Promise.resolve({ bld_1: { details: { name } } } as any),
                ['name', '...'],
            ),
        );

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);
        (spectator.service as any)._loaded_data = {};
        const building: any = { id: 'bld_1' };
        await spectator.service.loadBuildingData(building);

        // Cached data is applied to the building...
        expect(building.bindings).toEqual({ name: 'bindings' });
        // ...and refreshed from the API in the background.
        await vi.waitFor(() =>
            expect(ts_client.metadata.bulkFetch).toHaveBeenCalledTimes(6),
        );
    });

    it('should clear org caches when reloading metadata', async () => {
        vi.mocked(ts_client.zones.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'bld-1', tags: ['building'] }],
            } as any),
        );
        vi.spyOn(spectator.service as any, 'load').mockResolvedValue(undefined);

        await spectator.service.loadBuildings('org-1');
        await spectator.service.loadBuildings('org-1');
        await spectator.service.reloadMetadata();
        await spectator.service.loadBuildings('org-1');

        expect(ts_client.zones.query).toHaveBeenCalledTimes(2);
    });

    it('should load building metadata in bulk', async () => {
        vi.mocked(ts_client.metadata.bulkFetch).mockImplementation(
            fromV1Mock(
                (name) =>
                    Promise.resolve({ bld_1: { details: { name } } } as any),
                ['name', '...'],
            ),
        );

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);

        expect(ts_client.metadata.bulkFetch).toHaveBeenCalledWith({
            name: 'workplace_app',
            parent_ids: ['bld_1'],
        });
        expect(ts_client.metadata.bulkFetch).toHaveBeenCalledWith({
            name: 'bindings',
            parent_ids: ['bld_1'],
        });
        expect(ts_client.metadata.bulkFetch).toHaveBeenCalledWith({
            name: 'booking_rules',
            parent_ids: ['bld_1'],
        });
        expect(ts_client.metadata.show).not.toHaveBeenCalled();
    });

    it('should fall back to individual metadata requests when bulk returns 404', async () => {
        vi.mocked(ts_client.metadata.bulkFetch).mockRejectedValue({
            status: 404,
        });
        vi.mocked(ts_client.metadata.show).mockImplementation(
            fromV1Mock(
                (id, name) => Promise.resolve({ details: { name } }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);

        expect(ts_client.metadata.show).toHaveBeenCalledWith({
            id: 'bld_1',
            name: 'workplace_app',
        });
        expect(ts_client.metadata.show).toHaveBeenCalledWith({
            id: 'bld_1',
            name: 'bindings',
        });
        expect(ts_client.metadata.show).toHaveBeenCalledWith({
            id: 'bld_1',
            name: 'booking_rules',
        });
        expect(spectator.service.buildingSettings('bld_1')).toEqual({
            name: 'workplace_app',
        });
    });

    it('should not fall back to individual requests on non-404 bulk errors', async () => {
        vi.mocked(ts_client.metadata.bulkFetch).mockRejectedValue({
            status: 500,
        });

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);

        expect(ts_client.metadata.show).not.toHaveBeenCalled();
        expect(spectator.service.buildingSettings('bld_1')).toEqual({});
    });

    it('should initialise the active building from local storage', async () => {
        const region = new Region({ id: 'region-1', tags: ['region'] } as any);
        const first_building = new Building({
            id: 'bld-1',
            parent_id: region.id,
            tags: ['building'],
        } as any);
        const saved_building = new Building({
            id: 'bld-2',
            parent_id: region.id,
            tags: ['building'],
        } as any);
        localStorage.setItem('PLACEOS.region', region.id);
        localStorage.setItem('PLACEOS.building', saved_building.id);
        (spectator.service as any)._region_list.set([region]);
        (spectator.service as any)._building_list.set([first_building]);
        vi.spyOn(spectator.service, 'loadRegionData').mockImplementation(
            async () => {
                await Promise.resolve();
                (spectator.service as any)._building_list.set([
                    first_building,
                    saved_building,
                ]);
            },
        );

        await (spectator.service as any)._setDefaultBuilding();

        expect(spectator.service.region.id).toBe(region.id);
        expect(spectator.service.building.id).toBe(saved_building.id);
    });

    it('should apply the configured default building from another region', async () => {
        const region_1 = new Region({
            id: 'region-1',
            tags: ['region'],
        } as any);
        const region_2 = new Region({
            id: 'region-2',
            tags: ['region'],
        } as any);
        const first_building = new Building({
            id: 'bld-1',
            parent_id: region_1.id,
            tags: ['building'],
        } as any);
        const default_building = new Building({
            id: 'bld-2',
            parent_id: region_2.id,
            tags: ['building'],
        } as any);
        const settings = spectator.inject(SettingsService);
        vi.mocked(settings.get).mockImplementation((key: string) =>
            key === 'app.default_building' ? default_building.id : undefined,
        );
        (spectator.service as any)._region_list.set([region_1, region_2]);
        (spectator.service as any)._building_list.set([first_building]);
        vi.spyOn(spectator.service, 'loadBuildings').mockImplementation(
            async (parent_id?: string) =>
                parent_id === region_2.id
                    ? [default_building]
                    : [first_building],
        );
        vi.spyOn(spectator.service, 'loadRegionData').mockResolvedValue(
            undefined,
        );

        await (spectator.service as any)._setDefaultBuilding();

        expect(spectator.service.region.id).toBe(region_2.id);
        expect(spectator.service.building.id).toBe(default_building.id);
    });

    it('should fall back to the first building when no stored or timezone building matches', async () => {
        const building = new Building({
            id: 'bld-1',
            tags: ['building'],
        } as any);
        (spectator.service as any)._building_list.set([building]);
        vi.spyOn(
            spectator.service as any,
            '_setRegionFromTimezone',
        ).mockResolvedValue(undefined);

        await (spectator.service as any)._setDefaultBuilding();

        expect(spectator.service.building.id).toBe(building.id);
    });

    describe('loadOrganisation', () => {
        const orgs = [
            { id: 'org-1', tags: ['org'] },
            { id: 'org-2', tags: ['org'] },
        ];

        beforeEach(() => {
            vi.mocked(ts_client.zones.query).mockResolvedValue(
                mockPage({
                    data: orgs,
                } as any),
            );
        });

        it('should use the org zone that the authority names', async () => {
            place.setAuthority({ id: 'auth-1', config: { org_zone: 'org-2' } });

            await spectator.service.loadOrganisation();

            expect(spectator.service.organisation.id).toBe('org-2');
        });

        it('should fall back to the first org when the authority names none', async () => {
            await spectator.service.loadOrganisation();

            expect(spectator.service.organisation.id).toBe('org-1');
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        });

        it('should send the user to the misconfigured page without an org', async () => {
            vi.mocked(ts_client.zones.query).mockResolvedValue(
                mockPage({
                    data: [],
                } as any),
            );

            await spectator.service.loadOrganisation();

            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/misconfigured',
            ]);
        });
    });
});

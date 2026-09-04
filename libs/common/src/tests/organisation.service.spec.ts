import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { OrganisationService } from '../lib/org/organisation.service';
import { Building, Region } from '../lib/types/org.classes';

import * as ts_client from '@placeos/ts-client';

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

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        sessionStorage.clear();
        vi.mocked(ts_client.onlineState).mockReturnValue(
            ts_client.createSignal(true),
        );
        vi.mocked(ts_client.waitForSignal).mockResolvedValue(true as any);
        vi.mocked(ts_client.authority).mockReturnValue({
            id: 'auth-1',
        } as any);
        vi.mocked(ts_client.queryZones).mockResolvedValue({ data: [] } as any);
        vi.mocked(ts_client.bulkMetadata).mockResolvedValue({} as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        spectator = createService();
    });

    it('should keep cache keys stable when the authority is unavailable', () => {
        vi.mocked(ts_client.authority).mockReturnValue({
            id: 'auth-1',
            config: { metadata_cache_id: 'meta-7' },
        } as any);
        const service = spectator.service as any;
        const params = { tags: 'org' };
        const online_zone_key = service._zoneCacheKey(params);
        const online_metadata_id = service._metadataCacheID();

        // Offline cold boot: /auth/authority cannot be fetched
        vi.mocked(ts_client.authority).mockReturnValue(undefined as any);

        expect(service._zoneCacheKey(params)).toBe(online_zone_key);
        expect(service._metadataCacheID()).toBe(online_metadata_id);
        expect(online_zone_key).toContain('auth-1');
        expect(online_metadata_id).toBe('meta-7');
    });

    it('should read back org data cached while online after the authority is lost', () => {
        const service = spectator.service as any;
        const key = service._zoneCacheKey({ tags: 'org' });
        service._setCachedItem(key, [{ id: 'zone-1' }]);

        vi.mocked(ts_client.authority).mockReturnValue(undefined as any);

        expect(service._getCachedItem(service._zoneCacheKey({ tags: 'org' })))
            .toEqual([{ id: 'zone-1' }]);
    });

    it('should keep retrying and initialise once the backend returns', async () => {
        vi.useFakeTimers();
        vi.mocked(ts_client.queryZones).mockRejectedValue(
            new Error('servers unavailable'),
        );
        const service = spectator.service as any;

        service.init().catch(() => undefined);
        await vi.advanceTimersByTimeAsync(1000);
        expect(spectator.service.initialised()).toBe(false);

        // Still down a minute later, still retrying
        await vi.advanceTimersByTimeAsync(60_000);
        expect(spectator.service.initialised()).toBe(false);
        const attempts = vi.mocked(ts_client.queryZones).mock.calls.length;
        expect(attempts).toBeGreaterThan(1);

        // Backend comes back; the next retry succeeds without a reload
        vi.mocked(ts_client.queryZones).mockResolvedValue({ data: [] } as any);
        await vi.advanceTimersByTimeAsync(30_000);

        expect(spectator.service.initialised()).toBe(true);
        vi.useRealTimers();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
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

    it('should cache zone data for the browser session', async () => {
        vi.mocked(ts_client.queryZones).mockResolvedValue({
            data: [{ id: 'bld-1', tags: ['building'] }],
        } as any);

        const first_list = await spectator.service.loadBuildings('org-1');
        const second_list = await spectator.service.loadBuildings('org-1');

        expect(ts_client.queryZones).toHaveBeenCalledTimes(1);
        expect(first_list.map(({ id }) => id)).toEqual(['bld-1']);
        expect(second_list.map(({ id }) => id)).toEqual(['bld-1']);
    });

    it('should flag that cached data was used so it can be refreshed', async () => {
        vi.mocked(ts_client.queryZones).mockResolvedValue({
            data: [{ id: 'bld-1', tags: ['building'] }],
        } as any);

        await spectator.service.loadBuildings('org-1');
        expect((spectator.service as any)._served_cache).toBe(false);
        await spectator.service.loadBuildings('org-1');

        expect((spectator.service as any)._served_cache).toBe(true);
    });

    it('should skip the cache while refreshing', async () => {
        vi.mocked(ts_client.queryZones).mockResolvedValue({
            data: [{ id: 'bld-1', tags: ['building'] }],
        } as any);

        await spectator.service.loadBuildings('org-1');
        await (spectator.service as any)._refresh(() =>
            spectator.service.loadBuildings('org-1'),
        );

        expect(ts_client.queryZones).toHaveBeenCalledTimes(2);
        // The flag is cleared once the refresh completes
        expect((spectator.service as any)._refreshing).toBe(false);
    });

    it('should discard cached zone data older than the maximum age', async () => {
        vi.mocked(ts_client.queryZones).mockResolvedValue({
            data: [{ id: 'bld-1', tags: ['building'] }],
        } as any);

        await spectator.service.loadBuildings('org-1');
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (!key?.startsWith('PLACEOS.org')) continue;
            const item = JSON.parse(localStorage.getItem(key));
            item.cached_at -= 8 * 24 * 60 * 60 * 1000;
            localStorage.setItem(key, JSON.stringify(item));
        }
        await spectator.service.loadBuildings('org-1');

        expect(ts_client.queryZones).toHaveBeenCalledTimes(2);
        expect((spectator.service as any)._served_cache).toBe(false);
    });

    it('should invalidate cached zone data when metadata cache id changes', async () => {
        let metadata_cache_id = 'cache-1';
        vi.mocked(ts_client.authority).mockImplementation(
            () =>
                ({
                    id: 'auth-1',
                    config: { metadata_cache_id },
                }) as any,
        );
        vi.mocked(ts_client.queryZones).mockResolvedValue({
            data: [{ id: 'bld-1', tags: ['building'] }],
        } as any);

        await spectator.service.loadBuildings('org-1');
        await spectator.service.loadBuildings('org-1');
        metadata_cache_id = 'cache-2';
        await spectator.service.loadBuildings('org-1');

        expect(ts_client.queryZones).toHaveBeenCalledTimes(2);
    });

    it('should cache bulk metadata across loads', async () => {
        vi.mocked(ts_client.bulkMetadata).mockImplementation((name) =>
            Promise.resolve({ bld_1: { details: { name } } } as any),
        );

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);
        (spectator.service as any)._loaded_data = {};
        const building: any = { id: 'bld_1' };
        await spectator.service.loadBuildingData(building);

        // Cached data is applied to the building...
        expect(building.bindings).toEqual({ name: 'bindings' });
        // ...and refreshed from the API in the background.
        await vi.waitFor(() =>
            expect(ts_client.bulkMetadata).toHaveBeenCalledTimes(6),
        );
    });

    it('should clear org caches when reloading metadata', async () => {
        vi.mocked(ts_client.queryZones).mockResolvedValue({
            data: [{ id: 'bld-1', tags: ['building'] }],
        } as any);
        vi.spyOn(spectator.service as any, 'load').mockResolvedValue(
            undefined,
        );

        await spectator.service.loadBuildings('org-1');
        await spectator.service.loadBuildings('org-1');
        await spectator.service.reloadMetadata();
        await spectator.service.loadBuildings('org-1');

        expect(ts_client.queryZones).toHaveBeenCalledTimes(2);
    });

    it('should load building metadata in bulk', async () => {
        vi.mocked(ts_client.bulkMetadata).mockImplementation((name) =>
            Promise.resolve({ bld_1: { details: { name } } } as any),
        );

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);

        expect(ts_client.bulkMetadata).toHaveBeenCalledWith('workplace_app', {
            parent_ids: 'bld_1',
        });
        expect(ts_client.bulkMetadata).toHaveBeenCalledWith('bindings', {
            parent_ids: 'bld_1',
        });
        expect(ts_client.bulkMetadata).toHaveBeenCalledWith('booking_rules', {
            parent_ids: 'bld_1',
        });
        expect(ts_client.showMetadata).not.toHaveBeenCalled();
    });

    it('should fall back to individual metadata requests when bulk returns 404', async () => {
        vi.mocked(ts_client.bulkMetadata).mockRejectedValue({ status: 404 });
        vi.mocked(ts_client.showMetadata).mockImplementation(
            (id, name) =>
                Promise.resolve({ details: { name } }) as any,
        );

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);

        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld_1',
            'workplace_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith('bld_1', 'bindings');
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld_1',
            'booking_rules',
        );
        expect(spectator.service.buildingSettings('bld_1')).toEqual({
            name: 'workplace_app',
        });
    });

    it('should not fall back to individual requests on non-404 bulk errors', async () => {
        vi.mocked(ts_client.bulkMetadata).mockRejectedValue({ status: 500 });

        await spectator.service.loadBuildingData({ id: 'bld_1' } as any);

        expect(ts_client.showMetadata).not.toHaveBeenCalled();
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
        const region_1 = new Region({ id: 'region-1', tags: ['region'] } as any);
        const region_2 = new Region({ id: 'region-2', tags: ['region'] } as any);
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
                parent_id === region_2.id ? [default_building] : [first_building],
        );
        vi.spyOn(spectator.service, 'loadRegionData').mockResolvedValue(
            undefined,
        );

        await (spectator.service as any)._setDefaultBuilding();

        expect(spectator.service.region.id).toBe(region_2.id);
        expect(spectator.service.building.id).toBe(default_building.id);
    });

    it('should fall back to the first building when no stored or timezone building matches', async () => {
        const building = new Building({ id: 'bld-1', tags: ['building'] } as any);
        (spectator.service as any)._building_list.set([building]);
        vi.spyOn(
            spectator.service as any,
            '_setRegionFromTimezone',
        ).mockResolvedValue(undefined);

        await (spectator.service as any)._setDefaultBuilding();

        expect(spectator.service.building.id).toBe(building.id);
    });

    /// TODO: fix
    // it('should load organisation', async () => {
    //     const orgs = [{ id: 'org-1' }, { id: 'org-2' }];
    //     (ts_client as any).isMock = vi.fn(() => false);
    //     (ts_client as any).showMetadata = vi.fn(() => of({ details: {} }));
    //     (ts_client as any).queryZones = vi.fn(() => of({ data: orgs }));
    //     await spectator.service.loadOrganisation();
    //     expect(spectator.service.organisation).toBeInstanceOf(Organisation);
    //     expect(spectator.service.organisation.id).toBe('org-1');
    //     (ts_client as any).authority = vi.fn(() => ({
    //         config: { org_zone: 'org-2' },
    //     }));
    //     await spectator.service.loadOrganisation();
    //     expect(spectator.service.organisation.id).toBe('org-2');
    //     expect(spectator.inject(Router).navigate).not.toHaveBeenCalledWith([
    //         '/misconfigured',
    //     ]);
    //     (ts_client as any).queryZones.mockImplementation(() =>
    //         of({ data: [] }),
    //     );
    //     await spectator.service.loadOrganisation();
    //     expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
    //         '/misconfigured',
    //     ]);
    // });

    /// TODO: fix
    // it('should load buildings', async () => {
    //     const blds = [{ id: 'bld-1' }, { id: 'bld-2' }];
    //     (ts_client as any).showMetadata = vi.fn(() => of({ details: {} }));
    //     (ts_client as any).queryZones = vi.fn(() => of({ data: [] }));
    //     expect(spectator.service.buildings).toHaveLength(0);
    //     expect(spectator.service.building).toBeNull();
    //     (spectator.service as any)._organisation = new Organisation({
    //         id: 'org-1',
    //     });
    //     (ts_client as any).queryZones = vi.fn(() => of({ data: blds }));
    //     const list = await spectator.service.loadBuildings();
    //     (spectator.service as any)._buildings.next(list);
    //     await spectator.service.loadSettings();
    //     expect(list).toHaveLength(2);
    //     expect(list[0]).toBeInstanceOf(Building);
    //     expect(spectator.service.building.id).toBe('bld-1');
    //     localStorage.setItem('PLACEOS.building', 'bld-2');
    //     // await spectator.service.loadSettings();
    //     // expect(spectator.service.buildings).toHaveLength(2);
    //     // expect(spectator.service.building.id).toBe('bld-2');
    //     // console.log('Load Building 4');
    // });

    /// TODO: fix
    // it('should load levels', async () => {
    //     const router = spectator.inject(Router);
    //     (router.navigate as any).mockReset();
    //     const blds = [{ id: 'bld-1' }];
    //     const lvls = [
    //         { id: 'lvl-1', parent_id: 'bld-2' },
    //         { id: 'lvl-2', parent_id: 'bld-1' },
    //     ];
    //     (ts_client as any).showMetadata = vi.fn(() => of({ details: {} }));
    //     (ts_client as any).queryZones = vi.fn(() => of({ data: blds }));
    //     const list = await spectator.service.loadBuildings();
    //     (spectator.service as any)._buildings.next(list);
    //     (ts_client as any).queryZones = vi.fn(() => of({ data: [] }));
    //     expect(router.navigate).not.toHaveBeenCalledWith(['/misconfigured']);
    //     await spectator.service.loadLevels();
    //     expect(router.navigate).toHaveBeenCalledWith(['/misconfigured']);
    //     (ts_client as any).queryZones = vi.fn(() => of({ data: lvls }));
    //     await spectator.service.loadLevels();
    //     expect(spectator.service.levels).toHaveLength(2);
    //     expect(spectator.service.levels[0]).toBeInstanceOf(BuildingLevel);
    //     const levels = await nextValueFrom(spectator.service.level_list);
    //     expect(levels).toEqual(spectator.service.levels);
    // });

    it('should load org and buildings settings', async () => {
        const settings = spectator.inject(SettingsService);
        // (settings.get as any).mockImplementation(() => );
        // (spectator.service as any)._buildings.next([
        //     { id: 'bld-1' },
        //     { id: 'bld-2' },
        // ]);
        // (spectator.service as any)._active_building.next({
        //     id: 'bld-1',
        // });
        // (spectator.service as any)._organisation = new Organisation({
        //     id: 'org-1',
        // });
        // (ts_client as any).showMetadata = vi.fn(() => of({ details: {} }));
        // await spectator.service.loadSettings();
        // await spectator.service.loadBuildingData({ id: 'bld-1' } as any);
        // await spectator.service.loadBuildingData({ id: 'bld-2' } as any);
        // expect(ts_client.showMetadata).toBeCalledWith('org-1', 'workplace_app');
        // for (const { id } of spectator.service.buildings) {
        //     expect(ts_client.showMetadata).toBeCalledWith(id, 'workplace_app');
        // }
        // expect(settings.overrides).toEqual([{}, {}, {}, {}]);
        // (settings.get as any).mockReset();
        // (settings as any).app_name = 'another';
        // await spectator.service.loadSettings();
        // await spectator.service.loadBuildingData({ id: 'bld-1' } as any);
        // await spectator.service.loadBuildingData({ id: 'bld-2' } as any);
        // expect(ts_client.showMetadata).toBeCalledWith('org-1', 'another_app');
        // for (const { id } of spectator.service.buildings) {
        //     expect(ts_client.showMetadata).toBeCalledWith(id, 'another_app');
        // }
    });
});

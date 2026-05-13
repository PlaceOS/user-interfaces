import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { OrganisationService } from '../lib/org/organisation.service';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

describe('OrganisationService', () => {
    let spectator: SpectatorService<OrganisationService>;
    const createService = createServiceFactory({
        service: OrganisationService,
        providers: [
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(Router, { navigate: jest.fn() }),
        ],
    });

    beforeEach(() => {
        sessionStorage.clear();
        (ts_client as any).onlineState = jest.fn(() => of(true));
        (ts_client as any).authority = jest.fn(() => ({ id: 'auth-1' }));
        spectator = createService();
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
        (ts_client as any).queryZones = jest.fn(() =>
            of({ data: [{ id: 'bld-1', tags: ['building'] }] }),
        );

        const first_list = await spectator.service.loadBuildings('org-1');
        const second_list = await spectator.service.loadBuildings('org-1');

        expect(ts_client.queryZones).toHaveBeenCalledTimes(1);
        expect(first_list.map(({ id }) => id)).toEqual(['bld-1']);
        expect(second_list.map(({ id }) => id)).toEqual(['bld-1']);
    });

    it('should load building metadata in bulk', async () => {
        (ts_client as any).bulkMetadata = jest.fn((name) =>
            of({ bld_1: { details: { name } } }),
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

    /// TODO: fix
    // it('should load organisation', async () => {
    //     const orgs = [{ id: 'org-1' }, { id: 'org-2' }];
    //     (ts_client as any).isMock = jest.fn(() => false);
    //     (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
    //     (ts_client as any).queryZones = jest.fn(() => of({ data: orgs }));
    //     await spectator.service.loadOrganisation();
    //     expect(spectator.service.organisation).toBeInstanceOf(Organisation);
    //     expect(spectator.service.organisation.id).toBe('org-1');
    //     (ts_client as any).authority = jest.fn(() => ({
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
    //     (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
    //     (ts_client as any).queryZones = jest.fn(() => of({ data: [] }));
    //     expect(spectator.service.buildings).toHaveLength(0);
    //     expect(spectator.service.building).toBeNull();
    //     (spectator.service as any)._organisation = new Organisation({
    //         id: 'org-1',
    //     });
    //     (ts_client as any).queryZones = jest.fn(() => of({ data: blds }));
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
    //     (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
    //     (ts_client as any).queryZones = jest.fn(() => of({ data: blds }));
    //     const list = await spectator.service.loadBuildings();
    //     (spectator.service as any)._buildings.next(list);
    //     (ts_client as any).queryZones = jest.fn(() => of({ data: [] }));
    //     expect(router.navigate).not.toHaveBeenCalledWith(['/misconfigured']);
    //     await spectator.service.loadLevels();
    //     expect(router.navigate).toHaveBeenCalledWith(['/misconfigured']);
    //     (ts_client as any).queryZones = jest.fn(() => of({ data: lvls }));
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
        // (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
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

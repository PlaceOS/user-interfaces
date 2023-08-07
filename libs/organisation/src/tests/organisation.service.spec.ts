import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { OrganisationService } from '../lib/organisation.service';
import { Organisation } from '../lib/organisation.class';
import { BuildingLevel } from '../lib/level.class';
import { Building } from '../lib/building.class';

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
        (ts_client as any).onlineState = jest.fn(() => of(true));
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should load organisation', async () => {
        const orgs = [{ id: 'org-1' }, { id: 'org-2' }];
        (ts_client as any).isMock = jest.fn(() => false);
        (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
        (ts_client as any).queryZones = jest.fn(() => of({ data: orgs }));
        await spectator.service.loadOrganisation();
        expect(spectator.service.organisation).toBeInstanceOf(Organisation);
        expect(spectator.service.organisation.id).toBe('org-1');
        (ts_client as any).authority = jest.fn(() => ({
            config: { org_zone: 'org-2' },
        }));
        await spectator.service.loadOrganisation();
        expect(spectator.service.organisation.id).toBe('org-2');
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalledWith([
            '/misconfigured',
        ]);
        (ts_client as any).queryZones.mockImplementation(() =>
            of({ data: [] })
        );
        await spectator.service.loadOrganisation();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/misconfigured',
        ]);
    });

    it('should load buildings', async () => {
        const blds = [{ id: 'bld-1' }, { id: 'bld-2' }];
        (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
        (ts_client as any).queryZones = jest.fn(() => of({ data: [] }));
        expect(spectator.service.buildings).toHaveLength(0);
        expect(spectator.service.building).toBeNull();
        (spectator.service as any)._organisation = new Organisation({
            id: 'org-1',
        });
        (ts_client as any).queryZones = jest.fn(() => of({ data: blds }));
        const list = await spectator.service.loadBuildings();
        (spectator.service as any)._buildings.next(list);
        await spectator.service.loadSettings();
        expect(list).toHaveLength(2);
        expect(list[0]).toBeInstanceOf(Building);
        expect(spectator.service.building.id).toBe('bld-1');
        localStorage.setItem('PLACEOS.building', 'bld-2');
        // await spectator.service.loadSettings();
        // expect(spectator.service.buildings).toHaveLength(2);
        // expect(spectator.service.building.id).toBe('bld-2');
        // console.log('Load Building 4');
    });

    it('should load levels', async () => {
        const router = spectator.inject(Router);
        (router.navigate as any).mockReset();
        const blds = [{ id: 'bld-1' }];
        const lvls = [
            { id: 'lvl-1', parent_id: 'bld-2' },
            { id: 'lvl-2', parent_id: 'bld-1' },
        ];
        (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
        (ts_client as any).queryZones = jest.fn(() => of({ data: blds }));
        const list = await spectator.service.loadBuildings();
        (spectator.service as any)._buildings.next(list);
        (ts_client as any).queryZones = jest.fn(() => of({ data: [] }));
        expect(router.navigate).not.toHaveBeenCalledWith(['/misconfigured']);
        await spectator.service.loadLevels();
        expect(router.navigate).toHaveBeenCalledWith(['/misconfigured']);
        (ts_client as any).queryZones = jest.fn(() => of({ data: lvls }));
        await spectator.service.loadLevels();
        expect(spectator.service.levels).toHaveLength(2);
        expect(spectator.service.levels[0]).toBeInstanceOf(BuildingLevel);
        const levels = await spectator.service.level_list
            .pipe(take(1))
            .toPromise();
        expect(levels).toEqual(spectator.service.levels);
    });

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

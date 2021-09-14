import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

import { SettingsService } from '@placeos/common';
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
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: Router, useValue: { navigate: jest.fn() } },
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
        (ts_client as any).queryZones = jest.fn(() => of({ data: blds }));
        await spectator.service.loadBuildings();
        expect(spectator.service.buildings).toHaveLength(2);
        expect(spectator.service.buildings[0]).toBeInstanceOf(Building);
        expect(spectator.service.building.id).toBe('bld-1');
        localStorage.setItem('PLACEOS.building', 'bld-2');
        await spectator.service.loadBuildings();
        expect(spectator.service.buildings).toHaveLength(2);
        expect(spectator.service.building.id).toBe('bld-2');
        for (const { id } of blds) {
            expect(ts_client.showMetadata).toBeCalledWith(id, {
                name: 'bindings',
            });
        }
    });

    it('should load levels', async () => {
        const router = spectator.inject(Router);
        router.navigate.mockReset();
        const lvls = [{ id: 'lvl-1' }, { id: 'lvl-2' }];
        (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
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
        // settings.get.mockImplementation(() => );
        (spectator.service as any)._buildings.next([
            { id: 'bld-1' },
            { id: 'bld-2' },
        ]);
        (spectator.service as any)._active_building.next({
            id: 'bld-1',
        });
        (spectator.service as any)._organisation = new Organisation({
            id: 'org-1',
        });
        (ts_client as any).showMetadata = jest.fn(() => of({ details: {} }));
        await spectator.service.loadSettings();
        expect(ts_client.showMetadata).toBeCalledWith('org-1', {
            name: 'workplace_app',
        });
        for (const { id } of spectator.service.buildings) {
            expect(ts_client.showMetadata).toBeCalledWith(id, {
                name: 'workplace_app',
            });
        }
        expect(settings.overrides).toEqual([{}, {}]);
        settings.get.mockImplementationOnce(() => 'another');
        await spectator.service.loadSettings();
        expect(ts_client.showMetadata).toBeCalledWith('org-1', {
            name: 'another_app',
        });
        for (const { id } of spectator.service.buildings) {
            expect(ts_client.showMetadata).toBeCalledWith(id, {
                name: 'another_app',
            });
        }
    });
});

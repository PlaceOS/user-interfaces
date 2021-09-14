import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SettingsService } from '@placeos/common';
import {
    Building,
    BuildingLevel,
    Organisation,
    OrganisationService,
} from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';

import { ExploreStateService } from '../lib/explore-state.service';
import { ExploreZonesService } from '../lib/explore-zones.service';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';
import { fakeAsync } from '@angular/core/testing';

describe('ExploreStateService', () => {
    let spectator: SpectatorService<ExploreZonesService>;
    const createService = createServiceFactory({
        service: ExploreZonesService,
        providers: [
            {
                provide: ExploreStateService,
                useValue: {
                    level: new BehaviorSubject(null),
                    setFeatures: jest.fn(),
                    setLabels: jest.fn(),
                    setStyles: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    organisation: new Organisation(),
                    initialised: of(true),
                    levels: [],
                    buildings: [],
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should bind to zone area management', async () => {
        const bind = jest.fn();
        const binding = jest.fn(() => ({ listen: () => of(), bind }));
        (ts_client as any).getModule = jest.fn(() => ({ binding }));
        const state = spectator.inject(ExploreStateService);
        const org = spectator.inject(OrganisationService);
        expect(ts_client.getModule).not.toHaveBeenCalled();
        (state as any).level.next(new BuildingLevel());
        expect(ts_client.getModule).not.toHaveBeenCalled();
        (org as any).buildings = [new Building({ id: '1' })];
        (state as any).level.next(new BuildingLevel({ parent_id: '1' }));
        expect(ts_client.getModule).not.toHaveBeenCalled();
        (org as any).buildings = [
            new Building({ id: '1', bindings: { area_management: 'sys-1' } }),
        ];
        (state as any).level.next(new BuildingLevel({ parent_id: '1' }));
        await new Promise<void>((r) => setTimeout(() => r(), 10));
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'sys-1',
            'AreaManagement'
        );
        expect(bind).toHaveBeenCalled();
    });

    it('should handle binding updates', () => {
        jest.useFakeTimers();
        (spectator.service as any)._location['zone-1'] = { x: 1, y: 1 };
        let data = { value: [{ area_id: 'zone-1', count: 1 }] } as any;
        const state = spectator.inject(ExploreStateService);
        spectator.service.parseData(data);
        jest.runOnlyPendingTimers();
        expect(state.setLabels).toHaveBeenCalledWith('zones', [
            { location: { x: 1, y: 1 }, content: '1 Device\n', z_index: 100 },
        ]);
        expect(state.setStyles).toHaveBeenCalledWith('zones', {
            '#zone-1': { fill: '#43a047', opacity: 0.6 },
        });
        data = { value: [{ area_id: 'zone-1', count: 50 }] };
        spectator.service.parseData(data);
        jest.runOnlyPendingTimers();
        expect(state.setLabels).toHaveBeenCalledWith('zones', [
            { location: { x: 1, y: 1 }, content: '50 Devices\n', z_index: 100 },
        ]);
        expect(state.setStyles).toHaveBeenCalledWith('zones', {
            '#zone-1': { fill: '#ffb300', opacity: 0.6 },
        });
        data = { value: [{ area_id: 'zone-1', count: 99 }] };
        spectator.service.parseData(data);
        jest.runOnlyPendingTimers();
        expect(state.setLabels).toHaveBeenCalledWith('zones', [
            { location: { x: 1, y: 1 }, content: '99 Devices\n', z_index: 100 },
        ]);
        expect(state.setStyles).toHaveBeenCalledWith('zones', {
            '#zone-1': { fill: '#e53935', opacity: 0.6 },
        });
        jest.useRealTimers();
    });
});

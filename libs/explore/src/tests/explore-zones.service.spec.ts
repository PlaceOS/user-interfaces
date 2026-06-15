import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {
    Building,
    Organisation,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { BehaviorSubject, of } from 'rxjs';

import { ExploreStateService } from '../lib/explore-state.service';
import { ExploreZonesService } from '../lib/explore-zones.service';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
}));

import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

describe('ExploreStateService', () => {
    let spectator: SpectatorService<ExploreZonesService>;
    const createService = createServiceFactory({
        service: ExploreZonesService,
        providers: [
            MockProvider(ExploreStateService, {
                level: signal({ id: 'lvl-1' }) as any,
                options: signal({ is_public: false }) as any,
                setFeatures: jest.fn(),
                setLabels: jest.fn(),
                setStyles: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                organisation: new Organisation(),
                binding: jest.fn(),
                initialised: of(true),
                levels: [],
                buildings: [],
                active_building: new BehaviorSubject<Building>({
                    id: 'bld-1',
                } as any),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(ts_client.showMetadata).mockResolvedValue({} as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    // it('should bind to zone area management', async () => {
    //     const bind = jest.fn();
    //     const binding = jest.fn(() => ({ listen: () => of(), bind }));
    //     (ts_client as any).getModule = jest.fn(() => ({ binding }));
    //     const state = spectator.inject(ExploreStateService);
    //     const org = spectator.inject(OrganisationService);
    //     (state.level as any).next({});
    //     expect(ts_client.getModule).not.toHaveBeenCalled();
    //     (org.binding as any).mockImplementation(() => '');
    //     (state.level as any).next({});
    //     expect(ts_client.getModule).not.toHaveBeenCalled();
    //     (org.binding as any).mockImplementation(() => 'sys-1');
    //     (state.level as any).next({});
    //     await new Promise<void>((r) => setTimeout(() => r(), 10));
    //     expect(ts_client.getModule).toHaveBeenCalledWith(
    //         'sys-1',
    //         'AreaManagement'
    //     );
    //     expect(bind).toHaveBeenCalled();
    // });

    // TODO: fix
    // it('should handle binding updates', fakeAsync(() => {
    //     (spectator.service as any)._location['zone-1'] = { x: 1, y: 1 };
    //     let data = { value: [{ area_id: 'zone-1', count: 1 }] } as any;
    //     const state = spectator.inject(ExploreStateService);
    //     spectator.service.parseData(data);
    //     tick();
    //     expect(state.setLabels).toHaveBeenCalledWith('zones', [
    //         {
    //             location: { x: 1, y: 1 },
    //             content: '1 User Device\n',
    //             z_index: 100,
    //         },
    //     ]);
    //     expect(state.setStyles).toHaveBeenCalledWith('zones', {
    //         '#zone-1': { fill: '#43a047', opacity: 0.6 },
    //     });
    //     data = { value: [{ area_id: 'zone-1', count: 50 }] };
    //     spectator.service.parseData(data);
    //     tick();
    //     expect(state.setLabels).toHaveBeenCalledWith('zones', [
    //         {
    //             location: { x: 1, y: 1 },
    //             content: '50 User Devices\n',
    //             z_index: 100,
    //         },
    //     ]);
    //     expect(state.setStyles).toHaveBeenCalledWith('zones', {
    //         '#zone-1': { fill: '#ffb300', opacity: 0.6 },
    //     });
    //     data = { value: [{ area_id: 'zone-1', count: 99 }] };
    //     spectator.service.parseData(data);
    //     tick();
    //     expect(state.setLabels).toHaveBeenCalledWith('zones', [
    //         {
    //             location: { x: 1, y: 1 },
    //             content: '99 User Devices\n',
    //             z_index: 100,
    //         },
    //     ]);
    //     expect(state.setStyles).toHaveBeenCalledWith('zones', {
    //         '#zone-1': { fill: '#e53935', opacity: 0.6 },
    //     });
    //     tick();
    // }));
});

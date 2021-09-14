import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { BookingFormService, DesksService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import {
    Building,
    BuildingLevel,
    Organisation,
    OrganisationService,
} from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';

import { ExploreDesksService } from '../lib/explore-desks.service';
import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/bookings');

import * as ts_client from '@placeos/ts-client';
import * as booking_mod from '@placeos/bookings';
import { DEFAULT_COLOURS } from '../lib/explore-spaces.service';

describe('ExploreDesksService', () => {
    let spectator: SpectatorService<ExploreDesksService>;
    const createService = createServiceFactory({
        service: ExploreDesksService,
        providers: [
            {
                provide: ExploreStateService,
                useValue: {
                    level: new BehaviorSubject({}),
                    setFeatures: jest.fn(),
                    setStyles: jest.fn(),
                    setActions: jest.fn(),
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
            { provide: DesksService, useValue: {} },
            { provide: BookingFormService, useValue: {} },
        ],
    });

    beforeEach(() => {
        (ts_client as any).showMetadata = jest.fn(() =>
            of({
                details: [
                    { id: 'desk-1', name: '1', bookable: true },
                    { id: 'desk-2', name: '2', bookable: false },
                ],
            })
        );
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should bind to AreaManagement driver', async () => {
        (booking_mod as any).queryBookings = jest.fn(() => of([]));
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
        (state as any).level.next(
            new BuildingLevel({ id: 'lvl-1', parent_id: '1' })
        );
        await new Promise<void>((r) => setTimeout(() => r(), 30));
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'sys-1',
            'AreaManagement'
        );
        expect(bind).toHaveBeenCalledTimes(2);
        expect(binding).toHaveBeenCalledWith('lvl-1');
        expect(binding).toHaveBeenCalledWith('lvl-1:desk_ids');
    });

    it('should handle binding changes', () => {
        jest.useFakeTimers();
        const state = spectator.inject(ExploreStateService);
        (state.setActions as any).mockReset();
        (state.setFeatures as any).mockReset();
        (state.setStyles as any).mockReset();
        (state as any).level.next({ id: 'lvl-1' });
        spectator.service.processBindingChange(
            {
                value: [
                    { location: 'desk', at_location: true, map_id: 'desk-1' },
                ],
            },
            'sys-1'
        );
        jest.runOnlyPendingTimers();
        expect(state.setActions).toHaveBeenCalled();
        expect(state.setFeatures).toHaveBeenCalled();
        expect(state.setStyles).toHaveBeenCalledWith('desks', {
            '#desk-1': { fill: DEFAULT_COLOURS['busy'], opacity: 0.6 },
            '#desk-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        // TODO: Test various desk states
        jest.useRealTimers();
    });
});

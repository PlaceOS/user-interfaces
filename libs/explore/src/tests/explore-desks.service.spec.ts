import { MatDialog } from '@angular/material/dialog';
import { fakeAsync, tick } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SettingsService } from '@placeos/common';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';

import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { DesksService } from 'libs/bookings/src/lib/desk.service';

import { ExploreDesksService } from '../lib/explore-desks.service';
import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/bookings');

import * as ts_client from '@placeos/ts-client';
import * as booking_mod from '@placeos/bookings';
import { MockProvider } from 'ng-mocks';

describe('ExploreDesksService', () => {
    let spectator: SpectatorService<ExploreDesksService>;
    const createService = createServiceFactory({
        service: ExploreDesksService,
        providers: [
            MockProvider(ExploreStateService, {
                level: new BehaviorSubject(null),
                options: new BehaviorSubject({ is_public: false }),
                setFeatures: jest.fn(),
                setStyles: jest.fn(),
                setActions: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                binding: jest.fn(() => 'sys-1'),
                active_building: new BehaviorSubject(new Building()),
                initialised: of(true),
                levels: [],
                buildings: [],
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(DesksService, {}),
            MockProvider(BookingFormService, {}),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (ts_client as any).showMetadata = jest.fn((_, name) =>
            name.includes('restrictions')
                ? of([])
                : of({
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

    it('should bind to AreaManagement driver', fakeAsync(() => {
        (booking_mod as any).queryBookings = jest.fn(() => of([]));
        const bind = jest.fn();
        const binding = jest.fn(() => ({ listen: () => of(), bind }));
        (ts_client.getModule as any) = jest.fn(() => () => null);
        (ts_client.getModule as any).mockImplementation(() => ({ binding }));
        const state = spectator.inject(ExploreStateService);
        expect(ts_client.getModule).not.toHaveBeenCalled();
        (state as any).level.next(
            new BuildingLevel({ id: 'lvl-1', parent_id: '1' })
        );
        tick(350);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'sys-1',
            'AreaManagement'
        );
        expect(bind).toHaveBeenCalledTimes(1);
        expect(binding).toHaveBeenCalledWith('lvl-1');
    }));

    it('should handle binding changes', () => {
        // TODO: Fix this test
        // jest.useFakeTimers();
        // const state = spectator.inject(ExploreStateService);
        // (state.setActions as any).mockReset();
        // (state.setFeatures as any).mockReset();
        // (state.setStyles as any).mockReset();
        // (state as any).level.next({ id: 'lvl-1' });
        // spectator.service.processBindingChange(
        //     {
        //         value: [
        //             { location: 'desk', at_location: true, map_id: 'desk-1' },
        //         ],
        //     },
        //     'sys-1'
        // );
        // jest.runOnlyPendingTimers();
        // jest.runOnlyPendingTimers();
        // expect(state.setActions).toHaveBeenCalled();
        // expect(state.setFeatures).toHaveBeenCalled();
        // expect(state.setStyles).toHaveBeenCalledWith('desks', {
        //     '#desk-1': { fill: DEFAULT_COLOURS['busy'] },
        //     '#desk-2': { fill: DEFAULT_COLOURS['not-bookable'] },
        // });
        // // TODO: Test various desk states
        // jest.useRealTimers();
    });
});

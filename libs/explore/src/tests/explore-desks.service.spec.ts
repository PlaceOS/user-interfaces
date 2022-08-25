import { MatDialog } from '@angular/material/dialog';
import { fakeAsync, tick } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SettingsService } from '@placeos/common';
import {
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';

import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { DesksService } from 'libs/bookings/src/lib/desk.service';

import { DEFAULT_COLOURS } from '../lib/explore-spaces.service';
import { ExploreDesksService } from '../lib/explore-desks.service';
import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/bookings');

import * as ts_client from '@placeos/ts-client';
import * as booking_mod from '@placeos/bookings';

describe('ExploreDesksService', () => {
    let spectator: SpectatorService<ExploreDesksService>;
    const createService = createServiceFactory({
        service: ExploreDesksService,
        providers: [
            {
                provide: ExploreStateService,
                useValue: {
                    level: new BehaviorSubject(null),
                    setFeatures: jest.fn(),
                    setStyles: jest.fn(),
                    setActions: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    binding: jest.fn(() => 'sys-1'),
                    initialised: of(true),
                    levels: [],
                    buildings: [],
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: DesksService, useValue: {} },
            { provide: BookingFormService, useValue: {} },
            { provide: MatDialog, useValue: { open: jest.fn() } }
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

    it('should bind to AreaManagement driver', fakeAsync(() => {
        (booking_mod as any).queryBookings = jest.fn(() => of([]));
        const bind = jest.fn();
        const binding = jest.fn(() => ({ listen: () => of(), bind }));
        (ts_client.getModule as any) = jest.fn();
        (ts_client.getModule as any).mockImplementation(() => ({ binding }));
        const state = spectator.inject(ExploreStateService);
        expect(ts_client.getModule).not.toHaveBeenCalled();
        (state as any).level.next(
            new BuildingLevel({ id: 'lvl-1', parent_id: '1' })
        );
        tick(300);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'sys-1',
            'AreaManagement'
        );
        expect(bind).toHaveBeenCalledTimes(1);
        expect(binding).toHaveBeenCalledWith('lvl-1');
    }));

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
            '#desk-1': { fill: DEFAULT_COLOURS['busy'] },
            '#desk-2': { fill: DEFAULT_COLOURS['not-bookable'] },
        });
        // TODO: Test various desk states
        jest.useRealTimers();
    });
});

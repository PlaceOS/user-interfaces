import { Injector, signal } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {
    Building,
    Desk,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { generateBookingForm } from 'libs/bookings/src/lib/booking.utilities';
import { DesksService } from 'libs/bookings/src/lib/desk.service';

import { ExploreDesksService } from '../lib/explore-desks.service';
import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
}));
jest.mock('@placeos/bookings');

import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

describe('ExploreDesksService', () => {
    let spectator: SpectatorService<ExploreDesksService>;
    const createService = createServiceFactory({
        service: ExploreDesksService,
        providers: [
            MockProvider(ExploreStateService, {
                level: signal(null) as any,
                options: signal({ is_public: false }) as any,
                setFeatures: jest.fn(),
                setStyles: jest.fn(),
                setActions: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                binding: jest.fn(() => 'sys-1'),
                active_building: signal(new Building()),
                initialised: signal(true),
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
        jest.clearAllMocks();
        jest.mocked(ts_client.showMetadata).mockImplementation(
            (_, name) =>
                Promise.resolve(
                    `${name}`.includes('restrictions')
                        ? []
                        : {
                              details: [
                                  { id: 'desk-1', name: '1', bookable: true },
                                  { id: 'desk-2', name: '2', bookable: false },
                              ],
                          },
                ) as any,
        );
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should bind to AreaManagement driver', fakeAsync(() => {
        // TODO: Fix this test
        // (booking_mod as any).queryBookings = jest.fn(() => of([]));
        // const bind = jest.fn();
        // const binding = jest.fn(() => ({ listen: () => of(), bind }));
        // (ts_client.getModule as any) = jest.fn(() => () => null);
        // (ts_client.getModule as any).mockImplementation(() => ({ binding }));
        // const state = spectator.inject(ExploreStateService);
        // expect(ts_client.getModule).not.toHaveBeenCalled();
        // (state as any).level.next(
        //     new BuildingLevel({ id: 'lvl-1', parent_id: '1' })
        // );
        // tick(350);
        // expect(ts_client.getModule).toHaveBeenCalledWith(
        //     'sys-1',
        //     'AreaManagement'
        // );
        // expect(bind).toHaveBeenCalledTimes(1);
        // expect(binding).toHaveBeenCalledWith('lvl-1');
    }));

    it('should handle binding changes', () => {
        expect(spectator.service).toBeTruthy();
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

    it('should use the desk map id as the asset id when booking a map-only desk', async () => {
        const booking_service = spectator.inject(BookingFormService) as any;
        const { model, form } = generateBookingForm(
            undefined,
            spectator.inject(Injector),
        );
        booking_service.model = model;
        booking_service.form = form;
        booking_service.model.update((m: any) => ({
            ...m,
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
        }));
        booking_service.newForm = jest.fn();
        booking_service.setOptions = jest.fn();
        booking_service.confirmPost = jest.fn().mockResolvedValue({});
        (spectator.service as any)._statuses['map-desk-1'] = signal('free');

        await (spectator.service as any)._bookDesk(
            new Desk({
                map_id: 'map-desk-1',
                name: 'Map Desk 1',
                bookable: true,
                zone: { id: 'lvl-1', parent_id: 'bld-1' } as any,
            }),
            {},
        );

        expect(booking_service.model().asset_id).toBe('map-desk-1');
        expect(booking_service.model().resources[0].id).toBe('map-desk-1');
        expect(booking_service.confirmPost).toHaveBeenCalled();
    });
});

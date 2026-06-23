import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { EventFormService, SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

jest.mock('@placeos/bookings', () => ({
    ...jest.requireActual('@placeos/bookings'),
    checkinBooking: jest.fn(() => Promise.resolve({})),
    checkinBookingInstance: jest.fn(() => Promise.resolve({})),
    loadLockerResources: jest.fn(() => Promise.resolve([])),
    queryBookings: jest.fn(() => Promise.resolve([])),
}));

jest.mock('@placeos/components', () => ({
    ...jest.requireActual('@placeos/components'),
    openConfirmModal: jest.fn(() =>
        Promise.resolve({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        }),
    ),
}));

jest.mock('@placeos/events', () => ({
    ...jest.requireActual('@placeos/events'),
    queryEvents: jest.fn(() => Promise.resolve([])),
    requestSpacesForZone: jest.fn(() => jest.requireActual('rxjs').of([])),
}));

import {
    checkinBooking,
    loadLockerResources,
    ParkingService,
    queryBookings,
} from '@placeos/bookings';
import { queryEvents, requestSpacesForZone } from '@placeos/events';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const router = { navigate: jest.fn() };
    const event_form = { newForm: jest.fn() };
    const spaces = {
        find: jest.fn(),
        loadSpace: jest.fn(),
    };
    const parking_factory = jest.fn(() => ({
        spaces: signal([{ id: 'space-1', name: 'Bay 1', identifier: 'B1' }]),
    }));
    const createService = createServiceFactory({
        service: ScheduleStateService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                listen: jest.fn(() => signal(0)),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
                active_region: signal(null),
                building_list: signal([]),
                level_list: signal([]),
                module: jest.fn(() => null),
            } as any),
            MockProvider(MatDialog, { closeAll: jest.fn() }),
            MockProvider(Router, router),
            MockProvider(EventFormService, event_form),
            MockProvider(BookingFormService, {
                newForm: jest.fn(),
                model: Object.assign(jest.fn(() => ({})), {
                    update: jest.fn(),
                }),
            } as any),
            MockProvider(SpacesService, spaces),
            {
                provide: ParkingService,
                useFactory: parking_factory,
            },
        ],
    });

    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
        router.navigate.mockClear();
        event_form.newForm.mockClear();
        spaces.find.mockReset();
        spaces.loadSpace.mockReset();
        spectator = createService();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should resolve the space name of allocated parking bookings', () => {
        const list = [
            new Booking({
                id: 'bk-1',
                booking_type: 'parking',
                asset_id: 'space-1',
                asset_name: 'space-1',
            }),
        ];
        const [allocated] = (
            spectator.service as any
        )._resolveParkingNames(list);
        expect(allocated.asset_name).toBe('Bay 1');
    });

    it('should use the event system as selected room when resources are missing', async () => {
        const room = {
            id: 'room-1',
            email: 'room-1@example.com',
            name: 'Boardroom',
            display_name: 'Boardroom',
            zones: ['lvl-1'],
        };
        spaces.find.mockImplementation((id) =>
            id === 'room-1' ? room : undefined,
        );
        const event = new CalendarEvent({
            id: 'event-1',
            creator: 'user@example.com',
            mailbox: 'user@example.com',
            system: { id: 'room-1', name: 'Boardroom' } as any,
            resources: [],
            title: 'Existing booking',
            date: new Date(2028, 5, 15, 10, 0, 0, 0).valueOf(),
            duration: 60,
        });

        await spectator.service.edit(event);
        jest.advanceTimersByTime(300);

        expect(router.navigate).toHaveBeenCalledWith([
            '/book',
            'meeting',
            'form',
        ]);
        expect(event_form.newForm).toHaveBeenCalledWith(
            expect.objectContaining({
                resources: [room],
            }),
        );
    });

    it('should not patch resources when editing visitor bookings', () => {
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'visitor',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        spectator.service.editBooking(booking);
        jest.runAllTimers();

        expect(booking_form.newForm).toHaveBeenCalledWith('visitor', booking);
        expect(booking_form.model.update).not.toHaveBeenCalled();
    });

    it('should refresh ended bookings without hiding them as deleted', async () => {
        const now = new Date(2026, 5, 23, 10).valueOf();
        jest.setSystemTime(now);
        const triggerPoll = jest.spyOn(spectator.service, 'triggerPoll');
        const removeItem = jest.spyOn(spectator.service, 'removeItem');
        const booking = new Booking({
            id: 'booking-1',
            booking_type: 'desk',
            type: 'desk',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            date: now - 10 * 60 * 1000,
            duration: 60,
        } as any);

        await spectator.service.end(booking);

        expect(checkinBooking).toHaveBeenCalledWith('booking-1', false);
        expect(triggerPoll).toHaveBeenCalled();
        expect(removeItem).not.toHaveBeenCalled();
    });

    it('should not make schedule requests before schedule data is consumed', () => {
        expect(parking_factory).not.toHaveBeenCalled();
        expect(queryBookings).not.toHaveBeenCalled();
        expect(queryEvents).not.toHaveBeenCalled();
        expect(requestSpacesForZone).not.toHaveBeenCalled();
        expect(loadLockerResources).not.toHaveBeenCalled();
    });

    it('should not make schedule requests for disabled features when consumed', () => {
        spectator.service.bookings();

        expect(queryBookings).not.toHaveBeenCalled();
        expect(queryEvents).not.toHaveBeenCalled();
        expect(requestSpacesForZone).not.toHaveBeenCalled();
        expect(loadLockerResources).not.toHaveBeenCalled();
    });

    it('should only mark enabled feature booking types as loadable', () => {
        const settings = spectator.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.features' ? ['desks', 'parking-requests'] : undefined,
        );

        expect((spectator.service as any)._canLoadBookingType('desk')).toBe(
            true,
        );
        expect((spectator.service as any)._canLoadBookingType('parking')).toBe(
            true,
        );
        expect((spectator.service as any)._canLoadBookingType('visitor')).toBe(
            false,
        );
        expect((spectator.service as any)._canLoadBookingType('locker')).toBe(
            false,
        );
        expect((spectator.service as any)._canLoadEvents()).toBe(false);
    });

    it('should share identical in-flight booking queries', async () => {
        const date = new Date(2026, 5, 22, 9).valueOf();

        await Promise.all([
            (spectator.service as any)._bookingQuery('desk', 'day', date),
            (spectator.service as any)._bookingQuery('desk', 'day', date),
        ]);

        expect(queryBookings).toHaveBeenCalledTimes(1);
    });
});

import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { signal } from '@angular/core';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { OrganisationService, SettingsService } from '@placeos/common';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

jest.mock('@placeos/bookings', () => ({
    ...jest.requireActual('@placeos/bookings'),
    loadLockerResources: jest.fn(() => Promise.resolve([])),
    queryBookings: jest.fn(() => Promise.resolve([])),
}));

jest.mock('@placeos/events', () => ({
    ...jest.requireActual('@placeos/events'),
    queryEvents: jest.fn(() => Promise.resolve([])),
    requestSpacesForZone: jest.fn(() => jest.requireActual('rxjs').of([])),
}));

import {
    loadLockerResources,
    ParkingService,
    queryBookings,
} from '@placeos/bookings';
import { queryEvents, requestSpacesForZone } from '@placeos/events';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const parking_factory = jest.fn(() => ({}));
    const createService = createServiceFactory({
        service: ScheduleStateService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                listen: jest.fn(() => of(0)),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
                building_list: signal([]),
                level_list: signal([]),
            }),
            {
                provide: ParkingService,
                useFactory: parking_factory,
            },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
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

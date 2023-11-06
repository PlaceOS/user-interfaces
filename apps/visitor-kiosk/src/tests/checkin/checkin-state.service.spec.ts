import { FormGroup } from '@angular/forms';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { CheckinStateService } from '../../app/checkin/checkin-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/events');
jest.mock('@placeos/bookings');
jest.mock('@placeos/users');

import * as placeos from '@placeos/ts-client';
import * as events_mod from '@placeos/events';
import * as booking_mod from '@placeos/bookings';
import * as users_mod from '@placeos/users';

describe('CheckinStateService', () => {
    let spectator: SpectatorService<CheckinStateService>;
    const createService = createServiceFactory({
        service: CheckinStateService,
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow loading guest and event details', async () => {
        (events_mod.showEvent as any) = jest.fn(() => of({}));
        (users_mod.showGuest as any) = jest.fn(() => of({}));
        (booking_mod.showBooking as any) = jest.fn(() =>
            of({ asset_id: 'a@b.com' })
        );
        (booking_mod.queryAllBookings as any) = jest.fn(() =>
            of([{ date: Date.now(), asset_id: 'a@b.com' }])
        );
        (users_mod.listGuestMeetings as any) = jest.fn(() =>
            of([{ date: Date.now() }])
        );
        (users_mod.generateGuestForm as any) = jest.fn(() =>
            of(new FormGroup({}))
        );
        await spectator.service.loadGuestAndEvent('a@b.com');
        expect(users_mod.showGuest).toBeCalledWith('a@b.com');
        expect(booking_mod.showBooking).not.toBeCalled();
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        expect(booking_mod.showBooking).toBeCalledWith('event-1234');
    });

    it('should allow updating guests', async () => {
        (events_mod.showEvent as any) = jest.fn(() => of({}));
        (users_mod.showGuest as any) = jest.fn(() => of({}));
        (booking_mod.showBooking as any) = jest.fn(() => of({}));
        (placeos.updateMetadata as any) = jest.fn(() => of({}));
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.updateGuest({ one: true });
        // expect(placeos.updateMetadata).toBeCalled();
    });

    it('should allow checking in guests', async () => {
        (events_mod.showEvent as any) = jest.fn(() => of({ resources: [{}] }));
        (users_mod.showGuest as any) = jest.fn(() => of({}));
        (booking_mod.showBooking as any) = jest.fn(() => of({}));
        (booking_mod.checkinBooking as any) = jest.fn(() => of({}));
        (events_mod.checkinEventGuest as any) = jest.fn(() => of({}));
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.checkinGuest();
        expect(booking_mod.checkinBooking).toBeCalled();
    });
});

import { FormGroup } from '@angular/forms';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { CheckinStateService } from '../../app/checkin/checkin-state.service';

jest.mock('@placeos/ts-client', () => {
    class ZONE {}
    return {
        updateMetadata: jest.fn(),
        PlaceZone: ZONE,
        get: jest.fn(() => of({})),
        put: jest.fn(() => of({})),
        patch: jest.fn(() => of({})),
        post: jest.fn(() => of({})),
        query: jest.fn(() => of([])),
    };
});
jest.mock('@placeos/events', () => ({
    checkinEventGuest: jest.fn(),
    showEvent: jest.fn(),
}));
jest.mock('@placeos/bookings', () => ({
    queryAllBookings: jest.fn(),
    showBooking: jest.fn(),
    updateBooking: jest.fn(() => of({})),
    checkinBooking: jest.fn(),
}));
jest.mock('@placeos/users', () => ({
    listGuestMeetings: jest.fn(),
    generateGuestForm: jest.fn(),
}));
jest.mock('@placeos/users', () => ({
    showGuest: jest.fn(),
}));

import * as booking_mod from '@placeos/bookings';
import * as events_mod from '@placeos/events';
import * as placeos from '@placeos/ts-client';
import * as guest_mod from '@placeos/users';
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
        (events_mod.showEvent as any).mockImplementation(() => of({}));
        (guest_mod.showGuest as any).mockImplementation(() => of({}));
        (booking_mod.showBooking as any).mockImplementation(() =>
            of({ asset_id: 'a@b.com' }),
        );
        (booking_mod.queryAllBookings as any).mockImplementation(() =>
            of([{ date: Date.now(), asset_id: 'a@b.com' }]),
        );
        (users_mod.listGuestMeetings as any).mockImplementation(() =>
            of([{ date: Date.now() }]),
        );
        (users_mod.generateGuestForm as any).mockImplementation(() =>
            of(new FormGroup({})),
        );
        await spectator.service.loadGuestAndEvent('a@b.com');
        expect(guest_mod.showGuest).toBeCalledWith('a@b.com');
        expect(booking_mod.showBooking).not.toBeCalled();
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        expect(booking_mod.showBooking).toBeCalledWith('event-1234');
    });

    it('should allow updating guests', async () => {
        (events_mod.showEvent as any).mockImplementation(() => of({}));
        (guest_mod.showGuest as any).mockImplementation(() => of({}));
        (booking_mod.showBooking as any).mockImplementation(() => of({}));
        (placeos.updateMetadata as any).mockImplementation(() => of({}));
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.updateGuest({ one: true });
        // expect(placeos.updateMetadata).toBeCalled();
    });

    it('should allow checking in guests', async () => {
        (events_mod.showEvent as any).mockImplementation(() =>
            of({ resources: [{}] }),
        );
        (guest_mod.showGuest as any).mockImplementation(() => of({}));
        (booking_mod.showBooking as any).mockImplementation(() => of({}));
        (booking_mod.checkinBooking as any).mockImplementation(() => of({}));
        (events_mod.checkinEventGuest as any).mockImplementation(() => of({}));
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.checkinGuest();
        expect(booking_mod.checkinBooking).toHaveBeenCalled();
    });
});

import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';

import { CheckinStateService } from '../../app/checkin/checkin-state.service';

jest.mock('@placeos/ts-client', () => {
    class ZONE {}
    return {
        updateMetadata: jest.fn(),
        PlaceZone: ZONE,
        get: jest.fn(() => Promise.resolve({})),
        put: jest.fn(() => Promise.resolve({})),
        patch: jest.fn(() => Promise.resolve({})),
        post: jest.fn(() => Promise.resolve({})),
        query: jest.fn(() => Promise.resolve([])),
    };
});
jest.mock('@placeos/events', () => ({
    checkinEventGuest: jest.fn(),
    showEvent: jest.fn(),
    SpacePipe: jest.fn().mockImplementation(() => ({
        transform: jest.fn(),
    })),
}));
jest.mock('@placeos/bookings', () => ({
    queryAllBookings: jest.fn(),
    showBooking: jest.fn(),
    updateBooking: jest.fn(() => Promise.resolve({})),
    checkinBooking: jest.fn(),
}));
jest.mock('@placeos/users', () => ({
    listGuestMeetings: jest.fn(),
    showGuest: jest.fn(),
}));

import * as booking_mod from '@placeos/bookings';
import * as events_mod from '@placeos/events';
import * as placeos from '@placeos/ts-client';
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
        (events_mod.showEvent as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (users_mod.showGuest as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (booking_mod.showBooking as any).mockImplementation(() =>
            Promise.resolve({ asset_id: 'a@b.com' }),
        );
        (booking_mod.queryAllBookings as any).mockImplementation(() =>
            Promise.resolve([{ date: Date.now(), asset_id: 'a@b.com' }]),
        );
        await spectator.service.loadGuestAndEvent('a@b.com');
        expect(users_mod.showGuest).toHaveBeenCalledWith('a@b.com');
        expect(booking_mod.showBooking).not.toHaveBeenCalled();
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        expect(booking_mod.showBooking).toHaveBeenCalledWith('event-1234');
    });

    it('should allow updating guests', async () => {
        (events_mod.showEvent as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (users_mod.showGuest as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (booking_mod.showBooking as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (placeos.updateMetadata as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.updateGuest({ one: true });
        // expect(placeos.updateMetadata).toBeCalled();
    });

    it('should allow checking in guests', async () => {
        (events_mod.showEvent as any).mockImplementation(() =>
            Promise.resolve({ resources: [{}] }),
        );
        (users_mod.showGuest as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (booking_mod.showBooking as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (booking_mod.checkinBooking as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        (events_mod.checkinEventGuest as any).mockImplementation(() =>
            Promise.resolve({}),
        );
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.checkinGuest();
        expect(booking_mod.checkinBooking).toHaveBeenCalled();
    });
});

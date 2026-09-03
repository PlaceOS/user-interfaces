import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import { Booking } from '@placeos/common';
import { get, patch, post, put, query } from '@placeos/ts-client';

import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// The native (bundler) unit-test builder cannot intercept workspace module
// imports (`@placeos/bookings`, `@placeos/users`, ...), so the real workspace
// functions run and we mock one layer down at the external `@placeos/ts-client`
// boundary instead.
vi.mock('@placeos/ts-client', { spy: true });

describe('CheckinStateService', () => {
    let spectator: SpectatorService<CheckinStateService>;
    const createService = createServiceFactory({
        service: CheckinStateService,
    });

    beforeEach(() => {
        vi.mocked(get).mockImplementation(async (url: string) => {
            if (url.includes('/bookings/')) {
                return {
                    id: 'event-1234',
                    asset_id: 'a@b.com',
                    user_email: 'host@b.com',
                } as any;
            }
            // guest lookup
            return {} as any;
        });
        vi.mocked(query).mockResolvedValue({ data: [], next: null } as any);
        vi.mocked(post).mockResolvedValue({} as any);
        vi.mocked(put).mockResolvedValue({} as any);
        vi.mocked(patch).mockResolvedValue({} as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow loading guest and event details', async () => {
        // No event_id -> guest without a booking falls through to a query for
        // the guest's upcoming bookings today.
        vi.mocked(query).mockResolvedValue({
            data: [{ date: Date.now(), asset_id: 'a@b.com' }],
            next: null,
        } as any);
        await spectator.service.loadGuestAndEvent('a@b.com');
        // showGuest -> get on the guest endpoint with the encoded email
        expect(get).toHaveBeenCalledWith(expect.stringContaining('guests'));
        // queryAllBookings was used to resolve today's booking
        expect(query).toHaveBeenCalled();
        // showBooking was NOT used when no event id is supplied
        expect(get).not.toHaveBeenCalledWith(
            expect.stringContaining('event-1234'),
        );

        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        // showBooking -> get on the bookings endpoint with the event id
        expect(get).toHaveBeenCalledWith(expect.stringContaining('event-1234'));
    });

    it('should allow updating guests', async () => {
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.updateGuest({ one: true });
        // updateBooking issues a patch under the hood
        expect(patch).toHaveBeenCalled();
    });

    it('keeps an accepted induction when updating guest details', async () => {
        const post_json = vi.mocked(
            post as (
                url: string,
                body: unknown,
            ) => Promise<Record<string, unknown>>,
        );
        spectator.service.setBooking(
            new Booking({
                id: 'event-1234',
                asset_id: 'a@b.com',
                user_email: 'host@b.com',
                induction: 'declined',
            }),
        );
        post_json.mockResolvedValueOnce({
            id: 'event-1234',
            asset_id: 'a@b.com',
            user_email: 'host@b.com',
            induction: 'accepted',
        });

        await spectator.service.completeInduction();
        await spectator.service.updateGuest();

        expect(patch).toHaveBeenLastCalledWith(
            expect.stringContaining('event-1234'),
            expect.objectContaining({ induction: 'accepted' }),
        );
    });

    it('should allow checking in guests', async () => {
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        await spectator.service.checkinGuest();
        // checkinBooking issues a post to the check_in endpoint
        expect(post).toHaveBeenCalledWith(
            expect.stringContaining('check_in'),
            '',
        );
    });
});

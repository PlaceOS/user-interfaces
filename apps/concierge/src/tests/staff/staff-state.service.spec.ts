import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setNotifyOutlet,
    StaffUser,
} from '@placeos/common';
import { addHours, getUnixTime } from 'date-fns';
import { StaffStateService } from '../../app/staff/staff-state.service';

vi.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

// `get` is overloaded; use the JSON form so mocks accept response bodies.
const get = vi.mocked(ts_client.get as (url: string) => Promise<unknown>);

describe('StaffStateService', () => {
    let spectator: SpectatorService<StaffStateService>;
    const createService = createServiceFactory({
        service: StaffStateService,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    active_building: signal(null),
                    active_levels: signal([]),
                    initialised: signal(true),
                    levelWithID: vi.fn(),
                    buildings: [],
                    building: { id: 'bld-1', name: 'HQ' },
                },
            },
        ],
    });

    beforeEach(() => {
        get.mockResolvedValue([]);
        spectator = createService();
    });

    it('should flag a failed directory load', async () => {
        get.mockRejectedValue(new Error('500'));

        await spectator.service.loadUsers();

        expect(spectator.service.users_error()).toBe(true);
        expect(spectator.service.filtered_users()).toEqual([]);
    });
    it('should clear the error when a retry succeeds', async () => {
        get.mockRejectedValue(new Error('500'));
        await spectator.service.loadUsers();
        get.mockResolvedValue([{ name: 'Jim', email: 'jim@place.tech' }]);

        await spectator.service.loadUsers();

        expect(spectator.service.users_error()).toBe(false);
        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'Jim',
        ]);
    });
    it('should mark only staff with a current check-in as onsite', async () => {
        const now = getUnixTime(Date.now());
        const staffBooking = (email: string, start: number) => ({
            id: `bkn-${email}`,
            asset_id: email,
            booking_start: start,
            booking_end: start + 3600,
            duration: 60,
            checked_in: true,
        });
        get.mockImplementation(async (url) =>
            url.includes('/bookings')
                ? [
                      staffBooking('jim@place.tech', now - 60),
                      staffBooking('ann@place.tech', now - 7200),
                  ]
                : [
                      { name: 'Ann', email: 'ann@place.tech' },
                      { name: 'Jim', email: 'jim@place.tech' },
                  ],
        );
        await spectator.service.loadUsers();

        await (spectator.service as any)._loadEvents();
        spectator.service.setFilters({ only_onsite: true });

        expect(spectator.service.user_events()).toEqual({
            'jim@place.tech': true,
        });
        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'Jim',
        ]);
    });
    it('should stop the progress bar when the check-in load fails', async () => {
        get.mockRejectedValue(new Error('500'));

        await (spectator.service as any)._loadEvents();

        expect(spectator.service.loading()).toBe(false);
    });
    it('should notify once for a run of failed check-in loads', async () => {
        const snackbar = {
            open: vi.fn(() => ({ onAction: () => ({ subscribe: vi.fn() }) })),
        };
        setNotifyOutlet(snackbar as any);
        get.mockRejectedValue(new Error('500'));

        await (spectator.service as any)._loadEvents();
        await (spectator.service as any)._loadEvents();
        expect(snackbar.open).toHaveBeenCalledTimes(1);

        get.mockResolvedValue([]);
        await (spectator.service as any)._loadEvents();
        get.mockRejectedValue(new Error('500'));
        await (spectator.service as any)._loadEvents();
        expect(snackbar.open).toHaveBeenCalledTimes(2);
        setNotifyOutlet(null);
    });
    it('should ignore a directory load while one is in progress', async () => {
        let resolve: (value: unknown) => void;
        get.mockClear();
        get.mockReturnValue(new Promise((r) => (resolve = r)));

        const first = spectator.service.loadUsers();
        const second = spectator.service.loadUsers();
        expect(spectator.service.users_loading()).toBe(true);
        expect(get).toHaveBeenCalledTimes(1);

        resolve([]);
        await Promise.all([first, second]);
        expect(spectator.service.users_loading()).toBe(false);
    });
    it('should filter users without matching case', () => {
        (spectator.service as any)._users.set([
            { name: 'Jane Doe', email: 'jane@place.tech' },
            { name: 'John Smith', email: 'john@place.tech' },
        ]);

        spectator.service.setSearchString('JOHN');

        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'John Smith',
        ]);
    });
    it('should show a check-in and check-out without waiting for a reload', async () => {
        const post = vi.mocked(
            ts_client.post as (url: string) => Promise<unknown>,
        );
        const booking = {
            id: 'bkn-1',
            asset_id: 'jim@place.tech',
            booking_start: getUnixTime(Date.now()),
            booking_end: getUnixTime(addHours(Date.now(), 8)),
        };
        post.mockResolvedValue(booking);
        vi.mocked(
            ts_client.put as (url: string) => Promise<unknown>,
        ).mockResolvedValue(booking);
        vi.mocked(
            ts_client.patch as (url: string) => Promise<unknown>,
        ).mockResolvedValue(booking);
        const jim = new StaffUser({ name: 'Jim', email: 'jim@place.tech' });
        (spectator.service as any)._users.set([jim]);
        spectator.service.setFilters({ only_onsite: true });

        await spectator.service.checkin(jim);

        expect(post).toHaveBeenLastCalledWith(
            expect.stringContaining('/bookings/bkn-1/check_in?state=true'),
            '',
        );
        expect(spectator.service.user_events()['jim@place.tech']).toBe(true);
        expect(spectator.service.filtered_users()).toEqual([jim]);

        await spectator.service.checkout(jim);

        expect(post).toHaveBeenLastCalledWith(
            expect.stringContaining('/bookings/bkn-1/check_in?state=false'),
            '',
        );
        expect(spectator.service.user_events()['jim@place.tech']).toBe(false);
        expect(spectator.service.filtered_users()).toEqual([]);
    });

    it('should do nothing when checking out a user without a check-in booking', async () => {
        const post = vi.mocked(ts_client.post);
        post.mockClear();

        await spectator.service.checkout(
            new StaffUser({ name: 'Ann', email: 'ann@place.tech' }),
        );

        expect(post).not.toHaveBeenCalled();
        expect(spectator.service.user_events()).toEqual({});
    });
});

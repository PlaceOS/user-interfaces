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
import { mockData, startMockPlaceClient } from '@placeos/common/tests';
import {
    clearMockEndpoints,
    mockPage,
    mockReply,
} from '@placeos/ts-client/compat';
import { bookings, Booking as StaffBooking } from '@placeos/ts-client/staff';
import { addHours, getUnixTime } from 'date-fns';
import { StaffStateService } from '../../app/staff/staff-state.service';
import { httpStatus, mockHttp } from '../mock-http';

vi.mock('@placeos/ts-client/staff', { spy: true });

/** The directory search reads the JSON of the staff API with placeFetch() */
const PEOPLE = '/api/staff/v1/people';
const failed = () => {
    throw httpStatus(500);
};

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

    beforeEach(async () => {
        vi.clearAllMocks();
        startMockPlaceClient();
        mockHttp('GET', PEOPLE, []);
        vi.mocked(bookings.query).mockResolvedValue(mockPage({ data: [] }));
        spectator = createService();
        // The service loads the directory when it starts. The mock endpoints
        // answer after a delay, so wait for that load to end.
        await vi.waitFor(() =>
            expect(spectator.service.users_loading()).toBe(false),
        );
    });

    afterEach(() => clearMockEndpoints());

    it('should flag a failed directory load', async () => {
        mockHttp('GET', PEOPLE, failed);

        await spectator.service.loadUsers();

        expect(spectator.service.users_error()).toBe(true);
        expect(spectator.service.filtered_users()).toEqual([]);
    });
    it('should clear the error when a retry succeeds', async () => {
        mockHttp('GET', PEOPLE, failed);
        await spectator.service.loadUsers();
        mockHttp('GET', PEOPLE, [{ name: 'Jim', email: 'jim@place.tech' }]);

        await spectator.service.loadUsers();

        expect(spectator.service.users_error()).toBe(false);
        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'Jim',
        ]);
    });
    it('should mark only staff with a current check-in as onsite', async () => {
        const now = getUnixTime(Date.now());
        const staffBooking = (id: number, email: string, start: number) =>
            mockData(StaffBooking, {
                id,
                asset_id: email,
                booking_start: start,
                booking_end: start + 3600,
                checked_in: true,
            });
        vi.mocked(bookings.query).mockResolvedValue(
            mockPage({
                data: [
                    staffBooking(1, 'jim@place.tech', now - 60),
                    staffBooking(2, 'ann@place.tech', now - 7200),
                ],
            }),
        );
        mockHttp('GET', PEOPLE, [
            { name: 'Ann', email: 'ann@place.tech' },
            { name: 'Jim', email: 'jim@place.tech' },
        ]);
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
        vi.mocked(bookings.query).mockRejectedValue(new Error('500'));

        await (spectator.service as any)._loadEvents();

        expect(spectator.service.loading()).toBe(false);
    });
    it('should notify once for a run of failed check-in loads', async () => {
        const snackbar = {
            open: vi.fn(() => ({ onAction: () => ({ subscribe: vi.fn() }) })),
        };
        setNotifyOutlet(snackbar as any);
        vi.mocked(bookings.query).mockRejectedValue(new Error('500'));

        await (spectator.service as any)._loadEvents();
        await (spectator.service as any)._loadEvents();
        expect(snackbar.open).toHaveBeenCalledTimes(1);

        vi.mocked(bookings.query).mockResolvedValue(mockPage({ data: [] }));
        await (spectator.service as any)._loadEvents();
        vi.mocked(bookings.query).mockRejectedValue(new Error('500'));
        await (spectator.service as any)._loadEvents();
        expect(snackbar.open).toHaveBeenCalledTimes(2);
        setNotifyOutlet(null);
    });
    it('should keep only the latest directory load', async () => {
        let resolve_first: (value: unknown) => void;
        const people = mockHttp('GET', PEOPLE, () =>
            people.mock.calls.length === 1
                ? new Promise((r) => (resolve_first = r))
                : [{ name: 'Ann', email: 'ann@place.tech' }],
        );

        const first = spectator.service.loadUsers();
        await vi.waitFor(() => expect(people).toHaveBeenCalledTimes(1));
        const second = spectator.service.loadUsers();
        await second;
        resolve_first([{ name: 'Old', email: 'old@place.tech' }]);
        await first;

        expect(spectator.service.users_loading()).toBe(false);
        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'Ann',
        ]);
    });
    it('should drop a load for the old search when the search changes', async () => {
        let resolve_old: (value: unknown) => void;
        const people = mockHttp(
            'GET',
            PEOPLE,
            () => new Promise((r) => (resolve_old = r)),
        );
        const old_load = spectator.service.loadUsers();
        await vi.waitFor(() => expect(people).toHaveBeenCalledTimes(1));

        spectator.service.setSearchString('ann');
        resolve_old([{ name: 'Ann Old', email: 'old@place.tech' }]);
        await old_load;

        expect(spectator.service.filtered_users()).toEqual([]);
        expect(spectator.service.users_loading()).toBe(false);
    });
    it('should show every match the server returns for the search', async () => {
        mockHttp('GET', PEOPLE, [
            { name: 'Jane Smith', email: 'js@place.tech' },
        ]);
        spectator.service.search.set('Ja Sm');

        await spectator.service.loadUsers();

        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'Jane Smith',
        ]);
    });
    it('should keep part-word matches from the first page', async () => {
        mockHttp('GET', PEOPLE, ({ query_params }) =>
            query_params.q === 'mit'
                ? [{ name: 'Bo Mitch', email: 'bm@place.tech' }]
                : [
                      { name: 'Jane Smith', email: 'js@place.tech' },
                      { name: 'Ann Lee', email: 'al@place.tech' },
                  ],
        );
        await spectator.service.loadUsers();
        spectator.service.search.set('mit');

        await spectator.service.loadUsers();

        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'Bo Mitch',
            'Jane Smith',
        ]);
    });
    it('should search the directory on the server after a pause', async () => {
        vi.useFakeTimers();
        const people = mockHttp('GET', PEOPLE, []);

        spectator.service.setSearchString('ze');
        await vi.advanceTimersByTimeAsync(200);
        spectator.service.setSearchString('zed');
        expect(people).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(300);

        // The mock endpoint calls the handler before its delay
        expect(people.mock.calls.map(([r]) => r.query_params.q)).toEqual([
            'zed',
        ]);
        vi.useRealTimers();
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
        const booking = mockData(StaffBooking, {
            id: 1,
            asset_id: 'jim@place.tech',
            booking_start: getUnixTime(Date.now()),
            booking_end: getUnixTime(addHours(Date.now(), 8)),
        });
        vi.mocked(bookings.create).mockResolvedValue(mockReply(booking));
        vi.mocked(bookings.update).mockResolvedValue(mockReply(booking));
        vi.mocked(bookings.checkIn).mockResolvedValue(mockReply(booking));
        const jim = new StaffUser({ name: 'Jim', email: 'jim@place.tech' });
        (spectator.service as any)._users.set([jim]);
        spectator.service.setFilters({ only_onsite: true });

        await spectator.service.checkin(jim);

        expect(bookings.checkIn).toHaveBeenLastCalledWith(
            expect.objectContaining({ id: 1, state: true }),
        );
        expect(spectator.service.user_events()['jim@place.tech']).toBe(true);
        expect(spectator.service.filtered_users()).toEqual([jim]);

        await spectator.service.checkout(jim);

        expect(bookings.checkIn).toHaveBeenLastCalledWith(
            expect.objectContaining({ id: 1, state: false }),
        );
        expect(spectator.service.user_events()['jim@place.tech']).toBe(false);
        expect(spectator.service.filtered_users()).toEqual([]);
    });

    it('should do nothing when checking out a user without a check-in booking', async () => {
        await spectator.service.checkout(
            new StaffUser({ name: 'Ann', email: 'ann@place.tech' }),
        );

        expect(bookings.update).not.toHaveBeenCalled();
        expect(bookings.checkIn).not.toHaveBeenCalled();
        expect(spectator.service.user_events()).toEqual({});
    });
});

import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { getUnixTime } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import {
    Booking,
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';

import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

vi.mock('@placeos/ts-client/staff', { spy: true });

import { mockData } from '@placeos/common/tests';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    bookings,
    Booking as StaffBooking,
    type BookingInput as StaffBookingInput,
} from '@placeos/ts-client/staff';

/** A page of staff API bookings for `bookings.query`. Booking IDs are integers */
const bookingPage = (list: StaffBookingInput[]) =>
    mockPage({
        data: list.map((item) => mockData(StaffBooking, item)),
        total: list.length,
    });
/** The input of each check-in call, as `[id, state]` */
const checkIns = () =>
    vi
        .mocked(bookings.checkIn)
        .mock.calls.map(([{ id, state }]) => [id, state]);

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('VisitorStateService', () => {
    let spectator: SpectatorService<VisitorsStateService>;
    const createService = createServiceFactory({
        service: VisitorsStateService,
        providers: [
            MockProvider(MatDialog, {
                open: vi.fn(() => ({
                    afterClosed: vi.fn(() => of(true)),
                })),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({
                    id: 'bld-1',
                    timezone: 'Australia/Sydney',
                }),
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
            } as any),
            MockProvider(SettingsService, {
                time_format: 'h:mm a',
                get: ((name: string) =>
                    name === 'app.bookings.use_building_timezone'
                        ? true
                        : undefined) as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        const reply = mockReply(mockData(StaffBooking, { id: 1 }));
        vi.mocked(bookings.query).mockResolvedValue(bookingPage([]));
        vi.mocked(bookings.approve).mockResolvedValue(reply);
        vi.mocked(bookings.checkIn).mockResolvedValue(reply);
        vi.mocked(bookings.checkInInstance).mockResolvedValue(reply);
        vi.mocked(bookings.update).mockResolvedValue(reply);
        vi.mocked(bookings.updateInduction).mockResolvedValue(reply);
        setNotifyOutlet(null, true);
        spectator = createService();
        spectator.service.activate();
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should list visitor events', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            bookingPage([{ guests: [{}], attendees: [{}, {}] }]),
        );
        expect(bookings.query).not.toHaveBeenCalled();
        TestBed.flushEffects();
        await wait(10);
        expect(spectator.service.bookings()).toHaveLength(1);
        expect(bookings.query).toHaveBeenCalledWith(
            expect.objectContaining({
                include_checked_out: true,
                include_deleted: true,
                limit: 200,
            }),
        );
    });

    it('should flag a failed visitor load', async () => {
        vi.mocked(bookings.query).mockRejectedValue(new Error('500'));
        TestBed.flushEffects();
        await wait(10);
        expect(spectator.service.load_error()).toBe(true);
        expect(spectator.service.loading()).toBe(false);

        vi.mocked(bookings.query).mockReturnValue(new Promise(() => {}));
        spectator.service.poll();
        TestBed.flushEffects();
        // Loads wait 500 ms for more filter changes
        await wait(600);
        TestBed.flushEffects();
        expect(spectator.service.loading()).toBe(true);
        expect(spectator.service.load_error()).toBe(false);
    });

    it('should not load while the visitors view is closed', async () => {
        spectator.service.deactivate();
        TestBed.flushEffects();
        await wait(10);
        expect(bookings.query).not.toHaveBeenCalled();
    });

    it('should not publish a load that a newer load replaced', async () => {
        let resolveFirst: (
            value: ReturnType<typeof bookingPage>,
        ) => void = () => null;
        vi.mocked(bookings.query)
            .mockImplementationOnce(
                () => new Promise((resolve) => (resolveFirst = resolve)),
            )
            .mockResolvedValueOnce(bookingPage([{ id: 2 }]));
        const building = { id: 'bld-1' } as any;
        const first = (spectator.service as any)._load(building, {});
        await (spectator.service as any)._load(building, {});
        resolveFirst(bookingPage([{ id: 1 }]));
        await first;

        // The app booking keeps the integer ID of the staff API
        expect(spectator.service.bookings().map((_) => _.id)).toEqual([2]);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should hide removed visitors but keep ordinary cancellations and failed removals', async () => {
        const [retained, cancelled, removed, failed_removal] = [1, 2, 3, 4];
        vi.mocked(bookings.query).mockResolvedValue(
            bookingPage([
                { id: retained, booking_type: 'visitor' },
                { id: cancelled, booking_type: 'visitor', deleted: true },
                {
                    id: removed,
                    booking_type: 'visitor',
                    deleted: true,
                    extension_data: { removed_from_group: true },
                },
                {
                    id: failed_removal,
                    booking_type: 'visitor',
                    extension_data: { removed_from_group: true },
                },
            ]),
        );
        TestBed.flushEffects();
        await wait(10);

        expect(
            spectator.service.bookings().map((booking) => booking.id),
        ).toEqual([retained, cancelled, failed_removal]);
    });

    it('should apply building timezone to visitor listing requests', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            bookingPage([{ extension_data: {} }]),
        );
        const date = new Date('2026-06-15T12:00:00').valueOf();

        spectator.service.setFilters({ date, period: 1 });
        TestBed.flushEffects();
        await wait(10);

        // Midnight in Sydney (UTC+10 in June) on the selected day
        const start = new Date('2026-06-14T14:00:00Z');
        const end = new Date('2026-06-15T14:00:00Z');

        expect(bookings.query).toHaveBeenLastCalledWith(
            expect.objectContaining({
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
            }),
        );
    });

    it('should allow filtering of visitor events', async () => {
        // The staff API booking has no `asset_name`: the app reads it from the extension data
        vi.mocked(bookings.query).mockResolvedValue(
            bookingPage([{ extension_data: { asset_name: 'true' } }]),
        );
        expect(bookings.query).not.toHaveBeenCalled();
        TestBed.flushEffects();
        await wait(10);
        expect(spectator.service.filtered_bookings()).toHaveLength(1);
        spectator.service.setSearchString('test');
        expect(spectator.service.filtered_bookings()).toHaveLength(0);
    });

    it('should poll no more often than every 3 minutes', () => {
        vi.useFakeTimers();
        try {
            const poll = vi.spyOn(spectator.service, 'poll');
            spectator.service.startPolling(1000);

            vi.advanceTimersByTime(3 * 60 * 1000 - 1);
            expect(poll).not.toHaveBeenCalled();
            vi.advanceTimersByTime(1);
            expect(poll).toHaveBeenCalledTimes(1);

            spectator.service.stopPolling();
            vi.advanceTimersByTime(3 * 60 * 1000);
            expect(poll).toHaveBeenCalledTimes(1);
        } finally {
            vi.useRealTimers();
        }
    });

    it('should allow checking in visitors', async () => {
        expect(bookings.checkIn).not.toHaveBeenCalled();
        await spectator.service.setCheckinState({ id: '1' } as any);

        expect(checkIns()).toEqual([[1, true]]);
    });

    it('should not check in a visitor for a rejected meeting', async () => {
        await expect(
            spectator.service.setCheckinState(
                new Booking({ id: '1', rejected: true }),
            ),
        ).rejects.toBe('You cannot check-in a rejected meeting');
        expect(bookings.checkIn).not.toHaveBeenCalled();
    });

    it('should approve an unapproved visitor before checking them in', async () => {
        await spectator.service.setCheckinState(
            new Booking({ id: '1', approved: false }),
        );

        expect(bookings.approve).toHaveBeenCalledWith({ id: 1 });
        expect(checkIns()).toEqual([[1, true]]);
        expect(
            vi.mocked(bookings.approve).mock.invocationCallOrder[0],
        ).toBeLessThan(vi.mocked(bookings.checkIn).mock.invocationCallOrder[0]);
    });

    it('should not approve an approved visitor again on check-in', async () => {
        await spectator.service.setCheckinState(
            new Booking({ id: '1', approved: true }),
        );

        expect(bookings.approve).not.toHaveBeenCalled();
        expect(checkIns()).toEqual([[1, true]]);
    });

    it('should allow checking out visitors', async () => {
        expect(bookings.checkIn).not.toHaveBeenCalled();
        await spectator.service.setCheckinState({ id: '1' } as any, false);
        expect(checkIns()).toEqual([[1, false]]);
    });

    it('should allow checking in all visitors', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            bookingPage([{ id: 11, extension_data: { parent_id: 'evt-1' } }]),
        );
        TestBed.flushEffects();
        await wait(10);
        expect(bookings.checkIn).not.toHaveBeenCalled();
        await spectator.service.setCheckinStateForEvent('evt-1');
        expect(checkIns()).toEqual([[11, true]]);
    });

    it('should check out all visitors of an event after the user confirms', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            bookingPage([
                { id: 11, extension_data: { parent_id: 'evt-1' } },
                { id: 12, extension_data: { parent_id: 'evt-1' } },
                { id: 13, extension_data: { parent_id: 'evt-2' } },
            ]),
        );
        TestBed.flushEffects();
        await wait(10);
        const confirm_ref = {
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close: vi.fn(),
        };
        vi.mocked(spectator.inject(MatDialog).open).mockReturnValue(
            confirm_ref as unknown as MatDialogRef<unknown>,
        );

        await spectator.service.setCheckinStateForEvent('evt-1', false);

        expect(confirm_ref.close).toHaveBeenCalled();
        expect(checkIns()).toEqual([
            [11, false],
            [12, false],
        ]);
    });

    it('should not check out visitors when the user cancels', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            bookingPage([{ id: 11, extension_data: { parent_id: 'evt-1' } }]),
        );
        TestBed.flushEffects();
        await wait(10);
        vi.mocked(spectator.inject(MatDialog).open).mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of({ reason: 'cancel' }),
            close: vi.fn(),
        } as unknown as MatDialogRef<unknown>);

        await spectator.service.setCheckinStateForEvent('evt-1', false);

        expect(bookings.checkIn).not.toHaveBeenCalled();
    });
});

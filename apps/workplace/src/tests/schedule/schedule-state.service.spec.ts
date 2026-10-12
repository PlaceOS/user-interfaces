import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import {
    Booking,
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    EventFormService,
    newCalendarEventFromBooking,
    SpacesService,
} from '@placeos/events';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import {
    isBookingForOtherUser,
    overlapsDay,
    ScheduleStateService,
} from '../../app/schedule/schedule-state.service';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const router = { navigate: vi.fn() };
    const event_form = { newForm: vi.fn() };
    const spaces = {
        find: vi.fn(),
        loadSpace: vi.fn(),
    };
    const parking_factory = vi.fn(() => ({
        spaces: signal([{ id: 'space-1', name: 'Bay 1', identifier: 'B1' }]),
    }));
    const createService = createServiceFactory({
        service: ScheduleStateService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
                // `listen` returns a WritableSignal in production; the service
                // invokes its result (`listen(name)()`), so the mock must hand
                // back a callable signal, not an observable.
                listen: vi.fn(() => signal(0)),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
                active_region: signal(null),
                building_list: signal([]),
                level_list: signal([]),
                module: vi.fn(() => null),
            } as any),
            MockProvider(MatDialog, {
                closeAll: vi.fn(),
                open: vi.fn(() => ({
                    componentInstance: {
                        event: of({ reason: 'done' }),
                        loading: signal(''),
                    },
                    afterClosed: () => of(null),
                    close: vi.fn(),
                })) as any,
            } as any),
            MockProvider(Router, router),
            MockProvider(EventFormService, event_form),
            MockProvider(BookingFormService, {
                newForm: vi.fn(),
                model: Object.assign(
                    vi.fn(() => ({})),
                    {
                        update: vi.fn(),
                    },
                ),
            } as any),
            MockProvider(SpacesService, spaces),
            {
                provide: ParkingService,
                useFactory: parking_factory,
            },
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        vi.clearAllMocks();
        router.navigate.mockClear();
        event_form.newForm.mockClear();
        spaces.find.mockReset();
        spaces.loadSpace.mockReset();
        // The schedule fns (queryAllBookings/queryEvents/requestSpacesForZone/
        // loadLockerResources) are workspace fns that can't be spied; they all
        // funnel into ts-client `get`/`query`/`querySystems`, so stub + assert
        // one layer down.
        vi.mocked<(url: string) => Promise<unknown>>(
            ts_client.get,
        ).mockResolvedValue([]);
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [],
            next: null,
            total: 0,
        } as any);
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.post).mockResolvedValue({} as any);
        vi.mocked(ts_client.del).mockResolvedValue(undefined as any);
        spectator = createService();
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.useRealTimers();
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
        const [allocated] = (spectator.service as any)._resolveParkingNames(
            list,
        );
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
        vi.advanceTimersByTime(300);

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
        vi.runAllTimers();

        expect(booking_form.newForm).toHaveBeenCalledWith('visitor', booking);
        expect(booking_form.model.update).not.toHaveBeenCalled();
    });

    it('should patch resources when editing non-visitor bookings', () => {
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'desk',
            type: 'desk',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
        } as any);

        spectator.service.editBooking(booking);
        vi.runAllTimers();

        expect(booking_form.model.update).toHaveBeenCalled();
        const updater = (booking_form.model.update as any).mock.calls[0][0];
        expect(updater({})).toEqual({
            resources: [{ id: 'desk-1', name: 'Desk 1' }],
            asset_id: 'desk-1',
        });
    });

    it('should refresh ended bookings without hiding them as deleted', async () => {
        const now = new Date(2026, 5, 23, 10).valueOf();
        vi.setSystemTime(now);
        const triggerPoll = vi.spyOn(spectator.service, 'triggerPoll');
        const removeItem = vi.spyOn(spectator.service, 'removeItem');
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

        expect(ts_client.post).toHaveBeenCalled();
        const [url] = vi.mocked(ts_client.post).mock.calls[0];
        expect(url).toContain('booking-1');
        expect(url).toContain('check_in');
        expect(triggerPoll).toHaveBeenCalled();
        expect(removeItem).not.toHaveBeenCalled();
    });

    it('should refresh cancelled bookings without hiding them as deleted', async () => {
        const triggerPoll = vi.spyOn(spectator.service, 'triggerPoll');
        const removeItem = vi.spyOn(spectator.service, 'removeItem');
        const booking = new Booking({
            id: 'booking-1',
            booking_type: 'visitor',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        await spectator.service.remove(booking);

        expect(ts_client.del).toHaveBeenCalled();
        expect(triggerPoll).toHaveBeenCalled();
        expect(removeItem).not.toHaveBeenCalled();
    });

    it('should not make schedule requests before schedule data is consumed', () => {
        expect(parking_factory).not.toHaveBeenCalled();
        expect(ts_client.get).not.toHaveBeenCalled();
        expect(ts_client.query).not.toHaveBeenCalled();
        expect(ts_client.querySystems).not.toHaveBeenCalled();
    });

    it('should not make schedule requests for disabled features when consumed', () => {
        spectator.service.bookings();

        expect(ts_client.get).not.toHaveBeenCalled();
        expect(ts_client.query).not.toHaveBeenCalled();
        expect(ts_client.querySystems).not.toHaveBeenCalled();
    });

    it('should only mark enabled feature booking types as loadable', () => {
        const settings = spectator.inject(SettingsService);
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

    it('should show bookings made by me for others by default', () => {
        const settings = spectator.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.features' ? ['desks'] : undefined,
        );
        const mine = new Booking({
            id: 'mine',
            booking_type: 'desk',
            user_email: 'me@example.com',
            booked_by_email: 'me@example.com',
        });
        const for_other = new Booking({
            id: 'other',
            booking_type: 'desk',
            user_email: 'other@example.com',
            booked_by_email: 'me@example.com',
        });
        vi.spyOn(spectator.service, 'isBookingForOtherUser').mockImplementation(
            (item) => item === for_other,
        );
        (spectator.service as any)._desks.set([mine, for_other]);

        expect(spectator.service.filtered_bookings()).toEqual([
            mine,
            for_other,
        ]);

        spectator.service.toggleBookingsForOthers();

        expect(spectator.service.filtered_bookings()).toEqual([mine]);
    });

    it('should ignore a range end date that is before the selected date', async () => {
        const day = (date: number) => new Date(2026, 9, date, 10).valueOf();
        spectator.service.setOptions({ period: 'range' });
        spectator.service.setDateRange(day(5), day(9));
        expect(spectator.service.end_date()).toBe(day(9));

        // The landing page moves the date and leaves the range end in place
        spectator.service.setDate(day(12));

        expect(spectator.service.end_date()).toBeNull();
        await spectator.service['_bookingQuery'](
            'desk',
            spectator.service.options().period,
            spectator.service.date(),
            spectator.service.end_date(),
        );
        const params = vi.mocked(ts_client.query).mock.lastCall?.[0]
            ?.query_params as Record<string, unknown>;
        expect(params).toMatchObject({
            period_start: getUnixTime(startOfDay(day(12))),
            period_end: getUnixTime(endOfDay(day(12))),
        });
    });

    it('should match a multi-day booking on each day that it covers', () => {
        const day = (date: number) => new Date(2026, 9, date, 12).valueOf();
        const window = {
            date: startOfDay(day(5)).valueOf(),
            duration: 3 * 24 * 60,
            all_day: true,
        };

        // `date_end` of these items is the end of the first day
        for (const item of [new Booking(window), new CalendarEvent(window)]) {
            expect(overlapsDay(item, day(4))).toBe(false);
            expect(overlapsDay(item, day(5))).toBe(true);
            expect(overlapsDay(item, day(6))).toBe(true);
            expect(overlapsDay(item, day(7))).toBe(true);
            expect(overlapsDay(item, day(8))).toBe(false);
        }

        const meeting = new CalendarEvent({ date: day(5), duration: 60 });
        expect(overlapsDay(meeting, day(5))).toBe(true);
        expect(overlapsDay(meeting, day(6))).toBe(false);
    });

    it('should identify bookings made by the current user for someone else', () => {
        expect(
            isBookingForOtherUser(
                new Booking({
                    booking_type: 'desk',
                    user_email: 'other@example.com',
                    booked_by_email: 'me@example.com',
                }),
                'me@example.com',
            ),
        ).toBe(true);
        expect(
            isBookingForOtherUser(
                new Booking({
                    booking_type: 'desk',
                    user_email: 'me@example.com',
                    booked_by_email: 'me@example.com',
                }),
                'me@example.com',
            ),
        ).toBe(false);
    });

    it('should share identical in-flight booking queries', async () => {
        const date = new Date(2026, 5, 22, 9).valueOf();

        await Promise.all([
            (spectator.service as any)._bookingQuery('desk', 'day', date),
            (spectator.service as any)._bookingQuery('desk', 'day', date),
        ]);

        expect(ts_client.query).toHaveBeenCalledTimes(1);
    });

    it('should not reuse in-flight booking queries after a poll is triggered', async () => {
        const date = new Date(2026, 5, 22, 9).valueOf();

        const first = (spectator.service as any)._bookingQuery(
            'desk',
            'day',
            date,
        );
        spectator.service.triggerPoll();
        const second = (spectator.service as any)._bookingQuery(
            'desk',
            'day',
            date,
        );
        await Promise.all([first, second]);

        expect(ts_client.query).toHaveBeenCalledTimes(2);
    });

    it('should list every page of a day, not only the first', async () => {
        vi.mocked(ts_client.query).mockResolvedValueOnce({
            total: 3,
            data: [
                new Booking({ id: 'page-1-a', booking_type: 'desk' }),
                new Booking({ id: 'page-1-b', booking_type: 'desk' }),
            ],
            next: () =>
                Promise.resolve({
                    total: 3,
                    data: [new Booking({ id: 'page-2-a', booking_type: 'desk' })],
                    next: null,
                }),
        } as any);

        const bookings = await spectator.service['_bookingQuery'](
            'desk',
            'day',
            new Date(2026, 5, 22, 9).valueOf(),
        );

        expect(bookings.map((booking) => booking.id)).toEqual([
            'page-1-a',
            'page-1-b',
            'page-2-a',
        ]);
    });

    it('should hide removed visitors but keep ordinary cancellations and failed removals', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            total: 4,
            next: null,
            // `query` maps rows through `new Booking` itself; a stub has to.
            data: [
                new Booking({ id: 'retained', booking_type: 'visitor' }),
                new Booking({
                    id: 'cancelled',
                    booking_type: 'visitor',
                    deleted: true,
                }),
                new Booking({
                    id: 'removed',
                    booking_type: 'visitor',
                    deleted: true,
                    extension_data: { removed_from_group: true },
                }),
                new Booking({
                    id: 'failed-removal',
                    booking_type: 'visitor',
                    extension_data: { removed_from_group: true },
                }),
            ],
        } as any);

        const bookings = await spectator.service['_bookingQuery'](
            'visitor',
            'day',
            new Date(2026, 5, 22, 9).valueOf(),
        );

        expect(bookings.map((booking) => booking.id)).toEqual([
            'retained',
            'cancelled',
            'failed-removal',
        ]);
    });

    it('should request cancelled and ended bookings', async () => {
        await (spectator.service as any)._bookingQuery(
            'visitor',
            'day',
            new Date(2026, 5, 22, 9).valueOf(),
        );

        const params = vi.mocked(ts_client.query).mock.lastCall?.[0]
            ?.query_params as Record<string, unknown>;
        expect(params).toMatchObject({
            include_checked_out: true,
            include_deleted: true,
            deleted: true,
        });
    });

    describe('room cancellation', () => {
        function confirmRemoval(reason = 'done') {
            const close = vi.fn();
            vi.mocked(spectator.inject(MatDialog).open).mockReturnValue({
                afterClosed: () => of({ reason }),
                componentInstance: {
                    event: reason === 'done' ? of({ reason }) : NEVER,
                    loading: { set: vi.fn() },
                },
                close,
            } as unknown as ReturnType<MatDialog['open']>);
            return close;
        }

        function nativeRoom() {
            return newCalendarEventFromBooking(
                new Booking({
                    id: 'room-booking-1',
                    booking_type: 'room',
                    asset_id: 'room-1',
                    user_email: 'staff@example.com',
                    extension_data: { creator: 'staff@example.com' },
                    booking_start: 1800000000,
                    booking_end: 1800003600,
                }),
            );
        }

        it.each([true, false])(
            'uses the native API regardless of the current setting %s',
            async (use_bookings) => {
                confirmRemoval();
                vi.mocked(
                    spectator.inject(SettingsService).get,
                ).mockReturnValue(use_bookings);
                const removeItem = vi.spyOn(spectator.service, 'removeItem');
                const booking = nativeRoom();

                await spectator.service.remove(booking);

                expect(ts_client.del).toHaveBeenCalledExactlyOnceWith(
                    expect.stringMatching(/\/bookings\/room-booking-1\?/),
                    { response_type: 'void' },
                );
                expect(ts_client.get).not.toHaveBeenCalled();
                expect(removeItem).toHaveBeenCalledWith(booking);
            },
        );

        it('keeps calendar events on the calendar API', async () => {
            confirmRemoval();
            const event = new CalendarEvent({
                id: 'calendar-event-1',
                creator: 'staff@example.com',
                mailbox: 'staff@example.com',
            });

            await spectator.service.remove(event);

            expect(ts_client.del).toHaveBeenCalledExactlyOnceWith(
                expect.stringMatching(/\/events\/calendar-event-1\?/),
                { response_type: 'void' },
            );
        });

        it('does not request an API when confirmation is dismissed', async () => {
            confirmRemoval('close');

            await spectator.service.remove(nativeRoom());

            expect(ts_client.del).not.toHaveBeenCalled();
            expect(ts_client.get).not.toHaveBeenCalled();
        });

        it('keeps the booking visible when native cancellation fails', async () => {
            const close = confirmRemoval();
            const removeItem = vi.spyOn(spectator.service, 'removeItem');
            const error = new Error('Cancellation failed');
            vi.mocked(ts_client.del).mockRejectedValueOnce(error);

            await expect(
                spectator.service.remove(nativeRoom()),
            ).rejects.toThrow(error);

            expect(close).toHaveBeenCalled();
            expect(removeItem).not.toHaveBeenCalled();
        });
    });
});

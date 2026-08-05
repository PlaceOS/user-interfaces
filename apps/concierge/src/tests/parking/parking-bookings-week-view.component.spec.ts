import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking, settingSignal, SettingsService } from '@placeos/common';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { ParkingBookingsWeekViewComponent } from '../../app/parking/parking-bookings-week-view.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingBookingsWeekViewComponent', () => {
    let spectator: Spectator<ParkingBookingsWeekViewComponent>;
    let bookings: Booking[] = [];
    let show_waitlist = true;
    const reject_booking = vi.fn();
    const approve_booking = vi.fn();
    const options = signal({
        date: Date.now(),
        search: '',
        zones: [],
        period: 'week',
        request_filter: 'all',
    });

    const createComponent = createComponentFactory({
        component: ParkingBookingsWeekViewComponent,
        shallow: true,
        providers: [
            MockProvider(ParkingStateService, {
                loading: signal([]) as any,
                options: options as any,
                bookings: (() => bookings) as any,
                week_start: 1,
                startPolling: vi.fn(() => () => null),
                filterEventList: vi.fn((list: Booking[]) => list),
                filterEventSearch: vi.fn((list: Booking[]) => list),
                rejectBooking: reject_booking,
                approveBooking: approve_booking,
                editReservation: vi.fn(),
                assignSpace: vi.fn(),
                removeBooking: vi.fn(),
                isRequest: vi.fn((b: Booking) =>
                    b.asset_id?.startsWith('unallocated'),
                ),
                isWaitlisted: vi.fn((b: Booking) => b.id === 'waitlisted'),
                canApproveBooking: vi.fn(() => true),
                timezone: 'Australia/Perth',
            } as any),
            MockProvider(SettingsService as any, {
                get: vi.fn((name: string) =>
                    name === 'app.parking.show_waitlist'
                        ? show_waitlist
                        : false,
                ),
                time_format: 'h:mm a',
            }),
        ],
    });

    beforeEach(() => {
        bookings = [];
        show_waitlist = true;
        reject_booking.mockClear();
        approve_booking.mockClear();
        options.set({
            date: Date.now(),
            search: '',
            zones: [],
            period: 'week',
            request_filter: 'all',
        });
        settingSignal('parking.allow_editing', true).set(true);
        settingSignal('parking.allow_deleting', false).set(false);
    });

    it('should build seven consecutive days from the configured week start', () => {
        spectator = createComponent();

        const days = spectator.component.days();
        const expected_start = startOfWeek(options().date, {
            weekStartsOn: 1,
        }).valueOf();
        expect(days).toHaveLength(7);
        expect(days[0]).toBe(expected_start);
        expect(days[6]).toBe(addDays(expected_start, 6).valueOf());
    });

    it('should group bookings under the day they fall on', () => {
        const today = Date.now();
        options.set({ ...options(), date: today });
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: today,
                date_end: today + 60 * 60 * 1000,
                duration: 60,
            } as unknown as Booking,
        ];

        spectator = createComponent();

        const grouped = spectator.component.grouped_bookings();
        const today_key = spectator.component
            .days()
            .find((day) => isSameDay(day, today));
        expect(grouped[today_key!]).toHaveLength(1);
        expect(grouped[today_key!][0].id).toBe('booking-1');
    });

    it('should show start and end times for all-day bookings', () => {
        options.set({
            ...options(),
            date: new Date(2026, 6, 21, 8).valueOf(),
        });
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                all_day: true,
                date: new Date(2026, 6, 21, 8).valueOf(),
                date_end: new Date(2026, 6, 21, 17).valueOf(),
                duration: 9 * 60,
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const time = spectator.query('[data-testid="parking-booking-time"]');
        expect(time).toHaveText('8:00 AM - 5:00 PM');
        expect(time).not.toHaveText('All Day');
    });

    it('should show all day for 24-hour bookings starting at midnight', () => {
        const start = new Date('2026-07-21T00:00:00+08:00').valueOf();
        options.set({ ...options(), date: start });
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                all_day: false,
                date: start,
                date_end: new Date('2026-07-22T00:00:00+08:00').valueOf(),
                duration: 24 * 60,
            } as unknown as Booking,
        ];
        spectator = createComponent();

        expect(spectator.component.isAllDayBooking(bookings[0])).toBe(true);
        expect(
            spectator.query('[data-testid="parking-booking-time"]'),
        ).not.toHaveText(':');
    });

    it('should resolve the status label from booking state', () => {
        spectator = createComponent();
        const component = spectator.component;

        expect(
            component.statusLabel({
                extension_data: { is_assigned: true },
            } as any),
        ).toBe('APP.CONCIERGE.BOOKING_STATUS_ASSIGNED');
        expect(component.statusLabel({ deleted: true } as Booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_DELETED',
        );
        expect(component.statusLabel({ status: 'cancelled' } as Booking)).toBe(
            'COMMON.TYPE_CANCELLED',
        );
        expect(component.statusLabel({ status: 'ended' } as Booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_ENDED',
        );
        expect(component.statusLabel({ status: 'approved' } as Booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_APPROVED',
        );
        expect(component.statusLabel({ status: 'declined' } as Booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_DECLINED',
        );
        expect(component.statusLabel({ status: 'tentative' } as Booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_PENDING',
        );
    });

    it('should label unapproved requests as waitlisted or approval required', () => {
        spectator = createComponent();
        const waitlisted = {
            id: 'waitlisted',
            status: 'tentative',
            process_state: 'unapproved',
            extension_data: {},
        } as Booking;
        const manual = {
            id: 'manual',
            status: 'tentative',
            process_state: 'unapproved',
            extension_data: { requires_manual_approval: true },
        } as any as Booking;
        const pending = { id: 'pending', status: 'tentative' } as Booking;

        expect(spectator.component.statusTone(waitlisted)).toBe('info');
        expect(spectator.component.statusTone(manual)).toBe('approval');
        expect(spectator.component.statusTone(pending)).toBe('warning');
        expect(spectator.component.statusLabel(waitlisted)).toBe(
            'APP.CONCIERGE.PARKING_WAITLISTED',
        );
        expect(spectator.component.statusLabel(manual)).toBe(
            'COMMON.APPROVAL_REQUIRED',
        );
        expect(spectator.component.statusLabel(pending)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_PENDING',
        );
    });

    it('should disable status actions for ended, assigned, cancelled, deleted or unapprovable bookings', () => {
        spectator = createComponent();
        const component = spectator.component;

        expect(
            component.isStatusActionDisabled({ status: 'ended' } as Booking),
        ).toBe(true);
        expect(
            component.isStatusActionDisabled({
                extension_data: { is_assigned: true },
            } as any),
        ).toBe(true);
        expect(
            component.isStatusActionDisabled({ deleted: true } as Booking),
        ).toBe(true);
        expect(
            component.isStatusActionDisabled({
                status: 'cancelled',
            } as Booking),
        ).toBe(true);
        expect(
            component.isStatusActionDisabled({ status: 'approved' } as Booking),
        ).toBe(false);
    });

    it('should show cancelled bookings in red and disable their mutating actions', () => {
        const date = options().date;
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'unallocated-1',
                status: 'cancelled',
                date,
                date_end: date + 60 * 60 * 1000,
                duration: 60,
            } as unknown as Booking,
        ];
        settingSignal('parking.allow_deleting', false).set(true);
        spectator = createComponent();

        const status_button = spectator
            .queryAll('button')
            .find((button) => button.classList.contains('rounded-full'));
        const action_button = (icon_name: string) =>
            spectator
                .queryAll('icon')
                .find((icon) => icon.textContent?.includes(icon_name))
                ?.closest('button');

        expect(status_button).toBeDisabled();
        expect(status_button).toHaveClass('bg-error!');
        expect(status_button).toHaveClass('text-error-content!');
        expect(action_button('add_location')).toBeDisabled();
        expect(action_button('edit')).toBeDisabled();
        expect(action_button('delete')).toBeDisabled();
    });

    it('should recognise request-style filter values', () => {
        spectator = createComponent();

        expect(spectator.component.isRequestFilter('pending')).toBe(true);
        expect(spectator.component.isRequestFilter('waitlist')).toBe(true);
        expect(spectator.component.isRequestFilter('all')).toBe(false);
    });

    it('should delegate approve and reject actions to the state service', () => {
        spectator = createComponent();
        const booking = { id: 'booking-1' } as Booking;

        spectator.component.approve(booking);
        spectator.component.reject(booking);

        expect(approve_booking).toHaveBeenCalledWith(booking);
        expect(reject_booking).toHaveBeenCalledWith(booking);
    });
});

import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Booking, settingSignal, SettingsService } from '@placeos/common';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { ParkingBookingsWeekViewComponent } from '../../app/parking/parking-bookings-week-view.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingBookingsWeekViewComponent', () => {
    let spectator: Spectator<ParkingBookingsWeekViewComponent>;
    let bookings: Booking[] = [];
    let show_waitlist = true;
    const reject_booking = jest.fn();
    const approve_booking = jest.fn();
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
                startPolling: jest.fn(() => () => null),
                filterEventList: jest.fn((list: Booking[]) => list),
                filterEventSearch: jest.fn((list: Booking[]) => list),
                rejectBooking: reject_booking,
                approveBooking: approve_booking,
                editReservation: jest.fn(),
                assignSpace: jest.fn(),
                removeBooking: jest.fn(),
                isRequest: jest.fn((b: Booking) =>
                    b.asset_id?.startsWith('unallocated'),
                ),
                isWaitlisted: jest.fn(
                    (b: Booking) => b.id === 'waitlisted',
                ),
                canApproveBooking: jest.fn(() => true),
                timezone: 'Australia/Perth',
            } as any),
            MockProvider(SettingsService as any, {
                get: jest.fn((name: string) =>
                    name === 'app.parking.show_waitlist' ? show_waitlist : false,
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

    it('should resolve the status label from booking state', () => {
        spectator = createComponent();
        const component = spectator.component;

        expect(
            component.statusLabel({
                extension_data: { is_assigned: true },
            } as Booking),
        ).toBe('APP.CONCIERGE.BOOKING_STATUS_ASSIGNED');
        expect(
            component.statusLabel({ deleted: true } as Booking),
        ).toBe('APP.CONCIERGE.BOOKING_STATUS_DELETED');
        expect(
            component.statusLabel({ status: 'ended' } as Booking),
        ).toBe('APP.CONCIERGE.BOOKING_STATUS_ENDED');
        expect(
            component.statusLabel({ status: 'approved' } as Booking),
        ).toBe('APP.CONCIERGE.BOOKING_STATUS_APPROVED');
        expect(
            component.statusLabel({ status: 'declined' } as Booking),
        ).toBe('APP.CONCIERGE.BOOKING_STATUS_DECLINED');
        expect(
            component.statusLabel({ status: 'tentative' } as Booking),
        ).toBe('APP.CONCIERGE.BOOKING_STATUS_PENDING');
    });

    it('should label a current week tentative request as waitlisted only when waitlist is visible', () => {
        spectator = createComponent();
        const waitlisted = { id: 'waitlisted', status: 'tentative' } as Booking;

        expect(spectator.component.isVisibleWaitlisted(waitlisted)).toBe(true);
        expect(spectator.component.statusLabel(waitlisted)).toBe(
            'APP.CONCIERGE.PARKING_WAITLISTED',
        );
    });

    it('should disable status actions for ended, assigned, deleted or unapprovable bookings', () => {
        spectator = createComponent();
        const component = spectator.component;

        expect(
            component.isStatusActionDisabled({ status: 'ended' } as Booking),
        ).toBe(true);
        expect(
            component.isStatusActionDisabled({
                extension_data: { is_assigned: true },
            } as Booking),
        ).toBe(true);
        expect(
            component.isStatusActionDisabled({ deleted: true } as Booking),
        ).toBe(true);
        expect(
            component.isStatusActionDisabled({ status: 'approved' } as Booking),
        ).toBe(false);
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

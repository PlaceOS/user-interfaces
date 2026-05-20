import { FormGroup } from '@angular/forms';
import { Booking, CalendarEvent, WeekOfMonth } from '@placeos/common';
import {
    generateBookingForm,
    newBookingFromCalendarEvent,
} from '../lib/booking.utilities';

describe('Booking Utilities', () => {
    describe('generateBookingForm', () => {
        it('should get current status from a list of bookings', () =>
            expect(generateBookingForm()).toBeInstanceOf(FormGroup));

        it('should use visitor_name extension data instead of description for visitor forms', () => {
            const form = generateBookingForm(
                new Booking({
                    booking_type: 'visitor',
                    asset_id: 'visitor@example.com',
                    description: 'Vendor Interview',
                    extension_data: { visitor_name: 'Visitor One' },
                }),
            );

            expect(form.value.asset_name).toBe('Visitor One');
        });

        it('should revalidate duration when the start date changes', () => {
            const past_date = Date.now() - 2 * 60 * 60 * 1000;
            const future_date = Date.now() + 2 * 60 * 60 * 1000;
            const form = generateBookingForm(
                new Booking({
                    booking_type: 'visitor',
                    date: past_date,
                    duration: 60,
                }),
            );

            form.controls.duration.updateValueAndValidity({
                emitEvent: false,
            });
            expect(form.controls.duration.errors).toEqual({ duration: true });

            form.patchValue({ date: future_date });

            expect(form.controls.duration.errors).toBeNull();
        });
    });

    describe('newBookingFromCalendarEvent', () => {
        it('should serialise monthly nth-weekday recurrence for room bookings', () => {
            const booking = newBookingFromCalendarEvent(
                new CalendarEvent({
                    date: new Date(2026, 4, 15, 9).valueOf(),
                    date_end: new Date(2026, 4, 15, 10).valueOf(),
                    recurring: true,
                    recurrence: {
                        start: new Date(2026, 4, 15, 9).valueOf(),
                        end: new Date(2026, 10, 30).valueOf(),
                        interval: 1,
                        pattern: 'month_day',
                        days_of_week: [5],
                        nth_of_month: WeekOfMonth.Third,
                    },
                }),
            );

            expect(booking.recurrence_type).toBe('monthly');
            expect(booking.recurrence_days).toBe(1 << 5);
            expect(booking.recurrence_nth_of_month).toBe(WeekOfMonth.Third);
            expect(booking.recurrence_interval).toBe(1);
        });
    });
});

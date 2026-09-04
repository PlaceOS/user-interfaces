import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    Booking,
    CalendarEvent,
    fromBookingRecurrence,
    WeekOfMonth,
} from '@placeos/common';
import {
    generateBookingForm,
    newBookingFromCalendarEvent,
    parkingRequestStatus,
} from '../lib/booking.utilities';

describe('Booking Utilities', () => {
    let injector: Injector;

    beforeEach(() => {
        injector = TestBed.inject(Injector);
    });

    describe('parkingRequestStatus', () => {
        it('should identify waitlisted parking requests', () => {
            expect(
                parkingRequestStatus({
                    approved: false,
                    process_state: 'wait_list',
                    extension_data: { requires_manual_approval: false },
                }),
            ).toBe('waitlist');
        });

        it('should keep requests without a process state pending', () => {
            expect(
                parkingRequestStatus({
                    approved: false,
                    process_state: '',
                    extension_data: { requires_manual_approval: false },
                }),
            ).toBe('pending');
        });

        it('should identify parking requests that need manual approval', () => {
            expect(
                parkingRequestStatus({
                    approved: false,
                    process_state: '',
                    extension_data: { requires_manual_approval: true },
                }),
            ).toBe('approval_required');
        });

        it('should keep approved parking requests pending', () => {
            expect(
                parkingRequestStatus({
                    approved: true,
                    process_state: 'wait_list',
                    extension_data: { requires_manual_approval: true },
                }),
            ).toBe('pending');
        });
    });

    describe('generateBookingForm', () => {
        it('should get current status from a list of bookings', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(new Booking(), injector),
            );
            expect(typeof model).toBe('function');
            expect(typeof form).toBe('function');
            for (const key of Object.keys(model())) {
                expect(typeof form[key]).toBe('function');
                expect(form[key]()).toBeDefined();
                expect(model()[key]).not.toBeNull();
            }
        });

        it('should use visitor_name extension data instead of description for visitor forms', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({
                        booking_type: 'visitor',
                        asset_id: 'visitor@example.com',
                        description: 'Vendor Interview',
                        extension_data: { visitor_name: 'Visitor One' },
                    }),
                    injector,
                ),
            );

            expect(model().asset_name).toBe('Visitor One');
        });

        it('should revalidate duration when the start date changes', () => {
            const past_date = Date.now() - 2 * 60 * 60 * 1000;
            const future_date = Date.now() + 2 * 60 * 60 * 1000;
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({
                        booking_type: 'visitor',
                        date: past_date,
                        duration: 60,
                    }),
                    injector,
                ),
            );

            expect(form.duration().errors()).toEqual([
                expect.objectContaining({ kind: 'duration' }),
            ]);

            model.update((m) => ({ ...m, date: future_date }));

            expect(form.duration().errors()).toEqual([]);
        });

        it('should coerce undefined writes back to typed defaults so [formField] bindings survive', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'visitor' }),
                    injector,
                ),
            );

            // A CVA or handler clearing fields to undefined would otherwise
            // remove them from the FieldTree, breaking `[formField]`.
            model.update((m) => ({
                ...m,
                user: undefined as any,
                asset_id: undefined as any,
                assets: undefined as any,
            }));

            // Sanitised synchronously at the update() boundary — no tick.
            expect(typeof form.user).toBe('function');
            expect(typeof form.asset_id).toBe('function');
            expect(typeof form.assets).toBe('function');
            expect(model().asset_id).toBe('');
            expect(model().assets).toEqual([]);
            expect(model().user).toBeDefined();
        });

        it('should coerce null writes for non-nullable fields so [formField] bindings survive', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'visitor' }),
                    injector,
                ),
            );

            // UserSearchField clears via null. For a non-nullable object field
            // that makes signal-forms degrade the field binding.
            model.update((m) => ({
                ...m,
                user: null as any,
                asset_id: null as any,
                assets: null as any,
                booking_asset: null as any,
                group: null as any,
                recurrence_instances: null as any,
            }));

            expect(typeof form.user).toBe('function');
            expect(typeof form.asset_id).toBe('function');
            expect(typeof form.assets).toBe('function');
            expect(typeof form.booking_asset).toBe('function');
            expect(typeof form.group).toBe('function');
            expect(typeof form.recurrence_instances).toBe('function');
            expect(model().asset_id).toBe('');
            expect(model().assets).toEqual([]);
            expect(model().booking_asset).toEqual({});
            expect(model().group).toBe('');
            expect(model().recurrence_instances).toBe(0);
            expect(model().user).toBeDefined();
        });

        it('should preserve a date-based recurrence when the instance count is cleared', () => {
            const end_date = new Date(2026, 7, 3).valueOf();
            const { model } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'desk' }),
                    injector,
                ),
            );

            model.update((m) => ({
                ...m,
                recurrence_type: 'daily',
                recurrence_interval: 1,
                recurrence_end: end_date / 1000,
                recurrence_instances: undefined as any,
            }));

            const recurrence = fromBookingRecurrence(model() as any);

            expect(recurrence.end_type).toBe('date');
            expect(recurrence.end_date).toBe(end_date);
        });

        it('should keep the date field disabled state stable (no oscillation)', () => {
            const { form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'desk' }),
                    injector,
                ),
            );

            expect(typeof form.date().disabled()).toBe('boolean');
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

/**
 * Regression tests for recurrence field date-change recalculation.
 *
 * Bug: "The custom option selected for recurrence on the forms isn't
 * recalculated when the user changes the date."
 */
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { addDays, addMonths, addWeeks, endOfDay, getUnixTime } from 'date-fns';
import { MockModule, MockProvider } from 'ng-mocks';

import { BookingRecurrence, NO_RECURR } from '@placeos/common';
import { RecurrenceFieldComponent } from '../lib/recurrence-field.component';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Timestamp whose getDay() === target (0 = Sun … 6 = Sat). */
function dateOnWeekday(target: 0 | 1 | 2 | 3 | 4 | 5 | 6): number {
    const base = new Date(2024, 0, 7); // Sunday
    const diff = (target + 7) % 7;
    const d = new Date(base);
    d.setDate(d.getDate() + diff);
    return d.valueOf();
}

/** Timestamp for a Monday in the given week-of-month (1-4). */
function dateInWeekOfMonth(week: 1 | 2 | 3 | 4): number {
    return new Date(2024, 0, (week - 1) * 7 + 1).valueOf();
}

// ---------------------------------------------------------------------------
// Suite
// ---------------------------------------------------------------------------

describe('RecurrenceFieldComponent – date change regression', () => {
    let spectator: Spectator<RecurrenceFieldComponent>;

    const createComponent = createComponentFactory({
        component: RecurrenceFieldComponent,
        imports: [MockModule(MatFormFieldModule), MockModule(MatSelectModule)],
        providers: [MockProvider(MatDialog, { open: jest.fn() })],
    });

    /** Update the date signal input and flush effects. */
    function setDate(new_date: number): void {
        spectator.setInput('date', new_date);
        TestBed.flushEffects();
        spectator.detectChanges();
    }

    beforeEach(() => {
        spectator = createComponent();
        spectator.component.registerOnChange(() => undefined);
    });

    // -----------------------------------------------------------------------
    // Weekly recurrence – weekday tracks the selected date
    // -----------------------------------------------------------------------
    describe('weekly recurrence weekday updates on date change', () => {
        it('should update weekdays from Wednesday to Thursday', () => {
            setDate(dateOnWeekday(3));
            spectator.component.setSimple('weekly');

            expect(spectator.component.value().weekdays.has(3)).toBe(true);

            setDate(dateOnWeekday(4));

            expect(spectator.component.value().weekdays.has(4)).toBe(true);
            expect(spectator.component.value().weekdays.has(3)).toBe(false);
        });

        it('should update weekdays from Friday to Monday', () => {
            setDate(dateOnWeekday(5));
            spectator.component.setSimple('weekly');

            setDate(dateOnWeekday(1));

            expect(spectator.component.value().weekdays.has(1)).toBe(true);
            expect(spectator.component.value().weekdays.has(5)).toBe(false);
        });
    });

    // -----------------------------------------------------------------------
    // Monthly recurrence – week-of-month tracks the selected date
    // -----------------------------------------------------------------------
    describe('monthly recurrence week-of-month updates on date change', () => {
        it('should update week from 1 to 3', () => {
            setDate(dateInWeekOfMonth(1));
            spectator.component.setSimple('monthly');

            expect(spectator.component.value().week).toBe(1);

            setDate(dateInWeekOfMonth(3));

            expect(spectator.component.value().week).toBe(3);
        });

        it('should update both weekday and week-of-month', () => {
            setDate(new Date(2024, 0, 10).valueOf()); // Wed, week 2
            spectator.component.setSimple('monthly');

            expect(spectator.component.value().weekdays.has(3)).toBe(true);
            expect(spectator.component.value().week).toBe(2);

            setDate(new Date(2024, 0, 16).valueOf()); // Tue, week 3

            expect(spectator.component.value().weekdays.has(2)).toBe(true);
            expect(spectator.component.value().weekdays.has(3)).toBe(false);
            expect(spectator.component.value().week).toBe(3);
        });
    });

    // -----------------------------------------------------------------------
    // Custom recurrence – recalculated when date changes
    // -----------------------------------------------------------------------
    describe('custom recurrence is updated when the date changes', () => {
        it('should update weekdays in a custom weekly recurrence', () => {
            const monday = dateOnWeekday(1);
            setDate(monday);
            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 2,
                weekdays: new Set([1 as any]),
                end_type: 'date',
                end_date: monday + 30 * 24 * 60 * 60 * 1000,
            });

            setDate(dateOnWeekday(4));

            expect(spectator.component.value().weekdays.has(4)).toBe(true);
            expect(spectator.component.value().weekdays.has(1)).toBe(false);
        });

        it('should update week-of-month in a custom monthly recurrence', () => {
            setDate(dateInWeekOfMonth(2));
            spectator.component.setValue({
                _custom: true,
                type: 'monthly',
                interval: 1,
                weekdays: new Set([1 as any]),
                monthly_type: 'day_of_week',
                week: 2 as any,
                end_type: 'never',
            });

            setDate(dateInWeekOfMonth(4));

            expect(spectator.component.value().week).toBe(4);
        });
    });

    // -----------------------------------------------------------------------
    // Edge case – day_of_month monthly is NOT corrupted by date change
    // -----------------------------------------------------------------------
    describe('monthly day_of_month is not corrupted by date change', () => {
        it('should NOT modify week for day_of_month recurrence', () => {
            setDate(new Date(2024, 0, 8).valueOf());
            spectator.component.setValue({
                _custom: true,
                type: 'monthly',
                interval: 1,
                monthly_type: 'day_of_month',
                week: 0 as any,
                end_type: 'never',
            });

            setDate(new Date(2024, 0, 15).valueOf());

            expect(spectator.component.value().week).toBe(0);
        });

        it('should NOT modify weekdays for day_of_month recurrence', () => {
            setDate(dateOnWeekday(3));
            spectator.component.setValue({
                _custom: true,
                type: 'monthly',
                interval: 1,
                monthly_type: 'day_of_month',
                weekdays: new Set([3 as any]),
                week: 0 as any,
                end_type: 'never',
            });

            setDate(dateOnWeekday(5));

            expect(spectator.component.value().weekdays.has(3)).toBe(true);
        });
    });

    // -----------------------------------------------------------------------
    // Edge case – multi-day custom weekly is preserved
    // -----------------------------------------------------------------------
    describe('custom multi-day weekly is preserved on date change', () => {
        it('should NOT collapse multi-day weekdays', () => {
            const monday = dateOnWeekday(1);
            setDate(monday);
            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1, 3] as any[]),
                end_type: 'date',
                end_date: monday + 30 * 24 * 60 * 60 * 1000,
            });

            setDate(dateOnWeekday(4));

            expect(spectator.component.value().weekdays.size).toBe(2);
            expect(spectator.component.value().weekdays.has(1)).toBe(true);
            expect(spectator.component.value().weekdays.has(3)).toBe(true);
        });
    });

    // -----------------------------------------------------------------------
    // Instance-based end_date is recalculated on date change
    // -----------------------------------------------------------------------
    describe('instance-based end_date is recalculated on date change', () => {
        it('weekly instances', () => {
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);
            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 4,
                end_date: endOfDay(addWeeks(jan8, 3)).valueOf(),
            });

            const jan22 = new Date(2024, 0, 22).valueOf();
            setDate(jan22);

            expect(spectator.component.value().end_date).toBe(
                endOfDay(addWeeks(jan22, 3)).valueOf(),
            );
        });

        it('daily instances', () => {
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);
            spectator.component.setValue({
                _custom: true,
                type: 'daily',
                interval: 1,
                end_type: 'instances',
                end_instances: 5,
                end_date: endOfDay(addDays(jan8, 4)).valueOf(),
            });

            const feb1 = new Date(2024, 1, 1).valueOf();
            setDate(feb1);

            expect(spectator.component.value().end_date).toBe(
                endOfDay(addDays(feb1, 4)).valueOf(),
            );
        });

        it('monthly instances', () => {
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);
            spectator.component.setValue({
                _custom: true,
                type: 'monthly',
                interval: 1,
                monthly_type: 'day_of_month',
                week: 0 as any,
                end_type: 'instances',
                end_instances: 3,
                end_date: endOfDay(addMonths(jan8, 2)).valueOf(),
            });

            const mar15 = new Date(2024, 2, 15).valueOf();
            setDate(mar15);

            expect(spectator.component.value().end_date).toBe(
                endOfDay(addMonths(mar15, 2)).valueOf(),
            );
        });
    });

    // -----------------------------------------------------------------------
    // Date-based end_date is clamped when booking date moves past it
    // -----------------------------------------------------------------------
    describe('date-based end_date is clamped when booking date moves forward', () => {
        it('should NOT change end_date when end_type is "date" and new date is still before end_date', () => {
            // end_date is June 30; new booking date Feb 1 is still well before it
            const fixed_end = new Date(2024, 5, 30).valueOf();
            setDate(new Date(2024, 0, 8).valueOf());
            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'date',
                end_date: fixed_end,
            });

            setDate(new Date(2024, 1, 1).valueOf());

            // end_date is still in the future relative to the new booking date
            // so it should remain unchanged
            expect(spectator.component.value().end_date).toBe(fixed_end);
        });

        it('should update end_date when booking date moves past the recurrence end_date', () => {
            // Set up weekly recurrence ending April 5, 2024
            const apr5 = new Date(2024, 3, 5).valueOf();
            setDate(new Date(2024, 2, 1).valueOf()); // booking date: March 1
            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([5 as any]), // Friday
                end_type: 'date',
                end_date: apr5,
            });

            // Move booking date to April 10 – now AFTER the end_date of April 5
            const apr10 = new Date(2024, 3, 10).valueOf();
            setDate(apr10);

            // end_date must be >= new booking date; stale April 5 is invalid
            expect(spectator.component.value().end_date).toBeGreaterThanOrEqual(
                apr10,
            );
        });

        it('should NOT change end_date when booking date moves forward but stays before end_date', () => {
            // Set up weekly recurrence ending April 30, 2024
            const apr30 = new Date(2024, 3, 30).valueOf();
            setDate(new Date(2024, 2, 1).valueOf()); // booking date: March 1
            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([5 as any]), // Friday
                end_type: 'date',
                end_date: apr30,
            });

            // Move booking date to April 10 – still BEFORE the end_date of April 30
            const apr10 = new Date(2024, 3, 10).valueOf();
            setDate(apr10);

            // end_date should remain unchanged because it is still in the future
            expect(spectator.component.value().end_date).toBe(apr30);
        });
    });

    // -----------------------------------------------------------------------
    // toRaw() passes the correct date to toBookingRecurrence
    // -----------------------------------------------------------------------
    describe('toRaw() forwards the correct date', () => {
        it('weekly booking instances anchored to form date', () => {
            const form_date = new Date(2024, 0, 8).valueOf();
            setDate(form_date);
            spectator.setInput('type', 'booking');

            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 3,
            });

            const raw = spectator.component.toRaw(
                spectator.component.value(),
            ) as BookingRecurrence;

            expect(raw.recurrence_end).toBe(
                getUnixTime(endOfDay(addWeeks(form_date, 2))),
            );
        });

        it('weekly booking instances end on the final occurrence date', () => {
            const form_date = new Date(2026, 4, 12).valueOf();
            setDate(form_date);
            spectator.setInput('type', 'booking');

            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([2 as any]),
                end_type: 'instances',
                end_instances: 7,
            });

            const raw = spectator.component.toRaw(
                spectator.component.value(),
            ) as BookingRecurrence;

            expect(raw.recurrence_end).toBe(
                getUnixTime(endOfDay(addWeeks(form_date, 6))),
            );
            expect(spectator.component.formatted_value()).toContain(
                '23 Jun 2026',
            );
        });

        it('daily booking instances anchored to form date', () => {
            const form_date = new Date(2024, 0, 8).valueOf();
            setDate(form_date);
            spectator.setInput('type', 'booking');

            spectator.component.setValue({
                _custom: false,
                type: 'daily',
                interval: 1,
                end_type: 'instances',
                end_instances: 5,
            });

            const raw = spectator.component.toRaw(
                spectator.component.value(),
            ) as BookingRecurrence;

            expect(raw.recurrence_end).toBe(
                getUnixTime(endOfDay(addDays(form_date, 4))),
            );
        });
    });

    // -----------------------------------------------------------------------
    // Baseline – setSimple creates correct values
    // -----------------------------------------------------------------------
    describe('setSimple creates correct values for the initial date', () => {
        it('weekly with correct weekday', () => {
            setDate(dateOnWeekday(3));
            spectator.component.setSimple('weekly');

            expect(spectator.component.value().type).toBe('weekly');
            expect(spectator.component.value().weekdays.has(3)).toBe(true);
        });

        it('monthly with correct week-of-month', () => {
            setDate(dateInWeekOfMonth(2));
            spectator.component.setSimple('monthly');

            expect(spectator.component.value().type).toBe('monthly');
            expect(spectator.component.value().week).toBe(2);
        });

        it('none resets to NO_RECURR', () => {
            setDate(dateOnWeekday(3));
            spectator.component.setSimple('weekly');
            spectator.component.setSimple('none');

            expect(spectator.component.value().type).toBe('none');
        });

        it('daily', () => {
            setDate(dateOnWeekday(1));
            spectator.component.setSimple('daily');

            expect(spectator.component.value().type).toBe('daily');
            expect(spectator.component.value().interval).toBe(1);
        });
    });

    // -----------------------------------------------------------------------
    // Event form CVA round-trip
    // -----------------------------------------------------------------------
    describe('event form CVA round-trip', () => {
        it('formatted_value updates after date change with custom weekly instances', () => {
            spectator.setInput('type', 'event');
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);

            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 4,
                end_date: endOfDay(addWeeks(jan8, 3)).valueOf(),
            });

            expect(spectator.component.formatted_value()).toContain(
                '4 instances',
            );

            // Round-trip through toRaw → writeValue
            spectator.component.writeValue(
                spectator.component.toRaw(spectator.component.value()),
            );

            expect(spectator.component.value().end_type).toBe('instances');
            expect(spectator.component.value().end_instances).toBe(4);

            // Change date forward
            const feb5 = new Date(2024, 1, 5).valueOf();
            setDate(feb5);

            expect(spectator.component.formatted_value()).toContain(
                '4 instances',
            );
            expect(spectator.component.value().end_date).toBe(
                endOfDay(addWeeks(feb5, 3)).valueOf(),
            );
        });

        it('formatted_value recomputes end_date from current date() signal', () => {
            spectator.setInput('type', 'event');
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);

            // Set value with stale end_date directly via signal
            spectator.component.value.set({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 4,
                end_date: endOfDay(addWeeks(jan8, 3)).valueOf(),
            });

            // Change date without flushing effects
            spectator.setInput('date', new Date(2025, 5, 1).valueOf());
            spectator.detectChanges();

            // formatted_value should use the new date, not the stale end_date
            expect(spectator.component.formatted_value()).toContain(
                '4 instances',
            );
            expect(spectator.component.formatted_value()).toContain('2025');
        });

        it('end_instances survives writeValue round-trip after date change', () => {
            spectator.setInput('type', 'event');
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);

            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 5,
                end_date: endOfDay(addWeeks(jan8, 4)).valueOf(),
            });

            // Change to Thursday
            setDate(new Date(2024, 0, 11).valueOf());

            expect(spectator.component.value().weekdays.has(4)).toBe(true);
            expect(spectator.component.value().end_instances).toBe(5);

            // Simulate formControlName round-trip
            spectator.component.writeValue(
                spectator.component.toRaw(spectator.component.value()),
            );

            expect(spectator.component.value().end_type).toBe('instances');
            expect(spectator.component.value().end_instances).toBe(5);
            expect(spectator.component.value()._custom).toBe(true);
            expect(spectator.component.formatted_value()).toContain(
                '5 instances',
            );
        });

        it('writeValue(null) resets the displayed recurrence type', () => {
            spectator.setInput('type', 'event');
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);

            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 4,
                end_date: endOfDay(addWeeks(jan8, 3)).valueOf(),
            });
            spectator.component.recurr_type.set('custom_display');
            spectator.component.prev_type.set('custom_display');

            spectator.component.writeValue(null as any);

            expect(spectator.component.value().type).toBe('none');
            expect(spectator.component.recurr_type()).toBe('none');
            expect(spectator.component.prev_type()).toBe('none');
        });

        it('writeValue refreshes the custom cache for a new external value', () => {
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);

            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 5,
                end_date: endOfDay(addWeeks(jan8, 4)).valueOf(),
            });

            spectator.component.writeValue({
                recurrence_custom: true,
                recurrence_type: 'daily',
                recurrence_days: 1 << 1,
                recurrence_interval: 1,
                recurrence_instances: 2,
                recurrence_end: getUnixTime(endOfDay(addWeeks(jan8, 1))),
            });

            spectator.component.writeValue(
                spectator.component.toRaw(spectator.component.value()),
            );

            expect(spectator.component.value().end_type).toBe('instances');
            expect(spectator.component.value().end_instances).toBe(2);
            expect(spectator.component.formatted_value()).toContain(
                '2 instances',
            );
        });

        it('clears stale custom booking fields when switching back to none', () => {
            const jan8 = new Date(2024, 0, 8).valueOf();
            setDate(jan8);

            spectator.component.setValue({
                _custom: true,
                type: 'weekly',
                interval: 1,
                weekdays: new Set([1 as any]),
                end_type: 'instances',
                end_instances: 4,
                end_date: endOfDay(addWeeks(jan8, 3)).valueOf(),
            });

            const custom_value = spectator.component.toRaw(
                spectator.component.value(),
            ) as BookingRecurrence;
            const cleared_value = {
                ...custom_value,
                ...(spectator.component.toRaw(NO_RECURR) as BookingRecurrence),
            };

            spectator.component.writeValue(cleared_value);

            expect(spectator.component.value().type).toBe('none');
            expect(spectator.component.value()._custom).toBe(false);
            expect(spectator.component.recurr_type()).toBe('none');
            expect(spectator.component.formatted_value()).toBe('');
        });
    });

    describe('formatted_value uses the selected date for all formats', () => {
        it('formats monthly day_of_month using the selected date', () => {
            setDate(new Date(2026, 2, 31).valueOf());

            spectator.component.setValue({
                _custom: true,
                type: 'monthly',
                interval: 1,
                monthly_type: 'day_of_month',
                end_type: 'never',
            });

            expect(spectator.component.formatted_value()).toBe(
                'Every 1 month on day 31',
            );
        });

        it('formats yearly recurrence using the selected date', () => {
            setDate(new Date(2026, 2, 31).valueOf());

            spectator.component.setValue({
                _custom: true,
                type: 'yearly',
                interval: 1,
                end_type: 'never',
            });

            expect(spectator.component.formatted_value()).toBe(
                'Every 1 year on 31 Mar',
            );
        });
    });
});

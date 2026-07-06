import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Recurrence, recurrenceEndDate } from '@placeos/common';
import { addDays, addWeeks, endOfDay } from 'date-fns';

import { RecurrenceModalComponent } from '../lib/recurrence-modal.component';

describe('RecurrenceModalComponent', () => {
    let spectator: Spectator<RecurrenceModalComponent>;
    const booking_date = new Date(2026, 2, 31).valueOf();
    const available_days = 30;
    const default_end_date = endOfDay(
        addDays(Date.now(), available_days),
    ).valueOf();
    const dialog_data: {
        value: Recurrence;
        iom: number;
        date: number;
        available_days: number;
    } = {
        value: {
            _custom: true,
            type: 'daily',
            interval: 1,
            end_type: 'date',
        },
        iom: 1,
        date: booking_date,
        available_days,
    };

    const createComponent = createComponentFactory({
        component: RecurrenceModalComponent,
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: dialog_data,
            },
        ],
    });

    beforeEach(() => {
        dialog_data.value = {
            _custom: true,
            type: 'daily',
            interval: 1,
            end_type: 'date',
        };
        spectator = createComponent();
    });

    it('should default end_date when none is passed in', () => {
        expect(spectator.component.model().end_date).toBe(default_end_date);
    });

    it('should return a default end_date when confirming without one', () => {
        spectator.component.model.update((m) => ({ ...m, end_date: null }));
        spectator.detectChanges();

        expect(spectator.component.confirmValue().end_date).toBe(
            default_end_date,
        );
    });

    it('should set weekly instance end_date to the final occurrence date', () => {
        spectator.component.model.update((m) => ({
            ...m,
            type: 'weekly',
            interval: 1,
            end_type: 'instances',
            end_instances: 7,
        }));
        spectator.detectChanges();

        expect(spectator.component.confirmValue().end_date).toBe(
            endOfDay(addWeeks(booking_date, 6)).valueOf(),
        );
    });

    it('should count instances from the first matching recurrence date', () => {
        spectator.component.model.update((m) => ({
            ...m,
            type: 'weekly',
            interval: 1,
            weekdays: new Set([4]),
            end_type: 'instances',
            end_instances: 3,
        }));
        spectator.detectChanges();

        expect(spectator.component.confirmValue().end_date).toBe(
            endOfDay(addWeeks(new Date(2026, 3, 2).valueOf(), 2)).valueOf(),
        );
    });

    it('should clamp instance ends to the allowed booking window', () => {
        spectator.component.model.update((m) => ({
            ...m,
            type: 'weekly',
            interval: 1,
            end_type: 'instances',
            end_instances: 53,
        }));
        spectator.detectChanges();

        const value = spectator.component.confirmValue();

        expect(value.end_date).toBeLessThanOrEqual(default_end_date);
        expect(value.end_instances).toBeLessThan(53);
    });

    it('should limit instance count to the available booking window', () => {
        spectator.component.model.update((m) => ({
            ...m,
            type: 'weekly',
            interval: 4,
            end_type: 'instances',
        }));
        spectator.detectChanges();

        const max_instances = spectator.component.maxInstances();

        expect(max_instances).toBeLessThan(53);
        expect(
            recurrenceEndDate(
                {
                    ...spectator.component.model(),
                    end_instances: max_instances,
                } as any,
                booking_date,
            ),
        ).toBeLessThanOrEqual(default_end_date);
    });

    it('should create monthly custom recurrence on weekday instance', () => {
        spectator.component.model.update((m) => ({ ...m, type: 'monthly' }));
        spectator.detectChanges();

        expect(spectator.component.model().monthly_type).toBe('day_of_week');
        expect(spectator.component.model().week).toBe(1);
        expect(spectator.component.model().weekdays?.has(2)).toBe(true);
    });

    it('should normalise legacy monthly day-of-month recurrence to weekday instance', () => {
        dialog_data.value = {
            _custom: true,
            type: 'monthly',
            interval: 1,
            monthly_type: 'day_of_month',
            end_type: 'never',
        };

        spectator = createComponent();

        expect(spectator.component.model().monthly_type).toBe('day_of_week');
        expect(spectator.component.confirmValue().monthly_type).toBe(
            'day_of_week',
        );
        expect(spectator.component.confirmValue().week).toBe(1);
    });

    it('should clamp instance count when recurrence settings reduce the limit', () => {
        spectator.component.model.update((m) => ({
            ...m,
            type: 'weekly',
            interval: 4,
            end_type: 'instances',
            end_instances: 53,
        }));
        spectator.detectChanges();

        expect(spectator.component.model().end_instances).toBe(
            spectator.component.maxInstances(),
        );
    });
});

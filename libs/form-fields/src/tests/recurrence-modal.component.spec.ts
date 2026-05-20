import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { recurrenceEndDate } from '@placeos/common';
import { addDays, addWeeks, endOfDay } from 'date-fns';

import { RecurrenceModalComponent } from '../lib/recurrence-modal.component';

describe('RecurrenceModalComponent', () => {
    let spectator: Spectator<RecurrenceModalComponent>;
    const booking_date = new Date(2026, 2, 31).valueOf();
    const available_days = 30;
    const default_end_date = endOfDay(
        addDays(Date.now(), available_days),
    ).valueOf();

    const createComponent = createComponentFactory({
        component: RecurrenceModalComponent,
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    value: {
                        _custom: true,
                        type: 'daily',
                        interval: 1,
                        end_type: 'date',
                    },
                    iom: 1,
                    date: booking_date,
                    available_days,
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should default end_date when none is passed in', () => {
        expect(spectator.component.form.controls.end_date.value).toBe(
            default_end_date,
        );
    });

    it('should return a default end_date when confirming without one', () => {
        spectator.component.form.patchValue({ end_date: null });

        expect(spectator.component.confirmValue().end_date).toBe(
            default_end_date,
        );
    });

    it('should set weekly instance end_date to the final occurrence date', () => {
        spectator.component.form.patchValue({
            type: 'weekly',
            interval: 1,
            end_type: 'instances',
            end_instances: 7,
        });

        expect(spectator.component.confirmValue().end_date).toBe(
            endOfDay(addWeeks(booking_date, 6)).valueOf(),
        );
    });

    it('should count instances from the first matching recurrence date', () => {
        spectator.component.form.patchValue({
            type: 'weekly',
            interval: 1,
            weekdays: new Set([4 as any]),
            end_type: 'instances',
            end_instances: 3,
        });

        expect(spectator.component.confirmValue().end_date).toBe(
            endOfDay(addWeeks(new Date(2026, 3, 2).valueOf(), 2)).valueOf(),
        );
    });

    it('should clamp instance ends to the allowed booking window', () => {
        spectator.component.form.patchValue({
            type: 'weekly',
            interval: 1,
            end_type: 'instances',
            end_instances: 53,
        });

        const value = spectator.component.confirmValue();

        expect(value.end_date).toBeLessThanOrEqual(default_end_date);
        expect(value.end_instances).toBeLessThan(53);
    });

    it('should limit instance count to the available booking window', () => {
        spectator.component.form.patchValue({
            type: 'weekly',
            interval: 4,
            end_type: 'instances',
        });

        const max_instances = spectator.component.maxInstances();

        expect(max_instances).toBeLessThan(53);
        expect(
            recurrenceEndDate(
                {
                    ...spectator.component.form.getRawValue(),
                    end_instances: max_instances,
                },
                booking_date,
            ),
        ).toBeLessThanOrEqual(default_end_date);
    });

    it('should clamp instance count when recurrence settings reduce the limit', () => {
        spectator.component.form.patchValue({
            type: 'weekly',
            interval: 4,
            end_type: 'instances',
            end_instances: 53,
        });

        expect(spectator.component.form.controls.end_instances.value).toBe(
            spectator.component.maxInstances(),
        );
    });
});

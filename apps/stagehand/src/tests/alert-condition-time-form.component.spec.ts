import { signal } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { TIMEZONES_IANA } from '@placeos/common';
import { TriggerTimeConditionType } from '@placeos/ts-client';

import {
    AlertConditionTimeFormComponent,
    numberToPosition,
} from '../app/dashboards/alert-condition-time-form.component';

/** Build a mock signal-form field whose value can be read and set */
function makeField(initial: any) {
    const value = signal(initial);
    const state = { value };
    return () => state as any;
}

/** Build a mock time-condition form tree matching what the component reads */
function makeTimeForm(
    opts: {
        time_type?: any;
        cron?: string;
        timezone?: string;
        time?: number;
    } = {},
) {
    return {
        time_type: makeField(opts.time_type ?? TriggerTimeConditionType.AT),
        cron: makeField(opts.cron ?? ''),
        timezone: makeField(opts.timezone ?? ''),
        time: makeField(opts.time ?? Date.now()),
    } as any;
}

describe('AlertConditionTimeFormComponent', () => {
    let spectator: Spectator<AlertConditionTimeFormComponent>;

    const create_component = createComponentFactory({
        component: AlertConditionTimeFormComponent,
        shallow: true,
        // Disable the zoneless auto-tick: these tests assert on component
        // signals/methods, not the DOM. Auto change-detection would render the
        // experimental signal-forms + mat-select template and emit benign async
        // rxjs/material errors that vitest reports as unhandled.
        providers: [{ provide: ComponentFixtureAutoDetect, useValue: false }],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = create_component({ detectChanges: false });
        spectator.component.ngOnInit();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    describe('numberToPosition', () => {
        it('applies the correct ordinal suffix', () => {
            expect(numberToPosition(1)).toBe('1st');
            expect(numberToPosition(2)).toBe('2nd');
            expect(numberToPosition(3)).toBe('3rd');
            expect(numberToPosition(4)).toBe('4th');
            expect(numberToPosition(21)).toBe('21st');
            expect(numberToPosition(22)).toBe('22nd');
            expect(numberToPosition(23)).toBe('23rd');
        });

        it('uses "th" for the 11-19 range regardless of last digit', () => {
            expect(numberToPosition(11)).toBe('11th');
            expect(numberToPosition(12)).toBe('12th');
            expect(numberToPosition(13)).toBe('13th');
        });
    });

    it('zero-pads values to the requested width', () => {
        expect(spectator.component.pad(5)).toBe('05');
        expect(spectator.component.pad(12)).toBe('12');
        expect(spectator.component.pad(5, 3)).toBe('005');
    });

    it('populates repeat periods, weekdays and months on init', () => {
        expect(spectator.component.repeat_period().map((_) => _.id)).toEqual([
            'minute',
            'hour',
            'day',
            'week',
            'month',
            'year',
            'custom',
        ]);
        expect(spectator.component.days_of_week()).toHaveLength(7);
        expect(spectator.component.months_of_year()).toHaveLength(12);
    });

    describe('updateTimezoneList', () => {
        it('filters IANA timezones by a case-insensitive substring', () => {
            spectator.component.updateTimezoneList('sydney');
            expect(spectator.component.timezones()).toContain('Australia/Sydney');
            expect(
                spectator.component
                    .timezones()
                    .every((_) => _.toLowerCase().includes('sydney')),
            ).toBe(true);
        });

        it('returns the full list for an empty query', () => {
            spectator.component.updateTimezoneList('');
            expect(spectator.component.timezones()).toHaveLength(
                TIMEZONES_IANA.length,
            );
        });
    });

    describe('toggleCRON', () => {
        it('switches the form to a CRON schedule and writes a cron string', () => {
            const form = makeTimeForm();
            spectator.fixture.componentRef.setInput('form', form);

            spectator.component.toggleCRON(true);

            expect(form.time_type().value()).toBe(TriggerTimeConditionType.CRON);
            expect(form.cron().value()).toBe('* * * * *');
        });

        it('switches the form back to a fixed time', () => {
            const form = makeTimeForm({ time_type: TriggerTimeConditionType.CRON });
            spectator.fixture.componentRef.setInput('form', form);

            spectator.component.toggleCRON(false);

            expect(form.time_type().value()).toBe(TriggerTimeConditionType.AT);
        });
    });

    describe('updateCronString', () => {
        let form: any;
        beforeEach(() => {
            form = makeTimeForm();
            spectator.fixture.componentRef.setInput('form', form);
            spectator.component.cron_minute.set(30);
            spectator.component.cron_hour.set(9);
        });

        it('produces an every-N-minutes expression for the minute period', () => {
            spectator.component.cron_period.set('minute');
            spectator.component.updateCronString();
            expect(form.cron().value()).toBe('*/30 * * * *');

            spectator.component.cron_minute.set(0);
            spectator.component.updateCronString();
            expect(form.cron().value()).toBe('* * * * *');
        });

        it('produces an hourly expression', () => {
            spectator.component.cron_period.set('hour');
            spectator.component.updateCronString();
            expect(form.cron().value()).toBe('30 */9 * * *');
        });

        it('produces a daily expression at the chosen time', () => {
            spectator.component.cron_period.set('day');
            spectator.component.updateCronString();
            expect(form.cron().value()).toBe('30 9 * * *');
        });

        it('produces a monthly expression on the chosen date', () => {
            spectator.component.cron_period.set('month');
            spectator.component.cron_date.set(15);
            spectator.component.updateCronString();
            expect(form.cron().value()).toBe('30 9 15 * *');
        });

        it('emits the selected weekday for a weekly expression', () => {
            spectator.component.cron_period.set('week');
            spectator.component.cron_day.set(3);
            spectator.component.updateCronString();
            expect(form.cron().value()).toBe('30 9 * * 3');
        });

        it('emits the selected month for a yearly expression', () => {
            spectator.component.cron_period.set('year');
            spectator.component.cron_date.set(15);
            spectator.component.cron_month.set(5);
            spectator.component.updateCronString();
            expect(form.cron().value()).toBe('30 9 15 5 *');
        });
    });

    it('saves a custom cron string to the form after a debounce', () => {
        vi.useFakeTimers();
        const form = makeTimeForm();
        spectator.fixture.componentRef.setInput('form', form);

        spectator.component.saveCRON('*/5 * * * *');
        expect(form.cron().value()).toBe('');

        vi.advanceTimersByTime(1000);
        expect(form.cron().value()).toBe('*/5 * * * *');
    });

    describe('ngOnChanges', () => {
        it('parses a simple cron expression into schedule fields', () => {
            const form = makeTimeForm({
                time_type: TriggerTimeConditionType.CRON,
                cron: '30 9 * * *',
                timezone: 'Australia/Sydney',
            });
            spectator.fixture.componentRef.setInput('form', form);

            spectator.component.ngOnChanges({ form: { firstChange: true } as any });

            expect(spectator.component.is_cron()).toBe(true);
            expect(spectator.component.cron_minute()).toBe(30);
            expect(spectator.component.cron_hour()).toBe(9);
            expect(spectator.component.cron_period()).toBe('hour');
            expect(spectator.component.timezones()).toContain('Australia/Sydney');
        });

        it('detects a custom cron expression', () => {
            const form = makeTimeForm({
                time_type: TriggerTimeConditionType.CRON,
                cron: '*/15 * * * *',
            });
            spectator.fixture.componentRef.setInput('form', form);

            spectator.component.ngOnChanges({ form: { firstChange: true } as any });

            expect(spectator.component.cron_period()).toBe('custom');
            expect(spectator.component.cron_string()).toBe('*/15 * * * *');
        });

        it('stays as a fixed-time condition when the form is not CRON', () => {
            const form = makeTimeForm({ time_type: TriggerTimeConditionType.AT });
            spectator.fixture.componentRef.setInput('form', form);

            spectator.component.ngOnChanges({ form: { firstChange: true } as any });

            expect(spectator.component.is_cron()).toBe(false);
        });
    });
});

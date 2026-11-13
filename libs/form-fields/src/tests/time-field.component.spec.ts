import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { addMinutes, format, startOfDay } from 'date-fns';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TimeFieldComponent } from '../lib/time-field.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';

describe('TimeFieldComponent', () => {
    let spectator: Spectator<TimeFieldComponent>;
    const createComponent = createComponentFactory({
        component: TimeFieldComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatMenuModule, MatFormFieldModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should show a written off-step time without rounding it', () => {
        spectator.setInput({ no_past_times: false });
        const date = startOfDay(Date.now()).valueOf() + (9 * 60 + 3) * 60_000;
        spectator.component.writeValue(date);
        expect(spectator.component.time()).toBe('09:03');
        expect(spectator.component.active_time()).toBe(date);
    });

    it('should accept a typed time within the allowed hours', () => {
        const on_change = vi.fn();
        spectator.setInput({
            allow_time_entry: true,
            no_past_times: false,
            range: { start: 9, end: 17 },
        });
        spectator.component.registerOnChange(on_change);
        spectator.component.setTypedTime('10:07');
        expect(on_change).toHaveBeenCalledTimes(1);
        expect(format(on_change.mock.calls[0][0], 'HH:mm')).toBe('10:07');
        expect(spectator.component.time_entry_error()).toBe(false);
    });

    it('should show the picked time after a rejected typed time', () => {
        spectator.setInput({
            allow_time_entry: true,
            no_past_times: false,
            range: { start: 9, end: 17 },
        });
        spectator.component.setValue('10:00');
        spectator.detectChanges();
        const input = spectator.query('input[type="time"]') as HTMLInputElement;
        input.value = '18:30';
        spectator.component.setTypedTime('18:30');
        spectator.component.setValue('10:00');
        expect(input.value).toBe('10:00');
    });

    it('should reject a typed time outside the allowed hours', () => {
        const on_change = vi.fn();
        spectator.setInput({
            allow_time_entry: true,
            no_past_times: false,
            range: { start: 9, end: 17 },
        });
        spectator.component.registerOnChange(on_change);
        spectator.component.setTypedTime('18:30');
        spectator.detectChanges();
        expect(on_change).not.toHaveBeenCalled();
        expect(spectator.query('[role="alert"]')).toExist();
    });

    it('should not submit a parent form when opened', () => {
        expect('button[time-field]').toHaveAttribute('type', 'button');
    });

    it('should allow the user to select a time', () => {
        spectator.click('button[time-field]');
        const option_elements = document.querySelectorAll('[mat-menu-item]');
        expect(option_elements.length).toBeGreaterThan(0);
        option_elements[0].dispatchEvent(new Event('click'));
        spectator.detectChanges();
        expect(spectator.component.time()).toBe(
            `${spectator.component.time_options()[0].id}`,
        );
        spectator.component.writeValue(startOfDay(Date.now()).valueOf());
        expect(spectator.component.time()).toBe(`00:00`);
    });

    it('should allow customising the step between time options', () => {
        spectator.setInput({ step: 5, no_past_times: false });
        expect(spectator.component._time_options()[1].id).toBe('00:05');
        spectator.setInput({ step: 20 });
        expect(
            spectator.component
                ._time_options()
                .slice(0, 4)
                .map((_) => _.id),
        ).toEqual(['00:00', '00:20', '00:40', '01:00']);
    });

    it('should leave room for the minimum duration before the range end', () => {
        // A fixed day with no daylight saving change
        const date = new Date(2026, 0, 1).valueOf();
        const on_change = vi.fn();
        spectator.setInput({
            allow_time_entry: true,
            no_past_times: false,
            from: date,
            range: { start: 9, end: 11 },
            min_duration: 60,
            step: 30,
        });
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue(addMinutes(date, 9 * 60).valueOf());
        expect(spectator.component.time_options().map((_) => _.id)).toEqual([
            '09:00',
            '09:30',
            '10:00',
        ]);
        spectator.component.setTypedTime('10:15');
        expect(spectator.component.time_entry_error()).toBe(true);
        expect(on_change).not.toHaveBeenCalled();
    });

    it('should space time options by a step above 30 minutes', () => {
        spectator.setInput({ step: 45, no_past_times: false });
        spectator.detectChanges();
        const ids = spectator.component._time_options().map((_) => _.id);
        expect(ids.slice(0, 3)).toEqual(['00:00', '00:45', '01:30']);
        expect(ids.at(-1)).toBe('23:15');
    });

    it('should allow the current time as an option', () => {
        const current_time = addMinutes(startOfDay(new Date()), 35);
        const date_str = format(current_time, 'HH:mm');
        spectator.setInput({ no_past_times: false });
        spectator.component.writeValue(current_time.valueOf());
        spectator.detectChanges();
        const option = spectator.component
            .time_options()
            .find((block) => block.id === date_str);
        expect(option).toBeTruthy();
    });

    it('should only offer times from now on when past times are not allowed', () => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date(2026, 0, 1, 10, 7));
        spectator = createComponent({ props: { no_past_times: true } });
        vi.useRealTimers();
        const ids = spectator.component._time_options().map((_) => _.id);
        expect(ids[0]).toBe('10:15');
        expect(ids.at(-1)).toBe('23:45');
    });

    it('should allow limiting selectable times by time of day', () => {
        const date = startOfDay(new Date()).valueOf();
        spectator.setInput({
            no_past_times: false,
            from: date,
            range: { start: 1, end: 1.75 },
        });
        spectator.component.writeValue(date);
        spectator.detectChanges();
        expect(spectator.component.time_options().map((_) => _.id)).toEqual([
            '01:00',
            '01:15',
            '01:30',
            '01:45',
        ]);
    });

    it('should ignore a time range with blank or empty bounds', () => {
        const date = startOfDay(new Date()).valueOf();
        for (const range of [
            { start: null, end: null },
            { start: '', end: '' },
            { start: 9, end: 9 },
            {},
        ] as unknown[]) {
            spectator.setInput({ no_past_times: false, from: date, range });
            spectator.component.writeValue(date);
            spectator.detectChanges();
            const options = spectator.component.time_options();
            expect(options.length).toBe(96);
            expect(options[0].id).toBe('00:00');
            expect(options[options.length - 1].id).toBe('23:45');
        }
    });

    it('should not include custom times outside the time range', () => {
        const date = startOfDay(new Date()).valueOf();
        spectator.setInput({
            no_past_times: false,
            from: date,
            range: { start: 1, end: 2 },
        });
        spectator.component.writeValue(addMinutes(date, 35).valueOf());
        spectator.detectChanges();
        expect(spectator.component.time_options().map((_) => _.id)).toEqual([
            '01:00',
            '01:15',
            '01:30',
            '01:45',
            '02:00',
        ]);
    });
});

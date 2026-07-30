import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    addMinutes,
    format,
    parse,
    startOfDay,
    startOfMinute,
    subMinutes,
} from 'date-fns';
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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
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

    // it('should allow the user to manually input a time', () => {
    //     spectator.setInput({ no_past_times: false });
    //     spectator.detectChanges();
    //     const input_el: HTMLInputElement = spectator.query('input');
    //     expect('input').toExist();
    //     input_el.value = '00:00';
    //     spectator.dispatchFakeEvent('input', 'input');
    //     expect(spectator.component.time).toBe('00:00');
    // });

    it('should allow customising the step between time options', () => {
        spectator.setInput({ step: 5, no_past_times: false });
        spectator.detectChanges();
        expect(spectator.component._time_options()[1].id).toBe('00:05');
        const step = Math.floor(Math.random() * 4 + 1) * 5;
        spectator.setInput({ step });
        spectator.detectChanges();
        expect(spectator.component._time_options()[1].id).toBe(
            format(addMinutes(startOfDay(new Date()), step), 'HH:mm'),
        );
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

    it('should allow preventing past times from being selected', () => {
        spectator.setInput({ no_past_times: true });
        spectator.detectChanges();
        const date = startOfMinute(subMinutes(new Date(), 6));
        const first_option = parse(
            `${spectator.component.time_options()[0].id}`,
            'HH:mm',
            new Date(),
        );
        expect(date <= first_option).toBeTruthy();
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
        ] as any[]) {
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

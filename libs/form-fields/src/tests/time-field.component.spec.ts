import { fakeAsync, flush } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import {
    addMinutes,
    format,
    parse,
    startOfDay,
    startOfMinute,
    subMinutes,
} from 'date-fns';

import { IconComponent } from '@placeos/components';
import { TimeFieldComponent } from '../lib/time-field.component';

import * as dayjs from 'dayjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('TimeFieldComponent', () => {
    let spectator: Spectator<TimeFieldComponent>;
    const createComponent = createComponentFactory({
        component: TimeFieldComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [
            MatSelectModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow the user to select a time', fakeAsync(() => {
        // spectator.click('app-icon');
        // spectator.detectChanges();
        // spectator.tick(300);
        // spectator.detectChanges();
        spectator.click('mat-select');
        const option_elements = document.querySelectorAll('mat-option');
        expect(option_elements.length).toBeGreaterThan(0);
        option_elements[0].dispatchEvent(new Event('click'));
        spectator.detectChanges();
        expect(spectator.component.time).toBe(
            `${spectator.component.time_options[0].id}`
        );
        spectator.component.writeValue(dayjs().startOf('d').valueOf());
        expect(spectator.component.time).toBe(`00:00`);
        flush();
    }));

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
        expect(spectator.component._time_options[1].id).toBe('00:05');
        const step = Math.floor(Math.random() * 4 + 1) * 5;
        spectator.setInput({ step });
        spectator.detectChanges();
        expect(spectator.component._time_options[1].id).toBe(
            format(addMinutes(startOfDay(new Date()), step), 'HH:mm')
        );
    });

    it('should allow the current time as an option', () => {
        const date_str = format(new Date(), 'HH:mm');
        const option = spectator.component.time_options.find(
            (block) => block.id === date_str
        );
        expect(option).toBeTruthy();
    });

    it('should allow preventing past times from being selected', () => {
        spectator.setInput({ no_past_times: true });
        spectator.detectChanges();
        const date = startOfMinute(subMinutes(new Date(), 6));
        const first_option = parse(
            `${spectator.component.time_options[0].id}`,
            'HH:mm',
            new Date()
        );
        expect(date <= first_option).toBeTruthy();
    });
});

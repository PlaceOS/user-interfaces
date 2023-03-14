import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { timeFormatString } from '@placeos/common';

import { DurationFieldComponent } from '../lib/duration-field.component';

import { addHours, addMinutes, format, startOfMinute } from 'date-fns';

describe('DurationFieldComponent', () => {
    let spectator: Spectator<DurationFieldComponent>;
    const createComponent = createComponentFactory({
        component: DurationFieldComponent,
        imports: [MatFormFieldModule, MatSelectModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should be able to be disabled', () => {
        expect('mat-select').toHaveAttribute('aria-disabled', 'false');
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect('mat-select').toHaveAttribute('aria-disabled', 'true');
    });

    it('should allow changing the min duration', () => {
        spectator.setInput({ min: 60 });
        spectator.detectChanges();
        expect(spectator.component.duration_options[0].id).toBe(60);
        spectator.setInput({ min: Math.floor(Math.random() * 10 + 2) * 15 });
        spectator.detectChanges();
        expect(spectator.component.duration_options[0].id).toBe(
            spectator.component.min
        );
    });

    it('should allow changing the max duration', () => {
        spectator.setInput({ max: 240 });
        spectator.detectChanges();
        let options = spectator.component.duration_options;
        expect(options[options.length - 1].id).toBe(240);
        spectator.setInput({ max: Math.floor(Math.random() * 10 + 10) * 15 });
        spectator.detectChanges();
        options = spectator.component.duration_options;
        expect(options[options.length - 1].id).toBe(spectator.component.max);
    });

    it('should allow changing the duration step', () => {
        spectator.setInput({ step: 10 });
        spectator.detectChanges();
        let diff =
            +spectator.component.duration_options[1].id -
            +spectator.component.duration_options[0].id;
        expect(diff).toBe(10);
        spectator.setInput({ step: Math.floor(Math.random() * 10 + 1) * 5 });
        spectator.detectChanges();
        diff =
            +spectator.component.duration_options[1].id -
            +spectator.component.duration_options[0].id;
        expect(diff).toBe(spectator.component.step);
    });

    it('should allow changing the reference time', () => {
        spectator.setInput({ time: 1 });
        spectator.detectChanges();
        let options = spectator.component.duration_options;
        expect(options[0].date).toBeGreaterThanOrEqual(1);
        spectator.setInput({
            time: addHours(1, 12).valueOf(),
        });
        spectator.detectChanges();
        options = spectator.component.duration_options;
        expect(options[0].date).toBeGreaterThanOrEqual(1 + 12 * 60 * 60 * 1000);
    });

    it('should allow setting the value', (done) => {
        const duration = 35;
        spectator.component.registerOnChange((value) => {
            expect(value).toBe(35);
            done();
        });
        spectator.component.setValue(duration);
    });
});

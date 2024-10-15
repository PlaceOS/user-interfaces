import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatMenuModule } from '@angular/material/menu';
import { IconComponent } from '@placeos/components';

import { addHours } from 'date-fns';
import { MockComponent } from 'ng-mocks';

import { DurationFieldComponent } from '../lib/duration-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('DurationFieldComponent', () => {
    let spectator: Spectator<DurationFieldComponent>;
    const createComponent = createComponentFactory({
        component: DurationFieldComponent,
        imports: [MatMenuModule, MatFormFieldModule],
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should be able to be disabled', () => {
        expect('button[duration-field]').not.toHaveAttribute('disabled');
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect('button[duration-field]').toHaveAttribute('disabled');
    });

    it('should allow changing the min duration', () => {
        spectator.setInput({ min: 60 });
        spectator.detectChanges();
        expect(spectator.component.duration_options[0].id).toBe(60);
        spectator.setInput({ min: Math.floor(Math.random() * 10 + 2) * 15 });
        spectator.detectChanges();
        expect(spectator.component.duration_options[0].id).toBe(
            spectator.component.min,
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

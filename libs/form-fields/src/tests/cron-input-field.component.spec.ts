import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { CronInputFieldComponent } from '../lib/cron-input-field.component';

describe('CronInputFieldComponent', () => {
    let spectator: Spectator<CronInputFieldComponent>;
    const createComponent = createComponentFactory({
        component: CronInputFieldComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should split written values into the five fields', () => {
        spectator.component.writeValue('0 9 1 6 5');
        expect(spectator.component.form.getRawValue()).toEqual({
            minute: '0',
            hour: '9',
            day: '1',
            month: '6',
            day_of_week: '5',
        });
        expect(spectator.component.cron_string).toBe('0 9 1 6 5');
    });

    it('should default empty written values to every minute', () => {
        spectator.component.writeValue('');
        expect(spectator.component.cron_string).toBe('* * * * *');
    });

    it('should emit the cron string when a valid field changes', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.form.controls.hour.setValue('9');
        expect(on_change).toHaveBeenCalledWith('* 9 * * *');
        expect(spectator.component.cron_string).toBe('* 9 * * *');
    });

    it('should not emit when a field value is invalid', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.form.controls.hour.setValue('99');
        expect(on_change).not.toHaveBeenCalled();
    });

    it('should apply presets and emit the value', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setPreset('0 9 * * 1-5');
        expect(spectator.component.cron_string).toBe('0 9 * * 1-5');
        expect(on_change).toHaveBeenCalledWith('0 9 * * 1-5');
    });

    it('should surface validation errors once touched', () => {
        spectator.component.form.controls.minute.setValue('bad');
        expect(spectator.component.show_error()).toBe(false);
        spectator.component.markTouched();
        expect(spectator.component.show_error()).toBe(true);
    });

    it('should disable and re-enable the form controls', () => {
        spectator.component.setDisabledState(true);
        expect(spectator.component.form.disabled).toBe(true);
        spectator.component.setDisabledState(false);
        expect(spectator.component.form.enabled).toBe(true);
    });

    it('should block invalid characters from being typed', () => {
        const letter = {
            key: 'a',
            ctrlKey: false,
            metaKey: false,
            preventDefault: jest.fn(),
        } as unknown as KeyboardEvent;
        spectator.component.preventInvalidCharacters(letter);
        expect(letter.preventDefault).toHaveBeenCalled();

        const digit = {
            key: '5',
            ctrlKey: false,
            metaKey: false,
            preventDefault: jest.fn(),
        } as unknown as KeyboardEvent;
        spectator.component.preventInvalidCharacters(digit);
        expect(digit.preventDefault).not.toHaveBeenCalled();
    });
});

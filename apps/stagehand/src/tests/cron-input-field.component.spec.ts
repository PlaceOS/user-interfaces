import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { CronInputFieldComponent } from '../app/dashboards/cron-input-field.component';

describe('CronInputFieldComponent', () => {
    let spectator: Spectator<CronInputFieldComponent>;
    let component: CronInputFieldComponent;

    const create_component = createComponentFactory({
        component: CronInputFieldComponent,
        detectChanges: false,
    });

    beforeEach(() => {
        spectator = create_component();
        component = spectator.component;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should split an incoming CRON string into its field model', () => {
        component.writeValue('5 10 1 2 3');
        expect(component.model()).toEqual({
            minute: '5',
            hour: '10',
            day: '1',
            month: '2',
            day_of_week: '3',
        });
        expect(component.cron_string).toBe('5 10 1 2 3');
    });

    it('should ignore an empty value on writeValue', () => {
        component.writeValue('');
        expect(component.model()).toEqual({
            minute: '*',
            hour: '*',
            day: '*',
            month: '*',
            day_of_week: '*',
        });
    });

    it('should default missing CRON parts to wildcards', () => {
        component.writeValue('30');
        expect(component.model()).toEqual({
            minute: '30',
            hour: '*',
            day: '*',
            month: '*',
            day_of_week: '*',
        });
    });

    it('should emit the joined CRON string when the form is valid', () => {
        const on_change = vi.fn();
        component.registerOnChange(on_change);
        component.model.set({
            minute: '5',
            hour: '10',
            day: '1',
            month: '2',
            day_of_week: '3',
        });

        component.updateValueFromForm();

        expect(on_change).toHaveBeenCalledWith('5 10 1 2 3');
        expect(component.cron_string).toBe('5 10 1 2 3');
    });

    it('should not emit while the form is invalid', () => {
        const on_change = vi.fn();
        component.registerOnChange(on_change);
        // hour 99 is outside the 0-23 range -> invalid
        component.model.set({
            minute: '5',
            hour: '99',
            day: '1',
            month: '2',
            day_of_week: '3',
        });

        component.updateValueFromForm();

        expect(on_change).not.toHaveBeenCalled();
    });

    it('should call the registered change handler on setValue', () => {
        const on_change = vi.fn();
        component.registerOnChange(on_change);
        component.setValue('* * * * *');
        expect(on_change).toHaveBeenCalledWith('* * * * *');
        expect(component.cron_string).toBe('* * * * *');
    });

    it('should block keystrokes that are not valid CRON characters', () => {
        const event = {
            key: 'a',
            preventDefault: vi.fn(),
        } as unknown as KeyboardEvent;
        component.preventInvalidCharacters(event);
        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should allow valid CRON characters through', () => {
        const event = {
            key: '5',
            preventDefault: vi.fn(),
        } as unknown as KeyboardEvent;
        component.preventInvalidCharacters(event);
        expect(event.preventDefault).not.toHaveBeenCalled();
    });
});

import { FormControl } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from 'libs/components/src/lib/icon.component';

import { addHours } from 'date-fns';
import { MockComponent } from 'ng-mocks';

import { MatFormFieldModule } from '@angular/material/form-field';
import { DurationFieldComponent } from '../lib/duration-field.component';

describe('DurationFieldComponent', () => {
    let spectator: Spectator<DurationFieldComponent>;
    const createComponent = createComponentFactory({
        component: DurationFieldComponent,
        imports: [MatMenuModule, MatFormFieldModule],
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should not submit a parent form when opened', () => {
        expect('button[duration-field]').toHaveAttribute('type', 'button');
    });

    it('should be able to be disabled', () => {
        expect('button[duration-field]').not.toHaveAttribute('disabled');
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect('button[duration-field]').toHaveAttribute('disabled');
    });

    it('should allow changing the min duration', () => {
        spectator.component.writeValue(150);
        spectator.setInput({ min: 60 });
        spectator.detectChanges();
        expect(spectator.component.duration_options()[0].id).toBe(60);
        spectator.setInput({ min: 105 });
        spectator.detectChanges();
        expect(spectator.component.duration_options()[0].id).toBe(
            spectator.component.min(),
        );
    });

    it('should allow changing the max duration', () => {
        spectator.setInput({ max: 240 });
        spectator.detectChanges();
        let options = spectator.component.duration_options();
        expect(options[options.length - 1].id).toBe(240);
        spectator.setInput({ max: Math.floor(Math.random() * 10 + 10) * 15 });
        spectator.detectChanges();
        options = spectator.component.duration_options();
        expect(options[options.length - 1].id).toBe(spectator.component.max());
    });

    it('should allow changing the duration step', () => {
        spectator.component.writeValue(30);
        spectator.setInput({ step: 10 });
        spectator.detectChanges();
        let diff =
            +spectator.component.duration_options()[1].id -
            +spectator.component.duration_options()[0].id;
        expect(diff).toBe(10);
        spectator.setInput({ step: 35 });
        spectator.detectChanges();
        diff =
            +spectator.component.duration_options()[1].id -
            +spectator.component.duration_options()[0].id;
        expect(diff).toBe(spectator.component.step());
    });

    it('should allow changing the reference time', () => {
        spectator.setInput({ time: 1 });
        spectator.detectChanges();
        let options = spectator.component.duration_options();
        expect(options[0].date).toBeGreaterThanOrEqual(1);
        spectator.setInput({
            time: addHours(1, 12).valueOf(),
        });
        spectator.detectChanges();
        options = spectator.component.duration_options();
        expect(options[0].date).toBeGreaterThanOrEqual(1 + 12 * 60 * 60 * 1000);
    });

    it('should allow setting the value', () =>
        new Promise<void>((done) => {
            const duration = 35;
            spectator.component.registerOnChange((value) => {
                expect(value).toBe(35);
                done();
            });
            spectator.component.setValue(duration);
        }));

    it('should de-duplicate merged custom duration options', () => {
        spectator.setInput({
            min: 30,
            max: 90,
            step: 30,
            custom_options: [30, 45, 90, 90],
        });
        spectator.detectChanges();
        expect(spectator.component.duration_options().map((_) => _.id)).toEqual(
            [30, 45, 60, 90],
        );
    });

    it('should include custom durations outside min and max bounds', () => {
        spectator.setInput({
            min: 30,
            max: 90,
            step: 30,
            custom_options: [15, 120],
        });
        spectator.detectChanges();
        expect(spectator.component.duration_options().map((_) => _.id)).toEqual(
            [15, 30, 60, 90, 120],
        );
    });

    it('should limit durations by the latest end time', () => {
        spectator.setInput({
            time: new Date(2026, 0, 1, 16, 0).valueOf(),
            min: 30,
            max: 240,
            step: 30,
            end_time: 17,
        });
        spectator.detectChanges();
        expect(spectator.component.duration_options().map((_) => _.id)).toEqual(
            [30, 60],
        );
    });

    it('should filter custom durations outside the latest end time', () => {
        spectator.setInput({
            time: new Date(2026, 0, 1, 16, 0).valueOf(),
            min: 30,
            max: 240,
            step: 30,
            custom_options: [45, 90],
            end_time: 17,
        });
        spectator.detectChanges();
        expect(spectator.component.duration_options().map((_) => _.id)).toEqual(
            [30, 45, 60],
        );
    });

    it('should mark the field invalid when the selected time has no duration options', () => {
        spectator.setInput({
            time: new Date(2026, 0, 1, 16, 30).valueOf(),
            min: 60,
            max: 240,
            step: 30,
            end_time: 17,
        });
        spectator.detectChanges();

        expect(spectator.component.duration_options()).toEqual([]);
        expect(spectator.component.no_options()).toBe(true);
        expect(spectator.component.validate(null as any)).toEqual({
            no_duration_options: true,
        });
        expect('button[duration-field]').toHaveAttribute('disabled');
    });

    it('should update validity when duration options become available again', () => {
        const on_validator_change = vi.fn();
        spectator.component.registerOnValidatorChange(on_validator_change);
        spectator.setInput({
            time: new Date(2026, 0, 1, 16, 30).valueOf(),
            min: 60,
            max: 240,
            step: 30,
            end_time: 17,
        });
        spectator.detectChanges();

        spectator.setInput({ time: new Date(2026, 0, 1, 16, 0).valueOf() });
        spectator.detectChanges();

        expect(spectator.component.no_options()).toBe(false);
        expect(spectator.component.validate(null as any)).toBeNull();
        expect(on_validator_change).toHaveBeenCalledTimes(2);
    });

    it('should keep custom duration options below a high minimum when bookable hours limit the end time', () => {
        spectator.setInput({
            time: new Date(2026, 0, 1, 16, 0).valueOf(),
            min: 240,
            max: 480,
            step: 30,
            custom_options: [30, 60, 90],
            end_time: 17,
        });
        spectator.detectChanges();

        expect(spectator.component.duration_options().map((_) => _.id)).toEqual(
            [30, 60],
        );
    });

    it('should preserve the current duration when it is outside the generated step options', () => {
        spectator.setInput({
            min: 30,
            max: 120,
            step: 30,
        });
        spectator.component.writeValue(45);
        spectator.detectChanges();

        expect(spectator.component.duration()).toBe(45);
        expect(spectator.component.duration_options().map((_) => _.id)).toEqual(
            [30, 45, 60, 90, 120],
        );
        expect(spectator.component.selected()?.id).toBe(45);
    });
    it('should offer direct entry only with a reference time and when enabled', async () => {
        expect(spectator.query('input[type="time"]')).toBeNull();
        spectator.setInput({ time: new Date(2026, 0, 1, 9).valueOf() });
        await spectator.fixture.whenStable();
        expect(spectator.component.allow_end_time()).toBe(false);
        expect(spectator.query('button[end-time-options]')).toBeNull();
        spectator.setInput({ allow_end_time: true });
        await spectator.fixture.whenStable();
        expect(spectator.query('input[type="time"]')).toBeTruthy();
        spectator.setInput({ allow_end_time: false });
        await spectator.fixture.whenStable();
        expect(spectator.query('button[end-time-options]')).toBeNull();
        expect(spectator.query('input[type="time"]')).toBeNull();
    });

    it('should convert a typed end time to an off-step duration and update the selection', async () => {
        const on_change = vi.fn();
        const on_touch = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.registerOnTouched(on_touch);
        spectator.setInput({
            allow_end_time: true,
            time: new Date(2026, 0, 1, 9).valueOf(),
        });
        await spectator.fixture.whenStable();
        const input = spectator.query<HTMLInputElement>('input[type="time"]');
        if (!input) throw new Error('End-time input was not shown');
        input.value = '10:07';
        input.dispatchEvent(new Event('change'));
        await spectator.fixture.whenStable();
        expect(on_change).toHaveBeenCalledWith(67);
        expect(on_touch).toHaveBeenCalled();
        expect(spectator.component.selected()?.id).toBe(67);
        expect(spectator.component.validate(new FormControl())).toBeNull();
        spectator.component.writeValue(90);
        await spectator.fixture.whenStable();
        expect(input.value).toBe('10:30');
    });

    it.each(['', '25:00', '08:00', '09:00', '09:15', '10:31', '12:00'])(
        'should reject invalid or out-of-range end time %s',
        (value) => {
            const on_change = vi.fn();
            spectator.component.registerOnChange(on_change);
            spectator.setInput({
                allow_end_time: true,
                time: new Date(2026, 0, 1, 9).valueOf(),
                min: 30,
                max: 120,
                end_time: 10.5,
            });
            spectator.component.setEndTime(value);
            expect(on_change).not.toHaveBeenCalled();
            expect(spectator.component.duration()).toBe(60);
            expect(spectator.component.validate(new FormControl())).toEqual({
                invalid_end_time: true,
            });
            spectator.component.setEndTime('10:30');
            expect(on_change).toHaveBeenCalledWith(90);
            expect(spectator.component.validate(new FormControl())).toBeNull();
        },
    );

    it('should apply closing hours in the configured timezone', () => {
        const start = new Date('2026-01-01T00:00:00Z').valueOf();
        spectator.setInput({
            allow_end_time: true,
            time: start,
            timezone: 'Asia/Tokyo',
            end_time: 10,
        });
        const local_end = new Date(start + 90 * 60000);
        const value = [local_end.getHours(), local_end.getMinutes()]
            .map((part) => String(part).padStart(2, '0'))
            .join(':');
        spectator.component.setEndTime(value);
        expect(spectator.component.validate(new FormControl())).toEqual({
            invalid_end_time: true,
        });
    });

    it('should prevent direct changes when disabled and clear draft errors on selection', () => {
        spectator.setInput({
            allow_end_time: true,
            time: new Date(2026, 0, 1, 9).valueOf(),
        });
        spectator.component.setEndTime('');
        spectator.component.setValue(90);
        expect(spectator.component.validate(new FormControl())).toBeNull();
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setDisabledState(true);
        spectator.component.setEndTime('10:07');
        expect(on_change).not.toHaveBeenCalled();
    });
    it('should enforce the maximum duration without a closing-time limit', () => {
        spectator.setInput({
            allow_end_time: true,
            time: new Date(2026, 0, 1, 9).valueOf(),
            max: 120,
        });
        spectator.component.setEndTime('11:01');
        expect(spectator.component.validate(new FormControl())).toEqual({
            invalid_end_time: true,
        });
        spectator.component.setEndTime('11:00');
        expect(spectator.component.duration()).toBe(120);
        expect(spectator.component.validate(new FormControl())).toBeNull();
    });
    it('should open duration options from the input action and update the end time', async () => {
        spectator.setInput({
            allow_end_time: true,
            time: new Date(2026, 0, 1, 9).valueOf(),
        });
        await spectator.fixture.whenStable();
        expect(spectator.query('button[duration-field]')).toBeNull();
        const input = spectator.query<HTMLInputElement>('input[type="time"]');
        if (!input) throw new Error('End-time input was not shown');
        expect(input.value).toBe('10:00');
        spectator.click('button[end-time-options]');
        await spectator.fixture.whenStable();
        const option = document.querySelector<HTMLButtonElement>(
            '[data-duration="90"]',
        );
        if (!option) throw new Error('Duration option was not shown');
        option.click();
        await spectator.fixture.whenStable();
        expect(spectator.component.duration()).toBe(90);
        expect(input.value).toBe('10:30');
        spectator.component.setDisabledState(true);
        await spectator.fixture.whenStable();
        expect(input.disabled).toBe(true);
        expect('button[end-time-options]').toHaveAttribute('disabled');
    });
});

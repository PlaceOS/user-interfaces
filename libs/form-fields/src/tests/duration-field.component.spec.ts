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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

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
});

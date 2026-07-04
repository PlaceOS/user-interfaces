import { signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { BookingRulesFormComponent } from '../lib/booking-rules-form.component';
import { DateFieldComponent } from '../lib/date-field.component';
import { DurationFieldComponent } from '../lib/duration-field.component';
import { ItemListFieldComponent } from '../lib/item-list-field.component';

jest.mock('@placeos/ts-client', () => ({
    __esModule: true,
    ...jest.requireActual('@placeos/ts-client'),
    queryZones: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe('BookingRulesFormComponent', () => {
    let spectator: Spectator<BookingRulesFormComponent>;
    const createComponent = createComponentFactory({
        component: BookingRulesFormComponent,
        declarations: [
            MockComponent(ItemListFieldComponent),
            MockComponent(DateFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(SettingsToggleComponent),
        ],
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal(null) as any,
                module: jest.fn(),
            }),
            MockProvider(SettingsService, {
                time_format_signal: signal('h:mm a') as any,
            }),
        ],
        imports: [MatFormFieldModule, MatSelectModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should populate the form and conditions from a ruleset input', () => {
        spectator.setInput('ruleset', {
            id: 'ruleset-1',
            zone: 'zone-1',
            name: 'My Rules',
            rules: { auto_approve: true, hidden: false },
            conditions: { groups: ['staff'], min_length: 30 },
        } as any);
        spectator.detectChanges();

        expect(spectator.component.available_conditions()).toEqual([
            'groups',
            'min_length',
        ]);
        expect(spectator.component.form.getRawValue().name).toBe('My Rules');
        expect(spectator.component.form.getRawValue().zone).toBe('zone-1');
    });

    it('should not emit and should warn when the form is invalid', () => {
        const on_change = jest.fn();
        spectator.component.rulesetChange.subscribe(on_change);
        spectator.component.form.controls.name.setValue('');

        spectator.component.post();

        expect(on_change).not.toHaveBeenCalled();
    });

    it('should emit only the active conditions when posting a valid form', () => {
        const on_change = jest.fn();
        spectator.component.rulesetChange.subscribe(on_change);
        spectator.component.available_conditions.set(['groups']);
        spectator.component.form.patchValue({
            zone: 'zone-1',
            name: 'Valid Ruleset',
            conditions: { groups: ['a', 'a', 'b'] },
        });

        spectator.component.post();

        expect(on_change).toHaveBeenCalledTimes(1);
        const emitted = on_change.mock.calls[0][0];
        expect(Object.keys(emitted.conditions)).toEqual(['groups']);
        expect(emitted.conditions.groups).toEqual(['a', 'b']);
    });

    it('should order and clamp the between-hours condition', () => {
        spectator.component.setIsBetween(18, 6);
        expect(spectator.component.form.getRawValue().conditions.is_between).toEqual(
            [18, 18.25],
        );
    });

    it('should ignore incomplete between-hours values', () => {
        spectator.component.form.patchValue({
            conditions: { is_between: [8, 10] },
        });
        spectator.component.setIsBetween(0, 10);
        expect(spectator.component.form.getRawValue().conditions.is_between).toEqual(
            [8, 10],
        );
    });

    it('should normalise a period to start and end of day', () => {
        const start = new Date(2026, 5, 10, 15, 0).valueOf();
        const end = new Date(2026, 5, 12, 9, 0).valueOf();
        spectator.component.setIsPeriod(start, end);
        const period = spectator.component.form.getRawValue().conditions
            .is_period;
        expect(new Date(period[0]).getHours()).toBe(0);
        expect(new Date(period[1]).getHours()).toBe(23);
    });

    it('should post when the save input toggles', () => {
        const post_spy = jest.spyOn(spectator.component, 'post');
        spectator.setInput('save', false);
        spectator.detectChanges();
        expect(post_spy).not.toHaveBeenCalled();
        spectator.setInput('save', true);
        spectator.detectChanges();
        expect(post_spy).toHaveBeenCalled();
    });
});

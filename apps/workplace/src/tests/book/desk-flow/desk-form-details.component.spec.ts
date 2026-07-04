import { signal, SimpleChange } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NewDeskFormDetailsComponent } from '../../../app/book/desk-flow/desk-form-details.component';

describe('NewDeskFormDetailsComponent', () => {
    let spectator: Spectator<NewDeskFormDetailsComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let settings: Record<string, any>;
    let set_options: jest.Mock;

    const createComponent = createComponentFactory({
        component: NewDeskFormDetailsComponent,
        detectChanges: false,
        providers: [
            MockProvider(OrganisationService, {
                building_list: signal([]),
                active_levels: signal([]),
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
            } as any),
        ],
    });

    beforeEach(() => {
        settings = {};
        set_options = jest.fn();
        model = signal<Record<string, any>>({
            id: '',
            date: Date.now(),
            duration: 60,
            all_day: false,
            resources: [],
        });
        spectator = createComponent({
            providers: [
                MockProvider(SettingsService, {
                    get: jest.fn((key: string) => settings[key]),
                } as any),
                MockProvider(BookingFormService, {
                    options: signal({ type: 'desk', group: false }),
                    features: signal([]),
                    setOptions: set_options,
                    setFeature: jest.fn(),
                    model,
                    get auto_allocation() {
                        return !!settings['app.desks.auto_allocation'];
                    },
                } as any),
            ],
        });
        spectator.setInput('model_input', model as any);
    });

    it('should create', () => expect(spectator.component).toBeTruthy());

    it('should expose the writable model from the model_input', () => {
        expect(spectator.component.model).toBe(model);
    });

    it('should delegate setOptions to the booking form service', () => {
        spectator.component.setOptions({ group: true });
        expect(set_options).toHaveBeenCalledWith({ group: true });
    });

    it('should merge recurrence changes into the model', () => {
        spectator.component.onRecurrenceChange({
            recurrence_type: 'weekly',
        } as any);
        expect(model().recurrence_type).toBe('weekly');
    });

    it('should update the model date on first-instance change', () => {
        const date = new Date('2026-05-01T00:00:00.000Z').valueOf();
        spectator.component.onFirstInstanceChange(date);
        expect(model().date).toBe(date);
    });

    it('should apply the selected desk to resources when the form changes', () => {
        spectator.component.selected_desk = { id: 'desk-5' } as any;
        spectator.component.ngOnChanges({
            form: new SimpleChange(undefined, () => ({}), true),
        });
        expect(model().resources).toEqual([{ id: 'desk-5' }]);
    });

    it('should fall back to the default max duration when unset', () => {
        expect(spectator.component.max_duration).toBe(8 * 60);
    });

    it('should prefer the desk-specific max duration setting', () => {
        settings['app.desks.max_duration'] = 300;
        expect(spectator.component.max_duration).toBe(300);
    });

    it('should allow booking for others when either setting is enabled', () => {
        expect(spectator.component.can_book_for_others).toBeFalsy();
        settings['app.desks.can_book_for_others'] = true;
        expect(spectator.component.can_book_for_others).toBe(true);
    });

    it('should read locker/recurrence/group toggles from settings', () => {
        settings['app.desks.can_book_lockers'] = true;
        settings['app.desks.allow_recurrence'] = true;
        settings['app.desks.allow_groups'] = true;
        expect(spectator.component.can_book_lockers).toBe(true);
        expect(spectator.component.can_recurr).toBe(true);
        expect(spectator.component.allow_groups).toBe(true);
    });

    it('should report assets support from either bookings or desks settings', () => {
        expect(spectator.component.has_assets).toBe(false);
        settings['app.bookings.has_assets'] = true;
        expect(spectator.component.has_assets).toBe(true);
    });

    it('should default allow_time_changes to true unless explicitly disabled', () => {
        expect(spectator.component.allow_time_changes).toBe(true);
        settings['app.desks.allow_time_changes'] = false;
        expect(spectator.component.allow_time_changes).toBe(false);
    });

    it('should only allow all-day when time changes are allowed', () => {
        settings['app.desks.allow_all_day'] = true;
        expect(spectator.component.allow_all_day).toBe(true);
        settings['app.desks.allow_time_changes'] = false;
        expect(spectator.component.allow_all_day).toBe(false);
    });

    it('should use the building timezone only when configured', () => {
        expect(spectator.component.timezone).toBe('');
        settings['app.desks.use_building_timezone'] = true;
        expect(spectator.component.timezone).toBe('Australia/Sydney');
    });

    it('should compute effective_min_duration from custom options', () => {
        settings['app.desks.min_duration'] = 60;
        settings['app.desks.custom_duration_options'] = [30, 45];
        expect(spectator.component.effective_min_duration).toBe(30);
    });

    it('should reflect the auto_allocation flag', () => {
        expect(spectator.component.auto_allocation).toBe(false);
        settings['app.desks.auto_allocation'] = true;
        expect(spectator.component.auto_allocation).toBe(true);
    });
});

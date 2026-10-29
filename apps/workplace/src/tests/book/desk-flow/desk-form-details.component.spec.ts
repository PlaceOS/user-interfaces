import { NO_ERRORS_SCHEMA, signal, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { NewDeskFormDetailsComponent } from '../../../app/book/desk-flow/desk-form-details.component';

describe('NewDeskFormDetailsComponent', () => {
    let spectator: Spectator<NewDeskFormDetailsComponent>;
    let model: ReturnType<typeof signal<Record<string, unknown>>>;
    let settings: Record<string, any>;
    let set_options: any;
    let set_user_values: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: NewDeskFormDetailsComponent,
        detectChanges: false,
        // The specs that render the template test the event bindings only,
        // so the form field components are not necessary.
        overrideComponents: [
            [
                NewDeskFormDetailsComponent,
                {
                    set: {
                        imports: [TranslatePipe],
                        schemas: [NO_ERRORS_SCHEMA],
                    },
                },
            ],
        ],
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
        set_options = vi.fn();
        set_user_values = vi.fn();
        model = signal<Record<string, unknown>>({
            id: '',
            date: Date.now(),
            duration: 60,
            all_day: false,
            resources: [],
        });
        spectator = createComponent({
            providers: [
                MockProvider(SettingsService, {
                    get: vi.fn((key: string) => settings[key]),
                }),
                MockProvider(BookingFormService, {
                    options: signal({ type: 'desk', group: false }),
                    features: signal([]),
                    setOptions: set_options,
                    setUserValues: set_user_values,
                    setFeature: vi.fn(),
                    model,
                    get auto_allocation() {
                        return !!settings['app.desks.auto_allocation'];
                    },
                } as any),
            ],
        });
        spectator.setInput('model_input', model);
    });

    it('should expose the writable model from the model_input', () => {
        expect(spectator.component.model).toBe(model);
    });

    it('should delegate setOptions to the booking form service', () => {
        spectator.component.setOptions({ group: true });
        expect(set_options).toHaveBeenCalledWith({ group: true });
    });

    it('should send recurrence changes to the service as user edits', () => {
        spectator.component.onRecurrenceChange({
            recurrence_type: 'weekly',
        });
        expect(set_user_values).toHaveBeenCalledWith({
            recurrence_type: 'weekly',
        });
    });

    it('should send the first-instance date to the service as a user edit', () => {
        const date = new Date('2026-05-01T00:00:00.000Z').valueOf();
        spectator.component.onFirstInstanceChange(date);
        expect(set_user_values).toHaveBeenCalledWith({ date });
    });

    it('should send a "Require locker" change to the service as a user edit', () => {
        settings['app.desks.can_book_lockers'] = true;
        spectator.setInput('form', (() => ({})) as any);
        spectator.detectChanges();

        const checkbox = spectator.debugElement
            .queryAll(By.css('mat-checkbox'))
            .find((_) => _.nativeElement.textContent.includes('LOCKER'));
        checkbox.triggerEventHandler('ngModelChange', true);

        expect(set_user_values).toHaveBeenCalledWith({
            secondary_resource: 'locker',
        });
    });

    it('should send a start time change to the service as a user edit', () => {
        spectator.setInput('form', (() => ({})) as any);
        spectator.detectChanges();

        const date = new Date('2026-05-01T02:00:00.000Z').valueOf();
        spectator.debugElement
            .query(By.css('a-time-field'))
            .triggerEventHandler('ngModelChange', date);

        expect(set_user_values).toHaveBeenCalledWith({ date });
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

    it.each([
        [undefined, undefined, false],
        [undefined, true, true],
        [undefined, false, false],
        [true, false, true],
        [false, true, false],
        [null, true, true],
    ])(
        'should resolve has_assets with desks %s and bookings %s to %s',
        (desks, bookings, expected) => {
            settings['app.desks.has_assets'] = desks;
            settings['app.bookings.has_assets'] = bookings;
            expect(spectator.component.has_assets).toBe(expected);
        },
    );

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

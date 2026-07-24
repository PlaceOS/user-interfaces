import { inject, Injector, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { CateringOrderStateService } from '@placeos/catering';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { EventFormComponent } from '../../app/day-view/event-form.component';

describe('EventFormComponent', () => {
    let spectator: Spectator<EventFormComponent>;
    let model: EventFormService['model'];
    let form: EventFormService['form'];
    let default_value: ReturnType<EventFormService['model']>;
    const settings_values: Record<string, any> = {};
    const lookup_setting = (key: string, fallback?) =>
        key in settings_values ? settings_values[key] : fallback;
    const createComponent = createComponentFactory({
        component: EventFormComponent,
        shallow: true,
        providers: [
            MockProvider(SettingsService as any, {
                get: vi.fn((key: string) => lookup_setting(key)),
                signal: vi.fn(
                    (key: string, fallback?) => () =>
                        lookup_setting(key, fallback),
                ),
            }),
            MockProvider(CateringOrderStateService, {
                charge_codes: signal([]),
                available_menu: signal([]),
            }),
            {
                provide: EventFormService,
                useFactory: () => {
                    const ref = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    model = ref.model;
                    form = ref.form;
                    if (!default_value) default_value = model();
                    return {
                        is_multiday: false,
                        model: ref.model,
                        form: ref.form,
                        can_notify_new_attendees_only: signal(false),
                        notify_new_attendees_only: signal(false),
                    } as any;
                },
            },
            MockProvider(OrganisationService as any, {
                building: { timezone: '' },
            }),
        ],
        imports: [MatFormFieldModule, MatInputModule, FormsModule],
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        spectator = createComponent();
        model.set(default_value);
        form().reset();
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow selecting spaces', async () => {
        spectator.setInput({ form });
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect('space-list-field').toExist();
    });

    it('should hide attendees when the setting is enabled', async () => {
        settings_values['app.events.hide_attendees'] = true;
        spectator.setInput({ form });
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect('a-user-list-field').not.toExist();
    });

    it('should show the notification option beside attendee edits', async () => {
        spectator.setInput({ form });
        (spectator.component.can_notify_new_attendees_only as any).set(true);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(
            spectator.query('[name="notify-new-attendees-only"]'),
        ).toExist();
    });

    it('should only show setup and breakdown fields when enabled', async () => {
        spectator.setInput({ form });
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(spectator.query('label[for="setup"]')).toBeNull();
        expect(spectator.query('label[for="breakdown"]')).toBeNull();

        settings_values['app.events.allow_setup_breakdown'] = true;
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(spectator.query('label[for="setup"]')).toExist();
        expect(spectator.query('label[for="breakdown"]')).toExist();
    });

    it('should hide the availability action', async () => {
        spectator.setInput({ form });
        spectator.detectChanges();
        await spectator.fixture.whenStable();

        expect(
            spectator.query('[name="find-attendee-availability"]'),
        ).toBeNull();
    });
});

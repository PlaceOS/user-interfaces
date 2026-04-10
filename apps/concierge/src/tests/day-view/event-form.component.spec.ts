import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { CateringOrderStateService } from '@placeos/catering';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { EventFormComponent } from '../../app/day-view/event-form.component';

describe('EventFormComponent', () => {
    let spectator: Spectator<EventFormComponent>;
    const settings_values: Record<string, any> = {};
    const lookup_setting = (key: string, fallback?) =>
        key in settings_values ? settings_values[key] : fallback;
    const createComponent = createComponentFactory({
        component: EventFormComponent,
        shallow: true,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => lookup_setting(key)),
                signal: jest.fn(
                    (key: string, fallback?) => () =>
                        lookup_setting(key, fallback),
                ),
            }),
            MockProvider(CateringOrderStateService, {
                charge_codes: of([]),
                available_menu: of([]),
            }),
            MockProvider(EventFormService, { is_multiday: false }),
            MockProvider(OrganisationService, { building: { timezone: '' } }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow selecting spaces', async () => {
        spectator.setInput({ form: generateEventForm() });
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect('space-list-field').toExist();
    });

    it('should hide attendees when the setting is enabled', async () => {
        settings_values['app.events.hide_attendees'] = true;
        spectator.setInput({ form: generateEventForm() });
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect('a-user-list-field').not.toExist();
    });

    it('should only show setup and breakdown fields when enabled', async () => {
        spectator.setInput({ form: generateEventForm() });
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
        spectator.setInput({ form: generateEventForm() });
        spectator.detectChanges();
        await spectator.fixture.whenStable();

        expect(
            spectator.query('[name="find-attendee-availability"]'),
        ).toBeNull();
    });
});

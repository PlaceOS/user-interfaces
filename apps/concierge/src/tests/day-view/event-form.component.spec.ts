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
    const createComponent = createComponentFactory({
        component: EventFormComponent,
        shallow: true,
        providers: [
            MockProvider(SettingsService, { get: jest.fn() }),
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
        spectator = createComponent();
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(() => false);
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
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation((key: string) =>
            key === 'app.events.hide_attendees' ? true : false,
        );
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

        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation((key: string) =>
            key === 'app.events.allow_setup_breakdown' ? true : false,
        );
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

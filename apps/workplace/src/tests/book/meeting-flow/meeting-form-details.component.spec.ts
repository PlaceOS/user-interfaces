import { inject, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    currentUser,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    EventFormService,
    generateEventForm,
    type EventFormRef,
} from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { MockProvider } from 'ng-mocks';

import { MeetingFormDetailsComponent } from 'libs/events/src/lib/meeting-form-details.component';

describe('MeetingFormDetailsComponent', () => {
    let spectator: Spectator<MeetingFormDetailsComponent>;
    const settings_values: Record<string, any> = {};
    const store_form = vi.fn();
    let form_ref: EventFormRef;
    const lookup_setting = (key: string, fallback?) =>
        key in settings_values ? settings_values[key] : fallback;
    const createComponent = createRoutingFactory({
        component: MeetingFormDetailsComponent,
        providers: [
            MockProvider(SettingsService as any, {
                get: vi.fn((key: string) => lookup_setting(key)),
                signal: vi.fn(
                    (key: string, fallback?) => () =>
                        lookup_setting(key, fallback),
                ),
            }),
            MockProvider(OrganisationService as any, {
                building: { timezone: '' },
            }),
            {
                provide: EventFormService,
                useFactory: () => {
                    form_ref = generateEventForm(
                        {
                            host: 'selected@example.com',
                            title: '',
                            organiser: { email: 'selected@example.com' },
                            user: { email: 'selected@example.com' },
                            creator: 'selected@example.com',
                            calendar: 'selected@example.com',
                            all_day: false,
                            visibility: 'normal',
                        } as any,
                        undefined,
                        inject(Injector),
                    );
                    return {
                        is_multiday: false,
                        storeForm: store_form,
                        form: form_ref.form,
                        model: form_ref.model,
                    } as Partial<EventFormService>;
                },
            },
        ],
        declarations: [
            mockComponent(DateFieldComponent),
            mockComponent(TimeFieldComponent),
            mockComponent(DurationFieldComponent),
            mockComponent(HostSelectFieldComponent),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            FormsModule,
        ],
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        spectator = createComponent();
        spectator.setInput({ form: form_ref.form });
        store_form.mockClear();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow for input of title', () =>
        expect(spectator.query('input#title')).toExist());

    it('should allow for setting the date', () =>
        expect(spectator.query('#date')).toExist());

    it('should allow for setting the start time', () =>
        expect(spectator.query('[name="start-time"]')).toExist());

    it('should allow for setting the duration', () =>
        expect(spectator.query('#end-time')).toExist());

    it('should allow customising the max duration', () => {
        expect(spectator.component.max_duration()).toBe(480);
        settings_values['events.max_duration'] = 240;
        expect(spectator.component.max_duration()).toBe(240);
    });

    it('should persist host reset after invalid book-as selection', () => {
        (spectator.component as any)._resetHostToCurrentUser();
        expect(spectator.component.model().host).toBe(currentUser().email);
        expect(spectator.component.model().organiser.email).toBe(
            currentUser().email,
        );
        expect(store_form).toHaveBeenCalledTimes(1);
    });
});

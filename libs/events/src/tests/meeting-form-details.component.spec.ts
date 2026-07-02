import { Injector, signal, WritableSignal } from '@angular/core';
import { inject } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    currentUser,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { generateEventForm } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { EventFormService } from '../lib/event-form.service';
import { MeetingFormDetailsComponent } from '../lib/meeting-form-details.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    currentUser: jest.fn(),
}));

jest.mock('../lib/calendar.fn');

import * as calendar_fn from '../lib/calendar.fn';

describe('MeetingFormDetailsComponent', () => {
    let spectator: Spectator<MeetingFormDetailsComponent>;
    const setting_signals: Record<string, WritableSignal<any>> = {};
    const me = { email: 'me@place.tech', name: 'Me' } as any;

    const createComponent = createComponentFactory({
        component: MeetingFormDetailsComponent,
        providers: [
            MockProvider(SettingsService, {
                signal: jest.fn(
                    (key: string, default_value: any) =>
                        (setting_signals[key] ??= signal(default_value)),
                ) as any,
            }),
            MockProvider(OrganisationService, {
                building: { timezone: 'Australia/Sydney' } as any,
            }),
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    return {
                        model,
                        form,
                        is_multiday: false,
                        storeForm: jest.fn(),
                    } as Partial<EventFormService>;
                },
            },
        ],
        detectChanges: false,
    });

    const flush = async () => {
        spectator.detectChanges();
        await new Promise((resolve) => setTimeout(resolve));
        spectator.detectChanges();
    };

    beforeEach(() => {
        jest.clearAllMocks();
        for (const key in setting_signals) delete setting_signals[key];
        jest.mocked(currentUser).mockReturnValue(me);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should skip permission checks when booking for anyone is disabled', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'other@place.tech' } as any,
        }));
        await flush();
        expect(calendar_fn.queryCalendarPermission).not.toHaveBeenCalled();
    });

    it('should skip permission checks for the current user', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'ME@place.tech' } as any,
        }));
        await flush();
        expect(calendar_fn.queryCalendarPermission).not.toHaveBeenCalled();
    });

    it('should keep the selected host when they have shared their calendar', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        (calendar_fn.queryCalendarPermission as jest.Mock).mockResolvedValue({
            has_access: true,
            role: 'write',
        });
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'other@place.tech' } as any,
        }));
        await flush();
        expect(calendar_fn.queryCalendarPermission).toHaveBeenCalledWith(
            'other@place.tech',
        );
        expect(spectator.component.permission_error()).toBe('');
        expect(spectator.component.model().organiser.email).toBe(
            'other@place.tech',
        );
    });

    it('should reset the host when calendar permissions are missing', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        (calendar_fn.queryCalendarPermission as jest.Mock).mockResolvedValue({
            has_access: false,
            role: 'read',
            can_edit: false,
        });
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'other@place.tech' } as any,
        }));
        await flush();
        expect(spectator.component.permission_error()).toContain(
            'other@place.tech',
        );
        expect(spectator.component.model().organiser).toBe(me);
        expect(spectator.component.model().host).toBe(me.email);
    });

    it('should reset the host when the permission check fails', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        (calendar_fn.queryCalendarPermission as jest.Mock).mockRejectedValue(
            'error',
        );
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'other@place.tech' } as any,
        }));
        await flush();
        expect(spectator.component.permission_error()).toContain(
            'other@place.tech',
        );
        expect(spectator.component.model().organiser).toBe(me);
    });

    it('should only allow recurrence for events up to a day long', () => {
        setting_signals['events.allow_recurrence'].set(true);
        spectator.component.model.update((m) => ({ ...m, duration: 60 }));
        expect(spectator.component.allow_recurrence()).toBe(true);
        spectator.component.model.update((m) => ({
            ...m,
            duration: 25 * 60,
        }));
        expect(spectator.component.allow_recurrence()).toBe(false);
    });

    it('should use the building timezone when enabled', () => {
        expect(spectator.component.timezone()).toBe('');
        setting_signals['events.use_building_timezone'].set(true);
        expect(spectator.component.timezone()).toBe('Australia/Sydney');
    });

    it('should provide duration info for same day end times', () => {
        const date = new Date().setHours(12, 0, 0, 0);
        spectator.component.model.update((m) => ({ ...m, date }));
        expect(
            spectator.component.duration_info(date + 90 * 60 * 1000),
        ).toContain('(');
        const next_day = date + 26 * 60 * 60 * 1000;
        expect(spectator.component.duration_info(next_day)).toBe('');
    });

    it('should update the form date when the first recurrence instance changes', () => {
        spectator.component.onFirstInstanceChange(123456);
        expect(spectator.component.model().date).toBe(123456);
    });
});

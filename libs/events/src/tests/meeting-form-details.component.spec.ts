import { inject, Injector, signal, WritableSignal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    CalendarEvent,
    OrganisationService,
    setCurrentUser,
    SettingsService,
    User,
} from '@placeos/common';
import { mockReply } from '@placeos/ts-client/compat';
import { calendars } from '@placeos/ts-client/staff';
import { MockProvider } from 'ng-mocks';
import { generateEventForm } from '../lib/event-form';
import { EventFormService } from '../lib/event-form.service';
import { MeetingFormDetailsComponent } from '../lib/meeting-form-details.component';

// The real queryCalendarPermission runs; only the staff operation beneath it
// is stubbed. The API document has only `can_edit` for the permission.
vi.mock('@placeos/ts-client/staff', { spy: true });

/** Permission reply of the staff API */
const permission = (can_edit: boolean) => mockReply({ can_edit });

describe('MeetingFormDetailsComponent', () => {
    let spectator: Spectator<MeetingFormDetailsComponent>;
    const setting_signals: Record<string, WritableSignal<any>> = {};
    const me = { email: 'me@place.tech', name: 'Me' } as any;
    let event: CalendarEvent;

    const createComponent = createComponentFactory({
        component: MeetingFormDetailsComponent,
        providers: [
            MockProvider(SettingsService, {
                signal: vi.fn(
                    (key: string, default_value: any) =>
                        (setting_signals[key] ??= signal(default_value)),
                ),
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
                        get event() {
                            return event;
                        },
                        model,
                        form,
                        is_multiday: false,
                        storeForm: vi.fn(),
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
        vi.clearAllMocks();
        for (const key in setting_signals) delete setting_signals[key];
        setCurrentUser(me);
        event = new CalendarEvent();
        vi.mocked(calendars.checkPermission).mockResolvedValue(
            permission(false),
        );
        spectator = createComponent();
    });

    it('should warn when changing the host of a meeting with visitors', () => {
        setting_signals['events.can_book_for_others'].set(true);
        event = new CalendarEvent({
            id: 'meeting-1',
            host: 'original.host@place.tech',
            attendees: [
                new User({
                    email: 'visitor@example.com',
                    name: 'Visitor',
                }),
            ],
        });
        spectator.component.model.update((model) => ({
            ...model,
            id: 'meeting-1',
            host: 'new.host@place.tech',
            organiser: { email: 'new.host@place.tech' } as any,
        }));

        expect(spectator.component.show_host_change_warning()).toBe(true);
    });

    it('should warn about a host change when a meeting has no visitors', () => {
        setting_signals['events.can_book_for_others'].set(true);
        event = new CalendarEvent({
            id: 'meeting-1',
            host: 'original.host@place.tech',
            attendees: [],
        });
        spectator.component.model.update((model) => ({
            ...model,
            id: 'meeting-1',
            host: 'new.host@place.tech',
            organiser: { email: 'new.host@place.tech' } as any,
            attendees: [],
        }));

        expect(spectator.component.show_host_change_warning()).toBe(true);
    });

    it('should not warn when creating a meeting with visitors', () => {
        setting_signals['events.can_book_for_others'].set(true);
        event = new CalendarEvent({
            host: 'original.host@place.tech',
            attendees: [
                new User({
                    email: 'visitor@example.com',
                    name: 'Visitor',
                }),
            ],
        });
        spectator.component.model.update((model) => ({
            ...model,
            host: 'new.host@place.tech',
            organiser: { email: 'new.host@place.tech' } as any,
        }));

        expect(spectator.component.show_host_change_warning()).toBe(false);
    });

    it('should not warn when the host cannot be changed', () => {
        event = new CalendarEvent({
            id: 'meeting-1',
            host: 'original.host@place.tech',
        });
        spectator.component.model.update((model) => ({
            ...model,
            id: 'meeting-1',
            host: 'new.host@place.tech',
            organiser: { email: 'new.host@place.tech' } as any,
        }));

        expect(spectator.component.show_host_change_warning()).toBe(false);
    });

    it('should skip permission checks when booking for anyone is disabled', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'other@place.tech' } as any,
        }));
        await flush();
        expect(calendars.checkPermission).not.toHaveBeenCalled();
    });

    it('should skip permission checks for the current user', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'ME@place.tech' } as any,
        }));
        await flush();
        expect(calendars.checkPermission).not.toHaveBeenCalled();
    });

    it('should keep the selected host without a calendar check for native bookings', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        setting_signals['events.use_bookings'].set(true);
        vi.mocked(calendars.checkPermission).mockRejectedValue('error');
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'other@place.tech' } as any,
        }));
        await flush();
        expect(calendars.checkPermission).not.toHaveBeenCalled();
        expect(spectator.component.permission_error()).toBe('');
        expect(spectator.component.model().organiser.email).toBe(
            'other@place.tech',
        );
        expect(spectator.component.model().host).toBe('other@place.tech');
    });

    it('should keep the selected host when they have shared their calendar', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        vi.mocked(calendars.checkPermission).mockResolvedValue(
            permission(true),
        );
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'other@place.tech' } as any,
        }));
        await flush();
        expect(calendars.checkPermission).toHaveBeenCalledWith({
            user_email: 'other@place.tech',
        });
        expect(spectator.component.permission_error()).toBe('');
        expect(spectator.component.model().organiser.email).toBe(
            'other@place.tech',
        );
    });

    it('should reset the host when calendar permissions are missing', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        vi.mocked(calendars.checkPermission).mockResolvedValue(
            permission(false),
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
        expect(spectator.component.model().host).toBe(me.email);
    });

    it('should reset the host when the permission check fails', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        vi.mocked(calendars.checkPermission).mockRejectedValue('error');
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

    it('should ignore a permission result for a host that is no longer selected', async () => {
        setting_signals['events.can_book_for_anyone'].set(true);
        let denyFirstHost: (
            value: ReturnType<typeof permission>,
        ) => void = () => undefined;
        vi.mocked(calendars.checkPermission).mockImplementation((input) =>
            input.user_email === 'first@place.tech'
                ? new Promise((resolve) => (denyFirstHost = resolve))
                : Promise.resolve(permission(true)),
        );
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'first@place.tech' } as any,
        }));
        await flush();
        spectator.component.model.update((m) => ({
            ...m,
            organiser: { email: 'second@place.tech' } as any,
        }));
        await flush();

        denyFirstHost(permission(false));
        await flush();

        expect(spectator.component.permission_error()).toBe('');
        expect(spectator.component.model().organiser.email).toBe(
            'second@place.tech',
        );
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

    it('should use a selected organiser timezone for multiple rooms', async () => {
        setting_signals['events.multiple_spaces'].set(true);
        spectator.component.model.update((model) => ({
            ...model,
            timezone: 'Australia/Sydney',
            organiser: new User({
                email: 'perth@place.tech',
                extension_data: { timezone: 'Australia/Perth' },
            }),
        }));

        await flush();

        expect(spectator.component.model().timezone).toBe('Australia/Perth');
        expect(spectator.component.timezone()).toBe('Australia/Perth');
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

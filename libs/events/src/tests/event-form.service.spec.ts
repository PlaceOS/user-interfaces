import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    CalendarEvent,
    currentUser,
    OrganisationService,
    setCurrentUser,
    SettingsService,
} from '@placeos/common';
import { Subject } from 'rxjs';

import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';

import { CalendarService } from '../lib/calendar.service';
import { EventFormService } from '../lib/event-form.service';
import * as ts_client from '@placeos/ts-client';

// Only the ts-client API layer is stubbed; the real events.fn wrappers run
// (findEventClashes is steered by stubbing the ts-client `post` beneath it).
vi.mock('@placeos/ts-client', { spy: true });

describe('EventFormService', () => {
    let service: EventFormService;
    let init_spy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        sessionStorage.clear();
        // Seed a loaded user so currentUserIsLoaded() is true and the form
        // methods (newForm/loadForm) run synchronously instead of deferring.
        setCurrentUser({ email: 'host@test.com', name: 'Host' } as any);
        init_spy = vi
            .spyOn(EventFormService.prototype, 'init')
            .mockResolvedValue(undefined);

        TestBed.configureTestingModule({
            providers: [
                EventFormService,
                {
                    provide: OrganisationService,
                    useValue: {
                        building: { id: 'bld-1', timezone: 'Australia/Sydney' },
                        buildings: [{ id: 'bld-1' }],
                        building_list: signal([]),
                        active_building: signal({}),
                        active_region: signal({}),
                        initialised: signal(true),
                        organisation: { id: 'org-1' },
                        region: { id: 'reg-1' },
                    },
                },
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(() => undefined),
                        overrides: signal([]),
                    },
                },
                {
                    provide: Router,
                    useValue: {
                        events: new Subject(),
                    },
                },
                {
                    provide: AssetStateService,
                    useValue: {
                        setOptions: vi.fn(),
                    },
                },
                {
                    provide: CalendarService,
                    useValue: {
                        loadCalendars: vi.fn(),
                    },
                },
                {
                    provide: MatDialog,
                    useValue: { open: vi.fn() },
                },
            ],
        });

        vi.mocked(ts_client.showMetadata).mockReset();
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        service = TestBed.inject(EventFormService);
    });

    afterEach(() => {
        init_spy.mockRestore();
        sessionStorage.clear();
    });

    it('should use the current user as booking rule host when enabled', async () => {
        const settings = TestBed.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.events.force_current_user_for_booking_rules'
                ? true
                : undefined,
        );
        const user_pipe = (service as any)._user_pipe;
        const transform_spy = vi
            .spyOn(user_pipe, 'transform')
            .mockResolvedValue({ email: 'other@example.com' });

        const host = await (service as any)._bookingRulesHost(
            'other@example.com',
        );

        expect(host.email).toBe(currentUser().email);
        expect(transform_spy).not.toHaveBeenCalled();
    });

    it('should not make metadata requests before event data is consumed', () => {
        expect(ts_client.showMetadata).not.toHaveBeenCalled();
    });

    it('should refresh last_success when saved event has same start time', () => {
        const date = 1775527143000;
        service.last_success.set(
            new CalendarEvent({
                id: 'event-1',
                title: 'Previous booking',
                date,
                date_end: date + 30 * 60 * 1000,
            }),
        );
        sessionStorage.setItem(
            'PLACEOS.last_modified_event',
            JSON.stringify({
                id: 'event-2',
                title: 'Updated booking',
                date,
                date_end: date + 60 * 60 * 1000,
            }),
        );

        service.loadLastSuccess();

        expect(service.last_success()?.id).toBe('event-2');
        expect(service.last_success()?.title).toBe('Updated booking');
        expect(service.last_success()?.date_end).toBe(date + 60 * 60 * 1000);
    });

    it('should keep custom all-day events marked all-day in the form', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            all_day: false,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
            extension_data: { custom_all_day: true },
        });

        service.newForm(event);

        expect(service.model().all_day).toBe(true);
    });

    it('should keep custom all-day events marked all-day after reloading the form', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            all_day: false,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
            extension_data: { custom_all_day: true },
        });
        sessionStorage.setItem('PLACEOS.event', JSON.stringify(event.toJSON()));

        service.loadForm();

        expect(service.model().all_day).toBe(true);
    });

    it('should offer attendee-only notifications only when adding attendees to a room booking', async () => {
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'host@test.com',
            title: 'Team meeting',
            attendees: [{ email: 'existing@test.com' } as any],
            resources: [
                {
                    id: 'space-1',
                    email: 'space-1@test.com',
                    zones: [],
                } as any,
            ],
        });
        service.newForm(event);
        await new Promise((resolve) => setTimeout(resolve));

        expect(service.can_notify_new_attendees_only()).toBe(false);

        service.model.update((model) => ({
            ...model,
            attendees: [...model.attendees, { email: 'new.attendee@test.com' }],
        }));
        expect(service.can_notify_new_attendees_only()).toBe(true);

        service.model.update((model) => ({
            ...model,
            title: 'Normalised team meeting',
        }));
        expect(service.can_notify_new_attendees_only()).toBe(false);

        service.model.update((model) => ({
            ...model,
            title: 'Team meeting',
        }));
        expect(service.can_notify_new_attendees_only()).toBe(true);

        service.model.update((model) => ({
            ...model,
            attendees: model.attendees.filter(
                (_) => _.email !== 'existing@test.com',
            ),
        }));
        expect(service.can_notify_new_attendees_only()).toBe(false);

        service.model.update((model) => ({
            ...model,
            attendees: model.attendees.filter(
                (_) => _.email !== 'new.attendee@test.com',
            ),
        }));
        expect(service.can_notify_new_attendees_only()).toBe(false);
    });

    it('should offer attendee-only notifications after the form syncs a one-off event', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'host@test.com',
            title: 'Team meeting',
            date: new Date(2028, 5, 15, 10).valueOf(),
            duration: 60,
            attendees: [{ email: 'existing@test.com' } as any],
            resources: [
                {
                    id: 'space-1',
                    email: 'space-1@test.com',
                    zones: [],
                } as any,
            ],
        });

        service.newForm(event);
        // Let the form's field-sync effects run - seeding the date must not
        // invent a recurrence on a non-recurring event.
        TestBed.tick();
        service.model.update((model) => ({
            ...model,
            attendees: [...model.attendees, { email: 'new.attendee@test.com' }],
        }));

        expect(service.model().recurrence).toEqual({});
        expect(service.can_notify_new_attendees_only()).toBe(true);
    });

    it('should preserve attendee-only notification eligibility after reloading the form', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'host@test.com',
            title: 'Team meeting',
            attendees: [{ email: 'existing@test.com' } as any],
            resources: [
                {
                    id: 'space-1',
                    email: 'space-1@test.com',
                    zones: [],
                } as any,
            ],
        });
        service.newForm(event);
        service.model.update((model) => ({
            ...model,
            attendees: [...model.attendees, { email: 'new.attendee@test.com' }],
        }));
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify(service.model()),
        );

        service.loadForm();

        expect(service.can_notify_new_attendees_only()).toBe(true);
    });

    it('should ignore derived and re-hydrated fields when checking for other changes', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'host@test.com',
            title: 'Team meeting',
            date: new Date(2028, 5, 15, 10, 14, 0, 0).valueOf(),
            duration: 60,
            attendees: [{ email: 'existing@test.com' } as any],
            resources: [
                { id: 'space-1', email: 'space-1@test.com', zones: [] } as any,
            ],
        });
        service.newForm(event);

        // The form rounds the derived end time up and the space list is
        // re-hydrated with the full space details, neither of which is a
        // booking detail the user changed.
        service.model.update((model) => ({
            ...model,
            date_end: model.date_end + 60 * 1000,
            resources: [
                {
                    id: 'space-1',
                    email: 'space-1@test.com',
                    name: 'Space 1',
                    capacity: 8,
                    zones: ['zone-1'],
                } as any,
            ],
            attendees: [...model.attendees, { email: 'new.attendee@test.com' }],
        }));
        expect(service.can_notify_new_attendees_only()).toBe(true);

        // Swapping the booked room is a change to the booking though.
        service.model.update((model) => ({
            ...model,
            resources: [
                { id: 'space-2', email: 'space-2@test.com', zones: [] } as any,
            ],
        }));
        expect(service.can_notify_new_attendees_only()).toBe(false);
    });

    it('should suppress existing attendee notifications for attendee-only edits', async () => {
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'host@test.com',
            creator: 'host@test.com',
            title: 'Team meeting',
            date: new Date(2028, 5, 15, 10).valueOf(),
            duration: 60,
            attendees: [{ email: 'existing@test.com' } as any],
            resources: [
                {
                    id: 'space-1',
                    email: 'space-1@test.com',
                    zones: [],
                } as any,
            ],
        });
        const perform_booking_spy = vi
            .spyOn(service as any, '_performBooking')
            .mockResolvedValue(event);
        service.newForm(event);
        service.model.update((model) => ({
            ...model,
            attendees: [...model.attendees, { email: 'new.attendee@test.com' }],
        }));
        service.notify_new_attendees_only.set(true);

        await service.postForm(true);

        expect(perform_booking_spy).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ notify_existing_attendees: false }),
        );
    });

    it('should notify existing attendees when another booking detail changes', async () => {
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'host@test.com',
            creator: 'host@test.com',
            title: 'Team meeting',
            date: new Date(2028, 5, 15, 10).valueOf(),
            duration: 60,
            attendees: [{ email: 'existing@test.com' } as any],
            resources: [
                {
                    id: 'space-1',
                    email: 'space-1@test.com',
                    zones: [],
                } as any,
            ],
        });
        const perform_booking_spy = vi
            .spyOn(service as any, '_performBooking')
            .mockResolvedValue(event);
        service.newForm(event);
        service.model.update((model) => ({
            ...model,
            title: 'Updated team meeting',
            attendees: [...model.attendees, { email: 'new.attendee@test.com' }],
        }));
        service.notify_new_attendees_only.set(true);

        await service.postForm(true);

        expect(perform_booking_spy).toHaveBeenCalledWith(
            expect.anything(),
            expect.not.objectContaining({
                notify_existing_attendees: false,
            }),
        );
    });

    it('should allow multiday events ending exactly at the bookable-hours end', async () => {
        const settings = TestBed.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.events.bookable_hours'
                ? { start: 9, end: 17 }
                : undefined,
        );
        const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
        const end = new Date(2028, 5, 16, 17, 0, 0, 0).valueOf();
        const perform_booking_spy = vi
            .spyOn(service as any, '_performBooking')
            .mockResolvedValue(
                new CalendarEvent({
                    id: 'event-1',
                    host: 'host@test.com',
                    organiser: { email: 'host@test.com' } as any,
                    creator: 'host@test.com',
                    title: 'Boundary booking',
                    date: start,
                    duration: Math.round((end - start) / 60000),
                    date_end: end,
                    attendees: [],
                    resources: [],
                }),
            );

        service.newForm();
        service.model.update((m) => ({
            ...m,
            host: 'host@test.com',
            organiser: { email: 'host@test.com' } as any,
            creator: 'host@test.com',
            title: 'Boundary booking',
            date: start,
            duration: Math.round((end - start) / 60000),
            date_end: end,
            attendees: [],
            resources: [],
        }));

        await expect(service.postForm(true)).resolves.toMatchObject({
            id: 'event-1',
            title: 'Boundary booking',
        });
        expect(perform_booking_spy).toHaveBeenCalled();
    });

    it('should keep the submitted time when the saved event response is stale', async () => {
        const stale_start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
        const submitted_start = new Date(2028, 5, 16, 16, 0, 0, 0).valueOf();
        const submitted_end = new Date(2028, 5, 16, 17, 0, 0, 0).valueOf();
        sessionStorage.setItem(
            'PLACEOS.last_modified_event',
            JSON.stringify({
                id: 'previous-event',
                title: 'Previous booking',
                event_start: Math.floor(stale_start / 1000),
                event_end: Math.floor((stale_start + 30 * 60 * 1000) / 1000),
            }),
        );
        vi.spyOn(service as any, '_performBooking').mockResolvedValue(
            new CalendarEvent({
                id: 'event-1',
                host: 'host@test.com',
                organiser: { email: 'host@test.com' } as any,
                creator: 'host@test.com',
                title: 'Moved booking',
                event_start: Math.floor(stale_start / 1000),
                event_end: Math.floor((stale_start + 30 * 60 * 1000) / 1000),
                attendees: [],
                resources: [],
            }),
        );

        service.newForm();
        service.model.update((m) => ({
            ...m,
            host: 'host@test.com',
            organiser: { email: 'host@test.com' } as any,
            creator: 'host@test.com',
            title: 'Moved booking',
            date: submitted_start,
            duration: 60,
            date_end: submitted_end,
            attendees: [],
            resources: [],
        }));

        const result = await service.postForm(true);
        const last_success = JSON.parse(
            sessionStorage.getItem('PLACEOS.last_modified_event'),
        );

        expect(result.date).toBe(submitted_start);
        expect(result.date_end).toBe(submitted_end);
        expect(service.last_success()?.id).toBe('event-1');
        expect(service.last_success()?.date).toBe(submitted_start);
        expect(service.last_success()?.date_end).toBe(submitted_end);
        expect(last_success.event_start).toBe(
            Math.floor(submitted_start / 1000),
        );
        expect(last_success.event_end).toBe(Math.floor(submitted_end / 1000));
    });

    it('should post the selected time after reloading a new meeting form', async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2028, 5, 15, 13, 25, 0, 0));
        try {
            const submitted_start = new Date(
                2028,
                5,
                16,
                16,
                0,
                0,
                0,
            ).valueOf();
            const submitted_end = new Date(
                2028,
                5,
                16,
                17,
                0,
                0,
                0,
            ).valueOf();
            const perform_booking_spy = vi
                .spyOn(service as any, '_performBooking')
                .mockResolvedValue(
                    new CalendarEvent({
                        id: 'event-1',
                        title: 'Selected slot',
                        attendees: [],
                        resources: [],
                    }),
                );
            sessionStorage.setItem(
                'PLACEOS.event_form',
                JSON.stringify({
                    host: 'host@test.com',
                    organiser: { email: 'host@test.com' },
                    creator: 'host@test.com',
                    title: 'Selected slot',
                    date: submitted_start,
                    duration: 60,
                    date_end: submitted_end,
                    attendees: [],
                    resources: [],
                }),
            );

            service.loadForm();
            await service.postForm(true);
            const posted_event = perform_booking_spy.mock
                .calls[0][0] as CalendarEvent;
            const posted_json = posted_event.toJSON();

            expect(posted_json.event_start).toBe(
                Math.floor(submitted_start / 1000),
            );
            expect(posted_json.event_end).toBe(
                Math.floor(submitted_end / 1000),
            );
        } finally {
            vi.useRealTimers();
        }
    });

    it('should use the original calendar when changing host on an existing room booking', async () => {
        const current_user = currentUser();
        const new_host = 'new.host@example.com';
        const date = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
        const event = new CalendarEvent({
            id: 'event-1',
            host: current_user.email,
            calendar: current_user.email,
            creator: current_user.email,
            title: 'Host change test',
            date,
            duration: 60,
            attendees: [],
            resources: [
                {
                    id: 'space-1',
                    email: 'space-1@example.com',
                    name: 'Boardroom',
                    zones: ['bld-1'],
                } as any,
            ],
        });
        const perform_booking_spy = vi
            .spyOn(service as any, '_performBooking')
            .mockResolvedValue(
                new CalendarEvent({
                    id: 'event-1',
                    host: new_host,
                    calendar: new_host,
                    creator: current_user.email,
                    title: 'Host change test',
                    date,
                    duration: 60,
                    attendees: [],
                    resources: event.resources,
                }),
            );

        service.newForm(event);
        service.model.update((m) => ({
            ...m,
            host: new_host,
            organiser: { email: new_host, name: 'New Host' } as any,
        }));

        await expect(service.postForm(true)).resolves.toBeTruthy();
        expect(perform_booking_spy).toHaveBeenCalledWith(
            expect.objectContaining({ host: new_host }),
            expect.objectContaining({
                calendar: current_user.email,
                system_id: 'space-1',
            }),
        );
    });

    it('should clear saved host changes after a permission error', async () => {
        const current_user = currentUser();
        const perform_booking_spy = vi
            .spyOn(service as any, '_performBooking')
            .mockRejectedValue({ status: 403, error: 'Forbidden' });

        service.newForm();
        service.model.update((m) => ({
            ...m,
            host: 'unauthorised.user@example.com',
            organiser: {
                email: 'unauthorised.user@example.com',
                name: 'Unauthorised User',
            } as any,
            creator: 'unauthorised.user@example.com',
            calendar: 'unauthorised.user@example.com',
            title: 'Permission test',
            date: new Date(2028, 5, 15, 10, 0, 0, 0).valueOf(),
            duration: 60,
            attendees: [],
            resources: [],
        }));
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify(service.model()),
        );

        await expect(service.postForm(true)).rejects.toMatchObject({
            status: 403,
            error: 'Forbidden',
        });

        const saved_form = JSON.parse(
            sessionStorage.getItem('PLACEOS.event_form'),
        );
        expect(perform_booking_spy).toHaveBeenCalled();
        expect(saved_form.host).toBe(current_user.email);
        expect(saved_form.organiser.email).toBe(current_user.email);
        expect(saved_form.calendar).toBe(current_user.email);
        expect(service.model().host).toBe(current_user.email);
    });

    it('should preserve the original start time for in-progress bookings', async () => {
        const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
        const end = new Date(2028, 5, 15, 11, 0, 0, 0).valueOf();
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'host@test.com',
            calendar: 'host@test.com',
            organiser: { email: 'host@test.com' } as any,
            creator: 'host@test.com',
            title: 'Standup',
            date: start,
            date_end: end,
            attendees: [],
            resources: [],
        });
        Object.defineProperty(event, 'state', { value: 'started' });
        const perform_booking_spy = vi
            .spyOn(service as any, '_performBooking')
            .mockResolvedValue(
                new CalendarEvent({
                    id: 'event-1',
                    host: 'host@test.com',
                    calendar: 'host@test.com',
                    organiser: { email: 'host@test.com' } as any,
                    creator: 'host@test.com',
                    title: 'Updated standup',
                    date: start,
                    date_end: end,
                    attendees: [],
                    resources: [],
                }),
            );

        service.newForm(event);
        service.model.update((m) => ({
            ...m,
            host: 'host@test.com',
            calendar: 'host@test.com',
            creator: 'host@test.com',
            title: 'Updated standup',
        }));

        expect(service.form.date().disabled()).toBe(true);

        await expect(service.postForm(true)).resolves.toBeTruthy();
        expect(perform_booking_spy).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 'event-1',
                date: start,
            }),
            expect.anything(),
        );
    });

    it('should post current-day all-day meetings from the all-day period start', async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2028, 5, 15, 10, 2, 0, 0));
        try {
            const settings = TestBed.inject(SettingsService) as any;
            settings.get.mockImplementation((key: string) =>
                key === 'app.events.all_day_period'
                    ? { start: 9, end: 17 }
                    : undefined,
            );
            const perform_booking_spy = vi
                .spyOn(service as any, '_performBooking')
                .mockResolvedValue(
                    new CalendarEvent({
                        id: 'event-1',
                        host: 'host@test.com',
                        organiser: { email: 'host@test.com' } as any,
                        creator: 'host@test.com',
                        title: 'All day meeting',
                        date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
                        duration: 480,
                        date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
                        attendees: [],
                        resources: [],
                    }),
                );

            service.newForm();
            service.model.update((m) => ({
                ...m,
                host: 'host@test.com',
                organiser: { email: 'host@test.com' } as any,
                creator: 'host@test.com',
                title: 'All day meeting',
                date: new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
                attendees: [],
                resources: [],
            }));
            service.model.update((m) => ({ ...m, all_day: true }));

            await expect(service.postForm(true)).resolves.toBeTruthy();
            expect(perform_booking_spy).toHaveBeenCalledWith(
                expect.objectContaining({
                    all_day: true,
                    date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
                    duration: 480,
                    date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
                }),
                expect.anything(),
            );
        } finally {
            vi.useRealTimers();
        }
    });

    it('should fetch and enforce booking rules on demand when not preloaded', async () => {
        // The booking panel submits bookings before the reactive rules
        // resource has loaded, so the rules metadata must be fetched on
        // demand and still block hidden rooms.
        vi.mocked(ts_client.showMetadata).mockResolvedValueOnce({
            details: [{ zone: '*', conditions: {}, rules: { hidden: true } }],
        } as any);
        const space = {
            id: 'space-1',
            email: 'space-1@example.com',
            name: 'Boardroom',
            zones: ['bld-1'],
        } as any;

        await expect(
            (service as any)._checkResourceRules(
                [space],
                new Date(2028, 5, 15, 10, 0, 0, 0).valueOf(),
                60,
                currentUser().email,
            ),
        ).rejects.toBeTruthy();
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-1',
            'room_booking_rules',
        );
    });

    it('should allow bookings when on-demand rules do not hide the room', async () => {
        vi.mocked(ts_client.showMetadata).mockResolvedValueOnce({
            details: [{ zone: '*', conditions: {}, rules: { hidden: false } }],
        } as any);
        const space = {
            id: 'space-1',
            email: 'space-1@example.com',
            name: 'Boardroom',
            zones: ['bld-1'],
        } as any;

        await expect(
            (service as any)._checkResourceRules(
                [space],
                new Date(2028, 5, 15, 10, 0, 0, 0).valueOf(),
                60,
                currentUser().email,
            ),
        ).resolves.toBe(true);
    });

    it('should block recurring room bookings that clash by default', async () => {
        const date = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
        // Real findEventClashes runs; stub the ts-client POST beneath it so
        // it returns a clash on a later instance (not the first one).
        vi.mocked(ts_client.post).mockResolvedValue([
            {
                asset_id: 'space-1',
                booking_start: Math.floor(date / 1000) + 24 * 60 * 60,
                booking_end: Math.floor(date / 1000) + 24 * 60 * 60 + 60 * 60,
            },
        ] as any);

        await expect(
            (service as any)._checkRecurringClashes({
                id: 'event-1',
                date,
                duration: 60,
                recurring: true,
                resources: [
                    {
                        id: 'space-1',
                        email: 'space-1@example.com',
                        name: 'Boardroom',
                        zones: ['bld-1'],
                    },
                ],
                toJSON: () => ({ id: 'event-1', date, duration: 60 }),
            } as any),
        ).rejects.toBeTruthy();
        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringContaining('clashing-assets'),
            expect.anything(),
        );
        expect(TestBed.inject(MatDialog).open).not.toHaveBeenCalled();
    });
});

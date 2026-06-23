import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    CalendarEvent,
    currentUser,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { Subject } from 'rxjs';

import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';

import { CalendarService } from '../lib/calendar.service';
import { EventFormService } from '../lib/event-form.service';
import * as events_fn from '../lib/events.fn';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(() => Promise.resolve({ details: [] })),
}));

jest.mock('../lib/events.fn', () => ({
    ...jest.requireActual('../lib/events.fn'),
    findEventClashes: jest.fn(),
}));

describe('EventFormService', () => {
    let service: EventFormService;
    let init_spy: jest.SpiedFunction<EventFormService['init']>;

    beforeEach(() => {
        sessionStorage.clear();
        init_spy = jest
            .spyOn(EventFormService.prototype, 'init')
            .mockResolvedValue(undefined);

        TestBed.configureTestingModule({
            providers: [
                EventFormService,
                {
                    provide: OrganisationService,
                    useValue: {
                        building: { id: 'bld-1', timezone: 'Australia/Sydney' },
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
                        get: jest.fn(() => undefined),
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
                        setOptions: jest.fn(),
                    },
                },
                {
                    provide: CalendarService,
                    useValue: {
                        loadCalendars: jest.fn(),
                    },
                },
                {
                    provide: MatDialog,
                    useValue: { open: jest.fn() },
                },
            ],
        });

        jest.mocked(ts_client.showMetadata).mockClear();
        service = TestBed.inject(EventFormService);
        jest.mocked(events_fn.findEventClashes).mockReset();
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
        const transform_spy = jest
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

    it('should allow multiday events ending exactly at the bookable-hours end', async () => {
        const settings = TestBed.inject(SettingsService) as any;
        settings.get.mockImplementation((key: string) =>
            key === 'app.events.bookable_hours'
                ? { start: 9, end: 17 }
                : undefined,
        );
        const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
        const end = new Date(2028, 5, 16, 17, 0, 0, 0).valueOf();
        const perform_booking_spy = jest
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
        const perform_booking_spy = jest
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
        const perform_booking_spy = jest
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
        const perform_booking_spy = jest
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

    it('should clamp current-day all-day meetings before posting', async () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2028, 5, 15, 10, 2, 0, 0));
        try {
            const settings = TestBed.inject(SettingsService) as any;
            settings.get.mockImplementation((key: string) =>
                key === 'app.events.all_day_period'
                    ? { start: 9, end: 17 }
                    : undefined,
            );
            const perform_booking_spy = jest
                .spyOn(service as any, '_performBooking')
                .mockResolvedValue(
                    new CalendarEvent({
                        id: 'event-1',
                        host: 'host@test.com',
                        organiser: { email: 'host@test.com' } as any,
                        creator: 'host@test.com',
                        title: 'All day meeting',
                        date: new Date(2028, 5, 15, 10, 5, 0, 0).valueOf(),
                        duration: 415,
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
                    date: new Date(2028, 5, 15, 10, 5, 0, 0).valueOf(),
                    duration: 415,
                    date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
                }),
                expect.anything(),
            );
        } finally {
            jest.useRealTimers();
        }
    });

    it('should block recurring room bookings that clash by default', async () => {
        const date = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
        jest.mocked(events_fn.findEventClashes).mockReturnValue(
            Promise.resolve([
                {
                    asset_id: 'space-1',
                    booking_start: Math.floor(date / 1000) + 24 * 60 * 60,
                    booking_end:
                        Math.floor(date / 1000) + 24 * 60 * 60 + 60 * 60,
                },
            ]) as any,
        );

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
                ] as any,
            } as any),
        ).rejects.toBeTruthy();
        expect(events_fn.findEventClashes).toHaveBeenCalled();
        expect(TestBed.inject(MatDialog).open).not.toHaveBeenCalled();
    });
});

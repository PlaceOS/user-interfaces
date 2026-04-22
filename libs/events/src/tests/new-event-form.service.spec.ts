import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { BehaviorSubject, Subject } from 'rxjs';

import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';

import { EventFormService } from '../lib/new-event-form.service';

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
                        building_list: new BehaviorSubject([]),
                        active_building: new BehaviorSubject({}),
                        active_region: new BehaviorSubject({}),
                        initialised: new BehaviorSubject(true),
                        organisation: { id: 'org-1' },
                        region: { id: 'reg-1' },
                    },
                },
                {
                    provide: SettingsService,
                    useValue: {
                        get: jest.fn(() => undefined),
                        overrides$: new BehaviorSubject([]),
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
                    provide: MatDialog,
                    useValue: { open: jest.fn() },
                },
            ],
        });

        service = TestBed.inject(EventFormService);
    });

    afterEach(() => {
        init_spy.mockRestore();
        sessionStorage.clear();
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

        expect(service.form.getRawValue().all_day).toBe(true);
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

        expect(service.form.getRawValue().all_day).toBe(true);
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
        service.form.patchValue({
            host: 'host@test.com',
            organiser: { email: 'host@test.com' },
            creator: 'host@test.com',
            title: 'Boundary booking',
            date: start,
            duration: Math.round((end - start) / 60000),
            date_end: end,
            attendees: [],
            resources: [],
        });

        await expect(service.postForm(true)).resolves.toBeTruthy();
        expect(perform_booking_spy).toHaveBeenCalled();
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
        service.form.patchValue({
            host: 'host@test.com',
            calendar: 'host@test.com',
            creator: 'host@test.com',
            title: 'Updated standup',
        });

        expect(service.form.get('date')?.disabled).toBe(true);

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
            service.form.patchValue({
                host: 'host@test.com',
                organiser: { email: 'host@test.com' },
                creator: 'host@test.com',
                title: 'All day meeting',
                date: new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
                attendees: [],
                resources: [],
            });
            service.form.controls.all_day.setValue(true);

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
});

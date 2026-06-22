import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { PaymentsService } from '@placeos/payments';
import { of, Subject } from 'rxjs';

import { Booking, currentUser, OrganisationService } from '@placeos/common';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { CalendarService } from 'libs/events/src/lib/calendar.service';
import { BookingFormService } from '../lib/booking-form.service';
import * as booking_utility_mod from '../lib/booking.utilities';
import * as booking_mod from '../lib/bookings.fn';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    cleanObject: jest.fn((value) => value),
    listChildMetadata: jest.fn(),
    showMetadata: jest.fn(() => Promise.resolve({ details: [] })),
    showUser: jest.fn(),
}));
jest.mock('libs/bookings/src/lib/bookings.fn');

import * as ts_client from '@placeos/ts-client';
import { endOfYear } from 'date-fns';
import { MockProvider } from 'ng-mocks';

describe('BookingFormService', () => {
    let spectator: SpectatorService<BookingFormService>;
    const createService = createServiceFactory({
        service: BookingFormService,
        providers: [
            MockProvider(Router, {
                navigate: jest.fn(),
                events: new Subject(),
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                overrides: signal([]),
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                waitUntilInitialised: () => Promise.resolve(),
                active_building: signal({ id: 'bld-1' }),
                building_list: signal([{ id: 'bld-1', parent_id: 'reg-1' }]),
                organisation: { id: 'org-1' },
                region: { id: 'reg-1' },
                building: { id: 'bld-1', parent_id: 'reg-1' },
                buildings: [{ id: 'bld-1', parent_id: 'reg-1' }],
                levelWithID: jest.fn((ids: string[]) =>
                    ids?.[0]
                        ? {
                              id: ids[0],
                              parent_id: 'bld-1',
                              map_id: 'map-lvl-1',
                          }
                        : null,
                ),
            } as any),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(PaymentsService, {
                makePayment: jest.fn(),
                enabled: true,
            }),
            // Mock the asset state service so its async `resource()`/effects do
            // not run away when effects are flushed synchronously in tests.
            MockProvider(AssetStateService, {
                getOptions: jest.fn(() => ({ date: 0 })),
                setOptions: jest.fn(),
            }),
            MockProvider(CalendarService, {
                loadCalendars: jest.fn(),
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        jest.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [{ id: 'desk-1' }, { id: 'desk-1' }],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
        spectator = createService();
        jest.mocked(ts_client.cleanObject).mockImplementation((a) => a);
        jest.spyOn(spectator.inject(SettingsService), 'get').mockImplementation(
            () => undefined,
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
        spectator?.service?.clearForm();
        sessionStorage.removeItem('PLACEOS.booking_form_filters');
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not make resource requests before booking data is consumed', () => {
        expect(ts_client.showMetadata).not.toHaveBeenCalled();
        expect(ts_client.listChildMetadata).not.toHaveBeenCalled();
    });

    it('should debounce identical booked resource queries', async () => {
        jest.mocked(booking_mod.bookedResourceList).mockResolvedValue([
            'desk-1',
        ]);
        const query = {
            period_start: 100,
            period_end: 200,
            type: 'desk' as const,
            zones: 'bld-1',
        };

        const requests = Promise.all([
            (spectator.service as any)._bookedResourceList(query),
            (spectator.service as any)._bookedResourceList(query),
        ]);

        await new Promise((resolve) => setTimeout(resolve, 250));
        expect(booking_mod.bookedResourceList).not.toHaveBeenCalled();
        await requests;
        expect(booking_mod.bookedResourceList).toHaveBeenCalledTimes(1);
    });

    it('should keep form fields bound after storeForm even when cleanObject mutates in place', () => {
        // The real `cleanObject` mutates its argument in place. `storeForm`
        // must clone the live model before cleaning it, otherwise empty keys
        // (e.g. `asset_id: ''`) get deleted out of the signal-forms model,
        // orphaning `[formField]` bindings (`field() is not a function`).
        jest.mocked(ts_client.cleanObject).mockImplementation(
            (value: any, exclude: any[] = []) => {
                for (const key of Object.keys(value || {})) {
                    if (exclude.includes(value[key])) delete value[key];
                }
                return value;
            },
        );

        spectator.service.newForm('visitor');
        spectator.service.storeForm();

        const form: any = spectator.service.form;
        expect(typeof form.asset_id).toBe('function');
        expect(form.asset_id()).toBeDefined();
        // touching/validating must not throw an orphan-field error
        expect(() => form().markAsTouched()).not.toThrow();
        expect(() => form.asset_id().valid()).not.toThrow();
        expect('asset_id' in spectator.service.model()).toBe(true);
    });

    it('should not recursively clear the form when switching booking types', () => {
        sessionStorage.setItem('PLACEOS.booking_form', '{}');
        sessionStorage.setItem(
            'PLACEOS.booking_form_filters',
            JSON.stringify({ type: 'desk' }),
        );
        const clear_form = jest.spyOn(spectator.service, 'clearForm');

        spectator.service.newForm('visitor');

        expect(clear_form).not.toHaveBeenCalled();
        const stored_form = JSON.parse(
            sessionStorage.getItem('PLACEOS.booking_form') || '{}',
        );
        const stored_filters = JSON.parse(
            sessionStorage.getItem('PLACEOS.booking_form_filters') || '{}',
        );
        expect(stored_form).toHaveProperty('asset_id');
        expect(stored_filters.type).toBe('visitor');
        expect(spectator.service.options().type).toBe('visitor');
        expect(spectator.service.form.asset_id()).toBeDefined();
    });

    it('should use the current user as booking rule host when enabled', async () => {
        (spectator.inject(SettingsService).get as jest.Mock).mockImplementation(
            (key: string) =>
                key === 'app.bookings.force_current_user_for_booking_rules'
                    ? true
                    : undefined,
        );
        const show_user = jest.fn(() => of({ email: 'other@example.com' }));
        jest.mocked(ts_client.showUser).mockImplementation(show_user as any);

        const immediate_host = (spectator.service as any)._bookingRulesHost({
            email: 'other@example.com',
        });
        const loaded_host = await (
            spectator.service as any
        )._loadBookingRulesHost('other@example.com');

        expect(immediate_host.email).toBe(currentUser().email);
        expect(loaded_host.email).toBe(currentUser().email);
        expect(show_user).not.toHaveBeenCalled();
    });

    it('should handle view changes', () => {
        expect(spectator.service.view()).toBe('form');
        spectator.service.setView('map');
        expect(spectator.service.view()).toBe('map');
    });

    it('should handle form changes', () => {
        spectator.service.newForm('desk');
        const form = spectator.service.form;
        expect(spectator.service.form).toBeTruthy();
        const spy = jest.spyOn(spectator.service, 'storeForm');
        expect(spectator.service.storeForm).not.toHaveBeenCalled();
        const date = endOfYear(Date.now()).valueOf();
        spectator.service.model.update((m) => ({ ...m, date }));
        // The form-change side effect (storeForm) runs on the reactive flush,
        // not synchronously, so trigger it before asserting it ran.
        TestBed.flushEffects();
        expect(spectator.service.storeForm).toHaveBeenCalled();
        expect(spectator.service.model().date).toBe(date);
        spectator.service.resetForm();
        expect(form).toBe(spectator.service.form);
        expect(spectator.service.model().date).not.toBe(date);
        spectator.service.model.update((m) => ({ ...m, date }));
        expect(spectator.service.model().date).toBe(date);
        spectator.service.clearForm();
        expect(spectator.service.model().date).not.toBe(date);
        spy.mockRestore();
    });

    it('should not update asset options when form date and duration are unchanged', () => {
        const asset_state = spectator.inject(AssetStateService);
        spectator.service.newForm('desk');
        TestBed.flushEffects();

        (asset_state.setOptions as jest.Mock).mockClear();
        const { date, duration } = spectator.service.model();
        (
            asset_state.getOptions as jest.MockedFunction<
                AssetStateService['getOptions']
            >
        ).mockReturnValue({ date, duration });
        spectator.service.model.update((m) => ({ ...m, date, duration }));
        TestBed.flushEffects();

        expect(asset_state.setOptions).not.toHaveBeenCalled();
    });

    it('should not update asset options for unrelated form changes', () => {
        const asset_state = spectator.inject(AssetStateService);
        spectator.service.newForm('desk');
        TestBed.flushEffects();

        (asset_state.setOptions as jest.Mock).mockClear();
        spectator.service.model.update((m) => ({
            ...m,
            title: `${m.title} updated`,
        }));
        TestBed.flushEffects();

        expect(asset_state.setOptions).not.toHaveBeenCalled();
    });

    it('should not update asset options for equivalent date objects', () => {
        const asset_state = spectator.inject(AssetStateService);
        spectator.service.newForm('desk');
        TestBed.flushEffects();

        const { date, duration } = spectator.service.model();
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(date) as any,
        }));
        TestBed.flushEffects();

        (asset_state.setOptions as jest.Mock).mockClear();
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(date) as any,
            duration,
        }));
        TestBed.flushEffects();

        expect(asset_state.setOptions).not.toHaveBeenCalled();
    });

    it('should allow reloading previous form details', () => {
        spectator.service.loadForm();
        expect(spectator.service.form).toBeTruthy();
        expect(spectator.service.model().title).toBe('Booking');
        sessionStorage.setItem('PLACEOS.booking_form', '{ "title": "Test" }');
        spectator.service.loadForm();
        expect(spectator.service.model().title).toBe('Test');
    });

    it.todo('should list asset features');

    it.todo('should list available assets');

    it('should exclude desks that clash with any recurring instance', async () => {
        jest.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'desk-1',
                                name: 'Desk 1',
                                features: [],
                            },
                            {
                                id: 'desk-2',
                                name: 'Desk 2',
                                features: [],
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
            },
        ] as any);
        jest.mocked(ts_client.showMetadata).mockResolvedValue({
            id: 'bld-1',
            details: [],
        } as any);
        (booking_mod as any).bookedResourceList = jest.fn(() =>
            Promise.resolve([]),
        );
        (booking_mod as any).findBookingClashes = jest.fn(() =>
            Promise.resolve(['desk-2']),
        );
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(2028, 5, 15, 15, 0, 0).valueOf(),
            duration: 60,
            recurrence_type: 'daily',
            recurrence_interval: 1,
            recurrence_end: Math.floor(
                new Date(2028, 5, 18, 23, 59, 59).valueOf() / 1000,
            ),
        }));

        const clashes = await (
            spectator.service as any
        )._recurringBookedResourceList(
            [
                { id: 'desk-1', zone: { id: 'lvl-1' } },
                { id: 'desk-2', zone: { id: 'lvl-1' } },
            ],
            'bld-1',
        );

        expect(clashes).toEqual(['desk-2']);
        const clash_booking = (booking_mod.findBookingClashes as jest.Mock).mock
            .calls[0][0];
        expect(clash_booking.asset_ids).toEqual(['desk-1', 'desk-2']);
        expect(clash_booking.recurrence_type).toBe('daily');
        expect(booking_mod.bookedResourceList).not.toHaveBeenCalled();
    });

    it.todo('should allow filtering of available assets');

    it.todo('should allow confirming booking details');

    // it('should allow posting booking details', fakeAsync(async () => {
    //     (booking_mod as any).queryBookings = jest.fn(() =>
    //         of([{ asset_id: 'desk-1' }])
    //     );
    //     spectator.service.newForm();
    //     tick(1000);
    //     spectator.service.form.patchValue({
    //         date: Date.now(),
    //         asset_id: 'desk-1',
    //         user_email: 'jim@example.com',
    //     });
    //     tick(1000);
    //     await expect(spectator.service.postForm()).rejects.toBe(
    //         'desk-1 is not available at the selected time'
    //     );

    //     (booking_mod as any).saveBooking = jest.fn(() => of({}));
    //     (booking_mod as any).queryBookings = jest.fn(() => of([]));
    //     spectator.service.form.patchValue({ asset_id: 'desk-2' });
    //     await spectator.service.postForm();
    //     expect(spectator.service.view).toBe('success');
    // }));

    it('should clear form on navigation away from form', () => {
        const spy = jest.spyOn(spectator.service, 'clearForm');
        expect(spectator.service.clearForm).not.toHaveBeenCalled();
        const router = spectator.inject(Router);
        (router.events as any).next(
            new NavigationEnd(1, '/book/desks/form', '/book/desks/form'),
        );
        expect(spectator.service.clearForm).not.toHaveBeenCalled();
        (router.events as any).next(
            new NavigationEnd(1, '/schedule', '/schedule'),
        );
        expect(spectator.service.clearForm).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('should show user friendly names for invalid form fields', async () => {
        spectator.service.newForm('desk');
        spectator.service.model.update((m) => ({ ...m, asset_id: '' }));
        const error = `${await spectator.service
            .postForm()
            .catch((err) => err)}`;
        expect(error === 'FORM.INVALID_FIELDS' || error.includes('Desk')).toBe(
            true,
        );
        expect(error).not.toContain('asset_id');
    });

    it('should keep past start time when loading an in-progress booking for edit', () => {
        jest.useFakeTimers();
        const booking_date = Date.now() - 10 * 60 * 1000;
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'booking-1',
                booking_type: 'visitor',
                date: booking_date,
                duration: 60,
                asset_id: 'visitor@example.com',
            }),
        );
        jest.runAllTimers();

        expect(spectator.service.model().date).toBe(booking_date);
        jest.useRealTimers();
    });

    it('should use parking booking hours when creating a new parking form', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2026, 2, 20, 18, 15, 0));
        const get = spectator.inject(SettingsService).get as jest.Mock;
        get.mockImplementation((key: string) => {
            if (
                key === 'app.parkings.bookable_hours' ||
                key === 'app.parking.bookable_hours' ||
                key === 'app.bookings.bookable_hours'
            ) {
                return { start: 8, end: 17 };
            }
            return undefined;
        });

        spectator.service.newForm('parking');

        expect(spectator.service.model().date).toBe(
            new Date(2026, 2, 21, 8, 0, 0, 0).valueOf(),
        );
        jest.useRealTimers();
    });

    it('should not overwrite date and duration changed before delayed form sync runs', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2026, 2, 20, 9, 0, 0));

        spectator.service.newForm('parking');
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(2026, 2, 21, 8, 0, 0).valueOf(),
            duration: 240,
        }));

        jest.runAllTimers();

        expect(spectator.service.model().date).toBe(
            new Date(2026, 2, 21, 8, 0, 0).valueOf(),
        );
        expect(spectator.service.model().duration).toBe(240);
        jest.useRealTimers();
    });

    it('should align loaded draft bookings to the start of bookable hours', () => {
        jest.useFakeTimers();
        // Set system time well before the draft date so it is not considered
        // past and snapped to "now" by the form time sync.
        jest.setSystemTime(new Date(2028, 5, 14, 6, 0, 0, 0));
        const draft_date = new Date(2028, 5, 15, 0, 0, 0, 0).valueOf();
        const get = spectator.inject(SettingsService).get as jest.Mock;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.bookable_hours') {
                return { start: 8, end: 17 };
            }
            return undefined;
        });
        sessionStorage.setItem(
            'PLACEOS.booking_form',
            JSON.stringify({
                booking_type: 'desk',
                date: draft_date,
                duration: 60,
                title: 'Desk booking',
            }),
        );

        spectator.service.setOptions({ type: 'desk' });
        spectator.service.loadForm();
        jest.runAllTimers();

        expect(spectator.service.model().date).toBe(
            new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
        );
        jest.useRealTimers();
    });

    it('should move same-day after-hours drafts to the next bookable day', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2028, 5, 15, 18, 15, 0, 0));
        const get = spectator.inject(SettingsService).get as jest.Mock;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.bookable_hours') {
                return { start: 8, end: 17 };
            }
            return undefined;
        });
        sessionStorage.setItem(
            'PLACEOS.booking_form',
            JSON.stringify({
                booking_type: 'desk',
                date: new Date(2028, 5, 15, 18, 15, 0, 0).valueOf(),
                duration: 60,
                title: 'Desk booking',
            }),
        );

        spectator.service.setOptions({ type: 'desk' });
        spectator.service.loadForm();
        jest.runAllTimers();

        expect(spectator.service.model().date).toBe(
            new Date(2028, 5, 16, 8, 0, 0, 0).valueOf(),
        );
        jest.useRealTimers();
    });

    it('should store visitor_name in extension data when saving visitor bookings', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        spectator.service.newForm(
            'visitor',
            new Booking({
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'visitor@example.com',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            booking_type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor One',
            title: 'Vendor Interview',
        }));

        await spectator.service.postForm(true);

        expect(save_booking).toHaveBeenCalledTimes(1);
        expect(
            (save_booking.mock.calls[0][0] as Booking).extension_data
                .visitor_name,
        ).toBe('Visitor One');
        expect((save_booking.mock.calls[0][0] as Booking).description).toBe(
            'Vendor Interview',
        );
    });

    it('should store the parking request user groups in extension data', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        spectator.service.newForm(
            'parking',
            new Booking({
                booking_type: 'parking',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'unallocated-parking',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            booking_type: 'parking',
            asset_id: 'unallocated-parking',
            asset_name: 'Parking Request',
            title: 'Parking Request',
            user: {
                email: 'driver@example.com',
                name: 'Driver One',
                groups: ['PlaceOS P1 Parking', 'After Hours Parking'],
            } as any,
        }));

        await spectator.service.postForm(true);

        expect(save_booking).toHaveBeenCalledTimes(1);
        expect(
            (save_booking.mock.calls[0][0] as Booking).extension_data
                .user_groups,
        ).toEqual(['PlaceOS P1 Parking', 'After Hours Parking']);
    });

    it('should recompute parking request start and end when stale booking fields are present', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );

        const date = new Date(2027, 2, 20, 22, 0, 0, 0).valueOf();
        spectator.service.newForm('parking');
        spectator.service.model.update(
            (m) =>
                ({
                    ...m,
                    booking_type: 'parking',
                    asset_id: 'unallocated-parking',
                    asset_name: 'Parking Request',
                    title: 'Parking Request',
                    date,
                    date_end: date + 8 * 60 * 60 * 1000,
                    duration: 8 * 60,
                    booking_start: 2,
                    booking_end: 1,
                }) as any,
        );

        await spectator.service.postForm(true);

        expect(save_booking).toHaveBeenCalledTimes(1);
        expect(save_booking.mock.calls[0][0]).toMatchObject({
            booking_start: Math.floor(date / 1000),
            booking_end: Math.floor((date + 8 * 60 * 60 * 1000) / 1000),
        });
    });

    it('should not post parking requests with a non-positive duration', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        save_booking.mockReset();

        spectator.service.newForm('parking');
        spectator.service.model.update((m) => ({
            ...m,
            booking_type: 'parking',
            asset_id: 'unallocated-parking',
            asset_name: 'Parking Request',
            title: 'Parking Request',
            date: new Date(2027, 2, 20, 22, 0, 0, 0).valueOf(),
            duration: 0,
        }));

        await expect(spectator.service.postForm(true)).rejects.toBe(
            'FORM.INVALID_FIELDS',
        );
        expect(save_booking).not.toHaveBeenCalled();
    });

    it('should not collapse overnight parking request duration to zero against parking bookable hours', () => {
        const get = spectator.inject(SettingsService).get as jest.Mock;
        get.mockImplementation((key: string) => {
            if (
                key === 'app.parkings.bookable_hours' ||
                key === 'app.parking.bookable_hours'
            ) {
                return { start: 7, end: 17 };
            }
            return undefined;
        });

        const date = new Date(2027, 2, 20, 22, 0, 0, 0).valueOf();
        spectator.service.newForm('parking');
        spectator.service.applyDurationSettings();
        spectator.service.model.update((m) => ({
            ...m,
            booking_type: 'parking',
            asset_id: 'unallocated-parking',
            asset_name: 'Parking Request',
            title: 'Parking Request',
            date,
            date_end: date + 8 * 60 * 60 * 1000,
            duration: 8 * 60,
        }));
        TestBed.flushEffects();

        expect(spectator.service.model().duration).toBeGreaterThan(0);
        expect(spectator.service.model().date_end).toBeGreaterThan(
            spectator.service.model().date,
        );
        expect(spectator.service.form.duration().valid()).toBe(true);
    });

    it('should block self desk bookings when the user has an assigned desk', async () => {
        const get = spectator.inject(SettingsService).get as jest.Mock;
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.prevent_self_booking_if_assigned_desk') {
                return true;
            }
            return undefined;
        });
        jest.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: '<empty>@dev.place.tech',
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            resources: [
                {
                    id: 'desk-1',
                    name: 'Desk 1',
                    zone: { id: 'lvl-1', parent_id: 'bld-1' },
                    features: [],
                },
            ],
        }));

        await expect(spectator.service.postForm(true)).rejects.toBe(
            'You have an assigned desk and cannot book another desk.',
        );
        expect(save_booking).not.toHaveBeenCalled();
    });

    it('should allow desk bookings for other users when the current user has an assigned desk', async () => {
        const get = spectator.inject(SettingsService).get as jest.Mock;
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.prevent_self_booking_if_assigned_desk') {
                return true;
            }
            return undefined;
        });
        jest.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: '<empty>@dev.place.tech',
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            user: {
                email: 'other.user@example.com',
                name: 'Other User',
                id: 'other-user',
            } as any,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            resources: [
                {
                    id: 'desk-1',
                    name: 'Desk 1',
                    zone: { id: 'lvl-1', parent_id: 'bld-1' },
                    features: [],
                },
            ],
        }));

        await spectator.service.postForm(true);

        expect(save_booking).toHaveBeenCalledTimes(1);
        expect((save_booking.mock.calls[0][0] as Booking).user_email).toBe(
            'other.user@example.com',
        );
    });

    it('should block self desk bookings by default when the user has an assigned desk', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        jest.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: '<empty>@dev.place.tech',
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            resources: [
                {
                    id: 'desk-1',
                    name: 'Desk 1',
                    zone: { id: 'lvl-1', parent_id: 'bld-1' },
                    features: [],
                },
            ],
        }));

        await expect(spectator.service.postForm(true)).rejects.toBe(
            'You have an assigned desk and cannot book another desk.',
        );
        expect(save_booking).not.toHaveBeenCalled();
    });

    it('should allow self desk bookings for users with an assigned desk when the setting is enabled', async () => {
        const get = spectator.inject(SettingsService).get as jest.Mock;
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.allow_booking_with_reserved_desk') {
                return true;
            }
            return undefined;
        });
        jest.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: '<empty>@dev.place.tech',
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            resources: [
                {
                    id: 'desk-1',
                    name: 'Desk 1',
                    zone: { id: 'lvl-1', parent_id: 'bld-1' },
                    features: [],
                },
            ],
        }));

        await spectator.service.postForm(true);

        expect(save_booking).toHaveBeenCalledTimes(1);
    });

    it('should block self desk bookings when the legacy prevent setting overrides the allow setting', async () => {
        const get = spectator.inject(SettingsService).get as jest.Mock;
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.allow_booking_with_reserved_desk') {
                return true;
            }
            if (key === 'app.desks.prevent_self_booking_if_assigned_desk') {
                return true;
            }
            return undefined;
        });
        jest.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: '<empty>@dev.place.tech',
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            resources: [
                {
                    id: 'desk-1',
                    name: 'Desk 1',
                    zone: { id: 'lvl-1', parent_id: 'bld-1' },
                    features: [],
                },
            ],
        }));

        await expect(spectator.service.postForm(true)).rejects.toBe(
            'You have an assigned desk and cannot book another desk.',
        );
        expect(save_booking).not.toHaveBeenCalled();
    });

    it('should clear saved host changes after a permission error', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        const current_user = currentUser();
        (spectator.inject(PaymentsService) as any).enabled = false;
        save_booking.mockReset();
        save_booking.mockImplementation(() =>
            Promise.reject({ status: 403, error: 'Forbidden' }),
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            user: {
                email: 'unauthorised.user@example.com',
                name: 'Unauthorised User',
                id: 'unauthorised-user',
            } as any,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
        }));

        await expect(spectator.service.postForm(true)).rejects.toMatchObject({
            message: 'Forbidden',
            status: 403,
        });

        const saved_form = JSON.parse(
            sessionStorage.getItem('PLACEOS.booking_form'),
        );
        expect(saved_form.user_email).toBe(current_user.email);
        expect(saved_form.user.email).toBe(current_user.email);
        expect(spectator.service.model().user_email).toBe(current_user.email);
    });

    it('should clamp current-day all-day bookings before posting', async () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2026, 2, 20, 10, 2, 0, 0));
        try {
            const get = spectator.inject(SettingsService).get as jest.Mock;
            const save_booking = booking_mod.saveBooking as jest.Mock;
            (spectator.inject(PaymentsService) as any).enabled = false;
            get.mockImplementation((key: string) => {
                if (key === 'app.bookings.all_day_period') {
                    return { start: 9, end: 17 };
                }
                return undefined;
            });
            save_booking.mockReset();
            save_booking.mockImplementation((booking: Booking) =>
                Promise.resolve(booking),
            );

            spectator.service.newForm('desk');
            spectator.service.model.update((m) => ({
                ...m,
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                date: new Date(2026, 2, 20, 8, 0, 0, 0).valueOf(),
            }));
            spectator.service.model.update((m) => ({ ...m, all_day: true }));

            await spectator.service.postForm(true);

            expect(save_booking).toHaveBeenCalledTimes(1);
            expect(save_booking.mock.calls[0][0]).toMatchObject({
                all_day: true,
                booking_start: Math.floor(
                    new Date(2026, 2, 20, 10, 5, 0, 0).valueOf() / 1000,
                ),
                booking_end: Math.floor(
                    new Date(2026, 2, 20, 17, 0, 0, 0).valueOf() / 1000,
                ),
                date_end: new Date(2026, 2, 20, 17, 0, 0, 0).valueOf(),
            });
        } finally {
            jest.useRealTimers();
        }
    });

    it('should assign unique desks when posting desk group bookings', async () => {
        const desk_list = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: 'Desk 2',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-3',
                map_id: 'map-3',
                name: 'Desk 3',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue(desk_list);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature')
            .mockResolvedValueOnce('map-2')
            .mockResolvedValueOnce('map-3');
        jest.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_desks: string[] = [];
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                saved_desks.push(value.asset_id);
                return new Booking({
                    id: `booking-${saved_desks.length}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                extension_data: { map_id: 'map-1' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
                {
                    email: 'member.two@example.com',
                    name: 'Member Two',
                } as any,
            ],
        });

        await spectator.service.postFormForGroup();

        expect(saved_desks).toEqual(['desk-1', 'desk-2', 'desk-3']);
        expect(new Set(saved_desks).size).toBe(saved_desks.length);
    });

    it('should keep child group booking resources aligned with the booked desk', async () => {
        const desk_list = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: 'Desk 2',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue(desk_list);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature').mockResolvedValue(
            'map-2',
        );
        jest.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_forms: { asset_id: string; resource_id: string }[] = [];
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                saved_forms.push({
                    asset_id: value.asset_id,
                    resource_id: value.resources?.[0]?.id,
                });
                return new Booking({
                    id: `booking-${saved_forms.length}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                extension_data: { map_id: 'map-1' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
            resources: [desk_list[0]],
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
            ],
        });

        await spectator.service.postFormForGroup();

        expect(saved_forms).toEqual([
            { asset_id: 'desk-1', resource_id: 'desk-1' },
            { asset_id: 'desk-2', resource_id: 'desk-2' },
        ]);
    });

    it('should create a group container parent before desk group booking children', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        const desk_list = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: 'Desk 2',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(new Booking({ ...booking, id: 'booking-group' })),
        );
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue(desk_list);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature').mockResolvedValue(
            'map-2',
        );
        jest.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const child_parent_ids: string[] = [];
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                child_parent_ids.push(value.parent_id);
                return new Booking({
                    id: `booking-child-${child_parent_ids.length}`,
                    parent_id: value.parent_id,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                extension_data: { map_id: 'map-1' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
            ],
        });

        await spectator.service.postFormForGroup();

        expect(save_booking).toHaveBeenCalledTimes(1);
        expect(save_booking.mock.calls[0][0]).toEqual(
            expect.objectContaining({
                booking_type: 'group',
                asset_name: 'Group Booking',
                type: 'group',
            }),
        );
        expect(
            (save_booking.mock.calls[0][0] as Booking).extension_data
                .group_resource_type,
        ).toBe('desk');
        expect(child_parent_ids).toEqual(['booking-group', 'booking-group']);
    });

    it('should complete desk group bookings with child errors when rollback is disabled', async () => {
        const get = spectator.inject(SettingsService).get as jest.Mock;
        const save_booking = booking_mod.saveBooking as jest.Mock;
        const remove_booking = booking_mod.removeBooking as jest.Mock;
        const desk_list = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: 'Desk 2',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-3',
                map_id: 'map-3',
                name: 'Desk 3',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.rollback_group_bookings') return false;
            return undefined;
        });
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(new Booking({ ...booking, id: 'booking-group' })),
        );
        remove_booking.mockReset();
        remove_booking.mockImplementation(() => Promise.resolve({}));
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue(desk_list);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature')
            .mockResolvedValueOnce('map-2')
            .mockResolvedValueOnce('map-3');
        jest.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_users: string[] = [];
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                saved_users.push(value.user_email);
                if (value.user_email === 'member.one@example.com') {
                    throw new Error('Save failed');
                }
                return new Booking({
                    id: `booking-child-${saved_users.length}`,
                    parent_id: value.parent_id,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                extension_data: { map_id: 'map-1' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
                {
                    email: 'member.two@example.com',
                    name: 'Member Two',
                } as any,
            ],
        });

        await expect(spectator.service.postFormForGroup()).resolves.toEqual(
            expect.objectContaining({ user_email: '<empty>@dev.place.tech' }),
        );

        expect(saved_users).toEqual([
            '<empty>@dev.place.tech',
            'member.one@example.com',
            'member.two@example.com',
        ]);
        expect(remove_booking).not.toHaveBeenCalled();
        expect(spectator.service.view()).toBe('success');
        expect(
            JSON.parse(localStorage.getItem('PLACEOS.last_group_booking_ids')),
        ).toEqual(['booking-group', 'booking-child-1', 'booking-child-3']);
        expect(
            JSON.parse(
                localStorage.getItem('PLACEOS.last_group_booking_errors'),
            ),
        ).toEqual([
            {
                email: 'member.one@example.com',
                name: 'Member One',
                asset_id: 'desk-2',
                asset_name: 'Desk 2',
                error: 'Save failed',
            },
        ]);
    });

    it('should use desk id as asset_name when group member desks have no name', async () => {
        const desk_list = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: '',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-3',
                map_id: 'map-3',
                name: null,
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue(desk_list);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature')
            .mockResolvedValueOnce('map-2')
            .mockResolvedValueOnce('map-3');
        jest.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_names: string[] = [];
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                saved_names.push(value.asset_name);
                return new Booking({
                    id: `booking-${saved_names.length}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                extension_data: { map_id: 'map-1' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
                {
                    email: 'member.two@example.com',
                    name: 'Member Two',
                } as any,
            ],
        });

        await spectator.service.postFormForGroup();

        expect(saved_names).toEqual(['Desk 1', 'desk-2', 'desk-3']);
        expect(saved_names.every((_) => !!_)).toBe(true);
    });

    it('should assign a new desk to added desk-group members during edit', async () => {
        const all_desks = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: 'Desk 2',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-3',
                map_id: 'map-3',
                name: 'Desk 3',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            all_desks,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue([all_desks[1], all_desks[2]]);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature').mockResolvedValue(
            'map-3',
        );
        const saved_forms: { user_email: string; asset_id: string }[] = [];
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                saved_forms.push({
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
                return new Booking({
                    id: `booking-${saved_forms.length}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                id: 'booking-parent',
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                user_email: '<empty>@dev.place.tech',
                extension_data: { map_id: 'map-1' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            id: 'booking-parent',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
                {
                    email: 'member.two@example.com',
                    name: 'Member Two',
                } as any,
            ],
        });

        await spectator.service.editFormForGroup([
            new Booking({
                id: 'booking-parent',
                booking_type: 'desk',
                user_email: '<empty>@dev.place.tech',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
            }),
            new Booking({
                id: 'booking-child',
                parent_id: 'booking-parent',
                booking_type: 'desk',
                user_email: 'member.one@example.com',
                asset_id: 'desk-2',
                asset_name: 'Desk 2',
            }),
        ]);

        expect(saved_forms).toEqual([
            { user_email: '<empty>@dev.place.tech', asset_id: 'desk-1' },
            { user_email: 'member.one@example.com', asset_id: 'desk-2' },
            { user_email: 'member.two@example.com', asset_id: 'desk-3' },
        ]);
        expect(new Set(saved_forms.map((_) => _.asset_id)).size).toBe(
            saved_forms.length,
        );
    });

    it('should update group container metadata when editing container-backed desk groups', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) =>
            Promise.resolve(booking),
        );
        const all_desks = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: 'Desk 2',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            all_desks,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue([all_desks[1]]);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature').mockResolvedValue(
            'map-2',
        );
        const saved_forms: { id: string; parent_id: string }[] = [];
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                saved_forms.push({ id: value.id, parent_id: value.parent_id });
                return new Booking({
                    id: value.id || `booking-child-${saved_forms.length}`,
                    parent_id: value.parent_id,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                id: 'booking-current-child',
                parent_id: 'booking-group',
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                user_email: '<empty>@dev.place.tech',
                extension_data: {
                    group: 'group-ref',
                    map_id: 'map-1',
                    group_members: [
                        { email: '<empty>@dev.place.tech', name: '<empty>' },
                    ],
                },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            id: 'booking-current-child',
            parent_id: 'booking-group',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
            ],
        });

        await spectator.service.editFormForGroup([
            new Booking({
                id: 'booking-current-child',
                parent_id: 'booking-group',
                booking_type: 'desk',
                user_email: '<empty>@dev.place.tech',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
            }),
        ]);

        expect(save_booking).toHaveBeenCalledTimes(1);
        expect(save_booking.mock.calls[0][0]).toEqual(
            expect.objectContaining({
                id: 'booking-group',
                booking_type: 'group',
                type: 'group',
            }),
        );
        expect(
            (save_booking.mock.calls[0][0] as Booking).extension_data
                .group_members,
        ).toHaveLength(2);
        expect(saved_forms).toEqual([
            { id: 'booking-current-child', parent_id: 'booking-group' },
            { id: '', parent_id: 'booking-group' },
        ]);
    });

    it('should set last_success to the current user booking after posting a desk group booking', async () => {
        const desk_list = [
            {
                id: 'desk-1',
                map_id: 'map-1',
                name: 'Desk 1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-2',
                map_id: 'map-2',
                name: 'Desk 2',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
            {
                id: 'desk-3',
                map_id: 'map-3',
                name: 'Desk 3',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                features: [],
            },
        ] as any[];
        jest.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        jest.spyOn(
            spectator.service,
            'listAvailableResources',
        ).mockResolvedValue(desk_list);
        jest.spyOn(booking_utility_mod, 'findNearbyFeature')
            .mockResolvedValueOnce('map-2')
            .mockResolvedValueOnce('map-3');
        jest.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const group_members_payload = [
            {
                id: '',
                email: '<empty>@dev.place.tech',
                name: '<empty>',
                company: '',
                phone: '',
                international: false,
            },
            {
                id: '',
                email: 'member.one@example.com',
                name: 'Member One',
                company: '',
                phone: '',
                international: false,
            },
            {
                id: '',
                email: 'member.two@example.com',
                name: 'Member Two',
                company: '',
                phone: '',
                international: false,
            },
        ];
        let booking_count = 0;
        jest.spyOn(spectator.service, 'postForm').mockImplementation(
            async () => {
                const value = spectator.service.model();
                booking_count++;
                return new Booking({
                    id: `booking-${booking_count}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                    extension_data: { group_members: group_members_payload },
                });
            },
        );
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                extension_data: { map_id: 'map-1' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
            map_id: 'map-1',
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: '<empty>@dev.place.tech',
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
                {
                    email: 'member.two@example.com',
                    name: 'Member Two',
                } as any,
            ],
        });

        await spectator.service.postFormForGroup();

        // last_success must be the CURRENT USER's booking, not the last
        // group member's booking. Before the fix, postForm() overwrites
        // last_success on every iteration so it ends up holding
        // member.two's booking instead of the current user's booking.
        expect(spectator.service.last_success).not.toBeNull();
        expect(spectator.service.last_success.user_email).toBe(
            '<empty>@dev.place.tech',
        );
    });

    it('should only clear grouped visitor edit form after all siblings are saved', async () => {
        const clear_form = jest.spyOn(spectator.service, 'clearForm');
        const saved_forms: {
            asset_id: string;
            zones: string[];
            location: string;
        }[] = [];
        const post_form = jest
            .spyOn(spectator.service, 'postForm')
            .mockImplementation(async () => {
                const value = spectator.service.model();
                saved_forms.push({
                    asset_id: value.asset_id,
                    zones: [...(value.zones || [])],
                    location: value.location,
                });
                return new Booking({
                    ...value,
                    id:
                        value.asset_id === 'visitor.one@example.com'
                            ? 'booking-parent'
                            : 'booking-child',
                });
            });
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'booking-parent',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                zones: ['org-1', 'bld-1'],
                extension_data: { location: 'Main Lobby' },
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            id: 'booking-parent',
            booking_type: 'visitor',
            title: 'Vendor Visit',
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
            zones: ['org-1', 'bld-1'],
            location: 'Main Lobby',
        }));
        spectator.service.setOptions({
            type: 'visitor',
            group: true,
            members: [
                {
                    name: 'Visitor One',
                    email: 'visitor.one@example.com',
                } as any,
                {
                    name: 'Visitor Two',
                    email: 'visitor.two@example.com',
                } as any,
            ],
        });
        clear_form.mockClear();

        await spectator.service.editFormForGroup([
            new Booking({
                id: 'booking-parent',
                asset_id: 'visitor.one@example.com',
                booking_type: 'visitor',
            }),
            new Booking({
                id: 'booking-child',
                parent_id: 'booking-parent',
                asset_id: 'visitor.two@example.com',
                booking_type: 'visitor',
            }),
        ]);

        expect(post_form).toHaveBeenCalledTimes(2);
        expect(post_form).toHaveBeenNthCalledWith(1, true, false);
        expect(post_form).toHaveBeenNthCalledWith(2, true, false);
        expect(clear_form).toHaveBeenCalledTimes(1);
        expect(saved_forms[0].zones).toEqual(['org-1', 'bld-1']);
        expect(saved_forms[1].location).toBe('Main Lobby');
    });
});

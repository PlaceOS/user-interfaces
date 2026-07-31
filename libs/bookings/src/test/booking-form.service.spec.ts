import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { PaymentsService } from '@placeos/payments';
import { of, Subject } from 'rxjs';
import type { Mock, MockedFunction } from 'vitest';

import {
    Booking,
    currentUser,
    OrganisationService,
    setCurrentUser,
    StaffUser,
    User,
} from '@placeos/common';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { CalendarService } from 'libs/events/src/lib/calendar.service';
import { BookingFormService } from '../lib/booking-form.service';

// bookings.fn and booking.utilities run for real; only the ts-client API layer
// beneath them is stubbed (queryBookings -> get, bookedResourceList -> query,
// findBookingClashes -> post(/clashing-assets), saveBooking -> post|patch,
// removeBooking -> del).
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { endOfYear } from 'date-fns';
import { MockProvider } from 'ng-mocks';

// Per-test overridable results for the ts-client layer beneath bookings.fn.
let booked_result: string[] = [];
let clash_result: any[] = [];

const BOOKINGS_ENDPOINT = '/api/staff/v1/bookings';

/**
 * Bookings passed to `saveBooking` are now the create/update request bodies.
 * `saveBooking` moves the id into the PATCH url for updates, so reconstruct it.
 */
const savedBookings = (): Booking[] =>
    [
        ...vi
            .mocked(ts_client.post)
            .mock.calls.filter(([url]) =>
                url.startsWith(`${BOOKINGS_ENDPOINT}?`),
            )
            .map(([, body]) => body),
        ...vi
            .mocked(ts_client.patch)
            .mock.calls.filter(([url]) =>
                new RegExp(`^${BOOKINGS_ENDPOINT}/[^/]+$`).test(url),
            )
            .map(([url, body]) => ({ ...body, id: url.split('/').pop() })),
    ] as Booking[];

/** Booking sent to the clashing-assets endpoint (findBookingClashes body). */
const clashBookings = (): any[] =>
    vi
        .mocked(ts_client.post)
        .mock.calls.filter(([url]) => url.includes('/clashing-assets'))
        .map(([, body]) => body);

describe('BookingFormService', () => {
    let spectator: SpectatorService<BookingFormService>;
    const createService = createServiceFactory({
        service: BookingFormService,
        providers: [
            MockProvider(Router, {
                navigate: vi.fn(),
                events: new Subject(),
            }),
            MockProvider(SettingsService, {
                get: vi.fn(),
                overrides: signal([]),
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                waitUntilInitialised: () => Promise.resolve(),
                active_building: signal({ id: 'bld-1' }),
                active_building_loaded: signal(true),
                building_list: signal([{ id: 'bld-1', parent_id: 'reg-1' }]),
                organisation: { id: 'org-1' },
                region: { id: 'reg-1' },
                building: { id: 'bld-1', parent_id: 'reg-1' },
                buildings: [{ id: 'bld-1', parent_id: 'reg-1' }],
                levelWithID: vi.fn((ids: string[]) =>
                    ids?.[0]
                        ? {
                              id: ids[0],
                              parent_id: 'bld-1',
                              map_id: 'map-lvl-1',
                          }
                        : null,
                ),
            } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(PaymentsService, {
                makePayment: vi.fn(),
                enabled: true,
            }),
            // Mock the asset state service so its async `resource()`/effects do
            // not run away when effects are flushed synchronously in tests.
            MockProvider(AssetStateService, {
                getOptions: vi.fn(() => ({ date: 0 })),
                setOptions: vi.fn(),
            }),
            MockProvider(CalendarService, {
                loadCalendars: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // Seed a concrete user so newForm()/loadForm() has stable creator data.
        setCurrentUser(
            new StaffUser({
                id: 'current-user',
                email: 'current.user@example.com',
                name: 'Current User',
            }),
        );
        booked_result = [];
        clash_result = [];
        vi.mocked(ts_client.cleanObject).mockImplementation((a) => a);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        vi.mocked(ts_client.showUser).mockReturnValue(undefined as any);
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [{ id: 'desk-1' }, { id: 'desk-1' }],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
        // ts-client layer beneath the real bookings.fn functions.
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.query).mockImplementation(
            async () =>
                ({
                    data: [...booked_result],
                    next: null,
                    total: booked_result.length,
                }) as any,
        );
        vi.mocked(ts_client.post).mockImplementation((async (
            url: string,
            body: any,
        ) => {
            if (url.includes('/clashing-assets')) return [...clash_result];
            // Emulate the backend assigning an id to a newly-created group
            // container so children can reference it as their parent_id.
            if (
                url.startsWith(`${BOOKINGS_ENDPOINT}?`) &&
                !body?.id &&
                (body?.type === 'group' || body?.booking_type === 'group')
            ) {
                return { ...body, id: 'booking-group' };
            }
            return body;
        }) as any);
        vi.mocked(ts_client.patch).mockImplementation(
            async (_url: string, body: any) => body,
        );
        vi.mocked(ts_client.put).mockImplementation(
            async (_url: string, body: any) => body,
        );
        vi.mocked(ts_client.del).mockResolvedValue(undefined as any);
        spectator = createService();
        vi.mocked(ts_client.cleanObject).mockImplementation((a) => a);
        vi.spyOn(spectator.inject(SettingsService), 'get').mockImplementation(
            () => undefined,
        );
    });

    afterEach(() => {
        vi.restoreAllMocks();
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
        booked_result = ['desk-1'];
        const query = {
            period_start: 100,
            period_end: 200,
            type: 'desk' as const,
            zones: 'bld-1',
        };

        const requests = Promise.all([
            (spectator.service as any)._bookedResourceList(query, 42),
            (spectator.service as any)._bookedResourceList(query, 42),
        ]);

        // The underlying booked-resource query (bookedResourceList -> query)
        // is debounced, so it must not run until the debounce window elapses.
        await new Promise((resolve) => setTimeout(resolve, 250));
        expect(ts_client.query).not.toHaveBeenCalled();
        const [first, second] = await requests;
        expect(first).toEqual(['desk-1']);
        expect(second).toEqual(['desk-1']);
        expect(ts_client.query).toHaveBeenCalledTimes(1);
        expect(ts_client.query).toHaveBeenCalledWith(
            expect.objectContaining({
                path: 'booked',
                endpoint: BOOKINGS_ENDPOINT,
                query_params: expect.objectContaining({
                    period_start: 100,
                    period_end: 200,
                    type: 'desk',
                    zones: 'bld-1',
                    limit: 200,
                }),
            }),
        );
    });

    it('should keep form fields bound after storeForm even when cleanObject mutates in place', () => {
        // The real `cleanObject` mutates its argument in place. `storeForm`
        // must clone the live model before cleaning it, otherwise empty keys
        // (e.g. `asset_id: ''`) get deleted out of the signal-forms model,
        // orphaning `[formField]` bindings (`field() is not a function`).
        vi.mocked(ts_client.cleanObject).mockImplementation(
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
        const clear_form = vi.spyOn(spectator.service, 'clearForm');

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
        (spectator.inject(SettingsService).get as Mock).mockImplementation(
            (key: string) =>
                key === 'app.bookings.force_current_user_for_booking_rules'
                    ? true
                    : undefined,
        );
        const show_user = vi.fn(() => of({ email: 'other@example.com' }));
        vi.mocked(ts_client.showUser).mockImplementation(show_user as any);

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
        const spy = vi.spyOn(spectator.service, 'storeForm');
        expect(spectator.service.storeForm).not.toHaveBeenCalled();
        const date = endOfYear(Date.now()).valueOf();
        spectator.service.model.update((m) => ({ ...m, date }));
        // The form-change side effect (storeForm) runs on the reactive flush,
        // not synchronously, so trigger it before asserting it ran.
        TestBed.tick();
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
        TestBed.tick();

        (asset_state.setOptions as Mock).mockClear();
        const { date, duration } = spectator.service.model();
        (
            asset_state.getOptions as MockedFunction<
                AssetStateService['getOptions']
            >
        ).mockReturnValue({ date, duration });
        spectator.service.model.update((m) => ({ ...m, date, duration }));
        TestBed.tick();

        expect(asset_state.setOptions).not.toHaveBeenCalled();
    });

    it('should not update asset options for unrelated form changes', () => {
        const asset_state = spectator.inject(AssetStateService);
        spectator.service.newForm('desk');
        TestBed.tick();

        (asset_state.setOptions as Mock).mockClear();
        spectator.service.model.update((m) => ({
            ...m,
            title: `${m.title} updated`,
        }));
        TestBed.tick();

        expect(asset_state.setOptions).not.toHaveBeenCalled();
    });

    it('should not update asset options for equivalent date objects', () => {
        const asset_state = spectator.inject(AssetStateService);
        spectator.service.newForm('desk');
        TestBed.tick();

        const { date, duration } = spectator.service.model();
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(date) as any,
        }));
        TestBed.tick();

        (asset_state.setOptions as Mock).mockClear();
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(date) as any,
            duration,
        }));
        TestBed.tick();

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

    it('should exclude window-booked AND recurring-clash desks', async () => {
        // desk-1 is booked in the first-instance window, desk-2 clashes with a
        // later recurrence instance. Enabling recurrence must exclude both, not
        // replace the window-booked query and let desk-1 re-appear.
        const get = spectator.inject(SettingsService).get as Mock;
        get.mockImplementation((key: string) =>
            key === 'app.desks.use_building_timezone' ? true : undefined,
        );
        (spectator.inject(OrganisationService).building as any).timezone =
            'America/New_York';
        booked_result = ['desk-1'];
        clash_result = ['desk-2'];
        const desks = ['desk-1', 'desk-2', 'desk-3'].map((id) => ({
            id,
            name: id,
            bookable: true,
            features: [],
            zone: { id: 'lvl-1', parent_id: 'bld-1' },
        }));
        // The recurring clash query reads the live form model (== `raw` in
        // production via the debounced value), so seed the recurrence there too.
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(2028, 5, 15, 15, 0, 0).valueOf(),
            duration: 60,
            timezone: 'Australia/Sydney',
            recurrence_type: 'daily',
            recurrence_interval: 1,
            recurrence_end: Math.floor(
                new Date(2028, 5, 18, 23, 59, 59).valueOf() / 1000,
            ),
        }));

        const available = await (
            spectator.service as any
        )._computeAvailableResources(
            { type: 'desk' },
            desks,
            {},
            {
                date: new Date(2028, 5, 15, 15, 0, 0).valueOf(),
                duration: 60,
                timezone: 'Australia/Sydney',
                recurrence_type: 'daily',
                recurrence_interval: 1,
                recurrence_end: Math.floor(
                    new Date(2028, 5, 18, 23, 59, 59).valueOf() / 1000,
                ),
            },
        );

        // bookedResourceList -> query(path:'booked'); findBookingClashes ->
        // post(/clashing-assets, booking.toJSON()).
        expect(ts_client.query).toHaveBeenCalledWith(
            expect.objectContaining({ path: 'booked' }),
        );
        const clash_booking = clashBookings()[0];
        expect(clash_booking.asset_ids).toEqual(['desk-1', 'desk-2', 'desk-3']);
        expect(clash_booking.recurrence_type).toBe('daily');
        expect(clash_booking.timezone).toBe('America/New_York');
        expect(available.map((_: any) => _.id)).toEqual(['desk-3']);
    });

    it.todo('should allow filtering of available assets');

    it.todo('should allow confirming booking details');

    // it('should allow posting booking details', fakeAsync(async () => {
    //     (booking_mod as any).queryBookings = vi.fn(() =>
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

    //     (booking_mod as any).saveBooking = vi.fn(() => of({}));
    //     (booking_mod as any).queryBookings = vi.fn(() => of([]));
    //     spectator.service.form.patchValue({ asset_id: 'desk-2' });
    //     await spectator.service.postForm();
    //     expect(spectator.service.view).toBe('success');
    // }));

    it('should clear form on navigation away from form', () => {
        const spy = vi.spyOn(spectator.service, 'clearForm');
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
        vi.useFakeTimers();
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
        vi.runAllTimers();

        expect(spectator.service.model().date).toBe(booking_date);
        vi.useRealTimers();
    });

    it('should use parking booking hours when creating a new parking form', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 2, 20, 18, 15, 0));
        const get = spectator.inject(SettingsService).get as Mock;
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
        vi.useRealTimers();
    });

    it('should not overwrite date and duration changed before delayed form sync runs', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 2, 20, 9, 0, 0));

        spectator.service.newForm('parking');
        spectator.service.model.update((m) => ({
            ...m,
            date: new Date(2026, 2, 21, 8, 0, 0).valueOf(),
            duration: 240,
        }));

        vi.runAllTimers();

        expect(spectator.service.model().date).toBe(
            new Date(2026, 2, 21, 8, 0, 0).valueOf(),
        );
        expect(spectator.service.model().duration).toBe(240);
        vi.useRealTimers();
    });

    it('should align loaded draft bookings to the start of bookable hours', () => {
        vi.useFakeTimers();
        // Set system time well before the draft date so it is not considered
        // past and snapped to "now" by the form time sync.
        vi.setSystemTime(new Date(2028, 5, 14, 6, 0, 0, 0));
        const draft_date = new Date(2028, 5, 15, 0, 0, 0, 0).valueOf();
        const get = spectator.inject(SettingsService).get as Mock;
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
        vi.runAllTimers();

        expect(spectator.service.model().date).toBe(
            new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
        );
        vi.useRealTimers();
    });

    it('should move same-day after-hours drafts to the next bookable day', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2028, 5, 15, 18, 15, 0, 0));
        const get = spectator.inject(SettingsService).get as Mock;
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
        vi.runAllTimers();

        expect(spectator.service.model().date).toBe(
            new Date(2028, 5, 16, 8, 0, 0, 0).valueOf(),
        );
        vi.useRealTimers();
    });

    it('should store visitor_name in extension data when saving visitor bookings', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
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

        expect(savedBookings().length).toBe(1);
        expect(
            (savedBookings()[0] as Booking).extension_data.visitor_name,
        ).toBe('Visitor One');
        expect((savedBookings()[0] as Booking).description).toBe(
            'Vendor Interview',
        );
    });

    it('should keep the host when editing a delegated visitor booking', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'bkn-1',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'visitor@example.com',
                asset_name: 'Visitor One',
                user_id: 'host-user',
                user_email: 'host@example.com',
                user_name: 'Host User',
                booked_by_id: 'current-user',
                booked_by_email: 'current.user@example.com',
                booked_by_name: 'Current User',
            }),
        );

        expect((spectator.service.model().user as any)?.email).toBe(
            'host@example.com',
        );

        spectator.service.model.update((m) => ({ ...m, title: 'Updated' }));
        await spectator.service.postForm(true);

        expect(savedBookings().length).toBe(1);
        expect((savedBookings()[0] as Booking).user_email).toBe(
            'host@example.com',
        );
        expect((savedBookings()[0] as Booking).user_name).toBe('Host User');
    });

    it('should keep the visitor email after edit form effects settle', () => {
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'visitor-booking',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'visitor@example.com',
                asset_name: 'Visitor One',
            }),
        );

        TestBed.flushEffects();

        expect(spectator.service.model().asset_id).toBe('visitor@example.com');
        expect(spectator.service.form.asset_id().valid()).toBe(true);
    });

    it('should update the host identity when editing a delegated visitor booking', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'bkn-1',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'visitor@example.com',
                asset_name: 'Visitor One',
                user_id: 'old-host',
                user_email: 'old.host@example.com',
                user_name: 'Old Host',
                booked_by_id: 'current-user',
                booked_by_email: 'current.user@example.com',
                booked_by_name: 'Current User',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            user: new User({
                id: 'new-host',
                email: 'new.host@example.com',
                name: 'New Host',
            }),
        }));

        await spectator.service.postForm(true);

        expect(savedBookings().length).toBe(1);
        expect(savedBookings()[0]).toEqual(
            expect.objectContaining({
                user_id: 'new-host',
                user_email: 'new.host@example.com',
                user_name: 'New Host',
            }),
        );
    });

    it('should store the parking request user groups in extension data', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
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

        expect(savedBookings().length).toBe(1);
        expect(
            (savedBookings()[0] as Booking).extension_data.user_groups,
        ).toEqual(['PlaceOS P1 Parking', 'After Hours Parking']);
    });

    it('should only save form fields from booking extension data', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
        spectator.service.newForm(
            'parking',
            new Booking({
                booking_type: 'parking',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'unallocated-parking',
                extension_data: {
                    notes: 'Needs access',
                    p2_document_names: ['Permit.pdf'],
                    attachments: ['https://example.com/permit.pdf'],
                    cost_code: 'CC-123',
                    resources: [{ id: 'resource-1' }],
                    level: { id: 'lvl-1' },
                },
            }),
        );
        spectator.service.model.update(
            (m) =>
                ({
                    ...m,
                    booking_type: 'parking',
                    asset_id: 'unallocated-parking',
                    asset_name: 'Parking Request',
                    title: 'Parking Request',
                    cost_code: 'CC-123',
                    p2_document_names: ['Permit.pdf'],
                    resources: [{ id: 'resource-1' }],
                    level: { id: 'lvl-1' },
                    extension_data: {
                        notes: 'Needs access',
                        p2_document_names: ['Permit.pdf'],
                        attachments: ['https://example.com/permit.pdf'],
                        cost_code: 'CC-123',
                        resources: [{ id: 'resource-1' }],
                        assets: [{ id: 'asset-1' }],
                        level: { id: 'lvl-1' },
                    },
                }) as any,
        );

        await spectator.service.postForm(true);

        const extension_data = (savedBookings()[0] as Booking).extension_data;
        expect(savedBookings().length).toBe(1);
        expect(extension_data.notes).toBe('Needs access');
        expect(extension_data.attachments).toEqual([
            'https://example.com/permit.pdf',
            'Permit.pdf',
        ]);
        expect(extension_data.p2_document_names).toBeUndefined();
        expect(extension_data.cost_code).toBeUndefined();
        expect(extension_data.resources).toBeUndefined();
        expect(extension_data.assets).toEqual([]);
        expect(extension_data.level).toBeUndefined();
    });

    it('should recompute parking request start and end when stale booking fields are present', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;

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

        expect(savedBookings().length).toBe(1);
        expect(savedBookings()[0]).toMatchObject({
            booking_start: Math.floor(date / 1000),
            booking_end: Math.floor((date + 8 * 60 * 60 * 1000) / 1000),
        });
    });

    it('should not post parking requests with a non-positive duration', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;

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
        expect(savedBookings().length).toBe(0);
    });

    it('should not collapse overnight parking request duration to zero against parking bookable hours', () => {
        const get = spectator.inject(SettingsService).get as Mock;
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
        TestBed.tick();

        expect(spectator.service.model().duration).toBeGreaterThan(0);
        expect(spectator.service.model().date_end).toBeGreaterThan(
            spectator.service.model().date,
        );
        expect(spectator.service.form.duration().valid()).toBe(true);
    });

    it('should block self desk bookings when the user has an assigned desk', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'deny';
            }
            return undefined;
        });
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: currentUser().email,
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
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
        expect(savedBookings().length).toBe(0);
    });

    it('should allow desk bookings for other users when the current user has an assigned desk', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'other_only';
            }
            return undefined;
        });
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: currentUser().email,
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
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

        expect(savedBookings().length).toBe(1);
        expect((savedBookings()[0] as Booking).user_email).toBe(
            'other.user@example.com',
        );
    });

    it('should block desk bookings for other users who have an assigned desk', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'other_only';
            }
            return undefined;
        });
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: 'other.user@example.com',
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
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

        await expect(spectator.service.postForm(true)).rejects.toBe(
            'This user has an assigned desk and cannot book another desk.',
        );
        expect(savedBookings().length).toBe(0);
    });

    it('should block self desk bookings by default when the user has an assigned desk', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: currentUser().email,
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
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
        expect(savedBookings().length).toBe(0);
    });

    it('should allow self desk bookings for users with an assigned desk when the setting is enabled', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'allow';
            }
            return undefined;
        });
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: currentUser().email,
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
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

        expect(savedBookings().length).toBe(1);
    });

    it('should block self desk bookings when assigned resource booking is other only', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'other_only';
            }
            return undefined;
        });
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: currentUser().email,
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
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
        expect(savedBookings().length).toBe(0);
    });

    it('should resolve assigned-resource booking from desk settings regardless of the active flow type', () => {
        const get = spectator.inject(SettingsService).get as Mock;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'allow';
            }
            return undefined;
        });
        // Simulate another flow (e.g. parking) being active on the shared
        // singleton. The desk allowance must remain stable so the reserved-desk
        // block does not appear intermittently.
        spectator.service.newForm('parking');
        expect(spectator.service.assignedResourceBooking('desk')).toBe('allow');
        spectator.service.newForm('desk');
        expect(spectator.service.assignedResourceBooking('desk')).toBe('allow');
    });

    it('should keep the form available when assigned resource booking is other only', () => {
        const get = spectator.inject(SettingsService).get as Mock;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'other_only';
            }
            return undefined;
        });
        expect(spectator.service.assignedResourceBooking('desk')).toBe(
            'other_only',
        );
    });

    it('should resolve assigned-resource booking independently for each resource type', () => {
        const get = spectator.inject(SettingsService).get as Mock;
        get.mockImplementation((key: string) => {
            if (key === 'app.parking.assigned_resource_booking') {
                return 'deny';
            }
            return undefined;
        });
        expect(spectator.service.assignedResourceBooking('parking')).toBe(
            'deny',
        );
        expect(spectator.service.assignedResourceBooking('desk')).toBe(
            'other_only',
        );
        expect(spectator.service.assignedResourceBooking('locker')).toBe(
            'other_only',
        );
    });

    it('should fall back to booking-level assigned-resource settings for any resource type', () => {
        const get = spectator.inject(SettingsService).get as Mock;
        get.mockImplementation((key: string) => {
            if (key === 'app.bookings.assigned_resource_booking') {
                return 'deny';
            }
            return undefined;
        });
        expect(spectator.service.assignedResourceBooking('desk')).toBe('deny');
        expect(spectator.service.assignedResourceBooking('parking')).toBe(
            'deny',
        );
        expect(spectator.service.assignedResourceBooking('locker')).toBe(
            'deny',
        );
    });

    it('should allow desk bookings for others when self-booking is prevented for reserved-desk users', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        get.mockImplementation((key: string) => {
            if (key === 'app.desks.assigned_resource_booking') {
                return 'other_only';
            }
            return undefined;
        });
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'assigned-desk',
                                assigned_to: currentUser().email,
                            },
                        ],
                    },
                },
                zone: { id: 'lvl-1' },
            },
        ] as any);
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

        expect(savedBookings().length).toBe(1);
        expect((savedBookings()[0] as Booking).user_email).toBe(
            'other.user@example.com',
        );
    });

    it('should clear saved host changes after a permission error', async () => {
        const current_user = currentUser();
        (spectator.inject(PaymentsService) as any).enabled = false;
        // saveBooking -> createBooking -> post; reject it to simulate a 403.
        vi.mocked(ts_client.post).mockImplementation((async (url: string) => {
            if (url.includes('/clashing-assets')) return [];
            throw { status: 403, error: 'Forbidden' };
        }) as any);
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

    it('should post current-day all-day bookings from the all-day period start', async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 2, 20, 10, 2, 0, 0));
        try {
            const get = spectator.inject(SettingsService).get as Mock;
            (spectator.inject(PaymentsService) as any).enabled = false;
            get.mockImplementation((key: string) => {
                if (key === 'app.bookings.all_day_period') {
                    return { start: 9, end: 17 };
                }
                return undefined;
            });

            spectator.service.newForm('desk');
            spectator.service.model.update((m) => ({
                ...m,
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                date: new Date(2026, 2, 20, 8, 0, 0, 0).valueOf(),
            }));
            spectator.service.model.update((m) => ({ ...m, all_day: true }));

            await spectator.service.postForm(true);

            expect(savedBookings().length).toBe(1);
            expect(savedBookings()[0]).toMatchObject({
                all_day: true,
                booking_start: Math.floor(
                    new Date(2026, 2, 20, 9, 0, 0, 0).valueOf() / 1000,
                ),
                booking_end: Math.floor(
                    new Date(2026, 2, 20, 17, 0, 0, 0).valueOf() / 1000,
                ),
                date_end: new Date(2026, 2, 20, 17, 0, 0, 0).valueOf(),
            });
        } finally {
            vi.useRealTimers();
        }
    });

    it('should use the building timezone for recurring clash checks and saving', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
        get.mockImplementation((key: string) =>
            key === 'app.desks.use_building_timezone' ? true : undefined,
        );
        (spectator.inject(OrganisationService).building as any).timezone =
            'America/New_York';
        (spectator.inject(PaymentsService) as any).enabled = false;
        const date = Date.now() + 24 * 60 * 60 * 1000;
        const desk = {
            id: 'desk-1',
            name: 'Desk 1',
            zone: { id: 'lvl-1', parent_id: 'bld-1' },
            features: [],
        };
        spectator.service.newForm(
            'desk',
            new Booking({
                booking_type: 'desk',
                date,
                duration: 60,
                asset_id: desk.id,
                timezone: 'Australia/Sydney',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: desk.id,
            asset_name: desk.name,
            resources: [desk],
            recurrence_type: 'daily',
            recurrence_interval: 1,
            recurrence_end: Math.floor((date + 7 * 24 * 60 * 60 * 1000) / 1000),
        }));
        vi.spyOn(
            spectator.service as any,
            '_checkResourceRules',
        ).mockResolvedValue(true);

        await spectator.service.postForm(false, false);

        expect(clashBookings()).toHaveLength(1);
        expect(clashBookings()[0].timezone).toBe('America/New_York');
        expect(savedBookings()).toHaveLength(1);
        expect(savedBookings()[0].timezone).toBe('America/New_York');
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([desk_list[1], desk_list[2]]);
        vi.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_desks: string[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
                const value = spectator.service.model();
                saved_desks.push(value.asset_id);
                return new Booking({
                    id: `booking-${saved_desks.length}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
        });
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
                    email: currentUser().email,
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([desk_list[1]]);
        vi.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_forms: {
            asset_id: string;
            resource_id: string;
            extension_name: string;
        }[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
                const value = spectator.service.model();
                saved_forms.push({
                    asset_id: value.asset_id,
                    resource_id: value.resources?.[0]?.id,
                    extension_name: value.name,
                });
                return new Booking({
                    id: `booking-${saved_forms.length}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
        });
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
            name: 'Desk 1',
            map_id: 'map-1',
            resources: [desk_list[0]],
        }));
        spectator.service.setOptions({
            type: 'desk',
            group: true,
            members: [
                {
                    email: currentUser().email,
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
            {
                asset_id: 'desk-1',
                resource_id: 'desk-1',
                extension_name: 'Desk 1',
            },
            {
                asset_id: 'desk-2',
                resource_id: 'desk-2',
                extension_name: 'Desk 2',
            },
        ]);
    });

    it('should create a group container parent before desk group booking children', async () => {
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([desk_list[1]]);
        vi.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const child_parent_ids: string[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
                const value = spectator.service.model();
                child_parent_ids.push(value.parent_id);
                return new Booking({
                    id: `booking-child-${child_parent_ids.length}`,
                    parent_id: value.parent_id,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
        });
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
                    email: currentUser().email,
                    name: '<empty>',
                } as any,
                {
                    email: 'member.one@example.com',
                    name: 'Member One',
                } as any,
            ],
        });

        await spectator.service.postFormForGroup();

        expect(savedBookings().length).toBe(1);
        expect(savedBookings()[0]).toEqual(
            expect.objectContaining({
                booking_type: 'group',
                asset_name: 'Group Booking',
                type: 'group',
            }),
        );
        expect(
            (savedBookings()[0] as Booking).extension_data.group_resource_type,
        ).toBe('desk');
        expect(child_parent_ids).toEqual(['booking-group', 'booking-group']);
    });

    it('should complete desk group bookings with child errors when rollback is disabled', async () => {
        const get = spectator.inject(SettingsService).get as Mock;
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([desk_list[1], desk_list[2]]);
        vi.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_users: string[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
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
        });
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
                    email: currentUser().email,
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
            expect.objectContaining({ user_email: currentUser().email }),
        );

        expect(saved_users).toEqual([
            currentUser().email,
            'member.one@example.com',
            'member.two@example.com',
        ]);
        expect(ts_client.del).not.toHaveBeenCalled();
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([desk_list[1], desk_list[2]]);
        vi.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const saved_names: string[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
                const value = spectator.service.model();
                saved_names.push(value.asset_name);
                return new Booking({
                    id: `booking-${saved_names.length}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
        });
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
                    email: currentUser().email,
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            all_desks,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            [all_desks[1], all_desks[2]],
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([all_desks[2]]);
        const saved_forms: { user_email: string; asset_id: string }[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
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
        });
        spectator.service.newForm(
            'desk',
            new Booking({
                id: 'booking-parent',
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
                user_email: currentUser().email,
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
                    email: currentUser().email,
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
                user_email: currentUser().email,
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
            { user_email: currentUser().email, asset_id: 'desk-1' },
            { user_email: 'member.one@example.com', asset_id: 'desk-2' },
            { user_email: 'member.two@example.com', asset_id: 'desk-3' },
        ]);
        expect(new Set(saved_forms.map((_) => _.asset_id)).size).toBe(
            saved_forms.length,
        );
    });

    it('should update group container metadata when editing container-backed desk groups', async () => {
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            all_desks,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            [all_desks[1]],
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([all_desks[1]]);
        const saved_forms: { id: string; parent_id: string }[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
                const value = spectator.service.model();
                saved_forms.push({ id: value.id, parent_id: value.parent_id });
                return new Booking({
                    id: value.id || `booking-child-${saved_forms.length}`,
                    parent_id: value.parent_id,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                });
        });
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
                user_email: currentUser().email,
                extension_data: {
                    group: 'group-ref',
                    map_id: 'map-1',
                    group_members: [
                        { email: currentUser().email, name: '<empty>' },
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
                    email: currentUser().email,
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
                user_email: currentUser().email,
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
            }),
        ]);

        expect(savedBookings().length).toBe(1);
        expect(savedBookings()[0]).toEqual(
            expect.objectContaining({
                id: 'booking-group',
                booking_type: 'group',
                type: 'group',
            }),
        );
        expect(
            (savedBookings()[0] as Booking).extension_data.group_members,
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
        vi.spyOn(spectator.service, 'listResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(spectator.service, 'listAvailableResources').mockResolvedValue(
            desk_list,
        );
        vi.spyOn(
            spectator.service as any,
            '_getNearbyResources',
        ).mockResolvedValue([desk_list[1], desk_list[2]]);
        vi.spyOn(
            spectator.service as any,
            '_checkResourceAvailable',
        ).mockResolvedValue(true);
        const group_members_payload = [
            {
                id: '',
                email: currentUser().email,
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
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
                const value = spectator.service.model();
                booking_count++;
                return new Booking({
                    id: `booking-${booking_count}`,
                    user_email: value.user_email,
                    asset_id: value.asset_id,
                    extension_data: { group_members: group_members_payload },
                });
        });
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
                    email: currentUser().email,
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
            currentUser().email,
        );
    });

    it('should only clear grouped visitor edit form after all siblings are saved', async () => {
        const clear_form = vi.spyOn(spectator.service, 'clearForm');
        const saved_forms: {
            asset_id: string;
            zones: string[];
            location: string;
        }[] = [];
        const post_form = vi
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
                } as any);
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

    it('should add a container when editing a legacy visitor group', async () => {
        const saved_forms: {
            id: string;
            parent_id: string;
            asset_id: string;
            asset_name: string;
        }[] = [];
        vi.spyOn(spectator.service, 'postForm').mockImplementation(async () => {
            const value = spectator.service.model();
            saved_forms.push({
                id: value.id,
                parent_id: value.parent_id,
                asset_id: value.asset_id,
                asset_name: value.asset_name,
            });
            return new Booking({
                ...value,
                id: value.id || 'booking-new',
            } as any);
        });
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'booking-removed',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'removed@example.com',
                asset_name: 'Removed Visitor',
            }),
        );
        spectator.service.setOptions({
            type: 'visitor',
            group: true,
            members: [
                new User({
                    name: 'Retained Visitor',
                    email: 'retained@example.com',
                }),
                new User({
                    name: 'New Visitor',
                    email: 'new@example.com',
                }),
            ],
        });

        await spectator.service.editFormForGroup([
            new Booking({
                id: 'booking-removed',
                booking_type: 'visitor',
                asset_id: 'removed@example.com',
                asset_name: 'Removed Visitor',
            }),
            new Booking({
                id: 'booking-retained',
                booking_type: 'visitor',
                asset_id: 'retained@example.com',
                asset_name: 'Retained Visitor',
            }),
        ]);

        expect(savedBookings()).toHaveLength(1);
        expect(savedBookings()[0]).toEqual(
            expect.objectContaining({
                booking_type: 'group',
                asset_name: 'Group Booking',
                type: 'group',
            }),
        );
        expect(
            (savedBookings()[0] as Booking).extension_data.group_resource_type,
        ).toBe('visitor');
        expect(
            (savedBookings()[0] as Booking).extension_data.group_members.map(
                (member) => member.email,
            ),
        ).toEqual(['retained@example.com', 'new@example.com']);
        expect(saved_forms).toEqual([
            {
                id: 'booking-retained',
                parent_id: 'booking-group',
                asset_id: 'retained@example.com',
                asset_name: 'Retained Visitor',
            },
            {
                id: '',
                parent_id: 'booking-group',
                asset_id: 'new@example.com',
                asset_name: 'New Visitor',
            },
        ]);
        expect(ts_client.del).toHaveBeenCalledWith(
            expect.stringContaining('/booking-removed?'),
            expect.anything(),
        );
    });

    it('should load unlinked visitor group siblings by their `grp-` description', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([
            {
                id: 'booking-one',
                type: 'visitor',
                description: 'grp-abc12345',
                asset_id: 'visitor.one@example.com',
            },
            {
                id: 'booking-two',
                type: 'visitor',
                description: 'grp-abc12345',
                asset_id: 'visitor.two@example.com',
            },
            {
                id: 'booking-other',
                type: 'visitor',
                description: 'grp-zzz99999',
                asset_id: 'visitor.three@example.com',
            },
            {
                id: 'booking-single',
                type: 'visitor',
                description: 'Vendor Visit',
                asset_id: 'visitor.four@example.com',
            },
        ] as any);
        spectator.service.setOptions({ type: 'visitor' });

        const siblings = await spectator.service.loadGroupSiblings(
            new Booking({
                id: 'booking-one',
                booking_type: 'visitor',
                description: 'grp-abc12345',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
            }),
        );

        expect(siblings.map((_) => _.id)).toEqual([
            'booking-one',
            'booking-two',
        ]);
    });

    it('should include bookings made by the current user when loading group siblings', async () => {
        spectator.service.setOptions({ type: 'visitor' });

        await spectator.service.loadGroupSiblings(
            new Booking({
                id: 'booking-one',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                user_email: 'host@example.com',
                booked_by_email: 'current.user@example.com',
            }),
        );

        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('include_booked_by=true'),
        );
    });

    it('should save each visitor against their own asset on group edit', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'booking-one',
                parent_id: 'booking-group',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                title: 'Vendor Visit',
                asset_id: 'visitor.one@example.com',
                asset_name: 'Visitor One',
                zones: ['org-1', 'bld-1'],
                extension_data: { visitor_name: 'Visitor One' },
            }),
        );
        spectator.service.setOptions({
            type: 'visitor',
            group: true,
            members: [
                new User({
                    name: 'Visitor One',
                    email: 'visitor.one@example.com',
                }),
                new User({
                    name: 'Visitor Two',
                    email: 'visitor.two@example.com',
                }),
            ],
        });

        await spectator.service.editFormForGroup([
            new Booking({
                id: 'booking-one',
                parent_id: 'booking-group',
                booking_type: 'visitor',
                asset_id: 'visitor.one@example.com',
                asset_name: 'Visitor One',
            }),
            new Booking({
                id: 'booking-two',
                parent_id: 'booking-group',
                booking_type: 'visitor',
                asset_id: 'visitor.two@example.com',
                asset_name: 'Visitor Two',
            }),
        ]);

        // `asset_ids` is what the API stores the visitor against. Carrying the
        // edited booking's stale value onto every sibling made all of them
        // resolve to the first visitor's name in the bookings list.
        const visitor_bookings = savedBookings().filter(
            (_: any) => _.booking_type === 'visitor',
        );
        expect(
            visitor_bookings.map((_: any) => [_.asset_id, _.asset_ids]),
        ).toEqual([
            ['visitor.one@example.com', ['visitor.one@example.com']],
            ['visitor.two@example.com', ['visitor.two@example.com']],
        ]);
    });

    it('should not save a stale asset_ids when the booked resource changes', async () => {
        (spectator.inject(PaymentsService) as any).enabled = false;
        spectator.service.newForm(
            'desk',
            new Booking({
                id: 'booking-desk',
                booking_type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
            }),
        );
        spectator.service.model.update((m) => ({
            ...m,
            asset_id: 'desk-2',
            asset_name: 'Desk 2',
        }));

        await spectator.service.postForm(true);

        expect(savedBookings().length).toBe(1);
        expect((savedBookings()[0] as Booking).asset_ids).toEqual(['desk-2']);
    });
});

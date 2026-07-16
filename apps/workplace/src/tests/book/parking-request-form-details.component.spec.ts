import { Injector, signal, WritableSignal } from '@angular/core';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormValue,
    generateBookingForm,
    ParkingService,
} from '@placeos/bookings';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { ParkingRequestFormDetailsComponent } from '../../app/book/parking-request-flow/parking-request-form-details.component';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('ParkingRequestFormDetailsComponent', () => {
    let spectator: Spectator<ParkingRequestFormDetailsComponent>;
    let settings: SettingsService;
    let now_spy: any | null = null;
    const getSetting = (key: string) =>
        key === 'app.bookings.use_building_timezone' ||
        key === 'app.parking.use_building_timezone';
    const setNow = (time: number) => {
        now_spy?.mockRestore();
        now_spy = vi.spyOn(Date, 'now').mockReturnValue(time);
    };

    /** Drain signal effects and any async work they schedule. */
    const flush = async () => {
        for (let i = 0; i < 5; i++) {
            TestBed.flushEffects();
            // Macrotask so any effect-scheduled async work (setTimeout debounce,
            // awaited ts-client calls) drains between rounds.
            await new Promise((resolve) => setTimeout(resolve));
            await Promise.resolve();
        }
    };

    /**
     * Build a signal-forms booking form (mirroring the production wiring of
     * `BookingFormService` + `generateBookingForm`) seeded with the supplied
     * values, attach the UTC time sync, and wire both inputs the component
     * expects (`form` and `model_input`).
     */
    const attachForm = (
        values: Partial<BookingFormValue>,
        time_sync_options: Record<string, any> = {},
    ): { form: BookingForm; model: WritableSignal<BookingFormValue> } => {
        const injector = spectator.inject(Injector);
        const { model, form, time_sync } = TestBed.runInInjectionContext(() =>
            generateBookingForm(undefined, injector),
        );
        // The default time sync uses the local timezone; reconfigure to UTC so
        // the date/duration snapping matches the production parking flow tests.
        time_sync.updateOptions({ timezone: 'UTC', ...time_sync_options });
        model.update((m) => ({
            ...m,
            booking_type: 'parking',
            request_type: 'standard',
            user: null,
            prefer_booked_location_first: false,
            vehicle_type: 'car',
            plate_number: 'ABC123',
            approver_group: '',
            ...values,
        }));
        // Set the inputs via the component ref (not `spectator.setInput`, which
        // runs the test-setup-patched `detectChanges`) and drive the component's
        // reactive logic with `TestBed.flushEffects()`. Combined with the empty
        // template override (see `beforeEach`), this exercises the component's
        // effects/computeds without rendering the signal-forms + mat-select
        // template.
        spectator.fixture.componentRef.setInput('form', form);
        spectator.fixture.componentRef.setInput('model_input', model);
        TestBed.flushEffects();
        return { form, model };
    };
    const createComponent = createComponentFactory({
        component: ParkingRequestFormDetailsComponent,
        providers: [
            // Manual-CD harness: this spec renders experimental signal-forms
            // `[formField]` + mat-select, which under auto-detect emit benign
            // async material errors that vitest reports as unhandled.
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(ParkingService, {
                spaces: signal([]),
            }),
            MockProvider(SettingsService as any, {
                get: vi.fn(getSetting),
                saveUserSetting: vi.fn(),
                time_format: 'h:mm a',
            }),
            MockProvider(OrganisationService as any, {
                initialised: signal(true),
                active_building: signal({ id: 'bld-1', timezone: 'UTC' }),
                active_buildings: signal([]),
                level_list: signal([]),
                building: { id: 'bld-1', timezone: 'UTC' },
            }),
        ],
    });

    afterEach(() => {
        vi.mocked(settings.get).mockImplementation(getSetting);
        vi.restoreAllMocks();
        (ts_client.get as any).mockReset();
        (ts_client.get as any).mockResolvedValue([]);
        (ts_client.query as any).mockReset();
        (ts_client.query as any).mockResolvedValue({ data: [] });
        now_spy = null;
    });

    beforeEach(() => {
        setCurrentUser(
            new StaffUser({
                id: 'me',
                email: 'me@test.com',
                name: 'Me',
                groups: [],
            } as any),
        );
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.query).mockResolvedValue({ data: [] } as any);
        // Pin "now" to a moment before the form's default date so that the
        // shift-applies-to-form helpers don't roll the booking forward into
        // tomorrow on tests that don't care about that behaviour.
        setNow(new Date('2026-04-08T07:00:00.000Z').valueOf());
        // Render the component with an empty template. Every assertion in this
        // spec reads component signals / signal-forms field state directly and
        // never touches the DOM, so the real signal-forms + mat-select template
        // is unnecessary — and rendering it is what lets a few tests that mutate
        // shift state and then flush trip checkNoChanges (NG0100). With no
        // template, the component's effects still run (driving the logic under
        // test) but there is nothing to re-render mid-flush.
        TestBed.overrideComponent(ParkingRequestFormDetailsComponent, {
            set: { template: '' },
        });
        spectator = createComponent();
        settings = spectator.inject(SettingsService);
        vi.mocked(settings.saveUserSetting).mockReset();
        // Configure the parking settings BEFORE building/attaching the form.
        // `settingSignal` values live in a module-global cache that survives
        // TestBed teardown, so whatever window a previous test wrote (e.g. a
        // cross-midnight shift) is still in place here. `attachForm` flushes the
        // component's effects, and if it runs against those stale settings the
        // shift/duration/time-sync effects oscillate and blow past change
        // detection's iteration cap (NG0103). Seeding the settings first means
        // the form is only ever flushed against this test's known-good config.
        spectator.component.require_plate_number.set(false);
        spectator.component.require_space_restriction.set(false);
        spectator.component.space_restriction_options_setting.set([]);
        spectator.component.shift_options_setting.set([
            {
                id: 'morning',
                name: 'Morning',
                start_time: 480,
                end_time: 720,
            },
            {
                id: 'afternoon',
                name: 'Afternoon',
                start_time: 780,
                end_time: 1020,
            },
        ]);
        spectator.component.request_types_setting.set([
            {
                id: 'standard',
                name: 'Standard',
            },
            {
                id: 'forced',
                name: 'Forced',
                forced_time: {
                    start_time: 540,
                    end_time: 660,
                },
            },
            {
                id: 'forced_overnight',
                name: 'Out of Hours',
                forced_time: {
                    start_time: 1021,
                    end_time: 419,
                },
            },
        ]);
        spectator.component.hide_custom_shift.set(false);
        spectator.component.default_location_from_desk_booking.set(false);
        attachForm({
            date: new Date('2026-04-08T08:00:00.000Z').valueOf(),
            duration: 240,
        });
    });

    it('should filter and de-duplicate saved plate number suggestions', () => {
        vi.mocked(settings.get).mockImplementation((key: string) => {
            if (key === 'plate_number') return 'ABC123';
            if (key === 'plate_numbers')
                return ['abc123', 'XYZ789', 'CAR456'];
            return getSetting(key);
        });
        spectator.component.setPlateNumber('7');

        expect(spectator.component.plate_number_options()).toEqual(['XYZ789']);
    });

    it('should remove a plate number from saved suggestions', () => {
        vi.mocked(settings.get).mockImplementation((key: string) => {
            if (key === 'plate_number') return 'ABC123';
            if (key === 'plate_numbers')
                return ['abc123', 'XYZ789', 'CAR456'];
            return getSetting(key);
        });
        const event = {
            preventDefault: vi.fn(),
            stopPropagation: vi.fn(),
        } as unknown as Event;

        spectator.component.removePlateNumber(event, 'ABC123');

        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            'plate_numbers',
            ['XYZ789', 'CAR456'],
        );
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            'plate_number',
            '',
        );
        expect(spectator.component.plate_number_options()).not.toContain(
            'ABC123',
        );
        expect(event.preventDefault).toHaveBeenCalled();
        expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('should apply shift times even when the start is earlier than now', () => {
        // Rebuild the form with the real booking-form time sync attached so
        // we exercise the same date/duration snapping behaviour as prod.
        attachForm({
            date: new Date('2026-04-08T12:00:00.000Z').valueOf(),
            date_end: new Date('2026-04-08T16:00:00.000Z').valueOf(),
            duration: 240,
            all_day: false,
        });

        // Pretend "now" is 10am UTC on 2026-04-08 so the morning shift
        // (08:00-12:00) starts in the past — the time sync would normally
        // snap the form's date back to "now" and throw away the shift time.
        setNow(new Date('2026-04-08T10:00:00.000Z').valueOf());
        spectator.component.setShiftType('morning');
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.model().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
        expect(spectator.component.model().date_end).toBe(
            base_day + 720 * 60 * 1000,
        );
    });

    it('should land on the first preset on open without any user interaction (with the real time sync)', async () => {
        // Reproduce the exact production wiring: `generateBookingForm`-style
        // form with the booking-form `duration` validator + time sync, seeded
        // with the same `Date.now() + 5min` / `duration = 60` defaults that the
        // BookingFormService singleton creates for fresh bookings.
        const fake_now = new Date('2026-04-08T10:05:00.000Z').valueOf();
        setNow(fake_now);
        attachForm({
            date: fake_now + 5 * 60 * 1000,
            date_end: fake_now + 65 * 60 * 1000,
            duration: 60,
            all_day: false,
        });
        await spectator.component.ngOnInit();

        // Without touching anything, the form must end up booking the
        // first preset shift (morning, 8-12) — *not* the stale "now + 60min"
        // window the booking-form service seeds every form with.
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.shift_type()).toBe('morning');
        expect(spectator.component.model().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
        expect(spectator.component.model().all_day).toBe(false);
    });

    it('should not override an explicit user shift selection when settings change later', () => {
        spectator.component.setShiftType('afternoon');
        expect(spectator.component.shift_type()).toBe('afternoon');

        // Simulate a settings reload with the same options — the effect
        // should NOT clobber the user's explicit pick.
        spectator.component.shift_options_setting.set([
            { id: 'morning', name: 'Morning', start_time: 480, end_time: 720 },
            {
                id: 'afternoon',
                name: 'Afternoon',
                start_time: 780,
                end_time: 1020,
            },
        ]);
        TestBed.flushEffects();

        expect(spectator.component.shift_type()).toBe('afternoon');
    });

    it('should re-apply the preferred shift when shift options load asynchronously after init', async () => {
        // Production parking flow: settings load from PlaceOS metadata
        // *after* the component's ngOnInit fires. Until they resolve,
        // `shift_options_setting` returns the empty default, so the
        // initial _applyPreferredShift falls through to "no presets →
        // custom" with the booking-form's stale `now + 60min` window.
        // When the settings finally arrive we must re-pick the preferred
        // shift so the form ends up on a real preset before submission.
        spectator.component.shift_options_setting.set([]);
        const fake_now = new Date('2026-04-08T10:05:00.000Z').valueOf();
        setNow(fake_now);
        spectator.component.model.update((m) => ({
            ...m,
            date: fake_now,
            duration: 60,
        }));
        await spectator.component.ngOnInit();

        // At this point shift options haven't loaded yet — the form is
        // sitting at the buggy default that prompted this report.
        expect(spectator.component.shift_type()).toBe('custom');

        // Settings finally arrive.
        spectator.component.shift_options_setting.set([
            { id: 'morning', name: 'Morning', start_time: 480, end_time: 720 },
            {
                id: 'afternoon',
                name: 'Afternoon',
                start_time: 780,
                end_time: 1020,
            },
        ]);
        TestBed.flushEffects();

        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.shift_type()).toBe('morning');
        expect(spectator.component.model().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
    });

    it('should default to the first preset shift instead of leaving the form at the booking-form defaults', async () => {
        // Reproduce the singleton booking form's "fresh" state: a fixed
        // current time + 60 minute window. Without an explicit reset the
        // parking flow would land here on first open.
        const fake_now = new Date('2026-04-08T10:05:00.000Z').valueOf();
        setNow(fake_now);
        spectator.component.model.update((m) => ({
            ...m,
            date: fake_now,
            duration: 60,
        }));
        await spectator.component.ngOnInit();

        // Even though presets exist, the form was on a "current time + 1h"
        // window that matches no preset. The init path must default to the
        // first configured shift rather than falling through to custom.
        expect(spectator.component.shift_type()).toBe('morning');
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.model().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
    });

    it('should default the selected building to the first desk booking location for the selected day', async () => {
        spectator.component.default_location_from_desk_booking.set(true);
        const org = spectator.inject(OrganisationService) as any;
        (org.active_buildings as any).set([
            { id: 'bld-1', timezone: 'UTC', levels: [{ id: 'lvl-1' }] },
            { id: 'bld-2', timezone: 'UTC', levels: [{ id: 'lvl-2' }] },
        ]);
        (org.level_list as any).set([
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-2', tags: ['parking'] },
        ]);
        org.building = { id: 'bld-1', timezone: 'UTC' };
        (ts_client.get as any).mockResolvedValue([
            {
                id: 'desk-booking-1',
                booking_type: 'desk',
                user_email: 'me@test.com',
                booking_start: 1,
                booking_end: 2,
                zones: ['lvl-2', 'bld-2'],
            },
            {
                id: 'desk-booking-2',
                booking_type: 'desk',
                user_email: 'me@test.com',
                booking_start: 1,
                booking_end: 2,
                zones: ['lvl-1', 'bld-1'],
            },
        ] as any);

        await spectator.component.ngOnInit();
        await flush();

        expect(org.building.id).toBe('bld-2');
        expect(spectator.component.desk_booking_building_id()).toBe('bld-2');
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('/api/staff/v1/bookings?'),
        );
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('period_start='),
        );
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('type=desk'),
        );
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('email=me%40test.com'),
        );
    });

    it('should not default the selected building from desk bookings when disabled by settings', async () => {
        const org = spectator.inject(OrganisationService) as any;
        (org.active_buildings as any).set([
            { id: 'bld-1', timezone: 'UTC', levels: [{ id: 'lvl-1' }] },
            { id: 'bld-2', timezone: 'UTC', levels: [{ id: 'lvl-2' }] },
        ]);
        (org.level_list as any).set([
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-2', tags: ['parking'] },
        ]);
        org.building = { id: 'bld-1', timezone: 'UTC' };

        await spectator.component.ngOnInit();

        expect(org.building.id).toBe('bld-1');
        expect(spectator.component.desk_booking_building_id()).toBe('');
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should use the selected host when defaulting the selected building from desk bookings', async () => {
        spectator.component.default_location_from_desk_booking.set(true);
        const org = spectator.inject(OrganisationService) as any;
        (org.active_buildings as any).set([
            { id: 'bld-1', timezone: 'UTC', levels: [{ id: 'lvl-1' }] },
            { id: 'bld-2', timezone: 'UTC', levels: [{ id: 'lvl-2' }] },
        ]);
        (org.level_list as any).set([
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-2', tags: ['parking'] },
        ]);
        org.building = { id: 'bld-1', timezone: 'UTC' };
        (ts_client.get as any).mockResolvedValue([]);
        await spectator.component.ngOnInit();
        await flush();
        expect(org.building.id).toBe('bld-1');

        (ts_client.get as any).mockResolvedValue([
            {
                id: 'current-user-desk',
                booking_type: 'desk',
                user_email: 'me@test.com',
                booking_start: 1,
                booking_end: 2,
                zones: ['lvl-2', 'bld-2'],
            },
            {
                id: 'selected-user-desk',
                booking_type: 'desk',
                user_email: 'other@test.com',
                booking_start: 1,
                booking_end: 2,
                zones: ['lvl-1', 'bld-1'],
            },
        ] as any);

        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'other@test.com', name: 'Other' } as any,
        }));
        await flush();

        expect(org.building.id).toBe('bld-1');
        expect(spectator.component.desk_booking_building_id()).toBe('bld-1');
    });

    it('should clear the desk booking location indicator when the user manually selects a building', async () => {
        spectator.component.default_location_from_desk_booking.set(true);
        const org = spectator.inject(OrganisationService) as any;
        const bld_1 = {
            id: 'bld-1',
            timezone: 'UTC',
            levels: [{ id: 'lvl-1' }],
        };
        const bld_2 = {
            id: 'bld-2',
            timezone: 'UTC',
            levels: [{ id: 'lvl-2' }],
        };
        (org.active_buildings as any).set([bld_1, bld_2]);
        (org.level_list as any).set([
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-2', tags: ['parking'] },
        ]);
        org.building = bld_1;
        (ts_client.get as any).mockResolvedValue([
            {
                id: 'desk-booking-1',
                booking_type: 'desk',
                user_email: 'me@test.com',
                booking_start: 1,
                booking_end: 2,
                zones: ['lvl-2', 'bld-2'],
            },
        ] as any);
        await spectator.component.ngOnInit();
        await flush();
        expect(spectator.component.desk_booking_building_id()).toBe('bld-2');

        spectator.component.setBuilding(bld_1);

        expect(org.building.id).toBe('bld-1');
        expect(spectator.component.desk_booking_building_id()).toBe('');
    });

    it('should hide buildings without parking levels from the location options', async () => {
        const org = spectator.inject(OrganisationService) as any;
        (org.active_buildings as any).set([
            { id: 'bld-1', timezone: 'UTC' },
            { id: 'bld-2', timezone: 'UTC' },
        ]);
        (org.level_list as any).set([
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-2', tags: ['level'] },
        ]);

        const buildings = spectator.component.building_list();

        expect(buildings.map((_) => _.id)).toEqual(['bld-1']);
    });

    it('should hide buildings listed in the hidden buildings setting', async () => {
        const org = spectator.inject(OrganisationService) as any;
        (org.active_buildings as any).set([
            { id: 'bld-1', timezone: 'UTC' },
            { id: 'bld-2', timezone: 'UTC' },
        ]);
        (org.level_list as any).set([
            { id: 'lvl-1', parent_id: 'bld-1', tags: ['parking'] },
            { id: 'lvl-2', parent_id: 'bld-2', tags: ['parking'] },
        ]);
        spectator.component.hidden_buildings.set(['bld-1']);
        TestBed.flushEffects();

        const buildings = spectator.component.building_list();

        expect(buildings.map((_) => _.id)).toEqual(['bld-2']);
        spectator.component.hidden_buildings.set([]);
        TestBed.flushEffects();
    });

    it('should switch the active building when the selected building is not a valid parking location', async () => {
        const org = spectator.inject(OrganisationService) as any;
        (org.active_building as any).set({ id: 'bld-1', timezone: 'UTC' });
        org.building = { id: 'bld-1', timezone: 'UTC' };
        (org.active_buildings as any).set([
            { id: 'bld-1', timezone: 'UTC' },
            { id: 'bld-2', timezone: 'UTC' },
        ]);
        (org.level_list as any).set([
            { id: 'lvl-2', parent_id: 'bld-2', tags: ['parking'] },
        ]);

        await spectator.component.ngOnInit();
        await flush();
        await new Promise((resolve) => setTimeout(resolve));

        expect(org.building.id).toBe('bld-2');
    });

    it('should clear all_day when a shift is selected so postForm honours the shift window', () => {
        // Booking-form service seeds new bookings with `all_day` from the
        // `all_day_default` setting. If we leave it set, postForm overwrites
        // date/duration with the building's all-day period regardless of
        // what shift the user picked — exactly the bug being reproduced.
        attachForm({
            date: new Date('2026-04-08T08:00:00.000Z').valueOf(),
            date_end: new Date('2026-04-08T17:00:00.000Z').valueOf(),
            duration: 540,
            all_day: true,
        });

        spectator.component.setShiftType('afternoon');

        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.model().all_day).toBe(false);
        expect(spectator.component.model().date).toBe(
            base_day + 780 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
    });

    it('should not create multi-day parking dates past the booking limit', async () => {
        setNow(new Date('2026-05-20T07:00:00.000Z').valueOf());
        spectator = createComponent();
        const { model } = attachForm({
            date: new Date('2026-06-03T08:00:00.000Z').valueOf(),
            date_end: new Date('2026-06-03T12:00:00.000Z').valueOf(),
            duration: 240,
            all_day: false,
            recurrence_type: 'daily',
            recurrence_days: 62,
            recurrence_interval: 1,
            recurrence_end: null,
        });
        spectator.component.shift_options_setting.set([
            {
                id: 'morning',
                name: 'Morning',
                start_time: 480,
                end_time: 720,
            },
            {
                id: 'afternoon',
                name: 'Afternoon',
                start_time: 780,
                end_time: 1020,
            },
        ]);
        spectator.component.request_types_setting.set([
            { id: 'standard', name: 'Standard' },
        ]);
        spectator.component.hide_custom_shift.set(false);
        await spectator.component.ngOnInit();

        spectator.component.setNumWeeks(2);

        const expected_date = startOfDay(new Date('2026-06-03T08:00:00.000Z'));
        expect(spectator.component.weekdays).toEqual([expected_date.valueOf()]);
        expect(model().recurrence_end).toBe(
            Math.floor(endOfDay(expected_date).valueOf() / 1000),
        );
    });

    it('should roll forward to the next day when the selected shift has already ended', () => {
        // Rebuild the form with the real booking-form `duration` validator +
        // time sync.
        attachForm({
            date: new Date('2026-04-08T00:00:00.000Z').valueOf(),
            date_end: new Date('2026-04-08T04:00:00.000Z').valueOf(),
            duration: 240,
            all_day: false,
        });

        // Pretend "now" is 2pm UTC on 2026-04-08 — the morning shift
        // (08:00-12:00) has already ended on today, so applying it as-is
        // would fail the booking-form `duration` validator.
        setNow(new Date('2026-04-08T14:00:00.000Z').valueOf());
        spectator.component.setShiftType('morning');
        TestBed.flushEffects();
        const next_day = new Date('2026-04-09T00:00:00.000Z').valueOf();
        expect(spectator.component.model().date).toBe(
            next_day + 480 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
        expect(spectator.component.form().duration().valid()).toBe(true);
    });

    it('should apply preset shift times that cross midnight', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.shift_options_setting.set([
            {
                id: 'overnight',
                name: 'Overnight',
                start_time: 1021,
                end_time: 419,
            },
        ]);

        spectator.component.setShiftType('overnight');

        expect(spectator.component.shift_type()).toBe('overnight');
        expect(spectator.component.model().date).toBe(
            base_day + 1021 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(838);
    });

    it('should not let booking bookable hours collapse an overnight parking request shift', async () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        attachForm(
            {
                date: base_day + 480 * 60 * 1000,
                date_end: base_day + 720 * 60 * 1000,
                duration: 240,
                all_day: false,
            },
            {
                bookable_hours: { start: 7, end: 17 },
            },
        );
        TestBed.flushEffects();
        spectator.component.shift_options_setting.set([
            {
                id: 'overnight',
                name: 'Overnight',
                start_time: 1320,
                end_time: 360,
            },
        ]);

        spectator.component.setShiftType('overnight');
        await new Promise((resolve) => setTimeout(resolve));
        await flush();

        expect(spectator.component.model().date).toBe(
            base_day + 1320 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(480);
        expect(spectator.component.model().date_end).toBe(
            base_day + (1320 + 480) * 60 * 1000,
        );
        expect(spectator.component.form().duration().valid()).toBe(true);
    });

    it('should apply custom shift times that cross midnight', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();

        spectator.component.setShiftType('custom');
        spectator.component.setStartTime(1021);
        spectator.component.setEndTime(419);

        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.start_time_mins()).toBe(1021);
        expect(spectator.component.end_time_mins()).toBe(419);
        expect(spectator.component.model().date).toBe(
            base_day + 1021 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(838);
    });

    it('should force the first preset shift when custom is hidden and no preset matches', async () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        // Seed form with times that do not match any configured preset.
        spectator.component.model.update((m) => ({
            ...m,
            date: base_day + 600 * 60 * 1000,
            duration: 90,
        }));
        spectator.component.hide_custom_shift.set(true);
        await spectator.component.ngOnInit();

        // With custom hidden, the init path should force the first preset
        // ("morning", 480-720) rather than leaving shift_type as "custom"
        // with no UI to edit it.
        expect(spectator.component.shift_type()).toBe('morning');
        expect(spectator.component.model().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
        expect(spectator.component.is_all_day_forced()).toBe(false);
        expect(spectator.component.show_custom_time_inputs()).toBe(false);
    });

    it('should allow a custom shift when no preset shifts are configured', async () => {
        spectator.component.shift_options_setting.set([]);
        spectator.component.hide_custom_shift.set(false);
        await spectator.component.ngOnInit();

        expect(spectator.component.is_all_day_forced()).toBe(false);
        expect(spectator.component.has_preset_shifts()).toBe(false);
        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.show_custom_time_inputs()).toBe(true);
    });

    it('should not request availability when the counter is hidden', async () => {
        spectator.component.hide_availability_counter.set(true);
        (spectator.inject(ParkingService).spaces as any).set([
            { id: 'space-1', bookable: true },
        ]);

        await spectator.component.ngOnInit();
        await new Promise((resolve) => setTimeout(resolve, 350));

        expect(ts_client.query).not.toHaveBeenCalledWith(
            expect.objectContaining({ path: 'booked' }),
        );
    });

    it('should force an all-day booking when neither presets nor custom are allowed', async () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.shift_options_setting.set([]);
        spectator.component.hide_custom_shift.set(true);
        await spectator.component.ngOnInit();

        expect(spectator.component.is_all_day_forced()).toBe(true);
        expect(spectator.component.shift_type()).toBe('all_day');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.show_custom_time_inputs()).toBe(false);
        expect(spectator.component.model().date).toBe(base_day);
        expect(spectator.component.model().duration).toBe(1440);
    });

    it('should show all-day using the first restricted shift window when the user cannot see presets', async () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.shift_options_setting.set([
            {
                id: 'day_worker',
                name: 'Day Worker',
                start_time: 420,
                end_time: 1020,
                groups: ['PlaceOS P1 Parking'],
            },
        ]);
        spectator.component.hide_custom_shift.set(true);

        await spectator.component.ngOnInit();
        TestBed.flushEffects();

        expect(spectator.component.is_all_day_forced()).toBe(true);
        expect(spectator.component.shift_type()).toBe('all_day');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.model().date).toBe(
            base_day + 420 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(600);
    });

    it('should show restricted shift presets for users in the configured group', async () => {
        setCurrentUser(
            new StaffUser({
                id: 'me',
                email: 'me@test.com',
                name: 'Me',
                groups: ['PlaceOS P1 Parking'],
            } as any),
        );
        spectator.component.shift_options_setting.set([
            {
                id: 'day_worker',
                name: 'Day Worker',
                start_time: 420,
                end_time: 1020,
                groups: ['PlaceOS P1 Parking'],
            },
            {
                id: 'night_shift',
                name: 'Night Shift',
                start_time: 1050,
                end_time: 390,
                groups: ['PlaceOS P1 Parking'],
            },
        ]);
        spectator.component.hide_custom_shift.set(true);

        await spectator.component.ngOnInit();

        expect(spectator.component.is_all_day_forced()).toBe(false);
        expect(spectator.component.shift_options().length).toBe(2);
        expect(spectator.component.show_shift_select()).toBe(true);
        expect(spectator.component.shift_type()).toBe('day_worker');
    });

    it('should clear the plate number when the selected host changes away from the current user', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'me@test.com', name: 'Me' } as any,
            plate_number: 'ABC123',
        }));
        await spectator.component.ngOnInit();

        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'other@test.com', name: 'Other User' } as any,
        }));
        await flush();

        expect(spectator.component.model().plate_number).toBe('');
    });

    it('should keep the plate number when the selected host remains the current user', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'me@test.com', name: 'Me' } as any,
            plate_number: 'ABC123',
        }));
        await spectator.component.ngOnInit();

        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'me@test.com', name: 'Me Again' } as any,
        }));
        await flush();

        expect(spectator.component.model().plate_number).toBe('ABC123');
    });

    it('should restore the prefilled plate number when the selected host changes back to the current user', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'me@test.com', name: 'Me' } as any,
            plate_number: 'ABC123',
        }));
        await spectator.component.ngOnInit();
        // Let the prefilled-plate-number sync observe the seeded value so it
        // can be restored when the host switches back to the current user.
        await flush();

        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'other@test.com', name: 'Other User' } as any,
        }));
        await flush();
        spectator.component.model.update((m) => ({
            ...m,
            plate_number: 'OTHER123',
        }));
        await flush();

        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'me@test.com', name: 'Me' } as any,
        }));
        await flush();

        expect(spectator.component.model().plate_number).toBe('ABC123');
    });

    it('should require the plate number when configured', () => {
        spectator.component.model.update((m) => ({ ...m, plate_number: '  ' }));

        spectator.component.require_plate_number.set(true);
        TestBed.flushEffects();

        const errors = spectator.component.form().plate_number().errors();
        expect(errors.some((e) => e.kind === 'required')).toBe(true);
    });

    it('should keep the plate number optional by default', () => {
        spectator.component.model.update((m) => ({ ...m, plate_number: '' }));

        spectator.component.require_plate_number.set(false);
        TestBed.flushEffects();

        expect(spectator.component.form().plate_number().valid()).toBe(true);
        const errors = spectator.component.form().plate_number().errors();
        expect(errors.some((e) => e.kind === 'required')).toBe(false);
    });

    it('should start with no parking restriction selected', async () => {
        spectator.component.space_restriction_options_setting.set([
            { id: 'oversized', name: 'Oversized' },
        ]);
        spectator.component.model.update((m) => ({
            ...m,
            space_restrictions: false,
        }));

        await spectator.component.ngOnInit();

        expect(spectator.component.selected_space_restriction()).toBe(false);
        expect(spectator.component.model().space_restrictions).toBe(false);
    });

    it('should require a parking restriction when configured', () => {
        spectator.component.model.update((m) => ({
            ...m,
            space_restrictions: false,
        }));

        spectator.component.require_space_restriction.set(true);
        TestBed.flushEffects();

        expect(
            spectator.component
                .form()
                .space_restrictions()
                .errors()
                .some((e) => e.kind === 'required'),
        ).toBe(true);

        spectator.component.setSpaceRestriction('oversized');

        expect(spectator.component.form().space_restrictions().valid()).toBe(
            true,
        );
    });

    it('should not clear the plate number for an existing booking already opened for another host', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            user: { email: 'other@test.com', name: 'Other User' } as any,
            plate_number: 'ABC123',
        }));

        await spectator.component.ngOnInit();

        expect(spectator.component.model().plate_number).toBe('ABC123');
    });

    it('should restore the selected shift after clearing a forced request time', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.setShiftType('afternoon');

        spectator.component.setRequestType('forced');

        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.model().date).toBe(
            base_day + 540 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(120);

        spectator.component.setRequestType('standard');

        expect(spectator.component.shift_type()).toBe('afternoon');
        expect(spectator.component.model().date).toBe(
            base_day + 780 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(240);
    });

    it('should apply forced request times that cross midnight', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();

        spectator.component.setRequestType('forced_overnight');

        expect(spectator.component.forced_request_time()).toEqual({
            start_time: 1021,
            end_time: 419,
        });
        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.show_custom_time_inputs()).toBe(false);
        expect(spectator.component.model().date).toBe(
            base_day + 1021 * 60 * 1000,
        );
        expect(spectator.component.model().duration).toBe(838);
    });
});

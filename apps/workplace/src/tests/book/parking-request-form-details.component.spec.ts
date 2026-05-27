import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ParkingService } from '@placeos/bookings';
import {
    OrganisationService,
    currentUser,
    SettingsService,
    setupFormTimeSync,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';
import { endInFuture } from 'libs/events/src/lib/validators';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ParkingRequestFormDetailsComponent } from '../../app/book/parking-request-flow/parking-request-form-details.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        currentUser: jest.fn(() => ({ email: 'me@test.com', groups: [] })),
    };
});

describe('ParkingRequestFormDetailsComponent', () => {
    let spectator: Spectator<ParkingRequestFormDetailsComponent>;
    let now_spy: jest.SpyInstance | null = null;
    const setNow = (time: number) => {
        now_spy?.mockRestore();
        now_spy = jest.spyOn(Date, 'now').mockReturnValue(time);
    };
    const createComponent = createComponentFactory({
        component: ParkingRequestFormDetailsComponent,
        providers: [
            MockProvider(ParkingService, {
                spaces: of([]),
            }),
            MockProvider(SettingsService, {
                get: jest.fn(
                    (key: string) =>
                        key === 'app.bookings.use_building_timezone' ||
                        key === 'app.parking.use_building_timezone',
                ),
                time_format: 'h:mm a',
            }),
            MockProvider(OrganisationService, {
                initialised: of(true),
                active_building: of({ id: 'bld-1', timezone: 'UTC' }),
                active_buildings: of([]),
                building: { id: 'bld-1', timezone: 'UTC' },
            }),
        ],
    });

    afterEach(() => {
        now_spy?.mockRestore();
        now_spy = null;
    });

    beforeEach(() => {
        (currentUser as jest.Mock).mockReturnValue({
            email: 'me@test.com',
            groups: [],
        });
        // Pin "now" to a moment before the form's default date so that the
        // shift-applies-to-form helpers don't roll the booking forward into
        // tomorrow on tests that don't care about that behaviour.
        setNow(new Date('2026-04-08T07:00:00.000Z').valueOf());
        spectator = createComponent();
        spectator.setInput(
            'form',
            new FormGroup({
                date: new FormControl(
                    new Date('2026-04-08T08:00:00.000Z').valueOf(),
                ),
                duration: new FormControl(240),
                request_type: new FormControl('standard'),
                user: new FormControl(null),
                prefer_booked_location_first: new FormControl(false),
                vehicle_type: new FormControl('car'),
                plate_number: new FormControl('ABC123'),
                approver_group: new FormControl(''),
            }),
        );
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
    });

    it('should apply shift times even when the start is earlier than now', () => {
        // Rebuild the form with the real booking-form time sync attached so
        // we exercise the same date/duration snapping behaviour as prod.
        const form = new FormGroup({
            id: new FormControl(''),
            date: new FormControl(
                new Date('2026-04-08T12:00:00.000Z').valueOf(),
            ),
            date_end: new FormControl(
                new Date('2026-04-08T16:00:00.000Z').valueOf(),
            ),
            duration: new FormControl(240),
            all_day: new FormControl(false),
            request_type: new FormControl('standard'),
            user: new FormControl(null),
            prefer_booked_location_first: new FormControl(false),
            vehicle_type: new FormControl('car'),
            plate_number: new FormControl('ABC123'),
            approver_group: new FormControl(''),
        });
        setupFormTimeSync(form, { timezone: 'UTC' });
        spectator.setInput('form', form);

        // Pretend "now" is 10am UTC on 2026-04-08 so the morning shift
        // (08:00-12:00) starts in the past — the time sync would normally
        // snap the form's date back to "now" and throw away the shift time.
        setNow(new Date('2026-04-08T10:00:00.000Z').valueOf());
        spectator.component.setShiftType('morning');
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
        expect(spectator.component.form().getRawValue().date_end).toBe(
            base_day + 720 * 60 * 1000,
        );
    });

    it('should land on the first preset on open without any user interaction (with the real time sync)', async () => {
        // Reproduce the exact production wiring: `generateBookingForm`-style
        // form with `endInFuture` + `setupFormTimeSync`, seeded with the
        // same `Date.now() + 5min` / `duration = 60` defaults that the
        // BookingFormService singleton creates for fresh bookings.
        const fake_now = new Date('2026-04-08T10:05:00.000Z').valueOf();
        setNow(fake_now);
        const form = new FormGroup({
            id: new FormControl(''),
            date: new FormControl(fake_now + 5 * 60 * 1000),
            date_end: new FormControl(fake_now + 65 * 60 * 1000),
            duration: new FormControl(60, [endInFuture]),
            all_day: new FormControl(false),
            request_type: new FormControl('standard'),
            user: new FormControl(null),
            prefer_booked_location_first: new FormControl(false),
            vehicle_type: new FormControl('car'),
            plate_number: new FormControl('ABC123'),
            approver_group: new FormControl(''),
        });
        setupFormTimeSync(form, { timezone: 'UTC' });
        spectator.setInput('form', form);
        await spectator.component.ngOnInit();

        // Without touching anything, the form must end up booking the
        // first preset shift (morning, 8-12) — *not* the stale "now + 60min"
        // window the booking-form service seeds every form with.
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.shift_type()).toBe('morning');
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
        expect(spectator.component.form().getRawValue().all_day).toBe(false);
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
        spectator.detectChanges();

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
        spectator.component.form().patchValue({
            date: fake_now,
            duration: 60,
        });
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
        spectator.detectChanges();

        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.shift_type()).toBe('morning');
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
    });

    it('should default to the first preset shift instead of leaving the form at the booking-form defaults', async () => {
        // Reproduce the singleton booking form's "fresh" state: a fixed
        // current time + 60 minute window. Without an explicit reset the
        // parking flow would land here on first open.
        const fake_now = new Date('2026-04-08T10:05:00.000Z').valueOf();
        setNow(fake_now);
        spectator.component.form().patchValue({
            date: fake_now,
            duration: 60,
        });
        await spectator.component.ngOnInit();

        // Even though presets exist, the form was on a "current time + 1h"
        // window that matches no preset. The init path must default to the
        // first configured shift rather than falling through to custom.
        expect(spectator.component.shift_type()).toBe('morning');
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
    });

    it('should clear all_day when a shift is selected so postForm honours the shift window', () => {
        // Booking-form service seeds new bookings with `all_day` from the
        // `all_day_default` setting. If we leave it set, postForm overwrites
        // date/duration with the building's all-day period regardless of
        // what shift the user picked — exactly the bug being reproduced.
        const form = new FormGroup({
            id: new FormControl(''),
            date: new FormControl(
                new Date('2026-04-08T08:00:00.000Z').valueOf(),
            ),
            date_end: new FormControl(
                new Date('2026-04-08T17:00:00.000Z').valueOf(),
            ),
            duration: new FormControl(540, [endInFuture]),
            all_day: new FormControl(true),
            request_type: new FormControl('standard'),
            user: new FormControl(null),
            prefer_booked_location_first: new FormControl(false),
            vehicle_type: new FormControl('car'),
            plate_number: new FormControl('ABC123'),
            approver_group: new FormControl(''),
        });
        setupFormTimeSync(form, { timezone: 'UTC' });
        spectator.setInput('form', form);

        spectator.component.setShiftType('afternoon');

        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        expect(spectator.component.form().getRawValue().all_day).toBe(false);
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 780 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
    });

    it('should not create multi-day parking dates past the booking limit', async () => {
        setNow(new Date('2026-05-20T07:00:00.000Z').valueOf());
        spectator = createComponent();
        const form = new FormGroup({
            id: new FormControl(''),
            date: new FormControl(
                new Date('2026-06-03T08:00:00.000Z').valueOf(),
            ),
            date_end: new FormControl(
                new Date('2026-06-03T12:00:00.000Z').valueOf(),
            ),
            duration: new FormControl(240),
            all_day: new FormControl(false),
            recurrence_type: new FormControl('daily'),
            recurrence_days: new FormControl(62),
            recurrence_interval: new FormControl(1),
            recurrence_end: new FormControl(null),
            request_type: new FormControl('standard'),
            user: new FormControl(null),
            prefer_booked_location_first: new FormControl(false),
            vehicle_type: new FormControl('car'),
            plate_number: new FormControl('ABC123'),
            approver_group: new FormControl(''),
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
        spectator.setInput('form', form);
        await spectator.component.ngOnInit();

        spectator.component.setNumWeeks(2);

        const expected_date = startOfDay(
            new Date('2026-06-03T08:00:00.000Z'),
        );
        expect(spectator.component.weekdays).toEqual([expected_date.valueOf()]);
        expect(form.getRawValue().recurrence_end).toBe(
            Math.floor(endOfDay(expected_date).valueOf() / 1000),
        );
    });

    it('should roll forward to the next day when the selected shift has already ended', () => {
        // Rebuild the form with the real `endInFuture` validator + time sync.
        const form = new FormGroup({
            id: new FormControl(''),
            date: new FormControl(
                new Date('2026-04-08T00:00:00.000Z').valueOf(),
            ),
            date_end: new FormControl(
                new Date('2026-04-08T04:00:00.000Z').valueOf(),
            ),
            duration: new FormControl(240, [endInFuture]),
            all_day: new FormControl(false),
            request_type: new FormControl('standard'),
            user: new FormControl(null),
            prefer_booked_location_first: new FormControl(false),
            vehicle_type: new FormControl('car'),
            plate_number: new FormControl('ABC123'),
            approver_group: new FormControl(''),
        });
        setupFormTimeSync(form, { timezone: 'UTC' });
        spectator.setInput('form', form);

        // Pretend "now" is 2pm UTC on 2026-04-08 — the morning shift
        // (08:00-12:00) has already ended on today, so applying it as-is
        // would fail the `endInFuture` validator with {duration: true}.
        setNow(new Date('2026-04-08T14:00:00.000Z').valueOf());
        spectator.component.setShiftType('morning');
        const next_day = new Date('2026-04-09T00:00:00.000Z').valueOf();
        expect(spectator.component.form().getRawValue().date).toBe(
            next_day + 480 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
        expect(spectator.component.form().controls.duration.valid).toBe(true);
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
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 1021 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(838);
    });

    it('should apply custom shift times that cross midnight', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();

        spectator.component.setShiftType('custom');
        spectator.component.setStartTime(1021);
        spectator.component.setEndTime(419);

        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.start_time_mins()).toBe(1021);
        expect(spectator.component.end_time_mins()).toBe(419);
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 1021 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(838);
    });

    it('should force the first preset shift when custom is hidden and no preset matches', async () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        // Seed form with times that do not match any configured preset.
        spectator.component
            .form()
            .patchValue({ date: base_day + 600 * 60 * 1000, duration: 90 });
        spectator.component.hide_custom_shift.set(true);
        await spectator.component.ngOnInit();

        // With custom hidden, the init path should force the first preset
        // ("morning", 480-720) rather than leaving shift_type as "custom"
        // with no UI to edit it.
        expect(spectator.component.shift_type()).toBe('morning');
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 480 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
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

    it('should force an all-day booking when neither presets nor custom are allowed', async () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.shift_options_setting.set([]);
        spectator.component.hide_custom_shift.set(true);
        await spectator.component.ngOnInit();

        expect(spectator.component.is_all_day_forced()).toBe(true);
        expect(spectator.component.shift_type()).toBe('all_day');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.show_custom_time_inputs()).toBe(false);
        expect(spectator.component.form().getRawValue().date).toBe(base_day);
        expect(spectator.component.form().getRawValue().duration).toBe(1440);
    });

    it('should show all-day using the first restricted shift window when the user cannot see presets', async () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.shift_options_setting.set([
            {
                id: 'day_worker',
                name: 'Day Worker',
                start_time: 420,
                end_time: 1020,
                groups: ['HIO PlaceOS P1 Parking'],
            },
        ]);
        spectator.component.hide_custom_shift.set(true);

        await spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.is_all_day_forced()).toBe(true);
        expect(spectator.component.shift_type()).toBe('all_day');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 420 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(600);
    });

    it('should show restricted shift presets for users in the configured group', async () => {
        (currentUser as jest.Mock).mockReturnValue({
            email: 'me@test.com',
            groups: ['HIO PlaceOS P1 Parking'],
        });
        spectator.component.shift_options_setting.set([
            {
                id: 'day_worker',
                name: 'Day Worker',
                start_time: 420,
                end_time: 1020,
                groups: ['HIO PlaceOS P1 Parking'],
            },
            {
                id: 'night_shift',
                name: 'Night Shift',
                start_time: 1050,
                end_time: 390,
                groups: ['HIO PlaceOS P1 Parking'],
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
        spectator.component.form().patchValue({
            user: { email: 'me@test.com', name: 'Me' },
            plate_number: 'ABC123',
        });
        await spectator.component.ngOnInit();

        spectator.component.form().controls.user.setValue({
            email: 'other@test.com',
            name: 'Other User',
        });

        expect(spectator.component.form().getRawValue().plate_number).toBe('');
    });

    it('should keep the plate number when the selected host remains the current user', async () => {
        spectator.component.form().patchValue({
            user: { email: 'me@test.com', name: 'Me' },
            plate_number: 'ABC123',
        });
        await spectator.component.ngOnInit();

        spectator.component.form().controls.user.setValue({
            email: 'me@test.com',
            name: 'Me Again',
        });

        expect(spectator.component.form().getRawValue().plate_number).toBe(
            'ABC123',
        );
    });

    it('should restore the prefilled plate number when the selected host changes back to the current user', async () => {
        spectator.component.form().patchValue({
            user: { email: 'me@test.com', name: 'Me' },
            plate_number: 'ABC123',
        });
        await spectator.component.ngOnInit();

        spectator.component.form().controls.user.setValue({
            email: 'other@test.com',
            name: 'Other User',
        });
        spectator.component.form().patchValue({ plate_number: 'OTHER123' });

        spectator.component.form().controls.user.setValue({
            email: 'me@test.com',
            name: 'Me',
        });

        expect(spectator.component.form().getRawValue().plate_number).toBe(
            'ABC123',
        );
    });

    it('should require the plate number when configured', () => {
        const control = spectator.component.form().controls.plate_number;
        control.setValue('');

        spectator.component.require_plate_number.set(true);
        spectator.detectChanges();

        expect(control.hasError('required')).toBe(true);
    });

    it('should keep the plate number optional by default', () => {
        const control = spectator.component.form().controls.plate_number;
        control.setValue('');

        spectator.component.require_plate_number.set(false);
        spectator.detectChanges();

        expect(control.valid).toBe(true);
        expect(control.hasError('required')).toBe(false);
    });

    it('should not clear the plate number for an existing booking already opened for another host', async () => {
        spectator.component.form().patchValue({
            user: { email: 'other@test.com', name: 'Other User' },
            plate_number: 'ABC123',
        });

        await spectator.component.ngOnInit();

        expect(spectator.component.form().getRawValue().plate_number).toBe(
            'ABC123',
        );
    });

    it('should restore the selected shift after clearing a forced request time', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.setShiftType('afternoon');

        spectator.component.setRequestType('forced');

        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 540 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(120);

        spectator.component.setRequestType('standard');

        expect(spectator.component.shift_type()).toBe('afternoon');
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 780 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
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
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 1021 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(838);
    });
});

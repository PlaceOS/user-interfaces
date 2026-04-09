import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ParkingService } from '@placeos/bookings';
import {
    OrganisationService,
    SettingsService,
    setupFormTimeSync,
} from '@placeos/common';
import { endInFuture } from 'libs/events/src/lib/validators';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ParkingRequestFormDetailsComponent } from '../../app/book/parking-request-flow/parking-request-form-details.component';

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

    it('should land on the first preset on open without any user interaction (with the real time sync)', () => {
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
        spectator.component.ngOnInit();

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

    it('should re-apply the preferred shift when shift options load asynchronously after init', () => {
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
        spectator.component.ngOnInit();

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

    it('should default to the first preset shift instead of leaving the form at the booking-form defaults', () => {
        // Reproduce the singleton booking form's "fresh" state: a fixed
        // current time + 60 minute window. Without an explicit reset the
        // parking flow would land here on first open.
        const fake_now = new Date('2026-04-08T10:05:00.000Z').valueOf();
        setNow(fake_now);
        spectator.component.form().patchValue({
            date: fake_now,
            duration: 60,
        });
        spectator.component.ngOnInit();

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

    it('should force the first preset shift when custom is hidden and no preset matches', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        // Seed form with times that do not match any configured preset.
        spectator.component
            .form()
            .patchValue({ date: base_day + 600 * 60 * 1000, duration: 90 });
        spectator.component.hide_custom_shift.set(true);
        spectator.component.ngOnInit();

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

    it('should allow a custom shift when no preset shifts are configured', () => {
        spectator.component.shift_options_setting.set([]);
        spectator.component.hide_custom_shift.set(false);
        spectator.component.ngOnInit();

        expect(spectator.component.is_all_day_forced()).toBe(false);
        expect(spectator.component.has_preset_shifts()).toBe(false);
        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.show_custom_time_inputs()).toBe(true);
    });

    it('should force an all-day booking when neither presets nor custom are allowed', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.shift_options_setting.set([]);
        spectator.component.hide_custom_shift.set(true);
        spectator.component.ngOnInit();

        expect(spectator.component.is_all_day_forced()).toBe(true);
        expect(spectator.component.shift_type()).toBe('all_day');
        expect(spectator.component.show_shift_select()).toBe(false);
        expect(spectator.component.show_custom_time_inputs()).toBe(false);
        expect(spectator.component.form().getRawValue().date).toBe(base_day);
        expect(spectator.component.form().getRawValue().duration).toBe(1440);
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
});

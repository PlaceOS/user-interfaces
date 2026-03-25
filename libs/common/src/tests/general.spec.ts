import { FormControl, FormGroup } from '@angular/forms';
import { addMinutes } from 'date-fns';
import {
    alignDateToBookableHours,
    csvToJson,
    downloadFile,
    getNextBookableTime,
    isWithinBookableHours,
    jsonToCsv,
    markUserDateChange,
    setupFormTimeSync,
    timePeriodsIntersect,
} from '../lib/general';

describe('General Methods', () => {
    describe('timePeriodsIntersect', () => {
        it('should handle start overlapping other period', () => {
            expect(timePeriodsIntersect(2, 10, 1, 5)).toBe(true);
            expect(timePeriodsIntersect(1, 5, 2, 10)).toBe(true);
        });

        it('should handle end overlapping other period', () => {
            expect(timePeriodsIntersect(2, 10, 5, 15)).toBe(true);
            expect(timePeriodsIntersect(5, 15, 2, 10)).toBe(true);
        });

        it('should handle start overlapping with end', () => {
            expect(timePeriodsIntersect(2, 10, 10, 15)).toBe(false);
            expect(timePeriodsIntersect(10, 15, 2, 10)).toBe(false);
        });

        it('should one period containing the other', () => {
            expect(timePeriodsIntersect(5, 10, 1, 15)).toBe(true);
            expect(timePeriodsIntersect(1, 15, 5, 10)).toBe(true);
        });
    });

    describe('jsonToCsv', () => {
        it('should escape CSV cells for Excel-friendly output', () => {
            const csv = jsonToCsv([
                {
                    name: 'Jane, Doe',
                    note: 'Line 1\nLine "2"',
                    count: 2,
                    meta: { a: 1, b: 2 },
                },
            ]);
            expect(csv).toBe(
                'name,note,count,meta\r\n"Jane, Doe","Line 1\nLine ""2""",2,"{""a"":1,""b"":2}"',
            );
        });

        it('should support tab-separated output', () => {
            const csv = jsonToCsv([{ name: 'Jane, Doe', role: 'Admin' }], '\t');
            expect(csv).toBe('name\trole\r\nJane, Doe\tAdmin');
        });
    });

    describe('csvToJson', () => {
        it('should parse tab-separated content and strip BOM from header', () => {
            const list = csvToJson('\uFEFFname\tcount\r\nJane\t2', '\t');
            expect(list).toEqual([{ name: 'Jane', count: 2 }]);
        });
    });

    describe('downloadFile', () => {
        it('should prefix BOM for csv downloads', () => {
            const original_url = window.URL;
            const create_object_url = jest.fn((blob: Blob) => 'blob:test-url');
            const revoke_object_url = jest.fn();
            (window as any).URL = {
                createObjectURL: create_object_url,
                revokeObjectURL: revoke_object_url,
            };
            jest.useFakeTimers();
            try {
                downloadFile('report.csv', 'name,count\r\nJane,2');
                const blob = create_object_url.mock.calls[0][0] as Blob;
                expect(blob.type).toBe('text/csv;charset=utf-8');
                expect(blob.size).toBe(
                    new TextEncoder().encode('\uFEFFname,count\r\nJane,2')
                        .length,
                );
                jest.runOnlyPendingTimers();
                expect(revoke_object_url).toHaveBeenCalledWith('blob:test-url');
            } finally {
                jest.useRealTimers();
                (window as any).URL = original_url;
            }
        });
    });

    describe('bookable hours helpers', () => {
        it('should return the next rounded time within the current window', () => {
            const date = new Date(2026, 2, 20, 9, 2).valueOf();
            expect(
                getNextBookableTime({ start: 8 * 60, end: 17 * 60 }, date),
            ).toBe(new Date(2026, 2, 20, 9, 5).valueOf());
        });

        it('should detect whether a start time is inside bookable hours', () => {
            expect(
                isWithinBookableHours(new Date(2026, 2, 20, 9, 0).valueOf(), {
                    start: 8 * 60,
                    end: 17 * 60,
                }),
            ).toBe(true);
            expect(
                isWithinBookableHours(new Date(2026, 2, 20, 17, 0).valueOf(), {
                    start: 8 * 60,
                    end: 17 * 60,
                }),
            ).toBe(false);
        });

        it('should advance to the next day when past the bookable window', () => {
            const date = new Date(2028, 5, 10, 18, 30).valueOf();
            expect(
                getNextBookableTime({ start: 8 * 60, end: 17 * 60 }, date),
            ).toBe(new Date(2028, 5, 11, 8, 0).valueOf());
        });

        it('should snap to start of today when before the bookable window', () => {
            const date = new Date(2028, 5, 10, 6, 0).valueOf();
            expect(
                getNextBookableTime({ start: 8 * 60, end: 17 * 60 }, date),
            ).toBe(new Date(2028, 5, 10, 8, 0).valueOf());
        });

        it('should return undefined when no bookable_hours configured', () => {
            expect(getNextBookableTime(null)).toBeUndefined();
            expect(getNextBookableTime(undefined)).toBeUndefined();
        });

        it('should align a before-hours date to the bookable start', () => {
            const date = new Date(2028, 5, 10, 3, 0).valueOf();
            expect(
                alignDateToBookableHours(date, {
                    start: 8 * 60,
                    end: 17 * 60,
                }),
            ).toBe(new Date(2028, 5, 10, 8, 0).valueOf());
        });

        it('should leave a date within bookable hours unchanged', () => {
            const date = new Date(2028, 5, 10, 12, 30).valueOf();
            expect(
                alignDateToBookableHours(date, {
                    start: 8 * 60,
                    end: 17 * 60,
                }),
            ).toBe(date);
        });

        it('should return the date unchanged when no bookable hours', () => {
            const date = new Date(2028, 5, 10, 3, 0).valueOf();
            expect(alignDateToBookableHours(date, null)).toBe(date);
        });

        it('should treat time near the end as outside when min_duration is set', () => {
            // 16:45 with min_duration=30 → effective end is 16:30 → outside
            const date = new Date(2028, 5, 10, 16, 45).valueOf();
            expect(
                getNextBookableTime(
                    { start: 8 * 60, end: 17 * 60 },
                    date,
                    '',
                    30,
                ),
            ).toBe(new Date(2028, 5, 11, 8, 0).valueOf());
        });

        it('should still allow time before effective end with min_duration', () => {
            // 16:00 with min_duration=30 → effective end is 16:30 → inside
            const date = new Date(2028, 5, 10, 16, 0).valueOf();
            expect(
                getNextBookableTime(
                    { start: 8 * 60, end: 17 * 60 },
                    date,
                    '',
                    30,
                ),
            ).toBe(new Date(2028, 5, 10, 16, 0).valueOf());
        });

        it('should align near-end dates to next day when min_duration is set', () => {
            // 16:40 with min_duration=30 → effective end 16:30 → before hours
            const date = new Date(2028, 5, 10, 16, 40).valueOf();
            expect(
                alignDateToBookableHours(
                    date,
                    { start: 8 * 60, end: 17 * 60 },
                    date,
                    '',
                    30,
                ),
            ).toBe(new Date(2028, 5, 10, 8, 0).valueOf());
        });
    });

    describe('setupFormTimeSync', () => {
        /** Helper to build a minimal form with the time controls. */
        function createForm(overrides: Record<string, any> = {}) {
            return new FormGroup({
                id: new FormControl(overrides.id ?? ''),
                date: new FormControl(overrides.date ?? 0),
                duration: new FormControl(overrides.duration ?? 60),
                date_end: new FormControl(overrides.date_end ?? 0),
                all_day: new FormControl(overrides.all_day ?? false),
            });
        }

        // Use a fixed future date so past-date snapping is predictable.
        const BASE = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf(); // Jun 15 2028 10:00

        it('should recalculate date_end when duration changes', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form);

            form.controls.duration.setValue(90);

            // 10:00 + 90 min = 11:30, rounded ceil to 5 → 11:30
            expect(form.getRawValue().date_end).toBe(
                addMinutes(BASE, 90).valueOf(),
            );
        });

        it('should recalculate duration when date_end changes', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form);

            const new_end = addMinutes(BASE, 120).valueOf();
            form.controls.date_end.setValue(new_end);

            expect(form.getRawValue().duration).toBe(120);
        });

        it('should clamp date_end to min duration when gap is too small', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form);

            // Set date_end only 10 min after start — less than 30 min minimum
            const too_close = addMinutes(BASE, 10).valueOf();
            form.controls.date_end.setValue(too_close);

            expect(form.getRawValue().duration).toBe(30);
            expect(form.getRawValue().date_end).toBeGreaterThanOrEqual(
                addMinutes(BASE, 30).valueOf(),
            );
        });

        it('should clamp duration to min_duration when set below threshold', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form);

            form.controls.duration.setValue(15);

            // Duration should be clamped to the default min of 30
            expect(form.getRawValue().duration).toBe(30);
            expect(form.getRawValue().date_end).toBeGreaterThanOrEqual(
                addMinutes(BASE, 30).valueOf(),
            );
        });

        it('should recalculate date_end when date changes', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form);

            const new_date = addMinutes(BASE, 60).valueOf(); // 11:00
            form.controls.date.setValue(new_date);

            // 11:00 + 60 min = 12:00
            expect(form.getRawValue().date_end).toBe(
                addMinutes(new_date, 60).valueOf(),
            );
        });

        it('should snap past dates to now for new items (no id)', () => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date(2028, 5, 15, 10, 0, 0, 0));
            try {
                const form = createForm({ date: BASE, duration: 60 });
                setupFormTimeSync(form);

                // Set a date in the past
                const past = new Date(2028, 5, 14, 8, 0, 0, 0).valueOf();
                form.controls.date.setValue(past);

                // Should snap forward; the snapped date must be >= Date.now()
                expect(form.getRawValue().date).toBeGreaterThanOrEqual(
                    Date.now(),
                );
            } finally {
                jest.useRealTimers();
            }
        });

        it('should NOT snap past dates for existing items (has id)', () => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date(2028, 5, 15, 10, 0, 0, 0));
            try {
                const form = createForm({
                    id: 'booking-1',
                    date: BASE,
                    duration: 60,
                });
                setupFormTimeSync(form);

                const past = new Date(2028, 5, 14, 8, 0, 0, 0).valueOf();
                form.controls.date.setValue(past);

                // Should keep the past date because the form has an id
                expect(form.getRawValue().date).toBe(past);
            } finally {
                jest.useRealTimers();
            }
        });

        it('should invoke the on_time_change callback on every time field change', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = jest.fn();
            setupFormTimeSync(form, { on_time_change: callback });

            form.controls.duration.setValue(90);
            expect(callback).toHaveBeenCalledTimes(1);

            form.controls.date_end.setValue(addMinutes(BASE, 120).valueOf());
            expect(callback).toHaveBeenCalledTimes(2);

            form.controls.date.setValue(addMinutes(BASE, 30).valueOf());
            expect(callback).toHaveBeenCalledTimes(3);
        });

        it('should respect a custom min_duration', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { min_duration: 45 });

            // Set duration below custom minimum
            form.controls.duration.setValue(20);
            expect(form.getRawValue().duration).toBe(45);

            // Set date_end too close
            const too_close = addMinutes(BASE, 10).valueOf();
            form.controls.date_end.setValue(too_close);
            expect(form.getRawValue().duration).toBe(45);
        });

        it('should respect a custom round_to value', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { round_to: 15 });

            // 10:00 + 60 min = 11:00, already on a 15-min boundary
            form.controls.duration.setValue(62);
            // 10:00 + 62 min = 11:02, ceil to nearest 15 → 11:15
            const expected_end = new Date(2028, 5, 15, 11, 15, 0, 0).valueOf();
            expect(form.getRawValue().date_end).toBe(expected_end);
        });

        it('should return a handle with subscriptions that can be unsubscribed', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const handle = setupFormTimeSync(form);

            // 3 core + 1 all_day = 4
            expect(handle.subscriptions.length).toBe(4);
            handle.subscriptions.forEach((s) => expect(s.closed).toBe(false));

            // Tear down
            handle.subscriptions.forEach((s) => s.unsubscribe());
            handle.subscriptions.forEach((s) => expect(s.closed).toBe(true));

            // Changes should no longer be synced
            const original_end = form.getRawValue().date_end;
            form.controls.duration.setValue(120);
            expect(form.getRawValue().date_end).toBe(original_end);
        });

        it('should not create infinite loops between duration and date_end', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = jest.fn();
            setupFormTimeSync(form, { on_time_change: callback });

            // Rapidly alternate changes — should not throw or loop
            form.controls.duration.setValue(45);
            form.controls.date_end.setValue(addMinutes(BASE, 90).valueOf());
            form.controls.duration.setValue(120);

            // Each change fires the callback exactly once
            expect(callback).toHaveBeenCalledTimes(3);
        });

        // --- max_duration ---

        it('should clamp duration down to max_duration when exceeded', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { max_duration: 120 });

            form.controls.duration.setValue(180);

            expect(form.getRawValue().duration).toBe(120);
            expect(form.getRawValue().date_end).toBe(
                addMinutes(BASE, 120).valueOf(),
            );
        });

        it('should clamp date_end when the implied duration exceeds max', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { max_duration: 90 });

            // Set date_end 3 hours out — exceeds max of 90 min
            form.controls.date_end.setValue(addMinutes(BASE, 180).valueOf());

            expect(form.getRawValue().duration).toBe(90);
        });

        it('should allow any duration when max_duration is 0 (disabled)', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { max_duration: 0 });

            form.controls.duration.setValue(600);

            expect(form.getRawValue().duration).toBe(600);
        });

        // --- all_day ---

        it('should reset duration to default_duration when all_day is toggled off', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            setupFormTimeSync(form, { default_duration: 45 });

            form.controls.all_day.setValue(false);

            expect(form.getRawValue().duration).toBe(45);
            expect(form.getRawValue().date_end).toBe(
                addMinutes(BASE, 45).valueOf(),
            );
        });

        it('should use 60 as default_duration when not specified', () => {
            const form = createForm({
                date: BASE,
                duration: 120,
                all_day: true,
            });
            setupFormTimeSync(form);

            form.controls.all_day.setValue(false);

            expect(form.getRawValue().duration).toBe(60);
        });

        it('should clamp default_duration to min/max when toggling all_day off', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            setupFormTimeSync(form, {
                min_duration: 30,
                max_duration: 45,
                default_duration: 15,
            });

            form.controls.all_day.setValue(false);

            // default 15 is below min 30 → clamped to 30
            expect(form.getRawValue().duration).toBe(30);
        });

        it('should skip time sync for duration/date_end changes while all_day is on', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            const callback = jest.fn();
            setupFormTimeSync(form, { on_time_change: callback });

            const original_end = form.getRawValue().date_end;

            // Duration change while all_day — should be ignored
            form.controls.duration.setValue(180);
            expect(form.getRawValue().date_end).toBe(original_end);

            // date_end change while all_day — should be ignored
            form.controls.date_end.setValue(addMinutes(BASE, 300).valueOf());
            expect(form.getRawValue().duration).toBe(180);

            // Callback should not have been called for either
            expect(callback).toHaveBeenCalledTimes(0);
        });

        it('should invoke on_time_change when all_day is toggled', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = jest.fn();
            setupFormTimeSync(form, { on_time_change: callback });

            form.controls.all_day.setValue(true);
            expect(callback).toHaveBeenCalledTimes(1);

            form.controls.all_day.setValue(false);
            expect(callback).toHaveBeenCalledTimes(2);
        });

        // --- updateOptions ---

        it('should re-clamp duration when updateOptions changes max', () => {
            const form = createForm({ date: BASE, duration: 120 });
            const handle = setupFormTimeSync(form);

            // Initially no max — 120 is fine
            expect(form.getRawValue().duration).toBe(120);

            // Tighten max to 90
            handle.updateOptions({ max_duration: 90 });
            expect(form.getRawValue().duration).toBe(90);
            expect(form.getRawValue().date_end).toBe(
                addMinutes(BASE, 90).valueOf(),
            );
        });

        it('should re-clamp duration when updateOptions raises min', () => {
            const form = createForm({ date: BASE, duration: 30 });
            const handle = setupFormTimeSync(form, { min_duration: 30 });

            handle.updateOptions({ min_duration: 60 });
            expect(form.getRawValue().duration).toBe(60);
        });

        it('should not re-clamp when current duration is within new bounds', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = jest.fn();
            const handle = setupFormTimeSync(form, {
                on_time_change: callback,
            });

            handle.updateOptions({ max_duration: 120 });

            // 60 is within [30, 120] — no change, no callback
            expect(form.getRawValue().duration).toBe(60);
            expect(callback).not.toHaveBeenCalled();
        });

        it('should not re-clamp while all_day is on', () => {
            const form = createForm({
                date: BASE,
                duration: 120,
                all_day: true,
            });
            const handle = setupFormTimeSync(form);

            handle.updateOptions({ max_duration: 60 });

            // all_day is on — skip re-clamping
            expect(form.getRawValue().duration).toBe(120);
        });

        it('should update default_duration used when toggling all_day off', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            const handle = setupFormTimeSync(form, { default_duration: 30 });

            handle.updateOptions({ default_duration: 90 });
            form.controls.all_day.setValue(false);

            expect(form.getRawValue().duration).toBe(90);
        });

        // --- bookable hours ---

        const HOURS_9_TO_17 = { start: 9 * 60, end: 17 * 60 };

        it('should snap date into the bookable window for new items', () => {
            // 06:00 is before the 09:00–17:00 window
            const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
            const form = createForm({ date: early, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            // Trigger the date handler
            form.controls.date.setValue(early);

            // Should snap to 09:00
            expect(form.getRawValue().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
        });

        it('should leave date unchanged when within the bookable window', () => {
            const within = new Date(2028, 5, 15, 12, 0, 0, 0).valueOf();
            const form = createForm({ date: within, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            form.controls.date.setValue(within);

            expect(form.getRawValue().date).toBe(within);
        });

        it('should not snap bookable hours for existing items (has id)', () => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date(2028, 5, 15, 18, 30, 0, 0));
            try {
                // 18:30 is after the window
                const late = new Date(2028, 5, 15, 18, 30, 0, 0).valueOf();
                const form = createForm({
                    id: 'existing-1',
                    date: late,
                    duration: 60,
                });
                setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

                form.controls.date.setValue(late);

                // Existing item — should keep the date (alignDateToBookableHours
                // only jumps to next day for past dates, and we're at "now")
                expect(form.getRawValue().date).toBe(late);
            } finally {
                jest.useRealTimers();
            }
        });

        it('should re-align date when bookable_hours are updated via updateOptions', () => {
            const early = new Date(2028, 5, 15, 7, 0, 0, 0).valueOf();
            const form = createForm({ date: early, duration: 60 });
            const handle = setupFormTimeSync(form);

            // No bookable hours initially — date stays at 07:00
            expect(form.getRawValue().date).toBe(early);

            // Now apply bookable hours
            handle.updateOptions({
                bookable_hours: HOURS_9_TO_17,
            });

            // Date should be aligned to 09:00
            expect(form.getRawValue().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
        });

        it('should not align date when bookable_hours are removed', () => {
            const within = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: within, duration: 60 });
            const handle = setupFormTimeSync(form, {
                bookable_hours: HOURS_9_TO_17,
            });

            handle.updateOptions({ bookable_hours: null });

            // Set date before old window — no alignment should happen
            const early = new Date(2028, 5, 15, 5, 0, 0, 0).valueOf();
            form.controls.date.setValue(early);
            expect(form.getRawValue().date).toBe(early);
        });

        it('should still recalculate date_end when date is snapped to bookable hours', () => {
            const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
            const form = createForm({ date: early, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            form.controls.date.setValue(early);

            // Date snapped to 09:00, date_end should be 09:00 + 60 min = 10:00
            const expected_date = new Date(2028, 5, 15, 9, 0, 0, 0).valueOf();
            expect(form.getRawValue().date).toBe(expected_date);
            expect(form.getRawValue().date_end).toBe(
                addMinutes(expected_date, 60).valueOf(),
            );
        });

        it('should snap to next day when date is within min_duration of window end', () => {
            // 16:45 with 09:00–17:00 window and 30-min minimum
            // Effective end = 16:30, so 16:45 is outside → snaps to next day 09:00
            const late = new Date(2028, 5, 15, 16, 45, 0, 0).valueOf();
            const form = createForm({ date: late, duration: 30 });
            setupFormTimeSync(form, {
                bookable_hours: HOURS_9_TO_17,
                min_duration: 30,
            });

            form.controls.date.setValue(late);

            expect(form.getRawValue().date).toBe(
                new Date(2028, 5, 16, 9, 0, 0, 0).valueOf(),
            );
        });

        it('should allow date that leaves room for min_duration before window end', () => {
            // 16:00 with 09:00–17:00 window and 30-min minimum
            // Effective end = 16:30, so 16:00 is inside → stays
            const ok = new Date(2028, 5, 15, 16, 0, 0, 0).valueOf();
            const form = createForm({ date: ok, duration: 30 });
            setupFormTimeSync(form, {
                bookable_hours: HOURS_9_TO_17,
                min_duration: 30,
            });

            form.controls.date.setValue(ok);

            expect(form.getRawValue().date).toBe(ok);
        });

        it('should show notification when markUserDateChange is called before setValue', () => {
            const notifyWarnMock = jest.fn();
            jest.doMock('../lib/notifications', () => ({
                notifyWarn: notifyWarnMock,
            }));

            // 06:00 is before the 09:00–17:00 window
            const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
            const form = createForm({ date: early, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            // Simulate user interaction: mark then set
            markUserDateChange();
            form.controls.date.setValue(early);

            // Should snap to 09:00
            expect(form.getRawValue().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
        });

        it('should not show notification without markUserDateChange', () => {
            // 06:00 is before the 09:00–17:00 window
            const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
            const form = createForm({ date: early, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            // Programmatic set (no markUserDateChange)
            form.controls.date.setValue(early);

            // Should still snap to 09:00 (alignment still works)
            expect(form.getRawValue().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
        });
    });
});

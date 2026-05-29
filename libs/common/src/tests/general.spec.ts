import { FormControl, FormGroup } from '@angular/forms';
import { addMinutes, differenceInMinutes } from 'date-fns';
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
import * as notifications from '../lib/notifications';

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
            expect(getNextBookableTime({ start: 8, end: 17 }, date)).toBe(
                new Date(2026, 2, 20, 9, 5).valueOf(),
            );
        });

        it('should detect whether a start time is inside bookable hours', () => {
            expect(
                isWithinBookableHours(new Date(2026, 2, 20, 9, 0).valueOf(), {
                    start: 8,
                    end: 17,
                }),
            ).toBe(true);
            expect(
                isWithinBookableHours(new Date(2026, 2, 20, 17, 0).valueOf(), {
                    start: 8,
                    end: 17,
                }),
            ).toBe(false);
        });

        it('should advance to the next day when past the bookable window', () => {
            const date = new Date(2028, 5, 10, 18, 30).valueOf();
            expect(getNextBookableTime({ start: 8, end: 17 }, date)).toBe(
                new Date(2028, 5, 11, 8, 0).valueOf(),
            );
        });

        it('should honour a shorter custom duration near bookable-hours end', () => {
            const date = new Date(2028, 5, 10, 16, 35).valueOf();
            expect(
                getNextBookableTime({ start: 8, end: 17 }, date, '', 15),
            ).toBe(new Date(2028, 5, 10, 16, 35).valueOf());
        });

        it('should snap to start of today when before the bookable window', () => {
            const date = new Date(2028, 5, 10, 6, 0).valueOf();
            expect(getNextBookableTime({ start: 8, end: 17 }, date)).toBe(
                new Date(2028, 5, 10, 8, 0).valueOf(),
            );
        });

        it('should return undefined when no bookable_hours configured', () => {
            expect(getNextBookableTime(null)).toBeUndefined();
            expect(getNextBookableTime(undefined)).toBeUndefined();
        });

        it('should align a before-hours date to the bookable start', () => {
            const date = new Date(2028, 5, 10, 3, 0).valueOf();
            expect(
                alignDateToBookableHours(date, {
                    start: 8,
                    end: 17,
                }),
            ).toBe(new Date(2028, 5, 10, 8, 0).valueOf());
        });

        it('should leave a date within bookable hours unchanged', () => {
            const date = new Date(2028, 5, 10, 12, 30).valueOf();
            expect(
                alignDateToBookableHours(date, {
                    start: 8,
                    end: 17,
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
                getNextBookableTime({ start: 8, end: 17 }, date, '', 30),
            ).toBe(new Date(2028, 5, 11, 8, 0).valueOf());
        });

        it('should still allow time before effective end with min_duration', () => {
            // 16:00 with min_duration=30 → effective end is 16:30 → inside
            const date = new Date(2028, 5, 10, 16, 0).valueOf();
            expect(
                getNextBookableTime({ start: 8, end: 17 }, date, '', 30),
            ).toBe(new Date(2028, 5, 10, 16, 0).valueOf());
        });

        it('should allow the exact last valid start when min_duration fits exactly', () => {
            const date = new Date(2028, 5, 10, 16, 30).valueOf();
            expect(
                getNextBookableTime({ start: 8, end: 17 }, date, '', 30),
            ).toBe(date);
            expect(
                alignDateToBookableHours(
                    date,
                    { start: 8, end: 17 },
                    date,
                    '',
                    30,
                ),
            ).toBe(date);
        });

        it('should align near-end dates to next day when min_duration is set', () => {
            // 16:40 with min_duration=30 → effective end 16:30 → before hours
            const date = new Date(2028, 5, 10, 16, 40).valueOf();
            expect(
                alignDateToBookableHours(
                    date,
                    { start: 8, end: 17 },
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

        it('should allow configured custom durations below min_duration', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {
                min_duration: 45,
                custom_duration_options: [30],
            });

            form.controls.duration.setValue(30);

            expect(form.getRawValue().duration).toBe(30);
            expect(form.getRawValue().date_end).toBe(
                addMinutes(BASE, 30).valueOf(),
            );
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

        it('should allow configured custom durations above max_duration', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {
                max_duration: 90,
                custom_duration_options: [120],
            });

            form.controls.duration.setValue(120);

            expect(form.getRawValue().duration).toBe(120);
            expect(form.getRawValue().date_end).toBe(
                addMinutes(BASE, 120).valueOf(),
            );
        });

        it('should allow any duration when max_duration is 0 (disabled)', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { max_duration: 0 });

            form.controls.duration.setValue(600);

            expect(form.getRawValue().duration).toBe(600);
        });

        // --- bookable-hours duration cap (PPT-2511) ---

        // Bookable window 08:00–18:00 used across the cap tests below.
        const BOOKABLE = { start: 8, end: 18 };
        // Jun 15 2028 11:00 — leaves only 7h until the 18:00 window end.
        const LATE_START = new Date(2028, 5, 15, 11, 0, 0, 0).valueOf();
        const WINDOW_END = new Date(2028, 5, 15, 18, 0, 0, 0).valueOf();

        it('should cap duration to the bookable window end even below min_duration', () => {
            const form = createForm({ date: LATE_START, duration: 60 });
            setupFormTimeSync(form, {
                min_duration: 480,
                bookable_hours: BOOKABLE,
            });

            // min_duration (8h) from 11:00 would end at 19:00, past 18:00
            form.controls.duration.setValue(480);

            // Capped to the 7h remaining in the window
            expect(form.getRawValue().duration).toBe(420);
            expect(form.getRawValue().date_end).toBe(WINDOW_END);
        });

        it('should cap a custom duration to the bookable window end', () => {
            const form = createForm({ date: LATE_START, duration: 60 });
            setupFormTimeSync(form, {
                min_duration: 480,
                custom_duration_options: [600],
                bookable_hours: BOOKABLE,
            });

            // Custom 10h option from 11:00 would end at 21:00, past 18:00
            form.controls.duration.setValue(600);

            expect(form.getRawValue().duration).toBe(420);
            expect(form.getRawValue().date_end).toBe(WINDOW_END);
        });

        it('should preserve a custom duration below min_duration when it fits the window', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {
                min_duration: 480,
                custom_duration_options: [60],
                bookable_hours: BOOKABLE,
            });

            // 60 min from 10:00 ends at 11:00, well inside the window
            form.controls.duration.setValue(60);

            // Held at the custom value, not raised to min_duration
            expect(form.getRawValue().duration).toBe(60);
            expect(form.getRawValue().date_end).toBe(
                addMinutes(BASE, 60).valueOf(),
            );
        });

        it('should re-cap duration to the window when the start date moves later', () => {
            const form = createForm({
                date: BASE,
                duration: 480,
                date_end: addMinutes(BASE, 480).valueOf(),
            });
            setupFormTimeSync(form, {
                min_duration: 480,
                // small custom option keeps the late start inside the window
                custom_duration_options: [60],
                bookable_hours: BOOKABLE,
            });

            form.controls.date.setValue(LATE_START);

            expect(form.getRawValue().duration).toBe(420);
            expect(form.getRawValue().date_end).toBe(WINDOW_END);
        });

        it('should NOT cap duration to the window for existing items (has id)', () => {
            const form = createForm({
                id: 'booking-1',
                date: LATE_START,
                duration: 60,
            });
            setupFormTimeSync(form, {
                min_duration: 480,
                bookable_hours: BOOKABLE,
            });

            form.controls.duration.setValue(480);

            // Existing bookings may legitimately fall outside the window
            expect(form.getRawValue().duration).toBe(480);
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

        it('should apply the configured all-day period when all_day is toggled on', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { all_day_start: 9, all_day_end: 17 });

            form.controls.all_day.setValue(true);

            expect(form.getRawValue().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
            expect(form.getRawValue().duration).toBe(8 * 60);
            expect(form.getRawValue().date_end).toBe(
                new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
            );
        });

        it('should clamp current-day all-day bookings to the current time for new items', () => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date(2028, 5, 15, 10, 2, 0, 0));
            try {
                const form = createForm({
                    date: new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
                    duration: 60,
                });
                setupFormTimeSync(form, {
                    all_day_start: 9,
                    all_day_end: 17,
                });

                form.controls.all_day.setValue(true);

                expect(form.getRawValue().date).toBe(
                    new Date(2028, 5, 15, 10, 5, 0, 0).valueOf(),
                );
                expect(form.getRawValue().duration).toBe(415);
                expect(form.getRawValue().date_end).toBe(
                    new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
                );
            } finally {
                jest.useRealTimers();
            }
        });

        it('should reapply the all-day period when the date changes while all_day is enabled', () => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date(2028, 5, 15, 10, 2, 0, 0));
            try {
                const form = createForm({
                    date: new Date(2028, 5, 16, 9, 0, 0, 0).valueOf(),
                    duration: 8 * 60,
                    all_day: true,
                    date_end: new Date(2028, 5, 16, 17, 0, 0, 0).valueOf(),
                });
                setupFormTimeSync(form, {
                    all_day_start: 9,
                    all_day_end: 17,
                });

                form.controls.date.setValue(
                    new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
                );

                expect(form.getRawValue().date).toBe(
                    new Date(2028, 5, 15, 10, 5, 0, 0).valueOf(),
                );
                expect(form.getRawValue().duration).toBe(415);
                expect(form.getRawValue().date_end).toBe(
                    new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
                );
            } finally {
                jest.useRealTimers();
            }
        });

        it('should apply updated all-day period settings while all_day is enabled', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            const handle = setupFormTimeSync(form, {
                all_day_start: 9,
                all_day_end: 17,
            });

            handle.updateOptions({ all_day_start: 8, all_day_end: 16 });

            expect(form.getRawValue().date).toBe(
                new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
            );
            expect(form.getRawValue().duration).toBe(8 * 60);
            expect(form.getRawValue().date_end).toBe(
                new Date(2028, 5, 15, 16, 0, 0, 0).valueOf(),
            );
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

        it('should keep an all-day range applied while all_day is on', () => {
            const form = createForm({
                date: BASE,
                duration: 120,
                all_day: true,
            });
            const handle = setupFormTimeSync(form);

            handle.updateOptions({ max_duration: 60 });

            expect(form.getRawValue().duration).toBe(24 * 60 - 1);
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

        const HOURS_9_TO_17 = { start: 9, end: 17 };

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

        it('should keep the selected calendar day when a date change preserves an after-hours time', () => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date(2028, 5, 15, 19, 0, 0, 0));
            const notify_warn = jest
                .spyOn(notifications, 'notifyWarn')
                .mockImplementation();
            try {
                const initial = new Date(2028, 5, 15, 19, 0, 0, 0).valueOf();
                const selected = new Date(2028, 5, 16, 19, 0, 0, 0).valueOf();
                const form = createForm({ date: initial, duration: 60 });
                setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

                markUserDateChange();
                form.controls.date.setValue(selected);

                expect(form.getRawValue().date).toBe(
                    new Date(2028, 5, 16, 9, 0, 0, 0).valueOf(),
                );
                expect(notify_warn).not.toHaveBeenCalled();
            } finally {
                notify_warn.mockRestore();
                jest.useRealTimers();
            }
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

        it('should allow the exact last valid start when it ends at closing time', () => {
            const exact_boundary = new Date(
                2028,
                5,
                15,
                16,
                30,
                0,
                0,
            ).valueOf();
            const form = createForm({ date: exact_boundary, duration: 30 });
            setupFormTimeSync(form, {
                bookable_hours: HOURS_9_TO_17,
                min_duration: 30,
            });

            form.controls.date.setValue(exact_boundary);

            expect(form.getRawValue().date).toBe(exact_boundary);
        });

        it('should show notification when markUserDateChange is called before setValue', () => {
            const notify_warn = jest
                .spyOn(notifications, 'notifyWarn')
                .mockImplementation();
            try {
                // 06:00 is before the 09:00-17:00 window
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
                expect(notify_warn).toHaveBeenCalledTimes(1);
            } finally {
                notify_warn.mockRestore();
            }
        });

        it('should not show notification without markUserDateChange', () => {
            const notify_warn = jest
                .spyOn(notifications, 'notifyWarn')
                .mockImplementation();
            try {
                // 06:00 is before the 09:00-17:00 window
                const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
                const form = createForm({ date: early, duration: 60 });
                setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

                // Programmatic set (no markUserDateChange)
                form.controls.date.setValue(early);

                // Should still snap to 09:00 (alignment still works)
                expect(form.getRawValue().date).toBe(
                    new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
                );
                expect(notify_warn).not.toHaveBeenCalled();
            } finally {
                notify_warn.mockRestore();
            }
        });

        // --- date change to a different calendar day (regression: date_end stale bug) ---

        it('should update date_end when date changes to a different calendar day', () => {
            // A 1-hour meeting on Jun 15 2028 at 14:00 (day D)
            // date_end is correctly set to 15:00 on the same day (day D)
            const start_day1 = new Date(2028, 5, 15, 14, 0, 0, 0).valueOf(); // Jun 15 14:00
            const end_day1 = new Date(2028, 5, 15, 15, 0, 0, 0).valueOf(); // Jun 15 15:00

            const form = createForm({
                date: start_day1,
                duration: 60,
                date_end: end_day1,
            });
            setupFormTimeSync(form);

            // Precondition: date_end is on the original day
            expect(form.getRawValue().date_end).toBe(end_day1);

            // Move the meeting to Jun 16 (next calendar day) at the same time (14:00)
            // date_end MUST be recalculated as Jun 16 14:00 + 60min = Jun 16 15:00
            const start_day2 = new Date(2028, 5, 16, 14, 0, 0, 0).valueOf(); // Jun 16 14:00
            form.controls.date.setValue(start_day2);

            const expected_end = new Date(2028, 5, 16, 15, 0, 0, 0).valueOf(); // Jun 16 15:00
            expect(form.getRawValue().date_end).toBe(expected_end);
        });

        it('should advance date_end when start moves past it on a multiday booking', () => {
            // A multiday booking: Jun 15 10:00 to Jun 17 14:00 (2 days, 28 hours)
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const end = new Date(2028, 5, 17, 14, 0, 0, 0).valueOf();
            const dur = differenceInMinutes(end, start);

            const form = createForm({
                date: start,
                duration: dur,
                date_end: end,
            });
            setupFormTimeSync(form);

            // Move start to Jun 20 — well past the old end (Jun 17)
            // date_end must be advanced, not left in the past
            const new_start = new Date(2028, 5, 20, 10, 0, 0, 0).valueOf();
            form.controls.date.setValue(new_start);

            const result_end = form.getRawValue().date_end;
            // End must be after the new start
            expect(result_end).toBeGreaterThan(new_start);
        });

        // --- multiday bookings ---

        it('should not clamp date_end with max_duration for multiday bookings', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const end = new Date(2028, 5, 17, 14, 0, 0, 0).valueOf();
            const form = createForm({
                date: start,
                duration: 60,
                date_end: end,
            });
            setupFormTimeSync(form, { max_duration: 120 });

            // Set date_end to 2 days later — should NOT be clamped by max_duration
            form.controls.date_end.setValue(end);

            const result_end = form.getRawValue().date_end;
            // End should remain on June 17 (multiday), not clamped to start + 120 min
            expect(new Date(result_end).getDate()).toBe(17);
        });

        it('should still clamp single-day date_end with max_duration', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(form, { max_duration: 120 });

            // Same-day date_end 5 hours later — should be clamped
            const end = new Date(2028, 5, 15, 15, 0, 0, 0).valueOf();
            form.controls.date_end.setValue(end);

            expect(form.getRawValue().duration).toBe(120);
        });

        it('should update duration correctly when date_end crosses into a new day', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(form, { max_duration: 120 });

            // End time is next day at 14:00 — multiday, ~28 hours
            const end = new Date(2028, 5, 16, 14, 0, 0, 0).valueOf();
            form.controls.date_end.setValue(end);

            // Duration should reflect the full multiday span, not clamped
            expect(form.getRawValue().duration).toBe(
                differenceInMinutes(end, start),
            );
        });

        it('should preserve multiday date_end when date (start) changes', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const end = new Date(2028, 5, 17, 14, 0, 0, 0).valueOf();
            const form = createForm({
                date: start,
                duration: differenceInMinutes(end, start),
                date_end: end,
            });
            setupFormTimeSync(form);

            // Change start time by 1 hour — should NOT collapse date_end
            const new_start = new Date(2028, 5, 15, 11, 0, 0, 0).valueOf();
            form.controls.date.setValue(new_start);

            // date_end should still be on June 17 (not recalculated as start + duration on same day)
            expect(new Date(form.getRawValue().date_end).getDate()).toBe(17);
        });

        it('should align multiday end time to bookable hours on the end day', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            // Set date_end to next day at 19:00 (after bookable hours end at 17:00)
            const late_end = new Date(2028, 5, 16, 19, 0, 0, 0).valueOf();
            form.controls.date_end.setValue(late_end);

            // Should be aligned to 17:00 on the same day
            const result_end = form.getRawValue().date_end;
            const result_date = new Date(result_end);
            expect(result_date.getDate()).toBe(16);
            expect(result_date.getHours()).toBe(17);
            expect(result_date.getMinutes()).toBe(0);
        });

        it('should align multiday end time before bookable start to start of window', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            // Set date_end to next day at 07:00 (before bookable hours start at 09:00)
            const early_end = new Date(2028, 5, 16, 7, 0, 0, 0).valueOf();
            form.controls.date_end.setValue(early_end);

            // Should be aligned to 09:00 on the same day
            const result_end = form.getRawValue().date_end;
            const result_date = new Date(result_end);
            expect(result_date.getDate()).toBe(16);
            expect(result_date.getHours()).toBe(9);
            expect(result_date.getMinutes()).toBe(0);
        });

        it('should not modify multiday end time that is within bookable hours', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(form, { bookable_hours: HOURS_9_TO_17 });

            // Set date_end to next day at 14:00 (within 09:00–17:00)
            const ok_end = new Date(2028, 5, 16, 14, 0, 0, 0).valueOf();
            form.controls.date_end.setValue(ok_end);

            expect(form.getRawValue().date_end).toBe(ok_end);
        });

        it('should align multiday end via updateOptions when bookable hours change', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const end = new Date(2028, 5, 17, 19, 0, 0, 0).valueOf();
            const form = createForm({
                date: start,
                duration: differenceInMinutes(end, start),
                date_end: end,
            });
            const handle = setupFormTimeSync(form);

            // Apply bookable hours — end at 19:00 exceeds 17:00 window
            handle.updateOptions({ bookable_hours: HOURS_9_TO_17 });

            const result_end = form.getRawValue().date_end;
            const result_date = new Date(result_end);
            expect(result_date.getDate()).toBe(17);
            expect(result_date.getHours()).toBe(17);
            expect(result_date.getMinutes()).toBe(0);
        });

        it('should not apply max_duration re-clamp for multiday via updateOptions', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const end = new Date(2028, 5, 17, 14, 0, 0, 0).valueOf();
            const dur = differenceInMinutes(end, start);
            const form = createForm({
                date: start,
                duration: dur,
                date_end: end,
            });
            const handle = setupFormTimeSync(form);

            // Tighten max to 120 — should not clamp multiday duration
            handle.updateOptions({ max_duration: 120 });

            expect(form.getRawValue().duration).toBe(dur);
            expect(new Date(form.getRawValue().date_end).getDate()).toBe(17);
        });
    });
});

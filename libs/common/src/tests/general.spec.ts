import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { addMinutes, differenceInMinutes } from 'date-fns';
import {
    alignDateToBookableHours,
    csvToJson,
    downloadFile,
    errorMessage,
    getItemWithKeys,
    getNextBookableTime,
    isWithinBookableHours,
    jsonToCsv,
    markUserDateChange,
    setupFormTimeSync,
    timePeriodsIntersect,
} from '../lib/general';
import * as notifications from '../lib/notifications';

describe('General Methods', () => {
    describe('getItemWithKeys', () => {
        it('should stop when an intermediate value is not an object', () => {
            expect(
                getItemWithKeys(['logo_dark', 'src'], {
                    logo_dark: 'assets/logo-dark.svg',
                }),
            ).toBeNull();
        });
    });

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
            const create_object_url = vi.fn((blob: Blob) => 'blob:test-url');
            const revoke_object_url = vi.fn();
            (window as any).URL = {
                createObjectURL: create_object_url,
                revokeObjectURL: revoke_object_url,
            };
            vi.useFakeTimers();
            try {
                downloadFile('report.csv', 'name,count\r\nJane,2');
                const blob = create_object_url.mock.calls[0][0] as Blob;
                expect(blob.type).toBe('text/csv;charset=utf-8');
                expect(blob.size).toBe(
                    new TextEncoder().encode('\uFEFFname,count\r\nJane,2')
                        .length,
                );
                vi.runOnlyPendingTimers();
                expect(revoke_object_url).toHaveBeenCalledWith('blob:test-url');
            } finally {
                vi.useRealTimers();
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
        interface TimeModel {
            id: string;
            date: number;
            duration: number;
            date_end: number;
            all_day: boolean;
        }

        let injector: Injector;

        beforeEach(() => {
            TestBed.configureTestingModule({});
            injector = TestBed.inject(Injector);
        });

        /**
         * Install a mock snackbar as the notification outlet and return its
         * `open` spy. `notifyWarn` (an ESM export that can't be spied on with
         * the native builder) routes through this outlet, so asserting on
         * `open` verifies the same behaviour.
         */
        function mockNotifyOutlet() {
            const open = vi.fn(() => ({
                onAction: () => ({ subscribe: () => ({}) }),
                dismiss: vi.fn(),
            }));
            notifications.setNotifyOutlet({ open } as any, true);
            return open;
        }

        /** Helper to build a minimal model signal with the time fields. */
        function createForm(
            overrides: Partial<TimeModel> = {},
        ): WritableSignal<TimeModel> {
            return signal({
                id: '',
                date: 0,
                duration: 60,
                date_end: 0,
                all_day: false,
                ...overrides,
            });
        }

        /** Apply a patch to the model and flush the time-sync effects. */
        function setField(
            model: WritableSignal<TimeModel>,
            patch: Partial<TimeModel>,
        ) {
            model.update((m) => ({ ...m, ...patch }));
            TestBed.flushEffects();
        }

        // Use a fixed future date so past-date snapping is predictable.
        const BASE = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf(); // Jun 15 2028 10:00

        it('should recalculate date_end when duration changes', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {}, injector);

            setField(form, { duration: 90 });

            // 10:00 + 90 min = 11:30, rounded ceil to 5 → 11:30
            expect(form().date_end).toBe(addMinutes(BASE, 90).valueOf());
        });

        it('should recalculate duration when date_end changes', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {}, injector);

            const new_end = addMinutes(BASE, 120).valueOf();
            setField(form, { date_end: new_end });

            expect(form().duration).toBe(120);
        });

        it('should clamp date_end to min duration when gap is too small', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {}, injector);

            // Set date_end only 10 min after start — less than 30 min minimum
            const too_close = addMinutes(BASE, 10).valueOf();
            setField(form, { date_end: too_close });

            expect(form().duration).toBe(30);
            expect(form().date_end).toBeGreaterThanOrEqual(
                addMinutes(BASE, 30).valueOf(),
            );
        });

        it('should clamp duration to min_duration when set below threshold', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {}, injector);

            setField(form, { duration: 15 });

            // Duration should be clamped to the default min of 30
            expect(form().duration).toBe(30);
            expect(form().date_end).toBeGreaterThanOrEqual(
                addMinutes(BASE, 30).valueOf(),
            );
        });

        it('should recalculate date_end when date changes', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, {}, injector);

            const new_date = addMinutes(BASE, 60).valueOf(); // 11:00
            setField(form, { date: new_date });

            // 11:00 + 60 min = 12:00
            expect(form().date_end).toBe(addMinutes(new_date, 60).valueOf());
        });

        it('should snap past dates to now for new items (no id)', () => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date(2028, 5, 15, 10, 0, 0, 0));
            try {
                const form = createForm({ date: BASE, duration: 60 });
                setupFormTimeSync(form, {}, injector);

                // Set a date in the past
                const past = new Date(2028, 5, 14, 8, 0, 0, 0).valueOf();
                setField(form, { date: past });

                // Should snap forward; the snapped date must be >= Date.now()
                expect(form().date).toBeGreaterThanOrEqual(Date.now());
            } finally {
                vi.useRealTimers();
            }
        });

        it('should NOT snap past dates for existing items (has id)', () => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date(2028, 5, 15, 10, 0, 0, 0));
            try {
                const form = createForm({
                    id: 'booking-1',
                    date: BASE,
                    duration: 60,
                });
                setupFormTimeSync(form, {}, injector);

                const past = new Date(2028, 5, 14, 8, 0, 0, 0).valueOf();
                setField(form, { date: past });

                // Should keep the past date because the form has an id
                expect(form().date).toBe(past);
            } finally {
                vi.useRealTimers();
            }
        });

        it('should invoke the on_time_change callback on every time field change', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = vi.fn();
            setupFormTimeSync(form, { on_time_change: callback }, injector);

            setField(form, { duration: 90 });
            expect(callback).toHaveBeenCalledTimes(1);

            setField(form, { date_end: addMinutes(BASE, 120).valueOf() });
            expect(callback).toHaveBeenCalledTimes(2);

            setField(form, { date: addMinutes(BASE, 30).valueOf() });
            expect(callback).toHaveBeenCalledTimes(3);
        });

        it('should respect a custom min_duration', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { min_duration: 45 }, injector);

            // Set duration below custom minimum
            setField(form, { duration: 20 });
            expect(form().duration).toBe(45);

            // Set date_end too close
            const too_close = addMinutes(BASE, 10).valueOf();
            setField(form, { date_end: too_close });
            expect(form().duration).toBe(45);
        });

        it('should allow configured custom durations below min_duration', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(
                form,
                {
                    min_duration: 45,
                    custom_duration_options: [30],
                },
                injector,
            );

            setField(form, { duration: 30 });

            expect(form().duration).toBe(30);
            expect(form().date_end).toBe(addMinutes(BASE, 30).valueOf());
        });

        it('should respect a custom round_to value', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { round_to: 15 }, injector);

            // 10:00 + 60 min = 11:00, already on a 15-min boundary
            setField(form, { duration: 62 });
            // 10:00 + 62 min = 11:02, ceil to nearest 15 → 11:15
            const expected_end = new Date(2028, 5, 15, 11, 15, 0, 0).valueOf();
            expect(form().date_end).toBe(expected_end);
        });

        it('should return a handle with subscriptions that can be unsubscribed', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const handle = setupFormTimeSync(form, {}, injector);

            // 3 core + 1 all_day = 4
            expect(handle.subscriptions.length).toBe(4);

            // Tear down
            handle.subscriptions.forEach((s) => s.unsubscribe());

            // Changes should no longer be synced
            const original_end = form().date_end;
            setField(form, { duration: 120 });
            expect(form().date_end).toBe(original_end);
        });

        it('should not create infinite loops between duration and date_end', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = vi.fn();
            setupFormTimeSync(form, { on_time_change: callback }, injector);

            // Rapidly alternate changes — should not throw or loop
            setField(form, { duration: 45 });
            setField(form, { date_end: addMinutes(BASE, 90).valueOf() });
            setField(form, { duration: 120 });

            // Each change fires the callback exactly once
            expect(callback).toHaveBeenCalledTimes(3);
        });

        it('should ignore invalid NaN duration changes', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = vi.fn();
            setupFormTimeSync(form, { on_time_change: callback }, injector);

            setField(form, { duration: NaN });

            expect(form().duration).toBe(30);
            expect(callback).toHaveBeenCalledTimes(1);

            setField(form, { duration: 30 });

            expect(form().duration).toBe(30);
            expect(callback).toHaveBeenCalledTimes(1);
        });

        // --- max_duration ---

        it('should clamp duration down to max_duration when exceeded', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { max_duration: 120 }, injector);

            setField(form, { duration: 180 });

            expect(form().duration).toBe(120);
            expect(form().date_end).toBe(addMinutes(BASE, 120).valueOf());
        });

        it('should clamp date_end when the implied duration exceeds max', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { max_duration: 90 }, injector);

            // Set date_end 3 hours out — exceeds max of 90 min
            setField(form, { date_end: addMinutes(BASE, 180).valueOf() });

            expect(form().duration).toBe(90);
        });

        it('should allow configured custom durations above max_duration', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(
                form,
                {
                    max_duration: 90,
                    custom_duration_options: [120],
                },
                injector,
            );

            setField(form, { duration: 120 });

            expect(form().duration).toBe(120);
            expect(form().date_end).toBe(addMinutes(BASE, 120).valueOf());
        });

        it('should allow any duration when max_duration is 0 (disabled)', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(form, { max_duration: 0 }, injector);

            setField(form, { duration: 600 });

            expect(form().duration).toBe(600);
        });

        // --- bookable-hours duration cap (PPT-2511) ---

        // Bookable window 08:00–18:00 used across the cap tests below.
        const BOOKABLE = { start: 8, end: 18 };
        // Jun 15 2028 11:00 — leaves only 7h until the 18:00 window end.
        const LATE_START = new Date(2028, 5, 15, 11, 0, 0, 0).valueOf();
        const WINDOW_END = new Date(2028, 5, 15, 18, 0, 0, 0).valueOf();

        it('should cap duration to the bookable window end even below min_duration', () => {
            const form = createForm({ date: LATE_START, duration: 60 });
            setupFormTimeSync(
                form,
                {
                    min_duration: 480,
                    bookable_hours: BOOKABLE,
                },
                injector,
            );

            // min_duration (8h) from 11:00 would end at 19:00, past 18:00
            setField(form, { duration: 480 });

            // Capped to the 7h remaining in the window
            expect(form().duration).toBe(420);
            expect(form().date_end).toBe(WINDOW_END);
        });

        it('should cap a custom duration to the bookable window end', () => {
            const form = createForm({ date: LATE_START, duration: 60 });
            setupFormTimeSync(
                form,
                {
                    min_duration: 480,
                    custom_duration_options: [600],
                    bookable_hours: BOOKABLE,
                },
                injector,
            );

            // Custom 10h option from 11:00 would end at 21:00, past 18:00
            setField(form, { duration: 600 });

            expect(form().duration).toBe(420);
            expect(form().date_end).toBe(WINDOW_END);
        });

        it('should not collapse duration to zero when no bookable window remains', () => {
            const after_window = new Date(2028, 5, 15, 22, 0, 0, 0).valueOf();
            const form = createForm({ date: after_window, duration: 30 });
            setupFormTimeSync(
                form,
                {
                    min_duration: 30,
                    bookable_hours: BOOKABLE,
                },
                injector,
            );

            setField(form, { duration: 60 });

            expect(form().duration).toBe(60);
            expect(form().date_end).toBe(
                addMinutes(after_window, 60).valueOf(),
            );
        });

        it('should preserve a custom duration below min_duration when it fits the window', () => {
            const form = createForm({ date: BASE, duration: 30 });
            setupFormTimeSync(
                form,
                {
                    min_duration: 480,
                    custom_duration_options: [60],
                    bookable_hours: BOOKABLE,
                },
                injector,
            );

            // 60 min from 10:00 ends at 11:00, well inside the window
            setField(form, { duration: 60 });

            // Held at the custom value, not raised to min_duration
            expect(form().duration).toBe(60);
            expect(form().date_end).toBe(addMinutes(BASE, 60).valueOf());
        });

        it('should re-cap duration to the window when the start date moves later', () => {
            const form = createForm({
                date: BASE,
                duration: 480,
                date_end: addMinutes(BASE, 480).valueOf(),
            });
            setupFormTimeSync(
                form,
                {
                    min_duration: 480,
                    // small custom option keeps the late start inside the window
                    custom_duration_options: [60],
                    bookable_hours: BOOKABLE,
                },
                injector,
            );

            setField(form, { date: LATE_START });

            expect(form().duration).toBe(420);
            expect(form().date_end).toBe(WINDOW_END);
        });

        it('should NOT cap duration to the window for existing items (has id)', () => {
            const form = createForm({
                id: 'booking-1',
                date: LATE_START,
                duration: 60,
            });
            setupFormTimeSync(
                form,
                {
                    min_duration: 480,
                    bookable_hours: BOOKABLE,
                },
                injector,
            );

            setField(form, { duration: 480 });

            // Existing bookings may legitimately fall outside the window
            expect(form().duration).toBe(480);
        });

        // --- all_day ---

        it('should restore the timed window after toggling all_day on and off', () => {
            const date_end = addMinutes(BASE, 90).valueOf();
            const form = createForm({
                date: BASE,
                duration: 90,
                date_end,
            });
            setupFormTimeSync(form, {}, injector);

            setField(form, { all_day: true });
            setField(form, { all_day: false });

            expect(form()).toEqual(
                expect.objectContaining({
                    date: BASE,
                    duration: 90,
                    date_end,
                    all_day: false,
                }),
            );
        });

        it('should reset duration to default_duration when all_day is toggled off', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            setupFormTimeSync(form, { default_duration: 45 }, injector);

            setField(form, { all_day: false });

            expect(form().duration).toBe(45);
            expect(form().date_end).toBe(addMinutes(BASE, 45).valueOf());
        });

        it('should use 60 as default_duration when not specified', () => {
            const form = createForm({
                date: BASE,
                duration: 120,
                all_day: true,
            });
            setupFormTimeSync(form, {}, injector);

            setField(form, { all_day: false });

            expect(form().duration).toBe(60);
        });

        it('should clamp default_duration to min/max when toggling all_day off', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            setupFormTimeSync(
                form,
                {
                    min_duration: 30,
                    max_duration: 45,
                    default_duration: 15,
                },
                injector,
            );

            setField(form, { all_day: false });

            // default 15 is below min 30 → clamped to 30
            expect(form().duration).toBe(30);
        });

        it('should skip time sync for duration/date_end changes while all_day is on', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            const callback = vi.fn();
            setupFormTimeSync(form, { on_time_change: callback }, injector);

            const original_end = form().date_end;

            // Duration change while all_day — should be ignored
            setField(form, { duration: 180 });
            expect(form().date_end).toBe(original_end);

            // date_end change while all_day — should be ignored
            setField(form, { date_end: addMinutes(BASE, 300).valueOf() });
            expect(form().duration).toBe(180);

            // Callback should not have been called for either
            expect(callback).toHaveBeenCalledTimes(0);
        });

        it('should invoke on_time_change when all_day is toggled', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = vi.fn();
            setupFormTimeSync(form, { on_time_change: callback }, injector);

            setField(form, { all_day: true });
            expect(callback).toHaveBeenCalledTimes(1);

            setField(form, { all_day: false });
            expect(callback).toHaveBeenCalledTimes(2);
        });

        it('should apply the configured all-day period when all_day is toggled on', () => {
            const form = createForm({ date: BASE, duration: 60 });
            setupFormTimeSync(
                form,
                { all_day_start: 9, all_day_end: 17 },
                injector,
            );

            setField(form, { all_day: true });

            expect(form().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
            expect(form().duration).toBe(8 * 60);
            expect(form().date_end).toBe(
                new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
            );
        });

        it('should use the all-day period start for current-day all-day bookings', () => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date(2028, 5, 15, 10, 2, 0, 0));
            try {
                const form = createForm({
                    date: new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
                    duration: 60,
                });
                setupFormTimeSync(
                    form,
                    {
                        all_day_start: 9,
                        all_day_end: 17,
                    },
                    injector,
                );

                setField(form, { all_day: true });

                expect(form().date).toBe(
                    new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
                );
                expect(form().duration).toBe(8 * 60);
                expect(form().date_end).toBe(
                    new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
                );
            } finally {
                vi.useRealTimers();
            }
        });

        it('should reapply the all-day period when the date changes while all_day is enabled', () => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date(2028, 5, 15, 10, 2, 0, 0));
            try {
                const form = createForm({
                    date: new Date(2028, 5, 16, 9, 0, 0, 0).valueOf(),
                    duration: 8 * 60,
                    all_day: true,
                    date_end: new Date(2028, 5, 16, 17, 0, 0, 0).valueOf(),
                });
                setupFormTimeSync(
                    form,
                    {
                        all_day_start: 9,
                        all_day_end: 17,
                    },
                    injector,
                );

                setField(form, {
                    date: new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
                });

                expect(form().date).toBe(
                    new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
                );
                expect(form().duration).toBe(8 * 60);
                expect(form().date_end).toBe(
                    new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
                );
            } finally {
                vi.useRealTimers();
            }
        });

        it('should apply updated all-day period settings while all_day is enabled', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            const handle = setupFormTimeSync(
                form,
                {
                    all_day_start: 9,
                    all_day_end: 17,
                },
                injector,
            );

            handle.updateOptions({ all_day_start: 8, all_day_end: 16 });
            TestBed.flushEffects();

            expect(form().date).toBe(
                new Date(2028, 5, 15, 8, 0, 0, 0).valueOf(),
            );
            expect(form().duration).toBe(8 * 60);
            expect(form().date_end).toBe(
                new Date(2028, 5, 15, 16, 0, 0, 0).valueOf(),
            );
        });

        // --- updateOptions ---

        it('should re-clamp duration when updateOptions changes max', () => {
            const form = createForm({ date: BASE, duration: 120 });
            const handle = setupFormTimeSync(form, {}, injector);

            // Initially no max — 120 is fine
            expect(form().duration).toBe(120);

            // Tighten max to 90
            handle.updateOptions({ max_duration: 90 });
            TestBed.flushEffects();
            expect(form().duration).toBe(90);
            expect(form().date_end).toBe(addMinutes(BASE, 90).valueOf());
        });

        it('should re-clamp duration when updateOptions raises min', () => {
            const form = createForm({ date: BASE, duration: 30 });
            const handle = setupFormTimeSync(
                form,
                { min_duration: 30 },
                injector,
            );

            handle.updateOptions({ min_duration: 60 });
            TestBed.flushEffects();
            expect(form().duration).toBe(60);
        });

        it('should not re-clamp when current duration is within new bounds', () => {
            const form = createForm({ date: BASE, duration: 60 });
            const callback = vi.fn();
            const handle = setupFormTimeSync(
                form,
                {
                    on_time_change: callback,
                },
                injector,
            );

            handle.updateOptions({ max_duration: 120 });
            TestBed.flushEffects();

            // 60 is within [30, 120] — no change, no callback
            expect(form().duration).toBe(60);
            expect(callback).not.toHaveBeenCalled();
        });

        it('should keep an all-day range applied while all_day is on', () => {
            const form = createForm({
                date: BASE,
                duration: 120,
                all_day: true,
            });
            const handle = setupFormTimeSync(form, {}, injector);

            handle.updateOptions({ max_duration: 60 });
            TestBed.flushEffects();

            expect(form().duration).toBe(24 * 60 - 1);
        });

        it('should update default_duration used when toggling all_day off', () => {
            const form = createForm({
                date: BASE,
                duration: 60,
                all_day: true,
            });
            const handle = setupFormTimeSync(
                form,
                { default_duration: 30 },
                injector,
            );

            handle.updateOptions({ default_duration: 90 });
            TestBed.flushEffects();
            setField(form, { all_day: false });

            expect(form().duration).toBe(90);
        });

        // --- bookable hours ---

        const HOURS_9_TO_17 = { start: 9, end: 17 };

        it('should snap date into the bookable window for new items', () => {
            // 06:00 is before the 09:00–17:00 window
            const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
            const form = createForm({ date: 0, duration: 60 });
            setupFormTimeSync(
                form,
                { bookable_hours: HOURS_9_TO_17 },
                injector,
            );

            // Trigger the date handler
            setField(form, { date: early });

            // Should snap to 09:00
            expect(form().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
        });

        it('should leave date unchanged when within the bookable window', () => {
            const within = new Date(2028, 5, 15, 12, 0, 0, 0).valueOf();
            const form = createForm({ date: 0, duration: 60 });
            setupFormTimeSync(
                form,
                { bookable_hours: HOURS_9_TO_17 },
                injector,
            );

            setField(form, { date: within });

            expect(form().date).toBe(within);
        });

        it('should keep the selected calendar day when a date change preserves an after-hours time', () => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date(2028, 5, 15, 19, 0, 0, 0));
            const notify_open = mockNotifyOutlet();
            try {
                const initial = new Date(2028, 5, 15, 19, 0, 0, 0).valueOf();
                const selected = new Date(2028, 5, 16, 19, 0, 0, 0).valueOf();
                const form = createForm({ date: initial, duration: 60 });
                setupFormTimeSync(
                    form,
                    { bookable_hours: HOURS_9_TO_17 },
                    injector,
                );

                markUserDateChange();
                setField(form, { date: selected });

                expect(form().date).toBe(
                    new Date(2028, 5, 16, 9, 0, 0, 0).valueOf(),
                );
                expect(notify_open).not.toHaveBeenCalled();
            } finally {
                notifications.setNotifyOutlet(null as any, true);
                vi.useRealTimers();
            }
        });

        it('should not snap bookable hours for existing items (has id)', () => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date(2028, 5, 15, 18, 30, 0, 0));
            try {
                // 18:30 is after the window
                const late = new Date(2028, 5, 15, 18, 30, 0, 0).valueOf();
                const form = createForm({
                    id: 'existing-1',
                    date: 0,
                    duration: 60,
                });
                setupFormTimeSync(
                    form,
                    { bookable_hours: HOURS_9_TO_17 },
                    injector,
                );

                setField(form, { date: late });

                // Existing item — should keep the date (alignDateToBookableHours
                // only jumps to next day for past dates, and we're at "now")
                expect(form().date).toBe(late);
            } finally {
                vi.useRealTimers();
            }
        });

        it('should re-align date when bookable_hours are updated via updateOptions', () => {
            const early = new Date(2028, 5, 15, 7, 0, 0, 0).valueOf();
            const form = createForm({ date: early, duration: 60 });
            const handle = setupFormTimeSync(form, {}, injector);

            // No bookable hours initially — date stays at 07:00
            expect(form().date).toBe(early);

            // Now apply bookable hours
            handle.updateOptions({
                bookable_hours: HOURS_9_TO_17,
            });
            TestBed.flushEffects();

            // Date should be aligned to 09:00
            expect(form().date).toBe(
                new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            );
        });

        it('should not align date when bookable_hours are removed', () => {
            const within = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: within, duration: 60 });
            const handle = setupFormTimeSync(
                form,
                {
                    bookable_hours: HOURS_9_TO_17,
                },
                injector,
            );

            handle.updateOptions({ bookable_hours: null });
            TestBed.flushEffects();

            // Set date before old window — no alignment should happen
            const early = new Date(2028, 5, 15, 5, 0, 0, 0).valueOf();
            setField(form, { date: early });
            expect(form().date).toBe(early);
        });

        it('should still recalculate date_end when date is snapped to bookable hours', () => {
            const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
            const form = createForm({ date: 0, duration: 60 });
            setupFormTimeSync(
                form,
                { bookable_hours: HOURS_9_TO_17 },
                injector,
            );

            setField(form, { date: early });

            // Date snapped to 09:00, date_end should be 09:00 + 60 min = 10:00
            const expected_date = new Date(2028, 5, 15, 9, 0, 0, 0).valueOf();
            expect(form().date).toBe(expected_date);
            expect(form().date_end).toBe(
                addMinutes(expected_date, 60).valueOf(),
            );
        });

        it('should snap to next day when date is within min_duration of window end', () => {
            // 16:45 with 09:00–17:00 window and 30-min minimum
            // Effective end = 16:30, so 16:45 is outside → snaps to next day 09:00
            const late = new Date(2028, 5, 15, 16, 45, 0, 0).valueOf();
            const form = createForm({ date: 0, duration: 30 });
            setupFormTimeSync(
                form,
                {
                    bookable_hours: HOURS_9_TO_17,
                    min_duration: 30,
                },
                injector,
            );

            setField(form, { date: late });

            expect(form().date).toBe(
                new Date(2028, 5, 16, 9, 0, 0, 0).valueOf(),
            );
        });

        it('should allow date that leaves room for min_duration before window end', () => {
            // 16:00 with 09:00–17:00 window and 30-min minimum
            // Effective end = 16:30, so 16:00 is inside → stays
            const ok = new Date(2028, 5, 15, 16, 0, 0, 0).valueOf();
            const form = createForm({ date: 0, duration: 30 });
            setupFormTimeSync(
                form,
                {
                    bookable_hours: HOURS_9_TO_17,
                    min_duration: 30,
                },
                injector,
            );

            setField(form, { date: ok });

            expect(form().date).toBe(ok);
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
            const form = createForm({ date: 0, duration: 30 });
            setupFormTimeSync(
                form,
                {
                    bookable_hours: HOURS_9_TO_17,
                    min_duration: 30,
                },
                injector,
            );

            setField(form, { date: exact_boundary });

            expect(form().date).toBe(exact_boundary);
        });

        it('should show notification when markUserDateChange is called before setValue', () => {
            const notify_open = mockNotifyOutlet();
            try {
                // 06:00 is before the 09:00-17:00 window
                const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
                const form = createForm({ date: 0, duration: 60 });
                setupFormTimeSync(
                    form,
                    { bookable_hours: HOURS_9_TO_17 },
                    injector,
                );

                // Simulate user interaction: mark then set
                markUserDateChange();
                setField(form, { date: early });

                // Should snap to 09:00
                expect(form().date).toBe(
                    new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
                );
                expect(notify_open).toHaveBeenCalledTimes(1);
                expect((notify_open.mock.calls[0] as any[])[2]).toEqual(
                    expect.objectContaining({ panelClass: ['warn'] }),
                );
            } finally {
                notifications.setNotifyOutlet(null as any, true);
            }
        });

        it('should not show notification without markUserDateChange', () => {
            const notify_open = mockNotifyOutlet();
            try {
                // 06:00 is before the 09:00-17:00 window
                const early = new Date(2028, 5, 15, 6, 0, 0, 0).valueOf();
                const form = createForm({ date: 0, duration: 60 });
                setupFormTimeSync(
                    form,
                    { bookable_hours: HOURS_9_TO_17 },
                    injector,
                );

                // Programmatic set (no markUserDateChange)
                setField(form, { date: early });

                // Should still snap to 09:00 (alignment still works)
                expect(form().date).toBe(
                    new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
                );
                expect(notify_open).not.toHaveBeenCalled();
            } finally {
                notifications.setNotifyOutlet(null as any, true);
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
            setupFormTimeSync(form, {}, injector);

            // Precondition: date_end is on the original day
            expect(form().date_end).toBe(end_day1);

            // Move the meeting to Jun 16 (next calendar day) at the same time (14:00)
            // date_end MUST be recalculated as Jun 16 14:00 + 60min = Jun 16 15:00
            const start_day2 = new Date(2028, 5, 16, 14, 0, 0, 0).valueOf(); // Jun 16 14:00
            setField(form, { date: start_day2 });

            const expected_end = new Date(2028, 5, 16, 15, 0, 0, 0).valueOf(); // Jun 16 15:00
            expect(form().date_end).toBe(expected_end);
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
            setupFormTimeSync(form, {}, injector);

            // Move start to Jun 20 — well past the old end (Jun 17)
            // date_end must be advanced, not left in the past
            const new_start = new Date(2028, 5, 20, 10, 0, 0, 0).valueOf();
            setField(form, { date: new_start });

            const result_end = form().date_end;
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
            setupFormTimeSync(form, { max_duration: 120 }, injector);

            // Set date_end to 2 days later — should NOT be clamped by max_duration
            setField(form, { date_end: end });

            const result_end = form().date_end;
            // End should remain on June 17 (multiday), not clamped to start + 120 min
            expect(new Date(result_end).getDate()).toBe(17);
        });

        it('should still clamp single-day date_end with max_duration', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(form, { max_duration: 120 }, injector);

            // Same-day date_end 5 hours later — should be clamped
            const end = new Date(2028, 5, 15, 15, 0, 0, 0).valueOf();
            setField(form, { date_end: end });

            expect(form().duration).toBe(120);
        });

        it('should update duration correctly when date_end crosses into a new day', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(form, { max_duration: 120 }, injector);

            // End time is next day at 14:00 — multiday, ~28 hours
            const end = new Date(2028, 5, 16, 14, 0, 0, 0).valueOf();
            setField(form, { date_end: end });

            // Duration should reflect the full multiday span, not clamped
            expect(form().duration).toBe(differenceInMinutes(end, start));
        });

        it('should preserve multiday date_end when date (start) changes', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const end = new Date(2028, 5, 17, 14, 0, 0, 0).valueOf();
            const form = createForm({
                date: start,
                duration: differenceInMinutes(end, start),
                date_end: end,
            });
            setupFormTimeSync(form, {}, injector);

            // Change start time by 1 hour — should NOT collapse date_end
            const new_start = new Date(2028, 5, 15, 11, 0, 0, 0).valueOf();
            setField(form, { date: new_start });

            // date_end should still be on June 17 (not recalculated as start + duration on same day)
            expect(new Date(form().date_end).getDate()).toBe(17);
        });

        it('should align multiday end time to bookable hours on the end day', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(
                form,
                { bookable_hours: HOURS_9_TO_17 },
                injector,
            );

            // Set date_end to next day at 19:00 (after bookable hours end at 17:00)
            const late_end = new Date(2028, 5, 16, 19, 0, 0, 0).valueOf();
            setField(form, { date_end: late_end });

            // Should be aligned to 17:00 on the same day
            const result_end = form().date_end;
            const result_date = new Date(result_end);
            expect(result_date.getDate()).toBe(16);
            expect(result_date.getHours()).toBe(17);
            expect(result_date.getMinutes()).toBe(0);
        });

        it('should align multiday end time before bookable start to start of window', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(
                form,
                { bookable_hours: HOURS_9_TO_17 },
                injector,
            );

            // Set date_end to next day at 07:00 (before bookable hours start at 09:00)
            const early_end = new Date(2028, 5, 16, 7, 0, 0, 0).valueOf();
            setField(form, { date_end: early_end });

            // Should be aligned to 09:00 on the same day
            const result_end = form().date_end;
            const result_date = new Date(result_end);
            expect(result_date.getDate()).toBe(16);
            expect(result_date.getHours()).toBe(9);
            expect(result_date.getMinutes()).toBe(0);
        });

        it('should not modify multiday end time that is within bookable hours', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const form = createForm({ date: start, duration: 60 });
            setupFormTimeSync(
                form,
                { bookable_hours: HOURS_9_TO_17 },
                injector,
            );

            // Set date_end to next day at 14:00 (within 09:00–17:00)
            const ok_end = new Date(2028, 5, 16, 14, 0, 0, 0).valueOf();
            setField(form, { date_end: ok_end });

            expect(form().date_end).toBe(ok_end);
        });

        it('should align multiday end via updateOptions when bookable hours change', () => {
            const start = new Date(2028, 5, 15, 10, 0, 0, 0).valueOf();
            const end = new Date(2028, 5, 17, 19, 0, 0, 0).valueOf();
            const form = createForm({
                date: start,
                duration: differenceInMinutes(end, start),
                date_end: end,
            });
            const handle = setupFormTimeSync(form, {}, injector);

            // Apply bookable hours — end at 19:00 exceeds 17:00 window
            handle.updateOptions({ bookable_hours: HOURS_9_TO_17 });
            TestBed.flushEffects();

            const result_end = form().date_end;
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
            const handle = setupFormTimeSync(form, {}, injector);

            // Tighten max to 120 — should not clamp multiday duration
            handle.updateOptions({ max_duration: 120 });
            TestBed.flushEffects();

            expect(form().duration).toBe(dur);
            expect(new Date(form().date_end).getDate()).toBe(17);
        });
    });

    describe('errorMessage', () => {
        it('should read the message from every shape the API throws', () => {
            expect(errorMessage('Desk taken')).toBe('Desk taken');
            expect(errorMessage(new Error('boom'))).toBe('boom');
            expect(errorMessage({ error: 'Asset unavailable' })).toBe(
                'Asset unavailable',
            );
            expect(errorMessage({ message: 'Not permitted' })).toBe(
                'Not permitted',
            );
            expect(errorMessage({ error: { message: 'Conflict' } })).toBe(
                'Conflict',
            );
        });

        it('should return an empty string when no message is found', () => {
            expect(errorMessage({})).toBe('');
            expect(errorMessage(null)).toBe('');
            expect(errorMessage({ error: { status: 409 } })).toBe('');
        });
    });
});

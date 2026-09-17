import { DatePipe } from '@angular/common';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { MatTooltip } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { LOCAL_TIMEZONE } from '@placeos/common';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { getUnixTime } from 'date-fns';
import { vi } from 'vitest';
import {
    createPlaylistScheduleModel,
    PlaylistScheduleFormComponent,
    playlistSchedulePayload,
    playlistSchedules,
    playlistScheduleSchema,
} from '../../app/shared/playlist-schedule-form.component';

describe('playlist-schedule-form helpers', () => {
    it('round trips all 128 characters including leading zeros and clears a disabled mask', () => {
        const stored = {
            mask: '0'.repeat(127) + '1',
            valid_from: 1770000000,
        };
        const model = createPlaylistScheduleModel(stored);
        expect(model.has_mask).toBe(true);
        expect(playlistSchedulePayload(model)).toMatchObject(stored);
        expect(
            playlistSchedulePayload({ ...model, has_mask: false }),
        ).toMatchObject({ mask: '' });
    });

    it('derives a daily recurrence and start time from a cron string', () => {
        const model = createPlaylistScheduleModel({ play_cron: '0 9 * * *' });

        expect(model.schedule_type).toBe('play_cron');
        expect(model.recurrence_type).toBe('daily');
        expect(model.play_start).toBe(9 * 60);
    });

    it('recognises a weekday-only cron pattern', () => {
        const model = createPlaylistScheduleModel({ play_cron: '0 8 * * 1-5' });

        expect(model.recurrence_type).toBe('weekdays');
    });

    it('treats a schedule with play_at as a one-off', () => {
        const play_at_ms = Date.UTC(2026, 2, 2, 10, 30);
        // The API carries seconds; the form model works in milliseconds
        const model = createPlaylistScheduleModel({
            play_at: getUnixTime(new Date(play_at_ms)),
        });

        expect(model.schedule_type).toBe('play_at');
        expect(model.play_at).toBe(play_at_ms);
    });

    // Reading a seconds timestamp as milliseconds put every one-off schedule
    // in January 1970, and saving it again divided the stored value by 1000.
    it('round trips a one-off schedule without shifting the date', () => {
        const stored = getUnixTime(new Date(Date.UTC(2026, 2, 2, 10, 30)));

        const model = createPlaylistScheduleModel({ play_at: stored });
        const payload = playlistSchedulePayload(model);

        expect(payload.play_at).toBe(stored);
        expect(new Date(model.play_at).getUTCFullYear()).toBe(2026);
    });

    it('builds a one-off payload with a unix play_at and fallback cron', () => {
        const play_at = Date.UTC(2026, 2, 2, 10, 30);
        const payload = playlistSchedulePayload({
            ...createPlaylistScheduleModel(),
            schedule_type: 'play_at',
            play_at,
            play_period: 45,
            play_takeover: true,
        });

        expect(payload).toEqual({
            play_at: getUnixTime(new Date(play_at)),
            play_cron: '0 0 * * *',
            play_period: 45,
            play_takeover: true,
            valid_from: 0,
            valid_until: 0,
            mask: '',
        });
    });

    it('round trips a schedule start as unix seconds', () => {
        const valid_from = getUnixTime(new Date(Date.UTC(2026, 3, 2, 8, 15)));

        const model = createPlaylistScheduleModel({ valid_from });
        const payload = playlistSchedulePayload(model);

        expect(model.has_valid_from).toBe(true);
        expect(model.valid_from).toBe(valid_from * 1000);
        expect(payload.valid_from).toBe(valid_from);
        expect(
            playlistSchedulePayload({ ...model, has_valid_from: false })
                .valid_from,
        ).toBe(0);
    });

    it('round trips a schedule expiry as unix seconds', () => {
        const valid_until = getUnixTime(new Date(Date.UTC(2026, 3, 2, 18, 45)));

        const model = createPlaylistScheduleModel({ valid_until });
        const payload = playlistSchedulePayload(model);

        expect(model.has_valid_until).toBe(true);
        expect(model.valid_until).toBe(valid_until * 1000);
        expect(payload.valid_until).toBe(valid_until);
    });

    it('serialises a disabled schedule expiry as zero', () => {
        const payload = playlistSchedulePayload({
            ...createPlaylistScheduleModel(),
            has_valid_until: false,
            valid_until: Date.UTC(2026, 3, 2, 18, 45),
        });

        expect(payload.valid_until).toBe(0);
    });

    it('builds a recurring payload with a generated cron and no play_at', () => {
        const payload = playlistSchedulePayload({
            ...createPlaylistScheduleModel(),
            schedule_type: 'play_cron',
            recurrence_type: 'weekly',
            play_start: 9 * 60,
            recurrence_weekdays: [1, 3],
            play_period: 60,
        });

        expect(payload.play_at).toBe(0);
        expect(payload.play_cron).toBe('0 9 * * 1,3');
        expect(payload.play_period).toBe(60);
    });

    it('falls back to a single synthesised schedule for legacy playlists', () => {
        const legacy = {
            play_cron: '0 9 * * *',
            play_period: 30,
        } as any;

        expect(playlistSchedules(legacy)).toEqual([
            expect.objectContaining({ play_cron: '0 9 * * *' }),
        ]);
        expect(
            playlistSchedules({ schedules: [{ play_cron: 'x' }] } as any),
        ).toEqual([{ play_cron: 'x' }]);
    });
});

describe('PlaylistScheduleFormComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PlaylistScheduleFormComponent],
        }).compileComponents();
    });

    function setup(
        overrides: Partial<ReturnType<typeof createPlaylistScheduleModel>> = {},
    ) {
        const fixture = TestBed.createComponent(PlaylistScheduleFormComponent);
        const model = signal({
            ...createPlaylistScheduleModel(),
            ...overrides,
        });
        const schedule = TestBed.runInInjectionContext(() =>
            form(model, playlistScheduleSchema),
        );
        fixture.componentRef.setInput('schedule', schedule);
        fixture.componentRef.setInput('index', 0);
        return { fixture, component: fixture.componentInstance, model };
    }

    it('shows dates for skipped and played occurrences in tooltips and list rows', async () => {
        const { fixture, component, model } = setup({
            has_mask: true,
            mask: '010',
            has_valid_from: true,
            valid_from: Date.UTC(2026, 0, 1, 8, 30),
            recurrence_type: 'daily',
            play_start: 9 * 60,
        });
        component.timezone.set('UTC');
        fixture.componentRef.setInput('open', true);
        await fixture.whenStable();
        expect(
            component.mask_occurrence_dates().map((date) => date.toISOString()),
        ).toEqual([
            '2026-01-01T09:00:00.000Z',
            '2026-01-02T09:00:00.000Z',
            '2026-01-03T09:00:00.000Z',
        ]);
        const first = fixture.debugElement.query(By.css('[mask-instance]'));
        expect(first.injector.get(MatTooltip).message).toBe(
            component.mask_occurrence_labels()[0],
        );
        component.mask_view.set('list');
        await fixture.whenStable();
        expect(first.injector.get(MatTooltip).disabled).toBe(true);
        expect(
            fixture.debugElement
                .queryAll(By.css('[mask-instance-date]'))
                .map((row) => row.nativeElement.textContent.trim()),
        ).toEqual(component.mask_occurrence_labels());
        component.timezone.set('America/New_York');
        expect(component.mask_occurrence_dates()[0].toISOString()).toBe(
            '2026-01-01T14:00:00.000Z',
        );
        model.update((value) => ({
            ...value,
            has_valid_until: true,
            valid_until: Date.UTC(2026, 0, 2, 14),
        }));
        expect(component.mask_occurrence_dates().length).toBe(2);
    });

    it('finds the whole 128-occurrence monthly cycle', () => {
        const { component } = setup({
            has_mask: true,
            mask: '1'.repeat(128),
            has_valid_from: true,
            valid_from: Date.UTC(2000, 0, 1),
            recurrence_type: 'monthly',
            recurrence_day_of_month: [1],
            play_start: 9 * 60,
        });
        component.timezone.set('UTC');
        expect(component.mask_occurrence_dates().length).toBe(128);
        expect(component.mask_occurrence_dates().at(-1)?.toISOString()).toBe(
            '2010-08-01T09:00:00.000Z',
        );
    });

    it('omits nonexistent local times from the instance dates', () => {
        const { component } = setup({
            has_mask: true,
            mask: '111',
            has_valid_from: true,
            valid_from: Date.UTC(2026, 2, 7),
            recurrence_type: 'daily',
            play_start: 150,
        });
        component.timezone.set('America/New_York');
        expect(
            component.mask_occurrence_dates().map((date) => date.toISOString()),
        ).toEqual([
            '2026-03-07T07:30:00.000Z',
            '2026-03-09T06:30:00.000Z',
            '2026-03-10T06:30:00.000Z',
        ]);
    });

    it('requires an anchor and shows only the single occurrence for play-once schedules', () => {
        const { component, model } = setup({
            has_mask: true,
            mask: '11',
            schedule_type: 'play_at',
            play_at: Date.UTC(2026, 0, 2),
        });
        expect(component.mask_occurrence_dates()).toEqual([]);
        expect(component.mask_occurrence_labels()[0]).toContain(
            'Set Valid From',
        );
        model.update((value) => ({
            ...value,
            has_valid_from: true,
            valid_from: Date.UTC(2026, 0, 1),
        }));
        expect(
            component.mask_occurrence_dates().map((date) => date.toISOString()),
        ).toEqual(['2026-01-02T00:00:00.000Z']);
        expect(component.mask_occurrence_labels()[1]).toContain(
            'No occurrence',
        );
    });

    it('edits individual occurrences through accessible buttons', async () => {
        const { fixture, component, model } = setup({
            has_mask: true,
            mask: '00101',
            has_valid_from: true,
        });
        fixture.componentRef.setInput('open', true);
        await fixture.whenStable();
        const buttons = fixture.debugElement.queryAll(
            By.css('[mask-instance]'),
        );
        expect(buttons.length).toBe(5);
        expect(buttons[0].nativeElement.getAttribute('aria-pressed')).toBe(
            'false',
        );
        expect(buttons[0].nativeElement.getAttribute('aria-label')).toBe(
            'Occurrence 1: Skip',
        );
        buttons[0].nativeElement.click();
        await fixture.whenStable();
        expect(model().mask).toBe('10101');
        expect(buttons[0].nativeElement.getAttribute('aria-pressed')).toBe(
            'true',
        );
        expect(component.mask_play_count()).toBe(3);
        expect(playlistSchedulePayload(model()).mask).toBe('10101');
    });

    it('keeps choices when resizing and applies bulk patterns', async () => {
        const { fixture, component, model } = setup({
            has_mask: true,
            mask: '01',
            has_valid_from: true,
        });
        component.resizeMask(5);
        expect(model().mask).toBe('01111');
        component.resizeMask(3);
        expect(model().mask).toBe('011');
        component.fillMask('alternate');
        expect(model().mask).toBe('101');
        component.fillMask('skip');
        expect(model().mask).toBe('000');
        component.fillMask('play');
        expect(model().mask).toBe('111');
        component.resizeMask(200);
        expect(model().mask.length).toBe(128);
        component.toggleMaskInstance(127);
        expect(model().mask.at(-1)).toBe('0');
        component.resizeMask(0);
        expect(model().mask).toBe('1');
        await fixture.whenStable();
    });

    it('starts a new pattern and retains it while disabled', () => {
        const { component, model } = setup();
        component.setMaskEnabled(true);
        expect(model().mask).toBe('11');
        component.toggleMaskInstance(1);
        component.setMaskEnabled(false);
        expect(playlistSchedulePayload(model()).mask).toBe('');
        component.setMaskEnabled(true);
        expect(model().mask).toBe('10');
    });

    it.each([
        ['0', true],
        ['1', true],
        ['00101', true],
        ['1'.repeat(128), true],
        ['', false],
        ['1'.repeat(129), false],
        ['2', false],
        ['10 01', false],
        [' 01', false],
        ['01\n', false],
        ['0b01', false],
        ['-1', false],
    ])('validates binary mask %s', async (mask, valid) => {
        const { fixture, component } = setup({
            has_mask: true,
            mask,
            has_valid_from: true,
            valid_from: Date.UTC(2026, 0, 1),
        });
        await fixture.whenStable();
        expect(component.schedule()().valid()).toBe(valid);
    });

    it('requires a valid start while a mask is enabled', async () => {
        const { fixture, component, model } = setup({
            has_mask: true,
            mask: '1',
        });
        await fixture.whenStable();
        expect(component.schedule()().invalid()).toBe(true);
        expect(fixture.nativeElement.textContent).toContain('Set Valid From');
        model.update((value) => ({ ...value, has_valid_from: true }));
        await fixture.whenStable();
        expect(component.schedule()().valid()).toBe(true);
        model.update((value) => ({ ...value, valid_from: NaN }));
        await fixture.whenStable();
        expect(component.schedule()().invalid()).toBe(true);
        model.update((value) => ({ ...value, has_mask: false }));
        await fixture.whenStable();
        expect(component.schedule()().valid()).toBe(true);
    });

    it.each([
        [1000, 2000, true, true, false],
        [2000, 2000, true, true, true],
        [3000, 2000, true, true, true],
        [3000, 2000, false, true, false],
        [3000, 2000, true, false, false],
    ])(
        'validates the enabled validity limits %s to %s',
        async (
            valid_from,
            valid_until,
            has_valid_from,
            has_valid_until,
            invalid,
        ) => {
            const { fixture, component, model } = setup({
                valid_from,
                valid_until,
                has_valid_from,
                has_valid_until,
            });
            await fixture.whenStable();
            expect(component.schedule()().invalid()).toBe(invalid);
            const alert = fixture.debugElement.query(By.css('[role="alert"]'));
            expect(!!alert).toBe(invalid);
            if (invalid) {
                expect(alert.nativeElement.textContent).toContain(
                    'Valid From must be before Valid Until.',
                );
                model.update((value) => ({ ...value, valid_from: 1000 }));
                await fixture.whenStable();
                expect(component.schedule()().valid()).toBe(true);
                expect(
                    fixture.debugElement.query(By.css('[role="alert"]')),
                ).toBeNull();
            }
        },
    );

    it('shows the recurring timezone selector in the validity block by default', async () => {
        const { fixture, component, model } = setup({
            schedule_type: 'play_at',
        });
        fixture.componentRef.setInput('open', true);
        expect(component.schedule_timezone_once_only()).toBe(true);
        await fixture.whenStable();
        const selector = By.css('mat-select[name="timezone"]');
        expect(fixture.debugElement.query(selector)).not.toBeNull();

        model.update((value) => ({ ...value, schedule_type: 'play_cron' }));
        await fixture.whenStable();
        expect(fixture.debugElement.queryAll(selector)).toHaveLength(1);
        expect(
            fixture.debugElement.query(
                By.css('[schedule-validity] mat-select[name="timezone"]'),
            ),
        ).not.toBeNull();

        component.schedule_timezone_once_only.set(false);
        try {
            await fixture.whenStable();
            expect(fixture.debugElement.query(selector)).not.toBeNull();
            model.update((value) => ({ ...value, schedule_type: 'play_at' }));
            await fixture.whenStable();
            expect(fixture.debugElement.query(selector)).not.toBeNull();
        } finally {
            component.schedule_timezone_once_only.set(true);
        }
    });

    it.each(['play_at', 'play_cron'] as const)(
        'changes the displayed timezone without changing stored timestamps for %s',
        async (schedule_type) => {
            const play_at = Date.UTC(2027, 0, 2, 18, 45);
            const { fixture, component, model } = setup({
                schedule_type,
                play_at,
                has_valid_from: true,
                valid_from: play_at,
                has_valid_until: true,
                valid_until: play_at + 3600000,
            });
            fixture.componentRef.setInput('open', true);
            component.timezone.set('UTC');
            await fixture.whenStable();
            const before = playlistSchedulePayload(model());
            const summary = component.scheduleSummary();
            component.timezone.set('Asia/Tokyo');
            await fixture.whenStable();
            expect(playlistSchedulePayload(model())).toEqual(before);
            expect(component.scheduleSummary()).not.toBe(summary);
            expect(component.scheduleSummary()).toContain('Asia/Tokyo');
            for (const field of fixture.debugElement.queryAll(
                By.directive(TimeFieldComponent),
            )) {
                expect(field.componentInstance.timezone()).toBe('Asia/Tokyo');
                expect(field.componentInstance.time()).toMatch(/^(03|04):45$/);
            }
            for (const field of fixture.debugElement.queryAll(
                By.directive(DateFieldComponent),
            )) {
                expect(field.componentInstance.timezone()).toBe('Asia/Tokyo');
            }
        },
    );

    it('uses the selected timezone for the recurring start and keeps the cron unchanged', () => {
        const { component, model } = setup({
            recurrence_type: 'daily',
            play_start: 9 * 60,
        });
        const before = playlistSchedulePayload(model());
        component.timezone.set('Asia/Tokyo');
        expect(new Date(component.recurringPlayStartTime()).getUTCHours()).toBe(
            0,
        );
        expect(playlistSchedulePayload(model())).toEqual(before);
    });

    it.each([
        ['2027-01-02T00:00:00Z', '2027-01-02T14:00:00Z'],
        ['2027-07-02T00:00:00Z', '2027-07-02T13:00:00Z'],
    ])(
        'previews a New York recurrence using the offset on %s',
        (now, play_at) => {
            const clock = vi
                .spyOn(Date, 'now')
                .mockReturnValue(Date.parse(now));
            try {
                const { component } = setup({
                    recurrence_type: 'daily',
                    play_start: 9 * 60,
                    has_valid_until: true,
                    valid_until: Date.parse(play_at),
                });
                component.timezone.set('America/New_York');
                expect(component.nextCronPlayTimes()).toHaveLength(1);
                component
                    .schedule()
                    .valid_until()
                    .value.set(Date.parse(play_at) - 1000);
                expect(component.nextCronPlayTimes()).toEqual([]);
            } finally {
                clock.mockRestore();
            }
        },
    );

    it.each([
        ['2027-01-02T14:00:00Z', 1],
        ['2027-01-02T14:00:01Z', 0],
        ['2027-01-02T15:00:00Z', 0],
    ])('respects a New York validity window starting at %s', (start, count) => {
        const clock = vi
            .spyOn(Date, 'now')
            .mockReturnValue(Date.parse('2026-01-01T00:00:00Z'));
        try {
            const { component } = setup({
                recurrence_type: 'daily',
                play_start: 9 * 60,
                has_valid_from: true,
                valid_from: Date.parse(start),
                has_valid_until: true,
                valid_until: Date.parse('2027-01-02T14:00:00Z'),
            });
            component.timezone.set('America/New_York');
            expect(component.nextCronPlayTimes()).toHaveLength(count);
        } finally {
            clock.mockRestore();
        }
    });

    it('accepts typed start times and displays their timezone conversion', async () => {
        const { fixture, component, model } = setup({
            recurrence_type: 'daily',
            play_start: 9 * 60,
        });
        fixture.componentRef.setInput('open', true);
        component.timezone.set('Asia/Tokyo');
        await fixture.whenStable();
        const input: HTMLInputElement = fixture.debugElement.query(
            By.css('input[type="time"]'),
        ).nativeElement;
        const field = input.closest('mat-form-field').parentElement;
        expect(field.textContent).toContain('9 : 00');
        expect(field.textContent).toContain('GMT+9');
        component.timezone.set('UTC');
        await fixture.whenStable();
        const expected = new Date(component.recurringPlayStartTime());
        expected.setHours(10, 37, 0, 0);
        input.value = '10:37';
        input.dispatchEvent(new Event('input'));
        await fixture.whenStable();
        expect(input.value).toBe('10:37');
        expect(model().play_start).toBe(expected.getUTCHours() * 60 + 37);
        expect(playlistSchedulePayload(model()).play_cron).toBe(
            `37 ${expected.getUTCHours()} * * *`,
        );
        expect(field.textContent).toContain(
            new DatePipe('en-AU').transform(expected, 'h : mm a (z)', '+0000'),
        );
        input.value = '';
        input.dispatchEvent(new Event('input'));
        input.dispatchEvent(new Event('blur'));
        await fixture.whenStable();
        expect(input.value).toBe('10:37');
    });

    it('hides the converted start time when the selected timezone matches the user', async () => {
        const { fixture, component } = setup({ recurrence_type: 'daily' });
        fixture.componentRef.setInput('open', true);
        component.timezone.set(LOCAL_TIMEZONE);
        await fixture.whenStable();
        expect(
            fixture.debugElement.query(By.css('[start-timezone]')),
        ).toBeNull();
        component.timezone.set(
            LOCAL_TIMEZONE === 'Asia/Tokyo' ? 'UTC' : 'Asia/Tokyo',
        );
        await fixture.whenStable();
        expect(
            fixture.debugElement.query(By.css('[start-timezone]')),
        ).not.toBeNull();
    });

    it('keeps the selected timezone and trigger text when it does not match the search', async () => {
        const { fixture, component } = setup({ schedule_type: 'play_at' });
        fixture.componentRef.setInput('open', true);
        component.timezone.set('UTC');
        await fixture.whenStable();
        component.timezone_search.set('Tokyo');
        await fixture.whenStable();
        const select = fixture.debugElement.query(
            By.css('mat-select[name="timezone"]'),
        );
        expect(component.timezone()).toBe('UTC');
        expect(select.nativeElement.textContent).toContain('UTC');
        component.timezone_search.set('no-such-timezone');
        await fixture.whenStable();
        expect(select.nativeElement.textContent).toContain('UTC');
    });

    it('renders weekday labels for the locale', () => {
        const { component } = setup();

        expect(component.weekdayLabel(1, 'EEEE')).toBe('Monday');
        expect(component.weekdayLabel(0, 'EEE')).toBe('Sun');
    });

    it('summarises a recurring schedule with a readable duration', () => {
        const { component } = setup({
            recurrence_type: 'daily',
            play_start: 9 * 60,
            play_period: 90,
        });

        expect(component.recurringScheduleSummary()).toContain(
            'for 1 hour 30 minutes',
        );
    });

    it('adds a relative expiry to the summary and an exact tooltip', () => {
        const valid_until = Date.UTC(2027, 0, 2, 18, 45);
        const { component } = setup({
            has_valid_until: true,
            valid_until,
        });

        expect(component.scheduleSummary()).toContain('until');
        expect(component.scheduleExpiryTooltip()).toBe(
            new Date(valid_until).toLocaleString(),
        );
    });

    it('lists upcoming play times for a recurring cron', () => {
        const { component } = setup({
            schedule_type: 'play_cron',
            recurrence_type: 'daily',
            play_period: 60,
        });

        const times = component.nextCronPlayTimes();
        expect(times.length).toBeGreaterThan(0);
        expect(times.length).toBeLessThanOrEqual(5);
    });

    it('returns no upcoming times for one-off schedules', () => {
        const { component } = setup({ schedule_type: 'play_at' });

        expect(component.nextCronPlayTimes()).toEqual([]);
    });

    it.each(['play_at', 'play_cron'] as const)(
        'offers a 15-minute play period for %s schedules',
        async (schedule_type) => {
            const { fixture } = setup({ schedule_type });
            fixture.componentRef.setInput('open', true);

            await fixture.whenStable();

            const duration_field = fixture.debugElement.query(
                By.directive(DurationFieldComponent),
            ).componentInstance as DurationFieldComponent;
            expect(
                duration_field
                    .duration_options()
                    .slice(0, 2)
                    .map((option) => option.id),
            ).toEqual([15, 30]);
        },
    );

    it('toggles weekday selection on and off', () => {
        const { component } = setup({
            recurrence_type: 'weekly',
            recurrence_weekdays: [1],
        });

        expect(component.isRecurrenceWeekdaySelected(3)).toBe(false);

        component.toggleRecurrenceWeekday(3);
        expect(component.isRecurrenceWeekdaySelected(3)).toBe(true);

        component.toggleRecurrenceWeekday(3);
        expect(component.isRecurrenceWeekdaySelected(3)).toBe(false);
    });

    it('shows a start-time field for calendar recurrences but not intervals', () => {
        const daily = setup({ recurrence_type: 'daily' });
        expect(daily.component.showRecurringStartTime()).toBe(true);
        expect(daily.component.isIntervalRecurrence()).toBe(false);

        const hourly = setup({ recurrence_type: 'hours' });
        expect(hourly.component.isIntervalRecurrence()).toBe(true);
        expect(hourly.component.showRecurringStartTime()).toBe(false);
    });
});

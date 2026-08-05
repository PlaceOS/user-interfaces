import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { getUnixTime } from 'date-fns';
import {
    createPlaylistScheduleModel,
    PlaylistScheduleFormComponent,
    playlistSchedulePayload,
    playlistSchedules,
} from '../../app/shared/playlist-schedule-form.component';

describe('playlist-schedule-form helpers', () => {
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
        });
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
        const schedule = TestBed.runInInjectionContext(() => form(model));
        fixture.componentRef.setInput('schedule', schedule);
        fixture.componentRef.setInput('index', 0);
        return { fixture, component: fixture.componentInstance, model };
    }

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

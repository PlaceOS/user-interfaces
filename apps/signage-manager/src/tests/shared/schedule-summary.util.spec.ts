import { settingSignal } from '@placeos/common';
import { getUnixTime } from 'date-fns';
import {
    parseRecurringCron,
    scheduleExpiryLabel,
    scheduleSummary,
} from '../../app/shared/schedule-summary.util';
import { formatPlayDateTime } from '../../app/signage-playlist.util';

describe('schedule summary util', () => {
    afterEach(() => settingSignal('use_24_hour_time', false).set(false));

    // play_at arrives from the API as unix seconds, never milliseconds
    it('summarises a play once schedule at its stored time', () => {
        const play_at = new Date('2026-03-02T09:30:00');

        expect(
            scheduleSummary(
                { play_at: getUnixTime(play_at), play_period: 30 },
                'en-AU',
            ),
        ).toBe(
            `Plays once on ${formatPlayDateTime(play_at, undefined, true)} for 30 minutes`,
        );
    });

    it('shows a play once time in the 24 hour format when the app uses it', () => {
        settingSignal('use_24_hour_time', false).set(true);
        const play_at = new Date('2026-03-02T21:00:00');

        const summary = scheduleSummary(
            { play_at: getUnixTime(play_at), play_period: 30 },
            'en-AU',
        );

        expect(summary).toContain('21:00');
        expect(summary).not.toMatch(/PM/i);
    });

    it('notes the display timezone of a local play once schedule', () => {
        const summary = scheduleSummary(
            {
                play_at_local: '2026-03-02T09:30:00',
                // The API always sends a fallback cron with one-off schedules.
                play_cron: '0 0 * * *',
                play_period: 30,
            },
            'en-AU',
        );

        expect(summary).toContain(
            `${formatPlayDateTime(new Date(2026, 2, 2, 9, 30), undefined, true)} display local time`,
        );
    });

    it('summarises recurring schedules with translated text', () => {
        expect(
            scheduleSummary({ play_cron: '0 9 * * *', play_period: 30 }, 'en'),
        ).toBe('Starts every day at 9:00 AM for 30 minutes.');
        expect(
            scheduleSummary(
                { play_cron: '30 8 1,22 * *', play_period: 0 },
                'en',
            ),
        ).toBe(
            'Starts on the 1st, 22nd of each month at 8:30 AM for one playlist pass.',
        );
    });

    it('shows times in the 24 hour format when the app uses it', () => {
        settingSignal('use_24_hour_time', false).set(true);

        expect(
            scheduleSummary({ play_cron: '0 21 * * *', play_period: 30 }, 'en'),
        ).toBe('Starts every day at 21:00 for 30 minutes.');
    });

    it('summarises schedules that repeat every few minutes', () => {
        expect(
            scheduleSummary({ play_cron: '*/5 * * * *', play_period: 1 }, 'en'),
        ).toBe('Plays every 5 minutes.');
        expect(
            scheduleSummary({ play_cron: '* * * * *', play_period: 1 }, 'en'),
        ).toBe('Plays every 1 minute.');
    });

    it('names weekdays in the given locale', () => {
        expect(
            scheduleSummary({ play_cron: '0 9 * * 1', play_period: 60 }, 'fr'),
        ).toContain('lundi');
    });

    it('shows the cron of a schedule the form cannot edit', () => {
        expect(
            scheduleSummary({ play_cron: '0 9 1 6 *', play_period: 1 }, 'en'),
        ).toBe('Custom schedule (0 9 1 6 *)');
    });

    it('adds the takeover, end and mask of a schedule', () => {
        const summary = scheduleSummary(
            {
                play_cron: '0 9 * * *',
                play_period: 30,
                play_takeover: true,
                valid_until: getUnixTime(Date.now() + 3 * 24 * 60 * 60 * 1000),
                mask: '101',
            },
            'en',
        );

        expect(summary).toBe(
            'Starts every day at 9:00 AM for 30 minutes. · takeover · until 3 days from now · Mask 101, repeats every 3 instances',
        );
    });

    it('describes the end of a schedule relative to now', () => {
        const now = Date.UTC(2026, 0, 1, 9);

        expect(
            scheduleExpiryLabel(
                getUnixTime(new Date(Date.UTC(2026, 0, 22, 9))),
                now,
            ),
        ).toBe('until 21 days from now');
        expect(
            scheduleExpiryLabel(getUnixTime(now - 2 * 60 * 60 * 1000), now),
        ).toBe('until 2 hours ago');
        expect(scheduleExpiryLabel(undefined, now)).toBe('');
    });

    it('reads the repeat pattern of a cron expression', () => {
        expect(parseRecurringCron('0 9 8-14 * 1')).toMatchObject({
            recurrence_type: 'monthly_weekday',
            recurrence_time: '09:00',
            recurrence_week_of_month: [2],
            recurrence_weekdays: [1],
        });
        expect(parseRecurringCron('0 */3 * * *')).toMatchObject({
            recurrence_type: 'hours',
            recurrence_interval: 3,
        });
    });

    it('reads daily, weekly and monthly crons the form can edit', () => {
        expect(parseRecurringCron(null)).toMatchObject({
            recurrence_type: 'daily',
            recurrence_time: '00:00',
        });
        expect(parseRecurringCron('30 7 * * *')).toMatchObject({
            recurrence_type: 'daily',
            recurrence_time: '07:30',
        });
        expect(parseRecurringCron('0 9 * * 5,1,3')).toMatchObject({
            recurrence_type: 'weekly',
            recurrence_weekdays: [1, 3, 5],
        });
        expect(parseRecurringCron('0 9 15,1 * *')).toMatchObject({
            recurrence_type: 'monthly',
            recurrence_day_of_month: [1, 15],
        });
    });

    it('reads crons the form cannot edit as custom', () => {
        for (const cron of ['*/15 * * * *', '0 9 * 6 *', '0 9 32 * *']) {
            expect(parseRecurringCron(cron).recurrence_type).toBe('custom');
        }
    });
});

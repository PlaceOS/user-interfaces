import { MediaAnimation } from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import {
    createScheduleMaskFilter,
    mediaAnimation,
    playEndTime,
    playlistAnimation,
    playlistItemScheduleMap,
    playlistLoopDuration,
    playlistMediaIds,
    playlistMediaItems,
    playlistNextPlayLabels,
    playlistScheduleExpiryLabel,
    playlistScheduleExpiryTooltip,
    playlistScheduleLabel,
    playlistScheduleNextPlayLabels,
    playlistStatus,
    playOnceStart,
} from '../app/signage-playlist.util';

describe('signage playlist util', () => {
    it('maps distribution schedules by media item id', () => {
        const item = {
            item_id: 'media-1',
            schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
        } as any;

        expect(
            playlistItemScheduleMap({ schedules: [item] }).get('media-1'),
        ).toBe(item);
    });

    it('resolves distribution playlist media from schedule entries', () => {
        expect(
            playlistMediaItems({
                items: ['schedule-1', 'schedule-2'],
                schedules: [
                    { item_id: 'media-1', media: { id: 'media-1' } },
                    { item_id: 'media-2', media: { id: 'media-2' } },
                ] as any,
            }).map((item) => item.id),
        ).toEqual(['media-1', 'media-2']);
    });

    it('resolves thumbnail media ids from distribution schedule media', () => {
        expect(
            playlistMediaIds({
                items: ['schedule-1'],
                schedules: [
                    { item_id: 'media-1', media: { id: 'media-1' } },
                ] as any,
            }),
        ).toEqual(['media-1']);
    });

    it('resolves distribution media when media list is also populated', () => {
        expect(
            playlistMediaIds({
                items: ['schedule-1', 'schedule-2'],
                media: [{ id: 'media-1' }, { id: 'media-2' }] as any,
                schedules: [
                    { item_id: 'schedule-1', media: { id: 'media-1' } },
                    { item_id: 'schedule-2', media: { id: 'media-2' } },
                ] as any,
            }),
        ).toEqual(['media-1', 'media-2']);
    });

    it('maps distribution schedules by nested media id', () => {
        const item = {
            item_id: 'schedule-1',
            media: { id: 'media-1' },
        } as any;

        expect(
            playlistItemScheduleMap({ schedules: [item] }).get('media-1'),
        ).toBe(item);
    });

    // play_at arrives from the API as unix seconds, never milliseconds
    it('labels a one-off schedule at its stored time', () => {
        const play_at = new Date('2026-03-02T09:30:00');

        const label = playlistScheduleLabel({
            play_at: getUnixTime(play_at),
            play_period: 30,
        });

        expect(label).toContain('Plays once on');
        expect(label).toContain(play_at.toLocaleString());
        expect(label).toContain('for 30 minutes');
    });

    it('labels a local one-off schedule in the viewer timezone', () => {
        const label = playlistScheduleLabel({
            play_at_local: '2026-03-02T09:30:00',
            // The API always sends a fallback cron with one-off schedules.
            play_cron: '0 0 * * *',
            play_period: 30,
        });

        expect(label).toContain(
            `Plays once on ${new Date(2026, 2, 2, 9, 30).toLocaleString()} display local time`,
        );
    });

    it('reads play_at_local only as a date time with no offset', () => {
        expect(playOnceStart({ play_at_local: '2027-01-01T00:00:00' })).toEqual(
            new Date(2027, 0, 1),
        );
        for (const value of [
            '2027-01-01T00:00:00Z',
            '2027-01-01T00:00',
            '2027-02-30T00:00:00',
            '2027-01-01T00:60:00',
        ]) {
            expect(playOnceStart({ play_at_local: value })).toBeNull();
        }
    });

    it('labels cron schedules like playlist details', () => {
        expect(
            playlistScheduleLabel({
                play_cron: '0 9 * * *',
                play_period: 30,
            }),
        ).toContain('Every day at');
        expect(
            playlistScheduleLabel({
                play_cron: '0 9 * * *',
                play_period: 30,
            }),
        ).toContain('for 30 minutes');
    });

    it('adds relative and exact schedule expiry descriptions', () => {
        const now = Date.UTC(2026, 0, 1, 9);
        const valid_until = getUnixTime(new Date(Date.UTC(2026, 0, 22, 9)));
        const schedule = { valid_until };

        expect(playlistScheduleExpiryLabel(schedule, now)).toBe(
            'until 21 days from now',
        );
        expect(playlistScheduleExpiryTooltip(schedule)).toBe(
            new Date(valid_until * 1000).toLocaleString(),
        );
        expect(
            playlistScheduleLabel({
                ...schedule,
                play_cron: '0 9 * * *',
                play_period: 30,
            }),
        ).toContain(' · until ');
    });

    it('lists the next five play blocks for a recurring schedule', () => {
        const labels = playlistScheduleNextPlayLabels({
            play_cron: '0 9 * * *',
            play_period: 30,
        });
        expect(labels).toHaveLength(5);
        expect(labels[0]).toContain('–');
    });

    it.each([0, 1])(
        'applies the start boundary to recurring and one-off previews with offset %s',
        (offset) => {
            const play_at = new Date();
            play_at.setDate(play_at.getDate() + 2);
            play_at.setHours(9, 0, 0, 0);
            const timestamp = getUnixTime(play_at);
            const window = {
                valid_from: timestamp + offset,
                valid_until: timestamp,
            };
            expect(
                playlistScheduleNextPlayLabels({
                    ...window,
                    play_cron: '0 9 * * *',
                    play_period: 30,
                }),
            ).toHaveLength(offset ? 0 : 1);
            expect(
                playlistScheduleNextPlayLabels({
                    ...window,
                    play_at: timestamp,
                    play_period: 30,
                }),
            ).toHaveLength(offset ? 0 : 1);
        },
    );

    it('does not list play blocks after a schedule expires', () => {
        const labels = playlistScheduleNextPlayLabels({
            play_cron: '0 9 * * *',
            play_period: 30,
            valid_until: getUnixTime(new Date(Date.now() - 60_000)),
        });

        expect(labels).toEqual([]);
    });
});

describe('play end times across a daylight saving change', () => {
    const original_timezone = process.env.TZ;
    // Pin the zone so the result does not depend on the machine
    beforeAll(() => (process.env.TZ = 'Australia/Sydney'));
    afterAll(() => {
        if (original_timezone === undefined) delete process.env.TZ;
        else process.env.TZ = original_timezone;
    });

    // Sydney clocks go from 02:00 to 03:00 on 4 October 2026. A 4 hour play
    // from 22:00 ends when the clocks change, so its last second is 01:59:59.
    // Adding clock time instead showed 03:59.
    it('adds elapsed time to the start', () => {
        const start = new Date('2026-10-03T12:00:00Z');

        expect(playEndTime(start, 240).toISOString()).toBe(
            '2026-10-03T15:59:59.000Z',
        );
        expect(playEndTime(start, 0)).toEqual(start);
    });

    it('labels the end of a play that crosses the change', () => {
        const [label] = playlistNextPlayLabels(
            [{ play_cron: '0 22 * * *', play_period: 240 }],
            1,
            Date.parse('2026-10-03T00:00:00Z'),
        );
        const end = new Date('2026-10-03T15:59:59Z').toLocaleTimeString(
            undefined,
            { hour: 'numeric', minute: '2-digit' },
        );

        expect(label.endsWith(end)).toBe(true);
        expect(label).toContain('1:59');
    });
});

describe('schedule masks', () => {
    const start = new Date('2026-03-02T09:00:00Z');
    const schedule = {
        play_cron: '0 9 * * *',
        valid_from: start.getTime() / 1000,
        mask: '101',
    };

    it('starts at valid_from and repeats play, skip, play', () => {
        const allows = createScheduleMaskFilter(schedule, 'UTC');
        expect(
            Array.from({ length: 7 }, (_, index) =>
                allows(new Date(start.getTime() + index * 86400000)),
            ),
        ).toEqual([true, false, true, true, false, true, true]);
        expect(allows(start)).toBe(true);
        expect(allows(new Date(start.getTime() - 86400000))).toBe(false);
    });

    it('counts cron occurrences rather than calendar days', () => {
        const allows = createScheduleMaskFilter(
            { ...schedule, play_cron: '0 9 * * 1,3,5', mask: '10' },
            'UTC',
        );
        expect(allows(new Date('2026-03-04T09:00:00Z'))).toBe(false);
        expect(allows(new Date('2026-03-06T09:00:00Z'))).toBe(true);
        expect(allows(new Date('2026-03-09T09:00:00Z'))).toBe(false);
    });

    it('starts at the first occurrence after a partial minute', () => {
        const allows = createScheduleMaskFilter(
            {
                ...schedule,
                play_cron: '* * * * *',
                valid_from: start.getTime() / 1000 + 30,
                mask: '10',
            },
            'UTC',
        );
        expect(allows(new Date('2026-03-02T09:01:00Z'))).toBe(true);
        expect(allows(new Date('2026-03-02T09:02:00Z'))).toBe(false);
    });

    it('uses the final character of a 128-character mask', () => {
        const allows = createScheduleMaskFilter(
            { ...schedule, mask: '0'.repeat(127) + '1' },
            'UTC',
        );
        expect(allows(new Date(start.getTime() + 126 * 86400000))).toBe(false);
        expect(allows(new Date(start.getTime() + 127 * 86400000))).toBe(true);
        expect(allows(new Date(start.getTime() + 128 * 86400000))).toBe(false);
    });

    it('handles all-play masks, zero masks and missing anchors', () => {
        expect(
            createScheduleMaskFilter(
                { ...schedule, mask: '1'.repeat(128) },
                'UTC',
            )(start),
        ).toBe(true);
        expect(
            createScheduleMaskFilter(
                { ...schedule, mask: '000' },
                'UTC',
            )(start),
        ).toBe(false);
        expect(
            createScheduleMaskFilter(
                { ...schedule, valid_from: 0 },
                'UTC',
            )(start),
        ).toBe(false);
        expect(createScheduleMaskFilter({ mask: '' }, 'UTC')(start)).toBe(true);
    });

    it('does not count nonexistent times during a daylight saving change', () => {
        const allows = createScheduleMaskFilter(
            {
                ...schedule,
                play_cron: '30 2 * * *',
                valid_from: Date.parse('2026-03-07T07:30:00Z') / 1000,
                mask: '10',
            },
            'America/New_York',
        );
        expect(allows(new Date('2026-03-07T07:30:00Z'))).toBe(true);
        expect(allows(new Date('2026-03-09T06:30:00Z'))).toBe(false);
        expect(allows(new Date('2026-03-10T06:30:00Z'))).toBe(true);
    });

    it('sums loop time with the same fallbacks as the player', () => {
        const items = [
            { play_time: 10_000, video_length: 99_000 },
            { play_time: 0, video_length: 42_000 },
            { play_time: 0, video_length: 0 },
        ];

        expect(playlistLoopDuration(items, 20_000)).toBe(72_000);
        expect(playlistLoopDuration(items)).toBe(67_000);
    });
});

describe('playlist status', () => {
    const now = Date.UTC(2026, 0, 10);
    const seconds = (time: number) => Math.floor(time / 1000);
    const day = 86_400_000;

    it('marks a playlist expired when it or all its schedules have ended', () => {
        expect(
            playlistStatus(
                { id: 'a', valid_until: seconds(now - day) },
                {},
                {},
                now,
            ),
        ).toBe('expired');
        expect(
            playlistStatus(
                {
                    id: 'b',
                    schedules: [{ valid_until: seconds(now - day) }],
                },
                {},
                {},
                now,
            ),
        ).toBe('expired');
    });

    it('marks a playlist pending before it starts', () => {
        expect(
            playlistStatus(
                { id: 'a', valid_from: seconds(now + day) },
                {},
                {},
                now,
            ),
        ).toBe('pending');
    });

    it('separates approval required from awaiting review', () => {
        const approvals = { a: false, b: false, c: true };
        const requests = { b: true };

        expect(playlistStatus({ id: 'a' }, approvals, requests, now)).toBe(
            'awaiting_approval',
        );
        expect(playlistStatus({ id: 'b' }, approvals, requests, now)).toBe(
            'awaiting_review',
        );
        expect(playlistStatus({ id: 'c' }, approvals, requests, now)).toBe(
            null,
        );
        expect(playlistStatus({ id: 'd' }, approvals, requests, now)).toBe(
            null,
        );
    });
});

describe('media animation', () => {
    it('maps a saved index to its animation', () => {
        expect(mediaAnimation(0)).toBe(MediaAnimation.Default);
        expect(mediaAnimation(2)).toBe(MediaAnimation.CrossFade);
        expect(mediaAnimation(6)).toBe(MediaAnimation.SlideBottom);
    });

    it('keeps animation names', () => {
        expect(mediaAnimation(MediaAnimation.SlideTop)).toBe(
            MediaAnimation.SlideTop,
        );
    });

    it('uses the default for an index out of range or no value', () => {
        for (const value of [-1, 7, 1.5, Number.NaN, null, undefined]) {
            expect(mediaAnimation(value)).toBe(MediaAnimation.Default);
        }
    });
});

describe('playlist animation', () => {
    it('reads the cut that ts-client puts in place of index 0 as the default', () => {
        expect(
            playlistAnimation({ default_animation: MediaAnimation.Cut }),
        ).toBe(MediaAnimation.Default);
        expect(playlistAnimation({})).toBe(MediaAnimation.Default);
    });

    it('reads a saved cut and other indexes as their animation', () => {
        expect(playlistAnimation({ default_animation: 1 })).toBe(
            MediaAnimation.Cut,
        );
        expect(playlistAnimation({ default_animation: 2 })).toBe(
            MediaAnimation.CrossFade,
        );
    });
});

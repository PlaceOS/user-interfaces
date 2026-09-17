import { getUnixTime } from 'date-fns';
import {
    createScheduleMaskFilter,
    playlistItemScheduleMap,
    playlistMediaIds,
    playlistMediaItems,
    playlistScheduleExpiryLabel,
    playlistScheduleExpiryTooltip,
    playlistScheduleLabel,
    playlistScheduleNextPlayLabels,
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
});

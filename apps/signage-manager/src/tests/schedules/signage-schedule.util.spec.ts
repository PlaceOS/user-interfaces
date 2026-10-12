import { SignagePlaylist } from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import {
    buildDayTimelineBlocks,
    buildDisplayScheduleAssignments,
    buildScheduleBlocks,
    buildZoneScheduleAssignments,
    hasTakeoverSchedule,
} from '../../app/schedules/signage-schedule.util';
import { type PlaylistSchedule } from '../../app/signage-playlist.util';

describe('signage-schedule.util', () => {
    it('applies the repeating mask before adding timeline blocks', () => {
        const days = Array.from(
            { length: 4 },
            (_, index) => new Date(2026, 2, 2 + index),
        );
        const blocks = buildScheduleBlocks(
            [
                {
                    playlist: new SignagePlaylist({
                        id: 'masked',
                        name: 'Masked',
                        schedules: [
                            {
                                play_cron: '0 9 * * *',
                                play_period: 60,
                                play_takeover: false,
                                valid_from: days[0].getTime() / 1000,
                                mask: '10',
                            } as PlaylistSchedule,
                        ],
                    }),
                },
            ],
            days,
        );
        expect(blocks.map((block) => block.day_index)).toEqual([0, 2]);
    });
    // play_at arrives from the API as unix seconds, never milliseconds
    it('places a one-off schedule at its stored time', () => {
        const play_at = new Date('2026-03-02T09:30:00');
        const days = [new Date('2026-03-02T00:00:00')];

        const blocks = buildScheduleBlocks(
            [
                {
                    playlist: {
                        id: 'playlist-1',
                        name: 'Launch',
                        schedules: [
                            {
                                play_at: getUnixTime(play_at),
                                play_period: 60,
                                play_takeover: false,
                            },
                        ],
                    } as any,
                    source_type: 'zone',
                    source_label: 'Lobby',
                },
            ],
            days,
        );

        expect(blocks).toEqual([
            expect.objectContaining({
                day_index: 0,
                start_minutes: 9 * 60 + 30,
                duration_minutes: 60,
            }),
        ]);
    });

    it('drops a one-off schedule that falls on another day', () => {
        const blocks = buildScheduleBlocks(
            [
                {
                    playlist: {
                        id: 'playlist-1',
                        name: 'Launch',
                        schedules: [
                            {
                                play_at: getUnixTime(
                                    new Date('2026-03-05T09:30:00'),
                                ),
                                play_period: 60,
                            },
                        ],
                    } as any,
                    source_type: 'zone',
                    source_label: 'Lobby',
                },
            ],
            [new Date('2026-03-02T00:00:00')],
        );

        expect(blocks).toEqual([]);
    });

    it('builds timed blocks for a playlist schedule', () => {
        const days = [new Date('2026-03-02T00:00:00')];
        const blocks = buildScheduleBlocks(
            [
                {
                    playlist: {
                        id: 'playlist-1',
                        name: 'Breakfast',
                        schedules: [
                            {
                                play_cron: '0 9 * * *',
                                play_period: 180,
                                play_takeover: false,
                            },
                        ],
                    } as any,
                    source_type: 'zone',
                    source_label: 'Lobby',
                },
            ],
            days,
        );

        expect(blocks).toEqual([
            expect.objectContaining({
                day_index: 0,
                start_minutes: 540,
                duration_minutes: 180,
                source_type: 'zone',
                source_label: 'Lobby',
            }),
        ]);
    });

    it.each([0, 1])(
        'applies the start boundary to calendar blocks with offset %s',
        (offset) => {
            const timestamp = getUnixTime(new Date('2026-03-02T09:00:00'));
            for (const timing of [
                { play_cron: '0 9 * * *' },
                { play_at: timestamp },
            ]) {
                const schedule: PlaylistSchedule = {
                    play_cron: '0 9 * * *',
                    ...timing,
                    play_period: 30,
                    play_takeover: false,
                    valid_from: timestamp + offset,
                    valid_until: timestamp + 30 * 60,
                };
                const blocks = buildScheduleBlocks(
                    [
                        {
                            playlist: new SignagePlaylist({
                                id: 'playlist-1',
                                schedules: [schedule],
                            }),
                        },
                    ],
                    [new Date('2026-03-02T00:00:00')],
                );
                expect(blocks).toHaveLength(offset ? 0 : 1);
            }
        },
    );

    it('does not build blocks after a schedule expires', () => {
        const days = [
            new Date('2026-03-02T00:00:00'),
            new Date('2026-03-03T00:00:00'),
        ];
        const blocks = buildScheduleBlocks(
            [
                {
                    playlist: {
                        id: 'playlist-1',
                        name: 'Breakfast',
                        schedules: [
                            {
                                play_cron: '0 9 * * *',
                                play_period: 60,
                                valid_until: getUnixTime(
                                    new Date('2026-03-02T12:00:00'),
                                ),
                            },
                        ],
                    } as any,
                },
            ],
            days,
        );

        expect(blocks.map((block) => block.day_index)).toEqual([0]);
    });

    it('matches monthly weekday schedules with multiple month instances', () => {
        const days = [
            new Date('2026-03-02T00:00:00'),
            new Date('2026-03-09T00:00:00'),
            new Date('2026-03-16T00:00:00'),
        ];
        const blocks = buildScheduleBlocks(
            [
                {
                    playlist: {
                        id: 'playlist-1',
                        name: 'Breakfast',
                        schedules: [
                            {
                                play_cron: '0 9 1-7,15-21 * 1',
                                play_period: 180,
                                play_takeover: false,
                            },
                        ],
                    } as any,
                    source_type: 'zone',
                    source_label: 'Lobby',
                },
            ],
            days,
        );

        expect(blocks.map((block) => block.day_index)).toEqual([0, 2]);
    });

    it('deduplicates display schedules and collapses repeated zone sources', () => {
        const assignments = buildDisplayScheduleAssignments(
            {
                id: 'display-1',
                playlists: ['playlist-1'],
                zones: ['zone-1', 'zone-2'],
            },
            [
                {
                    id: 'zone-1',
                    display_name: 'Lobby',
                    playlists: ['playlist-1', 'playlist-2'],
                },
                {
                    id: 'zone-2',
                    display_name: 'Cafe',
                    playlists: ['playlist-2'],
                },
            ],
            [
                { id: 'playlist-1', name: 'Direct' } as any,
                { id: 'playlist-2', name: 'Inherited' } as any,
            ],
        );

        expect(assignments).toEqual([
            expect.objectContaining({
                playlist: expect.objectContaining({ id: 'playlist-1' }),
                source_type: 'display',
                source_label: 'Display',
            }),
            expect.objectContaining({
                playlist: expect.objectContaining({ id: 'playlist-2' }),
                source_type: 'zone',
                source_label: '2 zones',
            }),
        ]);
    });

    it('builds zone assignments from playlists on the zone', () => {
        const assignments = buildZoneScheduleAssignments(
            {
                id: 'zone-1',
                display_name: 'Lobby',
                playlists: ['playlist-2', 'playlist-1'],
            },
            [
                { id: 'playlist-1', name: 'Alpha' } as any,
                { id: 'playlist-2', name: 'Beta' } as any,
            ],
        );

        expect(assignments.map((item) => item.playlist.name)).toEqual([
            'Alpha',
            'Beta',
        ]);
        expect(assignments[0].source_label).toBe('Lobby');
    });

    describe('dates and kinds that match the player', () => {
        const day = new Date(2026, 2, 2);
        const at = (hours: number) => getUnixTime(new Date(2026, 2, 2, hours));
        const blocksOf = (
            schedule: Partial<PlaylistSchedule>,
            dates: { valid_from?: number; valid_until?: number } = {},
        ) =>
            buildScheduleBlocks(
                [
                    {
                        playlist: new SignagePlaylist({
                            id: 'p',
                            name: 'P',
                            schedules: [
                                {
                                    play_cron: '',
                                    play_period: 60,
                                    play_takeover: false,
                                    ...schedule,
                                },
                            ],
                            ...dates,
                        }),
                    },
                ],
                [day],
            ).map(({ start_minutes, duration_minutes, all_day, label }) => ({
                start_minutes,
                duration_minutes,
                all_day,
                label,
            }));

        it('plays only inside playlist dates shorter than a day', () => {
            expect(
                blocksOf(
                    { play_cron: '0 0 * * *', play_period: 1440 },
                    { valid_from: at(12), valid_until: at(15) },
                ),
            ).toEqual([
                {
                    start_minutes: 720,
                    duration_minutes: 180,
                    all_day: false,
                    label: '12:00 – 15:00',
                },
            ]);
        });

        it('ends a run when its schedule ends', () => {
            expect(
                blocksOf({
                    play_cron: '0 9 * * *',
                    play_period: 180,
                    valid_until: at(10),
                }),
            ).toEqual([
                expect.objectContaining({
                    start_minutes: 540,
                    duration_minutes: 60,
                }),
            ]);
        });

        it('labels a single pass and marks a whole day play once', () => {
            expect(blocksOf({ play_at: at(9), play_period: 0 })[0].label).toBe(
                'Play through once',
            );
            expect(
                blocksOf({ play_at: at(0), play_period: 1440 })[0].all_day,
            ).toBe(true);
        });

        it('plays a playlist with no schedules all day, never as a takeover', () => {
            // Old playlists can still carry schedule fields on the playlist
            const playlist = {
                id: 'old',
                name: 'Old',
                enabled: true,
                schedules: [],
                play_cron: '0 9 * * *',
                play_period: 60,
                play_takeover: true,
            } as unknown as SignagePlaylist;
            const blocks = buildScheduleBlocks([{ playlist }], [day]);

            expect(hasTakeoverSchedule(playlist)).toBe(false);
            expect(blocks).toEqual([
                expect.objectContaining({ all_day: true, takeover: false }),
            ]);
        });

        describe('across a daylight saving change', () => {
            const original_timezone = process.env.TZ;
            // Pin the zone so the result does not depend on the machine
            beforeAll(() => (process.env.TZ = 'Australia/Sydney'));
            afterAll(() => {
                if (original_timezone === undefined) delete process.env.TZ;
                else process.env.TZ = original_timezone;
            });

            it('does not draw a clock time that the change skips', () => {
                // Sydney clocks go from 02:00 to 03:00 on 4 October 2026
                const blocks = buildScheduleBlocks(
                    [
                        {
                            playlist: new SignagePlaylist({
                                id: 'p',
                                schedules: [
                                    {
                                        play_cron: '30 2 * * *',
                                        play_period: 60,
                                        play_takeover: false,
                                    },
                                ],
                            }),
                        },
                    ],
                    [new Date(2026, 9, 4), new Date(2026, 9, 5)],
                );

                expect(blocks.map(({ day_index }) => day_index)).toEqual([1]);
            });

            it('ends a run after its elapsed length, then at its end date', () => {
                // 01:30 plus 120 minutes is 04:30 after the clocks go forward
                const end = (valid_until?: number) =>
                    buildScheduleBlocks(
                        [
                            {
                                playlist: new SignagePlaylist({
                                    id: 'p',
                                    schedules: [
                                        {
                                            play_cron: '30 1 * * *',
                                            play_period: 120,
                                            play_takeover: false,
                                            valid_until,
                                        },
                                    ],
                                }),
                            },
                        ],
                        [new Date(2026, 9, 4)],
                    ).map(
                        ({ start_minutes, duration_minutes }) =>
                            start_minutes + duration_minutes,
                    );

                expect(end()).toEqual([4 * 60 + 30]);
                expect(end(getUnixTime(new Date(2026, 9, 4, 3, 45)))).toEqual([
                    3 * 60 + 45,
                ]);
            });
        });
    });

    describe('day timeline', () => {
        const day = new Date(2026, 2, 3);
        const assign = (id: string, play_cron?: string, play_period = 60) => ({
            playlist: new SignagePlaylist({
                id,
                name: id,
                schedules: play_cron
                    ? [{ play_cron, play_period, play_takeover: false }]
                    : [],
            }),
        });

        it('puts overlapping blocks in separate lanes', () => {
            // Playlists with no schedules play all day by default
            const { blocks, lane_count } = buildDayTimelineBlocks(
                [
                    assign('a'),
                    assign('b'),
                    assign('c'),
                    assign('d', '0 9 * * *'),
                ],
                day,
            );

            expect(lane_count).toBe(4);
            expect(
                blocks.map(({ playlist, lane }) => [playlist.id, lane]),
            ).toEqual([
                ['a', 0],
                ['b', 1],
                ['c', 2],
                ['d', 3],
            ]);
        });

        it('reuses a lane once the block before it ends', () => {
            const { blocks, lane_count } = buildDayTimelineBlocks(
                [assign('a', '0 9 * * *'), assign('b', '0 10 * * *')],
                day,
            );

            expect(lane_count).toBe(1);
            expect(blocks.map(({ lane }) => lane)).toEqual([0, 0]);
        });

        it('carries a block past midnight into the next day', () => {
            const { blocks } = buildDayTimelineBlocks(
                [assign('late', '0 22 * * *', 240)],
                day,
            );

            expect(
                blocks.map(({ start_minutes, duration_minutes, label }) => ({
                    start_minutes,
                    duration_minutes,
                    label,
                })),
            ).toEqual([
                {
                    start_minutes: 0,
                    duration_minutes: 120,
                    label: '22:00 – 02:00',
                },
                {
                    start_minutes: 1320,
                    duration_minutes: 120,
                    label: '22:00 – 02:00',
                },
            ]);
        });

        it('marks a block all day only when it starts at midnight', () => {
            const noon = buildScheduleBlocks(
                [assign('noon', '0 12 * * *', 1440)],
                [day],
            );
            const midnight = buildDayTimelineBlocks(
                [assign('midnight', '0 0 * * *', 1440)],
                day,
            ).blocks;

            expect(noon.map(({ all_day }) => all_day)).toEqual([false]);
            expect(midnight.map(({ all_day }) => all_day)).toEqual([true]);
        });

        it('joins touching blocks of one playlist', () => {
            const { blocks } = buildDayTimelineBlocks(
                [assign('often', '*/5 * * * *', 5)],
                day,
            );

            expect(blocks).toHaveLength(1);
            expect(blocks[0]).toMatchObject({
                start_minutes: 0,
                duration_minutes: 1440,
                all_day: true,
            });
        });
    });
});

import { getUnixTime } from 'date-fns';
import {
    buildDisplayScheduleAssignments,
    buildScheduleBlocks,
    buildZoneScheduleAssignments,
} from '../../app/schedules/signage-schedule.util';

describe('signage-schedule.util', () => {
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
});

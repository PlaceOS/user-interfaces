import {
    buildDisplayScheduleAssignments,
    buildScheduleBlocks,
    buildZoneScheduleAssignments,
} from './signage-schedule.util';

describe('signage-schedule.util', () => {
    it('builds timed blocks for a playlist schedule', () => {
        const days = [new Date('2026-03-02T00:00:00')];
        const blocks = buildScheduleBlocks(
            [
                {
                    playlist: {
                        id: 'playlist-1',
                        name: 'Breakfast',
                        play_cron: '0 9 * * *',
                        play_period: 180,
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

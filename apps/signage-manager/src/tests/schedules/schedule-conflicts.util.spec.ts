import { SignagePlaylist } from '@placeos/ts-client';
import { findTakeoverConflicts } from '../../app/schedules/schedule-conflicts.util';

function playlist(
    id: string,
    play_cron: string,
    play_period: number,
    play_takeover = true,
) {
    return new SignagePlaylist({
        id,
        name: id,
        schedules: [{ play_cron, play_period, play_takeover }],
    } as any);
}

describe('findTakeoverConflicts', () => {
    const start = new Date(2026, 8, 28);
    const lobby = { id: 'd1', name: 'Lobby', playlists: ['a'], zones: ['z1'] };
    const cafe = { id: 'd2', name: 'Cafe', playlists: ['c'], zones: [] };
    const level = { id: 'z1', name: 'Level 1', playlists: ['b'] };

    it('finds takeovers from the display and its zone that overlap', () => {
        const conflicts = findTakeoverConflicts({
            displays: [lobby],
            zones: [level],
            playlists: [
                playlist('a', '0 9 * * *', 60),
                playlist('b', '30 9 * * *', 60),
            ],
            start,
            days: 1,
        });

        expect(conflicts).toHaveLength(1);
        expect(conflicts[0].display.id).toBe('d1');
        expect(conflicts[0].starts_at).toEqual(new Date(2026, 8, 28, 9, 30));
        expect(conflicts[0].ends_at).toEqual(new Date(2026, 8, 28, 10, 0));
    });

    it('ignores overlaps that are not both takeovers', () => {
        const conflicts = findTakeoverConflicts({
            displays: [lobby],
            zones: [level],
            playlists: [
                playlist('a', '0 9 * * *', 60),
                playlist('b', '30 9 * * *', 60, false),
            ],
            start,
            days: 1,
        });

        expect(conflicts).toEqual([]);
    });

    it('only compares playlists on the same display', () => {
        const conflicts = findTakeoverConflicts({
            displays: [{ ...lobby, zones: [] }, cafe],
            zones: [],
            playlists: [
                playlist('a', '0 9 * * *', 60),
                playlist('c', '0 9 * * *', 60),
            ],
            start,
            days: 1,
        });

        expect(conflicts).toEqual([]);
    });

    it('finds overlaps that run past midnight', () => {
        const conflicts = findTakeoverConflicts({
            displays: [lobby],
            zones: [level],
            playlists: [
                playlist('a', '0 23 * * *', 120),
                playlist('b', '30 0 * * *', 30),
            ],
            start,
            days: 2,
        });

        expect(conflicts.map(({ starts_at }) => starts_at)).toEqual([
            new Date(2026, 8, 29, 0, 30),
        ]);
    });

    it('only returns conflicts with the given playlist', () => {
        const display = { ...lobby, playlists: ['a', 'c'] };
        const playlists = [
            playlist('a', '0 9 * * *', 60),
            playlist('b', '0 9 * * *', 60),
            playlist('c', '0 18 * * *', 60),
        ];

        expect(
            findTakeoverConflicts({
                displays: [display],
                zones: [level],
                playlists,
                playlist_id: 'c',
                start,
                days: 1,
            }),
        ).toEqual([]);
    });
});

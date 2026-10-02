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

    it('ignores disabled playlists, which the player does not play', () => {
        const conflicts = findTakeoverConflicts({
            displays: [lobby],
            zones: [level],
            playlists: [
                playlist('a', '0 9 * * *', 60),
                new SignagePlaylist({
                    id: 'b',
                    name: 'b',
                    enabled: false,
                    schedules: [
                        {
                            play_cron: '0 9 * * *',
                            play_period: 60,
                            play_takeover: true,
                        },
                    ],
                }),
            ],
            start,
            days: 1,
        });

        expect(conflicts).toEqual([]);
    });

    it('leaves out overlaps that ended earlier today', () => {
        const conflicts = findTakeoverConflicts({
            displays: [lobby],
            zones: [level],
            playlists: [
                playlist('a', '0 9 * * *', 60),
                playlist('b', '30 9 * * *', 60),
            ],
            start: new Date(2026, 8, 28, 15),
            days: 2,
        });

        expect(conflicts.map(({ starts_at }) => starts_at)).toEqual([
            new Date(2026, 8, 29, 9, 30),
        ]);
    });

    it('finds an overlap from yesterday that still plays', () => {
        const conflicts = findTakeoverConflicts({
            displays: [lobby],
            zones: [level],
            playlists: [
                playlist('a', '0 23 * * *', 120),
                playlist('b', '0 23 * * *', 120),
            ],
            start: new Date(2026, 8, 28, 0, 30),
            days: 1,
        });

        expect(conflicts[0].starts_at).toEqual(new Date(2026, 8, 27, 23));
        expect(conflicts[0].ends_at).toEqual(new Date(2026, 8, 28, 1));
    });

    // The player plays a single pass alone, then goes on with timed runs
    it('compares single passes only with other single passes', () => {
        const conflicts = (b_period: number) =>
            findTakeoverConflicts({
                displays: [lobby],
                zones: [level],
                playlists: [
                    playlist('a', '0 9 * * *', 0),
                    playlist('b', '0 9 * * *', b_period),
                ],
                start,
                days: 1,
            });

        expect(conflicts(60)).toEqual([]);
        expect(conflicts(0)).toHaveLength(1);
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

        // The run from 23:00 the day before still plays at 00:30
        expect(conflicts.map(({ starts_at }) => starts_at)).toEqual([
            new Date(2026, 8, 28, 0, 30),
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

    // Before, each display built every block of every playlist: 200 displays
    // x 14 days x 288 blocks of a "*/5" playlist is about 806k blocks.
    it('builds blocks once per takeover playlist, not per display', () => {
        const displays = Array.from({ length: 200 }, (_, i) => ({
            id: `d${i}`,
            name: `Display ${i}`,
            playlists: ['a'],
            zones: ['z1'],
        }));
        const started = performance.now();
        const conflicts = findTakeoverConflicts({
            displays,
            zones: [{ ...level, playlists: ['b', 'often'] }],
            playlists: [
                playlist('a', '0 9 * * *', 60),
                playlist('b', '30 9 * * *', 60),
                playlist('often', '*/5 * * * *', 5, false),
            ],
            start,
        });

        expect(conflicts).toHaveLength(200);
        expect(performance.now() - started).toBeLessThan(200);
    });

    it('reports the whole overlap when runs follow each other', () => {
        const [conflict] = findTakeoverConflicts({
            displays: [lobby],
            zones: [level],
            playlists: [
                playlist('a', '0 * * * *', 60),
                playlist('b', '30 9 * * *', 120),
            ],
            start,
            days: 1,
        });

        expect(conflict.starts_at).toEqual(new Date(2026, 8, 28, 9, 30));
        expect(conflict.ends_at).toEqual(new Date(2026, 8, 28, 11, 30));
    });

    describe('across a daylight saving change', () => {
        const original_timezone = process.env.TZ;
        // Pin the zone so the result does not depend on the machine
        beforeAll(() => (process.env.TZ = 'Australia/Sydney'));
        afterAll(() => {
            if (original_timezone === undefined) delete process.env.TZ;
            else process.env.TZ = original_timezone;
        });

        it('reports the clock time of the conflict', () => {
            // Sydney clocks go forward one hour at 02:00 on 4 October 2026
            const conflicts = findTakeoverConflicts({
                displays: [lobby],
                zones: [level],
                playlists: [
                    playlist('a', '0 9 4 10 *', 60),
                    playlist('b', '0 9 4 10 *', 60),
                ],
                start: new Date(2026, 9, 3),
                days: 2,
            });

            expect(conflicts).toHaveLength(1);
            expect(conflicts[0].starts_at).toEqual(new Date(2026, 9, 4, 9));
            expect(conflicts[0].ends_at).toEqual(new Date(2026, 9, 4, 10));
        });
    });
});

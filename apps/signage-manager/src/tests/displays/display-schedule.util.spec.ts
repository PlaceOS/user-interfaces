import { SignagePlaylist, SignagePlaylistSchedule } from '@placeos/ts-client';
import { buildDisplayScheduleDays } from '../../app/displays/display-schedule.util';
import { buildScheduleBlocks } from '../../app/schedules/signage-schedule.util';
import { HydratedSignageTemplateMapping } from '../../app/signage-template-mapping';

const days = [new Date(2026, 8, 7)];
const schedule = (hour: number, duration: number): SignagePlaylistSchedule => ({
    play_cron: `0 ${hour} * * *`,
    play_period: duration,
    play_takeover: false,
});
const mapping = (id: string, timing: SignagePlaylistSchedule | null = null) =>
    new HydratedSignageTemplateMapping({
        id,
        template_id: `template-${id}`,
        schedule: timing,
        template_details: { name: id },
    });
const playlist = (hour: number, duration: number) =>
    buildScheduleBlocks(
        [
            {
                playlist: new SignagePlaylist({
                    id: 'playlist',
                    name: 'Playlist',
                    schedules: [schedule(hour, duration)],
                }),
            },
        ],
        days,
    );

describe('buildDisplayScheduleDays', () => {
    it('shows default templates on days without playlists', () => {
        const [day] = buildDisplayScheduleDays([], [mapping('default')], days);
        expect(day.all_day).toHaveLength(1);
        expect(day.items[0].mapping?.template_id).toBe('template-default');
        expect(day.items[0].children).toEqual([]);
    });

    it('nests playlists under default and overlapping scheduled templates', () => {
        const [day] = buildDisplayScheduleDays(
            playlist(9, 120),
            [mapping('default'), mapping('morning', schedule(10, 120))],
            days,
        );
        expect(day.items).toHaveLength(2);
        expect(day.items[0].children[0].label).toBe('09:00 – 11:00');
        expect(day.items[1].children[0].label).toBe('10:00 – 11:00');
    });

    it('keeps playlist time before and after a template as separate items', () => {
        const [day] = buildDisplayScheduleDays(
            playlist(9, 240),
            [mapping('middle', schedule(10, 60))],
            days,
        );
        expect(day.items.map((block) => block.label)).toEqual([
            '09:00 – 10:00',
            '10:00 – 11:00',
            '11:00 – 13:00',
        ]);
        expect(day.items[1].children[0].label).toBe('10:00 – 11:00');
    });

    it('does not treat touching schedule boundaries as overlaps', () => {
        const [day] = buildDisplayScheduleDays(
            playlist(9, 60),
            [mapping('later', schedule(10, 60))],
            days,
        );
        expect(day.items).toHaveLength(2);
        expect(day.items.every((block) => block.children.length === 0)).toBe(
            true,
        );
    });

    it('keeps distinct mappings for the same template', () => {
        const [day] = buildDisplayScheduleDays(
            playlist(9, 240),
            [
                mapping('same', schedule(9, 60)),
                mapping('same', schedule(11, 60)),
            ],
            days,
        );
        expect(day.items.filter((block) => block.mapping)).toHaveLength(2);
        expect(
            day.items
                .filter((block) => !block.mapping)
                .map((block) => block.label),
        ).toEqual(['10:00 – 11:00', '12:00 – 13:00']);
    });

    it('omits expired template schedules', () => {
        const [day] = buildDisplayScheduleDays(
            playlist(9, 60),
            [
                mapping('expired', {
                    ...schedule(9, 60),
                    valid_until: new Date(2026, 8, 6).getTime() / 1000,
                }),
            ],
            days,
        );
        expect(day.items).toHaveLength(1);
        expect(day.items[0].mapping).toBeUndefined();
    });
});

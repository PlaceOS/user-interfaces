import { getUnixTime } from 'date-fns';
import {
    playlistItemScheduleMap,
    playlistMediaIds,
    playlistMediaItems,
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

    it('lists the next five play blocks for a recurring schedule', () => {
        const labels = playlistScheduleNextPlayLabels({
            play_cron: '0 9 * * *',
            play_period: 30,
        });
        expect(labels).toHaveLength(5);
        expect(labels[0]).toContain('–');
    });
});

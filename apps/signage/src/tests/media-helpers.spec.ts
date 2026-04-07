import { MediaAnimation } from '@placeos/ts-client';
import { findValidPlaylistIndex } from '../app/media-helpers';
import { MediaPlayerItem } from '../app/types';

const create_item = (
    id: string,
    valid: boolean,
    playlist = 'playlist-a',
): MediaPlayerItem => ({
    id,
    name: id,
    playlist,
    playlist_name: playlist,
    animation: MediaAnimation.Cut,
    type: 'image',
    start_time: 0,
    duration: 15000,
    valid_from: valid ? 0 : Math.floor(Date.now() / 1000) + 3600,
    valid_until: 0,
    play_hours: '00:00-00:00',
    getURL: async () => '',
});

describe('findValidPlaylistIndex', () => {
    it('returns -1 when no other valid item exists', () => {
        const playlist = [
            create_item('valid', true),
            create_item('invalid-a', false),
            create_item('invalid-b', false),
        ];

        expect(findValidPlaylistIndex(playlist, 0, -1)).toBe(-1);
    });

    it('skips invalid items when finding the next valid item', () => {
        const playlist = [
            create_item('current', true, 'playlist-a'),
            create_item('invalid-next', false, 'playlist-b'),
            create_item('valid-next', true, 'playlist-c'),
        ];

        expect(findValidPlaylistIndex(playlist, 0, 1)).toBe(2);
    });
});

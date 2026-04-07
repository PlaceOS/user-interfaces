import { MediaAnimation } from '@placeos/ts-client';
import {
    findValidPlaylistIndex,
    setMockTime,
    time,
    validateMedia,
} from '../app/media-helpers';
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

    it('can include the starting item when it is valid', () => {
        const playlist = [create_item('valid', true)];

        expect(findValidPlaylistIndex(playlist, 0, 1, true)).toBe(0);
    });
});

describe('time helpers', () => {
    afterEach(() => setMockTime(0));

    it('returns a static mocked time when progress is disabled', () => {
        setMockTime(1234);

        expect(time()).toBe(1234);
    });

    it('returns a progressing mocked time when progress is enabled', () => {
        jest.spyOn(Date, 'now').mockReturnValue(2000);
        setMockTime(1000, true);
        jest.spyOn(Date, 'now').mockReturnValue(2600);

        expect(time()).toBe(1600);
    });
});

describe('validateMedia', () => {
    afterEach(() => setMockTime(0));

    it('returns an error for future media', () => {
        const item = create_item('future', false);

        expect(validateMedia(item)).toBe('Media not valid yet.');
    });

    it('returns an error for expired media', () => {
        const item = create_item('expired', true, 'playlist-a');
        item.valid_until = Math.floor(Date.now() / 1000) - 60;

        expect(validateMedia(item)).toBe('Media expired.');
    });

    it('returns an error when before the allowed hours', () => {
        const current_time = new Date(2026, 3, 7, 9, 0, 0, 0).valueOf();
        jest.spyOn(Date, 'now').mockReturnValue(current_time);
        setMockTime(current_time);
        const item = create_item('before-hours', true);
        item.play_hours = '10:00-18:00';

        expect(validateMedia(item)).toBe('Before hours');
    });

    it('returns an error when after the allowed hours', () => {
        const current_time = new Date(2026, 3, 7, 19, 0, 0, 0).valueOf();
        jest.spyOn(Date, 'now').mockReturnValue(current_time);
        setMockTime(current_time);
        const item = create_item('after-hours', true);
        item.play_hours = '08:00-18:00';

        expect(validateMedia(item)).toBe('After hours');
    });

    it('returns an empty string for valid media', () => {
        expect(validateMedia(create_item('valid', true))).toBe('');
    });
});

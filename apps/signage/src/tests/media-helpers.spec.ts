import { MediaAnimation } from '@placeos/ts-client';
import {
    findValidPlaylistIndex,
    mockTimeState,
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
    getURL: async () => '',
});

function formatTestTime(date: number) {
    return new Intl.DateTimeFormat(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    }).format(new Date(date));
}

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
        vi.spyOn(Date, 'now').mockReturnValue(2000);
        setMockTime(1000, true);
        vi.spyOn(Date, 'now').mockReturnValue(2600);

        expect(time()).toBe(1600);
    });

    it('returns a progressing mocked time at the selected speed', () => {
        vi.spyOn(Date, 'now').mockReturnValue(2000);
        setMockTime(1000, 4);
        vi.spyOn(Date, 'now').mockReturnValue(2600);

        expect(time()).toBe(3400);
    });

    it('exposes the active mock time state', () => {
        setMockTime(1000, 0.5);

        expect(mockTimeState().active).toBe(true);
        expect(mockTimeState().speed).toBe(0.5);
    });
});

describe('validateMedia', () => {
    afterEach(() => setMockTime(0));

    it('returns an error for future media', () => {
        const now = Date.UTC(2026, 0, 1, 10, 0, 0);
        const item = create_item('future', true);
        item.valid_from = Math.floor((now + 60 * 60 * 1000) / 1000);
        setMockTime(now);

        expect(validateMedia(item)).toBe(
            `Media not valid yet. Starts at ${formatTestTime(now + 60 * 60 * 1000)}. Current player time is ${formatTestTime(now)}.`,
        );
    });

    it('returns an error for expired media', () => {
        const now = Date.UTC(2026, 0, 1, 10, 0, 0);
        const item = create_item('expired', true, 'playlist-a');
        item.valid_until = Math.floor((now - 60 * 1000) / 1000);
        setMockTime(now);

        expect(validateMedia(item)).toBe(
            `Media expired. Ended at ${formatTestTime(now - 60 * 1000)}. Current player time is ${formatTestTime(now)}.`,
        );
    });

    it('returns an empty string for valid media', () => {
        expect(validateMedia(create_item('valid', true))).toBe('');
    });

    it('validates future media against the simulated time', () => {
        const now = Date.now();
        const item = create_item('future', true);
        item.valid_from = Math.floor((now + 60 * 60 * 1000) / 1000);

        setMockTime(now + 2 * 60 * 60 * 1000);

        expect(validateMedia(item)).toBe('');
    });

    it('validates expired media against the simulated time', () => {
        const now = Date.UTC(2026, 0, 1, 10, 0, 0);
        const item = create_item('expired', true);
        item.valid_until = Math.floor((now + 60 * 60 * 1000) / 1000);

        setMockTime(now + 2 * 60 * 60 * 1000);

        expect(validateMedia(item)).toBe(
            `Media expired. Ended at ${formatTestTime(now + 60 * 60 * 1000)}. Current player time is ${formatTestTime(now + 2 * 60 * 60 * 1000)}.`,
        );
    });

    it('identifies playlist validity as the invalid source', () => {
        const now = Date.UTC(2026, 0, 1, 10, 0, 0);
        const item = create_item('future', true);
        item.valid_from = Math.floor((now + 60 * 60 * 1000) / 1000);
        item.validity = { valid_from_source: 'playlist' };
        setMockTime(now);

        expect(validateMedia(item)).toBe(
            `Playlist not valid yet. Starts at ${formatTestTime(now + 60 * 60 * 1000)}. Current player time is ${formatTestTime(now)}.`,
        );
    });

    it('identifies media item validity as the invalid source', () => {
        const now = Date.UTC(2026, 0, 1, 10, 0, 0);
        const item = create_item('expired', true);
        item.valid_until = Math.floor((now - 60 * 1000) / 1000);
        item.validity = { valid_until_source: 'media' };
        setMockTime(now);

        expect(validateMedia(item)).toBe(
            `Media item expired. Ended at ${formatTestTime(now - 60 * 1000)}. Current player time is ${formatTestTime(now)}.`,
        );
    });

    it('returns detailed errors for missing media data', () => {
        expect(validateMedia(null as any)).toBe(
            'Invalid media: missing media data.',
        );
        expect(validateMedia({} as any)).toBe(
            'Invalid media: missing media ID.',
        );
    });
});

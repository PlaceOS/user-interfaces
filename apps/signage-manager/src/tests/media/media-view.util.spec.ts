import {
    applyMediaView,
    DEFAULT_MEDIA_VIEW,
    isMediaViewActive,
} from '../../app/media/media-view.util';

const DAY_S = 24 * 60 * 60;
const NOW = 1_800_000_000_000;
const NOW_S = NOW / 1000;

function media(id: string, extra: Record<string, unknown> = {}) {
    return {
        id,
        name: id,
        media_type: 'image',
        created_at: 0,
        ...extra,
    } as any;
}

describe('media view util', () => {
    const items = [
        media('b', { created_at: 2, valid_until: NOW_S + 3 * DAY_S }),
        media('c', { created_at: 3, media_type: 'plugin' }),
        media('a', {
            created_at: 1,
            media_type: 'video',
            valid_until: NOW_S - DAY_S,
        }),
        media('d', {
            created_at: 4,
            media_type: 'audio',
            valid_until: NOW_S + 30 * DAY_S,
        }),
    ];
    const ids = (list: { id: string }[]) => list.map(({ id }) => id);
    const view = (change: object) =>
        applyMediaView(items, { ...DEFAULT_MEDIA_VIEW, ...change }, NOW);

    it('sorts by each option', () => {
        expect(ids(view({ sort: 'newest' }))).toEqual(['d', 'c', 'b', 'a']);
        expect(ids(view({ sort: 'oldest' }))).toEqual(['a', 'b', 'c', 'd']);
        expect(ids(view({ sort: 'name' }))).toEqual(['a', 'b', 'c', 'd']);
        // Soonest expiry first, media without an expiry last
        expect(ids(view({ sort: 'expiry' }))).toEqual(['a', 'b', 'd', 'c']);
    });

    it('filters by the type shown on the media card', () => {
        // Audio shows as video on the card, so it matches the video filter
        expect(ids(view({ type: 'video' }))).toEqual(['d', 'a']);
        expect(ids(view({ type: 'plugin' }))).toEqual(['c']);
    });

    it('filters by expiry', () => {
        expect(ids(view({ expiry: 'expiring' }))).toEqual(['b']);
        expect(ids(view({ expiry: 'expired' }))).toEqual(['a']);
    });

    it('treats only the default view as inactive', () => {
        expect(isMediaViewActive(DEFAULT_MEDIA_VIEW)).toBe(false);
        expect(isMediaViewActive({ ...DEFAULT_MEDIA_VIEW, sort: 'name' })).toBe(
            true,
        );
        expect(
            isMediaViewActive({ ...DEFAULT_MEDIA_VIEW, type: 'image' }),
        ).toBe(true);
    });
});

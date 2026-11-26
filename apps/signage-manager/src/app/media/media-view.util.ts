import { type SignageMedia } from '@placeos/ts-client';

export const MEDIA_SORTS = ['newest', 'oldest', 'name', 'expiry'] as const;
export const MEDIA_TYPE_FILTERS = [
    'image',
    'video',
    'webpage',
    'plugin',
] as const;
export const MEDIA_EXPIRY_FILTERS = ['expiring', 'expired'] as const;

export type MediaSort = (typeof MEDIA_SORTS)[number];
export type MediaTypeFilter = (typeof MEDIA_TYPE_FILTERS)[number];
export type MediaExpiryFilter = (typeof MEDIA_EXPIRY_FILTERS)[number];

/** Sort and filters applied to the media library */
export interface MediaViewOptions {
    sort: MediaSort;
    type: MediaTypeFilter | null;
    expiry: MediaExpiryFilter | null;
}

export const DEFAULT_MEDIA_VIEW: MediaViewOptions = {
    sort: 'newest',
    type: null,
    expiry: null,
};

/** Media expiring within this many days counts as expiring soon */
const MEDIA_EXPIRING_DAYS = 7;

type ViewableMedia = Pick<
    SignageMedia,
    'name' | 'media_type' | 'created_at' | 'valid_until'
>;

/**
 * Type group of a media item. Matches the type badge on media cards, which
 * shows every other type as video.
 */
function mediaTypeGroup(item: Pick<SignageMedia, 'media_type'>) {
    switch (item.media_type) {
        case 'image':
        case 'webpage':
        case 'plugin':
            return item.media_type;
        default:
            return 'video';
    }
}

/** Whether the options differ from the default newest-first, unfiltered view */
export function isMediaViewActive(options: MediaViewOptions) {
    return (
        options.sort !== DEFAULT_MEDIA_VIEW.sort ||
        !!options.type ||
        !!options.expiry
    );
}

function matchesExpiry(
    item: ViewableMedia,
    expiry: MediaExpiryFilter,
    now: number,
) {
    if (!item.valid_until) return false;
    const valid_until = item.valid_until * 1000;
    if (expiry === 'expired') return valid_until < now;
    return (
        valid_until >= now &&
        valid_until <= now + MEDIA_EXPIRING_DAYS * 24 * 60 * 60 * 1000
    );
}

function compareMedia(sort: MediaSort) {
    const newest = (a: ViewableMedia, b: ViewableMedia) =>
        b.created_at - a.created_at;
    switch (sort) {
        case 'oldest':
            return (a: ViewableMedia, b: ViewableMedia) => -newest(a, b);
        case 'name':
            return (a: ViewableMedia, b: ViewableMedia) =>
                a.name.localeCompare(b.name) || newest(a, b);
        case 'expiry':
            // Soonest expiry first, media without an expiry last
            return (a: ViewableMedia, b: ViewableMedia) =>
                (a.valid_until || Infinity) - (b.valid_until || Infinity) ||
                newest(a, b);
        default:
            return newest;
    }
}

/** Smallest width of a masonry column in pixels */
const MASONRY_MIN_COLUMN_WIDTH = 200;
/** Space between masonry columns in pixels. Matches the `gap-4` class. */
const MASONRY_GAP = 16;
const MASONRY_MAX_COLUMNS = 8;

/**
 * Number of masonry columns that fit in a width.
 * @param width Width of the column area in pixels
 */
export function masonryColumnCount(width: number) {
    const count = Math.floor(
        (width + MASONRY_GAP) / (MASONRY_MIN_COLUMN_WIDTH + MASONRY_GAP),
    );
    return Math.max(1, Math.min(MASONRY_MAX_COLUMNS, count));
}

/** Bounds of a masonry thumbnail width over height, so a long banner or
 * strip image does not make a very short or very tall card */
const MASONRY_MIN_ASPECT_RATIO = 1 / 2;
const MASONRY_MAX_ASPECT_RATIO = 2;

/** Width over height of an image, kept in the masonry bounds */
export function clampMasonryAspectRatio(ratio: number) {
    return Math.max(
        MASONRY_MIN_ASPECT_RATIO,
        Math.min(MASONRY_MAX_ASPECT_RATIO, ratio),
    );
}

/** Width over height of a masonry thumbnail, from the media orientation */
export function masonryAspectRatio(item: Pick<SignageMedia, 'orientation'>) {
    switch (item.orientation) {
        case 'portrait':
            return 9 / 16;
        case 'square':
            return 1;
        default:
            return 16 / 9;
    }
}

/**
 * Split media into masonry columns. Each item goes into the shortest column.
 * The height of an item comes from its orientation, so it is known before the
 * thumbnail loads. A placed item depends only on the items before it, thus a
 * new page of media adds to the column ends and does not move loaded items.
 * @param items Media in display order
 * @param width Width of the column area in pixels
 */
export function masonryColumns<T extends Pick<SignageMedia, 'orientation'>>(
    items: readonly T[],
    width: number,
): T[][] {
    const count = masonryColumnCount(width);
    const column_width = Math.max(
        1,
        (width - MASONRY_GAP * (count - 1)) / count,
    );
    // Heights are in column widths, so the gap is too
    const gap = MASONRY_GAP / column_width;
    const columns: T[][] = Array.from({ length: count }, () => []);
    const heights = columns.map(() => 0);
    for (const item of items) {
        const shortest = heights.indexOf(Math.min(...heights));
        columns[shortest].push(item);
        heights[shortest] += 1 / masonryAspectRatio(item) + gap;
    }
    return columns;
}

/**
 * Filter and sort media for the library view.
 * @param items Loaded media items
 * @param options Sort and filters to apply
 * @param now Current time in milliseconds
 */
export function applyMediaView<T extends ViewableMedia>(
    items: T[],
    options: MediaViewOptions,
    now = Date.now(),
) {
    return items
        .filter(
            (item) =>
                (!options.type || mediaTypeGroup(item) === options.type) &&
                (!options.expiry || matchesExpiry(item, options.expiry, now)),
        )
        .sort(compareMedia(options.sort));
}

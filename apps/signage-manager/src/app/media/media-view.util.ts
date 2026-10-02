import type { SignageMedia } from '@placeos/ts-client';

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
export const MEDIA_EXPIRING_DAYS = 7;

type ViewableMedia = Pick<
    SignageMedia,
    'name' | 'media_type' | 'created_at' | 'valid_until'
>;

/**
 * Type group of a media item. Matches the type badge on media cards, which
 * shows every other type as video.
 */
export function mediaTypeGroup(item: Pick<SignageMedia, 'media_type'>) {
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

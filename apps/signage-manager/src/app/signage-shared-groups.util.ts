import {
    removeSignageMedia,
    removeSignagePlaylist,
    removeSignageTemplate,
    SignageMedia,
    showSignageMedia,
    showSignagePlaylist,
    showSignageTemplate,
} from '@placeos/ts-client';

/** Signage item types that can be shared between signage groups */
export type SignageShareableType = 'media' | 'playlists' | 'templates';

/** Signage group holding a copy of a shared signage item */
export type SignageSharedGroup = SignageMedia['shared_with'][number];

function showSignageItem(
    type: SignageShareableType,
    id: string,
    query_params: { group_id?: string },
) {
    switch (type) {
        case 'media':
            return showSignageMedia(id, query_params);
        case 'playlists':
            return showSignagePlaylist(id, query_params);
        case 'templates':
            return showSignageTemplate(id);
    }
}

/**
 * Groups holding the signage item, read from the `shared_with` attribute of the
 * show route. Backends without the attribute return an empty list, which hides
 * the shared with section.
 */
export async function listSignageSharedGroups(
    type: SignageShareableType,
    id: string,
    group_id = '',
): Promise<SignageSharedGroup[]> {
    if (!id) return [];
    try {
        const item = await showSignageItem(
            type,
            id,
            group_id ? { group_id } : {},
        );
        return item.shared_with ?? [];
    } catch {
        return [];
    }
}

/**
 * Unlink a signage item from one of the groups holding it. The backend deletes
 * the item outright when the last group is unlinked, so callers must leave the
 * final group in place.
 */
export function unshareSignageItem(
    type: SignageShareableType,
    id: string,
    group_id: string,
) {
    switch (type) {
        case 'media':
            return removeSignageMedia(id, { group_id });
        case 'playlists':
            return removeSignagePlaylist(id, { group_id });
        case 'templates':
            return removeSignageTemplate(id, { group_id });
    }
}

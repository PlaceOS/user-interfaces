import { signal } from '@angular/core';
import {
    playlist,
    playlist_media,
    type PlaylistItem,
    signage_templates,
} from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

const _shared_groups_change = signal(0);

/** Changes after a successful share so visible shared-group lists reload. */
export const signage_shared_groups_change = _shared_groups_change.asReadonly();

export function markSignageSharedGroupsChanged() {
    _shared_groups_change.update((change) => change + 1);
}

/** Signage item types that can be shared between signage groups */
export type SignageShareableType = 'media' | 'playlists' | 'templates';

/** Signage group holding a copy of a shared signage item */
export type SignageSharedGroup = PlaylistItem['shared_with'][number];

function showSignageItem(type: SignageShareableType, id: string) {
    switch (type) {
        case 'media':
            return playlist_media.show({ id }).then(orThrow);
        case 'playlists':
            return playlist.show({ id }).then(orThrow);
        case 'templates':
            return signage_templates.show({ id }).then(orThrow);
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
): Promise<SignageSharedGroup[]> {
    if (!id) return [];
    try {
        const item = await showSignageItem(type, id);
        return [...(item.shared_with ?? [])];
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
            return playlist_media.destroy({ id, group_id }).then(orThrow);
        case 'playlists':
            return playlist.destroy({ id, group_id }).then(orThrow);
        case 'templates':
            return signage_templates.destroy({ id, group_id }).then(orThrow);
    }
}

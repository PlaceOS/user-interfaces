import { playlist_media } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

export interface SignageMediaTagCounts {
    /** Distinct tags in use, sorted by name */
    tags: string[];
    /** Number of media items per tag. Empty when the backend cannot count. */
    counts: Record<string, number>;
}

function sortTagNames(tags: readonly string[]) {
    return [...tags].sort((a, b) => a.localeCompare(b));
}

/**
 * Tags in use by signage media and how many media items carry each one.
 * Backends without the `tag_counts` route fall back to the tags-only endpoint,
 * leaving callers to count the media they have loaded.
 */
export async function listSignageMediaTagCounts(
    query_params: { group_id?: string; include_child_data?: boolean } = {},
): Promise<SignageMediaTagCounts> {
    // Leave out an empty group, which the API would read as a group ID
    const params = query_params.group_id
        ? {
              group_id: query_params.group_id,
              ...(query_params.include_child_data
                  ? { include_child_data: true }
                  : {}),
          }
        : {};
    try {
        const response = await playlist_media.tagCounts(params).then(orThrow);
        const counts: Record<string, number> = {};
        for (const [tag, count] of Object.entries(response || {})) {
            counts[tag] = Number(count) || 0;
        }
        return { tags: sortTagNames(Object.keys(counts)), counts };
    } catch {
        const tags = await playlist_media.tags(params).then(orThrow);
        return { tags: sortTagNames(tags), counts: {} };
    }
}

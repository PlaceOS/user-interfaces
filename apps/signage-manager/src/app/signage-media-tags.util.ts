import { apiEndpoint, get, listSignageMediaTags } from '@placeos/ts-client';

export interface SignageMediaTagCounts {
    /** Distinct tags in use, sorted by name */
    tags: string[];
    /** Number of media items per tag. Empty when the backend cannot count. */
    counts: Record<string, number>;
}

function sortTagNames(tags: string[]) {
    return [...tags].sort((a, b) => a.localeCompare(b));
}

/**
 * Tags in use by signage media and how many media items carry each one.
 * Backends without the `tag_counts` route fall back to the tags-only endpoint,
 * leaving callers to count the media they have loaded.
 */
export async function listSignageMediaTagCounts(
    query_params: Record<string, string | undefined> = {},
): Promise<SignageMediaTagCounts> {
    const params = Object.entries(query_params).filter(
        (entry): entry is [string, string] => !!entry[1],
    );
    const query = new URLSearchParams(params).toString();
    try {
        const response = await get(
            `${apiEndpoint()}/signage/media/tag_counts${query ? `?${query}` : ''}`,
        );
        const counts: Record<string, number> = {};
        for (const [tag, count] of Object.entries(response || {})) {
            counts[tag] = Number(count) || 0;
        }
        return { tags: sortTagNames(Object.keys(counts)), counts };
    } catch {
        const tags = await listSignageMediaTags(query_params);
        return { tags: sortTagNames(tags), counts: {} };
    }
}

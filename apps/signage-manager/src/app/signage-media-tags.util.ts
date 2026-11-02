import {
    listSignageMediaTags,
    listSignageMediaTagCounts as queryTagCounts,
} from '@placeos/ts-client';

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
    // The API client sends empty strings, so leave out empty parameters
    const params = Object.fromEntries(
        Object.entries(query_params).filter(([, value]) => !!value),
    );
    try {
        const response = await queryTagCounts(params);
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

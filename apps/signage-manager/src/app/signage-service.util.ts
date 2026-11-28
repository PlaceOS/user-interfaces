import { decodeEntityNames } from './shared/decode-entity-names.util';
import { type QueryResponse } from './shared/paged-list';
import { byDisplayName } from './shared/paged-search';

/** How many items the signage services request per network page */
export const PAGE_SIZE = 200;

/**
 * Query params for a search term. Empty when the term is blank. The server
 * ignores the old `fields` param, so only `q` is sent.
 */
export function searchParam(search: string): { q?: string } {
    const term = search.trim();
    return term ? { q: term } : {};
}

/**
 * Fetch every page of a query.
 * @param max_pages Most pages to fetch, so a bad response cannot loop forever
 */
export async function queryAll<T>(query: QueryResponse<T>, max_pages = 50) {
    const items: T[] = [];
    let page = await query;
    for (let count = 1; ; count++) {
        const data = page.data || [];
        items.push(...data);
        const next = data.length && count < max_pages ? page.next?.() : null;
        if (!next) break;
        page = await next;
    }
    return items.map(decodeEntityNames);
}

/** Apply local edits to the items in a list, sorted by name */
export function mergeItems<
    T extends { id: string; name: string; display_name: string },
>(list: T[], overrides: Record<string, T>) {
    return (list || [])
        .map((item) => overrides[item.id] || item)
        .sort(byDisplayName);
}

/** Resolve with the result of a dialog once it closes */
export function dialogClosed<T = unknown>(ref: {
    afterClosed: () => {
        subscribe: (handler: (value: T) => void) => { unsubscribe: () => void };
    };
}) {
    return new Promise<T | undefined>((resolve) => {
        const subscription = ref.afterClosed().subscribe((value) => {
            subscription.unsubscribe();
            resolve(value);
        });
    });
}

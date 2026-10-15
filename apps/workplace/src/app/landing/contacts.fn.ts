import { StaffUser } from '@placeos/common';
import { PlaceMetadata, showMetadata, showUser } from '@placeos/ts-client';

/** Maximum number of requests for each colleague that run at one time */
export const COLLEAGUE_REQUEST_LIMIT = 6;

/**
 * Map `items` with `fn`, with at most `limit` calls in progress at one time.
 * The results have the order of `items`. `fn` must not reject.
 */
export async function mapWithLimit<T, R>(
    items: readonly T[],
    limit: number,
    fn: (item: T) => Promise<R>,
): Promise<R[]> {
    const results = new Array<R>(items.length);
    let next = 0;
    const worker = async () => {
        while (next < items.length) {
            const index = next++;
            results[index] = await fn(items[index]);
        }
    };
    const count = Math.max(1, Math.min(limit, items.length));
    await Promise.all(Array.from({ length: count }, worker));
    return results;
}

let _contacts_request: { user_id: string; promise: Promise<StaffUser[]> } =
    null;

/**
 * Load the saved contacts of a user with their full user details. Callers
 * share one in-flight load, and a call after it settles loads fresh data.
 * Set `refresh` after a contact change, so a load that started before the
 * change is not used. Rejects when the contacts metadata does not load.
 */
export function loadContacts(
    user_id: string,
    refresh = false,
): Promise<StaffUser[]> {
    if (
        !refresh &&
        _contacts_request &&
        _contacts_request.user_id === user_id
    ) {
        return _contacts_request.promise;
    }
    const promise = (async () => {
        const metadata: PlaceMetadata = await showMetadata(user_id, 'contacts');
        const list: Partial<StaffUser>[] =
            metadata?.details instanceof Array ? metadata.details : [];
        const users = await mapWithLimit(
            list,
            COLLEAGUE_REQUEST_LIMIT,
            (contact) =>
                Promise.resolve(showUser(contact.email)).catch(() => contact),
        );
        return users.map((user) => new StaffUser(user));
    })().finally(() => {
        if (_contacts_request?.promise === promise) _contacts_request = null;
    });
    _contacts_request = { user_id, promise };
    return promise;
}

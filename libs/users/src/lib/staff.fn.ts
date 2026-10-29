import { setting, StaffUser, toQueryString } from '@placeos/common';
import { get, parseLinkHeader, responseHeaders } from '@placeos/ts-client';

const STAFF_ENDPOINT = '/api/staff/v1/people';

export interface StaffSearchOptions {
    /** Override the application setting for this search. */
    exclude_guests?: boolean;
    /** Stop following pagination when the caller cancels a search. */
    signal?: AbortSignal;
}

/**
 * Search staff members
 * @param q Search string for filtering staff
 */
export async function searchStaff(
    q: string,
    options: StaffSearchOptions = {},
): Promise<StaffUser[]> {
    const { signal } = options;
    const exclude_guests =
        options.exclude_guests ??
        setting('app.staff_search_exclude_guests') === true;
    const fields = [
        'id',
        'name',
        'email',
        'username',
        'organisation',
        'department',
    ];
    const query = toQueryString({
        q,
        fields: [...fields, ...(exclude_guests ? ['unmapped'] : [])].join(','),
        ...(exclude_guests ? { additional_fields: 'userType' } : {}),
    });
    let url = `${STAFF_ENDPOINT}${q || exclude_guests ? '?' + query : ''}`;
    const users: StaffUser[] = [];
    const visited = new Set<string>();
    // Graph's default page contains 100 users. A page may consist entirely of
    // guests, so keep following the Staff API Link until we have member matches.
    const limit = 100;
    while (url) {
        signal?.throwIfAborted();
        const absolute_url = new URL(url, document.baseURI);
        if (
            absolute_url.origin !== location.origin ||
            absolute_url.pathname.replace(/\/$/, '') !== STAFF_ENDPOINT ||
            visited.has(absolute_url.href)
        ) {
            throw new Error('Invalid staff directory pagination link');
        }
        visited.add(absolute_url.href);
        const list = (await get(url)) as unknown as (Partial<StaffUser> & {
            unmapped?: { userType?: string };
        })[];
        signal?.throwIfAborted();
        for (const item of list) {
            // userType is returned in unmapped by the Office365 adapter.
            // Older Staff API versions may only expose the external UPN marker.
            // Google users have neither and remain eligible.
            const user_type = item.unmapped?.userType;
            const guest =
                typeof user_type === 'string'
                    ? user_type.toLowerCase() === 'guest'
                    : (item.username || '').toLowerCase().includes('#ext#');
            if (exclude_guests && guest) continue;
            users.push(new StaffUser(item));
            if (exclude_guests && users.length >= limit) return users;
        }
        if (!exclude_guests) return users;
        const link = responseHeaders(absolute_url.href).link;
        url = link ? parseLinkHeader(link).next || '' : '';
    }
    return users;
}

/** Find staff whose primary email starts with the given email prefix. */
export async function searchStaffByEmailPrefix(
    email_prefix: string,
): Promise<StaffUser[]> {
    const escaped_prefix = email_prefix.replace(/'/g, "''");
    const query = toQueryString({
        filter: `startsWith(mail,'${escaped_prefix}')`,
    });
    const list = (await get(
        `${STAFF_ENDPOINT}?${query}`,
    )) as unknown as Partial<StaffUser>[];
    return list.map((item) => new StaffUser(item));
}

/**
 * Get user details
 * @param id User ID or email
 */
export async function showStaff(id: string): Promise<StaffUser> {
    return new StaffUser(
        await get(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`),
    );
}

/**
 * Get user with their location details
 * @param email User email
 */
export async function locateStaff(email: string): Promise<StaffUser> {
    return new StaffUser(await get(`${STAFF_ENDPOINT}/${email}`));
}

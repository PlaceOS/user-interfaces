import { placeFetch, setting, StaffUser, toQueryString } from '@placeos/common';
import { orThrow } from '@placeos/ts-client/compat';
import { staff } from '@placeos/ts-client/staff';

const STAFF_ENDPOINT = '/api/staff/v1/people';
/** Most directory pages that one search reads */
const STAFF_PAGES_MAX = 20;

/** Directory user data of the staff API, with the fields that 6.x asked for */
type DirectoryUser = Partial<StaffUser> & {
    unmapped?: { userType?: string };
};

/** URL of the `rel="next"` link of a `Link` header, or `''` */
function nextLink(header: string | null): string {
    for (const part of (header || '').split(',')) {
        const match = /<([^>]*)>\s*;\s*rel="?next"?/.exec(part);
        if (match) return match[1];
    }
    return '';
}

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
    for (let page = 0; url && page < STAFF_PAGES_MAX; page++) {
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
        // The `people` operation has no `fields` parameter, and the
        // `unmapped` field comes only when `fields` asks for it.
        const response = await placeFetch(
            `${absolute_url.pathname}${absolute_url.search}`,
            { signal },
        );
        if (!response.ok) {
            throw Object.assign(new Error(response.statusText), {
                status: response.status,
            });
        }
        const list: DirectoryUser[] = await response.json();
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
        url = nextLink(response.headers.get('Link'));
    }
    return users;
}

/** Find staff whose primary email starts with the given email prefix. */
export async function searchStaffByEmailPrefix(
    email_prefix: string,
): Promise<StaffUser[]> {
    const escaped_prefix = email_prefix.replace(/'/g, "''");
    const list = await staff
        .query({ filter: `startsWith(mail,'${escaped_prefix}')` })
        .then(orThrow);
    return list.map((item) => new StaffUser(item));
}

/**
 * Get user details
 * @param id User ID or email
 */
export async function showStaff(id: string): Promise<StaffUser> {
    return new StaffUser(await staff.show({ id }).then(orThrow));
}

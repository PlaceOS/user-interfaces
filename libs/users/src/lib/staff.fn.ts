import { StaffUser, toQueryString } from '@placeos/common';
import { get } from '@placeos/ts-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const STAFF_ENDPOINT = '/api/staff/v1/people';

/**
 * Search staff members
 * @param q Search string for filtering staff
 */
export function searchStaff(q: string): Observable<StaffUser[]> {
    const query = toQueryString({
        q,
        fields: [
            'id',
            'name',
            'email',
            'username',
            'organisation',
            'department',
        ].join(','),
    });
    return get(`${STAFF_ENDPOINT}${q ? '?' + query : ''}`).pipe(
        map((list) =>
            list.map((item: Record<string, any>) => new StaffUser(item)),
        ),
    );
}

/**
 * Get user details
 * @param id User ID or email
 */
export function showStaff(id: string) {
    return get(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`).pipe(
        map((item) => new StaffUser(item)),
    );
}

/**
 * Get user with their location details
 * @param email User email
 */
export function locateStaff(email: string) {
    return get(`${STAFF_ENDPOINT}/${email}`).pipe(
        map((item) => new StaffUser(item)),
    );
}

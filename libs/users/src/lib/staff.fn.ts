import { get } from '@placeos/ts-client';
import { toQueryString } from 'libs/common/src/lib/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StaffUser } from './user.class';

const STAFF_ENDPOINT = '/api/staff/v1/people';

/**
 * Search staff members
 * @param q Search string for filtering staff
 */
export function searchStaff(q: string): Observable<StaffUser[]> {
    const query = toQueryString({ q });
    return get(`${STAFF_ENDPOINT}${q ? '?' + query : ''}`).pipe(
        map((list) =>
            list.map((item: Record<string, any>) => new StaffUser(item))
        )
    );
}

/**
 * Get user details
 * @param id User ID or email
 */
export function showStaff(id: string) {
    return get(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`).pipe(
        map((item) => new StaffUser(item))
    );
}

/**
 * Get user with their location details
 * @param email User email
 */
export function locateStaff(email: string) {
    return get(`${STAFF_ENDPOINT}/${email}`).pipe(
        map((item) => new StaffUser(item))
    );
}

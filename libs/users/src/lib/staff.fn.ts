import { StaffUser, toQueryString } from '@placeos/common';
import { get } from '@placeos/ts-client';

const STAFF_ENDPOINT = '/api/staff/v1/people';

/**
 * Search staff members
 * @param q Search string for filtering staff
 */
export async function searchStaff(q: string): Promise<StaffUser[]> {
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
    const list = await get(`${STAFF_ENDPOINT}${q ? '?' + query : ''}`);
    return list.map((item: Record<string, any>) => new StaffUser(item));
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

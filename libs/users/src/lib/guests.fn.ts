import { get, patch } from '@placeos/ts-client';

import { CateringItem, GuestUser, toQueryString } from '@placeos/common';

const GUEST_ENDPOINT = '/api/staff/v1/guests';

/**
 * Search guests
 * @param q Search string for filtering guests
 */
export async function searchGuests(q: string): Promise<GuestUser[]> {
    const query = toQueryString({ q });
    const list = await get(`${GUEST_ENDPOINT}${q ? '?' + query : ''}`);
    return list.map((item) => new GuestUser(item));
}

/**
 * Get guest details
 * @param id ID of the guest
 */
export async function showGuest(id: string): Promise<GuestUser> {
    return new GuestUser(
        await get(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`),
    );
}

/**
 * Update guest metadata
 * @param id ID of the guest
 * @param data New metadata state
 */
export async function updateGuest(
    id: string,
    data: Partial<GuestUser>,
): Promise<GuestUser> {
    return new GuestUser(
        await patch(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`, data),
    );
}

/**
 * Get the catering item requested for the specified guest
 * @param email Email address of the guest
 * @param booking_id Optional ID of the related visitor booking to get from
 */
export async function getGuestCateringItem(
    email: string,
    booking_id = '',
): Promise<CateringItem | null> {
    const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
    const query = booking_id
        ? `?booking_id=${encodeURIComponent(booking_id)}`
        : '';
    const item = await get(`${path}${query}`);
    return item ? new CateringItem(item) : null;
}

/**
 * Set the catering item requested for the specified guest
 * @param email Email address of the guest
 * @param booking_id Optional ID of the related visitor booking to set on
 */
export async function setGuestCateringItem(
    email: string,
    catering_item: CateringItem,
    booking_id = '',
): Promise<CateringItem | null> {
    const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
    const query = booking_id
        ? `?booking_id=${encodeURIComponent(booking_id)}`
        : '';
    const item = await patch(`${path}${query}`, catering_item);
    return item ? new CateringItem(item) : null;
}

import { del, get, patch } from '@placeos/ts-client';

import {
    CalendarEvent,
    CateringItem,
    GuestUser,
    toQueryString,
} from '@placeos/common';

const GUEST_ENDPOINT = '/api/staff/v1/guests';

export interface GuestsQueryParams {
    /** Comma seperated list of zone ids to check availability */
    zone_ids?: string;
    /** Comma seperated list of system(space) ids to check availability */
    system_ids?: string;
    /** Epoch in seconds for the start of the availability period */
    period_start: number;
    /** Epoch in seconds for the end of the availability period */
    period_end: number;
}

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
 * List guests
 * @param q Parameters to pass to the API request
 */
export async function queryGuests(q: GuestsQueryParams): Promise<GuestUser[]> {
    const query = toQueryString({ ...q });
    const list = await get(`${GUEST_ENDPOINT}${query ? '?' + query : ''}`);
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
 * Remove a guest
 * @param id ID of the guest to remove
 */
export function removeGuest(id: string) {
    return del(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`, {
        response_type: 'void',
    });
}

/**
 * List upcoming meetings for a guest
 * @param id ID of the guest
 */
export async function listGuestMeetings(id: string): Promise<CalendarEvent[]> {
    const list = await get(
        `${GUEST_ENDPOINT}/${encodeURIComponent(id)}/meetings`,
    );
    return list.map((item) => new CalendarEvent(item));
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

/**
 * Clears any set catering for the specified guest
 * @param email Email address of the guest
 * @param booking_id Optional ID of the related visitor booking to clear
 */
export function clearGuestCateringItem(email: string, booking_id = '') {
    const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
    const query = booking_id
        ? `?booking_id=${encodeURIComponent(booking_id)}`
        : '';
    return del(`${path}${query}`);
}

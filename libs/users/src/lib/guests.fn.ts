import { del, get, patch } from '@placeos/ts-client';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
export function searchGuests(q: string): Observable<GuestUser[]> {
    const query = toQueryString({ q });
    return from(get(`${GUEST_ENDPOINT}${q ? '?' + query : ''}`)).pipe(
        map((list) => list.map((item) => new GuestUser(item))),
    );
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
export function showGuest(id: string) {
    return from(get(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`)).pipe(
        map((item) => new GuestUser(item)),
    );
}

/**
 * Update guest metadata
 * @param id ID of the guest
 * @param data New metadata state
 */
export function updateGuest(id: string, data: Partial<GuestUser>) {
    return from(
        patch(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`, data),
    ).pipe(map((item) => new GuestUser(item)));
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
export function getGuestCateringItem(email: string, booking_id = '') {
    const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
    const query = booking_id
        ? `?booking_id=${encodeURIComponent(booking_id)}`
        : '';
    return from(get(`${path}${query}`)).pipe(
        map((item) => (item ? new CateringItem(item) : null)),
    );
}

/**
 * Set the catering item requested for the specified guest
 * @param email Email address of the guest
 * @param booking_id Optional ID of the related visitor booking to set on
 */
export function setGuestCateringItem(
    email: string,
    catering_item: CateringItem,
    booking_id = '',
) {
    const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
    const query = booking_id
        ? `?booking_id=${encodeURIComponent(booking_id)}`
        : '';
    return from(patch(`${path}${query}`, catering_item)).pipe(
        map((item) => (item ? new CateringItem(item) : null)),
    );
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

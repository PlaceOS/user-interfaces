import { del, get, patch } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { CalendarEvent } from '../../../events/src/lib/event.class';
import { toQueryString } from 'libs/common/src/lib/api';
import { GuestUser } from './user.class';
import { Observable } from 'rxjs';

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
    return get(`${GUEST_ENDPOINT}${q ? '?' + query : ''}`).pipe(
        map((list) => list.map((item) => new GuestUser(item)))
    );
}

/**
 * List guests
 * @param q Parameters to pass to the API request
 */
export function queryGuests(q: GuestsQueryParams): Observable<GuestUser[]> {
    const query = toQueryString({ ...q });
    return get(`${GUEST_ENDPOINT}${query ? '?' + query : ''}`).pipe(
        map((list) => list.map((item) => new GuestUser(item)))
    );
}

/**
 * Get guest details
 * @param id ID of the guest
 */
export function showGuest(id: string) {
    return get(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`).pipe(
        map((item) => new GuestUser(item))
    );
}

/**
 * Update guest metadata
 * @param id ID of the guest
 * @param data New metadata state
 */
export function updateGuest(id: string, data: Partial<GuestUser>) {
    return patch(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`, data).pipe(
        map((item) => new GuestUser(item))
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
export function listGuestMeetings(id: string) {
    return get(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}/meetings`).pipe(
        map((list) => list.map((item) => new CalendarEvent(item)))
    );
}

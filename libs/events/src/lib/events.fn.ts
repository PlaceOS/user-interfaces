import { del, get, patch, post, put } from '@placeos/ts-client';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { toQueryString } from 'libs/common/src/lib/api';
import { GuestUser } from 'libs/users/src/lib/user.class';

import { CalendarEvent } from './event.class';
import { addMinutes, getUnixTime } from 'date-fns';

export interface CalendarEventQueryParams {
    /** Comma seperated list of zone ids to check availability */
    zone_ids?: string;
    /** Comma seperated list of system(space) ids to check availability */
    system_ids?: string;
    /** Comma seperated list of calendar ids to check availability */
    calendars?: string;
    /** Epoch in seconds for the start of the availability period */
    period_start: number;
    /** Epoch in seconds for the end of the availability period */
    period_end: number;
    /** Whether to include cancelled events in the returned list */
    include_cancelled?: boolean;
}

export interface CalendarEventShowParams {
    /** ID of the personal calendar to grab the events details from */
    calendar?: string;
    /** ID of the system/space to get the associated calendar ID */
    system_id?: string;
}

const EVENTS_ENDPOINT = `/api/staff/v1/events`;

/**
 * List events
 * @param q Parameters to pass to the API request
 */
export function queryEvents(
    q: CalendarEventQueryParams
): Observable<CalendarEvent[]> {
    const query = toQueryString(q);
    return get(`${EVENTS_ENDPOINT}${query ? '?' + query : ''}`).pipe(
        map((list) => list.map((e) => new CalendarEvent(e))),
        catchError((_) => of([]))
    );
}

/**
 * Get event details
 * @param id ID of the event to grab
 * @param q Parameters to pass to the API request
 */
export function showEvent(id: string, q: CalendarEventShowParams = {}) {
    const query = toQueryString(q);
    return get(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${
            query ? '?' + query : ''
        }`
    ).pipe(map((item) => new CalendarEvent(item)));
}

/**
 * Create new calendar event and add it to the database
 * @param data New calendar event fields
 */
export function createEvent(data: Partial<CalendarEvent>) {
    return post(`${EVENTS_ENDPOINT}`, new CalendarEvent(data).toJSON()).pipe(
        map((item) => new CalendarEvent(item))
    );
}

/**
 * Update an existing calendar event
 * @param id ID of the event to update
 * @param data New values for event fields
 * @param q Parameters to pass to the API request
 * @param method HTTP verb to use with API request
 */
export function updateEvent(
    id: string,
    data: Partial<CalendarEvent>,
    q: CalendarEventShowParams = {},
    method: 'put' | 'patch' = 'patch'
) {
    const query = toQueryString(q);
    return (method === 'patch' ? patch : put)(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${
            query ? '?' + query : ''
        }`,
        method === 'patch' ? data : new CalendarEvent(data).toJSON()
    ).pipe(map((item) => new CalendarEvent(item)));
}

/**
 * Save changes to or create a calendar event
 * @param data State of the calendar event
 * @param q Parameters to pass to the API request
 */
export const saveEvent = (
    data: Partial<CalendarEvent>,
    q?: CalendarEventShowParams
) => {
    delete (data as any)?.status;
    return data.id ? updateEvent(data.id, data, q) : createEvent(data);
};

/**
 * Remove calendar event from the database
 * @param id ID of the event to remove
 * @param q Parameters to pass to the API request
 */
export function removeEvent(id: string, q: CalendarEventShowParams = {}) {
    const query = toQueryString(q);
    return del(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${
            query ? '?' + query : ''
        }`,
        {
            response_type: 'void',
        }
    );
}

/**
 * Set the approval state of the event to approved
 * @param id ID of the event to approve
 * @param system_id Associated system to approve
 */
export function approveEvent(id: string, system_id: string) {
    return post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id
        )}/approve?system_id=${encodeURIComponent(system_id)}`,
        ''
    ).pipe(map((item) => new CalendarEvent(item)));
}

/**
 * Set the approval state of the event to rejected
 * @param id ID of the event to reject
 * @param system_id Associated system to reject
 */
export function rejectEvent(id: string, system_id: string) {
    return post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id
        )}/reject?system_id=${encodeURIComponent(system_id)}`,
        ''
    ).pipe(map((item) => new CalendarEvent(item)));
}

/**
 * List guests for event
 * @param id ID of the event to grab
 * @param q Parameters to pass to the API request
 */
export function queryEventGuests(
    id: string,
    q: CalendarEventShowParams = {}
): Observable<GuestUser[]> {
    const query = toQueryString(q);
    return get(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/guests${
            query ? '?' + query : ''
        }`
    ).pipe(map((list) => list.map((item) => new GuestUser(item))));
}

/**
 * Set the checkin state of an event guest
 * @param id ID of the event to grab
 * @param guest_id ID of the guest to update
 * @param state New checkin state of the guest
 * @param q Parameters to pass to the API request
 */
export function checkinEventGuest(
    id: string,
    guest_id: string,
    state: boolean,
    q: CalendarEventShowParams = {}
) {
    const query = toQueryString({ ...q, state });
    return post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id
        )}/guests/${guest_id}/checkin${query ? '?' + query : ''}`,
        ''
    ).pipe(map((item) => new GuestUser(item)));
}

/**
 * Check whether a selected space is available
 * @param id ID of the space to check
 * @param start Start of the availability period to check
 * @param duration Duration of the availability block in minutes
 * @param ignore ID of a booking to ignore when checking availability
 */
export function isSpaceAvailable(
    id: string,
    start: number,
    duration: number,
    ignore?: string
) {
    return queryEvents({
        system_ids: id,
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    }).pipe(map((_) => _.filter((_) => _.id !== ignore).length === 0));
}

/**
 * Check whether a list of spaces are available
 * @param id_list List of space IDs to check
 * @param start Start of the availability period to check
 * @param duration Duration of the availability block in minutes
 * @param ignore ID of a booking to ignore when checking availability
 */
export function querySpaceAvailability(
    id_list: string[],
    start: number,
    duration: number,
    ignore?: string
) {
    return queryEvents({
        system_ids: id_list.join(),
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    }).pipe(
        map((_) =>
            id_list.map(
                (id) =>
                    _.filter(
                        (b) =>
                            b.resources?.find((s) => s.id === id) &&
                            b.id !== ignore
                    ).length === 0
            )
        )
    );
}

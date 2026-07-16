import {
    BookingClash,
    CalendarEvent,
    GuestUser,
    setting,
    toQueryString,
    VERSION,
} from '@placeos/common';
import { del, get, patch, post, put, query } from '@placeos/ts-client';
import { addMinutes, getUnixTime } from 'date-fns';

import { queryCalendarAvailability, querySpaceFreeBusy } from './calendar.fn';
import { EventExtensionData } from './event.interfaces';

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
    /** ical UID associated with the booking */
    ical_uid?: string;
    limit?: number;
    strict?: 'limit' | 'all' | 'notify';
}

export interface CalendarEventHistoryQueryParams {
    /** Epoch in seconds for the start of the availability period */
    period_start: number;
    /** Epoch in seconds for the end of the availability period */
    period_end: number;
    /** Comma seperated list of zone ids to check availability */
    zone_ids?: string;
    /** Comma seperated list of system(space) ids to check availability */
    system_ids?: string;
    /** Comma seperated list of calendar ids to check availability */
    calendars?: string;
    /** ical UID associated with the booking */
    ical_uid?: string;
}

export interface CalendarEventChange {
    // ID of the change event
    id: string;
    // Unix timestamp in seconds the change was created
    created_at: number;
    // Unix timestamp in seconds the change was updated
    updated_at: number;
    type: string;
    // ID of the event that was changed
    resource_id: string;
    action: string;
    changed_fields: string[];
}

export interface CalendarEventShowParams {
    /** ID of the personal calendar to grab the events details from */
    calendar?: string;
    /** ID of the system/space to get the associated calendar ID */
    system_id?: string;
    /** Whether existing attendees should be notified when attendees change */
    notify_existing_attendees?: boolean;
}

const EVENTS_ENDPOINT = `/api/staff/v1/events`;

const APP_VERSION = VERSION.raw || VERSION.version || VERSION.hash;

function appName() {
    return (
        setting<string>('app.name') ||
        setting<string>('app.short_name') ||
        'PlaceOS'
    );
}

function withAppVersion<T extends { extension_data?: Record<string, any> }>(
    data: T,
): T {
    return {
        ...data,
        extension_data: {
            ...(data.extension_data || {}),
            app_name: appName(),
            app_version: APP_VERSION,
        },
    };
}

/**
 * List events
 * @param q Parameters to pass to the API request
 */
export async function queryEvents(
    q: CalendarEventQueryParams,
): Promise<CalendarEvent[]> {
    const query = toQueryString(q);
    try {
        const list = await get(`${EVENTS_ENDPOINT}${query ? '?' + query : ''}`);
        return list.map((e) => new CalendarEvent(e));
    } catch (_) {
        return [];
    }
}

export async function queryEventHistory(
    q: CalendarEventHistoryQueryParams,
): Promise<CalendarEventChange[]> {
    const query = toQueryString(q);
    try {
        return (await get(
            `${EVENTS_ENDPOINT}/history${query ? '?' + query : ''}`,
        )) as CalendarEventChange[];
    } catch (_) {
        return [];
    }
}

export async function queryAllEvents(
    q: CalendarEventQueryParams,
): Promise<CalendarEvent[]> {
    try {
        let { data, next } = await query<CalendarEvent>({
            query_params: q,
            fn: (item) => new CalendarEvent(item),
            endpoint: EVENTS_ENDPOINT,
            path: '',
        });
        let list = [...data];
        while (next) {
            const resp = await next();
            data = resp.data;
            next = resp.next;
            list = [...list, ...data];
        }
        return list;
    } catch (_) {
        return [];
    }
}

/**
 * Get event details
 * @param id ID of the event to grab
 * @param q Parameters to pass to the API request
 */
export async function showEvent(
    id: string,
    q: CalendarEventShowParams = {},
): Promise<CalendarEvent> {
    const query = toQueryString(q);
    const item = await get(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${
            query ? '?' + query : ''
        }`,
    );
    return new CalendarEvent(item);
}

/**
 * Create new calendar event and add it to the database
 * @param data New calendar event fields
 */
export async function createEvent(
    data: Partial<CalendarEvent>,
): Promise<CalendarEvent> {
    const item = await post(
        `${EVENTS_ENDPOINT}`,
        new CalendarEvent(withAppVersion(data)).toJSON(),
    );
    return new CalendarEvent(item);
}

/**
 * Update an existing calendar event
 * @param id ID of the event to update
 * @param data New values for event fields
 * @param q Parameters to pass to the API request
 * @param method HTTP verb to use with API request
 */
export async function updateEvent(
    id: string,
    data: Partial<CalendarEvent>,
    q: CalendarEventShowParams = {},
    method: 'put' | 'patch' = 'patch',
): Promise<CalendarEvent> {
    const query = toQueryString(q);
    const item = await (method === 'patch' ? patch : put)(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${
            query ? '?' + query : ''
        }`,
        new CalendarEvent(withAppVersion(data)).toJSON(),
    );
    return new CalendarEvent(item);
}

/**
 * Save changes to or create a calendar event
 * @param data State of the calendar event
 * @param q Parameters to pass to the API request
 */
export const saveEvent = async (
    data: Partial<CalendarEvent>,
    q?: CalendarEventShowParams,
): Promise<CalendarEvent> => {
    const id = data.update_master
        ? data.recurring_event_id || data.id
        : data.id;
    delete (data as any)?.status;
    return id ? updateEvent(id, { ...data, id }, q) : createEvent(data);
};

/**
 * Remove calendar event from the database
 * @param id ID of the event to remove
 * @param q Parameters to pass to the API request
 */
export function removeEvent(
    id: string,
    q: CalendarEventShowParams = {},
): Promise<void> {
    const query = toQueryString(q);
    return del(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${
            query ? '?' + query : ''
        }`,
        {
            response_type: 'void',
        },
    );
}

/**
 * Set the approval state of the event to approved
 * @param id ID of the event to approve
 * @param system_id Associated system to approve
 */
export async function approveEvent(
    id: string,
    system_id: string,
): Promise<CalendarEvent> {
    const item = await post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id,
        )}/approve?system_id=${encodeURIComponent(system_id)}`,
        '',
    );
    return new CalendarEvent(item);
}

/**
 * Set the approval state of the event to rejected
 * @param id ID of the event to reject
 * @param system_id Associated system to reject
 */
export async function rejectEvent(
    id: string,
    system_id: string,
): Promise<CalendarEvent> {
    const item = await post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id,
        )}/reject?system_id=${encodeURIComponent(system_id)}`,
        '',
    );
    return new CalendarEvent(item);
}

/**
 * Decline the given event
 * @param id ID of the event to decline
 * @returns
 */
export async function declineEvent(
    id: string,
    query: CalendarEventShowParams = {},
): Promise<CalendarEvent> {
    const q = toQueryString(query);
    const item = await post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/decline${
            q ? '?' + q : ''
        }`,
        '',
    );
    return new CalendarEvent(item);
}

/**
 * List guests for event
 * @param id ID of the event to grab
 * @param q Parameters to pass to the API request
 */
export async function queryEventGuests(
    id: string,
    q: CalendarEventShowParams = {},
): Promise<GuestUser[]> {
    const query = toQueryString(q);
    const list = await get(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/guests${
            query ? '?' + query : ''
        }`,
    );
    return list.map((item) => new GuestUser(item));
}

/**
 * Set the checkin state of an event guest
 * @param id ID of the event to grab
 * @param guest_id ID of the guest to update
 * @param state New checkin state of the guest
 * @param q Parameters to pass to the API request
 */
export async function checkinEventGuest(
    id: string,
    guest_id: string,
    state: boolean,
    q: CalendarEventShowParams = {},
): Promise<GuestUser> {
    const query = toQueryString({ ...q, state });
    const item = await post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id,
        )}/guests/${guest_id}/checkin${query ? '?' + query : ''}`,
        '',
    );
    return new GuestUser(item);
}

/**
 * Add a guest to a booking
 * @param id ID of the booking
 * @param guest Guest to add to the booking
 */
export async function addEventGuest(
    id: string,
    guest: GuestUser,
    q: CalendarEventShowParams = {},
): Promise<GuestUser> {
    const query = toQueryString(q);
    const item = await post(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee${query ? '?' + query : ''}`,
        guest,
    );
    return new GuestUser(item);
}

/**
 * Remove an attendee from a booking
 * @param id ID of the booking
 * @param guest Guest to remove from the booking
 */
export async function removeEventGuest(
    id: string,
    guest: GuestUser,
    q: CalendarEventShowParams = {},
): Promise<GuestUser> {
    const query = toQueryString(q);
    const item = await del(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id,
        )}/attendee/${encodeURIComponent(guest.email)}${query ? '?' + query : ''}`,
    );
    return new GuestUser(item);
}

/**
 * Get the extension data for an event
 * @param id ID of the event
 * @param system_id  ID of the system associated with the event
 * @param query Extra query parameters to pass to the API request
 */
export async function getEventMetadata(
    id: string,
    system_id: string,
    query: { ical_uid?: string } = {},
): Promise<EventExtensionData> {
    const q = toQueryString({ ...query });
    return (await get(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id,
        )}/metadata/${encodeURIComponent(system_id)}${q ? '?' + q : ''}`,
    )) as EventExtensionData;
}

/**
 * Show the extension data for an event
 * @param id ID of the event
 * @param system_id ID of the system associated with the event
 * @param query Extra query parameters to pass to the API request
 */
export async function showEventMetadata(
    id: string,
    system_id: string,
    query: { ical_uid?: string } = {},
): Promise<EventExtensionData> {
    const q = toQueryString({ ...query });
    return (await get(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id,
        )}/metadata/${encodeURIComponent(system_id)}${q ? '?' + q : ''}`,
    )) as EventExtensionData;
}

/**
 * Update the extension data for an event
 * @param id ID of the event
 * @param system_id ID of the system associated with the event
 * @param metadata New metadata value to merge to exisiting
 * @param query Extra query parameters to pass to the API request
 */
export async function updateEventMetadata(
    id: string,
    system_id: string,
    metadata: Partial<EventExtensionData>,
    query: { ical_uid?: string } = {},
): Promise<EventExtensionData> {
    const q = toQueryString({ ...query });
    return (await patch(
        `${EVENTS_ENDPOINT}/${encodeURIComponent(
            id,
        )}/metadata/${encodeURIComponent(system_id)}${q ? '?' + q : ''}`,
        metadata,
    )) as EventExtensionData;
}

/**
 * Check whether a selected space is available
 * @param id ID of the space to check
 * @param start Start of the availability period to check
 * @param duration Duration of the availability block in minutes
 * @param ignore ID of a booking to ignore when checking availability
 */
export async function isSpaceAvailable(
    id: string,
    start: number,
    duration: number,
    ignore?: string,
): Promise<boolean> {
    const events = await queryEvents({
        system_ids: id,
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    });
    return events.filter((_) => _.id !== ignore).length === 0;
}

/**
 * Check whether a list of spaces are available
 * @param id_list List of space IDs to check
 * @param start Start of the availability period to check
 * @param duration Duration of the availability block in minutes
 * @param ignore ID of a booking to ignore when checking availability
 */
export async function querySpaceAvailability(
    id_list: string[],
    start: number,
    duration: number,
    ignore?: string,
    type?: any,
    ignore_period: [number, number] = [0, 0],
): Promise<boolean[]> {
    const end = addMinutes(start, duration).valueOf();
    const [spaces, ignore_check] = await Promise.all([
        queryCalendarAvailability({
            system_ids: id_list.join(),
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
        }).catch(() => []),
        ignore && id_list.includes(ignore)
            ? querySpaceFreeBusy({
                  period_start: getUnixTime(start),
                  period_end: getUnixTime(end),
                  system_ids: ignore,
              })
            : Promise.resolve([]),
    ]);
    const short_list = id_list.map(
        (id) =>
            !!spaces.find((s) => s.id === id || (s as any).resource?.id === id),
    );
    for (const space of ignore_check) {
        if (!id_list.includes(space.id)) continue;
        const availability = space.availability.filter(
            (i) =>
                !(
                    i.date === ignore_period[0] &&
                    i.duration === ignore_period[1]
                ),
        );
        short_list[id_list.indexOf(space.id)] = !availability.find(
            (i) => i.status !== 'free',
        );
    }
    return short_list;
}

export interface EventClashQueryOptions {
    // Requires multple assets in the event to use
    return_available?: boolean;
    // Added the time that the clashes occur with each returned asset
    include_clash_time?: boolean;
}

/**
 * List resources that clash within the given parameters
 * @param q Parameters to pass to the API request
 */
export async function findEventClashes(
    event: CalendarEvent,
    q: EventClashQueryOptions = {},
): Promise<string[] | BookingClash[]> {
    const query = toQueryString({ ...q, limit: 10000 });
    try {
        const list = await post(
            `${EVENTS_ENDPOINT}/clashing-assets${query ? '?' + query : ''}`,
            event.toJSON(),
        );
        return q.include_clash_time
            ? (list as BookingClash[])
            : (list as string[]);
    } catch (_) {
        return [];
    }
}

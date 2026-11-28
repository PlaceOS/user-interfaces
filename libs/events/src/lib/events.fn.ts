import {
    appDetails,
    BookingClash,
    CalendarEvent,
    EventExtensionData,
    GuestUser,
    isJsonRecord,
    jsonRecord,
    toJsonValue,
} from '@placeos/common';
import { type JsonValue } from '@placeos/ts-client';
import { CallFailed, orThrow } from '@placeos/ts-client/compat';
import {
    type Attendee,
    events,
    type Guest,
    PlaceCalendarEvent,
    PlaceCalendarEventAttendee,
} from '@placeos/ts-client/staff';
import { addMinutes, getUnixTime } from 'date-fns';
import { requestBody } from 'libs/bookings/src/lib/request-body';

import { queryCalendarAvailability, querySpaceFreeBusy } from './calendar.fn';

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

type StaffEventQuery = Parameters<typeof events.query>[0];

/**
 * Input of the staff `events.query` operation for the given parameters. The
 * API document has no `limit` for events, so it is not sent
 */
function eventQuery(q: CalendarEventQueryParams): StaffEventQuery {
    return {
        period_start: q.period_start,
        period_end: q.period_end,
        calendars: q.calendars,
        zone_ids: q.zone_ids,
        system_ids: q.system_ids,
        include_cancelled: q.include_cancelled,
        ical_uid: q.ical_uid,
        strict: q.strict,
    };
}

/**
 * App `CalendarEvent` from the data of the staff API.
 * The class reads the raw API data, as it did in 6.x. Its constructor type
 * has the app types of the fields, such as `User` attendees, so the data
 * needs a cast until the class accepts the staff `PlaceCalendarEvent` type.
 * @param data Event from the staff API
 */
export function toCalendarEvent(data: PlaceCalendarEvent): CalendarEvent {
    return new CalendarEvent(
        data as unknown as ConstructorParameters<typeof CalendarEvent>[0],
    );
}

/** App guest from a guest or an attendee of the staff API */
function toGuestUser(
    data: Guest | Attendee | PlaceCalendarEventAttendee,
): GuestUser {
    const extension_data =
        'extension_data' in data ? jsonRecord(data.extension_data) : {};
    return new GuestUser({
        ...('id' in data && data.id ? { id: `${data.id}` } : {}),
        name: data.name,
        email: data.email,
        phone: data.phone,
        organisation: data.organisation,
        notes: data.notes,
        photo: data.photo,
        checked_in: data.checked_in,
        visit_expected: data.visit_expected,
        extension_data: { ...extension_data },
    });
}

/**
 * Extension data of an event from free form JSON. `EventExtensionData` is
 * the app type of the JSON, which the API does not describe, so the data
 * needs a cast
 */
function toEventExtensionData(value: JsonValue): EventExtensionData {
    return { ...jsonRecord(value) } as unknown as EventExtensionData;
}

/** Request body of an event with the app version in its extension data */
function eventBody(data: Partial<CalendarEvent>) {
    return requestBody(
        PlaceCalendarEvent,
        new CalendarEvent(withAppVersion(data)).toJSON(),
    );
}

function withAppVersion<T extends { extension_data?: Record<string, unknown> }>(
    data: T,
): T {
    return {
        ...data,
        extension_data: {
            ...(data.extension_data || {}),
            ...appDetails(),
        },
    };
}

/**
 * List events. Returns an empty list when the request fails.
 * @param q Parameters to pass to the API request
 */
export async function queryEvents(
    q: CalendarEventQueryParams,
): Promise<CalendarEvent[]> {
    return queryEventsOrThrow(q).catch(() => []);
}

/**
 * List events. Throws when the request fails, so callers can tell
 * an error apart from an empty list.
 * @param q Parameters to pass to the API request
 */
export async function queryEventsOrThrow(
    q: CalendarEventQueryParams,
): Promise<CalendarEvent[]> {
    return (await queryEventListOrThrow(q)).events;
}

/** Events from a list request, with the calendars that did not load */
export interface CalendarEventList {
    events: CalendarEvent[];
    /** Lower case IDs of the calendars that the API could not read */
    failed_calendars: string[];
}

/**
 * List events and the calendars that did not load. When the API cannot
 * read some calendars, it returns the other events with HTTP 206 and
 * lists the failed calendars in the `x-calendar-issue` header.
 * Throws when the request fails.
 * @param q Parameters to pass to the API request
 */
export async function queryEventListOrThrow(
    q: CalendarEventQueryParams,
): Promise<CalendarEventList> {
    const result = await events.query(eventQuery(q));
    if (result.ok === false) throw new CallFailed(result.error);
    const issues = result.value.headers.get('x-calendar-issue') || '';
    return {
        events: result.value.data.map(toCalendarEvent),
        failed_calendars: issues
            .split(',')
            .map((id) => id.trim().toLowerCase())
            .filter(Boolean),
    };
}

export async function queryEventHistory(
    q: CalendarEventHistoryQueryParams,
): Promise<CalendarEventChange[]> {
    try {
        const list = await events
            .history({
                period_start: q.period_start,
                period_end: q.period_end,
                zone_ids: q.zone_ids,
                system_ids: q.system_ids,
                calendars: q.calendars,
                ical_uid: q.ical_uid,
            })
            .then(orThrow);
        // A history entry does not change after it is made, so the API
        // sends only `created_at`
        return list.map((item) => ({
            id: item.id || '',
            created_at: item.created_at || 0,
            updated_at: item.created_at || 0,
            type: item.resource_type || '',
            resource_id: item.resource_id || '',
            action: item.action || '',
            changed_fields: [...(item.changed_fields || [])],
        }));
    } catch (_) {
        return [];
    }
}

/**
 * List all events. The events API has no pages, so this is one request.
 * @param q Parameters to pass to the API request
 * @param options.signal Stops the request after an abort.
 * The function then returns an empty list, so callers must discard it.
 * @returns An empty list on a request error
 */
export async function queryAllEvents(
    q: CalendarEventQueryParams,
    options: { signal?: AbortSignal } = {},
): Promise<CalendarEvent[]> {
    const { signal } = options;
    if (signal?.aborted) return [];
    const result = await events.query(eventQuery(q), { signal });
    if (signal?.aborted || result.ok === false) return [];
    return result.value.data.map(toCalendarEvent);
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
    const item = await events
        .show({ id, calendar: q.calendar, system_id: q.system_id })
        .then(orThrow);
    return toCalendarEvent(item);
}

/**
 * Create new calendar event and add it to the database
 * @param data New calendar event fields
 */
export async function createEvent(
    data: Partial<CalendarEvent>,
): Promise<CalendarEvent> {
    const item = await events.create({ body: eventBody(data) }).then(orThrow);
    return toCalendarEvent(item);
}

/**
 * Update an existing calendar event
 * @param id ID of the event to update
 * @param data New values for event fields
 * @param q Parameters to pass to the API request
 */
export async function updateEvent(
    id: string,
    data: Partial<CalendarEvent>,
    q: CalendarEventShowParams = {},
): Promise<CalendarEvent> {
    const item = await events
        .update({
            id,
            calendar: q.calendar,
            system_id: q.system_id,
            notify_existing_attendees: q.notify_existing_attendees,
            body: eventBody(data),
        })
        .then(orThrow);
    return toCalendarEvent(item);
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
    return events
        .destroy({ id, calendar: q.calendar, system_id: q.system_id })
        .then(orThrow)
        .then(() => undefined);
}

/**
 * Decline the given event
 * @param id ID of the event to decline
 * @returns An empty event, as the API sends no event data
 */
export async function declineEvent(
    id: string,
    query: CalendarEventShowParams = {},
): Promise<CalendarEvent> {
    await events
        .decline({ id, calendar: query.calendar, system_id: query.system_id })
        .then(orThrow);
    return new CalendarEvent();
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
    const item = await events
        .guestCheckin({
            id,
            guest_id,
            state,
            calendar: q.calendar,
            system_id: q.system_id,
        })
        .then(orThrow);
    return toGuestUser(item);
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
    const item = await events
        .addAttendee({
            id,
            calendar: q.calendar,
            system_id: q.system_id,
            notify_existing_attendees: q.notify_existing_attendees,
            body: requestBody(PlaceCalendarEventAttendee, guest),
        })
        .then(orThrow);
    return toGuestUser(item);
}

/**
 * Remove an attendee from a booking
 * @param id ID of the booking
 * @param guest Guest to remove from the booking
 * @returns An empty guest, as the API sends no guest data
 */
export async function removeEventGuest(
    id: string,
    guest: GuestUser,
    q: CalendarEventShowParams = {},
): Promise<GuestUser> {
    await events
        .deleteAttendee({
            id,
            email: guest.email,
            calendar: q.calendar,
            system_id: q.system_id,
        })
        .then(orThrow);
    return new GuestUser();
}

/**
 * Extension data of an event, from the PlaceOS metadata of its room.
 * `EventExtensionData` is the app type of the free form JSON, so the data
 * needs a cast
 */
async function eventMetadata(
    id: string,
    system_id: string,
    query: { ical_uid?: string },
): Promise<EventExtensionData> {
    const data = await events
        .getMetadata({ id, system_id, ical_uid: query.ical_uid })
        .then(orThrow);
    return toEventExtensionData(data);
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
    return eventMetadata(id, system_id, query);
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
    return eventMetadata(id, system_id, query);
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
    const data = await events
        .patchMetadata({
            id,
            system_id,
            ical_uid: query.ical_uid,
            body: jsonRecord(toJsonValue(metadata)),
        })
        .then(orThrow);
    return toEventExtensionData(data);
}

/**
 * Check whether a list of spaces are available
 * @param id_list List of space IDs to check
 * @param start Start of the availability period to check
 * @param duration Duration of the availability block in minutes
 * @param ignore IDs of the spaces whose booking of the edited event to ignore.
 * The availability API counts the event's own booking as busy.
 */
export async function querySpaceAvailability(
    id_list: string[],
    start: number,
    duration: number,
    ignore?: string | string[],
    type?: unknown,
    ignore_period: [number, number] = [0, 0],
): Promise<boolean[]> {
    const end = addMinutes(start, duration).valueOf();
    const ignore_ids = [ignore ?? []]
        .flat()
        .filter((id) => id_list.includes(id));
    const [spaces, ignore_check] = await Promise.all([
        queryCalendarAvailability({
            system_ids: id_list.join(),
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
        }).catch(() => []),
        ignore_ids.length
            ? querySpaceFreeBusy({
                  period_start: getUnixTime(start),
                  period_end: getUnixTime(end),
                  system_ids: ignore_ids.join(),
              })
            : Promise.resolve([]),
    ]);
    const short_list = id_list.map(
        (id) => !!spaces.find((s) => s.id === id || s.resource?.id === id),
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

/**
 * IDs of the spaces that hold a booking of the event, for the `ignore` list
 * of `querySpaceAvailability`
 */
export function eventSpaceIds(event?: CalendarEvent): string[] {
    const ids = (event?.resources || []).map((_) => _.id).filter(Boolean);
    if (ids.length) return ids;
    const fallback = event?.system?.id || event?.id;
    return fallback ? [fallback] : [];
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
    try {
        const list = await events
            .clashingAssets({
                return_available: q.return_available,
                include_clash_time: q.include_clash_time,
                body: requestBody(PlaceCalendarEvent, event.toJSON()),
            })
            .then(orThrow);
        return q.include_clash_time
            ? list.map(toEventClash).filter((_) => !!_)
            : list.filter((_): _ is string => typeof _ === 'string');
    } catch (_) {
        return [];
    }
}

/**
 * A clash from the JSON list of the clashing assets endpoint of events, or
 * `null`. With `include_clash_time`, Staff API gives the room as
 * `system_id` and the times as `event_start` and `event_end`.
 */
function toEventClash(item: JsonValue): BookingClash | null {
    if (!isJsonRecord(item)) return null;
    const { system_id, event_start, event_end } = item;
    if (typeof system_id !== 'string') return null;
    return {
        asset_id: system_id,
        booking_start: typeof event_start === 'number' ? event_start : 0,
        booking_end: typeof event_end === 'number' ? event_end : 0,
    };
}

/**
 * The one room the calendar specs book, and the events they put in it.
 *
 * Only meaningful while the stack is backed by the Microsoft 365 tenant
 * (`e2e/support/calendar/calendar.env.ts`): the room's address is a room
 * mailbox there, so an event created through staff-api lands on a real room
 * calendar, which is what the concierge day view and the rooms report read.
 *
 * Creating an event needs the CALENDAR identity (`roleFor('calendar')`):
 * staff-api only lets a user host for themselves, and that user is the one
 * whose address is a mailbox. Listing and deleting work for any admin given
 * the room's `system_id`, because the event is looked up on the room's
 * calendar rather than the host's.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, STAFF_API, zonesWithTag } from '../api';
import { CALENDAR_ROOM_EMAIL } from '../calendar/calendar.env';

export const CALENDAR_ROOM_NAME = 'E2E Calendar Room';

export interface CalendarRoom {
    id: string;
    name: string;
    email: string;
    building_id: string;
}

export interface RoomEvent {
    id: string;
    title: string;
    host?: string;
    status?: string;
    event_start: number;
    event_end: number;
    system?: { id: string; name?: string };
    attendees?: { email: string; resource?: boolean; response_status?: string }[];
    [k: string]: unknown;
}

/** `GET /systems` answers with a bare array (see `room.seed.ts`). */
async function listSystems(api: APIRequestContext): Promise<any[]> {
    const res = await api.get(`${ENGINE_API}/systems`, { params: { limit: '500' } });
    if (!res.ok()) {
        throw new Error(`list systems failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return Array.isArray(body) ? body : (body?.results ?? []);
}

/**
 * The room system whose email is the tenant's room mailbox, on the building
 * and level zones like the native rooms. Found or created. Needs ADMIN.
 */
export async function ensureCalendarRoom(api: APIRequestContext): Promise<CalendarRoom> {
    const [building] = await zonesWithTag(api, 'building');
    const [level] = await zonesWithTag(api, 'level');
    if (!building?.id) throw new Error('no building zone: the stack is not seeded');
    const email = CALENDAR_ROOM_EMAIL.toLowerCase();
    const found = (await listSystems(api)).find((s) => `${s.email}`.toLowerCase() === email);
    if (found) {
        return { id: found.id, name: found.name, email, building_id: building.id };
    }
    const res = await api.post(`${ENGINE_API}/systems`, {
        data: {
            name: CALENDAR_ROOM_NAME,
            display_name: CALENDAR_ROOM_NAME,
            email: CALENDAR_ROOM_EMAIL,
            capacity: 6,
            bookable: true,
            signage: false,
            zones: [building.id, level?.id].filter(Boolean),
            description: 'Room owned by the e2e suite. Safe to delete.',
        },
    });
    if (!res.ok()) {
        throw new Error(`create ${CALENDAR_ROOM_NAME} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return { id: (await res.json()).id, name: CALENDAR_ROOM_NAME, email, building_id: building.id };
}

/**
 * A half-hour slot at `hour` UTC, `days_ahead` days out.
 *
 * Chosen in UTC because CI runs the browser in UTC and the day view navigates
 * by the browser's day; 10:00 UTC is also still the same calendar date in
 * Sydney, where the room mailbox lives, so the two never disagree on the day.
 */
export function calendarSlot(days_ahead: number, hour = 10) {
    const day = new Date();
    day.setUTCDate(day.getUTCDate() + days_ahead);
    day.setUTCHours(0, 0, 0, 0);
    const day_start = Math.floor(day.valueOf() / 1000);
    const start = day_start + hour * 3600;
    return { day_start, day_end: day_start + 86_400, start, end: start + 1800 };
}

/**
 * Events in a window across every room in the zone, as the day view asks.
 *
 * 206 is a normal answer here: the native rooms carry `@place.tech` addresses
 * that are not mailboxes, staff-api reports those calendars in
 * `X-Calendar-Issue` and still returns the rest.
 */
export async function listZoneEvents(
    api: APIRequestContext,
    zone_id: string,
    from: number,
    to: number,
): Promise<RoomEvent[]> {
    const res = await api.get(`${STAFF_API}/events`, {
        params: { zone_ids: zone_id, period_start: String(from), period_end: String(to) },
    });
    if (res.status() !== 200 && res.status() !== 206) {
        throw new Error(`GET /events failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return Array.isArray(body) ? body : (body?.results ?? []);
}

/** Events on the calendar room only, in a window. */
export async function listRoomEvents(
    api: APIRequestContext,
    room: CalendarRoom,
    from: number,
    to: number,
): Promise<RoomEvent[]> {
    const res = await api.get(`${STAFF_API}/events`, {
        params: { system_ids: room.id, period_start: String(from), period_end: String(to) },
    });
    if (res.status() !== 200 && res.status() !== 206) {
        throw new Error(`GET /events failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return Array.isArray(body) ? body : (body?.results ?? []);
}

/**
 * Create an event on the room as the signed-in user, who must be the calendar
 * identity. `private`, `all_day` and `body` are required by the model even
 * when empty.
 */
export async function createRoomEvent(
    api: APIRequestContext,
    room: CalendarRoom,
    event: { start: number; end: number; title: string },
): Promise<RoomEvent> {
    const res = await api.post(`${STAFF_API}/events`, {
        data: {
            system_id: room.id,
            event_start: event.start,
            event_end: event.end,
            title: event.title,
            body: '',
            private: false,
            all_day: false,
            attendees: [],
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create event "${event.title}" on ${room.name} failed: HTTP ${res.status()} ` +
                `${await res.text()}`,
        );
    }
    return res.json();
}

/**
 * Delete an event from the room. The id must be the one the ROOM's calendar
 * reports (a listing with `system_ids`, or the id from create): Exchange gives
 * each mailbox its own id for the same event, and without `system_id` staff-api
 * searches the caller's calendar and answers 404.
 */
export async function deleteRoomEvent(
    api: APIRequestContext,
    room: CalendarRoom,
    event_id: string,
): Promise<void> {
    const res = await api.delete(`${STAFF_API}/events/${event_id}`, {
        params: { system_id: room.id },
    });
    if (!res.ok() && res.status() !== 404) {
        throw new Error(`delete event ${event_id} failed: HTTP ${res.status()} ${await res.text()}`);
    }
}

/**
 * Remove events a previous run left on the room in a window, by title prefix.
 * Run as the calendar identity, which hosts everything this suite creates.
 */
export async function sweepRoomEvents(
    api: APIRequestContext,
    room: CalendarRoom,
    from: number,
    to: number,
    prefix = 'E2E',
): Promise<number> {
    const stale = (await listRoomEvents(api, room, from, to)).filter((e) =>
        `${e.title}`.startsWith(prefix),
    );
    for (const event of stale) await deleteRoomEvent(api, room, event.id);
    return stale.length;
}

/**
 * Backend helpers for the room specs.
 *
 * Deliberately thin. A room booking is an ordinary staff-api booking with
 * `booking_type: 'room'`, so the shared helpers in `../api.ts` already do most
 * of the work — this file adds only what is room-shaped, and adds nothing to
 * the shared file.
 *
 * Measured against the running stack before any spec was written:
 *   POST /bookings type `room`                     201
 *   the same room and slot, as another user        409 {"error":"Conflicting booking"}
 *   partly overlapping                             409
 *   a slot that does not overlap                   201
 * So a room behaves like a DESK, not like a visitor: exclusive for its window,
 * and the backend — not the UI — is what enforces it.
 */
import { APIRequestContext } from '@playwright/test';
import { Booking, STAFF_API, currentUser, releaseAsset, zonesWithTag } from '../api';

export interface RoomBooking extends Booking {
    attendees?: { name?: string; email: string }[];
    // The shared `Booking` types this as `{}`, which is right for a type that has
    // to cover every booking kind and useless for asserting on one.
    extension_data?: Record<string, any>;
}

/** Every live booking on this room in the window, cleared. */
export async function releaseRoom(
    api: APIRequestContext,
    room_id: string,
    from: number,
    to: number,
): Promise<number> {
    return releaseAsset(api, 'room', room_id, from, to);
}

/**
 * Create a room booking straight through the API.
 *
 * For specs whose subject is NOT the form — clash rules, visibility, cancelling
 * from the schedule. Driving the booking form first would only add an unrelated
 * way for them to fail.
 */
export async function createRoomBookingViaApi(
    api: APIRequestContext,
    options: {
        room: { id: string; name: string };
        title: string;
        start: number;
        end: number;
        attendees?: { name?: string; email: string }[];
    },
): Promise<RoomBooking> {
    const me = await currentUser(api);
    const zones = (
        await Promise.all(['org', 'building', 'level'].map((t) => zonesWithTag(api, t)))
    )
        .flat()
        .map((z) => z.id);

    const res = await api.post(`${STAFF_API}/bookings`, {
        data: {
            booking_type: 'room',
            asset_id: options.room.id,
            asset_name: options.room.name,
            booking_start: options.start,
            booking_end: options.end,
            timezone: 'Etc/UTC',
            user_email: me.email,
            user_id: me.id,
            user_name: me.name,
            title: options.title,
            zones,
            ...(options.attendees ? { attendees: options.attendees } : {}),
        },
    });
    const body = await res.text();
    if (!res.ok()) {
        throw new Error(
            `create room booking failed: HTTP ${res.status()} ${body}. ` +
                `A 409 here means the room is already held for that window — check the ` +
                `spec swept it first, and that two specs are not sharing a slot.`,
        );
    }
    return JSON.parse(body);
}

/**
 * Try to book a room and report what happened, without throwing.
 *
 * The clash spec needs the refusal itself, so it cannot use a helper that turns
 * a 409 into an exception.
 */
export async function tryRoomBooking(
    api: APIRequestContext,
    options: Parameters<typeof createRoomBookingViaApi>[1],
): Promise<{ status: number; body: string; id?: number }> {
    try {
        const booking = await createRoomBookingViaApi(api, options);
        return { status: 201, body: '', id: booking.id };
    } catch (error) {
        const message = `${(error as Error).message}`;
        const status = Number(/HTTP (\d+)/.exec(message)?.[1] ?? 0);
        return { status, body: message };
    }
}

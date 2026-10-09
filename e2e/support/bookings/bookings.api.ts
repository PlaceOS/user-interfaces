/**
 * Backend helpers for the YOUR BOOKINGS page specs.
 *
 * ## Why this creates its own bookings instead of importing the other areas
 *
 * This page lists every booking type at once, so its specs need a desk booking
 * and a visitor booking side by side. The visitor helper that could do the
 * second one lives in `visitor/visitor.api.ts`, and importing it here would tie
 * two areas together — exactly what the separation between support folders is
 * for. A booking is a `POST /bookings` with a type on it, so the honest cost of
 * keeping them apart is the thirty lines below.
 *
 * What this does NOT do is duplicate the *behaviour* the other areas own: it
 * makes no assertions about how a visitor invite or a room booking is stored.
 * Those belong to `visitor-*.spec.ts` and `room-*.spec.ts`. Here a booking is
 * only ever a row that ought to show up on a page.
 */
import { APIRequestContext } from '@playwright/test';
import { Booking, STAFF_API, currentUser, releaseAsset, zonesWithTag } from '../api';

export interface ScheduleBooking extends Booking {
    checked_in?: boolean;
    extension_data?: Record<string, any>;
}

/** Every zone the seeded org has, which is what a real booking carries. */
async function allZones(api: APIRequestContext): Promise<string[]> {
    const zones = await Promise.all(
        ['org', 'building', 'level'].map((tag) => zonesWithTag(api, tag)),
    );
    return zones.flat().map((z) => z.id);
}

/**
 * Create a booking of any type, as the signed-in user.
 *
 * `asset_id` is what the type means by an asset: a desk id for `desk`, the
 * visitor's email for `visitor`, a parking space id for `parking`. The page
 * under test does not care which — it cares that the card renders on the right
 * day under the right filter.
 */
/**
 * Is this failure the known concurrent-write defect rather than a bad request?
 *
 * REG-09 / PPT-2642: a burst of booking writes poisons a staff-api connection,
 * and the request that lands on it fails in a way that has nothing to do with
 * what was sent. The visitor area found the two 400/500 shapes; a THIRD turned
 * up here, under a fifteen-test parallel run:
 *
 *   422 {"error":"error validating booking data","failures":[]}
 *
 * An empty `failures` list is the tell. A genuine validation error names the
 * field it is unhappy about; this one has nothing to say, because nothing was
 * actually wrong with the payload — the same payload succeeds on retry.
 *
 * Delete this whole retry once the stack runs a staff-api built on
 * pg-orm >= 2.2.4, and do not read a green run as evidence the image is fixed.
 */
function isConcurrentWriteFailure(status: number, body: string): boolean {
    if (status === 400 && /Expected BeginObject but was EOF/.test(body)) return true;
    if (status === 500 && /could not serialize access/.test(body)) return true;
    if (status === 422 && /"failures"\s*:\s*\[\s*\]/.test(body)) return true;
    return false;
}

/**
 * Did this booking actually PERSIST?
 *
 * ## A 201 is not proof the row exists
 *
 * Measured under a fifteen-test parallel run: `POST /bookings` returned **201
 * with an id**, and `GET /bookings/<that id>` then returned **404 "could not
 * find booking with id"**. The row was never committed. Everything downstream
 * then looks like a different bug — the card never appears on the schedule, and
 * the listing says the booking is not live — which is how this cost two
 * debugging sessions before the id was read back.
 *
 * This is REG-09 / PPT-2642 doing more damage than its row currently describes:
 * crystal-db clears a connection's transaction flag only after the COMMIT it
 * issues, so a COMMIT that fails leaves the connection dirty. The response is
 * already written by then, hence a 201 for nothing.
 *
 * So every create here reads the booking back before returning it, and treats a
 * missing row as a failed attempt. Delete this, like the retry around it, once
 * the stack runs a staff-api built on pg-orm >= 2.2.4.
 */
async function persisted(api: APIRequestContext, id: number): Promise<boolean> {
    const res = await api.get(`${STAFF_API}/bookings/${id}`);
    return res.ok();
}

export async function createBookingViaApi(
    api: APIRequestContext,
    options: {
        type: string;
        asset_id: string;
        asset_name?: string;
        title: string;
        start: number;
        end: number;
        /** Only visitor bookings need these, and only to look realistic. */
        attendees?: { name?: string; email: string }[];
    },
): Promise<ScheduleBooking> {
    const me = await currentUser(api);
    const data = {
        booking_type: options.type,
        asset_id: options.asset_id,
        asset_name: options.asset_name ?? options.asset_id,
        booking_start: options.start,
        booking_end: options.end,
        timezone: 'Etc/UTC',
        user_email: me.email,
        user_id: me.id,
        user_name: me.name,
        title: options.title,
        zones: await allZones(api),
        ...(options.attendees ? { attendees: options.attendees } : {}),
    };

    let last = '';
    for (let attempt = 1; attempt <= 4; attempt++) {
        const res = await api.post(`${STAFF_API}/bookings`, { data });
        const body = await res.text();
        if (res.ok()) {
            const created = JSON.parse(body);
            if (await persisted(api, created.id)) return created;
            last = `HTTP 201 for booking ${created.id}, which then 404s — see persisted()`;
            console.warn(`  ! phantom 201 on attempt ${attempt}/4 — ${last}`);
            await new Promise((r) => setTimeout(r, 400 * attempt));
            continue;
        }

        last = `HTTP ${res.status()} ${body.slice(0, 200)}`;
        if (!isConcurrentWriteFailure(res.status(), body)) {
            throw new Error(
                `create ${options.type} booking failed: ${last}. ` +
                    `A 409 means the asset is already held for that window — check the ` +
                    `spec swept its own day first, and that two spec files are not ` +
                    `sharing a day (see SCHEDULE_DAYS).`,
            );
        }
        console.warn(
            `  ! concurrent-write failure on attempt ${attempt}/4, retrying — ${last}`,
        );
        // A short pause lets the poisoned connection cycle out of the pool.
        await new Promise((r) => setTimeout(r, 400 * attempt));
    }
    throw new Error(
        `create ${options.type} booking still failing after 4 attempts. If every ` +
            `attempt looks like REG-09, the stack is running a staff-api older than ` +
            `pg-orm 2.2.4. Last: ${last}`,
    );
}

/** Clear every live booking of a type against an asset in a window. */
export async function releaseFor(
    api: APIRequestContext,
    type: string,
    asset_id: string,
    from: number,
    to: number,
): Promise<number> {
    return releaseAsset(api, type, asset_id, from, to);
}

/**
 * Is this booking still live — present, and not soft-deleted?
 *
 * The page removes a cancelled card optimistically, so "the card went away" is
 * not evidence of anything. Every cancel assertion in these specs comes through
 * here instead.
 */
export async function isLive(
    api: APIRequestContext,
    type: string,
    id: number,
    from: number,
    to: number,
): Promise<boolean> {
    const res = await api.get(`${STAFF_API}/bookings`, {
        params: {
            type,
            period_start: String(from),
            period_end: String(to),
            include_deleted: 'true',
        },
    });
    if (!res.ok()) {
        throw new Error(`GET /bookings failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    const list: ScheduleBooking[] = Array.isArray(body) ? body : (body.results ?? []);
    return list.some((b) => Number(b.id) === id && !b.deleted);
}

/** A booking read straight from the backend, by id. */
export async function readBooking(
    api: APIRequestContext,
    id: number,
): Promise<ScheduleBooking> {
    const res = await api.get(`${STAFF_API}/bookings/${id}`);
    if (!res.ok()) {
        throw new Error(`GET /bookings/${id} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return res.json();
}

/** Best-effort guest removal, for the visitor bookings these specs seed. */
export async function deleteGuestByEmail(
    api: APIRequestContext,
    email: string,
): Promise<void> {
    try {
        const res = await api.get(`${STAFF_API}/guests`, {
            params: { q: email },
        });
        if (!res.ok()) return;
        const body = await res.json();
        const list = Array.isArray(body) ? body : (body.results ?? []);
        for (const guest of list) {
            if (`${guest.email}`.toLowerCase() !== email.toLowerCase()) continue;
            await api.delete(`${STAFF_API}/guests/${guest.id ?? guest.email}`);
        }
    } catch {
        /* teardown must never mask the real result */
    }
}

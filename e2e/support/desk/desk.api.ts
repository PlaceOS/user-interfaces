/**
 * Backend helpers for the desk specs added after the dev's originals.
 *
 * Thin on purpose. A desk booking is an ordinary staff-api booking with
 * `booking_type: 'desk'`, and the shared helpers in `../api.ts` already list,
 * read, delete and sweep them — so this file adds only the one thing they do
 * not: creating one.
 *
 * The retry is the same one the visitor and Your Bookings areas carry, for the
 * same reason (REG-09 / PPT-2642: a burst of booking writes poisons a staff-api
 * connection and the request that lands on it fails for reasons unrelated to
 * what was sent). Duplicated rather than shared, like the rest of the per-area
 * support, so no area can break another.
 */
import { APIRequestContext } from '@playwright/test';
import {
    Booking,
    ENGINE_API,
    STAFF_API,
    currentUser,
    zonesWithTag,
} from '../api';

function isConcurrentWriteFailure(status: number, body: string): boolean {
    if (status === 400 && /Expected BeginObject but was EOF/.test(body)) return true;
    if (status === 500 && /could not serialize access/.test(body)) return true;
    // An empty `failures` list is the tell: a genuine validation error names the
    // field it is unhappy about.
    if (status === 422 && /"failures"\s*:\s*\[\s*\]/.test(body)) return true;
    return false;
}

/**
 * Did this booking actually PERSIST?
 *
 * A 201 is not proof. Measured under parallel load: `POST /bookings` answered
 * 201 with an id and `GET /bookings/<id>` then 404'd — the row was never
 * committed. That is REG-09 / PPT-2642 (a failed COMMIT on a dirty connection,
 * after the response has already been written), and it presents as every
 * downstream symptom except the real one. Reading the row back is the only
 * reliable check.
 */
async function persisted(api: APIRequestContext, id: number): Promise<boolean> {
    const res = await api.get(`${STAFF_API}/bookings/${id}`);
    return res.ok();
}

/**
 * Create a desk booking straight through the API.
 *
 * For specs whose subject is NOT the booking form — editing, status display,
 * check-in. Driving the form first would add an unrelated way for them to fail,
 * and `bookDeskViaUI` already covers that path.
 */
export async function createDeskBookingViaApi(
    api: APIRequestContext,
    options: {
        desk: { id: string; name: string };
        title: string;
        start: number;
        end: number;
        /** Who the booking is FOR, if not the caller. */
        user?: { email: string; id?: string; name?: string };
    },
): Promise<Booking> {
    const me = await currentUser(api);
    const zones = (
        await Promise.all(['org', 'building', 'level'].map((t) => zonesWithTag(api, t)))
    )
        .flat()
        .map((z) => z.id);
    const holder = options.user ?? me;

    const data = {
        booking_type: 'desk',
        asset_id: options.desk.id,
        asset_name: options.desk.name,
        booking_start: options.start,
        booking_end: options.end,
        timezone: 'Etc/UTC',
        user_email: holder.email,
        user_id: holder.id ?? '',
        user_name: holder.name ?? holder.email,
        booked_by_email: me.email,
        booked_by_id: me.id,
        booked_by_name: me.name,
        title: options.title,
        zones,
    };

    let last = '';
    for (let attempt = 1; attempt <= 4; attempt++) {
        const res = await api.post(`${STAFF_API}/bookings`, { data });
        const body = await res.text();
        if (res.ok()) {
            const created = JSON.parse(body);
            // A 201 is not proof the row exists — see `persisted`.
            if (await persisted(api, created.id)) return created;
            last = `HTTP 201 for booking ${created.id}, which then 404s`;
            console.warn(`  ! phantom 201 on attempt ${attempt}/4 — ${last}`);
            await new Promise((r) => setTimeout(r, 400 * attempt));
            continue;
        }
        last = `HTTP ${res.status()} ${body.slice(0, 200)}`;
        if (!isConcurrentWriteFailure(res.status(), body)) {
            throw new Error(
                `create desk booking failed: ${last}. A 409 means the desk is already ` +
                    `held for that window — check the spec swept its own day first, and ` +
                    `that two spec files are not sharing a day (see DESK_DAYS). The ` +
                    `spare desk is shared between workers, so it also needs a day per ` +
                    `worker (see dayFor).`,
            );
        }
        console.warn(`  ! concurrent-write failure on attempt ${attempt}/4 — ${last}`);
        await new Promise((r) => setTimeout(r, 400 * attempt));
    }
    throw new Error(`create desk booking still failing after 4 attempts. Last: ${last}`);
}

/**
 * The signed-in user's own settings blob.
 *
 * Favourite desks are a USER setting, not a property of the desk: the app writes
 * the whole blob to `PUT /metadata/{user_id}` (debounced ~2.4s), with
 * `favourite_desks` one key inside `details`. Read here so a spec can prove a
 * favourite outlived the page rather than checking a star turned blue.
 */
export async function readUserSettings(
    api: APIRequestContext,
): Promise<Record<string, any>> {
    const me = await currentUser(api);
    const res = await api.get(`${ENGINE_API}/metadata/${me.id}`, {
        params: { name: 'settings' },
    });
    if (!res.ok()) {
        throw new Error(`read user settings failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return body?.settings?.details ?? {};
}

/**
 * Set the user's favourite desks, leaving every other setting alone.
 *
 * Read-modify-write, because the app PUTs the WHOLE settings blob and this must
 * do the same: a PUT carrying only `favourite_desks` would wipe the visitor
 * specs' saved invitee list and the room specs' favourite rooms, which live in
 * the same object.
 */
export async function setFavouriteDesks(
    api: APIRequestContext,
    ids: string[],
): Promise<void> {
    const me = await currentUser(api);
    const details = await readUserSettings(api);
    const res = await api.put(`${ENGINE_API}/metadata/${me.id}`, {
        data: {
            name: 'settings',
            description: '',
            details: { ...details, favourite_desks: ids },
        },
    });
    if (!res.ok()) {
        throw new Error(
            `write favourite_desks failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
}

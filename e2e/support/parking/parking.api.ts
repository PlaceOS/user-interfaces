/**
 * Backend helpers for the PARKING specs.
 *
 * Thin: a parking booking is an ordinary staff-api booking with
 * `booking_type: 'parking'`, so the shared helpers already list, read, delete
 * and sweep them. This adds creating one, and the two guards every area needs
 * against REG-09 — the retry, and reading the row back, because a 201 with an id
 * is not proof the row exists.
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
    // An empty `failures` list is the tell: a real validation error names a field.
    if (status === 422 && /"failures"\s*:\s*\[\s*\]/.test(body)) return true;
    return false;
}

async function persisted(api: APIRequestContext, id: number): Promise<boolean> {
    const res = await api.get(`${STAFF_API}/bookings/${id}`);
    return res.ok();
}

/**
 * Create a parking booking straight through the API.
 *
 * For specs whose subject is not the form — clash rules, visibility, cancelling
 * from the schedule. The zones include the PARKING level as well as the org and
 * building, because that is the level the space lives on.
 */
export async function createParkingBookingViaApi(
    api: APIRequestContext,
    options: {
        space: { id: string; name: string };
        title: string;
        start: number;
        end: number;
        zone_id?: string;
    },
): Promise<Booking> {
    const me = await currentUser(api);
    const zones = (
        await Promise.all(['org', 'building'].map((t) => zonesWithTag(api, t)))
    )
        .flat()
        .map((z) => z.id);
    if (options.zone_id) zones.push(options.zone_id);

    const data = {
        booking_type: 'parking',
        asset_id: options.space.id,
        asset_name: options.space.name,
        booking_start: options.start,
        booking_end: options.end,
        timezone: 'Etc/UTC',
        user_email: me.email,
        user_id: me.id,
        user_name: me.name,
        title: options.title,
        zones,
    };

    let last = '';
    for (let attempt = 1; attempt <= 4; attempt++) {
        const res = await api.post(`${STAFF_API}/bookings`, { data });
        const body = await res.text();
        if (res.ok()) {
            const created = JSON.parse(body);
            if (await persisted(api, created.id)) return created;
            last = `HTTP 201 for booking ${created.id}, which then 404s`;
            console.warn(`  ! phantom 201 on attempt ${attempt}/4 — ${last}`);
            await new Promise((r) => setTimeout(r, 400 * attempt));
            continue;
        }
        last = `HTTP ${res.status()} ${body.slice(0, 200)}`;
        if (!isConcurrentWriteFailure(res.status(), body)) {
            throw new Error(
                `create parking booking failed: ${last}. A 409 means the space is ` +
                    `already held for that window — check the spec swept first, and ` +
                    `that two spec files are not sharing a slot (see PARKING_SLOTS).`,
            );
        }
        console.warn(`  ! concurrent-write failure on attempt ${attempt}/4 — ${last}`);
        await new Promise((r) => setTimeout(r, 400 * attempt));
    }
    throw new Error(`create parking booking still failing after 4 attempts. Last: ${last}`);
}

/** Try to book and report what happened, without throwing — for clash specs. */
export async function tryParkingBooking(
    api: APIRequestContext,
    options: Parameters<typeof createParkingBookingViaApi>[1],
): Promise<{ status: number; body: string; id?: number }> {
    try {
        const booking = await createParkingBookingViaApi(api, options);
        return { status: 201, body: '', id: booking.id };
    } catch (error) {
        const message = `${(error as Error).message}`;
        const status = Number(/HTTP (\d+)/.exec(message)?.[1] ?? 0);
        return { status, body: message };
    }
}

/**
 * The signed-in user's own settings blob.
 *
 * Favourite parking spaces are a USER setting (`favourite_parking`), written as
 * part of the whole blob to `PUT /metadata/{user_id}` and debounced ~2.4s. Read
 * here so a spec can prove a favourite outlived the page.
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
 * Set the user's favourite parking spaces, leaving every other setting alone.
 *
 * ## The key is `favourite_parking_spaces`
 *
 * Not `favourite_parking`. Both names exist in the codebase:
 * `parking-select-modal.component.ts` exports `FAV_PARKING_KEY =
 * 'favourite_parking_spaces'` and is what actually reads and writes the setting,
 * while `libs/common/src/lib/constants.ts` carries
 * `FAVORITE_PARKING_SPACES: 'favourite_parking'`. Nothing reads the constant, so
 * it is dead rather than broken — but a future feature that trusts it would see
 * no favourites, and this spec asserting on the wrong one cost a run.
 *
 * Read-modify-write, because the app PUTs the WHOLE settings blob: a PUT
 * carrying only this key would wipe the visitor specs' invitee list and the
 * other areas' favourites, which share this object.
 */
export const FAVOURITE_PARKING_KEY = 'favourite_parking_spaces';

export async function setFavouriteParking(
    api: APIRequestContext,
    ids: string[],
): Promise<void> {
    const me = await currentUser(api);
    const details = await readUserSettings(api);
    const res = await api.put(`${ENGINE_API}/metadata/${me.id}`, {
        data: {
            name: 'settings',
            description: '',
            details: { ...details, favourite_parking_spaces: ids },
        },
    });
    if (!res.ok()) {
        throw new Error(
            `write favourite_parking failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
}

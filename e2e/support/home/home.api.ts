/**
 * Backend helpers for the HOME PAGE specs.
 *
 * Creating a booking, and reading or clearing the user settings the page's
 * sidebar is built from (colleagues and favourites). Both duplicated rather than
 * imported from another area, for the reason every one of these folders repeats:
 * a shared file is the thing that could break all of them at once.
 *
 * The REG-09 guards are here too — the retry, and reading the row back, because
 * a 201 with an id is not proof the row exists. The check itself is `isReg09`
 * in `../api.ts`.
 */
import { APIRequestContext } from '@playwright/test';
import {
    Booking,
    ENGINE_API,
    STAFF_API,
    currentUser,
    deleteBooking,
    isReg09,
    listBookings,
    readBack,
    zonesWithTag,
} from '../api';

/** Create a booking of any type, as the signed-in user. */
export async function createBookingViaApi(
    api: APIRequestContext,
    options: {
        type: string;
        asset_id: string;
        asset_name?: string;
        title: string;
        start: number;
        end: number;
    },
): Promise<Booking> {
    const me = await currentUser(api);
    const zones = (
        await Promise.all(['org', 'building', 'level'].map((t) => zonesWithTag(api, t)))
    )
        .flat()
        .map((z) => z.id);

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
        zones,
    };

    let last = '';
    for (let attempt = 1; attempt <= 4; attempt++) {
        const res = await api.post(`${STAFF_API}/bookings`, { data });
        const body = await res.text();
        if (res.ok()) {
            const created = JSON.parse(body);
            if ((await readBack(api, created.id)) !== 'missing') return created;
            last = `HTTP 201 for booking ${created.id}, which then 404s`;
            console.warn(`  ! phantom 201 on attempt ${attempt}/4 — ${last}`);
            await new Promise((r) => setTimeout(r, 400 * attempt));
            continue;
        }
        last = `HTTP ${res.status()} ${body.slice(0, 200)}`;
        if (!isReg09(res.status(), body)) {
            throw new Error(
                `create ${options.type} booking failed: ${last}. A 409 means the asset ` +
                    `is already held for that window — check the spec swept first, and ` +
                    `that two spec files are not sharing a slot (see HOME_SLOTS).`,
            );
        }
        console.warn(`  ! concurrent-write failure on attempt ${attempt}/4 — ${last}`);
        await new Promise((r) => setTimeout(r, 400 * attempt));
    }
    throw new Error(`create ${options.type} booking still failing after 4 attempts. Last: ${last}`);
}

/** The signed-in user's own settings blob. */
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
 * Write one key of the user's settings, leaving the rest alone.
 *
 * Read-modify-write, because the app PUTs the WHOLE blob: a PUT carrying one key
 * would wipe the visitor specs' invitee list and every other area's favourites,
 * which share this object.
 */
export async function setUserSetting(
    api: APIRequestContext,
    key: string,
    value: unknown,
): Promise<void> {
    const me = await currentUser(api);
    const details = await readUserSettings(api);
    const res = await api.put(`${ENGINE_API}/metadata/${me.id}`, {
        data: {
            name: 'settings',
            description: '',
            details: { ...details, [key]: value },
        },
    });
    if (!res.ok()) {
        throw new Error(`write ${key} failed: HTTP ${res.status()} ${await res.text()}`);
    }
}

/** The key the app stores favourite desks under, inside `settings`. */
export const FAVOURITE_DESKS_KEY = 'favourite_desks';

/**
 * The colleague list is its OWN metadata document, not a key inside `settings`.
 *
 * `landing-state.service.ts` reads `showMetadata(user.id, 'contacts')` and
 * writes `updateMetadata(user.id, { name: 'contacts', details: users })` — a
 * whole document called `contacts`, holding an array of user objects.
 *
 * Worth writing down because `libs/common/src/lib/constants.ts` also carries
 * `FAVORITE_TEAM_MEMBERS: 'favourite_team_members'`, which looks exactly like
 * the right thing and is not what this page uses. A first draft of the
 * colleagues spec asserted on that key and failed twice: the add saved nothing
 * under it, and a colleague seeded under it was not listed.
 */
export const CONTACTS_DOC = 'contacts';

/** The user's saved colleagues. */
export async function readContacts(
    api: APIRequestContext,
): Promise<{ email: string; name?: string }[]> {
    const me = await currentUser(api);
    const res = await api.get(`${ENGINE_API}/metadata/${me.id}`, {
        params: { name: CONTACTS_DOC },
    });
    if (!res.ok()) {
        throw new Error(`read contacts failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    const details = body?.[CONTACTS_DOC]?.details;
    return Array.isArray(details) ? details : [];
}

/**
 * Set the user's saved colleagues.
 *
 * Its own document, so unlike the `settings` blob this can be written wholesale
 * without trampling another area's data.
 */
export async function setContacts(
    api: APIRequestContext,
    users: { email: string; name?: string }[],
): Promise<void> {
    const me = await currentUser(api);
    const res = await api.put(`${ENGINE_API}/metadata/${me.id}`, {
        data: {
            name: CONTACTS_DOC,
            description: 'Contacts for the User',
            details: users,
        },
    });
    if (!res.ok()) {
        throw new Error(`write contacts failed: HTTP ${res.status()} ${await res.text()}`);
    }
}

/** Booking types that the next-booking card of the home page can show. */
const CARD_TYPES = ['desk', 'room', 'visitor', 'parking', 'locker'];

/** Today, in local time, as a unix-second window. */
export function todayBounds() {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const from = Math.floor(start.valueOf() / 1000);
    return { from, to: from + 86_399 };
}

/** Is this moment still today, locally? The home page shows today and nothing else. */
export function stillToday(unix_seconds: number): boolean {
    return new Date(unix_seconds * 1000).toDateString() === new Date().toDateString();
}

/**
 * A window that is in progress now, so that the home page shows it at once.
 * The start does not go back past midnight: the page lists a booking by the
 * day it starts on.
 */
export function inProgressSlot() {
    const now = Math.floor(Date.now() / 1000);
    const start = Math.max(now - 5 * 60, todayBounds().from);
    return { start, end: start + 3600 };
}

/**
 * Delete every booking that the signed-in user has today.
 *
 * The next-booking card shows the FIRST booking that the user has today,
 * whatever its type, so a spec about the card must start from an empty day.
 *
 * RULE for a parallel run: no spec may make a booking of TODAY for the user
 * of a different worker. This sweep would delete that booking under the other
 * test, and that booking would show on the card of this worker. A spec that
 * books for the user of another worker books a later day, as
 * `visitor-delegate.spec.ts` does.
 *
 * A listing that fails throws. A sweep that did not run is not a clear day.
 */
export async function clearToday(api: APIRequestContext): Promise<void> {
    const { from, to } = todayBounds();
    for (const type of CARD_TYPES) {
        const bookings = await listBookings(api, type, from, to);
        for (const booking of bookings) {
            if (!booking.deleted) await deleteBooking(api, booking.id);
        }
    }
}

/**
 * Backend helpers for the HOME PAGE specs.
 *
 * Creating a booking, and reading or clearing the user settings the page's
 * sidebar is built from (colleagues and favourites). Both duplicated rather than
 * imported from another area, for the reason every one of these folders repeats:
 * a shared file is the thing that could break all of them at once.
 *
 * The REG-09 guards are here too — the retry, and reading the row back, because
 * a 201 with an id is not proof the row exists.
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
            if (await persisted(api, created.id)) return created;
            last = `HTTP 201 for booking ${created.id}, which then 404s`;
            console.warn(`  ! phantom 201 on attempt ${attempt}/4 — ${last}`);
            await new Promise((r) => setTimeout(r, 400 * attempt));
            continue;
        }
        last = `HTTP ${res.status()} ${body.slice(0, 200)}`;
        if (!isConcurrentWriteFailure(res.status(), body)) {
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

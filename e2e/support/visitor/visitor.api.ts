/**
 * Backend helpers specific to visitor invites: guest records, and a sweep that
 * understands them.
 *
 * Kept out of `e2e/support/api.ts` so the desk specs' helpers stay untouched.
 * The generic pieces this builds on (`listBookings`, `deleteBooking`,
 * `STAFF_API`) are imported from there rather than duplicated.
 */
import { APIRequestContext } from '@playwright/test';
import { Booking, STAFF_API, deleteBooking, listBookings } from '../api';

/**
 * A booking as the visitor flows deal with it.
 *
 * `Booking` in `../api` carries an index signature, so these fields are already
 * reachable — but as `unknown`, which means a spec cannot read
 * `extension_data.group` without a cast and a reader cannot tell which extra
 * fields matter. Naming the ones the visitor specs rely on is the difference
 * between a typed assertion and a hopeful one.
 */
export interface VisitorBooking extends Booking {
    /** Set on a group member, pointing at its container booking. */
    parent_id?: string;
    /** Who created the booking — differs from `user_email` on a delegated invite. */
    booked_by_email?: string;
    booked_by_name?: string;
    /** Carries `group`, `group_members`, `group_resource_type` on a container. */
    extension_data?: Record<string, any>;
    checked_in?: boolean;
    all_day?: boolean;
}

export interface Guest {
    id: number;
    email: string;
    name?: string;
    checked_in?: boolean;
    visit_expected?: boolean;
    [k: string]: unknown;
}

/**
 * Guests matching a search term.
 *
 * A guest row is created by staff-api from a booking's `attendees`, NOT from
 * `asset_id` — an invite posted without attendees creates the booking and no
 * guest. The UI always sends attendees, so a real invite does create one, but
 * an API-only fixture will not unless it says so.
 *
 * `q` is the filter that works without a period; the windowed form
 * (`period_start`/`period_end`) lists guests expected in that window instead.
 */
export async function searchGuests(api: APIRequestContext, q: string): Promise<Guest[]> {
    const res = await api.get(`${STAFF_API}/guests`, { params: { q } });
    if (!res.ok()) {
        throw new Error(`GET /guests?q=${q} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return Array.isArray(body) ? body : (body.results ?? []);
}

/**
 * Is this response REG-09 (PPT-2642) rather than a real rejection?
 *
 * Two signatures, both produced by the same poisoned connection. The 400 is the
 * confusing one — it claims the request body was empty when it was not.
 * `e2e/support/repro/vis-b6-burst.ts` reproduces both with no browser involved.
 *
 * Deliberately narrow. Matching on the status alone would swallow genuine 400s
 * and 500s, and a suite that retries real failures is worse than no suite.
 */
export function isReg09(status: number, body: string): boolean {
    if (status === 400 && /Expected BeginObject but was EOF/.test(body)) return true;
    if (status === 500 && /could not serialize access/.test(body)) return true;
    return false;
}

/**
 * Create a booking through the API, retrying past REG-09.
 *
 * Specs whose subject is authorisation or listing behaviour create their data
 * this way rather than through the form. They still meet REG-09, because the
 * bug is in the backend's connection handling and does not care how the request
 * was produced — so without this a scoping spec fails for a reason that has
 * nothing to do with scoping.
 *
 * Remove once the stack runs a staff-api built on pg-orm >= 2.2.4.
 */
export async function createBookingViaApi(
    api: APIRequestContext,
    data: Record<string, unknown>,
    attempts = 4,
): Promise<VisitorBooking> {
    let last = '';
    for (let attempt = 1; attempt <= attempts; attempt++) {
        const res = await api.post(`${STAFF_API}/bookings`, { data });
        const body = await res.text();
        if (res.ok()) return JSON.parse(body) as VisitorBooking;

        last = `HTTP ${res.status()} ${body.slice(0, 200)}`;
        if (!isReg09(res.status(), body)) {
            throw new Error(`POST /bookings failed: ${last}`);
        }
        console.warn(`  ! REG-09 on attempt ${attempt}/${attempts}, retrying — ${last}`);
        // A short pause lets the poisoned connection cycle out of the pool.
        await new Promise((r) => setTimeout(r, 400 * attempt));
    }
    throw new Error(
        `POST /bookings still failing after ${attempts} attempts. If every attempt is ` +
            `REG-09 (PPT-2642), the stack is running a staff-api older than pg-orm 2.2.4. ` +
            `Last: ${last}`,
    );
}

/**
 * Attempt a check-in directly, returning the raw outcome rather than throwing.
 *
 * Specs use this to prove the BACKEND enforces the timing rule independently of
 * the UI. The app hides its check-in button until a booking is within 15 minutes
 * of starting (`Booking.state`), so a UI-only assertion would pass even if the
 * server happily accepted a check-in a week early.
 */
export async function checkInViaApi(
    api: APIRequestContext,
    id: number,
    state = true,
): Promise<{ status: number; body: string }> {
    const res = await api.post(`${STAFF_API}/bookings/${id}/check_in?state=${state}`);
    return { status: res.status(), body: await res.text() };
}

/** Best-effort guest removal — never throws, so teardown cannot fail a passing test. */
export async function deleteGuest(api: APIRequestContext, email: string): Promise<void> {
    try {
        await api.delete(`${STAFF_API}/guests/${encodeURIComponent(email)}`);
    } catch {
        /* swallow: teardown must not mask the actual result */
    }
}

/**
 * Free a visitor address before using it: delete its live bookings in the
 * window AND its guest record.
 *
 * Two differences from the desks' `releaseAsset`, both found by probing the
 * backend rather than assumed:
 *
 *  - A guest row OUTLIVES its booking. Deleting the booking leaves the guest
 *    behind, so a sweep that only removes bookings lets guest state accumulate
 *    across runs and makes "was a guest created?" pass on last run's data.
 *  - A visitor is not exclusive, so a leftover booking does not BLOCK the next
 *    run the way a leaked all-day desk booking does. It still pollutes the
 *    listing, which is what turns a scoping assertion into a confusing failure.
 */
export async function releaseVisitor(
    api: APIRequestContext,
    email: string,
    from: number,
    to: number,
): Promise<number> {
    let removed = 0;
    try {
        const existing = await listBookings(api, 'visitor', from, to);
        for (const b of existing) {
            if (b.asset_id === email && !b.deleted) {
                await deleteBooking(api, b.id);
                removed++;
            }
        }
    } catch {
        /* a sweep that cannot run must not fail the test it is protecting */
    }
    await deleteGuest(api, email);
    return removed;
}

/**
 * Delete any group CONTAINER bookings this user owns in the window.
 *
 * Containers are `booking_type: 'group'`, so `releaseVisitor` — which lists
 * `type=visitor` — cannot see them. A run that dies between creating the
 * container and creating its members leaves an orphan behind (VIS-B7), and
 * without this the orphans accumulate silently.
 */
export async function releaseGroupContainers(
    api: APIRequestContext,
    from: number,
    to: number,
): Promise<number> {
    let removed = 0;
    try {
        const existing = await listBookings(api, 'group', from, to);
        for (const b of existing) {
            if (!b.deleted) {
                await deleteBooking(api, b.id);
                removed++;
            }
        }
    } catch {
        /* a sweep that cannot run must not fail the test it is protecting */
    }
    return removed;
}

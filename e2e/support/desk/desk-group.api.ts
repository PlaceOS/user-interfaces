/** Independent actor contexts for group ownership checks; auth comes from env.ts. */
import { expect, request, type APIRequestContext } from '@playwright/test';
import { STAFF_API, currentUser, type Booking } from '../api';
import { buildStorageState, mintToken } from '../auth';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../env';

/** Playwright request errors include bearer headers in their call logs. */
export function groupCleanupError(error: unknown): string {
    const message = error instanceof Error ? error.message : String(error);
    return message
        .split('\nCall log:')[0]
        .replace(/Bearer\s+\S+/g, 'Bearer [redacted]');
}

export async function groupActorApi(actor: {
    email: string;
    password: string;
}) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const token = await mintToken(
        BACKEND_URL,
        APP_URL,
        actor.email,
        actor.password,
    );
    const api = await request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${token.accessToken}` },
    });
    try {
        const user = await currentUser(api);
        expect(user.email.toLowerCase()).toBe(actor.email.toLowerCase());
        expect(!!user.sys_admin || !!user.support).toBe(false);
        return {
            api,
            state: buildStorageState(token, APP_URL),
            email: actor.email,
        };
    } catch (error) {
        await api.dispose();
        throw error;
    }
}

/** Query only the dedicated caller's records; never sweep shared seeded users. */
export async function groupActorBookings(
    api: APIRequestContext,
    start: number,
    end: number,
) {
    const bookings: Booking[] = [];
    for (const type of ['desk', 'group']) {
        const response = await api.get(`${STAFF_API}/bookings`, {
            params: {
                type,
                period_start: start,
                period_end: end,
                include_checked_out: true,
                limit: 1000,
            },
        });
        expect(response.ok(), `List owned ${type} bookings`).toBe(true);
        const data = await response.json();
        const rows: Booking[] = Array.isArray(data) ? data : data.results;
        expect(
            rows.length,
            'Dedicated user query must not be truncated',
        ).toBeLessThan(1000);
        bookings.push(...rows.filter((booking) => !booking.deleted));
    }
    return bookings;
}

/** Fail teardown visibly if a test-owned booking survives cancellation. */
export async function removeGroupBooking(api: APIRequestContext, id: number) {
    const response = await api.delete(`${STAFF_API}/bookings/${id}`);
    expect(response.ok() || response.status() === 404).toBe(true);
    await expect
        .poll(async () => {
            const saved = await api.get(`${STAFF_API}/bookings/${id}`);
            if (saved.status() === 404) return true;
            expect(saved.ok()).toBe(true);
            return (await saved.json()).deleted === true;
        })
        .toBe(true);
}

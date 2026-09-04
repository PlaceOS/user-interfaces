/**
 * Backend helpers for deterministic setup/teardown and for asserting state
 * directly rather than only through UI text. Specs should create and clean up
 * their own data through these.
 */
import * as fs from 'fs';
import { request as pwRequest, APIRequestContext } from '@playwright/test';
import { BACKEND_URL, RoleName, roleFor } from './env';

export const ENGINE_API = '/api/engine/v2';
export const STAFF_API = '/api/staff/v1';

/** Read the raw bearer a worker's auth fixture wrote for a role. */
export function readToken(role: RoleName, workerIndex = 0): string {
    const { tokenPath } = roleFor(role, workerIndex);
    if (!fs.existsSync(tokenPath)) {
        throw new Error(
            `No auth token for "${role}" (worker ${workerIndex}) at ${tokenPath}. ` +
                `Use the fixtures from e2e/support/fixtures.ts — they mint per worker.`,
        );
    }
    const { accessToken } = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
    if (!accessToken) throw new Error(`Token file ${tokenPath} has no accessToken.`);
    return accessToken;
}

/** An APIRequestContext authenticated as the given role, pointed at the backend. */
export async function apiFor(role: RoleName, workerIndex = 0): Promise<APIRequestContext> {
    return pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${readToken(role, workerIndex)}` },
    });
}

export interface CurrentUser {
    id: string;
    email: string;
    name?: string;
    sys_admin?: boolean;
    support?: boolean;
    [k: string]: unknown;
}

export async function currentUser(api: APIRequestContext): Promise<CurrentUser> {
    const res = await api.get(`${ENGINE_API}/users/current`);
    if (!res.ok()) {
        throw new Error(`GET /users/current failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return res.json();
}

export interface Zone {
    id: string;
    name: string;
    tags: string[];
    parent_id?: string;
    [k: string]: unknown;
}

/** Zones by tag — the org hierarchy workplace's OrganisationService walks. */
export async function zonesWithTag(api: APIRequestContext, tag: string): Promise<Zone[]> {
    const res = await api.get(`${ENGINE_API}/zones`, { params: { tags: tag, limit: 500 } });
    if (!res.ok()) {
        throw new Error(`GET /zones?tags=${tag} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return Array.isArray(body) ? body : (body.results ?? []);
}

export interface Booking {
    id: number;
    booking_type: string;
    asset_id: string;
    booking_start: number;
    booking_end: number;
    title: string;
    user_email: string;
    approved: boolean;
    rejected: boolean;
    deleted?: boolean;
    zones: string[];
    [k: string]: unknown;
}

/**
 * Bookings of a type in a window.
 *
 * The query parameter is `type`, NOT `booking_type` — the latter is the model
 * field name and the controller's internal PARAMS list, which makes the source
 * misleading. staff-api rejects the request with a 422 "missing required
 * parameter 'type'" otherwise. Both the window and the type are mandatory; there
 * is no "list everything" form.
 */
export async function listBookings(
    api: APIRequestContext,
    type: string,
    from: number,
    to: number,
): Promise<Booking[]> {
    const res = await api.get(`${STAFF_API}/bookings`, {
        params: {
            type,
            period_start: String(from),
            period_end: String(to),
            include_checked_out: 'true',
        },
    });
    if (!res.ok()) {
        throw new Error(`GET /bookings failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return Array.isArray(body) ? body : (body.results ?? []);
}

export async function getBooking(api: APIRequestContext, id: number): Promise<Booking> {
    const res = await api.get(`${STAFF_API}/bookings/${id}`);
    if (!res.ok()) {
        throw new Error(`GET /bookings/${id} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return res.json();
}

/** Best-effort cleanup — never throws, so teardown cannot fail a passing test. */
export async function deleteBooking(api: APIRequestContext, id: number): Promise<void> {
    try {
        await api.delete(`${STAFF_API}/bookings/${id}`);
    } catch {
        /* swallow: teardown must not mask the actual result */
    }
}

/**
 * Free an asset before using it: delete every live booking against `asset_id` in
 * the window.
 *
 * A post-test `finally` sweep is not enough on its own. If a run dies between
 * creating a booking and cleaning it up — a crash, a timeout, someone hitting
 * ctrl-c — the leftover holds the asset, and for an all-day booking that blocks
 * it for the rest of the day. Every subsequent run then fails with something that
 * looks nothing like the cause ("desk not offered", a 422 with no failures
 * listed). Sweeping FIRST makes a spec recover from its own past failures instead
 * of inheriting them.
 */
export async function releaseAsset(
    api: APIRequestContext,
    type: string,
    asset_id: string,
    from: number,
    to: number,
): Promise<number> {
    let removed = 0;
    try {
        const existing = await listBookings(api, type, from, to);
        for (const b of existing) {
            if (b.asset_id === asset_id && !b.deleted) {
                await deleteBooking(api, b.id);
                removed++;
            }
        }
    } catch {
        /* a sweep that cannot run must not fail the test it is protecting */
    }
    return removed;
}

/** A title guaranteed unique per run so specs never collide on shared state. */
export function uniqueTitle(prefix = 'E2E'): string {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const rand = Math.random().toString(36).slice(2, 7);
    return `${prefix} ${stamp} ${rand}`;
}

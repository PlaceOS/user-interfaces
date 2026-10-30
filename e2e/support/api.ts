/**
 * Backend helpers for deterministic setup/teardown and for asserting state
 * directly rather than only through UI text. Specs should create and clean up
 * their own data through these.
 */
import * as fs from 'fs';
import { request as pwRequest, APIRequestContext } from '@playwright/test';
import { APP_URL, AUTH_DIR, BACKEND_URL, RoleName, assertLocalOnly, roleFor } from './env';
import { buildStorageState, mintToken } from './auth';

export const ENGINE_API = '/api/engine/v2';
export const STAFF_API = '/api/staff/v1';

/** The rows of a listing, which is either a bare array or `{ results }`. */
export function asList<T>(body: unknown): T[] {
    if (Array.isArray(body)) return body;
    return (body as { results?: T[] } | null)?.results ?? [];
}

/** Does this error body mean "the row is already there"? */
export function alreadyExists(body: string): boolean {
    return /already (exists|taken)|has already been taken|must be unique|should be unique|duplicate/i.test(
        body,
    );
}

/** GET a JSON body, or throw with the status and body. */
export async function getJson(
    api: APIRequestContext,
    path: string,
    params?: Record<string, string>,
) {
    const res = await api.get(path, { params });
    if (!res.ok()) throw new Error(`GET ${path} failed: HTTP ${res.status()} ${await res.text()}`);
    return res.json();
}

/** The bearer in a role's token sidecar, or null when there is no usable file. */
function storedToken(role: RoleName, workerIndex: number): string | null {
    const { tokenPath } = roleFor(role, workerIndex);
    if (!fs.existsSync(tokenPath)) return null;
    try {
        const { accessToken } = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
        return typeof accessToken === 'string' && accessToken ? accessToken : null;
    } catch {
        return null;
    }
}

/** Write a file in one step, so a reader in another worker never sees part of it. */
function writeAtomic(file: string, content: string): void {
    const tmp = `${file}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, content);
    fs.renameSync(tmp, file);
}

/** The user behind a bearer, or null when the backend does not accept it or cannot be reached. */
async function userBehind(token: string): Promise<CurrentUser | null> {
    const api = await pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${token}` },
    });
    try {
        const res = await api.get(`${ENGINE_API}/users/current`);
        return res.ok() ? await res.json() : null;
    } catch {
        return null;
    } finally {
        await api.dispose();
    }
}

/**
 * Throws when a `staff` role turns out to be admin or support: a permission
 * assertion made as that user passes whether or not the check works.
 */
function assertRoleFits(role: RoleName, email: string, user: CurrentUser): void {
    if (role === 'staff' && (user.sys_admin || user.support)) {
        throw new Error(
            `${email} is admin/support — permission checks would be bypassed, making ` +
                `any gating assertion vacuous. Re-run e2e/support/seed.ts.`,
        );
    }
}

/**
 * Mint a bearer for a role on a worker and write its storageState and token
 * sidecar under `AUTH_DIR`. Throws when the backend rejects the new token or
 * the role does not fit the user (`assertRoleFits`).
 */
export async function mintForWorker(role: RoleName, workerIndex: number) {
    assertLocalOnly(BACKEND_URL, APP_URL);
    const r = roleFor(role, workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, r.email, r.password);

    const user = await userBehind(mint.accessToken);
    if (!user) {
        throw new Error(`minted token for ${r.email} was rejected by rest-api`);
    }
    assertRoleFits(role, r.email, user);

    fs.mkdirSync(AUTH_DIR, { recursive: true });
    writeAtomic(r.storagePath, JSON.stringify(buildStorageState(mint, APP_URL), null, 2));
    writeAtomic(
        r.tokenPath,
        JSON.stringify(
            {
                accessToken: mint.accessToken,
                refreshToken: mint.refreshToken,
                clientId: mint.clientId,
                redirectUri: mint.redirectUri,
                expiresIn: mint.expiresIn,
            },
            null,
            2,
        ),
    );
    return { role: r, mint };
}

const validated = new Map<string, Promise<string>>();

/**
 * A bearer for a role on a worker: the one in its token sidecar while the
 * backend still accepts it, otherwise a freshly minted one. Checked once per
 * process for each role and worker. Safe to call from any worker, before or
 * after the fixtures have minted for that role.
 */
export function tokenFor(role: RoleName, workerIndex = 0): Promise<string> {
    const key = `${role}:${workerIndex}`;
    let pending = validated.get(key);
    if (!pending) {
        pending = (async () => {
            const stored = storedToken(role, workerIndex);
            const user = stored ? await userBehind(stored) : null;
            if (stored && user) {
                assertRoleFits(role, roleFor(role, workerIndex).email, user);
                return stored;
            }
            return (await mintForWorker(role, workerIndex)).mint.accessToken;
        })();
        validated.set(key, pending);
        pending.catch(() => validated.delete(key));
    }
    return pending;
}

/** An APIRequestContext authenticated as the given role, pointed at the backend. */
export async function apiFor(role: RoleName, workerIndex = 0): Promise<APIRequestContext> {
    return pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${await tokenFor(role, workerIndex)}` },
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
    display_name?: string;
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

/**
 * Read a booking back after `POST /bookings` answered 201.
 *
 * `missing` is a 404: the row was never committed (REG-09 / PPT-2642, a COMMIT
 * that fails on a dirty connection after the response is written). `unknown`
 * means the read itself failed on every try, so nothing is known either way.
 * The read-back, and the create retry built on it, can go once every stack
 * runs a staff-api built on pg-orm 2.2.4 or later.
 */
export async function readBack(
    api: APIRequestContext,
    id: number,
): Promise<'persisted' | 'missing' | 'unknown'> {
    let last = '';
    for (let attempt = 1; attempt <= 3; attempt++) {
        if (attempt > 1) await new Promise((r) => setTimeout(r, 300 * attempt));
        const res = await api.get(`${STAFF_API}/bookings/${id}`);
        if (res.ok()) return 'persisted';
        if (res.status() === 404) return 'missing';
        last = `HTTP ${res.status()}`;
    }
    console.warn(
        `  ! booking ${id}: 201 on create, but reading it back failed 3 times (${last}); ` +
            `treating it as created so the caller can clean it up`,
    );
    return 'unknown';
}

/**
 * Is this response REG-09 (PPT-2642) and not a real rejection?
 *
 * A burst of booking writes poisons a staff-api connection, and the request
 * that lands on it fails for a reason unrelated to what was sent. It has three
 * signatures:
 *
 *   400 "Expected BeginObject but was EOF" — says the body was empty. It was not.
 *   500 "could not serialize access"
 *   422 {"error":"error validating booking data","failures":[]}
 *
 * The 422 is not proof on its own. A real validation error names the field it
 * refuses, but an asset held by a leftover booking also answers 422 with an
 * empty `failures` list (`e2e/README.md`). Every caller bounds its retries, so
 * a real refusal still fails the test, only later.
 *
 * Deliberately narrow. Matching on the status alone would swallow genuine 400s
 * and 500s, and a suite that retries real failures is worse than no suite.
 * `e2e/support/repro/vis-b6-burst.ts` reproduces the first two signatures with
 * no browser.
 *
 * Delete this, and each retry that calls it, once the stack runs a staff-api
 * built on pg-orm >= 2.2.4. A green run is not evidence that the image is fixed.
 */
export function isReg09(status: number, body: string): boolean {
    if (status === 400 && /Expected BeginObject but was EOF/.test(body)) return true;
    if (status === 500 && /could not serialize access/.test(body)) return true;
    if (status === 422 && /"failures"\s*:\s*\[\s*\]/.test(body)) return true;
    return false;
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

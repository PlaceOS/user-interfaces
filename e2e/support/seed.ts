/**
 * Idempotent, API-driven seeding of the local stack.
 *
 * Everything here goes through the real API rather than SQL: seeding straight
 * into Postgres bypasses model validation, callbacks and derived columns (e.g.
 * rest-api looks users up by `email_digest = MD5(lower(email))`, not `email`),
 * which produces rows that look right and behave wrong.
 *
 * Bootstrap order matters. Minting a token needs a registered OAuth application,
 * but registering one needs a token — so we bootstrap through the `backoffice`
 * application, which `init` always creates when the stack is first started
 * (init/src/tasks/initialization.cr:38-42), and use that token to register
 * everything else.
 *
 * Safe to re-run: every step is an upsert keyed on a natural identifier.
 */
import { request as pwRequest, APIRequestContext } from '@playwright/test';
import {
    APP_URL,
    BACKEND_URL,
    DESK_PREFIX,
    Role,
    WORKERS,
    assertLocalOnly,
    roleFor,
    staffEmail,
} from './env';
import { mintToken, clientId, redirectUriFor } from './auth';
import { ENGINE_API, STAFF_API, alreadyExists, getJson as json } from './api';
import { describeDrivers, ensureDrivers } from './drivers/drivers.seed';
import { CALENDAR_ENABLED, CALENDAR_TENANT_NAME, O365 } from './calendar/calendar.env';

/** The app `init` guarantees exists — our way in before anything else is registered. */
const BOOTSTRAP_APP_URL = `${BACKEND_URL}/backoffice`;

export async function adminApi(): Promise<APIRequestContext> {
    const admin = roleFor('admin');
    const mint = await mintToken(BACKEND_URL, BOOTSTRAP_APP_URL, admin.email, admin.password);
    return pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

/**
 * The authority (domain) this stack serves.
 *
 * Polls, because `/domains` is SEARCH-backed: on a cold stack the row exists in
 * Postgres the moment `init` finishes, but the API reads it out of Elasticsearch
 * and returns an empty list until search-ingest has indexed it. Failing here
 * immediately is the single most likely way a CI run breaks, and the error looks
 * nothing like the cause.
 */
async function authority(api: APIRequestContext, timeoutMs = 90_000) {
    const deadline = Date.now() + timeoutMs;
    let last: unknown[] = [];
    for (;;) {
        const domains = await json(api, `${ENGINE_API}/domains`);
        last = Array.isArray(domains) ? domains : (domains.results ?? []);
        if (last.length) return last[0] as { id: string };
        if (Date.now() > deadline) {
            throw new Error(
                `no authority visible via ${ENGINE_API}/domains after ${timeoutMs / 1000}s.\n` +
                    `The row is created by \`init start\`, but this endpoint is served from ` +
                    `Elasticsearch — check that search-ingest is running and has built its ` +
                    `indices (docker compose logs search-ingest).`,
            );
        }
        await new Promise((r) => setTimeout(r, 2000));
    }
}

/**
 * Register an OAuth application for the SPA's redirect_uri.
 * ts-client derives `client_id = Md5(redirect_uri)` at runtime, so authorize
 * only succeeds if a row exists whose `uid` is exactly that hash. Under
 * `nx serve` the app origin is the dev server, NOT the stack, so this is a
 * different application from the deployed one.
 */
async function ensureOAuthApp(api: APIRequestContext, appUrl: string, name: string) {
    const redirect_uri = redirectUriFor(appUrl);
    const uid = clientId(redirect_uri);

    const existing = await json(api, `${ENGINE_API}/oauth_apps`, { limit: '500' });
    const list = Array.isArray(existing) ? existing : (existing.results ?? []);
    if (list.some((a: { uid?: string }) => a.uid === uid)) {
        return { uid, redirect_uri, created: false };
    }

    const owner_id = (await authority(api)).id;
    const res = await api.post(`${ENGINE_API}/oauth_apps`, {
        data: { name, redirect_uri, scopes: 'public', owner_id, confidential: false },
    });
    if (!res.ok()) {
        const body = await res.text();
        // The existence check above reads from Elasticsearch, so a seed re-run
        // within a second or two of the first can miss a row that Postgres
        // already has. A uniqueness rejection means it is there — not an error.
        if (alreadyExists(body)) return { uid, redirect_uri, created: false };
        throw new Error(`create oauth_app failed: HTTP ${res.status()} ${body}`);
    }
    return { uid, redirect_uri, created: true };
}

/**
 * Make the authority's `login_url` absolute.
 *
 * A freshly-initialised authority gets a RELATIVE `/login?continue={{url}}`.
 * ts-client resolves a relative login_url against the authority's `domain`
 * column — which stores a bare host with no port (`localhost`) — and prepends
 * `location.protocol`. On any deployment that is not on the default port that
 * produces a dead URL: here, `http://localhost/login` → ERR_CONNECTION_REFUSED,
 * and the app dead-ends on a browser error page instead of a login form.
 *
 * A long-lived local stack usually has an absolute value already and so never
 * shows this. It only appears on a cold start — which is the whole reason to
 * test against one.
 */
async function ensureAbsoluteLoginUrl(api: APIRequestContext) {
    const auth = (await authority(api)) as { id: string; login_url?: string };
    const current = auth.login_url ?? '';
    if (/^https?:\/\//i.test(current)) return { login_url: current, changed: false };

    const login_url = `${BACKEND_URL}/login?continue={{url}}`;
    const res = await api.patch(`${ENGINE_API}/domains/${auth.id}`, { data: { login_url } });
    if (!res.ok()) {
        throw new Error(`patch domain login_url failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return { login_url, changed: true };
}

/**
 * staff-api refuses EVERY /bookings and /events call with
 * "domain does not have a tenant configured" until a tenant row exists for the
 * request hostname (staff-api/src/controllers/utilities/multi_tenant.cr).
 *
 * The credentials below are deliberately PLACEHOLDERS. They are only ever
 * dereferenced when staff-api instantiates a PlaceCalendar client, which happens
 * for the calendar-backed routes (/calendars, /events) and nothing else — so a
 * placeholder tenant unblocks the whole PlaceOS-native booking surface (desks,
 * lockers, parking, visitors) with ZERO external calls. That is what keeps this
 * suite genuinely local. Real credentials are opt-in through the `E2E_O365_*`
 * variables (`e2e/support/calendar/calendar.env.ts`); with them the row is
 * app-only (no delegated access, no service account) so staff-api acts as the
 * signed-in user, and is named `CALENDAR_TENANT_NAME` so specs can tell.
 *
 * An existing row is always re-sent. Credentials are never returned, so there is
 * no way to see what it holds, and a stack reused after a calendar run must go
 * back to placeholders rather than keep calling Microsoft.
 */
async function ensureTenant(api: APIRequestContext) {
    const domain = new URL(BACKEND_URL).hostname;
    const row = {
        domain,
        platform: 'office365',
        delegated: false,
        ...(CALENDAR_ENABLED
            ? { name: CALENDAR_TENANT_NAME, credentials: O365 }
            : {
                  name: 'E2E Local',
                  credentials: {
                      tenant: 'e2e-local-placeholder',
                      client_id: 'e2e-local-placeholder',
                      client_secret: 'e2e-local-placeholder',
                  },
              }),
    };
    const existing = await json(api, `${STAFF_API}/tenants`);
    const list = Array.isArray(existing) ? existing : (existing.results ?? []);
    const found = list.find((t: { domain?: string }) => t.domain === domain);
    // staff-api encrypts the credentials on save.
    const res = found
        ? await api.put(`${STAFF_API}/tenants/${found.id}`, { data: { ...found, ...row } })
        : await api.post(`${STAFF_API}/tenants`, { data: row });
    if (!res.ok()) {
        throw new Error(
            `${found ? 'update' : 'create'} tenant failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return { domain, created: !found };
}

/**
 * Create a local user, or bring an existing one back in line. Keyed on email.
 *
 * A reused stack keeps its users between seeds, so an existing user gets the
 * role's password and `fields` again: a changed password or a missing sys_admin
 * would otherwise leave a user the suite cannot sign in as. Returns whether the
 * user was created.
 */
async function ensureUser(
    api: APIRequestContext,
    role: Role,
    authority_id: string,
    fields: { name: string; sys_admin: boolean },
): Promise<boolean> {
    const data = { ...fields, password: role.password, support: false };
    const found = await json(api, `${ENGINE_API}/users`, { q: role.email, limit: '50' });
    const list = Array.isArray(found) ? found : (found.results ?? []);
    const user = list.find(
        (u: { email?: string }) => u.email?.toLowerCase() === role.email.toLowerCase(),
    );
    if (user) {
        const res = await api.patch(`${ENGINE_API}/users/${user.id}`, { data });
        if (!res.ok()) {
            const body = await res.text();
            throw new Error(`update user ${role.email} failed: HTTP ${res.status()} ${body}`);
        }
        return false;
    }
    const res = await api.post(`${ENGINE_API}/users`, {
        data: { ...data, email: role.email, authority_id },
    });
    if (!res.ok()) {
        const body = await res.text();
        // The lookup above reads from Elasticsearch, which can lag a fresh row.
        if (alreadyExists(body)) return false;
        throw new Error(`create user ${role.email} failed: HTTP ${res.status()} ${body}`);
    }
    return true;
}

/**
 * The admin whose address is a mailbox in the tenant (`roleFor('calendar')`).
 *
 * A sys_admin, because the concierge calendar specs sign in as this user and
 * concierge admits admin and support users by default.
 */
async function ensureCalendarUser(api: APIRequestContext) {
    const role = roleFor('calendar');
    const created = await ensureUser(api, role, (await authority(api)).id, {
        name: 'E2E Calendar Admin',
        sys_admin: true,
    });
    return { email: role.email, created };
}

/**
 * Bookable desks.
 *
 * Desks are not systems — they live in Zone METADATA under the name `desks`, on
 * a LEVEL zone, as `metadata.desks.details[]`
 * (libs/bookings/src/lib/booking-form.service.ts, `listChildMetadata(building, {name:'desks'})`).
 * `groups: []` keeps them unrestricted so a non-admin can book them; a populated
 * `groups` array would gate them behind group membership.
 *
 * One desk per worker plus a shared spare, so parallel specs never contend for
 * the same asset (a desk is exclusive for a given time range).
 */
async function ensureDesks(api: APIRequestContext) {
    const levels = await json(api, `${ENGINE_API}/zones`, { tags: 'level', limit: '100' });
    const level_list = Array.isArray(levels) ? levels : (levels.results ?? []);
    const level = level_list.find((z: { parent_id?: string }) => z.parent_id) ?? level_list[0];
    if (!level) {
        throw new Error(
            'no `level` zone with a parent — workplace needs org -> building -> level. ' +
                'Did `init start` run?',
        );
    }

    const details = Array.from({ length: WORKERS + 1 }, (_, i) => ({
        id: `${DESK_PREFIX}${i}`,
        name: `E2E Desk ${i}`,
        bookable: true,
        groups: [],
        features: [],
        images: [],
    }));

    const res = await api.put(`${ENGINE_API}/metadata/${level.id}`, {
        data: { name: 'desks', details, description: 'e2e bookable desks' },
    });
    if (!res.ok()) {
        throw new Error(`put desks metadata failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return { zone: level.id, count: details.length };
}

/**
 * One genuinely non-admin user PER PARALLEL WORKER.
 *
 * Two reasons it is per-worker rather than shared. Permission-gated behaviour
 * must be asserted as a non-admin, because a sys_admin bypasses the checks and
 * the assertion would pass whether or not the logic works. And state-mutating
 * specs (create a booking, cancel it, assert "your bookings") need identities
 * that cannot see each other's rows — which is what lets the suite run in
 * parallel instead of serialising on one shared account.
 */
async function ensureStaffUsers(api: APIRequestContext) {
    const authority_id = (await authority(api)).id;
    const created: string[] = [];
    const present: string[] = [];

    for (let i = 0; i < WORKERS; i++) {
        const role = roleFor('staff', i);
        const fields = { name: `E2E Staff ${i} (non-admin)`, sys_admin: false };
        if (await ensureUser(api, role, authority_id, fields)) created.push(role.email);
        else present.push(role.email);
    }
    return { created, present };
}

export async function seed(): Promise<void> {
    assertLocalOnly(BACKEND_URL, APP_URL);
    const api = await adminApi();
    try {
        const app = await ensureOAuthApp(api, APP_URL, 'workplace (e2e dev server)');
        console.log(
            `  oauth app  ${app.created ? 'created' : 'present'}  ${app.uid}  ${app.redirect_uri}`,
        );
        const login = await ensureAbsoluteLoginUrl(api);
        console.log(`  login_url  ${login.changed ? 'patched' : 'ok'}       ${login.login_url}`);
        const tenant = await ensureTenant(api);
        console.log(
            `  tenant     ${tenant.created ? 'created' : 'present'}  domain=${tenant.domain}  ` +
                `calendar=${CALENDAR_ENABLED ? `microsoft 365 (${O365.tenant})` : 'placeholder'}`,
        );
        if (CALENDAR_ENABLED) {
            const calendar_user = await ensureCalendarUser(api);
            console.log(
                `  calendar   ${calendar_user.created ? 'created' : 'present'}  admin ${calendar_user.email}`,
            );
        }
        const desks = await ensureDesks(api);
        console.log(`  desks      ${desks.count} on ${desks.zone}`);
        const users = await ensureStaffUsers(api);
        console.log(
            `  staff users ${users.created.length} created, ${users.present.length} present ` +
                `(${WORKERS} workers: ${staffEmail(0)} … ${staffEmail(WORKERS - 1)})`,
        );
        // Only specs that bind a room's status need the drivers, so a build farm
        // that is down or slow is reported here instead of failing every spec.
        try {
            const drivers = await ensureDrivers(api, (message) => console.log(`  drivers    ${message}`));
            console.log(`  drivers    ${describeDrivers(drivers)}`);
        } catch (error) {
            console.warn(
                `  drivers    NOT LOADED; specs that need a room status will fail.\n` +
                    `${error instanceof Error ? error.message : error}`,
            );
        }
    } finally {
        await api.dispose();
    }
}

if (require.main === module) {
    seed().catch((e) => {
        console.error(e.message);
        process.exit(1);
    });
}

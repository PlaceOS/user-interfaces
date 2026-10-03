/**
 * Auth fixtures for the CONCIERGE app.
 *
 * ## Why this exists rather than reusing `e2e/support/fixtures.ts`
 *
 * The workplace fixtures build their storage state with
 * `buildStorageState(mint, APP_URL)` — and a storage state is bound to ONE
 * ORIGIN, because the access token lives in that origin's `localStorage`. A
 * session minted for `localhost:4214` is invisible to a page on
 * `localhost:4215`, so concierge cannot borrow it.
 *
 * What is shared is everything that costs something: the auth server, the
 * seeded identities, the token mint and its verification. Only the origin
 * differs, and that is the whole of this file.
 *
 * ## Signed in as ADMIN
 *
 * Concierge manages other people's bookings and the org hierarchy, so the specs
 * run as the admin identity — see `concierge.env.ts` for the reasoning, and
 * `concierge-access.spec.ts` for the test that keeps that choice honest by
 * proving a plain staff user cannot get in.
 */
import {
    APIRequestContext,
    Page,
    request as pwRequest,
    test as base,
} from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { AUTH_DIR, BACKEND_URL, RoleName, roleFor } from '../env';
import { ENGINE_API } from '../api';
import { buildStorageState, mintToken } from '../auth';
import { CONCIERGE_URL, assertConciergeLocal } from './concierge.env';
import { ensureConciergeOAuthApp } from './concierge.seed';

interface ConciergeWorkerFixtures {
    /** storageState path for the admin identity, bound to the CONCIERGE origin. */
    conciergeAdminState: string;
    /** A bearer token for the admin identity, for API calls. */
    conciergeAdminToken: string;
    /** A bearer token for a plain staff identity, for the access tests. */
    conciergeStaffToken: string;
    /**
     * storageState path for a PLAIN STAFF identity, bound to the CONCIERGE
     * origin. Exists only so the access test can open concierge as somebody who
     * should not be allowed in — nothing else should use it.
     */
    conciergeStaffState: string;
}

interface ConciergeTestFixtures {
    /** A page signed in as the admin, on the concierge app. */
    adminPage: Page;
    /** An API context as the admin. */
    adminApi: APIRequestContext;
    /** An API context as a plain non-admin staff user. */
    staffApi: APIRequestContext;
}

/** Mint for a role and write a storage state bound to the CONCIERGE origin. */
async function mintForConcierge(role: RoleName, workerIndex: number) {
    assertConciergeLocal();
    // Must come first. Without an OAuth application for THIS origin, authorize
    // answers 401 and the error says nothing about the cause — see
    // `concierge.seed.ts`. Idempotent, so calling it per mint is cheap.
    await ensureConciergeOAuthApp();
    const r = roleFor(role, workerIndex);
    const mint = await mintToken(BACKEND_URL, CONCIERGE_URL, r.email, r.password);

    // Same check the workplace fixtures make, and for the same reason: a token
    // that parses but is rejected downstream is a failure mode that has caused
    // a production revert once already.
    const api = await pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
    try {
        const res = await api.get(`${ENGINE_API}/users/current`);
        if (!res.ok()) {
            throw new Error(
                `minted token for ${r.email} was rejected by rest-api: HTTP ${res.status()}`,
            );
        }
        const user = await res.json();
        if (role === 'admin' && !(user.sys_admin || user.support)) {
            throw new Error(
                `${r.email} is NOT an admin, and the concierge specs assume admin ` +
                    `rights for the management pages. Re-run e2e/support/seed.ts.`,
            );
        }
        if (role === 'staff' && (user.sys_admin || user.support)) {
            throw new Error(
                `${r.email} is admin/support — the access test would be vacuous. ` +
                    `Re-run e2e/support/seed.ts.`,
            );
        }
    } finally {
        await api.dispose();
    }

    // A path of its own, so a concierge state can never be mistaken for a
    // workplace one: same identity, different origin, different file.
    fs.mkdirSync(AUTH_DIR, { recursive: true });
    const state_path = path.join(
        AUTH_DIR,
        `concierge-${role}-${workerIndex}.json`,
    );
    fs.writeFileSync(
        state_path,
        JSON.stringify(buildStorageState(mint, CONCIERGE_URL), null, 2),
    );
    return { state_path, token: mint.accessToken };
}

async function apiWithToken(token: string): Promise<APIRequestContext> {
    return pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${token}` },
    });
}

export const test = base.extend<ConciergeTestFixtures, ConciergeWorkerFixtures>({
    // Every concierge test is signed in as the admin unless it opts out with
    // `test.use({ storageState: undefined })` — which the access specs do.
    storageState: ({ conciergeAdminState }, use) => use(conciergeAdminState),
    baseURL: ({}, use) => use(CONCIERGE_URL),

    conciergeAdminState: [
        async ({}, use) => {
            const { state_path } = await mintForConcierge(
                'admin',
                test.info().parallelIndex,
            );
            await use(state_path);
        },
        { scope: 'worker' },
    ],

    conciergeAdminToken: [
        async ({}, use) => {
            const { token } = await mintForConcierge('admin', test.info().parallelIndex);
            await use(token);
        },
        { scope: 'worker' },
    ],

    conciergeStaffToken: [
        async ({}, use) => {
            const { token } = await mintForConcierge('staff', test.info().parallelIndex);
            await use(token);
        },
        { scope: 'worker' },
    ],

    conciergeStaffState: [
        async ({}, use) => {
            const { state_path } = await mintForConcierge(
                'staff',
                test.info().parallelIndex,
            );
            await use(state_path);
        },
        { scope: 'worker' },
    ],

    adminPage: async ({ page }, use) => {
        await use(page);
    },

    adminApi: async ({ conciergeAdminToken }, use) => {
        const api = await apiWithToken(conciergeAdminToken);
        await use(api);
        await api.dispose();
    },

    staffApi: async ({ conciergeStaffToken }, use) => {
        const api = await apiWithToken(conciergeStaffToken);
        await use(api);
        await api.dispose();
    },
});

export { expect } from '@playwright/test';

/**
 * Worker-scoped auth fixtures.
 *
 * Each parallel worker mints its own bearer once and reuses it for every test it
 * runs. That is what makes parallelism safe here: we own the whole stack, so
 * isolation is a seeding problem (one non-admin identity per worker), not a
 * reason to serialise the suite.
 *
 * Import `test`/`expect` from this module rather than from @playwright/test.
 */
import { test as base, expect, APIRequestContext, Page, request as pwRequest } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import {
    APP_URL,
    AUTH_DIR,
    BACKEND_URL,
    RoleName,
    assertLocalOnly,
    roleFor,
} from './env';
import { mintToken, buildStorageState } from './auth';
import { ENGINE_API } from './api';

interface WorkerFixtures {
    /** storageState path for the admin identity of THIS worker. */
    adminStorageState: string;
    /** Raw bearer for the per-worker non-admin identity. */
    staffToken: string;
}

interface TestFixtures {
    /** An API context authenticated as this worker's non-admin user. */
    staffApi: APIRequestContext;
    /** A browser page authenticated as this worker's non-admin user. */
    staffPage: Page;
}

/** Mint for a role on a worker, writing storageState + token sidecar. */
async function mintForWorker(role: RoleName, workerIndex: number) {
    assertLocalOnly(BACKEND_URL, APP_URL);
    const r = roleFor(role, workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, r.email, r.password);

    // A token that parses but is rejected downstream is the failure mode that
    // caused a production revert once already — assert it here, once, loudly.
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
        if (role === 'staff' && (user.sys_admin || user.support)) {
            throw new Error(
                `${r.email} is admin/support — permission checks would be bypassed, making ` +
                    `any gating assertion vacuous. Re-run e2e/support/seed.ts.`,
            );
        }
    } finally {
        await api.dispose();
    }

    fs.mkdirSync(AUTH_DIR, { recursive: true });
    fs.writeFileSync(r.storagePath, JSON.stringify(buildStorageState(mint, APP_URL), null, 2));
    fs.writeFileSync(
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

export const test = base.extend<TestFixtures, WorkerFixtures>({
    // Default every test to the admin identity of its own worker. Specs whose
    // subject IS authentication opt out with `test.use({ storageState: undefined })`
    // and drive loginViaUI instead.
    storageState: ({ adminStorageState }, use) => use(adminStorageState),

    adminStorageState: [
        async ({}, use) => {
            const { role } = await mintForWorker('admin', test.info().parallelIndex);
            await use(role.storagePath);
        },
        { scope: 'worker' },
    ],

    staffToken: [
        async ({}, use) => {
            const { mint } = await mintForWorker('staff', test.info().parallelIndex);
            await use(mint.accessToken);
        },
        { scope: 'worker' },
    ],

    staffApi: async ({ staffToken }, use) => {
        const api = await pwRequest.newContext({
            baseURL: BACKEND_URL,
            ignoreHTTPSErrors: true,
            extraHTTPHeaders: { Authorization: `Bearer ${staffToken}` },
        });
        await use(api);
        await api.dispose();
    },

    // Depends on staffToken purely for its side effect: that worker fixture is
    // what mints and writes the staff storageState file this context loads.
    staffPage: async ({ browser, staffToken }, use) => {
        void staffToken;
        const storagePath = path.join(AUTH_DIR, `staff-${test.info().parallelIndex}.json`);
        const ctx = await browser.newContext({
            storageState: storagePath,
            ignoreHTTPSErrors: true,
            baseURL: APP_URL,
        });
        const page = await ctx.newPage();
        await use(page);
        await ctx.close();
    },
});

export { expect };

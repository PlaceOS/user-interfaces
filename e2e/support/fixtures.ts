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
import * as path from 'path';
import { APP_URL, AUTH_DIR, BACKEND_URL } from './env';
import { mintForWorker } from './api';
import { pauseBackground } from './background';

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

export const test = base.extend<TestFixtures, WorkerFixtures>({
    // Every page pauses the animated background (see background.ts).
    context: async ({ context }, use) => {
        await pauseBackground(context);
        await use(context);
    },

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
        await pauseBackground(ctx);
        const page = await ctx.newPage();
        await use(page);
        await ctx.close();
    },
});

export { expect };

/**
 * Fixtures for the STAGEHAND app: an admin session bound to the stagehand
 * origin, an admin API context, the admin's bearer for MQTT clients, and the
 * harness driver.
 *
 * Same shape as `concierge/fixtures.ts`, for the same reason: a storage state
 * belongs to one origin, so stagehand cannot borrow workplace's.
 */
import {
    APIRequestContext,
    test as base,
    request as pwRequest,
} from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { ENGINE_API } from '../api';
import { buildStorageState, mintToken } from '../auth';
import { AUTH_DIR, BACKEND_URL, roleFor } from '../env';
import { adminApi as bootstrapApi } from '../seed';
import { HierarchyZones, hierarchyZones } from './stagehand.api';
import { STAGEHAND_URL, assertStagehandLocal } from './stagehand.env';
import { ensureHarnessDriver, ensureStagehandOAuthApp } from './stagehand.seed';

interface StagehandWorkerFixtures {
    /** storageState path for the admin, bound to the stagehand origin. */
    stagehandAdminState: string;
    /** A bearer for the admin: what the specs' own MQTT clients sign in with. */
    stagehandAdminToken: string;
    /** The state harness driver's id. Loaded by `up.sh`; checked here. */
    harnessDriverId: string;
    /** The org, building and level the specs' systems go in. */
    zones: HierarchyZones;
}

interface StagehandTestFixtures {
    adminApi: APIRequestContext;
}

async function apiWithToken(token: string): Promise<APIRequestContext> {
    return pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${token}` },
    });
}

async function mintForStagehand(workerIndex: number) {
    assertStagehandLocal();
    const setup = await bootstrapApi();
    try {
        await ensureStagehandOAuthApp(setup);
    } finally {
        await setup.dispose();
    }
    const admin = roleFor('admin', workerIndex);
    const mint = await mintToken(
        BACKEND_URL,
        STAGEHAND_URL,
        admin.email,
        admin.password,
    );
    fs.mkdirSync(AUTH_DIR, { recursive: true });
    const state_path = path.join(
        AUTH_DIR,
        `stagehand-admin-${workerIndex}.json`,
    );
    fs.writeFileSync(
        state_path,
        JSON.stringify(buildStorageState(mint, STAGEHAND_URL), null, 2),
    );
    return { state_path, token: mint.accessToken };
}

export const test = base.extend<StagehandTestFixtures, StagehandWorkerFixtures>(
    {
        storageState: ({ stagehandAdminState }, use) =>
            use(stagehandAdminState),
        baseURL: ({}, use) => use(STAGEHAND_URL),

        stagehandAdminState: [
            async ({}, use) => {
                const { state_path } = await mintForStagehand(
                    test.info().parallelIndex,
                );
                await use(state_path);
            },
            { scope: 'worker' },
        ],

        stagehandAdminToken: [
            async ({}, use) => {
                const { token } = await mintForStagehand(
                    test.info().parallelIndex,
                );
                // Same check the other suites make: a token that parses but is
                // refused downstream fails in confusing ways much later.
                const api = await apiWithToken(token);
                try {
                    const res = await api.get(`${ENGINE_API}/users/current`);
                    if (!res.ok()) {
                        throw new Error(
                            `minted admin token was rejected: HTTP ${res.status()}`,
                        );
                    }
                } finally {
                    await api.dispose();
                }
                await use(token);
            },
            { scope: 'worker' },
        ],

        harnessDriverId: [
            async ({ stagehandAdminToken }, use) => {
                const api = await apiWithToken(stagehandAdminToken);
                try {
                    // A short budget: `up.sh` already waited for the build farm, so
                    // a binary that is not there now is a broken bring-up.
                    await use(await ensureHarnessDriver(api, () => {}, 60_000));
                } finally {
                    await api.dispose();
                }
            },
            { scope: 'worker', timeout: 120_000 },
        ],

        zones: [
            async ({ stagehandAdminToken }, use) => {
                const api = await apiWithToken(stagehandAdminToken);
                try {
                    await use(await hierarchyZones(api));
                } finally {
                    await api.dispose();
                }
            },
            { scope: 'worker' },
        ],

        adminApi: async ({ stagehandAdminToken }, use) => {
            const api = await apiWithToken(stagehandAdminToken);
            await use(api);
            await api.dispose();
        },
    },
);

export { expect } from '@playwright/test';

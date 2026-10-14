/**
 * Seeding for the stagehand specs: an OAuth application for the stagehand
 * origin, and the state harness driver.
 *
 * Owned by the stagehand specs rather than added to `e2e/support/seed.ts`, for
 * the reason `concierge.seed.ts` gives: the shared seed is what every workplace
 * suite needs to boot, and a harness the build farm cannot build must not stop
 * them. `up.sh` runs this after the shared seed; the fixtures run it again,
 * which costs a couple of list requests.
 */
import { APIRequestContext } from '@playwright/test';
import {
    ensureDriver,
    ensureDriversRepository,
    waitForDriverCompiled,
} from '../drivers/drivers.api';
import {
    HARNESS_COMMIT,
    HARNESS_DRIVER,
    HARNESS_REPOSITORY,
} from '../drivers/drivers.env';
import { DRIVER_LOAD_TIMEOUT_MS } from '../drivers/drivers.seed';
import { adminApi, ensureOAuthApp } from '../seed';
import { STAGEHAND_URL, assertStagehandLocal } from './stagehand.env';

export async function ensureStagehandOAuthApp(api: APIRequestContext) {
    return ensureOAuthApp(api, STAGEHAND_URL, 'stagehand (e2e dev server)');
}

/**
 * The state harness driver row, once core holds its binary. Returns its id.
 *
 * A first run on an architecture waits for the build farm to compile it, which
 * takes a few minutes; `up.sh` pays that, not a spec.
 */
export async function ensureHarnessDriver(
    api: APIRequestContext,
    log: (message: string) => void = () => {},
    timeoutMs = DRIVER_LOAD_TIMEOUT_MS,
): Promise<string> {
    const repository = await ensureDriversRepository(api, HARNESS_REPOSITORY);
    const driver = await ensureDriver(
        api,
        repository.id,
        HARNESS_DRIVER,
        repository.created,
        HARNESS_COMMIT,
    );
    await waitForDriverCompiled(
        api,
        driver.id,
        `${HARNESS_DRIVER.name} (${HARNESS_DRIVER.file_name} @ ${HARNESS_COMMIT.slice(0, 7)})`,
        timeoutMs,
        log,
    );
    return driver.id;
}

if (require.main === module) {
    (async () => {
        assertStagehandLocal();
        const api = await adminApi();
        try {
            const app = await ensureStagehandOAuthApp(api);
            console.log(
                `  oauth app  ${app.created ? 'created' : 'present'}  ${app.uid}  ${app.redirect_uri}`,
            );
            // Like the room drivers: a farm that cannot build the harness
            // fails the stagehand specs, not the bring-up.
            try {
                const id = await ensureHarnessDriver(api, (message) =>
                    console.log(`  harness    ${message}`),
                );
                console.log(
                    `  harness    ${id}  ${HARNESS_REPOSITORY.uri}@${HARNESS_REPOSITORY.branch} ${HARNESS_COMMIT.slice(0, 7)}`,
                );
            } catch (error) {
                console.warn(
                    `  harness    NOT LOADED; the stagehand specs will fail.\n` +
                        `${error instanceof Error ? error.message : error}`,
                );
            }
        } finally {
            await api.dispose();
        }
    })().catch((e) => {
        console.error(e.message);
        process.exit(1);
    });
}

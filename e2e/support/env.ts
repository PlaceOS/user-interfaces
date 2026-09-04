/**
 * Environment + role configuration for the PlaceOS e2e suite.
 *
 * THIS SUITE RUNS AGAINST A LOCAL BACKEND ONLY. There is no "which env am I on
 * today" mode: the guard below is an ALLOWLIST, and anything that is not a
 * loopback host is refused before a browser is ever launched. A suite that
 * creates, mutates and deletes data must never be one typo away from doing it to
 * a real deployment.
 *
 * Two distinct origins, which are NOT the same thing under `nx serve`:
 *   BACKEND_URL — the PlaceOS stack (nginx TLS entrypoint), where /api + /auth live.
 *   APP_URL     — where the SPA under test is served. The dev server proxies
 *                 /api,/auth,/control from APP_URL through to BACKEND_URL, so the
 *                 browser only ever sees APP_URL. localStorage (and therefore the
 *                 token) belongs to APP_URL.
 */

// Must be first: loads .env into process.env before any var below is read.
import './load-env';
import * as path from 'path';

/**
 * Auth artifacts are resolved against this file, not the cwd — Nx, Playwright
 * and a bare `npx playwright test` all disagree about what the working directory
 * is, and a relative path silently writes the storageState somewhere the test
 * projects don't read from.
 */
export const AUTH_DIR = path.resolve(__dirname, '..', '.auth');

/** The only hosts this suite may ever touch. */
const LOCAL_HOSTS = ['localhost', '127.0.0.1', '::1', '[::1]', 'host.docker.internal'];

/** The PlaceOS stack under test. */
export const BACKEND_URL = process.env.E2E_BACKEND_URL ?? 'https://localhost:8443';

/** Where the SPA is served (the Angular dev server). */
export const APP_URL = process.env.E2E_APP_URL ?? 'http://localhost:4214';

/**
 * How many parallel workers the suite is provisioned for. Each worker gets its
 * own non-admin identity so that state-mutating specs cannot collide — we own
 * the whole stack, so isolation is a seeding problem, not a reason to serialise.
 * Must match (or exceed) the config's `workers`.
 */
export const WORKERS = Number(process.env.E2E_WORKERS ?? 4);

/**
 * Hard guard: refuse anything that is not a local backend, however we got
 * pointed there. Called at config module scope so it throws before Playwright
 * launches anything.
 */
export function assertLocalOnly(...urls: string[]): void {
    for (const url of urls) {
        let hostname: string;
        try {
            hostname = new URL(url).hostname;
        } catch {
            throw new Error(`E2E refused: invalid URL "${url}".`);
        }
        if (!LOCAL_HOSTS.includes(hostname)) {
            throw new Error(
                `E2E refused: "${url}" is not a local backend (host "${hostname}").\n` +
                    `This suite must never target a deployed environment — it creates and ` +
                    `deletes real data. Set E2E_BACKEND_URL / E2E_APP_URL to a loopback host ` +
                    `and run the local stack (cd local && ./placeos start).`,
            );
        }
    }
}

export type RoleName = 'admin' | 'staff';

export interface Role {
    name: RoleName;
    email: string;
    password: string;
    /** storageState file for this role on this worker. */
    storagePath: string;
    /** sidecar file holding the raw bearer for API setup/teardown. */
    tokenPath: string;
}

const ADMIN_EMAIL = process.env.E2E_ADMIN_EMAIL ?? 'support@place.tech';
const ADMIN_PASSWORD = process.env.E2E_ADMIN_PASSWORD ?? 'development';
const STAFF_PASSWORD = process.env.E2E_STAFF_PASSWORD ?? 'e2e-staff-development';

/** Per-worker non-admin address. Seeded by seed.ts for 0..WORKERS-1. */
export function staffEmail(workerIndex: number): string {
    return `e2e-staff-${workerIndex}@place.tech`;
}

/** Desk asset-id prefix. seed.ts creates `${DESK_PREFIX}0..WORKERS`. */
export const DESK_PREFIX = 'e2e-desk-';

/**
 * The desk this worker owns. Desks are exclusive for a time range, so giving
 * each worker its own removes the only real contention in a parallel run.
 */
export function deskFor(workerIndex: number): { id: string; name: string } {
    return { id: `${DESK_PREFIX}${workerIndex}`, name: `E2E Desk ${workerIndex}` };
}

/**
 * Resolve a role for a given parallel worker.
 *
 * `admin` is a single shared account — its specs are read-mostly and independent
 * bearers for the same user do not interfere. `staff` is one distinct user per
 * worker, because those are the specs that create and delete bookings.
 */
export function roleFor(name: RoleName, workerIndex = 0): Role {
    if (name === 'admin') {
        return {
            name,
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            storagePath: path.join(AUTH_DIR, `admin-${workerIndex}.json`),
            tokenPath: path.join(AUTH_DIR, `admin-${workerIndex}.token.json`),
        };
    }
    return {
        name,
        email: staffEmail(workerIndex),
        password: STAFF_PASSWORD,
        storagePath: path.join(AUTH_DIR, `staff-${workerIndex}.json`),
        tokenPath: path.join(AUTH_DIR, `staff-${workerIndex}.token.json`),
    };
}

import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

// `concierge.env.ts` pulls in `e2e/support/env.ts`, which self-loads e2e/.env
// before reading any E2E_* var — so importing it here is enough to apply it.
import {
    CONCIERGE_URL,
    assertConciergeLocal,
} from '../../e2e/support/concierge/concierge.env';
import { BACKEND_URL } from '../../e2e/support/env';

// Fail fast, loudly, before a browser launches, if anything points at a backend
// that is not local. These specs create and delete real data, and concierge can
// write other people's bookings and the org hierarchy — so the guard matters
// more here than anywhere else in the suite.
assertConciergeLocal();

const CI = !!process.env.CI;
const PORT = new URL(CONCIERGE_URL).port || '4215';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    timeout: 90_000,
    expect: { timeout: 15_000 },
    fullyParallel: true,
    // ONE worker, unlike workplace.
    //
    // Concierge is an admin surface: every spec signs in as the same single
    // admin identity, so parallel workers would share one user and one set of
    // data rather than being isolated by it. The workplace suite parallelises
    // safely because seed.ts gives each worker its own staff user and its own
    // desk; there is no equivalent here, and inventing one would mean seeding
    // several admins.
    workers: 1,
    forbidOnly: CI,
    retries: CI ? 2 : 0,
    reporter: [
        ['list'],
        ['html', { outputFolder: '../../reports/e2e/concierge', open: 'never' }],
        ...(CI
            ? ([
                  ['json', { outputFile: '../../reports/e2e/concierge-results.json' }],
                  ['github'],
              ] as const)
            : []),
    ],
    use: {
        baseURL: CONCIERGE_URL,
        // The local stack terminates TLS with a self-signed cert.
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: 20_000,
        navigationTimeout: 45_000,
    },
    projects: [
        // --- preflight: prove the stack is up, for `local` only -------------
        // A setup project rather than `globalSetup`, so the mock project below
        // does not need a backend. Shared with the workplace suite: one stack,
        // one check.
        {
            name: 'preflight',
            testDir: '../../e2e/support',
            testMatch: /preflight\.setup\.ts$/,
            use: { ...devices['Desktop Chrome'] },
        },

        // --- real local backend, no mocks ----------------------------------
        // Auth comes from e2e/support/concierge/fixtures.ts, which mints a
        // storage state bound to THIS origin — a workplace session is useless
        // here, because the token lives in the other origin's localStorage.
        {
            name: 'local',
            testDir: './e2e/local',
            dependencies: ['preflight'],
            use: { ...devices['Desktop Chrome'] },
        },

        // --- mock mode: no backend at all ----------------------------------
        // The two specs that were already here (dayview, lockers) run in
        // `?mock=true` and match on English button text. Kept as they are: they
        // cost no infrastructure and catch pure render breakage. Nothing new
        // should be added to them — see the plan in notes/.
        {
            name: 'mock',
            testDir: './e2e',
            testIgnore: ['**/local/**'],
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    webServer: {
        command: `bunx nx serve concierge --port=${PORT}`,
        url: CONCIERGE_URL,
        reuseExistingServer: !CI,
        cwd: workspaceRoot,
        timeout: 180_000,
        // MUST be set, exactly as the workplace config does it. Without these
        // the dev server's /api + /auth proxy keeps its default target, which
        // is the SHARED DEV DEPLOYMENT (config/proxy.conf.js) — so the app
        // authenticates against a real authority, the local token is refused
        // 401, and the browser is redirected out to real Microsoft. Worse, the
        // specs write data, and concierge writes other people's bookings and
        // the org hierarchy: pointing it at a live deployment is exactly what
        // `assertConciergeLocal()` exists to prevent, and that guard only
        // checks E2E_BACKEND_URL, never the proxy target.
        env: {
            PLACE_PROXY_DOMAIN: new URL(BACKEND_URL).host,
            PLACE_PROXY_SECURE: String(new URL(BACKEND_URL).protocol === 'https:'),
            PLACE_PROXY_VALID_SSL: 'false',
        },
    },
});

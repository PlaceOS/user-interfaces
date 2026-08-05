import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

// env.ts self-loads e2e/.env before reading any E2E_* var, so importing it here
// is enough to get .env applied.
import { APP_URL, BACKEND_URL, WORKERS, assertLocalOnly } from '../../e2e/support/env';

// Fail fast, loudly, before a single browser launches, if anything points at a
// backend that is not local. This suite creates and deletes real data.
assertLocalOnly(BACKEND_URL, APP_URL);

const CI = !!process.env.CI;
const PORT = new URL(APP_URL).port || '4214';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    timeout: 90_000,
    expect: { timeout: 15_000 },
    // We own the whole stack, so isolation is a seeding problem, not a reason to
    // serialise: seed.ts provisions one non-admin identity per worker and the
    // auth fixtures mint per worker. Keep `workers` <= E2E_WORKERS.
    fullyParallel: true,
    workers: WORKERS,
    forbidOnly: CI,
    retries: CI ? 2 : 0,
    reporter: [
        ['list'],
        ['html', { outputFolder: '../../reports/e2e/workplace', open: 'never' }],
        // `json` feeds the CI job summary (counts, and which specs were flaky —
        // a flaky pass is the signal we care about most while confidence is
        // still being built). `github` adds inline annotations on failures.
        ...(CI
            ? ([
                  ['json', { outputFile: '../../reports/e2e/workplace-results.json' }],
                  ['github'],
              ] as const)
            : []),
    ],
    use: {
        baseURL: APP_URL,
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
        // A setup project rather than `globalSetup`, which would also run for
        // `mock` and make a backend-free project need a backend.
        {
            name: 'preflight',
            testDir: '../../e2e/support',
            testMatch: /preflight\.setup\.ts$/,
            use: { ...devices['Desktop Chrome'] },
        },

        // --- real local backend, no mocks ----------------------------------
        // Auth comes from the worker-scoped fixtures in e2e/support/fixtures.ts,
        // so the only thing to wait on is the stack itself.
        {
            name: 'local',
            testDir: './e2e/local',
            dependencies: ['preflight'],
            use: { ...devices['Desktop Chrome'] },
        },

        // --- mock mode: no backend at all, fast render regression ----------
        // Kept deliberately. It costs no infrastructure and catches pure UI
        // breakage, so it stays as its own project rather than being replaced.
        //
        // Chromium only. The projects this replaced also listed Firefox and
        // WebKit, but that was untouched Nx generator scaffold that no script,
        // workflow or human ever invoked, and landing.spec.ts only asserts that
        // Angular components instantiate — the same code path in every engine.
        // Paying two more browser downloads and ~2x runtime on one serialised
        // self-hosted runner for that is a bad trade. If cross-browser earns its
        // place later, add `mock-firefox`/`mock-webkit` behind an env flag so the
        // nightly is unaffected.
        {
            name: 'mock',
            testDir: './e2e',
            testIgnore: ['**/local/**'],
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    webServer: {
        command: `bunx nx serve workplace --port=${PORT}`,
        url: APP_URL,
        reuseExistingServer: !CI,
        cwd: workspaceRoot,
        timeout: 180_000,
        // Point the dev server's API proxy at the local stack instead of its
        // default (the shared dev deployment). See config/proxy.conf.js.
        env: {
            PLACE_PROXY_DOMAIN: new URL(BACKEND_URL).host,
            PLACE_PROXY_SECURE: String(new URL(BACKEND_URL).protocol === 'https:'),
            PLACE_PROXY_VALID_SSL: 'false',
        },
    },
});

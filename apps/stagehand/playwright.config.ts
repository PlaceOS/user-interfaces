import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

// `stagehand.env.ts` pulls in `e2e/support/env.ts`, which loads e2e/.env first.
import { BACKEND_URL } from '../../e2e/support/env';
import {
    STAGEHAND_URL,
    assertStagehandLocal,
} from '../../e2e/support/stagehand/stagehand.env';

// The `local` specs create systems and modules: refuse anything not local
// before a browser launches.
assertStagehandLocal();

const CI = !!process.env.CI;
const PORT = new URL(STAGEHAND_URL).port || '4210';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    timeout: 120_000,
    expect: { timeout: 20_000 },
    // ONE worker. The specs share one admin identity, and the hot list is org
    // wide: each spec owns its own system, but a broken spec in a parallel
    // worker would show up in every other spec's page too.
    workers: 1,
    forbidOnly: CI,
    retries: CI ? 2 : 0,
    reporter: [
        ['list'],
        [
            'html',
            { outputFolder: '../../reports/e2e/stagehand', open: 'never' },
        ],
        ...(CI
            ? ([
                  [
                      'json',
                      {
                          outputFile:
                              '../../reports/e2e/stagehand-results.json',
                      },
                  ],
                  ['github'],
              ] as const)
            : []),
    ],
    use: {
        baseURL: STAGEHAND_URL,
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: 20_000,
        navigationTimeout: 45_000,
    },
    projects: [
        // --- preflight: prove the stack is up, for `local` only -------------
        {
            name: 'preflight',
            testDir: '../../e2e/support',
            testMatch: /preflight\.setup\.ts$/,
            use: { ...devices['Desktop Chrome'] },
        },

        // --- real local backend: source, mosquitto and a harness driver -----
        {
            name: 'local',
            testDir: './e2e/local',
            dependencies: ['preflight'],
            use: { ...devices['Desktop Chrome'] },
        },

        // --- mock mode: no backend ------------------------------------------
        {
            name: 'mock',
            testDir: './e2e',
            testIgnore: ['**/local/**'],
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    webServer: {
        command: `bunx nx serve stagehand --port=${PORT}`,
        url: STAGEHAND_URL,
        reuseExistingServer: !CI,
        cwd: workspaceRoot,
        timeout: 180_000,
        // MUST be set: without it the dev server proxies /api (and the
        // /api/mqtt/ websocket) to the shared dev deployment. See the
        // concierge config for the long version.
        env: {
            PLACE_PROXY_DOMAIN: new URL(BACKEND_URL).host,
            PLACE_PROXY_SECURE: String(
                new URL(BACKEND_URL).protocol === 'https:',
            ),
            PLACE_PROXY_VALID_SSL: 'false',
        },
    },
});

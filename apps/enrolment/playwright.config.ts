import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4205';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    reporter: [
        ['list'],
        [
            'html',
            { outputFolder: '../../reports/e2e/enrolment', open: 'never' },
        ],
    ],
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    webServer: {
        command: 'bunx nx serve enrolment --port=4205',
        url: 'http://localhost:4205',
        reuseExistingServer: !process.env.CI,
        cwd: workspaceRoot,
        timeout: 120000,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});

import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4202';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    reporter: [
        ['list'],
        [
            'html',
            { outputFolder: '../../reports/e2e/booking-panel', open: 'never' },
        ],
    ],
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    webServer: {
        command: 'npx nx serve booking-panel --port=4202',
        url: 'http://localhost:4202',
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

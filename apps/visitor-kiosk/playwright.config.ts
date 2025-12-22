import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4213';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    reporter: [
        ['list'],
        [
            'html',
            { outputFolder: '../../reports/e2e/visitor-kiosk', open: 'never' },
        ],
    ],
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    webServer: {
        command: 'npx nx serve visitor-kiosk --port=4213',
        url: 'http://localhost:4213',
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

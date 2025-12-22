import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4204';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    reporter: [
        ['list'],
        ['html', { outputFolder: '../../reports/e2e/control', open: 'never' }],
    ],
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    webServer: {
        command: 'npx nx serve control --port=4204',
        url: 'http://localhost:4204',
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

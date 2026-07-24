import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4218';

export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    reporter: [
        ['list'],
        [
            'html',
            {
                outputFolder: '../../reports/e2e/signage-manager',
                open: 'never',
            },
        ],
    ],
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    webServer: {
        command: `${workspaceRoot}/node_modules/.bin/http-server ${workspaceRoot}/dist/apps/signage-manager/browser -p 4218 -c-1 -s`,
        url: 'http://localhost:4218',
        reuseExistingServer: false,
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

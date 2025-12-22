import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4207';

// Note: This app requires Office.js runtime which is not available in browser tests.
// All tests are skipped, so webServer is not configured.
export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    reporter: [
        ['list'],
        [
            'html',
            { outputFolder: '../../reports/e2e/outlook-addin', open: 'never' },
        ],
    ],
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});

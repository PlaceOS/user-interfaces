import { expect, test } from './fixtures';

/**
 * E2E tests for the booking flows.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-020..US-026).
 *
 * Every flow is hosted inside the `placeos-book` shell. These tests verify that
 * each flow loads its entry step; deeper step-by-step interactions depend on
 * mock resource availability and are intentionally kept light.
 */

const LOAD_TIMEOUT = 30000;

const FLOWS = [
    { id: 'US-020', name: 'desk', url: '/#/book/desk/form?mock=true', selector: 'desk-flow-new' },
    { id: 'US-021', name: 'meeting room', url: '/#/book/meeting/form?mock=true', selector: 'meeting-flow-new' },
    { id: 'US-022', name: 'parking', url: '/#/book/parking/form?mock=true', selector: 'placeos-parking-flow' },
    { id: 'US-023', name: 'parking request', url: '/#/book/parking-request/form?mock=true', selector: 'placeos-parking-request-flow' },
    { id: 'US-024', name: 'visitor', url: '/#/book/visitor/form?mock=true', selector: 'visitor-flow-new' },
    { id: 'US-025', name: 'locker', url: '/#/book/locker/form?mock=true', selector: 'placeos-book-locker-flow' },
    { id: 'US-026', name: 'code', url: '/#/book/code?mock=true', selector: 'book-code-flow' },
] as const;

test.describe('Booking flows', () => {
    for (const flow of FLOWS) {
        test(`${flow.id}: ${flow.name} flow loads inside the booking shell`, async ({
            page,
        }) => {
            await page.goto(flow.url);
            await expect(page.locator('placeos-book')).toBeVisible({
                timeout: LOAD_TIMEOUT,
            });
            await expect(page.locator(flow.selector)).toBeVisible({
                timeout: LOAD_TIMEOUT,
            });
            // Booking flows keep the application navigation chrome.
            await expect(page.locator('topbar')).toBeVisible({
                timeout: LOAD_TIMEOUT,
            });
        });
    }

    test('US-020/021: bare /book/desk redirects to the desk form step', async ({
        page,
    }) => {
        await page.goto('/#/book/desk?mock=true');
        await expect(page).toHaveURL(/\/book\/desk\/form/, {
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('desk-flow-new')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

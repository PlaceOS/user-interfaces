import { expect, test } from './fixtures';

/**
 * E2E tests for the Schedule / Your Bookings page.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-030..US-037).
 */

const SCHEDULE_URL = '/#/your-bookings?mock=true';
const LOAD_TIMEOUT = 30000;

test.describe('Schedule / Your Bookings', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(SCHEDULE_URL);
        await expect(page.locator('app-schedule')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-030: renders the schedule page', async ({ page }) => {
        await expect(page.locator('topbar')).toBeVisible();
    });

    test('US-031: shows the schedule topbar for switching views/dates', async ({
        page,
    }) => {
        await expect(page.locator('schedule-topbar')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-031: renders day, week and list views from query state', async ({
        page,
    }) => {
        await expect(page.locator('schedule-day-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        await page.goto('/#/your-bookings?mock=true&view=week');
        await expect(page.locator('schedule-week-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        await page.goto('/#/your-bookings?mock=true&view=list');
        await expect(page.locator('schedule-list-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-032: shows booking filters', async ({ page }) => {
        await expect(page.locator('schedule-filters')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-032: opens the filter editor from the schedule filters', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto(SCHEDULE_URL);
        await expect(page.locator('app-schedule')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        await page.locator('[name="schedule-open-filter-edit"]').click();

        await expect(page.locator('schedule-filter-card')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('[name="schedule-apply-filter"]')).toBeVisible(
            { timeout: LOAD_TIMEOUT },
        );
    });

    test('US-033/036: schedule view includes booking count and status-capable cards', async ({
        page,
    }) => {
        await expect(page.locator('schedule-day-view')).toContainText(
            /booking/i,
            { timeout: LOAD_TIMEOUT },
        );

        // The day view shows the status of a booking as a coloured dot. The
        // label of the dot is its tooltip, which is in the DOM as a hidden
        // description for screen readers. So the label is attached, not
        // visible. It renders a moment after the day view, so wait for it: a
        // count taken at once is 0.
        const status_labels = page.locator('[role="tooltip"]', {
            hasText: /approved|tentative|declined|waitlisted/i,
        });
        await expect(status_labels.first()).toBeAttached({
            timeout: LOAD_TIMEOUT,
        });
    });
});

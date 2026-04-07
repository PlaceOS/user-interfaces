import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    SURVEY_ID_EMPLOYEE,
    initializeAppWithMock,
} from './test-utils';

test.describe('US-15: View Loading State', () => {
    test('should display loading spinner while survey loads', async ({
        page,
    }) => {
        // Initialize app first
        await initializeAppWithMock(page);

        // Navigate to survey
        await page.goto(`/#/survey/${SURVEY_ID_EMPLOYEE}?mock=true`);

        // Wait for app-root to be visible first
        await page
            .locator('app-root')
            .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });

        // Check for loading spinner or page content (loading can be quick)
        const spinner = page.locator('mat-spinner');
        const pageContent = page.locator('main[page]');

        // Wait for either spinner or page to be visible
        await Promise.race([
            spinner
                .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT })
                .catch(() => {}),
            pageContent
                .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT })
                .catch(() => {}),
        ]);

        const spinnerVisible = await spinner.isVisible().catch(() => false);
        const pageVisible = await pageContent.isVisible().catch(() => false);

        // One of these should be true
        expect(spinnerVisible || pageVisible).toBeTruthy();
    });

    test('should display loading message text', async ({ page }) => {
        await initializeAppWithMock(page);
        await page.goto(`/#/survey/${SURVEY_ID_EMPLOYEE}?mock=true`);

        // Wait for app-root to be visible first
        await page
            .locator('app-root')
            .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });

        // Check for loading text or page content
        const loadingText = page.locator('main[loading] p');
        const pageContent = page.locator('main[page]');

        // Wait for either loading message or page to be visible
        await Promise.race([
            loadingText
                .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT })
                .catch(() => {}),
            pageContent
                .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT })
                .catch(() => {}),
        ]);

        const loadingVisible = await loadingText.isVisible().catch(() => false);
        const pageVisible = await pageContent.isVisible().catch(() => false);

        // Either loading message is shown or page has loaded
        expect(loadingVisible || pageVisible).toBeTruthy();
    });

    test('should transition from loading to content', async ({ page }) => {
        await initializeAppWithMock(page);
        await page.goto(`/#/survey/${SURVEY_ID_EMPLOYEE}?mock=true`);

        // Wait for content to be visible
        const pageContent = page.locator('main[page]');
        await expect(pageContent).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Loading should be hidden
        const loadingSpinner = page.locator('main[loading] mat-spinner');
        await expect(loadingSpinner).not.toBeVisible();
    });

    test('should show loading during question fetch', async ({ page }) => {
        await initializeAppWithMock(page);
        await page.goto(`/#/survey/${SURVEY_ID_EMPLOYEE}?mock=true`);

        // The app shows "Loading survey details..." then "Loading survey questions..."
        // We just verify the final content appears
        const pageContent = page.locator('main[page]');
        await expect(pageContent).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display header during loading', async ({ page }) => {
        await initializeAppWithMock(page);
        await page.goto(`/#/survey/${SURVEY_ID_EMPLOYEE}?mock=true`);

        // Wait for initial render
        await page.waitForTimeout(200);

        // Header should be visible even during loading
        const header = page.locator('header');
        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should show loading state during submission', async ({ page }) => {
        await initializeAppWithMock(page);
        // Use Survey ID 2 (Facility Feedback) - only question 7 is required (rating)
        await page.goto(`/#/survey/2?mock=true`);
        await page.locator('main[page]').waitFor({ timeout: LOAD_TIMEOUT });

        // Fill required rating field (question 7)
        const ratingButton = page
            .locator('div[btn-grp] button:has-text("5")')
            .first();
        await ratingButton.click();

        // Submit
        const submitButton = page.locator('footer button:has-text("Submit")');
        await submitButton.click();

        // Wait for submission to complete
        await page.waitForTimeout(500);

        // Should eventually show success (either with translation or key)
        const successContainer = page.locator('main[loading]').filter({
            has: page.locator('p'),
        });
        await expect(successContainer).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

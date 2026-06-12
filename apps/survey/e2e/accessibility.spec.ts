import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    SURVEY_ID_COMPREHENSIVE,
    SURVEY_ID_EMPLOYEE,
    initializeAppWithMock,
    navigateToSurvey,
    waitForSurveyLoaded,
} from './test-utils';

test.describe('US-16: Toggle Dark Mode', () => {
    test('should toggle dark mode with keyboard shortcut', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Get initial theme from body element (theme is applied as theme-dark class to body)
        const initialBody = await page.locator('body').getAttribute('class');
        const initialIsDark = initialBody?.includes('theme-dark') || false;

        // Press Ctrl+Alt+Shift+D using individual key presses for better compatibility
        await page.keyboard.down('Control');
        await page.keyboard.down('Alt');
        await page.keyboard.down('Shift');
        await page.keyboard.press('KeyD');
        await page.keyboard.up('Shift');
        await page.keyboard.up('Alt');
        await page.keyboard.up('Control');
        await page.waitForTimeout(500);

        // Check if theme toggled on body element
        const newBody = await page.locator('body').getAttribute('class');
        const newIsDark = newBody?.includes('theme-dark') || false;

        // Theme should have toggled
        expect(newIsDark).not.toBe(initialIsDark);
    });

    test('should persist dark mode toggle', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Toggle dark mode on using individual key presses
        await page.keyboard.down('Control');
        await page.keyboard.down('Alt');
        await page.keyboard.down('Shift');
        await page.keyboard.press('KeyD');
        await page.keyboard.up('Shift');
        await page.keyboard.up('Alt');
        await page.keyboard.up('Control');
        await page.waitForTimeout(500);

        // Check body element for theme-dark class
        const afterToggle = await page.locator('body').getAttribute('class');
        const isDarkAfterToggle = afterToggle?.includes('theme-dark') || false;

        // Toggle again
        await page.keyboard.down('Control');
        await page.keyboard.down('Alt');
        await page.keyboard.down('Shift');
        await page.keyboard.press('KeyD');
        await page.keyboard.up('Shift');
        await page.keyboard.up('Alt');
        await page.keyboard.up('Control');
        await page.waitForTimeout(500);

        // Check body element for theme-dark class
        const afterSecondToggle = await page
            .locator('body')
            .getAttribute('class');
        const isDarkAfterSecond =
            afterSecondToggle?.includes('theme-dark') || false;

        // Should be opposite
        expect(isDarkAfterSecond).not.toBe(isDarkAfterToggle);
    });
});

test.describe('US-17: View Survey in Preferred Language', () => {
    test('should accept lang query parameter', async ({ page }) => {
        // Initialize app first, then navigate with lang parameter
        await initializeAppWithMock(page);
        await page.goto(`/#/survey/${SURVEY_ID_EMPLOYEE}?mock=true&lang=en`);
        await waitForSurveyLoaded(page);

        // Page should load without errors
        const surveyOutlet = page.locator('survey-outlet');
        await expect(surveyOutlet).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display UI elements correctly with language set', async ({
        page,
    }) => {
        await initializeAppWithMock(page);
        await page.goto(`/#/survey/${SURVEY_ID_EMPLOYEE}?mock=true&lang=en`);
        await waitForSurveyLoaded(page);

        // Check that standard UI elements are visible
        const nextButton = page.locator('footer button:has-text("Next")');
        await expect(nextButton).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('US-18: Use Survey on Mobile Devices', () => {
    test('should display correctly on mobile viewport', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Header should be visible
        const header = page.locator('header');
        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Questions should be visible
        const questions = page.locator('main[page] h4');
        const count = await questions.count();
        expect(count).toBeGreaterThan(0);

        // Footer should be visible
        const footer = page.locator('footer');
        await expect(footer).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should have responsive layout on tablet viewport', async ({
        page,
    }) => {
        // Set tablet viewport
        await page.setViewportSize({ width: 768, height: 1024 });

        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // All elements should be visible
        const header = page.locator('header');
        const main = page.locator('main[page]');
        const footer = page.locator('footer');

        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(main).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(footer).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should allow touch interactions on form elements', async ({
        page,
    }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Click rating button (simulates touch on mobile)
        const ratingButton = page
            .locator('div[btn-grp] button:has-text("4")')
            .first();
        await ratingButton.click();
        await page.waitForTimeout(200);

        // Should be selected
        await expect(ratingButton).toHaveClass(/bg-secondary/);
    });

    test('should have appropriately sized form fields on mobile', async ({
        page,
    }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Text input should be full width
        const formField = page.locator('mat-form-field').first();
        await expect(formField).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Check it has w-full class
        await expect(formField).toHaveClass(/w-full/);
    });

    test('should have accessible navigation buttons on mobile', async ({
        page,
    }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Navigation button should be visible and tappable
        const nextButton = page.locator('footer button:has-text("Next")');
        await expect(nextButton).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Should be able to click (works for both touch and mouse interactions in Playwright)
        await nextButton.click();
        await page.waitForTimeout(300);

        // Should navigate to next page
        const pageTitle = page.locator('main[page] h3');
        const titleText = await pageTitle.textContent();
        expect(titleText).toContain('Work Environment');
    });

    test('should scroll content on small screens', async ({ page }) => {
        // Set small mobile viewport
        await page.setViewportSize({ width: 320, height: 480 });

        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Page should be scrollable
        const scrollableArea = page.locator('.overflow-auto');
        await expect(scrollableArea).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

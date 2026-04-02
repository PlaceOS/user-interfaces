import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    SURVEY_ID_EMPLOYEE,
    SURVEY_ID_FACILITY,
    getSurveyTitle,
    isLogoVisible,
    navigateToSurvey,
    waitForSurveyLoaded,
} from './test-utils';

test.describe('US-19: View Organization Branding', () => {
    test('should display organization logo in header', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const logoVisible = await isLogoVisible(page);
        expect(logoVisible).toBeTruthy();
    });

    test('should display logo with correct alt text', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const logo = page.locator('header img[alt="Logo"]');
        await expect(logo).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display survey title prominently', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const title = await getSurveyTitle(page);
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(0);
    });

    test('should display different survey titles for different surveys', async ({
        page,
    }) => {
        // Check first survey
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const employeeTitle = await getSurveyTitle(page);
        expect(employeeTitle).toContain('Employee');

        // Check second survey
        await navigateToSurvey(page, SURVEY_ID_FACILITY);
        await waitForSurveyLoaded(page);

        const facilityTitle = await getSurveyTitle(page);
        expect(facilityTitle).toContain('Facility');

        // Titles should be different
        expect(employeeTitle).not.toEqual(facilityTitle);
    });

    test('should have styled header with branding', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const header = page.locator('header');
        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Header should have bg styling
        await expect(header).toHaveClass(/bg-base-200/);
    });

    test('should maintain consistent branding across pages', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Get header state on first page
        const firstPageTitle = await getSurveyTitle(page);
        const firstPageLogoVisible = await isLogoVisible(page);

        // Navigate to next page
        const nextButton = page.locator('footer button:has-text("Next")');
        await nextButton.click();
        await page.waitForTimeout(300);

        // Header should remain the same
        const secondPageTitle = await getSurveyTitle(page);
        const secondPageLogoVisible = await isLogoVisible(page);

        expect(secondPageTitle).toEqual(firstPageTitle);
        expect(secondPageLogoVisible).toEqual(firstPageLogoVisible);
    });

    test('should display header as sticky', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const header = page.locator('header.sticky');
        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display footer as sticky', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const footer = page.locator('footer.sticky');
        await expect(footer).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should have proper layout structure', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Check layout structure
        const surveyContainer = page.locator('survey-outlet > div');
        await expect(surveyContainer).toHaveClass(/bg-base-100/);

        const header = page.locator('header');
        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });

        const main = page.locator('main[page]');
        await expect(main).toBeVisible({ timeout: LOAD_TIMEOUT });

        const footer = page.locator('footer');
        await expect(footer).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

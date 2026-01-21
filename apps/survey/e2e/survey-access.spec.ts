import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    SURVEY_ID_EMPLOYEE,
    SURVEY_ID_INVALID,
    navigateToSurvey,
    navigateToSurveyShort,
    waitForSurveyLoaded,
    getSurveyTitle,
    isLogoVisible,
    isNotFoundVisible,
} from './test-utils';

test.describe('US-1: Access Survey by ID', () => {
    test('should access survey via full URL format (/#/survey/:id)', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Verify survey outlet is visible
        const surveyOutlet = page.locator('survey-outlet');
        await expect(surveyOutlet).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should access survey via short URL format (/#/:id)', async ({
        page,
    }) => {
        await navigateToSurveyShort(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Verify survey outlet is visible
        const surveyOutlet = page.locator('survey-outlet');
        await expect(surveyOutlet).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display survey title in the header', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const title = await getSurveyTitle(page);
        expect(title).toContain('Employee Satisfaction Survey');
    });

    test('should display organization logo in header', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const logoVisible = await isLogoVisible(page);
        expect(logoVisible).toBeTruthy();
    });

    test('should load and display survey questions', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Verify questions are displayed
        const questionTitles = page.locator('main[page] h4 div.font-medium');
        const count = await questionTitles.count();
        expect(count).toBeGreaterThan(0);
    });
});

test.describe('US-2: Handle Invalid Survey ID', () => {
    test('should redirect to not-found page for invalid survey ID', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_INVALID);

        // Wait for redirect to not-found page
        await page.waitForURL(/.*not-found/, { timeout: LOAD_TIMEOUT });

        // Verify we're on the not-found page
        await expect(page).toHaveURL(/.*not-found/);
    });

    test('should display "Survey not found" message', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_INVALID);

        // Wait for not-found page
        await page.waitForURL(/.*not-found/, { timeout: LOAD_TIMEOUT });

        const notFoundVisible = await isNotFoundVisible(page);
        expect(notFoundVisible).toBeTruthy();
    });

    test('should display not-found icon', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_INVALID);

        // Wait for not-found page
        await page.waitForURL(/.*not-found/, { timeout: LOAD_TIMEOUT });

        const notFoundIcon = page.locator('img[alt="404 Not Found"]');
        await expect(notFoundIcon).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should handle non-numeric survey ID gracefully', async ({ page }) => {
        await navigateToSurvey(page, 'invalid-id');

        // Wait for redirect to not-found page
        await page.waitForURL(/.*not-found/, { timeout: LOAD_TIMEOUT });

        await expect(page).toHaveURL(/.*not-found/);
    });
});

import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    SURVEY_ID_EMPLOYEE,
    SURVEY_ID_FACILITY,
    clickNext,
    clickPrevious,
    getCurrentPageTitle,
    navigateToSurvey,
    waitForSurveyLoaded,
} from './test-utils';

test.describe('US-3: Navigate Multi-Page Survey', () => {
    test('should display Next button on first page', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const nextButton = page.locator('footer button:has-text("Next")');
        await expect(nextButton).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should not display Previous button on first page', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const prevButton = page.locator('footer button:has-text("Previous")');
        await expect(prevButton).not.toBeVisible();
    });

    test('should advance to next page when clicking Next', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const firstPageTitle = await getCurrentPageTitle(page);
        expect(firstPageTitle).toContain('Job Satisfaction');

        await clickNext(page);

        const secondPageTitle = await getCurrentPageTitle(page);
        expect(secondPageTitle).toContain('Work Environment');
    });

    test('should display Previous button on second page', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        await clickNext(page);

        const prevButton = page.locator('footer button:has-text("Previous")');
        await expect(prevButton).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should return to previous page when clicking Previous', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        await clickNext(page);
        const secondPageTitle = await getCurrentPageTitle(page);
        expect(secondPageTitle).toContain('Work Environment');

        await clickPrevious(page);
        const firstPageTitle = await getCurrentPageTitle(page);
        expect(firstPageTitle).toContain('Job Satisfaction');
    });

    test('should display Submit button on last page', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Navigate to last page
        await clickNext(page);

        const submitButton = page.locator('footer button:has-text("Submit")');
        await expect(submitButton).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should not display Next button on last page', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // Navigate to last page
        await clickNext(page);

        const nextButton = page.locator('footer button:has-text("Next")');
        await expect(nextButton).not.toBeVisible();
    });

    test('should display sticky footer with navigation buttons', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const footer = page.locator('footer.sticky');
        await expect(footer).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('US-4: View Survey Progress', () => {
    test('should display current page title', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const pageTitle = page.locator('main[page] h3');
        await expect(pageTitle).toBeVisible({ timeout: LOAD_TIMEOUT });
        const titleText = await pageTitle.textContent();
        expect(titleText).toBeTruthy();
    });

    test('should update page title when navigating', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        const firstTitle = await getCurrentPageTitle(page);

        await clickNext(page);

        const secondTitle = await getCurrentPageTitle(page);
        expect(secondTitle).not.toEqual(firstTitle);
    });

    test('should display questions for current page only', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_EMPLOYEE);
        await waitForSurveyLoaded(page);

        // First page should have job satisfaction questions
        const firstPageContent = await page.locator('main[page]').textContent();
        expect(firstPageContent).toContain('satisfied');

        await clickNext(page);

        // Second page should have work environment questions
        const secondPageContent = await page
            .locator('main[page]')
            .textContent();
        expect(secondPageContent).toContain('cleanliness');
    });

    test('should handle single-page survey correctly', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_FACILITY);
        await waitForSurveyLoaded(page);

        // Single page survey should show Submit directly
        const submitButton = page.locator('footer button:has-text("Submit")');
        await expect(submitButton).toBeVisible({ timeout: LOAD_TIMEOUT });

        // No Next or Previous buttons
        const nextButton = page.locator('footer button:has-text("Next")');
        const prevButton = page.locator('footer button:has-text("Previous")');
        await expect(nextButton).not.toBeVisible();
        await expect(prevButton).not.toBeVisible();
    });
});

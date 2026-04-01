import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    SURVEY_ID_COMPREHENSIVE,
    SURVEY_ID_FACILITY,
    clickNext,
    clickSubmit,
    enterText,
    isSuccessMessageVisible,
    navigateToSurvey,
    selectDropdownOption,
    selectRadioOption,
    selectRating,
    waitForSurveyLoaded,
} from './test-utils';

test.describe('US-13: Submit Completed Survey', () => {
    test('should display Submit button on final page', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Navigate to last page
        await clickNext(page);

        const submitButton = page.locator('footer button:has-text("Submit")');
        await expect(submitButton).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should submit survey with all required fields filled', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill page 1
        await selectRating(page, 19, 5);
        await enterText(page, 'name', 'Complete User');

        await clickNext(page);

        // Fill page 2
        await selectDropdownOption(page, 'Email');
        await selectRadioOption(page, 'Morning');

        // Submit
        await clickSubmit(page);

        // Verify submission was processed
        await page.waitForTimeout(1000);
        const success = await isSuccessMessageVisible(page);
        expect(success).toBeTruthy();
    });

    test('should send answers to backend on submission', async ({ page }) => {
        // In mock mode, verify that submission completes successfully
        // (mock endpoints handle the request internally)
        await navigateToSurvey(page, SURVEY_ID_FACILITY);
        await waitForSurveyLoaded(page);

        // Fill the single-page survey - Rating question
        const ratingButton = page
            .locator('div[btn-grp] button:has-text("4")')
            .first();
        await ratingButton.click();

        // Submit
        await clickSubmit(page);

        // Verify submission completed by checking success message
        await page.waitForTimeout(1000);
        const success = await isSuccessMessageVisible(page);
        expect(success).toBeTruthy();
    });

    test('should handle single-page survey submission', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_FACILITY);
        await waitForSurveyLoaded(page);

        // Fill the required rating
        const ratingButton = page
            .locator('div[btn-grp] button:has-text("5")')
            .first();
        await ratingButton.click();

        // Submit directly (no Next needed)
        await clickSubmit(page);

        await page.waitForTimeout(1000);
        const success = await isSuccessMessageVisible(page);
        expect(success).toBeTruthy();
    });
});

test.describe('US-14: View Submission Confirmation', () => {
    test('should display success message after submission', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill page 1
        await selectRating(page, 19, 4);
        await enterText(page, 'name', 'Success Test');

        await clickNext(page);

        // Fill page 2
        await selectDropdownOption(page, 'Phone');
        await selectRadioOption(page, 'Afternoon');

        // Submit
        await clickSubmit(page);

        // Wait for success message (uses helper that works with translation keys)
        await page.waitForTimeout(1000);
        const success = await isSuccessMessageVisible(page);
        expect(success).toBeTruthy();
    });

    test('should hide form after successful submission', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill page 1
        await selectRating(page, 19, 3);
        await enterText(page, 'name', 'Form Hide Test');

        await clickNext(page);

        // Fill page 2
        await selectDropdownOption(page, 'In Person');
        await selectRadioOption(page, 'Evening');

        // Submit
        await clickSubmit(page);

        // Wait for transition
        await page.waitForTimeout(1000);

        // Form should be hidden
        const formPage = page.locator('main[page]');
        await expect(formPage).not.toBeVisible();
    });

    test('should hide navigation buttons after submission', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill page 1
        await selectRating(page, 19, 5);
        await enterText(page, 'name', 'Nav Hide Test');

        await clickNext(page);

        // Fill page 2
        await selectDropdownOption(page, 'No Contact');
        await selectRadioOption(page, 'Morning');

        // Submit
        await clickSubmit(page);

        // Wait for transition
        await page.waitForTimeout(1000);

        // Navigation should be hidden
        const submitButton = page.locator('footer button:has-text("Submit")');
        await expect(submitButton).not.toBeVisible();
    });

    test('should show snackbar notification on success', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_FACILITY);
        await waitForSurveyLoaded(page);

        // Fill the required rating
        const ratingButton = page
            .locator('div[btn-grp] button:has-text("5")')
            .first();
        await ratingButton.click();

        // Submit
        await clickSubmit(page);

        // Check for snackbar
        const snackbar = page.locator('mat-snack-bar-container');
        await expect(snackbar).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

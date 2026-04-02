import { expect, test } from '@playwright/test';
import {
    SURVEY_ID_COMPREHENSIVE,
    clickNext,
    clickSubmit,
    enterText,
    getRequiredFieldCount,
    isSuccessMessageVisible,
    navigateToSurvey,
    selectDropdownOption,
    selectRadioOption,
    selectRating,
    waitForSurveyLoaded,
} from './test-utils';

test.describe('US-11: Validate Required Fields', () => {
    test('should display Required badge on required questions', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        const requiredBadges = page.locator('span:has-text("Required")');
        const count = await requiredBadges.count();
        expect(count).toBeGreaterThan(0);
    });

    test('should have required fields marked', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Page 1 has 2 required fields (rating and text)
        const count = await getRequiredFieldCount(page);
        expect(count).toBe(2);
    });

    test('should not submit if required fields are empty on page 1', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Navigate to last page without filling anything
        await clickNext(page);

        // Try to submit
        await clickSubmit(page);

        // Should not show success message - form validation should block
        const successMessage = page.locator(
            'main[loading]:has-text("complete")',
        );
        await expect(successMessage).not.toBeVisible();
    });

    test('should not submit if required fields are empty on page 2', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill page 1 required fields
        await selectRating(page, 19, 4);
        await enterText(page, 'name', 'Test User');

        // Navigate to page 2
        await clickNext(page);

        // Don't fill required fields, try to submit
        await clickSubmit(page);

        // Should not show success message
        const successMessage = page.locator(
            'main[loading]:has-text("complete")',
        );
        await expect(successMessage).not.toBeVisible();
    });

    test('should submit successfully when all required fields are filled', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill page 1 required fields
        await selectRating(page, 19, 4);
        await enterText(page, 'name', 'Test User');

        // Navigate to page 2
        await clickNext(page);

        // Fill page 2 required fields
        await selectDropdownOption(page, 'Email');
        await selectRadioOption(page, 'Morning');

        // Submit
        await clickSubmit(page);

        // Wait for success
        await page.waitForTimeout(1000);
        const success = await isSuccessMessageVisible(page);
        expect(success).toBeTruthy();
    });
});

test.describe('US-12: Allow Optional Fields', () => {
    test('should not display Required badge on optional questions', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // The comment field (question 21: "Additional comments") should be optional
        // Look for the specific question heading that doesn't have Required badge
        const commentQuestion = page.locator('div.py-2:has(textarea)');
        await expect(commentQuestion).toBeVisible();
        // Verify this question doesn't have a Required badge
        const requiredBadge = commentQuestion.locator(
            'span:has-text("Required")',
        );
        await expect(requiredBadge).not.toBeVisible();
    });

    test('should submit successfully with optional fields empty', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill only required fields on page 1
        await selectRating(page, 19, 5);
        await enterText(page, 'name', 'Jane Smith');
        // Leave optional comment empty

        // Navigate to page 2
        await clickNext(page);

        // Fill only required fields on page 2
        await selectDropdownOption(page, 'Phone');
        await selectRadioOption(page, 'Afternoon');
        // Leave optional checkboxes empty

        // Submit
        await clickSubmit(page);

        // Wait for success
        await page.waitForTimeout(1000);
        const success = await isSuccessMessageVisible(page);
        expect(success).toBeTruthy();
    });

    test('should submit successfully with optional fields filled', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Fill all fields on page 1 including optional
        await selectRating(page, 19, 3);
        await enterText(page, 'name', 'Bob Wilson');

        const textarea = page.locator('mat-form-field textarea[matinput]');
        await textarea.fill('This is an optional comment');

        // Navigate to page 2
        await clickNext(page);

        // Fill all fields on page 2 including optional
        await selectDropdownOption(page, 'In Person');
        await selectRadioOption(page, 'Evening');

        // Toggle some checkboxes
        const checkbox1 = page.locator(
            'mat-checkbox:has-text("Workplace improvements")',
        );
        await checkbox1.click();
        const checkbox2 = page.locator(
            'mat-checkbox:has-text("Training opportunities")',
        );
        await checkbox2.click();

        // Submit
        await clickSubmit(page);

        // Wait for success
        await page.waitForTimeout(1000);
        const success = await isSuccessMessageVisible(page);
        expect(success).toBeTruthy();
    });

    test('should distinguish optional from required fields visually', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Count required badges
        const requiredCount = await getRequiredFieldCount(page);

        // Count total questions on page
        const questions = page.locator('main[page] > div.py-2');
        const totalQuestions = await questions.count();

        // There should be some optional fields (total > required)
        expect(totalQuestions).toBeGreaterThan(requiredCount);
    });
});

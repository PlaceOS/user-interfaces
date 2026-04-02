import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    SURVEY_ID_COMPREHENSIVE,
    clickNext,
    enterComment,
    enterText,
    navigateToSurvey,
    selectDropdownOption,
    selectRadioOption,
    selectRating,
    toggleCheckbox,
    waitForSurveyLoaded,
} from './test-utils';

test.describe('US-5: Answer Rating Questions', () => {
    test('should display rating buttons as a button group', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        const buttonGroup = page.locator('div[btn-grp]');
        await expect(buttonGroup).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display rating options from 1 to max rating', async ({
        page,
    }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Check for rating buttons 1-5
        const ratingButtons = page.locator('div[btn-grp] button');
        const count = await ratingButtons.count();
        expect(count).toBe(5);

        // Verify button values
        for (let i = 1; i <= 5; i++) {
            const button = page.locator(`div[btn-grp] button:has-text("${i}")`);
            await expect(button.first()).toBeVisible();
        }
    });

    test('should highlight selected rating', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        await selectRating(page, 19, 4);

        // The selected button should have the bg-secondary class
        const selectedButton = page
            .locator('div[btn-grp] button:has-text("4")')
            .first();
        await expect(selectedButton).toHaveClass(/bg-secondary/);
    });

    test('should only allow one rating selection', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        // Select rating 3
        await selectRating(page, 19, 3);
        let selectedButton = page
            .locator('div[btn-grp] button:has-text("3")')
            .first();
        await expect(selectedButton).toHaveClass(/bg-secondary/);

        // Select rating 5 - should deselect 3
        await selectRating(page, 19, 5);
        selectedButton = page
            .locator('div[btn-grp] button:has-text("5")')
            .first();
        await expect(selectedButton).toHaveClass(/bg-secondary/);

        // Rating 3 should no longer be selected
        const previousButton = page
            .locator('div[btn-grp] button:has-text("3")')
            .first();
        await expect(previousButton).not.toHaveClass(/bg-secondary/);
    });
});

test.describe('US-6: Answer Text Questions', () => {
    test('should display text input field', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        const textInput = page.locator('mat-form-field input[matinput]');
        await expect(textInput).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display placeholder text', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        const textInput = page.locator('mat-form-field input[matinput]');
        const placeholder = await textInput.getAttribute('placeholder');
        expect(placeholder).toBeTruthy();
    });

    test('should accept text input', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        await enterText(page, 'name', 'John Doe');

        const textInput = page.locator('mat-form-field input[matinput]');
        await expect(textInput).toHaveValue('John Doe');
    });
});

test.describe('US-7: Answer Comment Questions', () => {
    test('should display multi-line textarea', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        const textarea = page.locator('mat-form-field textarea[matinput]');
        await expect(textarea).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should accept multi-line text input', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);

        const multiLineText = 'Line 1\nLine 2\nLine 3';
        await enterComment(page, 'feedback', multiLineText);

        const textarea = page.locator('mat-form-field textarea[matinput]');
        await expect(textarea).toHaveValue(multiLineText);
    });
});

test.describe('US-8: Answer Dropdown Questions', () => {
    test('should display dropdown (mat-select)', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        const dropdown = page.locator('mat-select');
        await expect(dropdown).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should open dropdown and show options', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        // Click to open dropdown
        const dropdown = page.locator('mat-select').first();
        await dropdown.click();
        await page.waitForTimeout(200);

        // Check options are visible
        const options = page.locator('mat-option');
        const count = await options.count();
        expect(count).toBeGreaterThan(0);
    });

    test('should select an option from dropdown', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        await selectDropdownOption(page, 'Email');

        // Verify selection is displayed
        const selectedText = page.locator('mat-select .mat-mdc-select-value');
        await expect(selectedText).toContainText('Email');
    });
});

test.describe('US-9: Answer Radio Button Questions', () => {
    test('should display radio button group', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        const radioGroup = page.locator('mat-radio-group');
        await expect(radioGroup).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display all radio options', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        const radioButtons = page.locator('mat-radio-button');
        const count = await radioButtons.count();
        expect(count).toBeGreaterThan(0);
    });

    test('should select a radio option', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        await selectRadioOption(page, 'Morning');

        const selectedRadio = page.locator(
            'mat-radio-button:has-text("Morning")',
        );
        await expect(selectedRadio).toHaveClass(/mat-mdc-radio-checked/);
    });

    test('should only allow one radio selection', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        await selectRadioOption(page, 'Morning');
        await selectRadioOption(page, 'Afternoon');

        // Only Afternoon should be selected
        const afternoonRadio = page.locator(
            'mat-radio-button:has-text("Afternoon")',
        );
        await expect(afternoonRadio).toHaveClass(/mat-mdc-radio-checked/);

        const morningRadio = page.locator(
            'mat-radio-button:has-text("Morning")',
        );
        await expect(morningRadio).not.toHaveClass(/mat-mdc-radio-checked/);
    });
});

test.describe('US-10: Answer Checkbox Questions', () => {
    test('should display checkbox options', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        const checkboxes = page.locator('mat-checkbox');
        const count = await checkboxes.count();
        expect(count).toBeGreaterThan(0);
    });

    test('should toggle checkbox selection', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        await toggleCheckbox(page, 'Workplace improvements');

        const checkbox = page.locator(
            'mat-checkbox:has-text("Workplace improvements")',
        );
        await expect(checkbox).toHaveClass(/mat-mdc-checkbox-checked/);
    });

    test('should allow multiple checkbox selections', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        await toggleCheckbox(page, 'Workplace improvements');
        await toggleCheckbox(page, 'Team events');

        const checkbox1 = page.locator(
            'mat-checkbox:has-text("Workplace improvements")',
        );
        const checkbox2 = page.locator('mat-checkbox:has-text("Team events")');

        await expect(checkbox1).toHaveClass(/mat-mdc-checkbox-checked/);
        await expect(checkbox2).toHaveClass(/mat-mdc-checkbox-checked/);
    });

    test('should deselect checkbox when clicked again', async ({ page }) => {
        await navigateToSurvey(page, SURVEY_ID_COMPREHENSIVE);
        await waitForSurveyLoaded(page);
        await clickNext(page);

        await toggleCheckbox(page, 'Workplace improvements');
        await toggleCheckbox(page, 'Workplace improvements');

        const checkbox = page.locator(
            'mat-checkbox:has-text("Workplace improvements")',
        );
        await expect(checkbox).not.toHaveClass(/mat-mdc-checkbox-checked/);
    });
});

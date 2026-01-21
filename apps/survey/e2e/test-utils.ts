import { Page } from '@playwright/test';

/**
 * Shared test utilities for survey e2e tests
 */

export const LOAD_TIMEOUT = 30000;
export const ACTION_TIMEOUT = 10000;

// Survey IDs from mock data
export const SURVEY_ID_EMPLOYEE = '1'; // Employee Satisfaction Survey (2 pages)
export const SURVEY_ID_FACILITY = '2'; // Facility Feedback Survey (1 page)
export const SURVEY_ID_MEETING = '3'; // Meeting Room Experience (1 page)
export const SURVEY_ID_COMPREHENSIVE = '7'; // Comprehensive Survey (2 pages, all question types)
export const SURVEY_ID_INVALID = '99999'; // Invalid survey ID for testing

// URLs - these are relative hash routes
export const SURVEY_URL = (id: string) => `/#/survey/${id}`;
export const SURVEY_SHORT_URL = (id: string) => `/#/${id}`;
export const NOT_FOUND_URL = '/#/not-found';

/**
 * Initializes the app with mock mode enabled.
 * Must be called before navigating to survey pages.
 * Sets localStorage mock flag and establishes the app.
 */
export async function initializeAppWithMock(page: Page): Promise<void> {
    // Set localStorage mock flag BEFORE navigating
    // This ensures mock mode is detected on first load
    await page.goto('/');
    // Wait for page to be stable before evaluating
    await page.waitForLoadState('domcontentloaded');
    await page.evaluate(() => {
        localStorage.setItem('mock', 'true');
    }).catch(() => {
        // Retry if context was destroyed due to navigation
    });

    // Navigate to the app with mock mode in URL as backup
    await page.goto('/?mock=true');
    await page.waitForLoadState('domcontentloaded');
    // Ensure localStorage is set (retry)
    await page.evaluate(() => {
        localStorage.setItem('mock', 'true');
    }).catch(() => {});
    await page.waitForTimeout(1000);

    // Wait for app to initialize
    await page.locator('app-root').waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Navigates to a survey page with mock mode enabled.
 * Uses the same URL pattern as visitor-kiosk tests.
 */
export async function navigateToSurvey(
    page: Page,
    surveyId: string
): Promise<void> {
    // First initialize the app with mock mode
    await initializeAppWithMock(page);

    // Navigate to the survey - mock mode is now in localStorage
    await page.goto(`/#/survey/${surveyId}?mock=true`);
    await page.waitForTimeout(1000);
}

/**
 * Navigates to a survey using the short URL format (/#/:id)
 */
export async function navigateToSurveyShort(
    page: Page,
    surveyId: string
): Promise<void> {
    // First initialize the app with mock mode
    await initializeAppWithMock(page);

    // Navigate using the short URL format
    await page.goto(`/#/${surveyId}?mock=true`);
    await page.waitForTimeout(1000);
}

/**
 * Waits for the survey to be fully loaded (loading spinner disappears)
 */
export async function waitForSurveyLoaded(page: Page): Promise<void> {
    // Wait for loading state to disappear
    await page
        .locator('main[loading] mat-spinner')
        .waitFor({ state: 'hidden', timeout: LOAD_TIMEOUT })
        .catch(() => {});
    // Wait for the page content to be visible
    await page
        .locator('main[page]')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT })
        .catch(() => {});
}

/**
 * Waits for the app root to be visible
 */
export async function waitForAppReady(page: Page): Promise<void> {
    await page.locator('app-root').waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
    await page.waitForLoadState('networkidle');
}

/**
 * Gets the current page title from the survey
 */
export async function getCurrentPageTitle(page: Page): Promise<string> {
    const title = page.locator('main[page] h3');
    return title.textContent() || '';
}

/**
 * Gets the survey title from the header
 */
export async function getSurveyTitle(page: Page): Promise<string> {
    const title = page.locator('header h2');
    return title.textContent() || '';
}

/**
 * Clicks the Next button
 */
export async function clickNext(page: Page): Promise<void> {
    const nextButton = page.locator('footer button:has-text("Next")');
    await nextButton.click();
    await page.waitForTimeout(300);
}

/**
 * Clicks the Previous button
 */
export async function clickPrevious(page: Page): Promise<void> {
    const prevButton = page.locator('footer button:has-text("Previous")');
    await prevButton.click();
    await page.waitForTimeout(300);
}

/**
 * Clicks the Submit button
 */
export async function clickSubmit(page: Page): Promise<void> {
    const submitButton = page.locator('footer button:has-text("Submit")');
    await submitButton.click();
}

/**
 * Selects a rating value for a rating question
 */
export async function selectRating(
    page: Page,
    questionId: number,
    rating: number
): Promise<void> {
    // Find the question container by looking for the title, then the button group
    const buttonGroup = page.locator(`div[btn-grp] button:has-text("${rating}")`).first();
    await buttonGroup.click();
}

/**
 * Enters text into a text input question
 */
export async function enterText(
    page: Page,
    placeholder: string,
    text: string
): Promise<void> {
    const input = page.locator(`input[placeholder*="${placeholder}"]`);
    await input.fill(text);
}

/**
 * Enters text into a textarea (comment) question
 */
export async function enterComment(
    page: Page,
    placeholder: string,
    text: string
): Promise<void> {
    const textarea = page.locator(`textarea[placeholder*="${placeholder}"]`);
    await textarea.fill(text);
}

/**
 * Selects an option from a dropdown question
 */
export async function selectDropdownOption(
    page: Page,
    optionText: string
): Promise<void> {
    // Click the mat-select to open it
    const select = page.locator('mat-select').first();
    await select.click();
    await page.waitForTimeout(200);
    // Select the option
    const option = page.locator(`mat-option:has-text("${optionText}")`);
    await option.click();
    await page.waitForTimeout(200);
}

/**
 * Selects a radio button option
 */
export async function selectRadioOption(
    page: Page,
    optionText: string
): Promise<void> {
    const radio = page.locator(`mat-radio-button:has-text("${optionText}")`);
    await radio.click();
}

/**
 * Toggles a checkbox option
 */
export async function toggleCheckbox(
    page: Page,
    optionText: string
): Promise<void> {
    // Click on the label inside the mat-checkbox for more reliable toggle
    const checkbox = page.locator(`mat-checkbox:has-text("${optionText}") label`);
    await checkbox.click();
    // Wait for Angular to process the change
    await page.waitForTimeout(300);
}

/**
 * Checks if the success message is visible
 * Looks for the success state container with either translated or key text
 */
export async function isSuccessMessageVisible(page: Page): Promise<boolean> {
    // Check for success message - either with translation key or translated text
    const successMessage = page.locator('main[loading]').filter({
        has: page.locator('p'),
    });
    const isVisible = await successMessage.isVisible().catch(() => false);
    if (!isVisible) return false;
    // Verify the parent container is showing success state (not loading spinner)
    const hasSpinner = await page
        .locator('main[loading] mat-spinner')
        .isVisible()
        .catch(() => false);
    return !hasSpinner;
}

/**
 * Checks if the not found page is visible
 */
export async function isNotFoundVisible(page: Page): Promise<boolean> {
    const notFoundText = page.locator('h1:has-text("Survey not found")');
    return notFoundText.isVisible().catch(() => false);
}

/**
 * Gets the count of required badges on the current page
 */
export async function getRequiredFieldCount(page: Page): Promise<number> {
    const requiredBadges = page.locator('span:has-text("Required")');
    return requiredBadges.count();
}

/**
 * Checks if the logo is visible in the header
 */
export async function isLogoVisible(page: Page): Promise<boolean> {
    const logo = page.locator('header img[alt="Logo"]');
    return logo.isVisible().catch(() => false);
}

/**
 * Checks if the loading spinner is visible
 */
export async function isLoadingVisible(page: Page): Promise<boolean> {
    const spinner = page.locator('mat-spinner');
    return spinner.isVisible().catch(() => false);
}

/**
 * Fills out the first page of the comprehensive survey (ratings and text)
 */
export async function fillComprehensiveSurveyPage1(page: Page): Promise<void> {
    // Select rating (question 19)
    await selectRating(page, 19, 4);
    // Enter name (question 20)
    await enterText(page, 'name', 'Test User');
    // Comment is optional (question 21), skip it
}

/**
 * Fills out the second page of the comprehensive survey (selections)
 */
export async function fillComprehensiveSurveyPage2(page: Page): Promise<void> {
    // Select dropdown option (question 22)
    await selectDropdownOption(page, 'Email');
    // Select radio option (question 23)
    await selectRadioOption(page, 'Morning');
    // Checkbox is optional (question 24), skip it
}

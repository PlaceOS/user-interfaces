// Coverage: 2 unique settings, 3 scenarios (support_issue_types 2, external_support_url 1).
// Settings: support_issue_types and external_support_url (docs/settings/workplace.md).
// Consumers: libs/form-fields/src/lib/support-ticket-modal.component.ts
// and libs/components/src/lib/user-controls.component.ts.
// The support button is enabled by the `support-ticket` feature. Opening the
// modal or the external URL is read-only; the Submit button is never clicked.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Settings, stubBootstrap, test } from '../support/settings-harness';
test.use({ auditHttp: 'strict' });


const EXTERNAL_URL = new URL('/e2e-external-support', APP_URL).href;

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['support-ticket'],
    'app.external_support_url': '',
    'app.support_issue_types': [],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.hide_landing_customise': true,
    'app.hide_landing_widgets': ['available_now', 'quick_actions', 'desk_week', 'favourites', 'colleagues', 'focus_timer', 'world_clock'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
};

async function openUserControls(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    await page.goto('/#/landing');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(name), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }

    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
    await page.locator('topbar button[name="user-controls"]').click();
    const controls = page.locator('user-controls-sidebar user-controls');
    await expect(controls).toBeVisible();
    return controls;
}

const supportButton = (page: Page, controls: Locator) =>
    controls.locator('button').filter({
        has: page.locator('icon', { hasText: /^\s*support_agent\s*$/ }),
    });

test(
    'support_issue_types lists each configured issue type in the support form',
    async ({ staffPage }) => {
        const controls = await openUserControls(staffPage, {
            'app.support_issue_types': ['E2E Issue Alpha', 'E2E Issue Beta'],
        });
        const support = supportButton(staffPage, controls);
        await expect(support).toHaveCount(1);
        await support.click();
        const modal = staffPage.locator('support-ticket-modal');
        // The host has no box: fullscreen-modal-shell renders fixed content.
        // Check presence plus the real visible form, not host geometry.
        await expect(modal).toHaveCount(1);
        const heading = modal.locator('fullscreen-modal-shell header h2');
        await expect(heading).toBeVisible();
        await expect(heading).toHaveText('Raise a support ticket');
        await expect(modal.locator('fullscreen-modal-shell main form')).toBeVisible();
        // The issue type field only renders when support_issue_types is non-empty.
        const issueSelect = modal
            .locator('label', { hasText: /^\s*Issue Type\s*$/ })
            .locator('xpath=..')
            .locator('mat-select');
        await expect(issueSelect).toBeVisible();
        await issueSelect.click();
        const options = staffPage.locator('.cdk-overlay-container mat-option');
        await expect(options).toHaveText([
            'E2E Issue Alpha',
            'E2E Issue Beta',
        ]);
        await staffPage.keyboard.press('Escape');
        await modal.locator('fullscreen-modal-shell header button[mat-dialog-close]').click();
        await expect(modal).toHaveCount(0);
    },
);

test(
    'support_issue_types [] omits the issue type select',
    async ({ staffPage }) => {
        const controls = await openUserControls(staffPage, {
            'app.support_issue_types': [],
        });
        const support = supportButton(staffPage, controls);
        await expect(support).toHaveCount(1);
        await support.click();
        const modal = staffPage.locator('support-ticket-modal');
        // The host has no box: fullscreen-modal-shell renders fixed content.
        // Check presence plus the real visible form, not host geometry.
        await expect(modal).toHaveCount(1);
        const heading = modal.locator('fullscreen-modal-shell header h2');
        await expect(heading).toBeVisible();
        await expect(heading).toHaveText('Raise a support ticket');
        await expect(modal.locator('fullscreen-modal-shell main form')).toBeVisible();
        await expect(modal.locator('label', { hasText: /^\s*Location\s*$/ })).toBeVisible();
        await expect(modal.locator('label', { hasText: /^\s*Issue Type\s*$/ })).toHaveCount(0);
        await expect(modal.locator('mat-select')).toHaveCount(1);
        await modal.locator('fullscreen-modal-shell header button[mat-dialog-close]').click();
        await expect(modal).toHaveCount(0);
    },
);

test(
    'external_support_url opens the configured URL instead of the support form',
    async ({ staffPage }) => {
        const controls = await openUserControls(staffPage, {
            'app.external_support_url': EXTERNAL_URL,
        });
        const support = supportButton(staffPage, controls);
        await expect(support).toHaveCount(1);
        // Fulfil the configured destination locally before window.open creates
        // its first page. The product still performs the real popup action.
        await staffPage.context().route(EXTERNAL_URL, async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({ contentType: 'text/html',
                body: '<!doctype html><title>E2E support destination</title><p>E2E support destination</p>' });
        });
        const [popup] = await Promise.all([
            staffPage.waitForEvent('popup'),
            support.click(),
        ]);
        await expect(popup).toHaveURL(EXTERNAL_URL);
        await expect(popup.locator('p')).toHaveText('E2E support destination');
        await expect(staffPage.locator('support-ticket-modal')).toHaveCount(0);
        expect(popup.url()).toBe(EXTERNAL_URL);
        await popup.close();
    },
);

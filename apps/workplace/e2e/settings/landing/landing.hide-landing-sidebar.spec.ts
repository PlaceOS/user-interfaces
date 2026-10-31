// Setting: hide_landing_sidebar (docs/settings/workplace.md), legacy landing
// page. Coverage: 1 unique Setting / 2 scenarios.
// Only the legacy landing page reads this setting
// (apps/workplace/src/app/landing/landing.component.ts: the colleagues and
// favourites sidebar renders only while hide_landing_sidebar is not true).
// The routed new landing page (landing-new) has no such sidebar, so both
// scenarios set app.use_legacy_flows true; legacyFlowsGuard then routes
// /#/landing to the legacy page. hide_colleagues is false, so the sidebar
// opens on the colleagues tab next to the favourites tab. Nothing is clicked
// or sent.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** The sidebar's favourites tab button, matched on its icon ligature. */
const favouritesTab = (page: Page) =>
    page.locator('app-landing button[btn]').filter({
        has: page.locator('icon', { hasText: /^\s*favorite\s*$/ }),
    });

for (const hidden of [false, true]) {
    test(
        'hide_landing_sidebar ' + hidden + ' sets the legacy landing sidebar',
        async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, {
                'app.use_legacy_flows': true,
                'app.features': ['desks'],
                'app.hide_landing_sidebar': hidden,
                'app.hide_colleagues': false,
                'app.show_quick_links': false,
                'app.show_quick_book': false,
            });
            await staffPage.goto('/#/landing');
            await fixture.ready();
            const landing = staffPage.locator('app-landing');
            await expect(landing).toHaveCount(1);
            await expect(staffPage.locator('landing-new')).toHaveCount(0);
            // Rendered in both scenarios: the main column's upcoming bookings.
            await expect(landing.locator('landing-upcoming')).toHaveCount(1);
            await expect(landing.locator('landing-colleagues')).toHaveCount(
                hidden ? 0 : 1,
            );
            await expect(landing.locator('landing-favourites')).toHaveCount(0);
            await expect(favouritesTab(staffPage)).toHaveCount(hidden ? 0 : 1);
            if (!hidden) await expect(favouritesTab(staffPage)).toBeVisible();
        },
    );
}

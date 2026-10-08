/**
 * CON-AUTH-01 / 02 / 03 and CON-B1 — who may open concierge.
 *
 * Concierge reads and writes everybody's bookings and the org hierarchy, and
 * every other concierge spec signs in as an admin, so this file is the only
 * place the access boundary is exercised.
 *
 * The boundary is `AuthorisedUserGuard`, driven by one setting,
 * `app.allow_access_groups`. With a group named, a user outside it is sent to
 * `/unauthorised` (CON-AUTH-02). With none named, which is the default and the
 * state of this stack, every signed-in user is admitted (CON-B1). The open
 * default is the intended behaviour, confirmed on PlaceOS/user-interfaces#551.
 * The management pages are withheld from non-admins either way: the sidebar's
 * `is_admin` reads the user's flags and groups, not the access setting.
 */
import { test, expect } from '../../../../e2e/support/concierge/fixtures';
import { CONCIERGE_URL } from '../../../../e2e/support/concierge/concierge.env';
import {
    useSettings,
    REQUIRE_ACCESS_GROUP,
} from '../../../../e2e/support/concierge/concierge.settings';

/** Sidebar links that only an admin should ever be offered. */
const ADMIN_ONLY = 'a[href*="zone-management"], a[href*="room-management"]';

test.describe('concierge access', () => {
    test('CON-AUTH-01: an admin reaches the app and the shell renders', async ({
        adminPage,
    }) => {
        await adminPage.goto('/#/');
        // `app-topbar` and `app-sidebar` are the shell the existing mock specs
        // already rely on, so they are the safest handles in this app.
        await expect(
            adminPage.locator('app-topbar'),
            'the concierge shell never rendered for an admin. If this fails first, ' +
                'nothing else in this app can be trusted. Check three things in order: ' +
                `the app is served on ${CONCIERGE_URL}; the dev server's proxy is ` +
                'pointed at the LOCAL stack via PLACE_PROXY_DOMAIN (see the webServer ' +
                'block in playwright.config.ts — without it the app authenticates ' +
                'against the shared dev deployment and is bounced to real Microsoft); ' +
                'and the storage state was minted for THAT origin',
        ).toBeVisible({ timeout: 45_000 });
        await expect(
            adminPage.locator('app-sidebar'),
            'the sidebar is what carries the navigation between concierge areas',
        ).toBeVisible({ timeout: 30_000 });
        await expect(
            adminPage,
            'and an authorised admin must not be bounced to /unauthorised',
        ).not.toHaveURL(/unauthorised/, { timeout: 10_000 });
        // The admin half of the comparison CON-B1 completes: an admin is
        // offered the management pages, so their absence for staff means
        // something.
        await expect(
            adminPage.locator(ADMIN_ONLY).first(),
            'an admin should be offered the org-management pages',
        ).toBeVisible({ timeout: 20_000 });
    });

    test('CON-AUTH-02: with an access group set, a user outside it is refused', async ({
        browser,
        conciergeStaffState,
    }) => {
        // The guard only compares groups once one is named, so the override
        // is what makes this a test of the guard. Applied to this context
        // alone: the group branch has no sys_admin bypass, so suite-wide it
        // would refuse the admin too (see REQUIRE_ACCESS_GROUP).
        const context = await browser.newContext({
            storageState: conciergeStaffState,
            ignoreHTTPSErrors: true,
            baseURL: CONCIERGE_URL,
        });
        try {
            const page = await context.newPage();
            await useSettings(page, REQUIRE_ACCESS_GROUP);
            await page.goto('/#/');

            // The guard calls `router.navigate(['/unauthorised'])`.
            await expect(
                page,
                'with app.allow_access_groups set to a group this user is not in, ' +
                    'AuthorisedUserGuard must send them to /unauthorised. If this ' +
                    'fails, the guard is not refusing anyone under ANY configuration',
            ).toHaveURL(/unauthorised/, { timeout: 45_000 });
            await expect(
                page.locator(ADMIN_ONLY),
                'and a refused user must not be offered the management pages',
            ).toHaveCount(0);
        } finally {
            await context.close();
        }
    });

    test('CON-AUTH-03: an unauthenticated visit is sent to the authority login', async ({
        browser,
    }) => {
        // `storageState: undefined` IS LOAD-BEARING. Do not remove it.
        //
        // Playwright merges the test's context options into
        // `browser.newContext()`, and this suite's fixtures set `storageState`
        // to the ADMIN state for every test. So a context created without
        // saying otherwise silently carries admin credentials.
        //
        // Measured 2026-09-17: the first version of this test omitted it, and
        // the "unauthenticated" context came up holding
        // `<client_id>_access_token` and walked straight into `#/book/rooms`.
        // The test then failed for the right-looking reason — "it stayed on the
        // app" — while actually exercising the admin. A false FAILURE rather
        // than a false pass, which is luckier than it deserved.
        //
        // The other tests here pass `conciergeStaffState` explicitly, so an
        // explicit value wins and they were never affected.
        const context = await browser.newContext({
            storageState: undefined,
            ignoreHTTPSErrors: true,
            baseURL: CONCIERGE_URL,
        });
        try {
            const page = await context.newPage();
            await page.goto('/#/');
            // ts-client finds no token, fails to refresh, and hands over to the
            // authority's `login_url`. On this stack that is the local backend
            // (`https://localhost:9443/login?continue=…`).
            //
            // Asserting "left the app" rather than one exact URL: where it lands
            // depends on the authority's configured login_url and its auth
            // source, which is a deployment choice, not a product guarantee. What
            // must NOT happen is the concierge UI rendering for someone with no
            // credentials at all.
            await expect
                .poll(() => page.url(), {
                    message:
                        'an unauthenticated visit must not stay on the concierge app. ' +
                        'If it does, check whether a token was left in this origin\'s ' +
                        'localStorage by another test — this context is deliberately ' +
                        'created without storage state',
                    timeout: 45_000,
                })
                .not.toMatch(/localhost:4215/);

            await expect(
                page.locator(ADMIN_ONLY),
                'and no management surface may be rendered on the way out',
            ).toHaveCount(0);
        } finally {
            await context.close();
        }
    });

    /**
     * CON-B1 — the default configuration admits any signed-in user.
     *
     * `e2e-staff-0@place.tech` has `sys_admin: false`, `support: false` and
     * `groups: []`. With `app.allow_access_groups` unset the guard admits it;
     * the sidebar still drops the management block, because `is_admin` reads
     * the user's flags and groups.
     */
    test('CON-B1: with no access group configured, a staff user is admitted without the management pages', async ({
        browser,
        conciergeStaffState,
    }) => {
        const context = await browser.newContext({
            storageState: conciergeStaffState,
            ignoreHTTPSErrors: true,
            baseURL: CONCIERGE_URL,
        });
        try {
            const page = await context.newPage();
            // No settings override: this is the default configuration.
            await page.goto('/#/');
            await expect(
                page.locator('app-topbar'),
                'a signed-in staff user must be given the concierge shell when no ' +
                    'access group is configured. If this fails, check nothing has ' +
                    'set app.allow_access_groups on this stack before reading the ' +
                    'guard: the open default is intended (PlaceOS/user-interfaces#551)',
            ).toBeVisible({ timeout: 45_000 });
            await expect(
                page.locator('app-sidebar a').first(),
                'and the sidebar carries the booking areas for an admitted user',
            ).toBeVisible({ timeout: 30_000 });
            await expect(
                page,
                'an admitted user must not be bounced to /unauthorised',
            ).not.toHaveURL(/unauthorised/);
            await expect(
                page.locator(ADMIN_ONLY),
                'the management pages stay admin-only: app-sidebar hides the ' +
                    'facilities block for anyone without the admin flag or groups',
            ).toHaveCount(0);
        } finally {
            await context.close();
        }
    });
});

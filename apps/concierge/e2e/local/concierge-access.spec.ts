/**
 * CON-AUTH-01 / 02 / 03 — who may open concierge at all.
 *
 * The most important file in this app, and the reason it is the first one
 * written. Concierge reads and writes EVERYBODY's bookings and the org
 * hierarchy: who is allowed in is the whole security boundary, and every other
 * concierge spec signs in as an admin — so without these, the boundary would be
 * the one thing never exercised.
 *
 * ## Rewritten 2026-09-17, because the first version was a false pass
 *
 * The original CON-AUTH-02 asserted `refused || !shell || noManagementLinks`
 * and went green on its first run. It was measured afterwards, and it passed on
 * the third clause only — a plain staff user was NOT refused. They were given
 * the concierge app:
 *
 *   admin  -> 21 sidebar links, zone-management present
 *   staff  -> 13 sidebar links, zone-management absent
 *
 * The 13 they keep include everybody's desk and parking bookings, the visitor
 * list, catering orders, the staff directory and all three reports — including
 * contact tracing. Losing the eight admin-group links is not a refusal, so the
 * old assertion was reporting a pass over a genuine hole. That hole is CON-B1
 * below.
 *
 * So the file now separates two different questions that the first version had
 * collapsed into one:
 *
 *   CON-AUTH-02 — does the guard work AT ALL, when it is switched on?
 *   CON-B1      — what happens on the default configuration, where it is off?
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
        // The positive half of CON-B1's comparison: an admin really does get the
        // management surfaces, so their absence for staff means something.
        await expect(
            adminPage.locator(ADMIN_ONLY).first(),
            'an admin should be offered the org-management pages',
        ).toBeVisible({ timeout: 20_000 });
    });

    test('CON-AUTH-02: with an access group set, a user outside it is refused', async ({
        browser,
        conciergeStaffState,
    }) => {
        // This is the guard's real test, and it only means anything with the
        // group configured — see REQUIRE_ACCESS_GROUP for why. Applied to this
        // context alone: the override would refuse the admin too, because the
        // group branch has no sys_admin bypass.
        const context = await browser.newContext({
            storageState: conciergeStaffState,
            ignoreHTTPSErrors: true,
            baseURL: CONCIERGE_URL,
        });
        try {
            const page = await context.newPage();
            await useSettings(page, REQUIRE_ACCESS_GROUP);
            await page.goto('/#/');

            // Now there IS one expected outcome to converge on, so this
            // asserts rather than sampling: the guard calls
            // `router.navigate(['/unauthorised'])`.
            await expect(
                page,
                'with app.allow_access_groups set to a group this user is not in, ' +
                    'AuthorisedUserGuard must send them to /unauthorised. If this ' +
                    'fails, the guard is not refusing anyone under ANY configuration, ' +
                    'which is a much bigger problem than CON-B1',
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
        // The other two tests here pass `conciergeStaffState` explicitly, so an
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
     * CON-B1 — the finding, written as the test that will pass once it is fixed.
     *
     * `fixme`, in the same style as the ROOM-B* specs: the assertion below
     * states the behaviour we believe is correct, so this turns green the day
     * the default changes and stays a standing record until then.
     *
     * What was measured on 2026-09-17, on the default configuration
     * (`app.allow_access_groups` unset):
     *
     *  - `e2e-staff-0@place.tech` — `sys_admin: false`, `support: false`,
     *    `groups: []` — loaded concierge and got the full shell and 13 sidebar
     *    links, among them everyone's desk and parking bookings, the visitor
     *    list, catering orders, the staff directory and the contact-tracing
     *    report.
     *  - It is not only the nav. With that user's own token:
     *      GET /api/engine/v2/users                               -> 200, 5 rows
     *      GET /bookings?type=desk&zones=<zone>                   -> 200, and it
     *        returned a desk booking belonging to support@place.tech
     *      GET /bookings?type=desk&email=support@place.tech        -> 200, same
     *    A plain `?type=desk` with no filter returns 0 rows, so the backend does
     *    scope by default — but concierge lists by zone, which is exactly the
     *    shape that reads straight through.
     *
     * Cause, in one line: `authorised-user.guard.ts:111-113` takes the
     * `!groups.length` branch and sets `can_activate = true` for everybody when
     * no access group is configured, and no group is configured by default.
     *
     * Worth saying plainly in review: a deployment that never sets
     * `app.allow_access_groups` gives every authenticated staff member the
     * concierge front desk.
     */
    test.fixme(
        'CON-B1: by default a plain staff user is still given the concierge app',
        async ({ browser, conciergeStaffState }) => {
            const context = await browser.newContext({
                storageState: conciergeStaffState,
                ignoreHTTPSErrors: true,
                baseURL: CONCIERGE_URL,
            });
            try {
                const page = await context.newPage();
                // No settings override on purpose. This is the DEFAULT.
                await page.goto('/#/');
                await expect(
                    page.locator('app-topbar').or(page.locator('app-sidebar')).first(),
                ).toBeVisible({ timeout: 45_000 });

                const url = page.url();
                const refused = /unauthorised|unauthorized|misconfigured/.test(url);
                const links = await page.locator('app-sidebar a').count();

                expect(
                    refused || links === 0,
                    `a plain non-admin staff user must not be given the concierge app ` +
                        `on the default configuration. They landed on "${url}" with ` +
                        `${links} sidebar link(s). Fix is either a shipped default for ` +
                        `app.allow_access_groups or a guard that refuses when no group ` +
                        `is configured (fail closed), rather than admitting everyone`,
                ).toBe(true);
            } finally {
                await context.close();
            }
        },
    );
});

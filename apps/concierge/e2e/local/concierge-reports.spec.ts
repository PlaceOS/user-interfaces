/**
 * CON-REP-01 / CON-REP-02 — concierge's reports.
 *
 * ## Two of the three reports are calendar-backed, so they cannot be tested here
 *
 * Measured 2026-09-17 by loading each page and pressing Generate Report:
 *
 *   /#/reports/bookings          "Rooms Report"            -> 500 /api/staff/v1/events
 *   /#/reports/attendance        "Site Attendance Report"  -> 500 /api/staff/v1/events
 *   /#/reports/contact-tracing   "Contact Tracing Report"  -> no failed call
 *
 * The route named `bookings` is a ROOMS report, which is the surprise here — it
 * reads the Microsoft calendar, not PlaceOS bookings, so it is blocked by the
 * same placeholder tenant as the concierge day view (see
 * `concierge-dayview.spec.ts`). Attendance is the same. Anyone reading the route
 * name and assuming "bookings report = /bookings" would waste an afternoon, so
 * it is written down here.
 *
 * ## What is tested
 *
 * CON-REP-01, as the plan framed it — "a report renders for a seeded window
 * without an uncaught exception" — is worth having even while the data is
 * unavailable, and it is genuinely testable: each page must render its controls
 * and its prompt, and must not throw when its query fails. That is the guard
 * that catches a report page going blank, which is indistinguishable from a
 * page that failed to load.
 *
 * CON-REP-02 — "a report's totals match what the API returns for the same
 * window" — is the one with teeth and it is `fixme`. Two of the three reports
 * have no numbers to compare, and the third needs a user chosen from a
 * directory-backed picker.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';

const REPORTS = [
    {
        route: '/#/reports/bookings',
        heading: /Rooms Report/i,
        calendar_backed: true,
    },
    {
        route: '/#/reports/attendance',
        heading: /Attendance Report/i,
        calendar_backed: true,
    },
    {
        route: '/#/reports/contact-tracing',
        heading: /Contact Tracing Report/i,
        calendar_backed: false,
    },
] as const;

test.describe('concierge reports', () => {
    for (const report of REPORTS) {
        test(`CON-REP-01: ${report.route} renders and survives its own query`, async ({
            adminPage,
        }) => {
            // Uncaught exceptions do not fail a Playwright test by themselves —
            // the page carries on and the assertions below would pass over a
            // broken component. Collecting them is what makes this row mean
            // something.
            const crashes: string[] = [];
            adminPage.on('pageerror', (error) => crashes.push(error.message));

            await adminPage.goto(report.route);

            // `date-range-field`, not `reports-options`.
            //
            // The three reports do NOT share a control set: rooms and
            // attendance render `reports-options` with a Generate Report
            // button, while contact tracing is driven from the topbar (a user
            // search) and has no `reports-options` at all — measured, after
            // asserting on it and watching contact tracing fail. The date range
            // is the one control all three do have.
            await expect(
                adminPage.locator('date-range-field'),
                'the report controls never rendered',
            ).toBeVisible({ timeout: 45_000 });
            await expect(
                adminPage.getByText(report.heading),
                'and the report must name itself, so a blank panel can be told ' +
                    'apart from a page that failed to load',
            ).toBeVisible({ timeout: 30_000 });

            // The generate button only exists on the two that take a range;
            // contact tracing is driven by choosing a user instead.
            const generate = adminPage.getByRole('button', {
                name: /Generate Report/i,
            });
            if (await generate.count()) {
                await generate.first().click();
                // Long enough for the query to fail and the component to react.
                await adminPage.waitForTimeout(8_000);
            }

            expect(
                crashes,
                `${report.route} must not throw when its query fails. On this stack ` +
                    `the rooms and attendance reports both get a 500 from ` +
                    `/api/staff/v1/events (the placeholder Microsoft tenant), and an ` +
                    `empty report is the correct outcome — an uncaught exception is not`,
            ).toEqual([]);

            await expect(
                adminPage.locator('app-topbar'),
                'and the shell must still be standing afterwards',
            ).toBeVisible();
        });
    }

    /**
     * CON-REP-02 — blocked.
     *
     * "A report's totals match what the API returns for the same window" is the
     * assertion with teeth: a report that renders the WRONG number looks
     * perfectly healthy, and nothing else in this suite would catch it.
     *
     * It cannot be written here:
     *
     *  - the rooms and attendance reports read `/api/staff/v1/events`, which is
     *    a 500 on this stack, so there is no total to compare against;
     *  - the contact-tracing report does not 500, but it needs a user chosen
     *    from the topbar, and the staff/user pickers in this app are
     *    directory-backed (`/api/staff/v1/people`, also a 500 — see
     *    `concierge-staff.spec.ts`).
     *
     * To revive it: the same two fixes that unblock everything else here — a
     * local-bookings path for the reports, or real Microsoft credentials.
     */
    test.fixme(
        'CON-REP-02: a report total matches the API for the same window — blocked by the placeholder calendar',
        async ({ adminApi }) => {
            const now = Math.floor(Date.now() / 1000);
            const res = await adminApi.get('/api/staff/v1/events', {
                params: {
                    period_start: String(now),
                    period_end: String(now + 86_400),
                },
            });
            expect(
                res.status(),
                'the reports cannot be compared against an API that does not answer',
            ).toBe(200);
        },
    );
});

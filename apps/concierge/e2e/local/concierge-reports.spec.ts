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
import { CALENDAR_ENABLED } from '../../../../e2e/support/calendar/calendar.env';
import {
    calendarSlot,
    createRoomEvent,
    deleteRoomEvent,
    ensureCalendarRoom,
    listZoneEvents,
    sweepRoomEvents,
} from '../../../../e2e/support/concierge/calendar.seed';
import { uniqueTitle } from '../../../../e2e/support/api';

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
     * CON-REP-02 — a report total matches the API for the same window.
     *
     * The Rooms report, against the Microsoft 365 tenant: one event is put on
     * the calendar room on a day nothing else uses, the report is generated for
     * that day and the building, and its "total bookings" figure must equal the
     * number of events the API returns for the same window and zone. The
     * report reads its window and zones from the URL (`report-spaces.component.ts`).
     */
    test.describe('with the Microsoft 365 tenant', () => {
        test.skip(
            !CALENDAR_ENABLED,
            'needs the Microsoft 365 tenant: set E2E_O365_TENANT, E2E_O365_CLIENT_ID ' +
                'and E2E_O365_CLIENT_SECRET before up.sh',
        );

        test('CON-REP-02: the rooms report total matches the API for the same window', async ({
            adminPage,
            adminApi,
            calendarApi,
        }) => {
            const room = await ensureCalendarRoom(adminApi);
            // A day of its own: the day view specs use six days out.
            const slot = calendarSlot(7, 10);
            await sweepRoomEvents(calendarApi, room, slot.day_start, slot.day_end);
            const title = uniqueTitle('E2E Report');
            const event = await createRoomEvent(calendarApi, room, { ...slot, title });
            try {
                const from_api = async () =>
                    (await listZoneEvents(adminApi, room.building_id, slot.day_start, slot.day_end))
                        .filter((e) => e.status !== 'cancelled').length;
                await expect
                    .poll(from_api, { message: 'the API must list the event first', timeout: 30_000 })
                    .toBeGreaterThan(0);
                const expected = await from_api();

                await adminPage.goto(
                    `/#/reports/bookings?start=${slot.day_start * 1000}&end=${slot.day_end * 1000 - 1}` +
                        `&zones=${room.building_id}`,
                );
                await adminPage.locator('reports-options button[btn]').first().click();
                const overall = adminPage.locator('report-spaces-overall');
                await expect(
                    overall,
                    'generating the report for a day with a booking must render the totals',
                ).toBeVisible({ timeout: 45_000 });
                // Business days, total bookings, active, rejected, cancelled, average.
                const total = overall.locator('p').nth(1);
                await expect(
                    total,
                    `the report's total must match the ${expected} event(s) the API returns for the window`,
                ).toHaveText(String(expected), { timeout: 15_000 });
            } finally {
                await deleteRoomEvent(calendarApi, room, event.id);
            }
        });
    });
});

/**
 * HOME-15 — the home page loads without throwing.
 *
 * The cheapest guard on the app's first screen, and the one that catches the
 * failure users describe as "it's broken": an uncaught exception during load
 * leaves panels blank with no message. Nothing else in the suite watches for it,
 * because every other test is busy asserting on data.
 *
 * ## `fixme` — it cannot pass while HOME-B2 stands
 *
 * Measured on this stack: loading the home page raises an unhandled rejection
 * whose value is a `Response`, because `GET /api/staff/v1/calendars` returns
 * **500** and nothing catches it. That is the same defect the quick-book tile
 * trips over (HOME-B2) — the calendar surface needs real tenant credentials, and
 * the app does not handle its absence.
 *
 * The 500 itself is expected here and is not what this test objects to: the
 * assertion excludes `/calendars` and `/events` by name. What it objects to is
 * the exception escaping, which would happen on a misconfigured tenant in
 * production exactly as it does here.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { LandingPage } from '../../../../e2e/support/home/landing.page';

test.describe('home page — loading cleanly', () => {
    test.fixme('the home page loads with no uncaught exception', async ({ staffPage }) => {
        const thrown: string[] = [];
        const server_errors: string[] = [];
        staffPage.on('pageerror', (error) => thrown.push(error.message));
        staffPage.on('response', (r) => {
            if (r.status() < 500) return;
            server_errors.push(`${r.status()} ${new URL(r.url()).pathname}`);
        });

        const home = new LandingPage(staffPage);
        await home.open();
        // Long enough for the panels to finish their own requests: an exception
        // raised by a late response is still an exception.
        await staffPage.waitForTimeout(6_000);

        expect(
            thrown,
            `the home page must not raise an uncaught exception while loading. Got:\n` +
                `${thrown.join('\n')}\nServer errors seen: ${JSON.stringify(server_errors)}`,
        ).toEqual([]);

        // The calendar endpoints are expected to fail on this stack and are
        // excluded BY NAME rather than by silence. Any other 5xx is the page's
        // problem.
        const unexpected = server_errors.filter(
            (e) => !/\/(events|calendars)(\/|$)/.test(e),
        );
        expect(
            unexpected,
            `no server error other than the known calendar ones should be provoked. ` +
                `All 5xx seen: ${JSON.stringify(server_errors)}`,
        ).toEqual([]);
    });
});

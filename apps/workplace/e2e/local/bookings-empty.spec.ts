/**
 * YB-11 — a day with nothing on it.
 *
 * The cheapest test on this page and the one with the worst failure mode: an
 * empty list that renders as a blank panel looks identical to a page that
 * failed to load, and a user cannot tell whether they have no bookings or the
 * app is broken. Nothing else in this suite ever looks at a day with no
 * bookings, because every other spec seeds one first.
 *
 * It also guards the console. A day with no data is where null handling shows
 * up, so the page is asserted to render its empty state with no page error.
 *
 * ## The day
 *
 * A fresh non-admin user owns no bookings, including cancelled history. A fixed
 * relative day alone is not isolated: old runs eventually overlap that date.
 * The temporary user is removed even if setup or authentication fails.
 */
import { type BrowserContext } from '@playwright/test';
import { apiFor, currentUser, ENGINE_API } from '../../../../e2e/support/api';
import { buildStorageState, mintToken } from '../../../../e2e/support/auth';
import { APP_URL, BACKEND_URL } from '../../../../e2e/support/env';
import { test as base, expect } from '../../../../e2e/support/fixtures';
import { SCHEDULE_DAYS, slotOn } from '../../../../e2e/support/bookings/bookings.env';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';

// Override only this spec's page; shared worker identities remain untouched.
const test = base.extend({
    staffPage: async ({ browser, adminStorageState }, use, testInfo) => {
        void adminStorageState;
        const request = await apiFor('admin', testInfo.parallelIndex);
        const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
        const email = `yb-empty-${suffix}@example.com`;
        const password = `E2E-${suffix}-Password!`;
        let user_id: string | undefined;
        let context: BrowserContext | undefined;
        try {
            const admin = await currentUser(request);
            const created = await request.post(`${ENGINE_API}/users`, {
                data: {
                    name: `YB Empty ${suffix}`,
                    email,
                    password,
                    authority_id: admin.authority_id,
                    sys_admin: false,
                    support: false,
                },
            });
            expect(created.ok(), 'temporary empty-user creation').toBe(true);
            user_id = (await created.json()).id;
            expect(user_id).toBeTruthy();
            const token = await mintToken(BACKEND_URL, APP_URL, email, password);
            context = await browser.newContext({
                storageState: buildStorageState(token, APP_URL),
            });
            await use(await context.newPage());
        } finally {
            testInfo.setTimeout(testInfo.timeout + 30_000);
            try {
                // Recover a user created before its response could be read.
                if (!user_id) {
                    const found = await request.get(
                        `${ENGINE_API}/users/${encodeURIComponent(email)}`,
                        { timeout: 5_000 },
                    );
                    if (found.status() !== 404) {
                        expect(found.ok(), 'temporary user lookup').toBe(true);
                        user_id = (await found.json()).id;
                        expect(user_id).toBeTruthy();
                    }
                }
                if (user_id) {
                    const deleted = await request.delete(
                        `${ENGINE_API}/users/${user_id}`,
                        { timeout: 5_000 },
                    );
                    expect(deleted.ok() || deleted.status() === 404,
                        'temporary empty-user cleanup').toBe(true);
                }
            } finally {
                try {
                    await context?.close();
                } finally {
                    await request.dispose();
                }
            }
        }
    },
});

test.describe('your bookings — an empty day', () => {
    test('a day with no bookings shows the empty state, not a blank panel', async ({
        staffPage,
    }) => {
        const day = slotOn(SCHEDULE_DAYS.empty, 12);

        // Anything the page logs as an error, kept for the assertion below.
        //
        // Server errors are collected WITH THEIR URL rather than from the
        // console. A console line for a failed request says only "the server
        // responded with 500", which cannot be told apart from a genuine page
        // fault — and this stack has a known one (see the filter below).
        //
        // Only UNCAUGHT EXCEPTIONS count as the page's own failure. Console
        // errors are not used: on a stack this suite hammers they arrive from
        // everywhere — failed requests, third-party noise, another test's load —
        // and a spec that fails on any of them fails for reasons that have
        // nothing to do with this page. Measured: one run in three tripped on a
        // console line about a request that had nothing to do with the schedule.
        //
        // An uncaught exception is the thing that actually produces a blank
        // panel, so that is what is asserted, plus any 5xx below.
        const problems: string[] = [];
        const server_errors: string[] = [];
        staffPage.on('pageerror', (error) => problems.push(`pageerror: ${error.message}`));
        staffPage.on('response', (r) => {
            if (r.status() < 500) return;
            server_errors.push(`${r.status()} ${new URL(r.url()).pathname}`);
        });

        const schedule = new SchedulePage(staffPage);
        await schedule.open();
        await schedule.showDayOf(day.date_ms);
        await schedule.waitForLoaded();

        await expect(
            schedule.emptyState,
            'a day with no bookings must show the empty state. A blank panel is ' +
                'indistinguishable from a page that failed to load',
        ).toBeVisible({ timeout: 30_000 });

        expect(
            await schedule.cardCount(),
            'and there should be no cards on a day nothing was ever booked on',
        ).toBe(0);

        expect(
            problems,
            `the empty day must not throw an uncaught exception, got:\n${problems.join('\n')}`,
        ).toEqual([]);

        // The calendar endpoints are EXPECTED to fail here and are excluded by
        // name, not by silence: `/events` and `/calendars` call Microsoft or
        // Google, and this stack has placeholder tenant credentials, so they
        // return 500 on every page that asks for calendar events. That is the
        // documented out-of-scope surface (WP-E2E-15), not a fault in this page.
        //
        // Every OTHER 5xx is this page's problem and fails the test.
        const unexpected = server_errors.filter(
            (e) => !/\/(events|calendars)(\/|$)/.test(e),
        );
        expect(
            unexpected,
            `the empty day should not provoke a server error other than the known ` +
                `calendar ones. All 5xx seen: ${JSON.stringify(server_errors)}`,
        ).toEqual([]);
    });
});

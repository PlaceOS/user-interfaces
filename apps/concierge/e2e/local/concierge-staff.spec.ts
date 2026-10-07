/**
 * CON-STAFF-01 / 02 — concierge's staff directory, `/#/users/staff`.
 *
 * The staff listing reads `GET /api/staff/v1/people`, which is the calendar
 * DIRECTORY surface: Microsoft/Google backed, with no local-user fallback on
 * this page (the workplace desk specs force `app.basic_user_search`, which
 * switches the host picker to `GET /api/engine/v2/users`; there is no such
 * switch here).
 *
 * ## Two stacks, two groups of rows
 *
 * Without the Microsoft 365 tenant (`e2e/support/calendar/calendar.env.ts`)
 * the call dies at Microsoft with a 500. What is still proven then: the local
 * user list answers, so the data exists (CON-STAFF-00), and the page fails
 * without taking the app down and without an unhandled rejection (CON-B2).
 *
 * With it, the directory is the tenant's users, and the listing rows run for
 * real; the stack's local staff users are not in that directory, so the rows
 * look for the calendar identity, a local admin whose address is one of the
 * tenant's mailboxes.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import { CALENDAR_ENABLED, CALENDAR_USER_EMAIL } from '../../../../e2e/support/calendar/calendar.env';
import { listBookings } from '../../../../e2e/support/api';

const STAFF_ROUTE = '/#/users/staff';
const DIRECTORY_ENDPOINT = '/api/staff/v1/people';

test.describe('concierge staff directory', () => {
    test('CON-STAFF-00: the seeded users exist locally, and the page survives the directory failing', async ({
        adminPage,
        adminApi,
    }) => {
        // 1. The data exists in PlaceOS itself.
        const local = await adminApi.get('/api/engine/v2/users', {
            params: { limit: '200' },
        });
        expect(
            local.ok(),
            'the local PlaceOS user list must answer — if this fails the problem is ' +
                'the seeding, not the directory',
        ).toBe(true);
        const users = await local.json();
        expect(
            (Array.isArray(users) ? users : (users.results ?? [])).length,
            'the stack seeds an admin plus four staff users',
        ).toBeGreaterThan(1);

        // 2. The page survives the directory call failing.
        const crashes: string[] = [];
        adminPage.on('pageerror', (error) => crashes.push(error.message));
        let directory_status: number | null = null;
        adminPage.on('response', (response) => {
            if (response.url().includes(DIRECTORY_ENDPOINT)) {
                directory_status = response.status();
            }
        });

        await adminPage.goto(STAFF_ROUTE);
        await expect(
            adminPage.locator('staff-listings'),
            'the staff page should still render its listing component',
        ).toBeAttached({ timeout: 45_000 });

        await expect
            .poll(() => directory_status, {
                message:
                    `the staff page never called ${DIRECTORY_ENDPOINT}. If that is ` +
                    `now true, re-read this file's header — the premise has changed`,
                timeout: 30_000,
            })
            .not.toBeNull();

        // eslint-disable-next-line no-console
        console.log(
            `CON-STAFF-00: ${DIRECTORY_ENDPOINT} answered ${directory_status} ` +
                `(500 is expected on this stack — placeholder office365 tenant)`,
        );

        // Recorded, not asserted — see CON-B2 below. The failure this page DOES
        // have is an unhandled rejection, and pinning it here would leave the
        // suite red over a known finding instead of guarding the thing that
        // matters: that the shell survives.
        // eslint-disable-next-line no-console
        console.log(
            `CON-STAFF-00: ${crashes.length} uncaught page error(s): ` +
                `${JSON.stringify(crashes)} — see CON-B2`,
        );

        await expect(
            adminPage.locator('app-topbar'),
            'the shell must still be standing after the directory call fails',
        ).toBeVisible();
        await expect(
            adminPage.locator('app-sidebar'),
            'and the navigation must still work, so the user can leave the page',
        ).toBeVisible();
    });

    /**
     * CON-B2 — the staff page leaves its failed directory call as an UNHANDLED
     * REJECTION.
     *
     * Found 2026-09-17 while writing CON-STAFF-00, and worth separating from
     * the environment blocker above, because this part is a code issue rather
     * than a credentials issue.
     *
     * When `GET /api/staff/v1/people` fails, the rejected promise is never
     * caught: the browser reports one uncaught error whose message is just
     * `"Response"` — the raw failed HTTP response, thrown and unhandled.
     *
     * **The comparison is what makes this a finding rather than a shrug.** The
     * day view makes the same kind of failing call to the same kind of
     * calendar-backed endpoint (`/api/staff/v1/events`, also 500 here) and
     * produces NO uncaught error at all — measured in
     * `concierge-dayview.spec.ts`, CON-DAY-08. So this is not "the stack is
     * broken so everything throws"; one page handles it and this one does not.
     *
     * Severity is low on its own — the page still renders and the shell
     * survives — but an unhandled rejection means there is no error path here,
     * so a real deployment whose directory is briefly unavailable shows the user
     * nothing at all rather than a message.
     *
     * The directory call now has a `catch`, which is what this verifies.
     */
    test(
        'CON-B2: the staff page handles a failing directory call without an unhandled rejection',
        async ({ adminPage }) => {
            const crashes: string[] = [];
            adminPage.on('pageerror', (error) => crashes.push(error.message));
            await adminPage.goto(STAFF_ROUTE);
            await expect(adminPage.locator('staff-listings')).toBeAttached({
                timeout: 45_000,
            });
            // Long enough for the directory call to fail and the rejection to
            // surface, which is the whole point.
            await adminPage.waitForTimeout(8_000);
            expect(
                crashes,
                'a failing directory call should be handled, not left to surface as ' +
                    'an uncaught "Response". The day view manages this (CON-DAY-08)',
            ).toEqual([]);
        },
    );

    /**
     * CON-STAFF-01 / 02 — the directory, against the Microsoft 365 tenant.
     *
     * The page lists the tenant's users; the stack's own staff users are local
     * PlaceOS accounts and are not in it, except the calendar identity, which
     * is a local admin whose address is one of the tenant's mailboxes. That is
     * the row these look for.
     *
     * "Opening a user" on this page is the check-in control on their row: it
     * stores a `staff` booking for the rest of the day and marks them onsite,
     * and check-out ends it. That is CON-STAFF-02 here.
     */
    test.describe('with the Microsoft 365 tenant', () => {
        test.skip(
            !CALENDAR_ENABLED,
            'needs the Microsoft 365 tenant: set E2E_O365_TENANT, E2E_O365_CLIENT_ID ' +
                'and E2E_O365_CLIENT_SECRET before up.sh',
        );

        const email = CALENDAR_USER_EMAIL;
        const row = (page) =>
            page.locator('staff-details').filter({ hasText: new RegExp(email, 'i') }).first();

        test('CON-STAFF-01: the staff list shows the directory, and search narrows it', async ({
            adminPage,
        }) => {
            await adminPage.goto(STAFF_ROUTE);
            await expect(
                row(adminPage),
                `${email} should be listed: it is a user in the tenant the stack is backed by`,
            ).toBeVisible({ timeout: 45_000 });
            const all = await adminPage.locator('staff-details').count();
            expect(all, 'the directory has more than the one user').toBeGreaterThan(1);

            const search = adminPage.locator('searchbar input').first();
            await search.fill(email.split('@')[0]);
            await expect(row(adminPage), 'searching by name keeps the match').toBeVisible({
                timeout: 15_000,
            });
            await expect
                .poll(() => adminPage.locator('staff-details').count(), {
                    message: 'and drops the rest',
                    timeout: 15_000,
                })
                .toBeLessThan(all);

            await search.fill('zzzz-nobody-here');
            await expect
                .poll(() => adminPage.locator('staff-details').count(), {
                    message: 'a search nothing matches empties the list',
                    timeout: 15_000,
                })
                .toBe(0);
        });

        test('CON-STAFF-02: checking a directory user in stores a staff booking, and out ends it', async ({
            adminPage,
            adminApi,
        }) => {
            const day_start = Math.floor(new Date().setUTCHours(0, 0, 0, 0) / 1000);
            const day_end = day_start + 86_400;
            const mine = async () =>
                (await listBookings(adminApi, 'staff', day_start, day_end)).filter(
                    (b) => `${b.asset_id}`.toLowerCase() === email.toLowerCase() && !b.deleted,
                );
            // Start clean: a check-in left by an earlier run would read as this one.
            for (const stale of await mine()) {
                await adminApi.delete(`/api/staff/v1/bookings/${stale.id}`);
            }

            await adminPage.goto(STAFF_ROUTE);
            const person = row(adminPage);
            await expect(person).toBeVisible({ timeout: 45_000 });
            await person.locator('action-icon').first().click();

            let booking;
            await expect
                .poll(async () => (booking = (await mine())[0]) && booking.checked_in, {
                    message: `checking ${email} in from the directory must store a checked-in staff booking`,
                    timeout: 20_000,
                })
                .toBe(true);
            try {
                await expect(
                    person.getByText(/onsite/i),
                    'and the row must show them onsite',
                ).toBeVisible({ timeout: 15_000 });

                // Check-out stamps the booking's end with the current second, and
                // staff-api refuses an end that equals the start. Nobody checks
                // out within the second they checked in; a test can.
                await adminPage.waitForTimeout(1500);
                await person.locator('action-icon').first().click();
                await expect
                    .poll(
                        async () => {
                            const now = (await mine())[0];
                            return now ? now.booking_end <= Math.floor(Date.now() / 1000) + 60 : true;
                        },
                        { message: 'checking out must end the booking now', timeout: 20_000 },
                    )
                    .toBe(true);
            } finally {
                for (const left of await mine()) {
                    await adminApi.delete(`/api/staff/v1/bookings/${left.id}`);
                }
            }
        });
    });
});

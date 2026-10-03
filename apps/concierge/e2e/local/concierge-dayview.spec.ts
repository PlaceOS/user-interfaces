/**
 * CON-DAY-01 … CON-DAY-08 — concierge's Room Bookings day view, `/#/`.
 *
 * This is concierge's DEFAULT page and its headline screen, and on this stack
 * almost none of it can be tested. That is a deliberate, recorded scope cut
 * rather than an oversight, so this file is mostly an explanation.
 *
 * ## Why six of the eight rows are `fixme`
 *
 * The day view reads room bookings from `GET /api/staff/v1/events`, which is
 * the Microsoft/Google calendar surface. `e2e/support/seed.ts` creates an
 * **office365 tenant with placeholder credentials on purpose**
 * (`tenant: 'e2e-local-placeholder'`), so every calendar call leaves the stack
 * and dies at Microsoft:
 *
 *     POST /api/staff/v1/events  status=500
 *     AADSTS900023: Specified tenant identifier 'e2e-local-placeholder' is
 *     neither a valid DNS name, nor a valid external domain
 *
 * Re-measured on 2026-09-17 from the browser: loading `/#/` fires
 * `GET /api/staff/v1/events` and it answers **500**.
 *
 * The workplace room specs dodge this with `app.events.use_bookings = true`,
 * which switches room booking to native PlaceOS bookings. **Concierge has no
 * such switch** — `events-state.service.ts` calls `queryEvents()`
 * unconditionally, and `apps/concierge/src/environments/settings.ts` sets only
 * `catering.use_bookings`, never `events.use_bookings`. So no booking can ever
 * appear on this timeline here. The page renders; it is permanently empty.
 *
 * **Decision taken 2026-09-17:** leave the concierge room-booking screens out
 * of scope on this stack, and keep these rows as failing-by-default `fixme`s so
 * they turn green the day a switch or real credentials arrive. The alternatives
 * considered were asking the developers for the same `use_bookings` switch, or
 * getting real Microsoft test credentials for the local stack.
 *
 * ## What IS tested here
 *
 * The two rows that do not need a booking: the shell renders (CON-DAY-01), and
 * the empty timeline is a clean empty state rather than a crash (CON-DAY-08).
 * CON-DAY-08 is the odd one out — normally the hardest state to arrange, and
 * here the only one available.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';

/** The calendar surface every blocked test below is waiting on. */
const CALENDAR_ENDPOINT = '/api/staff/v1/events';

test.describe('concierge day view', () => {
    test('CON-DAY-01: the day view renders for an authorised concierge user', async ({
        adminPage,
    }) => {
        await adminPage.goto('/#/');

        // The same three handles the existing mock spec uses, so this and
        // `dayview.spec.ts` cannot disagree about what "rendered" means.
        await expect(
            adminPage.locator('app-topbar'),
            'the concierge shell never rendered on the default route',
        ).toBeVisible({ timeout: 45_000 });
        await expect(
            adminPage.locator('app-sidebar'),
            'the sidebar carries the navigation between concierge areas',
        ).toBeVisible({ timeout: 30_000 });
        // `room-bookings > div`, NOT `room-bookings`.
        //
        // The custom element itself is unstyled and measures 1024x0, so
        // `toBeVisible()` on it is always false — measured 2026-09-17. Its inner
        // div is the thing with a box (1024x655). This is also the handle the
        // existing mock spec uses, so the two cannot disagree.
        await expect(
            adminPage.locator('room-bookings > div'),
            'the room-bookings timeline is the day view itself. It will be EMPTY on ' +
                'this stack (see the file header) — but it must still render',
        ).toBeVisible({ timeout: 30_000 });
        await expect(
            adminPage.locator('room-bookings-inverted-timeline'),
            'and the timeline body itself should be laid out, empty or not',
        ).toBeVisible({ timeout: 30_000 });

        // `/#/` is the app's default_route, so landing anywhere else means the
        // routing or the guard redirected, which is worth knowing about here
        // rather than in whichever spec happens to run next.
        await expect(adminPage).toHaveURL(/book\/rooms/, { timeout: 15_000 });
    });

    test('CON-DAY-08: the empty timeline renders cleanly, with no uncaught exception', async ({
        adminPage,
    }) => {
        // Uncaught exceptions do NOT fail a Playwright test on their own — the
        // page keeps going and the assertions below would happily pass over a
        // broken component. Collecting them is the only way this row means
        // anything.
        const crashes: string[] = [];
        adminPage.on('pageerror', (error) => crashes.push(error.message));

        let calendar_status: number | null = null;
        adminPage.on('response', (response) => {
            if (response.url().includes(CALENDAR_ENDPOINT)) {
                calendar_status = response.status();
            }
        });

        await adminPage.goto('/#/');
        await expect(adminPage.locator('room-bookings > div')).toBeVisible({
            timeout: 45_000,
        });
        // Give the failing calendar request time to land and the component time
        // to react to it. This is the state under test, so it must be reached.
        await expect
            .poll(() => calendar_status, {
                message:
                    `the day view never called ${CALENDAR_ENDPOINT}. If that is now ` +
                    `true, this whole file's premise has changed — re-read the header ` +
                    `and un-fixme the blocked rows`,
                timeout: 30_000,
            })
            .not.toBeNull();

        // Recording rather than asserting the 500: this test is about the app
        // surviving it, and pinning the status would make the row fail on the
        // good day the stack gets real credentials.
        // eslint-disable-next-line no-console
        console.log(
            `CON-DAY-08: ${CALENDAR_ENDPOINT} answered ${calendar_status} ` +
                `(500 is expected on this stack — see the file header)`,
        );

        expect(
            crashes,
            'the day view must survive its calendar query failing. An empty timeline ' +
                'is the correct outcome here; an uncaught exception is not',
        ).toEqual([]);

        await expect(
            adminPage.locator('app-topbar'),
            'and the shell must still be standing afterwards',
        ).toBeVisible();
    });

    /**
     * CON-DAY-02 … CON-DAY-07 — blocked by the placeholder calendar.
     *
     * Written as one `fixme` rather than six near-identical stubs: they all fail
     * at the same first step, for the same reason, and six copies of that
     * explanation would rot independently. The scenarios they stand for:
     *
     *   CON-DAY-02  a room booking made through the API appears on the timeline
     *   CON-DAY-03  changing the day moves the timeline with it
     *   CON-DAY-04  a booking made by ANOTHER user is visible here
     *   CON-DAY-05  booking a room from the day view stores it correctly
     *   CON-DAY-06  a tentative booking can be APPROVED from the approvals list
     *   CON-DAY-07  rejecting from the approvals list records the rejection
     *
     * CON-DAY-04 is the one worth regretting: "another user's booking is
     * visible" is the entire difference between a concierge view and the
     * workplace one, and it is the single most valuable assertion in this area.
     *
     * To revive these: give concierge an `app.events.use_bookings` switch (then
     * these become ordinary native-booking tests, like the workplace room
     * specs), or point the stack at a real Microsoft tenant.
     */
    test.fixme(
        'CON-DAY-02..07: bookings on the timeline — blocked by the placeholder calendar',
        async ({ adminPage, adminApi }) => {
            await adminPage.goto('/#/');
            const res = await adminApi.get(`${CALENDAR_ENDPOINT}`, {
                params: {
                    period_start: String(Math.floor(Date.now() / 1000)),
                    period_end: String(Math.floor(Date.now() / 1000) + 86_400),
                },
            });
            // The precondition for every scenario listed above. While this is a
            // 500 none of them can be written honestly.
            expect(
                res.status(),
                `${CALENDAR_ENDPOINT} must answer before any booking can appear on ` +
                    `the concierge timeline`,
            ).toBe(200);
        },
    );
});

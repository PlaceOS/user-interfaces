/**
 * CON-DAY-01 … CON-DAY-08 — concierge's Room Bookings day view, `/#/`.
 *
 * This is concierge's DEFAULT page and its headline screen. The day view reads
 * room bookings from `GET /api/staff/v1/events`, which is the Microsoft/Google
 * calendar surface: there is no native-booking switch in concierge
 * (`events-state.service.ts` calls `queryEvents()` unconditionally), so what
 * the timeline shows is whatever is on the rooms' calendars.
 *
 * ## Two stacks, two groups of rows
 *
 * Without the Microsoft 365 tenant (`e2e/support/calendar/calendar.env.ts`)
 * the tenant row carries placeholder credentials and the calendar call dies at
 * Microsoft; the rows that need a booking skip, and the two that do not still
 * run: the shell renders (CON-DAY-01) and the empty timeline is a clean empty
 * state rather than a crash (CON-DAY-08).
 *
 * With it, `E2E Calendar Room` (`calendar.seed.ts`) has a real room mailbox,
 * events the CALENDAR identity creates through staff-api land on it, and the
 * timeline rows run for real. The admin who views the day view is a different
 * user from the one who made the booking, which is the point of a concierge
 * view (CON-DAY-04).
 *
 * The native rooms the workplace specs seed carry `@place.tech` addresses that
 * are not mailboxes, so the listing for the building answers 206 with those
 * calendars named in `X-Calendar-Issue`; the app treats that as success and
 * shows what came back.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    calendarSlot,
    createRoomEvent,
    deleteRoomEvent,
    ensureCalendarRoom,
    listZoneEvents,
    sweepRoomEvents,
} from '../../../../e2e/support/concierge/calendar.seed';
import { uniqueTitle } from '../../../../e2e/support/api';

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

        // Recording rather than asserting the status: this test is about the
        // app surviving whatever comes back. 500 on the placeholder tenant, 206
        // on the real one (the native rooms' addresses are not mailboxes).
        // eslint-disable-next-line no-console
        console.log(`CON-DAY-08: ${CALENDAR_ENDPOINT} answered ${calendar_status}`);
        expect(
            crashes,
            'the day view must survive its calendar query failing or coming back ' +
                'partial. An empty timeline is a correct outcome; an uncaught ' +
                'exception is not',
        ).toEqual([]);

        await expect(
            adminPage.locator('app-topbar'),
            'and the shell must still be standing afterwards',
        ).toBeVisible();
    });

    /**
     * CON-DAY-02 … CON-DAY-07 — bookings on the timeline, against the tenant.
     *
     *   CON-DAY-02  a room booking made through the API appears on the timeline
     *   CON-DAY-03  changing the day moves the timeline with it
     *   CON-DAY-04  a booking made by ANOTHER user is visible here
     *   CON-DAY-05  booking a room from the day view stores it correctly
     *   CON-DAY-06  a tentative booking can be APPROVED from the approvals list
     *   CON-DAY-07  rejecting from the approvals list records the rejection
     *
     * 02, 03 and 04 are below. 05 drives the booking modal and is not written
     * yet. 06 and 07 need the approvals panel, which only renders when the org
     * has an `approvals` module binding (`room-bookings.component.ts`,
     * `has_approvals`), a driver the stack does not run; they stay `fixme`.
     *
     * Every event is created days out, in a slot nothing else uses, and
     * deleted in `finally`; the slot's day is swept first so an aborted run
     * cannot leave a conflicting event behind.
     */
    test.describe('with the Microsoft 365 tenant', () => {
        test.beforeEach(({ conciergeCalendarBacked }) => {
            test.skip(
                !conciergeCalendarBacked,
                'needs the Microsoft 365 tenant: set E2E_O365_TENANT, E2E_O365_CLIENT_ID ' +
                    'and E2E_O365_CLIENT_SECRET before up.sh',
            );
        });

        /** Day-view navigation: today plus this many days, by the next-day arrow. */
        const DAYS_AHEAD = 6;

        async function goToDay(page, days_ahead: number) {
            await page.goto('/#/');
            await expect(page.locator('room-bookings > div')).toBeVisible({ timeout: 45_000 });
            const next = page.locator('date-options [data-shortcut="next"]').first();
            for (let i = 0; i < days_ahead; i++) await next.click();
        }

        test('CON-DAY-02/04: a booking another user made through the API appears on the timeline', async ({
            adminPage,
            adminApi,
            calendarApi,
        }) => {
            const room = await ensureCalendarRoom(adminApi);
            const slot = calendarSlot(DAYS_AHEAD, 10);
            await sweepRoomEvents(calendarApi, room, slot.day_start, slot.day_end);
            const title = uniqueTitle('E2E Day View');
            const event = await createRoomEvent(calendarApi, room, { ...slot, title });
            try {
                // The API side first, so a UI failure below is known to be the UI's.
                await expect
                    .poll(
                        async () =>
                            (await listZoneEvents(adminApi, room.building_id, slot.day_start, slot.day_end))
                                .filter((e) => e.title === title && e.system?.id === room.id).length,
                        {
                            message: `the building listing must return "${title}" against ${room.name}`,
                            timeout: 30_000,
                        },
                    )
                    .toBe(1);

                // The viewer is support@place.tech; the booking is Adele's.
                await goToDay(adminPage, DAYS_AHEAD);
                await expect(
                    adminPage.locator('room-bookings').getByText(title),
                    `${title} should be on the timeline for ${room.name}, ${DAYS_AHEAD} days out. ` +
                        `It was made by the calendar identity, not by the user viewing the page`,
                ).toBeVisible({ timeout: 30_000 });
            } finally {
                await deleteRoomEvent(calendarApi, room, event.id);
            }
        });

        test('CON-DAY-03: changing the day moves the timeline with it', async ({
            adminPage,
            adminApi,
            calendarApi,
        }) => {
            const room = await ensureCalendarRoom(adminApi);
            // A later hour than CON-DAY-02/04 on the same day, so the two
            // events cannot be declined for overlapping.
            const slot = calendarSlot(DAYS_AHEAD, 12);
            const title = uniqueTitle('E2E Day Change');
            const event = await createRoomEvent(calendarApi, room, { ...slot, title });
            try {
                await goToDay(adminPage, DAYS_AHEAD);
                const shown = adminPage.locator('room-bookings').getByText(title);
                await expect(shown).toBeVisible({ timeout: 30_000 });

                await adminPage.locator('date-options [data-shortcut="next"]').first().click();
                await expect(
                    shown,
                    'the day after must not show a booking that is on the day before',
                ).toHaveCount(0, { timeout: 15_000 });

                await adminPage.locator('date-options [data-shortcut="previous"]').first().click();
                await expect(shown, 'and going back must show it again').toBeVisible({
                    timeout: 30_000,
                });
            } finally {
                await deleteRoomEvent(calendarApi, room, event.id);
            }
        });

        test.fixme(
            'CON-DAY-05: booking a room from the day view stores it correctly',
            async () => {
                // Not written: the booking modal (event-book-modal) with its
                // space picker and time fields has not been mapped yet. Must
                // run as the calendar identity (`calendarPage`), since staff-api
                // creates the event on the signed-in user's own calendar.
            },
        );

        test.fixme(
            'CON-DAY-06/07: approving and rejecting from the approvals list',
            async () => {
                // The approvals panel renders only with an `approvals` org
                // binding, which is a driver module the stack does not run.
            },
        );
    });
});

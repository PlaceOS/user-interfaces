/**
 * VIS-09 / VIS-10 — inviting a visitor ON BEHALF OF somebody else.
 *
 * Three people are involved in a delegated invite and the model only names two
 * of them, which is the thing most likely to be got wrong:
 *
 *   user_email / user_id / user_name   the HOST — who the visitor is here to see
 *   booked_by_email / booked_by_name   the BOOKER — who filled the form in
 *   asset_id + attendees               the VISITOR
 *
 * "Booked for" and "host" are the same field. There is no third role.
 *
 * Visibility follows from that split, and it is not symmetric:
 *
 *   the HOST   sees the invite in a plain `GET /bookings` listing
 *   the BOOKER sees it ONLY with `include_booked_by=true`
 *
 * The schedule page always sends that flag, which is why an invite you made for
 * someone else turns up in your own list — carrying an "Associate" badge to say
 * it is not yours. Test two asserts both halves of that.
 *
 * Requires `visitors.can_book_for_anyone` AND `basic_user_search`; see
 * `invite-form.page.ts` for why the other host control cannot work locally.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    STAFF_API,
    currentUser,
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { WORKERS, roleFor, staffEmail } from '../../../../e2e/support/env';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import { deleteGuest, releaseVisitor } from '../../../../e2e/support/visitor/visitor.api';
import {
    BOOK_FOR_ANYONE,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { inviteVisitorViaUI } from '../../../../e2e/support/visitor/visitor.flows';
import { YourBookingsPage } from '../../../../e2e/support/visitor/your-bookings.page';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

const DELEGATE_MODE = { ...SINGLE_VISITOR_MODE, ...BOOK_FOR_ANYONE };

/** The seeded non-admin this worker will nominate as host — never itself. */
function hostFor(workerIndex: number) {
    const other = (workerIndex + 1) % WORKERS;
    return {
        index: other,
        email: staffEmail(other),
        // seed.ts names them exactly this; the host field displays the NAME
        // once chosen, so the flow needs it to tell "set" from "not set".
        name: `E2E Staff ${other} (non-admin)`,
        role: roleFor('staff', other),
    };
}

test.describe('visitor invite on behalf of another host', () => {
    test('the chosen host is stored as the host and you as the booker', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const host = hostFor(mine);
        test.skip(host.index === mine, 'needs at least two workers for a second identity');

        const visitor = visitorFor(mine, VISITOR_SLOTS.delegate.single);
        const reason = uniqueTitle('E2E Delegate Visit');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, DELEGATE_MODE);

        try {
            const me = await currentUser(staffApi);
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason, {
                host: { email: host.email, name: host.name },
            });
            booking_id = created.id;

            const stored = await getBooking(staffApi, booking_id);
            expect(stored.user_email, 'the chosen host owns the booking').toBe(host.email);
            expect(stored.booked_by_email, 'and we are recorded as the booker').toBe(
                me.email,
            );
            expect(
                stored.user_email,
                'host and booker must actually differ, or this proves nothing',
            ).not.toBe(stored.booked_by_email);
            expect(stored.asset_id, 'the visitor is unchanged by delegating').toBe(
                visitor.email,
            );
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('the booker sees it flagged as Associate, the host sees it as their own', async ({
        staffPage,
        staffApi,
        browser,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const host = hostFor(mine);
        test.skip(host.index === mine, 'needs at least two workers for a second identity');

        const visitor = visitorFor(mine, VISITOR_SLOTS.delegate.groupA);
        const reason = uniqueTitle('E2E Delegate View');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, DELEGATE_MODE);

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason, {
                host: { email: host.email, name: host.name },
            });
            booking_id = created.id;

            // --- the BOOKER's view -------------------------------------------
            const mine_page = new YourBookingsPage(staffPage);
            await mine_page.open();
            await mine_page.showVisitors();

            await expect(
                mine_page.card(booking_id),
                'an invite you made for someone else still appears in your own list — ' +
                    'the schedule sends include_booked_by=true, which is what surfaces it',
            ).toBeVisible({ timeout: 30_000 });
            await expect(
                mine_page.associateBadge(booking_id),
                'and it is badged "Associate", because the host is not you. If this ' +
                    'fails, check whether a third badge was added to that corner of ' +
                    'the card — the locator excludes only the checked-in one',
            ).toBeVisible();
            await expect(
                mine_page.bookedForLine(booking_id),
                'the card names the host it was booked for',
            ).toContainText(host.name);

            // --- the HOST's view ----------------------------------------------
            // A real second browser context as the host, not a re-query as us.
            const host_ctx = await browser.newContext({
                storageState: host.role.storagePath,
                ignoreHTTPSErrors: true,
            });
            const host_page = await host_ctx.newPage();
            try {
                const theirs = new YourBookingsPage(host_page);
                await theirs.open();
                await theirs.showVisitors();

                await expect(
                    theirs.card(booking_id),
                    'the host sees the invite in their own list',
                ).toBeVisible({ timeout: 30_000 });
                await expect(
                    theirs.associateBadge(booking_id),
                    'but NOT badged Associate — it is their booking, not someone else’s',
                ).toBeHidden();
                await expect(
                    theirs.bookedForLine(booking_id),
                    'and no "For {name}" line, for the same reason',
                ).toBeHidden();
            } finally {
                await host_ctx.close();
            }

            // The API rule underneath both views, asserted directly so a UI
            // change cannot hide a backend regression.
            const booker_plain = await listBookings(
                staffApi,
                'visitor',
                window_from(),
                window_to(),
            );
            expect(
                booker_plain.map((b) => b.id),
                'a plain listing is caller-scoped, so the BOOKER does not see it',
            ).not.toContain(booking_id);

            const booker_included = await staffApi.get(`${STAFF_API}/bookings`, {
                params: {
                    type: 'visitor',
                    period_start: String(window_from()),
                    period_end: String(window_to()),
                    include_booked_by: 'true',
                },
            });
            expect(
                ((await booker_included.json()) as { id: number }[]).map((b) => b.id),
                'with include_booked_by=true they do — this is what the schedule sends',
            ).toContain(booking_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});

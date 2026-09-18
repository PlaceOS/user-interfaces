/**
 * CON-VIS-01 / 03 / 07 / 09 — the concierge visitor (guest) listing.
 *
 * CON-VIS-09 is a NEW id. The plan's CON-VIS-02 is "inviting a visitor FROM
 * concierge stores the booking AND creates the guest record" — driving the
 * invite form, which is still unwritten. Approving an invite is a different
 * scenario and gets its own id rather than borrowing that one.
 *
 * The front desk's busiest screen, and the one place in this suite where
 * checking a guest in can actually be tested end to end.
 *
 * ## How a visitor booking is shaped, which is not like the others
 *
 * For a desk or a parking space, `asset_id` is the thing being booked and
 * `user_*` is the person. For a visitor it is inverted:
 *
 *     asset_id / asset_name  ->  the VISITOR (their email, their name)
 *     user_*                 ->  the HOST, the staff member being visited
 *     attendees: [{name, email}]  ->  creates the GUEST record
 *
 * `attendees` is not optional. Measured 2026-09-17: a visitor booking created
 * without it is stored (201) and never appears on this screen, because the
 * listing is built from guest records. That is a silent, confusing failure and
 * the reason `inviteVisitor` below always sends it.
 *
 * ## Rows are found by EMAIL, and the email must be unique per test
 *
 * The listing renders the visitor as `email~email` — the name is never shown,
 * even when the booking carries one. So the email is the only handle, and
 * because cancelled invites stay on the screen indefinitely, re-using a fixed
 * address makes "the row for my visitor" ambiguous the second time a test runs.
 * Every test here mints its own address.
 *
 * ## CON-VIS-01 and CON-VIS-07 are the same test
 *
 * The plan lists "the listing shows an invite" and "the listing shows visitors
 * invited by OTHER hosts" separately. Here they collapse: the concierge is
 * signed in as the admin and every invite these specs make is hosted by a plain
 * staff user, so the first test already proves the second. Recorded rather than
 * quietly dropped.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    cleanUpBookings,
    createBookingFor,
} from '../../../../e2e/support/concierge/concierge.api';
import {
    chooseRowMenuItem,
    columnIndex,
    confirmDialog,
    readTable,
    waitForRow,
} from '../../../../e2e/support/concierge/simple-table.page';
import { getBooking } from '../../../../e2e/support/api';
import { roleFor } from '../../../../e2e/support/env';

const VISITORS_ROUTE = '/#/book/visitors';

/** The HOST: a plain staff member, never the concierge doing the looking. */
const HOST = roleFor('staff', 2);

/** A visitor address nobody else will be using — see the file header. */
function uniqueVisitor(tag: string) {
    const stamp = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
    return {
        email: `con-${tag}-${stamp}@example.com`.toLowerCase(),
        name: `CON ${tag} Visitor ${stamp}`,
    };
}

/**
 * A window containing now.
 *
 * The listing shows a single day and defaults to today, and check-in is only
 * offered while the visit is actually running.
 */
function windowAroundNow(minutes = 45) {
    const now = Math.floor(Date.now() / 1000);
    return { start: now - minutes * 60, end: now + minutes * 60 };
}

test.describe('concierge visitors', () => {
    const created: number[] = [];
    const guests: string[] = [];

    test.afterEach(async ({ adminApi }) => {
        await cleanUpBookings(adminApi, created.splice(0));
        // The guest record OUTLIVES the booking, so both have to go or the
        // listing fills up with orphans across runs.
        for (const email of guests.splice(0)) {
            await adminApi
                .delete(`/api/staff/v1/guests/${encodeURIComponent(email)}`)
                .catch(() => undefined);
        }
    });

    async function inviteVisitor(
        adminApi: Parameters<typeof createBookingFor>[0],
        tag: string,
    ) {
        const visitor = uniqueVisitor(tag);
        const { start, end } = windowAroundNow();
        const booking = await createBookingFor(adminApi, {
            type: 'visitor',
            asset_id: visitor.email,
            asset_name: visitor.name,
            title: `CON-${tag}`,
            start,
            end,
            holder: { email: HOST.email },
            // Without this the booking is stored and never listed — see header.
            extra: {
                attendees: [{ name: visitor.name, email: visitor.email }],
            },
        });
        created.push(booking.id);
        guests.push(visitor.email);
        return { visitor, booking };
    }

    test('CON-VIS-01/07: the listing shows an invite hosted by another user', async ({
        adminPage,
        adminApi,
    }) => {
        const { visitor } = await inviteVisitor(adminApi, 'VIS-01');

        await adminPage.goto(VISITORS_ROUTE);
        const row = await waitForRow(adminPage, visitor.email);
        const snapshot = await readTable(adminPage);

        expect(
            row[columnIndex(snapshot, 'asset_name')],
            'the visitor column must identify the guest',
        ).toContain(visitor.email);
        expect(
            row[columnIndex(snapshot, 'user_name')],
            'and the host column must name the staff member being visited — which ' +
                'is NOT the concierge. This is the whole difference between this ' +
                'screen and the workplace one',
        ).toContain(HOST.email);
    });

    test('CON-VIS-09: approving a visitor from the listing is stored on the backend', async ({
        adminPage,
        adminApi,
    }) => {
        const { visitor, booking } = await inviteVisitor(adminApi, 'VIS-09');

        expect(
            (await getBooking(adminApi, booking.id)).approved,
            'a new invite should not already be approved',
        ).toBe(false);

        await adminPage.goto(VISITORS_ROUTE);
        await waitForRow(adminPage, visitor.email);
        await chooseRowMenuItem(
            adminPage,
            visitor.email,
            'status',
            'Approve Visitor',
        );
        // UNLIKE THE DESK EQUIVALENT, this opens a confirmation dialog
        // ("Approve attendance of <email> to their meeting?"). Without
        // accepting it, no request is sent at all and the assertion below fails
        // while looking like a backend problem. `required` so that the dialog
        // quietly disappearing in a future release fails here, loudly, instead
        // of silently weakening the test.
        await confirmDialog(adminPage, { required: true });

        await expect
            .poll(
                async () => {
                    const after = await getBooking(adminApi, booking.id);
                    return { approved: after.approved, rejected: after.rejected };
                },
                {
                    message:
                        'approving a visitor from the front desk must reach the ' +
                        'backend. The row re-rendering is not evidence',
                    timeout: 20_000,
                },
            )
            .toEqual({ approved: true, rejected: false });
    });

    test('CON-VIS-03: checking a visitor in from the listing is recorded', async ({
        adminPage,
        adminApi,
    }) => {
        const { visitor, booking } = await inviteVisitor(adminApi, 'VIS-03');

        expect(
            (await getBooking(adminApi, booking.id)).checked_in,
            'a new invite should not already be checked in',
        ).toBe(false);

        await adminPage.goto(VISITORS_ROUTE);
        await waitForRow(adminPage, visitor.email);
        // "Check-in Guest" lives in the row's `actions` overflow menu, alongside
        // View Attachments / Set visitor as Remote / Email Guest / Set Pass
        // Number — not in a column of its own.
        await chooseRowMenuItem(
            adminPage,
            visitor.email,
            'actions',
            'Check-in Guest',
        );

        await expect
            .poll(
                async () => (await getBooking(adminApi, booking.id)).checked_in,
                {
                    message:
                        'checking a guest in at the front desk is what this app is ' +
                        'for, and it must be recorded. If this fails, check the visit ' +
                        'window first — check-in is only offered while the booking is ' +
                        'actually running',
                    timeout: 20_000,
                },
            )
            .toBe(true);
    });

    test('CON-VIS-04: a checked-in visitor can be checked out, and not checked out twice', async ({
        adminPage,
        adminApi,
    }) => {
        const { visitor, booking } = await inviteVisitor(adminApi, 'VIS-04');

        await adminPage.goto(VISITORS_ROUTE);
        await waitForRow(adminPage, visitor.email);
        await chooseRowMenuItem(adminPage, visitor.email, 'actions', 'Check-in Guest');
        await expect
            .poll(async () => (await getBooking(adminApi, booking.id)).checked_in, {
                message: 'the visitor has to be checked IN before checking out means anything',
                timeout: 20_000,
            })
            .toBe(true);

        // Now out again. The menu item only appears once they are in, which is
        // itself the app refusing to check out somebody who never arrived.
        await chooseRowMenuItem(adminPage, visitor.email, 'actions', 'Check-out Guest');
        await expect
            .poll(async () => (await getBooking(adminApi, booking.id)).checked_in, {
                message:
                    'checking a guest out at the front desk must reach the backend. ' +
                    'A visitor left checked in is counted as on-site, which is what ' +
                    'the contact-tracing report is built from',
                timeout: 20_000,
            })
            .toBe(false);

        // And it must not be offered again. `checked_in` is already false, so a
        // second check-out is meaningless — the control should be gone rather
        // than silently doing nothing.
        await adminPage.reload();
        await waitForRow(adminPage, visitor.email);
        const snapshot = await readTable(adminPage);
        const width = snapshot.column_ids.length;
        const row = snapshot.rows.findIndex((r) =>
            r.some((cell) => cell.includes(visitor.email)),
        );
        await adminPage
            .locator('simple-table [role=table] > *:not([header])')
            .nth(row * width + columnIndex(snapshot, 'actions'))
            .locator('button, [matripple]')
            .first()
            .click();
        const menu = adminPage.locator('.mat-mdc-menu-panel, [role="menu"]');
        await expect(menu, 'the actions menu did not open').toBeVisible({
            timeout: 15_000,
        });
        await expect(
            menu.getByText('Check-out Guest', { exact: false }),
            'a visitor who is already checked out must not be offered check-out ' +
                'again. If it is still there, the menu is built from something other ' +
                'than the booking\'s actual state',
        ).toHaveCount(0);
    });

    test('CON-VIS-08: searching the listing narrows it to the matching visitor', async ({
        adminPage,
        adminApi,
    }) => {
        // TWO invites, so "narrowed" can be told apart from "happened to show
        // one row". A search test with a single record in the listing proves
        // nothing at all.
        const first = await inviteVisitor(adminApi, 'VIS-08a');
        const second = await inviteVisitor(adminApi, 'VIS-08b');

        await adminPage.goto(VISITORS_ROUTE);
        await waitForRow(adminPage, first.visitor.email);
        await waitForRow(adminPage, second.visitor.email);

        const search = adminPage.locator('searchbar input').first();
        await expect(search, 'the visitor listing has no search box').toBeVisible({
            timeout: 20_000,
        });
        await search.fill(first.visitor.email);

        await expect
            .poll(
                async () => {
                    const snapshot = await readTable(adminPage);
                    const flat = snapshot.rows.map((r) => r.join(' '));
                    return {
                        kept: flat.filter((r) => r.includes(first.visitor.email)).length,
                        other: flat.filter((r) => r.includes(second.visitor.email)).length,
                    };
                },
                {
                    message:
                        'searching for one visitor must keep their row and drop the ' +
                        'other. Note these listings carry dozens of cancelled rows from ' +
                        'earlier runs, so this asserts on the two addresses this test ' +
                        'created rather than on the total row count',
                    timeout: 25_000,
                },
            )
            .toEqual({ kept: 1, other: 0 });

        // Clearing it brings the other one back — otherwise a search that simply
        // broke the listing would pass the half above.
        await search.fill('');
        await expect
            .poll(
                async () => {
                    const snapshot = await readTable(adminPage);
                    return snapshot.rows
                        .map((r) => r.join(' '))
                        .filter((r) => r.includes(second.visitor.email)).length;
                },
                {
                    message: 'clearing the search must restore the rows it hid',
                    timeout: 25_000,
                },
            )
            .toBe(1);
    });
});

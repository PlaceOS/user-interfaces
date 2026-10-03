/**
 * CON-LOCK-01 / CON-LOCK-03 — concierge's locker management and allocation.
 *
 * The area the plan called out as the biggest remaining piece, because a locker
 * is TWO levels of seeding rather than one: a bank asset, then locker assets
 * whose `parent_id` points at it. `locker.seed.ts` does that and explains the
 * shape; the same gap has kept workplace's WP-E2E-09 untested.
 *
 * ## The mock spec stays
 *
 * `apps/concierge/e2e/lockers.spec.ts` already tests this area in `?mock=true`
 * against English button text. It is left alone: it costs no infrastructure and
 * catches pure render breakage, and CON-LOCK-02 ("is it replaced or kept?") is
 * still an open decision rather than something to settle here quietly.
 *
 * ## What is asserted
 *
 * The management page showing a bank proves the listing renders. What matters
 * for CON-LOCK-03 is that allocating a locker to somebody is STORED against
 * that person — so the allocation is asserted on the booking record, not on the
 * row.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import { ensureLockers } from '../../../../e2e/support/concierge/locker.seed';
import {
    cleanUpBookings,
    createBookingFor,
} from '../../../../e2e/support/concierge/concierge.api';
import {
    columnIndex,
    readTable,
    waitForAnyRow,
} from '../../../../e2e/support/concierge/simple-table.page';
import { getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { roleFor } from '../../../../e2e/support/env';

const LOCKER_MANAGE_ROUTE = '/#/book/lockers/manage';
const LOCKER_BOOKINGS_ROUTE = '/#/book/lockers/events';

/** The person a locker is allocated to: a plain staff user. */
const HOLDER = roleFor('staff', 3);

function windowAroundNow(minutes = 45) {
    const now = Math.floor(Date.now() / 1000);
    return { start: now - minutes * 60, end: now + minutes * 60 };
}

test.describe('concierge lockers', () => {
    const created: number[] = [];

    test.afterEach(async ({ adminApi }) => {
        await cleanUpBookings(adminApi, created.splice(0));
    });

    test('CON-LOCK-01: locker banks are listed from the backend', async ({
        adminPage,
        adminApi,
    }) => {
        const fixture = await ensureLockers(adminApi);

        await adminPage.goto(LOCKER_MANAGE_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);

        const name_col = columnIndex(snapshot, 'name');
        const listed = snapshot.rows.map((row) => row[name_col]);
        expect(
            listed.join(' | '),
            `locker management should list the seeded bank "${fixture.bank.name}". ` +
                `It showed ${snapshot.rows.length} row(s): ${listed.join(', ')}. ` +
                `If the bank is there but NAMELESS, the seeder wrote the asset ` +
                `columns without the matching other_data copy — the UI reads ` +
                `other_data (see locker.seed.ts)`,
        ).toContain(fixture.bank.name);
    });

    test('CON-LOCK-01b: the lockers inside a bank are listed, and belong to it', async ({
        adminApi,
    }) => {
        const fixture = await ensureLockers(adminApi);

        // Asserted at the API rather than by expanding the row. The value here
        // is the PARENT LINK — a locker whose `parent_id` is wrong exists, is
        // returned, and simply never appears under any bank. That is invisible
        // on screen and obvious in the record.
        const res = await adminApi.get('/api/engine/v2/assets', {
            params: { zone_id: fixture.zone_id, limit: '500' },
        });
        expect(res.ok(), `GET /assets failed: HTTP ${res.status()}`).toBe(true);
        const body = await res.json();
        const assets = (Array.isArray(body) ? body : (body.data ?? body.results ?? [])) as Array<
            Record<string, any>
        >;

        for (const locker of fixture.lockers) {
            const stored = assets.find((asset) => asset.id === locker.id);
            expect(
                stored,
                `the seeded locker "${locker.name}" is not on zone ${fixture.zone_id}`,
            ).toBeTruthy();
            expect(
                String((stored as Record<string, any>).parent_id ?? ''),
                `"${locker.name}" must point at its bank, or it belongs to no bank ` +
                    `and never shows up under one`,
            ).toBe(fixture.bank.id);
        }
    });

    test('CON-LOCK-03: a locker allocated to a user is stored against them', async ({
        adminPage,
        adminApi,
    }) => {
        const fixture = await ensureLockers(adminApi);
        const locker = fixture.lockers[0];
        const title = uniqueTitle('CON-LOCK-03');
        const { start, end } = windowAroundNow();

        const booking = await createBookingFor(adminApi, {
            type: 'locker',
            asset_id: locker.id,
            asset_name: locker.name,
            title,
            start,
            end,
            holder: { email: HOLDER.email },
        });
        created.push(booking.id);

        // The record is the assertion: a locker allocated to the wrong person is
        // the failure that matters, and the screen cannot tell you that.
        const stored = await getBooking(adminApi, booking.id);
        expect(
            stored.user_email,
            'the locker must be stored against the person it was allocated to',
        ).toBe(HOLDER.email);
        expect(
            stored.asset_id,
            'and against the locker that was allocated',
        ).toBe(locker.id);

        // Then prove the concierge listing actually surfaces it, because an
        // allocation nobody at the front desk can see is not much use.
        //
        // Matched on the HOLDER, not the locker name — see CON-B3 below: the
        // Locker column renders a raw asset id, so `locker.name` is not on the
        // row at all.
        await adminPage.goto(LOCKER_BOOKINGS_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);
        const person_col = columnIndex(snapshot, 'user_name');
        const asset_col = columnIndex(snapshot, 'asset_name');
        const row = snapshot.rows.find((r) => r[person_col].includes(HOLDER.email));
        expect(
            row,
            `the locker bookings listing should show the allocation to ` +
                `${HOLDER.email}. It showed ${snapshot.rows.length} row(s). Note ` +
                `this listing shows ONE DAY and defaults to today, which is why the ` +
                `booking window straddles now`,
        ).toBeTruthy();
        expect(
            (row as string[])[asset_col],
            'and the row must identify the locker somehow — by id today, by name ' +
                'once CON-B3 is fixed',
        ).toContain(locker.id);
    });

    /**
     * CON-B3 — the locker bookings listing shows a raw asset id, not the locker's
     * name.
     *
     * Found 2026-09-17 while writing CON-LOCK-03. Low severity, but it lands on
     * the screen a concierge actually works from: the Locker column renders
     * `asset-KpaBMkGOPR` where it should say "E2E Locker 0".
     *
     * Cause, as far as it was measured: `asset_name` is **not stored** on a
     * locker booking. It was sent in the POST and comes back absent from
     * `GET /bookings/<id>`, so the column falls back to the id. Desk bookings
     * DO keep theirs — CON-DESK-01 asserts on `asset_name` and passes — so this
     * is specific to the locker type rather than a general rule.
     *
     * Not chased further: whether staff-api drops the field for this type, or
     * the app never really sends it, was not established. Either way the screen
     * is unusable for its purpose, which is what the test records.
     */
    test.fixme('CON-B3: the locker listing names the locker rather than showing its id', async ({
        adminPage,
        adminApi,
    }) => {
        const fixture = await ensureLockers(adminApi);
        const locker = fixture.lockers[0];
        const { start, end } = windowAroundNow();

        const booking = await createBookingFor(adminApi, {
            type: 'locker',
            asset_id: locker.id,
            asset_name: locker.name,
            title: uniqueTitle('CON-B3'),
            start,
            end,
            holder: { email: HOLDER.email },
        });
        created.push(booking.id);

        expect(
            (await getBooking(adminApi, booking.id)).asset_name,
            'a locker booking should keep the locker name it was given, as a desk ' +
                'booking does',
        ).toBe(locker.name);

        await adminPage.goto(LOCKER_BOOKINGS_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);
        const asset_col = columnIndex(snapshot, 'asset_name');
        const person_col = columnIndex(snapshot, 'user_name');
        const row = snapshot.rows.find((r) => r[person_col].includes(HOLDER.email));
        expect(
            (row as string[])[asset_col],
            'the Locker column must name the locker. A front desk cannot work from ' +
                'an asset id',
        ).toContain(locker.name);
    });
});

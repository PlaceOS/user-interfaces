/** CON-VIS-02/05/06. Notes live in booking.extension_data.notes;
 * induction is the booking's induction field, updated during check-in. */
import { getBooking } from '../../../../e2e/support/api';
import {
    cleanUpBookings,
    createBookingFor,
} from '../../../../e2e/support/concierge/concierge.api';
import { useSettings } from '../../../../e2e/support/concierge/concierge.settings';
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import { runName } from '../../../../e2e/support/concierge/management.api';
import {
    chooseRowMenuItem,
    columnIndex,
    readTable,
    waitForRow,
} from '../../../../e2e/support/concierge/simple-table.page';
import { roleFor } from '../../../../e2e/support/env';
import { pickCalendarDay } from '../../../../e2e/support/visitor/calendar';
import {
    deleteGuest,
    searchGuests,
} from '../../../../e2e/support/visitor/visitor.api';
import { SINGLE_VISITOR_MODE } from '../../../../e2e/support/visitor/visitor.settings';

const ROUTE = '/#/book/visitors';

test.describe('concierge visitor management', () => {
    const bookings: number[] = [];
    const guests: string[] = [];
    test.afterEach(async ({ adminApi }) => {
        await cleanUpBookings(adminApi, bookings.splice(0));
        for (const email of guests.splice(0))
            await deleteGuest(adminApi, email);
    });

    async function invite(
        api: Parameters<typeof createBookingFor>[0],
        tag: string,
    ) {
        const email = `${runName(tag).toLowerCase()}@example.com`;
        guests.push(email);
        const now = Math.floor(Date.now() / 1000);
        const booking = await createBookingFor(api, {
            type: 'visitor',
            asset_id: email,
            title: tag,
            start: now - 300,
            end: now + 3600,
            holder: { email: roleFor('staff', 2).email },
            extra: { attendees: [{ name: tag, email }] },
        });
        bookings.push(booking.id);
        return { email, booking };
    }

    test('CON-VIS-02: inviting through concierge creates a booking and a guest', async ({
        adminPage,
        adminApi,
    }) => {
        const name = runName('CON-VIS-02');
        const email = `${name.toLowerCase()}@example.com`;
        guests.push(email);
        await useSettings(adminPage, SINGLE_VISITOR_MODE);
        await adminPage.goto(ROUTE);
        await adminPage
            .locator('[app-new-visitors] button[btn]')
            .filter({ hasText: /Invite/i })
            .click();
        // Concierge uses the shared visitor-invite-form; Workplace's older
        // invite-visitor-form has different selectors and a separate page object.
        const form = adminPage.locator('visitor-invite-form');
        await expect(form).toBeVisible();
        await form.locator('input[name$=".asset_name"]').fill(name);
        await form.locator('input[name$=".asset_id"]').fill(email);
        await form.locator('input[name$=".title"]').fill(name);
        const day = new Date();
        day.setDate(day.getDate() + 2);
        day.setHours(0, 0, 0, 0);
        await form.locator('a-date-field button').first().click();
        await pickCalendarDay(
            adminPage,
            adminPage.locator('.cdk-overlay-container date-calendar'),
            day.getTime(),
            { closes_on_pick: true },
        );
        const response = adminPage.waitForResponse(
            (r) =>
                r.request().method() === 'POST' &&
                new URL(r.url()).pathname === '/api/staff/v1/bookings',
        );
        await adminPage
            .locator('invite-visitor-modal footer button')
            .filter({ hasText: /Send/i })
            .click();
        const posted = await response;
        expect(posted.ok(), await posted.text()).toBeTruthy();
        const booking = await posted.json();
        bookings.push(booking.id);
        await expect(
            adminPage.locator('visitor-invite-success [sent]'),
        ).toBeVisible();
        const stored = await getBooking(adminApi, booking.id);
        expect(stored.asset_id).toBe(email);
        expect(stored.title).toBe(name);
        expect(stored.deleted).toBeFalsy();
        await expect
            .poll(async () =>
                (await searchGuests(adminApi, email)).some(
                    (g) => g.email === email,
                ),
            )
            .toBe(true);
    });

    test('CON-VIS-05: visitor notes persist after reloading and reopening', async ({
        adminPage,
        adminApi,
    }) => {
        const { email, booking } = await invite(adminApi, 'CON-VIS-05');
        const note = runName('Reception note');
        await adminPage.goto(ROUTE);
        await waitForRow(adminPage, email);
        const table = await readTable(adminPage);
        const row = table.rows.findIndex((r) =>
            r.some((c) => c.includes(email)),
        );
        await adminPage
            .locator('simple-table [role=table] > *:not([header])')
            .nth(row * table.column_ids.length + columnIndex(table, 'notes'))
            .locator('button')
            .click();
        const modal = adminPage.locator('visitor-notes-modal');
        await modal.locator('textarea').fill(note);
        await modal.getByRole('button', { name: 'Save', exact: true }).click();
        await expect(modal).toBeHidden();
        await expect
            .poll(
                async () =>
                    (await getBooking(adminApi, booking.id)).extension_data,
            )
            .toMatchObject({ notes: note });
        await adminPage.reload();
        await waitForRow(adminPage, email);
        const refreshed = await readTable(adminPage);
        const index = refreshed.rows.findIndex((r) =>
            r.some((c) => c.includes(email)),
        );
        const cell = adminPage
            .locator('simple-table [role=table] > *:not([header])')
            .nth(
                index * refreshed.column_ids.length +
                    columnIndex(refreshed, 'notes'),
            );
        await expect(
            cell.locator('icon').filter({ hasText: 'info_i' }),
        ).toBeVisible();
        await cell.locator('button').click();
        await expect(modal.locator('textarea')).toHaveValue(note);
    });

    test('CON-VIS-06: accepting induction persists and checks the visitor in', async ({
        adminPage,
        adminApi,
    }) => {
        const { email, booking } = await invite(adminApi, 'CON-VIS-06');
        await useSettings(adminPage, {
            'app.induction_enabled': true,
            'app.induction_details':
                'E2E: report to reception before entering.',
        });
        await adminPage.goto(ROUTE);
        await waitForRow(adminPage, email);
        await chooseRowMenuItem(adminPage, email, 'actions', 'Check-in Guest');
        const modal = adminPage.locator('visitor-induction-modal');
        await expect(
            modal.getByRole('button', { name: 'Accept', exact: true }),
        ).toBeDisabled();
        await modal.getByRole('checkbox').check();
        await modal
            .getByRole('button', { name: 'Accept', exact: true })
            .click();
        await expect
            .poll(async () => {
                const stored = await getBooking(adminApi, booking.id);
                return {
                    induction: stored.induction,
                    checked_in: stored.checked_in,
                };
            })
            .toEqual({ induction: 'accepted', checked_in: true });
        await adminPage.reload();
        await waitForRow(adminPage, email);
        // The optional induction column is controlled by org metadata rather
        // than the form's per-context overrides. Check the persisted record.
        expect((await getBooking(adminApi, booking.id)).induction).toBe(
            'accepted',
        );
    });
});

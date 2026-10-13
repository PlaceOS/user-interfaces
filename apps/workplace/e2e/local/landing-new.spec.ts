/**
 * NEW-HOME-02 … NEW-HOME-05 — the parts of the `landing-new` home page that
 * the page before it did not have: edit and delete on the next-booking card,
 * Book on a favourite desk, and the desk week.
 *
 * The stories that both pages have are in the `home-*.spec.ts` files.
 *
 * ## Isolation
 *
 * The next-booking card shows the FIRST booking the user has today, whatever
 * its type. So each test clears every booking this worker's user has today
 * before it starts (`clearToday`).
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import { deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import { isLive } from '../../../../e2e/support/bookings/bookings.api';
import { createDeskBookingViaApi, setFavouriteDesks } from '../../../../e2e/support/desk/desk.api';
import { DeskFlow } from '../../../../e2e/support/desk/desk-flow.page';
import {
    clearToday,
    inProgressSlot,
    readUserSettings,
    todayBounds,
} from '../../../../e2e/support/home/home.api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';

test.describe('home page — the new landing', () => {
    test('NEW-HOME-02: Edit on the card opens the desk flow with the booking loaded', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Home Edit');
        const landing = new LandingNewPage(staffPage);
        const flow = new DeskFlow(staffPage);

        await clearToday(staffApi);
        const created = await createDeskBookingViaApi(staffApi, {
            desk,
            title,
            ...inProgressSlot(),
        });

        try {
            await landing.open();
            await expect(landing.upcomingTitle).toHaveText(title, { timeout: 30_000 });
            await landing.upcomingEdit.click();

            await expect(staffPage).toHaveURL(/#\/book\/desk\/form/);
            await expect(flow.title, 'the form holds the booking, not a new one').toHaveValue(title);
            await expect(
                flow.desk(desk.name).locator('icon', { hasText: 'task_alt' }),
                'the desk of the booking shows as selected',
            ).toBeVisible({ timeout: 20_000 });
        } finally {
            await deleteBooking(staffApi, created.id);
        }
    });

    test('NEW-HOME-03: Delete on the card removes the booking on the backend', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Home Delete');
        const landing = new LandingNewPage(staffPage);

        await clearToday(staffApi);
        const created = await createDeskBookingViaApi(staffApi, {
            desk,
            title,
            ...inProgressSlot(),
        });
        const { from, to } = todayBounds();
        const live = () => isLive(staffApi, 'desk', created.id, from, to);

        try {
            await landing.open();
            await expect(landing.upcomingTitle).toHaveText(title, { timeout: 30_000 });
            expect(await live(), 'precondition: the booking is live').toBe(true);

            await landing.upcomingDelete.click();
            await landing.acceptConfirm();

            await expect
                .poll(live, {
                    message: 'the booking is deleted on the backend, not only on the card',
                    timeout: 20_000,
                })
                .toBe(false);
            await expect(landing.clearStateDeskLink).toBeVisible({ timeout: 20_000 });
        } finally {
            if (await live()) await deleteBooking(staffApi, created.id);
        }
    });

    test('NEW-HOME-04: a favourite desk is listed, and Book opens the desk flow with it selected', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const landing = new LandingNewPage(staffPage);
        const flow = new DeskFlow(staffPage);
        const before: unknown = (await readUserSettings(staffApi)).favourite_desks;

        await setFavouriteDesks(staffApi, [desk.id]);

        try {
            await landing.open();
            await expect(landing.favourites).toContainText(desk.name, { timeout: 30_000 });
            await landing.bookFavourite(desk.name).click();

            await expect(staffPage).toHaveURL(/#\/book\/desk\/form\?.*asset_id=/);
            await expect(
                flow.desk(desk.name).locator('icon', { hasText: 'task_alt' }),
                'the favourite desk shows as selected in the flow',
            ).toBeVisible({ timeout: 20_000 });
        } finally {
            await setFavouriteDesks(staffApi, Array.isArray(before) ? before : []);
        }
    });

    test('NEW-HOME-05: the desk week shows the desk booking of today and opens its details', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Home Week');
        const landing = new LandingNewPage(staffPage);
        const day = new Date().getDate();

        await clearToday(staffApi);

        await landing.open();
        await expect(
            landing.deskWeekBook(day),
            'with no desk booking, today offers to make one',
        ).toBeVisible({ timeout: 30_000 });
        await expect(landing.deskWeekBooking(day)).toHaveCount(0);

        const created = await createDeskBookingViaApi(staffApi, {
            desk,
            title,
            ...inProgressSlot(),
        });

        try {
            await staffPage.reload();
            await expect(landing.deskWeekBooking(day)).toBeVisible({ timeout: 30_000 });
            await expect(landing.deskWeekBook(day)).toHaveCount(0);

            await landing.deskWeekBooking(day).click();
            await expect(
                staffPage.locator('booking-details-modal'),
                'the details are those of the booking',
            ).toContainText(title);
        } finally {
            await deleteBooking(staffApi, created.id);
        }
    });

});

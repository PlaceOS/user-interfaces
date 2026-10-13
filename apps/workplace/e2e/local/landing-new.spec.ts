/**
 * NEW-HOME-01 … NEW-HOME-06 — the `landing-new` home page, as a NON-ADMIN, against a real
 * local backend.
 *
 * The `home-*.spec.ts` files cover the home page this one replaced. That page
 * is no longer routed, so these are the specs that hold the story for
 * `/landing`.
 *
 * ## Isolation
 *
 * The next-booking card shows the FIRST booking the user has today, whatever
 * its type. So each test clears every booking this worker's user has today
 * before it starts. That is safe: a worker runs one test at a time, and no
 * other worker shares the identity.
 */
import { APIRequestContext } from '@playwright/test';
import { test, expect } from '../../../../e2e/support/fixtures';
import { WORKERS, deskFor } from '../../../../e2e/support/env';
import { deleteBooking, listBookings, uniqueTitle } from '../../../../e2e/support/api';
import { isLive } from '../../../../e2e/support/bookings/bookings.api';
import { otherStaffEmail } from '../../../../e2e/support/bookings/bookings.env';
import { createDeskBookingViaApi, setFavouriteDesks } from '../../../../e2e/support/desk/desk.api';
import { DeskFlow } from '../../../../e2e/support/desk/desk-flow.page';
import {
    readContacts,
    readUserSettings,
    setContacts,
} from '../../../../e2e/support/home/home.api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';

/** Booking types the next-booking card can show from a local stack. */
const CARD_TYPES = ['desk', 'room', 'visitor', 'parking', 'locker'];

/** Today, in local time, as a unix-second window. */
function today() {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const from = Math.floor(start.valueOf() / 1000);
    return { from, to: from + 86_399 };
}

/**
 * A window that is in progress now, so that the card shows it at once. The
 * start does not go back past midnight: the card lists a booking by the day
 * it starts on.
 */
function inProgress() {
    const now = Math.floor(Date.now() / 1000);
    const start = Math.max(now - 5 * 60, today().from);
    return { start, end: start + 3600 };
}

/** Delete every booking that this user has today. */
async function clearToday(api: APIRequestContext): Promise<void> {
    const { from, to } = today();
    for (const type of CARD_TYPES) {
        const bookings = await listBookings(api, type, from, to).catch(() => []);
        for (const booking of bookings) {
            if (!booking.deleted) await deleteBooking(api, booking.id);
        }
    }
}

test.describe('home page — the new landing', () => {
    test('NEW-HOME-01: the card changes from the clear state to the booking of today', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Home Next');
        const landing = new LandingNewPage(staffPage);
        let booking_id: number | undefined;

        await clearToday(staffApi);

        try {
            await landing.open();
            await expect(
                landing.clearStateDeskLink,
                'with no booking today the card offers to make one',
            ).toBeVisible();
            await expect(landing.upcomingEdit).toHaveCount(0);

            const created = await createDeskBookingViaApi(staffApi, {
                desk,
                title,
                ...inProgress(),
            });
            booking_id = created.id;

            await staffPage.reload();
            await expect(landing.upcomingTitle).toHaveText(title, { timeout: 30_000 });
            await expect(landing.clearStateDeskLink).toHaveCount(0);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

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
            ...inProgress(),
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
            ...inProgress(),
        });
        const { from, to } = today();
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
            ...inProgress(),
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

    test('NEW-HOME-06: a colleague added through the modal is saved and listed', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const colleague = otherStaffEmail(testInfo.parallelIndex, WORKERS);
        const landing = new LandingNewPage(staffPage);
        const before = await readContacts(staffApi);

        // Start without the colleague, or the add proves nothing.
        await setContacts(
            staffApi,
            before.filter((user) => user.email !== colleague),
        );

        try {
            await landing.open();
            await expect(landing.colleagues).not.toContainText(colleague);

            await landing.addColleague(colleague);

            await expect(landing.colleagues).toContainText(colleague);
            await expect
                .poll(async () => (await readContacts(staffApi)).map((user) => user.email), {
                    message: 'the colleague is in the saved contacts, not only on the page',
                    timeout: 20_000,
                })
                .toContain(colleague);
        } finally {
            await setContacts(staffApi, before);
        }
    });
});

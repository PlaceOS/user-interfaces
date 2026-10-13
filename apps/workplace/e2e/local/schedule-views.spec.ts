/**
 * NEW-YB-01 … NEW-YB-04 — the day, week and list views of `/your-bookings`,
 * as a NON-ADMIN, against a real local backend.
 *
 * The `bookings-*.spec.ts` files drive the list view, where each booking is a
 * card. The page opens on the day view, and these specs hold the stories of
 * the day and week views and of the change between the three.
 *
 * Bookings are made through the API: the subject here is the schedule, and the
 * booking flows have their own specs.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import { deleteBooking, releaseAsset, uniqueTitle } from '../../../../e2e/support/api';
import { isLive } from '../../../../e2e/support/bookings/bookings.api';
import { ScheduleViewsPage } from '../../../../e2e/support/bookings/schedule-views.page';
import { createDeskBookingViaApi } from '../../../../e2e/support/desk/desk.api';
import { YourBookingsPage } from '../../../../e2e/support/visitor/your-bookings.page';

/** A local day as a unix-second window. `0` is today. */
function dayBounds(offset: number) {
    const start = new Date();
    start.setDate(start.getDate() + offset);
    start.setHours(0, 0, 0, 0);
    const from = Math.floor(start.valueOf() / 1000);
    return { from, to: from + 86_399 };
}

/** One hour at midday of a local day. Midday is clear of the day boundaries. */
function middayOn(offset: number) {
    const start = dayBounds(offset).from + 12 * 3600;
    return { start, end: start + 3600 };
}

/**
 * A window that is in progress now. A booking that has ended has no actions,
 * so a spec that cancels one cannot use `middayOn`. The start does not go back
 * past midnight: the day view lists a booking by the day it starts on.
 */
function inProgress() {
    const now = Math.floor(Date.now() / 1000);
    const start = Math.max(now - 5 * 60, dayBounds(0).from);
    return { start, end: start + 3600 };
}

test.describe('your bookings — the day, week and list views', () => {
    test('NEW-YB-01: a booking of today shows on the day, week and list views', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Views');
        const schedule = new ScheduleViewsPage(staffPage);
        const { from, to } = dayBounds(0);

        await releaseAsset(staffApi, 'desk', desk.id, from, to);
        const created = await createDeskBookingViaApi(staffApi, {
            desk,
            title,
            ...middayOn(0),
        });

        try {
            // No `view` parameter: the page opens on the day view.
            await schedule.open();
            await expect(schedule.dayBooking(title)).toBeVisible({ timeout: 30_000 });
            await expect(schedule.weekView).toHaveCount(0);

            await schedule.viewLink('week').click();
            await expect(staffPage).toHaveURL(/view=week/);
            await expect(schedule.weekBooking(title)).toBeVisible();
            await expect(schedule.dayView).toHaveCount(0);

            await schedule.viewLink('list').click();
            await expect(staffPage).toHaveURL(/view=list/);
            await expect(schedule.listCard(created.id)).toBeVisible();
            await expect(schedule.listCard(created.id)).toContainText(title);
        } finally {
            await deleteBooking(staffApi, created.id);
        }
    });

    test('NEW-YB-02: the day view shows only the day it is on, and the topbar moves it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const today_title = uniqueTitle('E2E Views Today');
        const tomorrow_title = uniqueTitle('E2E Views Tomorrow');
        const schedule = new ScheduleViewsPage(staffPage);

        await releaseAsset(staffApi, 'desk', desk.id, dayBounds(0).from, dayBounds(1).to);
        // The booking of today is the control. Without it "tomorrow's booking
        // is not shown" also passes on a view that has not loaded.
        const today = await createDeskBookingViaApi(staffApi, {
            desk,
            title: today_title,
            ...middayOn(0),
        });
        const tomorrow = await createDeskBookingViaApi(staffApi, {
            desk,
            title: tomorrow_title,
            ...middayOn(1),
        });

        try {
            await schedule.open('day');
            await expect(schedule.dayBooking(today_title)).toBeVisible({ timeout: 30_000 });
            await expect(
                schedule.dayBooking(tomorrow_title),
                'a booking of tomorrow is not on the view of today',
            ).toHaveCount(0);

            await schedule.nextDate.click();
            await expect(schedule.dayBooking(tomorrow_title)).toBeVisible({ timeout: 20_000 });
            await expect(schedule.dayBooking(today_title)).toHaveCount(0);

            await schedule.today.click();
            await expect(schedule.dayBooking(today_title)).toBeVisible({ timeout: 20_000 });
            await expect(schedule.dayBooking(tomorrow_title)).toHaveCount(0);
        } finally {
            await deleteBooking(staffApi, today.id);
            await deleteBooking(staffApi, tomorrow.id);
        }
    });

    test('NEW-YB-03: a booking cancelled from the day view is removed on the backend', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Views Cancel');
        const schedule = new ScheduleViewsPage(staffPage);
        const modal_actions = new YourBookingsPage(staffPage);
        const { from, to } = dayBounds(0);

        await releaseAsset(staffApi, 'desk', desk.id, from, to);
        const created = await createDeskBookingViaApi(staffApi, {
            desk,
            title,
            ...inProgress(),
        });
        const live = () => isLive(staffApi, 'desk', created.id, from, to);

        try {
            await schedule.open('day');
            await schedule.dayBooking(title).click();
            const modal = staffPage.locator('booking-details-modal');
            await expect(modal, 'the details are those of the booking').toContainText(title);

            await modal_actions.openOverflowMenu(modal);
            const cancel = await modal_actions.menuAction('delete');
            if (!cancel) throw new Error('the booking menu offers no cancel action');
            await cancel.click();
            await modal_actions.acceptConfirm();

            await expect
                .poll(live, {
                    message: 'the booking is deleted on the backend, not only on the view',
                    timeout: 20_000,
                })
                .toBe(false);
            await expect(schedule.dayBooking(title)).toHaveCount(0);
        } finally {
            if (await live()) await deleteBooking(staffApi, created.id);
        }
    });

    test('NEW-YB-04: the Desks filter of the sidebar hides and shows a desk booking', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Views Filter');
        const schedule = new ScheduleViewsPage(staffPage);
        const { from, to } = dayBounds(0);

        await releaseAsset(staffApi, 'desk', desk.id, from, to);
        const created = await createDeskBookingViaApi(staffApi, {
            desk,
            title,
            ...middayOn(0),
        });

        try {
            await schedule.open('day');
            await expect(schedule.dayBooking(title)).toBeVisible({ timeout: 30_000 });

            await schedule.setTypeFilter('desk', false);
            await expect(schedule.dayBooking(title)).toHaveCount(0);

            await schedule.setTypeFilter('desk', true);
            await expect(schedule.dayBooking(title)).toBeVisible();
        } finally {
            await deleteBooking(staffApi, created.id);
        }
    });
});

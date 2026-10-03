import { Page } from '@playwright/test';
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    releaseAsset,
} from '../../../../e2e/support/api';
import {
    lockerForWorker,
    lockerSlot,
    lockerWindow,
} from '../../../../e2e/support/locker/locker.api';
import {
    LOCKER_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/locker/locker.settings';
import { LockerFixture } from '../../../../e2e/support/locker/locker.seed';
import { LockerForm } from '../../../../e2e/support/locker/locker-form.page';

async function createLockerBooking(
    page: Page,
    fixture: LockerFixture,
    workerIndex: number,
) {
    const slot = lockerSlot(workerIndex);
    const form = new LockerForm(page);
    await form.open();
    await form.setBuilding(fixture.building_name);
    await form.setDate(slot.date_ms);
    await form.setAllDay(false);
    await form.setStartTime(`${9 + workerIndex}`.padStart(2, '0') + ':00');
    await form.setDuration(60);
    await form.selectLocker(fixture.bank.name, fixture.locker.name);
    const response = await form.confirmAndSend();
    return { response, slot };
}

test.describe('Workplace locker booking', () => {
    test.fixme('LOCK-01: opens the Locker booking flow and loads its controls', async ({
        staffPage,
    }, testInfo) => {
        const fixture = await lockerForWorker(testInfo.parallelIndex);
        await useSettings(staffPage, LOCKER_BASE_SETTINGS);

        const form = new LockerForm(staffPage);
        await form.open();
        await expect(form.buildingSelect).toBeVisible();
        await expect(form.dateButton).toBeVisible();
        await expect(form.allDay).toBeVisible();
        await expect(form.startTimeTrigger).toBeVisible();
        await expect(form.durationTrigger).toBeVisible();
        await form.openLockerSelection();
        await expect(
            form.bankButtons.filter({ hasText: fixture.bank.name }),
        ).toBeVisible();
    });

    test.fixme('LOCK-03: creates a Locker booking through the UI', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const fixture = await lockerForWorker(testInfo.parallelIndex);
        const { from, to } = lockerWindow();
        await releaseAsset(staffApi, 'locker', fixture.locker.id, from, to);
        await useSettings(staffPage, LOCKER_BASE_SETTINGS);

        let booking_id: number | undefined;
        try {
            const created = await createLockerBooking(
                staffPage,
                fixture,
                testInfo.parallelIndex,
            );
            expect(created.response.ok()).toBe(true);
            booking_id = (await created.response.json()).id;
            expect(booking_id).toBeTruthy();
            await expect(staffPage).toHaveURL(/#\/book\/locker\/success/);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test.fixme('LOCK-04: independently verifies the created Locker booking through the API', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const fixture = await lockerForWorker(testInfo.parallelIndex);
        const { from, to } = lockerWindow();
        await releaseAsset(staffApi, 'locker', fixture.locker.id, from, to);
        await useSettings(staffPage, LOCKER_BASE_SETTINGS);

        let booking_id: number | undefined;
        try {
            const created = await createLockerBooking(
                staffPage,
                fixture,
                testInfo.parallelIndex,
            );
            expect(created.response.ok()).toBe(true);
            booking_id = (await created.response.json()).id;
            const stored = await getBooking(staffApi, booking_id!);
            const user = await currentUser(staffApi);

            expect(stored.booking_type).toBe('locker');
            expect(stored.asset_id).toBe(fixture.locker.id);
            if (stored.asset_name !== undefined) {
                expect(stored.asset_name).toBe(fixture.locker.name);
            }
            expect(stored.user_email).toBe(user.email);
            expect(stored.booking_start).toBe(created.slot.start);
            expect(stored.booking_end).toBe(created.slot.end);
            expect(stored.deleted).toBeFalsy();
            expect(stored.rejected).toBeFalsy();
            expect(stored.zones).toContain(fixture.zone_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});

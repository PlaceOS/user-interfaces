// Setting: lockers.available_period (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumer: libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts.
// The locker filters date field uses `available_period` as its `to` bound. The
// locker picker is opened, the date menu is inspected, then closed unchanged.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    type Audit,
    dayEnabled,
    LOCKER,
    prepareBooking,
    test,
} from '../support/settings-harness';

test.describe.configure({ timeout: 120_000 });

test.use({ readOnlyTimezone: 'Etc/UTC' });

async function openLockerPicker(page: Page, audit: Audit, available_period: number) {
    const fixture = await prepareBooking(page, audit, {
        ...LOCKER,
        'app.lockers.available_period': available_period,
    });
    // The filter drawer is only reachable from the mobile layout; this view
    // only exposes the filters and does not create a locker booking.
    await page.setViewportSize({ width: 600, height: 1000 });
    await page.goto('/#/book/locker/form');
    await fixture.ready();
    const form = page.locator('new-locker-form-details');
    await expect(form).toBeVisible();
    await form.locator('button[name="add-locker"]').click();
    const modal = page.locator('locker-select-modal');
    await expect(modal).toBeVisible();
    const filters = modal.locator('locker-filters');
    if (!(await filters.isVisible().catch(() => false))) {
        await modal
            .locator('button')
            .filter({
                has: page.locator('icon', {
                    hasText: /^\s*filter_list\s*$/,
                }),
            })
            .click();
    }
    await expect(filters).toBeVisible();
    return filters;
}

test(
    'lockers.available_period 2 disables days past the configured window',
    async ({ staffPage, audit }) => {
        const filters = await openLockerPicker(staffPage, audit, 2);
        expect(await dayEnabled(staffPage, filters, 2)).toBe(true);
        expect(await dayEnabled(staffPage, filters, 3)).toBe(false);
    },
);

// The filter's last selectable day is endOfDay(today + available_period)
// (locker-filters.component.ts); the default when unset is 90.
test(
    'lockers.available_period 10 allows the tenth day and disables the eleventh',
    async ({ staffPage, audit }) => {
        const filters = await openLockerPicker(staffPage, audit, 10);
        expect(await dayEnabled(staffPage, filters, 10)).toBe(true);
        expect(await dayEnabled(staffPage, filters, 11)).toBe(false);
    },
);

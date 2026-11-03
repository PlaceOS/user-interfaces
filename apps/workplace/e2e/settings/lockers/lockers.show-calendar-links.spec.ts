import { expect } from '../../../../../e2e/support/fixtures';
import {
    LOCKER,
    prepareBooking,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// locker-flow-success.component.ts; data from sessionStorage
// PLACEOS.last_booked_booking (booking-form.service.ts).

test.describe('lockers.show_calendar_links', () => {
    for (const enabled of [true, false]) {
        test('lockers.show_calendar_links ' + enabled + ' on the locker success page', async ({ staffPage, audit }) => {
            const fixture = await prepareBooking(staffPage, audit, { ...LOCKER, 'app.lockers.show_calendar_links': enabled });
            const start = Math.floor(Date.now() / 1000) + 24 * 3600;
            await staffPage.addInitScript((value) => sessionStorage.setItem('PLACEOS.last_booked_booking', value),
                JSON.stringify({
                    id: 'e2e-settings-locker', booking_type: 'locker', title: 'E2E Synthetic Locker Booking',
                    asset_id: 'e2e-settings-locker-1', asset_name: 'E2E Synthetic Locker 3',
                    booking_start: start, booking_end: start + 3600, zones: [], extension_data: {},
                }));
            await staffPage.goto('/#/book/locker/success');
            await fixture.ready();
            const page = staffPage.locator('locker-flow-success');
            await expect(page).toHaveCount(1);
            // The unstyled host contains an absolute-positioned panel; assert
            // the rendered panel and seeded booking, not the host's empty box.
            await expect(page.locator(':scope > div')).toBeVisible();
            await expect(page.getByRole('heading')).toBeVisible();
            await expect(page.getByRole('heading')).toContainText('E2E Synthetic Locker 3');
            for (const name of ['locker-outlook-link', 'locker-google-link', 'locker-ical-link']) {
                const link = page.locator('a[name="' + name + '"]');
                await expect(link).toHaveCount(enabled ? 1 : 0);
                if (enabled) await expect(link).toBeVisible();
            }
            if (enabled) {
                // Never clicked: target=_blank external calendar links.
                await expect(page.locator('a[name="locker-outlook-link"]')).toHaveAttribute('href', /^https:\/\/outlook\./);
                await expect(page.locator('a[name="locker-google-link"]')).toHaveAttribute('href', /^https:\/\/calendar\.google\.com\//);
                await expect(page.locator('a[name="locker-ical-link"]')).toHaveAttribute('href', /^data:text\/calendar/);
            }
            await expect(page.locator('a[name="locker-confirm-continue"]')).toBeVisible();
        });
    }
});

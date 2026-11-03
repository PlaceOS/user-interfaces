import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
/** Public time-field options; calendar helper selects tomorrow without submitting. */
async function visitorTimes(page: Page, form: InviteVisitorForm) {
    const tomorrow = new Date(); tomorrow.setUTCDate(tomorrow.getUTCDate() + 1); tomorrow.setUTCHours(12, 0, 0, 0);
    await form.setDate(tomorrow.valueOf());
    await form.root.locator('a-time-field[name="time"] button[time-field]').click();
    const options = page.locator('.cdk-overlay-container button[data-time]');
    await expect(options.first()).toBeVisible();
    const values = await options.evaluateAll((elements) => elements.map((element) => element.getAttribute('data-time')!));
    await page.keyboard.press('Escape');
    return values.map((value) => {
        const [h, m] = value.split(':').map(Number);
        return h * 60 + m;
    });
}

for (const enabled of [false, true]) {
    test('bookings.bookable_hours ' + enabled + ' restricts visitor start-time choices through the fallback',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, {
                'app.visitors.bookable_hours': null,
                'app.bookings.bookable_hours': enabled ? { start: 9, end: 17 } : null,
                'app.visitors.min_duration': 30,
            });
            const times = await visitorTimes(staffPage, form);
            expect(times.length).toBeGreaterThan(0);
            if (enabled) {
                expect(Math.min(...times)).toBe(9 * 60);
                expect(Math.max(...times)).toBeLessThan(17 * 60);
            } else {
                expect(Math.min(...times)).toBeLessThan(9 * 60);
                expect(Math.max(...times)).toBeGreaterThan(17 * 60);
            }
            await untouchedVisitor(form);
        });
}

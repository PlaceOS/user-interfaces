import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
async function tomorrowRoom(page: Page, details: ReturnType<Page['locator']>) {
    const tomorrow = new Date(); tomorrow.setUTCDate(tomorrow.getUTCDate()+1); tomorrow.setUTCHours(12,0,0,0);
    await details.locator('date-field button').first().click();
    await pickCalendarDay(page, page.locator('.cdk-overlay-container date-calendar'), tomorrow.valueOf(), { closes_on_pick: true });
}
// MeetingFlowDetailsComponent passes events.bookable_hours to TimeField and duration end_time.
// It does not bind min_duration on TimeField: default 0 leaves the range end
// inclusive (time-field.component.ts generateTimeOptions). Assert exact endpoints;
// this observes offered start times, not booking submission or end-time validation.
for (const range of [null, {start: 6, end: 11}, {start: 9, end: 17}]) {
    test('room settings: events.bookable_hours ' + (range ? range.start+'-'+range.end : 'unset') + ' bounds tomorrow start options', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.bookable_hours': range });
        await tomorrowRoom(staffPage, details);
        await details.locator('time-field[name="time"] button[time-field]').click();
        const options = staffPage.locator('.cdk-overlay-container button[data-time]');
        await expect(options.first()).toBeVisible();
        const times = await options.evaluateAll(rows => rows.map(row => {const [h,m]=(row.getAttribute('data-time')!).split(':').map(Number); return h*60+m;}));
        expect(times.length).toBeGreaterThan(0);
        if (range) { expect(Math.min(...times)).toBe(range.start*60); expect(Math.max(...times)).toBe(range.end*60); }
        else { expect(Math.min(...times)).toBe(0); expect(Math.max(...times)).toBeGreaterThan(17*60); }
        await staffPage.keyboard.press('Escape'); await expect(options).toHaveCount(0);
        await untouchedRoom(staffPage);
    });
}

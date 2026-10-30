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
async function startTimes(page: Page, details: ReturnType<Page['locator']>) {
    await details.locator('time-field[name="time"] button[time-field]').click();
    const options = page.locator('.cdk-overlay-container button[data-time]');
    await expect(options.first()).toBeVisible();
    const times = await options.evaluateAll(rows => rows.map(row => {const [h,m]=(row.getAttribute('data-time')!).split(':').map(Number); return h*60+m;}));
    await page.keyboard.press('Escape'); await expect(options).toHaveCount(0);
    return times;
}
// MeetingFlowDetailsComponent passes events.bookable_hours to TimeField and duration end_time.
// It does not bind min_duration on TimeField: default 0 leaves the range end
// inclusive (time-field.component.ts generateTimeOptions).
// These observe offered start times, not booking submission or end-time validation.
for (const range of [null, {start: 6, end: 11}, {start: 9, end: 17}]) {
    test('room settings: events.bookable_hours ' + (range ? range.start+'-'+range.end : 'unset') + ' bounds tomorrow start options', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.bookable_hours': range });
        await tomorrowRoom(staffPage, details);
        const times = await startTimes(staffPage, details);
        expect(times.length).toBeGreaterThan(0);
        if (range) { expect(Math.min(...times)).toBe(range.start*60); expect(Math.max(...times)).toBeLessThanOrEqual(range.end*60); }
        else { expect(Math.min(...times)).toBe(0); expect(Math.max(...times)).toBeGreaterThan(17*60); }
        await untouchedRoom(staffPage);
    });
}
test('room settings: events.bookable_hours 9-17 offers a start at closing time (current behaviour, no duration fits)', async ({ staffPage, audit }) => {
    const details = await openRoom(staffPage, audit, { 'app.events.bookable_hours': {start: 9, end: 17} });
    await tomorrowRoom(staffPage, details);
    const times = await startTimes(staffPage, details);
    expect(Math.max(...times)).toBe(17*60);
    await untouchedRoom(staffPage);
});

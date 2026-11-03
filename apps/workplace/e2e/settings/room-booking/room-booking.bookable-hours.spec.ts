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
// MeetingFlowDetailsComponent passes events.bookable_hours to TimeField and duration end_time,
// and its shortest duration (events.min_duration or the shortest custom option) as
// min_duration, so the last start offered is range.end minus that duration, rounded
// down to the 15-minute step (time-field.component.ts).
const STEP = 15;
const MIN_DURATION = 30;
const durations = { 'app.events.min_duration': MIN_DURATION, 'app.events.custom_duration_options': [] };
const lastStart = (end: number) => Math.floor((end*60 - MIN_DURATION)/STEP)*STEP;
// These observe offered start times, not booking submission or end-time validation.
for (const range of [null, {start: 6, end: 11}, {start: 9, end: 17}]) {
    test('room settings: events.bookable_hours ' + (range ? range.start+'-'+range.end : 'unset') + ' bounds tomorrow start options', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.bookable_hours': range, ...durations });
        await tomorrowRoom(staffPage, details);
        const times = await startTimes(staffPage, details);
        expect(times.length).toBeGreaterThan(0);
        if (range) { expect(Math.min(...times)).toBe(range.start*60); expect(Math.max(...times)).toBe(lastStart(range.end)); }
        else { expect(Math.min(...times)).toBe(0); expect(Math.max(...times)).toBeGreaterThan(17*60); }
        await untouchedRoom(staffPage);
    });
}
// PPT-2872
test('room settings: events.bookable_hours 9-17 does not offer a start at closing time, when no duration fits', async ({ staffPage, audit }) => {
    const details = await openRoom(staffPage, audit, { 'app.events.bookable_hours': {start: 9, end: 17}, ...durations });
    await tomorrowRoom(staffPage, details);
    const times = await startTimes(staffPage, details);
    expect(times).not.toContain(17*60);
    expect(Math.max(...times)).toBe(lastStart(17));
    await untouchedRoom(staffPage);
});

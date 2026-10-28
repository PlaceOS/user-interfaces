
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowDetailsComponent end_date = endOfDay(today + allowed_future_days).
for (const days of [7, 8]) {
    test('room settings: events.allowed_future_days ' + days + ' allows boundary day and disables next day', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.allowed_future_days': days });
        await details.locator('date-field button').first().click();
        const calendar = staffPage.locator('.cdk-overlay-container date-calendar');
        await expect(calendar).toBeVisible();
        const indices = () => calendar.evaluate((element, days) => {
            const c=(window as Debug).ng?.getComponent(element) as {displayed_dates(): {id:number}[]} | undefined;
            if (!c) throw new Error('calendar debug API required');
            const target=new Date(); target.setUTCDate(target.getUTCDate()+days); target.setUTCHours(0,0,0,0);
            const beyond=target.valueOf()+86400000;
            return {last:c.displayed_dates().findIndex(d=>d.id===target.valueOf()), beyond:c.displayed_dates().findIndex(d=>d.id===beyond)};
        }, days);
        let grid = await indices();
        // Near month end the 42-day grid lacks a boundary day: move forward one month.
        // Button names are reversed in date-calendar.component.ts: schedule-previous-month calls changeMonth(1) (forward).
        if (grid.last < 0 || grid.beyond < 0) {
            await calendar.locator('button[name="schedule-previous-month"]').click();
            await expect.poll(async () => { const g = await indices(); return g.last >= 0 && g.beyond >= 0; }).toBe(true);
            grid = await indices();
        }
        // Fail closed if the grid still lacks either boundary.
        expect(grid.last).toBeGreaterThanOrEqual(0); expect(grid.beyond).toBeGreaterThanOrEqual(0);
        const cells=calendar.locator('button[name="schedule-set-date"]');
        await expect(cells.nth(grid.last)).toBeEnabled(); await expect(cells.nth(grid.beyond)).toBeDisabled();
        await cells.nth(grid.last).click(); await expect(calendar).toHaveCount(0);
        await untouchedRoom(staffPage);
    });
}

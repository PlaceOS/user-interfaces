
import { expect } from '../../../../../e2e/support/fixtures';
import { openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// DateCalendarComponent reads week_start; rendered weekday order must change.
for (const offset of [0,1]) {
    test('general settings: week_start '+offset+' reorders current room-calendar weekdays', async ({staffPage,audit}) => {
        const details=await openRoom(staffPage,audit,{'app.week_start':offset});
        await details.locator('date-field button').first().click();
        const calendar=staffPage.locator('.cdk-overlay-container date-calendar');
        await expect(calendar).toBeVisible();
        const labels=calendar.locator(':scope > div > div').nth(1).locator(':scope > div');
        await expect(labels).toHaveText(offset===0?['Sun','Mon','Tue','Wed','Thu','Fri','Sat']:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']);
        await expect(calendar.locator('button[name="schedule-set-date"]')).toHaveCount(42);
        await staffPage.keyboard.press('Escape'); await expect(calendar).toHaveCount(0);
        await untouchedRoom(staffPage);
    });
}
